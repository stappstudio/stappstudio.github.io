<template>
  <section class="w-full py-12 bg-white overflow-x-hidden">
    <div class="relative content-container">
      <div class="w-full flex flex-wrap justify-center items-start px-8">
        <div class="w-full text-4xl text-center text-stapp-blue stapp-heading-text flex justify-center">
          <span>{{ $t('everything') }}</span>
        </div>
        <p
          v-for="(text, index) in $t('texts')"
          :key="'text' + index"
          class="w-3/5 mt-8 text-xl stapp-body-text text-center"
        >
          {{ text }}
        </p>
      </div>
    </div>
  </section>
</template>

<i18n>
{
  "en": {
    "everything": "Everything you need for your app",
    "texts": [
      "We work with you during the entire creation process, crafting together a great solution to help reach your business goals.",
      "We are responsible for all the technology solutions needed by your app, so we can make sure that everything runs smoothly and users can access whenever they want."
    ]
  },
  "br": {
    "everything": "Tudo que você precisa para seu app"
  }
}
</i18n>
