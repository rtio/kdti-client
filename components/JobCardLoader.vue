<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  components: {
    ContentLoader,
  },
}
</script>
<template>
  <content-loader
    :height="160"
    :width="400"
    :speed="2"
    primaryColor="#dcdcdc"
    secondaryColor="#c0c0c0"
  >
    <rect x="80" y="26" rx="4" ry="4" width="179.1" height="17.86" />
    <rect x="27" y="69" rx="3" ry="3" width="261.87" height="19.71" />
    <circle cx="44.1" cy="36.1" r="26.1" />
    <rect x="68.63" y="99.61" rx="0" ry="0" width="54" height="20.16" />
    <rect x="189.63" y="128.61" rx="0" ry="0" width="0" height="0" />
    <rect x="128.63" y="100.61" rx="0" ry="0" width="24" height="19.16" />
    <rect x="28.53" y="99.61" rx="0" ry="0" width="31.39" height="20.01" />
    <rect x="44.63" y="118.61" rx="0" ry="0" width="6.09" height="0" />
    <rect x="319.63" y="24.61" rx="0" ry="0" width="70" height="8.96" />
    <rect x="307.63" y="88.61" rx="0" ry="0" width="1" height="0" />
    <rect x="293.63" y="82.61" rx="0" ry="0" width="0" height="0" />
    <rect x="271.63" y="120.61" rx="0" ry="0" width="116.57" height="18" />
  </content-loader>
</template>
