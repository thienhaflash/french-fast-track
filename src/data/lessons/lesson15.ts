import { Lesson } from '../types';

const lesson15: Lesson = {
  id: 15,
  day: 15,
  title: "At Work Vocabulary",
  description: "Essential phrases for office environments and professional settings.",
  vocabulary: [
    { french: "le travail", english: "work", pronunciation: "luh trah-vah-yuh" },
    { french: "le bureau", english: "office", pronunciation: "luh bew-roh" },
    { french: "l'entreprise", english: "company", pronunciation: "lahn-truh-preez" },
    { french: "un employé", english: "employee", pronunciation: "uhn ahm-plwah-yay" },
    { french: "un employeur", english: "employer", pronunciation: "uhn ahm-plwah-yuhr" },
    { french: "un collègue", english: "colleague", pronunciation: "uhn koh-leg" },
    { french: "le patron", english: "boss", pronunciation: "luh pah-trohn" },
    { french: "un ordinateur", english: "computer", pronunciation: "uhn or-dee-nah-tuhr" },
    { french: "une réunion", english: "meeting", pronunciation: "ewn ray-ew-nyohn" },
    { french: "un projet", english: "project", pronunciation: "uhn proh-zhay" },
    { french: "un dossier", english: "file/folder", pronunciation: "uhn doh-syay" },
    { french: "une date limite", english: "deadline", pronunciation: "ewn daht lee-meet" },
    { french: "une tâche", english: "task", pronunciation: "ewn tahsh" },
    { french: "un rapport", english: "report", pronunciation: "uhn rah-por" },
    { french: "une équipe", english: "team", pronunciation: "ewn ay-keep" },
    { french: "un contrat", english: "contract", pronunciation: "uhn kohn-trah" },
    { french: "un salaire", english: "salary", pronunciation: "uhn sah-lair" },
    { french: "une promotion", english: "promotion", pronunciation: "ewn proh-moh-syohn" },
    { french: "un entretien", english: "interview", pronunciation: "uhn ahn-truh-tyan" },
    { french: "un CV", english: "resume", pronunciation: "uhn say-vay" }
  ],
  practiceSentences: [
    "Je travaille dans une grande entreprise.",
    "Nous avons une réunion importante demain matin.",
    "Mon bureau est au deuxième étage.",
    "Je dois finir ce rapport avant la date limite.",
    "J'ai un entretien d'embauche la semaine prochaine.",
    "L'équipe travaille sur un nouveau projet.",
    "Mon patron m'a donné une promotion.",
    "J'utilise un ordinateur tous les jours au travail.",
    "Mes collègues sont très sympathiques.",
    "Je gagne un bon salaire dans cette entreprise."
  ],
  exercises: [
    {
      id: 1,
      type: "multiple-choice",
      question: "What does 'le bureau' mean?",
      options: ["work", "office", "desk", "company"],
      answer: "office"
    },
    {
      id: 2,
      type: "fill-in-blank",
      question: "Complete: 'Je travaille dans une grande _____.' (I work in a big company)",
      answer: "entreprise"
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "What is 'un collègue' in English?",
      options: ["boss", "employee", "colleague", "client"],
      answer: "colleague"
    },
    {
      id: 4,
      type: "fill-in-blank",
      question: "Complete: 'Nous avons une _____ importante demain.' (We have an important meeting tomorrow)",
      answer: "réunion"
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "What does 'une date limite' mean?",
      options: ["last date", "deadline", "time limit", "end date"],
      answer: "deadline"
    },
    {
      id: 6,
      type: "fill-in-blank",
      question: "Complete: 'Mon _____ m'a donné une promotion.' (My boss gave me a promotion)",
      answer: "patron"
    },
    {
      id: 7,
      type: "multiple-choice",
      question: "What is 'un ordinateur' in English?",
      options: ["printer", "telephone", "computer", "calculator"],
      answer: "computer"
    },
    {
      id: 8,
      type: "fill-in-blank",
      question: "Complete: 'Je dois finir ce _____ aujourd'hui.' (I need to finish this report today)",
      answer: "rapport"
    },
    {
      id: 9,
      type: "multiple-choice",
      question: "What does 'un salaire' mean?",
      options: ["job", "office", "salary", "work"],
      answer: "salary"
    },
    {
      id: 10,
      type: "fill-in-blank",
      question: "Complete: 'L'_____ travaille sur un nouveau projet.' (The team is working on a new project)",
      answer: "équipe"
    }
  ]
};

export default lesson15; 