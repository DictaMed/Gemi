export enum AppMode {
  NORMAL = 'normal',
  TEST = 'test',
  DMI = 'dmi',
}

export enum AudioFormat {
  WAV = 'wav',
  MP3 = 'mp3',
  OGG = 'ogg',
}

export interface UserCredentials {
  login: string;
  accessCode: string;
  uid?: string; // Ajout de l'ID Firebase unique pour lier à la BDD
}

export interface UserStats {
  totalDictations: number;
  totalDMI: number;
  lastActivity: string; // ISO Date
  accountCreated?: string;
}

export interface PatientInfo {
  id: string;
  name: string;
}

export interface AudioData {
  part1: Blob | null;
  part2: Blob | null;
  part3: Blob | null;
  part4: Blob | null;
}

export enum RecordingStatus {
  IDLE = 'Prêt',
  RECORDING = 'En cours',
  PAUSED = 'Pausé',
  RECORDED = 'Enregistré',
}

export interface WebhookPayload {
  mode: string;
  user: {
    login: string;
  };
  patient: {
    id: string;
    name: string;
  };
  audio: {
    partie_1: string | null;
    partie_2: string | null;
    partie_3: string | null;
    partie_4: string | null;
  };
  audio_format: string;
  timestamp: string;
}

export interface DMIPayload {
  mode: string;
  user: {
    login: string;
  };
  text: string;
  images: string[]; // Base64 strings
  timestamp: string;
}