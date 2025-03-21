import { Lesson } from '../types';

const lesson16: Lesson = {
  id: 16,
  day: 16,
  title: "Technology & Digital Life",
  description: "Modern vocabulary for discussing technology, social media, and digital communication.",
  vocabulary: [
    { french: "l'internet", english: "internet", pronunciation: "lan-tair-net" },
    { french: "un site web", english: "website", pronunciation: "uhn seat web" },
    { french: "une application", english: "app", pronunciation: "ewn ap-plee-kah-syohn" },
    { french: "un réseau social", english: "social network", pronunciation: "uhn ray-zoh soh-syahl" },
    { french: "un mot de passe", english: "password", pronunciation: "uhn moh duh pass" },
    { french: "télécharger", english: "to download", pronunciation: "tay-lay-shar-zhay" },
    { french: "partager", english: "to share", pronunciation: "par-tah-zhay" },
    { french: "mettre à jour", english: "to update", pronunciation: "met-truh ah zhoor" },
    { french: "une notification", english: "notification", pronunciation: "ewn no-tee-fee-kah-syohn" },
    { french: "connecté", english: "connected", pronunciation: "ko-nek-tay" },
    { french: "hors ligne", english: "offline", pronunciation: "or leen-yuh" },
    { french: "un écran tactile", english: "touchscreen", pronunciation: "uhn ay-krahn tack-teel" },
    { french: "un portable", english: "laptop", pronunciation: "uhn por-tah-bluh" },
    { french: "le stockage", english: "storage", pronunciation: "luh sto-kahzh" },
    { french: "une batterie", english: "battery", pronunciation: "ewn bah-tuh-ree" },
    { french: "le signal", english: "signal", pronunciation: "luh see-nyal" },
    { french: "le wifi", english: "wifi", pronunciation: "luh wee-fee" },
    { french: "bloquer", english: "to block", pronunciation: "blo-kay" },
    { french: "suivre", english: "to follow", pronunciation: "swee-vruh" },
    { french: "un lien", english: "link", pronunciation: "uhn lyan" }
  ],
  practiceSentences: [
    "Je passe beaucoup de temps sur l'internet.",
    "Il faut mettre à jour l'application régulièrement.",
    "J'ai reçu une notification de mon réseau social préféré.",
    "Mon portable a besoin d'être rechargé, la batterie est faible.",
    "Le mot de passe doit être complexe pour être sécurisé.",
    "Je vais télécharger ce nouveau logiciel.",
    "Elle partage souvent des photos sur les réseaux sociaux.",
    "Il est impossible de se connecter quand on est hors ligne.",
    "Cette application est disponible sur tous les appareils.",
    "Cliquez sur ce lien pour accéder au site web."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'un réseau social' mean?",
      options: ["website", "social network", "internet", "application"],
      answer: "social network"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'J'ai oublié mon _____ de passe.' (I forgot my password)",
      answer: "mot"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'télécharger' in English?",
      options: ["to update", "to share", "to download", "to block"],
      answer: "to download"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Je vais _____ cette photo sur mon réseau social.' (I'm going to share this photo on my social network)",
      answer: "partager"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'hors ligne' mean?",
      options: ["online", "offline", "connected", "updated"],
      answer: "offline"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Mon portable n'a plus de _____.' (My laptop has no more battery)",
      answer: "batterie"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'un écran tactile' in English?",
      options: ["touchscreen", "display", "monitor", "screen"],
      answer: "touchscreen"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Il faut _____ à jour l'application.' (You need to update the app)",
      answer: "mettre"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'suivre' mean?",
      options: ["to block", "to download", "to follow", "to share"],
      answer: "to follow"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'Cliquez sur ce _____ pour accéder au site web.' (Click on this link to access the website)",
      answer: "lien"
    }
  ]
};

export default lesson16; 