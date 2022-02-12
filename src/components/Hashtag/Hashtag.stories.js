import React from 'react';

import { default as Hashtag } from './Hashtag';

export default {
    title: 'Library/Hashtag',
    component: Hashtag,
};

const Template = (args) => <Hashtag {...args} />;

export const DefaultHashtag = Template.bind({});
DefaultHashtag.args = {
    name: "hashtag"
}


