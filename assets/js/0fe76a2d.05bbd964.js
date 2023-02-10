"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4933],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,k=s["".concat(p,".").concat(m)]||s[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1891:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),l=(n(7294),n(3905));const r={date:"2022-07-13T18:00"},i="Released new API endpoints",o={permalink:"/changelog/new-api-endpoints",editUrl:"changelog/changelog/new-api-endpoints.md",source:"@site/changelog/new-api-endpoints.md",title:"Released new API endpoints",description:"We like our users when they use our nice and clean UI, but we also love when they use our API. One of the usecase could be to use Lago as a white-labeled solution.",date:"2022-07-13T18:00:00.000Z",formattedDate:"July 13, 2022",tags:[],readingTime:1.01,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-07-13T18:00"},prevItem:{title:"Go client",permalink:"/changelog/go-client"},nextItem:{title:"App version",permalink:"/changelog/app-version"}},p={authorsImageUrls:[]},c=[],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"We like our users when they use our nice and clean UI, but we also love when they use our API. One of the usecase could be to use Lago as a white-labeled solution."),(0,l.kt)("p",null,"Here is the full list of endpoints we have just released:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Billable metrics")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a billable metric ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/v1/billable_metrics")),(0,l.kt)("li",{parentName:"ul"},"Update a billable metric ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/billable_metrics/:code")),(0,l.kt)("li",{parentName:"ul"},"Destroy a billable metric ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/billable_metrics/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch a specific billable metric ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/billable_metrics/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch all billable metrics ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/billable_metrics?per_page=2&page=1"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Plans")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a plan ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/v1/plans")),(0,l.kt)("li",{parentName:"ul"},"Update a plan ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/plans/:code")),(0,l.kt)("li",{parentName:"ul"},"Destroy a plan ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/plans/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch a specific plan ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/plans/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch all plans ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/plans?per_page=2&page=1"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Coupons")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a coupon ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/v1/coupons")),(0,l.kt)("li",{parentName:"ul"},"Update a coupon ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/coupons/:code")),(0,l.kt)("li",{parentName:"ul"},"Destroy a coupon ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/coupons/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch a specific coupon ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/coupons/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch all coupons ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/coupons?per_page=2&page=1"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Add-ons")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a add_on ",(0,l.kt)("inlineCode",{parentName:"li"},"POST /api/v1/add_ons")),(0,l.kt)("li",{parentName:"ul"},"Update a add_on ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/add_ons/:code")),(0,l.kt)("li",{parentName:"ul"},"Destroy a add_on ",(0,l.kt)("inlineCode",{parentName:"li"},"DELETE /api/v1/add_ons/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch a specific add_on ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/add_ons/:code")),(0,l.kt)("li",{parentName:"ul"},"Fetch all add_ons ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/add_ons?per_page=2&page=1"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Current usage")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the current usage of a specific customer ",(0,l.kt)("inlineCode",{parentName:"li"},"GET /api/v1/customers/:customer_id/current_usage"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Organization")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the information of your organization ",(0,l.kt)("inlineCode",{parentName:"li"},"PUT /api/v1/organizations"))))}d.isMDXComponent=!0}}]);