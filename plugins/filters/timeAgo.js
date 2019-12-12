const timeAgo = (date) => {
  const suffix = 'atrás'
  const totalSeconds = Math.floor((new Date() - new Date(date)) / 1000)
  const units = [
    { unit: ['ano', 'anos'], seconds: 31536000 },
    { unit: ['mês', 'meses'], seconds: 2592000 },
    { unit: ['semana', 'semanas'], seconds: 604800 },
    { unit: ['dia', 'dias'], seconds: 86400 },
    { unit: ['hora', 'horas'], seconds: 3600 },
    { unit: ['minuto', 'minutos'], seconds: 60 },
  ]
  for (let i = 0; i < units.length; i += 1) {
    const { unit, seconds } = units[i]
    const amount = Math.floor(totalSeconds / seconds)
    if (amount >= 1) {
      return `${amount} ${unit[amount > 1 ? 1 : 0]} ${suffix}`
    }
  }
  return `Poucos segundos ${suffix}`
}

export default timeAgo
