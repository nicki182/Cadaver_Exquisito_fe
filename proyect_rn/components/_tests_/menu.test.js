import React from "react";
import Enzyme, {mount} from 'enzyme';
import Menu from "../menu";
import Adapter from "enzyme-adapter-react-16";
describe('Component Menu', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing Button rendering', () => {
        const wrapper = mount(
            <Menu/>
        )
        expect(wrapper.find('Button_Start')).toHaveLength(1)
        expect(wrapper.find('Button_FullStory')).toHaveLength(1)
        expect(wrapper.find('Button_Instructions')).toHaveLength(1)

    })
})