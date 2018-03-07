#MyTool

---

> 此工具只能应用于 windows  
> 并且此文件基于HTML5，写成的  
> 而mshta.exe 默认是以<ie7的版本  
> 要想使其能使用ie>9运行  
> 需要修改注册注册表：  

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