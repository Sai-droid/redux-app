import Enzyme,{shallow} from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import FetchData from '../pages/FetchData'

Enzyme.configure({adapter:new EnzymeAdapter()})


test("Fetch Data component", () => {

const wrapper = shallow(<FetchData/>)

const fetchComponent = wrapper.find("[data-test='component']")
expect(fetchComponent.length).toBe(1);
});



// describe('Fetch Data Components',()=>{

// it('should render successfully',()=>{

//     expect(wrapper.exists()).toBe(true)
// })

// it('verifying dom elements',()=>{

//     expect(wrapper.find('div').length).toBe(0)
// })

// })
