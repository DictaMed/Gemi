/**
 * SCRIPT D'INITIALISATION FIRESTORE
 * A exécuter avec Node.js : 'node scripts/init-db.js'
 * 
 * Note: Ce script nécessite 'firebase-admin' installé localement.
 * Vous devrez ajouter votre fichier serviceAccountKey.json pour l'utiliser.
 */

/*
const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function initUser(uid, login) {
  const userRef = db.collection('users').doc(uid);
  await userRef.set({
    login: login,
    totalDictations: 0,
    totalDictationTime: 0,
    totalDMI: 0,
    totalWords: 0,
    lastActivity: new Date().toISOString(),
    accountCreated: new Date().toISOString(),
    isPraticien: true
  }, { merge: true });
  console.log(`Utilisateur ${login} initialisé.`);
}

// Exemple d'usage:
// initUser('LE_UID_DU_DOCTEUR', 'dr.monastir@dictamed.tn');
*/

console.log("Fichier script créé. Pour l'utiliser, configurez firebase-admin et vos clés de service.");
