let signBtn = document.querySelector("a")
let signTwo = document.querySelector(".sign-btn")
let signForm = document.querySelectorAll(".sign")
signBtn.addEventListener("click", () => {
    signForm.forEach((val) =>{
        val.classList.toggle("active")
    })
})

signTwo.addEventListener("click", () => {
    signForm.forEach((val) =>{
        val.classList.toggle("active")
    })
})