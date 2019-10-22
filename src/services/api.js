// @flow
const host = 'https://api.myjson.com/';

const ApiService = {
  fetchReportTickets: async () => fetch(`${host}/bins/qw394`)
    .then(response => response.json())
    .then(list => list.slice(0, 10)),
};

export default ApiService;
