import { gql } from "@apollo/client";

export const FILTER_USER_REPOS = gql`
  query FilterRepos($query: String!, $number_of_repos: Int!) {
    search(query: $query, type: REPOSITORY, first: $number_of_repos) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            owner {
              login
            }
            isPrivate
            isArchived
            createdAt
            updatedAt
            pushedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export const ORDER_USER_REPOS = gql`
  query OrderRepos(
    $login: String!
    $results: Int!
    $orderField: RepositoryOrderField!
    $orderDirection: OrderDirection!
  ) {
    repositoryOwner(login: $login) {
      repositories(
        first: $results
        orderBy: { field: $orderField, direction: $orderDirection }
      ) {
        totalCount
        edges {
          node {
            id
            name
            url
            owner {
              login
            }
            isPrivate
            isArchived
            createdAt
            updatedAt
            pushedAt
            primaryLanguage {
              name
            }
          }
        }
      }
    }
  }
`;

export default ORDER_USER_REPOS;
