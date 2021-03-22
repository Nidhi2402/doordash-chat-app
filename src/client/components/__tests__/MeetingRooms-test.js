import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import MeetingRooms from '../MeetingRooms.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
const actions = {
  fetchCurrentRoomData: jest.fn(),
};
const mutations = {
  updateCurrentRoom: jest.fn(),
};
const store = new Vuex.Store({ actions, mutations });

describe('Meeting rooms', () => {
  let meetingRoomComponent;
  beforeEach(() => {
    meetingRoomComponent = mount(MeetingRooms, {
      propsData: {
        rooms: [{ name: 'Tea Chats', id: 0 }, { name: 'Coffee Chats', id: 1 }],
        currentChatRoom: { name: 'Tea Chats', id: 0 },
      },
      localVue,
      mocks: {
        $store: store,
      },
    });
  });
  it('should have Meeting rooms', () => {
    expect(meetingRoomComponent.findAll('.room-tab-container')).toHaveLength(2);
  });
  it('clicking on meeting room should call action fetchCurrentRoomData and mutation updateCurrentRoom', async () => {
    meetingRoomComponent.find('.room-tab-container').trigger('click');
    await meetingRoomComponent.vm.$nextTick();
    expect(mutations.updateCurrentRoom).toHaveBeenCalled();
    expect(actions.fetchCurrentRoomData).toHaveBeenCalled();
  });
});
