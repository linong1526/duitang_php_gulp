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

//鼠标滑入  热门内容   更多 选项 出现 分享
//获取动态渲染的数据里的元素 通过 on()  如：$('父元素').on("mouseover","子元素",function()
const con_left = document.querySelector(".con-left");
$(document).ready(function () {
    $(con_left).on("mouseover", ".more", function () {
        // $(con_left).find('.more-action-list').css({"display": "block"});
        $(this).parent().next().addClass('act');
        $('.act').css({
            "display": "block"
        });
        $(this).parents('ol').siblings().find('.more-action-list').css({
            "display": "none"
        });
        // console.log( $(this).parents('ol').siblings().find('.more-action-list').removeClass('act'));
    })
    $(con_left).on("mouseout", ".more", function () {
        $(con_left).find('.more-action-list').css({
            "display": "none"
        })
    })

})
$(con_left).on("mouseover", ".more-action-list", function () {
    $(this).css({
        "display": "block"
    });
    console.log(this);
    $(this).click(function () {
        window.location.href = '../views/index.html';
    })
})
$(con_left).on("mouseout", ".more-action-list", function () {
    $(this).css({
        "display": "none"
    });
})

//登录判断
let person = document.querySelector('.person');
const login = getCookie("login");
console.log(login);
let username = getCookie("nickname");
if (!(login != 1 || username === undefined)) {
    $('.person > img').attr("src", "../images/login.jpeg");
    $('.person span a').text(username);
} else {
    window.location.href = "../views/detail.html";
}
/*********************************************渲染分割线 */

//获得点击的 id 
const resource_id=getCookie('resource_id');
// resource_id: "126839607"
// subject_id: 126839607

