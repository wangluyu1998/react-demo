(this["webpackJsonpcnode-task"]=this["webpackJsonpcnode-task"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(3),i=a(4),s=a(6),m=a(5),p=a(7),u=a(1);function h(){return c.a.createElement("div",{className:"headerwrap"},c.a.createElement("header",null,c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:"logo\u56fe\u7247"}),c.a.createElement("input",{type:"search",className:"insearch"}),c.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},c.a.createElement(u.b,{to:"/?tab=all"},"\u9996\u9875"),c.a.createElement(u.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),c.a.createElement(u.b,{to:"/api"},"API"),c.a.createElement(u.b,{to:"/about"},"\u5173\u4e8e"),c.a.createElement(u.b,{to:"/a"},"\u6ce8\u518c"),c.a.createElement(u.b,{to:"/login"},"\u767b\u5f55"))))}var d=a(11),b=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[],pagenum:[1,2,3,4,5,6,7,8,9,10]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search;fetch("https://cnodejs.org/api/v1/topics"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.location.search!==this.props.location.search){var n=this.props.location.search;fetch("https://cnodejs.org/api/v1/topics"+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){var e=this.props.match.url,t=this.props.location.search.split("&")[0];return this.props.location.search||(t="?tab=all"),c.a.createElement("div",null,c.a.createElement("ul",{className:"content-item"},this.state.data.map((function(e,t){return c.a.createElement("li",{key:t,className:"item"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"item-img"}),c.a.createElement("span",{style:{fontSize:"15px"}},e.reply_count),"/",c.a.createElement("span",{style:{fontSize:"10px",color:"gray",paddingRight:"10px"}},e.visit_count),c.a.createElement(u.b,{to:"/topic/"+e.id,className:"title"},e.title),c.a.createElement("span",{className:"behind-part"},c.a.createElement("img",{src:e.author.avatar_url,alt:e.author.loginname,className:"behind-img"}),"1\u5929\u524d"))}))),c.a.createElement("ul",{className:"page-item"},this.state.pagenum.map((function(a,n){return c.a.createElement(u.b,{to:"".concat(e).concat(t,"&page=").concat(a),key:n},c.a.createElement("li",{className:"page-num"},a))}))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.match.url;return c.a.createElement("div",null,c.a.createElement("div",{className:"headtab"},c.a.createElement(u.b,{to:"/?tab=all&page=1"},c.a.createElement("button",{className:"it"},"\u5168\u90e8")),c.a.createElement(u.b,{to:"/?tab=good"},c.a.createElement("button",{className:"it"},"\u7cbe\u534e")),c.a.createElement(u.b,{to:"/?tab=ask"},c.a.createElement("button",{className:"it"},"\u95ee\u7b54")),c.a.createElement(u.b,{to:"/?tab=share"},c.a.createElement("button",{className:"it"},"\u5206\u4eab")),c.a.createElement(u.b,{to:"/?tab=job"},c.a.createElement("button",{className:"it"},"\u62db\u8058"))),c.a.createElement("div",null,c.a.createElement(d.a,{path:"".concat(e),component:b})))}}]),t}(n.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"900px",height:"500px",backgroundColor:"#fff",padding:"20px 20px"}},c.a.createElement("h3",null,"Api"),c.a.createElement("p",null,"\u4ee5\u4e0b api \u8def\u5f84\u5747\u4ee5 ",c.a.createElement("span",{style:{color:"rgb(12, 183, 235)"}},"https://cnodejs.org/api/v1 \u4e3a\u524d\u7f00")),c.a.createElement("p",null,"update 2019-03-21: \u6d89\u53ca\u53d1\u5e16\u548c\u53d1\u8bc4\u8bba\u7684\u63a5\u53e3\u90fd\u5df2\u7ecf\u4e0b\u7ebf\u4e86\uff0c\u592a\u591a\u4eba\u4e3a\u4e86\u6d4b\u8bd5\u5ba2\u6237\u7aef\u4e71\u53d1\u5e16\u4e86\u3002"))}}]),t}(n.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"900px",height:"500px",backgroundColor:"#fff",padding:"20px 20px"}},c.a.createElement("h3",null,"\u5173\u4e8e"),c.a.createElement("p",null,"CNode \u793e\u533a\u4e3a\u56fd\u5185\u6700\u5927\u6700\u5177\u5f71\u54cd\u529b\u7684 Node.js \u5f00\u6e90\u6280\u672f\u793e\u533a\uff0c\u81f4\u529b\u4e8e Node.js \u7684\u6280\u672f\u7814\u7a76\u3002"),c.a.createElement("p",null,"CNode \u793e\u533a\u7531\u4e00\u6279\u70ed\u7231 Node.js \u6280\u672f\u7684\u5de5\u7a0b\u5e08\u53d1\u8d77\uff0c\u76ee\u524d\u5df2\u7ecf\u5438\u5f15\u4e86\u4e92\u8054\u7f51\u5404\u4e2a\u516c\u53f8\u7684\u4e13\u4e1a\u6280\u672f\u4eba\u5458\u52a0\u5165\uff0c\u6211\u4eec\u975e\u5e38\u6b22\u8fce\u66f4\u591a\u5bf9 Node.js \u611f\u5174\u8da3\u7684\u670b\u53cb\u3002 CNode \u7684 SLA \u4fdd\u8bc1\u662f\uff0c\u4e00\u4e2a9\uff0c\u5373 90.000000%\u3002"),c.a.createElement("p",null,"\u793e\u533a\u76ee\u524d\u7531 ",c.a.createElement("span",{style:{color:"rgb(12, 183, 235)"}},"@alsotang")," \u5728\u7ef4\u62a4\uff0c\u6709\u95ee\u9898\u8bf7\u8054\u7cfb\uff1a",c.a.createElement("sapn",{style:{color:"rgb(12, 183, 235)"}},"https://github.com/alsotang")),c.a.createElement("p",null,"\u8bf7\u5173\u6ce8\u6211\u4eec\u7684\u5b98\u65b9\u5fae\u535a\uff1a",c.a.createElement("span",{style:{color:"rgb(12, 183, 235)"}},"http://weibo.com/cnodejs")))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:"900px",height:"500px",backgroundColor:"#fff",padding:"20px 20px"}},c.a.createElement("h3",null,"Node.js\u5165\u95e8"),c.a.createElement("p",null,"\u300a\u5feb\u901f\u642d\u5efa Node.js \u5f00\u53d1\u73af\u5883\u4ee5\u53ca\u52a0\u901f npm\u300b"),c.a.createElement("span",{style:{color:"rgb(12, 183, 235)"}},c.a.createElement("a",null,"http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html")))}}]),t}(n.Component),v=(a(32),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"input-login"},c.a.createElement("div",{className:"inputt"},"\u7528\u6237\u540d",c.a.createElement("input",{type:"text",name:"name"})),c.a.createElement("div",{className:"inputt2"},"\u5bc6\u7801",c.a.createElement("input",{type:"text",name:"password"})),c.a.createElement(u.b,{to:"/?tab=all"},c.a.createElement("button",{className:"btn-login"},"\u767b\u5f55"))))}}]),t}(n.Component)),y=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={data:[],udetail:[]},e}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.url;fetch("https://cnodejs.org/api/v1"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data,udetail:t.data.author})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.location.search!==this.props.location.search){var n=this.props.match.url;fetch("https://cnodejs.org/api/v1"+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data,udetail:e.data.author})}))}}},{key:"render",value:function(){var e=this.state.udetail.loginname;return c.a.createElement("div",null,c.a.createElement("h2",{style:{backgroundColor:"white",padding:"10px 20px",margin:0},dangerouslySetInnerHTML:{__html:this.state.data.title}}),c.a.createElement("p",{style:{backgroundColor:"white",fontSize:"11px",color:"gray",padding:"0 20px 10px 20px",margin:0},dangerouslySetInnerHTML:{__html:"\xb7 \u53d1\u5e03\u4e8e1\u5929\u524d \xb7 \u4f5c\u8005".concat(e," \xb7 ").concat(this.state.data.visit_count,"\u6b21\u6d4f\u89c8")}}),c.a.createElement("hr",null),c.a.createElement("div",{style:{overflow:"hidden",backgroundColor:"white",padding:"10px 20px",margin:0},dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"content"},c.a.createElement(d.a,{path:"/",exact:!0,component:g}),c.a.createElement(d.a,{path:"/api",component:E}),c.a.createElement(d.a,{path:"/start",component:j}),c.a.createElement(d.a,{path:"/about",component:f}),c.a.createElement(d.a,{path:"/login",component:v}),c.a.createElement(d.a,{path:"/topic/:id",component:y})),c.a.createElement("div",{className:"sider"},c.a.createElement("div",{className:"loginn"},c.a.createElement("p",{style:{fontSize:"12px"}},"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),c.a.createElement("p",{style:{fontSize:"11px"}},"\u60a8\u53ef\u4ee5\u767b\u5f55\u6216\u8005\u6ce8\u518c\uff0c\u4e5f\u53ef\u4ee5"),c.a.createElement("button",{className:"btn"},"\u901a\u8fc7GitHub\u767b\u5f55")),c.a.createElement("div",{className:"imgs"},c.a.createElement("img",{src:"https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_",alt:"cnode"}),c.a.createElement("img",{src:"https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS",alt:"cnode"}),c.a.createElement("img",{src:"https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-",alt:"cnode"})),c.a.createElement("div",{className:"street"},c.a.createElement("p",{style:{padding:"6px 10px"}},"\u53cb\u60c5\u793e\u533a"),c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/ruby-china-20150529.png",alt:"cnode"}),c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/phphub-logo.png",alt:"cnode"}),c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/golangtc-logo.png",alt:"cnode"}),c.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/phphub-logo.png",alt:"cnode"})),c.a.createElement("div",{className:"erweima"},c.a.createElement("p",null,"\u5ba2\u6237\u7aef\u4e8c\u7ef4\u7801"),c.a.createElement("img",{src:"https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU",alt:"\u4e8c\u7ef4\u7801"}))))))}}]),t}(n.Component);a(33);l.a.render(c.a.createElement(O,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.85327805.chunk.js.map