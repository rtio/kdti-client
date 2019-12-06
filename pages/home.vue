<template>
  <div class="pattern-bg">
    <div class="content">
      <section class="presentation">
        <div class="presentation-info">
          <h1 class="presentation-title">KDT<span>I</span></h1>
          <p class="prescription-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            a, quam tempora doloremque iste animi vel quis mollitia assumenda
            omnis quod nostrum, pariatur ea debitis labore eligendi architecto
            veritatis! Sint.
          </p>
          <div class="presentation-action">
            <router-link to="/login" tag="a" class="button">Entrar</router-link>
            <router-link to="/login" tag="a" class="button button-outline">
              Cadastre-se
            </router-link>
          </div>
        </div>
        <figure class="illustration">
          <img
            src="~/assets/svg/woman-working.svg"
            alt="Ilustração de uma mulher tabalhando no computador"
          />
        </figure>
      </section>

      <section class="recent-jobs">
        <h2 class="section-title">Últimas vagas</h2>
        <Spinner v-if="loadingJobs" class="spinner" />
        <ul v-else class="job-list">
          <li v-for="job in jobs" :key="job.id" class="job-card-item">
            <JobCard :data="job" />
          </li>
        </ul>
        <router-link to="/jobs" class="button button-see-more">
          Ver todas as vagas
        </router-link>
      </section>

      <section class="events">
        <h2 class="section-title">Eventos</h2>
        <div class="events-content">
          <div class="events-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
          <div class="events-timeline">
            <ul class="events-list">
              <li v-for="i in [1, 2, 3]" :key="i" class="events-item">
                <div class="event-date">
                  <span class="day">25</span>
                  <span class="month">dez</span>
                </div>
                <h5 class="title">Meetup Frontendce</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Velit a mollitia fugiat.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer class="home-footer">
        <figure class="illustration">
          <img
            src="~/assets/svg/group-working.svg"
            alt="Ilustração de um grupo tabalhando"
          />
        </figure>
      </footer>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'

import JobCard from '~/components/JobCard'
import Spinner from '~/components/Spinner'

export default {
  components: {
    JobCard,
    Spinner,
  },
  data() {
    return {
      loadingJobs: false,
      jobs: [],
    }
  },
  mounted() {
    this.getJobs()
  },
  methods: {
    async getJobs() {
      this.loadingJobs = true
      const jobs = await this.$jobRepository.index()
      this.jobs = jobs.slice(0, 6)
      this.loadingJobs = false
    },
    logout() {
      Cookie.remove('auth')
      this.$store.commit('setAuth', null)
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'
.spinner
  margin: 80px auto
.presentation
  display: flex
  flex-direction: column
  align-items: center
  padding-bottom: 60px
  @media(min-width: $content-width)
    flex-direction: row
    padding-bottom: 160px
  .presentation-info
    width: 100%
    margin-bottom: 60px
    @media(min-width: $content-width)
      max-width: 60%
      padding-right: 40px

    .presentation-title
      font-weight: 800
      font-size: 8rem
      span
        color: $color-primary
    .prescription-description
      font-size: 2rem
      font-weight: 400
    .presentation-action
      margin-top: 380px
      @media(min-width: 600px)
        margin-top: 400px
      @media(min-width: $content-width)
        margin-top: 50px
      .button
        width: 100%
        @media(min-width: $content-width)
          width: auto

  .illustration
    margin-top: -540px
    margin-bottom: 160px
    width: 400px
    max-width: 100%
    @media(min-width: $content-width)
      width: 100%
      margin-top: 0
      margin-bottom: 0
      min-width: 60%
.recent-jobs
  margin-bottom: 160px
  .button-see-more
    display: block
    max-width: max-content
    margin: 0 auto

  .job-list
    list-style: none
    display: flex
    flex-direction: column
    flex-wrap: wrap
    align-items: center
    justify-content: space-between
    width: 100%
    padding: 40px 0
    margin-bottom: 0
    @media(min-width: $content-width)
      flex-direction: row
    .job-card-item
      width: 100%
      min-width: 290px
      margin-bottom: 30px
      @media(min-width: $content-width)
        width: calc(50% - 20px)

.events
  .events-content
    display: flex
    justify-content: space-between
    flex-direction: column
    @media(min-width: $content-width)
      flex-direction: row

    .events-info
      width: 100%
      margin-right: 50px
      @media(min-width: $content-width)
        max-width: 40%
    .events-timeline
      width: 100%
      @media(min-width: $content-width)
        max-width: 60%

      .events-list
        margin-left: 50px
        margin-top: 50px
        padding: 60px 0 0 50px
        border-left: 4px solid $purple
        list-style: none
        @media(min-width: $content-width)
          margin-top: -100px
        .events-item
          position: relative
          padding-bottom: 40px
          .title
            font-size: 2.4
            font-weight: bold
            margin-bottom: 0
        .event-date
          display: flex
          flex-direction: column
          width: 80px
          height: 80px
          background-color: #FFF
          border: 4px solid $purple
          justify-content: center
          align-items: center
          border-radius: 50%
          line-height: 1
          position: absolute
          right: calc(100% + 12px)
          .day
            font-size: 2.4rem
            font-weight: 600
            margin: 0
          .month


.home-footer
  margin-top: 60px
  position: relative
  height: 200px
  .illustration
    position: absolute
    bottom: 0
    margin-bottom: 0
    line-height: 1
    @media(min-width: $content-width)
      width: 80%
      left: -160px
      min-width: 300px
</style>
