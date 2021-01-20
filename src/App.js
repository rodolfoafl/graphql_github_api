import React from "react";
import Repos from "./components/Repos";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const App = () => {
  const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer b7bbe5245469651a82629d037fd7316d4497b535`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: new InMemoryCache(),
  });

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
