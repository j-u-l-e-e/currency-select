import {createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import {createStoreConfig} from "./__mocks__/store-config";
import {CURRENCIES, SELECTED_CURRENCIES} from "./__mocks__/currencies";

describe('mutations', () => {
    let store;

    beforeEach(() => {
        createLocalVue().use(Vuex);
        const storeConfig = createStoreConfig();
        store = new Vuex.Store(storeConfig);
    });

    it('SET_CURRENCIES sets currencies', async () => {
        await store.commit("currency/SET_CURRENCIES", {currencies: CURRENCIES});
        expect(store.state.currency.currencies).toEqual(CURRENCIES);
    });

    it('SET_SELECTED_CURRENCIES sets selectedCurrencies', async () => {
        await store.commit("currency/SET_SELECTED_CURRENCIES", {selectedCurrencies: SELECTED_CURRENCIES});
        expect(store.state.currency.selectedCurrencies).toEqual(SELECTED_CURRENCIES);
    });
});
