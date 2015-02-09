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
        //$("#opis").click();
        title.innerHTML="<h3>Opis programov</h3>";
        content.innerHTML="<h4>RAČUNALNIKAR (3. letni program)</h4><p>V programu je predpisanih šest obveznih strokovnih modulov. Za izbrano področje opravi še en izbirni strokovni modul ter en modul, ki ga ponudi šola. Pridobi poglobljena in specifična znanja ter pridobi strokovni naziv izobrazbe (priloga k spričevalu):</p><ul><li>vzdrževalec računalniške strojne opreme</li><li>vzdrževalec programske opreme.</li><li>PTI (3+2)- pridobi končni naziv 'tehnik računalništva'</ul><hr><h4>TEHNIK RAČUNALNIŠTVA (4. letni program)</h4><p>Tehnik računalništva lahko osvoji poglobljena in specifična znanja iz različnih področij računalništva. Lahko izbira med naslednjimi področji ter pridobi strokovni naziv izobrazbe (priloga k spričevalu):</p><ul><li>skrbnik/skrbnica komunikacijskih sistemov</li><li>skrbnik/skrbnica informacijskih sistemov</li><li>koder/koderka algoritmov</li><li>izdelovalec/izdelovalka spletnih strani.</li></ul><img style='width:100%;' src='img/banner.png'>";
    });
    
    $("#dejavnosti").mouseenter(function(){        
        //$("#dejavnosti").click();
        title.innerHTML="<h3>Interesne dejavnosti</h3>";
        content.innerHTML="Interesne dejavnosti...";
    });
    
    $("#projektni").mouseenter(function(){
        title.innerHTML="<h3>Projektni teden</h3>";
        content.innerHTML="<p>V šolskem letu se dijaki 2. letnika programa srednjega strokovnega izobraževanja tehnik računalništva in elektrotehnik udeležijo projektnega tedna, ki ga organiziramo s pomočjo Centra šolskih in obšolskih dejavnosti.</p><p>Dijaki v enem tednu spoznajo učne vsebine s področja športa, naravoslovja in ekologije.</p><p>Dijaki na projektnem tednu ponavadi s področja športa odidejo na pohod, plavanje, streljanje z lokom, igre z žogo, hojo v gore ter kolesarjenje.</p><p>Na področju naravoslovja imajo orientacijski tek, spoznavanje okolja ter živali. Področje ekologije vsebuje ločevanje odpadkov ter ohranjanje čistote narave.</p><img style='width:100%;' src='img/projektni.jpg'>";
        //$("#projektni").click();
    });
    
    $("#praksa").mouseenter(function(){
        title.innerHTML="<h3>Praksa</h3>";
        content.innerHTML="Praksa...";
        //$("#praksa").click();
    });
    
    $("#prihodnost").mouseenter(function(){
        title.innerHTML="<h3>Prihodnost</h3>";
        content.innerHTML="<p>Dijaki, ki zaključijo program srednjega strokovnega izobraževanja SSI ali PTI tehnik računalništva in uspešno opravijo poklicno maturo, se lahko vpišejo na vse višješolske in visokošolske programe. Če pa opravijo peti predmet na poklicni maturi, se lahko opišejo tudi na določene univerzitetne programe.</p><p>Glede na specializacijo in kompetence, ki jih dijak pridobi po končanem izobraževanju, je možnosti za zaposlitev več.</p><p>Dolenjska regija ima močno razvito industrijo, zato so profili vzdrževalcev strojev in opreme zelo iskani. Ker je v proizvodnji vse več elementov robotike in avtomatizacije, so tudi tu potrebni ljudje, ki znajo upravljati, nadzirati, vzdrževati in nadgrajevati strojno in programsko opremo.</p><img style='width:100%;' src='img/future.jpg'>";
        //$("#prihodnost").click();
    });
    
    $("#predmetnik").mouseenter(function(){
        title.innerHTML="<h3>Predmetnik</h3>";
        content.innerHTML="Predmetnik...";
        //$("#predmetnik").click();
    });
    
    
    
    
    $("#qr-button").mouseenter(function(){
        $("#qr-button").attr("src","img/scan_me.png");
    });
    $("#qr-button").mouseleave(function(){
        $("#qr-button").attr("src","img/qrcode.png");
    });
    
    $("#credits").mouseenter(function(){
        title.innerHTML="<h3>Made By</h3>";
        content.innerHTML="Credits...";
        //$("#credits").click();
    });
    
    $("#troll").mouseenter(function(){
        title.innerHTML="<h3>Memes For You</h3>";
        content.innerHTML="<img style='width:100%;' src='img/meme_1.jpg'>";
        //$("#troll").click();
    });
});