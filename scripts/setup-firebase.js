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

/*
const admin = require('firebase-admin');
const serviceAccount = require("../serviceAccountKey.json");

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

// REMPLACER PAR VOS DONNÉES REELLES POUR TESTER
// setupPraticien('VOTRE_UID_FIREBASE', 'votre.email@exemple.com');
*/

console.log("📌 Script setup-firebase.js prêt. Décommentez le code et ajoutez votre serviceAccountKey.json pour l'utiliser.");
