import config from '../config';

const END_POINT_CATEGORIES = `${config.URL_BACKEND}/videos`;

function insert(values) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  };

  return fetch(END_POINT_CATEGORIES, requestOptions)
    .then(async (response) => {
      if (response.ok) {
        const resposta = await response.json();
        return resposta;
      }
      throw new Error('Não foi possível carregar os dados do servidor :(');
    });
}

export default {
  insert,
};
