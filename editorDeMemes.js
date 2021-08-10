const containerMode = document.querySelector(".container-mode")
const buttonDarkMode = document.querySelector(".darkbutton")

const changeMode = () => {

    containerMode.classList.toggle("container-mode")
    containerMode.classList.toggle("container-light")

}
buttonDarkMode.onclick = changeMode
