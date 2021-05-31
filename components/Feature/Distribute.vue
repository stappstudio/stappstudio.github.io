<template>
  <section class="py-12 bg-white">
    <div class="relative content-container">
      <FeatureIcon class="phone-feature-icon">
        <IconPhone>
          <div class="w-full h-full bg-stapp-blue bg-opacity-20 hover:bg-opacity-60 active:bg-opacity-60">
            <!-- <img class="-m-2" src="carbon.png"> -->
          </div>
        </IconPhone>
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

.phone-feature-icon {
  width: 300px;
  max-width: 40%;
}
</style>

<i18n>
{
  "en": {
    "title": "Distribute",
    "texts": [
      "Reach our user's phones.",
      "Scale our architecture so our solution is always available for everyone who needs it.",
      "Pay attention to deviations and correct them quickly."
    ]
  },
  "br": {
    "title": "Distribuir",
    "texts": [
      "Chegar aos telefones dos nossos usuários.",
      "Escalar nossa arquitetura para permitir que nossa solução esteja sempre disponível para todos que a utilizarem.",
      "Ficar atento aos desvios e corrigí-los rapidamente."
    ]
  }
}
</i18n>
