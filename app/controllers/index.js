function go_home(e) {
    alert("Vuelta al Home");
}
function play_sound(e) {
    alert("Reproducir instrucciones de Home");
}
function go_settings(e) {
    alert("Entrar a Configuraciones");
}
function op_0(e) {
	var winMenu0=Alloy.createController("menu_0").getView();
    winMenu0.open();
}
function op_1(e) {
    var winMenu1=Alloy.createController("menu_1").getView();
    winMenu1.open();
}

$.index.open();
