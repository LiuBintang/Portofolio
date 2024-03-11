console.log("Script has been called!");
const text = "Hello World!";
let index = 0;
const typingSpeed = 90;
function type() {
    const helloElement = document.getElementById('hello');
    if (index < text.length) {
        helloElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
    } else {
        // Tambahkan tanda ketik di akhir tulisan
        helloElement.innerHTML += '<span class="typing-cursor">|</span>';
    }
}

window.onload = function() {
    type();
};

const imgElement = document.querySelector('.me-img');

let position = 0;
const speed = 2; // Kecepatan pergerakan, dalam pixel per interval

setInterval(() => {
    position += speed;
    imgElement.style.left = position + 'px';

    // Reset posisi ketika gambar mencapai batas kanan layar
    const screenWidth = window.innerWidth;
    const imgWidth = imgElement.offsetWidth;
    if (position > screenWidth) {
        position = -imgWidth;
    }
}, 10); // Interval dalam milidetik