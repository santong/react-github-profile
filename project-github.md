 首先需要熟悉[graphql](http://graphql.org/learn/)的相关概念。通过这个[github](www.github.com)的[graphql api](https://api.github.com/graphql)设计一个页面，查看该API[相关介绍](https://developer.github.com/v4/)，实现以下功能:
1. 展示你自己的github profile，和你在github上的一些数据(项目数量、watching数量等等)
2. 翻页展示这个project的commit history(如果commit数量比较少的话可以在开始的时候造一些commit记录)。
3. 展示这个project的issue list， 并且可以在这个project里的issue里添加和删除评论。
4. 用图表展示一些你认为有趣的数据，比如说你关注的前几个的project的issue的数量pie图等等，我们希望能和呈现出来的图能有一定的交互，比如我点到pie图的一个category的时候会drilldown到这个project里前几个issue的comment数量等等(请尽量不要用我上面这个🌰)。
5. 如果你有更好的想法，欢迎随时和我们沟通。

在[github api explorer](https://developer.github.com/v4/explorer/)可以手动发送graphql的请求，开始之前你可以先试着用一下看看。 API的验证相关参考[相关文档](https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql)。

我们推荐使用REACT来完成这个前端项目，你可以参考[官网](https://facebook.github.io/react/)来熟悉其中的概念，等你完成一个“hello world”之后，有一个[TodoMVC]的app(http://todomvc.com/examples/react/)可以作为参考。 可以用这个[starter](https://github.com/facebookincubator/create-react-app)快速创建一个简单react app作为练习用。如果你是移动端工程师可以使用[react-native](https://facebook.github.io/react-native/)完成这个项目。

你可以使用任何你喜欢的可视化工具。

可以使用[RELAY-MODERN](https://facebook.github.io/relay/)来管理react对graphql的数据采集。可以以[relay-modern-todo](https://github.com/relayjs/relay-examples/tree/master/todo-modern)为参考。

我们同样推荐[APOLLO-CLIENT](https://github.com/apollographql/apollo-client)来进行graphql的数据采集，apollo非常容易上手。


我们希望你能在这一个小项目里学习一些新的技术。 

在仔细阅读了项目介绍之后，请通过微信告诉我们你的时间计划，希望是用一周的时间，平均每天的两到三个小时，如果需要延期可以及时和我们沟通。然后我们面对面对项目进行一个总结，谈谈你在过程中的思路，遇到的问题以及解决的办法。我们希望这你能喜欢这个过程，也能从这个过程中受益。


[github api](https://api.github.com/graphql) 将是你app的数据源，你的app可以直接通过http请求取数据。如果你觉得需要也可以把数据parse下来自己做一个graphql-server。

可以使用[node-http-proxy](https://github.com/nodejitsu/node-http-proxy )或者[httpProxyMiddleware](https://github.com/chimurai/http-proxy-middleware)来解决跨域的问题。
