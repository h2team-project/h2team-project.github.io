(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-169cf4f6":"fb27f91d"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-169cf4f6":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-169cf4f6":"84a7bbf4"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0cd2":function(e,t,n){},1:function(e,t){},"148b":function(e,t,n){},"19e0":function(e,t,n){"use strict";var a=n("a7ff"),r=n.n(a);r.a},2:function(e,t){},2022:function(e,t,n){},2149:function(e,t,n){},3:function(e,t){},3325:function(e,t,n){"use strict";var a=n("2149"),r=n.n(a);r.a},4:function(e,t){},4299:function(e,t,n){"use strict";var a=n("7622"),r=n.n(a);r.a},4360:function(e,t,n){"use strict";var a,r=n("2b0e"),o=n("2f62"),i={loginStatus:!1,account:{},domains:[],address:"",scriptHash:"",inviterScriptHash:"",donatTotal:0,inviterTotal:0,balance:{ONG:0,ONT:0}},s=n("bd86"),c=n("6e87"),l=(a={},Object(s["a"])(a,c["i"],function(e,t){e.loginStatus=t}),Object(s["a"])(a,c["a"],function(e,t){e.account=t.account}),Object(s["a"])(a,c["b"],function(e,t){e.address=t.address}),Object(s["a"])(a,c["j"],function(e,t){e.scriptHash=t.scriptHash}),Object(s["a"])(a,c["d"],function(e,t){e.domains=t||[]}),Object(s["a"])(a,c["g"],function(e,t){e.inviterScriptHash=t}),Object(s["a"])(a,c["f"],function(e){e.loginStatus=!1,e.account={},e.address="",e.scriptHash=""}),Object(s["a"])(a,c["e"],function(e,t){e.donatTotal=t||0}),Object(s["a"])(a,c["h"],function(e,t){e.inviterTotal=t||0}),Object(s["a"])(a,c["c"],function(e,t){e.balance=t}),a),u=(n("28a5"),n("e814")),d=n.n(u),f=(n("c5f6"),n("96cf"),n("3b8d")),m=n("2b05"),h=n("6fb0"),p=n("795b"),g=n.n(p),v=n("5b79"),b=n.n(v),y=b.a.create({timeout:1e4,baseURL:CONFIG.baseUrl});y.interceptors.request.use(function(e){return e}),y.interceptors.response.use(function(e){return g.a.resolve(e)},function(e){return g.a.reject(e)});var O=y,A="/getdomainforuser",w={getDomains:function(e){return O.get(A,{params:{address:e}})}},_=n("f632"),C={getAccount:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return m["client"].registerClient({}),e.next=3,m["client"].api.asset.getAccount();case 3:return t=e.sent,n=new _.Crypto.Address(t),a=n.serialize(),e.abrupt("return",{account:t,address:n.value||"",scriptHash:a});case 7:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),getDomains:function(){return w.getDomains(j.state.address)},getInviteTotal:function(){var e=[{type:"ByteArray",value:j.state.scriptHash}];return Object(h["a"])({args:e,method:"GetInvitCountForUser"})}},T=n("43a5"),E={getAccount:function(e){var t=e.dispatch,n=e.commit;C.getAccount().then(function(e){n(c["i"],!0),n(c["a"],e),n(c["b"],e),n(c["j"],e),t("getDonatTotal"),t("getInviterTotal"),t("getDomains"),t("getBalance")}).catch(function(e){console.log("初始化用户信息出错"),console.log(e),n(c["f"])})},getBalance:function(e){var t=e.commit;console.log("获取钱包余额"),T["a"].getBalance().then(function(e){console.log("获取钱包余额成功"),console.log(e),t(c["c"],{ONG:Number(e.ONG),ONT:Number(e.ONT)})}).catch(function(e){console.log("获取钱包失败"),console.log(e)})},getDonatTotal:function(e){var t=e.commit,n=e.state;T["a"].getDonatTotal(n.scriptHash).then(function(e){t(c["e"],d()(e,16)),console.log(e),console.log("获取用户捐赠总额")}).catch(function(e){return console.log(e)})},getInviterTotal:function(e){var t=e.commit;C.getInviteTotal().then(function(e){t(c["h"],d()(e,16)),console.log(e),console.log("获取邀请用户数")}).catch(function(e){return console.log(e)})},getDomains:function(e){var t=e.commit;C.getDomains().then(function(e){t(c["d"],e.data.domains.map(function(e){return{name:e.names.split(".")[0],time:e.time}}))}).catch(function(e){return console.log(e)})}},S={loginStatus:function(e){return e.loginStatus},account:function(e){return e.account},domains:function(e){return e.domains},address:function(e){return e.address},scriptHash:function(e){return e.scriptHash},donatTotal:function(e){return e.donatTotal},inviterTotal:function(e){return e.inviterTotal},balance:function(e){return e.balance}};r["a"].use(o["a"]);var j=t["a"]=new o["a"].Store({state:i,mutations:l,actions:E,getters:S})},"43a5":function(e,t,n){"use strict";n("96cf");var a=n("3b8d"),r=n("4360"),o=n("6fb0"),i=n("2b05");t["a"]={donat:function(e){var t=[{type:"ByteArray",value:r["a"].state.scriptHash},{type:"Number",value:e}];return Object(o["a"])({args:t,type:"post",method:"Donat"})},getDonatTotal:function(e){var t=[{type:"ByteArray",value:e}];return Object(o["a"])({args:t,method:"GetDonatCountForUser"})},getBalance:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["client"].api.network.getBalance({address:r["a"].state.address});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),transfer:function(e,t,n,a){return i["client"].api.asset.send({to:t,asset:a,amount:e})}}},5:function(e,t){},"527d":function(e,t,n){"use strict";var a=n("8c51"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"verifyDomain",function(){return Le}),n.d(a,"verifyDomainAll",function(){return Ue}),n.d(a,"verifyAddress",function(){return Me});var r={};n.r(r),n.d(r,"writeUTF",function(){return Fe}),n.d(r,"readUTF",function(){return ze}),n.d(r,"toUTF8Hex",function(){return We}),n.d(r,"utf8HexToStr",function(){return Ge});var o={};n.r(o),n.d(o,"address2Hex",function(){return Qe}),n.d(o,"hex2Address",function(){return Je});n("4a91");var s=n("1685"),c=(n("9922"),n("e955")),l=(n("3151"),n("4041")),u=(n("ed0c"),n("563a")),d=(n("44d3"),n("b091")),f=(n("7f7f"),n("e820"),n("2e14")),m=(n("915f"),n("76d8")),h=(n("758d"),n("843a")),p=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},v=[],b=(n("034f"),n("2877")),y={},O=Object(b["a"])(y,g,v,!1,null,null,null),A=O.exports,w=n("4360"),_=n("8c4f"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-header"},[n("img",{staticClass:"home-logo",attrs:{src:e.$config.logo.white,alt:""}}),n("ul",{staticClass:"home-nav"},[e._l(e.navs,function(t){return[t.id?n("li",{key:t.label},[n("a",{attrs:{href:"#"+t.id}},[e._v(e._s(e.$t("home.nav."+t.id)))])]):e._e()]}),n("li",[n("a",{attrs:{href:e.whitePaperLink,target:"_blank"}},[e._v(e._s(e.$t("home.nav.whitePaper")))])]),e.loginStatus?n("li",{on:{click:function(t){return e.$refs.donation.open()}}},[e._v(e._s(e.$t("home.nav.donation")))]):e._e(),n("li",{on:{click:e.changeLang}},[e._v(e._s(e.$t("lang")))]),e.loginStatus?n("li",{on:{click:e.toMinePage}},[e._v(e._s(e.$t("home.nav.mine")))]):e._e()],2)]),e._l(e.navs,function(e){return n(e.component,{key:e.label,tag:"component",style:{backgroundColor:e.color?e.color:""}})}),n("donation",{ref:"donation"}),n("my-footer")],2)},T=[],E=n("cebc"),S=n("2f62"),j=n("6e87"),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-domain",style:{background:"url("+e.$config.homeBg+")",backgroundSize:"cover",backgroundPosition:"center"}},[a("div",{staticClass:"home-domain-mask"}),a("div",[a("div",{staticClass:"search-remark"},[a("h3",[e._v(e._s(e.$t("home.domain.title")))]),a("p",[e._v(e._s(e.$t("home.domain.subtitle")))]),a("p",{staticClass:"home-rule-btn",on:{click:e.info}},[e._v(e._s(e.$t("rule.btn")))])]),a("div",{staticClass:"search-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.value,expression:"form.value"}],attrs:{type:"text",maxlength:30,placeholder:e.$t("home.domain.placeholder")},domProps:{value:e.form.value},on:{pressEnter:e.submit,change:e.changeValue,input:function(t){t.target.composing||e.$set(e.form,"value",t.target.value)}}}),a("span",[e._v(".ont")]),a("a-button",{attrs:{size:"large",loading:e.loading,type:"primary"},on:{click:e.submit}},[e._v(e._s(e.loading?e.$t("home.domain.regBtning"):e.$t("home.domain.regBtn")))])],1)]),a("a",{staticClass:"home-more",attrs:{href:"#scenes"}},[a("p",[e._v("more")]),a("img",{attrs:{src:n("8c5c"),alt:""}})])])},I=[],R=n("e814"),$=n.n(R),k=n("a214"),D={data:function(){return{loading:!1,form:{value:""},errorTxt:""}},methods:{submit:function(){var e=this;if(!this.loading){var t=this.form.value;if(!this.loginStatus)return this.showLoginErrInfo();if(!t)return this.$message.warning(this.$t("dictionary.domainNull"));if(!this.$util.verifyDomain(t))return this.$message.warning(this.$t("dictionary.domainIllegalFormat"));this.loading=!0,k["a"].rgister(this.form.value).then(function(t){var n=$()(t.result[0][1],16);14===n?(e.$message.success(e.$t("dictionary.registerSuccess")),e.$router.push({name:"mine",query:{type:"domain"}})):e.$message.warning(e.$t("register."+e.$config.registerStatus[n]))}).catch(function(t){console.log(t),e.$message.warning(e.$t("dictionary.registerError"))}).finally(function(){return e.loading=!1})}},info:function(){var e=this.$createElement;this.$info({title:this.$t("rule.title"),content:e("div",{},[e("p",this.$t("rule.0")),e("p",this.$t("rule.1")),e("p",this.$t("rule.2"))]),onOk:function(){}})},changeValue:function(){this.errorTxt=""},showLoginErrInfo:function(){var e=this.$createElement;this.$info({title:this.$t("dictionary.tip"),content:e("div",{},[e("p",this.$t("dictionary.notLoginInfo")),e("a",{attrs:{href:this.$config.downloadPlugin}},"cyano-wallet")]),onOk:function(){}})}},computed:Object(E["a"])({},Object(S["c"])(["loginStatus"]))},H=D,P=(n("bd21"),Object(b["a"])(H,N,I,!1,null,null,null)),B=P.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-swiper-panel",attrs:{id:"scenes"}},[n("div",{staticClass:"home-swiper-title"},[e._v(e._s(e.$t("home.nav.scenes")))]),n("div",{staticClass:"home-swiper-content"},[n("div",{staticClass:"scenes-list"},e._l(e.$config.scenes,function(t,a){return n("div",{key:a,staticClass:"scenes-item"},[n("img",{attrs:{src:t.img,alt:""}}),n("div",[e._v(e._s(e.$t("scenes."+t.name)))])])}),0),n("div",{staticClass:"scenes-content"},[e._v(e._s(e.$t("scenes.content")))])])])},L=[],U={},M=U,F=(n("527d"),Object(b["a"])(M,x,L,!1,null,null,null)),z=F.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-swiper-panel",attrs:{id:"partner"}},[n("div",{staticClass:"home-swiper-title"},[e._v(e._s(e.$t("home.nav.partner")))]),n("div",{staticClass:"home-swiper-content"},e._l(e.partners,function(t,a){return n("div",{key:a,staticClass:"partner-list"},e._l(t,function(e,t){return n("div",{key:t,staticClass:"partner-item"},[n("img",{attrs:{src:e.img,alt:e.name}})])}),0)}),0)])},G=[],Y={data:function(){return{partners:[]}},mounted:function(){var e=this.$config.partners,t=[],n=1;e.filter(function(e,a){a<4*n?(t[n-1]||(t[n-1]=[]),t[n-1].push(e)):(t[n]=[],t[n].push(e),n++)}),this.partners=t}},Q=Y,J=(n("59f0"),Object(b["a"])(Q,W,G,!1,null,null,null)),V=J.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-swiper-panel",attrs:{id:"about"}},[n("div",{staticClass:"home-swiper-title"},[e._v(e._s(e.$t("home.nav.about")))]),n("div",{staticClass:"home-swiper-content"},[n("div",{staticClass:"about-content"},[e._v(e._s(e.$t("about.content")))])])])},K=[],q={},X=q,ee=(n("e4e7"),Object(b["a"])(X,Z,K,!1,null,null,null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-swiper-panel",attrs:{id:"whitePaper"}},[n("div",{staticClass:"home-swiper-title"},[e._v(e._s(e.$t("home.nav.whitePaper")))]),e._m(0)])},ae=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-swiper-content"},[n("div",{staticClass:"white-paper-content"},[n("span",{staticClass:"to-white-paper-btn"},[e._v("查看白皮书")])])])}],re={},oe=re,ie=(n("3325"),Object(b["a"])(oe,ne,ae,!1,null,null,null)),se=ie.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-swiper-panel",attrs:{id:"roadmap"}},[a("div",{staticClass:"home-swiper-title"},[e._v(e._s(e.$t("home.nav.roadmap")))]),a("div",{staticClass:"home-swiper-content"},[a("img",{attrs:{src:n("bfe7"),alt:""}}),a("a-timeline",{staticClass:"roadmap-content",attrs:{size:"large"}},e._l(4,function(t){return a("a-timeline-item",{key:t,staticClass:"roadmap-item",attrs:{color:"#fff"}},[e._v("\n                "+e._s(e.$t("roadmap."+(t-1)))+"\n            ")])}),1)],1)])},le=[],ue={},de=ue,fe=(n("f23f"),Object(b["a"])(de,ce,le,!1,null,null,null)),me=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-container"},[n("div",{staticClass:"footer-info"},[n("img",{attrs:{src:e.$config.wechar,alt:""}}),n("div",[n("div",[e._v(e._s(e.$t("dictionary.wechart"))+"：")]),n("div",[e._v(e._s(e.$config.wecharName))]),n("div",[e._v(e._s(e.$t("dictionary.email"))+"：")]),n("div",[e._v(e._s(e.$config.email))])])]),n("img",{staticClass:"footer-logo",attrs:{src:e.$config.logo.main,alt:""}}),n("div",{staticClass:"footer-links"},e._l(e.$config.links,function(e,t){return n("a",{key:t,staticClass:"footer-link-item",attrs:{href:e.url}},[n("img",{attrs:{src:e.img,alt:e.name}})])}),0)])])},pe=[],ge={},ve=ge,be=(n("948f"),Object(b["a"])(ve,he,pe,!1,null,null,null)),ye=be.exports,Oe=n("8495"),Ae={components:{Domain:B,About:te,Scenes:z,Partner:V,WhitePaper:se,MyFooter:ye,RoadMap:me,Donation:Oe["a"]},data:function(){return{current:0,navs:[{component:"domain",color:"",id:""},{component:"scenes",color:"#041f32",id:"scenes"},{component:"road-map",color:"#09283d",id:"roadmap"},{component:"partner",color:"#041f32",id:"partner"},{component:"about",color:"#09283d",id:"about"}]}},mounted:function(){var e=this.$route.query.ref;e&&e!==this.scriptHash&&this.setInviterHash(this.$util.address2Hex(e))},methods:Object(E["a"])({},Object(S["d"])({setInviterHash:j["g"]}),{toMinePage:function(){this.$router.push({name:"mine"})},changeLang:function(){var e=this.$i18n.locale;e="en"===e?"zh":"en",this.$i18n.locale=e,window.localStorage.setItem("locale",e)},login:function(){}}),computed:Object(E["a"])({},Object(S["c"])(["loginStatus","scriptHash"]),{mySwiper:function(){return this.$refs.mySwiper.swiper},whitePaperLink:function(){return this.$config[this.$t("whitePiperSource")]}})},we=Ae,_e=(n("19e0"),Object(b["a"])(we,C,T,!1,null,null,null)),Ce=_e.exports,Te=[{path:"/",name:"home",component:Ce},{path:"/mine",name:"mine",component:function(){return n.e("chunk-169cf4f6").then(n.bind(null,"3f5b"))},meta:{requireAuth:!0}}],Ee=Te;p["a"].use(_["a"]);var Se=new _["a"]({mode:"history",routes:Ee});Se.beforeEach(function(e,t,n){e.meta.requireAuth?w["a"].state.loginStatus?n():n({path:"/"}):n()});var je=Se,Ne=(n("28a5"),n("5176")),Ie=n.n(Ne),Re=n("a925"),$e={lang:"English",whitePiperSource:"whitePaperZH",dictionary:{copy:"复制",copySuccess:"复制成功",copyError:"复制出错，请尝试手动复制",actionSuccess:"操作成功",actionError:"操作出错，请重试",deleteSuccess:"销毁成功",ok:"确定",cancel:"取消",login:"登录",transfer1:"转账",transfer2:"转移",transfer3:"转移域名",resolve:"解析",setresolve:"设置解析",wallet:"钱包",domain:"域名",assets:"资产",register:"注册",registerTime:"注册时间",registerDomain:"注册域名",address:"地址",walletAddress:"钱包地址",donation:"捐赠",donationed:"已捐赠",donationSuccess:"非常感谢您的捐赠",inviter:"邀请",invitered:"已邀请",destroy:"销毁",notSet:"未设置",amount:"金额",addressNull:"地址为空",addressIllegal:"地址非法",domainIllegal:"域名非法",domainNull:"域名为空",domainIllegalFormat:"域名由3-30位小写字母或者数字组成",transfer1NotMe:"不能转给自己",transfer1Error:"转账出错，请重试",transfer1Success:"转账成功",transfer1Cfm:"确认转账",transfer3Error:"转移域名出错，请重试",transfer3Success:"转移域名成功",transfer3Cfm:"确认转移域名",amountNull:"数量为空",domainNotResolve:"该域名未解析地址",registerSuccess:"注册成功",registerError:"注册出错，请重试",backHome:"返回首页",tip:"提示",notLoginInfo:"检测到您未登录或未安装插件，请登录或访问链接下载插件",email:"邮箱",wechart:"微信公众号",balance:"余额",resolveNull:"解析内容为空",resolveIllegal:"解析内容非法",resolveSuccess:"设置解析成功",resolveError:"设置解析出错"},home:{nav:{domain:"Domain",scenes:"使用场景",partner:"合作伙伴",about:"关于",whitePaper:"白皮书",donation:"捐赠",lang:"English",mine:"个人中心",inviter:"邀请",roadmap:"路线图"},domain:{title:"注册一个属于你的区块链域名",subtitle:"一个以“.ont”结尾的去中心域名",tip:"提示：",regBtn:"注册",regBtning:"注册中",placeholder:"输入区块链域名"}},mine:{},register:{ERR_EXITDOMAIN:"域名已被注册",ERR_YOUHAVE:"已经达到当前领取条件的上限",ERR_YOUNOTHAVE:"你不拥有该域名",ERR_OK:"操作成功",ERR_INVIA_ZM:"域名中包含不允许的字符",ERR_DOMAIN_LENGTH:"域名长度不符合规范",ERR_NOAUTH:"\t越权操作",ERR_ONT_NO:"\t账户ont不足",ERR_YOU_NOT_HAVE:"当前域名的根域名不属于你"},placeholder:{domain:"请输入域名",address:"请输入地址或域名(***.ont)",link:"请输入链接",resolve:"请输入解析内容"},rule:{btn:"查看规则",title:"ONS域名的注册规则",0:"每个以钱包地址为单位的用户可以免费申领一个五位数+域名",1:"四位数域名可以通过邀请用户获得两个域名获得或者点击官网进行捐赠1个ONT（各有一次获得机会）",2:"三位数域名可以通过邀请用户获得六个域名获得或者点击官网进行捐赠3个ONT（各有一次获得机会）"},roadmap:{0:"1.0  用户端基础操作，注册，解析，绑定域名，体验域名转账",1:"2.0  完成官网界面迭代。二级域名开发，钱包端、链游端布局。增设用户体验域名使用场景",2:"3.0  基于用户市场规模，推出域名交易所。使域名在用户之间高效撮合",3:"4.0  拓展域名应用，如建立dns服务器，使其域名等对接现有的互联网设施等",4:"……"},resolve:{PROTOCOL_ADDRESS:"ONT钱包地址",PROTOCOL_ONTID:"ONTID地址",PROTOCOL_NAME:"自己的名字",PROTOCOL_INFO:"备注",PROTOCOL_EMAIL:"电子邮件地址",PROTOCOL_PHONE:"电话号码"},about:{content:'"H2team“是一个区块链的开源团队，致力于让通证回归到该有的地位当中扮演它应该有的角色.'},scenes:{address:"钱包地址",email:"邮件地址",id:"DID身份证明",contract:"智能合约",alias:"宠物别名",phone:"手机号",remark:"备注",content:"ONS（ONTology  Name  Service）可以将无序的、繁琐的、难以记忆的钱包地址交由用户自定义为以“.ont”结尾的短域名，比如“h2team.ont”"}},ke={lang:"中文",whitePiperSource:"whitePaperEN",dictionary:{copy:"Copy",copySuccess:"Successful copy",copyError:"Copy error, please try to copy manually",actionSuccess:"Successful operation",actionError:"Operation error, please try again",deleteSuccess:"successfully deleted",ok:"Ok",cancel:"Cancel",login:"Login",transfer1:"Transfer",transfer2:"Transfer",transfer3:"Transfer Domain",resolve:"Resolve",setresolve:"SetResolve",wallet:"Wallet",domain:"Domain",assets:"Assets",register:"Register",registerTime:"Registration Time",registerDomain:"Register Domain",address:"Address",walletAddress:"Wallet Address",donation:"Donation",donationed:"Donationed",donationSuccess:"Thank you very much for your donation.",inviter:"Inviter",invitered:"Invitered",destroy:"Destroy",notSet:"Not Setting",amount:"Amount",addressNull:"The address is empty",addressIllegal:"Illegal address",domainIllegal:"Illegal domain name",domainNull:"Domain name is empty",domainIllegalFormat:"The domain name consists of 3-30 lowercase letters or numbers",transfer1NotMe:"Can't transfer to yourself",transfer1Error:"Transfer failed, please try again",transfer1Success:"Successful transfer",transfer1Cfm:"Confirm transfer",transfer3Error:"There is an error transferring the domain name, please try again",transfer3Success:"Successful transfer of domain name",transfer3Cfm:"Confirm transfer domain name",amountNull:"The quantity is empty",domainNotResolve:"The domain name is not resolved",registerSuccess:"registration success",registerError:"Registration error, please try again",backHome:"Back Home",tip:"prompt",notLoginInfo:"If you have detected that you are not logged in or have not installed the plugin, please log in or visit the link to download the plugin.",email:"mailbox",wechart:"WeChat public number",balance:"Balance",resolveNull:"Parsing content is empty",resolveIllegal:"Illegal parsing of content",resolveSuccess:"Set the parsing success",resolveError:"Set parsing error"},home:{nav:{domain:"Domain",scenes:"Use case ",partner:"Cooperative Partners",about:"About",whitePaper:"WhitePaper",donation:"Donation",lang:"中文",mine:"Personal Center",inviter:"Inviter",roadmap:"RoadMap"},domain:{title:"Register a blockchain domain name that belongs to you",subtitle:'A decentralized domain ending with ".ont"',tip:"Tip: ",regBtn:"register",regBtning:"register…",placeholder:"Enter the blockchain domain name"}},mine:{},placeholder:{domain:"Please enter a domain name",address:"Please enter an address or domain name(***.ont)",link:"Please enter a link",resolve:"Please enter the parsing content"},register:{ERR_EXITDOMAIN:"The domain is already registered",ERR_YOUHAVE:"Upper limit of current eligibility has been reached",ERR_YOUNOTHAVE:"You do not own the domain",ERR_OK:"Operation succeeded",ERR_INVIA_ZM:"Domain names contain characters that are not allowed",ERR_DOMAIN_LENGTH:"Domain name length does not conform to specifications",ERR_NOAUTH:"Unauthorized operation",ERR_ONT_NO:"Insufficient account ont",ERR_YOU_NOT_HAVE:"The current root domain name does not belong to you"},rule:{btn:"View rules",title:"Registration Rules for ONS Domain Names",0:"Each wallet address can be obtained at most: a domain name larger than 4 digits, two domain names with 4 digits and two domain names with 3 digits. Two-digit and one-digit domain names remain temporarily",1:"Four-digit domain name rules: Inviting two people to register can get one (only one chance) and donating two ONTs can get one (only one chance).",2:"The rule of 3-digit domain name is: Invite 8 people to get one (only one chance) and donate 8 ONT to get one (only one chance)."},roadmap:{0:"1.0 user-based operation, registration, parsing, binding domain name, experience domain name transfer.",1:"2.0 complete interface iteration, wallet end, chain game layout. Second level domain development, expand user experience domain scenario.",2:"3.0 launch domain name transactions based on the size of the user market. Efficient matching of domain names between users.",3:"4.0 expand the application of domain name, such as the establishment of DNS server to connect the domain name with the existing Internet facilities, mail, telephone system, etc.",4:"……"},resolve:{PROTOCOL_ADDRESS:"ONT wallet address",PROTOCOL_ONTID:"ONTID address",PROTOCOL_NAME:"Name",PROTOCOL_INFO:"Remark",PROTOCOL_EMAIL:"Email",PROTOCOL_PHONE:"Phone"},about:{content:'"H2team "is an open source team of blockchains, dedicated to returning the certificate to its role and playing its role.'},scenes:{address:"Wallet address",email:"Email address",id:"DID personal I.D",contract:"Smart contract",alias:"Pet alias",phone:"Phone Number",remark:"Remarks",content:'ONS (ONTology Name Service) allows users to customize the disordered, tedious and difficult to remember wallet addresses into short domain names ending with ".ont ", such as "h2team.ont".'}};p["a"].use(Re["a"]);var De={en:Ie()(ke),zh:Ie()($e)};function He(){var e=window.navigator.language||window.navigator.browserLanguage;return e?e.split("-")[0]:""}var Pe=new Re["a"]({locale:window.localStorage.getItem("locale")||He()||"en",messages:De}),Be=Pe,xe=n("73ad");function Le(e){var t=/^[a-z?(0-9)]{3,30}$/;return t.test(e)}function Ue(e){var t=/^(?=^.{3,30}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.ont)+$/;return t.test(e)}function Me(e){var t=/^[0-9a-zA-Z]{34}$/g;return t.test(e)}n("4917"),n("6b54");function Fe(e,t){for(var n=[],a=0,r=0;r<e.length;r++){var o=e.charCodeAt(r);0<=o&&o<=127?(a+=1,n.push(o)):128<=o&&o<=2047?(a+=2,n.push(192|31&o>>6),n.push(128|63&o)):(2048<=o&&o<=55295||57344<=o&&o<=65535)&&(a+=3,n.push(224|15&o>>12),n.push(128|63&o>>6),n.push(128|63&o))}for(i=0;i<n.length;i++)n[i]&=255;return t?n:a<=255?[0,a].concat(n):[a>>8,255&a].concat(n)}function ze(e){if("string"===typeof e)return e;for(var t="",n=e,a=0;a<n.length;a++){var r=n[a].toString(2),o=r.match(/^1+?(?=0)/);if(o&&8==r.length){for(var i=o[0].length,s=n[a].toString(2).slice(7-i),c=1;c<i;c++)s+=n[c+a].toString(2).slice(2);t+=String.fromCharCode($()(s,2)),a+=i-1}else t+=String.fromCharCode(n[a])}return t}function We(e){for(var t=Fe(e,!0),n="",a=0;a<t.length;a++){var r=(255&t[a]).toString(16);1===r.length&&(r="0"+r),n+=r}return n}function Ge(e){for(var t=[],n=0;n<e.length;n+=2)t.push($()(e.substring(n,n+2),16));return ze(t)}var Ye=n("f632");function Qe(e){try{return new Ye.Crypto.Address(e).serialize()}catch(t){return console.log(t),""}}function Je(e){try{return new Ye.Crypto.Address(e).toBase58()}catch(t){return console.log(t),""}}var Ve=Object(E["a"])({},xe,a,r,o),Ze=n("430e"),Ke=n.n(Ze);p["a"].config.productionTip=!1,p["a"].prototype.$config=CONFIG,p["a"].prototype.$util=Ve,p["a"].prototype.$message=h["a"],p["a"].prototype.$info=m["a"].info,p["a"].prototype.$confirm=m["a"].confirm,p["a"].use(Ke.a),p["a"].component(f["a"].name,f["a"]),p["a"].component(d["a"].name,d["a"]),p["a"].component(d["a"].TextArea.name,d["a"].TextArea),p["a"].component(u["a"].name,u["a"]),p["a"].component(l["a"].Group.name,l["a"].Group),p["a"].component(l["a"].name,l["a"]),p["a"].component(m["a"].name,m["a"]),p["a"].component(c["a"].name,c["a"]),p["a"].component(c["a"].Option.name,c["a"].Option),p["a"].component(s["a"].name,s["a"]),p["a"].component(s["a"].Item.name,s["a"].Item),w["a"].dispatch("getAccount"),new p["a"]({i18n:Be,store:w["a"],router:je,render:function(e){return e(A)}}).$mount("#app")},"59f0":function(e,t,n){"use strict";var a=n("6c10"),r=n.n(a);r.a},6:function(e,t){},"64a9":function(e,t,n){},"6c10":function(e,t,n){},"6e87":function(e,t,n){"use strict";n.d(t,"i",function(){return a}),n.d(t,"a",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"j",function(){return s}),n.d(t,"g",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"e",function(){return u}),n.d(t,"h",function(){return d}),n.d(t,"c",function(){return f});var a="LOGIN_STATUS",r="ACCOUNT",o="DOMAINS",i="ADDRESS",s="SCRIPT_HASH",c="INVITER_SCRIPT_HASH",l="EMPTY_USER",u="DONAT_TOTAL",d="INVITER_TOTAL",f="BALANCE"},"6fb0":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n("cebc"),r=n("795b"),o=n.n(r),i=n("2d7d"),s=n.n(i),c=n("2b05"),l=CONFIG.contract,u=new s.a([["get","invokeRead"],["GET","invokeRead"],["post","invoke"],["POST","invoke"]]);function d(e,t){var n=e.args,r=void 0===n?[]:n,i=e.type,s=void 0===i?"get":i,d=e.method;return new o.a(function(e,n){var o=t||l,i=Object(a["a"])({},o,{operation:d,args:r});c["client"].api.smartContract[u.get(s)](i).then(function(t){return e(t)},function(e){return n(e)}).catch(function(e){return n(e)})})}},7:function(e,t){},"73ad":function(e,t,n){"use strict";n.r(t),n.d(t,"bin",function(){return s}),n.d(t,"str2Bytes",function(){return c}),n.d(t,"genDomainHash",function(){return l});var a=n("e814"),r=n.n(a),o=(n("6b54"),n("28a5"),n("7394")),i="ont";function s(e){return e?e.split("").map(function(e){return e.charCodeAt().toString(16)}).join(""):""}function c(e){var t=0,n=e.length;if(n%2!=0)return null;n/=2;for(var a=new Array,o=0;o<n;o++){var i=e.substr(t,2),s=r()(i,16);a.push(s),t+=2}return a}function l(e){return e?Object(o["sha256"])(c(Object(o["sha256"])(i)+s(e))):""}},7622:function(e,t,n){},8495:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:e.$t("home.nav.donation"),visible:e.show,confirmLoading:e.loading},on:{ok:e.ok,cancel:e.cancel}},[n("div",{staticClass:"donation-wrap"},[n("div",{staticClass:"donation-title"},[e._v(e._s(e.$t("dictionary.balance"))+"："),n("span",{staticClass:"donation-balance"},[e._v(e._s(e.balance.ONT))]),e._v(" ONT，"+e._s(e.$t("dictionary.donation"))+"：")]),n("div",[n("a-input-number",{staticClass:"donation-input",attrs:{size:"large",min:1,max:999,step:1,precision:0},on:{change:e.onChange},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}}),e._v(" ONT")],1)])])},r=[],o=n("e814"),i=n.n(o),s=n("cebc"),c=n("43a5"),l=n("2f62"),u={data:function(){return{show:!1,loading:!1,form:{value:1}}},methods:Object(s["a"])({},Object(l["b"])(["getDonatTotal","getBalance"]),{open:function(){this.show=!0},close:function(){this.show=!1,this.form.value=1},ok:function(){var e=this;this.loading=!0,c["a"].donat(this.form.value).then(function(t){var n=i()(t.result[0][1],16);14===n?(e.$message.success(e.$t("dictionary.donationSuccess")),e.close(),e.getDonatTotal(),e.getBalance()):e.$message.warning(e.$t("register."+e.$config.registerStatus[n]))}).catch(function(e){console.log(e)}).finally(function(){return e.loading=!1})},cancel:function(){this.close()},onChange:function(e){}}),computed:Object(s["a"])({},Object(l["c"])(["balance"]))},d=u,f=(n("4299"),n("2877")),m=Object(f["a"])(d,a,r,!1,null,null,null);t["a"]=m.exports},"8c51":function(e,t,n){},"8c5c":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEmUlEQVR4Xu2aT8hnUxjHP18jZKGUsqAhFgqL2UjNMGZBaTJm/AklI382lCILY6OUIhsWYmNMM5qaEYr8WyKMbCRZSBRlocjCAoVHj+59u7/73nPvufeee97f9f7O7v29v/u75/s53+c553nuFZt8aJPrZwVg5YBNTmAVAnUDmNnFwDXAW5K+/T8YxMy2AjcAn0k6UdW04AAzexR4AjgJ+A3YI+mDOUMws13AG8AZhY4HJD1XaloDYGYXAt/Aws7wO3C1pE/mCKEQ/x5wamX+fwDnSvrFP6sC2A283SB0lhAC4kt5+yS5KxYAnA98BZwegLBb0vtzcEKH+B+BrZL+WQDgf5jZHuB14OQGoX8C1y47hA7xfwF7Jb2zLgeUH5jZ9cBrc4QQIf4mSW8Gd4EaBHfClrk4YYj4dSFQFWtmNwPH5gBhqPhWAEVOWHoIHeL/Bm6s274zBObihAjxt0l6tW3niqoFljEcUojvDIFldUIq8b0ALEtOSCm+N4CNhpBa/CAAGwVhCvGDAVQgvFKrHsu0kfTYPJX4UQAKCLcDL08JYUrxowFMDWFq8U3VoJ/9HwEuA7xoOFyWjW2HCTNL7oQO8Qbc0nXIKRbINd3p3S1viQFPS/IT4n+j3hI7DOyviHUIXkF5Gdk6UkKIEH+HpKMRc/Ky3itbr3DLcUSSA1kEYGaXAl82/GhWCBOLL+Vtk/TFggPMbAfwUYBqFgiZxLvEHWWfsx4CnwPbWiB4ZbUWPyELDgmHhOI95r2XUbV9daonJG0P5YALAO8Anx0Q55WVV1hJISQW7z0ML+Obxk/AdknfNQLwD80sK4RiIvXWdTk/z/axCc9Xvpf4hRxQxRUJ4dbILfJu4MXAYcl79D5Oa1iuycUHAVSc8CFwTsBOvg3tTwCh6ef7iPenWMdbbO9t8J1V21dv2NoQMbPzgI8zQ+gr/gjgB7Gm4eI9438fStidHaHMELKKbw2BWk6IcYInKxfQOswslBP6iPeF8yJs8MoHd4HQ7COccAi4ZyAEF3+vpJciALr4g8Bdge/+UMR80PbROaB+g8QQrgMeLu7hBcq7icT7Pu+xHzU6c0AAgu8O/tJB0zgkyW2edJhZzMr3Eh+dAxog+NboJ8YQhBck3Z+SgJl5eLTZvrf4wQD8QjPLBsHMngfua4n5QeJHAcgFoUO8n+n9kBMd83WIvXNAznCIEO8r7wXO4DEaQMUJnhi9kGoaz0p6qM8szewZ4MHANb7yo8WPDoHq5MzMS2hPjKMh5BKfFEDhhNEQcopPDiASwlOS/H3EdaND/NfAVWNjPnkSDAjpcsI6CGb2JHAgEPMu/gpJP/fJIzHfTZIEWyD4W6YXBSayBmGjxE8SArXEeFbRaQ5BeLzoFD2We+XL+03mgPIGZtYFIeTUyWxfveHkAIrE2BeCv7G6a4qYz5IEAzkhFoKLv1LSrzFJbOx3sjigRzhkFT95Emxxgr90fUnt/9nFbwiAIiecCXgH6PICwqeAv42exfbZk2DACaf4YzbAH7Mdj3kEPzbem67PmgOmEDD2N1cAxhKc+/UrB8x9BcfOf9M74F+fwKhfBiW8QAAAAABJRU5ErkJggg=="},"8f60f":function(e,t,n){var a={"./aes":"6a33","./aes.js":"6a33","./big":"ffe3","./big.js":"ffe3","./ctx":"d4bb","./ctx.js":"d4bb","./ecdh":"5a91","./ecdh.js":"5a91","./ecp":"79f3","./ecp.js":"79f3","./ecp2":"4e89","./ecp2.js":"4e89","./ff":"c83d","./ff.js":"c83d","./fp":"6275","./fp.js":"6275","./fp12":"13c9","./fp12.js":"13c9","./fp2":"9224","./fp2.js":"9224","./fp4":"488c","./fp4.js":"488c","./gcm":"680e","./gcm.js":"680e","./hash256":"5144","./hash256.js":"5144","./hash384":"6402","./hash384.js":"6402","./hash512":"f1e5","./hash512.js":"f1e5","./mpin":"e406","./mpin.js":"e406","./newhope":"68d6","./newhope.js":"68d6","./nhs":"203f","./nhs.js":"203f","./pair":"15cf","./pair.js":"15cf","./rand":"c3ad","./rand.js":"c3ad","./rom_curve":"bea2","./rom_curve.js":"bea2","./rom_field":"ba4c","./rom_field.js":"ba4c","./rsa":"69e1","./rsa.js":"69e1","./sha3":"48db","./sha3.js":"48db","./uint64":"f72e","./uint64.js":"f72e"};function r(e){var t=o(e);return n(t)}function o(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="8f60f"},"948f":function(e,t,n){"use strict";var a=n("2022"),r=n.n(a);r.a},9993:function(e,t,n){},a214:function(e,t,n){"use strict";var a=n("4360"),r=n("7394"),o=n("73ad"),i=n("6fb0"),s=CONFIG.root;t["a"]={rgister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[{type:"ByteArray",value:a["a"].state.scriptHash},{type:"String",value:e},{type:"ByteArray",value:Object(r["sha256"])(s)},{type:"ByteArray",value:a["a"].state.inviterScriptHash}];return Object(i["a"])({args:t,type:"post",method:"Register"})},setResolve:function(e,t,n){var r=[{type:"ByteArray",value:a["a"].state.scriptHash},{type:"ByteArray",value:Object(o["genDomainHash"])(e)},{type:"Number",value:t},{type:"String",value:n}];return console.log(r),Object(i["a"])({args:r,type:"post",method:"SetResolve"})},resolve:function(e,t){var n=[{type:"ByteArray",value:Object(o["genDomainHash"])(e)},{type:"Number",value:t}];return Object(i["a"])({args:n,method:"Resolve"})},transfer:function(e,t){var n=[{type:"ByteArray",value:a["a"].state.scriptHash},{type:"ByteArray",value:e},{type:"ByteArray",value:Object(o["genDomainHash"])(t)}];return Object(i["a"])({args:n,type:"post",method:"Transfer"})},drop:function(e){var t=[{type:"ByteArray",value:a["a"].state.scriptHash},{type:"ByteArray",value:Object(o["genDomainHash"])(e)}];return Object(i["a"])({args:t,type:"post",method:"Drop"})},queryByuser:function(e){var t=[{type:"ByteArray",value:Object(o["genDomainHash"])(e)}];return Object(i["a"])({args:t,method:"GetDomainReg"})}}},a7ff:function(e,t,n){},bd21:function(e,t,n){"use strict";var a=n("148b"),r=n.n(a);r.a},bfe7:function(e,t,n){e.exports=n.p+"img/earth.7e54f50f.png"},e4e7:function(e,t,n){"use strict";var a=n("9993"),r=n.n(a);r.a},f23f:function(e,t,n){"use strict";var a=n("0cd2"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ab6f293f.js.map