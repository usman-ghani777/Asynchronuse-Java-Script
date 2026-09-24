let task_input = document.querySelector("#todo-input");
let add_btn = document.querySelector("#add-todo-btn");
let todo_list = document.querySelector("#todo-list");


add_btn.addEventListener("click", function () {

    let task = task_input.value;

    console.log(task);

});


async function getTodos() {

    try {

        const response = await fetch(
            "https://6ab54e7824ee9d3caa1c5f70.mockapi.io/api/v1/todos"
        );

        const data = await response.json();

        console.log(data);


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

            todo_list.appendChild(li);

        });

    } catch (error) {

        console.log("Error:", error);

    }

}


getTodos();