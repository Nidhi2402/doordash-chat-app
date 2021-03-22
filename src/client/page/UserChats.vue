<!-- eslint-disable -->
<template>
  <div class="user-chats container-fluid">
    <div v-if="usernameInfo" class="row vh-100">
      <div class="left-aside primary-color col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 p-0">
        <LeftNav class="left-panel" :userInfo="usernameInfo" :currentChatRoom="getCurrentChatRoom"/>
      </div>
      <div class="chat-page col-9 col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 p-0 chat-bg-color" v-if="getCurrentChatRoom">
        <ChatHeader :username="usernameInfo.username" :members="listOfMembers" :currentChatRoom="getCurrentChatRoom" />
        <MessageList :username="usernameInfo.username" :currentChatRoom="getCurrentChatRoom" />
        <MessageBox :username="usernameInfo.username" :currentChatRoom="getCurrentChatRoom" />
      </div>
    </div>
    <div v-else class="error-message"> Something went wrong please try after sometime</div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import ChatHeader from '../components/ChatHeader.vue';
import LeftNav from '../components/LeftNav.vue';
import MessageBox from '../components/MessageBox.vue';
import MessageList from '../components/MessageList.vue';

export default {
  name: 'UserChats',
  components: {
    ChatHeader,
    LeftNav,
    MessageBox,
    MessageList,
  },
  computed: {
    usernameInfo() {
      return this.$store.state.chatStore.userLoginInfo;
    },
    getListOfRoom() {
      return this.$store.state.chatStore.availableRooms;
    },
    getCurrentChatRoom() {
      return this.$store.state.chatStore.currentRoom;
    },
    listOfMembers() {
      return this.$store.state.chatStore.listOfUsers;
    },
  },
  methods: {
    ...mapActions(['fetchAvailableRooms']),
    ...mapMutations(['setUSerLoginInfo']),
    onlinetime() {
      return setInterval(() => { this.timer(); }, 10);
    },
  },
  mounted() {
    const session = JSON.parse(sessionStorage.getItem('doordashChatSession'));
    // Check that the user has an active session, otherwise redirect back to login page
    if (!session || !session.username) {
      this.$router.push({ path: '/' });
    } else {
      this.setUSerLoginInfo(session);
    }
    if (!this.getListOfRoom) {
      this.fetchAvailableRooms();
    }
  },
};
</script>
