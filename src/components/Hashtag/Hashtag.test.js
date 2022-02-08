import React from 'react';
import { shallow } from 'enzyme';
import Hashtag from './Hashtag';

describe('Hashtag', () => {
    let params = {};

    beforeEach(() => {
        params = {
            name: 'Hello',
            disabled: true,
        }
    })

    it('Should be rendered', () => {
        const wrapper = shallow(<Hashtag {...params}/>);

        expect(wrapper.find('.hashtag')).toHaveLength(1);
    });

    it('Should be rendered without props', () => {
        params = {}
        const wrapper = shallow(<Hashtag {...params}/>);

        expect(wrapper.find('.hashtag')).toHaveLength(1);
    })

    it('Should contain #', () => {
        const wrapper = shallow(<Hashtag {...params}/>);

        expect(wrapper.text()).toBe(`#${params.name}`);
    });

    it('Should contain use correct disabled', () => {
        const wrapper = shallow(<Hashtag {...params}/>);

        const linkEl = wrapper.findWhere((el) => {
            const { href, disabled, underline } = el.props();
            return href && underline && disabled === params.disabled
        })

        expect(linkEl).toHaveLength(1);
    })
});