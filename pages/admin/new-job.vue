<template>
  <div class="content">
    <h2>Cadastrar vaga</h2>
    <form @submit.prevent="checkForm" novalidate>
      <label for="title">Título</label>
      <input v-model="title" name="title" type="text" />
      <p class="error">{{ errors.title | first }}</p>

      <label for="description">Descrição</label>
      <textarea v-model="description" />
      <p class="error">{{ errors.description | first }}</p>

      <label for="type">Tipo</label>
      <select v-model="type">
        <option value="clt">CLT</option>
        <option value="pj">PJ</option>
        <option value="intership">Estágio</option>
      </select>
      <p class="error">{{ errors.type | first }}</p>
      <fieldset>
        <label for="password">Faixa salarial</label>
        <label for="maxBaseSalary">Máximo</label>
        <select v-model="maxBaseSalary">
          <option value="999">até R$ 1.000,00</option>
          <option value="1000">1.000,00</option>
          <option value="2000">2.000,00</option>
          <option value="3000">3.000,00</option>
          <option value="4000">4.000,00</option>
          <option value="5000">5.000,00</option>
          <option value="0">Não informar</option>
        </select>
        <p class="error">{{ errors.maxBaseSalary | first }}</p>
        <label for="minBaseSalary">Mínimo</label>
        <select v-model="minBaseSalary">
          <option value="999">até R$ 1.000,00</option>
          <option value="1000">1.000,00</option>
          <option value="2000">2.000,00</option>
          <option value="3000">3.000,00</option>
          <option value="4000">4.000,00</option>
          <option value="5000">5.000,00</option>
          <option value="0">Não informar</option>
        </select>
        <p class="error">{{ errors.minBaseSalary | first }}</p>
      </fieldset>
      <button>Salvar</button>
    </form>
  </div>
</template>

<script>
import validate from 'validate.js'

const constraints = {
  title: {
    presence: { message: '^title should not be blank' },
  },
  description: {
    presence: { message: '^description should not be blank' },
  },
  type: {
    presence: { message: '^please select the type' },
  },
  minBaseSalary: {
    presence: { message: '^minimum base salary is necessary' },
  },
  maxBaseSalary: {
    presence: { message: '^maximum base salary is necessary' },
  },
}

export default {
  layout: 'admin',
  data() {
    return {
      errors: {},
    }
  },
  methods: {
    checkForm() {
      console.log(this.title)
      const errors = validate(
        {
          title: this.title,
          type: this.type,
          minBaseSalary: this.minBaseSalary,
          maxBaseSalary: this.maxBaseSalary,
          description: this.description,
        },
        constraints,
      )

      if (errors) {
        this.errors = errors
      } else {
        this.submitForm()
      }
    },
    formatData() {
      return {
        title: this.title,
        type: this.type,
        minBaseSalary: this.minBaseSalary,
        maxBaseSalary: this.maxBaseSalary,
        description: this.description,
      }
    },
    submitForm() {
      // const petData = this.formatData()
    },
  },
}
</script>
