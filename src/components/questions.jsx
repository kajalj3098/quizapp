import React from "react";
import { AnswerObject } from "../App";
//  Props {
//   question: string;
//   answers: string[];
//   callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
//   userAnswer: AnswerObject | undefined;
//   questionNumber: number;
//   totalQuestions: number;
// };

function QuestionCard({
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

export default QuestionCard;
