"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[52],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>b});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||l;return i?r.createElement(b,a(a({ref:t},d),{},{components:i})):r.createElement(b,a({ref:t},d))}));function b(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,a=new Array(l);a[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,a[1]=o;for(var c=2;c<l;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},7919:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=i(7462),n=(i(7294),i(3905));const l={sidebar_position:5},a="Delete billable metrics",o={unversionedId:"guide/billable-metrics/delete-metrics",id:"guide/billable-metrics/delete-metrics",title:"Delete billable metrics",description:"You may delete a billable metric linked to charges associated with existing subscriptions.",source:"@site/docs/guide/04_billable-metrics/delete-metrics.md",sourceDirName:"guide/04_billable-metrics",slug:"/guide/billable-metrics/delete-metrics",permalink:"/docs/guide/billable-metrics/delete-metrics",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"guide",previous:{title:"Dimensions",permalink:"/docs/guide/billable-metrics/dimensions"},next:{title:"Plans",permalink:"/docs/category/plans"}},s={},c=[],d={toc:c},p="wrapper";function m(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"delete-billable-metrics"},"Delete billable metrics"),(0,n.kt)("p",null,"You may delete a billable metric linked to ",(0,n.kt)("a",{parentName:"p",href:"../plans/charges"},"charges")," associated with existing ",(0,n.kt)("a",{parentName:"p",href:"../plans/subscription"},"subscriptions"),"."),(0,n.kt)("p",null,"If you do so:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The events associated with this billable metric, which are assigned to the current billing period or linked to ",(0,n.kt)("inlineCode",{parentName:"li"},"draft")," invoices, will be immediately deleted;"),(0,n.kt)("li",{parentName:"ul"},"The charges associated with this billable metric will be immediately removed from all plans and existing subscriptions;"),(0,n.kt)("li",{parentName:"ul"},"The charges associated with this billable metric will no longer be included in the ",(0,n.kt)("a",{parentName:"li",href:"../../api/customer_usage/customer-usage-object"},"current usage")," of the customers concerned; and"),(0,n.kt)("li",{parentName:"ul"},"The charges associated with this billable metric will be immediately removed from all ",(0,n.kt)("inlineCode",{parentName:"li"},"draft")," invoices linked to these subscriptions.")),(0,n.kt)("p",null,"However, the charges associated with this billable metric will still be included in all ",(0,n.kt)("inlineCode",{parentName:"p"},"finalized")," invoices linked to these subscriptions."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"After deleting a billable metric, you can create a new one using the same code. However, past events will not be linked to this new billable metric.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"How to delete a billable metric",src:i(4740).Z,width:"2880",height:"1562"})))}m.isMDXComponent=!0},4740:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/billable-metrics-delete-68cd9763df888a65237c8f0f5c85358a.png"}}]);