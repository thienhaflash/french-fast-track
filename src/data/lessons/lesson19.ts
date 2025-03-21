import { Lesson } from '../types';

const lesson19: Lesson = {
  id: 19,
  day: 19,
  title: "Arts & Culture",
  description: "Explore vocabulary related to art, culture, museums, and cultural activities.",
  vocabulary: [
    { french: "l'art", english: "art", pronunciation: "lar" },
    { french: "un musée", english: "museum", pronunciation: "uhn mew-zay" },
    { french: "une galerie", english: "gallery", pronunciation: "ewn gah-luh-ree" },
    { french: "une exposition", english: "exhibition", pronunciation: "ewn ex-po-zee-syon" },
    { french: "un tableau", english: "painting", pronunciation: "uhn tah-blo" },
    { french: "une sculpture", english: "sculpture", pronunciation: "ewn skewl-tewr" },
    { french: "un artiste", english: "artist", pronunciation: "uhn ar-teest" },
    { french: "la photographie", english: "photography", pronunciation: "lah fo-to-grah-fee" },
    { french: "le cinéma", english: "cinema", pronunciation: "luh see-nay-mah" },
    { french: "un film", english: "movie", pronunciation: "uhn feelm" },
    { french: "le théâtre", english: "theater", pronunciation: "luh tay-ah-truh" },
    { french: "un concert", english: "concert", pronunciation: "uhn kon-sair" },
    { french: "la musique", english: "music", pronunciation: "lah mew-zeek" },
    { french: "un musicien", english: "musician", pronunciation: "uhn mew-zee-syan" },
    { french: "la danse", english: "dance", pronunciation: "lah dahns" },
    { french: "la littérature", english: "literature", pronunciation: "lah lee-tay-rah-tewr" },
    { french: "un roman", english: "novel", pronunciation: "uhn ro-mahn" },
    { french: "un poème", english: "poem", pronunciation: "uhn po-em" },
    { french: "le patrimoine", english: "heritage", pronunciation: "luh pah-tree-mwahn" },
    { french: "la culture", english: "culture", pronunciation: "lah kewl-tewr" }
  ],
  practiceSentences: [
    "Nous allons visiter le musée d'art moderne ce weekend.",
    "Cette exposition est ouverte jusqu'au 15 mai.",
    "J'aime beaucoup les tableaux de Claude Monet.",
    "Le film a reçu plusieurs prix au festival de Cannes.",
    "Ils ont acheté des billets pour le concert de demain soir.",
    "La sculpture est exposée dans le jardin du musée.",
    "Ce roman est devenu un bestseller international.",
    "La galerie présente les œuvres de jeunes artistes locaux.",
    "La danse contemporaine est très populaire en France.",
    "Ce bâtiment fait partie du patrimoine historique de la ville."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'un musée' mean?",
      options: ["museum", "gallery", "theater", "cinema"],
      answer: "museum"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Nous allons voir une _____ de photos.' (We are going to see a photo exhibition)",
      answer: "exposition"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'un tableau' in English?",
      options: ["table", "sculpture", "painting", "drawing"],
      answer: "painting"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Elle est _____ et peint des portraits.' (She is an artist and paints portraits)",
      answer: "artiste"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'le cinéma' mean?",
      options: ["cinema", "movie", "television", "show"],
      answer: "cinema"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'J'aime écouter de la _____ classique.' (I like listening to classical music)",
      answer: "musique"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'un roman' in English?",
      options: ["poem", "novel", "article", "story"],
      answer: "novel"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Nous allons au _____ pour voir une pièce.' (We are going to the theater to see a play)",
      answer: "théâtre"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'le patrimoine' mean?",
      options: ["pattern", "heritage", "father's property", "culture"],
      answer: "heritage"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Cette _____ représente un héros mythologique.' (This sculpture represents a mythological hero)",
      answer: "sculpture"
    }
  ]
};

export default lesson19; 