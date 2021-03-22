<!-- eslint-disable -->
<template>
  <ul class="chat-rooms text-white">
    <li class="room-tab-container"  :class="currentChatRoom === room ? 'active' : ''" v-for="(room, index) in rooms" :key="index"
      v-on:click="roomSelected(room)">
        {{room.name}}
    </li>
  </ul>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'MeetingRooms',
  props: {
    rooms: {
      type: Array,
      defult: () => [],
    },
    currentChatRoom: {
      type: Object,
      default: () => {},
    },
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapMutations(['updateCurrentRoom']),
    ...mapActions(['fetchCurrentRoomData']),
    /**
     * Method to select a room and get the details
     * of selected room
     * @param {Object} room selected room
     */
    async roomSelected(room) {
      if (room.id !== this.currentRoom?.id) {
        this.updateCurrentRoom(room);
        this.fetchCurrentRoomData(room);
      }
    },
  },
};
</script>
