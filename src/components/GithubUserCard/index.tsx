import { useEffect, useState } from "react";
import "./styles.css";
import { findGithubUser } from "../../services/github-api-services";
import type { GithubUser } from "../../models/github";



type Props = {
  username: string;
};

export default function GithubApi({ username }: Props) {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;

    findGithubUser(`${username}`)
      .then((response) => {
        setUser(response.data);
        setError(false);
      })
      .catch(() => {
        setUser(null);
        setError(true);
      });
  }, [username]);

  if (error) {
    return <div className="dga-github-error">Erro ao buscar usuário</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="dga-github-container">
      <div className="dga-github-card">
        <div className="dga-github-image">
          <img src={user.avatar_url} alt="Foto do usuário" />
        </div>

        <div className="dga-github-info">
          <h3>Informações</h3>

          <div className="dga-github-info-item">
            <strong>Perfil:</strong> <a href={user.html_url}>{user.html_url}</a>
          </div>

          <div className="dga-github-info-item">
            <strong>Seguidores:</strong> {user.followers}
          </div>

          <div className="dga-github-info-item">
            <strong>Localidade:</strong> {user.location}
          </div>

          <div className="dga-github-info-item">
            <strong>Nome:</strong> {user.name}
          </div>
        </div>
      </div>
    </div>
  );
}
