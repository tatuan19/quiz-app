import React from 'react';
// import PropTypes from 'prop-types';

const Answer = ({ answer, ansNum, handleAnswerClick, handleEnterPress }) => {
  return (
    // <li
    //   className="question-answer"
    //   tabIndex="0"
    //   onClick={handleAnswerClick}
    //   onKeyDown={handleEnterPress}
    // >
    //   {answer}
    // </li>
    <div className="columns" onClick={handleAnswerClick}>
      <div className="column is-1">
        <div className="box notification is-primary" style={{
          fontWeight: "bold",
          padding: "20px 30px"
        }}>{ansNum + 1}.</div>
      </div>
      <div className="column is-11">
        <div className="box">{answer}</div>
      </div>
    </div>
  );
}

// Answer.propTypes = {
//   answer: PropTypes.element.isRequired,
//   handleAnswerClick: PropTypes.func.isRequired,
//   handleEnterPress: PropTypes.func.isRequired
// };

export default Answer;
