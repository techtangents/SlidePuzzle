this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {

    // #canhas include/Arrays.js
    // #canhas include/PieceMaker.js
    // #canhas include/BackgroundPositionCalculator.js
    // #canhas include/jQueryIntegration.js
    // #canhas include/InitialPositionChooser.js
    // #canhas include/Randomizer.js

    P.create = function(element, image) {
        return {
            init : function() {
                var elements = _.map(_.range(9), function(x) {
                    return P.PieceMaker.make(image, x, element.width(), element.height());
                });
                _(elements).each(function(x){ element.append(x); });
            }
        }
    }


})(TechTangents.SlidePuzzle, jQuery);