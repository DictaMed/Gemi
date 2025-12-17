import { useState, useRef, useCallback, useEffect } from 'react';
import { RecordingStatus } from '../types';

interface UseAudioRecorderReturn {
  status: RecordingStatus;
  isRecording: boolean;
  isPaused: boolean;
  duration: number;
  audioBlob: Blob | null;
  startRecording: () => Promise<void>;
  pauseRecording: () => void;
  resumeRecording: () => void;
  stopRecording: () => void;
  deleteRecording: () => void;
  playRecording: () => void;
  error: string | null;
}

export const useAudioRecorder = (): UseAudioRecorderReturn => {
  const [status, setStatus] = useState<RecordingStatus>(RecordingStatus.IDLE);
  const [duration, setDuration] = useState(0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);
  const timerInterval = useRef<number | null>(null);
  const startTime = useRef<number>(0);
  const totalPausedTime = useRef<number>(0);
  const audioPlayer = useRef<HTMLAudioElement | null>(null);

  const cleanup = useCallback(() => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      audioPlayer.current = null;
    }
  }, []);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const startTimer = () => {
    startTime.current = Date.now() - (duration * 1000);
    timerInterval.current = window.setInterval(() => {
      setDuration(Math.floor((Date.now() - startTime.current) / 1000));
    }, 1000);
  };

  const stopTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Determine supported mimeType
      let mimeType = 'audio/webm';
      if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
      }

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorder.current = recorder;
      audioChunks.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: mimeType });
        setAudioBlob(blob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start(100); // Collect chunks every 100ms
      setStatus(RecordingStatus.RECORDING);
      startTimer();
    } catch (err) {
      console.error(err);
      setError("Accès au microphone refusé ou non disponible.");
    }
  };

  const pauseRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'recording') {
      mediaRecorder.current.pause();
      setStatus(RecordingStatus.PAUSED);
      stopTimer();
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder.current && mediaRecorder.current.state === 'paused') {
      mediaRecorder.current.resume();
      setStatus(RecordingStatus.RECORDING);
      startTimer();
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      if (mediaRecorder.current.state !== 'inactive') {
        mediaRecorder.current.stop();
      }
      setStatus(RecordingStatus.RECORDED);
      stopTimer();
    }
  };

  const deleteRecording = () => {
    cleanup();
    setStatus(RecordingStatus.IDLE);
    setAudioBlob(null);
    setDuration(0);
    audioChunks.current = [];
    totalPausedTime.current = 0;
  };

  const playRecording = () => {
    if (audioBlob) {
      if (audioPlayer.current) {
        audioPlayer.current.pause(); // Stop existing playback
      }
      const url = URL.createObjectURL(audioBlob);
      const audio = new Audio(url);
      audioPlayer.current = audio;
      audio.play();
      audio.onended = () => {
        audioPlayer.current = null;
      };
    }
  };

  return {
    status,
    isRecording: status === RecordingStatus.RECORDING,
    isPaused: status === RecordingStatus.PAUSED,
    duration,
    audioBlob,
    startRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    deleteRecording,
    playRecording,
    error,
  };
};