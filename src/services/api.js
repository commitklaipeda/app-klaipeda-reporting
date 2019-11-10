// @flow
const host = 'https://api.myjson.com/'; // http://myjson.com/169tiq

const ApiService = {
  fetchReportItems: async () => fetch(`${host}/bins/169tiq`)
    .then(response => response.json())
    .then(list => list.slice(0, 10)),
};

export default ApiService;
