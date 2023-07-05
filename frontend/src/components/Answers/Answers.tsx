import { ReactNode, useState } from "react";
import "./Answers.css";


interface AnswersProps {
  resposta: ReactNode;
  onClick: () => void;
}

const Answers: React.FC<AnswersProps> = ({ resposta, onClick }) => {
  const [mostrarResposta, setResposta] = useState(false);

  const handleClose = () => {
    setResposta(false);
  };

  const handleOpen = () => {
    setResposta(true);
    onClick();
  };

  return (
    <div className="answer sweet-loading">
      {mostrarResposta ? <button onClick={handleClose}>Fechar</button> : <button onClick={handleOpen}>Mostrar Resposta</button>}

      {mostrarResposta && <div className="data">Resposta: {resposta}</div>}
    </div>
  );
};

export default Answers;
