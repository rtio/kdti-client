import Vue from 'vue'

Vue.filter('capitalize', (val) => val.toUpperCase())
Vue.filter('first', (val) => val && val[0])
