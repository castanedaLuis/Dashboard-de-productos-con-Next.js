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
  const [error, setError]= useState(false);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const { data: access_token } = await axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password }, options);

    if(access_token.access_token){
        const token = access_token.access_token
        Cookie.set('token', token, { expires:5 } );

        // Ok ya tenemis el token, lo guardamos en una cookie y hacemos un default para que se implemente en la sig peticiones.
        axios.defaults.headers.Authorization = `Bearer ${token}`
        const { data: user } = await axios.get('https://api.escuelajs.co/api/v1/auth/profile');
        console.log(user);
        setUser(user) 
    }
  };
    // const signIn = async (email, password) => {
    //     const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
    //         method: 'POST',
    //         headers: {
    //             accept: '*/*',
    //             'Content-Type': 'application/json;charset=utf-8',
    //         },
    //         body: JSON.stringify({ email, password }),
    //     });
    //     const data = await response.json();
    //     //console.log(data.access_token);
    //     if(data.access_token){
    //         Cookie.set('token', data.access_token, { expires:5 } );
    // const options = {
    //     method: 'GET',
    //     headers: {
    //       authorization: `Bearer ${data.access_token}`,
    //     },
    //   };
    //   const data = await fetch(endPoints.auth.profile, options).then((res) => res.json());

    //     }
    // };

  return {
    user,
    signIn,
    error,
    setError
  };
}
