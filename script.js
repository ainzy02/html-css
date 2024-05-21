function apple(){
    draggable1 = new PlainDraggable(document.getElementById('draggable1'));
    draggable2 = new PlainDraggable(document.getElementById('draggable2'));

}
function createNew(){
    document.getElementById("theScreen").innerHTML +="<div id='draggable1' style="background-color: lightskyblue;width:100px;\">dragMe1</div>\n"
}