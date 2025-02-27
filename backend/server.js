const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'Hamlet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: "H2O",
  },
  {
    id: 5,
    question: "What is the fastest land animal?",
    options: ["Lion", "Cheetah", "Horse", "Elephant"],
    answer: "Cheetah",
  },
  {
    id: 6,
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 7,
    question: "Which is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Malta", "Liechtenstein"],
    answer: "Vatican City",
  },
  {
    id: 8,
    question: "Who discovered gravity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei",
      "Nikola Tesla",
    ],
    answer: "Isaac Newton",
  },
  {
    id: 9,
    question: "Which planet is known as the Red Planet?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Mars",
  },
  {
    id: 10,
    question: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 11,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    id: 12,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    answer: "Pacific",
  },
  {
    id: 13,
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Thomas Edison",
      "Nikola Tesla",
      "James Watt",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    id: 14,
    question: "Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Elephant", "Lion", "Gorilla"],
    answer: "Lion",
  },
  {
    id: 15,
    question: "What is the national bird of India?",
    options: ["Peacock", "Parrot", "Crow", "Sparrow"],
    answer: "Peacock",
  },
  {
    id: 16,
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "120°C", "110°C"],
    answer: "100°C",
  },
  {
    id: 17,
    question: "How many players are there in a cricket team?",
    options: ["10", "11", "12", "9"],
    answer: "11",
  },
  {
    id: 18,
    question: "Which gas is essential for breathing?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    answer: "Oxygen",
  },
  {
    id: 19,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
    answer: "Mount Everest",
  },
  {
    id: 20,
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: "Japan",
  },
  {
    id: 21,
    question: "What is the smallest bone in the human body?",
    options: ["Femur", "Tibia", "Stapes", "Radius"],
    answer: "Stapes",
  },
  {
    id: 22,
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    id: 23,
    question: "Which is the largest desert in the world?",
    options: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
    answer: "Antarctica",
  },
  {
    id: 24,
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile",
  },
  {
    id: 25,
    question: "What is the national currency of Japan?",
    options: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    id: 26,
    question: "Which country gifted the Statue of Liberty to the USA?",
    options: ["Germany", "France", "Italy", "UK"],
    answer: "France",
  },
  {
    id: 27,
    question: "How many colors are there in a rainbow?",
    options: ["5", "6", "7", "8"],
    answer: "7",
  },
  {
    id: 28,
    question: "What is the largest mammal?",
    options: ["Elephant", "Whale Shark", "Blue Whale", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    id: 29,
    question: "Which is the smallest planet in the solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Mercury",
  },
  {
    id: 30,
    question: "What is the hottest planet in the solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Venus",
  },
];

// Function to shuffle and select 10 random questions
function getRandomQuestions() {
  const shuffled = questions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 10);
}

app.get("/api/questions", (req, res) => {
  res.json(getRandomQuestions());
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
