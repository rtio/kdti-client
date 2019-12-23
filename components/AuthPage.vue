<template>
  <div class="auth-page">
    <div class="auth-page-form-wrapper content">
      <slot />
    </div>
    <div class="auth-page-info-wrap">
      <div class="auth-page-info">
        <h1 class="title">{{ title }}</h1>
        <p>
          {{ description }}
        </p>
        <router-link
          :to="ctaConfig.path"
          tag="button"
          class="button button-large button-clear button-black"
        >
          {{ ctaConfig.message }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    ctaConfig: {
      type: Object,
      default: () => ({
        message: '',
      }),
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

.auth-page
  display: flex
  flex-direction: column
  height: calc(100vh - #{$header-height})
  @media (min-width: $content-width)
    flex-direction: row
  .auth-page-info-wrap
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    min-width: 50%
    background-color: $color-primary
    @media (max-width: 900px)
      min-width: 100%
      height: 60px
    .login-form
      height: 100%
    .auth-page-info
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      max-width: 500px
      margin: 0 auto
      color: #FFF
      @media (max-width: 900px)
        .title,
        p
          display: none
      h1
        font-size: 4rem
        font-weight: 600
        margin-bottom: 30px
      p
        text-align: center
        font-size: 2rem
        font-weight: 400
        margin-bottom: 30px
      button
        margin: 0
        color: white
        border: solid 1px
        @media (max-width: 1020px)
          margin-bottom: 10px
        @media (max-width: 900px)
          border: none
          margin-top: 10px
        &:hover
          color: white
          border-color: #606c76
          background: #606c76
  .auth-page-form-wrapper
    min-width: 50%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
</style>
