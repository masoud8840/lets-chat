<template>
  <header>
    <div class="profile-info">
      <user-profile
        :imgSource="$store.getters['getFindedUser'].imgSource"
        :userStatus="$store.getters['getFindedUser'].userStatus"
      ></user-profile>
      <h4>{{ $store.getters["getFindedUser"].name }}</h4>
    </div>
    <div class="profile-accessbility"></div>
  </header>
</template>

<script>
import UserProfile from "../UI/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  data() {
    return {
      currentUser: "",
    };
  },

  methods: {
    refreshCurrentUser() {
      this.currentUser = this.$router.currentRoute._rawValue.params.userID;
      this.$store.dispatch("setFindedUser", this.currentUser);
    },
  },
  watch: {
    $route() {
      this.refreshCurrentUser();
    },
  },
  mounted() {
    this.refreshCurrentUser();
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 65px;
  border-bottom: 1px solid var(--lightgray);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  .profile-info {
    display: flex;
    align-items: center;
    h4 {
      margin-left: 10px;
      color: var(--mainTextColor);
      font: 500 14px "Montserrat";
    }
  }
}
</style>
