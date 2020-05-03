/*! For license information please see 77587487.3141a6a1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),i=(r(0),r(205)),a=r(241),c={title:"Reference",sidebar_label:"hidden",hide_pagination:!0},u={id:"reference",title:"Reference",description:'<Jump to="../reference/plugins/">Plugins</Jump>',source:"@site/docs/reference.md",permalink:"/SteamSpeak/docs/reference",editUrl:"https://github.com/dalexhd/steamspeak/edit/master/docs/docs/reference.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Running SteamSpeak",permalink:"/SteamSpeak/docs/guide/running-steamspeak"},next:{title:"Plugins",permalink:"/SteamSpeak/docs/reference/plugins"}},f=[],s={rightToc:f};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(a.a,{to:"../reference/plugins/",mdxType:"Jump"},"Plugins"))}l.isMDXComponent=!0},204:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f=o.a.createContext({}),s=function(e){var t=o.a.useContext(f),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},l=function(e){var t=s(e.components);return o.a.createElement(f.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,y=l["".concat(a,".").concat(m)]||l[m]||p[m]||i;return r?o.a.createElement(y,c({ref:t},f,{components:r})):o.a.createElement(y,c({ref:t},f))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var f=2;f<i;f++)a[f]=r[f];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},207:function(e,t,r){"use strict";r(52),r(211),r(246);var n=r(0),o=r.n(n),i=r(39),a=r(219),c=r(15),u=r.n(c),f=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,c=f(e,["isNavLink"]),s=c.to,l=c.href,p=s||l,m=Object(a.a)(p),y=Object(n.useRef)(!1),b=r?i.c:i.b,d=u.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!d&&m&&window.docusaurus.prefetch(p),function(){d&&t&&t.disconnect()}}),[p,d,m]),p&&m&&!p.startsWith("#")?o.a.createElement(b,Object.assign({},c,{onMouseEnter:function(){y.current||(window.docusaurus.preload(p),y.current=!0)},innerRef:function(e){var r,n;d&&e&&m&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({},c,{href:p}))}},209:function(e,t,r){var n=r(88),o=r(33);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},210:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},211:function(e,t,r){"use strict";var n=r(12),o=r(25),i=r(209),a="".startsWith;n(n.P+n.F*r(210)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},219:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},221:function(e,t,r){var n=r(23);e.exports=Array.isArray||function(e){return"Array"==n(e)}},231:function(e,t,r){t.f=r(2)},232:function(e,t,r){var n=r(89),o=r(61).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},236:function(e,t,r){var n=r(41)("meta"),o=r(13),i=r(31),a=r(28).f,c=0,u=Object.isExtensible||function(){return!0},f=!r(14)((function(){return u(Object.preventExtensions({}))})),s=function(e){a(e,n,{value:{i:"O"+ ++c,w:{}}})},l=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!u(e))return"F";if(!t)return"E";s(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!u(e))return!0;if(!t)return!1;s(e)}return e[n].w},onFreeze:function(e){return f&&l.NEED&&u(e)&&!i(e,n)&&s(e),e}}},241:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(207),a=r(204),c=r.n(a);r(141);t.a=function(e){var t=e.children,r=e.className,n=e.badge,a=e.leftIcon,u=e.rightIcon,f=e.size,s=e.target,l=e.to,p=c()("jump-to","jump-to--"+f,r),m=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},a&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+a})),o.a.createElement("div",{className:"jump-to--main"},n?o.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return s?o.a.createElement("a",{href:l,target:s,className:p},m):o.a.createElement(i.a,{to:l,className:p},m)}},246:function(e,t,r){"use strict";var n=r(5),o=r(31),i=r(10),a=r(12),c=r(17),u=r(236).KEY,f=r(14),s=r(43),l=r(42),p=r(41),m=r(2),y=r(231),b=r(247),d=r(248),h=r(221),v=r(8),g=r(13),O=r(26),w=r(30),j=r(83),S=r(55),E=r(86),P=r(249),x=r(250),N=r(82),k=r(28),T=r(22),D=x.f,F=k.f,I=P.f,J=n.Symbol,M=n.JSON,W=M&&M.stringify,A=m("_hidden"),C=m("toPrimitive"),R={}.propertyIsEnumerable,_=s("symbol-registry"),K=s("symbols"),L=s("op-symbols"),X=Object.prototype,z="function"==typeof J&&!!N.f,U=n.QObject,Y=!U||!U.prototype||!U.prototype.findChild,G=i&&f((function(){return 7!=E(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=D(X,t);n&&delete X[t],F(e,t,r),n&&e!==X&&F(X,t,n)}:F,Q=function(e){var t=K[e]=E(J.prototype);return t._k=e,t},q=z&&"symbol"==typeof J.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof J},B=function(e,t,r){return e===X&&B(L,t,r),v(e),t=j(t,!0),v(r),o(K,t)?(r.enumerable?(o(e,A)&&e[A][t]&&(e[A][t]=!1),r=E(r,{enumerable:S(0,!1)})):(o(e,A)||F(e,A,S(1,{})),e[A][t]=!0),G(e,t,r)):F(e,t,r)},H=function(e,t){v(e);for(var r,n=d(t=w(t)),o=0,i=n.length;i>o;)B(e,r=n[o++],t[r]);return e},V=function(e){var t=R.call(this,e=j(e,!0));return!(this===X&&o(K,e)&&!o(L,e))&&(!(t||!o(this,e)||!o(K,e)||o(this,A)&&this[A][e])||t)},Z=function(e,t){if(e=w(e),t=j(t,!0),e!==X||!o(K,t)||o(L,t)){var r=D(e,t);return!r||!o(K,t)||o(e,A)&&e[A][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=I(w(e)),n=[],i=0;r.length>i;)o(K,t=r[i++])||t==A||t==u||n.push(t);return n},ee=function(e){for(var t,r=e===X,n=I(r?L:w(e)),i=[],a=0;n.length>a;)!o(K,t=n[a++])||r&&!o(X,t)||i.push(K[t]);return i};z||(c((J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===X&&t.call(L,r),o(this,A)&&o(this[A],e)&&(this[A][e]=!1),G(this,e,S(1,r))};return i&&Y&&G(X,e,{configurable:!0,set:t}),Q(e)}).prototype,"toString",(function(){return this._k})),x.f=Z,k.f=B,r(232).f=P.f=$,r(53).f=V,N.f=ee,i&&!r(40)&&c(X,"propertyIsEnumerable",V,!0),y.f=function(e){return Q(m(e))}),a(a.G+a.W+a.F*!z,{Symbol:J});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)m(te[re++]);for(var ne=T(m.store),oe=0;ne.length>oe;)b(ne[oe++]);a(a.S+a.F*!z,"Symbol",{for:function(e){return o(_,e+="")?_[e]:_[e]=J(e)},keyFor:function(e){if(!q(e))throw TypeError(e+" is not a symbol!");for(var t in _)if(_[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),a(a.S+a.F*!z,"Object",{create:function(e,t){return void 0===t?E(e):H(E(e),t)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=f((function(){N.f(1)}));a(a.S+a.F*ie,"Object",{getOwnPropertySymbols:function(e){return N.f(O(e))}}),M&&a(a.S+a.F*(!z||f((function(){var e=J();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(g(t)||void 0!==e)&&!q(e))return h(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!q(t))return t}),n[1]=t,W.apply(M,n)}}),J.prototype[C]||r(11)(J.prototype,C,J.prototype.valueOf),l(J,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},247:function(e,t,r){var n=r(5),o=r(18),i=r(40),a=r(231),c=r(28).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},248:function(e,t,r){var n=r(22),o=r(82),i=r(53);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,c=r(e),u=i.f,f=0;c.length>f;)u.call(e,a=c[f++])&&t.push(a);return t}},249:function(e,t,r){var n=r(30),o=r(232).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(n(e))}},250:function(e,t,r){var n=r(53),o=r(55),i=r(30),a=r(83),c=r(31),u=r(96),f=Object.getOwnPropertyDescriptor;t.f=r(10)?f:function(e,t){if(e=i(e),t=a(t,!0),u)try{return f(e,t)}catch(r){}if(c(e,t))return o(!n.f.call(e,t),e[t])}}}]);