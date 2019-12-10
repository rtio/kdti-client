<template>
  <form @submit.prevent="checkForm" class="form-small" novalidate>
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
      <button>
        <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
        Entrar
      </button>
    </div>
  </form>
</template>

<script>
import Cookie from 'js-cookie'
import validate from 'validate.js'

const constraints = {
  email: {
    presence: { message: '^E-mail não pode ser vazio' },
    email: { message: '^Formato de e-mail inválido' },
  },
  password: {
    presence: { message: '^Senha não pode ser vazio' },
    length: {
      minimum: 6,
      message: '^Senha deve ter no mínimo 6 caracteres',
    },
  },
}

export default {
  middleware: 'notAuthenticated',
  data() {
    return {
      email: '',
      password: '',
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
