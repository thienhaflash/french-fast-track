import { Lesson } from '../types';

const lesson3: Lesson = {
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
};

export default lesson3; 