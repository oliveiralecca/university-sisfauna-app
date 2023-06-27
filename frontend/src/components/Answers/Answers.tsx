import { ReactNode, useState } from "react";
import "./Answers.css"

interface AnswersProps {
  resposta: ReactNode; // passei esse tipo pq aceita tudo quanto é tipo de coisa, se parar o mouse em cima dele, verás que ele aceita string, number, boolean, outro nó, etc.
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
