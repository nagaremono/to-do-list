import { getItemFromForm, getProjectTitle } from './get-item-module.js';
import { populateToDoItem, populateProject } from './populate-ui-module.js';
import { createProject } from './project-module.js';
import { createToDoItem } from './to-do-item-module.js';

"use strict"

const toDoListController = (function() {
  var projects = []

  var currentProject = createProject('Project 1')
  projects.push(currentProject)
  populateProject('Project 1')

  var project1 = document.querySelector('.projectlist').lastChild
  var project1Buttons = project1.querySelectorAll('button')

  addFunctionsToProjectButtons(project1Buttons, 0)

  function populateProjectToDos(project) {
    document.querySelector('tbody').innerHTML = ''
    const toDos = project['items']    
    
    toDos.forEach((toDo) => {
      populateToDoItem(toDo)
    })
  };

  function addFunctionsToProjectButtons(buttonNodeList, index) {
    buttonNodeList.forEach((button) => {
      button.setAttribute("data-project-number", index)
      if (button.className === "viewproject") {
        button.addEventListener('click', () => {
          var projectNumber = event.target.dataset.projectNumber
          var project = projects[projectNumber]
          currentProject = project

          populateProjectToDos(currentProject)
        })
      } else if (button.className === 'deleteproject') {
        button.addEventListener('click', () => {
          var projectNumber = event.target.dataset.projectNumber
          projects.splice(projectNumber, 1)

          document.querySelector('.projectlist').innerHTML = ''

          projects.forEach((project) => {
            populateProject(project.name)
          })
          
          const projectList = document.querySelector('.projectlist').childNodes
          projectList.forEach((project, index) => {
            const projectButtons = project.querySelectorAll('button')
            addFunctionsToProjectButtons(projectButtons, index)
          })

          currentProject = projects[0]
          populateProjectToDos(currentProject)
        })
      }
    })    
  }  

  function newProject() {
    var projectTitle = getProjectTitle()
    const project = createProject(projectTitle)
    projects.push(project)
    currentProject = project
    populateProject(projectTitle)

    var lastAddedProject = document.querySelector('.projectlist').lastChild
    var projectButtons = lastAddedProject.querySelectorAll('button')
    var index = document.querySelector('.projectlist').childNodes.length - 1

    addFunctionsToProjectButtons(projectButtons, index)
  }

  function newToDo() {
    var itemDetails = getItemFromForm()
    const toDo = createToDoItem(itemDetails[0], itemDetails[1], itemDetails[2], itemDetails[3])
    currentProject.addItem(toDo)
    populateToDoItem(toDo)
  }  

  return { newProject, newToDo };
})();

(function() {
  document.getElementById('additem').addEventListener('click', () => {
    const todoForm = document.getElementById('todoform')
    if (todoForm.style.display === 'none') todoForm.style.display = 'block'
    else todoForm.style.display = 'none'
  })
  
  document.getElementById('addproject').addEventListener('click', () => {
    const projectForm = document.getElementById('projectform')
    if (projectForm.style.display === 'none') projectForm.style.display = 'block'
    else projectForm.style.display = 'none'
  })
  
  document.getElementById('submitproject').addEventListener(
    'click', toDoListController.newProject)
  
  document.getElementById('submititem').addEventListener(
    'click', toDoListController.newToDo)
})();