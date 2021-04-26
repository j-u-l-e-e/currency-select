<template>
  <div id="app">
    <chip-select
            :options="getCurrencies"
            v-model="selection"
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
  data() {
    return {
      selection: []
    }
  },
  computed: {
    ...mapGetters("currency", ["getCurrencies", "getSelectedCurrencies"]),
  },
  watch: {
    selection(value) {
      this.setSelectedCurrencies(value);
    }
  },
  methods: {
    ...mapActions("currency", ["setSelectedCurrencies"])
  },
  created() {
    this.selection = this.getSelectedCurrencies;
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
