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
}

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];




