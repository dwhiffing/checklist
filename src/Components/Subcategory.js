import React from 'react'
import Loader from './Loader'
import gsjson from 'google-spreadsheet-to-json'

import Group from './Group'

const Leve = ({ data }) => (
  <Group name="leve" groupX="type" groupY="npc" data={data} />
)

const Log = ({ data }) => (
  <Group name="log" groupX="type" groupY="level" data={data} />
)

const Fishing = ({ data }) => (
  <Group name="log" groupX="level" groupY="zone" data={data} />
)

const Fish = ({ data }) => (
  <Group name="log" groupX="type" groupY="zone" data={data} />
)

const Sight = ({ data }) => (
  <Group name="log" groupX="type" groupY="zone" data={data} />
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
        {data.length === 0 ? <Loader /> : <Component data={data} />}
      </div>
    )
  }
}

export default Subcategory
