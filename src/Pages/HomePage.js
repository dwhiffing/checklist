import React from 'react'
import data from '../data/index.js'
import BasePage from '../Components/BasePage'
import CategoryList from '../Components/CategoryList'

const Home = () => {
  const { categories, subcategories } = data
  return (
    <BasePage name="Home" header="Checklist">
      <CategoryList categories={categories} subcategories={subcategories} />
    </BasePage>
  )
}

export default Home
