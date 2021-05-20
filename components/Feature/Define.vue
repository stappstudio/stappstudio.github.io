<template>
  <section class="w-full py-12 bg-stapp-blue overflow-x-hidden">
    <div class="relative content-container">
      <FeatureIcon class="notebook-feature-icon" right>
        <IconNotebook>
          <div class="w-full h-full bg-stapp-pink bg-opacity-20 hover:bg-opacity-60">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconNotebook>
      </FeatureIcon>
      <FeatureText class="text-white">
        <span slot="title">
          Define
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

.notebook-feature-icon {
  width: 600px;
  max-width: 60%;
}
</style>
