// Play Background Music
let bgMusic = new Audio('bg-music.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.3;
bgMusic.play();

// No Button Movement
function moveButton() {
    let btn = document.getElementById("no");
    let maxX = window.innerWidth - btn.clientWidth;
    let maxY = window.innerHeight - btn.clientHeight;
    let x = Math.floor(Math.random() * maxX);
    let y = Math.floor(Math.random() * maxY);
    btn.style.left = x + "px";
    btn.style.top = y + "px";
    btn.style.animation = "shake 0.3s ease-in-out";
    playSound();
}

// Play Sound When Clicking No
function playSound() {
    let sound = new Audio('sound.mp3'); 
    sound.play();
}

// Yes Button Click - Redirect to Time Selector
function meetUp() {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    setTimeout(() => {
        window.location.href = "time.html"; 
    }, 2000);
}

// Add Floating Cats
function addCats() {
    for (let i = 0; i < 5; i++) { 
        let cat = document.createElement("img");
        cat.src = "cat.png"; 
        cat.className = "cat";
        cat.style.left = Math.random() * window.innerWidth + "px";
        cat.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(cat);
    }
}
addCats();

