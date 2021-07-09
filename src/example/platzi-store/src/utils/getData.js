const getData = api => {
  return fetch(api)
    .then(response => reponse.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
