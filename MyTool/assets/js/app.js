var app = new Vue({
			'el' : '#app',
			data : {
				showMorePanel: false,
				showNormalPanel: true,
				showDownloadPanel: false,
				moreActive: false,
				normalActive: true,
				downloadActive: false,
				manualApps: [
					{
						'name' : 'ThinkPHP3.2.2',
						'src' : 'file:///D:/MyApp/manuals/ThinkPHP3.2.2.chm',
					}, {
						'name' : 'php',
						'src' : 'file:///D:/MyApp/manuals/php.chm',
					}, {
						'name' : 'jquery1.8.3',
						'src' : 'file:///D:/MyApp/manuals/jquery1.8.3.chm',
					}, {
						'name' : 'CSS3.0',
						'src' : 'file:///D:/MyApp/manuals/CSS3.0.chm',
					}, {
						'name' : 'Laravel5.3',
						'src' : 'file:///D:/MyApp/manuals/Laravel5.3.chm',
					}, {
						'name' : 'redis',
						'src' : 'file:///D:/MyApp/manuals/redis.chm',
					}, {
						'name' : 'yii2.0',
						'src' : 'file:///D:/MyApp/manuals/yii2.0.chm',
					},
				],
				aaaApps:[
					{
						'name' : '搜狗浏览器',
						'icon' : 'icon-liulanqi-sougou',
						'path' : 'file:///D:/Program%20Files/SogouExplorer/SogouExplorer.exe',
					},  {
						'name' : 'Chrome',
						'icon' : 'icon-chrome',
						'path' : 'file:///C:/Program%20Files%20(x86)/Google/Chrome/Application/chrome.exe',
					},  {
						'name' : 'Firefox',
						'icon' : 'icon-firefox',
						'path' : 'file:///C:/Program%20Files%20(x86)/Mozilla%20Firefox/firefox.exe',
					},  {
						'name' : 'Xshell',
						'icon' : 'icon-shell',
						'path' : 'file:///D:/Program%20Files/Xshell%205/Xshell.exe',
					},    {
						'name' : '有道词典',
						'icon' : 'icon-youdaocidian',
						'path' : 'file:///D:/Program%20Files/Dict/YoudaoDict.exe',
					},
				],
				bbbApps:[
					{
						'name' : '搜狗浏览器',
						'icon' : 'icon-liulanqi-sougou',
						'path' : 'file:///D:/Program%20Files/SogouExplorer/SogouExplorer.exe',
					},  {
						'name' : 'Chrome',
						'icon' : 'icon-chrome',
						'path' : 'file:///C:/Program%20Files%20(x86)/Google/Chrome/Application/chrome.exe',
					},  {
						'name' : 'Firefox',
						'icon' : 'icon-firefox',
						'path' : 'file:///C:/Program%20Files%20(x86)/Mozilla%20Firefox/firefox.exe',
					},  {
						'name' : 'Xshell',
						'icon' : 'icon-shell',
						'path' : 'file:///D:/Program%20Files/Xshell%205/Xshell.exe',
					},    {
						'name' : '有道词典',
						'icon' : 'icon-youdaocidian',
						'path' : 'file:///D:/Program%20Files/Dict/YoudaoDict.exe',
					},
				],
				cccApps:[
					{
						'name' : '搜狗浏览器',
						'icon' : 'icon-liulanqi-sougou',
						'path' : 'file:///D:/Program%20Files/SogouExplorer/SogouExplorer.exe',
					},  {
						'name' : 'Chrome',
						'icon' : 'icon-chrome',
						'path' : 'file:///C:/Program%20Files%20(x86)/Google/Chrome/Application/chrome.exe',
					},  {
						'name' : 'Firefox',
						'icon' : 'icon-firefox',
						'path' : 'file:///C:/Program%20Files%20(x86)/Mozilla%20Firefox/firefox.exe',
					},  {
						'name' : 'Xshell',
						'icon' : 'icon-shell',
						'path' : 'file:///D:/Program%20Files/Xshell%205/Xshell.exe',
					},    {
						'name' : '有道词典',
						'icon' : 'icon-youdaocidian',
						'path' : 'file:///D:/Program%20Files/Dict/YoudaoDict.exe',
					},
				],
				firstApps:[
					{
						'name' : 'phpStorm',
						'icon' : 'icon-ps',
						'path' : 'file:///D:/PhpStorm/bin/phpstorm64.exe',
					}, {
						'name' : 'Notepad++',
						'icon' : 'icon-notepadadd',
						'path' : 'file:///D:/Navicat%20for%20MySQL/Notepad++.exe',
					}, {
						'name' : 'Navicat',
						'icon' : 'icon-weimingming-',
						'path' : 'file:///D:/Program%20Files/Navicat%20Premium/navicat.exe',
					},  {
						'name' : 'Redis',
						'icon' : 'icon-xingzhuang',
						'path' : 'file:///D:/Program%20Files/RedisDesktopManager/rdm.exe',
					},  {
						'name' : 'Sublime',
						'icon' : 'icon-sublime',
						'path' : 'file:///D:/Program%20Files/Sublime%20Text%203/sublime_text.exe',
					},  {
						'name' : '我的电脑',
						'icon' : 'icon-computer',
						'path' : 'EXPLORER.EXE /',
					},
				],
				secondApps:[
					{
						'name' : '搜狗浏览器',
						'icon' : 'icon-liulanqi-sougou',
						'path' : 'file:///D:/Program%20Files/SogouExplorer/SogouExplorer.exe',
					},  {
						'name' : 'Chrome',
						'icon' : 'icon-chrome',
						'path' : 'file:///C:/Program%20Files%20(x86)/Google/Chrome/Application/chrome.exe',
					},  {
						'name' : 'Firefox',
						'icon' : 'icon-firefox',
						'path' : 'file:///C:/Program%20Files%20(x86)/Mozilla%20Firefox/firefox.exe',
					},    {
						'name' : 'Postman',
						'icon' : 'icon-postman',
						'path' : 'file:///C:/Users/THINK/AppData/Local/Postman/Update.exe --processStart "Postman.exe"',
					},  {
						'name' : 'Xshell',
						'icon' : 'icon-shell',
						'path' : 'file:///D:/Program%20Files/Xshell%205/Xshell.exe',
					},    {
						'name' : 'Xftp',
						'icon' : 'icon-ftp',
						'path' : 'file:///D:/Program%20Files/xftp/Xftp.exe',
					},
				],
				thirdApps:[
					{
						'name' : 'QQ',
						'icon' : 'icon-qq',
						'path' : 'file:///D:/Program%20Files/QQ/Bin/QQScLauncher.exe',
					},  {
						'name' : '微信',
						'icon' : 'icon-yingdaicon04',
						'path' : 'file:///D:/Program%20Files/WeChat/WeChat.exe',
					},  {
						'name' : '酷我音乐',
						'icon' : 'icon-kuwo',
						'path' : 'file:///D:/Program%20Files/kuwo/kuwomusic/8.7.2.0_W4/bin/KwMusic.exe',
					},  {
						'name' : '迅雷',
						'icon' : 'icon-xunlei',
						'path' : 'file:///D:/Program%20Files/迅雷/Program/Thunder.exe',
					},     {
						'name' : '有道词典',
						'icon' : 'icon-youdaocidian',
						'path' : 'file:///D:/Program%20Files/Dict/YoudaoDict.exe',
					},    {
						'name' : '百度网盘',
						'icon' : 'icon-baidu_yun__easyiconnet',
						'path' : 'file:///D:/BD/BaiduNetdisk/BaiduNetdisk.exe',
					},
				],
				fourthApps:[
					{
						'name' : 'QQ',
						'icon' : 'icon-qq',
						'path' : 'file:///D:/Program%20Files/QQ/Bin/QQScLauncher.exe',
					},  {
						'name' : '微信',
						'icon' : 'icon-yingdaicon04',
						'path' : 'file:///D:/Program%20Files/WeChat/WeChat.exe',
					},  {
						'name' : '酷我音乐',
						'icon' : 'icon-kuwo',
						'path' : 'file:///D:/Program%20Files/kuwo/kuwomusic/8.7.2.0_W4/bin/KwMusic.exe',
					},  {
						'name' : '迅雷',
						'icon' : 'icon-xunlei',
						'path' : 'file:///D:/Program%20Files/迅雷/Program/Thunder.exe',
					}, 
				],
				tools:[
					 {
						'name' : 'phpstudy',
						'src' : 'http://www.phpstudy.net/phpstudy/phpStudy20161103.zip',
					},{
						'name' : 'Notepad++',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/5d7946e712c83/npp_7.4.1_Installer.exe',
					},{
						'name' : 'Sublime Text 3',
						'src' : 'https://download.sublimetext.com/Sublime%20Text%20Build%203126%20x64%20Setup.exe',
					},{
						'name' : 'PhpStorm',
						'src' : 'https://download.jetbrains.com/webide/PhpStorm-2017.1.4.exe',
					},
				],
				administrations: [
					{
						'name' : 'Git',
						'src' : 'https://github.com/git-for-windows/git/releases/download/v2.13.0.windows.1/Git-2.13.0-64-bit.exe',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},{
						'name' : 'Xftp_5',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/28f092744fe45/Xftp_5.0.1028.exe',
					},{
						'name' : 'Node.js',
						'src' : 'https://npm.taobao.org/mirrors/node/v6.10.3/node-v6.10.3-x64.msi',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},{
						'name' : 'Xshell_5',
						'src' : 'http://dlsw.baidu.com/sw-search-sp/soft/7b/15201/Xshell_5.0.0.37_setup.1459931786.exe',
					},
				],
				chats: [
					{
						'name' : 'QQ',
						'src' : 'http://dldir1.qq.com/qqfile/qq/QQ8.9.2/20760/QQ8.9.2.exe',
					},{
						'name' : '微信',
						'src' : 'http://dldir1.qq.com/weixin/Windows/WeChatSetup.exe',
					},
				],
				browses: [
					{
						'name' : '搜狗浏览器',
						'src' : 'http://download.ie.sogou.com/se/sogou_explorer_7.0_0502.exe',
					},{
						'name' : '谷歌浏览器',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/7164c4c6bc6e0/ChromeStandalone_58.0.3029.110_Setup.exe',
					},{
						'name' : '迅雷',
						'src' : 'http://down.sandai.net/thunder9/Thunder9.1.32.752.exe',
					},{
						'name' : '百度网盘',
						'src' : 'http://issuecdn.baidupcs.com/issue/netdisk/yunguanjia/BaiduNetdisk_5.5.5.exe',
					},
				],
				others: [
					{
						'name' : '有道词典',
						'src' : 'http://cidian.youdao.com/download/YoudaoDict.exe',
					},{
						'name' : '有道云笔记',
						'src' : 'http://download.ydstatic.com/notewebsite/downloads/YNote.exe',
					},{
						'name' : 'QQ五笔输入法',
						'src' : 'http://sw.bos.baidu.com/sw-search-sp/software/684d82e9345/QQWubi_Setup_2.2.334.400.exe',
					},{
						'name' : 'WPS',
						'src' : 'https://wdl1.cache.wps.cn/wps/download/W.P.S.6391.12012.0.exe',
					},
				],
			},
			methods: {
				// 判断浏览器类型
				// 如果不是IE 显示提示信息
				isIE: function(){
					if (!!window.ActiveXObject || "ActiveXObject" in window)
				        return false;
				    else
				        return true;
				},
				myAppRun: function(path){
					if(this.isIE()){
						alert('您用的不是IE浏览器，请换用IE浏览器');
					} else{
						try {
							var objShell = new ActiveXObject("wscript.shell");
							objShell.Run(path);
							objShell = null;
							//window.close();
						} catch (e) {
							console.log(this.isIE());
						  	alert('找不到文件"'+path+'"(或它的组件之一)。请确定路径和文件名是否正确，而且所需的库文件均可用notepad。');
						}
					}
					return false;
				}
			}
		});


function checkPanel(obj, id) {
	if(id == 'normal') {
		app.showMorePanel = false;
		app.showNormalPanel = true;
		app.showDownloadPanel = false;
		app.moreActive = false;
		app.normalActive = true;
		app.downloadActive = false;
	} else if (id == 'more') {
		app.showMorePanel = true;
		app.showNormalPanel = false;
		app.showDownloadPanel = false;
		app.moreActive = true;
		app.normalActive = false;
		app.downloadActive = false;
	} else if (id == 'download') {
		app.showMorePanel = false;
		app.showNormalPanel = false;
		app.showDownloadPanel = true;
		app.moreActive = false;
		app.normalActive = false;
		app.downloadActive = true;
	}
}
