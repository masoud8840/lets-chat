<template>
  <section class="navigation-body">
    <h3 class="section-title">chats</h3>
    <ul>
      <li v-for="user in $store.getters.getChatsList" :key="user">
        <user-item
          :ID="user.id"
          :name="user.name"
          :caption="user.caption"
          :imgSource="user.imgSource"
          :user-status="user.userStatus"
        ></user-item>
      </li>
    </ul>

    <!-- Contacts List -->
    <h3 class="section-title">contacts</h3>
    <ul>
      <li v-for="user in $store.getters.getContactsList" :key="user">
        <user-item
          :ID="user.id"
          :name="user.name"
          :caption="user.caption"
          :imgSource="user.imgSource"
          :user-status="false"
        ></user-item>
      </li>
    </ul>
  </section>
</template>

<script>
import UserItem from "../UI/UserItem.vue";

export default {
  components: {
    UserItem,
  },
};
</script>

<style lang="scss" scoped>
.navigation-body {
  .section-title {
    color: var(--purple);
    margin: 20px 20px 10px;
    font: 500 18px "Montserrat";
    text-transform: capitalize;
  }
}
</style>
