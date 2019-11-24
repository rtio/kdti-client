<template>
  <div class="content">
    <h2>Cadastrar vaga</h2>
    <form>
      <label for="email">Título</label>
      <input name="email" type="email" />
      <label for="password">Tipo</label>
      <select>
        <option>PJ</option>
        <option>CLT</option>
        <option>Estágio</option>
      </select>
      <fieldset>
        <label for="password">Faixa salarial</label>
        <label for="password">Máximo</label>
        <select>
          <option>Não informar</option>
        </select>
        <label for="password">Mínimo</label>
        <select>
          <option>Não informar</option>
        </select>
      </fieldset>
      <button @click.prevent="postLogin">Salvar</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
}
</script>
