<template>
  <div>
    <MainHeader />
    <nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader'

export default {
  components: {
    MainHeader,
  },
}
</script>

<style lang="sass">
@import '~/assets/sass/main'

.pattern-bg
  background-image: url('~assets/svg/presentation-bg.svg')
  background-repeat: no-repeat
  background-position: 12vw -20vw
  background-size: 100%
  padding-top: 100px
  @media(min-width: 800px)
    background-position: 25vw -20vw
  @media(min-width: $content-width)
    background-position: 360px -272px
    padding-top: 240px

.section-title
  position: relative
  margin-bottom: 50px
  font-size: 4rem
  font-weight: 600
  text-align: center
  @media(min-width: $content-width)
    text-align: left
    font-size: 4.8rem
  &:before
    content: ''
    display: block
    background-image: url('~assets/svg/pattern-bg.svg')
    width: 140px
    height: 140px
    position: absolute
    right: calc(100% + 16px)
    top: -40px
  &:after
    content: ''
    display: block
    background-image: url('~assets/svg/title-path.svg')
    background-repeat: no-repeat
    width: 178px
    height: 20px
    position: absolute
    top: 100%
    left: 50%
    transform: translateX(-50%)
    @media(min-width: $content-width)
      left: 0
      transform: translateX(0)
</style>
