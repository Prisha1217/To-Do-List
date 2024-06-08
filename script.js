const input= document.querySelector(".todo-input");
const btn=  document.querySelector(".add-btn");
const todoList= document.querySelector(".todo-list");

btn.addEventListener("click", ()=>{
    addTask();
})

input.addEventListener("keypress", (event)=>{
    if(event.keyCode===13)
    {
        addTask();
    }
})

function addTask(){
    if(input.value!="")
    {
        todoList.innerHTML+=`<div class="todo-task">
        <input type="checkbox" class="todo-task-input">
        <label class="poppins-regular todo-task-content"> ${input.value}</label><br>
        </div>`
        input.value="";
    }
    
}