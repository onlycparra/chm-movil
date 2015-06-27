function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.view_header = Ti.UI.createView({
        top: "3%",
        width: Ti.UI.SIZE,
        height: "10%",
        layout: "horizontal",
        id: "view_header"
    });
    $.__views.index.add($.__views.view_header);
    $.__views.icon_inicio = Ti.UI.createImageView({
        image: "/images/icon/inicio",
        height: "50%",
        id: "icon_inicio"
    });
    $.__views.view_header.add($.__views.icon_inicio);
    $.__views.Title = Ti.UI.createLabel({
        font: {
            fontSize: 18
        },
        text: "Selecciona categoría de Juego",
        id: "Title"
    });
    $.__views.view_header.add($.__views.Title);
    $.__views.icon_sonido = Ti.UI.createImageView({
        image: "/images/icon/sonido",
        height: "50%",
        id: "icon_sonido"
    });
    $.__views.view_header.add($.__views.icon_sonido);
    $.__views.view_body = Ti.UI.createView({
        layout: "vertical",
        height: "50%",
        id: "view_body"
    });
    $.__views.index.add($.__views.view_body);
    $.__views.Button_HS = Ti.UI.createButton({
        height: "18%",
        width: "60%",
        color: "#555",
        borderRadius: "50px",
        backgroundColor: "#87CEFA",
        top: "50%",
        title: "Habilidades Sociales",
        id: "Button_HS"
    });
    $.__views.view_body.add($.__views.Button_HS);
    $.__views.Button_TF = Ti.UI.createButton({
        height: "18%",
        width: "60%",
        color: "#555",
        borderRadius: "50px",
        backgroundColor: "#87CEFA",
        top: "4%",
        title: "Tolerancia a la Frustración",
        id: "Button_TF"
    });
    $.__views.view_body.add($.__views.Button_TF);
    $.__views.view_footer = Ti.UI.createView({
        width: "60%",
        id: "view_footer"
    });
    $.__views.index.add($.__views.view_footer);
    $.__views.icon_configuracion = Ti.UI.createImageView({
        top: "60%",
        left: "90%",
        height: "40%",
        image: "/images/icon/configuracion.jpg",
        id: "icon_configuracion"
    });
    $.__views.view_footer.add($.__views.icon_configuracion);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;