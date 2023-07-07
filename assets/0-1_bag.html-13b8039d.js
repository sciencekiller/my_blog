import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as d,e as n}from"./app-aef719e4.js";const a={},r=n(`<h1 id="_0-1-背包" tabindex="-1"><a class="header-anchor" href="#_0-1-背包" aria-hidden="true">#</a> 0-1 背包</h1><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>0-1 背包指在总金额N的范围中,放入指定物体(每样只有一个,可以不放),求最大总价值的问题</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>选择使用动态规划。定义一个二维dp[i][j],其中,i表示在序号小于i的物品中任意选择,j表示背包大小,即dp[i][j]表示在前i个物品中选择重量不大于j的物品的最大价值。每一次更新时如果能装下,有2个选择(拿——dp[i-1][j-w[i]]+v[i],不拿——dp[i-1][j]),装不下就保留没有包括此物品物品的状态dp[i-1][j]。<br> 状态转移方程中的dp[i][j]=dp[i-1][j-w[i]]+v[i]表示要拿这个物品,就用没有包括此物品时的最大值(这里的j-w[i]是为第i个物品预留位置)加上第i个物品的价值。如果不拿,就保留i-1的状态。</p><p>PS:w是物品重量,v是物品价值</p><h2 id="模板代码" tabindex="-1"><a class="header-anchor" href="#模板代码" aria-hidden="true">#</a> 模板代码</h2><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int main(){
    for(int i=1;i&lt;=m;i++){
        for(int j=1;j&lt;=n;j++){
            if(j&lt;w[i])//装不下
                dp[i][j]=dp[i-1][j];
            else{
                dp[i][j]=max(dp[i-1][j-w[i]]+v[i],dp[i-1][j]);
            }
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS:dp[1][1]=0;</p><p>最后,dp[m][n]就是能装下的总价值的最大值,如果要求总方案,可以修改状态转移方程</p><h2 id="dp空间优化" tabindex="-1"><a class="header-anchor" href="#dp空间优化" aria-hidden="true">#</a> dp空间优化</h2><h3 id="模板代码-1" tabindex="-1"><a class="header-anchor" href="#模板代码-1" aria-hidden="true">#</a> 模板代码</h3><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>int main(){
    dp[1]=0;
    for(int i=1;i&lt;=m;i++){
        for(int j=n;j&gt;=w[i];j--){
                dp[j]=max(dp[j-w[i]]+v[i],dp[j]);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h3><p>在上面的代码中,我们可以发现每一次的状态转移只和上一行有关,最后的结果也只与最后一行有关,因此,不必保存之前的状态。在每次更新时,如果从前向后遍历j,j-w[i]会被新值覆盖,所以这里从后向前遍历,如果j小于w[i]是装不下的,就可以不进行操作,数组里便是原来的值</p>`,15),s=[r];function l(c,v){return e(),d("div",null,s)}const p=i(a,[["render",l],["__file","0-1_bag.html.vue"]]);export{p as default};
