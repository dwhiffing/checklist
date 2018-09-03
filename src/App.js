import { hot } from 'react-hot-loader'
import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import 'normalize.css'
import './App.css'
import { setStore } from './store'

setStore(localStorage.getItem('save'))

import HomePage from './Pages/HomePage'
import SubcategoryShowPage from './Pages/SubcategoryShowPage'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <button
            style={{ float: 'right' }}
            onClick={() => {
              localStorage.removeItem('save')
              location.reload()
            }}
          >
            Delete save
          </button>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={HomePage} />
      <Route
        path="/subcategories/:subcategoryId"
        component={SubcategoryShowPage}
      />
    </div>
  </Router>
)

export default hot(module)(App)
