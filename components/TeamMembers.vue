<template>
  <div class="pt-2 pb-5 pt-md-4 pt-lg-5 pb-md-4 pb-lg-5 px-5 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mt-5">
          <div>
            <h3 class="stapp-heading-text font-weight-bold pr-4 text-secondary">
              {{ $t('teamMembers.sectionTitle') }}
            </h3>
            <hr class="mt-5 bg-primary" :style="{width: '200px', height: '5px'}">
            <div class="content mt-5">
              <p class="stapp-body-text">
                {{ $t('teamMembers.sectionSubtitle') }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row">
            <div v-for="teamMember in $t('teamMembers.members')" :key="teamMember.id" class="col-sm-6 mt-5">
              <div class="text-center">
                <div class="inner">
                  <div class="content-header mb-4">
                    <div class="thumb">
                      <!-- Remove the img below when we have real images -->
                      <img class="bg-secondary rounded-circle" :style="{width: '200px', height: '200px'}">
                      <!-- <img :src="teamMember.imageSrc" :alt="teamMember.alt"> -->
                    </div>
                    <!-- <div class="social-network">
                      <div class="social-list">
                        <a v-for="social in teamMember.socials" :key="social.i" :href="social.url">
                          <i :class="social.icon" />
                        </a>
                      </div>
                    </div> -->
                  </div>
                  <div class="content-body">
                    <h4 class="stapp-heading-text font-weight-bold text-primary">
                      {{ teamMember.name }}
                    </h4>
                    <div class="stapp-body-text">
                      {{ teamMember.description }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
