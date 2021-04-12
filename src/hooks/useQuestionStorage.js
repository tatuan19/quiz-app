import { useState, useEffect } from 'react';

function useQuestionStorage(data, total) {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        getRandom(data, total)
        // console.log(questions)
    }, []);

    const getRandom = (data, total) => {
        var arr = []
        while (arr.length < total) {
            var rand = Math.floor(Math.random() * data.length);

            if (arr.indexOf(data[rand]) === -1) {
                arr.push(data[rand]);
            }

        }
        setQuestions(arr)
    }

    const clearQuestions = () => {
        setQuestions([]);

    };

    const checkAnswer = (questNum, ansNum) => {
        if ((questions[questNum].answer === "A" && ansNum === 0) || (questions[questNum].answer === "B" && ansNum === 1) || (questions[questNum].answer === "C" && ansNum === 2) || (questions[questNum].answer === "D" && ansNum === 3)) {
            return true;
        }
        return false;
    }

    return [questions, setQuestions, checkAnswer, getRandom, clearQuestions];

}

export default useQuestionStorage;