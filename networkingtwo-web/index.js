const menuToogle = document.querySelector('.menuToogle input') 
const nav = document.querySelector('.header ul') 

menuToogle.addEventListener('click' , function () {
        nav.classList.toggle('slide')
} )

const notif = document.querySelector('.submit')

notif.addEventListener('click ', function () {
        alert('kontol')
})