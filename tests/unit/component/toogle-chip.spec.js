import { mount } from '@vue/test-utils'

import ToggleChip from '@/components/ToggleChip'
import Checkbox from "@/components/Checkbox";

describe('ToggleChip.vue', () => {

    it('ToggleChip renders Checkbox', () => {
        const wrapper = mount(ToggleChip);
        expect(wrapper.findComponent(Checkbox).exists()).toBeTruthy()
    });

    it('On ToggleChip click Checkbox toggles', async () => {
        const wrapper = mount(ToggleChip);
        await wrapper.trigger('click');
        const checkbox = wrapper.findComponent(Checkbox);
        expect(checkbox.find("input:checked").exists()).toBeTruthy();
    });

    it('On ToggleChip click input event gets emitted', async () => {
        const wrapper = mount(ToggleChip);
        await wrapper.trigger('click');
        expect(wrapper.emitted().input).toBeTruthy()
    });
});
