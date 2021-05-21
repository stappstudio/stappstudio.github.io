<template>
  <section class="py-12 bg-white">
    <div class="relative content-container">
      <FeatureIcon class="phone-feature-icon">
        <IconPhone>
          <div class="w-full h-full bg-stapp-blue bg-opacity-20 hover:bg-opacity-60">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconPhone>
      </FeatureIcon>
      <FeatureText right class="text-stapp-blue">
        <span slot="title">
          Distribute
        </span>
        <div>
          <p class="stapp-body-text">
            Reach our user's phones.
          </p>
          <p class="stapp-body-text">
            Scale our architecture so our solution is always available for everyone who needs it.
          </p>
          <p class="stapp-body-text">
            Pay attention to deviations and correct them quickly.
          </p>
        </div>
      </FeatureText>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.content-container {
  height: 1px;
  min-height: 600px;
}

.phone-feature-icon {
  width: 300px;
  max-width: 40%;
}
</style>
