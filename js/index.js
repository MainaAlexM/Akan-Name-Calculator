function formReset(){
    document.getElementById("form_data").requestFullscreen();
}

function evaluation(){
    var day = document.getElementById("birthDay").value;

    const d = new Date(day);
    let birthDay = d.getDay();
    alert(birthDay);

}

// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const d = new Date();
// let day = weekday[d.getDay()];




