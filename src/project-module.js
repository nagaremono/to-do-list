const createProject = (name) => {
  const items = { items: []}
  const addItem = {
    addItem: function addItem(item) {
      this.items.push(item)
    }
  }
  const removeItem = {
    removeItem: function removeItem(item) {
      this.items.splice(item.itemNumber, 1)
    }
  }
  return Object.assign({}, { name } , items, addItem, removeItem)
}

export { createProject }