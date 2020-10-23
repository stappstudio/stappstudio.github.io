<template>
  <div class="pt-5 px-5 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 offset-lg-2">
          <div class="text-left">
            <h5 class="stapp-heading-text font-weight-bold text-primary">
              {{ $t('informations.sectionTitle') }}
            </h5>
            <h3 class="stapp-heading-text font-weight-bold text-secondary mt-5">
              {{ $t('informations.sectionSubtitle') }}
            </h3>
          </div>
        </div>
      </div>
      <div class="row mt-1 mt-md-3 mt-lg-5">
        <div class="col-xl-2 col-lg-2">
          <div class="what-do mt-1 mt-lg-5">
            <hr class="d-lg-none mt-5 bg-primary" :style="{width: '200px', height: '5px'}">
            <div class="d-none d-lg-inline-block basic-separator line-3" :style="{backgroundColor: '#ff0078', width: '120px', height: '5px'}" />
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
          <div class="what-do mt-5">
            <div class="content">
              <h5 class="stapp-heading-text font-weight-bold text-center text-md-left text-primary">
                {{ $t('informations.informations[0].title') }}
              </h5>
              <p class="stapp-body-text bk_pra text-center text-md-left mt-4 move-up">
                {{ $t('informations.informations[0].description') }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 offset-xl-1">
          <div class="what-do mt-5">
            <div class="content">
              <h5 class="stapp-heading-text font-weight-bold text-center text-md-left text-primary">
                {{ $t('informations.informations[1].title') }}
              </h5>
              <p class="stapp-body-text bk_pra text-center text-md-left mt-4 ">
                {{ $t('informations.informations[1].description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
