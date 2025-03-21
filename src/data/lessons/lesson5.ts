import { Lesson } from '../types';

const lesson5: Lesson = {
  id: 5,
  day: 5,
  title: "Essential Verbs",
  description: "Master the most common and useful French verbs used in everyday conversations.",
  vocabulary: [
    { french: "être", english: "to be", pronunciation: "eh-tr" },
    { french: "avoir", english: "to have", pronunciation: "ah-vwahr" },
    { french: "faire", english: "to do/make", pronunciation: "fair" },
    { french: "aller", english: "to go", pronunciation: "ah-lay" },
    { french: "venir", english: "to come", pronunciation: "vuh-neer" },
    { french: "voir", english: "to see", pronunciation: "vwahr" },
    { french: "dire", english: "to say/tell", pronunciation: "deer" },
    { french: "donner", english: "to give", pronunciation: "doh-nay" },
    { french: "prendre", english: "to take", pronunciation: "prahn-dr" },
    { french: "mettre", english: "to put", pronunciation: "meh-tr" },
    { french: "lire", english: "to read", pronunciation: "leer" },
    { french: "écrire", english: "to write", pronunciation: "ay-kreer" },
    { french: "connaître", english: "to know (someone)", pronunciation: "koh-neh-tr" },
    { french: "penser", english: "to think", pronunciation: "pahn-say" },
    { french: "vouloir", english: "to want", pronunciation: "voo-lwahr" },
    { french: "pouvoir", english: "can/to be able to", pronunciation: "poo-vwahr" },
    { french: "devoir", english: "must/to have to", pronunciation: "duh-vwahr" },
    { french: "sortir", english: "to go out", pronunciation: "sohr-teer" },
    { french: "rester", english: "to stay", pronunciation: "reh-stay" },
    { french: "parler", english: "to speak", pronunciation: "par-lay" }
  ],
  practiceSentences: [
    "Je suis français.",
    "Vous avez un chien?",
    "Nous allons au cinéma.",
    "Elle vient de Paris.",
    "Il ne peut pas venir aujourd'hui.",
    "Je dois finir mon travail.",
    "Tu veux manger maintenant?",
    "Ils font leurs devoirs.",
    "Elle prend le train tous les jours.",
    "Je vais lire ce livre."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'être' mean?",
      options: ["to have", "to be", "to do", "to go"],
      answer: "to be"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ français.' (I am French)",
      answer: "suis"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What does 'faire' mean?",
      options: ["to be", "to have", "to do/make", "to go"],
      answer: "to do/make"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Nous _____ au cinéma.' (We are going to the cinema)",
      answer: "allons"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is the English translation of 'vouloir'?",
      options: ["to think", "to want", "to come", "to see"],
      answer: "to want"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Elle _____ de Paris.' (She comes from Paris)",
      answer: "vient"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'pouvoir' mean?",
      options: ["to want", "to have to", "can/to be able to", "to know"],
      answer: "can/to be able to"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ finir mon travail.' (I must finish my work)",
      answer: "dois"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is the correct translation of 'to write'?",
      options: ["lire", "écrire", "dire", "voir"],
      answer: "écrire"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Tu _____ manger maintenant?' (Do you want to eat now?)",
      answer: "veux"
    }
  ]
};

export default lesson5; 