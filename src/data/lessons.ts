
export interface Exercise {
  id: number;
  type: 'multiple-choice' | 'fill-in-blank' | 'listening' | 'speaking';
  question: string;
  options?: string[];
  answer: string;
}

export interface VocabularyItem {
  french: string;
  english: string;
  pronunciation: string;
}

export interface Lesson {
  id: number;
  day: number;
  title: string;
  description: string;
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

const lessons: Lesson[] = [
  {
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
  },
  {
    id: 2,
    day: 2,
    title: "Numbers & Basic Counting",
    description: "Master essential numbers for shopping, telling time, and everyday situations.",
    vocabulary: [
      { french: "Un, deux, trois", english: "One, two, three", pronunciation: "uhn, duh, twah" },
      { french: "Quatre, cinq, six", english: "Four, five, six", pronunciation: "katr, sank, sees" },
      { french: "Sept, huit, neuf, dix", english: "Seven, eight, nine, ten", pronunciation: "set, weet, nuhf, dees" },
      { french: "Vingt", english: "Twenty", pronunciation: "van" },
      { french: "Cinquante", english: "Fifty", pronunciation: "sank-ahnt" },
      { french: "Cent", english: "One hundred", pronunciation: "sahn" },
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
      }
    ]
  },
  {
    id: 3,
    day: 3,
    title: "Ordering Food & Drinks",
    description: "Learn essential phrases for restaurants and cafés to order with confidence.",
    vocabulary: [
      { french: "Je voudrais...", english: "I would like...", pronunciation: "zhuh voo-dray" },
      { french: "L'addition, s'il vous plaît", english: "The bill, please", pronunciation: "lah-dee-see-ohn, seel voo pleh" },
      { french: "Un café", english: "A coffee", pronunciation: "uhn kah-fay" },
      { french: "Un verre de vin", english: "A glass of wine", pronunciation: "uhn vair duh van" },
      { french: "C'est délicieux", english: "It's delicious", pronunciation: "say day-lee-syuh" },
    ],
    exercises: [
      {
        id: 1,
        type: "multiple-choice",
        question: "How would you ask for the bill?",
        options: ["Je voudrais...", "Un café", "L'addition, s'il vous plaît", "C'est délicieux"],
        answer: "L'addition, s'il vous plaît"
      },
      {
        id: 2,
        type: "fill-in-blank",
        question: "Complete: 'C'est _____' (It's delicious)",
        answer: "délicieux"
      }
    ]
  },
  {
    id: 4,
    day: 4,
    title: "Asking for Directions",
    description: "Navigate any French city with ease using these essential direction phrases.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 5,
    day: 5,
    title: "Essential Verbs",
    description: "Master the most common and useful French verbs used in everyday conversations.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 6,
    day: 6,
    title: "Shopping Vocabulary",
    description: "Learn the essential phrases for shopping in markets, boutiques and supermarkets.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 7,
    day: 7,
    title: "Time & Schedule",
    description: "Express time, make appointments, and discuss schedules like a native.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 8,
    day: 8,
    title: "Travel Expressions",
    description: "Essential phrases for transportation, hotels, and navigating travel situations.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 9,
    day: 9,
    title: "Common Questions",
    description: "Master the most frequently asked questions and how to respond appropriately.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 10,
    day: 10,
    title: "Daily Routines",
    description: "Describe your day and daily activities with essential vocabulary and phrases.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 11,
    day: 11,
    title: "Weather & Seasons",
    description: "Discuss the weather, seasons, and climate using common French expressions.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 12,
    day: 12,
    title: "Making Phone Calls",
    description: "Learn essential phrases for telephone conversations and making appointments.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 13,
    day: 13,
    title: "Expressing Opinions",
    description: "Share your thoughts, preferences, and opinions on various topics.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 14,
    day: 14,
    title: "Emergency Phrases",
    description: "Critical vocabulary for emergency situations and getting help when needed.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 15,
    day: 15,
    title: "At Work Vocabulary",
    description: "Essential phrases for office environments and professional settings.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 16,
    day: 16,
    title: "Family & Relationships",
    description: "Discuss family members, relationships, and personal connections.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 17,
    day: 17,
    title: "Health & Wellness",
    description: "Vocabulary for discussing health, visiting doctors, and describing symptoms.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 18,
    day: 18,
    title: "Celebrations & Events",
    description: "Phrases for holidays, birthdays, and special occasions in French culture.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 19,
    day: 19,
    title: "Culture & Etiquette",
    description: "Understanding French cultural nuances and proper etiquette in various situations.",
    vocabulary: [],
    exercises: []
  },
  {
    id: 20,
    day: 20,
    title: "Practical Conversations",
    description: "Put everything together with practical dialogue scenarios for real-world use.",
    vocabulary: [],
    exercises: []
  },
];

export default lessons;
