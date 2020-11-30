import { mount } from '@vue/test-utils'

import HelloWorld from "../../src/components/HelloWorld.vue";

describe('HelloWorld', () => {
    const testMessage = "Hello this is test";

    const wrapper = mount(HelloWorld, {
        propsData: {
            msg: testMessage
        }
    });

    it('Renders correct message', () => {

        expect(wrapper.html()).toContain(testMessage)

    })

});