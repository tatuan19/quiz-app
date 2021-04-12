import React from 'react';
import Navbar from './Navbar';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress, restartQuiz }) => {
    return (
        <div>
            <Navbar step={step} totalQuestions={totalQuestions} score={score} restartQuiz={restartQuiz}/>
            <div className="container">
                <QuestionList
                    step={step}
                    questions={questions}
                    handleAnswerClick={handleAnswerClick}
                    handleEnterPress={handleEnterPress}
                />
            </div>
        </div>
    );
}

export default Quiz;