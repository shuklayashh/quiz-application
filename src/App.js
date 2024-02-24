import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
      {
        id: 4,
      question: "Which planet is known as the Red Planet?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Sun",
          correct: false,
        },
        {
          text: "Pluto",
          correct: true,
        },
      ],
      },

      {
        id: 5,
      question: "Who wrote the famous novel To Kill a Mockingbird?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Sun",
          correct: false,
        },
        {
          text: "Pluto",
          correct: true,
        },
      ],
      },
      {
        id: 6,
      question: "Who is the Greek god of the sea",
      answers: [
        {
          text: "Zeus",
          correct: false,
        },
        {
          text: "Hades",
          correct: false,
        },
        {
          text: "Poseidon",
          correct: true,
        },
        {
          text: "Apollo",
          correct: false,
        },
      ],
      },
      {
        id: 7,
      question: "Who wrote the famous novel To Kill a Mockingbird?",
      answers: [
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Sun",
          correct: false,
        },
        {
          text: "Pluto",
          correct: false,
        },
      ],
      },

      {
        id: 8,
      question: "Which country is famous for its tulips and windmills",
      answers: [
        {
          text: "Denmark",
          correct: false,
        },
        {
          text: "Netherland",
          correct: true,
        },
        {
          text: "Belgium",
          correct: false,
        },
        {
          text: "Switzerland",
          correct: false,
        },
      ],
      },

      {
        id: 9,
      question: "Who painted the famous artwork Starry Night?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: true,
        },
        {
          text: "Pablo",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
      },

      {
        id: 10,
      question: "What is the capital city of Australia?",
      answers: [
        {
          text: "Sydney",
          correct:false,
        },
        {
          text: "Canberra",
          correct: true,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Perth",
          correct: true,
        },
      ],
      },

      {
        id: 11,
      question: "Who wrote the famous novel To Kill a Mockingbird?",
      answers: [
        {
          text: "J.K. Rowling",
          correct: false,
        },
        {
          text: "Ernest Hemingway",
          correct: true,
        },
        {
          text: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          text: "Harper Lee",
          correct: true,
        },
      ],
      },

      {
        id: 12,
      question: "Which of the following is the longest river in the world?",
      answers: [
        {
          text: "Nile",
          correct: true,
        },
        {
          text: "Amazon",
          correct: true,
        },
        {
          text: "Mississippi",
          correct: false,
        },
        {
          text: "Yangtze",
          correct: true,
        },
      ],
      },

      {
        id: 13,
      question: "Who painted the famous artwork Starry Night?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo",
          correct: true,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: true,
        },
      ],
      },
      {
        id: 9,
      question: "Who painted the famous artwork Starry Night?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo",
          correct: true,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: true,
        },
      ],
      },
      {
        id: 9,
      question: "Who painted the famous artwork Starry Night?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Pablo",
          correct: true,
        },
        {
          text: "Leonardo da Vinci",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: true,
        },
      ],
      }
   
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;