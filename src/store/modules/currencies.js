import axios from "axios";

const state = {
  currencies: []
};
const getters = {
  allCurrency: state => state.currencies
};
const actions = {
  async getCurrency({ commit }) {
    const response = await axios.get("https://api.coinranking.com/v1/public/coins/?limit=100");
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