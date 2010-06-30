this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {
    // #canhas include/alien/Arrays.js
    // #canhas include/alien/Dom.js
    // #canhas include/alien/Randomizer.js
    // #canhas include/alien/Switch.js

    // #canhas include/BackgroundPositionCalculator.js
    // #canhas include/PositionCalculator.js    

    // #canhas include/Animator.js
    // #canhas include/Coordinate.js
    // #canhas include/PieceMaker.js
    // #canhas include/jQueryIntegration.js
    // #canhas include/PieceShuffler.js
    // #canhas include/EventWirer.js
    // #canhas include/GridInfoMaker.js
    // #canhas include/PieceInserter.js
    // #canhas include/MoveValidator.js

    P.create = function(element, image) {
        return {
            init : function() {
                var totalWidth = element.width();
                var totalHeight = element.height();

                // FIX push the rows/cols throughout the system
                // FIX pass them in from widget options

                var gridInfo = P.GridInfoMaker.make(3, 3, element);

                var picturePieces = P.PieceMaker.array(gridInfo, image);
                var blankPiece = P.PieceMaker.blank(gridInfo);
                var shuffledPieces = P.PieceShuffler.shuffle(picturePieces, blankPiece, P.Randomizer.array);

                // absolutely positioned within a relative element makes the pieces position absolute,
                //  relative to the parent
                var pieceContainer = $("<div />").css("position", "relative");
                element.append(pieceContainer);

                P.PieceInserter.insert(gridInfo, pieceContainer, shuffledPieces);

                P.EventWirer.wire(pieceContainer, picturePieces, blankPiece);
            }
        }
    };

})(TechTangents.SlidePuzzle, jQuery);