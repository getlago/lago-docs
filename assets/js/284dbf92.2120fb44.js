"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={date:"2023-06-01T11:00"},i="Charges paid in advance",c={permalink:"/changelog/charges-in-advance",editUrl:"changelog/changelog/charges-in-advance.md",source:"@site/changelog/charges-in-advance.md",title:"Charges paid in advance",description:"If you want to collect payments for usage-based charges on the fly, without waiting for the end-of-period invoice, you can turn on the new payinadvance feature.",date:"2023-06-01T11:00:00.000Z",formattedDate:"June 1, 2023",tags:[],readingTime:.53,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-06-01T11:00"},nextItem:{title:"One-off invoices",permalink:"/changelog/one-off-invoices"}},l={authorsImageUrls:[]},p=[],s={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you want to collect payments for usage-based charges on the fly, without waiting for the end-of-period invoice, you can turn on the new ",(0,r.kt)("inlineCode",{parentName:"p"},"pay_in_advance")," feature."),(0,r.kt)("p",null,"When a charge is ",(0,r.kt)("a",{parentName:"p",href:"../docs/guide/plans/charges/cadence#charges-paid-in-advance"},"marked as paid in advance"),", Lago will automatically calculate the fee associated with each event as soon as it is ingested. This information will then be sent to you in a ",(0,r.kt)("inlineCode",{parentName:"p"},"fee.created")," webhook message."),(0,r.kt)("p",null,"You can also get an estimate for a charge to be paid in advance before the actual event is confirmed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/events/estimate_fees")," endpoint."),(0,r.kt)("p",null,"In addition to this, users with a premium license can define whether or not ",(0,r.kt)("inlineCode",{parentName:"p"},"pay_in_advance")," charges are ",(0,r.kt)("a",{parentName:"p",href:"../docs/guide/plans/charges/invoiceable"},"invoiceable"),"."))}f.isMDXComponent=!0}}]);