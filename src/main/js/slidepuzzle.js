this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {

    // #canhas include/PieceMaker.js

    P.create = function(element) {
        return {
            init : function() {
                var elements = _.map(_.range(9), P.PieceMaker.make);
                _(elements).each(function(x){ element.append(x); });
            }
        }
    }


})(TechTangents.SlidePuzzle, jQuery);