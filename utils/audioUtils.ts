/**
 * Converts a Blob to a Base64 string suitable for JSON transmission.
 * Strips the Data URI prefix (e.g., "data:audio/webm;base64,").
 */
export const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      // Remove the data URL prefix to get raw base64
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

/**
 * Formats seconds into MM:SS format
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Helper to write string to DataView
 */
function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Encodes AudioBuffer to WAV Blob
 */
function bufferToWav(abuffer: AudioBuffer): Blob {
  const numOfChan = abuffer.numberOfChannels;
  const length = abuffer.length * numOfChan * 2 + 44;
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  const channels = [];
  let i;
  let sample;
  let offset = 0;
  let pos = 0;

  // write RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + abuffer.length * numOfChan * 2, true);
  writeString(view, 8, 'WAVE');
  
  // write fmt sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, numOfChan, true);
  view.setUint32(24, abuffer.sampleRate, true);
  view.setUint32(28, abuffer.sampleRate * 2 * numOfChan, true);
  view.setUint16(32, numOfChan * 2, true);
  view.setUint16(34, 16, true);

  // write data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, abuffer.length * numOfChan * 2, true);

  // write interleaved data
  for(i = 0; i < abuffer.numberOfChannels; i++) {
    channels.push(abuffer.getChannelData(i));
  }

  offset = 44;
  while(pos < abuffer.length){
    for(i = 0; i < numOfChan; i++){
      // Clamp the value to [-1, 1]
      sample = Math.max(-1, Math.min(1, channels[i][pos]));
      // Convert float to 16-bit PCM
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767)|0;
      view.setInt16(offset, sample, true);
      offset += 2;
    }
    pos++;
  }

  return new Blob([buffer], { type: 'audio/wav' });
}

/**
 * Merges multiple audio blobs into a single WAV blob.
 * Decodes audio data and concatenates it.
 * Returns both the merged Blob and the total duration in seconds.
 */
export const mergeAudioBlobs = async (blobs: Blob[]): Promise<{ blob: Blob, duration: number }> => {
  if (blobs.length === 0) {
    throw new Error("Aucun blob audio à fusionner");
  }

  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  const audioContext = new AudioContext();
  const audioBuffers: AudioBuffer[] = [];

  // Decode all blobs
  for (const blob of blobs) {
    const arrayBuffer = await blob.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    audioBuffers.push(audioBuffer);
  }

  if (audioBuffers.length === 0) {
     throw new Error("Impossible de décoder l'audio");
  }

  // Calculate total length
  const totalLength = audioBuffers.reduce((acc, buf) => acc + buf.length, 0);
  
  // Use properties of the first buffer
  const numberOfChannels = audioBuffers[0].numberOfChannels;
  const sampleRate = audioBuffers[0].sampleRate;
  
  const resultBuffer = audioContext.createBuffer(numberOfChannels, totalLength, sampleRate);

  // Merge
  let offset = 0;
  for (const buf of audioBuffers) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
       if (channel < buf.numberOfChannels) {
           resultBuffer.getChannelData(channel).set(buf.getChannelData(channel), offset);
       }
    }
    offset += buf.length;
  }

  return { 
    blob: bufferToWav(resultBuffer),
    duration: resultBuffer.duration
  };
};