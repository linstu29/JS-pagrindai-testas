/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

/* console.log('==== Task 1 ===');

let totalAmountEur = totalAmount(1, 1000);
let currentCurrency = currencyEur;
let desiredCurrency = currencyUsd;
let currencyRates = {
    USD: 2,
    EUR: 4,
};
function totalAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function convertCurrency(currentCurrency, desiredCurrency, totalAmountEur) {
    let currentRate = currencyRates[currentCurrency];
    let desiredRate = currencyRates[desiredCurrency];


    let totalAmountUsd = totalAmountEur * currentRate;
    let convertedAmount = totalAmountUsd / desiredRate;

    return convertedAmount;
}

let convertedCurrencyAmount = convertCurrency(currentCurrency, desiredCurrency, totalAmountEur);

alert('Converted' + convertedCurrencyAmount);


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/

/*

console.log('==== Task 2 ===');


let totalAmountUsd = totalAmount(1, 1000);
function totalAmount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function convertCurrency(currentCurrency, desiredCurrency, totalAmountUsd) {
    let currentRate = currencyRates[currentCurrency];
    let desiredRate = currencyRates[desiredCurrency];


    let totalAmountUsd = totalAmountUsd * currentRate;
    let convertedAmount = totalAmountEur / desiredRate;

    return convertedAmount;
}

let convertedCurrencyAmount1 = convertCurrency(currentCurrency, desiredCurrency, totalAmountUsd);

alert('Converted' + convertedCurrencyAmount1); */
/*

3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
 
console.log('==== Task 3 ===');

function bmi(weight, height) {
    let bmi = weight / (height ** 2);
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25.0) {
        return 'Normal';
    } else if (bmi <= 30.0) {
        return 'Overweight';
    } else if (bmi > 30) {
        return 'Obese';
    }
}

console.log(bmi(40, 1.65))
console.log(bmi(55, 1.65))
console.log(bmi(75, 1.65))
console.log(bmi(115, 1.65))
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

console.log('==== Task 4 ==='); 


let birthDay = '03/06/2000';
let currentDay = Date.now();
let millisecondBirthday = Date.parse(birthDay);
let ageInMilliseconds = currentDay - millisecondBirthday;

var milliseconds = ageInMilliseconds;
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
let day = hour * 24;
let year = day * 365;
let month = day * 30;



let years = Math.round(milliseconds/year);
let months = years * 12;
let days = years * 365;
let hours = Math.round(milliseconds/hour);
let minutes = Math.round(milliseconds/minute);
let seconds = Math.round(milliseconds/second);


console.log('Age in years:', years);
console.log('Age in Months:', months);
console.log('Age in Days:', days);
console.log('Age in Hours:', hours);
console.log('Age in Minutes:', minutes);
console.log('Age in seconds', seconds);

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

console.log('==== Task 5 ===');


let temperatureInFahrenheit = 77;
let teperatureInCelsius;

//function to convert Fahreinheit to Celsius

function convertToCelsius(Fahreinheit) {
    return (Fahreinheit - 32) * 5 / 9;
}

teperatureInCelsius = convertToCelsius(temperatureInFahrenheit);
console.log(temperatureInFahrenheit = temperatureInFahrenheit + "°F is " + teperatureInCelsius.toFixed(2) + "°C.");

//function to convert Celsius to Fahreinheit

let c = 32;
let f = 0;

f = (c * (9/ 5)) + 32;

console.log('Celcius to Fahreinheit is ' +f);


/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/


console.log('==== Task 6 ===');


let numb = '';
for (let index = 1; index < 10 + 1; index++) {
    numb = numb + index + '-';

}
numb = numb.slice(0, -1);
console.log(numb);
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

console.log('==== Task 7 ===');

let shape = 5;
for (let i = 1; i <= shape; i++) {
    let star = "* ";
    console.log(star.repeat(i));
}
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log('==== Task 8 ===');


let today = new Date();
let christmas = new Date
    (today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear + 1);
}

let one_day = 1000 * 60 * 60 * 24;

console.log(Math.ceil((christmas.getTime() - today.getTime()) / (one_day)) + 'days left until Christmas');

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/ 
console.log('==== Task 9 ===');

let masyvas = ['Tomas', 'Dainius', 'Paulius', 'Jonas'];
console.log(masyvas.join());
console.log(masyvas.join('+'));

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

console.log('==== Task 10 ===');

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
  
    return password;
  }
  
  const randomPassword = generateRandomPassword(12);
  console.log(randomPassword);