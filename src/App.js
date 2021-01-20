import React from "react";
import Repos from "./components/Repos";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: "Bearer 094fd9e951273189bac9b47e5ae25211d64b86ef",
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
