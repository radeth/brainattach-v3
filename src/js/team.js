import "./../../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import "reset-css"
import "./../css/style.scss"
document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        let preloaderHTML = document.getElementById("preloader");
        preloaderHTML.style.display = "none";
    },1000)
})