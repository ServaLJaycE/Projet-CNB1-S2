// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    type: 1,
  question: "Que redoute le plus quelqu'un atteint de pténorophobie ?",
  answer: "D'être chatouillé par des plumes",
  options: [
    "D'être chatouillé par des plumes",
    "D'avoir un oiseau sur lui",
    "D'être dans une volière",
    "De voir un oiseau mort"
  ],
  explanation: "il ne  doit pas en rigoler..."
},

  {
    type: 1,
  question: " Au Paraguay, les duels sont légaux à condition que les deux protagonistes... ",
  answer: "Soient enregistrés comme donneurs de sang",
  options: [
    "Lèguent un bien de valeur en cas de défaite",
    "Soient enregistrés comme donneurs de sang",
    "Se saluent respectuesement avant le combat",
    "Boivent de l'eau avant de commencer "
    ]
},
  {
    type: 1,
  question: " Quel acte de la vie courante occupe eniron 6 mois de notre vie ? ",
  answer: "Attendre à un feu rouge",
  options: [
    "Passer le balais",
    "Regarder la télévision",
    "Sortir les poubelles",
    "Attendre à un feu rouge"
  ]
},
  {
    type: 1,
  question: "Que s'est il passé le 25 décembre 1914 ?",
  answer: "Noël",
  options: [
    "Le bombardement de Paris",
    "Le début de la première guerre mondiale",
    "Un appel par le Général de Gaulle",
    "Noël"
  ]
},
  {
    type: 1,
  question: "L'un des deux symboles de l'Ecosse est :",
  answer: "La licorne",
  options: [
    "La loutre",
    "La marmotte",
    "Le coléoptère",
    "La licorne"
  ],
  explanation: "elle symbolisait la pureté et l'innocence"
},

{
  type:2,
  question:"Le 14 juillet existe au Royaume-Uni également.",
  answer:"Vrai",
  options: [
    "Vrai",
    "Faux"
  ],
  explanation: "Oui il existe, ce n'est juste pas le jour de la fête nationale comme en France",
},

{
    type:2,
    question:"Il n'y a qu'un seul mois avec 28 jours.",
    answer:"Faux",
    options: [
      "Vrai",
      "Faux"
    ],
    explanation:"Tous les mois ont au moins 28 jours ! ",
    },

    {
      type:1,
      question:"Pendant combien de temps l'américain Charles Osborne a eu le hoquet?",
      answer:"68 ans",
      options: [
        "10 minutes",
        "2 ans",
        "40 ans",
        "68 ans"
      ],
      explanation: "Cela représente les deux tiers de sa vie"
  },

{
  type:1,
  question:"Qu'est-ce que la natalophobie ?",
  answer:"La peur de fêter Noël",
  options: [
    "La peur de la natation",
    "La peur de fêter Noël",
    "La peur des poupées",
    "La peur de manger des nachos"
  ],
  explanation: "La natalophobie est la phobie de Noël, elle est considéré comme un trouble anxieux",
  },

{
type:1,
question:"Qu'est-ce que l'alektorophobie ?",
answer:"La peur des poulets",
options: [
  "La peur de lire",
  "La peur de manger des poires",
  "La peur des poulets",
  "La peur de dormir"
],
explanation: "Il existe des thérapie pour y remédier, le Thai Chi"
},

{
  type: 1,
  question:"A votre avis, quel est le plus gros exportateur de chameaux au monde ?",
  answer:"Norvège",
  options: [
   "Suisse",
   "Norvège",
   "L'Australie",
   "La Tunisie" 
  ],
  explanation:" Le plus gros exportateur de chameaux du monde occidental est la Norvège.",
  },

];

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
 function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(questions);