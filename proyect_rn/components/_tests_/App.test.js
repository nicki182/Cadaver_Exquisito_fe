import React from "react";
import Enzyme, {mount} from 'enzyme';
import Menu from "../button_cacel";
import Adapter from "enzyme-adapter-react-16";
describe('Component Button Caancel', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing App rendering', () => {
        const wrapper = mount(
            <Button_Cancel/>
        )
        expect(wrapper.find('Button')).toHaveLength(1)
    })
})