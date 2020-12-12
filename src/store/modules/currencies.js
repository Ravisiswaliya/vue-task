import axios from "axios";

const state = {
  currencies: []
};
const getters = {
  allCurrency: state => state.currencies
};
const actions = {
  async getCurrency({ commit }, default_limit=10) {
    let api_url = `https://api.coinranking.com/v1/public/coins/?limit=${default_limit}`
    const response = await axios.get(api_url);
    commit("setCurrency", response.data["data"]["coins"]);
  }
};

const mutations = {
  setCurrency: (state, currencies) => (state.currencies = currencies),
};

export default {
  state,
  getters,
  actions,
  mutations
};