webpackJsonp([3],{AU5V:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n    "+t._s(t.locales[t.locale])+"\n  ")]),e("div",{staticClass:"dropdown-menu"},t._l(t.locales,function(a,n){return e("a",{key:n,staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.setLocale(n)}}},[t._v("\n      "+t._s(a)+"\n    ")])}))])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},DLCH:function(t,a,e){"use strict";var n=function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"layout"},[a("navbar"),a("div",{staticClass:"container mt-4"},[a("nuxt")],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},FMZX:function(t,a,e){"use strict";var n=e("HwcC");a.a={components:{Navbar:n.a}}},HwcC:function(t,a,e){"use strict";var n=e("m6VX"),s=e("VMOx"),r=!1;var o=function(t){r||e("zhm4")},i=e("VU/8")(n.a,s.a,!1,o,"data-v-cfc91daa",null);i.options.__file="components/Navbar.vue",a.a=i.exports},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("FMZX"),s=e("DLCH"),r=e("VU/8")(n.a,s.a,!1,null,null,null);r.options.__file="layouts/default.vue",a.default=r.exports},OCJE:function(t,a,e){"use strict";var n=e("NYxO"),s=e("pxFO");a.a={computed:Object(n.mapGetters)({locale:"lang/locale",locales:"lang/locales"}),methods:{setLocale:function(t){this.$i18n.locale!==t&&(Object(s.b)(t),this.$store.dispatch("lang/setLocale",{locale:t}))}}}},SERw:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".profile-photo[data-v-cfc91daa]{width:32px;width:2rem;height:32px;height:2rem;margin:-6px 0;margin:-.375rem 0}",""])},VMOx:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-white"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"navbar-brand",attrs:{to:{name:t.user?"home":"welcome"}}},[t._v("\n      "+t._s(t.appName)+"\n    ")]),e("button",{staticClass:"navbar-toggler",attrs:{"aria-label":t.$t("toggle_navigation"),type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarToggler"}},[e("ul",{staticClass:"navbar-nav"},[e("locale-dropdown")],1),e("ul",{staticClass:"navbar-nav ml-auto"},[t.user?e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle text-dark",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("img",{staticClass:"rounded-circle profile-photo mr-1",attrs:{src:t.user.photo_url}}),t._v("\n            "+t._s(t.user.name)+"\n          ")]),e("div",{staticClass:"dropdown-menu"},[e("router-link",{staticClass:"dropdown-item pl-3",attrs:{to:{name:"settings.profile"}}},[e("fa",{attrs:{icon:"cog","fixed-width":""}}),t._v("\n              "+t._s(t.$t("settings"))+"\n            ")],1),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item pl-3",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout(a)}}},[e("fa",{attrs:{icon:"sign-out-alt","fixed-width":""}}),t._v("\n              "+t._s(t.$t("logout"))+"\n            ")],1)],1)]):[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"login"},"active-class":"active"}},[t._v("\n              "+t._s(t.$t("login"))+"\n            ")])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"register"},"active-class":"active"}},[t._v("\n              "+t._s(t.$t("register"))+"\n            ")])],1)]],2)])],1)])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},hx7L:function(t,a,e){"use strict";var n=e("OCJE"),s=e("AU5V"),r=e("VU/8")(n.a,s.a,!1,null,null,null);r.options.__file="components/LocaleDropdown.vue",a.a=r.exports},m6VX:function(t,a,e){"use strict";var n=e("Xxa5"),s=e.n(n),r=e("exGp"),o=e.n(r),i=e("NYxO"),l=e("hx7L");a.a={components:{LocaleDropdown:l.a},data:function(){return{appName:"Laravel-Nuxt"}},computed:Object(i.mapGetters)({user:"auth/user"}),methods:{logout:function(){var t=o()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("auth/logout");case 2:this.$router.push({name:"login"});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},zhm4:function(t,a,e){var n=e("SERw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("cfced2f4",n,!1,{sourceMap:!1})}});