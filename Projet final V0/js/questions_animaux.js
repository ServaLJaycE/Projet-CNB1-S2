// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    type: 1,
    question: "Quelle est la taille de la langue d'une girafe ?",
    answer: "50cm",
    options: [
      "2cm",
      "5cm",
      "50cm",
      "30cm"
    ],
    explanation: "Sa grande taille lui permet d'attraper facilement les feuilles des arbres dont elle se nourrit. Elle est également très utile pour se nettoyer les yeux, les narines et les oreilles !",
  },
    {
    type: 1,
    question: " Quel animal cause le plus de morts chaque année ? ",
    answer: "Le moustique",
    options: [
      "Le moustique",
      "Le requin",
      "L'éléphant",
      "Le lion "
      ],
    explanation: "L'Institut océanographique de Monaco a mené une étude sur le nombre de décès causés chaque année par des animaux sauvages. Il en ressort que l'animal le plus dangereux pour l'homme est le moustique.",
  },
    {
    type: 1,
    question: " Combien y’a-t-il d’attaques de requins non provoquées par an ? ",
    answer: " Entre 50 et 100",
    options: [
      "Entre 0 et 50",
      "Entre 50 et 100",
      "Entre 100 et 150",
      "Entre 150 et 200"
    ],
    explanation: "Chaque année, il y a entre 50 et 100 attaques non provoquées de requins contre des humains. Entre 5 et 10 personnes meurent à la suite de ces attaques ",
},
    {
    type: 1,
    question: "De quelle couleur est le sang de la pieuvre ?",
    answer: " Bleu ",
    options: [
      "Rouge",
      "Vert",
      "Violet",
      "Bleu "
    ],
    explanation: "Le sang des pieuvres est bleu car il est riche en cuivre.",
  },
    {
    type: 1,
    question: "Combien de cerveaux possède le poulpe ?",
    answer: "9",
    options: [
      "8",
      "9",
      "3",
      "1"
    ],
    explanation: "Le poulpe possède 9 cerveaux, un dans sa tête et un dans chacune de ses 8 tentacules.",
      
  },

  {
  type: 2,
  question: "Les requins perçoivent les pulsations cardiaques de leur proies?",
  answer: "Vrai",
  options: [
    'Vrai',
    'Faux'
  ]
    
  },

  {
  type: 1,
  question:"La température d’incubation des œufs influence la détermination du sexe des reptiles à naître.",
  answer:"Vrai",
  options: [
    'Vrai',
    'Faux'
  ]

  },

  {
  type: 2,
  question:"Quelle est la proie favorite des pieuvres ?",
  answer:"Les crabes",
  options: [
    "Les petits poissons",
    "Les coraux",
    "Les algues",
    "Les crabes"
  ]

  },

  {
  type: 1,
  question:"Les chèvres et les autres ruminants ne digèrent pas leur nourriture d’un coup.",
  answer:"Vrai",
  options: [
    'Vrai',
    'Faux'
  ],
  explanation: "Ils disposent de plusieurs estomacs, et peuvent ramener les aliments de l’estomac vers la bouche pour les broyer plus finement : c’est ce qu’on appelle la rumination.",

  },

  {
  type:1,
  question:"Les ruminants sont dotés de trois estomacs et de pieds à deux doigts.",
  answer:"Faux",
  options: [
    'Vrai',
    'Faux'
  ],
  explanation: "Les ruminants ont 4 estomacs",

  },

  {
    type:1,
    question:"Le dromadaire a deux bosses.",
    answer:"Faux",
    options: [
      'Vrai',
      'Faux'
    ],
  explanation: "Le dromadaire a une seule bosse, c'est le chameau qui en a deux !",  
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