<template>
  <form v-if="!isNewUser" class="form-small" action="POST">
    <h3>Login</h3>
    <label for="email">E-mail</label>
    <input name="email" type="email" />
    <label for="password">Senha</label>
    <input name="password" type="password" />
    <div class="form-actions">
      <router-link to="">
        Esqueci minha senha
      </router-link>
      <button @click.prevent="postLogin">Entrar</button>
    </div>
  </form>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  middleware: 'notAuthenticated',
  methods: {
    postLogin() {
      setTimeout(() => {
        // we simulate the async request with timeout.
        const auth = {
          accessToken: 'someStringGotFromApiServiceWithAjax',
        }
        this.$store.commit('setAuth', auth) // mutating to store for client rendering
        Cookie.set('auth', auth) // saving token in cookie for server rendering
        this.$router.push('/')
      }, 1000)
    },
  },
}
</script>
