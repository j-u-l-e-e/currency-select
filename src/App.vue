<template>
  <div id="app">
    <chip-select
            :options="getCurrencies"
            :value="getSelectedCurrencies"
            @input="setSelectedCurrencies($event)"
            data-testid='currency-select'
    >
    </chip-select>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";

import ChipSelect from "@/components/ChipSelect";

export default {
  name: 'App',
  components: {
    ChipSelect
  },
  computed: {
    ...mapGetters("currency", ["getCurrencies", "getSelectedCurrencies"]),
  },
  methods: {
    ...mapActions("currency", ["setSelectedCurrencies"])
  }
}
</script>

<style>
  html {
    height: 100%;
    width: 100%;
  }

  body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
