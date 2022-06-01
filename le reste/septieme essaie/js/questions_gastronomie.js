// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      numb:'1',
    question: "quel est la taille de la langue d'une girafe",
    answer: "50cm",
    options: [
      "2cm",
      "logan",
      "50cm",
      "30cm"
    ]
  },
    {
      numb:"2",
    question: " Quel animal cause le plus de morts chaque année ? ",
    answer: "moustique",
    options: [
      "moustique",
      "le requin",
      "l'éléphant",
      "le lion "
      ]
  },
    {
      numb:'3',
    question: " Combien y’a-t-il d’attaques de requins non provoquées par an ? ",
    answer: " entre 50 et 100",
    options: [
      "entre 0 et 50",
      " entre 50 et 100",
      "entre 100 et 150",
      "entre 150 et 200"
    ]
  },
    {
      numb:'4',
    question: "De quelle couleur est la sang de la pieuvre ?",
    answer: " bleu ",
    options: [
      "rouge",
      " vert",
      "violet",
      " bleu "
    ]
  },
    {
      numb:'5',
    question: "Combien de cerveaux possède le poulpe ?",
    answer: "9",
    options: [
      "8",
      "9",
      "3",
      "1"
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
  