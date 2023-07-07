---
icon: edit
date: 2023-03-19
category:
  - 算法
tag:
  - 最短路
---
# 最短路算法

## Floyd-Warshall

Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的**多源最短路算法**,其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为n^3

下面是用C++实现的部分模板代码

```C++
int main(){
    for(int k=1;k<=n;k++){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=n;j++){
                d[i][j]=min(d[i][j],d[i][k]+d[k][j]);
            }
        }
    }
}
```
其中d是一个二维数组,用于存放邻接表,d[i][j]存放图中从点i到点j的路径长度,没有路径的一般初始为极大值(2147483647或0x3f3f3f3f),在这个过程中,Floyd会使用三层循环分别枚举起点,中转点和终点,当可以从中转点更短的到达终点时,Floyd将会更新它们之间的路径长度,最后这一张图中的数值将是每个点之间的最短路,如果为初始的极大值,将表示为不可到达(特殊情况路径长度最短路碰巧相同则除外,一般不会出现,因此最好将极大值设置高一点,但不要超过存储变量的上限,如2147483647)

## Bellman-Ford
Bellman-Ford(贝尔曼-福特)算法是解决图论最短路问题中**带有负权边的单源最短路算法**,Bellman-Ford算法的基本原理是进行n-1次松弛操作,每次判断每条边能否更新出更短的路径,其核心是**三角不等式**,当遍历(i,j)边时,判断d[i]+此边边权和d[j]的大小关系,如果d[i]+边权小于d[j],那么说明可以从i点经(i,j)边更新出更短的边,每次松弛操作最坏情况至少可以更新一个点的信息,所以一共要进行n-1此操作(起点已知)

下面是用C++实现的部分模板代码
```C++
class edge{
    public:
        int from,to,cost;
};
int main(){
    for(int i=1;i<=n-1;i++){
        for(int j=0;j<m;j++){
            if(d[v[j].from]+v[j].cost<d[v[j].to]){//三角不等式
                d[v[j].to]=d[v[j].from]+v[j].cost;//更新
            }
        }
    }
}
```
其中,定义了一个edge类,from是边的起点,to是边的终点,cost是边权,也可以用struct实现,v是一个edge类型的vector,用于存储边的信息,d是一个一维数组,代表各个点离起点的距离,初始值全部为极大值,起点为0,在Bellman-Ford完成后,d数组中的值便是对应下标的点离起点的值,如:若d[5]=10,则表示5号点离起点10个单位长度

## Dijkstra
Dijkstra(迪杰斯特拉)是利用贪心思想实现的**单源最短路算法**,在迪杰斯特拉算法中,会根据确定的点猜测其余点的估计值,从中找到离起点最近的一个点,此时,这个点无法被更新更短,所以可以将其看为确定点
以下是由C++实现的部分模板代码

```C++
class edge {
    public:
        int to, cost;
        edge(int a, int b)
        {
        to=a; cost=b;
        }
};
int main(){
    while (true){
        for (int i = 0; i < v[now].size(); i++){
            d[v[now][i].to] = min(d[v[now][i].to], d[now] + v[now][i].cost);
        }
        int mind = 0x3f3f3f3f;
        bool flag = true;
        for (int i = 1; i <= n; i++){
            if (vis[i] == 0 && d[i] < mind){
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
```
其中,定义了一个edge类,v是一个edge类型的vector,d数组保存每个点到起点的距离(起点要初始化为0,其他为极大值),now为目前找到的确定点(初始为起点),vis数组保存确定的点,在while循环中,先通过三角不等式,更新与目前点相接的点的估计值,在从所有估计点中寻找离起点最近的,此时这个点无法被更新更短,因此将它作为下一次执行的当前点,并列入确定点,当没有估计点可以寻找(都确定或其余的无法到达),将无法进入寻找的if,此时flag无法被更改,在for循环后会退出while循环,此时,d数组中的值就是各个点到起点的距离
### 堆优化
观察上面的Dijkstra代码,会发现它的时间复杂度还是比较高,在这个过程中,多数时间花在了寻找离起点最小的未确定点上,因此,可以用最小堆来减小寻找时间(最小堆可以保证堆顶元素是堆中最小的),这里使用STL中的优先队列
下面是C++的改进代码
```C++
typedef pair<int, int> P;
class edge
{
    public:
        int to, cost;
};
priority_queue<P, vector<P>, greater<P>> q;
int main()
{
    while (q.size())
    {
        P p = q.top();
        q.pop();
        now = p.second;
        if (p.first > d[now])
            continue;
        for (int i = 0; i < v[now].size(); i++)
        {
            if (d[v[now][i].to] > d[now] + v[now][i].cost)
            {
                d[v[now][i].to] = d[now] + v[now][i].cost;
                q.push(P(d[v[now][i].to], v[now][i].to));
            }
        }
    }   
}
```
其中定义了一个pair<int,int>类型的优先队列,初始为有一个起点的信息,每个pair的first是到起点的距离,second是点的编号,d数组存放所有点到起点的距离,now为当前点。初始为极大值,起点为0,在循环中,每次优先队列会弹出离起点最近的一个点。如果d数组中的距离小于优先队列中的距离,那么说明这个点后来被再次更新估计值,因此跳过。再对当前点的邻接点进行遍历更新估计值,当无法更新时,优先队列会变为空,循环结束