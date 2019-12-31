"use strict"

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