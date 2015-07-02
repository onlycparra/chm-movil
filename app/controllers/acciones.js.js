
var win1 = Titanium.UI.createWindow({  
    title:'PIA: Acciones <Seleccion de carita>',
    backgroundColor:'#fff',
    layout : "horizontal"
});
 
var button1 = Titanium.UI.createButton({
   //title: 'bueno',
   backgroundImage: '/acciones/images/Bueno.png',
   backgroundSelectedColor:'black',
   top: 100,
   bottom:100,
   left:70,
   width: 100,
   height: 100
});

var button2 = Titanium.UI.createButton({
   //title: 'malo',
   backgroundImage: '/acciones/images/Malo.png',
   backgroundSelectedColor:'black',
   top: 100,
   bottom:100,
   left:10,
   width: 100,
   height: 100
});

var loaderIndex = Math.floor(Math.random()*20);

var loaderImage = Ti.UI.createImageView({
 	image: '/acciones/images/frame' + loaderIndex + '.png',
 	top: 20, 
 	left:20,
   // width: '70%',
   // height: '70%'
   width: 300,
   height: 300
});
 
win1.add(loaderImage);  
win1.add(button1);
win1.add(button2);

var player = Ti.Media.createSound({url:"/images/error.wav"});

button1.addEventListener('click',function(e) 
{

index = Alloy.createController('index');


var resultado = parImpar(loaderIndex);
var resultado2 = parImpar2(loaderIndex);

var view = Ti.UI.createView({
    top : 0,
    height : 150,
    width: 200,
 
});

var image = Ti.UI.createImageView({
    image : '/acciones/images/'+resultado2+'.png',
    height : "100dp",
    width : "100dp",
    top : "10dp"
});
 
var lbl1 = Ti.UI.createLabel({
    text : " # "+loaderIndex+" # "+resultado,
    top : "100dp",
    left : '35dp',
    bottom : '40dp'
});

view.add(image);
view.add(lbl1);
var dialog = Ti.UI.createAlertDialog({
    androidView : view,
    ok : 'Siguiente',
   }).show();

//alert(" # "+loaderIndex+" # "+resultado);
 
function parImpar(loaderIndex) {
  if(loaderIndex % 2 == 0) {
    return "MUY BIEN!!";
  }
  else {
    return "CONTINUA CON EL SIGUIENTE";
    player.play();
  }
}

function parImpar2(loaderIndex) {
  if(loaderIndex % 2 == 0) {
    return "Bueno";
  }
  else {
    return "Malo";
  }
}
}); 


button2.addEventListener('click',function(e)
{

index = Alloy.createController('index');


var resultado = parImpar(loaderIndex);
var resultado2 = parImpar2(loaderIndex);

var view = Ti.UI.createView({
    top : 0,
    height : 150,
    width: 200,
 
});

var image = Ti.UI.createImageView({
    image : '/acciones/images/'+resultado2+'.png',
    height : "100dp",
    width : "100dp",
    top : "10dp"
});
 
var lbl1 = Ti.UI.createLabel({
    text : " # "+loaderIndex+" # "+resultado,
    top : "100dp",
    left : '35dp',
    bottom : '40dp'
});

view.add(image);
view.add(lbl1);
var dialog = Ti.UI.createAlertDialog({
    androidView : view,
    ok : 'Siguiente',
   }).show();

//alert(" # "+loaderIndex+" # "+resultado);
 
function parImpar(loaderIndex) {
  if(loaderIndex % 2 == 0) {
    return "CONTINUA CON EL SIGUIENTE";
  }
  else {
    return "MUY BIEN!!";
  }
}

function parImpar2(loaderIndex) {
  if(loaderIndex % 2 == 0) {
    return "Malo";
  }
  else {
    return "Bueno";
  }
}
}); 



win1.open();