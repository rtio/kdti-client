<template>
  <AuthPage
    :ctaConfig="{
      message: 'Já tenho uma conta',
      path: 'login',
    }"
    description="
      Cadastre sua empresa gratuitamente e comece a divulgar vagas. Caso já tenha uma conta clique na opção abaixo:
    "
    title="Cadastre vagas!"
  >
    <RegisterForm />
  </AuthPage>
</template>

<script>
import AuthPage from '~/components/AuthPage'
import RegisterForm from '~/components/RegisterForm'

export default {
  components: {
    AuthPage,
    RegisterForm,
  },
}
</script>
