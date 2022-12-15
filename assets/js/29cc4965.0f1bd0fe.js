"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=o,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||a;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:14},i="Lago Open API",l={unversionedId:"guide/openapi",id:"guide/openapi",title:"Lago Open API",description:"Using our Open API is a great way to explore and interact with Lago's API documentation.",source:"@site/docs/guide/14_openapi.md",sourceDirName:"guide",slug:"/guide/openapi",permalink:"/docs/guide/openapi",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"guide",previous:{title:"Integration Testing",permalink:"/docs/guide/testing-integration"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Using Lago Open API with Postman",id:"using-lago-open-api-with-postman",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lago-open-api"},"Lago Open API"),(0,o.kt)("p",null,"Using our Open API is a great way to explore and interact with Lago's API documentation."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you start using our Open API, here are some important prerequisites and useful links:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a free ",(0,o.kt)("a",{parentName:"li",href:"https://postman.com"},"Postman")," account;"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"http://swagger.getlago.com/"},"Swagger")," for Lago's API documentation;"),(0,o.kt)("li",{parentName:"ol"},"Open a Lago account to get your API key; and"),(0,o.kt)("li",{parentName:"ol"},"Check out our public ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/getlago/lago-openapi"},"GitHub repository"),".")),(0,o.kt)("h2",{id:"using-lago-open-api-with-postman"},"Using Lago Open API with Postman"),(0,o.kt)("p",null,"The Swagger used to document Lago's API can be imported directly into Postman. To do so: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Copy the following link:")," ",(0,o.kt)("a",{parentName:"li",href:"http://swagger.getlago.com/swagger.yaml"},"http://swagger.getlago.com/swagger.yaml")," (this link can also be found on the Swagger's page);"),(0,o.kt)("li",{parentName:"ol"},"In Postman, under ",(0,o.kt)("strong",{parentName:"li"},"Import > Link"),", paste the URL above;"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Continue"),";"),(0,o.kt)("li",{parentName:"ol"},"Click the ",(0,o.kt)("strong",{parentName:"li"},"Import")," button; and"),(0,o.kt)("li",{parentName:"ol"},"In the menu, under ",(0,o.kt)("strong",{parentName:"li"},"API"),", find the newly created ",(0,o.kt)("strong",{parentName:"li"},"Lago API documentation"),".")),(0,o.kt)("p",null,"It only takes a few seconds to complete the import. You can then use this API to generate a new collection."),(0,o.kt)("p",null,"Please don't forget to enter the API key associated with your organization's Lago account to authenticate your API requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Import Lago API documentation into Postman",src:n(1360).Z,width:"2562",height:"1460"})))}u.isMDXComponent=!0},1360:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/import-lago-api-85b3ecf31b776f55f5c16c5829aa8ebf.png"}}]);