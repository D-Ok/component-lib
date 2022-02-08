import { shallow } from 'enzyme'
import Video from './Video'
import React from 'react'

describe('Video', () => {
    let parameters = {}

    beforeEach(() => {
        parameters = {
            videoUrl: 'link',
            className: 'test-classname',
            playOnView: true,
            muted: true,
        }
    })

    it('Should render VideoElement with correct props', () => {
        const wrapper = shallow(<Video {...parameters} />)
        const videoEl = wrapper.find('VideoElement');

        expect(videoEl).toHaveLength(1);

        expect(videoEl.prop('videoUrl')).toBe(parameters.videoUrl);
        expect(videoEl.prop('playOnView')).toBe(parameters.playOnView);
        expect(videoEl.prop('muted')).toBe(parameters.muted);
    })

    it('Should contain class from props', () => {
        const wrapper = shallow(<Video {...parameters} />)

        expect(wrapper.find(`.${parameters.className}`)).toHaveLength(1);
    })

    it('isLoad state should be false ', () => {

        const wrapper = shallow(<Video {...parameters} />)
        const videoEl = wrapper.find('VideoElement');

        expect(videoEl.prop('isLoad')).toBe(false);
    })

})