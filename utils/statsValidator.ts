import { UserStats } from '../types';

/**
 * Retourne les statistiques par défaut pour un nouvel utilisateur
 */
export function getDefaultStats(): UserStats {
  return {
    totalDictations: 0,
    totalDMI: 0,
    totalDictationTime: 0,
    totalWords: 0,
    lastActivity: new Date().toISOString(),
    accountCreated: new Date().toISOString()
  };
}

/**
 * Valide et normalise les statistiques récupérées de Firebase
 * Garantit que toutes les données correspondent au schéma UserStats
 * Corrige les champs manquants avec des valeurs par défaut
 *
 * @param stats - Données brutes récupérées de Firestore
 * @returns Statistiques validées et normalisées
 */
export function validateStatsSchema(stats: any): UserStats {
  if (!stats || typeof stats !== 'object') {
    console.warn('Stats invalides ou manquantes, retour aux valeurs par défaut');
    return getDefaultStats();
  }

  // Validation et normalisation de chaque champ
  const validated: UserStats = {
    totalDictations: validateNumber(stats.totalDictations, 0),
    totalDMI: validateNumber(stats.totalDMI, 0),
    totalDictationTime: validateNumber(stats.totalDictationTime, 0),
    totalWords: validateNumber(stats.totalWords, 0),
    lastActivity: validateISODate(stats.lastActivity),
    accountCreated: validateISODate(stats.accountCreated)
  };

  // Log si des anciennes propriétés non utilisées sont détectées
  const knownFields = new Set([
    'totalDictations',
    'totalDMI',
    'totalDictationTime',
    'totalWords',
    'lastActivity',
    'accountCreated'
  ]);

  const unknownFields = Object.keys(stats).filter(key => !knownFields.has(key));
  if (unknownFields.length > 0) {
    console.warn(`Anciens champs détectés et ignorés: ${unknownFields.join(', ')}`);
  }

  return validated;
}

/**
 * Valide qu'une valeur est un nombre valide
 */
function validateNumber(value: any, defaultValue: number): number {
  if (typeof value === 'number' && !isNaN(value) && isFinite(value) && value >= 0) {
    return value;
  }

  // Tenter de convertir si c'est une chaîne
  if (typeof value === 'string') {
    const parsed = parseInt(value, 10);
    if (!isNaN(parsed) && isFinite(parsed) && parsed >= 0) {
      return parsed;
    }
  }

  return defaultValue;
}

/**
 * Valide qu'une valeur est une date ISO valide
 */
function validateISODate(value: any): string {
  if (typeof value === 'string') {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      return value;
    }
  }

  // Valeur par défaut: date actuelle
  return new Date().toISOString();
}

/**
 * Vérifie si les statistiques ont le schéma correct
 * Utile pour détecter si une migration est nécessaire
 */
export function hasCorrectSchema(stats: any): boolean {
  if (!stats || typeof stats !== 'object') {
    return false;
  }

  const requiredFields = ['totalDictations', 'totalDMI', 'lastActivity'];
  const hasAllRequired = requiredFields.every(field => field in stats);

  if (!hasAllRequired) {
    return false;
  }

  // Vérifier les types
  const typesCorrect =
    typeof stats.totalDictations === 'number' &&
    typeof stats.totalDMI === 'number' &&
    typeof stats.lastActivity === 'string';

  return typesCorrect;
}
