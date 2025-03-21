import { Lesson } from '../types';

const lesson1: Lesson = {
  id: 1,
  day: 1,
  title: "Essential Greetings",
  description: "Learn the most common French greetings and introductions that you'll use daily.",
  vocabulary: [
    { french: "bonjour", english: "hello / good day", pronunciation: "bohn-zhoor" },
    { french: "salut", english: "hi / bye (informal)", pronunciation: "sah-loo" },
    { french: "au revoir", english: "goodbye", pronunciation: "oh ruh-vwahr" },
    { french: "merci", english: "thank you", pronunciation: "mair-see" },
    { french: "s'il vous plaît", english: "please", pronunciation: "seel voo pleh" },
    { french: "excusez-moi", english: "excuse me", pronunciation: "eks-kew-zay mwah" },
    { french: "je m'appelle...", english: "my name is...", pronunciation: "zhuh mah-pell..." },
    { french: "comment allez-vous?", english: "how are you? (formal)", pronunciation: "koh-mahn tah-lay voo" },
    { french: "ça va?", english: "how are you? (informal)", pronunciation: "sah vah" },
    { french: "très bien", english: "very well", pronunciation: "tray byan" },
    { french: "bien, merci", english: "fine, thank you", pronunciation: "byan, mair-see" },
    { french: "à bientôt", english: "see you soon", pronunciation: "ah byan-toh" },
    { french: "enchanté(e)", english: "nice to meet you", pronunciation: "ahn-shahn-tay" },
    { french: "bonsoir", english: "good evening", pronunciation: "bohn-swahr" },
    { french: "bonne nuit", english: "good night", pronunciation: "bun nwee" },
    { french: "comment vous appelez-vous?", english: "what is your name? (formal)", pronunciation: "koh-mahn voo zah-play voo" },
    { french: "tu t'appelles comment?", english: "what is your name? (informal)", pronunciation: "too tah-pell koh-mahn" },
    { french: "de rien", english: "you're welcome", pronunciation: "duh ree-yan" },
    { french: "je ne comprends pas", english: "I don't understand", pronunciation: "zhuh nuh kohm-prahn pah" },
    { french: "parlez-vous anglais?", english: "do you speak English?", pronunciation: "par-lay voo ahn-glay" }
  ],
  practiceSentences: [
    "Bonjour, comment allez-vous?",
    "Je m'appelle Marie, et vous?",
    "Enchanté de faire votre connaissance.",
    "Merci beaucoup pour votre aide.",
    "Excusez-moi, parlez-vous anglais?",
    "Salut! Ça va bien?",
    "À bientôt, au revoir!",
    "S'il vous plaît, pouvez-vous répéter?",
    "Je ne comprends pas. Pouvez-vous parler plus lentement?",
    "Bonsoir! Comment s'est passée votre journée?"
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
    },
    {
      id: 4,
      type: "multiple-choice",
      question: "What does 'Merci' mean in English?",
      options: ["Hello", "Thank you", "Please", "Goodbye"],
      answer: "Thank you"
    },
    {
      id: 5,
      type: "fill-in-blank",
      question: "Complete: 'Comment _____-vous?' (How are you?)",
      answer: "allez"
    },
    {
      id: 6,
      type: "multiple-choice",
      question: "How do you say 'Good evening' in French?",
      options: ["Bonjour", "Bonsoir", "Bonne nuit", "Salut"],
      answer: "Bonsoir"
    },
    {
      id: 7,
      type: "fill-in-blank",
      question: "Complete: '_____ de faire votre connaissance.' (Nice to meet you)",
      answer: "Enchanté"
    },
    {
      id: 8,
      type: "multiple-choice",
      question: "What does 'À bientôt' mean?",
      options: ["Hello", "Thank you", "See you soon", "Please"],
      answer: "See you soon"
    },
    {
      id: 9,
      type: "fill-in-blank",
      question: "Complete: 'Je ne _____ pas.' (I don't understand)",
      answer: "comprends"
    },
    {
      id: 10,
      type: "multiple-choice",
      question: "What does 'Parlez-vous anglais?' mean?",
      options: ["Do you speak English?", "What is your name?", "How are you?", "Where are you from?"],
      answer: "Do you speak English?"
    }
  ]
};

export default lesson1; 