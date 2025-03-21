import { Lesson } from '../types';

const lesson18: Lesson = {
  id: 18,
  day: 18,
  title: "Holidays & Celebrations",
  description: "Learn vocabulary for discussing holidays, celebrations, and special occasions.",
  vocabulary: [
    { french: "une fête", english: "party/celebration", pronunciation: "ewn fet" },
    { french: "un anniversaire", english: "birthday", pronunciation: "uhn ah-nee-vair-sair" },
    { french: "Noël", english: "Christmas", pronunciation: "no-el" },
    { french: "le Nouvel An", english: "New Year", pronunciation: "luh noo-vel ahn" },
    { french: "Pâques", english: "Easter", pronunciation: "pahk" },
    { french: "la Saint-Valentin", english: "Valentine's Day", pronunciation: "lah san va-lahn-tan" },
    { french: "un cadeau", english: "gift", pronunciation: "uhn kah-doe" },
    { french: "féliciter", english: "to congratulate", pronunciation: "fay-lee-see-tay" },
    { french: "souhaiter", english: "to wish", pronunciation: "soo-eh-tay" },
    { french: "une carte", english: "card", pronunciation: "ewn kart" },
    { french: "célébrer", english: "to celebrate", pronunciation: "say-lay-bray" },
    { french: "décorer", english: "to decorate", pronunciation: "day-ko-ray" },
    { french: "une invitation", english: "invitation", pronunciation: "ewn an-vee-tah-syon" },
    { french: "un invité", english: "guest", pronunciation: "uhn an-vee-tay" },
    { french: "un gâteau", english: "cake", pronunciation: "uhn gah-toe" },
    { french: "un toast", english: "toast (speech)", pronunciation: "uhn toest" },
    { french: "les feux d'artifice", english: "fireworks", pronunciation: "lay fuh dar-tee-fis" },
    { french: "une tradition", english: "tradition", pronunciation: "ewn trah-dee-syon" },
    { french: "un jour férié", english: "public holiday", pronunciation: "uhn zhoor fay-ree-ay" },
    { french: "les vacances", english: "vacation/holidays", pronunciation: "lay vah-kahns" }
  ],
  practiceSentences: [
    "Nous célébrons son anniversaire ce weekend.",
    "J'achète des cadeaux pour Noël.",
    "Ils ont décoré toute la maison pour la fête.",
    "Je vous souhaite une bonne année!",
    "Nous avons reçu une invitation pour leur mariage.",
    "Il y aura des feux d'artifice pour le Nouvel An.",
    "N'oubliez pas d'apporter un cadeau à la fête.",
    "Je vais envoyer une carte pour la Saint-Valentin.",
    "Combien d'invités attendez-vous pour la fête?",
    "Ils ont préparé un grand gâteau pour l'anniversaire."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'une fête' mean?",
      options: ["gift", "party/celebration", "holiday", "invitation"],
      answer: "party/celebration"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'C'est mon _____ demain.' (It's my birthday tomorrow)",
      answer: "anniversaire"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'un cadeau' in English?",
      options: ["card", "cake", "gift", "guest"],
      answer: "gift"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je vous _____ un joyeux Noël.' (I wish you a Merry Christmas)",
      answer: "souhaite"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'célébrer' mean?",
      options: ["to decorate", "to invite", "to celebrate", "to congratulate"],
      answer: "to celebrate"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Nous allons _____ la maison pour la fête.' (We are going to decorate the house for the party)",
      answer: "décorer"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'les feux d'artifice' in English?",
      options: ["candles", "fireworks", "decorations", "lights"],
      answer: "fireworks"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Combien d'_____ avez-vous invités?' (How many guests have you invited?)",
      answer: "invités"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'le Nouvel An' mean?",
      options: ["Christmas", "Easter", "New Year", "Valentine's Day"],
      answer: "New Year"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Elle a préparé un _____ d'anniversaire.' (She prepared a birthday cake)",
      answer: "gâteau"
    }
  ]
};

export default lesson18; 