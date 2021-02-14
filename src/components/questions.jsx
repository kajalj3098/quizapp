import React from "react";

function Question({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) {
  return (
    <div>
      <p className="number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map(answer => (
          <div key={answer}>
            <button disabled={!!userAnswer} onClick={callback} value={answer}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
