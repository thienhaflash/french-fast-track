import { Lesson } from '../types';

const lesson4: Lesson = {
  id: 4,
  day: 4,
  title: "Asking for Directions",
  description: "Navigate any French city with ease using these essential direction phrases.",
  vocabulary: [
    { french: "où", english: "where", pronunciation: "oo" },
    { french: "à gauche", english: "to the left", pronunciation: "ah gohsh" },
    { french: "à droite", english: "to the right", pronunciation: "ah drwat" },
    { french: "tout droit", english: "straight ahead", pronunciation: "too drwah" },
    { french: "près de", english: "near", pronunciation: "preh de" },
    { french: "loin de", english: "far from", pronunciation: "lwan de" },
    { french: "tourner", english: "to turn", pronunciation: "toor-nay" },
    { french: "traverser", english: "to cross", pronunciation: "tra-vair-say" },
    { french: "carrefour", english: "intersection", pronunciation: "kar-foor" },
    { french: "rue", english: "street", pronunciation: "rew" },
    { french: "avenue", english: "avenue", pronunciation: "ah-vuh-new" },
    { french: "boulevard", english: "boulevard", pronunciation: "bool-vahr" },
    { french: "place", english: "square", pronunciation: "plahss" },
    { french: "la gare", english: "train station", pronunciation: "lah gahr" },
    { french: "l'hôtel", english: "hotel", pronunciation: "loh-tell" },
    { french: "le musée", english: "museum", pronunciation: "luh mew-zay" },
    { french: "le parc", english: "park", pronunciation: "luh park" },
    { french: "le supermarché", english: "supermarket", pronunciation: "luh soo-pehr-mar-shay" },
    { french: "le plan", english: "map", pronunciation: "luh plahn" },
    { french: "perdu", english: "lost", pronunciation: "pair-dew" }
  ],
  practiceSentences: [
    "Où est la gare, s'il vous plaît?",
    "Tournez à gauche au prochain carrefour.",
    "Continuez tout droit jusqu'à la place.",
    "Le musée est près de l'hôtel.",
    "Je suis perdu. Avez-vous un plan?",
    "L'hôpital est loin d'ici?",
    "Traversez la rue et prenez à droite.",
    "Le parc est à deux minutes d'ici.",
    "Pour aller au supermarché, tournez à droite.",
    "Suivez cette avenue jusqu'au bout."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'à gauche' mean?",
      options: ["to the right", "to the left", "straight ahead", "near"],
      answer: "to the left"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Tournez _____ au prochain carrefour.' (Turn right at the next intersection)",
      answer: "à droite"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "How do you say 'Where is the train station?'",
      options: ["Où est le musée?", "Où est la gare?", "Où est l'hôtel?", "Où est le parc?"],
      answer: "Où est la gare?"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Le musée est _____ de l'hôtel.' (The museum is near the hotel)",
      answer: "près"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'traverser' mean?",
      options: ["to turn", "to walk", "to cross", "to follow"],
      answer: "to cross"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Je suis _____.' (I am lost)",
      answer: "perdu"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'le plan' in English?",
      options: ["map", "plan", "street", "city"],
      answer: "map"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Continuez _____ jusqu'à la place.' (Continue straight ahead until the square)",
      answer: "tout droit"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'loin de' mean?",
      options: ["close to", "next to", "far from", "in front of"],
      answer: "far from"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Le parc est à deux minutes _____.' (The park is two minutes from here)",
      answer: "d'ici"
    }
  ]
};

export default lesson4; 