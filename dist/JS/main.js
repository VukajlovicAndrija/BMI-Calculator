const calBtn = document.getElementById("cal-btn")
let userHeight = document.getElementById("user-height")
let userWeight = document.getElementById("user-weight")
let bmiRes = document.getElementById("bmi-res")
let mes = document.getElementById("message")



calBtn.addEventListener("click", calBmi)

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
    if (bmi > 18.5) {
        mes.textContent = "Normal Weight.";
        console.log("first");
    } else if (bmi > 25) {
        mes.textContent = "Overweight.";
        console.log("second");
    } else if (bmi < 18.5) {
        mes.textContent = "Underweight.";
        console.log("third");
    }
}

