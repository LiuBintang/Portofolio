const text = "Hello World!";
let index = 0;
const typingSpeed = 50;
function type() {
document.getElementById('hello').innerHTML = text.slice(0, index);
index++;
if (index <= text.length) {
setTimeout(type, typingSpeed);
}
}

type();