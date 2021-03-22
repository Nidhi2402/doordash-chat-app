<!-- eslint-disable -->
<template>
<div class="messages" id="messageList" >
    <div v-for="chatMessage in groupMessages" v-bind:key="chatMessage.id">
      <div class="received-message text-left" v-if="chatMessage.name != username">
            <span class="message">{{ chatMessage.message }}</span>
            <span class="user">{{ chatMessage.name }}</span>
          </div>
          <div class="outgoing-message text-right" v-else>
            <span class="message">{{ chatMessage.message}}</span>
          </div>
    </div>
    </div>
</template>

<script>

export default {
  name: 'MessageList',
  // data() {
  //   return {
  //     groupMessages: this.$store.state.chatStore.currentRoomData,
  //   };
  // },
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  computed: {
    groupMessages() {
      return this.$store.state.chatStore.currentRoomData;
    },
  },
  // watch: {
  //   groupMessages(newVal) {
  //     this.groupMessages = newVal;
  //   },
  // },
};
</script>
