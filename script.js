function onLoad(){
    loadNumbers();
}

//Load year numbers in Text
function loadNumbers() {
    document.getElementById("yearsOfExperience").innerHTML = getYearsPassed(new Date(2020, 7));
    document.getElementById("age").innerHTML = getYearsPassed(new Date(2006, 7));
    document.getElementById("descriptionText").innerHTML = document.getElementById("descriptionText").innerHTML.replace("#age#", getYearsPassed(new Date(2006, 7))).replace("#exp#", getYearsPassed(new Date(2020, 7)));
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