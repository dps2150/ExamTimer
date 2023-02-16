//examtimers.js



function timer() {   
	'use strict';
	var check1 = document.getElementById('number1').value;
	var check2 = document.getElementById('number2').value;
	if ( check1 == "" || check1 == null || check2 == "" || check2 == null ) { stoptimer();
	return false; }
	
  document.getElementById("in").style.display="none";
  document.getElementById("out").style.display="block";
  document.getElementById("cup").style.display="block";
  
	var time;
	var c = 2;
	var seconds = 0, minutes = 0;
	var tdn = 60;
    
	var number1 = document.getElementById('number1').value;
  var number2 = document.getElementById('number2').value;		
		
	

	var pf1 = parseFloat(number1);
	var cd1 = pf1-1;
	
  
	var pf2 = parseFloat(number2);
	//var out = pf2+1;
	time = pf1 / pf2 * 60000;

	document.getElementById("pace").innerHTML = 1;
	document.getElementById("cup").innerHTML = "&uarr;" + "00:00";
	document .getElementById("cdown").innerHTML = "&darr;" + (cd1 > 9  ? cd1 : "0" + cd1) + ":60";
	
	guts();
	
function guts() {
	
var pace = setInterval(function(){pacer();},time);
function pacer() {
	
    document.getElementById("pace").innerHTML = c;
    c = c + 1;
   
   if(c > pf2) {
		clearInterval(pace);
				
	}

}

var countup = setInterval(up,1000);
function up() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
document.getElementById("cup").innerHTML = "&uarr;" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
if (minutes >= pf1){
	clearInterval(countup);
	clearInterval(countdown);
	document .getElementById("cdown").innerHTML = "&darr;" + "00:00";
	}
}

var countdown = setInterval(down,1000);
function down() {
    tdn--;
    if (tdn < 0) {
        tdn = 59;
        cd1--;
    }
document.getElementById("cdown").innerHTML = "&darr;" + (cd1 > 9  ? cd1 : "0" + cd1)  + ":" + (tdn > 9 ? tdn : "0" + tdn);
   
}


document.getElementById('stop').onclick = stoptimer;
document.getElementById('pause').onclick = pausetimer;
document.getElementById('resume').onclick = resume;


function stoptimer() {
    clearInterval(pace);
	clearInterval(countup);
	clearInterval(countdown);
	document.getElementById("cup").innerHTML = "&uarr;" + "00:00";
	document .getElementById("cdown").innerHTML = "&darr;" + (cd1 > 9  ? cd1 : "0" + cd1) + ":60"; 
	document.getElementById("in").reset();
	document.getElementById("in").style.display="block";
  	document.getElementById("out").style.display="none";
	
}
 

function pausetimer() {
	  document.getElementById("pause").style.display="none";
  document.getElementById("resume").style.display="block";

  	 clearInterval(pace);
	clearInterval(countup);
	clearInterval(countdown);

}

function resume() {
	document.getElementById("pause").style.display="block";
  	document.getElementById("resume").style.display="none";

 guts(); 
}


}








return false;
		
}

	

function init() {    //runs all functions on load 
	'use strict';
	

	document.getElementById('start').onclick = timer;

}

window.onload = init;	




