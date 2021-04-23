export default {
    namespaced: true,
    state: {
        currencies: [
            "eur",
            "pln",
            "gel",
            "dkk",
            "czk",
            "gbp",
            "sek",
            "usd",
            "rub"
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
