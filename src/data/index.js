import { addIds } from './utils'
import categories from './categories'
import subcategories from './subcategories'
import items from './items'

const data = {
  categories: addIds(categories),
  subcategories: addIds(subcategories),
  items: addIds(items),
}

export default data
