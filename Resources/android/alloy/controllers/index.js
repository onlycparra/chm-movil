function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
<<<<<<< HEAD
    function doClick() {
        alert($.label.text);
=======
    function menu0_0() {
        alert("Hab. Sociales");
    }
    function menu0_1() {
        alert("Frustración");
    }
    function menu0_setting() {
        alert("Configuraciones");
>>>>>>> 69d65ecad71ea89f0b9a65e43494d04869dc69ec
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
<<<<<<< HEAD
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: ".Yo, Lista",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: "propio mensaje",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: "Yo, Lista",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: 12
        },
        text: "Hao, Lista",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
=======
        statusBarStyle: "default",
        navBarHidden: true,
        tabBarHidden: true,
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.index.add($.__views.header_view);
    $.__views.home_view = Ti.UI.createView({
        top: "0%",
        left: "0%",
        width: "20%",
        height: "100%",
        id: "home_view"
    });
    $.__views.header_view.add($.__views.home_view);
    $.__views.home_icon = Ti.UI.createImageView({
        image: "/images/icon/home.png",
        top: "10%",
        left: "10%",
        height: "90%",
        id: "home_icon"
    });
    $.__views.home_view.add($.__views.home_icon);
    $.__views.title_view = Ti.UI.createView({
        top: "0%",
        width: "60%",
        id: "title_view"
    });
    $.__views.header_view.add($.__views.title_view);
    $.__views.title_label = Ti.UI.createLabel({
        top: "10%",
        text: "Bienvenido",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        id: "title_label"
    });
    $.__views.title_view.add($.__views.title_label);
    $.__views.sound_view = Ti.UI.createView({
        top: "0%",
        right: "0%",
        width: "20%",
        height: "100%",
        id: "sound_view"
    });
    $.__views.header_view.add($.__views.sound_view);
    $.__views.sound_icon = Ti.UI.createImageView({
        image: "/images/icon/sound.png",
        top: "10%",
        right: "10%",
        height: "90%",
        id: "sound_icon"
    });
    $.__views.sound_view.add($.__views.sound_icon);
    $.__views.view_body = Ti.UI.createView({
        layout: "vertical",
        height: "70%",
        id: "view_body"
    });
    $.__views.index.add($.__views.view_body);
    $.__views.Button_HS = Ti.UI.createButton({
        top: "6%",
        height: "40%",
        width: "60%",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Habilidades Sociales",
        id: "Button_HS"
    });
    $.__views.view_body.add($.__views.Button_HS);
    menu0_0 ? $.__views.Button_HS.addEventListener("click", menu0_0) : __defers["$.__views.Button_HS!click!menu0_0"] = true;
    $.__views.Button_TF = Ti.UI.createButton({
        top: "6%",
        height: "40%",
        width: "60%",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#D9F",
        title: "Tolerancia a la Frustración",
        id: "Button_TF"
    });
    $.__views.view_body.add($.__views.Button_TF);
    menu0_1 ? $.__views.Button_TF.addEventListener("click", menu0_1) : __defers["$.__views.Button_TF!click!menu0_1"] = true;
    $.__views.footer_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        id: "footer_view"
    });
    $.__views.index.add($.__views.footer_view);
    $.__views.setting_view = Ti.UI.createView({
        bottom: "0%",
        right: "0%",
        width: "20%",
        height: "100%",
        id: "setting_view"
    });
    $.__views.footer_view.add($.__views.setting_view);
    $.__views.setting_icon = Ti.UI.createImageView({
        image: "/images/icon/gear.png",
        bottom: "10%",
        right: "10%",
        height: "100%",
        id: "setting_icon"
    });
    $.__views.setting_view.add($.__views.setting_icon);
    menu0_setting ? $.__views.setting_icon.addEventListener("click", menu0_setting) : __defers["$.__views.setting_icon!click!menu0_setting"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.Button_HS!click!menu0_0"] && $.__views.Button_HS.addEventListener("click", menu0_0);
    __defers["$.__views.Button_TF!click!menu0_1"] && $.__views.Button_TF.addEventListener("click", menu0_1);
    __defers["$.__views.setting_icon!click!menu0_setting"] && $.__views.setting_icon.addEventListener("click", menu0_setting);
>>>>>>> 69d65ecad71ea89f0b9a65e43494d04869dc69ec
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;