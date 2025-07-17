function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");
    const rate = document.getElementById("rate");

    if (weight > 0 && height > 0) {
        const bmi = (weight / (height * height)) * 10000;
        const roundedBMI = bmi.toFixed(2);
        result.innerHTML = `Your BMI is: <b>${roundedBMI}</b>`;
        result.style.color = "black";
        displayBMICategory(bmi);
    } else {
        result.innerHTML = "⚠️ Please enter valid weight and height!";
        result.style.color = "red";
        rate.innerHTML = "";
    }
}

function displayBMICategory(bmi) {
    const rate = document.getElementById("rate");
    let message = "";
    let color = "";

    if (bmi < 18.5) {
        message = "Underweight";
        color = "orange";
    } else if (bmi < 25) {
        message = "Healthy Weight";
        color = "green";
    } else if (bmi < 30) {
        message = "Overweight";
        color = "orange";
    } else {
        message = "Obesity";
        color = "red";
    }

    rate.innerHTML = message;
    rate.style.color = color;
}
