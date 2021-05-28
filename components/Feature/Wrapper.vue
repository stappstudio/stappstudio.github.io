<template>
  <div ref="wrapper" class="flex flex-wrap justify-start">
    <div class="w-full pt-8 bg-stapp-blue">
      <div class="content-container text-center text-white">
        <span class="text-3xl sm:text-3xl stapp-heading-text capitalize">{{ $t('title') }}</span>
      </div>
    </div>

    <FeatureDefine class="w-full overflow-x-hidden" />

    <FeatureDesign class="w-full overflow-x-hidden" />

    <FeatureDevelop class="w-full overflow-x-hidden" />

    <FeatureDistribute class="w-full overflow-x-hidden" />
  </div>
</template>

<i18n>
{
  "en": {
    "title": "Creation process"
  },
  "br": {
    "title": "Processo de criação"
  }
}
</i18n>
