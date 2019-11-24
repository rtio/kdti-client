<template>
  <form
    v-if="!isNewUser"
    @submit.prevent="checkForm"
    class="form-small"
    novalidate
  >
    <h3>Login</h3>
    <label for="email">E-mail</label>
    <input v-model="email" name="email" type="email" />
    <p class="error">{{ errors.email | first }}</p>
    <label for="password">Senha</label>
    <input v-model="password" name="password" type="password" />
    <p class="error">{{ errors.password | first }}</p>
    <div class="form-actions">
      <router-link to="">
        Esqueci minha senha
      </router-link>
      <button>Entrar</button>
    </div>
  </form>
</template>

<script>
import Cookie from 'js-cookie'
import validate from 'validate.js'

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
  data() {
    return {
      errors: {},
    }
  },
  methods: {
    checkForm() {
      console.log(this.email, this.password)

      this.errors = validate(
        {
          email: this.email,
          password: this.password,
        },
        constraints,
      )
    },
    postLogin() {
      setTimeout(() => {
        // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax',
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/admin/my-jobs')
      }, 1000)
    },
  },
}
</script>
