---
icon: edit
date: 2023-07-03
category:
  算法
tag:
  - 并查集
---
# 并查集算法
并查集(Union-find algorithm),是用于判断树型结构中的两个点是否相通
并查集分为并和查两部分，首先，需要一个数组，并把元素初始化为下标，即初始时所有元素的根是自己，假设这个数组为rt

下面是递归写法的查找代码
```cpp
int find(int x){
    if(rt[x]==x)return x;
    return rt[x]=find(rt[x]); 
}
```
在这个函数中，if中的条件表示该点为根节点，直接返回，否则继续向上查找并将当前点的父节点设为根节点

下面是合并代码
```cpp
void union(int x,int y){
    rt[find(x)]=find(y);
}
```
在这个函数中，将x的根节点接到y的根节点下，完成合并

另外，还有用于检查两个元素是否在一个集合中的函数
```cpp
bool check(int x,int y){
    return find(x)==find(y);
}
```
