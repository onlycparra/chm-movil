function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function go_home() {
        alert("Vuelta al Home");
    }
    function play_sound() {
        alert("Reproducir instrucciones de Home");
    }
    function go_settings() {
        alert("Entrar a Configuraciones");
    }
    function op_0() {
        var winMenu0 = Alloy.createController("menu_0").getView();
        winMenu0.open();
    }
    function op_1() {
        var winMenu1 = Alloy.createController("menu_1").getView();
        winMenu1.open();
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
    go_home ? $.__views.home_icon.addEventListener("click", go_home) : __defers["$.__views.home_icon!click!go_home"] = true;
    $.__views.title_view = Ti.UI.createView({
        top: "0%",
        width: "60%",
        id: "title_view"
    });
    $.__views.header_view.add($.__views.title_view);
    $.__views.title_label = Ti.UI.createLabel({
        top: "10%",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        text: "Bienvenido a PIA",
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
    play_sound ? $.__views.sound_icon.addEventListener("click", play_sound) : __defers["$.__views.sound_icon!click!play_sound"] = true;
    $.__views.view_body = Ti.UI.createView({
        layout: "vertical",
        height: "70%",
        id: "view_body"
    });
    $.__views.index.add($.__views.view_body);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: "100%",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "scrollView"
    });
    $.__views.view_body.add($.__views.scrollView);
    $.__views.Button_0 = Ti.UI.createButton({
        top: "10dip",
        height: "70dip",
        width: "60%",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Habilidades Sociales",
        id: "Button_0"
    });
    $.__views.scrollView.add($.__views.Button_0);
    op_0 ? $.__views.Button_0.addEventListener("click", op_0) : __defers["$.__views.Button_0!click!op_0"] = true;
    $.__views.Button_1 = Ti.UI.createButton({
        top: "10dip",
        height: "70dip",
        width: "60%",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#D9F",
        title: "Tolerancia a la Frustración",
        id: "Button_1"
    });
    $.__views.scrollView.add($.__views.Button_1);
    op_1 ? $.__views.Button_1.addEventListener("click", op_1) : __defers["$.__views.Button_1!click!op_1"] = true;
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
    go_settings ? $.__views.setting_icon.addEventListener("click", go_settings) : __defers["$.__views.setting_icon!click!go_settings"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.home_icon!click!go_home"] && $.__views.home_icon.addEventListener("click", go_home);
    __defers["$.__views.sound_icon!click!play_sound"] && $.__views.sound_icon.addEventListener("click", play_sound);
    __defers["$.__views.Button_0!click!op_0"] && $.__views.Button_0.addEventListener("click", op_0);
    __defers["$.__views.Button_1!click!op_1"] && $.__views.Button_1.addEventListener("click", op_1);
    __defers["$.__views.setting_icon!click!go_settings"] && $.__views.setting_icon.addEventListener("click", go_settings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;