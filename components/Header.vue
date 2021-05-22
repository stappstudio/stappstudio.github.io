<template>
  <header class="sticky top-0 z-40">
    <!-- Background helpers -->
    <div class="absolute flex z-40 w-full h-full">
      <div class="w-full md:w-1/2 h-full bg-stapp-blue" />
      <div class="hidden md:block w-1/2 h-full bg-stapp-pink" />
    </div>
    <!-- Main Header Content -->
    <div class="relative container mx-auto flex items-stretch h-20 z-50">
      <div class="w-full md:w-1/2 flex justify-end items-center pl-5 pl-lg-8 pr-5 bg-stapp-blue">
        <div class="flex items-center flex-grow">
          <div class="logo flex-grow">
            <img class="py-3 h-16" src="/img/logo/horizontal_dark.png" alt="Stapp Studio Logo">
          </div>

          <div class="flex-shrink-0 text-white text-sm text-right lang-switcher flex justify-end items-center">
            <template v-for="(locale, index) in $i18n.locales">
              <!-- Display a pipe between the locales -->
              <span v-if="index > 0" :key="'divider' + locale.code" class="inline-block px-2">|</span>

              <!-- The current locale is bold and not clickable -->
              <div v-if="locale.code === $i18n.locale" :key="'name' + locale.code" class="inline-block font-bold">
                <!-- Show the short name at small screens -->
                <span class="inline-block lg:hidden">
                  {{ locale.shortName }}
                </span>
                <span class="hidden lg:inline-block">
                  {{ locale.name }}
                </span>
              </div>

              <!-- Available locales are shown as links -->
              <a
                v-else
                :key="'name' + locale.code"
                href="#"
                class="text-white"
                @click.prevent.stop="$i18n.setLocale(locale.code)"
              >
                <!-- Show the short name at small screens -->
                <span class="inline-block lg:hidden">
                  {{ locale.shortName }}
                </span>
                <span class="hidden lg:inline-block">
                  {{ locale.name }}
                </span>
              </a>
            </template>
          </div>
        </div>
      </div>

      <div class="hidden md:block w-1/2 pl-8 pr-5 pr-lg-8 bg-stapp-pink">
        <div class="flex text-right justify-end items-center h-full">
          <h5 class="stapp-heading-text font-bold mb-0 text-white text-xl">
            {{ $t('header.slogan') }}
          </h5>
        </div>
      </div>
    </div>
  </header>
</template>
