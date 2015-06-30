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
        $.menu_1.close();
    }
    function play_sound() {
        alert("Reproducir instrucciones Frustración");
    }
    function op_0() {
        alert("Siluetas");
    }
    function op_1() {
        alert("Encuéntralos");
    }
    function op_2() {
        alert("Objetos");
    }
    function op_3() {
        alert("Diferencias");
    }
    function op_4() {
        alert("Memorizce");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "menu_1";
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
    $.__views.menu_1 = Ti.UI.createWindow({
        statusBarStyle: "default",
        navBarHidden: true,
        tabBarHidden: true,
        fullscreen: true,
        backgroundColor: "white",
        layout: "vertical",
        id: "menu_1"
    });
    $.__views.menu_1 && $.addTopLevelView($.__views.menu_1);
    $.__views.header_view = Ti.UI.createView({
        width: "100%",
        height: "15%",
        layout: "horizontal",
        id: "header_view"
    });
    $.__views.menu_1.add($.__views.header_view);
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
        text: "Tolerancia a la frustración",
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
        id: "view_body"
    });
    $.__views.menu_1.add($.__views.view_body);
    $.__views.scrollView = Ti.UI.createScrollView({
        width: "100%",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        id: "scrollView"
    });
    $.__views.view_body.add($.__views.scrollView);
    $.__views.Button_0 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#9DF",
        title: "Siluetas",
        id: "Button_0"
    });
    $.__views.scrollView.add($.__views.Button_0);
    op_0 ? $.__views.Button_0.addEventListener("click", op_0) : __defers["$.__views.Button_0!click!op_0"] = true;
    $.__views.Button_1 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#F9D",
        title: "Encuéntralos",
        id: "Button_1"
    });
    $.__views.scrollView.add($.__views.Button_1);
    op_1 ? $.__views.Button_1.addEventListener("click", op_1) : __defers["$.__views.Button_1!click!op_1"] = true;
    $.__views.Button_2 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#DF9",
        title: "Objetos",
        id: "Button_2"
    });
    $.__views.scrollView.add($.__views.Button_2);
    op_2 ? $.__views.Button_2.addEventListener("click", op_2) : __defers["$.__views.Button_2!click!op_2"] = true;
    $.__views.Button_3 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#ADE",
        title: "Diferencias",
        id: "Button_3"
    });
    $.__views.scrollView.add($.__views.Button_3);
    op_3 ? $.__views.Button_3.addEventListener("click", op_3) : __defers["$.__views.Button_3!click!op_3"] = true;
    $.__views.Button_4 = Ti.UI.createButton({
        top: "5dip",
        height: "70dip",
        width: "60%",
        bottom: "5dip",
        font: {
            fontSize: 24,
            color: "#000",
            textAlign: "center"
        },
        backgroundColor: "#EAD",
        title: "Memorice",
        id: "Button_4"
    });
    $.__views.scrollView.add($.__views.Button_4);
    op_4 ? $.__views.Button_4.addEventListener("click", op_4) : __defers["$.__views.Button_4!click!op_4"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.menu_1.open();
    __defers["$.__views.home_icon!click!go_home"] && $.__views.home_icon.addEventListener("click", go_home);
    __defers["$.__views.sound_icon!click!play_sound"] && $.__views.sound_icon.addEventListener("click", play_sound);
    __defers["$.__views.Button_0!click!op_0"] && $.__views.Button_0.addEventListener("click", op_0);
    __defers["$.__views.Button_1!click!op_1"] && $.__views.Button_1.addEventListener("click", op_1);
    __defers["$.__views.Button_2!click!op_2"] && $.__views.Button_2.addEventListener("click", op_2);
    __defers["$.__views.Button_3!click!op_3"] && $.__views.Button_3.addEventListener("click", op_3);
    __defers["$.__views.Button_4!click!op_4"] && $.__views.Button_4.addEventListener("click", op_4);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;