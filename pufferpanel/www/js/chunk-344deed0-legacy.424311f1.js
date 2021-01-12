(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-344deed0"],{"269a":function(e,t){e.exports=function(e,t){var a="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var i in"function"===typeof e.exports&&(a.directives=e.exports.options.directives),a.directives=a.directives||{},t)a.directives[i]=a.directives[i]||t[i]}},"5bc3":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("h1",{domProps:{textContent:e._s(e.$t("servers.Servers"))}}),a("v-row",[a("v-col",[a("v-sheet",{staticClass:"mb-8",attrs:{elevation:"1"}},[0===e.servers.length?a("div",{staticClass:"pt-2 text-center text--disabled",domProps:{textContent:e._s(e.$t("servers.NoServers"))}}):e._e(),a("v-list",{attrs:{"two-line":""}},e._l(e.servers,(function(t,i){return a("div",{key:t.id},[a("v-list-item",{attrs:{to:{name:"Server",params:{id:t.id}}}},[a("v-list-item-avatar",[t.online?a("v-icon",{attrs:{color:"success"}},[e._v(" mdi-check-circle ")]):a("v-icon",{attrs:{color:"error"}},[e._v(" mdi-alert-circle ")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:e._s(t.name)}}),a("v-list-item-subtitle",{domProps:{textContent:e._s(t.address+" @ "+t.node)}})],1)],1),i!==e.servers.length-1?a("v-divider"):e._e()],1)})),0),e.pagination.page<e.pagination.pageCount?a("v-row",{directives:[{name:"intersect",rawName:"v-intersect",value:e.lazyLoad,expression:"lazyLoad"}],ref:"lazy"},[a("v-col",{attrs:{cols:"2",offset:"5"}},[a("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:""}}),a("span",{domProps:{textContent:e._s(e.$t("common.Loading"))}})],1)],1):e._e(),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.hasScope("servers.create")||e.isAdmin(),expression:"hasScope('servers.create') || isAdmin()"}],attrs:{color:"primary",bottom:"",right:"",fixed:"",fab:"",dark:"",large:"",to:{name:"AddServer"}}},[a("v-icon",[e._v("mdi-plus")])],1)],1)],1)],1)],1)},n=[],s=(a("4160"),a("b0c0"),a("d3b7"),a("159b"),a("7c15")),r={data:function(){return{headers:[{text:this.$t("common.Name"),value:"name",sortable:!0},{text:this.$t("nodes.Node"),value:"node",sortable:!0},{text:this.$t("common.Address"),value:"address",sortable:!0},{text:this.$t("common.Online"),value:"online",sortable:!0}],servers:[],loading:!1,recheckLazy:!1,pagination:{page:0,rowsPerPage:10,pageCount:1},task:null}},watch:{recheckLazy:function(e){var t=this.$refs.lazy.getBoundingClientRect(),a=Math.max(document.documentElement.clientHeight,window.innerHeight);!(t.bottom<0||t.top-a>=0)&&this.pagination.page<this.pagination.pageCount&&this.loadNextPage()}},mounted:function(){this.task=setInterval(this.pollServerStatus,3e4)},beforeDestroy:function(){null!=this.task&&clearInterval(this.task)},methods:{lazyLoad:function(e,t,a){a&&this.loadNextPage()},loadNextPage:function(){if(!this.loading){this.loading=!0;var e=this,t=this.pagination,a=t.page,i=t.rowsPerPage;this.$http.get("/api/servers",{params:{page:a+1,limit:i}}).then((function(t){var i=function(a){var i=t.data.servers[a],n=!1;if(e.servers.forEach((function(e){i.id===e.id&&(n=!0)})),!n){var s="";s=i.ip&&""!==i.ip&&"0.0.0.0"!==i.ip?i.ip:i.node.publicHost,i.port&&(s+=":"+i.port),e.servers.push({id:i.id,name:i.name,node:i.node.name,address:s,online:!1,nodeAddress:i.node.publicHost+":"+i.node.publicPort})}};for(var n in t.data.servers)i(n);e.pagination.page=a+1;var s=t.data.paging;e.pagination.pageCount=Math.ceil(s.total/e.pagination.rowsPerPage),e.loading=!1,e.recheckLazy=!0})).catch(Object(s["a"])(e)).finally((function(){e.pollServerStatus()}))}},pollServerStatus:function(){var e=this,t=function(t){var a=e.servers[t];e.$http.get("/proxy/daemon/server/"+a.id+"/status").then((function(e){e.data&&(e.data.running?a.online=!0:a.online=!1)}))};for(var a in this.servers)t(a)},rowSelected:function(e){this.$router.push({name:"Server",params:{id:e.id}})},updatePage:function(e){this.pagination.page=e}}},o=r,c=a("2877"),d=a("6544"),l=a.n(d),v=a("8336"),p=a("62ad"),u=a("a523"),m=a("ce7e"),h=a("132d"),g=a("8860"),f=a("da13"),x=a("8270"),b=a("5d23"),w=a("490a"),C=a("0fd9"),P=a("8dd9"),S=a("269a"),y=a.n(S),V=a("90a2"),_=Object(c["a"])(o,i,n,!1,null,null,null);t["default"]=_.exports;l()(_,{VBtn:v["a"],VCol:p["a"],VContainer:u["a"],VDivider:m["a"],VIcon:h["a"],VList:g["a"],VListItem:f["a"],VListItemAvatar:x["a"],VListItemContent:b["a"],VListItemSubtitle:b["b"],VListItemTitle:b["c"],VProgressCircular:w["a"],VRow:C["a"],VSheet:P["a"]}),y()(_,{Intersect:V["a"]})}}]);
//# sourceMappingURL=chunk-344deed0-legacy.424311f1.js.map