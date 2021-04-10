import { React, useState } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Quiz from './Quiz';
import Results from './Results'

function QuizApp() {
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questions, checkAnswer] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    const [userAnswers, setUserAnswer] = useState(questions.map(() => {
        return { tries: 0 }
    }));
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    // TODO: co the su dung cho thong bao 
    // const [,]

    const handleAnswerClick = (index) => (e) => {
        //TODO: Lam

    };

    const handleEnterPress = (index) => (e) => {
        // TODO: Lam

    };

    const showNotice = (tries) => {
        // TODO: Unknown

    }

    const nextStep = () => {
        // TODO: Unknown

    }

    const updateScore = (tries, score) => {
        // TODO: Unknown

    }

    const restartQuiz = () => {
        // TODO: Chien

    }

    console.log(step + " " + questions + " " + totalQuestions + " " + score)

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