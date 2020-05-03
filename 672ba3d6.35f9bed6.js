(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{165:function(e,t,a){"use strict";a.r(t);a(218);var n=a(0),r=a.n(n),c=a(240),l=a(224),o=a(207),i=a(257),s=a(203),m=a(166),u=a.n(m),d=Object(c.a)("h2"),h=Object(c.a)("h3");t.default=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).customFields,a=t.metadata.team,n=t.chatUrl,c=t.discordUrl;return r.a.createElement(l.a,{title:"Community",description:"Join the SteamSpeak community. Connect with other SteamSpeak users and help make SteamSpeak better."},r.a.createElement("header",{className:"hero hero--clean"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"SteamSpeak Community"),r.a.createElement("div",{className:"hero--subtitle"},"Join the SteamSpeak community. Connect with other SteamSpeak users and help make SteamSpeak better."))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Chat"),r.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"fab fa-discord",title:"Discord"})),r.a.createElement("div",{className:"panel--title"},"Discord"),r.a.createElement("div",{className:"panel--description"},"Join or Discord server"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak",target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github dalexhd/steamspeak"),r.a.createElement("div",{className:"panel--description"},"Issues, code, and development")))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{id:"team"},"Meet The Team"),r.a.createElement("div",{className:"sub-title"},"A simple composable format lets you build flexible pipelines"),r.a.createElement("div",{className:u.a.coreTeam},a.map((function(e,t){return r.a.createElement(o.a,{key:t,to:e.github,className:"avatar avatar--vertical"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",alt:"Avatar",src:e.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},e.name)))}))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{id:"faqs"},"FAQs"),r.a.createElement(h,{id:"contribute",className:"header--flush"},"How do I contribute to SteamSpeak?"),r.a.createElement("p",null,"SteamSpeak is ",r.a.createElement("a",{href:Object(i.a)()},"open-source")," and welcomes contributions. A few guidelines to help you get started:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read our"," ",r.a.createElement("a",{href:Object(i.a)("/blob/master/CONTRIBUTING.md")},"contribution guide"),"."),r.a.createElement("li",null,"Start with"," ",r.a.createElement("a",{href:Object(i.a)("/contribute")},"good first issues"),"."),r.a.createElement("li",null,"Join our ",r.a.createElement("a",{href:n},"chat")," if you have any questions. We are happy to help!"))))))}},208:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f})),a.d(t,"d",(function(){return n.g}))},212:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},214:function(e,t,a){"use strict";var n=a(0),r=a(212);t.a=function(){return Object(n.useContext)(r.a)}},217:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},218:function(e,t,a){var n=a(28).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},220:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=a(203);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_release,a=Date.parse(t.date),r=new Date,c=Math.abs(r-a),l=Math.ceil(c/864e5),o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0",10))),l<30&&(!o||o<a)?t:null}function c(){"undefined"!=typeof window&&window.localStorage.setItem("releaseViewedAt",(new Date).getTime())}},222:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},223:function(e,t,a){"use strict";var n=a(203),r=a(214),c=a(206),l=a(219);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,o=(a=void 0===a?{}:a).logo,i=void 0===o?{}:o,s=Object(r.a)().isDarkTheme,m=i.href||t,u={};i.target?u={target:i.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=i.srcDark&&s?i.srcDark:i.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:i.alt}}},224:function(e,t,a){"use strict";a(225);var n=a(0),r=a.n(n),c=a(203),l=a(132),o=a.n(l);var i=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,l=a.id,i=a.content,s=a.backgroundColor,m=a.textColor,u=Object(n.useState)(!0),d=u[0],h=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=l!==e;localStorage.setItem("docusaurus.announcement.id",l),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&h(!1)}),[]),!i||d?null:r.a.createElement("div",{className:o.a.announcementBar,style:{backgroundColor:s,color:m},role:"banner"},r.a.createElement("div",{className:o.a.announcementBarContent,dangerouslySetInnerHTML:{__html:i}}),r.a.createElement("button",{type:"button",className:o.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),h(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},s=a(245),m=a(1),u=a(207),d=(a(60),a(27),a(20),a(21),a(80),a(204)),h=a.n(d),b=a(208),f=(a(133),function(e){var t=Object(n.useState)(!1),l=t[0],o=t[1],i=Object(n.useRef)(null),s=Object(c.a)().siteConfig,m=(void 0===s?{}:s).themeConfig.algolia,u=Object(b.c)();var d=function(e){void 0===e&&(e=!0),l||Promise.all([a.e(52).then(a.t.bind(null,632,7)),a.e(36).then(a.t.bind(null,633,7))]).then((function(t){var a=t[0].default;o(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;u.push(r)}}),e&&i.current.focus()}(e)}))},f=Object(n.useCallback)((function(){d(),l&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),g=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;d(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:g,onFocus:g,onBlur:v,ref:i}))}),v=a(213),g=a.n(v),p=a(206);var E=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},k=a(15),N=a.n(k),_=function(){return{scrollX:N.a.canUseDOM?window.pageXOffset:0,scrollY:N.a.canUseDOM?window.pageYOffset:0}},O=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(_()),r=a[0],c=a[1],l=function(){var t=_();c(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r},w=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),l=c[0],o=c[1],i=Object(n.useState)(0),s=i[0],m=i[1],u=Object(n.useState)(0),d=u[0],h=u[1],f=Object(n.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),v=Object(b.d)(),g=E(v.hash),p=g[0],k=g[1];return O((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<d))){if(l)return o(!1),r(!1),void m(a);var n=document.documentElement.scrollHeight-d,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),m(a)}}),[s,d]),Object(n.useEffect)((function(){e&&(r(!0),k(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&o(!0)}),[p]),{navbarRef:f,isNavbarVisible:a}},S=a(222),y=a(223),j=a(220),C=a(134),x=a.n(C);function T(e){var t=e.href,a=e.hideIcon,n=e.label,c=e.onClick,l=e.right,o=e.to,i=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=!0===t,a.icon="message-circle",a;case"community":return a.hideText=!0===t,a.icon="users",a;case"download":var n=Object(j.a)();return a.hideText=!0===t,a.icon="download",n&&(a.badge="new",a.badgeStyle="primary"),a;case"github":return a.badge="11",a.hideText=!1,a.icon="github",a;default:return a}}(n,l)||{},s=Object(p.a)(o);return r.a.createElement(u.a,Object(m.a)({className:h()("navbar__item navbar__link",i.className,{navbar__item__icon_only:i.hideText}),title:i.hideText?n:null,onClick:c},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:s}),!a&&i.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+i.icon})," ",i.iconLabel),!i.hideText&&i.label,i.badge&&r.a.createElement("span",{className:h()("badge","badge--"+(i.badgeStyle||"secondary"))},i.badge))}"undefined"!=typeof window&&localStorage.removeItem("theme");var I=function(){var e,t=Object(c.a)().siteConfig.themeConfig.navbar,a=(t=void 0===t?{}:t).title,l=t.links,o=void 0===l?[]:l,i=t.hideOnScroll,s=void 0!==i&&i,d=Object(n.useState)(!1),b=d[0],v=d[1],p=Object(n.useState)(!1),E=p[0],k=p[1],N=w(s),_=N.navbarRef,O=N.isNavbarVisible,j=Object(y.a)(),C=j.logoLink,I=j.logoLinkProps,D=j.logoImageUrl,B=j.logoAlt;Object(S.a)(b);var L=Object(n.useCallback)((function(){v(!0)}),[v]),M=Object(n.useCallback)((function(){v(!1)}),[v]);return r.a.createElement("nav",{ref:_,className:h()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":b},e[x.a.navbarHideable]=s,e[x.a.navbarHidden]=!O,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,Object(m.a)({className:"navbar__brand",to:C},I),null!=D&&r.a.createElement(g.a,{className:"navbar__logo",src:D,alt:B}),null!=a&&r.a.createElement("strong",{className:E?x.a.hideLogoText:""},a)),o.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(T,Object(m.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},o.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(T,Object(m.a)({},e,{right:!0,key:t}))})),r.a.createElement(f,{handleSearchBarToggle:k,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,Object(m.a)({className:"navbar__brand",onClick:M,to:C},I),null!=D&&r.a.createElement(g.a,{className:"navbar__logo",src:D,alt:B}),null!=a&&r.a.createElement("strong",null,a))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(T,Object(m.a)({className:"menu__link"},e,{hideIcon:!0,onClick:M})))})))))))},D=a(9);a(135);var B=function(e){var t,a=e.block,n=e.buttonClass,c=e.center,l=e.description,o=e.size,i=e.width;return r.a.createElement("div",{className:h()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":c},t["mailing-list--"+o]=o,t))},!1!==l&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://8ff00905.sibforms.com/serve/MUIEAGomkTPvCSxHpnNSwyrXjMegJD1YOuhPJiudZt-pEQg4Isx5dpSEKyKWeaOk64aPFtYUAEr1qqmQOCDBz6VSGfuX8afhiMMeYlBG398B_o8O2UNlgkgdil548ZsxZOfWXeFSVtR7Mqn95v0f5idA7NWYLUV60B2N_P2J4BD4M18W2cnW6qZ9H9ntuSuhl-9T7kef2hw6WbSk",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:h()("input","input--"+o),name:"EMAIL",placeholder:"you@email.com",type:"email",style:{width:i},required:!0}),r.a.createElement("button",{className:h()("button","button--"+(n||"primary"),"button--"+o),type:"submit"},"Subscribe")))},L=a(136),M=a.n(L);function A(e){var t=e.to,a=e.href,n=e.label,c=Object(D.a)(e,["to","href","label"]),l=Object(p.a)(t);return r.a.createElement(u.a,Object(m.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var G=function(e){var t=e.url,a=e.alt;return r.a.createElement(g.a,{className:"footer__logo",alt:a,src:t})};var P=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,o=n.links,i=void 0===o?[]:o,s=n.logo,m=void 0===s?{}:s,u=Object(p.a)(m.src);return a?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("h4",null,"Subscribe to newsletter")),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(B,{description:!1})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/dalexhdyt",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-twitter",alt:"DalexHD's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://gitter.im/dwyl",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"SteamSpeak's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-github",alt:"SteamSpeak's Github Repo"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item"},e.html):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(A,e))}))):null)}))),(m||l)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",null,m.href?r.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:M.a.footerLogoLink},r.a.createElement(G,{alt:m.alt,url:u})):r.a.createElement(G,{alt:m.alt,url:u})),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},W=(a(52),a(211),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),U=a(217);var F=function(e){var t=W(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(U.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},H="",q="dark",J=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):H),r=a[0],l=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[l]),i=Object(n.useCallback)((function(){l(H),o(H)}),[]),s=Object(n.useCallback)((function(){l(q),o(q)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&l(e)}catch(a){console.error(a)}}),[l]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?q:H)}))}),[]),{isDarkTheme:r===q,setLightTheme:i,setDarkTheme:s}},R=a(212);var V=function(e){var t=J(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(R.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},Y=a(3);a(137);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.title,o=a.themeConfig.image,m=a.url,u=e.children,d=e.title,h=e.noFooter,b=e.description,f=e.image,v=e.keywords,g=e.version,E=d?d+" | "+l:l,k=f||o,N=m+Object(p.a)(k),_=Object(p.a)(n),O=Object(Y.h)(),w=O?"https://dalexhd.github.io/SteamSpeak/"+(O.pathname.endsWith("/")?O.pathname:O.pathname+"/"):null;return r.a.createElement(V,null,r.a.createElement(F,null,r.a.createElement(s.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),v&&v.length&&r.a.createElement("meta",{name:"keywords",content:v.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:N}),k&&r.a.createElement("meta",{property:"twitter:image",content:N}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+E}),k&&r.a.createElement("meta",{name:"twitter:site",content:"@dalexhdyt"}),k&&r.a.createElement("meta",{name:"twitter:creator",content:"@dalexhdyt"}),w&&r.a.createElement("meta",{property:"og:url",content:w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),w&&r.a.createElement("link",{rel:"canonical",href:w})),r.a.createElement(i,null),r.a.createElement(I,null),r.a.createElement("div",{className:"main-wrapper"},u),!h&&r.a.createElement(P,null)))}},225:function(e,t,a){"use strict";var n=a(12),r=a(25),c=a(209),l="".endsWith;n(n.P+n.F*a(210)("endsWith"),"String",{endsWith:function(e){var t=c(this,e,"endsWith"),a=arguments.length>1?arguments[1]:void 0,n=r(t.length),o=void 0===a?n:Math.min(r(a),n),i=String(e);return l?l.call(t,i,o):t.slice(o-i.length,o)===i}})},240:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),l=a(204),o=a.n(l),i=a(203),s=(a(139),a(140)),m=a.n(s);t.a=function(e){return function(t){var a,r=t.id,l=Object(n.a)(t,["id"]),s=Object(i.a)().siteConfig,u=(s=void 0===s?{}:s).themeConfig,d=(u=void 0===u?{}:u).navbar,h=(d=void 0===d?{}:d).hideOnScroll,b=void 0!==h&&h;return r?c.a.createElement(e,l,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:o()("anchor",(a={},a[m.a.enhancedAnchor]=!b,a)),id:r}),c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),l.children):c.a.createElement(e,l)}}},257:function(e,t,a){"use strict";var n=a(203);t.a=function(e){void 0===e&&(e="");var t=Object(n.a)().siteConfig,a=t.githubHost||"github.com",r="/"===e.charAt(0)?e.substr(1):e;return"https://"+a+"/"+t.organizationName+"/"+t.projectName+"/"+r}}}]);