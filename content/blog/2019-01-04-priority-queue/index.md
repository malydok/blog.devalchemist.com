---
title: Easy JavaScript excercise - priority queue
date: "2019-01-04"
description: ""
---

A small coding challenge for today: implement a priority queue in JavaScript. You may use the standard array, I'm not forcing you to reinvent a queue.

How does a priority queue differ from a regular one? The values added to it have a weight (priority) by which they're ordered and then retrieved.

```js
const queue = new PriorityQueue()
queue.push("a", 2)
queue.push("b", 3)
queue.push("c", 1)
```

The expected outcome of then calling `pop()` three times would be `c, a, b`.

This sort of construct is needed to implement the Dijkstra's algorithm - prioritized path finding. Read more about those in [this excellent article](https://www.redblobgames.com/pathfinding/a-star/introduction.html). I don't do game development, but this stuff is awesome.
