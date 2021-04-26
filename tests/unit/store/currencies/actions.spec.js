import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import {CURRENCIES, SELECTED_CURRENCIES, INVALID_SELECTED_CURRENCIES} from "./__mocks__/currencies";
import {NotAnArrayError, NotASubsetError} from "@/helpers/errors";
import {createStoreConfig} from "./__mocks__/store-config";

describe('actions', () => {
    let store;

    beforeEach(() => {
        createLocalVue().use(Vuex);
        const storeConfig = createStoreConfig();
        store = new Vuex.Store(storeConfig);
    });

    it('setCurrencies sets currencies', async () => {
        await store.dispatch("currency/setCurrencies", CURRENCIES);
        expect(store.state.currency.currencies).toEqual(CURRENCIES);
    });

    it('setCurrencies does not set currencies if it is not an array', async () => {
        let invalidCurrencies = "eur";
        expect(() => {store.dispatch("currency/setCurrencies", invalidCurrencies)})
            .toThrow(NotAnArrayError);
    });

    it('setSelectedCurrencies sets selected currencies if they are a subset of currencies', async () => {
        await store.dispatch("currency/setSelectedCurrencies", SELECTED_CURRENCIES);
        expect(store.state.currency.selectedCurrencies).toEqual(SELECTED_CURRENCIES);
    });

    it('setSelectedCurrencies sets selected currencies if they are an empty array', async () => {
        await store.dispatch("currency/setSelectedCurrencies", []);
        expect(store.state.currency.selectedCurrencies).toEqual([]);
    });

    it('setSelectedCurrencies does not set selected currencies if they are not an array', async () => {
        let invalidCurrencies = "eur";
        expect(() => {store.dispatch("currency/setSelectedCurrencies", invalidCurrencies)})
            .toThrow(NotAnArrayError);
    });

    it('setSelectedCurrencies does not set selected currencies if they are not a subset of currencies', async () => {
        expect(() => {store.dispatch("currency/setSelectedCurrencies", INVALID_SELECTED_CURRENCIES)})
            .toThrow(NotASubsetError);
    });
});
