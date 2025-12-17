# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**DictaMed** is a medical dictation web application built with React + TypeScript that enables healthcare professionals to:
- Record structured audio dictations with patient information (4-part recording system)
- Create DMI (Dossier Médical Informatisé) entries with text and images
- Track usage statistics (dictation count, time, word count)
- Test functionality in a safe demo mode

**Important**: The user interface is in French. When modifying UI text or creating new components, maintain French language consistency.

## Development Commands

```bash
# Initial setup
npm install                    # Install dependencies
# Create .env.local and add:   GEMINI_API_KEY=your_key_here

# Development
npm run dev                    # Start Vite dev server with HMR (http://localhost:5173)

# Production build
npm run build                  # Run TypeScript compiler + Vite build → dist/
npm run preview                # Preview production build locally

# Deployment
npm run deploy                 # Deploy to GitHub Pages (runs build + gh-pages)
```

**Note**: There is no test framework configured. No `npm test` command exists.

## Architecture Overview

### Application Structure

**Entry Flow**: [index.html](index.html) → [index.tsx](index.tsx) → [App.tsx](App.tsx)

**Routing**: Tab-based navigation managed in [App.tsx](App.tsx) via `activeTab` state (not React Router)
- 7 tabs: Dictée, DMI, Stats, Mode Test, Guide, Aide, Contact
- [Navbar.tsx](components/Navbar.tsx) controls tab switching

### Three Operating Modes

1. **NORMAL Mode**: Production dictation → n8n webhook → backend processing
2. **TEST Mode**: Demo dictation → public Google Sheet (no authentication required)
3. **DMI Mode**: Medical document creation (text + images) → n8n webhook

Mode switching controlled in [App.tsx](App.tsx) state.

### Multi-Part Audio Recording System

**Unique Pattern**: Audio dictation split into 4 sequential parts:
1. **Part 1** - Patient demographics
2. **Part 2** - Medical history (antécédents)
3. **Part 3** - Clinical exam + biology
4. **Part 4** - Supplementary data (optional)

**Implementation**:
- 4 instances of [AudioRecorder.tsx](components/AudioRecorder.tsx) in [DictationForm.tsx](components/DictationForm.tsx)
- Each part recorded separately using [useAudioRecorder.ts](hooks/useAudioRecorder.ts) hook
- All parts merged client-side via `audioUtils.mergeAudioBlobs()` before submission
- Final WAV file sent with patient/user metadata to webhook

### Authentication System

**Dual authentication** managed in [App.tsx](App.tsx):
1. **Firebase Google OAuth** (preferred) - Sign in with Google
2. **Manual login** - Username + access code (fallback)

Both methods create Firebase Auth session. User stats tied to Firebase UID.

### Data Flow

```
Firebase Auth
    ↓
App.tsx (activeTab routing)
    ↓
    ├─→ DictationForm
    │    ├─ PatientForm (patient ID + name)
    │    ├─ AudioRecorder × 4 (record parts)
    │    ├─ mergeAudioBlobs() (combine to single WAV)
    │    └─ POST to n8n webhook → updateStats(Firestore)
    │
    ├─→ DMIForm
    │    ├─ Text input (observations)
    │    ├─ Image upload (photos)
    │    └─ POST to n8n webhook → updateStats(Firestore)
    │
    └─→ Statistics
         └─ Read Firestore (user metrics + activity chart)
```

### Backend Integration

**Webhooks** (configured in [config/webhooks.ts](config/webhooks.ts)):
- Audio processing: `https://n8n.srv1104707.hstgr.cloud/webhook/Audio`
- DMI placeholders: TODO endpoints noted in code
- Test mode: Separate Google Sheets endpoint
- Backend platform: n8n (workflow automation)

**Firebase** (configured in [config/firebase.ts](config/firebase.ts)):
- Project ID: `dictamed2025`
- Services: Authentication + Firestore
- Firestore stores user statistics only (not raw audio/documents)
- Stats: `dictationCount`, `dmiCount`, `totalTime`, `totalWords`, `activityLog`

## Critical Files

### Core Application
- [App.tsx](App.tsx) - Main component with auth state + tab routing
- [types.ts](types.ts) - TypeScript interfaces (`UserData`, `DictationData`, etc.)

