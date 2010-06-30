P.Initializer = {
    initialize : function(element, image, rows, cols) {
        var totalWidth = element.width();
        var totalHeight = element.height();

        // FIX push the rows/cols throughout the system
        // FIX pass them in from widget options

        var gridInfo = P.GridInfoMaker.make(rows, cols, element);

        var picturePieces = P.PieceMaker.array(gridInfo, image);
        var blankPiece = P.PieceMaker.blank(gridInfo);
        var shuffledPieces = P.PieceShuffler.shuffle(picturePieces, blankPiece, P.Randomizer.array);

        // absolutely positioned within a relative element makes the pieces position absolute,
        //  relative to the parent
        var pieceContainer = $("<div />").css("position", "relative");
        element.append(pieceContainer);

        P.PieceInserter.insert(gridInfo, pieceContainer, shuffledPieces);

        P.EventWirer.wire(picturePieces, blankPiece);
    }
};
