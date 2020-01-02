const createProject = (name) => {
  const numberOfItems = { numberOfItems: 0}
  const items = { items: []}
  const addItem = {
    addItem: function addItem(item) {
      item.itemNumber = this.numberOfItems++
      this.items.push(item)
    }
  }
  const removeItem = {
    removeItem: function removeItem(item) {
      this.items.splice(item.itemNumber, 1)
    }
  }
  return Object.assign({}, { name }, numberOfItems, items, addItem, removeItem)
}

export { createProject }