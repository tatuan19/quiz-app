import { React, useState, useEffect } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Question from './Question';

function QuizApp() {
    const totalQuestions = 10
    const [state, setState] = useState([]);
    const [questions, checkAnswer] = useQuestionStorage(QUESTION_DATA,totalQuestions);
    
    
    useEffect(() => {
        // setState(QUESTION_DATA)
        
    },[]);

    const handleAnswerClick = (index) => (e) => {
        const { questions, step, userAnswers } = this.state;
        const isCorrect = questions[0].correct === index;
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        if (isCorrect && e.target.nodeName === 'LI') {
        // Prevent other answers from being clicked after correct answer is clicked
        e.target.parentNode.style.pointerEvents = 'none';

        e.target.classList.add('right');

        userAnswers[currentStep] = {
            tries: tries + 1
        };

        this.setState({
            userAnswers: userAnswers
        });

        setTimeout(() => this.showModal(tries), 750);

        setTimeout(this.nextStep, 2750);
        }

        else if (e.target.nodeName === 'LI') {
        e.target.style.pointerEvents = 'none';
        e.target.classList.add('wrong');

        userAnswers[currentStep] = {
            tries: tries + 1
        };

        this.setState({
            userAnswers: userAnswers
        });
        }
    };

    const handleEnterPress = (index) => (e) => {
        if (e.keyCode === 13) {
        this.handleAnswerClick(index)(e);
        }
    };

    const displayedQuestions = questions.map(question => (
        <div key={question.id}>
            <h3> {question.question} </h3>
            <input type="radio" value="A" name="answer"  /><label>A. {question.A} </label>
            <input type="radio" value="B" name="answer" /><label>B. {question.B} </label>
            <input type="radio" value="C" name="answer" /><label>C. {question.C} </label>
            <input type="radio" value="D" name="answer" /><label>D. {question.D} </label>
        </div>
        
    ))

    return (
        <div className="container">
            {displayedQuestions}
        </div>
    );
}

export default QuizApp;