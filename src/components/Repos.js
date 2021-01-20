import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import RepoItem from "./RepoItem";

import { FILTER_USER_REPOS, ORDER_USER_REPOS } from "../queries/graphql";

const Repos = () => {
  const [filterRepos, { loading, error, data }] = useLazyQuery(
    FILTER_USER_REPOS
  );
  const [
    orderRepos,
    { loading: orderLoading, error: orderError, data: orderData },
  ] = useLazyQuery(ORDER_USER_REPOS);

  const [repoName, setRepoName] = useState("");
  // const [userName, setUserName] = useState("");
  const [maxResults, setMaxResults] = useState(5);
  const [orderMaxResults, setOrderMaxResults] = useState(5);
  const [language, setLanguage] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [sortMethod, setSortMethod] = useState("NAME-ASC");
  const [isOrder, setIsOrder] = useState(false);

  const setQueryParameters = () => {
    let query = "user:rodolfoafl ";

    // if (userName !== "") {
    //   query += `user:${userName} `;
    // }
    if (repoName !== "") {
      query += `in:name ${repoName} `;
    }
    if (isPrivate) {
      query += `is:private `;
    }
    if (isArchived) {
      query += `archived:${isArchived} `;
    }
    if (language !== "") {
      query += `language:${language} `;
    }

    return query;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsOrder(false);

    let variables = {
      query: setQueryParameters(),
      number_of_repos: maxResults,
    };

    filterRepos({ variables: variables });
  };

  const handleSortSubmit = (e) => {
    e.preventDefault();
    setIsOrder(true);

    let variables = {
      login: "rodolfoafl",
      results: orderMaxResults,
      orderField: sortMethod.split("-")[0],
      orderDirection: sortMethod.split("-")[1],
    };

    orderRepos({ variables: variables });
  };

  const setResultText = (data) => {
    let count = 0;
    if (data) {
      if (data.search !== undefined) {
        count = data.search.repositoryCount;
      }
      if (count > 0) {
        let from = count;
        let current;
        if (maxResults >= count) {
          current = count;
        } else {
          current = maxResults;
        }

        return `Mostrando ${current} de ${from}.`;
      } else {
        return "Nenhum repositório encontrado.";
      }
    }
  };

  useEffect(() => {
    let variables = {
      login: "rodolfoafl",
      results: orderMaxResults,
      orderField: sortMethod.split("-")[0],
      orderDirection: sortMethod.split("-")[1],
    };

    orderRepos({ variables: variables });
  }, [orderMaxResults, sortMethod, orderRepos]);

  useEffect(() => {
    let variables = {
      query: setQueryParameters(),
      number_of_repos: maxResults,
    };

    filterRepos({ variables: variables });
  }, [maxResults, filterRepos]);

  return (
    <div className="mt-4">
      <div className="row">
        <div className="col">
          <form className="bg-secondary text-light p-3" id="searchForm">
            <div className="form-group">
              <label htmlFor="repoName">Buscar por nome do repositório</label>
              <input
                type="text"
                className="form-control"
                id="repoName"
                placeholder="Repositório"
                name="repoName"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="userName">Buscar por nome do usuário</label>
              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Usuário"
                name="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div> */}
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label htmlFor="maxResults" className="col-md-12">
                    Número de resultados:
                  </label>
                </div>
                <div className="col">
                  <select
                    className="custom-select col-md-12"
                    id="maxResults"
                    name="maxResults"
                    onChange={(e) => setMaxResults(Number(e.target.value))}
                    value={maxResults}
                  >
                    <option defaultValue="" disabled>
                      Selecione o número de resultados
                    </option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group" id="separator">
              <div className="row">
                <div className="col">
                  <label className="col-md-12">Opções de filtro: </label>
                </div>
                <div className="col">
                  <label className="form-check-label col-md-12">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="private"
                      checked={isPrivate}
                      onChange={(e) => setIsPrivate(e.target.checked)}
                    />
                    Privado
                  </label>
                  <label className="form-check-label col-md-12">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="archived"
                      checked={isArchived}
                      onChange={(e) => setIsArchived(e.target.checked)}
                    />
                    Arquivado
                  </label>
                  <div className="row mt-2">
                    <div className="col-md-12 mb-2">
                      <small>Linguagem Principal:</small>
                    </div>
                    <div className="col">
                      <label className="form-check-label col-md-12">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios1"
                          value="c"
                          checked={language === "c"}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        C
                      </label>
                      <label className="form-check-label col-md-12">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios2"
                          value="c#"
                          checked={language === "c#"}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        C#
                      </label>
                    </div>
                    <div className="col">
                      <label className="form-check-label col-md-12">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios3"
                          value="javascript"
                          checked={language === "javascript"}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        JavaScript
                      </label>
                      <label className="form-check-label col-md-12">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios4"
                          value="php"
                          checked={language === "php"}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        PHP
                      </label>
                      <label className="form-check-label col-md-12">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="optionsRadios"
                          id="optionsRadios5"
                          value=""
                          checked={language === ""}
                          onChange={(e) => setLanguage(e.target.value)}
                        />
                        Qualquer
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mt-2"
                onClick={(e) => handleSearchSubmit(e)}
              >
                Buscar
              </button>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label htmlFor="orderMaxResults" className="col-md-12">
                    Número de resultados:
                  </label>
                </div>
                <div className="col">
                  <select
                    className="custom-select col-md-12"
                    id="orderMaxResults"
                    name="orderMaxResults"
                    onChange={(e) => setOrderMaxResults(Number(e.target.value))}
                    value={orderMaxResults}
                  >
                    <option defaultValue="" disabled>
                      Selecione o número de resultados
                    </option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col">
                  <label htmlFor="sortMethod" className="col-md-12">
                    Método de ordenação:
                  </label>
                </div>
                <div className="col">
                  <label className="form-check-label col-md-12">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sortMethodOptions"
                      id="sortMethodOptions1"
                      value="NAME-ASC"
                      checked={sortMethod === "NAME-ASC"}
                      onChange={(e) => setSortMethod(e.target.value)}
                    />
                    Alfabeticamente (A-Z)
                  </label>
                  <label className="form-check-label col-md-12">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sortMethodOptions"
                      id="sortMethodOptions3"
                      value="NAME-DESC"
                      checked={sortMethod === "NAME-DESC"}
                      onChange={(e) => setSortMethod(e.target.value)}
                    />
                    Alfabeticamente (Z-A)
                  </label>
                  <label className="form-check-label col-md-12">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sortMethodOptions"
                      id="sortMethodOptions2"
                      value="PUSHED_AT-ASC"
                      checked={sortMethod === "PUSHED_AT-ASC"}
                      onChange={(e) => setSortMethod(e.target.value)}
                    />
                    Atualização (Push) - Mais Antigo
                  </label>
                  <label className="form-check-label col-md-12">
                    <input
                      type="radio"
                      className="form-check-input"
                      name="sortMethodOptions"
                      id="sortMethodOptions4"
                      value="PUSHED_AT-DESC"
                      checked={sortMethod === "PUSHED_AT-DESC"}
                      onChange={(e) => setSortMethod(e.target.value)}
                    />
                    Atualização (Push) - Mais Recente
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={(e) => handleSortSubmit(e)}
            >
              Ordenar
            </button>
          </form>
        </div>
        <div className="col">
          {isOrder ? (
            <>
              {orderLoading ? (
                <p>Loading...</p>
              ) : (
                <h4>{`Mostrando ${orderMaxResults}.`}</h4>
              )}
              {orderError && <p>Error: {orderError.message}</p>}
              {orderData &&
                orderData.repositoryOwner.repositories.edges.map((repo) => (
                  <RepoItem key={repo.node.id} repo={repo.node} />
                ))}
            </>
          ) : (
            <>
              {loading ? <p>Loading...</p> : <h4>{setResultText(data)}</h4>}
              {error && <p>Error: {error.message}</p>}
              {data &&
                data.search.edges.map((repo) => (
                  <RepoItem key={repo.node.id} repo={repo.node} />
                ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Repos;
