<template>
  <div class="admin-wrapper">
    <MainHeader />
    <MainMenu />
    <div class="admin-content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import MainHeader from '~/components/admin/MainHeader'
import MainMenu from '~/components/admin/MainMenu'

export default {
  components: {
    MainHeader,
    MainMenu,
  },
  middleware: 'authenticated',
}
</script>

<style lang="sass">
@import '~/assets/sass/main'
.content
  width: $content-width
  max-width: $max-content-width
  margin: 0 auto

.admin-wrapper
  display: flex
  flex-wrap: wrap
  width: 100%
  width: 100%

.admin-content
  width: 100%
  padding-top: 60px
  @media(min-width: 900px)
    width: calc(100% - #{$aside-width})
</style>
