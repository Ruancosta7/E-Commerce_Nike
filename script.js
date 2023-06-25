document.querySelector('body').addEventListener('click', (e)=>{
    e.preventDefault()
})

let btn_menu = document.querySelector('.menu')
btn_menu.addEventListener('click', ()=>{
    document.querySelector('.nav-site').classList.toggle('nav-display')
    document.querySelector('.nav-site').classList.toggle('left-right')
    document.querySelector('.menu').classList.toggle('align')
    document.querySelector('.logo').classList.toggle('align')
    document.querySelector('.menu').classList.toggle('rotate')
    document.querySelector('header').classList.toggle('height-100')
})