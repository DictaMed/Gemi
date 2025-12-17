import React, { useEffect } from 'react';
import { Mic, Square, Pause, Play, Trash2, CheckCircle, RotateCcw } from 'lucide-react';
import { useAudioRecorder } from '../hooks/useAudioRecorder';
import { RecordingStatus } from '../types';
import { formatTime } from '../utils/audioUtils';

interface AudioRecorderProps {
  title: string;
  subtitle?: string;
  sectionNumber?: string;
  isTestMode?: boolean;
  onBlobChange: (blob: Blob | null) => void;
  resetTrigger?: number;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({ 
  title, 
  subtitle, 
  sectionNumber, 
  isTestMode, 
  onBlobChange, 
  resetTrigger 
}) => {
  const {
    status,
    isRecording,
    isPaused,
    duration,
    audioBlob,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    deleteRecording,
    playRecording,
    error
  } = useAudioRecorder();

  // Sync blob with parent
  useEffect(() => {
    onBlobChange(audioBlob);
  }, [audioBlob, onBlobChange]);

  // Handle external reset
  useEffect(() => {
    if (resetTrigger && resetTrigger > 0) {
      deleteRecording();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetTrigger]);

  const getContainerStyles = () => {
    switch (status) {
      case RecordingStatus.RECORDING: 
        return 'bg-white border-rose-200 shadow-[0_10px_40px_-10px_rgba(244,63,94,0.3)] ring-2 ring-rose-50';
      case RecordingStatus.PAUSED: 
        return 'bg-amber-50/50 border-amber-200';
      case RecordingStatus.RECORDED: 
        return 'bg-white border-emerald-200 shadow-[0_10px_30px_-10px_rgba(16,185,129,0.2)]';
      default: 
        return 'bg-white border-slate-200 hover:border-emerald-200 shadow-sm hover:shadow-md';
    }
  };

  return (
    <div className={`p-6 rounded-3xl border transition-all duration-300 mb-6 ${getContainerStyles()}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="flex items-start gap-4">
          {status === RecordingStatus.RECORDED ? (
             <div className="bg-emerald-100 p-2 rounded-full mt-0.5">
               <CheckCircle size={24} className="text-emerald-500" />
             </div>
          ) : (
            <div className={`p-2 rounded-full mt-0.5 ${isRecording ? 'bg-rose-100 animate-pulse' : 'bg-slate-100'}`}>
              <Mic size={24} className={isRecording ? 'text-rose-600' : 'text-slate-400'} />
            </div>
          )}
          
          <div>
            <div className="flex items-center gap-2">
               {sectionNumber && <span className="text-slate-400 font-mono text-sm font-bold opacity-50">#{sectionNumber}</span>}
               <h4 className="font-bold text-slate-800 text-lg leading-tight">{title}</h4>
            </div>
            {subtitle && <p className="text-slate-500 text-sm mt-1 font-medium">{subtitle}</p>}
            
            <span className={`text-xs font-bold uppercase tracking-widest mt-1.5 inline-block px-2.5 py-1 rounded-md
              ${status === RecordingStatus.IDLE ? 'bg-slate-100 text-slate-500' : ''}
              ${status === RecordingStatus.RECORDING ? 'bg-rose-100 text-rose-700' : ''}
              ${status === RecordingStatus.PAUSED ? 'bg-amber-100 text-amber-700' : ''}
              ${status === RecordingStatus.RECORDED ? 'bg-emerald-100 text-emerald-700' : ''}
            `}>
              {status}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto bg-slate-50 px-5 py-2.5 rounded-2xl border border-slate-100">
           {isRecording && <div className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></div>}
           <span className={`font-mono text-2xl font-bold tracking-widest ${isRecording ? 'text-rose-600' : 'text-slate-700'}`}>
            {formatTime(duration)}
          </span>
        </div>
      </div>

      {error && (
        <div className="mb-4 text-sm text-red-600 bg-red-50 p-4 rounded-2xl border border-red-100 flex items-center font-medium">
           <Square size={16} className="mr-2" /> {error}
        </div>
      )}

      <div className="grid grid-cols-2 sm:flex sm:gap-4 gap-3">
        {status === RecordingStatus.IDLE && (
          <button
            onClick={startRecording}
            className="col-span-2 sm:w-auto sm:flex-1 bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 font-bold transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5"
          >
            <Mic size={20} />
            Démarrer l'enregistrement
          </button>
        )}

        {isRecording && (
          <>
            <button
              onClick={pauseRecording}
              className="bg-amber-400 hover:bg-amber-500 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors shadow-lg shadow-amber-200"
            >
              <Pause size={20} fill="currentColor" />
              Pause
            </button>
            <button
              onClick={stopRecording}
              className="bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors shadow-lg shadow-slate-300"
            >
              <Square size={20} fill="currentColor" />
              Terminer
            </button>
          </>
        )}

        {isPaused && (
          <>
            <button
              onClick={resumeRecording}
              className="bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors shadow-lg shadow-rose-200"
            >
              <Mic size={20} />
              Reprendre
            </button>
            <button
              onClick={stopRecording}
              className="bg-slate-800 hover:bg-slate-900 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors shadow-lg shadow-slate-300"
            >
              <Square size={20} fill="currentColor" />
              Terminer
            </button>
          </>
        )}

        {status === RecordingStatus.RECORDED && (
          <>
            <button
              onClick={playRecording}
              className="col-span-1 sm:flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors shadow-lg shadow-emerald-200"
            >
              <Play size={20} fill="currentColor" />
              Réécouter
            </button>
            <button
              onClick={deleteRecording}
              className="col-span-1 sm:w-auto border-2 border-slate-200 hover:border-red-200 text-slate-500 hover:text-red-600 hover:bg-red-50 py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-colors"
            >
              <RotateCcw size={20} />
              Refaire
            </button>
          </>
        )}
      </div>
    </div>
  );
};