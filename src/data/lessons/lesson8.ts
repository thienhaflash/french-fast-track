import { Lesson } from '../types';

const lesson8: Lesson = {
  id: 8,
  day: 8,
  title: "Travel Expressions",
  description: "Essential phrases for transportation, hotels, and navigating travel situations.",
  vocabulary: [
    { french: "le voyage", english: "journey/trip", pronunciation: "luh vwah-yazh" },
    { french: "le touriste", english: "tourist", pronunciation: "luh too-reest" },
    { french: "voyager", english: "to travel", pronunciation: "vwah-yah-zhay" },
    { french: "l'avion", english: "airplane", pronunciation: "lah-vee-ohn" },
    { french: "le train", english: "train", pronunciation: "luh trahn" },
    { french: "le bus", english: "bus", pronunciation: "luh boos" },
    { french: "le métro", english: "subway", pronunciation: "luh may-troh" },
    { french: "la voiture", english: "car", pronunciation: "lah vwah-toor" },
    { french: "la valise", english: "suitcase", pronunciation: "lah vah-leez" },
    { french: "le passeport", english: "passport", pronunciation: "luh pass-por" },
    { french: "réserver", english: "to reserve/book", pronunciation: "ray-zair-vay" },
    { french: "l'hôtelier", english: "hotel manager", pronunciation: "loh-tel-yay" },
    { french: "la chambre", english: "room", pronunciation: "lah shahn-br" },
    { french: "l'aéroport", english: "airport", pronunciation: "lah-ay-roh-por" },
    { french: "la gare routière", english: "bus station", pronunciation: "lah gar roo-tyair" },
    { french: "le billet", english: "ticket", pronunciation: "luh bee-yay" },
    { french: "le départ", english: "departure", pronunciation: "luh day-par" },
    { french: "l'arrivée", english: "arrival", pronunciation: "lah-ree-vay" },
    { french: "le retard", english: "delay", pronunciation: "luh ruh-tar" },
    { french: "annulé", english: "canceled", pronunciation: "ah-new-lay" }
  ],
  practiceSentences: [
    "Je voudrais réserver une chambre pour deux nuits.",
    "À quelle heure part le train pour Paris?",
    "Où est la gare routière, s'il vous plaît?",
    "Mon vol a deux heures de retard.",
    "Pouvez-vous m'aider avec ma valise?",
    "J'ai perdu mon passeport!",
    "Le métro est plus rapide que le bus.",
    "Je voyage en France pour les vacances.",
    "Le vol est annulé à cause du mauvais temps.",
    "L'arrivée est prévue à 15h30."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'voyager' mean?",
      options: ["to visit", "to travel", "to book", "to stay"],
      answer: "to travel"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais réserver une _____ pour deux nuits.' (I would like to book a room for two nights)",
      answer: "chambre"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "How do you say 'airplane' in French?",
      options: ["le train", "la voiture", "l'avion", "le bus"],
      answer: "l'avion"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Mon vol a deux heures de _____.' (My flight has a two-hour delay)",
      answer: "retard"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is 'le passeport' in English?",
      options: ["ticket", "passport", "luggage", "journey"],
      answer: "passport"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Le vol est _____ à cause du mauvais temps.' (The flight is canceled due to bad weather)",
      answer: "annulé"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'la valise' mean?",
      options: ["wallet", "suitcase", "backpack", "purse"],
      answer: "suitcase"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'À quelle heure est le _____?' (What time is the departure?)",
      answer: "départ"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is 'le métro' in English?",
      options: ["train", "bus", "subway", "taxi"],
      answer: "subway"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: '_____ est prévue à 15h30.' (The arrival is scheduled for 3:30 PM)",
      answer: "L'arrivée"
    }
  ]
};

export default lesson8; 