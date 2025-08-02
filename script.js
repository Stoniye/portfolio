let age = 0;
let experience = 0;

addEventListener('load', onLoad);

function onLoad(){
    loadNumbers();
}

//Load year numbers in Text
function loadNumbers() {
    age = getYearsPassed(new Date(2006, 7));
    experience = getYearsPassed(new Date(2020, 7));

    document.getElementById("yearsOfExperience").innerHTML = experience;
    document.getElementById("age").innerHTML = age;
    document.getElementById("descriptionText").innerHTML = document.getElementById("descriptionText").innerHTML.replace("#age#", age).replace("#exp#", experience);
}

function getYearsPassed(date) {
    const today = new Date();

    let years = today.getFullYear() - date.getFullYear();
    const monthDiff = today.getMonth() - date.getMonth();

    if (monthDiff < 0)
        years--;

    return years;
}

//Tools scroll animation
const scrollContainer = document.querySelector('.tools-scroll');
const track = document.querySelector('.tools-track');
let speed = 0.3;
let offsetX = 0;

const tools = document.querySelectorAll('.tools-track > a:has(.tool-item)');
tools.forEach(tool => {
    tool.addEventListener('mouseenter', () => {
        speed = 0;
    });

    tool.addEventListener('mouseleave', () => {
        speed = 0.3;
    });
});

function step() {
    offsetX -= speed;
    track.style.transform = `translateX(${offsetX}px) translateY(-50%)`;

    const first = track.children[0];
    const firstStyles = window.getComputedStyle(first);

    if (first.getBoundingClientRect().right < scrollContainer.getBoundingClientRect().left) {
        offsetX += first.offsetWidth + parseFloat(firstStyles.marginLeft) + parseFloat(firstStyles.marginRight);

        track.style.transition = "none";
        track.style.transform = `translateX(${offsetX}px) translateY(-50%)`;

        track.appendChild(first);

        requestAnimationFrame(() => {
            track.style.transition = "";
        });
    }

    requestAnimationFrame(step);
}

requestAnimationFrame(step);