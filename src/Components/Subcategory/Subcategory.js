import React from 'react'
import Checkbox from '../Checkbox/Checkbox.js'
import gsjson from 'google-spreadsheet-to-json'

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
    return (
      <div key={`subcategory-${this.props.id}`}>
        <h4>{this.props.name}</h4>
        {this.state.data.length === 0 ? (
          <div>
            <span>Loading</span>
          </div>
        ) : (
          this.state.data.map((item, index) => (
            <Checkbox key={`item-${index}`} text={item.name} />
          ))
        )}
      </div>
    )
  }
}

export default Subcategory
