import React from 'react';
import {gql, ApolloClient, useMutation} from '@apollo/client';

import { LoginForm } from '../components';
import * as LoginTypes from './__generated__/login';

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

export default function Login() {
  const [login, { data }] = useMutation<LoginTypes.login, LoginTypes.loginVariables> (LOGIN_USER);
  return <LoginForm login={login} />
}
