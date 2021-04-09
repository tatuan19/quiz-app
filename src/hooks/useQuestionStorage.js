import { useState, useEffect } from 'react';

function useQuestionStorage(data, total) {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getRandom(data, total)
        // console.log(questions)
    }, [])
    
    const getRandom = (data, total) => {
        var arr = []
        while (arr.length < total) {
            var rand = Math.floor(Math.random() * data.length);
            
            if (arr.indexOf(data[rand]) === -1) {
                arr.push({ ...data[rand], "id": rand });
            }

        }
        setQuestions(arr)
    }

    const clearQuestions = () => {
        setQuestions([]);

    };

    const checkAnswer = (index, answer) => {
        if (questions[index].answer === answer) {
            return true;
        }
        return false;
    }

    return [questions, clearQuestions, checkAnswer];

}

export default useQuestionStorage;