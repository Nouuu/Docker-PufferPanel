(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6566"],{"1d74":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.server?s("server-render",{attrs:{server:t.server}}):s("v-row",[s("v-col",{attrs:{cols:"5"}}),s("v-col",{attrs:{cols:"2"}},[s("v-progress-circular",{staticClass:"mr-2",attrs:{indeterminate:""}}),s("strong",{domProps:{textContent:t._s(t.$t("common.Loading"))}})],1)],1)],1)},n=[],o=(s("99af"),s("7c15")),a={data:function(){return{server:null,recover:null,statRequest:null}},mounted:function(){this.server=this.loadServer()},beforeDestroy:function(){this.$disconnect(),this.statRequest&&clearInterval(this.statRequest)},methods:{loadServer:function(){var t=this;this.$http.get("/api/servers/".concat(this.$route.params.id,"?perms")).then((function(e){t.server=e.data.server,t.server.permissions=e.data.permissions;var s="".concat("http:"===window.location.protocol?"ws":"wss","://").concat(window.location.host,"/proxy/daemon/socket/").concat(t.server.id);t.$connect(s),t.statRequest=setInterval(t.callStats,3e3)})).catch(Object(o["a"])(t))},callStats:function(){this.$socket.sendObj({type:"stat"})}}},c=a,i=s("2877"),l=s("6544"),u=s.n(l),d=s("62ad"),v=s("490a"),h=s("0fd9"),p=Object(i["a"])(c,r,n,!1,null,null,null);e["default"]=p.exports;u()(p,{VCol:d["a"],VProgressCircular:v["a"],VRow:h["a"]})}}]);
//# sourceMappingURL=chunk-2d0b6566-legacy.e7e0f34a.js.map