### Audio Recording
- [components/DictationForm.tsx](components/DictationForm.tsx) - Orchestrates full dictation workflow
- [components/AudioRecorder.tsx](components/AudioRecorder.tsx) - Individual audio part recorder
- [hooks/useAudioRecorder.ts](hooks/useAudioRecorder.ts) - MediaRecorder API hook (start/pause/stop/playback)
- [utils/audioUtils.ts](utils/audioUtils.ts) - WAV encoding + audio blob merging

### Forms & UI
- [components/PatientForm.tsx](components/PatientForm.tsx) - Patient identification form
- [components/DMIForm.tsx](components/DMIForm.tsx) - Medical document input (text + images)
- [components/Navbar.tsx](components/Navbar.tsx) - Navigation + user status display
- [components/AuthForm.tsx](components/AuthForm.tsx) - Login component (OAuth + manual)

### Pages
- [pages/Statistics.tsx](pages/Statistics.tsx) - User dashboard with KPIs and activity chart
- [pages/Guide.tsx](pages/Guide.tsx) - User guide
- [pages/FAQ.tsx](pages/FAQ.tsx) - Frequently asked questions
- [pages/Contact.tsx](pages/Contact.tsx) - Contact information

### Configuration
- [config/firebase.ts](config/firebase.ts) - Firebase initialization
- [config/webhooks.ts](config/webhooks.ts) - Backend endpoint URLs
- [vite.config.ts](vite.config.ts) - Vite build configuration (React plugin, base path)
- [tailwind.config.js](tailwind.config.js) - Tailwind CSS configuration

## Development Notes

### Audio Recording Implementation
- Uses browser **MediaRecorder API** (requires microphone permissions)
- Audio captured as Blob, converted to WAV format in [audioUtils.ts](utils/audioUtils.ts)
- Multiple audio parts merged using `mergeAudioBlobs()` before sending
- Final FormData includes: audio file + patient info + user metadata + timestamps

### Firebase Integration
- **Authentication**: `onAuthStateChanged` listener in [App.tsx](App.tsx:34-44)
- **Firestore**: `updateStats()` function updates user metrics after successful submissions
- Stats document path: `users/{uid}/statistics`
- Activity log: Last 7 days tracked for chart display

### Styling System
- **Tailwind CSS 3.4.3** with custom configuration
- **Glassmorphism design**: Custom classes in [index.css](index.css)
  - `.glass-panel` - Main container style
  - `.glass-card` - Card components
- **Custom animations**: `pulse-ring`, `fade-in`
- **Typography**: Google Fonts "Inter"
- **Responsive**: Mobile-first design approach

### Important Constraints
- **French UI**: All user-facing text must be in French
- **No testing framework**: Add tests if needed (consider Vitest for Vite compatibility)
- **Environment variable**: `GEMINI_API_KEY` required in `.env.local`
- **Webhook dependencies**: DMI webhooks have TODO placeholders in [config/webhooks.ts](config/webhooks.ts)

## Component Patterns

### Audio Recording Flow
When modifying audio recording:
1. Check [useAudioRecorder.ts](hooks/useAudioRecorder.ts) for hook logic
2. Update [AudioRecorder.tsx](components/AudioRecorder.tsx) for UI changes
3. Modify [audioUtils.ts](utils/audioUtils.ts) for encoding/merging logic
4. Update [DictationForm.tsx](components/DictationForm.tsx) for workflow orchestration

### Adding New Statistics
When adding new user metrics:
1. Update `UserData` interface in [types.ts](types.ts)
2. Modify `updateStats()` in [App.tsx](App.tsx) or relevant form component
3. Update [pages/Statistics.tsx](pages/Statistics.tsx) to display new metrics
4. Consider Firestore data migration for existing users

### Adding New Navigation Tabs
When adding tabs to navigation:
1. Define new tab name in [App.tsx](App.tsx) `activeTab` type
2. Add tab button to [Navbar.tsx](components/Navbar.tsx)
3. Add conditional render case in [App.tsx](App.tsx) main content area
4. Create new page component in `pages/` directory if needed
