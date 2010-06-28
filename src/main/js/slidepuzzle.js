this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {

    // #canhas include/PieceMaker.js

    P.create = function(element, image) {
        return {
            init : function() {
                var elements = _.map(_.range(9), function(x) {
                    return P.PieceMaker.make(image, x);
                });
                _(elements).each(function(x){ element.append(x); });
            }
        }
    }


})(TechTangents.SlidePuzzle, jQuery);