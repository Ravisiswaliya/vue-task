
<template>
  <div>
    <h3 class="text-center">Top 100 Currency</h3><hr>
    Currency Per Page: 
    <select name="curr" id="cars" @change="getCurrency($event.target.value)">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>

    <br />
    <div class="row">
      <div
        v-rand
        v-for="currency in allCurrency"
        :key="currency.id"
        class="currency-list"
      >
        <img
          :src="currency.iconUrl"
          class="text-center"
          height="50px"
          width="50px"
        />

        <h4>{{ currency.name }}</h4>
        <p>
          Symbol: <b>{{ currency.symbol }}</b>
        </p>
        <p>
          Price: <b>{{ currency.price | price_format }}</b>
        </p>
        <p>
          Price Change: <b>{{ currency.change }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Currency",
  filters: {
    price_format(value) {
      return parseFloat(value).toFixed(2);
    },
  },
  methods: {
    ...mapActions(["getCurrency"]),
  },
  computed: mapGetters(["allCurrency"]),
  created() {
    this.getCurrency();
    this.interval = setInterval(() => this.getCurrency(), 30000);
  },
  directives: {
    rand: {
      bind(el) {
        el.style.color = "#" + Math.random().toString().slice(2, 8);
      },
    },
  },
};
</script>


<style scoped>
.currency-list {
  background-color: whitesmoke;
  width: 32%;
  margin: 2px;
  padding: 5%;
}
</style>