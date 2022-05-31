// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      type: 1,
    question: "D’où vient le Kouign-amann ?",
    answer: "De Bretagne",
    options: [
      "De Normandie",
      "De Bretagne",
      "De Lyon",
      "De Lille"
    ],
    explanation:"Né en 1860 à Douarnenez, le Kouign Amann est un vrai breton. Son nom signifie littéralement Gâteau au Beurre. C'est Yves René Scordia qui mit au point la savoureuse recette du Kouign Amann.",
  },

    {
      type: 1,
    question: "Historiquement, d’où vient la choucroute ?",
    answer: "De Chine",
    options: [
      "D'Alsace",
      "Des Etats-Unis",
      "De l'Australie",
      "De Chine"
      ],
    explanation:"D'originaire de Chine, elle a été exportée par les Huns jusqu’en Autriche avant d’atteindre l’Alsace.",
  },

    {
      type: 1,
    question: "Qu’est-ce que la daube provençale ?",
    answer: "Un plat mijoté de boeuf",
    options: [
      "Un plat mijoté de boeuf",
      "Un alcool",
      "Une pâtisserie à  la lavande",
      "Une ratatouille"
    ],
    explanation:"La daube provençale est une spécialité traditionnelle de la cuisine provençale, à base de viande marinée dans du vin rouge ou du vin blanc du vignoble de Provence, traditionnellement cuite à l'étouffée braisée au coin du feu, dans une daubière en terre cuite provençale.",
  },

    {
      type: 1,
    question: "Lequel de ces cocktails est à base de rhum ? ",
    answer: "Mojito",
    options: [
      "Mojito",
      "Caïpirinha",
      "Margarita",
      "Gin tonic"
    ]
  },
    {
      type: 1,
    question: "Qu'est-ce que le saké ?",
    answer: "Un alcool de riz",
    options: [
      "Une boisson énergisante à base de thé au jasmin",
      "Un alcool de riz",
      "Un alcool de litchi",
      "Une prise de judo"
    ]
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