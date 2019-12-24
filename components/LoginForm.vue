<template>
  <form @submit.prevent="checkForm" class="form-small" novalidate>
    <h3>Login</h3>
    <p class="error">{{ errors | first }}</p>
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
import validate from 'validate.js'

const constraints = {
  username: {
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
      const formData = {
        username: this.email,
        password: this.password,
      }

      const errors = validate(formData, constraints)

      if (errors) {
        this.errors = errors
      } else {
        this.postLogin(formData)
      }
    },
    async postLogin(credentials) {
      try {
        this.loading = true
        const response = await this.$accountRepository.auth(credentials)

        this.$store.commit('setAuth', response.token) // mutating to store for client rendering
        this.$router.push('/admin/my-jobs')
        this.loading = false
      } catch (e) {
        console.error(e)
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
