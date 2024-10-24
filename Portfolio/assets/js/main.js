/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tc =>{/*tc = tabContent*/
            tc.classList.remove('filters-active')
        })
        target.classList.add('filters-active')
        
        tabs.forEach(t =>{ /*tc = tab*/
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})
/*=============== DARK LIGHT THEME ===============*/

const themeBtn = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//Tema seleccionado previamente (si el usuario lo selecciona)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtenemos el tema actual que la interfaz tiene validada en clase "dark-theme"
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeBtn.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//Validar si el usuario ha seleccionado previamente un tema
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activar o desactivar el tema manualmente con el boton
themeBtn.addEventListener('click', ()=>{
    //Agregar o remover el tema oscuro / icono del tema
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)
    
    //Guardamos el tema y el icono actual que el usuario eligió
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile-border`)
sr.reveal(`.profile-name`, {delay:500})
sr.reveal(`.profile-profession`, {delay:600})
sr.reveal(`.profile-social`, {delay:700})
sr.reveal(`.profile-info-group`, {interval:100, delay:700})
sr.reveal(`.profile-btn`, {delay:800})
sr.reveal(`.filters-content`, {delay:900})
sr.reveal(`.filters`, {delay:1000})