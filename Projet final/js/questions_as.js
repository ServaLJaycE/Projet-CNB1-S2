// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      type: 2,
    question: "Le premier championnat de pétanque s'est tenu en 1959",
    answer: "Vrai",
    options: [
      "Vrai",
      "Faux",
    ]
  },
    {
      type: 1,
    question: " Qui est le plus jeune pilote de F1 à avoir remporté un Grand prix ? ",
    answer: "Max Verstappen",
    options: [
      "Lewis Hamilton",
      "Sebastian Vettel",
      "Max Verstappen",
      "Fernando Alonso "
      ]
  },
    {
      type: 1,
    question: "Quelle est la durée du plus long match de tennis ?",
    answer: "11 heures et 5 minutes",
    options: [
      "9 heures et 45 minutes",
      "10 heures et 35 minutes",
      "11 heures et 5 minutes",
      "12 heures et 20 minutes"
    ]
  },
    {
      type: 2,
    question: "Le saut à la perche est l’un des sports d’athlétisme les plus anciens au monde ",
    answer: " Vrai ",
    options: [
      "Vrai",
      "Faux",
    ]
  },
    {
      type: 1,
    question: "Dans la série Stranger Things, qui joue le rôle de Onze ?",
    answer: "Millie Bobby Brown",
    options: [
      "Winona Ryder",
      "Millie Bobby Brown",
      "Natalia Dyer",
      "Sadie Sink"
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