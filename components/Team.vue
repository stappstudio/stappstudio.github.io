<template>
  <section class="w-full py-12 bg-white overflow-x-hidden">
    <div class="relative content-container">
      <div class="w-full flex flex-wrap justify-center items-start">
        <div class="w-full text-4xl text-center text-stapp-blue stapp-heading-text flex justify-center">
          <div>
            <span>{{ $t('sectionTitle') }}</span>
            <hr class="my-1 bg-stapp-pink h-1">
          </div>
        </div>

        <div class="w-full flex flex-wrap justify-center items-stretch">
          <div v-for="(teamFeature, index) in $t('features')" :key="index" class="my-8 mx-16 flex flex-col justify-start items-center">
            <span
              class="text-5xl
              text-stapp-blue
              font-bold
              stapp-heading-text"
            >{{ teamFeature.destak }}</span>
            <span
              class="whitespace-pre-line text-center stapp-body-text"
            >{{ teamFeature.text }}</span>
          </div>
        </div>

        <div class="w-full flex flex-wrap justify-center items-start">
          <div
            v-for="teamMember in $t('members')"
            :key="teamMember.id"
            class="my-8 mx-16 flex flex-col justify-start items-center"
          >
            <img :src="teamMember.imageSrc" class="w-32 h-32 rounded-full">
            <span class="mt-4 text-xl text-stapp-blue stapp-heading-text">{{ teamMember.name }}</span>
            <span class="whitespace-pre-line text-center stapp-body-text">{{ teamMember.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      teamFeatures: [
        {
          destak: '+7',
          text: 'years of experience\nin mobile'
        }
      ]
    }
  }
}
</script>

<i18n>
{
  "en": {
    "sectionTitle": "Creative Team",
    "features": [
      {
        "destak": "+7",
        "text": "years of experience\nin mobile"
      }
    ],
    "members": [
      {
        "id": 1,
        "name": "João de Souza",
        "description": "",
        "imageSrc": "/img/team/john.jpg"
      },
      {
        "id": 2,
        "name": "Edison Santiago",
        "description": "",
        "imageSrc": "/img/team/edison.jpg"
      }
    ]
  },
  "br": {
    "sectionTitle": "Nosso Time",
    "features": [
      {
        "destak": "+7",
        "text": "anos de experiência\nem mobile"
      }
    ],
    "members": [
      {
        "id": 1,
        "name": "João de Souza",
        "description": "",
        "imageSrc": "/img/team/john.jpg"
      },
      {
        "id": 2,
        "name": "Edison Santiago",
        "description": "",
        "imageSrc": "/img/team/edison.jpg"
      }
    ]
  }
}
</i18n>
