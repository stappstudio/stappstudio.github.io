<template>
  <div class="bk-team-area bg_color--1 pt--55 pb--75 pt_md--20 pt_sm--20 pb_md--40 pb_sm--40 team-bottom-text-image" :style="{backgroundImage: `url('/img/icons/team.png')`}">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mt--40">
          <div class="brook-section-title wow move-up">
            <h3 class="heading heading-h3 font-large pr--40 theme-color">
              {{ sectionTitle }}
            </h3>
            <hr class="mt--35 bg_color--6" :style="{width: '200px', height: '5px'}">
            <!-- <div class="thumb mt--35">
              <img src="/img/service/icon-box/wavy-icon.png" alt="Multipurpose">
            </div> -->
            <div class="content mt--45">
              <p class="bk_pra line-height-1-87 font-16">
                {{ sectionSubtitle }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="row">
            <div v-for="teamMember in teamMembers" :key="teamMember.id" class="col-lg-6 col-sm-6 wow move-up mt--40">
              <div class="team team_style--4">
                <div class="inner">
                  <div class="content-header">
                    <div class="thumb">
                      <!-- Remove the img below when we have real images -->
                      <img class="bg_color--3" :style="{width: '200px', height: '200px'}">
                      <!-- <img :src="teamMember.image" :alt="teamMember.alt"> -->
                    </div>
                    <div class="social-network">
                      <div class="social-list">
                        <a v-for="social in teamMember.socials" :key="social.i" :href="social.url">
                          <i :class="social.icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="content-body">
                    <h4 class="heading">
                      {{ teamMember.name }}
                    </h4>
                    <div class="position">
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

<script>
export default {
  data () {
    return {
      sectionTitle: 'Creative Team',
      sectionSubtitle: 'Each member of our team is a specialist in his or her field. Together, we make sure you\'re receiving the most dedicated services with best quality.',
      teamMembers: [
        {
          id: 1,
          name: 'João de Souza',
          description: 'Developer',
          image: '/img/team/team-4/team-member-alt-01.png',
          alt: 'team member',
          socials: [
            {
              url: 'https://www.facebook.com/',
              icon: 'fab fa-facebook'
            },
            {
              url: 'https://twitter.com/',
              icon: 'fab fa-twitter'
            },
            {
              url: 'https://www.instagram.com/',
              icon: 'fab fa-instagram'
            }
          ]
        },
        {
          id: 2,
          name: 'Edison Santiago',
          description: 'Developer',
          image: '/img/team/team-4/team-member-alt-02.png',
          alt: 'team member',
          socials: [
            {
              url: 'https://www.facebook.com/',
              icon: 'fab fa-facebook'
            },
            {
              url: 'https://twitter.com/',
              icon: 'fab fa-twitter'
            },
            {
              url: 'https://www.instagram.com/',
              icon: 'fab fa-instagram'
            }
          ]
        }
      ]
    }
  }
}
</script>
