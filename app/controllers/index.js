function menu_HS(e) {
    alert("Hab. Sociales");
}
function menu_TF(e) {
    alert("Frustración");
}
function menu_setting(e) {;
    $.dialog.show();
}
$.dialog.addEventListener('click', function(e) {
	Ti.API.info(e.text);
});
$.index.open();
