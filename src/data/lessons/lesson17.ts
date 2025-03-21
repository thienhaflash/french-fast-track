import { Lesson } from '../types';

const lesson17: Lesson = {
  id: 17,
  day: 17,
  title: "Health & Wellness",
  description: "Learn vocabulary related to health, medicine, and maintaining wellbeing.",
  vocabulary: [
    { french: "la santé", english: "health", pronunciation: "lah sahn-tay" },
    { french: "un médecin", english: "doctor", pronunciation: "uhn may-de-san" },
    { french: "une pharmacie", english: "pharmacy", pronunciation: "ewn far-mah-see" },
    { french: "un médicament", english: "medication", pronunciation: "uhn may-dee-kah-mahn" },
    { french: "une ordonnance", english: "prescription", pronunciation: "ewn or-do-nahnce" },
    { french: "une maladie", english: "illness", pronunciation: "ewn mah-lah-dee" },
    { french: "la fièvre", english: "fever", pronunciation: "lah fee-ev-ruh" },
    { french: "une douleur", english: "pain", pronunciation: "ewn doo-leur" },
    { french: "se sentir", english: "to feel", pronunciation: "suh sahn-teer" },
    { french: "guérir", english: "to heal/recover", pronunciation: "gay-reer" },
    { french: "le bien-être", english: "wellbeing", pronunciation: "luh byan-et-ruh" },
    { french: "le sommeil", english: "sleep", pronunciation: "luh so-may" },
    { french: "faire de l'exercice", english: "to exercise", pronunciation: "fair duh lex-air-sees" },
    { french: "une allergie", english: "allergy", pronunciation: "ewn ah-lair-zhee" },
    { french: "un régime", english: "diet", pronunciation: "uhn ray-zheem" },
    { french: "stressé", english: "stressed", pronunciation: "stres-say" },
    { french: "se détendre", english: "to relax", pronunciation: "suh day-tahn-druh" },
    { french: "la digestion", english: "digestion", pronunciation: "lah dee-zjes-tee-on" },
    { french: "un rendez-vous", english: "appointment", pronunciation: "uhn rahn-day-voo" },
    { french: "un examen médical", english: "medical exam", pronunciation: "uhn ex-ah-men may-dee-kal" }
  ],
  practiceSentences: [
    "Je dois prendre rendez-vous chez le médecin.",
    "Cette pharmacie est ouverte 24 heures sur 24.",
    "N'oubliez pas de prendre vos médicaments.",
    "J'ai une allergie aux arachides.",
    "Le médecin m'a donné une ordonnance pour des antibiotiques.",
    "Je me sens stressé à cause du travail.",
    "Il est important de faire de l'exercice régulièrement.",
    "J'ai besoin de huit heures de sommeil chaque nuit.",
    "Elle suit un régime strict pour sa santé.",
    "Je dois passer un examen médical la semaine prochaine."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'la santé' mean?",
      options: ["sickness", "health", "medicine", "doctor"],
      answer: "health"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je dois prendre rendez-vous chez le _____.' (I need to make an appointment with the doctor)",
      answer: "médecin"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'une pharmacie' in English?",
      options: ["hospital", "clinic", "pharmacy", "doctor's office"],
      answer: "pharmacy"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'J'ai besoin d'une _____ pour ce médicament.' (I need a prescription for this medication)",
      answer: "ordonnance"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'la fièvre' mean?",
      options: ["cold", "fever", "headache", "cough"],
      answer: "fever"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Je me _____ très fatigué aujourd'hui.' (I feel very tired today)",
      answer: "sens"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'faire de l'exercice' in English?",
      options: ["to rest", "to diet", "to exercise", "to recover"],
      answer: "to exercise"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'J'ai une _____ aux fruits de mer.' (I have an allergy to seafood)",
      answer: "allergie"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'se détendre' mean?",
      options: ["to worry", "to relax", "to exercise", "to sleep"],
      answer: "to relax"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Je dois passer un _____ médical.' (I need to have a medical exam)",
      answer: "examen"
    }
  ]
};

export default lesson17; 