<template>
  <div class="content">
    <h2>Editar informações</h2>
    <form @submit.prevent="check" novalidate>
      <!-- Company name -->
      <label for="name">Nome da empresa</label>
      <input v-model="name" name="name" type="text" />
      <p class="error">{{ errors.nameError | first }}</p>
      <!-- Company email -->
      <label for="email">Email de cadastro</label>
      <input v-model="email" name="email" type="email" />
      <p class="error">{{ errors.emailError | first }}</p>
      <!-- Company phone -->
      <label for="phone">Telefone</label>
      <input v-model="phone" name="phone" type="number" />
      <!-- Address fieldset -->
      <fieldset>
        <label for="address">Endereço</label>
        <!-- Company CEP -->
        <label for="cep">CEP</label>
        <input v-model="cep" name="cep" type="text" />
        <p class="error">{{ errors.cepError | first }}</p>
        <!-- Company state -->
        <label for="state">Estado</label>
        <select>
          <option value=""></option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="EX">Estrangeiro</option>
        </select>
        <p class="error">{{ errors.stateError | first }}</p>
        <!-- Company city -->
        <label for="city">Cidade</label>
        <input v-model="city" name="city" type="text" />
        <p class="error">{{ errors.cityError | first }}</p>
        <!-- Company neighborhood -->
        <label for="neighborhood">Bairro</label>
        <input v-model="neighborhood" name="neighborhood" type="text" />
        <p class="error">{{ errors.stateError | first }}</p>
        <div>
          <!-- Company street -->
          <div>
            <label for="street">Rua</label>
            <input v-model="street" name="street" type="text" />
            <p class="error">{{ errors.streetError | first }}</p>
          </div>
          <!-- Company number -->
          <div>
            <label class="number-input" for="number">Numero</label>
            <input v-model.number="number" name="number" type="number" />
            <p class="error">{{ errors.numberError | first }}</p>
          </div>
        </div>
      </fieldset>
      <button>
        <img v-if="loading" class="loader" src="/assets/svg/loader.svg" />
        Salvar
      </button>
    </form>
  </div>
</template>

<script>
import validate from 'validate.js'
export default {
  layout: 'admin',
  data() {
    return {
      // TODO: fetch data with company data
      errors: {},
      name: '',
      email: '',
      phone: '',
      cep: '',
      state: '',
      city: '',
      neighborhood: '',
      street: '',
      number: '',
    }
  },
  methods: {
    check() {
      const constraints = {
        nameError: {
          presence: { message: '^Nome da empresa não pode ser vazio' },
        },
        emailError: {
          presence: { message: '^E-mail não pode ser vazio' },
        },
        cepError: {
          presence: { message: '^CEP não pode ser vazio' },
        },
        stateError: {
          presence: { message: '^Estado não pode ser vazio' },
        },
        cityError: {
          presence: { message: '^Cidade não pode ser vazio' },
        },
        neighborhoodError: {
          presence: { message: '^Bairro não pode ser vazio' },
        },
        streetError: {
          presence: { message: '^Rua não pode ser vazio' },
        },
        numberError: {
          presence: { message: '^Número não pode ser vazio' },
        },
      }

      const errors = validate(
        {
          name: this.nameError,
          email: this.emailError,
          phone: this.phoneError,
          cep: this.cepError,
          state: this.stateError,
          city: this.cityError,
          neighborhood: this.neighborhoodError,
          street: this.streetError,
          number: this.numberError,
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
    },
    validateForm() {},
  },
}
</script>

<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

button {
  margin: auto;
}
</style>
