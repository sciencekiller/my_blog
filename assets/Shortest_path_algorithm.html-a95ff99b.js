import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as p}from"./app-e05d1707.js";const t={},o=p(`<h1 id="最短路算法" tabindex="-1"><a class="header-anchor" href="#最短路算法" aria-hidden="true">#</a> 最短路算法</h1><h2 id="floyd-warshall" tabindex="-1"><a class="header-anchor" href="#floyd-warshall" aria-hidden="true">#</a> Floyd-Warshall</h2><p>Floyd-Warshall，一般称Floyd(弗洛伊德)最短路算法，是解决图论最短路问题中使用最多的<strong>多源最短路算法</strong>,其核心在于将图中的每一个点作为起点、中转点和终点，尝试是否能更新出更短的道路，因此，Floyd算法的时间复杂度为n^3</p><p>下面是用C++实现的部分模板代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;=</span>n<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span><span class="token function">min</span><span class="token punctuation">(</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>d<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token operator">+</span>d<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中d是一个二维数组，用于存放邻接表，d[i][j]存放图中从点i到点j的路径长度，没有路径的一般初始为极大值(2147483647或0x3f3f3f3f)，在这个过程中，Floyd会使用三层循环分别枚举起点，中转点和终点，当可以从中转点更短的到达终点时，Floyd将会更新它们之间的路径长度，最后这一张图中的数值将是每个点之间的最短路，如果为初始的极大值，将表示为不可到达(特殊情况路径长度最短路碰巧相同则除外，一般不会出现，因此最好将极大值设置高一点，但不要超过存储变量的上限，如2147483647)</p><h2 id="bellman-ford" tabindex="-1"><a class="header-anchor" href="#bellman-ford" aria-hidden="true">#</a> Bellman-Ford</h2><p>Bellman-Ford(贝尔曼-福特)算法是解决图论最短路问题中<strong>带有负权边的单源最短路算法</strong>,Bellman-Ford算法的基本原理是进行n-1次松弛操作，每次判断每条边能否更新出更短的路径，其核心是<strong>三角不等式</strong>，当遍历(i,j)边时，判断d[i]+此边边权和d[j]的大小关系，如果d[i]+边权小于d[j]，那么说明可以从i点经(i,j)边更新出更短的边，每次松弛操作最坏情况至少可以更新一个点的信息，所以一共要进行n-1此操作(起点已知)</p><p>下面是用C++实现的部分模板代码</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">edge</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，定义了一个edge类，from是边的起点，to是边的终点，cost是边权，也可以用struct实现，v是一个edge类型的vector，用于存储边的信息，d是一个一维数组，代表各个点离起点的距离，初始值全部为极大值，起点为0，在Bellman-Ford完成后，d数组中的值便是对应下标的点离起点的值，如:若d[5]=10,则表示5号点离起点10个单位长度</p>`,11),e=[o];function c(l,u){return s(),a("div",null,e)}const r=n(t,[["render",c],["__file","Shortest_path_algorithm.html.vue"]]);export{r as default};
