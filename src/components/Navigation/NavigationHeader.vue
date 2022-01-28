<template>
  <header>
    <!-- user-profile should placed in here -->
    <div class="input-group">
      <input type="text" placeholder="Search..." />
      <i class="fas fa-search"></i>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 65px;
  border-bottom: 1px solid var(--lightgray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .input-group {
    position: relative;
    width: 100%;
    input {
      height: 40px;
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
