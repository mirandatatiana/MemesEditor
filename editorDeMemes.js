// Modo oscuro

const containerMode = document.querySelector(".container-mode")
const buttonDarkMode = document.querySelector(".darkbutton")

const changeMode = () => {

    containerMode.classList.toggle("container-mode")
    containerMode.classList.toggle("container-light")

}

buttonDarkMode.onclick = changeMode

const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const memeTopText = document.querySelector(".meme-top-text");
const memeTopTextEditor = document.querySelector("#top-text-editor");
const topTextCheckbox = document.querySelector("#no-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const memeBottomTextEditor = document.querySelector("#bottom-text-editor");
const bottomTextCheckbox = document.querySelector("#no-bottom-text");
const fontSelection = document.querySelector("#font-selection");
const arialFont = document.querySelector("#arial");
const arialBlackFont = document.querySelector("#arial-black");
const americanTypewriterFont = document.querySelector("#american-typewriter");
const comicSansFont = document.querySelector("#comic-sans");
const helveticaFont = document.querySelector("#helvetica");
const impactFont = document.querySelector("#impact");
const verdanaFont = document.querySelector("#verdana");
const timesNewRomanFont = document.querySelector("#times-new-roman");
const fontSizeInput = document.querySelector("#font-size");
const leftAlignmentButton = document.querySelector("#left-alignment");
const centerAlignmentButton = document.querySelector("#center-alignment");
const rightAlignmentButton = document.querySelector("#right-alignment");
const textColorInput = document.querySelector("#text-color");
const backgroundColorInput = document.querySelector("#background-color");
const transparentBackgroundCheckbox = document.querySelector("#transparent-background");
const noOutlineButton = document.querySelector("#no-outline");
const lightOutlineButton = document.querySelector("#light-outline");
const darkOutlineButton = document.querySelector("#dark-outline");
const paddingInput = document.querySelector("#padding");
const lineHeightSelection = document.querySelector("#line-height");
const lineHeightCeroEight = document.querySelector("#cero-eight");
const lineHeightOne = document.querySelector("#one");
const lineHeightOneTwo = document.querySelector("#one-two");
const lineHeightOneFive = document.querySelector("#one-five");
const lineHeightTwo = document.querySelector("#two");
const lineHeightTwoFive = document.querySelector("#two-five");

// Checkbox para que el color de fondo sea transparente

transparentBackgroundCheckbox.onclick = () => {
    memeTopText.classList.toggle("transparent");
    memeBottomText.classList.toggle("transparent");
}

// Botones para agregar contorno al texto

noOutlineButton.onclick = () => {
    memeTopText.style.textShadow = "none";
    memeBottomText.style.textShadow = "none";
}

lightOutlineButton.onclick = () => {
    memeTopText.style.textShadow = "2px 2px #fff";
    memeBottomText.style.textShadow = "2px 2px #fff";
}

darkOutlineButton.onclick = () => {
    memeTopText.style.textShadow = "2px 2px #000";
    memeBottomText.style.textShadow = "2px 2px #000";
}

// Input para cambiar el padding del texto
// Falta lograr que el contenedor del meme no se agrande

paddingInput.oninput = () => {
    memeTopText.style.padding = `${paddingInput.value}px 0px ${paddingInput.value}px 0px`;
    memeBottomText.style.padding = `${paddingInput.value}px 0px ${paddingInput.value}px 0px`;
}

// Selector de interlineado de texto

lineHeightSelection.onchange = () => {
    if (lineHeightSelection.value === "0.8") {
        memeTopText.style.lineHeight = "0.8";
        memeBottomText.style.lineHeight = "0.8";
    }
    else if (lineHeightSelection.value === "1") {
        memeTopText.style.lineHeight = "1";
        memeBottomText.style.lineHeight = "1";
    }
    else if (lineHeightSelection.value === "1.2") {
        memeTopText.style.lineHeight = "1.2";
        memeBottomText.style.lineHeight = "1.2";
    }
    else if (lineHeightSelection.value === "1.5") {
        memeTopText.style.lineHeight = "1.5";
        memeBottomText.style.lineHeight = "1.5";
    }
    else if (lineHeightSelection.value === "2") {
        memeTopText.style.lineHeight = "2";
        memeBottomText.style.lineHeight = "2";
    }
    else if (lineHeightSelection.value === "2.5") {
        memeTopText.style.lineHeight = "2.5";
        memeBottomText.style.lineHeight = "2.5";
    }
}


// Editor de imagen

const imageEditorButton = document.getElementById("image-button");
const imageUrlInput = document.querySelector(".url-image");

const imageBackgroundColorInput = document.querySelector("#color");
const imageBackgroundColorValue = document.querySelector("#color-value");
const brightnessInput = document.querySelector("#brightness");
const opacityInput = document.querySelector("#opacity");
const contrastInput = document.querySelector("#contrast");
const blurInput = document.querySelector("#blur");
const greyScaleInput = document.querySelector("#greyscale");
const sepiaInput = document.querySelector("#sepia");
const hueInput = document.querySelector("#hue");
const saturatedInput = document.querySelector("#saturated");
const negativeInput = document.querySelector("#negative");
const resetFiltersButton = document.getElementById("#reset-filters");
const memeImage = document.querySelector(".memeImg");
const urlImg = document.querySelector('.urlImg')
// Boton para que se vea el aside de imagen
const botonFondoImagen = document.querySelector('.bkImg');
imageEditorButton.onclick = () => {
    textEditorAside.style.display = "none";
}





urlImg.onchange = () => {
    memeImage.style.backgroundImage = `url(${urlImg.value})`

}



botonFondoImagen.oninput = () => {
    memeImage.style.backgroundColor = botonFondoImagen.value;

}

// Input para agregar la url de la imagen


// Input para cambiar el color de fondo de la imagen



// Falta la funcion para cambiar estilos del fondo


// Aplicar filtros

const actualizarFiltros = () => {
    memeImage.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${greyScaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotation(${hueInput.value}deg) saturation(${saturatedInput.value}%) invert(${negativeInput.value})`;
};


brightnessInput.addEventListener('change', actualizarFiltros);
opacityInput.addEventListener('change', actualizarFiltros);
contrastInput.addEventListener('change', actualizarFiltros);
blurInput.addEventListener('change', actualizarFiltros);
greyScaleInput.addEventListener('change', actualizarFiltros);
sepiaInput.addEventListener('change', actualizarFiltros);
hueInput.addEventListener('change', actualizarFiltros);
saturatedInput.addEventListener('change', actualizarFiltros);
negativeInput.addEventListener('change', actualizarFiltros);

// Reestablecer filtros 

// resetFiltersButton.onclick = () => {
//     // brightnessInput.value = 1;
//     // opacityInput.value = 1;
//     // contrastInput.value = 100;
//     // blurInput.value = 0;
//     // greyScaleInput.value = 0;
//     // sepiaInput.value = 0;
//     // hueInput.value = 0;
//     // saturatedInput.value = 100;
//     // negativeInput.value = 0;
// }

// Probando clave ssh


