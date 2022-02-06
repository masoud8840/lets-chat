<template>
  <section class="chat-item" :class="messageAlign">
    <user-profile
      :imgSource="profileImg"
      :userStatus="false"
      :visible="!messages.imNext"
    ></user-profile>
    <div class="message" :class="{ emptyProfileImg: !messages.imNext }">
      <p>
        {{ messages.text }}
      </p>
    </div>
  </section>
</template>

<script>
import UserProfile from "./UserProfile.vue";

export default {
  props: ["messages"],
  components: {
    UserProfile,
  },
  computed: {
    messageAlign() {
      return {
        rightSide: this.$store.getters.getFindedUser.id != this.messages.from,
      };
    },
    profileImg() {
      const findedUser = this.$store.getters.getFindedUser;
      if (this.messages.from == findedUser.id) {
        return findedUser.imgSource;
      } else {
        return this.$store.getters.getMyImgSource;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-item {
  align-items: center;
  display: flex;
  margin-bottom: 15px;
  .message {
    background-color: #ffffff;
    padding: 10px;
    margin-left: 20px;
    border-radius: 0.35rem;
    color: var(--primaryTextColor);
    font: 500 14px "Montserrat";
    box-shadow: 0 0 10px #ddd;
    position: relative;
  }
  .emptyProfileImg {
    margin-left: 57px;
  }
}
.rightSide {
  justify-content: flex-start;
  direction: rtl;
  .message {
    margin-right: 20px;
    color: #ffffff;
    background-image: linear-gradient(80deg, #7367f0, #9e95f5);
    p {
      direction: ltr;
    }
  }
  .emptyProfileImg {
    margin-right: 57px;
  }
}
</style>
