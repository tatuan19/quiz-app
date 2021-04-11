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
            {/* Test thử cho một câu hỏi */}
            <div className="box">
                <p style={{ fontSize: "1.5rem" }}>
                    <span style={{ fontWeight: "bold", marginRight: "5px"}}>Q{step}:</span> Which of these companies is not an online stock brokerage?
                </p>
            </div>
            <div className="columns">
                <div className="column is-1">
                    <div className="box notification is-primary" style={{
                        fontWeight: "bold",
                        padding: "20px 30px"
                    }}>A</div>
                </div>
                <div className="column is-11">
                    <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-1">
                    <div className="box notification is-primary" style={{
                        fontWeight: "bold",
                        padding: "20px 30px"
                    }}>B</div>
                </div>
                <div className="column is-11">
                    <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-1">
                    <div className="box notification is-primary" style={{
                        fontWeight: "bold",
                        padding: "20px 30px"
                    }}>C</div>
                </div>
                <div className="column is-11">
                    <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-1">
                    <div className="box notification is-primary" style={{
                        fontWeight: "bold",
                        padding: "20px 30px"
                    }}>D</div>
                </div>
                <div className="column is-11">
                    <div className="box">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
            </div>
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