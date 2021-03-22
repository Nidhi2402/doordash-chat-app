import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import MessageList from '../MessageList.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const state = {
  chatStore: {
    currentRoomData: [{
      id: 'gg35545',
      message: 'ayyyyy',
      name: 'Ryan',
      reaction: null,
    },
    {
      id: 'yy35578',
      message: 'lmao',
      name: 'Nick',
      reaction: null,
    },
    {
      id: 'hh9843',
      message: 'leggooooo',
      name: 'Danielle',
      reaction: null,
    }],
  },
};
const store = new Vuex.Store({ state });
describe('Message typing Box', () => {
  let messageListComponent;
  beforeEach(() => {
    messageListComponent = mount(MessageList, {
      propsData: {
        username: 'Niki',
        currentChatRoom: { name: 'Tea Chats', id: 0 },
      },
      localVue,
      mocks: {
        $store: store,
      },
    });
  });
  it('should have Meeting list', () => {
    expect(messageListComponent.find('#messageList')).toBeTruthy();
  });
});
