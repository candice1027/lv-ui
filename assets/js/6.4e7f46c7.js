(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(t,e,n){},244:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},286:function(t,e,n){"use strict";var s=n(243);n.n(s).a},287:function(t,e,n){"use strict";var s=n(244);n.n(s).a},288:function(t,e,n){"use strict";var s=n(245);n.n(s).a},289:function(t,e,n){"use strict";var s=n(246);n.n(s).a},300:function(t,e,n){"use strict";n.r(e);var s={props:{headerHeight:{type:String}},computed:{headerStyle:function(){return{height:this.headerHeight+"px"}}}},o=n(34),a=Object(o.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header",style:this.headerStyle},[this._t("default")],2)},[],!1,null,"ef26d00c",null).exports,r={props:{footerHeight:{type:String}},computed:{footerStyle:function(){return{height:this.footerHeight+"px"}}}},i=Object(o.a)(r,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer",style:this.footerStyle},[this._t("default")],2)},[],!1,null,"812df61c",null).exports,c={name:"sider-ui",data:function(){return{}},methods:{}},l=(n(286),Object(o.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"sider"},[this._t("default")],2)])},[],!1,null,"4935af80",null).exports),d={},g=(n(287),Object(o.a)(d,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"cbe858ba",null).exports),h=(n(36),n(35),{data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"sider-ui"===e.$options.name&&(t.layoutClass.hasSider=!0,console.log("sider-ui"))}),console.log(this.$children)}}),u=(n(288),{components:{"g-header":a,"g-footer":i,"g-sider":l,"g-content":g,"g-layout":Object(o.a)(h,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"0c7f89e3",null).exports},data:function(){return{content:"\n        <g-layout>: 最外层的容器 \n        <g-header>: 顶栏容器 \n        <g-content>: 主要内容区域，会自动撑开\n        <g-footer>: 底栏容器 \n      ",content1:'\n        <div class="my-container">\n          <g-layout>\n            <g-header class="header" headerHeight="30">header</g-header>\n            <g-content class="content">content</g-content>\n            <g-footer class="footer" footerHeight="30">footer</g-footer>\n          </g-layout>\n        </div>\n      ',content2:'\n        <div class="my-container">\n          <g-layout>\n            <g-header class="header" headerHeight="30">header</g-header>\n            <g-layout>\n              <g-sider class="sider">sider</g-sider>\n              <g-content class="content">content</g-content>\n            </g-layout>\n            <g-footer class="footer" footerHeight="30">footer</g-footer>\n          </g-layout>\n        </div>\n      ',content3:'\n        <div class="my-container">\n          <g-layout>\n            <g-header class="header" headerHeight="30">header</g-header>\n            <g-layout>\n              <g-content class="content">content</g-content>\n              <g-sider class="sider">sider</g-sider>\n            </g-layout>\n            <g-footer class="footer" footerHeight="30">footer</g-footer>\n          </g-layout>\n        </div>\n      ',content4:'\n        <div class="my-container">\n          <g-layout>\n            <g-sider class="sider">sider</g-sider>\n            <g-layout>\n              <g-header class="header" headerHeight="30">header</g-header>\n              <g-content class="content">content</g-content>\n              <g-footer class="footer" footerHeight="30">footer</g-footer>\n            </g-layout>\n          </g-layout>\n        </div>\n      '}}}),f=(n(289),Object(o.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("布局容器 可以快速搭建页面布局")]),t._v(" "),n("div",[t._v("\n   "+t._s(t.content)+"\n  ")]),t._v(" "),n("p",[t._v("上中下")]),t._v(" "),n("div",{staticClass:"my-container"},[n("g-layout",[n("g-header",{staticClass:"header",attrs:{headerHeight:"30"}},[t._v("header")]),t._v(" "),n("g-content",{staticClass:"content"},[t._v("content")]),t._v(" "),n("g-footer",{staticClass:"footer",attrs:{footerHeight:"30"}},[t._v("footer")])],1)],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content1))])]),t._v(" "),n("p",[t._v("有边栏的布局")]),t._v(" "),n("div",{staticClass:"my-container"},[n("g-layout",[n("g-header",{staticClass:"header",attrs:{headerHeight:"30"}},[t._v("header")]),t._v(" "),n("g-layout",[n("g-sider",{staticClass:"sider"},[t._v("sider")]),t._v(" "),n("g-content",{staticClass:"content"},[t._v("content")])],1),t._v(" "),n("g-footer",{staticClass:"footer",attrs:{footerHeight:"30"}},[t._v("footer")])],1)],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content2))])]),t._v(" "),n("p",[t._v("边栏可放置在右边")]),t._v(" "),n("div",{staticClass:"my-container"},[n("g-layout",[n("g-header",{staticClass:"header",attrs:{headerHeight:"30"}},[t._v("header")]),t._v(" "),n("g-layout",[n("g-content",{staticClass:"content"},[t._v("content")]),t._v(" "),n("g-sider",{staticClass:"sider"},[t._v("sider")])],1),t._v(" "),n("g-footer",{staticClass:"footer",attrs:{footerHeight:"30"}},[t._v("footer")])],1)],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content3))])]),t._v(" "),n("p",[t._v("边栏在左侧")]),t._v(" "),n("div",{staticClass:"my-container"},[n("g-layout",[n("g-sider",{staticClass:"sider"},[t._v("sider")]),t._v(" "),n("g-layout",[n("g-header",{staticClass:"header",attrs:{headerHeight:"30"}},[t._v("header")]),t._v(" "),n("g-content",{staticClass:"content"},[t._v("content")]),t._v(" "),n("g-footer",{staticClass:"footer",attrs:{footerHeight:"30"}},[t._v("footer")])],1)],1)],1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content4))])])])},[],!1,null,"191a946e",null));e.default=f.exports}}]);