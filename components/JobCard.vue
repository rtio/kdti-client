<template>
  <div class="job-card">
    <header>
      <div class="company-wrapper">
        <figure class="logo">
          <img
            src="~/static/temp/company-logo-example.jpg"
            alt="Oowlish Logo"
          />
        </figure>
        <h4 class="name">Oowlish Technology</h4>
      </div>
      <div class="time">2 dias atrás</div>
    </header>
    <h3 class="job-title">Frontend Dev</h3>
    <ul class="tag-list">
      <li class="tag">Salário: 80k</li>
      <li class="tag">Sênior</li>
      <li class="tag">React</li>
      <li class="tag">...</li>
    </ul>
    <router-link to="/job/front-end-dev" class="link-see-more">
      Detalhes da vaga
    </router-link>
  </div>
</template>

<style lang="sass">
.job-card
  box-shadow: 1px 1px 3px 0px
  padding: 20px
  border-radius: 10px
  background-color: #FFF
  font-weight: 400
  header
    display: flex
    justify-content: space-between
    align-items: center
    padding-bottom: 10px
  .company-wrapper
    display: flex
    justify-content: space-between
    align-items: center
    .logo
      width: 40px
      min-width: 40px
      height: 40px
      min-height: 40px
      overflow: hidden
      border-radius: 50%
      margin: 0
    .name
      font-size: 2rem
      font-weight: 400
      margin: 0 0 0 8px
  .time
    font-size: 1.2rem
    opacity: .6

  .job-title
    margin-bottom: 5px
    font-weight: 400
  .tag-list
    display: flex
    flex-wrap: wrap
    list-style: none
    margin: 0
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
  .link-see-more
    display: block
    text-align: right
</style>
