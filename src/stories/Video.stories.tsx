import React from 'react';

import { default as Video } from '../components/Video/Video';

export default {
    title: 'Library/Video',
    component: Video,
    args: {
        videoUrl: 'https://video-previews.elements.envatousercontent.com/files/79cf7e92-2fb0-4afa-a4fc-cce31e757a64/video_preview_h264.mp4'
    },
};

const Template = (args) => <Video {...args} />;

export const Default = Template.bind({});
