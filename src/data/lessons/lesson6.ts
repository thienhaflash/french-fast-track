import { Lesson } from '../types';

const lesson6: Lesson = {
  id: 6,
  day: 6,
  title: "Shopping Vocabulary",
  description: "Learn the essential phrases for shopping in markets, boutiques and supermarkets.",
  vocabulary: [
    { french: "acheter", english: "to buy", pronunciation: "ah-shuh-tay" },
    { french: "vendre", english: "to sell", pronunciation: "vahn-druh" },
    { french: "magasin", english: "store", pronunciation: "mah-gah-zan" },
    { french: "boutique", english: "shop", pronunciation: "boo-teek" },
    { french: "centre commercial", english: "shopping mall", pronunciation: "sahn-truh koh-mair-syahl" },
    { french: "marché", english: "market", pronunciation: "mar-shay" },
    { french: "prix", english: "price", pronunciation: "pree" },
    { french: "coûter", english: "to cost", pronunciation: "koo-tay" },
    { french: "cher", english: "expensive", pronunciation: "shair" },
    { french: "bon marché", english: "cheap/inexpensive", pronunciation: "bohn mar-shay" },
    { french: "soldes", english: "sales", pronunciation: "sohld" },
    { french: "promotion", english: "special offer", pronunciation: "proh-moh-syohn" },
    { french: "taille", english: "size", pronunciation: "tah-yuh" },
    { french: "essayer", english: "to try on", pronunciation: "eh-say-yay" },
    { french: "payer", english: "to pay", pronunciation: "peh-yay" },
    { french: "carte bancaire", english: "credit/debit card", pronunciation: "kart bahn-kair" },
    { french: "espèces", english: "cash", pronunciation: "eh-spess" },
    { french: "reçu", english: "receipt", pronunciation: "ruh-soo" },
    { french: "remboursement", english: "refund", pronunciation: "rahm-boor-suh-mahn" },
    { french: "client", english: "customer", pronunciation: "klee-ahn" }
  ],
  practiceSentences: [
    "Je voudrais acheter ce pull.",
    "C'est combien? - Ça coûte 25 euros.",
    "Je peux essayer cette robe?",
    "Avez-vous cette chemise en taille M?",
    "Je vais payer par carte bancaire.",
    "Est-ce que vous faites des soldes?",
    "Ce pantalon est très cher!",
    "Puis-je avoir un reçu, s'il vous plaît?",
    "Ce magasin vend des vêtements bon marché.",
    "Je voudrais un remboursement, s'il vous plaît."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'acheter' mean?",
      options: ["to sell", "to buy", "to try on", "to pay"],
      answer: "to buy"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Ce pull _____ 30 euros.' (This sweater costs 30 euros)",
      answer: "coûte"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "How do you say 'store' in French?",
      options: ["boutique", "marché", "magasin", "centre commercial"],
      answer: "magasin"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais _____ cette robe.' (I would like to try on this dress)",
      answer: "essayer"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What is 'bon marché' in English?",
      options: ["expensive", "cheap/inexpensive", "good market", "good price"],
      answer: "cheap/inexpensive"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Je vais _____ par carte bancaire.' (I am going to pay by card)",
      answer: "payer"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What does 'soldes' mean?",
      options: ["sizes", "sales", "stores", "special offers"],
      answer: "sales"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Avez-vous cette chemise en _____ M?' (Do you have this shirt in size M?)",
      answer: "taille"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What is 'reçu' in English?",
      options: ["receipt", "refund", "payment", "cash"],
      answer: "receipt"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Je voudrais un _____, s'il vous plaît.' (I would like a refund, please)",
      answer: "remboursement"
    }
  ]
};

export default lesson6; 