const input= document.querySelector(".todo-input");
const btn=  document.querySelector(".add-btn");
const todoList= document.querySelector(".todo-list");
let checkbox= document.querySelectorAll(".todo-task-input");
let num=0;
btn.addEventListener("click", ()=>{
    addTask();
    addDelListener();
    addCheckboxListener();
})


input.addEventListener("keypress", (event)=>{
    if(event.keyCode===13)
    {
        addTask();
        addDelListener();
        addCheckboxListener();
    }
})

function addTask(){
    if(input.value!="")
    {
        num++;
        todoList.innerHTML+=`
        <div class="todo-task">
            <div class="todo-task-input-section">
                <input type="checkbox" id="task${num}" class="todo-task-input">
                <label for="task${num}" class="poppins-regular todo-task-content"> ${input.value}</label><br>
            </div>
            <div class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </div>
        </div>
        `
        checkbox= document.querySelectorAll(".todo-task-input")
        input.value="";
    }
    
}


function addDelListener(){
    let del= document.querySelectorAll(".delete");
    for(let i=0; i<del.length; i++){
        del[i].addEventListener("click", (event)=>{
            del[i].parentNode.remove();
            num--;
        })
    }
}

function addCheckboxListener(){
    for(let i=0; i<checkbox.length; i++){
   
        checkbox[i].addEventListener("click", (event)=>{
            if(checkbox[i].checked)
                checkbox[i].parentNode.querySelector(".todo-task-content").style.textDecoration="line-through";
            else    
                checkbox[i].parentNode.querySelector(".todo-task-content").style.textDecoration="none";
        })
    }
}