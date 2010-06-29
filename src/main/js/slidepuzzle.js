this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {

    // #canhas include/Coordinate.js
    // #canhas include/Arrays.js
    // #canhas include/PieceMaker.js
    // #canhas include/BackgroundPositionCalculator.js
    // #canhas include/jQueryIntegration.js
    // #canhas include/PieceShuffler.js
    // #canhas include/Randomizer.js
    // #canhas include/PositionCalculator.js

    P.create = function(element, image) {
        return {
            init : function() {
                var totalWidth = element.width();
                var totalHeight = element.height();


                var elements = _.map(_.range(9), function(x) {
                    return P.PieceMaker.make(image, x, totalWidth, totalHeight);
                });

                var blank = P.PieceMaker.blank(totalWidth, totalHeight);
                console.log(blank);

                var shuffled = P.PieceShuffler.shuffle(elements, blank, P.Randomizer.array);
                console.log(shuffled.length);

                // absolutely positioned within a relative element makes the pieces position absolute,
                //  relative to the parent
                var relativeDiv = $("<div />").css("position", "relative");
                element.append(relativeDiv);
                _(shuffled).each(function(x, i) {
                    var pos = P.PositionCalculator.fromIndex(i);
                    console.log(x + "," + i);
//                    x.css({
//                        left : pos.left + "px",
//                        top : pos.top + "px"
//                    });
                    relativeDiv.append(x);
                });
            }
        }
    }


})(TechTangents.SlidePuzzle, jQuery);