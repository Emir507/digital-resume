(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==n[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={app:0},r=[];function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/digital-resume/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0298":function(t,e,o){},"09e1":function(t,e,o){},"0e11":function(t,e,o){},"13dd":function(t,e,o){},"21bb":function(t,e,o){"use strict";o("2dad")},"2cc1":function(t,e,o){"use strict";o("09e1")},"2dad":function(t,e,o){},"2ea5":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("Layout")],1)},r=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"section"},[o("div",{staticClass:"header"}),o("div",{staticClass:"scrollable-content"},[o("v-main",{attrs:{app:""}},[o("router-view")],1)],1)])])},s=[],c={name:"Layout"},l=c,u=(o("9713"),o("2877")),f=o("6544"),d=o.n(f),p=o("f6c4"),v=Object(u["a"])(l,i,s,!1,null,null,null),m=v.exports;d()(v,{VMain:p["a"]});var b={name:"App",components:{Layout:m},data:function(){return{}}},h=b,_=(o("5c0b"),o("7496")),g=Object(u["a"])(h,n,r,!1,null,null,null),k=g.exports;d()(g,{VApp:_["a"]});var y=o("9483");Object(y["a"])("".concat("/digital-resume/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var C=o("8c4f"),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("v-app-bar",{attrs:{absolute:"",color:t.appBarColor,dark:""}},[o("ul",{staticClass:"d-flex nav__list"},t._l(t.navTabs,(function(e){var a=e.title,n=e.id,r=e.active;return o("li",{key:n,staticClass:"nav__item",class:{active:r,"mr-5":t.$vuetify.breakpoint.mdAndUp},on:{click:function(e){return t.goToSection(n)}}},[o("button",{staticClass:"px-2",attrs:{text:""}},[t._v(t._s(a))])])})),0)]),o("Hero",{ref:"hero",attrs:{id:"hero",name:t.getProfile&&t.getProfile.hero&&t.getProfile.hero.name},on:{scrollDown:function(e){return t.goToSection("#about")}}}),o("About",{ref:"about",attrs:{id:"about",aboutMe:t.getProfile&&t.getProfile.about&&t.getProfile.about.aboutMe,photoUrl:t.getProfile&&t.getProfile.about&&t.getProfile.about.photoURL,contactDetails:t.getProfile&&t.getProfile.about&&t.getProfile.about.contactDetails}}),o("Stack",{ref:"stack",attrs:{id:"stack"}}),o("Works",{ref:"works",attrs:{id:"works"}}),o("Contact",{ref:"contact",attrs:{id:"contact"}}),o("Footer",{on:{scrollUp:function(e){return t.goToSection("#hero")}}})],1)},S=[],O=o("1da1"),x=o("5530"),j=(o("d81d"),o("96cf"),o("2f62")),P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hero__section section"},[o("div",{staticClass:"hero__container"},[o("div",{staticClass:"hero__content align-center"},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"d-flex mx-auto",attrs:{md:"11"}},[o("div",{staticClass:"title",class:[t.$vuetify.breakpoint.smAndDown?"title--mobile":"title--desktop"]},[o("h1",[t._v(t._s("I'm "+t.name))]),o("h3",[t._v(" I'm Bishkek based Front End Engineer, currently doing an internship in Ooba.kg where I work as a front end developer across the range of our productss ")])])])],1)],1),o("ScrollButton",{attrs:{bottom:"0",iconColor:"white",icon:"mdi-chevron-down-circle"},on:{click:function(e){return t.$emit("scrollDown")}}})],1)])])},A=[],V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"rounded-circle scroll-btn",style:{top:t.top,bottom:t.bottom},on:{click:function(e){return t.$emit("click")}}},[o("v-icon",{attrs:{size:"60",color:t.iconColor}},[t._v(t._s(t.icon))])],1)},$=[],D=(o("a9e3"),{name:"ScrollButton",props:{top:{type:[Number,String],default:"unset"},bottom:{type:[Number,String],default:"unset"},icon:{type:String,default:"mdi-chevron-up-circle"},iconColor:{type:String,default:"#525252"}}}),E=D,T=(o("c0b6"),o("132d")),I=Object(u["a"])(E,V,$,!1,null,"1c3c8b30",null),B=I.exports;d()(I,{VIcon:T["a"]});var R={name:"Hero",props:{name:{type:String,default:""}},components:{ScrollButton:B}},M=R,F=(o("e031"),o("62ad")),H=o("a523"),U=o("0fd9"),z=Object(u["a"])(M,P,A,!1,null,"2a13cceb",null),N=z.exports;d()(z,{VCol:F["a"],VContainer:H["a"],VRow:U["a"]});var L=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"about__section section",attrs:{id:"about"}},[o("v-container",{staticClass:"pa-0",staticStyle:{width:"75%"}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{class:{"mb-5":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",md:"5"}},[o("v-avatar",{attrs:{size:"200"}},[o("v-img",{staticStyle:{width:"100%",height:"100%",display:"block"},attrs:{src:"https://peaceful-shore-13462.herokuapp.com/api/image/"+t.photoUrl}})],1)],1),o("v-col",{attrs:{cols:"12",md:"7"}},[o("div",{staticClass:"about__me"},[o("h4",[t._v("About me")]),o("p",[t._v(" "+t._s(t.aboutMe)+" ")])]),o("div",{staticClass:"about__contact-details"},[o("h4",[t._v("Contact Details")]),o("p",[o("span",{staticClass:"d-block"},[t._v(t._s(t.contactDetails&&t.contactDetails.name))]),o("span",{staticClass:"d-block"},[t._v(t._s(t.contactDetails&&t.contactDetails.location))]),o("span",{staticClass:"d-block"},[t._v(t._s(t.contactDetails&&t.contactDetails.phoneNumber))])])])])],1)],1)],1)},W=[],q={name:"AboutSection",props:{aboutMe:{type:String,default:""},contactDetails:{type:Object,default:function(){}},photoUrl:{type:String,default:""}}},J=q,G=(o("d9cf"),o("8212")),K=o("adda"),Q=Object(u["a"])(J,L,W,!1,null,"167f4204",null),X=Q.exports;d()(Q,{VAvatar:G["a"],VCol:F["a"],VContainer:H["a"],VImg:K["a"],VRow:U["a"]});var Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"stack__section section"},[o("div",{staticClass:"stack__container"},[o("div",{staticClass:"stack__info d-flex"},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{class:{"mb-5":t.$vuetify.breakpoint.smAndDown},attrs:{cols:"12",md:"3"}},[o("h4",[o("span",[t._v("FAVORITE TECH")])])]),o("v-col",{attrs:{cols:"12",md:"9"}},[o("p",{staticClass:"ma-0"},[t._v(" I'm a tinkerer and am always interested in playing around with new technologies but these are the ones that have really won me over ")])])],1)],1)],1),o("div",{staticClass:"stack__list"},[o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},t._l(["mdi-language-html5","mdi-language-css3","mdi-bootstrap","mdi-nodejs","mdi-vuejs","mdi-react","mdi-git"],(function(e){return o("v-col",{key:e,staticClass:"pa-3",attrs:{cols:"6",md:"3"}},[o("div",{staticClass:"d-flex justify-center",staticStyle:{width:"100%",height:"100px",border:"1px solid cyan"}},[o("v-icon",{attrs:{size:"100"}},[t._v(t._s(e))])],1)])})),1)],1)],1)])])},Z=[],tt={},et=tt,ot=(o("6c8d"),Object(u["a"])(et,Y,Z,!1,null,"69c17876",null)),at=ot.exports;d()(ot,{VCol:F["a"],VContainer:H["a"],VIcon:T["a"],VRow:U["a"]});var nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"works__section section"},[o("h3",[t._v("check out some of my works")]),o("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[o("v-row",{staticClass:"pa-1",attrs:{"no-gutters":""}},t._l(5,(function(t){return o("v-col",{key:t,staticClass:"pa-2 works__item",attrs:{cols:"12",md:"4"}},[o("div",{staticStyle:{width:"100%","padding-top":"50%","background-color":"grey"}})])})),1)],1)],1)},rt=[],it={},st=it,ct=(o("5d54"),Object(u["a"])(st,nt,rt,!1,null,"451ae3eb",null)),lt=ct.exports;d()(ct,{VCol:F["a"],VContainer:H["a"],VRow:U["a"]});var ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact__section section",class:[t.$vuetify.breakpoint.smAndDown?"pa-3 pb-8":"pa-9"]},[o("div",{staticClass:"d-flex contact__title",class:{"contact__title--mobile":t.$vuetify.breakpoint.smAndDown}},[o("div",{staticClass:"pr-4"},[o("v-icon",{attrs:{size:"90",color:"white"}},[t._v("mdi-email")])],1),o("p",{staticClass:"text-left ma-0 d-flex align-center"},[t._v(" Have a project for me? Think I'd be a good fit for your team? I'd love to hear from you, give me a shout by email or by using the form below if you'd like to get in contact with me. ")])]),o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{staticClass:"px-5",style:t.$vuetify.breakpoint.smAndDown?"order: 2":"",attrs:{cols:"12",md:"6"}},[o("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[t._l(["Name","Email","Subject","Message"],(function(e){return o("div",{key:e,staticClass:"mb-12",staticStyle:{display:"grid","grid-template-columns":"1fr 3fr"}},[o("p",{staticClass:"ma-0 text-left"},[o("span",[t._v(t._s(e))]),o("span",[t._v("*")])]),"message"===e?o("textarea",{attrs:{rows:"2"}}):o("input",{attrs:{placeholder:e}})])})),o("div",{staticStyle:{display:"grid","grid-template-columns":"1fr 3fr"}},[o("div"),o("button",{staticClass:"contact__button",attrs:{type:"submit"}},[t._v("SUBMIT")])])],2)]),o("v-col",{staticClass:"px-5",class:{"mb-5":t.$vuetify.breakpoint.smAndDown},style:t.$vuetify.breakpoint.smAndDown?"order: 1":"",attrs:{cols:"12",md:"6"}},[o("div",{staticClass:"text-left contact__details"},[o("h5",{staticClass:"d-block"},[t._v("Address and Phone")]),o("p",{staticClass:"d-block ma-0"},[t._v("Emir Dzhetybaev")]),o("p",{staticClass:"d-block ma-0"},[t._v("Bishkek")]),o("p",{staticClass:"d-block ma-0"},[t._v("Chuy Region")]),o("p",{staticClass:"d-block ma-0"},[t._v("+996755301525")]),o("a",{staticClass:"d-block",attrs:{href:"#"}},[t._v("dzhetybaev19emir@gmail.com")])])])],1)],1)],1)},ft=[],dt={methods:{submitForm:function(){}}},pt=dt,vt=(o("2cc1"),Object(u["a"])(pt,ut,ft,!1,null,"6683f788",null)),mt=vt.exports;d()(vt,{VCol:F["a"],VContainer:H["a"],VIcon:T["a"],VRow:U["a"]});var bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer__section footer py-10 position-relative"},[o("ul",{staticClass:"footer__socials"},t._l(["mdi-instagram","fab fa-telegram","mdi-github","mdi-linkedin"],(function(e){return o("li",{key:e,class:{"mr-4":"mdi-linkedin"!==e}},[o("v-icon",{attrs:{size:"33"}},[t._v(t._s(e))])],1)})),0),o("ScrollButton",{attrs:{top:"0"},on:{click:function(e){return t.$emit("scrollUp")}}})],1)},ht=[],_t={components:{ScrollButton:B}},gt=_t,kt=(o("e202"),Object(u["a"])(gt,bt,ht,!1,null,"0722956c",null)),yt=kt.exports;d()(kt,{VIcon:T["a"]});var Ct={name:"Home",components:{Hero:N,About:X,Stack:at,Works:lt,Contact:mt,Footer:yt},data:function(){return{appBarColor:"rgba(0, 0, 0, 0.5)",navTabs:[{title:"Hero",id:"#hero",active:!1},{title:"About",id:"#about",active:!1},{title:"Stack",id:"#stack",active:!1},{title:"Works",id:"#works",active:!1},{title:"Contact",id:"#contact",active:!1}],currentSectionOffset:0,heroSectionOffset:0,aboutSectionOffset:0,stackSectionOffset:0,worksSectionOffset:0,contactSectionOffset:0}},computed:Object(x["a"])(Object(x["a"])({},Object(j["c"])(["profile"])),{},{getProfile:function(){return this.profile&&this.profile}}),watch:{currentSectionOffset:{immediate:!0,handler:function(t){var e=this;this.$nextTick((function(){e.aboutSectionOffset<=t?e.appBarColor="black":(e.appBarColor="rgba(0, 0, 0, 0.5)",e.resetActive("hero"))}))}}},methods:Object(x["a"])(Object(x["a"])({},Object(j["b"])(["fetchProfile"])),{},{goToSection:function(t){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function o(){var a,n;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return a=document.querySelector(".scrollable-content"),n={duration:500,offset:0,easing:"easeInOutCubic",container:a},o.next=4,e.$vuetify.goTo(t,n);case 4:e.currentSectionOffset=o.sent;case 5:case"end":return o.stop()}}),o)})))()},resetActive:function(t){this.appBarColor="hero"===t?"rgba(0, 0, 0, 0.5)":"black",this.navTabs.map((function(e){e.active=!1,e.id==="#".concat(t)&&(e.active=!0)}))}}),created:function(){this.fetchProfile()},mounted:function(){},destroyed:function(){}},wt=Ct,St=(o("21bb"),o("40dc")),Ot=Object(u["a"])(wt,w,S,!1,null,null,null),xt=Ot.exports;d()(Ot,{VAppBar:St["a"]}),a["a"].use(C["a"]);var jt=[{path:"/",name:"Home",component:xt}],Pt=new C["a"]({routes:jt}),At=Pt,Vt=o("bc3a"),$t=o.n(Vt);a["a"].use(j["a"]);var Dt=new j["a"].Store({state:{profile:{}},mutations:{SET_PROFILE:function(t,e){t.profile=e}},actions:{fetchProfile:function(t){var e=t.commit,o="https://peaceful-shore-13462.herokuapp.com/api/profile";return $t.a.get(o,{params:{user:"emir"}}).then((function(t){e("SET_PROFILE",t.data)}))}},modules:{}}),Et=o("f309");a["a"].use(Et["a"]);var Tt=new Et["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:At,store:Dt,vuetify:Tt,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"5d54":function(t,e,o){"use strict";o("2ea5")},"6c8d":function(t,e,o){"use strict";o("cb30")},9713:function(t,e,o){"use strict";o("0298")},"9c0c":function(t,e,o){},ae9d:function(t,e,o){},c0b6:function(t,e,o){"use strict";o("13dd")},cb30:function(t,e,o){},d9cf:function(t,e,o){"use strict";o("ff44")},e031:function(t,e,o){"use strict";o("ae9d")},e202:function(t,e,o){"use strict";o("0e11")},ff44:function(t,e,o){}});
//# sourceMappingURL=app.ccd2d2c5.js.map