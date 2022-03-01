# vue-ssr-example

后台node服务器调用Vue的`renderToString`渲染的 `VUE APP` 返回的 dom字符串不包含事件监听，动态数据等，只是一个纯静态的页面，需要在客户端即浏览器中再次渲染同一个`VUE APP`
实例，以达到页面动态交互的结果