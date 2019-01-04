webpackJsonp([0xd4865e944796],{376:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Devilish Alchemist's Blog",author:"Marek Pietrzak"}},markdownRemark:{id:"C:/Users/Dell XPS 13/Desktop/malydok.github.io/src/pages/2019-01-04-priority-queue/index.md absPath of file >>> MarkdownRemark",html:'<p>A small coding challenge for today: implement a priority queue in JavaScript. You may use the standard array, I’m not forcing you to reinvent a queue.</p>\n<p>How does a priority queue differ from a regular one? The values added to it have a weight (priority) by which they’re ordered and then retrieved.</p>\n<div class="gatsby-highlight">\n      <pre class="language-js"><code class="language-js"><span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nqueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'a\'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nqueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'b\'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nqueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">\'c\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The expected outcome of then calling <code class="language-text">pop()</code> three times would be <code class="language-text">c, a, b</code>.</p>\n<p>This sort of construct is needed to implement the Dijkstra’s algorithm - prioritized path finding. Read more about those in <a href="https://www.redblobgames.com/pathfinding/a-star/introduction.html">this excellent article</a>. I don’t do game development, but this stuff is awesome.</p>',frontmatter:{title:"Easy JavaScript excercise - priority queue",date:"04 January, 2019"}}},pathContext:{slug:"/2019-01-04-priority-queue/",previous:{fields:{slug:"/2014-11-15-ie-selector-limit/"},frontmatter:{title:"Remember about the count limit of CSS selectors in IE"}},next:null}}}});
//# sourceMappingURL=path---2019-01-04-priority-queue-fe499bff20156f8e9eba.js.map