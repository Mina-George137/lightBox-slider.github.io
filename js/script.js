let imgs = Array.from(document.querySelectorAll(".item img"));
let lightBox = document.getElementById("lightBox");
let closeBtn = document.getElementById("close");
let lightBoxItem = document.getElementById("lightBoxItem");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let currentIndex;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function(events) {
        // **Opening LightBox
        lightBox.style.display = "flex";
        console.log(events.target.getAttribute("src"));
        let imgSrc = events.target.getAttribute("src");
        lightBoxItem.style.backgroundImage = `url(` + imgSrc + `)`;

        // **Get the index to slider
        currentIndex = imgs.indexOf(events.target);
    });
}

// **Closing LightBox

function closeLightBox() {
    lightBox.style.display = "none";
}

closeBtn.addEventListener("click", closeLightBox);

// **Sliding next
function nextSlide() {
    currentIndex++;
    let imgSrc = imgs[Math.abs(currentIndex % imgs.length)].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(` + imgSrc + `)`;
}

nextBtn.addEventListener("click", nextSlide);

// **Sliding prev
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    let imgSrc = imgs[Math.abs(currentIndex)].getAttribute("src");
    lightBoxItem.style.backgroundImage = `url(` + imgSrc + `)`;
}

prevBtn.addEventListener("click", prevSlide);

// ***Using Keyboard
document.addEventListener("keydown", function(e) {
    if (lightBox.style.display == "flex") {
        if (e.code == "Escape") {
            closeLightBox();
        } else if (e.code == "ArrowRight") {
            nextSlide();
        } else if (e.code == "ArrowLeft") {
            prevSlide();
        }
    }
});