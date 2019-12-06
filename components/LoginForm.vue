<template>
  <div class="login-page">
    <recover-password-form v-if="recover" @login-form="recoverPassword" />
    <form @submit.prevent="checkForm" class="form-small" novalidate v-else>
      <h3>Login</h3>
      <label for="email">E-mail</label>
      <input v-model="email" name="email" type="email" />
      <p class="error">{{ errors.email | first }}</p>
      <label for="password">Senha</label>
      <input v-model="password" name="password" type="password" />
      <p class="error">{{ errors.password | first }}</p>
      <div class="form-actions">
        <span @click="recoverPassword">Esqueci minha senha</span>
        <button>
          <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
          Entrar
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
import validate from 'validate.js'
import RecoverPasswordForm from './RecoverPasswordForm'

const constraints = {
  email: {
    presence: { message: '^E-mail não pode ser vazio' },
    email: true,
  },
  password: {
    presence: { message: '^Password não pode ser vazio' },
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
}

export default {
  middleware: 'notAuthenticated',
  components: { RecoverPasswordForm },
  data() {
    return {
      recover: false,
      errors: {},
      loading: false,
    }
  },
  methods: {
    checkForm() {
      const errors = validate(
        {
          email: this.email,
          password: this.password,
        },
        constraints,
      )

      if (errors) {
        this.errors = errors
      } else {
        this.postLogin()
      }
    },
    recoverPassword() {
      this.recover = !this.recover
    },
    postLogin() {
      this.loading = true
      setTimeout(() => {
        // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax',
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/admin/my-jobs')
        this.loading = false
      }, 1000)
    },
  },
}
</script>
