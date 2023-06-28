"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,k=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36109:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={},o=void 0,i={type:"mdx",permalink:"/guide",source:"@site/i18n/en/docusaurus-plugin-content-pages/guide.md",description:"User Guide",frontMatter:{}},u=[{value:"User Guide",id:"user-guide",level:2},{value:"Account Setup",id:"account-setup",level:2},{value:"Preferred configuration",id:"preferred-configuration",level:2},{value:"Theme",id:"theme",level:3},{value:"Language",id:"language",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Detection interval",id:"detection-interval",level:3},{value:"File name templates",id:"file-name-templates",level:3},{value:"Cookies",id:"cookies",level:3},{value:"Task settings",id:"task-settings",level:2}],p={toc:u},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-guide"},"User Guide"),(0,r.kt)("h2",{id:"account-setup"},"Account Setup"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"OlivedPro")," subscription service offers three plans:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$9.99 monthly license")," with a 7-day free trial"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$39.99 yearly license")," with one-time payment"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"$69.99 lifetime license")," with one-time payment")),(0,r.kt)("p",null,"Licences can be purchased at ",(0,r.kt)("a",{parentName:"p",href:"https://pay.olived.app/"},"https://pay.olived.app/")," and will be sent to your email address immediately upon purchase.\nAll features will be unlocked when the licence is activated. Each licence can be activated for two computers at the same time. If you change to a new computer, you can also de-activate the licence on the order page (the licence will then be deactivated on the old computer) and re-activate it on the new computer."),(0,r.kt)("p",null,"If you have any questions, please contact ",(0,r.kt)("a",{parentName:"p",href:"mailto:olivedapp@outlook.com"},"olivedapp@outlook.com")," or ask in the community and we will help you as soon as possible."),(0,r.kt)("h2",{id:"preferred-configuration"},"Preferred configuration"),(0,r.kt)("h3",{id:"theme"},"Theme"),(0,r.kt)("p",null,"Modify theme colours"),(0,r.kt)("h3",{id:"language"},"Language"),(0,r.kt)("p",null,"Modify default language"),(0,r.kt)("h3",{id:"proxy"},"Proxy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"<SCHEME>://[<USER>:<PASS>@]<HOST>:<PORT>\n")),(0,r.kt)("p",null,"Specify a proxy for downloading, e.g:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"socks5://127.0.0.1:1080"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://192.168.1.1:8080"},"http://192.168.1.1:8080")),(0,r.kt)("li",{parentName:"ul"},"http://user:",(0,r.kt)("a",{parentName:"li",href:"mailto:password@proxy.example.com"},"password@proxy.example.com"),":8080")),(0,r.kt)("p",null,"HTTP, HTTPS and SOCKS5 proxy servers are supported."),(0,r.kt)("h3",{id:"detection-interval"},"Detection interval"),(0,r.kt)("p",null,"The interval in seconds to detect if the host is broadcasting live"),(0,r.kt)("h3",{id:"file-name-templates"},"File name templates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Date: ",(0,r.kt)("inlineCode",{parentName:"li"},'{{ now | date \\"2006-01-02 15-04-05\\"}}')),(0,r.kt)("li",{parentName:"ul"},"Host name: ",(0,r.kt)("inlineCode",{parentName:"li"},"{{ .StreamerName }}")),(0,r.kt)("li",{parentName:"ul"},"Broadcast title: ",(0,r.kt)("inlineCode",{parentName:"li"},"{{ .RoomName }}")),(0,r.kt)("li",{parentName:"ul"},"Live Streaming Platform: ",(0,r.kt)("inlineCode",{parentName:"li"},"{{ .SiteName }}"))),(0,r.kt)("p",null,"The default file name can be changed as required"),(0,r.kt)("h3",{id:"cookies"},"Cookies"),(0,r.kt)("p",null,"Global cookie configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"aatv: cookie1\nbbtv: cookie2\ncctv: cookie3\n")),(0,r.kt)("p",null,"The above example means that the cookie value cookie1 is used when recording aatv, the cookie value cookie2 is used when recording bbtv, and so on."),(0,r.kt)("h2",{id:"task-settings"},"Task settings"),(0,r.kt)("p",null,"The default is to simply paste in the url and it will automatically resolve the other configuration items without having to fill them in manually. url format can be viewed on the platform page."),(0,r.kt)("p",null,"The following features are now supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Automatic transcoding to MP4 format"),(0,r.kt)("li",{parentName:"ul"},"Automatic cutting when the file is of a certain size or the playback length meets certain conditions"),(0,r.kt)("li",{parentName:"ul"},"Some platforms require cookie configuration"),(0,r.kt)("li",{parentName:"ul"},"Customise the file name generated by the download"),(0,r.kt)("li",{parentName:"ul"},"Custom proxies"),(0,r.kt)("li",{parentName:"ul"},"Custom storage path"),(0,r.kt)("li",{parentName:"ul"},"Custom downloader")))}s.isMDXComponent=!0}}]);