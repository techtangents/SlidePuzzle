P.widgetDef = {
    options : {
        image : "",
        rows : 3,
        cols : 3
    },

    _create : function() {
        var options = this.options;
        P.create(this.element, options.image, options.rows, options.cols);
    }
};
$.widget("ui.slidePuzzle", P.widgetDef);
