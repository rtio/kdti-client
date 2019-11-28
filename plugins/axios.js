import createRepository from '~/api/repository'
export default (ctx, inject) => {
  // And in the Vue instances (this.$repository in your components)
  const repositoryWithAxios = createRepository(ctx.$axios)
  inject('jobRepository', repositoryWithAxios('/job-offer'))
}
