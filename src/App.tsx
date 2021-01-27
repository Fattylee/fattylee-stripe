import React, { useState } from "react";
import { gql } from "apollo-boost";
import { Mutation, Query } from "react-apollo";

const GET_ME = gql`
  query ME {
    me {
      id
      email
    }
  }
`;

const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;

export const App = () => {
  const [login, setLogin] = useState({ email: "", password: "" });

  const handleCHange = (e: any) => {
    // console.log(e.target.name);
    // const [name, value] = e.target;
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setLogin((state) => ({ ...state, [name]: value }));
  };

  return (
    <Mutation mutation={LOGIN}>
      {(mutate: any) => (
        <Query query={GET_ME}>
          {({ data, loading, error }: any) => {
            if (loading) return <p>Loading...</p>;

            if (error) return <p>Error: {error.message}</p>;

            if (!data) return <p>No data</p>;

            return (
              <div>
                {JSON.stringify(data, null, 1)}
                <h1>this is good</h1>
                <p>this is a paragraph</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    mutate({
                      update(_: any, data: any) {
                        console.log(data);
                      },
                      variables: {
                        email: login.email,
                        password: login.password,
                      },
                    });
                  }}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={login.email}
                    onChange={handleCHange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={login.password}
                    onChange={handleCHange}
                  />
                  <input type="submit" value="Login" />
                </form>
              </div>
            );
          }}
        </Query>
      )}
    </Mutation>
  );
};
