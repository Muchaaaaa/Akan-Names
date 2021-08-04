let femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",]
let daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

 function declare() {
    
    let month= document.getElementbyId("month1").value;
    
    let date= document.getElementbyId("date1").value;
    
    let year=  document.getElementbyId("year1").value;

    function declare(){
        if (date === "") {
            alert("Enter details")
        }
        else{ getdetails()
    }

    
    
}}
var getdetails=function(){
    let inputyear=document.getElementbyId("year1").value;
    let intyear=parseInt(inputyear)

    let inputdate=document.getElementbyId("date1").value;
    let intdate=parseInt(inputdate)

    let inputmonth=document.getElementbyId("month1").value;
    let intmonth=parseInt(inputmonth)




    if (intmonth<= 0 || intmonth> 12) {
        alert("Invalid month");
    }
    if (intyear>2021) {
        alert("Invalid year");
    }
    if (intdate<= 0 || intdate>31) {
        alert("Invalid date");
    }


let DD = parseInt(inputdate);
let CC = parseInt(inputyear.slice(0, 2));
let YY = parseInt(inputyear.slice(2, 4));
let MM = parseInt(inputmonth);
let gender=document.getElementById("gender").value

let dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
let day = Math.round(dayoftheweek);

if (gender === "Female") {
    akanName = femalenames[day];
    alert("Your Akan name is " + akanName)
}
else if (gender === "Male") {
    akanName = malenames[day]
    alert("Your Akan name is " + akanName)
}}