import { Lesson } from '../types';

const lesson1: Lesson = {
  id: 1,
  day: 1,
  title: "Essential Greetings",
  description: "Learn the most common French greetings and introductions that you'll use daily.",
  vocabulary: [
    { french: "Bonjour", english: "Hello / Good day", pronunciation: "bohn-zhoor" },
    { french: "Salut", english: "Hi / Bye (informal)", pronunciation: "sah-loo" },
    { french: "Au revoir", english: "Goodbye", pronunciation: "oh ruh-vwahr" },
    { french: "Merci", english: "Thank you", pronunciation: "mair-see" },
    { french: "S'il vous plaît", english: "Please", pronunciation: "seel voo pleh" },
    { french: "Excusez-moi", english: "Excuse me", pronunciation: "eks-kew-zay mwah" },
    { french: "Je m'appelle...", english: "My name is...", pronunciation: "zhuh mah-pell..." },
    { french: "Comment allez-vous?", english: "How are you? (formal)", pronunciation: "koh-mahn tah-lay voo" },
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "How do you say 'Hello' in French?",
      options: ["Au revoir", "Bonjour", "Merci", "Excusez-moi"],
      answer: "Bonjour"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: '_____ vous plaît' (Please)",
      answer: "S'il"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "Which phrase would you use to introduce yourself?",
      options: ["Comment allez-vous?", "Au revoir", "Je m'appelle...", "Merci"],
      answer: "Je m'appelle..."
    }
  ]
};

export default lesson1; 