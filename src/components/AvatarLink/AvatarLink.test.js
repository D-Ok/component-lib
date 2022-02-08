import React from 'react';
import { shallow } from 'enzyme';
import AvatarLink from './AvatarLink';

describe('AvatarLink', () => {
    let params = {};
    beforeEach(() => {
        params = {
            className: 'test-avatar-link',
            uniqueId: 'testUser',
            nickname: 'Test User',
            avatar: 'image',
            onClickHandler: () => 0,
        }
    })


    describe('Avatar Component', () => {
        it('Should have className', () => {
            const wrapper = shallow(<AvatarLink {...params}/>);

            expect(wrapper.find('.avatar-icon')).toHaveLength(1);
        });

        it('Should have correct src and alt props', () => {
            const wrapper = shallow(<AvatarLink {...params}/>);

            const avatar = wrapper.findWhere((el) => {
                const {alt, src} = el.props();
                return alt === params.nickname && src === params.avatar
            })

            expect(avatar).toHaveLength(1);
        });
    })

    describe('UniqueId display', () => {
        let uniqueIDClass;
        beforeAll(() => {
            uniqueIDClass = '.avatar-text';
        })

        it('Should contain container for uniqueId', () => {
            const wrapper = shallow(<AvatarLink {...params}/>);

            expect(wrapper.find(uniqueIDClass)).toHaveLength(1)
        });

        it('Should contain uniqueId', () => {
            const wrapper = shallow(<AvatarLink {...params}/>);

            const uniqueIdContainer = wrapper.find(uniqueIDClass)
            expect(!!uniqueIdContainer.text(params.uniqueId)).toBe(true);
        });

        it('Should not contain uniqueId', () => {
            params.uniqueId = '';
            const wrapper = shallow(<AvatarLink {...params}/>);

            const uniqueIdContainer = wrapper.find(uniqueIDClass)
            expect(uniqueIdContainer.text()).toBe(params.nickname);
        });

        it('Should be link', () => {
            const wrapper = shallow(<AvatarLink {...params}/>);

            const link = wrapper.findWhere((el) => {
                const {href, underline} = el.props();
                return href && underline && el.text() === params.uniqueId
            })

            expect(link).toHaveLength(1);
        })
    })

    describe('Nickname display', () => {
        let nicknameClass;
        beforeAll(() => {
            nicknameClass = '.avatar-nickname';
        })

        it('Should contain container for nickname', () => {
            const wrapper = shallow(<AvatarLink {...params} />);

            expect(wrapper.find(nicknameClass)).toHaveLength(1)
        });

        it('Should contain nickname', () => {
            const wrapper = shallow(<AvatarLink {...params} />);

            const nicknameContainer = wrapper.find(nicknameClass)
            expect(nicknameContainer.text()).toBe(params.nickname);
        });

        it('Should not contain nickname', () => {
            params.nickname = '';
            const wrapper = shallow(<AvatarLink {...params} />);

            const nicknameContainer = wrapper.find(nicknameClass)
            expect(!!nicknameContainer.text()).toBe(false);
        });
    });

    it ('Should contains className from props', () => {
        const wrapper = shallow(<AvatarLink {...params}/>);

        expect(wrapper.find(`.${params.className}`)).toHaveLength(1);
    })

    it ('Should be rendered without props ', () => {
        const wrapper = shallow(<AvatarLink />);

        expect(wrapper.find(`.avatar-link-container`)).toHaveLength(1);
        expect(wrapper.find(`.avatar-icon`)).toHaveLength(1);
        expect(wrapper.find(`.avatar-nickname`)).toHaveLength(1);
    })

    it('Should be available onClick', () => {
        let str = 'Hello ';
        const expectedStr = `${str}${params.uniqueId}`
        const onClick = (nickname) => str+=nickname;

        params.onClickHandler = onClick;
        const wrapper = shallow(<AvatarLink {...params}/>);

        wrapper.simulate('click');
        expect(str).toEqual(expectedStr);
    })
});