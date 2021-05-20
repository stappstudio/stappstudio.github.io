<template>
  <section class="w-full py-12 bg-white">
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
        <p class="stapp-body-text">
          Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense. You don't believe in the Force, do you?
        </p>
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
