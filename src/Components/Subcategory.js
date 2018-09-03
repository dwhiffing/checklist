import React from 'react'
import { Leve } from './Checkbox/index.js'
import Loader from './Loader'
import gsjson from 'google-spreadsheet-to-json'
import groupBy from 'lodash/groupBy'

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

    const groupedByType = groupBy(data, 'type')
    const groupedByTypeAndNpc = Object.keys(groupedByType).map(key => {
      const groupedByNpc = groupBy(groupedByType[key], 'npc')
      return {
        name: key,
        npcs: Object.keys(groupedByNpc).map(key => ({
          name: key,
          leves: groupedByNpc[key],
        })),
      }
    })

    return (
      <div key={`subcategory-${this.props.id}`}>
        {data.length === 0 ? (
          <Loader />
        ) : (
          groupedByTypeAndNpc.map(type => (
            <div key={`type-${type.name}`}>
              <h2>{type.name}</h2>

              {type.npcs.map(npc => (
                <div key={`npc-${npc.name}`}>
                  <h4>{npc.name}</h4>

                  {npc.leves.map(leve => (
                    <Leve key={`leve-${leve.name}`} item={leve} />
                  ))}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    )
  }
}

export default Subcategory
