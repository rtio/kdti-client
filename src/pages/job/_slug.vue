<template>
  <div class="pattern-bg">
    <div class="content">
      <div v-if="job" class="details">
        <h1>{{ job.title }}</h1>
        <ul class="tag-list">
          <li v-if="salaryRange" class="tag">
            {{ salaryRange }}
          </li>
          <li class="tag">{{ job.seniorityLevel }}</li>
        </ul>
        <div :inner-html.prop="job.description | markdown2html" />
      </div>
      <div class="aside">
        <div class="contribute">
          <h3>Contribua com a gente!</h3>
          <p>Esse projeto é feito pela comunidade para a comunidade</p>
          <p>
            Contribua em nosso
            <a href="http://github.com/kdti" target="_blank">github</a>
          </p>
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
  computed: {
    salaryRange() {
      if (this.job.minimumSalary && this.job.maximumSalary) {
        return `R$ ${this.job.minimumSalary} ~ R$ ${this.job.maximumSalary}`
      } else if (this.job.minimumSalary) {
        return `> R$ ${this.job.minimumSalary}`
      } else if (this.job.maximumSalary) {
        return `< R$ ${this.job.maximumSalary}`
      }

      return null
    },
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

.pattern-bg
  padding-top: 80px
.content
  display: flex
  flex-direction: column
  font-weight: 400
  padding-bottom: 100px

  @media(min-width: $content-width)
    flex-direction: row
    width: 80%
  .aside
    @media(min-width: $content-width)
      margin-left: 30px
    .contribute
      padding: 40px
      background-color: #FFF
      box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1)
      border-radius: 5px
      position: relative
      overflow: hidden
      &:after
        content: ''
        display: block
        position: absolute
        min-width: 280px
        min-height: 280px
        background-image: url('~assets/images/github-logo.png')
        background-repeat: no-repeat
        background-position: center
        opacity: .05
        background-size: 280px
        right: -40px
        bottom: -40px
  > .details
    padding: 40px
    margin-bottom: 60px
    background-color: #FFF
    border-radius: 5px
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
      box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1)
    .logo
      width: 100px
      height: 100px
      overflow: hidden
      border-radius: 50%
      margin-top: -80px
      margin-bottom: 5px
      border: 10px solid #FFF
      box-sizing: content-box
      box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1)
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
