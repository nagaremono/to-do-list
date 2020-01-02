"use strict"

const createToDoItem = (title, description, dueDate, priority) => {
  const checked = { checked: false }
  const toggleChecked = {
    toggleChecked: function toggleChecked() {
      if (this.checked === true) this.checked = false
      else this.checked = true
    }
  }
  
  return Object.assign({}, {title, description, dueDate, priority}, checked, toggleChecked)
}

export { createToDoItem }