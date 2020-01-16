<template>
  <div class="content">
    <h2>Vagas cadastradas</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>{{ $t('myJobs.title') }}</th>
            <th>{{ $t('myJobs.hireType') }}</th>
            <th>{{ $t('myJobs.status') }}</th>
            <th>{{ $t('myJobs.date') }}</th>
          </tr>
        </thead>
        <Spinner v-if="loadingJobs" class="spinner" />
        <tbody>
          <tr v-for="job in jobs" :key="job.id">
            <td>{{ job.title }}</td>
            <td>{{ job.hiringType }}</td>
            <td>{{ job.status }}</td>
            <td>{{ job.publishedAt }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Spinner from '~/components/Spinner'

export default {
  components: {
    Spinner,
  },

  layout: 'admin',
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
  },
}
</script>

<style lang="sass" scoped>
.spinner
  margin: 80px auto
  position: absolute
  top: 30%
  left: 50%
.table-wrapper
  overflow: scroll
</style>
