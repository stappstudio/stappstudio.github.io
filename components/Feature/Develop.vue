<template>
  <section class="py-12 bg-stapp-blue overflow-x-hidden">
    <div class="relative content-container">
      <FeatureIcon class="laptop-feature-icon" right>
        <IconLaptop>
          <div class="w-full h-full bg-stapp-pink bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-60">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconLaptop>
      </FeatureIcon>
      <FeatureText class="text-white">
        <span slot="title">
          {{ $t('title') }}
        </span>
        <div>
          <ul class="list-disc space-y-4">
            <li
              v-for="text in $t('texts')"
              :key="text"
              class="stapp-body-text"
            >
              {{ text }}
            </li>
          </ul>
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

<i18n>
{
  "en": {
    "title": "Develop",
    "texts": [
      "Turn code into a product.",
      "Build incrementally, so the product is born fast and simple and grows.",
      "Test, validate. Use it like our users will."
    ]
  },
  "br": {
    "title": "Desenvolver",
    "texts": [
      "Transformar código em um produto.",
      "Construir aos poucos, o produto nasce simples de forma rápida e vai crescendo.",
      "Testar, validar, usar o produto igual nossos usuários vão utilizar."
    ]
  }
}
</i18n>
