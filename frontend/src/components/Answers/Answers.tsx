import { ReactNode, useState } from "react";
import "./Answers.css";

import { CSSProperties } from "react";
import { FadeLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface AnswersProps {
  resposta: ReactNode;
  onClick: () => void;
  isLoading: boolean;
}

const Answers: React.FC<AnswersProps> = ({ resposta, onClick, isLoading }) => {
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
      <div>
        {mostrarResposta ? <button onClick={handleClose}>Fechar</button> : <button onClick={handleOpen}>Mostrar Resposta</button>}
        {mostrarResposta && isLoading ? <FadeLoader cssOverride={override} width={5} color={"white"} aria-label="Loading Spinner" data-testid="loader" /> : null}
        {!isLoading && mostrarResposta && <div className="data">Resposta:{resposta} </div>}
      </div>
    </div>
  );
};

export default Answers;
