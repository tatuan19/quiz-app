import React from 'react';
import Answer from './Answer';

const Question = ({ question, questNum, answers, handleAnswerClick, handleEnterPress }) => {
  return (
    <div>
      <li className="question" style={{ margin: "3rem 0" }}>
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
      <hr/>
    </div>
  );
}

export default Question;
