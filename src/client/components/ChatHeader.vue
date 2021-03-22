<!-- eslint-disable -->
<template>
<div class="room-details text-center">
    <h1 class="room-name">{{currentChatRoom.name}}</h1>
    <span class="user-name active">{{username}}</span><span v-for="(member, index) in members" :key="index" class="user-name">
      <span> , {{member}} </span>
    </span>
</div>
</template>

<script>
export default {
  name: 'ChatHeader',
  props: {
    members: {
      type: Array,
      default: () => [],
    },
    currentChatRoom: {
      type: Object,
      default: () => {},
    },
    username: {
      type: String,
      default: '',
    },
  },
};
</script>
