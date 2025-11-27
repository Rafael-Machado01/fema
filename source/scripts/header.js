const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const themeBtn = document.getElementById('themeBtn')
const themeIcon = document.getElementById('themeIcon')

menuBtn.addEventListener('click', () => {
   menu.classList.toggle('hidden')
})

themeBtn.addEventListener('click', () => {
   document.documentElement.classList.toggle("dark");
   if(document.documentElement.classList.contains('dark')) {
      themeIcon.classList.remove('fa-moon')
      themeIcon.classList.add('fa-sun')
   }else {
       themeIcon.classList.remove('fa-sun')
      themeIcon.classList.add('fa-moon')
   }
}) 