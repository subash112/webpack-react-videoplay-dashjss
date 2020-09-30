import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://gizmo.rakuten.tv/',
  timeout: 10000,
  params: {
    classification_id: 5,
    device_identifier: 'web',
    locale: 'es',
    market_code: 'es',
  },
  httpAgent: agent,
});

export default instance;
