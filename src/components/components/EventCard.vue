<template>
  <div class="event-card">
    <header>
      <div class="event-date">
        <span class="day">{{ event.date | day }}</span>
        <span class="month">{{ event.date | month }}</span>
        <span class="year">{{ event.date | year }}</span>
      </div>
      <h4 class="name">{{ event.name }}</h4>
    </header>
    <h3 class="short-description">{{ event.short_description }}</h3>
    <ul class="tag-list">
      <li v-for="tag in event.tags" :key="tag.id" class="tag">
        {{ tag.name }}
      </li>
    </ul>
    <router-link :to="`/event/${event.slug}`" class="link-see-more">
      {{ $t('eventCard.eventDetails') }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      default: () => {},
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      event: this.data,
    }
  },
}
</script>

<style lang="sass">
@import '~/assets/sass/variables'
.event-card
  box-shadow: 1px 1px 3px 0px
  padding: 20px
  border-radius: 10px
  background-color: #FFF
  font-weight: 400
  header
    display: flex
    align-items: center
    padding-bottom: 10px
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
      position: relative
      .day
        font-size: 3rem
        font-weight: 600
        margin: 0
      .month
        font-size: 2rem
        font-weight: 600
        margin: 0
      .year
        font-size: 1rem
        margin: 0
  .name
    position: relative
    left: 10px
    top: 10px
    font-size: 3.2rem
  .time
    font-size: 1.2rem
    opacity: .6

  .short-description
    margin-bottom: 5px
    font-weight: 400
  .tag-list
    display: flex
    flex-wrap: wrap
    list-style: none
    margin: 0
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
  .link-see-more
    display: block
    text-align: right
</style>
