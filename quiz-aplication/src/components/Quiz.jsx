import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import './Quiz.css';

const Quiz = ({ topic, onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const quizCollection = collection(db, 'quizzes');
        const q = query(quizCollection, where('topic', '==', topic));
        const quizSnapshot = await getDocs(q);
        if (!quizSnapshot.empty) {
          const quizData = quizSnapshot.docs[0].data().questions;
          setQuestions(quizData);
        } else {
          console.error('No quizzes found for the given topic.');
        }
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };

    fetchQuestions();
  }, [topic]);

  const handleAnswerChange = (event, questionIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = event.target.value;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        handleReview();
      }
    }
  };

  const handleReview = () => {
    let newScore = 0;

    questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      const correctAnswer = question.answers.find(answer => answer.isCorrect);

      if (selectedAnswer === correctAnswer?.text) {
        newScore += 1;
      }
    });

    setScore(newScore);
    setShowScore(true);
  };

  const isAnswerSelected = selectedAnswers[currentQuestionIndex] !== undefined;

  if (questions.length === 0) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div>
      {showScore ? (
        <div className='result'>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}/{questions.length}</p>
          <button onClick={onRestart}>do another quiz</button> 
        </div>
      ) : (
        <div className='question'>
          <h2>{questions[currentQuestionIndex]?.question}</h2>
          <form>
            {questions[currentQuestionIndex]?.answers.map((answer, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={answer.text}
                  checked={selectedAnswers[currentQuestionIndex] === answer.text}
                  onChange={(event) => handleAnswerChange(event, currentQuestionIndex)}
                />
                <label>{answer.text}</label>
              </div>
            ))}
          </form>
          <button
            onClick={handleNextQuestion}
            disabled={!isAnswerSelected}
          >
            {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Review'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
