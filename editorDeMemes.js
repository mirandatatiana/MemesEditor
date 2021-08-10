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

// Boton para que se vea el aside de texto

textEditorButton.onclick = () => {
    textEditorAside.style.display = "block";
}

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