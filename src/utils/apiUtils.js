import fetch from 'isomorphic-fetch';

export const fetchApi = async (url) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  const options = {
    method: 'GET',
    headers: headers,
    mode: 'no-cors',
    cache: 'default'
  };
  const request = new Request(url, options);

  return fetch(request)
    .then(response => {
      console.log('=========', response);
      return response.json();
    });
};

