import { Lesson } from '../types';

const lesson20: Lesson = {
  id: 20,
  day: 20,
  title: "Comprehensive Review",
  description: "A review of key vocabulary and phrases from all previous lessons to solidify your learning.",
  vocabulary: [
    { french: "bonjour", english: "hello/good day", pronunciation: "bohn-zhoor" },
    { french: "merci beaucoup", english: "thank you very much", pronunciation: "mair-see boh-koo" },
    { french: "s'il vous plaît", english: "please (formal)", pronunciation: "seel voo pleh" },
    { french: "parler", english: "to speak", pronunciation: "par-lay" },
    { french: "comprendre", english: "to understand", pronunciation: "kohm-prahn-druh" },
    { french: "le restaurant", english: "restaurant", pronunciation: "luh res-toh-rahn" },
    { french: "le travail", english: "work", pronunciation: "luh trah-vah-yuh" },
    { french: "la maison", english: "house/home", pronunciation: "lah may-zohn" },
    { french: "voyager", english: "to travel", pronunciation: "vwah-yah-zhay" },
    { french: "acheter", english: "to buy", pronunciation: "ah-shuh-tay" },
    { french: "la santé", english: "health", pronunciation: "lah sahn-tay" },
    { french: "le temps", english: "time/weather", pronunciation: "luh tahn" },
    { french: "une question", english: "question", pronunciation: "ewn kes-tee-ohn" },
    { french: "l'heure", english: "time/hour", pronunciation: "luhr" },
    { french: "le métro", english: "subway", pronunciation: "luh may-troh" },
    { french: "apprendre", english: "to learn", pronunciation: "ah-prahn-druh" },
    { french: "une fête", english: "party/celebration", pronunciation: "ewn fet" },
    { french: "l'internet", english: "internet", pronunciation: "lan-tair-net" },
    { french: "important", english: "important", pronunciation: "am-por-tahn" },
    { french: "ensemble", english: "together", pronunciation: "ahn-sahm-bluh" }
  ],
  practiceSentences: [
    "Bonjour, comment allez-vous aujourd'hui?",
    "Je voudrais réserver une table pour deux personnes, s'il vous plaît.",
    "Excusez-moi, je ne comprends pas. Pouvez-vous parler plus lentement?",
    "Quelle heure est-il? Il est trois heures et demie.",
    "Je dois aller travailler demain matin.",
    "Nous aimons voyager en France pendant l'été.",
    "J'ai une question importante à vous poser.",
    "Prenez le métro jusqu'à la station Châtelet.",
    "Je vais organiser une fête pour mon anniversaire.",
    "Il est important d'apprendre de nouvelles choses chaque jour."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'merci beaucoup' mean?",
      options: ["you're welcome", "thank you very much", "please", "excuse me"],
      answer: "thank you very much"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je ne _____ pas ce que vous dites.' (I don't understand what you're saying)",
      answer: "comprends"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'le travail' in English?",
      options: ["travel", "work", "house", "restaurant"],
      answer: "work"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Nous allons _____ en Italie cet été.' (We are going to travel to Italy this summer)",
      answer: "voyager"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'la santé' mean?",
      options: ["health", "saint", "satisfaction", "safety"],
      answer: "health"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Quelle _____ est-il?' (What time is it?)",
      answer: "heure"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 's'il vous plaît' in English?",
      options: ["thank you", "excuse me", "please (formal)", "you're welcome"],
      answer: "please (formal)"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Je vais _____ un cadeau pour mon ami.' (I'm going to buy a gift for my friend)",
      answer: "acheter"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'une fête' mean?",
      options: ["fact", "party/celebration", "fate", "fight"],
      answer: "party/celebration"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'J'aime _____ de nouvelles langues.' (I like to learn new languages)",
      answer: "apprendre"
    }
  ]
};

export default lesson20; 