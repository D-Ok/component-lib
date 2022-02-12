import React from 'react';

import { default as AvatarLink } from './AvatarLink';

export default {
    title: 'Library/AvatarLink',
    component: AvatarLink,
};

const Template = (args) => <AvatarLink {...args} />;

export const CorgiAvatar = Template.bind({});
CorgiAvatar.args = {
    avatar: 'https://i.pinimg.com/564x/7f/a4/ef/7fa4efd11b7763955ea00e9c9992a934.jpg',
    uniqueId: 'Happy Corgi',
    nickname: 'Corgi'
}