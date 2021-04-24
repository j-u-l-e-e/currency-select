import { mount } from '@vue/test-utils'

import ChipSelect from '@/components/ChipSelect'
import ToggleChip from "@/components/ToggleChip";
import Chip from "@/components/Chip";

describe('ChipSelect.vue', () => {
    let options = ['a', 'b', 'c'];
    let value = ['b', 'c'];

    it('ChipSelect has no options by default', () => {
        const wrapper = mount(ChipSelect);
        const toggleChips = wrapper.findAllComponents(ToggleChip);
        expect(toggleChips).toHaveLength(0);
    });

    it('ChipSelect renders options from prop', () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        const toggleChips = wrapper.findAllComponents(ToggleChip);
        expect(toggleChips).toHaveLength(options.length);
    });

    it('ChipSelect has no selected options by default', () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        let selectedChips = wrapper.findAllComponents(Chip);
        expect(selectedChips).toHaveLength(0);
    });

    it('ChipSelect renders selected options from prop', () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options,
                value
            }
        });
        const selectedChips = wrapper.findAllComponents(Chip);
        expect(selectedChips).toHaveLength(value.length);
    });

    it('On deselected option click option gets selected', async () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        const toggleChip0 = wrapper.findAllComponents(ToggleChip).at(0);
        await toggleChip0.trigger('click');
        let selectedChips = wrapper.findAllComponents(Chip);
        expect(selectedChips).toHaveLength(1);
    });

    it('On selected option click option gets deselected', async () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        const toggleChip0 = wrapper.findAllComponents(ToggleChip).at(0);
        await toggleChip0.trigger('click');
        await toggleChip0.trigger('click');
        let selectedChips = wrapper.findAllComponents(Chip);
        expect(selectedChips).toHaveLength(0);
    });

    it('Option click emits input event', async () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        const toggleChip0 = wrapper.findAllComponents(ToggleChip).at(0);
        await toggleChip0.trigger('click');
        expect(wrapper.emitted().input).toBeTruthy();
    });

    it('On selected option close-button click the option gets deselected', async () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options,
                value
            }
        });
        let selectedChip = wrapper.findAllComponents(Chip).at(0);
        await selectedChip.find('.close-btn').trigger('click');
        expect(wrapper.findAllComponents(Chip)).toHaveLength(value.length - 1);
    });

    it('On option click the appropriate option gets selected', async () => {
        const wrapper = mount(ChipSelect, {
            propsData: {
                options
            }
        });
        const toggleChip1 = wrapper.findAllComponents(ToggleChip).at(1);
        await toggleChip1.trigger('click');
        let selectedChip0 = wrapper.findAllComponents(Chip).at(0);
        expect(selectedChip0.find('[data-label]').text()).toBe(toggleChip1.find('[data-label]').text());
    });
});
