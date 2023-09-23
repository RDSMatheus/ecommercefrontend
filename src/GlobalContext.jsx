import React from 'react';
import { GET_TOKEN, GET_USER } from './api';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [logged, setLogged] = React.useState(false);

  const userLogout = React.useCallback(async () => {
    setData(null);
    setLogged(false);
    setLoading(false);
    window.localStorage.removeItem('token');
    console.log('deslogou');
  }, []);

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      try {
        getUser(token);
      } catch (error) {
        userLogout();
      }
    } else {
      setLogged(false);
    }
  }, [userLogout]);

  async function getUser(token) {
    try {
      console.log(token);
      const { url, options } = GET_USER(token);
      const data = await fetch(url, options);
      const user = await data.json(data);
      console.log(user);
      setData(user);
      setLogged(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin(body) {
    try {
      setLoading(true);
      const { url, options } = GET_TOKEN(body);
      const data = await fetch(url, options);
      const { token } = await data.json();
      getUser(token);
      window.localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{ data, loading, userLogin, logged, setLoading, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
