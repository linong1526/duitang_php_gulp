//用原生js写

//获取元素
const warp  = document.querySelector('.warp') //相当于 bannerbox
const bigBox = document.querySelector('.bigBox')//相当于imgbox
const pointBox = document.querySelector('.pointBox')//pointBox
const boxs = document.querySelectorAll('.bigBox > div')
const goTop = document.querySelector('.return')



const height = warp.offsetHeight //获取高度
console.log(height)
let index = 0
let flag = true
boxs.forEach(function(item){
    item.style.height = height + 'px'
})

window.onmousewheel = function (e) {
    console.log(e.deltaY)
    if(e.deltaY > 0){
        if(index === 3) return index = 3
        if(!flag) return;
        flag = false
        index++
        move(bigBox, { top: -index * height }, moveEnd)
    }else if(e.deltaY < 0){
        if(index === 0) return index = 0
        if(!flag) return;
        flag = false
        index--
        move(bigBox, { top: -index * height }, moveEnd)
    }
}



function moveEnd(){
    

    //焦点配套
    for (let i = 0; i < pointBox.children.length; i++) {
        pointBox.children[i].classList.remove('active')
      }
      // 给索引配套的焦点添加类名
      pointBox.children[index].classList.add('active')
    
      // 9-3. 代码执行到这里, 表示一次的运动已经结束了
      // 可以正常进行下一次图片的切换了
      // 再次把开关开启
    

    flag = true;
}
//焦点点击事件
pointEvent()
function pointEvent() {
  pointBox.addEventListener('click', e => {
    e = e || window.event
    const target = e.target ;
    if (target.nodeName === 'LI') {
      if (!flag) return;
      flag = false;
      const page = target.dataset.page - 0;
      index = page;
      move(bigBox, { top: -index * height }, moveEnd);
    }
  })
}

//回到顶部
goTop.onclick = function ( ){
    index = 0
    move(bigBox, { top: 0}, moveEnd)
}

/* var home = document.querySelector('.wrap > .bigBox > lifeOne > .head > .home');
console.log(home);
home.onclick = function(){
  console.log('jjj');
} */

   //判断登录信息
let hh=document.querySelector('.hh');
const login = getCookie("login");
console.log(login);
let username = getCookie("nickname");
if(!(login!=1 || username===undefined)){
  $(".hh").html(function(i){
    let strlogin=`<p class="login"> 
    <img src="../images/login.jpeg" alt="">
    <span><a href="./login.html">${username}</a></span>`;
    return strlogin; 
  });
}else{
  $(".hh").html(function(i){
    let str=` <a href="" style="color: white;background-color:  #ff4466;">注册</a>
            <span>|</span>
            <a href="./login.html">登录</a>
            `;
    return str; 
  });
    window.location.href = "../views/life.html";
}