// const fileName = "chatStore.js";
import axios from 'axios';

export default {
  state: () => ({
    availableRooms: null,
    applicationApiUrl: 'http://localhost:8080/api',
    currentRoom: null,
    userLoginInfo: {},
    currentRoomData: [],
    listOfUsers: null,
  }),
  mutations: {
    updateAvailableRooms: (state, listOfRooms) => {
      state.availableRooms = listOfRooms;
    },
    updateCurrentRoom: (state, currentRoom) => {
      state.currentRoom = currentRoom;
    },
    setCurrentRoomData: (state, currentRoomData) => {
      state.currentRoomData = currentRoomData;
    },
    addNewRoomData: (state, newCurrentRoomData) => {
      state.currentRoomData.push(newCurrentRoomData);
    },
    setCurrentRoomUsers: (state, userList) => {
      state.listOfUsers = userList;
    },
    setUSerLoginInfo: (state, userLoginInfo) => {
      state.userLoginInfo = userLoginInfo;
    },
  },
  actions: {
    /*
        * Action to get the list of Rooms to chat
        * */
    async fetchAvailableRooms({ state, commit }) {
      try {
        const listOfRooms = await axios.get(`${state.applicationApiUrl}/rooms`);
        commit('updateAvailableRooms', listOfRooms.data);
      } catch (error) {
        console.error(error);
      }
    },
    /*
        * Action to get the current room's chat data
        * */
    async fetchCurrentRoomData({ state, commit, dispatch }, room) {
      try {
        const activeRoomChat = await axios.get(`${state.applicationApiUrl}/rooms/${room.id}/messages`);
        commit('setCurrentRoomData', activeRoomChat.data);
      } catch (error) {
        console.error(error);
      }
      dispatch('fetchRoomDetails', room);
    },
    /*
        * Action to get the current room's users
        * */
    async fetchRoomDetails({ state, commit }, room) {
      try {
        const userOfActiveRoom = await axios.get(`${state.applicationApiUrl}/rooms/${room.id}`);
        commit('setCurrentRoomUsers', userOfActiveRoom.data.users);
      } catch (error) {
        console.error(error);
      }
    },
    async postTheMessage({ state, commit }, { room, messageData }) {
      try {
        const response = await axios.post(`${state.applicationApiUrl}/rooms/${room.id}/messages`, messageData);
        commit('addNewRoomData', response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
