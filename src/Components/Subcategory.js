import React from 'react'
import Loader from './Loader'
import Group from './Group'
import { getSubcategory } from '../store'

class Subcategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    getSubcategory(this.props.id, this.props.name, data =>
      this.setState({ data })
    )
  }

  render() {
    return (
      <div key={`subcategory-${this.props.id}`}>
        {this.state.data.length === 0 ? (
          <Loader />
        ) : (
          <Group
            name={this.props.name}
            groupAKey={this.props.groupAKey}
            groupBKey={this.props.groupBKey}
            data={this.state.data}
          />
        )}
      </div>
    )
  }
}

export default Subcategory
