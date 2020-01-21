<template>
  <div class="company-card">
    <header>
      <div class="company-wrapper">
        <figure class="logo">
          <img :alt="company.name" :src="company.logo" />
        </figure>
        <h4 class="name">{{ company.name }}</h4>
      </div>
      <div class="time">{{ (company.createdDate || '') | timeAgo }}</div>
    </header>
    <h3 class="company-title">{{ company.shortDescription }}</h3>
    <ul class="tag-list">
      <li class="tag">{{ company.neiborhood }}</li>
    </ul>
    <router-link :to="`/company/${company.slug}`" class="link-see-more">
      {{ $t('companyCard.companyDetails') }} →
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
      company: this.data,
    }
  },
}
</script>

<style lang="sass">
.company-card
  box-shadow: 1px 1px 3px 0px
  padding: 20px
  border-radius: 10px
  background-color: #FFF
  font-weight: 400
  header
    display: flex
    justify-content: space-between
    align-items: center
    padding-bottom: 10px
  .company-wrapper
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      width: 40px
      min-width: 40px
      height: 40px
      min-height: 40px
      overflow: hidden
      border-radius: 50%
      margin: 0
    .name
      font-size: 2rem
      font-weight: 400
      margin: 0 0 0 8px
  .time
    font-size: 1.2rem
    opacity: .6

  .company-title
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
