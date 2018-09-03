import React from 'react'
import Checkbox from './Checkbox'
import groupBy from 'lodash/groupBy'
import { getItemChecked, setItemChecked } from '../store'

const capitalize = lower => lower.replace(/^\w/, c => c.toUpperCase())

class Group extends React.Component {
  render() {
    const { name, groupX, groupY, data } = this.props

    const groupedByX = groupBy(data, groupX)
    const groupedByXAndY = Object.keys(groupedByX).map(key => {
      const groupedByNpc = groupBy(groupedByX[key], groupY)
      return {
        name: key,
        [groupX]: Object.keys(groupedByNpc).map(key => ({
          name: key,
          [groupY]: groupedByNpc[key],
        })),
      }
    })

    return (
      <div key={`${name}-${this.props.id}`}>
        {groupedByXAndY.map(x => (
          <div key={`${groupX}-${x.name}`}>
            <h2>
              {capitalize(groupX)}: {x.name}
            </h2>

            {x[groupX].map(y => (
              <div key={`npc-${y.name}`}>
                <h4>
                  {capitalize(groupY)}: {y.name}
                </h4>

                {y[groupY].map(item => {
                  const checked = getItemChecked(name, item.id)

                  return (
                    <Checkbox
                      key={`item-${item.name}`}
                      name={item.id}
                      label={item.name}
                      checked={checked}
                      onChange={({ target }) => {
                        setItemChecked(name, item.id, !!target.checked)
                        this.forceUpdate()
                      }}
                    />
                  )
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Group
