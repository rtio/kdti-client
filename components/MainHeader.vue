<template>
  <header class="main-header">
    <div class="header-inner">
      <div class="header-navbar">
        <h3 class="logo">
          <router-link to="/home" tag="a">
            <img src="~/assets/svg/logo.svg" alt="KDTI logo" />
          </router-link>
        </h3>
        <span @click="toggleMenu" class="button-collapse-menu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div :class="{ '--active': isMenuOpen }" class="nav-collapse">
        <nav class="nav-menu">
          <ul>
            <li>
              <router-link to="/home" tag="a">
                Início
              </router-link>
            </li>
            <li>
              <router-link to="/jobs" tag="a">
                Encontrar vagas
              </router-link>
            </li>
            <li>
              <router-link to="/events" tag="a">
                Eventos
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="nav-actions">
          <ul>
            <li>
              <router-link to="/login" tag="a" class="button">
                Cadastrar vagas
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'
@import '~/assets/sass/mixins'

.main-header
  background-color: white
  border-bottom: 1px solid rgba(0, 0, 0, .1)
  position: fixed
  top: 0
  left: 0
  font-weight: 400
  width: 100%
  z-index: 1000

  .header-inner
    @media(min-width: $content-width)
      display: flex
      height: $header-height
      padding: 0 2.5%

  .header-navbar
    background-color: white
    border-bottom: 1px solid rgba(0, 0, 0, .1)
    display: flex
    align-items: center
    justify-content: space-between
    height: $header-height
    padding: 0 5%
    position: relative
    z-index: 10
    @media(min-width: $content-width)
      border: none
      height: auto
      padding: 0

    .logo
      font-weight: bold
      margin: 0
      @media(min-width: $content-width)
        font-size: 3.75rem
      a
        color: #606c76
        img
          width: 120px

    .button-collapse-menu
      cursor: pointer
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 27px
      width: 33px
      @media(min-width: $content-width)
        display: none
      span
        background-color: $color-primary
        display: block
        height: 4px
        margin: 2px 0
      &:hover, &:focus
        span
          background-color: black

  .nav-collapse
    background-color: white
    display: none
    flex-direction: column
    justify-content: center
    height: 100%
    padding: 0 5%
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    @media(min-width: $content-width)
      background-color: transparent
      display: flex
      align-items: center
      flex-direction: row
      justify-content: flex-end
      padding: 0
      position: relative
    &.--active
      display: flex
      .nav-menu, .nav-actions
        +fadeInDown

  ul
    list-style: none
    margin: 0
    padding: 0
    text-align: center
    @media(min-width: $content-width)
      display: flex
    li
      @media(min-width: $content-width)
        margin-bottom: 0

  .nav-menu
    @media(min-width: 1280px)
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-65%, -50%)
    li
      .nuxt-link-active
        color: $color-primary
    a
      color: #606c76
      font-size: 3.5rem
      @media(min-width: $content-width)
        font-size: 2rem
      &:hover
        color: $color-primary
      @media(min-width: $content-width)
        font-size: 1.8rem
        padding: 1.5rem

  .nav-actions
    margin-top: 3rem
    position: absolute
    bottom: 0
    left: 0
    width: 90%
    left: 5%
    @media(min-width: $content-width)
      width: auto
      position: relative
      left: auto
      margin-left: 2rem
      margin-top: 0
    li
      @media(min-width: $content-width)
        margin-left: 1rem
    .button
      width: 100%
      @media(min-width: $content-width)
        font-size: 1.4rem
        margin-bottom: 0
        min-width: 145px
        padding: 0 2rem
</style>
