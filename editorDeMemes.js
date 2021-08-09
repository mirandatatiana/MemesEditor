const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const memeTopText = document.querySelector(".meme-top-text");
const memeTopTextEditor = document.querySelector("#top-text-editor");
const noTopTextCheckbox = document.querySelector("#no-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const memeBottomTextEditor = document.querySelector("#bottom-text-editor");
const noBottomTextCheckbox = document.querySelector("#no-bottom-text");

// Boton para que se vea el aside de texto

textEditorButton.onclick = () => {
    textEditorAside.style.display = "block";
}

// Input que modifica el top text del meme

memeTopTextEditor.oninput = () => {
    memeTopText.textContent = memeTopTextEditor.value;
}

// Input que modifica el bottom text del meme

memeBottomTextEditor.oninput = () => {
    memeBottomText.textContent = memeBottomTextEditor.value;
}
