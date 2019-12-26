<template>
  <div class="content">
    <h2>Cadastrar vaga</h2>
    <form @submit.prevent="checkForm" novalidate>
      <label for="title">Título</label>
      <input v-model="title" name="title" type="text" />
      <p class="error">{{ errors.title | first }}</p>

      <label for="description">Descrição</label>
      <Editor v-model="description" />
      <p class="error">{{ errors.description | first }}</p>

      <label for="type">Tipo</label>
      <select>
        <option value="clt">CLT</option>
        <option value="pj">PJ</option>
        <option value="intership">Estágio</option>
      </select>
      <p class="error">{{ errors.type | first }}</p>

      <label for="seniorityLevel">Nível de senioridade</label>
      <select v-model="seniorityLevel">
        <option value="JR">JÚNIOR</option>
        <option value="PL">PLENO</option>
        <option value="SR">SENIOR</option>
      </select>
      <p class="error">{{ errors.seniorityLevel | first }}</p>

      <fieldset>
        <label for="password">Faixa salarial</label>
        <label for="maximumSalary">Máximo</label>
        <select v-model="maximumSalary">
          <option value="999">até R$ 1.000,00</option>
          <option value="1000">1.000,00</option>
          <option value="2000">2.000,00</option>
          <option value="3000">3.000,00</option>
          <option value="4000">4.000,00</option>
          <option value="5000">5.000,00</option>
        </select>
        <p class="error">{{ errors.maximumSalary | first }}</p>
        <label for="minimumSalary">Mínimo</label>
        <select v-model="minimumSalary">
          <option value="999">até R$ 1.000,00</option>
          <option value="1000">1.000,00</option>
          <option value="2000">2.000,00</option>
          <option value="3000">3.000,00</option>
          <option value="4000">4.000,00</option>
          <option value="5000">5.000,00</option>
        </select>
        <p class="error">{{ errors.minimumSalary | first }}</p>
      </fieldset>

      <fieldset>
        <label for="allowRemote">Aceita remoto?</label>
        <input
          :value="true"
          v-model="allowRemote"
          type="radio"
          name="allowRemote"
        />
        Sim
        <input
          :value="false"
          v-model="allowRemote"
          type="radio"
          name="allowRemote"
        />
        Não
        <p class="error">{{ errors.allowRemote | first }}</p>
      </fieldset>

      <button>
        <img v-if="loading" class="loader" src="~/assets/svg/loader.svg" />
        Salvar
      </button>
      <p class="error">{{ errors | first }}</p>
    </form>
  </div>
</template>

<script>
import validate from 'validate.js'

import Editor from '~/components/Editor'

const constraints = {
  title: {
    presence: { message: '^Informe o título' },
  },
  description: {
    presence: { message: '^Informe a descrição da vaga' },
  },
  seniorityLevel: {
    presence: { message: '^Selecione o nível' },
  },
  minimumSalary: {
    presence: { message: '^Selecione o salário mínimo para essa vaga' },
  },
  maximumSalary: {
    presence: { message: '^Selecione o salário máximo para essa vaga' },
  },
}

export default {
  layout: 'admin',
  components: {
    Editor,
  },
  data() {
    return {
      title: null,
      description: null,
      seniorityLevel: null,
      minimumSalary: null,
      maximumSalary: null,
      allowRemote: false,
      errors: {},
      loading: false,
    }
  },
  methods: {
    checkForm() {
      const errors = validate(
        {
          title: this.title,
          seniorityLevel: this.seniorityLevel,
          minimumSalary: this.minimumSalary,
          maximumSalary: this.maximumSalary,
          description: this.description,
        },
        constraints,
      )

      if (errors) {
        this.errors = errors
        return
      }

      this.errors = {}
      this.submitForm()
    },
    formatData() {
      return {
        title: this.title,
        seniorityLevel: this.seniorityLevel,
        minimumSalary: +this.minimumSalary,
        maximumSalary: +this.maximumSalary,
        description: this.description,
        allowRemote: this.allowRemote,
      }
    },
    async submitForm() {
      const jobData = this.formatData()
      this.loading = true
      try {
        await this.$jobRepository.create(jobData)
      } catch (e) {
        console.error(e)
        if (e && e.response && e.response.data) {
          this.errors = e.response.data.errors
        } else {
          this.errors = ['Um error inesperado aconteceu, tente mais tarde']
        }
      }
      this.loading = false
    },
  },
}
</script>
