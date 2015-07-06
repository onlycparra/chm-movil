//$.title.text=Alloy.Globals.aux_categoria+" - "+Alloy.Globals.aux_juego;
 
var view_header = Ti.UI.createView({
    backgroundColor:'white', // Should see no blue
    height: "15%",
    layout: 'vertical',
});
var view_body = Ti.UI.createView({
    height: "70%",
    width: Ti.UI.SIZE
    //layout: 'horizontal'
});
var view_body_left = Ti.UI.createView({
    layout: 'horizontal',
    left: 0,
    width: Alloy.CFG.leftWidth,
    height: Ti.UI.FILL
});
var view_body_right = Ti.UI.createView({
    layout: 'vertical',
    //right: 0,
    left: Alloy.CFG.leftWidth,
    width: "20%",
    height: Ti.UI.FILL
});
var view_footer = Ti.UI.createView({
    //backgroundImage: '/images/body.png',
    height: "15%",
    layout: 'vertical'
});


Ti.Gesture.addEventListener('orientationchange', function() {
    var width = Ti.Platform.displayCaps.platformWidth * 0.8;
    view_body_left.width = width;
    view_body_right.left = width;
});


var title=Titanium.UI.createLabel({
	color: '#000',
    text: Alloy.Globals.aux_categoria+" - "+Alloy.Globals.aux_juego,
    top: "20%",
    width:"auto", 
	height:"auto",
    textAlign: 'center',
});
view_header.add(title);

