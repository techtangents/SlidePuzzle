P.PieceChooser = {
    // choose the first n-1 pieces where n is allPicturePieces.length
    choosePicturePieces : function(allPicturePieces) {
        return P.Arrays.torso(allPicturePieces);
    },

    choose : function(picturePieces, blank) {
        return picturePieces.concat([blank]);
    }
};
