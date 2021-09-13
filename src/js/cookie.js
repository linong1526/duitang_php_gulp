/* 
    有哪些参数？
        url地址：请求的接口地址
        type：请求的方式 get || post
        data:请求的参数
        async：设置请求的异步或者同步（true || false）
        success:function(){ } 请求成功的回调函数
        error:function(){}请求失败的回调函数
    
    把这些参数 放在一个对象中 传递给ajax函数
    ajax({
        url:'',       url地址是必填 且不可有默认值的

        type:'get|post', 选填，默认值为 get请求   必须是get 或者 post

        data:'', key=value&key=value || {name:'aa',age:18}==>name=aa&age=18  选填，有就使用，默认值为 ''  需要填写的时候 必须是对象或者字符串（key=value）

        async:true || false  选填 默认值为 true  必须是布尔值

        success:function(res){
            res 就是请求出来的数据
        }  必填 请求成功获取结果的函数  必须是函数

        error:function(err){
            请求失败执行的函数
        } 选填 
    })

    是否有返回值？
        因为结果 是在异步程序中获取的 所以不能把结果当成 函数的返回值
        所以就不需要返回值
    怎么才能在函数外面 使用函数内部异步 请求出来的结果（回调函数）

    回调函数：把一个函数当成另一个函数的实参
*/

function ajax(obj) {
    if (!obj) {
        throw Error(
            "ajax function must have a parameter, and this parameter is an object"
        );
    }
    if (!obj.url) {
        // 手动抛出错误
        throw Error("url属性是必填的");
    }

    if (!obj.success) {
        throw Error("success 属性是必填的");
    }

    // 判断success 是否是函数 如果不是函数 就抛出错误
    if (!(Object.prototype.toString.call(obj.success) == "[object Function]")) {
        throw Error("success 必须是一个函数");
    }

    // 参数默认值的设置
    let paramet = {
        url: obj.url,
        type: obj.type || "get",
        data: obj.data || "",
        async: obj.async == undefined ? true : obj.async,
        success: obj.success,
        error:
            obj.error ||
            function (err) {
                console.log(err);
            },
    };

    // 判断实参是否符合规定的规则
    // type 只能为 get 和post
    if (paramet.type != "get" && paramet.type != "post") {
        throw Error("type属性的值 暂时只支持 get 和post请求");
    }

    // 判断 async 如果不是布尔值 就报错
    if (
        !(Object.prototype.toString.call(paramet.async) == "[object Boolean]")
    ) {
        throw Error("async这个参数 必须为布尔值");
    }

    // data参数的判断
    // data的数据类型 只能为 字符串 和 对象
    // key=value  {key:value}
    let datatype = Object.prototype.toString.call(paramet.data);
    if (datatype != "[object String]" && datatype != "[object Object]") {
        throw Error("data的参数必须是字符串或者对象的数据格式");
    }

    // 如果data 是字符串 并且有值的时候 判断是否有 =
    if (datatype == "[object String]" && paramet.data) {
        if (!paramet.data.includes("=")) {
            throw Error("data参数的格式不正确,格式为key=value");
        }
    }

    // 如果参数为对象的时候 应该把对象转化为字符串 key=value
    if (datatype == "[object Object]") {
        let str = "";
        for (let key in paramet.data) {
            str += key + "=" + paramet.data[key] + "&";
        }
        paramet.data = str.substring(0, str.length - 1);
    }

    let xhr = new XMLHttpRequest();
    // 判断是get 请求还是post请求
    if (paramet.type == "get") {
        xhr.open(paramet.type, paramet.url + "?" + paramet.data, paramet.async);
        xhr.send();
    } else if (paramet.type == "post") {
        xhr.open(paramet.type, paramet.url, paramet.async);

        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        xhr.send(paramet.data);
    }

    // 同步请求获取结果
    if (paramet.async == false) {
        if (/^2\d{2}$/.test(xhr.status)) {
            paramet.success(xhr.responseText);
        }

        if (/^[345]\d{2}$/.test(xhr.status)) {
            paramet.error(xhr.responseText);
        }
        return;
    }

    // 异步请求获取的结果
    xhr.onload = function () {
        if (/^2\d{2}$/.test(xhr.status)) {
            paramet.success(xhr.responseText);
        }
        if (/^[345]\d{2}$/.test(xhr.status)) {
            paramet.error(xhr.responseText);
        }
    };
}

//
function pAjax(parame) {
    let p = new Promise((resolve, reject) => {
        ajax({
            url: parame.url,
            data: parame.data,
            type: parame.type,
            async: parame.async,
            success: function (res3) {
                resolve(res3);
            },
            error: function (err) {
                reject(err);
            },
        });
    });

    return p;
}


/* 
    参数：
        key     cookie的属性
        value   cookie的属性值
        expires cookie的过期时间  单位分钟

        key 和value 是必须的
        expires 可选
            是否需要写过期时间 需要去判断过期时间是否传递
    返回值：没有返回值
*/
function setCookie(key, value, expires) {
    if (!key || !value) {
        throw Error("key 和value是必须传递的参数");
    }

    // 如果不设置path路径 这个cookie 只能在当前的文件夹中访问
    // path=/ 表示这个cookie设置在根目录下面（这个域名的根目录）
    if (!expires) {
        document.cookie = `${key}=${value};path=/`;
        return;
    }

    let date = new Date();
    let time = date.getTime() - 8 * 60 * 60 * 1000 + expires * 60 * 1000;

    date.setTime(time);
    document.cookie = `${key}=${value};expires=${date};path=/`;
}

/* 
    获取cookie
    getCookie();
    如果没有传递参数 ，那么把所有的cookie都返回（以对象的形式返回）
    如果有参数 把这个参数对应cookie返回

    getCookie()===>{a:1,b:2}
    getCookie('a')===>1
*/

function getCookie(attr) {
    let cookie = document.cookie;
    // a=1; b=2; c=3; d=4

    let arr = cookie.split("; ");
    // ['a=1','b=2','c=3','d=4']

    let obj = {};
    arr.forEach((item) => {
        // item === a=1
    
        let newArr = item.split("=");
        // newArr = ['a','1']
        obj[newArr[0]] = newArr[1];
    });

    if (attr) {
        return obj[attr];
    }

    return obj;
}
