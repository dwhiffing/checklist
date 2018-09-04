import React from 'react'
import BasePage from './BasePage'
import { getStore, setCategories } from '../store'
import CategoryList from '../components/CategoryList'
import Loader from '../components/Loader'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      loaded: !!getStore().categories,
    }
  }

  componentDidMount() {
    if (!this.state.loaded) {
      setCategories(() => this.setState({ loaded: true }))
    }
  }

  render() {
    return (
      <BasePage name="Home" header="Checklist">
        {this.state.loaded ? (
          <CategoryList categories={getStore().categories} />
        ) : (
          <Loader />
        )}
      </BasePage>
    )
  }
}

export default Home
