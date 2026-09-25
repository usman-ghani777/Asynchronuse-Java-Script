let task_input = document.querySelector("#todo-input");
let add_btn = document.querySelector("#add-todo-btn");
let todo_list = document.querySelector("#todo-list");


add_btn.addEventListener("click", async function () {

    let task = task_input.value;
    await postTodo();

});


async function getTodos() {

    try {

        const response = await fetch(
            "https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos"
        );

        const data = await response.json();

        console.log(data);

        if(data){
            todo_list.innerHTML = "";
             data.forEach(function (todo) {

            let li = document.createElement("li");

            li.className = "todo-task-container";

            li.innerHTML = `
                
                <div class="todo-tasks">

                    <p>${todo.text}</p>

                    <div class="task-btn">

                        <button class="delete-btn">
                            Delete
                        </button>

                        <button class="edit-btn">
                            Edit
                        </button>

                    </div>

                </div>

            `;

            li.querySelector(".delete-btn").addEventListener("click", function () {

                console.log("Delete button clicked for task:", todo.id);
            });
            deleteTodo(todo.id);

            todo_list.appendChild(li);

        });
        }


       

    } catch (error) {

        console.log("Error:", error);

    }

}



async function postTodo() {
    let value = task_input.value;
    let objData = {
        text: value.trim()
    }
    let response = await fetch(
        "https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(objData)

        }
    );

    if (response.status === 201){
        getTodos();
    }

    return response;
}

async function deleteTodo(id){

    let response = await fetch(
        `https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos/${id}`,
        {
            method: "DELETE"
        }
    );

    if (response.status === 200){
        getTodos();
    }
}


getTodos();