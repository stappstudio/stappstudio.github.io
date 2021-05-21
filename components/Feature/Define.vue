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
        <div>
          <p class="stapp-body-text">
            Understand your problems, your needs and your goals.
          </p>
          <p class="stapp-body-text">
            Get to know your users and their stories.
          </p>
          <p class="stapp-body-text">
            Identify our challenges.
          </p>
          <p class="stapp-body-text">
            Propose some solutions.
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

.notebook-feature-icon {
  width: 600px;
  max-width: 60%;
}
</style>
