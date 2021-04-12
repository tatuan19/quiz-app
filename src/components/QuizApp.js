import { React, useEffect, useState } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';
import Quiz from './Quiz';
import Results from './Results';
import Notification from './Notification'
import shuffleQuestions from '../helpers/shuffleQuestions';

function QuizApp() {
    const [totalQuestions, setTotalQuestions] = useState(10);
    const [questions, setQuestions, checkAnswer, getRandom] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    const [userAnswers, setUserAnswer] = useState(Array(totalQuestions).fill({ tries: 0 }));
    const [step, setStep] = useState(1);
    const [score, setScore] = useState(0);
    const [noticeState, setNoticeState] = useState({
        state: false,
        praise: '',
        points: ''
    });

    const handleAnswerClick = (questNum) => (ansNum) => (e) => {
        const isCorrect = checkAnswer(questNum, ansNum)
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        if (isCorrect) {
            //cập nhật các giá trị nếu câu trả lời đúng
            e.target.parentNode.parentNode.parentNode.style.pointerEvents = 'none';

            e.target.classList.add('notification');
            e.target.classList.add('is-info');

            let temp = userAnswers;
            temp[currentStep] = {
                tries: tries + 1
            };
            setUserAnswer(temp);

            // show modal
            setTimeout(() => showNotice(tries), 750);
            // next step
            setTimeout(() => nextStep(), 2000);
            
            console.log("true");
        }
        else {
            //Cập nhật các giá trị nếu câu trả lời sai
            e.target.style.pointerEvents = 'none';

            e.target.classList.add('notification');
            e.target.classList.add('is-danger');

            let temp = userAnswers;
            temp[currentStep] = {
                tries: tries + 1
            };
            setUserAnswer(temp);

            console.log("false")
        }
    };

    const handleEnterPress = (index) => (e) => {
        // TODO:
    };

    const showNotice = (tries) => {
        let praise;
        let points;

        switch (tries) {
            case 0: {
                praise = '1st Try!';
                points = '+10';
                break;
            }
            case 1: {
                praise = '2nd Try!';
                points = '+5';
                break;
            }
            case 2: {
                praise = 'Correct!';
                points = '+2';
                break;
            }
            default: {
                praise = 'Correct!';
                points = '+1';
            }
        }

        setNoticeState({ state: true, praise: praise, points: points });
    }

    const nextStep = () => {
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        setStep(step + 1);
        setScore(updateScore(tries, score));
        setNoticeState({ state: false });
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
        const QUESTIONS = shuffleQuestions(QUESTION_DATA).slice(0, totalQuestions);
        setQuestions(QUESTIONS);
        setUserAnswer(QUESTIONS.map(() => {
            return {
                tries: 0
            }
        }));
        setStep(1);
        setScore(0);
        setNoticeState({
            state: false,
            praise: '',
            points: ''
        });
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
            <Notification state={noticeState}></Notification>
            <Quiz
                step={step}
                questions={questions}
                totalQuestions={totalQuestions}
                score={score}
                handleAnswerClick={handleAnswerClick}
                handleEnterPress={handleEnterPress}
                restartQuiz={() => {window.location.reload()}}
            />
        </>
    );
}

export default QuizApp;