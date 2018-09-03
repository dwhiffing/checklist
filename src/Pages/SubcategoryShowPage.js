import React from 'react'
import Subcategory from '../Components/Subcategory/Subcategory.js'
import data from '../data/index.js'

const SubcategoryPage = ({ location }) => {
  const { subcategories } = data
  const id = +location.params.subcategoryId
  const subcategory = subcategories.find(s => s.id === id)

  return (
    <div className="SubcategoryPage">
      <header className="main-header">
        <h1 className="main-header__title">{subcategory.name}</h1>
      </header>

      <section className="container">
        {<Subcategory name={subcategory.name} id={id} />}
      </section>
    </div>
  )
}

export default SubcategoryPage
