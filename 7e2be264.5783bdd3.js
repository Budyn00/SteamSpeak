(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{170:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),i=(n(0),n(205)),o=n(432),s={last_modified_on:"2020-04-25",title:"SteamSpeak v0.5.0 Release Notes",codename:"Hello World Again",date:"2020-04-25",description:"SteamSpeak v0.5.0 - Hello World Again - Release Notes",version:"0.5.0"},c={date:"2020-04-25T00:00:00.000Z",description:"SteamSpeak v0.5.0 - Hello World Again - Release Notes",permalink:"/SteamSpeak/releases/0.5.0",source:"@site/releases/0.5.0.md",title:"SteamSpeak v0.5.0 Release Notes",truncated:!1,version:"0.5.0",prevItem:{title:"SteamSpeak v0.4.0 Release Notes",permalink:"/SteamSpeak/releases/0.4.0"}},l=[{value:"Changelog",id:"changelog",children:[]}],u={rightToc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"changelog"},"Changelog"),Object(i.b)("div",{className:"sub-title"},"A complete list of changes"),Object(i.b)(o.a,{version:"0.5.0",mdxType:"Changelog"}))}m.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},m=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,d=m["".concat(o,".").concat(p)]||m[p]||f[p]||i;return n?a.a.createElement(d,s({ref:t},l,{components:n})):a.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},207:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(39),s=n(218),c=n(17),l=n.n(c);t.a=function(e){var t,n=e.to,c=e.href,u=n||c,m=Object(s.a)(u),f=Object(a.useRef)(!1),p=l.a.canUseIntersectionObserver;return Object(a.useEffect)((function(){return!p&&m&&window.docusaurus.prefetch(u),function(){p&&t&&t.disconnect()}}),[u,p,m]),u&&m?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:function(){f.current||(window.docusaurus.preload(u),f.current=!0)},innerRef:function(e){var n,r;p&&e&&m&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):i.a.createElement("a",Object(r.a)({},e,{href:u}))}},218:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},230:function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},231:function(e,t,n){"use strict";var r=n(12),a=n(30),i=n(27),o=n(14),s=[].sort,c=[1,2,3];r(r.P+r.F*(o((function(){c.sort(void 0)}))||!o((function(){c.sort(null)}))||!n(234)(s)),"Array",{sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),a(e))}})},233:function(e,t,n){var r=n(236);e.exports=function(e,t){return new(r(e))(t)}},234:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){return!!e&&r((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},236:function(e,t,n){var r=n(13),a=n(230),i=n(2)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}},237:function(e,t,n){"use strict";var r=n(9),a=n(0),i=n.n(a),o=n(204),s=n.n(o),c=n(203),l=(n(139),n(140)),u=n.n(l);t.a=function(e){return function(t){var n,a=t.id,o=Object(r.a)(t,["id"]),l=Object(c.a)().siteConfig,m=(l=void 0===l?{}:l).themeConfig,f=(m=void 0===m?{}:m).navbar,p=(f=void 0===f?{}:f).hideOnScroll,d=void 0!==p&&p;return a?i.a.createElement(e,o,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:s()("anchor",(n={},n[u.a.enhancedAnchor]=!d,n)),id:a}),i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#"),o.children):i.a.createElement(e,o)}}},243:function(e,t,n){"use strict";n(235),n(79),n(244),n(26),n(20),n(21),n(217);var r=n(0),a=n.n(r),i=n(258),o=n.n(i);t.a=function(e){var t=e.currentState,n=e.humanize,r=e.icon,i=e.name,s=e.setState,c=e.values;if(0===c.size)return null;var l=Array.from(c);return a.a.createElement(a.a.Fragment,null,l.map((function(e,c){var l="string"==typeof e&&n?o()(e):e;return a.a.createElement("label",{key:c},a.a.createElement("input",{checked:t.has(e),name:i,onChange:function(n){var r=new Set(t);n.currentTarget.checked?r.add(e):r.delete(e),s(r)},type:"checkbox"}),l&&a.a.createElement(a.a.Fragment,null,r?a.a.createElement("i",{className:"feather icon-"+r}):""," ",l))})))}},245:function(e,t,n){e.exports=function(){var e=[],t=[],n={},r={},a={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,n){return t[n]||""}))}function c(e,t){return e.replace(t[0],(function(n,r){var a=s(t[1],arguments);return o(""===n?e[r-1]:n,a)}))}function l(e,t,r){if(!e.length||n.hasOwnProperty(e))return t;for(var a=r.length;a--;){var i=r[a];if(i[0].test(t))return c(t,i)}return t}function u(e,t,n){return function(r){var a=r.toLowerCase();return t.hasOwnProperty(a)?o(r,a):e.hasOwnProperty(a)?o(r,e[a]):l(a,r,n)}}function m(e,t,n,r){return function(r){var a=r.toLowerCase();return!!t.hasOwnProperty(a)||!e.hasOwnProperty(a)&&l(a,a,n)===a}}function f(e,t,n){return(n?t+" ":"")+(1===t?f.singular(e):f.plural(e))}return f.plural=u(a,r,e),f.isPlural=m(a,r,e),f.singular=u(r,a,t),f.isSingular=m(r,a,t),f.addPluralRule=function(t,n){e.push([i(t),n])},f.addSingularRule=function(e,n){t.push([i(e),n])},f.addUncountableRule=function(e){"string"!=typeof e?(f.addPluralRule(e,"$0"),f.addSingularRule(e,"$0")):n[e.toLowerCase()]=!0},f.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),a[e]=t,r[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return f.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return f.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return f.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[e\xe9]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(f.addUncountableRule),f}()},257:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=(n(142),n(212)),o=n.n(i),s=n(206);var c=function(){return a.a.createElement("div",{className:"icon"},a.a.createElement(o.a,{src:Object(s.a)("img/not-found.svg"),alt:"Not found",width:"200",height:"250"}))};t.a=function(e){var t=e.text;return a.a.createElement("section",{className:"empty"},a.a.createElement(c,{text:t}))}},288:function(e,t,n){"use strict";var r=n(12),a=n(289),i=n(27),o=n(25),s=n(30),c=n(233);r(r.P,"Array",{flatMap:function(e){var t,n,r=i(this);return s(e),t=o(r.length),n=c(r,0),a(n,r,r,t,0,1,e,arguments[1]),n}}),n(78)("flatMap")},289:function(e,t,n){"use strict";var r=n(230),a=n(13),i=n(25),o=n(28),s=n(2)("isConcatSpreadable");e.exports=function e(t,n,c,l,u,m,f,p){for(var d,h,g=u,v=0,b=!!f&&o(f,p,3);v<l;){if(v in c){if(d=b?b(c[v],v,n):c[v],h=!1,a(d)&&(h=void 0!==(h=d[s])?!!h:r(d)),h&&m>0)g=e(t,n,d,i(d.length),g,m-1)-1;else{if(g>=9007199254740991)throw TypeError();t[g]=d}g++}v++}return g}},432:function(e,t,n){"use strict";n(231),n(225),n(226),n(79),n(235),n(288),n(26),n(20),n(21),n(53),n(217);var r=n(0),a=n.n(r),i=n(243),o=n(257),s=n(237),c=n(207),l=n(241),u=n.n(l),m=n(258),f=n.n(m);function p(e){switch(e){case"breaking change":return"a";case"feat":return"b";case"enhancement":return"c";case"fix":return"d";default:return"e"}}function d(e){switch(e){case"chore":return"Chore";case"docs":return"Doc Update";case"feat":return"New Feature";case"fix":return"Bug Fix";case"perf":return"Perf Improvement";default:return f()(e)}}function h(e){return e.sort((function(e,t){return p(e)>p(t)}))}var g=n(245),v=n.n(g),b=n(203),y=Object(s.a)("h3"),$=Object(s.a)("h4"),w=["enhancement","feat","fix","perf"];function E(e){return e.scopes.map((function(e,t){return a.a.createElement("span",{key:t,className:"badge badge--primary badge--small link",onClick:function(){return setSearchTerm(e.name)},onKeyUp:function(){},style:{marginRight:"4px"},title:"Filter to '"+e.name+"' changes only"},e.name)}))}function O(e){var t=e.commit;return a.a.createElement("li",null,a.a.createElement("div",{className:"badges"},t.breaking_change&&a.a.createElement(c.a,{to:t.highlight_permalink,className:"badge badge--danger",title:"View upgrade guide..."},a.a.createElement("i",{className:"feather icon-alert-triangle"})," breaking"),!t.breaking_change&&t.highlight_permalink&&a.a.createElement(c.a,{to:t.highlight_permalink,className:"badge badge--warning",title:"View highlight announcement..."},a.a.createElement("i",{className:"feather icon-gift"})," highlight"),t.pr_number&&a.a.createElement("a",{href:"https://github.com/dalexhd/SteamSpeak/pull/"+t.pr_number,target:"_blank",rel:"noopener noreferrer",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View pull request..."},a.a.createElement("i",{className:"feather icon-git-pull-request"})," ",t.pr_number),!t.pr_number&&a.a.createElement("a",{href:"https://github.com/dalexhd/SteamSpeak/commit/"+t.sha,target:"_blank",rel:"noopener noreferrer",className:"badge badge--secondary",style:{minWidth:"65px",textAlign:"center"},title:"View commit..."},a.a.createElement("i",{className:"feather icon-git-commit"})," ",t.sha.slice(0,5))),a.a.createElement($,{id:t.sha},a.a.createElement(E,{scopes:t.scopes}),t.description))}function x(e){var t=e.commits,n=e.groupBy,r=e.setSearchTerm;if(n){var i=u()(t).sortBy((function(e){return e.type})).groupBy(n).value(),o=h(Object.keys(i));return a.a.createElement("ul",{className:"connected-list connected-list--clean"},o.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(y,{id:e},v()(d(e),i[e].length,!0)),a.a.createElement("ul",{className:"connected-list connected-list--compact connected-list--blend connected-list--hover"},i[e].map((function(e,t){return a.a.createElement(O,{key:t,commit:e,setSearchTerm:r})}))))})))}return a.a.createElement("div",null,t.length)}t.a=function(e){var t=e.version,n=Object(b.a)().siteConfig,s=(void 0===n?{}:n).customFields.metadata.releases,c=u.a.flatMap(s,(function(e){return e.commits.map((function(t){return t.version=e.version,t}))})),l=Object(r.useState)("type")[0],m=Object(r.useState)(new Set(w)),f=m[0],p=m[1],d=Object(r.useState)(null),h=d[0],g=d[1],v=Object(r.useState)(t)[0],y=c.slice(0);v&&(y=y.filter((function(e){return e.version===v})));var $=y;f.size>0&&($=$.filter((function(e){return f.has(e.type)}))),h&&($=$.filter((function(e){return e.message.toLowerCase().includes(h.toLowerCase())}))),v&&($=$.filter((function(e){return e.version===v})));var E=new Set(u()(c).map((function(e){return e.type})).uniq().compact().sort().value());return a.a.createElement("div",null,y.length>5?a.a.createElement("div",{className:"filters filters--narrow"},a.a.createElement("div",{className:"search"},a.a.createElement("span",{className:"search--result-count"},$.length," items"),a.a.createElement("input",{type:"text",onChange:function(e){return g(e.currentTarget.value)},placeholder:"\ud83d\udd0d Search by type, component name, or title...",className:"input--text input--lg",value:h||""})),a.a.createElement("div",{className:"filter"},a.a.createElement("div",{className:"filter--choices"},a.a.createElement(i.a,{name:"type",values:E,currentState:f,setState:p})))):null,$.length>0?a.a.createElement(x,{commits:$,groupBy:l,setSearchTerm:g,types:E}):a.a.createElement(o.a,{text:"no commits found"}))}}}]);