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

        if (bmiRes.value > 18.5) {
            mes.textContent = "Normal Weight."
        } else if (bmiRes.value > 25) {
            mes.textContent = "Overweight."
        } else if (bmiRes.value < 18.5) {
            mes.textContent = "Underweight"
        }
    }

}
