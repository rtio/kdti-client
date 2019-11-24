<template>
  <div class="content">
    <h2>Vagas cadastradas</h2>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Contratação</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs">
            <td>Desenvolvedor Javascript</td>
            <td>CLT</td>
            <td>Ativo {{ job }}</td>
            <td>12/10/2019 00:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      jobs: Array.from({ length: 6 }),
    }
  },
}
</script>

<style lang="sass" scoped>
.table-wrapper
  overflow: scroll
</style>
