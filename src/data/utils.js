export const addIds = data =>
  data.map((item, index) => Object.assign({}, item, { id: index + 1 }))
