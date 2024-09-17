function todoList (){
    let id=document.getElementById("todoInput");
    let text=document.createTextNode(item);
    let newItem=document.createElement("li")
    newItem.appendChild(text);
    document.getElementById("todoList").appendChild(newItem);
}

