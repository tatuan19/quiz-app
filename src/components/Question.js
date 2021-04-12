import React from 'react';
import Answer from './Answer';

const Question = ({ question, questNum, answers, handleAnswerClick, handleEnterPress }) => {
  return (

    <li className="question">
      <div className="box">
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>Q{questNum + 1}:</span> {question}
        </p>
      </div>
      <ul className="question-answers">
        {answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              ansNum={index}
              answer={answer.content}
              handleAnswerClick={handleAnswerClick(index)}
            // handleEnterPress={handleEnterPress(index)}
            />
          );
        })}
      </ul>
    </li>
  );
}

export default Question;
