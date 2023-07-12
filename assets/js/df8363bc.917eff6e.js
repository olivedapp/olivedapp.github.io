"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),v=p(n),s=r,d=v["".concat(u,".").concat(s)]||v[s]||m[s]||a;return n?l.createElement(d,i(i({ref:t},c),{},{components:n})):l.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[v]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66872:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>v,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=n(87462),r=(n(67294),n(3905));const a={},i="Changelog",o={type:"mdx",permalink:"/changelog",source:"@site/i18n/en/docusaurus-plugin-content-pages/changelog.md",title:"Changelog",description:"All notable changes to this project will be documented in this file.",frontMatter:{}},u=[{value:"v0.8.2 - 2023-07-13",id:"v082---2023-07-13",level:2},{value:"v0.8.0 - 2023-07-08",id:"v080---2023-07-08",level:2},{value:"v0.7.6 - 2023-07-02",id:"v076---2023-07-02",level:2},{value:"v0.7.4 - 2023-07-01",id:"v074---2023-07-01",level:2},{value:"v0.6.7 - 2023-06-08",id:"v067---2023-06-08",level:2},{value:"v0.6.6 - 2023-04-20",id:"v066---2023-04-20",level:2},{value:"v0.6.5 - 2023-04-13",id:"v065---2023-04-13",level:2},{value:"v0.6.4 - 2023-04-12",id:"v064---2023-04-12",level:2},{value:"v0.6.3 - 2023-04-11",id:"v063---2023-04-11",level:2},{value:"v0.6.2 - 2023-04-10",id:"v062---2023-04-10",level:2},{value:"v0.6.1 - 2023-04-07",id:"v061---2023-04-07",level:2},{value:"v0.6.0 - 2023-04-01",id:"v060---2023-04-01",level:2}],p={toc:u},c="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,r.kt)("p",null,"The format is based on ",(0,r.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),",\nand this project adheres to ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Added")," for new features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Changed")," for changes in existing functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Deprecated")," for soon-to-be removed features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Removed")," for now removed features."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Fixed")," for any bug fixes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Security")," in case of vulnerabilities.")),(0,r.kt)("h2",{id:"v082---2023-07-13"},"v0.8.2 - 2023-07-13"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support kick.com native")),(0,r.kt)("h2",{id:"v080---2023-07-08"},"v0.8.0 - 2023-07-08"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mp4 auto transcoding optimization"),(0,r.kt)("li",{parentName:"ul"},"Front-end component library updates"),(0,r.kt)("li",{parentName:"ul"},"AfreecaTV compatible room number change"),(0,r.kt)("li",{parentName:"ul"},"Fix AfreecaTV concurrency conflicts causing flashbacks"),(0,r.kt)("li",{parentName:"ul"},"Add automatic restart function for crashes"),(0,r.kt)("li",{parentName:"ul"},"File name template support path configuration"),(0,r.kt)("li",{parentName:"ul"},"Add search box component")),(0,r.kt)("h2",{id:"v076---2023-07-02"},"v0.7.6 - 2023-07-02"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for AfreecaTV"),(0,r.kt)("li",{parentName:"ul"},"Support for SC"),(0,r.kt)("li",{parentName:"ul"},"Support for bilibili hls streams such as apex hero section")),(0,r.kt)("h2",{id:"v074---2023-07-01"},"v0.7.4 - 2023-07-01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Douyu does not turn on recording when rotating"),(0,r.kt)("li",{parentName:"ul"},"TikTok adds HLS stream"),(0,r.kt)("li",{parentName:"ul"},"Fixed the bug of long recording failure")),(0,r.kt)("h2",{id:"v067---2023-06-08"},"v0.6.7 - 2023-06-08"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add anti-flashback module, all crash logs will be recorded"),(0,r.kt)("li",{parentName:"ul"},"Optimize pixiv tv"),(0,r.kt)("li",{parentName:"ul"},"Fix twitch tv"),(0,r.kt)("li",{parentName:"ul"},"Fix douyu tv")),(0,r.kt)("h2",{id:"v066---2023-04-20"},"v0.6.6 - 2023-04-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix the bug that proxy does not work"),(0,r.kt)("li",{parentName:"ul"},"Support cc native"),(0,r.kt)("li",{parentName:"ul"},"Support for yy native"),(0,r.kt)("li",{parentName:"ul"},"Support missevan native")),(0,r.kt)("h2",{id:"v065---2023-04-13"},"v0.6.5 - 2023-04-13"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix flicker after recording")),(0,r.kt)("h2",{id:"v064---2023-04-12"},"v0.6.4 - 2023-04-12"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Update logic of close button"),(0,r.kt)("li",{parentName:"ul"},"pixiv supports cookies")),(0,r.kt)("h2",{id:"v063---2023-04-11"},"v0.6.3 - 2023-04-11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix proxy issues with bigo and pixiv")),(0,r.kt)("h2",{id:"v062---2023-04-10"},"v0.6.2 - 2023-04-10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for bigo native"),(0,r.kt)("li",{parentName:"ul"},"Support for pixiv native"),(0,r.kt)("li",{parentName:"ul"},"Change the logic from closing the app to hiding it when clicking the close button on windows.")),(0,r.kt)("h2",{id:"v061---2023-04-07"},"v0.6.1 - 2023-04-07"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix http timeout"),(0,r.kt)("li",{parentName:"ul"},"Support for twitch native")),(0,r.kt)("h2",{id:"v060---2023-04-01"},"v0.6.0 - 2023-04-01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Support for desktop applications for olive")))}v.isMDXComponent=!0}}]);