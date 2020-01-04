function highlightProject() {
  const projects = document.querySelector('.projectlist').childNodes

  projects.forEach((project) => {
    project.style.backgroundColor = "#9e9e9e"
    project.style.color ="#1e1e1e"
  })

  const highlighted = event.target.parentElement
  highlighted.style.backgroundColor = "#3b3b3b"
  highlighted.style.color = "#f3f3f3"
}

export { highlightProject }