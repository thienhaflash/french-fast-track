import { Lesson } from '../types';

const lesson2: Lesson = {
  id: 2,
  day: 2,
  title: "Numbers & Basic Counting",
  description: "Master essential numbers for shopping, telling time, and everyday situations.",
  vocabulary: [
    { french: "zéro", english: "zero", pronunciation: "zay-roh" },
    { french: "un", english: "one", pronunciation: "uhn" },
    { french: "deux", english: "two", pronunciation: "duh" },
    { french: "trois", english: "three", pronunciation: "twah" },
    { french: "quatre", english: "four", pronunciation: "katr" },
    { french: "cinq", english: "five", pronunciation: "sank" },
    { french: "six", english: "six", pronunciation: "sees" },
    { french: "sept", english: "seven", pronunciation: "set" },
    { french: "huit", english: "eight", pronunciation: "weet" },
    { french: "neuf", english: "nine", pronunciation: "nuhf" },
    { french: "dix", english: "ten", pronunciation: "dees" },
    { french: "vingt", english: "twenty", pronunciation: "van" },
    { french: "trente", english: "thirty", pronunciation: "trahnt" },
    { french: "quarante", english: "forty", pronunciation: "kah-rahnt" },
    { french: "cinquante", english: "fifty", pronunciation: "sank-ahnt" },
    { french: "soixante", english: "sixty", pronunciation: "swah-sahnt" },
    { french: "cent", english: "one hundred", pronunciation: "sahn" },
    { french: "mille", english: "one thousand", pronunciation: "meel" },
    { french: "premier", english: "first", pronunciation: "pruh-myay" },
    { french: "deuxième", english: "second", pronunciation: "duh-zyem" }
  ],
  practiceSentences: [
    "J'ai deux frères et une sœur.",
    "Le train arrive à huit heures.",
    "Nous avons réservé une table pour quatre personnes.",
    "Le restaurant est au cinquième étage.",
    "C'est mon premier jour à Paris.",
    "Il y a cent pages dans ce livre.",
    "L'appartement coûte mille euros par mois.",
    "Mon anniversaire est le trois mai.",
    "Nous sommes le premier janvier.",
    "Il a soixante ans aujourd'hui."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What is 'five' in French?",
      options: ["Quatre", "Cinq", "Six", "Sept"],
      answer: "Cinq"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Un, deux, _____' (three)",
      answer: "trois"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "How do you say 'twenty' in French?",
      options: ["Dix", "Vingt", "Trente", "Quarante"],
      answer: "Vingt"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'J'ai _____ ans.' (I am ten years old)",
      answer: "dix"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is 'one hundred' in French?",
      options: ["Mille", "Cent", "Cinquante", "Soixante"],
      answer: "Cent"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Le _____ étage.' (The first floor)",
      answer: "premier"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "How do you say 'eight' in French?",
      options: ["Sept", "Huit", "Neuf", "Dix"],
      answer: "Huit"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Il est _____ heures.' (It is seven o'clock)",
      answer: "sept"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'cinquante' mean in English?",
      options: ["Fifteen", "Fifty", "Sixty", "Forty"],
      answer: "Fifty"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Il y a _____ personnes ici.' (There are four people here)",
      answer: "quatre"
    }
  ]
};

export default lesson2; 