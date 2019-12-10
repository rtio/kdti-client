<template>
  <form @submit.prevent="check" class="form-small" novalidate>
    <h3>Criar conta</h3>
    <label for="name">Nome da empresa</label>
    <input v-model="name" name="name" type="text" />
    <p class="error">{{ errors.name | first }}</p>
    <label for="email">E-mail</label>
    <input v-model="email" name="email" type="email" />
    <p class="error">{{ errors.email | first }}</p>
    <label for="password">Senha</label>
    <input v-model="password" name="password" type="password" />
    <p class="error">{{ errors.password | first }}</p>
    <label for="confirmPassword">Confirmar senha</label>
    <input v-model="confirmPassword" name="confirmPassword" type="password" />
    <p class="error">{{ errors.confirmPassword | first }}</p>
    <button>
      <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
      Cadastrar
    </button>
  </form>
</template>

<script>
import validate from 'validate.js'

export default {
  data() {
    return {
      errors: {},
    }
  },
  methods: {
    check() {
      const constraints = {
        name: {
          presence: { message: '^Nome da empresa não pode ser vazio' },
        },
        email: {
          presence: { message: '^E-mail não pode ser vazio' },
          email: true,
        },
        password: {
          presence: { message: '^Senha não pode ser vazio' },
          length: {
            minimum: 6,
            message: '^Senha deve ter no mínimo 6 caracteres',
          },
        },
        confirmPassword: {
          presence: { message: '^Confirmar senha não pode ser vazio' },
          equality: {
            attribute: 'password',
            message: '^Valor é divergente da senha',
          },
        },
      }

      const errors = validate(
        {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
        },
        constraints,
      )

      if (errors) {
        this.errors = errors
      } else {
        this.submit()
      }
    },
    submit() {
      // TODO: Send to the api
      console.log({
        name: this.name,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      })
    },
    validateForm() {},
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
