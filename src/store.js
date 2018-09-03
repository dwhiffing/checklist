import gsjson from 'google-spreadsheet-to-json'

let store = {
  progress: {},
  subcategories: {},
}

export const setStore = save => {
  if (save) {
    store.progress = JSON.parse(save)
  }
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
  localStorage.setItem('save', JSON.stringify(store.progress))
}
