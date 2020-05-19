import Enzyme, {mount} from 'enzyme';
import Menu from "../menu";
import Adapter from "enzyme-adapter-react-16";
describe('Component Page', () => {
    beforeAll(async () => {
        Enzyme.configure({adapter: new Adapter()});
    })
    it('Testing Button rendering', () => {
        const wrapper = mount(
            <Menu/>
        )
        expect(wrapper.find('TextInput')).toHaveLength(1)
        expect(wrapper.find('Button_Start')).toHaveLength(1)
        expect(wrapper.find('Button_FullStory')).toHaveLength(1)
        expect(wrapper.find('Button_Instructions')).toHaveLength(1)
    })
    /* it('Testing Button rendering', () => {
         const mockCallBack = jest.fn()
         const wrapper = mount(
             <MockedProvider mocks={[]} typename={false}>
                 <Button usersUpdate={mockCallBack}/>
             </MockedProvider>
         )
         wrapper.find("input").instance().value = "d";
         expect(wrapper.find("input").instance().value).toBe("d")
         expect(wrapper.find('[type="submit"]')).toHaveLength(1)
     })
})      */
})