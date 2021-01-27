import { useQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { GET_ME, LOGIN } from "../query";

export const Register = () => {
  const [login, setLogin] = useState({ email: "", password: "" });
  const { data, loading, error } = useQuery(GET_ME);
  const [mutate, { error: mutateError }] = useMutation(LOGIN, {
    onError(error) {
      console.log(error);
    },
  });

  const handleCHange = (e: any) => {
    // console.log(e.target.name);
    // const [name, value] = e.target;
    console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setLogin((state) => ({ ...state, [name]: value }));
  };

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
            refetchQueries: [{ query: GET_ME }],
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
      {mutateError && <p>Error: {mutateError.message}</p>}
    </div>
  );
};
