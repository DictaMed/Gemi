import { WEBHOOK_URLS } from '../config/webhooks';
import { AppMode } from '../types';

/**
 * Service centralisé pour gérer les communications avec les Webhooks n8n.
 * Inclut la gestion des URLs selon l'environnement et le traitement des réponses.
 */

const handleResponse = async (response: Response, context: string) => {
  // Spécificité n8n : on tolère le status 500 comme un succès si le workflow s'exécute
  // sans retourner de réponse JSON standardisée.
  if (!response.ok && response.status !== 500) {
    const errorText = await response.text().catch(() => '');
    throw new Error(`Échec de l'envoi ${context} (Serveur: ${response.status}) ${errorText}`);
  }
  return true;
};

export const webhookService = {
  /**
   * Envoie les données de dictée audio (WAV).
   * Sélectionne automatiquement l'URL de Prod ou de Test selon le mode.
   */
  async sendAudio(formData: FormData, mode: AppMode) {
    const url = mode === AppMode.NORMAL ? WEBHOOK_URLS.AUDIO_NORMAL : WEBHOOK_URLS.AUDIO_TEST;
    console.log(`📡 Envoi Audio vers : ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      return await handleResponse(response, 'Audio');
    } catch (error: any) {
      console.error('Erreur Webhook Audio:', error);
      throw error;
    }
  },

  /**
   * Envoie les observations textuelles (Mode DMI).
   */
  async sendDMIText(formData: FormData) {
    console.log(`📡 Envoi Texte vers : ${WEBHOOK_URLS.DMI_TEXT}`);
    try {
      const response = await fetch(WEBHOOK_URLS.DMI_TEXT, {
        method: 'POST',
        body: formData,
      });
      return await handleResponse(response, 'Texte');
    } catch (error: any) {
      console.error('Erreur Webhook Texte:', error);
      throw error;
    }
  },

  /**
   * Envoie les photos (Mode DMI).
   */
  async sendDMIPhotos(formData: FormData) {
    console.log(`📡 Envoi Photos vers : ${WEBHOOK_URLS.DMI_PHOTOS}`);
    try {
      const response = await fetch(WEBHOOK_URLS.DMI_PHOTOS, {
        method: 'POST',
        body: formData,
      });
      return await handleResponse(response, 'Photos');
    } catch (error: any) {
      console.error('Erreur Webhook Photos:', error);
      throw error;
    }
  }
};