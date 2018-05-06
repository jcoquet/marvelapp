import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { View as BookmarkLink } from '../components/bookmarks/BookmarkLink';
import { MemoryRouter as Router } from 'react-router-dom';
import { wrap } from 'module';

Enzyme.configure({ adapter: new Adapter() });

const mountWithRouter = node => mount(<Router>{node}</Router>);

describe('<BookmarkLink />', () => {
    it('renders the right text', () => {
        let wrapper =  mountWithRouter(<BookmarkLink  count='0' />);
        expect(wrapper.find('a').length).toBe(1);
        expect(wrapper.find('a').text()).toBe('Bookmarks');
        wrapper =  mountWithRouter(<BookmarkLink  count='1' />);
        expect(wrapper.find('a').text()).toBe('Bookmarks1');
    });
})