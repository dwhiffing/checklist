import gsjson from 'google-spreadsheet-to-json'
import groupBy from 'lodash/groupBy'

let store = {
  progress: {},
  subcategories: {},
  categories: null,
}

export const setStore = save => {
  if (save) {
    store = JSON.parse(save)
  }
}

export const setCategories = callback => {
  gsjson({
    spreadsheetId: '1EYbatKJiwKq0UPBRU6JeUUlbYasDQV9OHP2anjcXDJE',
    worksheet: 0,
    headerStart: 2,
  }).then(result => {
    store.categories = groupBy(result, 'type')
    callback()
    save()
  })
}

export const getStore = () => store

export const getSubcategory = (id, name, callback) => {
  if (store.subcategories[name]) {
    callback(store.subcategories[name])
  } else {
    callback([])
    gsjson({
      spreadsheetId: '1EYbatKJiwKq0UPBRU6JeUUlbYasDQV9OHP2anjcXDJE',
      worksheet: id,
    }).then(result => {
      store.subcategories[name] = result
      save()
      callback(result)
    })
  }
}

export const getItemChecked = (name, id) => {
  if (!store.progress[name]) {
    store.progress[name] = []
  }

  return store.progress[name][id]
}

export const setItemChecked = (name, id, value) => {
  getItemChecked(name, id)
  store.progress[name][id] = value
  save()
}

export const save = () => {
  localStorage.setItem('save', JSON.stringify(store))
}
