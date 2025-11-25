let signBtn = document.querySelector("a");
let signTwo = document.querySelector(".sign-btn");
let signForms = document.querySelectorAll(".sign");

signBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signForms.forEach((val) => {
        val.classList.toggle("active");
    });
});

signTwo.addEventListener("click", (e) => {
    e.preventDefault(); 
    signForms.forEach((val) => {
        val.classList.toggle("active");
    });
});
