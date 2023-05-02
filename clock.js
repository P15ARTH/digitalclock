function showTime(){

    var date = new Date();
    hours = date.getHours(); // 0 - 23
    minutes = date.getMinutes(); // 0 - 59
    second = date.getSeconds(); // 0 - 59
    peroid = "AM";
    
    if(hours == 0){
        hours = 12;
    }
    
    if(hours > 12){
        hours = hours - 12;
        peroid = "PM";
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    second = (second < 10) ? "0" + second : second;
    
    const h = hours;
    const m = minutes;
    const s = second;
    const p = peroid;

    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("second").innerText = s;
    document.getElementById("peroid").innerText = p;


    setTimeout(showTime,1000);

}