(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a1c3cd6"],{"093b":function(t,e,a){"use strict";var n=a("d537"),s=a.n(n);s.a},d537:function(t,e,a){},f799:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"container",staticClass:"container",on:{scroll:function(e){return t.remember(e)}}},[a("van-nav-bar",{attrs:{fixed:"",title:"搜索结果","left-arrow":""},on:{"click-left":function(e){return t.$router.back()}}}),a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.upLoading,callback:function(e){t.upLoading=e},expression:"upLoading"}},[a("van-cell-group",t._l(t.articleList,(function(e,n){return a("van-cell",{key:n,attrs:{to:{name:"article",params:{id:e.art_id.toString()}}}},[a("div",{staticClass:"article_item"},[1===e.cover.type?a("div",{staticClass:"img_box"},[a("van-image",{staticClass:"w100",attrs:{fit:"cover",src:e.cover.images[0]}})],1):t._e(),3===e.cover.type?a("div",{staticClass:"img_box"},t._l(e.cover.images,(function(t,e){return a("van-image",{key:e,staticClass:"w33",attrs:{fit:"cover",src:t}})})),1):t._e(),a("div",{staticClass:"info_box"},[a("span",[t._v(t._s(e.aut_name))]),a("span",[t._v(t._s(e.comm_count)+"评论")]),a("span",[t._v(t._s(t._f("relTime")(e.pubdate)))])])])])})),1)],1)],1)},s=[],r=(a("d3b7"),a("284c")),i=(a("96cf"),a("8691")),c={name:"search-result",data:function(){return{upLoading:!1,finished:!1,articleList:[],reqParams:{page:1,q:this.$route.query.q},scrollTop:0}},activated:function(){this.$refs["container"].scrollTop=this.scrollTop},methods:{remember:function(t){this.scrollTop=t.target.scrollTop},onLoad:function(){var t,e;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(Object(i["h"])(this.reqParams));case 2:e=a.sent,(t=this.articleList).push.apply(t,Object(r["a"])(e.results)),this.upLoading=!1,e.results.length?this.reqParams.page++:this.finished=!0;case 6:case"end":return a.stop()}}),null,this)}}},o=c,l=(a("093b"),a("2877")),u=Object(l["a"])(o,n,s,!1,null,"4fe4f6a9",null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-1a1c3cd6.60d58c2e.js.map