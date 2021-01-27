import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import React from "react";
import "./index.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
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
