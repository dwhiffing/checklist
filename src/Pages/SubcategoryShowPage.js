import React from 'react'
import Subcategory from '../Components/Subcategory.js'
import BasePage from '../Components/BasePage'
import data from '../data/index.js'

const SubcategoryPage = ({ location }) => {
  const { subcategories } = data
  const id = +location.params.subcategoryId
  const subcategory = subcategories.find(s => s.id === id)

  return (
    <BasePage name="SubcategoryPage" header={subcategory.name}>
      {<Subcategory name={subcategory.name} id={id} />}
    </BasePage>
  )
}

export default SubcategoryPage
