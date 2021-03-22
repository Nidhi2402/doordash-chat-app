import { mount } from '@vue/test-utils';
import ChatHeader from '../ChatHeader.vue';

describe('Chat Header', () => {
  let chatHeaderComponent;
  beforeEach(() => {
    chatHeaderComponent = mount(ChatHeader, {
      propsData: {
        username: 'Niki',
        currentChatRoom: { name: 'Tea Chats', id: 0 },
        members: ['Nidhi', 'Sam', 'Tyler', 'Joseph'],
      },
    });
  });
  it('Should have active user name as a Niki', () => {
    expect(chatHeaderComponent.find('.active').text()).toBe('Niki');
  });
  it('should have chat memeber', () => {
    expect(chatHeaderComponent.findAll('.user-name')).toHaveLength(5);
  });
  it('Should have current selected chat Room', () => {
    expect(chatHeaderComponent.find('.room-name').text()).toBe('Tea Chats');
  });
});
