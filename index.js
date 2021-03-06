//Mobile device JS detector credits : https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if(isMobile.any()) {
  var txtintro = "Analysing Device . . . Please, touch screen."
} else{
var txtintro = "Analysing Device . . .  Please, press enter.";
}

var check = 0;

function intro() {
	document.getElementById('intro').style.display = 'block';
	document.getElementById('intro').style.backgroundColor = "black";
	document.getElementById('suite').style.display = 'none';
	display = document.getElementById('intro');

	for(var i = 0, l = txtintro.length; i < l; i++) {
	(function(i) {
		setTimeout(function() {
			display.innerHTML += txtintro.charAt(i);
			}, i * 75);
		}(i));
	}	
}

document.querySelector('body').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    var fnum = Math.floor(Math.random() * 11);
    var snum = Math.floor(Math.random() * 11);
    var ansnum = fnum + snum;
    if (key === 13 && check == 0) {
      var question = prompt("Human? Please answer this : \n"+fnum+"+"+snum+" =");
    	if(question == ansnum){
	    	document.getElementById('intro').style.display = 'none';
    		document.getElementById('suite').style.display = 'block';
    		document.body.style.backgroundImage = "url(./img/ep_naturalwhite.png) repeat";
        document.body.style.cursor = "default";
        check = 1;
    	}
    	else alert('Verification failed. Please, try again !!');
    }
});

document.querySelector('body').addEventListener('click', function () {
    var fnum = Math.floor(Math.random() * 11);
    var snum = Math.floor(Math.random() * 11);
    var ansnum = fnum + snum;
    if (check == 0) {
    var question = prompt("Human? Please answer this : \n"+fnum+"+"+snum+" =");
        if(question == ansnum){
          document.getElementById('intro').style.display = 'none';
          document.getElementById('suite').style.display = 'block';
          document.body.style.backgroundImage = "url(./img/ep_naturalwhite.png) repeat";
          document.body.style.cursor = "default";
          check = 1;
        }  
      else alert('Verification failed. Please, try again !!');
    }
});


function writetitle(txt){
	document.getElementById('title').style.display = ('block');
	document.getElementById('title').innerHTML = txt;
}

function writecorps(txt) {
	document.getElementById('corps').innerHTML = txt;
  document.getElementsByClassName('middle').style.display = "none"; 
}

function html() {
  var elem = document.getElementById("barone");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function css() {
  var elem2 = document.getElementById("bartwo");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 90) {
      clearInterval(id);
    } else {
      width++; 
      elem2.style.width = width + '%'; 
      elem2.innerHTML = width * 1  + '%';
    }
  }
}
function js() {
  var elem3 = document.getElementById("barthree");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 50) {
      clearInterval(id);
    } else {
      width++; 
      elem3.style.width = width + '%'; 
      elem3.innerHTML = width * 1  + '%';
    }
  }
}
function php() {
  var elem4 = document.getElementById("barfour");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++; 
      elem4.style.width = width + '%'; 
      elem4.innerHTML = width * 1  + '%';
    }
  }
}
function sql() {
  var elem5 = document.getElementById("barfive");   
  var width = 0;
  var id = setInterval(frame, 50);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++; 
      elem5.style.width = width + '%'; 
      elem5.innerHTML = width * 1  + '%';
    }
  }
}


function changeBg(){
var y = document.getElementsByClassName("bar");
var i;
for (i = 0; i < y.length; i++) {
  y[i].style.backgroundColor = 'rgb(55,69,77)';
  }
 }



/*
*************Test for regroup bar*****************

var skillBar = ["barone","bartwo","barthree","barfour","barfive"];
var percentBar = [80, 80, 50, 30, 30];

function skill() {
  for (var j = 0; j < skillBar.length; j++) {
    var elem = document.getElementById(skillBar[j]);   
    console.log(skillBar[j]);
    console.log(percentBar[j]);
    var width = 0;
    var id = setInterval(frame(j), 50);
    function frame() {
      if (width >= percentBar[j]) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        elem.innerHTML = width * 1  + '%';
      }    
    }
  }
}  
*/
