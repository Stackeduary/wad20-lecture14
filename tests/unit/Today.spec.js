import { mount } from '@vue/test-utils'

import Today from "../../src/components/Today.vue";

describe('Today', () => {

    const wrapper = mount(Today);

    it('Renders correct date', () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month : month;
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        let formattedDate = year + '-' + month + '-' + day;

        expect(wrapper.html()).toContain(formattedDate)

    })

});