<!-- eslint-disable -->
<template>
  <div class="app login-info">
    <form id="chat-login" v-on:submit="onSubmit">
        <input class="username-login" type="text" v-model="username" placeholder="Type your username ..." />
        <button type="submit" class="join-door-dash">Join the DoorDash Chat!</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ChatLogin',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    ...mapActions(['fetchAvailableRooms']),
    /**
     * Method to login into chat session
     */
    onSubmit() {
      const doordashChatSession = {
        username: this.username,
        loginTime: Date.now(),
      };
      sessionStorage.setItem('doordashChatSession', JSON.stringify(doordashChatSession));
      this.fetchAvailableRooms();
      this.$router.push({ path: `/chats/${this.username}` });
    },
  },
};
</script>
