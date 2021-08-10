const textEditorButton = document.getElementById("text-button");
const textEditorAside = document.querySelector(".text-editor");
const memeTopText = document.querySelector(".meme-top-text");
const memeTopTextEditor = document.querySelector("#top-text-editor");
const topTextCheckbox = document.querySelector("#no-top-text");
const memeBottomText = document.querySelector(".meme-bottom-text");
const memeBottomTextEditor = document.querySelector("#bottom-text-editor");
const bottomTextCheckbox = document.querySelector("#no-bottom-text");

// Boton para que se vea el aside de texto

textEditorButton.onclick = () => {
    textEditorAside.style.display = "block";
}

// Input que modifica el texto superior del meme

memeTopTextEditor.oninput = () => {
    memeTopText.textContent = memeTopTextEditor.value;
}

// Checkbox para eliminar el texto superior del mem

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
