// Image Editor
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
const resetFiltersButton = document.querySelector("#reset-filters-button");
const memeImage = document.querySelector(".meme-image");
const urlImg = document.querySelector(".urlImg")
const imageForm = document.querySelector(".image-form");
const fondoDeImage = document.querySelector("#background-meme")

// Text Editor
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


// Dark Mode
const containerMode = document.querySelector(".container-mode")
const buttonDarkMode = document.querySelector(".darkbutton")

const changeMode = () => {
    containerMode.classList.toggle("container-mode")
    containerMode.classList.toggle("container-light")
}

buttonDarkMode.onclick = changeMode

// Aside Buttons Text
const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const imageEditorButton = document.getElementById("image-button");
const imageEditorAside = document.querySelector(".image-editor");

// Aside Buttons Image
imageEditorButton.onclick = () => {
    textEditorAside.style.display = "none";
    imageEditorAside.style.display = "block";
}

// Button Aside Text
textEditorButton.onclick = () => {
    imageEditorAside.style.display = "none";
    textEditorAside.style.display = "block";
}

// Closed Aside
const closeImageAsideButton = document.querySelector("#close-image-aside-button");
const closeTextAsideButton = document.querySelector("#close-text-aside-button");

closeImageAsideButton.onclick = () => {
    imageEditorAside.style.display = "none";
}

closeTextAsideButton.onclick = () => {
    textEditorAside.style.display = "none";
}


// Top Text 
memeTopTextEditor.oninput = () => {
    memeTopText.textContent = memeTopTextEditor.value;
}

// Delete the top text
topTextCheckbox.onclick = () => {
    memeTopText.classList.toggle("hide");
}

// Botttom Text 

memeBottomTextEditor.oninput = () => {
    memeBottomText.textContent = memeBottomTextEditor.value;
}

// Delete the bottom text
bottomTextCheckbox.onclick = () => {
    memeBottomText.classList.toggle("hide");
}

// Typography Selector
fontSelection.onchange = () => {
    memeTopText.style.fontFamily = fontSelection.value
    memeBottomText.style.fontFamily = fontSelection.value
}

// Modify size of typography
fontSizeInput.oninput = () => {
    memeTopText.style.fontSize = `${fontSizeInput.value}px`;
    memeBottomText.style.fontSize = `${fontSizeInput.value}px`;
}

// Bottons for Alignment text 
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

// Change colors of typography and background
textColorInput.oninput = () => {
    memeTopText.style.color = textColorInput.value;
    memeBottomText.style.color = textColorInput.value;
}

backgroundColorInput.oninput = () => {
    memeTopText.style.backgroundColor = backgroundColorInput.value;
    memeBottomText.style.backgroundColor = backgroundColorInput.value;
}

// Backgruond transparent
transparentBackgroundCheckbox.onclick = () => {
    memeTopText.classList.toggle("transparent");
    memeBottomText.classList.toggle("transparent");
}

// Add outline to text
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

// Change padding of text
paddingInput.oninput = () => {
    memeTopText.style.padding = `${paddingInput.value}px 0px ${paddingInput.value}px 0px`;
    memeBottomText.style.padding = `${paddingInput.value}px 0px ${paddingInput.value}px 0px`;
}

// Line spacing of text
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


// Add URL image 
urlImg.onchange = () => {
    memeImage.style.backgroundImage = `url(${urlImg.value})`
}

// Change background color image
imageBackgroundColorInput.oninput = () => {
    memeImage.style.backgroundColor = imageBackgroundColorInput.value;
    imageBackgroundColorValue.textContent = imageBackgroundColorInput.value;
}

//  Background styles
fondoDeImage.oninput = () => {
    if (fondoDeImage.value === "lighten")
        memeImage.style.backgroundBlendMode = "lighten";
    else if (fondoDeImage.value === "darken") {
        memeImage.style.backgroundBlendMode = "darken";
    } else if (fondoDeImage.value === "difference") {
        memeImage.style.backgroundBlendMode = "difference";
    } else if (fondoDeImage.value === "luminosity") {
        memeImage.style.backgroundBlendMode = "luminosity";
    } else if (fondoDeImage.value === "multiply") {
        memeImage.style.backgroundBlendMode = "multiply";
    }

}
// Filters
const actualizarFiltros = () => {
    memeImage.style.filter = `brightness(${brightnessInput.value})
     opacity(${opacityInput.value})
      contrast(${contrastInput.value}%)
       blur(${blurInput.value}px)
        grayscale(${greyScaleInput.value}%)
         sepia(${sepiaInput.value}%)
          hue-rotate(${hueInput.value}deg)
           saturate(${saturatedInput.value}%)
            invert(${negativeInput.value})`;
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

// Reset filters
resetFiltersButton.onclick = () => {
    memeImage.style.filter = "none";
    brightnessInput.value = 1;
    opacityInput.value = 1;
    contrastInput.value = 100;
    blurInput.value = 0;
    greyScaleInput.value = 0;
    sepiaInput.value = 0;
    hueInput.value = 0;
    saturatedInput.value = 100;
    negativeInput.value = 0;
}

// Prevent form
imageForm.onsubmit = (event) => {
    event.preventDefault()
}


