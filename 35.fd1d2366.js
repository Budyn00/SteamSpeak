(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{195:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l}));var n=t(185);function r(){var e=Object(n.a)().siteConfig,a=(void 0===e?{}:e).customFields.metadata.latest_release,t=Date.parse(a.date),r=new Date,l=Math.abs(r-t),c=Math.ceil(l/864e5),i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),c<30&&(!i||i<t)?a:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("releaseViewedAt",(new Date).getTime())}},196:function(e,a,t){"use strict";t(225);var n=t(0),r=t.n(n),l=t(226),c=t(194),i=t(1),o=(t(227),t(187)),s=(t(56),t(26),t(20),t(21),t(80),t(186)),m=t.n(s),d=t(185),u=t(191),h=(t(132),function(e){var a=Object(n.useState)(!1),l=a[0],c=a[1],i=Object(n.useRef)(null),o=Object(d.a)().siteConfig,s=(void 0===o?{}:o).themeConfig.algolia,h=Object(u.c)();var b=function(e){void 0===e&&(e=!0),l||Promise.all([t.e(33).then(t.t.bind(null,486,7)),t.e(22).then(t.t.bind(null,487,7))]).then((function(a){var t=a[0].default;c(!0),window.docsearch=t,function(e){window.docsearch({appId:s.appId,apiKey:s.apiKey,indexName:s.indexName,inputSelector:"#search_input_react",algoliaOptions:s.algoliaOptions,handleSelected:function(e,a,t){var n=document.createElement("a");n.href=t.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&i.current.focus()}(e)}))},f=Object(n.useCallback)((function(){b(),l&&i.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),p=Object(n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=Object(n.useCallback)((function(e){var a="mouseover"!==e.type;b(a)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:m()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:m()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:E,onFocus:E,onBlur:p,ref:i}))}),b=t(190),f=t.n(b),p=(t(228),t(133),t(188)),E=t(232),g=t(212),v=t(213),_=t(202),k=t(195),N=t(134),w=t.n(N);function y(e){var a=e.href,t=e.hideIcon,n=e.label,l=e.onClick,c=(e.position,e.right),s=e.to,d=function(e,a){var t={label:e};switch(e.toLowerCase()){case"chat":return t.hideText=1==a,t.icon="message-circle",t;case"community":return t.hideText=1==a,t.icon="users",t;case"download":var n=Object(k.a)();return t.hideText=1==a,t.icon="download",n&&(t.badge="new",t.badgeStyle="primary"),t;case"github":return t.badge="6",t.hideText=!1,t.icon="github",t;default:return t}}(n,c)||{},u=Object(p.a)(s);return r.a.createElement(o.a,Object(i.a)({className:m()("navbar__item navbar__link",d.className,{navbar__item__icon_only:d.hideText}),title:d.hideText?n:null,onClick:l},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:u}),!t&&d.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-"+d.icon})," ",d.iconLabel),!d.hideText&&d.label,d.badge&&r.a.createElement("span",{className:m()("badge","badge--"+(d.badgeStyle||"secondary"))},d.badge))}"undefined"!=typeof window&&localStorage.removeItem("theme");var O=function(){var e,a=Object(d.a)(),t=a.siteConfig.themeConfig,l=t.navbar,c=(l=void 0===l?{}:l).title,s=l.links,u=void 0===s?[]:s,b=l.hideOnScroll,p=void 0!==b&&b,k=(t.disableDarkMode,a.isClient,Object(n.useState)(!1)),N=k[0],O=k[1],S=Object(n.useState)(!1),x=S[0],j=S[1],C=Object(_.a)(),T=(C.isDarkTheme,C.setLightTheme),B=C.setDarkTheme,I=Object(E.a)(p),M=I.navbarRef,D=I.isNavbarVisible,L=Object(v.a)(),P=L.logoLink,A=L.logoLinkProps,W=L.logoImageUrl,F=L.logoAlt;Object(g.a)(N);var V=Object(n.useCallback)((function(){O(!0)}),[O]),q=Object(n.useCallback)((function(){O(!1)}),[O]);return Object(n.useCallback)((function(e){return e.target.checked?B():T()}),[T,B]),r.a.createElement("nav",{ref:M,className:m()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":N},e[w.a.navbarHideable]=p,e[w.a.navbarHidden]=!D,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",to:P},A),null!=W&&r.a.createElement(f.a,{className:"navbar__logo",src:W,alt:F}),null!=c&&r.a.createElement("strong",{className:x?w.a.hideLogoText:""},c)),u.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(y,Object(i.a)({},e,{left:!0,key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(y,Object(i.a)({},e,{right:!0,key:a}))})),r.a.createElement(h,{handleSearchBarToggle:j,isSearchBarExpanded:x}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:q}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,Object(i.a)({className:"navbar__brand",onClick:q,to:P},A),null!=W&&r.a.createElement(f.a,{className:"navbar__logo",src:W,alt:F}),null!=c&&r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(y,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:q})))})))))))},S=t(9);t(135);var x=function(e){var a,t=e.block,n=e.buttonClass,l=e.center,c=e.description,i=e.size,o=e.width;return r.a.createElement("div",{className:m()("mailing-list",(a={"mailing-list--block":t,"mailing-list--center":l},a["mailing-list--"+i]=i,a))},!1!==c&&r.a.createElement("div",{className:"mailing-list--description"},"The easiest way to stay up-to-date. One email on the 1st of every month. No spam, ever."),r.a.createElement("form",{action:"https://8ff00905.sibforms.com/serve/MUIEAGomkTPvCSxHpnNSwyrXjMegJD1YOuhPJiudZt-pEQg4Isx5dpSEKyKWeaOk64aPFtYUAEr1qqmQOCDBz6VSGfuX8afhiMMeYlBG398B_o8O2UNlgkgdil548ZsxZOfWXeFSVtR7Mqn95v0f5idA7NWYLUV60B2N_P2J4BD4M18W2cnW6qZ9H9ntuSuhl-9T7kef2hw6WbSk",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:m()("input","input--"+i),name:"EMAIL",placeholder:"you@email.com",type:"email",style:{width:o},required:!0}),r.a.createElement("button",{className:m()("button","button--"+(n||"primary"),"button--"+i),type:"submit"},"Subscribe")))},j=t(136),C=t.n(j);function T(e){var a=e.to,t=e.href,n=e.label,l=Object(S.a)(e,["to","href","label"]),c=Object(p.a)(a);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},l),n)}var B=function(e){var a=e.url,t=e.alt;return r.a.createElement(f.a,{className:"footer__logo",alt:t,src:a})};var I=function(){var e=Object(d.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,n=t||{},l=n.copyright,c=n.links,i=void 0===c?[]:c,o=n.logo,s=void 0===o?{}:o,u=Object(p.a)(s.src);return t?r.a.createElement("footer",{className:m()("footer",{"footer--dark":"dark"===t.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement("h4",null,"Subscribe to newsletter")),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(x,{description:!1})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/dalexhdyt",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"DalexHD's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://gitter.im/dwyl",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"SteamSpeak's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"SteamSpeak's Github Repo"})))),i.map((function(e,a){return r.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?r.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(T,e))}))):null)}))),(s||l)&&r.a.createElement("div",{className:"text--center"},s&&s.src&&r.a.createElement("div",null,s.href?r.a.createElement("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:C.a.footerLogoLink},r.a.createElement(B,{alt:s.alt,url:u})):r.a.createElement(B,{alt:s.alt,url:u})),l,r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/security/policy"},"Security Policy"),"\xa0\u2022\xa0",r.a.createElement("a",{href:"https://github.com/dalexhd/steamspeak/blob/master/PRIVACY.md"},"Privacy Policy"))))):null},M=t(230),D=t(231),L=t(3);t(137);a.a=function(e){var a=Object(d.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,i=(t.tagline,t.title),o=t.themeConfig.image,s=t.url,m=e.children,u=e.title,h=e.noFooter,b=e.description,f=e.image,E=e.keywords,g=(e.permalink,e.version),v=u?u+" | "+i:i,_=f||o,k=s+Object(p.a)(_),N=Object(p.a)(n),w=Object(L.h)(),y=w?"https://dalexhd.github.io/SteamSpeak/"+(w.pathname.endsWith("/")?w.pathname:w.pathname+"/"):null;return r.a.createElement(D.a,null,r.a.createElement(M.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:k}),_&&r.a.createElement("meta",{property:"twitter:image",content:k}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),_&&r.a.createElement("meta",{name:"twitter:site",content:"@dalexhdyt"}),_&&r.a.createElement("meta",{name:"twitter:creator",content:"@dalexhdyt"}),y&&r.a.createElement("meta",{property:"og:url",content:y}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),y&&r.a.createElement("link",{rel:"canonical",href:y})),r.a.createElement(l.a,null),r.a.createElement(O,null),r.a.createElement("div",{className:"main-wrapper"},m),!h&&r.a.createElement(I,null)))}},417:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(196);a.default=function(){return r.a.createElement(l.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);