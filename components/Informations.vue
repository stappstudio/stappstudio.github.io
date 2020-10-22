<template>
  <div class="brook-whatdo-area ptb--50 ptb-md--40 ptb-sm--30 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="bk-title--default text-left">
            <h5 class="heading heading-h5 text-primary">
              {{ $t('informations.sectionTitle') }}
            </h5>
            <div class="bkseparator--30" />
            <h3 class="heading heading-h3 font-large text-secondary">
              {{ $t('informations.sectionSubtitle') }}
            </h3>
          </div>
        </div>
      </div>
      <div class="row mt--40 mt_md--20 mt_sm--5">
        <div class="col-xl-2 col-lg-2">
          <div class="what-do mt--40 mt_md--5 mt_sm--5">
            <div class="basic-separator line-3" :style="{backgroundColor: '#ff0078'}" />
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
          <div class="what-do mt--40">
            <div class="content">
              <h5 class="heading heading-h5 text-primary wow move-up">
                {{ $t('informations.informations[0].title') }}
              </h5>
              <div class="bkseparator--20" />
              <p class="bk_pra wow move-up">
                {{ $t('informations.informations[0].description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 offset-xl-1">
          <div class="what-do mt--40">
            <div class="content">
              <h5 class="heading heading-h5 text-primary wow move-up">
                {{ $t('informations.informations[1].title') }}
              </h5>
              <div class="bkseparator--20" />
              <p class="bk_pra wow move-up">
                {{ $t('informations.informations[1].description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
