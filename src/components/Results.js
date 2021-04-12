import React from 'react';
import tally from '../helpers/tally';

function Results({ userAnswers, score, restartQuiz }) {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> on the first try.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> on the second try.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong> on the third try.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> on the fourth try.</div>;
  
  return (
    <div className="results-container">
      <h2>Quiz Results</h2>
      <div>You answered...</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}

export default Results;