//轮播图
//获取元素
var banner = document.querySelector('.ban-left');
var imgBox = document.querySelector('.imgBox');
var pointBox = document.querySelector('.pointBox');
// console.log(pointBox);
var leftRightBox = document.querySelector('.leftRight');
var leftBtn = document.querySelector('.left');
// console.log(leftBtn)
var rightBtn = document.querySelector('.right');
// console.log(rightBtn);
const banner_width = banner.clientWidth;
let index = 1;
let timer = 0;
let flag = true;

//根据图片的数量来创建节点
setPoint();
function setPoint() {
    let frg = document.createDocumentFragment();
    for (let i = 0; i < imgBox.children.length; i++) {
        let li = document.createElement('li')
        frg.appendChild(li);
        if (i == 0) {
            li.classList.add('active');
        }
        li.dataset.page = i;
    }
    pointBox.appendChild(frg);
}
//复制第一张和最后一张
copyEle();
function copyEle() {
    const first = imgBox.firstElementChild.cloneNode(true);
    const last = imgBox.lastElementChild.cloneNode(true);
    imgBox.appendChild(first);
    imgBox.insertBefore(last, imgBox.firstChild);
    imgBox.style.width = imgBox.children.length * 100 + '%';
    imgBox.style.left = -banner_width + 'px';
}
//自动轮播
autoPlay();
function autoPlay() {
    timer = setInterval(() => {
        index++;
        move(imgBox, {
            left: -banner_width * index
        }, moveEnd);
    }, 2000);
}
//结束函数
function moveEnd() {
    if (index == imgBox.children.length - 1) {
        index = 1;
        imgBox.style.left = -index * banner_width + 'px';
    }
    if (index == 0) {
        index = imgBox.children.length - 2;
        imgBox.style.left = -banner_width * index + 'px'
    }
    for (let i = 0; i < pointBox.children.length; i++) {
        pointBox.children[i].classList.remove('active');
    }
    pointBox.children[index-1].classList.add('active');
    flag = true;
}
//划入划出
overOut();
function overOut() {
    banner.addEventListener('mouseover', () => {
        clearInterval(timer);
    })
    banner.addEventListener('mouseout', () => {
        autoPlay();
    })
}
//左右切换
leftRight();
function leftRight() {
    rightBtn.addEventListener('click', function () {
        if (flag == false) return;
        flag = false;
        index++;
        move(imgBox, {
            left: -banner_width * index
        }, moveEnd)
    })
    leftBtn.addEventListener('click', function () {
        if (flag == false) return;
        flag = false;
        index--;
        move(imgBox, {
            left: -banner_width * index
        }, moveEnd)
    })
}
//焦点切换
pointChange();
function pointChange() {
    pointBox.addEventListener('click', (ev) => {
        ev = ev || window.event;
        const target = ev.target;
        if (target.nodeName == 'LI') {
            if (flag == false) return;
            flag = false;
            const page = target.dataset.page - 0;
            index = page + 1;
            console.log(index);
            move(imgBox, {
                left: -index * banner_width
            }, moveEnd)
        }
    })
}
//BOM操作处理
setChange();
function setChange() {
    document.addEventListener('visibilitychange', () => {
        let state = document.visibilityState;
        if (state == 'hidden') clearInterval(timer);
        if (state == 'visible') autoPlay();
    })
}
/********** 轮播图结束***************** */

// head分类
//获取元素
const sort = document.querySelector('.sort');
const sort_act = document.querySelector('.sort > p');
const sort_btn = document.querySelector('.sort > ul');
const search = document.querySelector('.header > .search');
const input = document.querySelector('.header > .search > input');
const search_div = document.querySelector('.header > .search > div')
//鼠标划入划出事件
$(sort).on('mouseover', function () {
    sort_btn.style.opacity = '1';
    sort_act.classList.add('act');
})
$(sort).on('mouseout', function () {
    sort_act.classList.remove('act');
    sort_btn.style.opacity = '0';
})

function insertText() {
    let value = $(input).val();
    let str = `
            <p>搜索含<span> ${value} </span>的图片</p>
            <p>搜索含<span> ${value} </span>的商品</p>
            <p>搜索含<span> ${value} </span>的专辑</p>
            <p>搜索含<span> ${value} </span>的文章</p>
            <p>搜索含<span> ${value} </span>的达人</p>
    `;
    search_div.innerHTML = str;
}
insertText();

$(input).on('input', function () {
    insertText()
    search_div.style.display = 'block';
})
$(input).on('blur', function () {
    search_div.style.display = 'none';
})

//分类的点击事件
$(sort_btn).on('click', 'li', function () {
    let text = $(this).text();
    // console.log(text);
    if (text == '家居生活') {
        window.location.href = '../views/family.html'
    } else if (text == '美食菜谱') {
        window.location.href = '../views/food.html'
    } else {
        setCookie('dian', text);
        window.location.href = `../views/sort_sear.html`;
    }
})


