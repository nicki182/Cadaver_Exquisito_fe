import React from "react";
import Enzyme, {mount} from 'enzyme';
import Instructions from "../instructions";
import Adapter from "enzyme-adapter-react-16";
describe('Component Instructions', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing Button rendering', () => {
        const mockCallBack = jest.fn()
        const wrapper = mount(
            <Instructions/>
        )
        expect(wrapper.find('Button_Start')).toHaveLength(1)
        expect(wrapper.find('Button_FullStory')).toHaveLength(1)
    })
})