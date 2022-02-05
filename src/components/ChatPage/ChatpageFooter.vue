<template>
  <footer class="chatpage-footer">
    <input
      type="text"
      name="message-input"
      class="message-input"
      placeholder="Enter your message.."
    />
    <button>Send</button>
  </footer>
</template>

<style lang="scss" scoped>
.chatpage-footer {
  height: 65px;
  border-top: 1px solid var(--lightgray);
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  column-gap: 25px;
  align-items: center;
  padding: 0 20px;
  input {
    width: 100%;
    height: 37px;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 0.35rem;
    padding: 0 15px;
    color: var(--primaryTextColor);
    font: 400 14px "Montserrat";
    transition: border 0.25s, box-shadow 0.25s;

    &:focus {
      border: 1px solid var(--purple);
      box-shadow: 0 0 7px #ccc;
      &::placeholder {
        padding-left: 5px;
      }
    }
    &::placeholder {
      color: #ccc;
      font: 400 14px "Montserrat";
      transition: padding 0.25s;
    }
  }
  button {
    background-color: var(--purple);
    color: #ffffff;
    height: 37px;
    border-radius: 0.35rem;
    border: 0;
    box-shadow: 0 0 7px #ccc;
    font: 500 14px "Montserrat";
  }
}
</style>
