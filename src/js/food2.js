
/*
当函数的参数 过多的时候 应该把参数 写成一个对象传递
    {
        url:'请求的地址',  //请求地址是必须
        type:'get',   选填，不填的时候 默认值为get请求 
        data:{username:'aaa',password:'123123'} || "username=aaa&password=123123",  选填，有参数就传递 没有可以不填，需要有默认值为 ''
        async:false, 选填 ，值为布尔值，不填写的时候为 true
        success:fucntion(){},  必填 请求成功之后执行的函数 获取到请求的结果
        error:function(){}  选填 请求失败之后执行的函数
    }
*/
//封装Ajax请求
function ajax(obj){
    //判断必填的属性 是否有传递
    if(!obj.url){
        //当url没有填写的时候 抛出错误
        throw Error("url属性不能为空");
    }

    //判断success是否有传递
    if(!obj.success){
        throw Error("success属性不能为空");
    }

    //当有一些参数没有传递的时候 需要添加默认值
    let option = {
        url:obj.url,
        type:obj.type ||"get",
        data:obj.data || "",
        async:obj.async || true,
        success:obj.success,
        error:obj.error || function(err){
            console.log(err);
        }
    }
    
    //判断一下 请求方式是否正确 post || get
    if(!(option.type=="get" || option.type == "post")){
        throw Error("type属性的取值 暂时只支持 get 和 post");
    }

    //判断data参数是否是 对象 或者字符串
    let datatype=Object.prototype.toString.call(option.data);
    if(!(datatype=="[object Object]" || datatype=="[object String]")){
        throw Error("data参数暂时只支持对象和字符串");
    }

    //判断async 是否是布尔值
    if(!(Object.prototype.toString.call(option.async)=="[object Boolean]")){
        throw Error("async 的取值暂时只能为布尔值(true || false)");
    }
    //判断success是否是函数
    if(!(Object.prototype.toString.call(option.success)=="[object Funtion]")){
        throw Error("success 参数必须是一个函数");
    }

    //判断error时候否是一个函数
    if(!(Object.prototype.toString.call(option.error="[Object Funtion]"))){
        throw Error("error只能是一个函数");
    }

    //如果参数是   对象 的时候 
    //需要把参数转化为 {name:"naoya",age="18"} ==>  name=naoya&age=18
    //key=value&key=value
    if(Object.prototype.toString.call(option.data)=="[object Object]"){
        let str="";
        for(let key in option.data){
            str += key + "=" + option.data[key] + "&"; 
        }
        option.data=str.substr(0,str.length -1);
    }

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        //ajax状态
        if(xhr.readyState==4 && /^[23]\d{2}$/.test(xhr.status)){
            option.success(xhr.responseText);
        }

        //http 的状态码为4 或者 5 开头的时候
        if(/^[45]\d{2}$/.test(xhr.status)){
            option.error(xhr.responseText);
        }
    }

    //判断请求方式 
    if(option.type=="get"){
        xhr.open(option.type,`${option.url}?${option.data}`,option.async);
        xhr.send();
        return;
    }
    xhr.open(option.type,option.url,option.async);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(option.data);
}

/*  课堂案例
    【1】先获取数据  function getData(){}
    【2】把返回的数据渲染页面 function render(){}
    【3】判断每一个ul的高度，把后面图片添加到最小高的ul中
    【4】滚动条滚动到最小ul的高度的时候需要获取下一组数据 渲染
    可以另建一个js文件 用来调用 ajax请求
    Request URL: https://www.duitang.com/napi/blog/list/by_filter_id/?
    include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E5%AE%B6%E5%B1%85%E7%94%9F%E6%B4%BB&start=24&_=1618490480642
*/

//获取元素
let uls=document.querySelectorAll(".box ul");
let start=0;
let flag=true;
ajax({
    //配置反向代理
    url:"/dt",
    data:{
        include_fields:"top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count",
        filter_id:"%E5%AE%B6%E5%B1%85%E7%94%9F%E6%B4%BB",
        start:start,
    },
    success:function(res){
        let data=JSON.parse(res);
        start=data.data.next_start;
        render(data.data.object_list);
    },
});

//滚动条滚动
window.onscroll=function(){
    let minUl=getMinUl();
    let h=minUl.offsetHeight;
    if(scrollY >= h-innerHeight && flag==true){
        flag=false;
        ajax({
            url:"/dt",
            data:{
                include_fields:
                                "top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count",
                            filter_id: "%E6%89%8B%E5%B7%A5DIY",
                            start: start,
            },
            success:function(res){
                let data=JSON.parse(res);
                start=data.data.next_start;
                flag=true;
                render(data.data.object_list);
            },
        });
    }
};

//渲染数据
function render(data){
    data.forEach((item)=>{
        let str=`
        <li>
            <div class="imgBox">
                <a href="javascript:;">
                <img src="${item.photo.path}" alt=""/>
                </a>
            </div>
        </li>
        `;
        let minUl=getMinUl();
        minUl.innerHTML +=str;
    });
}
//计算最小高度
function getMinUl(){
    let ul=uls[0];
    for(let i=1;i<uls.length;i++){
        if(uls[i].offsetHeight < ul.offsetHeight){
            ul=uls[i];
        }
        return ul;
    }
}