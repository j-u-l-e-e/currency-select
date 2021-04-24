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
        selectedCurrencies: [
            "dkk",
            "czk"
        ]
    },
    mutations: {
        SET_SELECTED_CURRENCIES(state, {selectedCurrencies}) {
            state.selectedCurrencies = selectedCurrencies;
        }
    },
    actions: {
        selectCurrencies({commit}, selectedCurrencies) {
            commit("SET_SELECTED_CURRENCIES", {selectedCurrencies});
        }
    },
    getters: {
        getSelectedCurrencies: (state) => {
            return state.selectedCurrencies.slice(0)
        }
    }
}
