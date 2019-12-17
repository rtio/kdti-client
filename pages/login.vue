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
    <LoginForm />
  </AuthPage>
</template>

<script>
import AuthPage from '~/components/AuthPage'
import LoginForm from '~/components/LoginForm'

export default {
  components: {
    AuthPage,
    LoginForm,
  },
}
</script>
