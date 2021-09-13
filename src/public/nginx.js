/* <script
        src="https://www.duitang.com/napi/blog/list/by_filter_id/?include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E6%89%8B%E5%B7%A5DIY&start=24">
    </script>  */
let xhr = new XMLHttpRequest();
        // xhr.open('get',
        //     'https://www.duitang.com/napi/blog/list/by_filter_id/?include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E6%89%8B%E5%B7%A5DIY&start=24'
        // );

        // xhr.open('get',
        //     '/dt?include_fields=top_comments%2Cis_root%2Csource_link%2Citem%2Cbuyable%2Croot_id%2Cstatus%2Clike_count%2Csender%2Calbum%2Creply_count&filter_id=%E6%89%8B%E5%B7%A5DIY&start=24'
        // );
        xhr.open('get',
        '/dt_comment?subject_id=126839607&subject_type=23&topic_id=126839607&start=0&limit=5'
    );
        xhr.send();
        xhr.onload = function () {
            let res = xhr.responseText;
            console.log(JSON.parse(res));
        }