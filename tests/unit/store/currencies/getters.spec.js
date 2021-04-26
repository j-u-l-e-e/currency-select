import {createLocalVue} from "@vue/test-utils";
import Vuex from "vuex";
import {CURRENCIES, SELECTED_CURRENCIES} from "./__mocks__/currencies";
import {createStoreConfig} from "./__mocks__/store-config";

describe('getters', () => {
    let store;

    beforeEach(() => {
        createLocalVue().use(Vuex);
        const storeConfig = createStoreConfig();
        store = new Vuex.Store(storeConfig);
    });

    it('getCurrencies returns currencies', async () => {
        await store.commit("currency/SET_CURRENCIES", {currencies: CURRENCIES});
        expect(store.getters["currency/getCurrencies"]).toEqual(CURRENCIES);
    });

    it('getSelectedCurrencies returns selected currencies', async () => {
        await store.commit("currency/SET_SELECTED_CURRENCIES", {selectedCurrencies: SELECTED_CURRENCIES});
        expect(store.getters["currency/getSelectedCurrencies"]).toEqual(SELECTED_CURRENCIES);
    });
});
