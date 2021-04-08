import { useState, useEffect } from 'react';

function useQuestionStorage(data, total) {

    const [questions, setQuestions] = useState([])

    useEffect(() => {

        while (questions.length < total) {
            var r = Math.floor(Math.random() * data.length) + 1;
            if (questions.indexOf(r) === -1) questions.push({...data[r],"id":r});
        }
        console.log(questions)
    });

    const clearQuestions = () => {
        setQuestions([]);

    };

    const checkAnswer = (index, answer) => {
        if (questions[index].answer === answer) {
            return true;
        }
        return false;
    }

    return [questions, checkAnswer];

}

export default useQuestionStorage;