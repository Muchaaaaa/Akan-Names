
    let daysoftheweek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let maleNames=["Kwasi","Kwado","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    
  
  function onsubmit(){
    let gender=parseInt(document.getElementbyId)("gender").value;
    let month=parseInt(doucument.getElementbyId)("month").value;
    let day=parseInt(document.getElementbyId)("day").value;
    let year=parseInt(document.getElementbyId)("year").value;
  

    if(month==""|| year==""|| day==""){
      alert("Enter your details") return "false"
    }
    
    if(intmonth>12 || intmonth<=0){
      alert(Invalid month)
    }
    if(intyear>2021){
      alert(Invalid year)
    }
    if(intday>31 || intday<=0){
      alert(Invalid day)
    }


    let DD=parseInt(date);
    let MM=parseInt(month);
    let CC=parseInt(year.slice(0,2));
    let YY=parseInt(year.slice(2,4));

    let dayoftheweek= ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    let day=math.round(dayoftheweek);

    if(gender==="Female"){
      akanname=femalenames[day]
      alert("Your Akan name is "+akanname)
    }
    if(gender==="Male"){
      akanname=malenames[day]
      alert("YOur Akan name is "+akanname)
    }





  
  