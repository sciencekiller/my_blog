---
icon: edit
date: 2023-10-12
category:
  WinUI3
tag:
  - IDE
---
# WinUI3入门教程--部署集成开发环境
工欲善其事必先利其器，对于任何一个开发人员来说，一款使用舒适，功能齐全的IDE都必不可少。对于WinUI3开发，我推荐使用Visual Studio，目前我使用的体验还是比较好的，没有奇奇怪怪的报错。JetBrains Rider暂时没有用过，但是好像JB对于WinUI支持不是特别好，所以不是特别推荐Rider。
## 安装Visual Studio Installer
前往[Visual Studio下载页面](https://visualstudio.microsoft.com/zh-hans/)，下载Visual Studio Community（如果你有别的版本的正版或者破解版密钥，那更好）
![](https://images.sciencekill.top/vsdownload.png)
接着运行下载的应用程序，等待安装完成即可
## 部署Visual Studio
当Visual Studio Installer安装正常完成之后，就会自动打开Visual Studio的安装页面。在这个页面，你会看到各种Visual Studio版本，在确定你拥有此版本的许可证时，点击安装。
![这里因为我已经安装了，所以只有Preview版本，正常应该有三个版本，操作是一致的](https://images.sciencekill.top/vsins.png)
## 选择运行负荷
接着你将会看到一大堆复选框，有Node.js,Python……这里我们需要勾选以下几个项目（当然你要是硬盘超级大，可以给VS 300G，就当我啥都没说，全都勾上都没问题，以下的是必须勾选的）
![](https://images.sciencekill.top/vsins2.png)
- .NET桌面开发
- 通用Windows平台开发（即UWP）

:::warning 必须选用Windows应用SDK
你会在网上的各种教程中看到让你使用Project Reunion，包括我当时学的时候也是不停的下Project Reunion，但是一直报错。请注意，Project Reunion已经弃用，现在使用Windows应用SDK（Windows App SDK）！！！在右方详细信息中.NET桌面开发一栏勾选Windows应用SDK C#模板！！！
:::
## 安装Visual Studio
你要是要安装到C盘那就直接点安装，否则也很简单，在安装位置那一栏选择你要的安装路径就行了，其他设置保持不变（除非你知道你自己在做什么）

完成上述步骤后，你的运行环境就准备好了，接着就该创建新的WinUI3项目了