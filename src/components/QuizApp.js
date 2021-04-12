import { React, useEffect, useState } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Quiz from './Quiz';
import Results from './Results'
import shuffleQuestions from '../helpers/shuffleQuestions';

function QuizApp() {
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questions, setQuestions, checkAnswer, getRandom] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    const [userAnswers, setUserAnswer] = useState(Array(totalQuestions).fill({ tries: 0 }));
    const [step, setStep] = useState(11);
    const [score, setScore] = useState(0);
    // TODO: co the su dung cho thong bao 
    // const [,]

    const handleAnswerClick = (questNum) => (ansNum) => (e) => {
        //TODO: Lam
        // console.log(questions[questNum].answer)
        // console.log(ansNum)
        const isCorrect = checkAnswer(questNum, ansNum)
        if (isCorrect) {
            //cập nhật các giá trị nếu câu trả lời đúng
            if (e.target.classList.contains('has-background-danger')) e.target.classList.remove('has-background-danger');
            e.target.classList.add('has-background-primary');
           
            console.log("true");
            
        }
        else {
            //Cập nhật các giá trị nếu câu trả lời sai
            
            e.target.classList.add('has-background-danger');
            // e.target.style.pointerEvents = 'none';
         
            console.log("false")
        
        }
    };

    const handleEnterPress = (index) => (e) => {
        // TODO: Lam

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
        const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);
        setQuestions(QUESTIONS);
        setUserAnswer(QUESTIONS.map(() => {
            return {
                tries: 0
            }
        }));
        setStep(1);
        setScore(0);
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
        <>
            <button className="button is-fullwidth" 
            onClick={(e) => { 
                getRandom(QUESTION_DATA, totalQuestions);
                var changeStyleAnswer = document.getElementsByClassName("box");
                for(let i =0;i<changeStyleAnswer.length;i++){
                    // console.log(changeStyleAnswer[i].classList.contains('has-background-primary') + '-----');
                    // console.log(changeStyleAnswer[i].classList.contains('has-background-danger') + '-----aa');
                    if (changeStyleAnswer[i].classList.contains('has-background-danger')) changeStyleAnswer[i].classList.remove('has-background-danger');
                    if (changeStyleAnswer[i].classList.contains('has-background-primary')) changeStyleAnswer[i].classList.remove('has-background-primary');
                    
                }
            }}
            >Reset question</button>
            <Quiz
                step={step}
                questions={questions}
                totalQuestions={totalQuestions}
                score={score}
                handleAnswerClick={handleAnswerClick}
                handleEnterPress={handleEnterPress}
            />
        </>
    );
}

export default QuizApp;