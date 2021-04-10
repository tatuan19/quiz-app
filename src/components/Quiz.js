import React from 'react';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }) => {
    return (
      <div className="wrapper">
        <header>
          <div className="question-count">
            <h2>Question</h2>
            <div className="question-number">{step}</div>
            <div className="description">of <span>{totalQuestions}</span></div>
          </div>
          <h1>JavaScript Quiz</h1>
          <div className="score-container">
            <h2>Score</h2>
            <div className="score">{score}</div>
            <div className="description">points</div>
          </div>
        </header>
  
        <div className="questions">
          <QuestionList
            questions={questions}
            handleAnswerClick={handleAnswerClick}
            handleEnterPress={handleEnterPress}
          />
        </div>
      </div>
    );
  }

  export default Quiz;