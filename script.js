let dobInput = document.getElementById('dob');
let calculatBtn = document.getElementById('calculate-btn');
let resultDiv = document.getElementById('result');
calculatBtn.addEventListener('click', ()=>{
    let dob = new Date(dobInput.value);
    let ageInMs = Date.now() - dob.getTime();
    let ageDate = new Date(ageInMs);
    let age = Math.abs(ageDate.getUTCFullYear()-1970);
    let month = Math.abs(ageDate.getUTCMonth()-10);

    resultDiv.innerHTML= `Your age is ${age} years,${month}.`;
});