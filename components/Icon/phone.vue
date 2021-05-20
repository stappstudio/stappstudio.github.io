<template>
  <div>
    <div :style="styleVariables" class="aspect-w-1 aspect-h-2">
      <div>
        <div class="phone-icon">
          <div class="phone-frame-margin">
            <div class="phone-frame">
              <div class="phone-camera" />
              <slot />
            </div>
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
        '--foregroundColor': 'rgba(2, 0, 66, 0.3)',
        '--backgroundColor': 'white'
      }
    }
  }
}
</script>

<style lang="postcss">
.phone-icon {
  width: 100%;
  height: 100%;
  opacity: 1;
  color: var(--foregroundColor);
}

.phone-frame-margin {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20% / 10%;
  overflow: hidden;
  background-color: currentColor;
  padding: 2%;
}

.phone-frame {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20% / 10%;
  background-color: var(--backgroundColor);
  overflow: hidden;
}

.phone-camera {
  position: absolute;
  width: 40%;
  height: 5%;
  left: 30%;
  top: 0;
  right: 30%;
  background-color: var(--backgroundColor);
  border-style: solid;
  border-color: currentColor;
  border-width: 0 5px 5px 5px;
  /* margin-top: -5px; */
  border-bottom-left-radius: 20% 100%;
  border-bottom-right-radius: 20% 100%;
}
</style>
