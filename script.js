function onLoad() {
    document.getElementById("yearsOfExperience").innerHTML = getYearsPassed(new Date(2020, 7));
    document.getElementById("age").innerHTML = getYearsPassed(new Date(2006, 7, 14));
    document.getElementById("descriptionText").innerHTML = document.getElementById("descriptionText").innerHTML.replace("#age#", getYearsPassed(new Date(2006, 7, 14))).replace("#exp#", getYearsPassed(new Date(2020, 7)));
}

function getYearsPassed(date) {
    const currentDate = new Date();
    let yearsPassed = currentDate.getFullYear() - date.getFullYear();

    if (currentDate.getMonth() < date.getMonth() || (currentDate.getMonth() === date.getMonth() && currentDate.getDate() < date.getDate()))
        yearsPassed--;

    return `${yearsPassed}`;
}