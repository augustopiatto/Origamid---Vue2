const filters = {
  real(value) {
    const formattingOptions = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }
    const realString = new Intl.NumberFormat('pt-BR', formattingOptions)
    return realString.format(value)
  }
}

export default filters
