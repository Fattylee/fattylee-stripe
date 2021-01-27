import { render } from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

const ApolloApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(ApolloApp, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
