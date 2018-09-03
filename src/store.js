let store = {
  progress: {},
}

export const setStore = save => {
  if (save) {
    store = JSON.parse(save)
  }
}

export const getStore = () => store

export const getItemChecked = (name, id) => {
  if (!store.progress[name]) {
    store.progress[name] = []
  }

  return store.progress[name][id]
}

export const setItemChecked = (name, id, value) => {
  getItemChecked(name, id)
  store.progress[name][id] = value
  localStorage.setItem('save', JSON.stringify(store))
}
