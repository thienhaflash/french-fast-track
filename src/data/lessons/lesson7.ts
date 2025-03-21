import { Lesson } from '../types';

const lesson7: Lesson = {
  id: 7,
  day: 7,
  title: "Time & Schedule",
  description: "Express time, make appointments, and discuss schedules like a native.",
  vocabulary: [
    { french: "l'heure", english: "time/hour", pronunciation: "luhr" },
    { french: "la minute", english: "minute", pronunciation: "lah mee-newt" },
    { french: "la seconde", english: "second", pronunciation: "lah suh-gohnd" },
    { french: "aujourd'hui", english: "today", pronunciation: "oh-zhoor-dwee" },
    { french: "demain", english: "tomorrow", pronunciation: "duh-mahn" },
    { french: "hier", english: "yesterday", pronunciation: "ee-air" },
    { french: "la semaine", english: "week", pronunciation: "lah suh-men" },
    { french: "le mois", english: "month", pronunciation: "luh mwah" },
    { french: "l'année", english: "year", pronunciation: "lah-nay" },
    { french: "tôt", english: "early", pronunciation: "toh" },
    { french: "tard", english: "late", pronunciation: "tahr" },
    { french: "le matin", english: "morning", pronunciation: "luh mah-tahn" },
    { french: "l'après-midi", english: "afternoon", pronunciation: "lah-preh-mee-dee" },
    { french: "le soir", english: "evening", pronunciation: "luh swahr" },
    { french: "la nuit", english: "night", pronunciation: "lah nwee" },
    { french: "le rendez-vous", english: "appointment", pronunciation: "luh rahn-day-voo" },
    { french: "l'horaire", english: "schedule/timetable", pronunciation: "loh-rair" },
    { french: "la date", english: "date", pronunciation: "lah daht" },
    { french: "le calendrier", english: "calendar", pronunciation: "luh kah-lahn-dree-ay" },
    { french: "ponctuel", english: "punctual", pronunciation: "pohnk-too-el" }
  ],
  practiceSentences: [
    "Quelle heure est-il? - Il est huit heures.",
    "J'ai un rendez-vous à dix heures du matin.",
    "Le train part demain à midi.",
    "Je suis toujours ponctuel pour les rendez-vous.",
    "La réunion commence à trois heures de l'après-midi.",
    "Nous dînons généralement à huit heures du soir.",
    "Mon cours de français est le lundi et le jeudi.",
    "Le magasin ouvre tôt le matin.",
    "Il est arrivé en retard hier.",
    "Quel est ton horaire cette semaine?"
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "How do you say 'time/hour' in French?",
      options: ["le temps", "l'heure", "la minute", "la seconde"],
      answer: "l'heure"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Quelle _____ est-il?' (What time is it?)",
      answer: "heure"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What does 'demain' mean?",
      options: ["today", "tomorrow", "yesterday", "next week"],
      answer: "tomorrow"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'J'ai un _____ à dix heures.' (I have an appointment at 10 o'clock)",
      answer: "rendez-vous"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "How do you say 'evening' in French?",
      options: ["le matin", "l'après-midi", "le soir", "la nuit"],
      answer: "le soir"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Je suis toujours _____.' (I am always punctual)",
      answer: "ponctuel"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'la semaine' in English?",
      options: ["day", "week", "month", "year"],
      answer: "week"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Le train part _____ à midi.' (The train leaves tomorrow at noon)",
      answer: "demain"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'tôt' mean?",
      options: ["late", "early", "on time", "delayed"],
      answer: "early"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Quel est ton _____ cette semaine?' (What is your schedule this week?)",
      answer: "horaire"
    }
  ]
};

export default lesson7; 