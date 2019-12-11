<template>
  <nav>
    <ul>
      <router-link tag="li" to="/admin/my-jobs">
        Vagas cadastradas
      </router-link>
      <router-link tag="li" to="/admin/new-job">
        Cadastrar vaga
      </router-link>
      <router-link tag="li" to="/admin/company">
        Perfil da Empresa
      </router-link>
    </ul>
  </nav>
</template>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

nav
  min-height: calc(100vh - #{$header-height})
  width: $aside-width
  background: $color-primary
  @media(max-width: 900px)
    display: none
  ul
    list-style: none
    padding: 0 30px
    li
      line-height: 40px
      font-size: 2rem
      border-bottom: 1px solid white
      color: white
      cursor: pointer
      &.nuxt-link-active
        font-weight: 800
</style>
