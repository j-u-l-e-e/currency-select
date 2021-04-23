<template>
  <div id="app">
    <chip-select
            :options="currencies"
            v-model="selectedCurrencies"
    >
    </chip-select>
  </div>
</template>

<script>
import {mapState} from "vuex";

import ChipSelect from "@/components/ChipSelect/ChipSelect";

export default {
  name: 'App',
  components: {
    ChipSelect
  },
  data: () => ({
    selectedCurrencies: []
  }),
  computed: {
    ...mapState("currency", ["currencies"])
  },
  watch: {
    selectedCurrencies() {
    }
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
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }
</style>
