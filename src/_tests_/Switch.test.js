import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { View as Switch } from '../components/bookmarks/Switch'

Enzyme.configure({ adapter: new Adapter() });

const handleBookmark = jest.fn();

const hero = {
    id: 72345,
    name: 'Monkey Girl'
}

beforeEach(() => {
    jest.clearAllMocks();
});

describe('<Switch />', () => {
    it('render an add to bookmarks button', () => {
        const wrapper = shallow(<Switch bookmark={false} handleBookmark={handleBookmark} canBookmark={true} character={hero} />);
        expect(wrapper.find('.state').length).toBe(1);
        expect(wrapper.find('.state').text()).toBe('bookmark this');
        wrapper.find('.state').simulate('click');
        expect(handleBookmark.mock.calls.length).toBe(1);
        expect(handleBookmark.mock.calls[0][0]).toBe(hero);
        expect(handleBookmark.mock.calls[0][1]).toBeFalsy();
    });

    it('shouldn\'t render the add button if the limit is reached', () => {
        const wrapper = shallow(<Switch bookmark={false} handleBookmark={handleBookmark} canBookmark={false} character={hero} />);
        expect(wrapper.html()).toBe('<div class="bookmark-switch"></div>');
    });

    it('render a remove from bookmarks button', () => {
        const wrapper = shallow(<Switch bookmark={true} handleBookmark={handleBookmark} canBookmark={true} character={hero} />);
        expect(wrapper.find('.state').length).toBe(1);
        expect(wrapper.find('.state').text()).toBe('remove from bookmarks');
        wrapper.find('.state').simulate('click');
        expect(handleBookmark.mock.calls.length).toBe(1);
        expect(handleBookmark.mock.calls[0][0]).toBe(hero);
        expect(handleBookmark.mock.calls[0][1]).toBeTruthy();
        wrapper.setProps({ canBookmark: false }); // even if the limit is reached
        expect(wrapper.find('.state').length).toBe(1);
        expect(wrapper.find('.state').text()).toBe('remove from bookmarks');
    });
})