//动态渲染列表
//获取数据
let start = 0;
// let flag = true;//开关，解决滑动过快是出现的问题
getList();
function getList() {
    // https://www.duitang.com/napi/vienna/feed/list/by_recommend/?start=0&limit=18
    // https://www.duitang.com/napi/vienna/feed/list/by_read/?start=18&limit=18
    // https://www.duitang.com/napi/vienna/feed/list/by_read/?start=18&limit=18
    if (!flag) return;
    flag = false;
    // flag=true;
    ajax({
        url: '/dt_hot',
        data: {
            start: start,
            limit: 18,
        },
        success(res) {
            start = res.data.next_start;
            // console.log(start);
            console.log(res.data.object_list)
            //要根据 res.data.object_list 去渲染页面
            bindHtml(res.data.object_list);
            // 到这里表示渲染页面完毕了
            flag = true;
        }
    })
}

const conLeft = document.querySelector('.con-left .content-hot');

function bindHtml(list) {
    list.forEach(item => {
        var imgsStr = ""
        item.atlas.blogs.forEach(b=>{
            imgsStr += `<img src="${ b.photo.path }" alt="">`
        })
        let str = `
                <ol>
                    <li class="day active" data-id="${item.resource_id}">
                        <div class="total">
                            <div class="avatar"><img src="${ item.atlas.sender.avatar }" alt=""></div>
                            <p class="username">${ item.atlas.sender.username }<br>
                                <span class="publish-time">${ item.resource_info }</span>
                            </p>
                        </div>
                        <p class="intro-desc">${item.atlas.desc}</p>
                        <div class="info-img">${imgsStr}</div>
                        <div class="info-bot-container">
                            <div class="info-bot">
                                <p class="like-count">${ item.atlas.like_count}</p>
                                <p class="favorite-count">${ item.atlas.favorite_count}</p>
                                <p style="border: none;" class="more" class="more_active">更多</p>
                            </div>

                            <div class="more-action-list active">
                                <ul>
                                    <li class="share-weibo">
                                        <a class="sina" href="javascript:" >
                                        <i></i><p>分享至新浪微博</p>
                                        </a>
                                    </li>
                                    <li class="share-qq">
                                        <a class="qzone" href="javascript:">
                                        <i></i><p>分享至QQ空间</p>
                                        </a>
                                    </li>
                                    <li class="report">
                                    <i></i><p>举报</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
                `;
        conLeft.innerHTML += str;
    });

    detail();
}


//鼠标滑入  热门内容   更多 选项 出现 分享
 //获取动态渲染的数据里的元素 通过 on()  如：$('父元素').on("mouseover","子元素",function()
const con_left = document.querySelector(".con-left");
$(document).ready(function(){
    $(con_left).on("mouseover",".more",function(){
        // $(con_left).find('.more-action-list').css({"display": "block"});
        $(this).parent().next().addClass('act');
        $('.act').css({"display": "block"});
        $(this).parents('ol').siblings().find('.more-action-list').css({"display": "none"});
        // console.log( $(this).parents('ol').siblings().find('.more-action-list').removeClass('act'));
    })
    $(con_left).on("mouseout",".more",function(){
        $(con_left).find('.more-action-list').css({"display": "none"})
    })

})
$(con_left).on("mouseover",".more-action-list",function(){
    $(this).css({"display": "block"});
    console.log(this);
    $(this).click(function(){
        window.location.href='../views/index.html';
    })
})
$(con_left).on("mouseout",".more-action-list",function(){
    $(this).css({"display": "none"});
})

let person=document.querySelector('.person');
//判断登录
    // //判断有没有登录信息
    // const login = getCookie("login");
    // const username = getCookie("username");
    // // 没有直接干回登录页
    // if(login!=1 || username===undefined){
    //     window.location.href = "./login.html"
    // }
    // // 否则显示欢迎信息
    // person.innerText = `欢迎肥来：${username}！`

    //判断登录信息
const login = getCookie("login");
console.log(login);
// 有登录的情况 直接跳转到 首页
// if (login) {
//     window.location.href = "../views/index.html";
// }
let username = getCookie("nickname");
if(!(login!=1 || username===undefined)){
//     <div class="person">
//     <img src="" alt="">
//     <span><a href="./login.html">注册/登录</a></span>
//     <!-- <img src="../images/con-r2.jpg" alt="">
//     <span><a href="./login.html">Naoya</a></span> -->
// </div>

$('.person > img').attr("src","../images/login.jpeg");
$('.person span a').text(username);
}else{
    window.location.href = "../views/login.html";
}
//设置一个id   点击博文内容 详情页渲染页面的函数
// resource_id: "126839607"
// subject_id: 126839607
function detail() {
    const conLeftLi = document.querySelectorAll('.day');
    // const conLeftLi = document.querySelectorAll('.info-img');
    conLeftLi.forEach(function (item) {
        item.addEventListener('click',function () {
            setCookie('resource_id',this.dataset.id)
            console.log(this.dataset.id);
            window.location.href = './detail.html';
        })
    })
}


//推荐关注
// https://www.duitang.com/napi/people/badge/user/list/by_random/
