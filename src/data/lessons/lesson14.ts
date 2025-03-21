import { Lesson } from '../types';

const lesson14: Lesson = {
  id: 14,
  day: 14,
  title: "Emergency Phrases",
  description: "Critical vocabulary for emergency situations and getting help when needed.",
  vocabulary: [
    { french: "urgence", english: "emergency", pronunciation: "oor-zhahns" },
    { french: "l'aide", english: "help", pronunciation: "led" },
    { french: "au secours", english: "help!", pronunciation: "oh suh-koor" },
    { french: "j'ai besoin d'aide", english: "I need help", pronunciation: "zhay buh-zwan dehd" },
    { french: "appeler", english: "to call", pronunciation: "ah-puh-lay" },
    { french: "la police", english: "police", pronunciation: "lah poh-lees" },
    { french: "les pompiers", english: "firefighters", pronunciation: "lay pom-pyay" },
    { french: "une ambulance", english: "an ambulance", pronunciation: "ewn ahm-bew-lahns" },
    { french: "l'hôpital", english: "hospital", pronunciation: "loh-pee-tal" },
    { french: "le médecin", english: "doctor", pronunciation: "luh may-duh-san" },
    { french: "la pharmacie", english: "pharmacy", pronunciation: "lah far-mah-see" },
    { french: "un accident", english: "an accident", pronunciation: "uhn ak-see-dahn" },
    { french: "une blessure", english: "an injury", pronunciation: "ewn bleh-sewr" },
    { french: "saigner", english: "to bleed", pronunciation: "seh-nyay" },
    { french: "se faire mal", english: "to hurt oneself", pronunciation: "suh fair mal" },
    { french: "j'ai mal à", english: "I have pain in", pronunciation: "zhay mal ah" },
    { french: "appeler les secours", english: "to call for help", pronunciation: "ah-puh-lay lay suh-koor" },
    { french: "le numéro d'urgence", english: "emergency number", pronunciation: "luh new-may-roh door-zhahns" },
    { french: "le danger", english: "danger", pronunciation: "luh dahn-zhay" },
    { french: "un incendie", english: "a fire", pronunciation: "uhn an-sahn-dee" }
  ],
  practiceSentences: [
    "Au secours! J'ai besoin d'aide!",
    "Appelez une ambulance, s'il vous plaît!",
    "Où est l'hôpital le plus proche?",
    "J'ai eu un accident.",
    "Il y a un incendie dans l'immeuble!",
    "Appelez les pompiers!",
    "J'ai mal à la tête.",
    "Ma jambe saigne beaucoup.",
    "Je me suis fait mal au bras.",
    "Quel est le numéro d'urgence en France?"
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'au secours' mean?",
      options: ["help!", "danger!", "fire!", "stop!"],
      answer: "help!"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'J'ai _____ d'aide.' (I need help)",
      answer: "besoin"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'une ambulance' in English?",
      options: ["a police car", "an ambulance", "a fire truck", "a taxi"],
      answer: "an ambulance"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Appelez _____, s'il vous plaît!' (Call the police, please!)",
      answer: "la police"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'l'hôpital' mean?",
      options: ["hotel", "hospital", "pharmacy", "clinic"],
      answer: "hospital"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'J'ai _____ à la tête.' (I have a headache)",
      answer: "mal"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'les pompiers' mean?",
      options: ["police officers", "doctors", "firefighters", "paramedics"],
      answer: "firefighters"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Il y a un _____ dans l'immeuble!' (There's a fire in the building!)",
      answer: "incendie"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is 'se faire mal' in English?",
      options: ["to feel bad", "to hurt oneself", "to be sick", "to have pain"],
      answer: "to hurt oneself"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Ma jambe _____.' (My leg is bleeding)",
      answer: "saigne"
    }
  ]
};

export default lesson14; 