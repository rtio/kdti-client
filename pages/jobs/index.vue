<template>
  <div class="pattern-bg">
    <div class="content">
      <section class="result">
        <h2 class="section-title">{{ $t('jobs.openJobs') }}</h2>
        <Spinner v-if="loadingJobs" class="spinner" />
        <ul v-else class="job-list">
          <li v-for="job in jobs" :key="job.id" class="job-card-item">
            <JobCard :data="job" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
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
      this.jobs = jobs.slice(0, 10)
      this.loadingJobs = false
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'
.spinner
  margin: 80px auto
.result
  display: flex
  flex-direction: column
  flex-wrap: wrap
  padding-bottom: 80px
  .section-title
    min-width: 100%
  @media(min-width: $content-width)
    flex-direction: row
    justify-content: space-between
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
</style>
