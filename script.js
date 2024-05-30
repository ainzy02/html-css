let y = 0;

// let counter=0;

function createNew() {
    document.body.innerHTML += "<div id='draggable" + y + "\'style='background-color: lightskyblue;width:100px;'>Drag Me!</div>\n"
    document.body.innerHTML += "<div id='testingThis" + y + "\'>locatation!</div>\n";
    connectDivToElements();
    y++;
    alert(y);
}


function connectDivToElements() {
    for (let counter = 0; y >= counter; counter++) {
        draggable = new PlainDraggable(document.getElementById('draggable' + counter));
        draggable.onDrag = function () {
            if (this.rect.left !== null && this.rect.top !== null)
                document.getElementById('testingThis' + counter).innerHTML = this.rect.left + " " + this.rect.top + " " + this.rect.height + " " + this.rect.width;
        }
    }
}
