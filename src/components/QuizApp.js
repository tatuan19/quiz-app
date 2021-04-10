import { React, useState, useEffect } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Quiz from './Quiz';

function QuizApp() {
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questions, checkAnswer] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    const [userAnswers, setUserAnswer] = useState(questions.map(()=> {
        return {tries: 0}
    }));
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    // TODO: co the su dung cho thong bao 
    // const [,]

    const handleAnswerClick = (index) => (e) => {
    };

    const handleEnterPress = (index) => (e) => {
    };

    const displayedQuestions = questions.map(question => (
        <div key={question.id}>
            <h3> {question.question} </h3>
            <input type="radio" value="A" name="answer" /><label>A. {question.A} </label>
            <input type="radio" value="B" name="answer" /><label>B. {question.B} </label>
            <input type="radio" value="C" name="answer" /><label>C. {question.C} </label>
            <input type="radio" value="D" name="answer" /><label>D. {question.D} </label>
        </div>

    ))

    return (
        <div className="container">
            <Quiz
                step={step}
                questions={questions}
                totalQuestions={totalQuestions}
                score={score}
                handleAnswerClick={handleAnswerClick}
                handleEnterPress={handleEnterPress}
            />
            {displayedQuestions}
        </div>
    );
}

export default QuizApp;