 let femalenames =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",]
 let daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 let malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
 
function onsubmit(){
    let month=parseInt(document.getElementbyId)("month").value;
    let date=parseInt(document.getElementbyId)("date").value;
    let year=parseInt(document.getElementbyId)("year").value;

if(date=="" || month=="" || year==""){
    alert("Enter your details") 
    return false;
}
if(intmonth<=0 || intmonth>12){
    alert("Inavid month");
}
if(intyear>2021){
    alert("Invalid year");
}
if(intdate<=0 || intdate>31){
    alert("Invalid date")
}


}