<template>
  <div class="recover-password-form">
    <form @submit.prevent="checkForm" class="form-small" novalidate>
      <h3>Recuperar Senha</h3>
      <label for="email">E-mail</label>
      <input v-model="email" name="email" type="email" />
      <p class="error">{{ errors.email | first }}</p>
      <div class="form-actions">
        <span @click="$emit('login-form')">Voltar para Login</span>
        <button>
          <!-- <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" /> -->
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import validate from 'validate.js'

const constraints = {
  email: {
    presence: { message: '^E-mail não pode ser vazio' },
    email: true,
  },
}

export default {
  name: 'RecoverPasswordForm',
  data() {
    return {
      email: '',
      errors: {},
    }
  },
  methods: {
    checkForm() {
      const errors = validate(
        {
          email: this.email,
        },
        constraints,
      )

      if (errors) {
        this.errors = errors
      } else {
        this.recoverPassword()
      }
    },
    recoverPassword() {},
  },
}
</script>
