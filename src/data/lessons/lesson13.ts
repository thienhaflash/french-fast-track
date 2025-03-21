import { Lesson } from '../types';

const lesson13: Lesson = {
  id: 13,
  day: 13,
  title: "Expressing Opinions",
  description: "Share your thoughts, preferences, and opinions on various topics.",
  vocabulary: [
    { french: "penser", english: "to think", pronunciation: "pahn-say" },
    { french: "croire", english: "to believe", pronunciation: "krwahr" },
    { french: "je pense que", english: "I think that", pronunciation: "zhuh pahns kuh" },
    { french: "je crois que", english: "I believe that", pronunciation: "zhuh krwah kuh" },
    { french: "à mon avis", english: "in my opinion", pronunciation: "ah mohn ah-vee" },
    { french: "selon moi", english: "according to me", pronunciation: "suh-lohn mwah" },
    { french: "je trouve que", english: "I find that", pronunciation: "zhuh troov kuh" },
    { french: "être d'accord", english: "to agree", pronunciation: "eh-truh dah-kor" },
    { french: "je suis d'accord", english: "I agree", pronunciation: "zhuh swee dah-kor" },
    { french: "je ne suis pas d'accord", english: "I disagree", pronunciation: "zhuh nuh swee pah dah-kor" },
    { french: "avoir raison", english: "to be right", pronunciation: "ah-vwahr ray-zohn" },
    { french: "avoir tort", english: "to be wrong", pronunciation: "ah-vwahr tor" },
    { french: "préférer", english: "to prefer", pronunciation: "pray-fay-ray" },
    { french: "détester", english: "to hate", pronunciation: "day-teh-stay" },
    { french: "adorer", english: "to adore/love", pronunciation: "ah-dor-ray" },
    { french: "c'est intéressant", english: "it's interesting", pronunciation: "say ahn-tay-reh-sahn" },
    { french: "c'est ennuyeux", english: "it's boring", pronunciation: "say ahn-nwee-yuh" },
    { french: "absolument", english: "absolutely", pronunciation: "ab-soh-lew-mahn" },
    { french: "pas du tout", english: "not at all", pronunciation: "pah dew too" },
    { french: "tout à fait", english: "absolutely/exactly", pronunciation: "too-tah-feh" }
  ],
  practiceSentences: [
    "Je pense que ce film est très bon.",
    "À mon avis, il faut agir maintenant.",
    "Je ne suis pas d'accord avec cette décision.",
    "Elle croit que nous avons raison.",
    "Selon moi, cette idée est excellente.",
    "Je préfère le café au thé.",
    "Ils détestent les films d'horreur.",
    "Vous avez absolument raison!",
    "Je trouve que ce livre est très intéressant.",
    "Je suis tout à fait d'accord avec toi."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'je pense que' mean?",
      options: ["I feel that", "I hope that", "I think that", "I know that"],
      answer: "I think that"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'À mon _____, cette idée est bonne.' (In my opinion, this idea is good)",
      answer: "avis"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'je ne suis pas d'accord' in English?",
      options: ["I don't understand", "I'm not sure", "I disagree", "I don't know"],
      answer: "I disagree"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ le chocolat à la vanille.' (I prefer chocolate to vanilla)",
      answer: "préfère"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'avoir raison' mean?",
      options: ["to be right", "to have a reason", "to be rational", "to think clearly"],
      answer: "to be right"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Elle _____ que nous avons raison.' (She believes that we are right)",
      answer: "croit"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'selon moi' in English?",
      options: ["in my head", "according to me", "as I say", "I believe"],
      answer: "according to me"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Je _____ les films d'action.' (I hate action movies)",
      answer: "déteste"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'tout à fait' mean?",
      options: ["not at all", "a little bit", "absolutely/exactly", "maybe"],
      answer: "absolutely/exactly"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Je trouve que ce musée est très _____.' (I find that this museum is very interesting)",
      answer: "intéressant"
    }
  ]
};

export default lesson13; 