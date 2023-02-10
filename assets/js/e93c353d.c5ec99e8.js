"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7003],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(i,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={date:"2022-07-13T10:00"},c="Customer current usage",l={permalink:"/changelog/current-usage",editUrl:"changelog/changelog/current-usage.md",source:"@site/changelog/current-usage.md",title:"Customer current usage",description:"Current Usage",date:"2022-07-13T10:00:00.000Z",formattedDate:"July 13, 2022",tags:[],readingTime:.54,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-13T10:00"},prevItem:{title:"App version",permalink:"/changelog/app-version"},nextItem:{title:"PDF invoices",permalink:"/changelog/download-invoices"}},i={authorsImageUrls:[]},s=[],u={toc:s},p="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Current Usage",src:r(7924).Z,width:"2366",height:"1020"})),(0,o.kt)("p",null,"Good news for those who follow closely the consumption of their customers. You can now track the current billing usage of your customers either from the UI or from the API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"To access this Usage tab:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access your list of ",(0,o.kt)("strong",{parentName:"li"},"customers"),";"),(0,o.kt)("li",{parentName:"ol"},"Select a specific customer that is ",(0,o.kt)("strong",{parentName:"li"},"already linked to a subscription"),";"),(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},"usage")," tab; and"),(0,o.kt)("li",{parentName:"ol"},"Get a complete view of ",(0,o.kt)("strong",{parentName:"li"},"usage-based consumption")," that is going to be billed on the next invoice.")),(0,o.kt)("p",null,"On top of that, you can fetch the current usage of a customer directly from the API. To do so, you can access the following endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /api/v1/customers/:customer_id/current_usage")))}m.isMDXComponent=!0},7924:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/current-usage-577fa187125126be7dc8309cb1decbc2.png"}}]);