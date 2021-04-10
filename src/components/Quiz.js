import React from 'react';
import QuestionList from './QuestionList';

const Quiz = ({ step, questions, totalQuestions, score, handleAnswerClick, handleEnterPress }) => {
    return (

        <div className="container">
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Total Questions</p>
                        <p className="title">{totalQuestions}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Question</p>
                        <p className="title">{step}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div className="notification is-primary title">FUNNY QUIZ</div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">Score</p>
                        <p className="title">{score}</p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading"></p>
                        <p className="title"></p>
                    </div>
                </div>
            </nav>
            <div className="questions">
                <QuestionList
                    questions={questions}
                    handleAnswerClick={handleAnswerClick}
                    handleEnterPress={handleEnterPress}
                />
            </div>
        </div >
    );
}

export default Quiz;