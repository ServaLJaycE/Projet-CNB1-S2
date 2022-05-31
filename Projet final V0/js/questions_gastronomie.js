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
    ],
    explanation: "C'est une boisson alcoolisée japonaise à base de riz. Il s'agit d'un alcool de riz produit par fermentation titrant de 14 à 17°.",
  },

  {
    type: 1,
    question:"D’où vient le nom du Paris-Brest ? ",
    answer:"De sa forme en roue de vélo",
    options: [
      "De sa forme en roue de vélo",
      "Du voyage de Paris à Brest de  son créateur",
      "Du mélange de saveurs de Paris et de Brest",
      "De son créateur qui hésitait à l'appeler Paris ou Brest "
    ],
    explanation:"Cet entremet a été baptisé Paris-Brest en hommage à la course cycliste.",
    },

  {
  type:1,
  question:"Dans quelle ville trouve-t-on le Kouglof ?",
  answer:"Strasbourg",
  options: [
      "Arras",
      "Bordeaux",
      "Strasbourg",
      "Toulouse"
  ],
  explanation: "Cette brioche à la forme originale et unique tire son nom d’Alsace : le « kougelhopf », signifiant turban.",
  },

   {
  type:1,
  question:"Pourquoi le roquefort s’appelle-t-il ainsi ?",
  answer:"C’est la ville dont il est originaire",
  options: [
    "Car son créateur était fort aux échecs et gagnait grâce au déplacement roque",
    "C’est la ville dont il est originaire",
    "Car c'est un fromage fort à base de roquette",
    "C'est juste un nom au hasard"
    ],
    explanation: "C'est au cœur de l'Aveyron qu'est né le Roquefort. L'histoire de ce fromage à pâte persillée est liée à un terroir : la montagne crayeuse du Combalou, à Roquefort-sur-Soulzon, au sud-est de Rodez.",
        },

{
  type:1,
  question:"Qu'est-ce que du miso ?",
  answer:"Une pâte fermentée à base de soja, de céréales et de sel",
  options: [
    "Une pâte fermentée à base de soja, de céréales et de sel",
    "Une sorte de soupe chinoise",
    "Une pâte à base d'algues utilisée dans la préparation de sushis",
    "Une sauce épicée utilisée dans les mets japonais"
],
explanation: "C'est un aliment japonais traditionnel qui se présente sous forme de pâte fermentée, à haute teneur en protéines, de goût plus ou moins prononcé selon la fermentation et relativement salé.",
 },

 {
  type:1,
  question:"En gastronomie, qu'est-ce que le corail ?",
  answer:"Les gonades de certains fruits de mer",
  options: [
    "Une partie de l'estomac de certains poissons",
    "Les gonades de certains fruits de mer",
    "Les abbats des poissons et des fruits de mer",
    "Les coraux au fond de la mer"
  ],
  explanation:"« Corail » est le nom donné à la partie verte devenant orangée à la cuisson qui se trouve dans le coffre des homards et des langoustes, et qui sert d’élément de liaison aux sauces d’accompagnement de poisson, de crustacés ou de coquillages.",
  },


  {
    type:1,
    question:"D'où le cocktail Piña colada vient-il ? ",
    answer:"Des Antilles",
    options: [
      "De Cuba",
      "Des Antilles",
      "Du Brésil",
      "Du Mexique"
    ],
    explanation:"La piña colada est un cocktail à base de rhum, jus d'ananas et crème de noix de coco, originaire de l’île de Porto Rico des grandes Antilles de la mer des Caraïbes, dont elle est déclarée boisson nationale depuis 1978.",
    },

{
  type:1,
  question:"Lequel de ces poivres est fait à partir d'un piment ?",
  answer:"Le poivre de Cayenne",
  options: [
    "Le poibre vert",
    "Le poivre de Cayenne",
    "Le poivre noir",
    "Le poivre rose"
      ],
  explanation: "Le poivre de Cayenne est un faux poivre et doit en réalité être appelé piment de Cayenne. ",
 },

 {
  type:1,
  question:"A partir de quelle plante est fabriqué le rhum ?",
  answer:"La canne à sucre",
  options: [
    "Les feuilles de banabier",
    "Le physalis",
    "La rose du désert",
    "La canne à sucre"
  ],
  explanation:"Le rhum est une eau-de-vie obtenue par fermentation puis distillation de jus de canne à sucre, de sirop de canne à sucre ou de mélasse.",
  },

  {
    type:2,
    question:"Les scones viennent du Sud de la France.",
    answer:"Faux",
    options: [
      "Vrai",
      "Faux"
    ],
    explanation: "Les scones viennent de Grande-Bretagne."
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