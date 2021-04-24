import { mount } from '@vue/test-utils'

import ToggleChip from '@/components/ToggleChip'
import Checkbox from "@/components/Checkbox";

describe('ToggleChip.vue', () => {

    it('ToggleChip renders Checkbox', async () => {
        const wrapper = mount(ToggleChip);
        expect(wrapper.findComponent(Checkbox).exists()).toBeTruthy()
    });
});
