const todoForm = document.querySelector(".input");
const todoInput = document.querySelector(".input input[type='text']");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const newTodoText = todoInput.value;
    const newLi = document.createElement("li");
    const newLiInnerHtml = `
        <span class="textcontent">${newTodoText}</span>
               <div class="buttons">
                    <img src="./icons/icons8-tick-64.png" alt="Done" class="done icon">
                    <img src="./icons/icons8-delete-64.png" alt="Remove" class="remove icon">
                </div>
        `;
    newLi.innerHTML = newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
    
});


todoList.addEventListener("click" , (e)=>{
    if(e.target.classList.contains("remove")){
        const targetedLi = e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration = "line-through";
    }
})