<template>
  <AuthPage
    :ctaConfig="{
      message: 'Quero me cadastrar',
      path: 'register',
    }"
    description="
      Para cadastrar vagas você precisa fazer login, caso não tenha uma conta clique na opção abaixo:
    "
    title="Cadastre vagas!"
  >
    <form @submit.prevent="validateForm" class="form-small" novalidate>
      <label for="email">{{ $t('registerForm.email') }}</label>
      <input v-model="email" name="email" type="email" />
      <p class="error">{{ errors.email | first }}</p>
      <button>
        <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
        {{ $t('loginForm.send') }}
      </button>
    </form>
  </AuthPage>
</template>

<script>
import validate from 'validate.js'
import AuthPage from '~/components/AuthPage'

const constraints = {
  email: {
    presence: { message: '^E-mail não pode ser vazio' },
    email: { message: '^Formato de e-mail inválido' },
  },
}

export default {
  components: {
    AuthPage,
  },
  data() {
    return {
      email: '',
      errors: {},
      loading: false,
    }
  },
  methods: {
    validateForm() {
      const formData = {
        email: this.email,
      }

      const errors = validate(formData, constraints)

      if (errors) {
        this.errors = errors
      } else {
        this.postForgotPassword(formData)
      }
    },
    postForgotPassword(data) {
      try {
        this.loading = true
      } catch (e) {
        if (e.response && e.response.data) {
          this.errors = [e.response.data.message]
        } else {
          this.errors = ['Ocorreu um erro inesperado']
        }
      }
      this.loading = false
    },
  },
}
</script>

<style lang="sass" scoped>
form
  margin: 0
  height: 100%
  overflow: auto
  justify-content: center
  input
    min-height: 38px
</style>
