import { Lesson } from '../types';

const lesson3: Lesson = {
  id: 3,
  day: 3,
  title: "Ordering Food & Drinks",
  description: "Learn essential phrases for restaurants and cafés to order with confidence.",
  vocabulary: [
    { french: "je voudrais", english: "I would like", pronunciation: "zhuh voo-dray" },
    { french: "l'addition", english: "the bill", pronunciation: "lah-dee-see-ohn" },
    { french: "un café", english: "a coffee", pronunciation: "uhn kah-fay" },
    { french: "un verre de vin", english: "a glass of wine", pronunciation: "uhn vair duh van" },
    { french: "délicieux", english: "delicious", pronunciation: "day-lee-syuh" },
    { french: "une table pour deux", english: "a table for two", pronunciation: "ewn tahbl poor duh" },
    { french: "commander", english: "to order", pronunciation: "koh-mahn-day" },
    { french: "entrée", english: "starter/appetizer", pronunciation: "ahn-tray" },
    { french: "plat principal", english: "main course", pronunciation: "plah pran-see-pal" },
    { french: "dessert", english: "dessert", pronunciation: "deh-sair" },
    { french: "l'eau", english: "water", pronunciation: "loh" },
    { french: "la bière", english: "beer", pronunciation: "lah byair" },
    { french: "le menu", english: "the menu", pronunciation: "luh muh-new" },
    { french: "une réservation", english: "a reservation", pronunciation: "ewn ray-zair-vah-syon" },
    { french: "serveur", english: "waiter", pronunciation: "sair-vuhr" },
    { french: "serveuse", english: "waitress", pronunciation: "sair-vuhz" },
    { french: "végétarien", english: "vegetarian", pronunciation: "vay-zhay-tah-ree-an" },
    { french: "sans gluten", english: "gluten-free", pronunciation: "sahn gloo-ten" },
    { french: "c'est combien?", english: "how much is it?", pronunciation: "say kom-byen" },
    { french: "pourboire", english: "tip", pronunciation: "poor-bwar" }
  ],
  practiceSentences: [
    "Je voudrais une table pour deux, s'il vous plaît.",
    "L'addition, s'il vous plaît.",
    "Un café et un verre de vin rouge, s'il vous plaît.",
    "C'est vraiment délicieux!",
    "Avez-vous un menu végétarien?",
    "Je voudrais commander une entrée et un plat principal.",
    "Est-ce que vous acceptez les pourboires?",
    "L'eau est gratuite?",
    "C'est combien pour le dessert?",
    "Nous avons une réservation pour 20h."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "How would you ask for the bill?",
      options: ["Je voudrais", "Un café", "L'addition, s'il vous plaît", "C'est délicieux"],
      answer: "L'addition, s'il vous plaît"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'C'est _____' (It's delicious)",
      answer: "délicieux"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What does 'un verre de vin' mean?",
      options: ["a cup of coffee", "a glass of wine", "a bottle of water", "a bowl of soup"],
      answer: "a glass of wine"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais _____ pour deux, s'il vous plaît.' (I would like a table for two, please)",
      answer: "une table"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'commander' mean?",
      options: ["to eat", "to drink", "to order", "to pay"],
      answer: "to order"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Avez-vous un menu _____?' (Do you have a vegetarian menu?)",
      answer: "végétarien"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'plat principal' in English?",
      options: ["appetizer", "dessert", "main course", "side dish"],
      answer: "main course"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'C'est _____ pour le dessert?' (How much is it for the dessert?)",
      answer: "combien"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'serveur' mean?",
      options: ["waiter", "waitress", "chef", "manager"],
      answer: "waiter"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Nous avons une _____ pour 20h.' (We have a reservation for 8pm)",
      answer: "réservation"
    }
  ]
};

export default lesson3; 