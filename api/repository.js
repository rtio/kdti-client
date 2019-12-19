export default ($axios) => (resource) => ({
  index() {
    return $axios.$get(`${resource}`)
  },

  show(id) {
    return $axios.$get(`${resource}/${id}`)
  },

  showBySlug(slug) {
    return $axios.$get(`${resource}/slug/${slug}`)
  },

  create(payload) {
    return $axios.$post(`${resource}`, payload)
  },

  update(id, payload) {
    return $axios.$post(`${resource}/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`${resource}/${id}`)
  },
})
