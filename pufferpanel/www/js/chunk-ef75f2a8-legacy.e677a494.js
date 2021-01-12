(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef75f2a8"],{"4bd4":function(t,e,r){"use strict";r("4de4"),r("7db0"),r("4160"),r("caad"),r("07ac"),r("2532"),r("159b");var s=r("5530"),i=r("58df"),a=r("7e2b"),o=r("3206");e["a"]=Object(i["a"])(a["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,r=function(t){return t.$watch("hasError",(function(r){e.$set(e.errorBag,t._uid,r)}),{immediate:!0})},s={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(s.valid=r(t)))})):s.valid=r(t),s},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var r=this.watchers.find((function(t){return t._uid===e._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(s["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},a55b:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{attrs:{lg:"4",md:"6",sm:"8","offset-lg":"4","offset-md":"3","offset-sm":"2"}},[r("v-card",{attrs:{loading:t.loginDisabled}},[r("v-card-title",{staticClass:"d-flex justify-center"},[r("p",{domProps:{textContent:t._s(t.$t("users.Login"))}})]),r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-form",[r("v-text-field",{attrs:{id:"email",outlined:"",label:t.$t("users.Email"),"error-messages":t.errors.email,"prepend-inner-icon":"mdi-account",name:"email",type:"email"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.email,callback:function(e){t.email="string"===typeof e?e.trim():e},expression:"email"}}),r("v-text-field",{attrs:{id:"password",outlined:"",label:t.$t("users.Password"),"error-messages":t.errors.password,"prepend-inner-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye-off":"mdi-eye",name:"password",type:t.showPassword?"text":"password"},on:{"click:append":function(e){t.showPassword=!t.showPassword},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),r("v-btn",{staticClass:"body-1 mb-5",attrs:{color:"primary",large:"",block:""},domProps:{textContent:t._s(t.$t("users.Login"))},on:{click:t.submit}}),r("v-btn",{attrs:{text:"",block:"",to:{name:"Register"}},domProps:{textContent:t._s(t.$t("users.RegisterLink"))}})],1)],1)],1)],1)],1)},i=[],a=(r("d3b7"),r("a78e")),o=r.n(a),n=r("7c15"),u=r("5f87");function d(){var t=localStorage.getItem("reauth_reason")||"";return localStorage.removeItem("reauth_reason"),t}var l={data:function(){return{email:"",password:"",errors:{email:"",password:""},loginDisabled:!1,reauthReason:"",registered:!1,showPassword:!1}},computed:{canSubmit:function(){return!(this.loginDisabled||""===this.email||""===this.password)}},mounted:function(){Object(u["a"])()&&this.$router.push({name:"Servers"});var t=d();"session_timed_out"===t&&this.$toast.error(this.$t("errors.ErrSessionTimedOut"))},methods:{submit:function(){this.$toast.clearQueue(),this.$toast.getCmp()&&this.$toast.getCmp().close();var t=this;t.errors.form="",t.errors.email="",t.errors.password="",t.email?t.password?(this.loginDisabled=!0,this.axios.post(this.$route.path,{email:this.email,password:this.password}).then((function(e){o.a.set("puffer_auth",e.data.session),localStorage.setItem("scopes",JSON.stringify(e.data.scopes||[])),t.$emit("logged-in"),t.$router.push({name:"Servers"})})).catch(Object(n["a"])(t)).finally((function(){t.loginDisabled=!1}))):t.errors.password=this.$t("errors.ErrFieldRequired",{field:this.$t("users.Password")}):t.errors.email=this.$t("errors.ErrFieldRequired",{field:this.$t("users.Email")})}}},c=l,h=r("2877"),f=r("6544"),m=r.n(f),p=r("8336"),w=r("b0af"),b=r("99d9"),v=r("62ad"),g=r("4bd4"),$=r("0fd9"),y=r("8654"),_=Object(h["a"])(c,s,i,!1,null,null,null);e["default"]=_.exports;m()(_,{VBtn:p["a"],VCard:w["a"],VCardText:b["c"],VCardTitle:b["d"],VCol:v["a"],VForm:g["a"],VRow:$["a"],VTextField:y["a"]})}}]);
//# sourceMappingURL=chunk-ef75f2a8-legacy.e677a494.js.map