const containerMode = document.querySelector(".container-mode")
const buttonDarkMode = document.querySelector(".darkbutton")

const changeMode = () => {

    containerMode.classList.toggle("container-mode")
    containerMode.classList.toggle("container-light")

}
buttonDarkMode.onclick = changeMode


const urlImg = document.querySelector('.urlImg')
const imgMeme = document.querySelector('.meme-image')




urlImg.onchange = () => {
    imgMeme.style.backgroundImage = `url("${urlImg.value}")`

}

const botonFondoImagen = document.querySelector('.bkImg');

botonFondoImagen.oninput = () => {
    imgMeme.style.backgroundColor = botonFondoImagen.value;

}
