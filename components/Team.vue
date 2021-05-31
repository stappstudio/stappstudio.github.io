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
            <div class="w-full flex justify-center items-center space-x-2 mt-2">
              <a :href="teamMember.linkedin" target="_blank">
                <IconLinkedIn class="w-6 h-6 fill-current text-gray-600 hover:text-black" />
              </a>
              <a :href="teamMember.github" target="_blank">
                <IconGitHub class="w-6 h-6 fill-current text-gray-600 hover:text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconLinkedIn from '~/assets/icon/brands/linkedin.svg?inline'
import IconGitHub from '~/assets/icon/brands/github.svg?inline'

export default {
  components: {
    IconLinkedIn,
    IconGitHub
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
        "linkedin": "https://www.linkedin.com/in/jo%C3%A3o-felipe-oliveira-floriano-de-souza-80105499/",
        "github": "https://github.com/itsmejohndoe",
        "imageSrc": "/img/team/john.jpg"
      },
      {
        "id": 2,
        "name": "Edison Santiago",
        "description": "",
        "linkedin": "https://www.linkedin.com/in/edisonsantiago",
        "github": "https://github.com/edison-stapp",
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
        "linkedin": "https://www.linkedin.com/in/jo%C3%A3o-felipe-oliveira-floriano-de-souza-80105499/",
        "github": "https://github.com/itsmejohndoe",
        "imageSrc": "/img/team/john.jpg"
      },
      {
        "id": 2,
        "name": "Edison Santiago",
        "description": "",
        "linkedin": "https://www.linkedin.com/in/edisonsantiago",
        "github": "https://github.com/edison-stapp",
        "imageSrc": "/img/team/edison.jpg"
      }
    ]
  }
}
</i18n>
