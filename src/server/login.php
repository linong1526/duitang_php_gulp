<?php

    $username = $_POST['username'];
    $password = $_POST['password'];

    $link = mysqli_connect('127.0.0.1','root','root','duitang');
    $sql = "SELECT * FROM `members` WHERE `username`='$username' AND `password`='$password'";
    $res = mysqli_query($link,$sql);
    //关联数组mysqli_assoc
    $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
    mysqli_close($link);
    if(count($data)){
        $arr = Array(
            "message" => "登录成功",
            "code" => 1,
            "nickname" => $data[0]['nickname']
        );
    } else{
        $arr = Array(
            "massage" => "登录失败",
            "code" => 0
        );
    };
    echo json_encode($arr);

//     header("Content-type:text/html;charset=utf8;");
// // 如果登录成功 
// if($username!=null){
//     // 则为客户端写入登录信息cookie
//     setcookie("login",1, 60 * 60 * 24);
//     setcookie("username",$username,60 * 60 * 24);

//     // 并重定向到主页
//     header("location:./index.html");
// }

// // 否则打回登录页
// else{
//     header("location:./login.html");
// }

?>