import React from 'react';
// import PropTypes from 'prop-types';
import Answer from './Answer';

const Question = ({ question, questNum, answers, handleAnswerClick, handleEnterPress }) => {
  return (

    <li className="question">
      {/* <h2 className="question-title" tabIndex="0">
        {question}
      </h2> */}
      <div className="box">
        <p style={{ fontSize: "1.5rem" }}>
          <span style={{ fontWeight: "bold", marginRight: "5px" }}>Q{questNum + 1}:</span> {question}
        </p>
      </div>
      <ul className="question-answers" tabIndex="-1">
        {/* Phai comment do dinh bug */}
        {/* TODO: Thuc */}
        {/* Loi do ko answer => xem lai nguon kiem answer tu dau ra de fix bug */}
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

// Question.propTypes = {
//   question: PropTypes.element.isRequired,
//   answers: PropTypes.array.isRequired,
//   handleAnswerClick: PropTypes.func.isRequired,
//   handleEnterPress: PropTypes.func.isRequired
// };

export default Question;