//动态渲染列表
//获取数据
let start = 0;
let flag = true;//开关，解决滑动过快是出现的问题
getListdetail();
function getListdetail() {
    // https://www.duitang.com/napi/vienna/feed/list/by_common/?start=0&limit=18
    //https://www.duitang.com/napi/vienna/atlas/detail/?atlas_id=126839607
    if (!flag) return;
    flag = false;
    // flag=true;
    ajax({
        url: '/dt_detail',
        data: {
            atlas_id:resource_id,
        },
        success(res) {
            // start = res.data.next_start;
            // console.log(start);
            
            //要根据 res.data 去渲染页面
            bindHtmldetail(res.data);
            // 到这里表示渲染页面完毕了
            console.log(res.data);
            flag = true;
        }
    })
}
const conLeft = document.querySelector('.con-left .content-hot');
function bindHtmldetail(detaillist) {
    console.log(detaillist);
    // detaillist.forEach(item => {
        for(let item in detaillist){
        // var imgsStr = ""
        // for(let b in detaillist.blogs){
        //     imgsStr += `<img src="${ b.photo.path }" alt="">`
        // }
        // var tags="";
        // for(let t in detaillist.tags){
        //     tags +=`<span class="tag">#${t.name}</span>`;
        // }
        var imgsStr = "";
        detaillist.blogs.forEach(b=>{
            imgsStr += `<img src="${ b.photo.path }" alt="">`
        })
        var tags="";
        detaillist.tags.forEach(t=>{
            tags +=`<span class="tag">#${t.name}</span>`;
        })
        let str = `
                <ol>
                    <li class="day active" data-id="${detaillist.id}">
                        <div class="total">
                            <div><img src="${ detaillist.sender.avatar }" alt=""></div>
                            <p>${ detaillist.sender.username }<br>
                                <span>${ detaillist.album.created_at }</span>
                            </p>
                        </div>
                        <a class="attention-status" href="javascript:;">关注</a>
                        <p class="intro">${detaillist.album.name}</p>
                        <div class="info-img">${imgsStr}</div>
                        <div class="atlas-tags">
                            ${tags}
                            <a href="javascript:;" class="add-tag">+ 添加标签</a>
                        </div>
                        <div class="info-bot-container">
                            <div class="info-bot">
                                <p>${detaillist.like_count}</p>
                                <p>${detaillist.comment_count}</p>
                                <p>${detaillist.favorite_count}</p>
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
        conLeft.innerHTML = str;
    };
}

/*********************************************渲染分割线 */

//https://www.duitang.com/napi/vienna/comment/list/?subject_id=126839607&subject_type=23&topic_id=126839607&start=5&limit=24
//https://blog.csdn.net/qq_41038929/article/details/83506414
//https://www.duitang.com/napi/blog/list/by_filter_id/?include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E7%BE%8E%E9%A3%9F%E8%8F%9C%E8%B0%B1&start=24&_=1628086230070https://www.duitang.com/napi/blog/list/by_filter_id/?
//include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E7%BE%8E%E9%A3%9F%E8%8F%9C%E8%B0%B1&start=24&_=1628086230070

/*********************************************分割线 */


// getListCmt();
// function getListCmt() {
//     if(!flag) return;
//     flag = false;
//     ajax({
//         //https://www.duitang.com/napi/vienna/comment/list/?subject_id=126839607&subject_type=23&topic_id=126839607&start=0&limit=5
//         url: '/dt_comment',
//         data : {
//             subject_id:resource_id,
//             subject_type:subject_type,
//             topic_id:topic_id,
//             start: start,
//             limit:5
//     },
//     success(res){
//         //每加载一次，start即下一次开始加载的序号，需要更新
//         start = res.data.next_start;
//         //需要用接收回来的res.data.object_list，来渲染页面，组装成一个li去插入页面；
//         // bindHTML(res.data.object_list);
//         console.log(res.data.object_list);
//         //请求成功，渲染页面结束
//         flag = true;
//     }
//     })
// }
// function bindHtmlCmt(list){
//     console.log(list);
//     // for(let i in list.data.object_list){
//     //     console.log(i);
//     //     console.log(list.data.object_list[i]);
//     // }
//     for(let i in list.data.object_list){
//         item=list.data.object_list;
//         let str = `
//         <li class="cmt clr" data-cid="" data-sid="${item[i].id}" data-type="23" data-subjectid="${item[i].subject_id}" data-sname="" data-rcount="0">
//             <div class="line-split-h"></div>
//             <a href="/people/?user_id=${item[i].sender.id}" class="sender-avatar" target="_blank">
//                 <img class="circle-icon"src="${item[i].sender.avatar}">
//             </a>
//             <div class="cmt-r">
//                 <div class="cmt-r-info clr">
//                     <a class="cmt-r-name" href="/people/?user_id=26380578" target="_blank">${item[i].sender.username}</a>
//                     <span class="cmt-r-time">${item[i].create_time_str}</span>
//                 </div>
//                 <div class="commont-data">
//                     <div class="cmt-box">
//                         <p class="cmt-maincont">
//                             ${item[i].content}
//                         </p>
//                         <div class="cmt-r-item-ft clr">
//                             <div class="cmt-r-item-pos">
//                                 <span class="cmt-like " data-likeid="27555794">
//                                     <i class="l icon"></i>
//                                     <em>${item[i].like_count}</em>
//                                 </span>
//                                 <span class="cmt-reply-btn">
//                                     <em>回复</em>
//                                 </span>
//                                 <span class="cmt-report-btn cmt-dn">
//                                     <em>举报</em>
//                                 </span>
//                                 <span class="cmt-delete-btn cmt-dn">
//                                     <em>删除</em>
//                                 </span>
//                                 <span class="r c-more"></span>
//                             </div>
//                         </div>
//                         <div class="reply-box cmt-dn">
//                             <div class="comment-input-in cmt-dn">
//                                 <textarea placeholder="说些什么吧"></textarea>
//                                 <div class="comment-send-btn-wrap">
//                                     <a class="comment-send-btn" href="javascript:;">发送</a>
//                                     <a class="comment-send-cancel" href="javascript:;">取消</a>
//                                 </div>
//                             </div>
//                             <div class="reply-box-in">
        
//                             </div>
//                             <p class="cmt-r-item-find cmt-dn"><a href="javascript:;">查看全部回复</a></p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </li>
//                 `;
        
//         cmtList.innerHTML += str;
//     };
// }