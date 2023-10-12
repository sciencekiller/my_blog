import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as o,a as i,b as e,d as l,e as r}from"./app-084797fe.js";const d={},c=i("h1",{id:"winui3入门教程-部署集成开发环境",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#winui3入门教程-部署集成开发环境","aria-hidden":"true"},"#"),e(" WinUI3入门教程--部署集成开发环境")],-1),u=i("p",null,"工欲善其事必先利其器，对于任何一个开发人员来说，一款使用舒适，功能齐全的IDE都必不可少。对于WinUI3开发，我推荐使用Visual Studio，目前我使用的体验还是比较好的，没有奇奇怪怪的报错。JetBrains Rider暂时没有用过，但是好像JB对于WinUI支持不是特别好，所以不是特别推荐Rider。",-1),h=i("h2",{id:"安装visual-studio-installer",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#安装visual-studio-installer","aria-hidden":"true"},"#"),e(" 安装Visual Studio Installer")],-1),p={href:"https://visualstudio.microsoft.com/zh-hans/",target:"_blank",rel:"noopener noreferrer"},_=i("br",null,null,-1),m=i("img",{src:"https://images.sciencekill.top/vsdownload.png",alt:"",loading:"lazy"},null,-1),f=i("br",null,null,-1),v=r('<h2 id="部署visual-studio" tabindex="-1"><a class="header-anchor" href="#部署visual-studio" aria-hidden="true">#</a> 部署Visual Studio</h2><p>当Visual Studio Installer安装正常完成之后，就会自动打开Visual Studio的安装页面。在这个页面，你会看到各种Visual Studio版本，在确定你拥有此版本的许可证时，点击安装。<br><img src="https://images.sciencekill.top/vsins.png" alt="这里因为我已经安装了，所以只有Preview版本，正常应该有三个版本，操作是一致的" loading="lazy"></p><h2 id="选择运行负荷" tabindex="-1"><a class="header-anchor" href="#选择运行负荷" aria-hidden="true">#</a> 选择运行负荷</h2><p>接着你将会看到一大堆复选框，有Node.js,Python……这里我们需要勾选以下几个项目（当然你要是硬盘超级大，可以给VS 300G，就当我啥都没说，全都勾上都没问题，以下的是必须勾选的）<br><img src="https://images.sciencekill.top/vsins2.png" alt="" loading="lazy"></p><ul><li>.NET桌面开发</li><li>通用Windows平台开发（即UWP）</li></ul><div class="hint-container warning"><p class="hint-container-title">必须选用Windows应用SDK</p><p>你会在网上的各种教程中看到让你使用Project Reunion，包括我当时学的时候也是不停的下Project Reunion，但是一直报错。请注意，Project Reunion已经弃用，现在使用Windows应用SDK（Windows App SDK）！！！在右方详细信息中.NET桌面开发一栏勾选Windows应用SDK C#模板！！！</p></div><h2 id="安装visual-studio" tabindex="-1"><a class="header-anchor" href="#安装visual-studio" aria-hidden="true">#</a> 安装Visual Studio</h2><p>你要是要安装到C盘那就直接点安装，否则也很简单，在安装位置那一栏选择你要的安装路径就行了，其他设置保持不变（除非你知道你自己在做什么）</p><p>完成上述步骤后，你的运行环境就准备好了，接着就该创建新的WinUI3项目了</p>',9);function S(g,V){const a=s("ExternalLinkIcon");return t(),o("div",null,[c,u,h,i("p",null,[e("前往"),i("a",p,[e("Visual Studio下载页面"),l(a)]),e("，下载Visual Studio Community（如果你有别的版本的正版或者破解版密钥，那更好）"),_,m,f,e(" 接着运行下载的应用程序，等待安装完成即可")]),v])}const I=n(d,[["render",S],["__file","IDE.html.vue"]]);export{I as default};
