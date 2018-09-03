import categories from './categories'
import subcategories from './subcategories'

export const addIds = data =>
  data.map((item, index) => Object.assign({}, item, { id: index + 1 }))

const data = {
  categories: addIds(categories),
  subcategories: addIds(subcategories),
}

export default data
