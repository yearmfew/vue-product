<template>
  <nav
    class="navbar fixed-bottom navbar-light"
    style="background-color: #e3f2fd"
  >
    <span class="navbar-text mr-auto">
      <strong>Vuejs Practice...</strong> | yearmfew
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Buying Amount : </strong>
      <span class="badge badge-danger">{{
        getTradeResult.purchase | currency
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0 mr-3">
      <strong>Selling Amount : </strong>
      <span class="badge badge-success">{{
        getTradeResult.sale | currency
      }}</span>
    </span>
    <span class="navbar-text navbar-nav my-2 my-lg-0">
      <strong>Money : </strong>
      <span class="badge badge-primary">{{
        getTradeResult.balance | currency
      }}</span>
    </span>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["getTradeResult"]),
};
</script>
<style scoped>
</style>