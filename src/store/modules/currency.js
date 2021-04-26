import {NotAnArrayError, NotASubsetError} from "@/helpers/exceptions";

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
        SET_CURRENCIES(state, {currencies}) {
            state.currencies = currencies;
        },
        SET_SELECTED_CURRENCIES(state, {selectedCurrencies}) {
            state.selectedCurrencies = selectedCurrencies;
        }
    },
    actions: {
        setCurrencies({commit}, currencies) {
            if (!Array.isArray(currencies)) {
                throw new NotAnArrayError("currencies is not an array");
            }
            commit("SET_CURRENCIES", {currencies});
        },
        setSelectedCurrencies({commit, getters}, selectedCurrencies) {
            if (!Array.isArray(selectedCurrencies)) {
                throw new NotAnArrayError("selectedCurrencies is not an array");
            }
            if (!getters["checkIsSubsetOfCurrencies"](selectedCurrencies)) {
                throw new NotASubsetError("selectedCurrencies is not a subset of currencies");
            }
            commit("SET_SELECTED_CURRENCIES", {selectedCurrencies});
        }
    },
    getters: {
        getCurrencies: (state) => {
            return state.currencies.slice(0)
        },
        getSelectedCurrencies: (state) => {
            return state.selectedCurrencies.slice(0)
        },
        checkIsSubsetOfCurrencies: (state, getters) => (array) => {
            return array.every((value) => getters["checkIsIncludedInCurrencies"](value));
        },
        checkIsIncludedInCurrencies: (state) => (value) => {
            return state.currencies.includes(value)
        },
    }
}
