const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDoKey = "toDos";

let toDos = JSON.parse(localStorage.getItem(toDoKey)) ?? [];

function savetoDos () {
    localStorage.setItem(toDoKey, JSON.stringify(toDos));
}

function loadtoDos () {
    toDoList.innerHTML ='';
    let toDos = JSON.parse(localStorage.getItem(toDoKey)) ?? [];
    //굳이 인자로 (item) 안해도 배열의 각 아이템을 js가 알아서 넣어준다! 
    toDos.forEach(paintToDo); 
}

function handleToDoSubmit(e) {
    e.preventDefault();
    const newTodo = toDoInput.value;
    const newTodoObject = {
        id : Date.now(),
        item : newTodo,
    }
    toDoInput.value = "";
    toDos.push(newTodoObject);
    paintToDo(newTodoObject);
    savetoDos();
}

function deleteToDo(event){
    //항상 addEventListener로 넘기는 함수의 첫번쨰 인자에는 event가 온다
    const li = event.target.parentElement;
    li.remove();

    //filter -> 리턴값이 true인 요소만 새로운 배열에 추가
    toDos = toDos.filter(toDo => li.id != toDo.id);

    savetoDos();
    //loadtoDos();
}
function paintToDo(newTodoObject){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodoObject.id;
    span.innerText = newTodoObject.item;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

loadtoDos();

toDoForm.addEventListener("submit", handleToDoSubmit);