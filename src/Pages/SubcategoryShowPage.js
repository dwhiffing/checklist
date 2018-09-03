import React from 'react'
import Subcategory from '../Components/Subcategory.js'
import BasePage from '../Components/BasePage'
import flatten from 'lodash/flatten'
import { getStore } from '../store.js'

const SubcategoryPage = ({ match }) => {
  const id = +match.params.subcategoryId
  const subcategories = flatten(Object.values(getStore().categories))
  const subcategory = subcategories.find(s => s.id == id)

  return (
    <BasePage name="SubcategoryPage" header={subcategory.label}>
      {<Subcategory name={subcategory.name} id={id} />}
    </BasePage>
  )
}

export default SubcategoryPage
