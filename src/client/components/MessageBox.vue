<!-- eslint-disable -->
<template>
    <div class="chat-input">
      <form class="chat-input-box" @submit.prevent="sendMessage(username)">
        <input id="messageInput" class="message-input" v-model="textMessage" type="text" placeholder="Type a message..." />
        <button type="submit" class="send-button">Send</button>
      </form>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'MessageBox',
  data() {
    return {
      textMessage: '',
    };
  },
  props: {
    username: {
      type: String,
      default: '',
    },
    currentChatRoom: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions(['postTheMessage']),
    /**
     * Method to send a message
     * @param {String} username current username
     */
    async sendMessage(username) {
      const messageData = {
        name: username,
        message: this.textMessage,
      };
      await this.postTheMessage({ room: this.currentChatRoom, messageData });
      this.$nextTick(() => {
        this.scrollToBottom();
      });
      document.querySelector('#messageInput').value = '';
    },
    scrollToBottom() {
      const messageDisplay = document.querySelector('#messageList').lastElementChild;
      messageDisplay.scrollTop = messageDisplay.scrollHeight;
    },
  },
};
</script>
