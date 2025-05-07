const weight = document.getElementById('weight');
const height = document.getElementById('height');
const age = document.getElementById('age');
const calculateButton = document.getElementById('calculate');
const result = document.getElementById('res');
calculateButton.addEventListener('click', function () {
    if (!weight.value || !height.value) {
        alert('Please enter valid numbers for weight, height, and age.');
        return;
    }
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value) / 100;    // Convert height from cm to m
    const bmi = weightValue / (heightValue * heightValue);
    if (isNaN(bmi)) {
        alert('Please enter valid numbers for weight and height.');
    }
    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }
    result.innerText = bmiCategory
})
// if ((weight) || (height) || isNaN(age)) {
//     alert('Please enter valid numbers for weight, height, and age.');
//     return;
// }

// const bmi = weight / (height * height);
// let bmiCategory = '';
// if (bmi < 18.5) {
//     bmiCategory = 'Underweight';
// } else if (bmi >= 18.5 && bmi < 24.9) {
//     bmiCategory = 'Normal weight';
// } else if (bmi >= 25 && bmi < 29.9) {
//     bmiCategory = 'Overweight';
// } else {
//     bmiCategory = 'Obesity';
// }



