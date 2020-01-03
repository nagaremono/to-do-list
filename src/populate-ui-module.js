const populateToDoItem = function(item) {
  const toDoTable = document.querySelector('tbody')
  const toDoRow = document.createElement('tr')

  for (let detail in item) {
    const toDoDetail = document.createElement('td')
    if (detail === 'itemNumber' || detail === 'toggleChecked') continue
    if (detail === 'checked') {
      const checkBox = document.createElement('input')
      checkBox.setAttribute('type', 'checkbox')
      if (item[detail] === true) {        
        checkBox.setAttribute('value', 'true')
        checkBox.setAttribute('checked')
      } else {
        checkBox.setAttribute('value', 'false')
      }
      toDoDetail.appendChild(checkBox)
      toDoRow.appendChild(toDoDetail)
    } else {
    toDoDetail.textContent = item[detail]
    toDoRow.appendChild(toDoDetail)
    }
  }

  const deleteColumn = document.createElement('td')
  const deleteButton = document.createElement('button')
  deleteButton.textContent = "Delete"
  deleteColumn.appendChild(deleteButton)
  toDoRow.appendChild(deleteColumn)

  const editColumn = document.createElement('td')
  const editButton = document.createElement('button')
  editButton.textContent = "Edit"
  editColumn.appendChild(editButton)
  toDoRow.appendChild(editColumn)

  toDoTable.appendChild(toDoRow)
}

const populateProject = function(name) {
  const projectList = document.querySelector('.projectlist')

  const newProject = document.createElement('li')
  newProject.textContent = name
  newProject.style.marginLeft = '23px'

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'Delete'
  deleteButton.className = 'deleteproject'
  deleteButton.style.margin = '5px'
  newProject.appendChild(deleteButton)

  const editButton = document.createElement('button')
  editButton.textContent = 'Edit'
  editButton.className = 'editproject'
  editButton.style.margin = '5px'
  newProject.appendChild(editButton)

  const viewButton = document.createElement('button')
  viewButton.textContent = 'View'
  viewButton.className = 'viewproject'
  viewButton.style.margin = '5px'
  newProject.appendChild(viewButton)

  projectList.appendChild(newProject)
}

export { populateToDoItem, populateProject }