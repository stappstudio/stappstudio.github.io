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

.design-feature-icon {
  width: 300px;
  max-width: 40%;
}
</style>

<i18n>
{
  "en": {
    "title": "Design",
    "texts": [
      "Put ourselves on the users's place.",
      "Search for inspiration on similar solutions.",
      "Test our solutions with interactive prototypes.",
      "Feel how the solution would look like."
    ]
  },
  "br": {
    "title": "Design",
    "texts": [
      "Nos colocar no lugar do usuário.",
      "Buscar inspiração em soluções semelhantes.",
      "Testar nossas soluções com protótipos interativos.",
      "Sentir como ficaria a solução."
    ]
  }
}
</i18n>
