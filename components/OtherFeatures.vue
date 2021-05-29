<template>
  <section class="w-full py-12 bg-stapp-blue overflow-x-hidden">
    <div class="relative content-container">
      <div class="w-full flex flex-wrap justify-stretch items-stretch">
        <div
          v-for="(teamFeature, index) in $t('features')"
          :key="index"
          class="w-full md:w-1/3 py-6 px-8 flex flex-col justify-start items-center text-white"
        >
          <!-- eslint-disable-next-line -->
          <div v-html="iconForName(teamFeature.iconName)" class="icon-wrapper w-10 h-10 fill-current text-white" />
          <span
            class="font-bold stapp-heading-text text-center text-xl mt-2 mb-6"
          >{{ teamFeature.name }}</span>
          <span
            class="whitespace-pre-line text-center stapp-body-text"
          >{{ teamFeature.description }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DNSIcon from '~/assets/icon/dns.svg?raw'
import DomainIcon from '~/assets/icon/domain.svg?raw'
import LibraryIcon from '~/assets/icon/library.svg?raw'
import MedicationIcon from '~/assets/icon/medication.svg?raw'
import PhoneIcon from '~/assets/icon/phone.svg?raw'
import RefreshIcon from '~/assets/icon/refresh.svg?raw'
export default {
  methods: {
    iconForName (name) {
      switch (name) {
        case 'library':
          return LibraryIcon
        case 'phone':
          return PhoneIcon
        case 'refresh':
          return RefreshIcon
        case 'dns':
          return DNSIcon
        case 'domain':
          return DomainIcon
        case 'medication':
          return MedicationIcon
      }
    }
  }
}
</script>

<style>
.icon-wrapper > svg {
  width: 100%;
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "features": [
      {
        "id": 1,
        "iconName": "library",
        "name": "UX Studies",
        "description": "The design is carefully crafted based on research and not on assumptions."
      },
      {
        "id": 2,
        "iconName": "phone",
        "name": "Interactive Prototypes",
        "description": "You can feel the app during the design process so you can help us validate it."
      },
      {
        "id": 3,
        "iconName": "refresh",
        "name": "Constant Deliveries",
        "description": "We develop your app incrementally, so we always have something new to show you."
      },
      {
        "id": 4,
        "iconName": "dns",
        "name": "Reliable Platforms",
        "description": "All our code run on reliable platforms from trustable companies."
      },
      {
        "id": 5,
        "iconName": "domain",
        "name": "Hosting",
        "description": "We handle the hosting of your app's related services, like APIs and databases."
      },
      {
        "id": 6,
        "iconName": "medication",
        "name": "Support",
        "description": "If something breaks or does not work properly, we are always there to fix it."
      }
    ]
  }
}
</i18n>
