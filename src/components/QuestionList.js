import React from 'react';
// import PropTypes from 'prop-types';
// import QUESTION_DATA from '../data/quiz-data.json';
// import useQuestionStorage from '../hooks/useQuestionStorage';
import Question from './Question';

function QuestionList({ questions, handleAnswerClick, handleEnterPress }) {
  return (
    <ul className="question-list">
      {questions.map((question, index) => {
        return (
          <Question
            // TODO: co bug nen phai comment => Lam
            key={index}
            questNum={index}
            question={question.question}
            answers={[{ "content": question.A }, { "content": question.B }, { "content": question.C }, { "content": question.D }]}
            handleAnswerClick={handleAnswerClick(index)}
            // handleEnterPress={handleEnterPress}
            
          />
        );
      })}
    </ul>
  );
}

// QuestionList.propTypes = {
//   questions: PropTypes.array.isRequired,
//   handleAnswerClick: PropTypes.func.isRequired,
//   handleEnterPress: PropTypes.func.isRequired
// };

export default QuestionList;