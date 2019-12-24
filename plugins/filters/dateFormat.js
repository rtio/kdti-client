const dateFormat = (date) => {
  const dateObj = new Date(date)
  const month = dateObj.getUTCMonth()
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()

  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ]

  return {
    day,
    month: months[month],
    year,
  }
}

export default {
  day: (date) => dateFormat(date).day,
  month: (date) => dateFormat(date).month,
  year: (date) => dateFormat(date).year,
}
