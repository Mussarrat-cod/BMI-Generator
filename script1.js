function calculateBMI() {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    let result = document.getElementById("result");
    let rate = document.getElementById("rate");

    if (weight > 0 && height > 0) {
        let bmi = weight / (height * height)*(10000);
        bmi = bmi.toFixed(2); // Round to 2 decimal places
        result.innerHTML = `Your BMI is: <b>${bmi}</b>`;
        tellMI(bmi);
    } else {
        result.innerHTML = "Please enter valid weight and height!";
        result.style.color = "red";
        rate.innerHTML= "";
    }

}
function tellMI(bmi)
{
    let rate=document.getElementById("rate");
    if(bmi<18.5)
    {
        rate.innerHTML="UNDERWEIGHT";
        rate.style.color="red";
    }   
     else if(bmi>=18.0 && bmi<=24.9)
    {
        rate.innerHTML="HEALTHY WEIGHT";
        rate.style.color="green";
    }
    else if(bmi>=25.0 && bmi<=29.9)
    {
        rate.innerHTML="OVERWEIGHT";
        rate.style.color="red";

    }
    else if(bmi>=30.0)
    {
        rate.innerHTML="OBESITY";
        rate.style.color="red";
    }
}
