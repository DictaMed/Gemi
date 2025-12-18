import React, { useEffect } from 'react';
import { Mic, Square, Pause, Play, CheckCircle2, RotateCcw } from 'lucide-react';
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

  useEffect(() => {
    onBlobChange(audioBlob);
  }, [audioBlob, onBlobChange]);

  useEffect(() => {
    if (resetTrigger && resetTrigger > 0) {
      deleteRecording();
    }
  }, [resetTrigger]);

  const getContainerStyles = () => {
    switch (status) {
      case RecordingStatus.RECORDING: 
        return 'bg-white border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)] ring-1 ring-rose-100';
      case RecordingStatus.PAUSED: 
        return 'bg-amber-50/30 border-amber-300';
      case RecordingStatus.RECORDED: 
        return 'bg-emerald-50/20 border-emerald-500/50 shadow-sm';
      default: 
        return 'bg-white border-slate-200 hover:border-slate-300 shadow-sm';
    }
  };

  return (
    <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 mb-5 relative group ${getContainerStyles()}`}>
      
      {/* En-tête de la carte */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <div className="flex items-start gap-4">
          {/* Icône de statut */}
          <div className={`
            w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300
            ${status === RecordingStatus.RECORDED ? 'bg-emerald-500 text-white shadow-emerald-200 shadow-lg scale-100' : ''}
            ${status === RecordingStatus.RECORDING ? 'bg-rose-500 text-white shadow-rose-200 shadow-lg scale-110 recording-pulse' : ''}
            ${status === RecordingStatus.PAUSED ? 'bg-amber-400 text-white shadow-amber-200 shadow-lg' : ''}
            ${status === RecordingStatus.IDLE ? 'bg-slate-100 text-slate-400' : ''}
          `}>
             {status === RecordingStatus.RECORDED ? <CheckCircle2 size={24} strokeWidth={3} /> : <Mic size={24} strokeWidth={2.5} />}
          </div>
          
          <div className="pt-0.5">
            <div className="flex items-center gap-2.5">
               {sectionNumber && (
                 <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                   Partie {sectionNumber}
                 </span>
               )}
            </div>
            <h4 className="font-bold text-slate-800 text-lg leading-tight mt-1">{title}</h4>
            {subtitle && <p className="text-slate-500 text-xs font-medium mt-1 leading-relaxed max-w-lg">{subtitle}</p>}
          </div>
        </div>

        {/* Timer Digital */}
        <div className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-2xl font-bold tracking-widest border transition-colors self-start sm:self-center
          ${isRecording ? 'text-rose-600 bg-rose-50 border-rose-100' : 'text-slate-400 bg-slate-50 border-slate-100'}
        `}>
           <span className="w-2 h-2 rounded-full bg-current opacity-50"></span>
           {formatTime(duration)}
        </div>
      </div>

      {error && (
        <div className="mb-4 text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-100 flex items-center">
           <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse"></div>
           {error}
        </div>
      )}

      {/* Zone de contrôle */}
      <div className="grid grid-cols-2 sm:flex sm:gap-3 gap-3 pt-2 border-t border-slate-100/50 mt-2">
        {status === RecordingStatus.IDLE && (
          <button
            onClick={startRecording}
            className="col-span-2 sm:w-auto sm:flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mic size={20} />
            Démarrer l'enregistrement
          </button>
        )}

        {isRecording && (
          <>
            <button
              onClick={pauseRecording}
              className="bg-amber-400 hover:bg-amber-500 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-amber-100"
            >
              <Pause size={20} fill="currentColor" />
              Pause
            </button>
            <button
              onClick={stopRecording}
              className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-slate-300"
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
              className="bg-rose-500 hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-rose-100"
            >
              <Mic size={20} />
              Reprendre
            </button>
            <button
              onClick={stopRecording}
              className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-slate-300"
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
              className="col-span-1 sm:flex-1 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors"
            >
              <Play size={20} fill="currentColor" />
              Réécouter
            </button>
            <button
              onClick={deleteRecording}
              className="col-span-1 sm:w-auto bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors group/trash"
            >
              <RotateCcw size={20} className="group-hover/trash:-rotate-180 transition-transform duration-500" />
              Refaire
            </button>
          </>
        )}
      </div>
    </div>
  );
};