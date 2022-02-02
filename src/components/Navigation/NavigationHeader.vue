<template>
  <header>
    <!-- user-profile should placed in here -->
    <user-profile
      @click="changeSidemenuState"
      :imgSource="$store.getters.getMyImgSource"
      :userStatus="$store.getters.getMyProfileStatus"
    ></user-profile>
    <div class="input-group">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
  </header>
</template>

<script>
import UserProfile from "../UI/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  methods: {
    changeSidemenuState() {
      this.$store.commit("setSidemenuState", true);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  border-bottom: 1px solid var(--lightgray);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
  align-items: center !important;
  padding: 0 20px;
  position: relative;
  .input-group {
    position: relative;
    width: 16em;

    input {
      height: 38px;
      width: 100%;
      outline: 0;
      padding: 0 17px 0 45px;
      border: 1px solid var(--lightgray);
      border-radius: 25px;
      color: var(--primaryTextColor);
      font: 400 14px "Montserrat";
      transition: border 0.25s;

      &::placeholder {
        color: var(--secondaryTextColor);
        transition: padding 0.25s;
      }
      &:focus {
        &::placeholder {
          padding-left: 5px;
        }
        & {
          border: 1px solid var(--purple);
        }
      }
    }
    i {
      position: absolute;
      top: 50%;
      left: 15px;
      transform: translateY(-50%);
      color: var(--secondaryTextColor);
      font-size: 12px;
    }
  }
}
</style>
