const p = document.querySelector("#hello");
const text = "Hello World!";

function textTypingEffect(element, text, i = 0) {
    element.textContent += text[i];

    if (i === text.length -1) {
        return;
    }
    setTimeout(() => textTypingEffect(element, text, i + 1), 12)
}

textTypingEffect(p, text);