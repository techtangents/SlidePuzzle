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
        var allPicturePieces = P.PieceMaker.array(gridInfo, image);

        var chosenPicturePieces = P.PieceChooser.choosePicturePieces(allPicturePieces);
        var blankPiece = P.PieceMaker.blank(gridInfo);
        var allPieces = P.PieceChooser.choose(chosenPicturePieces, blankPiece);

        var shuffledPieces = P.PieceShuffler.shuffle(allPieces, P.Randomizer.array);

        P.PieceInserter.insert(gridInfo, pieceContainer, shuffledPieces);
        P.EventWirer.wire(chosenPicturePieces, blankPiece);
    }
};
