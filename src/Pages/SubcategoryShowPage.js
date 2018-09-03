import React from 'react'
import Subcategory from '../Components/Subcategory.js'
import BasePage from '../Components/BasePage'
import flatten from 'lodash/flatten'
import { getStore } from '../store.js'

const SubcategoryPage = ({ match, history }) => {
  const id = +match.params.subcategoryId

  const categories = getStore().categories
  if (!categories) {
    history.goBack()
    return null
  }

  const subcategories = flatten(Object.values(categories))
  const subcategory = subcategories.find(s => s.id == id)

  return (
    <BasePage name="SubcategoryPage" header={subcategory.label}>
      <Subcategory
        id={id}
        name={subcategory.name}
        groupAKey={subcategory.groupa}
        groupBKey={subcategory.groupb}
      />
    </BasePage>
  )
}

export default SubcategoryPage
