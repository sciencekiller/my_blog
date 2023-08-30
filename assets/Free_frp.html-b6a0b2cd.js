import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c,a,b as e,d as l,e as n}from"./app-8ff75433.js";const t={},o=n('<h1 id="使-bai-用-piao-cloudflare的免费内网穿透" tabindex="-1"><a class="header-anchor" href="#使-bai-用-piao-cloudflare的免费内网穿透" aria-hidden="true">#</a> 使(bai)用(piao) Cloudflare的免费内网穿透</h1><h2 id="什么是内网穿透" tabindex="-1"><a class="header-anchor" href="#什么是内网穿透" aria-hidden="true">#</a> 什么是内网穿透</h2><blockquote><p>From: 百度百科</p><p>内网穿透，也即 NAT 穿透，进行 NAT 穿透是为了使具有某一个特定源 IP 地址和源端口号的数据包不被 NAT 设备屏蔽而正确路由到内网主机。下面就相互通信的主机在网络中与 NAT 设备的相对位置介绍内网穿透方法。</p></blockquote><h2 id="目前的内网穿透方案" tabindex="-1"><a class="header-anchor" href="#目前的内网穿透方案" aria-hidden="true">#</a> 目前的内网穿透方案</h2><ul><li>自己买一个有公网ipv4 IP的服务器，然后再搭建frp服务端，绑定域名(花费大，成本难以承担)</li><li>使用别人的frp服务端(如Openfrp,樱花frp...)，但是这样基本无法绑定域名(虽然有个绑定域名，但是研究了两个月没研究出来，wiki也没有写)，并且给的域名必须要带上端口号(众所周知某最受欢迎的博客平台不能带端口号转跳)</li></ul><p>虽然第二种方案可以选择花生壳(亲测可以绑定域名)，但是要氪VIP...</p><p>于是经过一年多的寻找，找到了Cloudflare(大厂~)的一个服务可以当内网穿透用</p><h2 id="使用cloudflare的argo-tunnel" tabindex="-1"><a class="header-anchor" href="#使用cloudflare的argo-tunnel" aria-hidden="true">#</a> 使用Cloudflare的Argo Tunnel</h2><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>',9),u={href:"https://zhuanlan.zhihu.com/p/482666652",target:"_blank",rel:"noopener noreferrer"},p=n('<h3 id="什么是cloudflare-argo-tunnel" tabindex="-1"><a class="header-anchor" href="#什么是cloudflare-argo-tunnel" aria-hidden="true">#</a> 什么是Cloudflare Argo Tunnel</h3><p>只是解释一下，可以不看</p><p>解释的通俗一点，这是一个Cloudflare做出来保护用户本地服务安全发布的东西，如果用一般的frp发布，可能遭到攻击，但是如果用Cloudflare Argo Tunnel，请求就会先经过Cloudflare的服务器，Cloudflare的服务器就可以帮你抵挡DDoS，然后正常的访问就会由Cloudflare发给你的服务器，所有的Argo Tunnel都会被解析到(UUID).cfargotunnel.com，也就是不会出现端口号无法转跳的问题(可以安心搭建Wordpress)</p><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h3><p>目前中国大陆地区访问Cloudflare会比较慢，但是还是可以访问，可以自己百度:怎么自选Cloudflare服务器</p><h3 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h3><p>本文以树莓派上的Linux(Ubuntu-arm64)举例，Windows的步骤也一起给了)</p><h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3><ul><li>一个Cloudflare账号(免费注册的就行，不用开VIP，提前在默认浏览器登录好)</li><li>一个绑定在Cloudflare域名(.top30一年，不贵，可以在阿里云买)</li><li>一台内网服务器(没有这个你还看什么???)</li></ul><h3 id="服务器端部署" tabindex="-1"><a class="header-anchor" href="#服务器端部署" aria-hidden="true">#</a> 服务器端部署</h3><p>服务端需要安装一个Cloudflare的软件Cloudflared</p><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4>',12),h={href:"https://github.com/cloudflare/cloudflared/releases",target:"_blank",rel:"noopener noreferrer"},b=n(`<p>Linux可以直接复制这个命令(可能是旧版，介意的去官网)，注意架构，不一样就去官网</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">sudo</span> <span class="token function">wget</span> https://github.com/cloudflare/cloudflared/releases/download/2023.8.1/cloudflared-linux-amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="登录" tabindex="-1"><a class="header-anchor" href="#登录" aria-hidden="true">#</a> 登录</h4><p>首先cd到下载的目录，比如我下到了/home/sciencekill,就</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows用户打开那个下载的文件夹(最好不要放到中文或者名字很长的文件夹里)，在此处打开终端</p><p>最好再把文件的名字改一下，不然敲着累，比如我改为cfd,Windows的要保留exe后缀</p><p>Windows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ren cloudflared-windows-amd64.exe cfd.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> ./cloudflared-linux-amd64 ./cfd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后输入:</p><p>Windows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd.exe tunnel login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd tunnel login
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接着有显示器的就会弹出一个浏览器窗口，没有的会给一个网址，点进去，然后选择要绑定的域名，认证完就可以关掉浏览器了，此时查看命令行，命令也应该结束了</p><h4 id="创建隧道" tabindex="-1"><a class="header-anchor" href="#创建隧道" aria-hidden="true">#</a> 创建隧道</h4><p>Windows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd.exe tunnel create <span class="token punctuation">[</span>隧道名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd tunnel create <span class="token punctuation">[</span>隧道名<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建完后会输出一个UUID(一大串乱七八糟的英文字母和&quot;-&quot;就是的)，复制备用</p><h4 id="创建cname解析" tabindex="-1"><a class="header-anchor" href="#创建cname解析" aria-hidden="true">#</a> 创建CNAME解析</h4><p>打开Cloudflare刚刚绑定的域名的DNS设置，添加一个记录</p><ul><li>类型: CNAME</li><li>名称: 你想让这个隧道解析到的域名前缀</li><li>目标: [UUID].cfargotunnel.com</li></ul><h4 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h4><p>在一个路径好打的位置建立配置文件，文件名随便，不是中文就行，后缀yml<br> 输入以下内容:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">tunnel</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>隧道名称或uuid<span class="token punctuation">]</span>
<span class="token key atrule">credentials-file</span><span class="token punctuation">:</span> /root/.cloudflared/<span class="token punctuation">[</span>tunnel 的 UUID<span class="token punctuation">]</span>.json

<span class="token key atrule">ingress</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">hostname</span><span class="token punctuation">:</span> 刚刚的CNAME记录的网址
  <span class="token key atrule">service</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">80</span><span class="token comment">#这是服务的端口号，如80是网站，自行更改</span>
<span class="token punctuation">-</span> <span class="token key atrule">service</span><span class="token punctuation">:</span> http_status<span class="token punctuation">:</span><span class="token number">404</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h4><p>Windows:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd.exe tunnel <span class="token parameter variable">--config</span> <span class="token punctuation">[</span>配置文件地址<span class="token punctuation">]</span> run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./cfd tunnel <span class="token parameter variable">--config</span> <span class="token punctuation">[</span>配置文件地址<span class="token punctuation">]</span> run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后就可以通过刚刚CNAME的域名访问本地服务器了</p>`,35);function v(m,f){const s=d("ExternalLinkIcon");return r(),c("div",null,[o,a("p",null,[a("a",u,[e('知乎"云原生基地"'),l(s)])]),p,a("p",null,[e("从"),a("a",h,[e("Cloudflared的Github"),l(s)]),e("下载，自行选择版本，不过接下来的教程是用的没有拓展名的那个Binary Source,Windows请下载Windows版本")]),b])}const x=i(t,[["render",v],["__file","Free_frp.html.vue"]]);export{x as default};
