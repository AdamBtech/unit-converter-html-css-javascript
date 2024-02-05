/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputData = document.getElementById("convertInput");
const convertButton = document.querySelector("#convertBtn");
const KiloPoud = document.querySelector("#KiloPound");
const MeterFeet = document.querySelector("#MeterFeet");
const LiterGallon = document.querySelector("#LitersGallon");
let FeettoMeters = "";
let MeterstoFeet = "";
let LiterstoGallons = "";
let GallonstoLiters = "";
let KilostoPounds = "";
let PoundstoKilos = "";
let capturedValue = "";

convertButton.addEventListener("click", function(){
        capturedValue = Number(inputData.value);
        FeettoMeters = capturedValue / 3.281;
        MeterstoFeet = capturedValue * 3.281;
        LiterstoGallons = capturedValue / 0.264;
        GallonstoLiters = capturedValue * 0.264;
        KilostoPounds = capturedValue * 2.204;
        PoundstoKilos = capturedValue / 2.204;
        console.log(inputData.value);
        console.log(capturedValue);
        console.log(FeettoMeters);

        Convert(capturedValue);
        
      
        
})

function Convert(input){
    KiloPoud.textContent = `${capturedValue} pounds = ${KilostoPounds.toFixed(2)} kilos | ${capturedValue} kilos = ${FeettoMeters.toFixed(2)} pounds`
    MeterFeet.textContent = `${capturedValue} feet = ${FeettoMeters.toFixed(2)} meters | ${capturedValue} meters = ${MeterstoFeet.toFixed(2)} feet`
    LiterGallon.textContent = `${capturedValue} gallons = ${GallonstoLiters.toFixed(2)} liters | ${capturedValue} liters = ${LiterstoGallons.toFixed(2)} gallons`


}
