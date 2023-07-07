import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as d,a as i,b as n,e as l}from"./app-aef719e4.js";const a={},r=i("h1",{id:"最短路算法",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#最短路算法","aria-hidden":"true"},"#"),n(" 最短路算法")],-1),v=i("h2",{id:"floyd-warshall",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#floyd-warshall","aria-hidden":"true"},"#"),n(" Floyd-Warshall")],-1),t=i("p",null,[n("Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的"),i("strong",null,"多源最短路算法"),n(",其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为 "),i("span",{class:"katex"},[i("span",{class:"katex-mathml"},[i("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[i("semantics",null,[i("mrow",null,[i("msup",null,[i("mi",null,"n"),i("mn",null,"3")])]),i("annotation",{encoding:"application/x-tex"},"n^3")])])]),i("span",{class:"katex-html","aria-hidden":"true"},[i("span",{class:"base"},[i("span",{class:"strut",style:{height:"0.8141em"}}),i("span",{class:"mord"},[i("span",{class:"mord mathnormal"},"n"),i("span",{class:"msupsub"},[i("span",{class:"vlist-t"},[i("span",{class:"vlist-r"},[i("span",{class:"vlist",style:{height:"0.8141em"}},[i("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{class:"pstrut",style:{height:"2.7em"}}),i("span",{class:"sizing reset-size6 size3 mtight"},[i("span",{class:"mord mtight"},"3")])])])])])])])])])])],-1),c=l(`<p>下面是用C++实现的部分模板代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int main(){
    for(int k=1;k&lt;=n;k++){
        for(int i=1;i&lt;=n;i++){
            for(int j=1;j&lt;=n;j++){
                d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中d是一个二维数组,用于存放邻接表,d[i][j]存放图中从点i到点j的路径长度,没有路径的一般初始为极大值(2147483647或0x3f3f3f3f),在这个过程中,Floyd会使用三层循环分别枚举起点,中转点和终点,当可以从中转点更短的到达终点时,Floyd将会更新它们之间的路径长度,最后这一张图中的数值将是每个点之间的最短路,如果为初始的极大值,将表示为不可到达(特殊情况路径长度最短路碰巧相同则除外,一般不会出现,因此最好将极大值设置高一点,但不要超过存储变量的上限,如2147483647)</p><h2 id="bellman-ford" tabindex="-1"><a class="header-anchor" href="#bellman-ford" aria-hidden="true">#</a> Bellman-Ford</h2><p>Bellman-Ford(贝尔曼-福特)算法是解决图论最短路问题中<strong>带有负权边的单源最短路算法</strong>,Bellman-Ford算法的基本原理是进行n-1次松弛操作,每次判断每条边能否更新出更短的路径,其核心是<strong>三角不等式</strong>,当遍历(i,j)边时,判断d[i]+此边边权和d[j]的大小关系,如果d[i]+边权小于d[j],那么说明可以从i点经(i,j)边更新出更短的边,每次松弛操作最坏情况至少可以更新一个点的信息,所以一共要进行n-1此操作(起点已知)</p><p>下面是用C++实现的部分模板代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>class edge{
    public:
        int from,to,cost;
};
int main(){
    for(int i=1;i&lt;=n-1;i++){
        for(int j=0;j&lt;m;j++){
            if(d[v[j].from]+v[j].cost&lt;d[v[j].to]){//三角不等式
                d[v[j].to]=d[v[j].from]+v[j].cost;//更新
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中,定义了一个edge类,from是边的起点,to是边的终点,cost是边权,也可以用struct实现,v是一个edge类型的vector,用于存储边的信息,d是一个一维数组,代表各个点离起点的距离,初始值全部为极大值,起点为0,在Bellman-Ford完成后,d数组中的值便是对应下标的点离起点的值,如:若d[5]=10,则表示5号点离起点10个单位长度</p><h2 id="dijkstra" tabindex="-1"><a class="header-anchor" href="#dijkstra" aria-hidden="true">#</a> Dijkstra</h2><p>Dijkstra(迪杰斯特拉)是利用贪心思想实现的<strong>单源最短路算法</strong>,在迪杰斯特拉算法中,会根据确定的点猜测其余点的估计值,从中找到离起点最近的一个点,此时,这个点无法被更新更短,所以可以将其看为确定点<br> 以下是由C++实现的部分模板代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>class edge {
    public:
        int to, cost;
        edge(int a, int b)
        {
        to=a; cost=b;
        }
};
int main(){
    while (true){
        for (int i = 0; i &lt; v[now].size(); i++){
            d[v[now][i].to] = min(d[v[now][i].to], d[now] + v[now][i].cost);
        }
        int mind = 0x3f3f3f3f;
        bool flag = true;
        for (int i = 1; i &lt;= n; i++){
            if (vis[i] == 0 &amp;&amp; d[i] &lt; mind){
                flag = false;
                mind = d[i];
                now = i;
            }
        }
        if (flag)
            break;
        vis[now] = true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中,定义了一个edge类,v是一个edge类型的vector,d数组保存每个点到起点的距离(起点要初始化为0,其他为极大值),now为目前找到的确定点(初始为起点),vis数组保存确定的点,在while循环中,先通过三角不等式,更新与目前点相接的点的估计值,在从所有估计点中寻找离起点最近的,此时这个点无法被更新更短,因此将它作为下一次执行的当前点,并列入确定点,当没有估计点可以寻找(都确定或其余的无法到达),将无法进入寻找的if,此时flag无法被更改,在for循环后会退出while循环,此时,d数组中的值就是各个点到起点的距离</p><h3 id="堆优化" tabindex="-1"><a class="header-anchor" href="#堆优化" aria-hidden="true">#</a> 堆优化</h3><p>观察上面的Dijkstra代码,会发现它的时间复杂度还是比较高,在这个过程中,多数时间花在了寻找离起点最小的未确定点上,因此,可以用最小堆来减小寻找时间(最小堆可以保证堆顶元素是堆中最小的),这里使用STL中的优先队列<br> 下面是C++的改进代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>typedef pair&lt;int, int&gt; P;
class edge
{
    public:
        int to, cost;
};
priority_queue&lt;P, vector&lt;P&gt;, greater&lt;P&gt;&gt; q;
int main()
{
    while (q.size())
    {
        P p = q.top();
        q.pop();
        now = p.second;
        if (p.first &gt; d[now])
            continue;
        for (int i = 0; i &lt; v[now].size(); i++)
        {
            if (d[v[now][i].to] &gt; d[now] + v[now][i].cost)
            {
                d[v[now][i].to] = d[now] + v[now][i].cost;
                q.push(P(d[v[now][i].to], v[now][i].to));
            }
        }
    }   
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中定义了一个pair&lt;int,int&gt;类型的优先队列,初始为有一个起点的信息,每个pair的first是到起点的距离,second是点的编号,d数组存放所有点到起点的距离,now为当前点。初始为极大值,起点为0,在循环中,每次优先队列会弹出离起点最近的一个点。如果d数组中的距离小于优先队列中的距离,那么说明这个点后来被再次更新估计值,因此跳过。再对当前点的邻接点进行遍历更新估计值,当无法更新时,优先队列会变为空,循环结束</p>`,16),o=[r,v,t,c];function m(u,b){return s(),d("div",null,o)}const g=e(a,[["render",m],["__file","Shortest_path_algorithm.html.vue"]]);export{g as default};
