import React from 'react'
import { hot } from 'react-hot-loader'
import Checkbox from './Components/Checkbox/Checkbox.js'
import 'normalize.css'
import './App.css'
import data from './data/index.js'

const App = () => {
  const { categories, subcategories, items } = data
  return (
    <div className="App">
      <header className="main-header">
        <h1 className="main-header__title">Checklist</h1>
      </header>

      <section className="container">
        {categories.map(category => (
          <div key={`category-${category.id}`}>
            <h2>{category.name}</h2>

            {category.subcategories.map(id => {
              const subcategory = subcategories.find(s => s.id === id)

              return (
                <div key={`subcategory-${subcategory.id}`}>
                  <h4>{subcategory.name}</h4>
                  {subcategory.items.map(id => {
                    const item = items.find(i => i.id === id)

                    return <Checkbox key={`item-${item.id}`} text={item.name} />
                  })}
                </div>
              )
            })}
          </div>
        ))}
      </section>
    </div>
  )
}

export default hot(module)(App)
