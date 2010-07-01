P.Initializer = {
    initialize : function(element, image, rows, cols) {
        var gridInfo = P.GridInfoMaker.make(rows, cols, element);
        var pieceContainer = P.Initializer.makePieceContainer();
        element.append(pieceContainer);
        P.Initializer.addPieces(gridInfo, pieceContainer, image);
    },

    makePieceContainer : function() {
        // pieces are absolutely positioned within a relative element.
        // this makes their coordinates relative to this parent, rather than the document
        return $("<div />").css("position", "relative");
    },

    addPieces : function(gridInfo, pieceContainer, image) {
        var picturePieces = P.PieceMaker.array(gridInfo, image);
        var blankPiece = P.PieceMaker.blank(gridInfo);
        var shuffledPieces = P.PieceShuffler.shuffle(picturePieces, blankPiece, P.Randomizer.array);

        P.PieceInserter.insert(gridInfo, pieceContainer, shuffledPieces);
        P.EventWirer.wire(picturePieces, blankPiece);
    }
};
