import { shallow, mount } from 'enzyme'
import VideoElement from './VideoElement'
import React from 'react'

jest.mock('../../helpers/videoController');
import videoController from '../../helpers/videoController';


describe('VideoElement', () => {
    let parameters = {}
    let wrapper;

    beforeEach(() => {
        parameters = {
            videoUrl: 'link',
            playOnView: true,
            muted: true,
            isLoad: true
        }

        wrapper = shallow(<VideoElement {...parameters} />)
    })

    it('Should contain video tag', () => {
        const videoEl = wrapper.find('video');

        expect(videoEl).toHaveLength(1);

        expect(videoEl.prop('muted')).toBe(parameters.muted);
        expect(videoEl.prop('src')).toBe(parameters.videoUrl);
    })

    it('Should contain InfoIcon', () => {
        const videoEl = wrapper.find('InfoIcon');

        expect(videoEl).toHaveLength(1);
    })

    it('Should change state onClick', () => {
        const play = jest.fn();
        videoController.mockImplementation(play);

        wrapper = shallow(<VideoElement {...parameters} />)
        const videoEl = wrapper.find('video');

        videoEl.simulate('click');

        expect(play).toBeCalled();
    })

})