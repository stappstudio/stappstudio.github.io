<template>
  <section class="py-12 bg-white">
    <div class="relative content-container" @mouseover.prevent>
      <FeatureIcon class="design-feature-icon">
        <IconDesign>
          <div class="w-full h-full bg-stapp-blue bg-opacity-20">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconDesign>
      </FeatureIcon>
      <FeatureText right class="text-stapp-blue">
        <span slot="title">
          Design
        </span>
        <div>
          <p class="stapp-body-text">
            Test our solutions with interactive prototypes.
          </p>
          <p class="stapp-body-text">
            Put ourselves on the users's place.
          </p>
          <p class="stapp-body-text">
            Feel how the solution would look like.
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

.design-feature-icon {
  width: 300px;
  max-width: 40%;
}
</style>
