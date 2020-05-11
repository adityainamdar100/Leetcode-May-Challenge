/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */


var floodFill = function(image, sr, sc, newColor) {
    if(image[sr][sc]!==newColor) {
        fFill(image,sr,sc,image[sr][sc],newColor);
    }
    return image;
};

let fFill = function(image,sr,sc,existingColor,newColor) {
    if(image[sr][sc]===existingColor) {
        image[sr][sc] = newColor;
        if(sr>0) fFill(image,sr-1,sc,existingColor,newColor);
        if(sc>0) fFill(image,sr,sc-1,existingColor,newColor);
        if(sr+1<image.length) fFill(image,sr+1,sc,existingColor,newColor);
        if(sc+1<image[0].length) fFill(image,sr,sc+1,existingColor,newColor);
    }
}
