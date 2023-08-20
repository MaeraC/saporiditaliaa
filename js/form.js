const openFormBtn = document.querySelector(".res-btn")
const form = document.querySelector(".formulaire")
const bg = document.querySelector(".bg-black")
const closeFormBtn = document.querySelector(".fa-times")

openFormBtn.addEventListener("click", () => {
    form.style.display = "block"
    bg.style.display = "block"
})

closeFormBtn.addEventListener("click", () => {
    form.style.display = "none"
    bg.style.display = "none"
})