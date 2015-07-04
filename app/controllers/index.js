function menu_HS(e) {
    alert("Hab. Sociales");
}
function menu_TF(e) {
    alert("Frustración");
}
function menu_setting(e) {
    $.dialog.show();
}
$.dialog.addEventListener('click', function(e) {
	Ti.API.info(e.text);
	if(e.text=="123"){
		var menu_desploquear_categoria=Alloy.createController('menu_desploquear_categoria').getView();
		menu_desploquear_categoria.open();
	}
});
$.index.open();
