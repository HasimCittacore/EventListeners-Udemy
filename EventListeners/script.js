
var btnAdd = document.getElementById("add-item");
var list = document.getElementById("todo-list")
var FirstItem = document.getElementById("item1")
var btnupdate = document.getElementById("update-item");
var inputField = document.getElementById("input-Field");
var btnRemove = document.getElementById("remove-item");

var currentInput = "";
inputField.addEventListener("input",function(e){
   currentInput =e.target.value
})

inputField.addEventListener("keyup",function(e){
    if(e.keyCode === 13){
    addList();
    }
})
function createNewNode(){


var newList = document.createElement("li");
var TextNode=document.createTextNode(currentInput);
newList.appendChild(TextNode)
newList.id="item" + (list.childElementCount+1)
console.log(newList)

return newList;
}

function addList(){

    if(currentInput !="" && currentInput != null && currentInput != undefined)
    {
        var newList = createNewNode();
       
    list.appendChild(newList)
    inputField.value="";
     currentInput ="";

    }
    else
    {
        alert("Enter the valid todo's")
    }
    


}

btnAdd.addEventListener("click",addList);
btnupdate.addEventListener("click",function(){
    var firstElement = list.firstElementChild;
    var newList = createNewNode();

    list.replaceChild(newList,firstElement);
    inputField.value="";
    currentInput="";
})

btnRemove.addEventListener("click",function(){
    var firstElement = list.firstElementChild;
    list.removeChild(firstElement);
})