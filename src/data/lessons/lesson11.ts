import { Lesson } from '../types';

const lesson11: Lesson = {
  id: 11,
  day: 11,
  title: "Weather & Seasons",
  description: "Discuss the weather, seasons, and climate using common French expressions.",
  vocabulary: [
    { french: "le temps", english: "weather", pronunciation: "luh tahn" },
    { french: "le climat", english: "climate", pronunciation: "luh klee-mah" },
    { french: "la température", english: "temperature", pronunciation: "lah tahm-pay-rah-toor" },
    { french: "la météo", english: "weather forecast", pronunciation: "lah may-tay-oh" },
    { french: "le printemps", english: "spring", pronunciation: "luh prahn-tahn" },
    { french: "l'été", english: "summer", pronunciation: "lay-tay" },
    { french: "l'automne", english: "autumn/fall", pronunciation: "loh-tuhn" },
    { french: "l'hiver", english: "winter", pronunciation: "lee-vair" },
    { french: "chaud", english: "hot", pronunciation: "show" },
    { french: "froid", english: "cold", pronunciation: "frwah" },
    { french: "la pluie", english: "rain", pronunciation: "lah plwee" },
    { french: "pleuvoir", english: "to rain", pronunciation: "pluh-vwahr" },
    { french: "la neige", english: "snow", pronunciation: "lah nezh" },
    { french: "neiger", english: "to snow", pronunciation: "nay-zhay" },
    { french: "le vent", english: "wind", pronunciation: "luh vahn" },
    { french: "nuageux", english: "cloudy", pronunciation: "nwa-zhuh" },
    { french: "ensoleillé", english: "sunny", pronunciation: "ahn-soh-lay-yay" },
    { french: "le brouillard", english: "fog", pronunciation: "luh broo-yar" },
    { french: "l'orage", english: "thunderstorm", pronunciation: "loh-rahzh" },
    { french: "le parapluie", english: "umbrella", pronunciation: "luh pah-rah-plwee" }
  ],
  practiceSentences: [
    "Quel temps fait-il aujourd'hui?",
    "Il fait beau et ensoleillé.",
    "Il pleut depuis ce matin.",
    "L'hiver est très froid cette année.",
    "J'adore le printemps quand les fleurs commencent à pousser.",
    "En été, il fait très chaud dans le sud de la France.",
    "N'oubliez pas votre parapluie, il va pleuvoir.",
    "Le ciel est nuageux, mais je ne pense pas qu'il pleuvra.",
    "Ils annoncent de la neige pour demain.",
    "Ma saison préférée est l'automne quand les feuilles changent de couleur."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'le temps' mean?",
      options: ["time", "weather", "temperature", "climate"],
      answer: "weather"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Il fait _____ aujourd'hui.' (It is cold today)",
      answer: "froid"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "Which word means 'summer' in French?",
      options: ["le printemps", "l'été", "l'automne", "l'hiver"],
      answer: "l'été"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Il _____ depuis ce matin.' (It has been raining since this morning)",
      answer: "pleut"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is 'nuageux' in English?",
      options: ["rainy", "snowy", "cloudy", "windy"],
      answer: "cloudy"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'N'oubliez pas votre _____, il va pleuvoir.' (Don't forget your umbrella, it's going to rain)",
      answer: "parapluie"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'ensoleillé' mean?",
      options: ["cloudy", "sunny", "rainy", "snowy"],
      answer: "sunny"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'En _____, il fait très chaud.' (In summer, it is very hot)",
      answer: "été"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is 'la neige' in English?",
      options: ["hail", "snow", "rain", "ice"],
      answer: "snow"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Quel _____ fait-il aujourd'hui?' (What's the weather like today?)",
      answer: "temps"
    }
  ]
};

export default lesson11; 