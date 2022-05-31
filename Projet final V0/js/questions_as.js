// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      type: 2,
    question: "Le premier championnat de pétanque s'est tenu en 1959",
    answer: "Vrai",
    options: [
      "Vrai",
      "Faux",
    ],
    explanation:"La première édition des championnats du monde de pétanque a eut lieu en 1959 à Spa en Belgique",  
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
      ],
    explanation:"Max Verstappen, fils de l'ancien pilote Jos Verstappen, est devenu champion du monde de Formule 1 en 2021",
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
    ],
    explanation: "En 2010 à Wimbledon, John Isner remporte la victoire face à Nicolas Mahut après un match de 11 heures et 5 minutes.",
  },

    {
      type: 2,
    question: "Le saut à la perche est l’un des sports d’athlétisme les plus anciens au monde ",
    answer: " Vrai ",
    options: [
      "Vrai",
      "Faux",
    ],
    explanation: "On trouve trace de la technique dans la Grèce antique, où le saut à la perche est utilisé comme moyen de locomotion pour traverser des ruisseaux",
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
    ],
    explanation:"Millie Bobby Brown joue le rôle de Onze dans la série.",
  },

  {
    type:1,
    question:"2.	La pétanque est un sport olympique.",
    answer:"Faux",
    options: [
      "Vrai",
      "Faux"
    ],
    explanation:"La pétanque n'est pas considéré comme une discipline officielle par le Comité international olympique.",
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