import React from "react";
import "./Questions.css";

interface QuestionsProps {
  pergunta: string;
}

const Questions: React.FC<QuestionsProps> = ({ pergunta }) => {
  return (
    <div className="question">
      <h2>{pergunta}</h2>
    </div>
  );
};

export default Questions;
