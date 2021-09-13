use duitang;
CREATE TABLE `members` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(200) NOT NULL,
    `password` varchar(16) NOT NULL,
    `nickname` varchar(200) NOT NULL,
    `smallAvata` varchar(200) NOT NULL,
    `tel` varchar(11) NOT NULL, 
    `email` varchar(20) NOT NULL ,
    PRIMARY KEY (`id`)
)ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;