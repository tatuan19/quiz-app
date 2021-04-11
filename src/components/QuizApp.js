import { React, useState } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Quiz from './Quiz';
import Results from './Results'

function QuizApp() {
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questions, setQuestions, checkAnswer] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    const [userAnswers, setUserAnswer] = useState(questions.map(() => {
        return { tries: 0 }
    }));
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    // TODO: co the su dung cho thong bao 
    // const [,]

    const handleAnswerClick = (index) => (e) => {
        //TODO: Lam
        console.log("Ban vua click vao cau tra loi")
        
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

            //setTimeout(() => this.showModal(tries), 750);

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
        //TODO: Lam
        if (e.keyCode === 13) {
            this.handleAnswerClick(index)(e);
        }
    };

    const showNotice = (tries) => {
        // TODO: Unknown

    }

    const nextStep = () => {
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        setStep(step + 1);
        setScore(updateScore(tries, score));
        setQuestions(questions.slice(1));
    }

    const updateScore = (tries, score) => {
        switch (tries) {
            case 1: return score + 10;
            case 2: return score + 5;
            case 3: return score + 2;
            default: return score + 1;
        }
    }

    const restartQuiz = () => {
        // TODO: Chien

    }
    
    // Render trang Results hoặc trang chủ Quiz (~ bình thường thường làm ở App.js)
    if (step >= totalQuestions + 1) {
        return (
            <Results
                score={score}
                restartQuiz={restartQuiz}
                userAnswers={userAnswers}
            />
        );
    } else return (
        <Quiz
            step={step}
            questions={questions}
            totalQuestions={totalQuestions}
            score={score}
            handleAnswerClick={handleAnswerClick}
            handleEnterPress={handleEnterPress}
        />
    );
}

export default QuizApp;