/*
1.选获取数据 function getData(){}
2.返回数渲染  function render(){}
3.判断每一个div的高度 ，把内容添加到最小的div中
4.滚动条把最小div的高度的时候获取下一组数据
 */

let num=0;
let data=new Date();
let url=``;

// 获取数据
// let dynamic_atlas=document.querySelector('.content-detail .dynamic_atlas');
const cmtList = document.querySelector('.cmt-list ul');
let flag=true;
getData(url);

function getData(url){
    let xhr=new XMLHttpRequest();
    xhr.open('get',url);
    xhr.send();
    xhr.onload=function(){
        // let res=JSON.parse(xhr.responseText);
        let res=xhr;
        render(res);
        console.log(xhr);
        flag=true;
    }
}

function render(data){
    mun=data.data.next_start;
    let list =data.data.object_list;
    list.forEach((item)=>{
        let str = `
        <li class="cmt clr" data-cid="${item.id}" data-sid="${item.sender.id}" data-type="23" data-subjectid="${item.sender.subject_id}" data-sname="${item.sender.username}"
            data-rcount="0">
            <div class="line-split-h"></div>
            <a href="/people/?user_id=${item.sender.id}" class="sender-avatar" target="_blank">
                <img class="circle-icon"
                    src="${item.sender.avatar}">
            </a>
            <div class="cmt-r">
                <div class="cmt-r-info clr">
                    <a class="cmt-r-name" href="/people/?user_id=26380578" target="_blank">${item.sender.username}</a>
                    <span class="cmt-r-time">${item.create_time_str}</span>
                </div>
                <div class="commont-data">
                    <div class="cmt-box">
                        <p class="cmt-maincont">
                            ${item.content}
                        </p>
                        <div class="cmt-r-item-ft clr">
                            <div class="cmt-r-item-pos">
                                <span class="cmt-like " data-likeid="27555794">
                                    <i class="l icon"></i>
                                    <em>${item.like_count}</em>
                                </span>
                                <span class="cmt-reply-btn">
                                    <em>回复</em>
                                </span>
                                <span class="cmt-report-btn cmt-dn">
                                    <em>举报</em>
                                </span>
                                <span class="cmt-delete-btn cmt-dn">
                                    <em>删除</em>
                                </span>
                                <span class="r c-more"></span>
                            </div>
                        </div>
                        <div class="reply-box cmt-dn">
                            <div class="comment-input-in cmt-dn">
                                <textarea placeholder="说些什么吧"></textarea>
                                <div class="comment-send-btn-wrap">
                                    <a class="comment-send-btn" href="javascript:;">发送</a>
                                    <a class="comment-send-cancel" href="javascript:;">取消</a>
                                </div>
                            </div>
                            <div class="reply-box-in">
        
                            </div>
                            <p class="cmt-r-item-find cmt-dn"><a href="javascript:;">查看全部回复</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="cmt-show-more-comment"><a href="javascript:;">全部评论 &gt;</a></li>
                `;
        cmtList.innerHTML =str;
    })
}
