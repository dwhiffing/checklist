import React from 'react'
import Checkbox from './Checkbox'
import groupBy from 'lodash/groupBy'
import { getItemChecked, setItemChecked } from '../store'

const capitalize = (lower = '') => lower.replace(/^\w/, c => c.toUpperCase())

class NoGroup extends React.Component {
  render() {
    const { name, data } = this.props
    return (
      <div key={`${name}-${this.props.id}`}>
        {data.map((item, index) => {
          const checked = getItemChecked(name, item.id)

          return (
            <Checkbox
              key={`item-${index}`}
              name={item.id}
              label={item.name || item.item || JSON.stringify(item)}
              checked={checked}
              onChange={({ target }) => {
                setItemChecked(name, item.id, !!target.checked)
                this.forceUpdate()
              }}
            />
          )
        })}
      </div>
    )
  }
}

class OneGroup extends React.Component {
  render() {
    const { name, groupAKey, data } = this.props
    const groupedBy = groupBy(data, groupAKey)
    return (
      <div key={`${name}-${this.props.id}`}>
        {Object.keys(groupedBy).map(groupKey => (
          <div key={`${groupAKey}-${groupKey}`}>
            <h2>
              {capitalize(groupAKey)}: {groupKey}
            </h2>

            {groupedBy[groupKey].map((item, index) => {
              const checked = getItemChecked(name, item.id)

              return (
                <Checkbox
                  key={`item-${index}`}
                  name={item.id}
                  label={item.name || item.item}
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
    )
  }
}

class TwoGroup extends React.Component {
  render() {
    const { name, groupAKey, groupBKey, data } = this.props

    const groupedByA = groupBy(data, groupAKey)
    const groupedByAAndB = Object.keys(groupedByA).map(key => {
      const groupedByB = groupBy(groupedByA[key], groupBKey)
      return {
        name: key,
        [groupAKey]: Object.keys(groupedByB).map(key => ({
          name: key,
          [groupBKey]: groupedByB[key],
        })),
      }
    })

    return (
      <div key={`${name}-${this.props.id}`}>
        {groupedByAAndB.map(groupingA => (
          <div key={`${groupAKey}-${groupingA.name}`}>
            <h2>
              {capitalize(groupAKey)}: {groupingA.name}
            </h2>

            {groupingA[groupAKey].map(groupingB => (
              <div key={`npc-${groupingB.name}`}>
                <h4>
                  {capitalize(groupBKey)}: {groupingB.name}
                </h4>

                {groupingB[groupBKey].map((item, index) => {
                  const checked = getItemChecked(name, item.id)

                  return (
                    <Checkbox
                      key={`item-${index}`}
                      name={item.id}
                      label={item.name || item.item}
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

const Group = ({ name, groupAKey, groupBKey, data }) => {
  if (groupAKey && groupBKey) {
    return (
      <TwoGroup
        name={name}
        groupAKey={groupAKey}
        groupBKey={groupBKey}
        data={data}
      />
    )
  }
  if (groupAKey) {
    return <OneGroup name={name} groupAKey={groupAKey} data={data} />
  }

  return <NoGroup name={name} data={data} />
}

export default Group
