const todoItem = document.querySelector("#todo");
const todosContainer = document.querySelector("#todos");

todoItem.addEventListener("change", (e) => {
  const todoItemHtml = `
            <li class="todo-list-item">
                <input type="checkbox" name="todoListItem" id="todoListItem" />
                <span class="todo-text">${e.target.value}</span>
            </li>
`;

  todosContainer.insertAdjacentHTML("beforeend", todoItemHtml);
  todo.value = "";

  const todoListItem = document.querySelectorAll("#todoListItem");

  console.log(todoListItem);
});
