#MyTool

---

> 此工具只能应用于 windows  
> 并且此文件基于HTML5，写成的  
> 而mshta.exe 默认是以<ie7的版本  
> 要想使其能使用ie>9运行  
> 首先，更新ie浏览器（ie11 64位）：      
```
http://download.microsoft.com/download/5/6/F/56FD6253-CB53-4E38-94C6-74367DA2AB34/IE11-Windows6.1-x64-zh-cn.exe
```
> 其次，修改注册注册表（ie11）：  

---

> HKLM\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION  
> 
```
mshta.exe D_WORD 11000 (0x2AF8) = IE11  
```
> HKCU\Software\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BROWSER_EMULATION  
> 
```
mshta.exe D_WORD 11000 (0x2AF8) = IE11
```

#Calendar

---
>一个简单的带价格的日历