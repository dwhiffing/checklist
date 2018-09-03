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
    const data = this.state.data

    let groups = ['type', 'npc']
    if (this.props.id >= 4 && this.props.id <= 5) {
      groups = ['type', 'level']
    }
    if (this.props.id >= 6 && this.props.id <= 6) {
      groups = ['level', 'zone']
    }
    if (this.props.id >= 7 && this.props.id <= 7) {
      groups = ['type', 'zone']
    }
    if (this.props.id >= 8 && this.props.id <= 8) {
      groups = ['type', 'zone']
    }

    return (
      <div key={`subcategory-${this.props.id}`}>
        {data.length === 0 ? (
          <Loader />
        ) : (
          <Group
            name={this.props.name}
            groupX={groups[0]}
            groupY={groups[1]}
            data={data}
          />
        )}
      </div>
    )
  }
}

export default Subcategory
