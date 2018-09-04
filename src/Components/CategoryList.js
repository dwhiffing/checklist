import React from 'react'
import { Link } from 'react-router-dom'

const Subcategory = ({ id, label }) => (
  <div>
    <Link to={`/subcategories/${id}`}>{label}</Link>
  </div>
)

const Category = ({ name, subcategories }) => (
  <div>
    <h2>{name}</h2>

    {subcategories.map(subcategory => (
      <Subcategory
        key={`subcategory-${subcategory.id}`}
        id={subcategory.id}
        label={subcategory.label}
      />
    ))}
  </div>
)

const CategoryList = ({ categories }) =>
  Object.keys(categories).map(categoryName => (
    <Category name={categoryName} subcategories={categories[categoryName]} />
  ))

export default CategoryList
