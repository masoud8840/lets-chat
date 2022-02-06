<template>
  <section class="chatpage">
    <chatpage-header></chatpage-header>
    <chatpage-body></chatpage-body>
    <chatpage-footer></chatpage-footer>
  </section>
</template>

<script>
import ChatpageHeader from "../components/ChatPage/ChatpageHeader.vue";
import ChatpageBody from "../components/ChatPage/ChatpageBody.vue";
import ChatpageFooter from "../components/ChatPage/ChatpageFooter.vue";

export default {
  components: {
    ChatpageHeader,
    ChatpageBody,
    ChatpageFooter,
  },
};
</script>
