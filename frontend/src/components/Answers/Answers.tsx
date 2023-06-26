import React, { useState } from "react";
import "./Answers.css"

interface AnswersProps {
  resposta: string[] | null;
}

const Answers: React.FC<AnswersProps> = ({ resposta }) => {
  const [mostrarReposta, setResposta] = useState(false);

  const handleButtonClick = () => {
    setResposta((defaultResp) => !defaultResp);
  };

  return (
    <div className="answer">
      <button onClick={handleButtonClick}>
        {mostrarReposta ? "Fechar" : "Mostrar Resposta"}
      </button>
      {mostrarReposta && <p>Resposta: {resposta}</p>}
    </div>
  );
};

export default Answers;
