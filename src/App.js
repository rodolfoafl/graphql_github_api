import React from "react";
import Repos from "./components/Repos";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import dotenv from "dotenv";
dotenv.config();

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="container mt-2">
        <h1 className="text-center">GraphQL GitHub API</h1>
        <Repos />
      </div>
    </ApolloProvider>
  );
};

export default App;
