---
icon: edit
date: 2023-3-19
category:
- 教程
  tag:
- 美化
---
# 修改开机图片教程
每次开机总要看着极具微软审美的圈在那转呀转，

还有一个简陋的"ASUS"

作为一个强迫症实在忍不了

所以该怎么修改开机图片?
## 准备
> 1、[HackBGRT](https://sksblog.netlify.app/posts/HackBGRT.html)(修改开机图片用)
>
> 2、[Diskgenius](https://sksblog.netlify.app/posts/DiskGenius.html)(修改磁盘用)
>
> 3、一张符合你审美的图片
>
> 4、~~能用的手、脑子、电脑~~

## 开始
### 1、确认文件及系统
首先，请确认你的图片是bmp格式，并且文件不要太大，最好为50KB以内

其次，你的系统必须支持UEFI驱动，查询方法：按住Win+R，输入msinfo32，必须要像这样
![UEFI](https://sksimages.netlify.app/images/02.png)
才可以继续安装

### 2、开始部署
在Github下载HackBGRT，并解压，解压后，你的文件目录应该是这样的
``` 
.
|-bootia32.efi
|-bootx64.efi
|-CHANGELOG.md
|-config.txt
|-LICENSE
|-README.efilib
|-README.md
|-setup.exe
|-splash.bmp

```
![就像这样~](https://sksimages.netlify.app/images/01.png)

如果你的目录基本一致，就可以继续了

### 3、替换图标
刚刚目录中的Splash.bmp即为所要替换的图片，请将准备好的图片重命名为Splash.bmp替换掉目录下原本的Splash.bmp

### 4、分配驱动器号
打开DiskGeniu，在主驱动器中寻找没有盘符号(即后面括号是数字不是字母的)的分区，依次打开，找到有EFI文件夹的分区，右键盘符，随意分配一个驱动器号

### 5、安装图片
以管理员身份运行刚刚目录中的setup.exe，并且输入I回车

### 6、删除驱动器号
打开DiskGenius，找到刚刚分配驱动器号的分区，右键，取消分配驱动器号

### 7、完成
重启见效果

