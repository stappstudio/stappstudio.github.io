<template>
  <header class="sticky top-0 z-40">
    <!-- Background helpers -->
    <div class="absolute flex z-40 w-full h-full">
      <div class="w-full md:w-1/2 h-full bg-stapp-blue" />
      <div class="hidden md:block w-1/2 h-full bg-stapp-pink" />
    </div>
    <!-- Main Header Content -->
    <div class="relative container mx-auto flex items-stretch h-20 z-50">
      <div class="w-full md:w-1/2 flex justify-end items-center pl-3 pl-lg-5 pr-3 bg-stapp-blue">
        <div class="flex items-center flex-grow">
          <div class="logo flex-grow">
            <img class="py-3 h-16" src="/img/logo/horizontal_dark.png" alt="Stapp Studio Logo">
          </div>

          <div class="flex-shrink-0 text-white text-right lang-switcher">
            <template v-for="(locale, index) in $i18n.locales">
              <!-- Display a pipe between the locales -->
              <span v-if="index > 0" :key="'divider' + locale.code" class="px-1">|</span>

              <!-- The current locale is underlined and not clickable -->
              <span v-if="locale.code === $i18n.locale" :key="'name' + locale.code" class="font-bold">
                <!-- Show the short name at small screens -->
                <div class="inline-block lg:hidden">
                  {{ locale.shortName }}
                </div>
                <div class="hidden lg:inline-block">
                  {{ locale.name }}
                </div>
              </span>

              <!-- Available locales are shown as links -->
              <a
                v-if="locale.code !== $i18n.locale"
                :key="locale.code"
                href="#"
                class="text-white"
                @click.prevent.stop="$i18n.setLocale(locale.code)"
              >
                <!-- Show the short name at small screens -->
                <div class="inline-block lg:hidden">
                  {{ locale.shortName }}
                </div>
                <div class="hidden lg:inline-block">
                  {{ locale.name }}
                </div>
              </a>
            </template>
          </div>
        </div>
      </div>

      <div class="hidden md:block w-1/2 pl-5 pr-3 pr-lg-5 bg-stapp-pink">
        <div class="flex text-right justify-end items-center h-full">
          <h5 class="stapp-heading-text font-bold mb-0 text-white text-xl">
            {{ $t('header.slogan') }}
          </h5>
        </div>
      </div>
    </div>
  </header>
</template>
