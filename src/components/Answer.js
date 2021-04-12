import React from 'react';
// import PropTypes from 'prop-types';

function Answer({ answer, ansNum, handleAnswerClick, handleEnterPress }) {
  const toAlphabet  = (number) => {
    if (number === 0) return 'A';
    if (number === 1) return 'B';
    if (number === 2) return 'C';
    if (number === 3) return 'D';
  };

  return (
    <div className="columns">
      <div className="column is-1">
        <div className="box notification is-primary" style={{
          fontWeight: "bold",
          padding: "20px 30px"
        }}
        onClick={handleAnswerClick}
        >{toAlphabet(ansNum)}</div>
      </div>
      <div className="column is-11">
        <div className="box">{answer}</div>
      </div>
    </div>
  );
}

export default Answer;
