import { useState } from "react";
import "./styles.css";
import GithubApi from "../../../components/GithubUserCard";

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const [searchUser, setSearchUser] = useState("");

  function handleSearch() {
    setSearchUser(inputValue);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    handleSearch();
  }

  return (
    <>
      <section className="dga-search-container">
        <div className="dga-search-card">
          <h2>Encontre um perfil Github</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Usuário Github"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />

            <button type="submit">Encontrar</button>
          </form>
        </div>
      </section>

      <GithubApi username={searchUser} />
    </>
  );
}
