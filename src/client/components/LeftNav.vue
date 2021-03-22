<template>
<div>
    <UserInfo :userInfo="userInfo"/>
    <MeetingRooms :rooms="avaiableRooms" :currentChatRoom="currentChatRoom" :userInfo="userInfo"/>
</div>
</template>

<script>
import MeetingRooms from './MeetingRooms.vue';
import UserInfo from './UserInfo.vue';

export default {
  name: 'LeftNav',
  components: {
    MeetingRooms,
    UserInfo,
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
    currentChatRoom: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    avaiableRooms() {
      return this.$store.state.chatStore.availableRooms;
    },
  },
};
</script>
