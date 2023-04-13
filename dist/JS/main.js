const calBtn = document.getElementById("cal-btn")
let userHeight = document.getElementById("user-height")
let userWeight = document.getElementById("user-weight")
let bmiRes = document.getElementById("bmi-res")
let mes = document.getElementById("message")
const clrBtn = document.getElementById("clr-btn")

calBtn.addEventListener("click", calBmi)
clrBtn.addEventListener("click", clearInputs)

function calBmi() {
    if (userHeight.value == "" || isNaN(userHeight.value))
        bmiRes.innerHTML = "Provide a valid Height!"

    else if (userWeight.value == "" || isNaN(userWeight.value))
        bmiRes.innerHTML = "Provide a valid Weight!"


    else {

        bmiRes.textContent = (userWeight.value / ((userHeight.value * userHeight.value)
            / 10000)).toFixed(2)
        check()
    }
}
function check() {
    const bmi = parseFloat(bmiRes.textContent);
    if (bmi > 18.5 && bmi <= 25) {
        mes.textContent = "Normal Weight.";
    } else if (bmi > 25 && bmi <= 30) {
        mes.textContent = "Overweight.";
    } else if (bmi < 18.5) {
        mes.textContent = "Underweight.";
    } else {
        mes.textContent = "Obese.";
    }
}

function clearInputs() {
    userHeight.value = ""
    userWeight.value = ""
    bmiRes.textContent = ""
    mes.textContent = ""
}
