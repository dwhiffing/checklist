import React from 'react'
import Loader from './Loader'
import gsjson from 'google-spreadsheet-to-json'

import Group from './Group'

const Leve = ({ name, data }) => (
  <Group name={name} groupX="type" groupY="npc" data={data} />
)

const Log = ({ name, data }) => (
  <Group name={name} groupX="type" groupY="level" data={data} />
)

const Fishing = ({ name, data }) => (
  <Group name={name} groupX="level" groupY="zone" data={data} />
)

const Fish = ({ name, data }) => (
  <Group name={name} groupX="type" groupY="zone" data={data} />
)

const Sight = ({ name, data }) => (
  <Group name={name} groupX="type" groupY="zone" data={data} />
)

class Subcategory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    gsjson({
      spreadsheetId: '1EYbatKJiwKq0UPBRU6JeUUlbYasDQV9OHP2anjcXDJE',
      worksheet: this.props.id,
    }).then(result => {
      this.setState({ data: result })
    })
  }

  render() {
    const data = this.state.data
    let Component
    if (this.props.id <= 3) {
      Component = Leve
    }
    if (this.props.id >= 4 && this.props.id <= 5) {
      Component = Log
    }
    if (this.props.id >= 6 && this.props.id <= 6) {
      Component = Fishing
    }
    if (this.props.id >= 7 && this.props.id <= 7) {
      Component = Fish
    }
    if (this.props.id >= 8 && this.props.id <= 8) {
      Component = Sight
    }

    return (
      <div key={`subcategory-${this.props.id}`}>
        {data.length === 0 ? (
          <Loader />
        ) : (
          <Component name={this.props.name} data={data} />
        )}
      </div>
    )
  }
}

export default Subcategory
