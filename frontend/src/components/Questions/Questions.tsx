import React, { useState } from "react";
import "./Questions.css";

interface QuestionsProps {
  pergunta: string;
  resposta: string;
}

const Questions: React.FC<QuestionsProps> = ({ pergunta, resposta }) => {
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const handleButtonClick = () => {
    setMostrarResposta((defaultResp) => !defaultResp);
  };
  return (
    <div className="question">
      <h2>{pergunta}</h2>
      <button onClick={handleButtonClick}>
        {mostrarResposta ? "Fechar" : "Mostrar Resposta"}
      </button>
      {mostrarResposta && <p>Resposta: {resposta}</p>}
    </div>
  );
};

export default Questions;
