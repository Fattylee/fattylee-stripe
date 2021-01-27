import { gql } from "@apollo/client";

export const GET_ME = gql`
  query ME {
    me {
      id
      email
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
