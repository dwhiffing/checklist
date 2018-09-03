import React from 'react'
import data from '../data/index.js'
import { Link } from 'simple-react-router'

const Home = () => {
  const { categories, subcategories } = data
  return (
    <div className="Home">
      <header className="main-header">
        <h1 className="main-header__title">Checklist</h1>
      </header>

      <section className="container">
        {categories.slice(0, 1).map(category => (
          <div key={`category-${category.id}`}>
            <h2>{category.name}</h2>

            {category.subcategories.map(id => {
              const subcategory = subcategories.find(s => s.id === id)

              return (
                <div>
                  <h4>{subcategory.name}</h4>
                  <Link href={`/subcategories/${id}`}>Home</Link>
                </div>
              )
            })}
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
