(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},r={app:0},a=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6e18bc67"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({about:"about"}[e]||e)+"."+{about:"7abcce22"}[e]+".css",r=c.p+i,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===r))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===i||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var i=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=i,delete o[e],d.parentNode.removeChild(d),n(a)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var a=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",f.name="ChunkLoadError",f.type=i,f.request=o,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fa5":function(e,t,n){},"1f70":function(e,t,n){},"3db4":function(e,t,n){},"40b5":function(e,t,n){},5414:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{mode:"out-in"}},[n("router-view",{key:e.$route.path})],1)],1)},r=[],a=(n("e0b6"),n("2877")),s={},c=Object(a["a"])(s,o,r,!1,null,"bd44a348",null),u=c.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"title"},[e._v("Tally Lists")]),n("home-grid",{attrs:{lists:e.lists}}),n("div",{staticClass:"iconfont iconadd3",on:{click:e.handleAddClick}}),n("transition",{attrs:{name:"fade"}},[e.showNew?n("home-new",{on:{close:e.handleCloseNew,"save-list":e.handleSaveNew}}):e._e()],1)],1)},d=[],p=n("5530"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",{staticClass:"container"},e._l(e.lists,(function(t,i){return n("router-link",{key:i,staticClass:"grid",attrs:{tag:"li",to:"/list/"+i},nativeOn:{click:function(t){return e.handleStoreIndex(i)}}},[n("p",{staticClass:"grid-title"},[e._v(e._s(t.name))]),n("p",{staticClass:"grid-item"},[e._v(e._s(t.content.length)+" ITEMS")])])})),1),n("span",{staticClass:"underline"})])},h=[],v={name:"HomeGrid",props:{lists:Array},methods:{handleStoreIndex:function(e){console.log(e),this.$store.commit("changeIndex",e)},gernerateId:function(e){var t=this.lists+e;return t}}},b=v,w=(n("6cc0"),Object(a["a"])(b,m,h,!1,null,"7a9e109a",null)),g=w.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",on:{click:e.handleCloseClick}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.newlist,expression:"newlist"}],ref:"input",staticClass:"newlist",domProps:{value:e.newlist},on:{blur:function(t){return t.preventDefault(),e.inputLoseFocus(t)},input:function(t){t.target.composing||(e.newlist=t.target.value)}}}),n("button",{on:{click:e.handleSaveClick}},[e._v("SAVE")])])},C=[],k={name:"HomeNew",data:function(){return{newlist:""}},methods:{handleCloseClick:function(e){"container"==e.target.className&&(this.$emit("close"),this.newlist="")},handleSaveClick:function(){this.$emit("save-list",this.newlist)},inputLoseFocus:function(){window.scrollTo({top:window.pageYOffset,behavior:"smooth"})}},mounted:function(){this.$nextTick((function(){this.$refs.input.focus()}),100)}},_=k,O=(n("bb0a"),Object(a["a"])(_,y,C,!1,null,"8548beda",null)),x=O.exports,N=n("2f62"),S={name:"Home",components:{HomeGrid:g,HomeNew:x},data:function(){return{showNew:!1,newlist:""}},methods:{handleAddClick:function(){this.showNew=!0},handleCloseNew:function(){this.showNew=!1},handleSaveNew:function(e){e&&this.lists.push({name:e,content:[]}),this.showNew=!1}},computed:Object(p["a"])({},Object(N["b"])(["lists"]))},j=S,E=(n("f072"),Object(a["a"])(j,f,d,!1,null,"f499bd82",null)),T=E.exports;i["a"].use(l["a"]);var A=[{path:"/",name:"Home",component:T},{path:"/list/:id",name:"TallyList",component:function(){return n.e("about").then(n.bind(null,"ce8e"))}}],P=new l["a"]({routes:A}),$=P;i["a"].use(N["a"]);var L=new N["a"].Store({state:{index:0,lists:[{id:"001",name:"Furniture",content:[{info:"Double Bed",price:5800,num:1},{info:"Armchair",price:1280,num:3},{info:"Bookshelf",price:345.68,num:5},{info:"向左拖动增加数量",price:0,num:0},{info:"向右拖动数量清零",price:0,num:6},{info:"点击编辑条目",price:0,num:0}]},{id:"002",name:"Necessities",content:[{info:"Tissue",price:19.9,num:4},{info:"Water",price:16.8,num:2},{info:"Mask",price:5,num:20},{info:"向左拖动增加数量",price:0,num:0},{info:"向右拖动数量清零",price:0,num:6},{info:"点击编辑条目",price:0,num:0}]},{id:"003",name:"Meals",content:[{info:"向左拖动增加数量",price:0,num:0},{info:"向右拖动数量清零",price:0,num:6},{info:"点击编辑条目",price:0,num:0}]},{id:"004",name:"Travel",content:[{info:"向左拖动增加数量",price:0,num:0},{info:"向右拖动数量清零",price:0,num:6},{info:"点击编辑条目",price:0,num:0}]},{id:"005",name:"Books",content:[{info:"向左拖动增加数量",price:0,num:0},{info:"向右拖动数量清零",price:0,num:6},{info:"点击编辑条目",price:0,num:0}]}]},mutations:{changeIndex:function(e,t){e.index=t}}});n("c8f4"),n("3db4"),n("5414");i["a"].config.productionTip=!1,new i["a"]({router:$,store:L,render:function(e){return e(u)}}).$mount("#app")},"6cc0":function(e,t,n){"use strict";var i=n("0fa5"),o=n.n(i);o.a},bb0a:function(e,t,n){"use strict";var i=n("d504"),o=n.n(i);o.a},c8f4:function(e,t,n){},d504:function(e,t,n){},e0b6:function(e,t,n){"use strict";var i=n("1f70"),o=n.n(i);o.a},f072:function(e,t,n){"use strict";var i=n("40b5"),o=n.n(i);o.a}});
//# sourceMappingURL=app.8a58aff9.js.map