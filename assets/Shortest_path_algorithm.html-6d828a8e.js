const t=JSON.parse(`{"key":"v-3e1a8bf8","path":"/posts/Algorithm/Shortest_path_algorithm.html","title":"最短路算法","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2023-03-19T00:00:00.000Z","category":"算法","tag":["最短路"],"description":"最短路算法 Floyd-Warshall Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的多源最短路算法,其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为 n3n^3n3","head":[["meta",{"property":"og:url","content":"https://blog.sciencekill.top/posts/Algorithm/Shortest_path_algorithm.html"}],["meta",{"property":"og:site_name","content":"Sciencekill's Blog"}],["meta",{"property":"og:title","content":"最短路算法"}],["meta",{"property":"og:description","content":"最短路算法 Floyd-Warshall Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的多源最短路算法,其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为 n3n^3n3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-30T08:21:39.000Z"}],["meta",{"property":"article:author","content":"Sciencekill"}],["meta",{"property":"article:tag","content":"最短路"}],["meta",{"property":"article:published_time","content":"2023-03-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-30T08:21:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最短路算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-08-30T08:21:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sciencekill\\",\\"url\\":\\"https://sciencekill.top\\"}]}"]]},"headers":[{"level":2,"title":"Floyd-Warshall","slug":"floyd-warshall","link":"#floyd-warshall","children":[]},{"level":2,"title":"Bellman-Ford","slug":"bellman-ford","link":"#bellman-ford","children":[]},{"level":2,"title":"Dijkstra","slug":"dijkstra","link":"#dijkstra","children":[{"level":3,"title":"堆优化","slug":"堆优化","link":"#堆优化","children":[]}]}],"git":{"createdTime":1682839423000,"updatedTime":1693383699000,"contributors":[{"name":"Sciencekill","email":"sciencekill@outlook.com","commits":10},{"name":"sciencekiller","email":"sciencekill@outlook.com","commits":1}]},"readingTime":{"minutes":4.89,"words":1468},"filePathRelative":"posts/Algorithm/Shortest_path_algorithm.md","localizedDate":"2023年3月19日","excerpt":"<h1> 最短路算法</h1>\\n<h2> Floyd-Warshall</h2>\\n<p>Floyd-Warshall,一般称Floyd(弗洛伊德)最短路算法,是解决图论最短路问题中使用最多的<strong>多源最短路算法</strong>,其核心在于将图中的每一个点作为起点、中转点和终点,尝试是否能更新出更短的道路,因此,Floyd算法的时间复杂度为 <span class=\\"katex\\"><span class=\\"katex-mathml\\"><math xmlns=\\"http://www.w3.org/1998/Math/MathML\\"><semantics><mrow><msup><mi>n</mi><mn>3</mn></msup></mrow><annotation encoding=\\"application/x-tex\\">n^3</annotation></semantics></math></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8141em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\">n</span><span class=\\"msupsub\\"><span class=\\"vlist-t\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.8141em;\\"><span style=\\"top:-3.063em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mtight\\">3</span></span></span></span></span></span></span></span></span></span></span></p>","autoDesc":true}`);export{t as data};
