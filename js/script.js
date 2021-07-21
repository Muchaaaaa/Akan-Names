let femalenames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",]
let daysoftheweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let malenames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]

function onsubmit() {
    let month = document.getElementbyId("month").value;
    let m = parseInt(month)
    let date = document.getElementbyId("date").value;
    let d = parseInt(date)
    let year = document.getElementbyId("year").value;
    let y = parseInt(year)

    if (date== "" || month== "" || year== "") {
        alert("Enter your details")
        return false;
    }
    else{ getdetails()
    }
}
var getdetails=function(){
    let inputyear=document.getElementbyId("year").value;
    let intyear=parseInt(inputyear)

    let inputdate=document.getElementbyId("date").value;
    let intdate=parseInt(inputdate)

    let inputmonth=document.getElementbyId("month").value;
    let intmonth=parseInt(inputmonth)
}



    if (month<= 0 || month> 12) {
        alert("Invalid month");
    }
    if (year>2021) {
        alert("Invalid year");
    }
    if (date<= 0 || date>31) {
        alert("Invalid date");
    }


let DD = parseInt(date);
let CC = parseInt(year.slice(0, 2));
let YY = parseInt(year.slice(2, 4));
let MM = parseInt(month);

let dayoftheweek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
let day = math.round(dayoftheweek);

if (gender === "Female") {
    akanName = femalenames[date]
    alert("Your Akan name is " + akanName)
}
else if (gender === "Male") {
    akanName = malenames[date]
    alert("Your Akan name is " + akanName)
}