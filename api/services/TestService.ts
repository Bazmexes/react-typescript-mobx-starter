import httpClient from '../HttpClient';

export default {
  // Запрос получения спика стран
  getPeople: () => {
    return httpClient.get(`/people`);
  },
};
