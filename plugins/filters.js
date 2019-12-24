import Vue from 'vue'

import timeAgo from './filters/timeAgo'
import dateFormat from './filters/dateFormat'

Vue.filter('capitalize', (val) => val.toUpperCase())
Vue.filter('first', (val) => val && val[0])
Vue.filter('k', (val) => {
  if (typeof val === 'number' && val >= 1000) {
    return `${parseFloat((val / 1000).toFixed(2))}k`
  }

  return val
})

Vue.filter('day', dateFormat.day)
Vue.filter('month', dateFormat.month)
Vue.filter('year', dateFormat.year)
Vue.filter('timeAgo', timeAgo)
