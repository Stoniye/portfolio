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