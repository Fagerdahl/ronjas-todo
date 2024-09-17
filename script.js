let tasks=[];
let completedTasksCount=0;

const taskInput=document.querySelector("#taskInput");
const addTaskButton=document.querySelector("#addTaskButton");
const taskList= document.querySelector("#taskList");
const completedCount=documeny.querySelector("#completedCount");

addTaskButton.addEventListener("click",addTask);

function addTask(){
    const taskText = taskInput.value.trim();

    if (taskText==""){
        alert("You must add something to the list!");
    return;

    }
        

}

const newTask= {
    text: taskText,
    completed: false
};

tasks.push(newTask);
updateList();
taskInput.value=""; //Emptying the field of input
{

    function updateList(){
    taskList.innerHTML="";
    }

    tasks.forEach([task,index])
  
    const li= document.createElement("li");
    li.textContent=tasks.Text;

}
if (task.completed){
    li.classList.add("Task completed")
}

li.addEventListener("click");
{
task.completed=task.completed;
updateList();
updateCompletedCount();
}

const deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete task";
deleteBtn.className="Delete";
deleteBtn.addEventListener("click");
{
tasks.splice(index,1);
updateList();
updateCompletedCount();

}

{
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}




    function updateCompletedCount(){
        completedCount=tasks.filter(task==task.completed).length;
        completedCount.textContent=completedTasksCount;
    }

