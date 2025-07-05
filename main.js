var r = document.querySelector(':root')
var stickydiv = document.querySelector('#stickydiv')
var aboutme = document.querySelector('#aboutme')
var projects = document.querySelector('#projects')

r.style.setProperty('--aboutme_height', aboutme.offsetHeight+'px')
r.style.setProperty('--projects_height', projects.offsetHeight+'px')

stickydiv.style.height = 'calc(70vh + var(--aboutme_height) + var(--projects_height) + 8px)'

console.log(aboutme.offsetHeight)