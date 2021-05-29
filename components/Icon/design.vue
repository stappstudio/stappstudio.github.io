<template>
  <div>
    <div :style="styleVariables" class="aspect-w-1 aspect-h-2">
      <div>
        <div class="design-icon">
          <div class="first-frame-margin">
            <div class="frame">
              <div class="frame-app-bar">
                <div class="app-bar-icon" />
                <div class="app-bar-title" />
                <div class="app-bar-icon add-icon">
                  +
                </div>
              </div>
              <ul>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
                <li><span /></li>
              </ul>
            </div>
          </div>
          <div class="second-frame-margin">
            <div class="frame">
              <div class="frame-app-bar">
                <div class="app-bar-icon" />
                <div class="app-bar-title" />
                <div class="app-bar-icon" />
              </div>
              <p />
              <p />
              <p />
              <p />
              <div class="text-area" />
              <div class="action-button" />
            </div>
          </div>
          <div class="third-frame-margin">
            <div class="frame">
              <div class="frame-app-bar">
                <div class="app-bar-icon" />
                <div class="app-bar-title" />
                <div class="app-bar-icon" />
              </div>
              <p />
              <p />
              <p />
              <p />
              <div class="text-area" />
              <div class="action-button" />
            </div>
          </div>
          <div class="arrow-one-two">
            <div class="part-one absolute" />
            <div class="part-two absolute" />
            <div class="arrow-indicator absolute" />
          </div>
          <div class="arrow-two-three">
            <div class="arrow-indicator" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    styleVariables () {
      return {
        // Stapp Blue: 2, 0, 66
        // Stapp Pink: 255, 0, 120
        // '--foregroundColor': 'rgba(255, 0, 120, 0.3)',
        // '--backgroundColor': 'rgba(2, 0, 66, 1.0)'
        '--foregroundColor': '2, 0, 66',
        '--backgroundColor': 'white'
      }
    }
  }
}
</script>

<style lang="postcss">
.design-icon {
  width: 100%;
  height: 100%;
  color: rgba(var(--foregroundColor), 0.3);
  position: relative;
}

.tool-menu-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 50%;

  .tool-menu-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: currentColor;
    opacity: 0.3;
  }
}

.frame {
  position: absolute;
  top: 1%;
  left: 2%;
  width: 96%;
  height: 98%;
  background-color: var(--backgroundColor);

  .frame-app-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10%;
    background-color: rgba(var(--foregroundColor), 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .app-bar-icon {
      width: 10%;
      height: 50%;
      margin: 5%;
    }

    .add-icon {
      font-size: 100%;
      line-height: 100%;
      margin-top: -5%;
    }

    .app-bar-title {
      flex-grow: 1;
      height: 20%;
      background-color: currentColor;
    }
  }

  ul {
    position: absolute;
    top: 10%;
    left: 0;
    width: 100%;

    li {
      width: 100%;
      padding-top: 5%;
      padding-left: 10%;

      span {
        display: inline-block;
        width: 50%;
        height: 0.25rem;
        background-color: currentColor;
      }

      &:hover, &:active {
        color: rgba(var(--foregroundColor), 1.0);
      }
    }
  }

  p {
    position: absolute;
    left: 10%;
    height: 1%;
    background-color: currentColor;
    padding-left: 10%;
    padding-right: 10%;
    font-size: 80%;

    &:nth-child(2) {
      top: 15%;
      width: 60%;
    }

    &:nth-child(3) {
      top: 20%;
      width: 40%;
    }

    &:nth-child(4) {
      top: 25%;
      width: 70%;
    }

    &:nth-child(5) {
      top: 30%;
      width: 30%;
    }

    &:hover, &:active {
      color: rgba(var(--foregroundColor), 1.0);
    }
  }

  .text-area {
    position: absolute;
    left: 10%;
    bottom: 20%;
    width: 80%;
    height: 30%;
    background-color: rgba(var(--foregroundColor), 0.1);
    border-radius: 10% / 20%;
  }

  .action-button {
    position: absolute;
    bottom: 5%;
    left: 10%;
    width: 80%;
    height: 8%;
    background-color: rgba(var(--foregroundColor), 0.3);
    color: var(--backgroundColor);
    font-size: 60%;
    line-height: 60%;
    padding: 5% 20%;
    text-align: center;
    border-radius: 10% / 20%;
    display: flex;
    justify-items: center;
    align-items: center;

    &:hover, &:active {
      background-color: rgba(var(--foregroundColor), 1.0);
    }
  }
}

.first-frame-margin {
  position: absolute;
  top: 5%;
  left: 0%;
  width: 40%;
  height: 40%;
  background-color: currentColor;
}

.second-frame-margin {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 40%;
  height: 40%;
  background-color: currentColor;
}

.third-frame-margin {
  position: absolute;
  top: 55%;
  left: 60%;
  width: 40%;
  height: 40%;
  background-color: currentColor;
}

.arrow-one-two {
  position: absolute;
  width: 20%;
  top: 7%;
  left: 38%;
  height: 20%;

  .part-one {
    position: absolute;
    width: 50%;
    height: 50%;
    top: 0;
    left: 0;
    border-top: 2px solid currentColor;
    border-right: 2px solid currentColor;
    border-top-right-radius: 50%;
    margin-left: 2px;
  }

  .part-two {
    position: absolute;
    width: 50%;
    height: 50%;
    right: 0;
    bottom: 0;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    border-bottom-left-radius: 50%;
  }

  .arrow-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    right: 0;
    bottom: -4px;
    /* background-color: red; */
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotateZ(-45deg);
  }
}

.arrow-two-three {
  position: absolute;
  width: 0.5%;
  top: 43%;
  left: 80%;
  bottom: 46%;
  background-color: currentColor;

  .arrow-indicator {
    position: absolute;
    width: 10px;
    height: 10px;
    left: -4px;
    bottom: 0;
    background-color: transparent;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotateZ(-45deg);
  }
}
</style>
