import React from 'react';
import { shallow } from 'enzyme';
import InfoIcon from './InfoIcon';

describe('InfoIcon', () => {
    let params = {};

    beforeEach(() => {
        params = {
            icon: 'favorite',
            color: 'primary',
            fontSize: 'inherit',
            number: 999,
            text: 'test-text',
            iconSize: 10,
            className: 'test-class-name',
            disabled: false,
        }
    })

    it('Should be rendered without props', () => {
        const wrapper = shallow(<InfoIcon {...params}/>);

        expect(wrapper.find('.info-icon-container')).toHaveLength(1);
    });

    it('Should contain Icon element', () => {
        const wrapper = shallow(<InfoIcon {...params}/>);

        const iconEl = wrapper.findWhere( el => {
            const {fontSize, sx} = el.props();

            const isFontsizeCorrect = fontSize === params.fontSize;
            const isSXCorrect = sx && params.iconSize ;

            return isFontsizeCorrect && isSXCorrect;
        })

        expect(iconEl).toHaveLength(1);
        expect(iconEl.text()).toEqual(params.icon)
    })

    it('Should have correct color', () => {
        const wrapper = shallow(<InfoIcon {...params}/>);

        expect(wrapper.at(0).props().color).toEqual(params.color)
    })

    it('Should have className from props', () => {
        const wrapper = shallow(<InfoIcon {...params}/>);

        expect(wrapper.find(`.${params.className}`)).toHaveLength(1);
    })
    describe('Number props', () => {

        it('Should contain number text', () => {
            const expectedStr = params.number.toString();
            const wrapper = shallow(<InfoIcon {...params}/>);

            const numberContainer = wrapper.find('.info-icon-text');

            expect(numberContainer).toHaveLength(2);
            expect(numberContainer.at(1).text()).toEqual(expectedStr)
        })

        it('Should not contain number text', () => {
            params.number = undefined
            const wrapper = shallow(<InfoIcon {...params}/>);

            const numberContainer = wrapper.find('.info-icon-text');

            expect(numberContainer).toHaveLength(1);
        })

    })

    describe('Text props', () => {

        it('Should contain text', () => {
            const expectedStr = `${params.text}:`;
            const wrapper = shallow(<InfoIcon {...params}/>);

            const textContainer = wrapper.find('.info-icon-text');

            expect(textContainer).toHaveLength(2);
            expect(textContainer.at(0).text()).toEqual(expectedStr)
        })

        it('Should not contain text', () => {
            params.text = '';
            const wrapper = shallow(<InfoIcon {...params}/>);

            const numberContainer = wrapper.find('.info-icon-text');

            expect(numberContainer).toHaveLength(1);
        })

    })
});