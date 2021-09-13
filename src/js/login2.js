/* 
    【1】判断是否有登录（获取cookie）
        +   如果没有登录 直接登录
            +   如果是从其他页面跳转过来登录页面 登录成功之后直接去到之前的页面
            +   如果是直接 打开，登录成功的时候直接跳转到首页
        +   如果有登录
            +   直接去到首页
    【2】获取元素
        +   获取输入框内容
    【3】发送登录的请求
    【4】登录失败的时候--继续登录
    【5】登录成
        +   登录成功存入cookie  login=用户名
        +    跳转到对应的页面

*/

let login = getCookie("login");

// 有登录的情况 直接跳转到 首页
if (login) {
    location.href = "../index.html";
}

// 没有登录的情况下 继续登录
let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");


// 表单的提交事件
form.onsubmit = function () {
    // let e = window.event;
    // e.preventDefault();

    if (!(username.value && password.value)) {
        alert("请输入用户名和密码");
        return;
    }

    // 发送一个ajax请求
    pAjax({
        url: "../server/login2.php",
        type: "post",
        data: {
            username: username.value,
            password: password.value,
        },
    }).then((res) => {
        res = JSON.parse(res);
        if (!res.code) {

            alert('用户名或者密码错误，请重新输入');
            username.value = password.value = '';
            return 
        }

        setCookie("login", username.value);

        // 跳转页面
        // 获取本地存储中url对应的数据
        let url = localStorage.getItem("url");

        // 当获取地址结束之后 需要把这个本地存储的数据 删除
        // 移出本地存储中url的数据
        localStorage.removeItem('url');

        url ? (location.href = url) : (location.href = "../index.html");
    });
};
