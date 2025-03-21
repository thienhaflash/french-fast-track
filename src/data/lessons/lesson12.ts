import { Lesson } from '../types';

const lesson12: Lesson = {
  id: 12,
  day: 12,
  title: "Making Phone Calls",
  description: "Learn essential phrases for telephone conversations and making appointments.",
  vocabulary: [
    { french: "le téléphone", english: "telephone", pronunciation: "luh tay-lay-fohn" },
    { french: "le portable", english: "cell phone", pronunciation: "luh por-tahbl" },
    { french: "appeler", english: "to call", pronunciation: "ah-play" },
    { french: "décrocher", english: "to pick up (the phone)", pronunciation: "day-kroh-shay" },
    { french: "raccrocher", english: "to hang up", pronunciation: "rah-kroh-shay" },
    { french: "composer un numéro", english: "to dial a number", pronunciation: "kohm-poh-zay uhn new-may-roh" },
    { french: "laisser un message", english: "to leave a message", pronunciation: "lay-say uhn meh-sahj" },
    { french: "la messagerie vocale", english: "voicemail", pronunciation: "lah meh-sahj-ree voh-kahl" },
    { french: "la ligne", english: "the line", pronunciation: "lah lee-nyuh" },
    { french: "occupé", english: "busy", pronunciation: "oh-kew-pay" },
    { french: "le répondeur", english: "answering machine", pronunciation: "luh ray-pohn-duhr" },
    { french: "allô", english: "hello (on phone)", pronunciation: "ah-loh" },
    { french: "rappeler", english: "to call back", pronunciation: "rah-puh-lay" },
    { french: "prendre rendez-vous", english: "to make an appointment", pronunciation: "prahn-druh rahn-day-voo" },
    { french: "joindre", english: "to reach (someone)", pronunciation: "jwahn-druh" },
    { french: "être en ligne", english: "to be on the line", pronunciation: "eh-truh ahn lee-nyuh" },
    { french: "le signal", english: "the signal", pronunciation: "luh see-nyahl" },
    { french: "la communication", english: "the call", pronunciation: "lah koh-mew-nee-kah-syohn" },
    { french: "le forfait", english: "phone plan", pronunciation: "luh for-feh" },
    { french: "composer", english: "to dial", pronunciation: "kohm-poh-zay" }
  ],
  practiceSentences: [
    "Allô, qui est à l'appareil?",
    "Je voudrais parler à Monsieur Dupont, s'il vous plaît.",
    "Est-ce que je peux laisser un message?",
    "Je vais vous rappeler plus tard.",
    "La ligne est occupée, veuillez rappeler ultérieurement.",
    "Pouvez-vous me rappeler demain matin?",
    "Je voudrais prendre rendez-vous avec le docteur.",
    "Désolé, j'ai un mauvais signal ici.",
    "Est-ce que vous pouvez parler plus fort?",
    "Ne raccrochez pas, s'il vous plaît."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'appeler' mean?",
      options: ["to speak", "to call", "to answer", "to hang up"],
      answer: "to call"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais _____ à Monsieur Dupont.' (I would like to speak to Mr. Dupont)",
      answer: "parler"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "How do you say 'to hang up' in French?",
      options: ["décrocher", "raccrocher", "composer", "appeler"],
      answer: "raccrocher"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je vais vous _____ plus tard.' (I will call you back later)",
      answer: "rappeler"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is 'le portable' in English?",
      options: ["telephone", "cell phone", "tablet", "computer"],
      answer: "cell phone"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'La ligne est _____.' (The line is busy)",
      answer: "occupée"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'laisser un message' mean?",
      options: ["to leave a message", "to read a message", "to send a message", "to delete a message"],
      answer: "to leave a message"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais _____ rendez-vous avec le docteur.' (I would like to make an appointment with the doctor)",
      answer: "prendre"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is 'allô' in English?",
      options: ["hello", "goodbye", "please", "thank you"],
      answer: "hello"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Désolé, j'ai un mauvais _____.' (Sorry, I have a bad signal)",
      answer: "signal"
    }
  ]
};

export default lesson12; 