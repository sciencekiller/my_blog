import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as p,c as t,a as n,b as s,e as o}from"./app-368eb376.js";const c={},e=n("h1",{id:"最短路算法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最短路算法","aria-hidden":"true"},"#"),s(" 最短路算法")],-1),l=n("h2",{id:"floyd-warshall",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#floyd-warshall","aria-hidden":"true"},"#"),s(" Floyd-Warshall")],-1),u=n("p",null,[s("Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的"),n("strong",null,"多源最短路算法"),s(",其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为 "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"n"),n("mn",null,"3")])]),n("annotation",{encoding:"application/x-tex"},"n^3")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8141em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"n"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8141em"}},[n("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"3")])])])])])])])])])])],-1),i=o(`<p>下面是用C++实现的部分模板代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>d<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中d是一个二维数组,用于存放邻接表,d[i][j]存放图中从点i到点j的路径长度,没有路径的一般初始为极大值(2147483647或0x3f3f3f3f),在这个过程中,Floyd会使用三层循环分别枚举起点,中转点和终点,当可以从中转点更短的到达终点时,Floyd将会更新它们之间的路径长度,最后这一张图中的数值将是每个点之间的最短路,如果为初始的极大值,将表示为不可到达(特殊情况路径长度最短路碰巧相同则除外,一般不会出现,因此最好将极大值设置高一点,但不要超过存储变量的上限,如2147483647)</p><h2 id="bellman-ford" tabindex="-1"><a class="header-anchor" href="#bellman-ford" aria-hidden="true">#</a> Bellman-Ford</h2><p>Bellman-Ford(贝尔曼-福特)算法是解决图论最短路问题中<strong>带有负权边的单源最短路算法</strong>,Bellman-Ford算法的基本原理是进行n-1次松弛操作,每次判断每条边能否更新出更短的路径,其核心是<strong>三角不等式</strong>,当遍历(i,j)边时,判断d[i]+此边边权和d[j]的大小关系,如果d[i]+边权小于d[j],那么说明可以从i点经(i,j)边更新出更短的边,每次松弛操作最坏情况至少可以更新一个点的信息,所以一共要进行n-1此操作(起点已知)</p><p>下面是用C++实现的部分模板代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">edge</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">int</span> from<span class="token punctuation">,</span>to<span class="token punctuation">,</span>cost<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>m<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>from<span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>cost<span class="token operator">&lt;</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//三角不等式</span>
                d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span><span class="token operator">=</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>from<span class="token punctuation">]</span><span class="token operator">+</span>v<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>cost<span class="token punctuation">;</span><span class="token comment">//更新</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中,定义了一个edge类,from是边的起点,to是边的终点,cost是边权,也可以用struct实现,v是一个edge类型的vector,用于存储边的信息,d是一个一维数组,代表各个点离起点的距离,初始值全部为极大值,起点为0,在Bellman-Ford完成后,d数组中的值便是对应下标的点离起点的值,如:若d[5]=10,则表示5号点离起点10个单位长度</p><h2 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra" aria-hidden="true">#</a> Dijkstra</h2><p>Dijkstra(迪杰斯特拉)是利用贪心思想实现的<strong>单源最短路算法</strong>,在迪杰斯特拉算法中,会根据确定的点猜测其余点的估计值,从中找到离起点最近的一个点,此时,这个点无法被更新更短,所以可以将其看为确定点<br> 以下是由C++实现的部分模板代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">edge</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">int</span> to<span class="token punctuation">,</span> cost<span class="token punctuation">;</span>
        <span class="token function">edge</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
        to<span class="token operator">=</span>a<span class="token punctuation">;</span> cost<span class="token operator">=</span>b<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">min</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span><span class="token punctuation">,</span> d<span class="token punctuation">[</span>now<span class="token punctuation">]</span> <span class="token operator">+</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>cost<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> mind <span class="token operator">=</span> <span class="token number">0x3f3f3f3f</span><span class="token punctuation">;</span>
        <span class="token keyword">bool</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>vis<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> mind<span class="token punctuation">)</span><span class="token punctuation">{</span>
                flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                mind <span class="token operator">=</span> d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                now <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        vis<span class="token punctuation">[</span>now<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中,定义了一个edge类,v是一个edge类型的vector,d数组保存每个点到起点的距离(起点要初始化为0,其他为极大值),now为目前找到的确定点(初始为起点),vis数组保存确定的点,在while循环中,先通过三角不等式,更新与目前点相接的点的估计值,在从所有估计点中寻找离起点最近的,此时这个点无法被更新更短,因此将它作为下一次执行的当前点,并列入确定点,当没有估计点可以寻找(都确定或其余的无法到达),将无法进入寻找的if,此时flag无法被更改,在for循环后会退出while循环,此时,d数组中的值就是各个点到起点的距离</p><h3 id="堆优化" tabindex="-1"><a class="header-anchor" href="#堆优化" aria-hidden="true">#</a> 堆优化</h3><p>观察上面的Dijkstra代码,会发现它的时间复杂度还是比较高,在这个过程中,多数时间花在了寻找离起点最小的未确定点上,因此,可以用最小堆来减小寻找时间(最小堆可以保证堆顶元素是堆中最小的),这里使用STL中的优先队列<br> 下面是C++的改进代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">typedef</span> pair<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">&gt;</span> P<span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">edge</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span><span class="token operator">:</span>
        <span class="token keyword">int</span> to<span class="token punctuation">,</span> cost<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
priority_queue<span class="token operator">&lt;</span>P<span class="token punctuation">,</span> vector<span class="token operator">&lt;</span>P<span class="token operator">&gt;</span><span class="token punctuation">,</span> greater<span class="token operator">&lt;</span>P<span class="token operator">&gt;&gt;</span> q<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>q<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        P p <span class="token operator">=</span> q<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        q<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        now <span class="token operator">=</span> p<span class="token punctuation">.</span>second<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>first <span class="token operator">&gt;</span> d<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">continue</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span> <span class="token operator">&gt;</span> d<span class="token punctuation">[</span>now<span class="token punctuation">]</span> <span class="token operator">+</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>cost<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span> <span class="token operator">=</span> d<span class="token punctuation">[</span>now<span class="token punctuation">]</span> <span class="token operator">+</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>cost<span class="token punctuation">;</span>
                q<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">P</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">]</span><span class="token punctuation">,</span> v<span class="token punctuation">[</span>now<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>to<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>   
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中定义了一个pair&lt;int,int&gt;类型的优先队列,初始为有一个起点的信息,每个pair的first是到起点的距离,second是点的编号,d数组存放所有点到起点的距离,now为当前点。初始为极大值,起点为0,在循环中,每次优先队列会弹出离起点最近的一个点。如果d数组中的距离小于优先队列中的距离,那么说明这个点后来被再次更新估计值,因此跳过。再对当前点的邻接点进行遍历更新估计值,当无法更新时,优先队列会变为空,循环结束</p>`,16),k=[e,l,u,i];function r(d,v){return p(),t("div",null,k)}const w=a(c,[["render",r],["__file","Shortest_path_algorithm.html.vue"]]);export{w as default};