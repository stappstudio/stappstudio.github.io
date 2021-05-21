<template>
  <section class="py-12 bg-stapp-blue overflow-x-hidden">
    <div class="relative content-container">
      <FeatureIcon class="laptop-feature-icon" right>
        <IconLaptop>
          <div class="w-full h-full bg-stapp-pink bg-opacity-20 hover:bg-opacity-60">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconLaptop>
      </FeatureIcon>
      <FeatureText class="text-white">
        <span slot="title">
          Develop
        </span>
        <div>
          <p class="stapp-body-text">
            Turn code into a product.
          </p>
          <p class="stapp-body-text">
            Build incrementally, so the product is born fast and simple and grows.
          </p>
          <p class="stapp-body-text">
            Test, validate. Use it like our users will.
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

.laptop-feature-icon {
  width: 800px;
  max-width: 60%;
}
</style>
