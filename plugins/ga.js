export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return
  /* Google Analytics Script */
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /* eslint-enable */

  window.ga('create', 'UA-XXXXXXXX-X', 'auto')

  app.router.afterEach((to) => {
    window.ga('set', 'page', to.fullPath)
    window.ga('send', 'pageview')
  })
}
