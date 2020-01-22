<template>
  <div class="pattern-bg">
    <div class="content">
      <div v-if="job" class="description">
        <h1>{{ job.title }}</h1>
        <ul class="tag-list">
          <li class="tag">
            R$ {{ job.minimumSalary }} - R$ {{ job.maximumSalary }}
          </li>
          <li class="tag">{{ job.seniorityLevel }}</li>
        </ul>
        {{ job.description }}
      </div>
      <div class="company">
        <div class="company-content">
          <figure v-if="job.company" class="logo">
            <img :alt="job.title" :src="job.company.logo" />
          </figure>
          <h3 class="title">{{ job.title }}</h3>
          <p v-if="job.company" class="location">{{ job.company.address }}</p>
          <p class="description">{{ job.description }}</p>
          <address v-if="job.company" class="address">
            <a
              :href="'https://maps.google.com/?q=' + job.company.address"
              target="_blank"
              >{{ job.company.address }}</a
            >
          </address>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      job: Object,
    }
  },
  mounted() {
    this.getJob()
  },
  methods: {
    async getJob() {
      this.job = await this.$jobRepository.showBySlug(this.$route.params.slug)
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

.content
  display: flex
  flex-direction: column
  font-weight: 400
  padding-bottom: 100px
  @media(min-width: $content-width)
    flex-direction: row
  > .description
    margin-bottom: 60px
    @media (min-width: $content-width)
      width: 65%
      padding-right: 5%
    h1
      font-weight: 600
    .tag-list
      display: flex
      flex-wrap: wrap
      list-style: none
      .tag
        // TODO: Define color tag color system
        background-color: #DCDCF6
        border-radius: 5px
        margin-right: 5px
        padding: 0 5px
        font-size: 1.2rem
        font-weight: 600
        &:first-child
          background-color: #EEF5C0
  > .company
    margin-top: 50px
    @media (min-width: $content-width)
      width: 35%
    .company-content
      display: flex
      flex-direction: column
      align-items: center
      padding: 20px
      background-color: #FFF
      border-radius: 10px
      box-shadow: 1px 1px 1px 0px
    .logo
      width: 100px
      height: 100px
      overflow: hidden
      border-radius: 50%
      margin-top: -80px
      margin-bottom: 5px
      border: 10px solid #FFF
      box-sizing: content-box
      box-shadow: 1px 1px 1px 0px
    .title,
    .location
      margin: 0
    .location
      line-height: 1
      margin-bottom: 10px
      font-size: 1rem
      font-weight: 400
    .description
    .address
      width: 100%
      font-weight: 400
      line-height: 1
</style>
