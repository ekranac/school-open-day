function getTime(){
    var d = new Date();

    var h = d.getHours();
    var m = d.getMinutes();

    document.getElementById("time-h").innerHTML = h;
    
    if(m==0)
    {
        document.getElementById("time-m").innerHTML = m + "0";
    }
    else if(m <= 9)
    {
        document.getElementById("time-m").innerHTML = "0" + m;
    }
    else
    {
        document.getElementById("time-m").innerHTML = m;
    }
    
    setTimeout(getTime, 1000);
}


$(document).ready(function(){
    
    var title = document.getElementById("myModalLabel");
    var content = document.getElementById("myModalBody");
    
    $("#close-button").mouseenter(function(){
        $("#close-button").click();
    });
    
    $("#close-x").mouseenter(function(){
        $("#close-x").click();
    });
    
    
    
    $("#opis").mouseenter(function(){        
        $("#opis").click();
        title.innerHTML="Opis programov";
        content.innerHTML="Opis programov...";
    });
    
    $("#dejavnosti").mouseenter(function(){        
        $("#dejavnosti").click();
        title.innerHTML="Interesne dejavnosti";
        content.innerHTML="Interesne dejavnosti...";
    });
    
    $("#projektni").mouseenter(function(){
        title.innerHTML="Projektni teden";
        content.innerHTML="Projektni teden...";
        $("#projektni").click();
    });
    
    $("#praksa").mouseenter(function(){
        title.innerHTML="Praksa";
        content.innerHTML="Praksa...";
        $("#praksa").click();
    });
    
    $("#prihodnost").mouseenter(function(){
        title.innerHTML="Prihodnost";
        content.innerHTML="Prihodnost...";
        $("#prihodnost").click();
    });
    
    $("#predmetnik").mouseenter(function(){
        title.innerHTML="Predmetnik";
        content.innerHTML="Predmetnik...";
        $("#predmetnik").click();
    });
    
    
    $("#qr-button").mouseenter(function(){
        $("#qr-button").attr("src","img/scan_me.png");
    });
    $("#qr-button").mouseleave(function(){
        $("#qr-button").attr("src","img/qrcode.png");
    });
    
    $("#credits").mouseenter(function(){
        title.innerHTML="Made By";
        content.innerHTML="Credits...";
        $("#credits").click();
    });
});