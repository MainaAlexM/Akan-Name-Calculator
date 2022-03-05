function formReset(){
    document.getElementById("form_data").requestFullscreen();
}

function nameEvaluation(){
    var day = document.getElementById("birthDay").value;

    const d = new Date(day);
    let birthDay = d.getDate();

    document.getElementById("result").innerHTML = "Your day is" + birthDay;

}






