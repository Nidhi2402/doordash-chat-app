<template>
<div class="user-info text-white pl-3">
<h4 class="user-name">{{getUsername}}</h4>
<span class="user-online-status">Online {{userTime}}</span>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
  data() {
    return {
      userTime: '',
    };
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    getUsername() {
      return this.userInfo.username;
    },
  },
  created() {
    setInterval(() => { this.formateTime(this.userInfo.loginTime); }, 120000);
  },
  methods: {
    /**
     * Method to generate online time
     * @param {Number} loginTime time when user entered into room
     * @returns converted time into seconds
     */
    computeOnlineTime(loginTime) {
      if (loginTime !== undefined) {
        const diff = Math.abs(new Date(loginTime) - new Date(Date.now()));
        return (diff / 1000) || 0;
      }
      return 0;
    },
    /**
     * Method to formate time
     * @param {Number} loginTime time in seconds
     * @returns converted time minute/hour
     */
    formateTime(loginTime) {
      const secs = this.computeOnlineTime(loginTime);
      const secNum = parseInt(secs, 10);
      const hours = Math.floor(secNum / 3600);
      let minutes = Math.floor((secNum - (hours * 3600)) / 60);
      minutes = minutes === 0 ? 'Less than a' : minutes;
      this.userTime = hours > 0 ? `for ${hours} hour ${minutes} minutes` : `${minutes} minutes`;
    },
  },
};
</script>
