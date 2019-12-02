<template>
  <div class="pattern-bg">
    <div class="content">
      <section class="result">
        <h2 class="section-title">Vagas abertas</h2>
        <div
          class="job-card-wrapper"
          v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
          :key="i"
        >
          <JobCard />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import JobCard from '~/components/JobCard'

export default {
  components: {
    JobCard,
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

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
  .job-card-wrapper
    margin-bottom: 30px
    @media(min-width: $content-width)
      width: calc(50% - 20px)
</style>
