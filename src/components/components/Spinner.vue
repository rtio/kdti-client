<template>
  <svg
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    display="block"
  >
    <circle
      class="circle"
      cx="50"
      cy="50"
      fill="none"
      stroke-width="10"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
      transform="rotate(233.527 50 50)"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 50,
    },
    height: {
      type: Number,
      default: 50,
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/sass/variables'

.circle
  stroke: $color-primary
</style>
