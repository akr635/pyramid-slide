// set global variables for all functions to access
pyrHeight = ""
bricktype = ""

heightElem = function(height) {
    // change pyrHeight variable to changed height
    pyrHeight = height;
    showRange();
    drawPyramid();
}

function showRange() {
    // TODO: show the height next to the slider
    var rangeValue = pyrHeight;
    document.getElementById("range-text").innerHTML = rangeValue;
}

brickSymbol = function(symbol) {
    // set bricktype variable to changed symbol
    bricktype = symbol;
    drawPyramid();
}


function drawPyramid() {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    height = pyrHeight
    if (bricktype == "") {
        symbol = "#";
    } else {
        symbol = bricktype;
    }

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += symbol;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
