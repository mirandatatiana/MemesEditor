const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const memeTopText = document.querySelector(".meme-top-text");
const memeTopTextEditor = document.querySelector("#top-text-editor");
const memeBottomText = document.querySelector(".meme-bottom-text");
const memeBottomTextEditor = document.querySelector("#bottom-text-editor");

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
