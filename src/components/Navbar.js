import React from 'react';

function Navbar({ totalQuestions, step, score, restartQuiz }) {
    return (
        <nav className="level" style={{
            paddingTop: "2rem",
        }}>
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
                    <p className="heading"> </p>
                    <p className="title"></p>
                    <button className="button is-primary" onClick={restartQuiz}>
                        Restart
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
