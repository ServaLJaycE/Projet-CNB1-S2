// creating an array and passing the number, questions, options, and answers
let questions = [
    {
      type: 2,  
    question: "Bamako est la capitale du Mali.",
    answer: "Vrai",
    options: [
      "Vrai",
      "Faux"
    ],
    explanation: "Bamako est la capitale et la plus grande ville du Mali.",
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
  ],
  explanation: "Ottawa est aujourd'hui la capitale et la quatrième ville en importance au Canada.",
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
    ],
    explanation: "Istanbul est la seulle ville au monde à chevaucher 2 continents, l'Europe et l'Asie. Symbole de cette double identité, Istanbul a été nommée capitale européenne de la culture en 2010.",
  },

    {
      type:2,  
    question: "Moins de la moitié du Japon est recouvert par des montagnes",
    answer: "Faux",
    options: [
      "Vrai",
      "Faux",
    ],
    explanation:"Les montagnes occupent 63 % du territoire, les collines 12 %, les plateaux 11 % et les plaines seulement 14 % (lacs et rivières exclus). Seul un peu plus du cinquième du territoire est habitable, près des littoraux.",
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
    ],
    explanation:"Jean Moulin, un haut fonctionnaire et résistant français, est mort le 8 juillet 1943 près de Metz, en Moselle annexée, dans un convoi en partance pour l'Allemagne.",
  },

  {
    type:2,
    question:"Les Philippines sont composées de 7000 îles",
    answer:"Vrai",
    options: [
      "Vrai",
      "Faux"
    ],
    explanation: "Le pays compte plus de 7000 îles plus ou moins grandes et développées, baignées par la Mer de Chine et l'Océan Pacifique. Parmi ces îles philippines, onze d'entre elles totalisent plus de 95% des terres et plus de 2500 n'ont pas d'appellation officielle à cause de leur trop petite superficie.",
    },


{
 type:1,
 question:"De combien d'îles est composé l'archipel d'Hawaï ?",
 answer:"6",
 options: [
   "3",
   "4",
   "5",
   "6"
      ],
  explanation:"L'archipel d'Hawaï compte six îles principales: Kauai, Oahu, Molokai, Lanai, Maui et l'île d'Hawaï.",
      },    

{
type:2,
question:"La première guerre mondiale est déclenchée par un bombardement à Sarajevo.",
answer:"Faux",
options: [
  "Vrai",
  "Faux"
],
explanation:"La première guerre mondiale est déclenchée à cause de l'assassinat de l'archiduc François Ferdinand en 1914.",
},

{
  type:2,
  question:"Le camp de concentration d’Auschwitz est le premier à avoir été créé par le régime nazi.",
  answer:"Faux",
  options: [
    "Vrai",
    "Faux"
  ],
  explanation:"Le premier camp de concentration créé par le régime nazi est le Dachau, au nord-ouest de Munich.",
  },

{
type:1,
question:"Laquelle de ses femmes a été reine d'Egypte ?",
answer:"Cléopâtre VII",
options: [
  "Héreni",
  "Thymis",
  "Cléopâtre VII",
  "Nifitini"
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