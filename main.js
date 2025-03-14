const faBars = document.querySelector(".fa-bars")
const faXmark = document.querySelector(".fa-xmark")
const navBtn = document.querySelector(".nav-btn")
const List = document.querySelector(".list")

let navbar = true

navBtn.addEventListener("click", () => {
    if(navbar){
    faXmark.classList.add("active-btn");
    faBars.classList.remove("active-btn");
    List.classList.add("active-ul")
    navbar = false
    }else{
        faXmark.classList.remove("active-btn");
    faBars.classList.add("active-btn");
    List.classList.remove("active-ul")
    navbar = true
    }
})