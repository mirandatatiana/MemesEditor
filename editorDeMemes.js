// Modo oscuro

const containerMode = document.querySelector(".container-mode")
const buttonDarkMode = document.querySelector(".darkbutton")

const changeMode = () => {
    containerMode.classList.toggle("container-mode")
    containerMode.classList.toggle("container-light")
}

buttonDarkMode.onclick = changeMode

// Botones para que se vean los aside

const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const imageEditorButton = document.getElementById("image-button");
const imageEditorAside = document.querySelector(".image-editor");

// Boton para que se vea el aside de imagen

imageEditorButton.onclick = () => {
    textEditorAside.style.display = "none";
    imageEditorAside.style.display = "block";
}

// Boton para que se vea el aside de texto

textEditorButton.onclick = () => {
    imageEditorAside.style.display = "none";
    textEditorAside.style.display = "block";
}

// Editor de texto

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

// Input que modifica el texto superior del meme

memeTopTextEditor.oninput = () => {
    memeTopText.textContent = memeTopTextEditor.value;
}

// Checkbox para eliminar el texto superior del meme

topTextCheckbox.onclick = () => {
    memeTopText.classList.toggle("hide");
}

// Input que modifica el texto inferior del meme

memeBottomTextEditor.oninput = () => {
    memeBottomText.textContent = memeBottomTextEditor.value;
}

// Checkbox para eliminar el texto inferior del meme

bottomTextCheckbox.onclick = () => {
    memeBottomText.classList.toggle("hide");
}

// Selector de tipografía del meme

fontSelection.onchange = () => {
    if (fontSelection.value === "arial") {
        memeTopText.style.fontFamily = "Arial";
        memeBottomText.style.fontFamily = "Arial";
    }
    else if (fontSelection.value === "arial-black") {
        memeTopText.style.fontFamily = "Arial Black";
        memeBottomText.style.fontFamily = "Arial Black";
    }
    else if (fontSelection.value === "american-typewriter") {
        memeTopText.style.fontFamily = "American Typewriter";
        memeBottomText.style.fontFamily = "American Typewriter";
    }
    else if (fontSelection.value === "comic-sans") {
        memeTopText.style.fontFamily = "Comic Sans MS";
        memeBottomText.style.fontFamily = "Comic Sans MS";
    }
    else if (fontSelection.value === "helvetica") {
        memeTopText.style.fontFamily = "Helvetica";
        memeBottomText.style.fontFamily = "Helvetica";
    }
    else if (fontSelection.value === "impact") {
        memeTopText.style.fontFamily = "Impact";
        memeBottomText.style.fontFamily = "Impact";
    }
    else if (fontSelection.value === "verdana") {
        memeTopText.style.fontFamily = "Verdana";
        memeBottomText.style.fontFamily = "Verdana";
    }
    else if (fontSelection.value === "times-new-roman") {
        memeTopText.style.fontFamily = "Times New Roman";
        memeBottomText.style.fontFamily = "Times New Roman";
    }
}

// Input que modifica el tamaño de la tipografía del meme

fontSizeInput.oninput = () => {
    memeTopText.style.fontSize = `${fontSizeInput.value}px`;
    memeBottomText.style.fontSize = `${fontSizeInput.value}px`;
}

// Botones para cambiar el alineamiento del texto del meme

leftAlignmentButton.onclick = () => {
    memeTopText.style.textAlign = "left";
    memeBottomText.style.textAlign = "left";
}

centerAlignmentButton.onclick = () => {
    memeTopText.style.textAlign = "center";
    memeBottomText.style.textAlign = "center";
}

rightAlignmentButton.onclick = () => {
    memeTopText.style.textAlign = "right";
    memeBottomText.style.textAlign = "right";
}

// Input para cambiar colores de la tipografía y del fondo

textColorInput.oninput = () => {
    memeTopText.style.color = textColorInput.value;
    memeBottomText.style.color = textColorInput.value;
}

backgroundColorInput.oninput = () => {
    memeTopText.style.backgroundColor = backgroundColorInput.value;
    memeBottomText.style.backgroundColor = backgroundColorInput.value;
}

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
const imageForm = document.querySelector(".image-form");

// Input para agregar la url de la imagen

urlImg.onchange = () => {
    memeImage.style.backgroundImage = `url(${urlImg.value})`
}

// Input para cambiar el color de fondo de la imagen

imageBackgroundColorInput.oninput = () => {
    memeImage.style.backgroundColor = imageBackgroundColorInput.value;
    imageBackgroundColorValue.textContent = imageBackgroundColorInput.value;
}

// Falta la funcion para cambiar estilos del fondo

// Aplicar filtros

const actualizarFiltros = () => {
    memeImage.style.filter = `brightness(${brightnessInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${greyScaleInput.value}%) sepia(${sepiaInput.value}%) hue-rotation(${hueInput.value}deg) saturation(${saturatedInput.value}%) invert(${negativeInput.value})`;
}

brightnessInput.addEventListener('change', actualizarFiltros);
opacityInput.addEventListener('change', actualizarFiltros);
contrastInput.addEventListener('change', actualizarFiltros);
blurInput.addEventListener('change', actualizarFiltros);
greyScaleInput.addEventListener('change', actualizarFiltros);
sepiaInput.addEventListener('change', actualizarFiltros);
hueInput.addEventListener('change', actualizarFiltros);
saturatedInput.addEventListener('change', actualizarFiltros);
negativeInput.addEventListener('change', actualizarFiltros);

// Reestablecer filtros (esto tira un error, hay que revisarlo)

// resetFiltersButton.onclick = () => {
//     brightnessInput.value = 1;
//     opacityInput.value = 1;
//     contrastInput.value = 100;
//     blurInput.value = 0;
//     greyScaleInput.value = 0;
//     sepiaInput.value = 0;
//     hueInput.value = 0;
//     saturatedInput.value = 100;
//     negativeInput.value = 0;
// }

// Función para evitar el envío del formulario

imageForm.onsubmit = (event) => {
    event.preventDefault()
}

// Responsive

const closeImageAsideButton = document.querySelector("#close-image-aside-button");
const closeTextAsideButton = document.querySelector("#close-text-aside-button");

closeImageAsideButton.onclick = () => {
    imageEditorAside.style.display = "none";
}

closeTextAsideButton.onclick = () => {
    textEditorAside.style.display = "none";
}


