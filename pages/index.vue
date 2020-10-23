<template>
  <div class="stapp-logo-wrapper position-absolute container-fluid h-100 d-flex justify-content-center align-items-center">
    <div class="stapp-logo" />
  </div>
</template>

<style lang="scss" scoped>
.stapp-logo-wrapper {
// Background color
  @media (prefers-color-scheme: light) {
    background-color: white;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #020042;
  }
}

.stapp-logo {
  @media (prefers-color-scheme: light) {
    background-image: url('/img/logo/stapp_home_light.png');
  }

  @media (prefers-color-scheme: dark) {
    background-image: url('/img/logo/stapp_home_dark.png');
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  width: 75%;
  height: 100%;
  // height: auto;

  // Small devices (landscape phones, 576px and up)
  // Same as above

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    width: 100%;
    height: 50%;
  }

  // Large devices (desktops, 992px and up)
  // Same as above

  // Extra large devices (large desktops, 1200px and up)
  // Same as above
}
</style>
