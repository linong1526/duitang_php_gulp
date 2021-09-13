let btn = document.querySelector(".pg-loginbtn");
let form = document.querySelector("form");
let username = document.querySelector("#p-username");
let password = document.querySelector("#p_password");

form.onsubmit = function () {
    let e = window.event;
    e.returnValue = false;

    let xhr = new XMLHttpRequest();

    xhr.open("post", "../ajax/login_post.php");
    // post 请求的参数 放在请求体中
    // 在传递的时候 写在send中
    // 当用post请求携带参数的时候 需要给请求头设置 请求参数的格式
    xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    xhr.send(
        `username=${username.value}&password=${password.value}`
    );

    xhr.onload = function () {
        // console.log(xhr.responseText);
        let res = JSON.parse(xhr.responseText);
        if (!res.code) {
            alert(res.msg);
            return;
        }
        location.href = "index.html";
    };
};
