import { mount } from '@vue/test-utils'

import Chip from '@/components/Chip'

describe('Chip.vue', () => {

    it('Chip is not closable by default', () => {
        const wrapper = mount(Chip);
        expect(wrapper.find(".close-btn").exists()).toBeFalsy()
    });

    it('Chip renders close button if prop closable is true', () => {
        const wrapper = mount(Chip, {
            propsData: {
                closable: true
            }
        });
        expect(wrapper.find(".close-btn").exists()).toBeTruthy()
    });

    it('Chip close-button click emits close event', async () => {
        const wrapper = mount(Chip, {
            propsData: {
                closable: true
            }
        });
        let closeBtn = wrapper.find(".close-btn");
        await closeBtn.trigger('click');
        expect(wrapper.emitted().close).toBeTruthy();
    });
});
