<template>
  <form @submit.prevent="submit" class="form-small" novalidate>
    <h3>{{ $t('registerForm.createAccount') }}</h3>
    <label for="name">{{ $t('registerForm.companyName') }}</label>
    <input v-model="name" name="name" type="text" />
    <p class="error">{{ errors.name | first }}</p>
    <label for="email">{{ $t('registerForm.email') }}</label>
    <input v-model="email" name="email" type="email" />
    <p class="error">{{ errors.email | first }}</p>
    <label for="password">{{ $t('registerForm.password') }}</label>
    <input v-model="password" name="password" type="password" />
    <p class="error">{{ errors.password | first }}</p>
    <label for="confirmPassword">{{
      $t('registerForm.confirmPassword')
    }}</label>
    <input v-model="confirmPassword" name="confirmPassword" type="password" />
    <p class="error">{{ errors.confirmPassword | first }}</p>
    <button>
      <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
      {{ $t('registerForm.register') }}
    </button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const rules = {
  name: {
    presence: { message: '^Nome da empresa não pode ser vazio' },
  },
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
  confirmPassword: {
    presence: { message: '^Confirmar senha não pode ser vazio' },
    equality: {
      attribute: 'password',
      message: '^Valor é divergente da senha',
    },
  },
}

export default {
  computed: {
    ...mapGetters('register', {
      loading: 'loading',
      apiErrors: 'errors',
      hasErrors: 'hasErrors',
    }),
    errors() {
      return this.parseApiError(this.apiErrors)
    },
  },
  methods: {
    ...mapActions('register', {
      save: 'save',
    }),
    async submit() {
      await this.save(
        {
          name: this.name,
          email: this.email,
          password: {
            first: this.password,
            second: this.confirmPassword,
          },
        },
        rules,
      )

      if (!this.hasErrors) {
        // TODO: Login the user automatically
        this.$router.push({ name: 'login' })
      }
    },
    parseApiError(errors) {
      return {
        ...errors,
        password: errors && errors.password && errors.password.first,
        confirmPassword: errors && errors.password && errors.password.second,
      }
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
