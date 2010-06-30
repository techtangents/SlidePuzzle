this.TechTangents = this.TechTangents || {};
TechTangents.SlidePuzzle = {};

(function(P, $) {
    // #canhas include/alien/Arrays.js
    // #canhas include/alien/Dom.js
    // #canhas include/alien/Randomizer.js
    // #canhas include/alien/Switch.js

    // #canhas include/grid/Coordinate.js
    // #canhas include/grid/GridInfoMaker.js

    // #canhas include/integration/jQueryIntegration.js

    // #canhas include/initialize/Initializer.js

    // #canhas include/moves/Animator.js
    // #canhas include/moves/EventWirer.js
    // #canhas include/moves/MoveValidator.js
    // #canhas include/moves/PieceMover.js

    // #canhas include/piece/PieceShuffler.js
    // #canhas include/piece/PieceMaker.js
    // #canhas include/piece/PieceInserter.js

    // #canhas include/position/BackgroundPositionCalculator.js
    // #canhas include/position/PositionCalculator.js


    P.create = function(element, image) {
        return {
            init : function() {
                P.Initializer.initialize(element, image);
            }
        }
    };

})(TechTangents.SlidePuzzle, jQuery);