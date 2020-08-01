const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:4000'
  : 'https://devsoutinhoflix.herokuapp.com';

export default {
  URL_BACKEND,
};
