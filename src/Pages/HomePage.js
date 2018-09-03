import React from 'react'
import BasePage from '../Components/BasePage'
import CategoryList from '../Components/CategoryList'
import { getStore, setCategories } from '../store'
import Loader from '../Components/Loader'

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
