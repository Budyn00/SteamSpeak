(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{165:function(e,t,a){"use strict";a.r(t);a(221);var n=a(0),r=a.n(n),c=a(239),l=a(217),i=a(206),o=a(244),s=a(202),m=a(166),u=a.n(m),d=Object(c.a)("h2"),h=Object(c.a)("h3");t.default=function(){var e=Object(s.a)().siteConfig,t=(void 0===e?{}:e).customFields,a=t.metadata.team,n=t.chatUrl,c=t.discordUrl;return r.a.createElement(l.a,{title:"Community",description:"Join the SteamSpeak community. Connect with other SteamSpeak users and help make SteamSpeak better."},r.a.createElement("header",{className:"hero hero--clean"},r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("h1",null,"SteamSpeak Community"),r.a.createElement("div",{className:"hero--subtitle"},"Join the SteamSpeak community. Connect with other SteamSpeak users and help make SteamSpeak better."))),r.a.createElement("main",null,r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-message-circle"})),r.a.createElement("div",{className:"panel--title"},"Chat"),r.a.createElement("div",{className:"panel--description"},"Ask questions and get help"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"fab fa-discord",title:"Discord"})),r.a.createElement("div",{className:"panel--title"},"Discord"),r.a.createElement("div",{className:"panel--description"},"Join or Discord server"))),r.a.createElement("div",{className:"col"},r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak",target:"_blank",rel:"noopener noreferrer",className:"panel panel--button"},r.a.createElement("div",{className:"panel--icon"},r.a.createElement("i",{className:"feather icon-github"})),r.a.createElement("div",{className:"panel--title"},"Github dalexhd/steamspeak"),r.a.createElement("div",{className:"panel--description"},"Issues, code, and development")))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{id:"team"},"Meet The Team"),r.a.createElement("div",{className:"sub-title"},"A simple composable format lets you build flexible pipelines"),r.a.createElement("div",{className:u.a.coreTeam},a.map((function(e,t){return r.a.createElement(i.a,{key:t,to:e.github,className:"avatar avatar--vertical"},r.a.createElement("img",{className:"avatar__photo avatar__photo--xl",alt:"Avatar",src:e.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},e.name)))}))))),r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement(d,{id:"faqs"},"FAQs"),r.a.createElement(h,{id:"contribute",className:"header--flush"},"How do I contribute to SteamSpeak?"),r.a.createElement("p",null,"SteamSpeak is ",r.a.createElement("a",{href:Object(o.a)()},"open-source")," and welcomes contributions. A few guidelines to help you get started:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read our"," ",r.a.createElement("a",{href:Object(o.a)("/blob/master/CONTRIBUTING.md")},"contribution guide"),"."),r.a.createElement("li",null,"Start with"," ",r.a.createElement("a",{href:Object(o.a)("/contribute")},"good first issues"),"."),r.a.createElement("li",null,"Join our ",r.a.createElement("a",{href:n},"chat")," if you have any questions. We are happy to help!"))))))}},207:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e})),a.d(t,"d",(function(){return n.f}))},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},214:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return c}));var n=a(202);function r(){var e=Object(n.a)().siteConfig,t=(void 0===e?{}:e).customFields.metadata.latest_release,a=Date.parse(t.date),r=new Date,c=Math.abs(r-a),l=Math.ceil(c/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0",10))),l<30&&(!i||i<a)?t:null}function c(){"undefined"!=typeof window&&window.localStorage.setItem("releaseViewedAt",(new Date).getTime())}},216:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){return Object(n.useContext)(r.a)}},217:function(e,t,a){"use strict";a(223);var n=a(0),r=a.n(n),c=a(224),l=a(240),i=a(1),o=a(206),s=(a(53),a(26),a(20),a(21),a(79),a(203)),m=a.n(s),u=a(202),d=a(207),h=(a(132),function(e){var t=Object(n.useState)(!1),c=t[0],l=t[1],i=Object(n.useRef)(null),o=Object(u.a)().siteConfig,s=(void 0===o?{}:o).themeConfig.algolia,h=Object(d.c)();var b=function(e){void 0===e&&(e=!0),c||Promise.all([a.e(52).then(a.t.bind(null,627,7)),a.e(36).then(a.t.bind(null,628,7))]).then((function(t){var a=t[0].default;l(!0),window.docsearch=a,function(e){window.docsearch({appId:s.appId,apiKey:s.apiKey,indexName:s.indexName,inputSelector:"#search_input_react",algoliaOptions:s.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&i.current.focus()}(e)}))},f=Object(n.useCallback)((function(){b(),c&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;b(t)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:m()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:m()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:p,onFocus:p,onBlur:v,ref:i}))}),b=a(208),f=a.n(b),v=a(205),p=a(227),E=a(218),g=a(219),k=a(214),N=a(133),_=a.n(N);function O(e){var t=e.href,a=e.hideIcon,n=e.label,c=e.onClick,l=e.right,s=e.to,u=function(e,t){var a={label:e};switch(e.toLowerCase()){case"chat":return a.hideText=!0===t,a.icon="message-circle",a;case"community":return a.hideText=!0===t,a.icon="users",a;case"download":var n=Object(k.a)();return a.hideText=!0===t,a.icon="download",n&&(a.badge="new",a.badgeStyle="primary"),a;case"github":return a.badge="11",a.hideText=!1,a.icon="github",a;default:return a}}(n,l)||{},d=Object(v.a)(s);return r.a.createElement(o.a,Object(i.a)({className:m()("navbar__item navbar__link",u.className,{navbar__item__icon_only:u.hideText}),title:u.hideText?n:null,onClick:c},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:d}),!a&&u.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+u.icon})," ",u.iconLabel),!u.hideText&&u.label,u.badge&&r.a.createElement("span",{className:m()("badge","badge--"+(u.badgeStyle||"secondary"))},u.badge))}"undefined"!=typeof window&&localStorage.removeItem("theme");var w=function(){var e,t=Object(u.a)().siteConfig.themeConfig.navbar,a=(t=void 0===t?{}:t).title,c=t.links,l=void 0===c?[]:c,s=t.hideOnScroll,d=void 0!==s&&s,b=Object(n.useState)(!1),v=b[0],k=b[1],N=Object(n.useState)(!1),w=N[0],S=N[1],y=Object(p.a)(d),j=y.navbarRef,C=y.isNavbarVisible,x=Object(g.a)(),T=x.logoLink,I=x.logoLinkProps,D=x.logoImageUrl,B=x.logoAlt;Object(E.a)(v);var L=Object(n.useCallback)((function(){k(!0)}),[k]),A=Object(n.useCallback)((function(){k(!1)}),[k]);return r.a.createElement("nav",{ref:j,className:m()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":v},e[_.a.navbarHideable]=d,e[_.a.navbarHidden]=!C,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:T},I),null!=D&&r.a.createElement(f.a,{className:"navbar__logo",src:D,alt:B}),null!=a&&r.a.createElement("strong",{className:w?_.a.hideLogoText:""},a)),l.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(O,Object(i.a)({},e,{left:!0,key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},l.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(O,Object(i.a)({},e,{right:!0,key:t}))})),r.a.createElement(h,{handleSearchBarToggle:S,isSearchBarExpanded:w}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:A}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:A,to:T},I),null!=D&&r.a.createElement(f.a,{className:"navbar__logo",src:D,alt:B}),null!=a&&r.a.createElement("strong",null,a))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},l.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(O,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:A})))})))))))},S=a(9);a(134);var y=function(e){var t,a=e.block,n=e.buttonClass,c=e.center,l=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:m()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":c},t["mailing-list--"+i]=i,t))},!1!==l&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://8ff00905.sibforms.com/serve/MUIEAGomkTPvCSxHpnNSwyrXjMegJD1YOuhPJiudZt-pEQg4Isx5dpSEKyKWeaOk64aPFtYUAEr1qqmQOCDBz6VSGfuX8afhiMMeYlBG398B_o8O2UNlgkgdil548ZsxZOfWXeFSVtR7Mqn95v0f5idA7NWYLUV60B2N_P2J4BD4M18W2cnW6qZ9H9ntuSuhl-9T7kef2hw6WbSk",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:m()("input","input--"+i),name:"EMAIL",placeholder:"you@email.com",type:"email",style:{width:o},required:!0}),r.a.createElement("button",{className:m()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},j=a(135),C=a.n(j);function x(e){var t=e.to,a=e.href,n=e.label,c=Object(S.a)(e,["to","href","label"]),l=Object(v.a)(t);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:l},c),n)}var T=function(e){var t=e.url,a=e.alt;return r.a.createElement(f.a,{className:"footer__logo",alt:a,src:t})};var I=function(){var e=Object(u.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,l=n.links,i=void 0===l?[]:l,o=n.logo,s=void 0===o?{}:o,d=Object(v.a)(s.src);return a?r.a.createElement("footer",{className:m()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("h4",null,"Subscribe to newsletter")),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(y,{description:!1})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/dalexhdyt",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-twitter",alt:"DalexHD's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://gitter.im/dwyl",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"SteamSpeak's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"feather icon-github",alt:"SteamSpeak's Github Repo"})))),i.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item"},e.html):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(x,e))}))):null)}))),(s||c)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",null,s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(T,{alt:s.alt,url:d})):r.a.createElement(T,{alt:s.alt,url:d})),c,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},D=a(225),B=a(226),L=a(3);a(136);t.a=function(e){var t=Object(u.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.title,o=a.themeConfig.image,s=a.url,m=e.children,d=e.title,h=e.noFooter,b=e.description,f=e.image,p=e.keywords,E=e.version,g=d?d+" | "+i:i,k=f||o,N=s+Object(v.a)(k),_=Object(v.a)(n),O=Object(L.h)(),S=O?"https://dalexhd.github.io/SteamSpeak/"+(O.pathname.endsWith("/")?O.pathname:O.pathname+"/"):null;return r.a.createElement(B.a,null,r.a.createElement(D.a,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),g&&r.a.createElement("title",null,g),g&&r.a.createElement("meta",{property:"og:title",content:g}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),p&&p.length&&r.a.createElement("meta",{name:"keywords",content:p.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:N}),k&&r.a.createElement("meta",{property:"twitter:image",content:N}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),k&&r.a.createElement("meta",{name:"twitter:site",content:"@dalexhdyt"}),k&&r.a.createElement("meta",{name:"twitter:creator",content:"@dalexhdyt"}),S&&r.a.createElement("meta",{property:"og:url",content:S}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),S&&r.a.createElement("link",{rel:"canonical",href:S})),r.a.createElement(c.a,null),r.a.createElement(w,null),r.a.createElement("div",{className:"main-wrapper"},m),!h&&r.a.createElement(I,null)))}},218:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},219:function(e,t,a){"use strict";var n=a(202),r=a(216),c=a(205),l=a(230);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=e.themeConfig.navbar,i=(a=void 0===a?{}:a).logo,o=void 0===i?{}:i,s=Object(r.a)().isDarkTheme,m=o.href||t,u={};o.target?u={target:o.target}:Object(l.a)(m)||(u={rel:"noopener noreferrer",target:"_blank"});var d=o.srcDark&&s?o.srcDark:o.src;return{logoLink:m,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:o.alt}}},220:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},221:function(e,t,a){var n=a(28).f,r=Function.prototype,c=/^\s*function ([^ (]*)/;"name"in r||a(10)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(e){return""}}})},223:function(e,t,a){"use strict";var n=a(12),r=a(25),c=a(209),l="".endsWith;n(n.P+n.F*a(210)("endsWith"),"String",{endsWith:function(e){var t=c(this,e,"endsWith"),a=arguments.length>1?arguments[1]:void 0,n=r(t.length),i=void 0===a?n:Math.min(r(a),n),o=String(e);return l?l.call(t,o,i):t.slice(i-o.length,i)===o}})},224:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(202),l=a(137),i=a.n(l);t.a=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,l=a.id,o=a.content,s=a.backgroundColor,m=a.textColor,u=Object(n.useState)(!0),d=u[0],h=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("docusaurus.announcement.id"),t=l!==e;localStorage.setItem("docusaurus.announcement.id",l),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&h(!1)}),[]),!o||d?null:r.a.createElement("div",{className:i.a.announcementBar,style:{backgroundColor:s,color:m},role:"banner"},r.a.createElement("div",{className:i.a.announcementBarContent,dangerouslySetInnerHTML:{__html:o}}),r.a.createElement("button",{type:"button",className:i.a.announcementBarClose,onClick:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),h(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=(a(81),a(215),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),l=a(220);t.a=function(e){var t=c(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(l.a.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)}},226:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(202),l="",i="dark",o=function(){var e=Object(c.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),r=a[0],o=a[1],s=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[o]),m=Object(n.useCallback)((function(){o(l),s(l)}),[]),u=Object(n.useCallback)((function(){o(i),s(i)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&o(e)}catch(a){console.error(a)}}),[o]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;o(t?i:l)}))}),[]),{isDarkTheme:r===i,setLightTheme:m,setDarkTheme:u}},s=a(211);t.a=function(e){var t=o(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(s.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)}},227:function(e,t,a){"use strict";var n=a(0),r=a(207);var c=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]};t.a=function(e){var t=Object(n.useState)(!0),a=t[0],l=t[1],i=Object(n.useState)(!1),o=i[0],s=i[1],m=Object(n.useState)(0),u=m[0],d=m[1],h=Object(n.useState)(0),b=h[0],f=h[1],v=Object(n.useCallback)((function(e){null!==e&&f(e.getBoundingClientRect().height)}),[]),p=Object(r.d)(),E=c(p.hash),g=E[0],k=E[1],N=function(){var e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&l(!0),!(e<b)){if(o)return s(!1),l(!1),void d(e);var t=document.documentElement.scrollHeight-b,a=window.innerHeight;u&&e>=u?l(!1):e+a<t&&l(!0),d(e)}};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",N),function(){window.removeEventListener("scroll",N)}}),[u,b]),Object(n.useEffect)((function(){e&&(l(!0),k(p.hash))}),[p]),Object(n.useEffect)((function(){e&&g&&s(!0)}),[g]),{navbarRef:v,isNavbarVisible:a}}},239:function(e,t,a){"use strict";var n=a(9),r=a(0),c=a.n(r),l=a(203),i=a.n(l),o=a(202),s=(a(140),a(141)),m=a.n(s);t.a=function(e){return function(t){var a,r=t.id,l=Object(n.a)(t,["id"]),s=Object(o.a)().siteConfig,u=(s=void 0===s?{}:s).themeConfig,d=(u=void 0===u?{}:u).navbar,h=(d=void 0===d?{}:d).hideOnScroll,b=void 0!==h&&h;return r?c.a.createElement(e,l,c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:i()("anchor",(a={},a[m.a.enhancedAnchor]=!b,a)),id:r}),c.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),l.children):c.a.createElement(e,l)}}},244:function(e,t,a){"use strict";var n=a(202);t.a=function(e){void 0===e&&(e="");var t=Object(n.a)().siteConfig,a=t.githubHost||"github.com",r="/"===e.charAt(0)?e.substr(1):e;return"https://"+a+"/"+t.organizationName+"/"+t.projectName+"/"+r}}}]);