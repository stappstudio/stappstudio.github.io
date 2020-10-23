<template>
  <div class="stapp-logo-wrapper position-absolute container-fluid h-100 d-flex justify-content-center align-items-center">
    <picture class="text-center">
      <source
        srcset="/img/logo/stapp_home_dark.png"
        media="(prefers-color-scheme: dark)"
      >
      <img src="/img/logo/stapp_home_light.png" class="stapp-logo">
    </picture>
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
  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  width: 75%;
  // height: auto;

  // Small devices (landscape phones, 576px and up)
  // Same as above

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    // width: auto;
    height: 50%;
  }

  // Large devices (desktops, 992px and up)
  // Same as above

  // Extra large devices (large desktops, 1200px and up)
  // Same as above
}
</style>
