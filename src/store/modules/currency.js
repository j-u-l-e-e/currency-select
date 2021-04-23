export default {
    namespaced: true,
    state: {
        currencies: [
            "EUR",
            "PLN",
            "GEL",
            "DKK",
            "CZK",
            "GBP",
            "SEK",
            "USD",
            "RUB"
        ],
        selectedCurrencies: []
    },
    mutations: {
        SET_SELECTED_CURRENCIES(state, selectedCurrencies) {
            state.selectedCurrencies = selectedCurrencies;
        }
    },
    actions: {
    }
}
