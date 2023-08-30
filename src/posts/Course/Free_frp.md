---
icon: edit
date: 2023-08-30
category:
  教程
tag:
  - Web
---

# 使(bai)用(piao) Cloudflare的免费内网穿透
## 什么是内网穿透
> From: 百度百科
> 
> 内网穿透，也即 NAT 穿透，进行 NAT 穿透是为了使具有某一个特定源 IP 地址和源端口号的数据包不被 NAT 设备屏蔽而正确路由到内网主机。下面就相互通信的主机在网络中与 NAT 设备的相对位置介绍内网穿透方法。
## 目前的内网穿透方案
- 自己买一个有公网ipv4 IP的服务器，然后再搭建frp服务端，绑定域名(花费大，成本难以承担)
- 使用别人的frp服务端(如Openfrp,樱花frp...)，但是这样基本无法绑定域名(虽然有个绑定域名，但是研究了两个月没研究出来，wiki也没有写)，并且给的域名必须要带上端口号(众所周知某最受欢迎的博客平台不能带端口号转跳)

虽然第二种方案可以选择花生壳(亲测可以绑定域名)，但是要氪VIP...

于是经过一年多的寻找，找到了Cloudflare(大厂~)的一个服务可以当内网穿透用

## 使用Cloudflare的Argo Tunnel
### 参考
[知乎"云原生基地"](https://zhuanlan.zhihu.com/p/482666652)
### 什么是Cloudflare Argo Tunnel
只是解释一下，可以不看

解释的通俗一点，这是一个Cloudflare做出来保护用户本地服务安全发布的东西，如果用一般的frp发布，可能遭到攻击，但是如果用Cloudflare Argo Tunnel，请求就会先经过Cloudflare的服务器，Cloudflare的服务器就可以帮你抵挡DDoS，然后正常的访问就会由Cloudflare发给你的服务器，所有的Argo Tunnel都会被解析到(UUID).cfargotunnel.com，也就是不会出现端口号无法转跳的问题(可以安心搭建Wordpress)
### 问题
目前中国大陆地区访问Cloudflare会比较慢，但是还是可以访问，可以自己百度:怎么自选Cloudflare服务器
### 开始
本文以树莓派上的Linux(Ubuntu-arm64)举例，Windows的步骤也一起给了)
### 准备
- 一个Cloudflare账号(免费注册的就行，不用开VIP，提前在默认浏览器登录好)
- 一个绑定在Cloudflare域名(.top30一年，不贵，可以在阿里云买)
- 一台内网服务器(没有这个你还看什么???)
### 服务器端部署
服务端需要安装一个Cloudflare的软件Cloudflared
#### 下载
从[Cloudflared的Github](https://github.com/cloudflare/cloudflared/releases)下载，自行选择版本，不过接下来的教程是用的没有拓展名的那个Binary Source,Windows请下载Windows版本

Linux可以直接复制这个命令(可能是旧版，介意的去官网)，注意架构，不一样就去官网
```shell
cd ~
sudo wget https://github.com/cloudflare/cloudflared/releases/download/2023.8.1/cloudflared-linux-amd64
```
#### 登录
首先cd到下载的目录，比如我下到了/home/sciencekill,就
```shell
cd ~
```
Windows用户打开那个下载的文件夹(最好不要放到中文或者名字很长的文件夹里)，在此处打开终端

最好再把文件的名字改一下，不然敲着累，比如我改为cfd,Windows的要保留exe后缀

Windows:
```shell
ren cloudflared-windows-amd64.exe cfd.exe
```
Linux:
```shell
sudo mv ./cloudflared-linux-amd64 ./cfd
```

然后输入:

Windows:
```shell
./cfd.exe tunnel login
```
Linux:
```shell
./cfd tunnel login
```
接着有显示器的就会弹出一个浏览器窗口，没有的会给一个网址，点进去，然后选择要绑定的域名，认证完就可以关掉浏览器了，此时查看命令行，命令也应该结束了
#### 创建隧道
Windows:
```shell
./cfd.exe tunnel create [隧道名]
```
Linux:
```shell
./cfd tunnel create [隧道名]
```
创建完后会输出一个UUID(一大串乱七八糟的英文字母和"-"就是的)，复制备用
#### 创建CNAME解析
打开Cloudflare刚刚绑定的域名的DNS设置，添加一个记录
- 类型: CNAME
- 名称: 你想让这个隧道解析到的域名前缀
- 目标: [UUID].cfargotunnel.com
#### 创建配置文件
在一个路径好打的位置建立配置文件，文件名随便，不是中文就行，后缀yml
输入以下内容:
```yaml
tunnel: [隧道名称或uuid]
credentials-file: /root/.cloudflared/[tunnel 的 UUID].json

ingress:
- hostname: 刚刚的CNAME记录的网址
  service: http://localhost:80#这是服务的端口号，如80是网站，自行更改
- service: http_status:404
```
#### 启动
Windows:
```shell
./cfd.exe tunnel --config [配置文件地址] run
```
Linux:
```shell
./cfd tunnel --config [配置文件地址] run
```
然后就可以通过刚刚CNAME的域名访问本地服务器了
