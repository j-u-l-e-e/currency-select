import { mount, createLocalVue  } from '@vue/test-utils'
import Vuex from 'vuex'

import App from '@/App.vue'
import ChipSelect from '@/components/ChipSelect'

const localVue = createLocalVue();

localVue.use(Vuex);

describe('App.vue', () => {
  let store;
  let state;
  let actions;
  let getters;

  beforeEach(() => {
    state = {
      currencies: [
        "eur",
        "pln",
        "gel"
      ],
      selectedCurrencies: []
    };
    actions = {
      setSelectedCurrencies: jest.fn()
    };
    getters = {
      getCurrencies: () => state.currencies.slice(0),
      getSelectedCurrencies: () => state.selectedCurrencies.slice(0),
    };

    store = new Vuex.Store({
      modules: {
        currency: {
          state: state,
          actions: actions,
          getters: getters,
          namespaced: true
        }
      },
    })
  });

  it('renders a ChipSelect component', () => {
    const wrapper = mount(App, {store, localVue});
    expect(wrapper.findComponent(ChipSelect).exists()).toBeTruthy();
  });
});
