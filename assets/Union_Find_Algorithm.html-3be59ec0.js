import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as i,e as d}from"./app-7562f23e.js";const a={},r=d(`<h1 id="并查集算法" tabindex="-1"><a class="header-anchor" href="#并查集算法" aria-hidden="true">#</a> 并查集算法</h1><p>并查集(Union-find algorithm),是用于判断树型结构中的两个点是否相通<br> 并查集分为并和查两部分，首先，需要一个数组，并把元素初始化为下标，即初始时所有元素的根是自己，假设这个数组为rt</p><p>下面是递归写法的查找代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int find(int x){
    if(rt[x]==x)return x;
    return rt[x]=find(rt[x]); 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个函数中，if中的条件表示该点为根节点，直接返回，否则继续向上查找并将当前点的父节点设为根节点</p><p>下面是合并代码</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>void union(int x,int y){
    rt[find(x)]=find(y);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个函数中，将x的根节点接到y的根节点下，完成合并</p><p>另外，还有用于检查两个元素是否在一个集合中的函数</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>bool check(int x,int y){
    return find(x)==find(y);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),s=[r];function l(t,c){return n(),i("div",null,s)}const v=e(a,[["render",l],["__file","Union_Find_Algorithm.html.vue"]]);export{v as default};
