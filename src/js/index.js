import "./../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "reset-css"
import "./../css/style.scss"
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        let preloaderHTML = document.getElementById("preloader");
        preloaderHTML.style.display = "none";
    },350)
})
let hideEUinfo = document.getElementById('hideEUinfo')
let EUinfoBaner = document.getElementById('EUinfo')
console.log(document.cookie.split(';'))
let cookies = document.cookie.split(';')
console.log(cookies[2],"acquainted")
if(cookies[2]=="acquainted"){
    console.log('test')
}
cookies.forEach(elemet=>{
    console.log(elemet)
    if(elemet=="acquainted"){
        EUinfoBaner.style.display = "none"
    }
})
hideEUinfo.addEventListener('click',()=>{
    EUinfoBaner.style.display = "none"
    document.cookie = 'acquainted'
})

