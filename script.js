
function apple() {
    document.body.innerHTML += "<div id='draggable3' style='background-color: lightskyblue;width:100px;'>dragMe3</div>\n"
    draggable1 = new PlainDraggable(document.getElementById('draggable1'));
    draggable2 = new PlainDraggable(document.getElementById('draggable2'));
    draggable3 = new PlainDraggable(document.getElementById('draggable3'));
    createNew();
}
var y=5;
function createNew()
{
    document.body.innerHTML += "<div id='draggable" + y + "\'style='background-color: lightskyblue;width:100px;'>dragMe3</div>\n"
connectDivToElements();
}
function connectDivToElements()
{
    draggabley = new PlainDraggable(document.getElementById('draggable'+y));
    draggabley = new PlainDraggable(document.getElementById('draggable2'));
    draggabley = new PlainDraggable(document.getElementById('draggable1'));
    draggabley = new PlainDraggable(document.getElementById('draggable3'));
}


document.getElementById(outputHere).innerHTML=(document.getElementById(draggable5).height);
