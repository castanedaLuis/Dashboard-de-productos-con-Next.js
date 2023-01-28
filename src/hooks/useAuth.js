import { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

//   const signIn = async (email, password) => {
//     const options = {
//       headers: {
//         accept: '*/*',
//         'Content-Type': 'application/json',
//       },
//     };
//     const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);
//     console.log('token', access_token);
//   };
const signIn = async (email, password) => {
    const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
            accept: '*/*',
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    console.log(data.access_token);
};

  return {
    user,
    signIn,
  };
}
