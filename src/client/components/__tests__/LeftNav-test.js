import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import LeftNav from '../LeftNav.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const state = {
  chatStore: {
    availableRooms: {
      id: 0,
      name: 'Tea Chats',
    },
  },
};
const store = new Vuex.Store({ state });
describe('Left Navigation Bar', () => {
  let leftNavComponent;
  beforeEach(() => {
    leftNavComponent = mount(LeftNav, {
      propsData: {
        userInfo: {
          loginTime: 1615086976530,
          username: 'Niki',
        },
      },
      localVue,
      mocks: {
        $store: store,
      },
    });
  });
  it('should have userInfo on left nav', () => {
    expect(leftNavComponent.find('.user-info').exists()).toBeTruthy();
    expect(leftNavComponent.find('.user-name').text()).toBe('Niki');
  });
  it('should have Meeting room on left nav', () => {
    expect(leftNavComponent.find('.chat-rooms').exists()).toBeTruthy();
  });
});
