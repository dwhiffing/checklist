import React from 'react'
import { Link } from 'react-router-dom'

const CategoryList = ({ categories }) =>
  Object.keys(categories).map(categoryName => {
    const subcategories = categories[categoryName]

    return (
      <div key={`category-${categoryName}`}>
        <h2>{categoryName}</h2>

        {subcategories.map(subcategory => (
          <div key={`subcategory-${subcategory.id}`}>
            <Link to={`/subcategories/${subcategory.id}`}>
              {subcategory.label}
            </Link>
          </div>
        ))}
      </div>
    )
  })

export default CategoryList
