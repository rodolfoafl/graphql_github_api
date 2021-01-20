import React from "react";
import Moment from "react-moment";

const RepoItem = ({
  repo: {
    name,
    owner,
    createdAt,
    url,
    isPrivate,
    isArchived,
    pushedAt,
    primaryLanguage,
  },
}) => {
  return (
    <div className="card card-body mb-3 text-light">
      <div className="row">
        <div className="col-md-9">
          <h5>Nome: {name}</h5>
          <h5 className="mb-4">Usuário: {owner.login}</h5>
          <h6 className="mb-4">
            Linguagem Principal:{" "}
            {primaryLanguage !== null && primaryLanguage.name}
          </h6>
          <h6>
            Criado em: <Moment format="DD/MM/YYYY">{createdAt}</Moment>
          </h6>
          <h6 className="mb-4">
            Atualizado em: <Moment format="DD/MM/YYYY">{pushedAt}</Moment>
          </h6>
          <h6>Arquivado: {isArchived ? "Sim" : "Não"}</h6>
          <h6>{isPrivate ? "Privado" : "Público"}</h6>
        </div>
        <div className="col-md-3">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
