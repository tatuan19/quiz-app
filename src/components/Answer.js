import React from 'react';
// import PropTypes from 'prop-types';

function Answer({ answer, ansNum, handleAnswerClick, handleEnterPress }) {
  return (
    <div className="columns">
      <div className="column is-1">
        <div className="box notification is-primary" style={{
          fontWeight: "bold",
          padding: "20px 30px"
        }}
        onClick={handleAnswerClick}
        >{ansNum + 1}</div>
      </div>
      <div className="column is-11">
        <div className="box">{answer}</div>
      </div>
    </div>
  );
}

export default Answer;
