/*
function doClick(e) {
	drag = Alloy.createController('index');
}
*/

$.index.open();


var win = Ti.UI.createWindow({
	backgroundColor:'white',
	height: '100%',
	width: '100%',
	fullscreen: true,
	exitOnClose: true
});

titulo = Ti.UI.createLabel({
		  color: 'black',
		  font: { fontSize:25 },
		  shadowColor: '#000099',
		  text: 'Encuentra la situeta correspondiente',
		  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		  top: 10,
		  width: Ti.UI.SIZE, height: Ti.UI.SIZE
		});
win.add(titulo);



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var enlace1;
var enlace2;
var enlace3;
var enlace4;
var enlace5;
var enlace6;
var enlace7;
var enlace8;
var enlace9;

var dir = '/images/siluetas/alegria';
var dir_2 = '/images/siluetas_imagen/alegria';
var indice = [1,2,3,4,5,6,7,8,9,10,11,12];
var indice2 = [1,2,3,4,5,6,7,8,9,10,11,12];
shuffle(indice);
shuffle(indice2);




var image1 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[0]+'.png',
		    enlace1: indice[0],
		    left:'5%', top:'20%',
		    width:'15%', height:'25%'
		  });
//enlace1: ''+dir+''+indice[0]+'.png';

var image2 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[1]+'.png',
		    left:'20%', top:'20%',
		    width:'15%', height:'25%'
		  });
		  
var image3 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[2]+'.png',
		    left:'35%', top:'20%',
		    width:'15%', height:'25%'
		  });
		  
var image4 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[3]+'.png',
		    left:'50%', top:'20%',
		    width:'15%', height:'25%'
		  });
		  
var image5 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[4]+'.png',
		    left:'5%', top:'55%',
		    width:'15%', height:'25%'
		  });
		  
var image6 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[5]+'.png',
		    left:'20%', top:'55%',
		    width:'15%', height:'25%'
		  });
		  
var image7 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[6]+'.png',
		    left:'35%', top:'55%',
		    width:'15%', height:'25%'
		  });
		  
var image8 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir+''+indice[7]+'.png',
		    left:'50%', top:'55%',
		    width:'15%', height:'25%'
		  });

var image9 = Ti.UI.createImageView({
			id: ''+dir,
		    image: ''+dir_2+''+indice2[0]+'.png',
		    enlace9: indice2[0],
		    left:'70%', top:'35%',
		    width:'30%', height:'40%'
		  });
		  

Titanium.API.info("enlace1:" + indice[0] );
Titanium.API.info("enlace9:" +indice2[0] );


		  
win.add(image1);
win.add(image2);
win.add(image3);
win.add(image4);
win.add(image5);
win.add(image6);
win.add(image7);
win.add(image8);
win.add(image9);


image1.addEventListener('click',function(e){
   
   if(indice[0] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 

image2.addEventListener('click',function(e){
   
   if(indice[1] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 

image3.addEventListener('click',function(e){
   
   if(indice[2] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 

image4.addEventListener('click',function(e){
   
   if(indice[3] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
});

image5.addEventListener('click',function(e){
   
   if(indice[4] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 

image6.addEventListener('click',function(e){
   
   if(indice[5] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 
 
image7.addEventListener('click',function(e){
   
   if(indice[6] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 

image8.addEventListener('click',function(e){
   
   if(indice[7] == indice2[0]){
			alert("¡FELICIDADES!");
		}else{
			alert("Intentalo de nuevo ");
	}	
}); 



win.open();
