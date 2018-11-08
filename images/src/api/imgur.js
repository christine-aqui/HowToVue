const CLIENT_ID = '6ed9885e36b6136';
const ROOT_URL = 'https://api.imgur.com';
import qs from 'qs';

export default {
  login() {
    const querystring = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location = `$(ROOT_URL)/oauth2/authorize?${qs.stringify(querystring)}`;
  }
}