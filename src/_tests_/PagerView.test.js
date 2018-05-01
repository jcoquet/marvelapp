import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Pager from '../components/pager/View'

Enzyme.configure({ adapter: new Adapter() });

describe('<Pager />', () => {
    it('renders both buttons', () => {
        const wrapper = shallow(<Pager  prev={true} next={true} handleClick={() => {}} />);
        expect(wrapper.find('button').length).toBe(2);
    });
    it('renders only prev button', () => {
        const wrapper = shallow(<Pager prev={true} next={false} handleClick={() => {}} />);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toBe('prev');        
    });
    it('renders only next button', () => {
        const wrapper = shallow(<Pager prev={false} next={true} handleClick={() => {}} />);
        expect(wrapper.find('button').length).toBe(1);
        expect(wrapper.find('button').text()).toBe('next');        
    });
})