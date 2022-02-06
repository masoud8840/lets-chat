<template>
  <section class="chatpage-body">
    <chat-item
      v-for="message in $store.getters['getFindedUser'].messages"
      :key="message"
      :messages="message"
    ></chat-item>
  </section>
</template>

<script>
import ChatItem from "../UI/ChatItem.vue";

export default { components: { ChatItem } };
</script>

<style lang="scss" scoped>
.chatpage-body {
  height: calc(100vh - 130px);
  overflow: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background: #f2f0f7 url("~@/assets/Main_Background.svg") center/25%;
}
</style>
