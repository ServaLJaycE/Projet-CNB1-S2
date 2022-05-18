let questionsData = [
    {
      text: "qui est dieu le divin",
      answers: [
        {
          text: "jesus",
          isCorrect: false
        },
        {
          text: "logan",
          isCorrect: true
        },
        {
          text: "thanos",
          isCorrect: false
        },
        {
            text: "olivier de carglass",
            isCorrect: false
          }
      ]
    },
    {
      text: "combien fait la somme de 6 et 9",
      answers: [
        {
          text: "15",
          isCorrect: true
        },
        {
          text: "69",
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
      text: "quel est le bruit du dindon",
      answers: [
        {
          text: "glouglouglouglouglouglou",
          isCorrect: true
        },
        {
          text: "glaglaglaglaglaglalgla",
          isCorrect: false
        },
        {
          text: "aaaaaaaaaaaaaaaaaaaaaaaah",
          isCorrect: false
        },
        {
          text: "sbub sbub",
          isCorrect: false
        }
      ]
    },
    {
      text: "combien y a t'il de pierre d'infiniter?",
      answers: [
        {
          text: "je s'appelle groot",
          isCorrect: true
        },
        {
          text: "je s'appelle groot",
          isCorrect: false
        },
        {
          text: "je s'appelle groot",
          isCorrect: false
        },
        {
          text: "je s'appelle groot",
          isCorrect: false
        }
      ]
    }
  ];
  
  // variables initialization
  let questions = [];
  let score = 0,answeredQuestions = 0;
  let appContainer = document.getElementById("questions-container");
  let startBtn=document.getElementById('start-btn');
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
  startBtn.onclick=(ev)=>{
      if(!document.querySelector('.question.popup.active')){
          appContainer.appendChild(question[0].create());
          questions[0].html.classList.add('.popup');
          questions[0].html.classList.add('.active');
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
  