// body
var button=[];
if(Alloy.Globals.aux_categoria=="Habilidades Sociales"){
	if(Alloy.Globals.aux_juego=="Colorea"){
		for (var i=0; i < 4; i++){
			if(Ti.App.Properties.getBool("HS_colorea"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Selecciona"){
		for (var i=0; i < 16; i++){
			if(Ti.App.Properties.getBool("HS_selecciona"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Acciones"){
		for (var i=0; i < 18; i++){
			if(Ti.App.Properties.getBool("HS_acciones"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Gestos"){
		for (var i=0; i < 15; i++){
			if(Ti.App.Properties.getBool("HS_gestos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
}
if(Alloy.Globals.aux_categoria=="Tolerancia a la Frustración"){
	if(Alloy.Globals.aux_juego=="Siluetas"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("TF_siluetas"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Encúentralos"){
		for (var i=0; i < 10; i++){
			if(Ti.App.Properties.getBool("TF_encuentralos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Objetos"){
		for (var i=0; i < 11; i++){
			if(Ti.App.Properties.getBool("TF_objetos"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Diferencias"){
		for (var i=0; i < 16; i++){
			if(Ti.App.Properties.getBool("TF_diferencias"+i)==false){
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#A4A4A4"
				});	
			}
			else{
				button[i] = Titanium.UI.createButton({
				   title: "Nivel "+(i+1),
				   height: "90",
				   top: "6%",
				   left: "6%",
				   width: "90",
				   backgroundColor: "#81F79F"
				});
			}
			view_body_left.add(button[i]);
    	}
	}
	//
	if(Alloy.Globals.aux_juego=="Memorice"){
		if(Ti.App.Properties.getBool("TF_memorice"+i)==false){
			button[i] = Titanium.UI.createButton({
			   title: "Nivel 1",
			   height: "90",
			   top: "6%",
			   left: "6%",
			   width: "90",
			   backgroundColor: "#A4A4A4"
			});	
		}
		else{
			button[i] = Titanium.UI.createButton({
			   title: "Nivel 1",
			   height: "90",
			   top: "6%",
			   left: "6%",
			   width: "90",
			   backgroundColor: "#81F79F"
			});
		}
		view_body_left.add(button[i]);
    }
}
var button_GD=Titanium.UI.createButton({
			   title: "Guardar",
			   top: "6%",
			   height: "50",
			   width: "100",
			   backgroundColor: "#9DF"
			});
var button_AT=Titanium.UI.createButton({
			   title: "Atrás",
			   top: "50%",
			   height: "50",
			   width: "100",
			   backgroundColor: "#9DF"
			});
//for (var i=0; i < button.length; i++) {
	button[i].addEventListener('click',function(e){
		if(button[i].backgroundColor=="#A4A4A4"){
			button[i].backgroundColor="#81F79F";
		}
		else{
			button[i].backgroundColor="#A4A4A4";
		}  
	});
//}
button_GD.addEventListener('click',function(e)
{  
	for (var i=0; i < button.length; i++) {
		if(Alloy.Globals.aux_categoria=="Habilidades Sociales"){
			if(Alloy.Globals.aux_juego=="Colorea"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("HS_colorea"+i);
					Ti.App.Properties.setBool("HS_colorea"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("HS_colorea"+i);
					Ti.App.Properties.setBool("HS_colorea"+i,true);
				}	
			}
			if(Alloy.Globals.aux_juego=="Selecciona"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("HS_selecciona"+i);
					Ti.App.Properties.setBool("HS_selecciona"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("HS_selecciona"+i);
					Ti.App.Properties.setBool("HS_selecciona"+i,true);
				}	
			}
			if(Alloy.Globals.aux_juego=="Acciones"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("HS_acciones"+i);
					Ti.App.Properties.setBool("HS_acciones"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("HS_acciones"+i);
					Ti.App.Properties.setBool("HS_acciones"+i,true);
				}	
			}
			if(Alloy.Globals.aux_juego=="Gestos"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("HS_gestos"+i);
					Ti.App.Properties.setBool("HS_gestos"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("HS_gestos"+i);
					Ti.App.Properties.setBool("HS_gestos"+i,true);
				}	
			}
			if(Alloy.Globals.aux_juego=="Gestos"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("HS_gestos"+i);
					Ti.App.Properties.setBool("HS_gestos"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("HS_gestos"+i);
					Ti.App.Properties.setBool("HS_gestos"+i,true);
				}	
			}
		}
		if(Alloy.Globals.aux_categoria=="Tolerancia a la Frustración"){
			if(Alloy.Globals.aux_juego=="Siluetas"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("TF_siluetas"+i);
					Ti.App.Properties.setBool("TF_siluetas"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("TF_siluetas"+i);
					Ti.App.Properties.setBool("TF_siluetas"+i,true);
				}
			}
			if(Alloy.Globals.aux_juego=="Encúentralos"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("TF_encuentralos"+i);
					Ti.App.Properties.setBool("TF_encuentralos"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("TF_encuentralos"+i);
					Ti.App.Properties.setBool("TF_encuentralos"+i,true);
				}
			}
			if(Alloy.Globals.aux_juego=="Objetos"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("TF_objetos"+i);
					Ti.App.Properties.setBool("TF_objetos"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("TF_objetos"+i);
					Ti.App.Properties.setBool("TF_objetos"+i,true);
				}
			}
			if(Alloy.Globals.aux_juego=="Diferencias"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("TF_diferencias"+i);
					Ti.App.Properties.setBool("TF_diferencias"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("TF_diferencias"+i);
					Ti.App.Properties.setBool("TF_diferencias"+i,true);
				}
			}
			if(Alloy.Globals.aux_juego=="Memorice"){
				if(button[i].backgroundColor=="#A4A4A4"){
					Ti.App.Properties.removeProperty("TF_memorice"+i);
					Ti.App.Properties.setBool("TF_memorice"+i,false);
				}
				else{
					Ti.App.Properties.removeProperty("TF_memorice"+i);
					Ti.App.Properties.setBool("TF_memorice"+i,true);
				}
			}
		}
	}
	alert("Cambio guardado");
   Titanium.API.info("You clicked the button_GD");
   
});
button_AT.addEventListener('click',function(e)
{
   $.win.close();
});			

view_body_right.add(button_GD);
view_body_right.add(button_AT);
view_body.add(view_body_left);
view_body.add(view_body_right);
$.win.add(view_header);
$.win.add(view_body);
$.win.add(view_footer);
//$.menu_desbloquear_nivel.open();