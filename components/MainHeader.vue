<template>
  <header class="main-header">
    <div class="header-inner">
      <div class="header-navbar">
        <h3 class="logo">
          <router-link to="/home" tag="a">
            <img src="~/assets/svg/logo.svg" alt="KDTI logo" />
          </router-link>
        </h3>
        <span @click="toggleMenu" class="button-collapse-menu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div :class="{ '--active': isMenuOpen }" class="nav-collapse">
        <nav class="nav-menu">
          <ul>
            <li>
              <router-link to="/home" tag="a">
                {{ $t('mainHeader.intro') }}
              </router-link>
            </li>
            <li>
              <router-link to="/jobs" tag="a">
                {{ $t('mainHeader.findJobs') }}
              </router-link>
            </li>
            <li>
              <router-link to="/companies" tag="a">
                {{ $t('mainHeader.findCompanies') }}
              </router-link>
            </li>
            <li>
              <router-link to="/events" tag="a">
                {{ $t('mainHeader.events') }}
              </router-link>
            </li>
            <li>
              <span @click="changeLanguage('ptbr')">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAADyklEQVQ4T6WUf0yUdRzHX8/zHNwdd8ePA8QwBG8n3IkS4Fq0tmT+pbRWulaba22szUoXLW0zJqQ4m6ZhS1fU+uHayq2tyfpDcf0jLlv5BxARHggDDzRQ5IDjuIN77nme9jwPlwmytfXZvvs+ez7fvb6f72fvz1sAhCWL/xkaYCwdLNa2HtzjcqQdT6gJh6IqRkZP6JH81veHhX4uecYiSkiiZS4SjR34+vmjLXpOeq3t0HSuK9vptLsQBAFN04z936GqKkpCQbJIiKK44uNmo2EmZicjn29vytQJlpd+eEv2POIxK10E6/viDxIJhSfsgzzjneLCYBbXYl4sFgmWFJC8cXh8mO9f+DjFgNd8+6pcXFCyrBpV1dDked5Y20dJThxtbg7B4aD/XiotIz6EFBui+OALdciN0X4uvvyVCa8+u0v2FfofgOstKBRDvFk6zpXfRI6eddN324pvzQINtSG2VKmc6V1NUHUbrUqGgEAgeJ322nMmvOqznbLfU2rk9d5qisrO3FFq1s1zqV1gx6HCZa9qbQqyrVrj4rCN8xMFCJKIIOpogetDf3Lt9VYTXn66Rvat34imatjUBRr946xLl1FnZzgfaMTnLWZ9YS5T4ShXO4Y58eVlpMQAv3zUj+jKYDicwpFAHguizbggMNBDd12bCS85WS1v8JejJlROl/3FGmsMLToHCZWNb28lOBYj3WHF78nj2a0b2P1iFce/+Immbc1gERHSHNxesFP3Rz6iRSTQ103fO5dNeNH7T8r+0nJQNZSbd9nrCVHjWQBB46n6cm7NrObOZOSf1jzmy6elcRsVUq0xEW1DVj4ZykYqWgV65b2/c/PgryY8/3ClXLKpwlReQiU+OkO1PcT+ihmuBnLYcbKM7Vt8XPq5n1MHnmPfBz9yoWGEx4sGaO7KoD3mJrUgA8Fi6r+vp4uxw50mPLu+VC6pqEzK2pCvMjlP3uQURypDBG9l0vCdl+Csgzwxyoe7Byh8dJr3Ot3cyc5CdNvuq0WA/q5OJo/1mvD0/V7Zu3nzMkVo8wrSaIQ9a++xyxM2LtVn69xQOi0jOSQKnGATDYVohgnoTRIY7Ogg3Dxowl37PHJBRdnDR1rTEMfiPC3OsLd4ik9vZHFFyUDLtxoTqkOXwke6upk9NWTAJXf9pmlrbrrTnpWxomdIEYXUuwniq1JQnPe9ZSl8firMwkQ4EjrWY3iLmP1u5SuyGj0Tm552qnLcNEthBR9M5gxDNSSw6KEaYmoK9sysiIW0utCJzm+SXp4KuPRXrFj6f08owCwQ/xsPhXxZEzgjLAAAAABJRU5ErkJggg=="
                  alt="us flag"
                />
              </span>
            </li>
            &nbsp; / &nbsp;
            <li>
              <span @click="changeLanguage('en')">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAARCAYAAAA2cze9AAACeUlEQVQ4T6WUW2gTQRSG/+k2DUJFKjFQtTYJXpB6QbHY2lzb2gcvCIL4mJdCntIIIuSCGNBcQBBjRAykIIW8iAiG0oeKbS4tCj4Ealrog0lsH6qx2oKlki7rykx2KZpoFzownGH3zH++M3POEADkr4ltDhEAm1S4wTbw6OZe7e6Q0NDIiaIIQgiopUNeBzT5+jGpAnUlAOE4/GpSbawKCHaGb9+lv7gr10bWPbesTdnpTzD1tCM7XYKpR8es8ZwOoftpjMQvK0pIEATkcrlcf39/JxVv7Ls4zFuMepiNOmSmSjU2PVXEs66VuuJyZtTSQTNeK5VwdPixiol3257yfl8f0tkCrGYDUpk/7Z17bzD28roicuqUTCY/2+32NiZ+8myU77UYYLMYMJkuoNdqwERKsukCW7+yfKuK07uglNKd1EQkBN/n5nB69HmV/NDxB3zAfx4TqY8sQCpThNWsx2SmCBrU53+Ndym7YvJEIvFlaGhoPxPfdzDMyzsJCESIoJaBQsSxXQKenJHIa1E3y0Xa8TWfR9f0eJU8FAotDQ4OahSjbeEYj8eXPR5PKxNPd3TyrSdOKdNWcOZLMzlYZt9Xyb1eb9nlcrUoU9/aKxKJrAaDwT1MfLztCN8mk0vdxrqOtWjNkW5+qxeHAIszOQwszlfJnU7nis/na96aSZlHIBBYi0ajLUx8TNvOHzjcoWynXONSR9bUPSFYmP+AC+UFRs653e6sw+HoVqvVygL8x6tSqSAWi70Nh8Mm9iq+sF260VwsBH8ul9WCQEtePuh/HKr8DEp1LftznAo7NNrKut7gvTo5+lB+y5sA7KRZbBsdEAD8ALDxGxpy9UoFOcYRAAAAAElFTkSuQmCC"
                  alt="br flag"
                />
              </span>
            </li>
          </ul>
        </nav>
        <div class="nav-actions">
          <ul>
            <li>
              <router-link to="/login" tag="a" class="button">
                {{ $t('mainHeader.registerJobs') }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  watch: {
    $route() {
      this.isMenuOpen = false
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    changeLanguage(language) {
      this.$root.$i18n.locale = language
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'
@import '~/assets/sass/mixins'

.main-header
  background-color: white
  border-bottom: 1px solid rgba(0, 0, 0, .1)
  position: fixed
  top: 0
  left: 0
  font-weight: 400
  width: 100%
  z-index: 1000

  .header-inner
    @media(min-width: $content-width)
      display: flex
      height: $header-height
      padding: 0 2.5%

  .header-navbar
    background-color: white
    border-bottom: 1px solid rgba(0, 0, 0, .1)
    display: flex
    align-items: center
    justify-content: space-between
    height: $header-height
    padding: 0 5%
    position: relative
    z-index: 10
    @media(min-width: $content-width)
      border: none
      height: auto
      padding: 0

    .logo
      font-weight: bold
      margin: 0
      @media(min-width: $content-width)
        font-size: 3.75rem
      a
        color: #606c76
        img
          width: 120px

    .button-collapse-menu
      cursor: pointer
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 27px
      width: 33px
      @media(min-width: $content-width)
        display: none
      span
        background-color: $color-primary
        display: block
        height: 4px
        margin: 2px 0
      &:hover, &:focus
        span
          background-color: black

  .nav-collapse
    background-color: white
    display: none
    flex-direction: column
    justify-content: center
    height: 100%
    padding: 0 5%
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    width: 100%
    @media(min-width: $content-width)
      background-color: transparent
      display: flex
      align-items: center
      flex-direction: row
      justify-content: flex-end
      padding: 0
      position: relative
    &.--active
      display: flex
      .nav-menu, .nav-actions
        +fadeInDown

  ul
    list-style: none
    margin: 0
    padding: 0
    text-align: center
    @media(min-width: $content-width)
      display: flex
    li
      @media(min-width: $content-width)
        margin-bottom: 0

  .nav-menu
    @media(min-width: 1280px)
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-65%, -50%)
    li
      .nuxt-link-active
        color: $color-primary
    a
      color: #606c76
      font-size: 3.5rem
      @media(min-width: $content-width)
        font-size: 2rem
      &:hover
        color: $color-primary
      @media(min-width: $content-width)
        font-size: 1.8rem
        padding: 1.5rem

  .nav-actions
    margin-top: 3rem
    position: absolute
    bottom: 0
    left: 0
    width: 90%
    left: 5%
    @media(min-width: $content-width)
      width: auto
      position: relative
      left: auto
      margin-left: 2rem
      margin-top: 0
    li
      @media(min-width: $content-width)
        margin-left: 1rem
    .button
      width: 100%
      @media(min-width: $content-width)
        font-size: 1.4rem
        margin-bottom: 0
        min-width: 145px
        padding: 0 2rem
</style>
