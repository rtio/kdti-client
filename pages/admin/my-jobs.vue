<template>
  <div class="content">
    <h2>Vagas cadastradas</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Contratação</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
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
  component: {
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
.table-wrapper
  overflow: scroll
</style>
