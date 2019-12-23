<template>
  <div class="login-page">
    <div class="login-page-form-wrapper content">
      <RegisterForm v-if="isNewUser" />
      <LoginForm v-else />
    </div>
    <div class="login-page-info-wrap">
      <div class="login-page-info">
        <h1 class="title">Cadastre vagas!</h1>
        <p v-if="isNewUser">
          Cadastre sua empresa gratuitamente e comece a divulgar vagas. Caso já
          tenha uma conta clique na opção abaixo:
        </p>
        <p v-else>
          Para cadastrar vagas você precisa fazer login, caso não tenha uma
          conta clique na opção abaixo:
        </p>
        <button
          @click="toogleIsNewUser"
          class="button button-large button-clear button-black"
        >
          {{ isNewUser ? 'Já tenho uma conta' : 'Quero me cadastrar' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '~/components/LoginForm'
import RegisterForm from '~/components/RegisterForm'

export default {
  components: {
    LoginForm,
    RegisterForm,
  },
  data() {
    return {
      isNewUser: false,
    }
  },
  methods: {
    toogleIsNewUser() {
      this.isNewUser = !this.isNewUser
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

.login-page
  display: flex
  flex-direction: row
  height: calc(100vh - #{$header-height})
  @media (max-width: $content-width)
    flex-direction: column
  .login-page-info-wrap
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
    .login-page-info
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
  .login-page-form-wrapper
    min-width: 50%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
</style>
