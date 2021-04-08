import { React, useState, useEffect } from 'react';
import QUESTION_DATA from '../data/quiz-data.json';
import useQuestionStorage from '../hooks/useQuestionStorage';

function QuizApp() {
    const totalQuestions = 10
    
    const [questions, checkAnswer] = useQuestionStorage(QUESTION_DATA, totalQuestions);
    // const [count, setCount] = useState(0);

    // const handleClick = () => {
    //     setCount(count + 1);
    //     console.log(count)
    // }

    // const displayedQuestions = questions.map(question => (
    //     <div key={question.id}>
    //         <h3> {question.question} </h3>
    //         <input type="radio" value="A" name="answer"  /><label>A. {question.A} </label>
    //         <input type="radio" value="B" name="answer" /><label>B. {question.B} </label>
    //         <input type="radio" value="C" name="answer" /><label>C. {question.C} </label>
    //         <input type="radio" value="D" name="answer" /><label>D. {question.D} </label>
    //     </div>
    // ))

    return (
        <div className="container">
            {/* {displayedQuestions}
            <button onClick={handleClick}>Click me!</button> */}
        </div>
    );
}

export default QuizApp;