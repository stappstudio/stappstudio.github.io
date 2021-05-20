<template>
  <div :style="styleVariables" class="aspect-w-3 aspect-h-2">
    <div>
      <div class="notebook-icon">
        <div class="notebook-left-page-margin">
          <div class="notebook-left-page">
            <slot />
          </div>
        </div>
        <div class="notebook-divisor-wrapper">
          <div class="notebook-page-divisor">
            <div />
          </div>
          <div class="notebook-page-divisor">
            <div />
          </div>
          <div class="notebook-page-divisor">
            <div />
          </div>
          <div class="notebook-page-divisor">
            <div />
          </div>
        </div>
        <div class="notebook-right-page-margin">
          <div class="notebook-right-page">
            <slot />
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
        '--foregroundColor': '255, 0, 120',
        '--backgroundColor': 'rgba(2, 0, 66, 1.0)'
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.notebook-icon {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
  color: rgba(var(--foregroundColor), 0.3);
}

.notebook-left-page-margin {
  display: inline-block;
  width: 48%;
  height: 100%;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  padding: 4% 0% 4% 4%;
  background-color: currentColor;

  .notebook-left-page {
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor);
  }
}

.notebook-divisor-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4%;
  height: 100%;

  .notebook-page-divisor {
    background-color: currentColor;
    height: 5%;
    width: 300%;
    border-radius: 20%/50%;
    transform: translateX(-33%);
    overflow: hidden;
    padding: 20%;

    div {
      width: 100%;
      height: 100%;
      background-color: var(--backgroundColor);
      border-radius: 20%/50%;

      &:hover {
        background-color: currentColor;
      }
    }
  }
}

.notebook-right-page-margin {
  display: inline-block;
  width: 48%;
  height: 100%;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
  padding: 4% 4% 4% 0%;
  background-color: currentColor;

  .notebook-right-page {
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor);
  }
}
</style>
