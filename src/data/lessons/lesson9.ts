import { Lesson } from '../types';

const lesson9: Lesson = {
  id: 9,
  day: 9,
  title: "Common Questions",
  description: "Master the most frequently asked questions and how to respond appropriately.",
  vocabulary: [
    { french: "quel/quelle", english: "which/what", pronunciation: "kell/kell" },
    { french: "qui", english: "who", pronunciation: "kee" },
    { french: "quoi", english: "what", pronunciation: "kwah" },
    { french: "comment", english: "how", pronunciation: "koh-mahn" },
    { french: "pourquoi", english: "why", pronunciation: "poor-kwah" },
    { french: "quand", english: "when", pronunciation: "kahn" },
    { french: "combien", english: "how much/many", pronunciation: "kohm-byen" },
    { french: "est-ce que", english: "is it that (question marker)", pronunciation: "es kuh" },
    { french: "n'est-ce pas", english: "isn't it?", pronunciation: "nes pah" },
    { french: "à quelle heure", english: "at what time", pronunciation: "ah kell uhr" },
    { french: "d'où", english: "from where", pronunciation: "doo" },
    { french: "pour quoi", english: "for what", pronunciation: "poor kwah" },
    { french: "depuis quand", english: "since when", pronunciation: "duh-pwee kahn" },
    { french: "comment s'appelle", english: "what is the name of", pronunciation: "koh-mahn sah-pell" },
    { french: "qu'est-ce que c'est", english: "what is it", pronunciation: "kes kuh say" },
    { french: "pouvez-vous", english: "can you (formal)", pronunciation: "poo-vay voo" },
    { french: "y a-t-il", english: "is there", pronunciation: "ee ah teel" },
    { french: "avec qui", english: "with whom", pronunciation: "ah-vek kee" },
    { french: "de quelle couleur", english: "what color", pronunciation: "duh kell koo-luhr" },
    { french: "à quel point", english: "to what extent", pronunciation: "ah kell pwahn" }
  ],
  practiceSentences: [
    "Où habites-tu?",
    "Pourquoi êtes-vous en retard?",
    "Comment allez-vous?",
    "Qu'est-ce que c'est?",
    "À quelle heure commence le film?",
    "Qui est cette personne?",
    "Combien coûte ce livre?",
    "Quand partez-vous en vacances?",
    "D'où viens-tu?",
    "Pouvez-vous m'aider, s'il vous plaît?"
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'pourquoi' mean?",
      options: ["when", "where", "why", "how"],
      answer: "why"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: '_____ est cette personne?' (Who is this person?)",
      answer: "Qui"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'à quelle heure' in English?",
      options: ["what time", "which hour", "how long", "at what time"],
      answer: "at what time"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'D'_____ viens-tu?' (Where do you come from?)",
      answer: "où"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'combien' mean?",
      options: ["how", "how much/many", "when", "why"],
      answer: "how much/many"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: '_____ allez-vous?' (How are you?)",
      answer: "Comment"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'qu'est-ce que c'est' in English?",
      options: ["who is it", "what is it", "how is it", "where is it"],
      answer: "what is it"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: '_____ coûte ce livre?' (How much does this book cost?)",
      answer: "Combien"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'depuis quand' mean?",
      options: ["since when", "until when", "from when", "after when"],
      answer: "since when"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'De _____ couleur est votre voiture?' (What color is your car?)",
      answer: "quelle"
    }
  ]
};

export default lesson9; 