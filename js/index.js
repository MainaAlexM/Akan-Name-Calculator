function formReset(){
    document.getElementById('form-data').reset();
}

function evaluation(){
    document.getElementById('birthDay')
    var day = document.getElementById("birthDay").value;
    var gender = document.getElementById("gender").value;
    var outputMessage;
    alert(day);

        // Get the day index (0-6) 0 = sunday
    const d = new Date(day);    // Date(01 June 2010)
    let birthDay = d.getDay();
    
        // Determine the exact day using index
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let exactDay = days[birthDay];
    alert(typeof exactDay);
    
        // Use index to determine the Arkan name
    const maleAkans = ["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleAkans = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    
    // document.getElementById("result").innerHTML = "You were born on " + exactDay;
    
        // Gender evaluation logic
    if (gender == "male" && typeof d != "undefined"){
      let akan = maleAkans[birthDay];
      outputMessage = "You are male, born on " + exactDay + ". Your akan Name is " + akan + ".";
    } 
    else if (gender == "female" && typeof d != "undefined"){
      let femaleAkan = femaleAkans[birthDay];
      outputMessage = "You are female, born on " + exactDay + ". Your akan Name is " + femaleAkan + ".";
    }
    else if (typeof exactDay === "undefined" || gender == "default"){
        outputMessage = "Please select your gender and select a valid date";
    }

        // Display the Result
    document.getElementById("result").innerHTML = outputMessage;

    formReset();
}
