let store = {
  'Battlecraft & Grand Company Leves': [],
  'Fieldcraft Leves': [],
  'Tradecraft Leves': [],
}

export const setStore = save => {
  if (save) {
    store = JSON.parse(save)
  }
}

export const getStore = () => store
