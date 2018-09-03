import { hot } from 'react-hot-loader'
import SimpleReactRouter from 'simple-react-router'
import 'normalize.css'
import './App.css'

import HomePage from './Pages/HomePage'
import SubcategoryShowPage from './Pages/SubcategoryShowPage'
class Router extends SimpleReactRouter {
  routes(map) {
    map('/', HomePage)
    map('/subcategories/:subcategoryId', SubcategoryShowPage)
  }
}

export default hot(module)(Router)
