import { Lesson } from '../types';

const lesson2: Lesson = {
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
};

export default lesson2; 