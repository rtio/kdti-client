<template>
  <div class="pattern-bg">
    <div class="content">
      <section class="result">
        <h2 class="section-title">Eventos</h2>
        <Spinner v-if="loadingEvents" class="spinner" />
        <div v-else>
          <ul class="event-list">
            <li v-for="event in Events" :key="event.id" class="event-card-item">
              <EventCard :data="event" />
            </li>
          </ul>
          <span
            @click="toggleMenu"
            v-show="showSeeMore"
            class="button button-see-more"
            >Ver todos os eventos</span
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import EventCard from '~/components/EventCard'
import Spinner from '~/components/Spinner'

export default {
  components: {
    EventCard,
    Spinner,
  },
  data() {
    return {
      showSeeMore: true,
      loadingEvents: false,
      Events: [],
    }
  },
  mounted() {
    this.getEvents()
  },
  methods: {
    async getEvents() {
      this.loadingEvents = true
      this.AllEvents = await this.$eventRepository.index()
      this.Events = this.AllEvents.slice(0, 4)
      this.showSeeMore = true
      this.loadingEvents = false
    },
    toggleMenu() {
      this.Events = this.AllEvents
      this.showSeeMore = false
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
  .event-list
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
    .event-card-item
      width: 100%
      min-width: 290px
      margin-bottom: 30px
      @media(min-width: $content-width)
        width: calc(50% - 20px)
  .button-see-more
    display: block
    max-width: max-content
    margin: 0 auto
</style>
