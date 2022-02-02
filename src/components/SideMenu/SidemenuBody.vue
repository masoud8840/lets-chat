<template>
  <section class="sidemenu-body">
    <div class="about">
      <p class="section-title">about</p>
      <textarea name="about" v-model="$store.state.subtitle"></textarea>
    </div>
    <div class="status">
      <p class="section-title">status</p>
      <div class="input-group">
        <input
          type="radio"
          name="status"
          id="online"
          value="online"
          v-model="$store.state.profileStatus"
        /><label for="online">active</label>
      </div>
      <div class="input-group">
        <input
          type="radio"
          name="status"
          id="do-not-disturb"
          value="do-not-disturb"
          v-model="$store.state.profileStatus"
        /><label for="do-not-disturb">do not disturb</label>
      </div>
      <div class="input-group">
        <input
          type="radio"
          name="status"
          id="away"
          value="away"
          v-model="$store.state.profileStatus"
        /><label for="away">away</label>
      </div>
      <div class="input-group">
        <input
          type="radio"
          name="status"
          id="offline"
          value="offline"
          v-model="$store.state.profileStatus"
        /><label for="offline">offline</label>
      </div>
    </div>
    <div class="settings">
      <p class="section-title">settings</p>
      <div class="input-group">
        <i class="fas fa-check-double"></i>
        <label for="2fa">2 step verification</label>
        <div class="input">
          <input type="checkbox" name="2fa" id="2fa" />
          <div class="input-thumb"></div>
        </div>
      </div>
      <div class="input-group">
        <i class="far fa-bell"></i>
        <label for="notification">notification</label>
        <div class="input">
          <input type="checkbox" name="notification" id="notification" />
          <div class="input-thumb"></div>
        </div>
      </div>
      <div class="input-group">
        <i class="far fa-user"></i>
        <a href="#invite" class="custom-link">invite friends</a>
      </div>
      <div class="input-group">
        <i class="far fa-trash-alt"></i>
        <a href="#delete" class="custom-link">delete account</a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sidemenu-body {
  padding: 0 20px;
  .section-title {
    color: var(--secondaryTextColor);
    text-transform: uppercase;
    font: 400 12px "Montserrat";
  }
  .about {
    display: flex;
    flex-direction: column;
    textarea {
      width: 100%;
      min-width: 100%;
      min-height: 137px;
      resize: vertical;
      margin-top: 12px;
      border: 1px solid #d8d6de;
      outline: 0;
      padding: 10px 15px;
      border-radius: 0.35rem;
      color: var(--primaryTextColor);
      font: 400 14px "Montserrat";
      line-height: 1.6;
      transition: border 0.25s, box-shadow 0.25s;
      &:focus {
        border: 1px solid var(--purple);
        box-shadow: 0 0 7px #ccc;
      }
    }
  }

  .status,
  .settings {
    display: flex;
    flex-direction: column;
    .input-group {
      display: flex;
      align-items: center;
      margin-top: 15px;
      input {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid var(--secondaryTextColor);
        border-radius: 50px;
        outline: none;
        color: var(--primaryTextColor);
      }
      &:nth-child(2) {
        input[type="radio"]:checked {
          background-color: var(--badge-online);
          box-shadow: 0 3px 5px -2px var(--badge-online);
          border: 0;
        }
        input[type="radio"]:active {
          background-color: var(--badge-online);
          box-shadow: 0 3px 5px -2px var(--badge-online);
          border: 0;
        }
      }
      &:nth-child(3) {
        input[type="radio"]:checked {
          background-color: var(--badge-do-not-disturb);
          box-shadow: 0 3px 5px -2px var(--badge-do-not-disturb);
          border: 0;
        }
        input[type="radio"]:active {
          background-color: var(--badge-do-not-disturb);
          box-shadow: 0 3px 5px -2px var(--badge-do-not-disturb);
          border: 0;
        }
      }
      &:nth-child(4) {
        input[type="radio"]:checked {
          background-color: var(--badge-away);
          box-shadow: 0 3px 5px -2px var(--badge-away);
          border: 0;
        }
        input[type="radio"]:active {
          background-color: var(--badge-away);
          box-shadow: 0 3px 5px -2px var(--badge-away);
          border: 0;
        }
      }
      &:nth-child(5) {
        input[type="radio"]:checked {
          background-color: var(--badge-offline);
          box-shadow: 0 3px 5px -2px var(--badge-offline);
          border: 0;
        }
        input[type="radio"]:active {
          background-color: var(--badge-offline);
          box-shadow: 0 3px 5px -2px var(--badge-offline);
          border: 0;
        }
      }
    }
  }
  label,
  .custom-link {
    padding-left: 7px;
    font: 400 14px "Montserrat";
    text-transform: capitalize;
    color: var(--primaryTextColor);
    text-decoration: none;
  }
  i {
    font-size: 19px;
    margin-right: 7px;
    color: var(--primaryTextColor);
  }
  .status,
  .about,
  .settings {
    margin-top: 45px;
  }
  .settings {
    .input-group {
      display: grid;
      grid-template-columns: 1fr 12fr 1fr;
      height: 27px;
      .input {
        position: relative;
        input[type="checkbox"] {
          width: 50px;
          height: 25px;
          background-color: #e2e2e2;
          border: 0;
          cursor: pointer;
          transition: background-color 0.25s;
          &:checked {
            background-color: var(--purple);
            & + .input-thumb {
              left: 30px;
            }
          }
        }

        .input-thumb {
          position: absolute;
          top: calc(100% - 24px);
          left: 4px;
          background-color: #ffffff;
          width: 15px;
          height: 15px;
          border-radius: 50px;
          box-shadow: 0 0 5px -1px #bbb;
          transition: left 0.25s;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
