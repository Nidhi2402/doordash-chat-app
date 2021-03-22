import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import MessageBox from '../MessageBox.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const actions = {
  postTheMessage: jest.fn(),
};
const store = new Vuex.Store({ actions });
describe('Message typing Box', () => {
  let messageTypingComponent;
  beforeEach(() => {
    messageTypingComponent = mount(MessageBox, {
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
  it('should have Meeting rooms', () => {
    expect(messageTypingComponent.find('.chat-input-box')).toBeTruthy();
  });
  it('should send the text message on clicking submit', async () => {
    messageTypingComponent.find('.send-button').trigger('submit');
    await messageTypingComponent.vm.$nextTick();
    expect(actions.postTheMessage).toHaveBeenCalled();
  });
});
