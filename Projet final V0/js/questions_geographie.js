// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      type: 2,  
    question: "Bamako est la capitale du Mali.",
    answer: "Vrai",
    options: [
      "Vrai",
      "Faux",
    ]
  },
  {
    type: 1,   
  question: "Quelle est la capitale du Canada ?",
  answer: "Ottawa",
  options: [
    "Montréal",
    "Ottawa",
    "Québec",
    "Toronto"
  ]
},

    {
      type: 1,  
    question: "Quelle est la seule ville au monde à chevaucher 2 continents ?",
    answer: "Istanbul",
    options: [
      "Moscou",
      "Istanbul",
      "Asuncion",
      "Jaipur"
    ]
  },
    {
      type:2,  
    question: "Moins de la moitié du Japon est recouvert par des montagnes",
    answer: "Faux",
    options: [
      "Vrai",
      "Faux",
    ]
  },
    {
      type: 1,  
    question: "Lequel est un résistant français lors de la seconde guerre mondiale ?",
    answer: "Jean Moulin",
    options: [
      "Jean Moulin",
      "Paul Dupont",
      "Pierre Legrand",
      "Henri Martin"
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