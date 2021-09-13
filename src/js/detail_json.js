//评论列表  jsonp数据请求
let xhr = new XMLHttpRequest();
        xhr.open('get',
        '/dt_comment?subject_id=126839607&subject_type=23&topic_id=126839607&start=0&limit=5'
    );
    xhr.send();
    // xhr.onreadystatechange = function (){
    //     if (this.readyState === 4){ 
    //         // 将获取的响应体的字符串转换为对象
    //         var data = JSON.parse(this.responseText);
    //         console.log(data);
    //         bindHtmlCmt(data);
    //     }
    // };
        xhr.onload = function () {
            let res = xhr.responseText;
            // console.log(JSON.parse(res));
            let data=JSON.parse(res);
            bindHtmlCmt(data);
        }

const cmtList = document.querySelector('.cmt-list ul');
console.log(cmtList);
//渲染页面的函数
function bindHtmlCmt(list){
    console.log(list);
    // for(let i in list.data.object_list){
    //     console.log(i);
    //     console.log(list.data.object_list[i]);
    // }
    for(let i in list.data.object_list){
        item=list.data.object_list;
        let str = `
        <li class="cmt clr" data-cid="" data-sid="${item[i].id}" data-type="23" data-subjectid="${item[i].subject_id}" data-sname="" data-rcount="0">
            <div class="line-split-h"></div>
            <a href="/people/?user_id=${item[i].sender.id}" class="sender-avatar" target="_blank">
                <img class="circle-icon"src="${item[i].sender.avatar}">
            </a>
            <div class="cmt-r">
                <div class="cmt-r-info clr">
                    <a class="cmt-r-name" href="/people/?user_id=26380578" target="_blank">${item[i].sender.username}</a>
                    <span class="cmt-r-time">${item[i].create_time_str}</span>
                </div>
                <div class="commont-data">
                    <div class="cmt-box">
                        <p class="cmt-maincont">
                            ${item[i].content}
                        </p>
                        <div class="cmt-r-item-ft clr">
                            <div class="cmt-r-item-pos">
                                <span class="cmt-like " data-likeid="27555794">
                                    <i class="l icon"></i>
                                    <em>${item[i].like_count}</em>
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
                `;
        
        cmtList.innerHTML += str;
    };
}
