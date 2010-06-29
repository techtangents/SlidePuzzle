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

                // FIX push the rows/cols throughout the system
                // FIX pass them in from widget options
                var rows = 3;
                var cols = 3;

                var picturePieces = P.PieceMaker.array(totalWidth, totalHeight, image, rows, cols);
                var blankPiece = P.PieceMaker.blank(totalWidth, totalHeight);
                var shuffledPieces = P.PieceShuffler.shuffle(picturePieces, blankPiece, P.Randomizer.array);

                // absolutely positioned within a relative element makes the pieces position absolute,
                //  relative to the parent
                var relativeDiv = $("<div />").css("position", "relative");
                element.append(relativeDiv);
                _(shuffledPieces).each(function(x, i) {
                    var pos = P.PositionCalculator.fromIndex(totalWidth, totalHeight, i);
                    x.css({
                        left : pos.x + "px",
                        top : pos.y + "px"
                    });
                    relativeDiv.append(x);
                });
            }
        }
    };

})(TechTangents.SlidePuzzle, jQuery);