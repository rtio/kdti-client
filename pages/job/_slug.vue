<template>
  <div class="content">
    <div class="description">
      <h1>Desenvolvedor que desenvolve coisas desenvolvidas</h1>
      <ul class="tag-list">
        <li class="tag">70k - 120k</li>
        <li class="tag">Júnior</li>
        <li class="tag">Doutor do ABC</li>
      </ul>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias maiores
        quaerat ex error perspiciatis cumque eum voluptatibus doloribus, unde
        perferendis quidem. Quis voluptate, magni distinctio et ut vero! Ullam,
        cumque!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias maiores
        quaerat ex error perspiciatis cumque eum voluptatibus doloribus, unde
        perferendis quidem. Quis voluptate, magni distinctio et ut vero! Ullam,
        cumque!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias maiores
        quaerat ex error perspiciatis cumque eum voluptatibus doloribus, unde
        perferendis quidem. Quis voluptate, magni distinctio et ut vero! Ullam,
        cumque!
      </p>
      <p>
        <strong>Benefícios</strong>
      </p>
      <ul>
        <li>Pode trabalhar enquanto trabalha</li>
        <li>Tem salário no final do mês</li>
        <li>Só trabalha se quiser mas é fortemente aconselhável</li>
      </ul>
      <p>
        <strong>Como aplicar</strong> <br />
        Envie seu currículo ou linkedin via scrap no <strong>Orkut</strong>
      </p>
    </div>
    <div class="company">
      <div class="company-content">
        <figure class="logo">
          <img
            src="~/static/temp/company-logo-example.jpg"
            alt="Oowlish Logo"
          />
        </figure>
        <h3 class="title">Oowlish</h3>
        <p class="location">Fortaleza/CE</p>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea a officia
          doloribus nesciunt aliquam adipisicing elit. Ea a officia doloribus
          nesciunt aliquam
        </p>
        <address class="address">
          <a href="https://maps.google.com" target="_blank">
            Rua de baixo que cruza a rua perpendicular, 123
          </a>
        </address>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.content
  display: flex
  padding-top: 80px
  > .description
    width: 65%
    padding-right: 20px
    .tag-list
      display: flex
      flex-wrap: wrap
      list-style: none
      .tag
        // TODO: Define color tag color system
        background-color: #DCDCF6
        border-radius: 5px
        margin-right: 5px
        padding: 0 5px
        font-size: 1.2rem
        font-weight: 600
        &:first-child
          background-color: #EEF5C0
  > .company
    width: 35%
    margin-top: 50px
    .company-content
      display: flex
      flex-direction: column
      align-items: center
      padding: 20px
      background-color: #FFF
      border-radius: 10px
      box-shadow: 1px 1px 1px 0px
    .logo
      width: 100px
      height: 100px
      overflow: hidden
      border-radius: 50%
      margin-top: -80px
      margin-bottom: 5px
      border: 10px solid #FFF
      box-sizing: content-box
      box-shadow: 1px 1px 1px 0px
    .title,
    .location
      margin: 0
    .location
      line-height: 1
      margin-bottom: 10px
      font-size: 1rem
      font-weight: 400
    .description
    .address
      width: 100%
      font-weight: 400
      line-height: 1
</style>
