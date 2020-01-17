<template>
  <div class="content">
    <h2>Cadastrar vaga</h2>
    <form @submit.prevent="checkForm" novalidate>
      <label for="title">{{ $t('newJob.title') }}</label>

      <input v-model="title" name="title" type="text" />
      <p class="error">{{ errors.title | first }}</p>

      <label for="description">{{ $t('newJob.description') }}</label>
      <Editor v-model="description" />
      <p class="error">{{ errors.description | first }}</p>

      <label for="type">{{ $t('newJob.hireType') }}</label>
      <select>
        <option value="clt">{{ $t('newJob.clt') }}</option>
        <option value="pj">{{ $t('newJob.pj') }}</option>
        <option value="intership">{{ $t('newJob.internship') }}</option>
      </select>
      <p class="error">{{ errors.type | first }}</p>

      <label for="seniorityLevel">{{ $t('newJob.level') }}</label>
      <select v-model="seniorityLevel">
        <option value="JR">{{ $t('newJob.jr') }}</option>
        <option value="PL">{{ $t('newJob.pl') }}</option>
        <option value="SR">{{ $t('newJob.sr') }}</option>
      </select>
      <p class="error">{{ errors.seniorityLevel | first }}</p>

      <fieldset>
        <label for="password">{{ $t('newJob.range') }}</label>
        <label for="maximumSalary">{{ $t('newJob.max') }}</label>
        <select v-model="maximumSalary">
          <option value="999">até R$ 1.000,00</option>
          <option value="1000">1.000,00</option>
          <option value="2000">2.000,00</option>
          <option value="3000">3.000,00</option>
          <option value="4000">4.000,00</option>
          <option value="5000">5.000,00</option>
        </select>
        <p class="error">{{ errors.maximumSalary | first }}</p>
        <label for="minimumSalary">{{ $t('newJob.min') }}</label>
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
        <label for="allowRemote">{{ $t('newJob.remote') }}</label>
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
