import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ categories, subcategories }) =>
  categories.map(category => (
    <div key={`category-${category.id}`}>
      <h2>{category.name}</h2>

      {category.subcategories.map(id => {
        const subcategory = subcategories.find(s => s.id === id)

        return (
          <div key={`category-${id}`}>
            <Link to={`/subcategories/${id}`}>{subcategory.name}</Link>
          </div>
        )
      })}
    </div>
  ))

export default CategoryList
