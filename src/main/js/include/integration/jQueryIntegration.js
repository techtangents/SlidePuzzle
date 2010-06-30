P.widgetDef = {
    options : {
        image : ""
    },

    _create : function() {
        var element = this.element;
        var image = this.options.image;
        var instance = P.create(element, image);
        instance.init();
    }
};
$.widget("ui.slidePuzzle", P.widgetDef);
