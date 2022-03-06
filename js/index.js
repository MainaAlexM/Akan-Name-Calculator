function formReset(){
    document.getElementById("form_data").requestFullscreen();
}

function evaluation(){
    var day = document.getElementById("birthDay").value;
    var sex = document.getElementById("gender").value;
    alert(sex);

    const d = new Date(day);
    let birthDay = d.getDay();
    alert(birthDay);

    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let exactDay = days[birthDay];
    alert(exactDay);

        // akan Names
    const maleAkans = ["Kwasi"," Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleAkans = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

            // Aka determination Based on gender
    if (sex = "male"){
    	let akan = maleAkans[birthDay];
      alert("You are male and your akan Name is " + akan);
    } else if (sex = "female"){
    	let akan = femaleAkans[birthDay];
    	alert("You are female and your akan Name is " + akan);
    }

        // Name evaluation logic

        if (gender = "female"){
            let femaleAkan = femaleAkans[birthDay];
            alert("You are female and your akan Name is " + femaleAkan);
          }
             else if (gender = "male"){
            let akan = maleAkans[birthDay];
            alert("You are male and your akan Name is " + akan);
          } 
          else{
          alert("Please select your gender and select a valid date");
          }
      
}

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];




