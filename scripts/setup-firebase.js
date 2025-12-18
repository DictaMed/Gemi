/**
 * SCRIPT D'INITIALISATION FIREBASE (Terminal VS Code)
 * Ce script permet de créer manuellement la structure d'un utilisateur
 * pour les statistiques.
 *
 * Instructions:
 * 1. Installez firebase-admin: npm install firebase-admin
 * 2. Téléchargez votre clé de service (Paramètres Projet > Comptes de service)
 * 3. Nommez-la serviceAccountKey.json
 * 4. Lancez: node scripts/setup-firebase.js
 */

import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const serviceAccount = JSON.parse(readFileSync(join(__dirname, 'serviceAccountKey.json'), 'utf8'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function setupPraticien(uid, email) {
  const userRef = db.collection('users').doc(uid);
  
  await userRef.set({
    login: email,
    totalDictations: 0,
    totalDMI: 0,
    totalDictationTime: 0,
    totalWords: 0,
    lastActivity: new Date().toISOString(),
    accountCreated: new Date().toISOString(),
    isPraticien: true
  });

  console.log(`✅ Structure initialisée pour Dr. ${email}`);
}

// Exécution de l'initialisation
setupPraticien('gtaMfFify5QOZNgNOExlIlVfhOX2', 'akio963@gmail.com')
  .then(() => {
    console.log('✅ Initialisation terminée avec succès!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    process.exit(1);
  });
