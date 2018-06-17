//app/routes/scientists.js
import Route from '@ember/routing/route';
import axios from 'npm:axios';

export default Route.extend({
  model() {
    return axios.get('https://api.github.com/users/github/repos?page=1')
    .then(function (response) {
      return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann', JSON.stringify(response)];
    })
    .catch(function (error) {
      return ([JSON.stringify(error)]);
    });
  }
});
