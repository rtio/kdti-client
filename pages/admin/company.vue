<template>
  <div class="content">
    <h2>Editar informações</h2>
    <form @submit.prevent="check" novalidate>
      <label for="name">Nome da empresa</label>
      <input v-model="name" name="name" type="text" />
      <p class="error">{{ errors.name | first }}</p>
      <label for="email">Email de cadastro</label>
      <input v-model="email" name="email" type="email" />
      <p class="error">{{ errors.email | first }}</p>
      <label for="phone">Telefone</label>
      <input v-model="phone" name="phone" type="number" />
      <fieldset>
        <label for="address">Endereço</label>
        <label for="cep">CEP</label>
        <input v-model="cep" name="cep" type="text" />
        <p class="error">{{ errors.cep | first }}</p>
        <label for="state">Estado</label>
        <tr>
          <select>
            <option value=""></option>
            <option
              v-for="stateElement in states"
              v-bind:key="stateElement.abbr"
              value="stateElement.abbr"
            >
              {{ stateElement.desc }}
            </option>
          </select>
          <p class="error">{{ errors.state | first }}</p>
          <label for="city">Cidade</label>
          <input v-model="city" name="city" type="text" />
          <p class="error">{{ errors.city | first }}</p>
          <label for="neighborhood">Bairro</label>
          <input v-model="neighborhood" name="neighborhood" type="text" />
          <p class="error">{{ errors.state | first }}</p>
          <div>
            <!-- Company street -->
            <div>
              <label for="street">Rua</label>
              <input v-model="street" name="street" type="text" />
              <p class="error">{{ errors.street | first }}</p>
            </div>
            <!-- Company number -->
            <div>
              <label class="number-input" for="number">Numero</label>
              <input v-model.number="number" name="number" type="number" />
              <p class="error">{{ errors.number | first }}</p>
            </div>
          </div>
        </tr>
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
import states from '~/data/states.json'
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
      states,
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
          email: { message: '^E-mail formato inválido' },
        },
        cep: {
          presence: { message: '^CEP não pode ser vazio' },
        },
        state: {
          presence: { message: '^Estado não pode ser vazio' },
        },
        city: {
          presence: { message: '^Cidade não pode ser vazio' },
        },
        neighborhood: {
          presence: { message: '^Bairro não pode ser vazio' },
        },
        street: {
          presence: { message: '^Rua não pode ser vazio' },
        },
        number: {
          presence: { message: '^Número não pode ser vazio' },
        },
      }

      const errors = validate(
        {
          name: this.name,
          email: this.email,
          phone: this.phone,
          cep: this.cep,
          state: this.state,
          city: this.city,
          neighborhood: this.neighborhood,
          street: this.street,
          number: this.number,
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
