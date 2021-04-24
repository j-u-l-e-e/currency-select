import { mount } from '@vue/test-utils'

import Checkbox from '@/components/Checkbox'

describe('Checkbox.vue', () => {

    it('Checkbox is unchecked by default', async () => {
        const wrapper = mount(Checkbox);
        expect(wrapper.find("input:checked").exists()).toBeFalsy()
    });

    it('Checkbox renders checkmark if prop value is true', () => {
        const wrapper = mount(Checkbox, {
            propsData: {
                value: true
            }
        });
        expect(wrapper.find("input:checked").exists()).toBeTruthy()
    });

    it('Checkbox does not render checkmark if prop value is false', () => {
        const wrapper = mount(Checkbox, {
            propsData: {
                value: false
            }
        });
        expect(wrapper.find("input:checked").exists()).toBeFalsy()
    });

    it('On unchecked Checkbox click it becomes checked', async () => {
        const wrapper = mount(Checkbox);
        await wrapper.trigger("click");
        expect(wrapper.find("input:checked").exists()).toBeTruthy();
    });

    it('On checked Checkbox click it becomes unchecked', async () => {
        const wrapper = mount(Checkbox);
        await wrapper.trigger("click");
        await wrapper.trigger("click");
        expect(wrapper.find("input:checked").exists()).toBeFalsy()
    });

    it('Checkbox click emits change event', async () => {
        const wrapper = mount(Checkbox);
        await wrapper.trigger("click");
        expect(wrapper.emitted().change).toBeTruthy();
    });
});
