import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function HomeBody() {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/search");
  }

  return (
    <>
      <main>
        <section className="dga-homeBody-container">
          <div>
            <h1>Desafio Github API</h1>
          </div>
          <div>
            <h2>DevSuperior - Escola de programação</h2>
          </div>
          <div>
            <button className="dga-homeBody-btn-primary" onClick={handleStart}>
              Começar
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
