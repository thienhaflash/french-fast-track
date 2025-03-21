import { Lesson } from '../types';

const lesson10: Lesson = {
  id: 10,
  day: 10,
  title: "Daily Routines",
  description: "Describe your day and daily activities with essential vocabulary and phrases.",
  vocabulary: [
    { french: "se réveiller", english: "to wake up", pronunciation: "suh ray-vay-yay" },
    { french: "se lever", english: "to get up", pronunciation: "suh luh-vay" },
    { french: "se laver", english: "to wash oneself", pronunciation: "suh lah-vay" },
    { french: "se brosser les dents", english: "to brush one's teeth", pronunciation: "suh bross-say lay dahn" },
    { french: "s'habiller", english: "to get dressed", pronunciation: "sah-bee-yay" },
    { french: "prendre le petit déjeuner", english: "to have breakfast", pronunciation: "prahn-druh luh puh-tee day-zhuh-nay" },
    { french: "aller au travail", english: "to go to work", pronunciation: "ah-lay oh trah-vah-yuh" },
    { french: "déjeuner", english: "to have lunch", pronunciation: "day-zhuh-nay" },
    { french: "faire une pause", english: "to take a break", pronunciation: "fair oon pohz" },
    { french: "finir le travail", english: "to finish work", pronunciation: "fee-neer luh trah-vah-yuh" },
    { french: "rentrer à la maison", english: "to return home", pronunciation: "rahn-tray ah lah may-zohn" },
    { french: "préparer le dîner", english: "to prepare dinner", pronunciation: "pray-pah-ray luh dee-nay" },
    { french: "dîner", english: "to have dinner", pronunciation: "dee-nay" },
    { french: "regarder la télé", english: "to watch TV", pronunciation: "ruh-gar-day lah tay-lay" },
    { french: "lire un livre", english: "to read a book", pronunciation: "leer uhn lee-vruh" },
    { french: "surfer sur internet", english: "to surf the internet", pronunciation: "soor-fay soor an-tair-net" },
    { french: "se détendre", english: "to relax", pronunciation: "suh day-tahn-druh" },
    { french: "se coucher", english: "to go to bed", pronunciation: "suh koo-shay" },
    { french: "dormir", english: "to sleep", pronunciation: "dor-meer" },
    { french: "faire un rêve", english: "to have a dream", pronunciation: "fair uhn rev" }
  ],
  practiceSentences: [
    "Je me réveille à sept heures du matin.",
    "Après m'être levé, je prends une douche.",
    "Je me brosse les dents tous les matins et tous les soirs.",
    "Nous prenons le petit déjeuner ensemble.",
    "Il va au travail en bus.",
    "À midi, elle déjeune avec ses collègues.",
    "Je rentre à la maison vers 18 heures.",
    "Nous dînons généralement à 20 heures.",
    "Après le dîner, j'aime regarder la télé.",
    "Je me couche vers 23 heures."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'se réveiller' mean?",
      options: ["to get up", "to wake up", "to go to bed", "to sleep"],
      answer: "to wake up"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ à sept heures du matin.' (I wake up at 7 AM)",
      answer: "me réveille"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'prendre le petit déjeuner' in English?",
      options: ["to take a small break", "to have breakfast", "to have dinner", "to have lunch"],
      answer: "to have breakfast"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je me _____ les dents deux fois par jour.' (I brush my teeth twice a day)",
      answer: "brosse"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'se coucher' mean?",
      options: ["to get up", "to sleep", "to go to bed", "to relax"],
      answer: "to go to bed"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Nous _____ généralement à 20 heures.' (We usually have dinner at 8 PM)",
      answer: "dînons"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'rentrer à la maison' in English?",
      options: ["to return home", "to enter the house", "to leave home", "to clean the house"],
      answer: "to return home"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Après le travail, j'aime me _____.' (After work, I like to relax)",
      answer: "détendre"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'faire une pause' mean?",
      options: ["to do a pose", "to take a break", "to pause a video", "to make a stop"],
      answer: "to take a break"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ un livre avant de dormir.' (I read a book before sleeping)",
      answer: "lis"
    }
  ]
};

export default lesson10; 