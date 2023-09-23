const URL = 'http://localhost:3001/';

export const GET_USER = (token) => {
  console.log(token);
  return {
    options: {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    url: `${URL}users/getuser`,
  };
};

export const GET_TOKEN = (body) => {
  return {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
    url: `${URL}users/login`,
  };
};

export const POST_USER = (body) => {
  console.log(body);
  console.log(JSON.stringify(body));
  return {
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
    url: `${URL}users/register`,
  };
};

export const TOKEN_POST = (body) => {
  return {
    url: `${URL}/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const PRODUCTS_GET = () => {
  return {
    url: `${URL}products`,
    options: {
      method: 'GET',
    },
  };
};


