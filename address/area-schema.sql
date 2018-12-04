/*!40101 SET NAMES binary*/;
/*!40014 SET FOREIGN_KEY_CHECKS=0*/;

CREATE TABLE `area` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '索引ID',
  `name` varchar(50) NOT NULL COMMENT '地区名称',
  `parent_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '地区父ID',
  `zipcode` char(6) DEFAULT '' COMMENT '邮政编码',
  `area_deep` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '地区深度，从1开始',
  PRIMARY KEY (`id`),
  KEY `area_parent_id` (`parent_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='地区表';
