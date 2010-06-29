this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {

    // #canhas include/Arrays.js
    // #canhas include/PieceMaker.js
    // #canhas include/BackgroundPositionCalculator.js
    // #canhas include/jQueryIntegration.js
    // #canhas include/PieceShuffler.js
    // #canhas include/Randomizer.js

    P.create = function(element, image) {
        return {
            init : function() {
                var elements = _.map(_.range(9), function(x) {
                    return P.PieceMaker.make(image, x, element.width(), element.height());
                });

                var blank = P.PieceMaker.blank(element.width(), element.height());

                var shuffled = P.PieceShuffler.shuffle(elements, blank, P.Randomizer.array);

                // absolutely positioned within a relative element makes the pieces position absolute,
                //  relative to the parent
                var relativeDiv = $("<div />").css("position", "relative");
                element.append(relativeDiv);
                _(shuffled).each(function(x){ relativeDiv.append(x); });
            }
        }
    }


})(TechTangents.SlidePuzzle, jQuery);