(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb642656"],{"1f2a":function(e,t,n){},4777:function(e,t,n){"use strict";n("1f2a")},c459:function(e,t,n){"use strict";n.r(t);n("b3d9");var o=n("a412"),c={class:"wrap-albumsongsheet"},a={class:"albumsongsheet-tabs clear"},i=["onClick"];function s(e,t,n,s,l,b){var u=Object(o["resolveComponent"])("AlbumSongsheetInfo"),r=Object(o["resolveComponent"])("MusicPlayList"),d=Object(o["resolveComponent"])("Comment"),m=Object(o["resolveComponent"])("Subscription");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createVNode"])(u,{detailinfo:e.detailinfo},null,8,["detailinfo"]),Object(o["createElementVNode"])("div",a,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.tabsList,(function(t,n){return Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{class:Object(o["normalizeClass"])(["fl",e.tabsOn==n?"on":""]),key:n,onClick:function(t){return e.changeTabs(n)}},Object(o["toDisplayString"])("评论"==t?"".concat(t,"(").concat(e.commentNum,")"):t),11,i)})),128))]),Object(o["withDirectives"])(Object(o["createVNode"])(r,{stdetaildata:e.detailinfo,stSongAll:e.songlistAll,isRank:e.isRank},null,8,["stdetaildata","stSongAll","isRank"]),[[o["vShow"],0==e.tabsOn]]),Object(o["withDirectives"])(Object(o["createVNode"])(d,{dataId:e.id,onCommentTotal:e.getCommentTotal},null,8,["dataId","onCommentTotal"]),[[o["vShow"],1==e.tabsOn]]),Object(o["withDirectives"])(Object(o["createVNode"])(m,{dataId:e.id},null,8,["dataId"]),[[o["vShow"],2==e.tabsOn]])])}var l=n("f026"),b=(n("89a8"),n("b110"),n("fe35"),n("7c81")),u=n("de46"),r=n("e4d9"),d=n("0f94"),m=n("6b05"),f=n("b606"),O=n("ab26"),j=Object(o["defineComponent"])({name:"songsheet",components:{AlbumSongsheetInfo:r["a"],MusicPlayList:d["a"],Comment:f["a"],Subscription:O["a"]},setup:function(){var e=Object(m["d"])(),t=Object(o["reactive"])({id:e.currentRoute.value.query.id,isRank:e.currentRoute.value.query.isRank,detailinfo:"",songlistAll:"",tabsList:["歌曲列表","评论","收藏者"],tabsOn:0,commentNum:0}),n=function(){return new Promise((function(e,n){Object(b["b"])(u["B"],{id:t.id},(function(t){e(t)}),(function(e){n(e)}))}))},c=function(){return new Promise((function(e,n){Object(b["b"])(u["C"],{id:t.id},(function(t){e(t)}),(function(e){n(e)}))}))},a=function(e){t.tabsOn=e},i=function(e){t.commentNum=e};return Object(o["onMounted"])((function(){Promise.all([n(),c()]).then((function(e){200==e[0].code&&(t.detailinfo=e[0].playlist),200==e[1].code&&(t.songlistAll=e[1].songs)}))})),Object(l["a"])(Object(l["a"])({},Object(o["toRefs"])(t)),{},{changeTabs:a,getCommentTotal:i})}}),p=(n("4777"),n("b3f2")),v=n.n(p);const g=v()(j,[["render",s],["__scopeId","data-v-30f200e4"]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-fb642656.3d41bf80.js.map