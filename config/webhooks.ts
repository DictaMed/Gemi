/**
 * Configuration centrale des Webhooks.
 * Ce fichier est l'unique source de vérité pour les liens de destination des données.
 */

export const WEBHOOK_URLS = {
  // ---------------------------------------------------------
  // SECTION AUDIO (Dictée Médicale)
  // ---------------------------------------------------------
  
  // Mode Normal : Envoi vers le serveur de production Audio
  AUDIO_NORMAL: 'https://n8n.srv1104707.hstgr.cloud/webhook/Audio',
  
  // Mode Test : Simulation
  AUDIO_TEST: 'https://n8n.srv1104707.hstgr.cloud/webhook-test/Audio',

  // ---------------------------------------------------------
  // SECTION DMI (Dossier Médical Informatisé)
  // ---------------------------------------------------------

  // Webhook pour l'envoi de texte uniquement (Observations)
  DMI_TEXT: 'https://n8n.srv1104707.hstgr.cloud/webhook/DMI-Text',

  // Webhook pour l'envoi de photos uniquement
  DMI_PHOTOS: 'https://n8n.srv1104707.hstgr.cloud/webhook/Photos',
};