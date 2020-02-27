import showdown from 'showdown'

const markdown2html = (markdown) => {
  const converter = new showdown.Converter()
  return converter.makeHtml(markdown)
}

export default markdown2html
