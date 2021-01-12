(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-705e543a"],{"4bd4":function(e,s,t){"use strict";t("4de4"),t("7db0"),t("4160"),t("caad"),t("07ac"),t("2532"),t("159b");var r=t("5530"),i=t("58df"),a=t("7e2b"),n=t("3206");s["a"]=Object(i["a"])(a["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var s=Object.values(e).includes(!0);this.$emit("input",!s)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var s=this,t=function(e){return e.$watch("hasError",(function(t){s.$set(s.errorBag,e._uid,t)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(i){i&&(s.errorBag.hasOwnProperty(e._uid)||(r.valid=t(e)))})):r.valid=t(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var s=this.inputs.find((function(s){return s._uid===e._uid}));if(s){var t=this.watchers.find((function(e){return e._uid===s._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==s._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==s._uid})),this.$delete(this.errorBag,s._uid)}}},render:function(e){var s=this;return e("form",{staticClass:"v-form",attrs:Object(r["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return s.$emit("submit",e)}}},this.$slots.default)}})},"61f7":function(e,s,t){"use strict";s["a"]={validPassword:function(e){return e.length>=8},samePassword:function(e,s){return e&&s&&e===s},validUsername:function(e){return e&&/^([0-9A-Za-z_-]){5,}$/.test(e)},validEmail:function(e){return e&&/^\S+@\S+\.\S+$/.test(e)}}},"73cf":function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-col",{attrs:{lg:"4",md:"6",sm:"8","offset-lg":"4","offset-md":"3","offset-sm":"2"}},[t("v-card",{attrs:{loading:e.registerDisabled}},[t("v-card-title",{staticClass:"d-flex justify-center"},[t("p",{domProps:{textContent:e._s(e.$t("users.Register"))}})]),t("v-card-text",[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-form",[t("v-text-field",{attrs:{id:"username",outlined:"",label:e.$t("users.Username"),"error-messages":e.username&&!e.validUsername?e.$t("errors.ErrUsernameRequirements",{min:5}):e.errors.username,"prepend-inner-icon":"mdi-account",name:"username",type:"text"},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submit(s)}},model:{value:e.username,callback:function(s){e.username="string"===typeof s?s.trim():s},expression:"username"}}),t("v-text-field",{attrs:{id:"email",outlined:"",label:e.$t("users.Email"),"error-messages":e.errors.email,"prepend-inner-icon":"mdi-email",name:"email",type:"text"},on:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submit(s)}},model:{value:e.email,callback:function(s){e.email="string"===typeof s?s.trim():s},expression:"email"}}),t("v-text-field",{attrs:{id:"password",outlined:"",label:e.$t("users.Password"),"error-messages":e.password&&!e.validPassword?e.$t("errors.ErrPasswordRequirements",{min:8}):e.errors.password,"prepend-inner-icon":"mdi-lock","append-icon":e.showPassword?"mdi-eye-off":"mdi-eye",name:"password",type:e.showPassword?"text":"password"},on:{"click:append":function(s){e.showPassword=!e.showPassword},keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submit(s)}},model:{value:e.password,callback:function(s){e.password=s},expression:"password"}}),t("v-text-field",{attrs:{id:"confirmPassword",outlined:"",label:e.$t("users.ConfirmPassword"),"error-messages":""===e.confirmPassword||e.samePassword?"":e.$t("errors.ErrPasswordsNotIdentical"),"prepend-inner-icon":"mdi-lock","append-icon":e.showConfirmPassword?"mdi-eye-off":"mdi-eye",name:"password",type:e.showConfirmPassword?"text":"password"},on:{"click:append":function(s){e.showConfirmPassword=!e.showConfirmPassword},keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.submit(s)}},model:{value:e.confirmPassword,callback:function(s){e.confirmPassword=s},expression:"confirmPassword"}})],1),t("v-btn",{staticClass:"body-1 mb-5",attrs:{color:"primary",large:"",block:"",disabled:!e.canComplete},domProps:{textContent:e._s(e.$t("users.Register"))},on:{click:e.submit}}),t("v-btn",{attrs:{text:"",block:"",to:{name:"Login"}},domProps:{textContent:e._s(e.$t("users.LoginLink"))}})],1)],1)],1)],1)],1)},i=[],a=(t("d3b7"),t("a78e")),n=t.n(a),o=t("61f7"),d=t("7c15"),u=t("5f87"),l={data:function(){return{username:"",email:"",password:"",confirmPassword:"",registerDisabled:!1,showPassword:!1,showConfirmPassword:!1,errors:{username:"",email:"",password:""}}},computed:{canComplete:function(){return!this.registerDisabled&&(!(!this.username||!this.validUsername)&&(!(!this.email||!this.validEmail)&&!(!this.validPassword||!this.samePassword)))},validPassword:function(){return o["a"].validPassword(this.password)},samePassword:function(){return o["a"].samePassword(this.password,this.confirmPassword)},validUsername:function(){return o["a"].validUsername(this.username)},validEmail:function(){return o["a"].validEmail(this.email)}},mounted:function(){Object(u["a"])()&&this.$router.push({name:"Servers"})},methods:{submit:function(){var e=this;if(this.$toast.clearQueue(),this.$toast.getCmp()&&this.$toast.getCmp().close(),this.errors.username="",this.errors.email="",this.errors.password="",this.username)if(this.email)if(this.password){if(o["a"].validPassword(this.password)){this.registerDisabled=!0;var s=this;this.axios.post(this.$route.path,{email:this.email,password:this.password,username:this.username}).then((function(t){t.data.token&&""!==t.data.token?(n.a.set("puffer_auth",t.data.token),localStorage.setItem("scopes",JSON.stringify(t.data.scopes||[])),s.$emit("logged-in"),s.$router.push({name:"Servers"})):(e.$toast.success(e.$t("users.RegisterSuccess")),s.$router.push({name:"Login"}))})).catch(Object(d["a"])(s)).finally((function(){s.registerDisabled=!1}))}}else this.errors.password=this.$t("errors.ErrFieldRequired",{field:this.$t("users.Password")});else this.errors.email=this.$t("errors.ErrFieldRequired",{field:this.$t("users.Email")});else this.errors.username=this.$t("errors.ErrFieldRequired",{field:this.$t("users.Username")})}}},c=l,m=t("2877"),f=t("6544"),h=t.n(f),p=t("8336"),w=t("b0af"),v=t("99d9"),b=t("62ad"),g=t("4bd4"),y=t("0fd9"),k=t("8654"),P=Object(m["a"])(c,r,i,!1,null,null,null);s["default"]=P.exports;h()(P,{VBtn:p["a"],VCard:w["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:b["a"],VForm:g["a"],VRow:y["a"],VTextField:k["a"]})}}]);
//# sourceMappingURL=chunk-705e543a-legacy.0307a2eb.js.map