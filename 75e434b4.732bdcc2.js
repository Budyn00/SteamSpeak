(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),s=(a(0),a(189)),i=a(416),c={last_modified_on:"2020-03-31",title:"Plugins",description:"Laboris nulla deserunt aute occaecat commodo pariatur Lorem incididunt.",sidebar_label:"hidden",hide_pagination:!0},l={id:"reference/plugins",title:"Plugins",description:"Laboris nulla deserunt aute occaecat commodo pariatur Lorem incididunt.",source:"@site/docs/reference/plugins.md",permalink:"/SteamSpeak/docs/reference/plugins",editUrl:"https://github.com/dalexhd/steamspeak/edit/master/docs/docs/reference/plugins.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Reference",permalink:"/SteamSpeak/docs/reference"},next:{title:"Server Name",permalink:"/SteamSpeak/docs/reference/plugins/server-name"}},o=[],m={rightToc:o};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium officia iure veniam beatae voluptates ipsum, sequi doloribus possimus praesentium nisi inventore voluptate hic nesciunt cum ipsa molestiae eos. Saepe consectetur nam dignissimos quam temporibus?"),Object(s.b)("hr",null),Object(s.b)(i.a,{titles:!1,sinks:!1,transforms:!1,mdxType:"SteamSpeakComponents"}))}u.isMDXComponent=!0},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(187),i=a(186),c=a.n(i);a(138);t.a=function(e){var t=e.children,a=e.className,n=e.badge,i=e.leftIcon,l=e.rightIcon,o=e.size,m=e.target,u=e.to,p=c()("jump-to","jump-to--"+o,a),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},i&&r.a.createElement("div",{className:"jump-to--left"},r.a.createElement("i",{className:"feather icon-"+i})),r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:"feather icon-"+(l||"chevron-right")+" arrow"}))));return m?r.a.createElement("a",{href:u,target:m,className:p},d):r.a.createElement(s.a,{to:u,className:p},d)}},270:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=(a(187),a(186),a(143),a(190)),i=a.n(s),c=a(188);t.a=function(e){return e.className,e.size,e.style,e.text,r.a.createElement("div",{className:"icon"},r.a.createElement(i.a,{src:Object(c.a)("img/not-found.svg"),alt:"Not found",width:"200",height:"250"}))}},416:function(e,t,a){"use strict";a(266),a(210),a(211),a(80),a(267),a(238),a(26),a(20),a(21),a(83),a(215);var n=a(1),r=(a(82),a(204),a(0)),s=a.n(r),i=a(308),c=a.n(i);var l=function(e){var t=e.currentState,a=e.humanize,n=e.icon,r=e.name,i=e.setState,l=e.values;if(0==l.size)return null;var o=Array.from(l);return s.a.createElement(s.a.Fragment,null,o.map((function(e,l){var o="string"==typeof e&&a?c()(e):e;return s.a.createElement("label",{key:l},s.a.createElement("input",{checked:t.has(e),name:r,onChange:function(a){var n=new Set(t);a.currentTarget.checked?n.add(e):n.delete(e),i(n)},type:"checkbox"}),o&&s.a.createElement(s.a.Fragment,null,n?s.a.createElement("i",{className:"feather icon-"+n}):""," ",o))})))},o=a(187),m=a(270);var u=function(e){var t=e.text;return s.a.createElement("section",{className:"empty"},s.a.createElement(m.a,{style:"no",text:t}))},p=a(205),d=a(188),f=a(250),g=a.n(f),h=a(186),v=a.n(h),b=a(319),E=a.n(b),y=a(185),N=a(273),k=a.n(N);a(147);function S(e){e.delivery_guarantee;var t=e.description,a=e.instance,n=(e.logo_path,e.name),r=e.pathTemplate,i=e.status,c=e.title,l=e.type,m=(Object(y.a)().siteConfig,r);m||"plugin"==l&&(m=Object(d.a)("docs/reference/plugins/<name>/"));var u=m.replace("<name>",n);return s.a.createElement(o.a,{to:u,className:"steamspeak-component",title:t},s.a.createElement("div",{className:"steamspeak-component--header"},s.a.createElement("div",{className:"steamspeak-component--name"},c)),s.a.createElement("div",{className:"steamspeak-component--badges"},"beta"==i&&s.a.createElement("div",null,s.a.createElement(o.a,{to:"/docs/about/guarantees/#beta",className:"text--warning",title:"This plugin is in beta and is not recommended for production environments. Click to learn more."},s.a.createElement("i",{className:"feather icon-alert-triangle"})," Beta Status")),"prod-ready"==i&&s.a.createElement("span",{className:"badge badge--primary",title:"his plugin has passed reliability standards that make it production ready. Click to learn more."},s.a.createElement("i",{className:"feather icon-award"})," Prod-Ready"),"first-instance"===a&&s.a.createElement("span",{className:"badge badge--primary",title:"This plugin works with first instance"},s.a.createElement("i",{className:"feather icon-cpu"})," 1"),"second-instance"===a?s.a.createElement("span",{className:"badge badge--primary",title:"This plugin works with first instance"},s.a.createElement("i",{className:"feather icon-cpu"})," 2"):""))}function j(e){var t=e.components,a=e.headingLevel,r=e.pathTemplate,i=e.titles,c=t.filter((function(e){return"plugin"==e.type})),l=(t.filter((function(e){return"transform"==e.type})),t.filter((function(e){return"sink"==e.type})),"h"+(a||3));return t.length>0?s.a.createElement(s.a.Fragment,null,c.length>0?s.a.createElement(s.a.Fragment,null,i&&s.a.createElement(l,null," ",k()("Plugin",c.length,!0)),s.a.createElement("div",{className:"steamspeak-components--grid"},c.map((function(e,t){return s.a.createElement(S,Object(n.a)({key:t,pathTemplate:r},e))})))):"",s.a.createElement("hr",null),s.a.createElement(p.a,{to:"https://github.com/dalexhd/steamspeak/issues/new?labels=type%3A+new+feature",target:"_blank",rightIcon:"plus-circle"},"Request a new Plugin")):s.a.createElement(u,{text:"no plugins found"})}t.a=function(e){var t=Object(y.a)().siteConfig.customFields.metadata.plugins,a=e.titles||null==e.titles,n=1==e.filterColumn,i=e.pathTemplate,c=e.location?E.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{},m=[];(e.plugins||null==e.plugins)&&(m=m.concat(Object.values(t))),m=m.sort((function(e,t){return e.name>t.name?1:-1}));var u=Object(r.useState)("true"==c["at-least-once"]),p=u[0],f=(u[1],Object(r.useState)(new Set(c["event-types"]||e.instanceTypes))),h=f[0],b=f[1],N=Object(r.useState)(new Set(c.functions)),k=(N[0],N[1],Object(r.useState)(new Set(c["operating-systems"]))),S=k[0],w=(k[1],Object(r.useState)("true"==c["prod-ready"])),O=w[0],x=(w[1],Object(r.useState)(new Set(c.providers))),T=x[0],_=(x[1],Object(r.useState)(c.search)),L=_[0],C=_[1];L&&(m=m.filter((function(e){return(e.name.toLowerCase()+" "+e.type.toLowerCase()).includes(L.toLowerCase())}))),p&&(m=m.filter((function(e){return"at_least_once"==e.delivery_guarantee}))),h.size>0&&(m=m.filter((function(e){return Array.from(h).map((function(t){return e.instance===t}))}))),S.size>0&&(m=m.filter((function(e){return Array.from(S).every((function(t){return e.operating_systems.includes(t)}))}))),O&&(m=m.filter((function(e){return"prod-ready"==e.status}))),T.size>0&&(m=m.filter((function(e){return Array.from(T).every((function(t){return e.service_providers&&e.service_providers.includes(t)}))}))),e.exceptNames&&e.exceptNames.length>0&&(m=m.filter((function(t){return!e.exceptNames.includes(t.name)})));var z=h.size>0?h:new Set(g()(m).map((function(e){return e.instance})).flatten().uniq().compact().sort().value());return s.a.createElement("div",{className:v()("steamspeak-components",{"steamspeak-components--cols":n})},s.a.createElement("div",{className:"filters"},s.a.createElement("div",{className:"search"},s.a.createElement("input",{className:"input--text input--lg",type:"text",onChange:function(e){return C(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search..."})),s.a.createElement("div",{className:"filter"},s.a.createElement("div",{className:"filter--label"},s.a.createElement(o.a,{to:Object(d.a)("/docs/about/instances/"),title:"Learn more about SteamSpeak's instance types"},"Instance names ",s.a.createElement("i",{className:"feather icon-info"}))),s.a.createElement("div",{className:"filter--choices"},s.a.createElement(l,{label:"Event Types",icon:"cpu",values:z,humanize:!0,currentState:h,setState:b})))),s.a.createElement("div",{className:"steamspeak-components--results"},s.a.createElement(j,{components:m,headingLevel:e.headingLevel,pathTemplate:i,titles:a})))}}}]);