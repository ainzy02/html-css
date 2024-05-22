
let y=0;
// let counter=0;

function createNew()
{
    document.body.innerHTML += "<div id='draggable" + y + "\'style='background-color: lightskyblue;width:100px;'>Drag Me!</div>\n"
    connectDivToElements();
    y++;
    alert(y);
}
function connectDivToElements()
{
    for(var counter = 0; y>=counter; counter++ ) {
        draggable = new PlainDraggable(document.getElementById('draggable' + counter));
    }
}

