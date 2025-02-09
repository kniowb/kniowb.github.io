const loginForm = document.getElementById("login-form");
//document or html element 안을 찾을 수 있다!
//input의 유효성 검사를 하기 위해선 form tag안에 넣어야 한다
//button 클릭/enter시 강제 새로고침 -> form이 submitted 되고 있어서
const loginInput = loginForm.querySelector("#login-form input");
const userGreeting = document.querySelector("#greeting");
//const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASSNAME = "hidden";
const USER_KEY = "username"; //반드시 같아야 할 필드는 constant로 지정

const onLoginSubmit = (event) => {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USER_KEY, username);
    greeting();
    console.log(event);
}

const greeting = () => {
    const username = localStorage.getItem(USER_KEY);
    userGreeting.innerText = `Hello ${username}`;
    userGreeting.classList.remove(HIDDEN_CLASSNAME);
}

//first step - lS에서 찾는다
const savedUserName = localStorage.getItem(USER_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //loginButton.addEventListener("click", onLoginSubmit);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    greeting();
}
