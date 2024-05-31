let y = 0;
let swapper;
let draggables = [];  // Array to store all draggable instances

// let counter=0;

function createNew() {
    document.body.innerHTML += "<div id='draggable" + y + "' class = 'dda' style='background-color: lightskyblue;width:100px;'>Drag Me!</div>\n";
    document.body.innerHTML += "<div id='testingThis" + y + "' class = 'aad'  >location!</div>\n";
    connectDivToElements();
    // swap();
    y++;
    alert(y);
}

function connectDivToElements() {
    if(swapper)
        for (let counter = 0; y >= counter; counter++) {
            let draggableElement = document.getElementById('draggable' + counter);
            if (draggableElement) {
                let draggable = new PlainDraggable(draggableElement);
                draggable.snap = {step: 1};
                draggable.onDrag = function () {
                    if (this.rect.left !== null && this.rect.top !== null)
                        document.getElementById('testingThis' + counter).innerHTML =
                            " x:" + this.rect.x.toFixed(0) +
                            " y:" + this.rect.y.toFixed(0) +
                            " height:" + this.rect.height.toFixed(0) +
                            " width:" + this.rect.width.toFixed(0);
                };
                draggables.push(draggable);  // Add the draggable instance to the array
            }
        }
}

function swap() {
    if (swapper) {
        draggables.forEach(draggable => draggable.remove());  // Remove each draggable instance
        draggables = [];  // Clear the array
        swapper = !swapper;
        // alert("sizeable");
        document.getElementById("theSwapButton").innerHTML = "sizeable";
    } else if (!swapper) {
        swapper = !swapper;
        connectDivToElements();
        // alert("moveable");
        document.getElementById("theSwapButton").innerHTML = "moveable";
    }
}
