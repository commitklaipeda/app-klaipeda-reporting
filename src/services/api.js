// @flow
const host = 'https://jsonplaceholder.typicode.com';

const ApiService = {
  fetchReportTickets: async () => fetch(`${host}/comments`)
    .then(response => response.json())
    .then(list => list.slice(0, 5)),
};

export default ApiService;
