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
  ]
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
  question: " Quel acte de la vie courante occupe environ 6 mois de notre vie ? ",
  answer: "Attendre à un feu rouge",
  options: [
    "passer le balais",
    "regarder la télévision",
    "sortir les poubelles",
    "Attendre à un feu rouge"
  ]
},
  {
    type: 1,
  question: "Que s'est il passé le 25 décembre 1914 ?",
  answer: " Noël ",
  options: [
    "Le bombardement de Paris",
    "Le début de la première guerre mondiale",
    "Un appel par le Général de Gaulle",
    " Noël "
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