let submitBtn = document.getElementById('submit');
let report = document.querySelector('.paragraph');
let bmi = 0;


function takeInput() {
    let userWeight = parseInt(document.getElementById('weight').value);
    let userHeight = parseFloat(document.getElementById('height').value);
    let sqrdHeight = userHeight * userHeight;
    bmi = Math.floor(userWeight / sqrdHeight);
    
    return bmi;
}

submitBtn.addEventListener('click', () => {


    takeInput();


    if(bmi <= 25 && bmi >= 18.5){
    report.innerHTML = `Your BMI is ${bmi} and You're Healthy. Live Your Live Stress Free`;
}
else if(bmi < 18.5 && bmi >= 16){
    report.innerHTML = `Your BMI is ${bmi} and You Have Mild Thinness. Please Take care of Yourself`
}
else if(bmi < 17 && bmi > 16){
    report.innerHTML = `Your BMI is ${bmi} and You have Moderate Thinness. Please Take care of Yourself`
}
else if(bmi < 16){
    report.innerHTML = `Your BMI is ${bmi} and You have Severe Thinness. Please Take care of Yourself`
}
else if(bmi > 25 && bmi <= 30){
    report.innerHTML = `Your BMI is ${bmi} and You are Overweight. Please Take care of Yourself`
}
else if(bmi > 30 && bmi <= 35){
    report.innerHTML = `Your BMI is ${bmi} and You are in Obese Class I. Please Take care of Yourself`
}
else if(bmi > 35 && bmi <= 40){
    report.innerHTML = `Your BMI is ${bmi} and You are in Obese Class II. Please Take care of Yourself`
}
else{
    report.innerHTML = `Your BMI is ${bmi} and You are in Obese Class III. Please Take care of Yourself`
}

});




