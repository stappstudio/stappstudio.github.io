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
          {{ $t('title') }}
        </span>
        <div>
          <p
            v-for="text in $t('texts')"
            :key="text"
            class="stapp-body-text"
          >
            {{ text }}
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

<i18n>
{
  "en": {
    "title": "Define",
    "texts": [
      "Understand your problems, your needs and your goals.",
      "Get to know your users and their stories.",
      "Identify our challenges.",
      "Propose some solutions."
    ]
  },
  "br": {
    "title": "Definir",
    "texts": [
      "Compreender seus problemas, suas necessidades e seus objetivos.",
      "Conhecer seus usuários e suas histórias.",
      "Identificar nossos desafios.",
      "Propor algumas soluções."
    ]
  }
}
</i18n>
