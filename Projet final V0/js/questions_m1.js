// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    type: 1,
    question :"Soit P une assertion vraie et Q une assertion fausse. Quelle est l'assertion vraie?",
    answer : "P ou non(Q)",
    options:[
      "Q ou non(P)",
      "P ou non(Q)",
      "P => Q",
      "non(Q) => P"
    ],
  },
  {
    type: 1,
    question: "Cocher , si elle existe, la traduction en langage mathématique de la phrase : L'ensemble des entiers naturels qui sont le produit d'une factorielle et d'un entier naturel impair",
    answer : "{a!(2b+ 1),  a, b ∈ N}",
    options:[
      "{a!(2b+ 1),  a, b ∈ N}",
      "{n ∈ N,  n!(2n+ 1)}",
      "{n!(2n+ 1),  n ∈ N}",
      "Aucune de ces réponses"
    ],
  },

  {
    type: 1,
    question :"Cocher la répone correcte",
    answer: "-1 ∈ Z",
    options:[
      "3 ⊂ R",
      "N ⊂ P(R)",
      "1 ∈ P(N)",
      "-1 ∈ Z"
    ],
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

