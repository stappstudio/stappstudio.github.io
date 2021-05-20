<template>
  <div :style="styleVariables" class="aspect-w-16 aspect-h-10">
    <div>
      <div class="laptop-icon">
        <div class="laptop-screen-margin">
          <div class="laptop-screen">
            <slot />
          </div>
        </div>
        <div class="laptop-body-margin">
          <div class="laptop-body">
            <div class="laptop-lid" />
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
.laptop-icon {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
  color: rgba(var(--foregroundColor), 0.3);
}

.laptop-screen-margin {
  display: inline-block;
  margin-left: 12%;
  margin-right: 12%;
  width: 76%;
  height: 92%;
  border-top-left-radius: 3%;
  border-top-right-radius: 3%;
  background-color: currentColor;
  padding: 2% 2% 0 2%;

  .laptop-screen {
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor);
    overflow: hidden;
  }
}

.laptop-body-margin {
  position: relative;
  background-color: currentColor;
  width: 100%;
  height: 8%;
  border-bottom-left-radius: 10% 100%;
  border-bottom-right-radius: 10% 100%;
  padding: 0.5% 1%;

  .laptop-body {
    width: 100%;
    height: 100%;
    background-color: var(--backgroundColor);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-bottom-left-radius: 10% 100%;
    border-bottom-right-radius: 10% 100%;
  }
}

.laptop-lid {
  width: 20%;
  height: 50%;
  border-color: currentColor;
  border-width: 0px 3px 3px 3px;
  border-style: solid;
  border-bottom-left-radius: 10% 100%;
  border-bottom-right-radius: 10% 100%;
}
</style>
