const populateToDoItem = function() {
  const toDoTable = document.querySelector('tbody')
  const toDoRow = document.createElement('tr')

  const toDoDetails = Array.from(arguments)
  toDoDetails.forEach((detail) => {
    const toDoDetail = document.createElement('td')
    toDoDetail.textContent = detail
    toDoRow.appendChild(toDoDetail)
  })

  toDoTable.appendChild(toDoRow)
}

const populateProject = function(name) {
  const projectList = document.querySelector('.projectlist')

  const newProject = document.createElement('li')
  newProject.textContent = name
  projectList.appendChild(newProject)
}

export { populateToDoItem, populateProject }