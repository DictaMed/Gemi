/**
 * Configuration centrale des Webhooks.
 * Modifiez les URLs ci-dessous pour changer les destinations des données.
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

  // Webhook pour le TEXTE (Observations, comptes rendus)
  // TODO: Remplacer par l'URL définitive une fois précisée
  DMI_TEXT: 'https://n8n.srv1104707.hstgr.cloud/webhook/DictaMed_Text_Placeholder',

  // Webhook pour les PHOTOS
  // TODO: Remplacer par l'URL définitive une fois précisée
  DMI_PHOTOS: 'https://n8n.srv1104707.hstgr.cloud/webhook/DictaMed_Photos_Placeholder',
};
