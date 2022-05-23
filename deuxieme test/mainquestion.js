let questionsData = [
    {
      text: "qui as des pierre d'infinité",
      answers: [
        {
          text: "jesus",
          isCorrect: false
        },
        {
          text: "logan",
          isCorrect: false
        },
        {
          text: "thanos",
          isCorrect: true
        },
        {
            text: "olivier de carglass",
            isCorrect: false
          }
      ]
    },
    {
      text: "combien fait la somme de 6 et 3",
      answers: [
        {
          text: "9",
          isCorrect: true
        },
        {
          text: "63",
          isCorrect: false
        },
        {
          text: "2000000",
          isCorrect: false
        },
        {
          text: "L'infini",
          isCorrect: false
        }
      ]
    },
    {
      text: "quel est la taille de la langue d'une girafe",
      answers: [
        {
          text: "2km",
          isCorrect: false
        },
        {
          text: '200nm',
          isCorrect: false
        },
        {
          text: "50cm",
          isCorrect: true
        }
      ]
    },
    {
      text: "qu'es ce qu'un dindon",
      answers: [
        {
          text: "un oiseau",
          isCorrect: true
        },
        {
          text: "un herison",
          isCorrect: false
        },
        {
          text: "un mammifere",
          isCorrect: false
        },
        {
          text: "un reptile",
          isCorrect: false
        }
      ]
    },
    {
      text: "quel est le plus petit nombre",
      answers: [
        {
          text: " 1",
          isCorrect: true
        },
        {
          text: "2",
          isCorrect: false
        },
        {
          text: "3",
          isCorrect: false
        },
        {
          text: "soleil",
          isCorrect: false
        }
      ]
    }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let startBtn= document.getElementById('start-btn');
  let scoreContainer = document.getElementById("score-container");
  scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;
  
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
  
  shuffle(questionsData);
  
  // creating questions
  for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
      text: questionsData[i].text,
      answers: questionsData[i].answers
    });
    questions.push(question);
  }
startBtn.onclick=function(ev){
      if(!document.querySelector('question.popup.active')){
          appContainer.appendChild(questions[0].create());
          questions[0].html.classList.add('popup');
          questions[0].html.classList.add('active');
      }
  };


  document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
      score++;
    }
  
    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();
  
    if (answeredQuestions == questions.length) {
      setTimeout(function () {
        alert(`Quiz completed! \nFinal score: ${score}/${questions.length}`);
      }, 100);
    }
    else{
        let currentQuestion = document.querySelector('.question.popup.active');
        currentQuestion.classList.add('fadeout');
        setTimeout(()=>{
            appContainer.removeChild(currentQuestion);
            appContainer.appendChild(questions[answeredQuestions].create());
            questions[answeredQuestions].html.classList.add('popup');
            questions[answeredQuestions].html.classList.add('active');
        },1000);
    }
  });
  
  console.log(questions, questionsData);
  