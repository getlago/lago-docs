"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4440],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={date:"2022-08-08T11:00"},l="Multiple plans",c={permalink:"/changelog/multiple-plans",editUrl:"changelog/changelog/multiple-plans.md",source:"@site/changelog/multiple-plans.md",title:"Multiple plans",description:"It is now possible to assign multiple plans to a customer (e.g. if your customer needs to create several workspaces on your platform, you can link a plan to each workspace).",date:"2022-08-08T11:00:00.000Z",formattedDate:"August 8, 2022",tags:[],readingTime:.425,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-08-08T11:00"},prevItem:{title:"Free units for the percentage charge model",permalink:"/changelog/free-units-percentage-model"},nextItem:{title:"Tracking & Analytics",permalink:"/changelog/tracking"}},i={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is now possible to assign multiple plans to a customer (e.g. if your customer needs to create several workspaces on your platform, you can link a plan to each workspace)."),(0,a.kt)("p",null,"To help differentiate each plan, you can add display names that will appear in the user interface and on invoices."),(0,a.kt)("p",null,"Kindly note that:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"All plans must be denominated in the same currency; and"),(0,a.kt)("li",{parentName:"ol"},"You must now specify the ",(0,a.kt)("inlineCode",{parentName:"li"},"subscription_id")," for each event or create batch events.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../docs/guide/plans/subscription#multiple-plans"},"Click here to see the documentation")))}u.isMDXComponent=!0}}]);