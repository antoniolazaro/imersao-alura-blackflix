const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://imersao-react-blackflix.herokuapp.com';

export default {
  URL_BACKEND,
};
