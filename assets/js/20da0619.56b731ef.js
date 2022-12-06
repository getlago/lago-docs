"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={date:"2022-12-06T17:00"},i="Invoice payment status",l={permalink:"/changelog/invoice-payment-status",editUrl:"changelog/changelog/invoice-payment-status.md",source:"@site/changelog/invoice-payment-status.md",title:"Invoice payment status",description:"As we are making progress on the grace period feature, which will allow you to review invoices before they are sent to customers, we will soon introduce changes to the API to add new invoice management options.",date:"2022-12-06T17:00:00.000Z",formattedDate:"December 6, 2022",tags:[],readingTime:.805,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-06T17:00"},prevItem:{title:"New calculation method for invoices",permalink:"/changelog/invoice-calculation-method"},nextItem:{title:"Apply several coupons",permalink:"/changelog/coupons-v3"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As we are making progress on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/getlago/lago/issues/99"},"grace period feature"),", which will allow you to review invoices before they are sent to customers, we will soon introduce changes to the API to add new invoice management options."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"../docs/api/invoices/invoice-object"},"invoice object")," currently includes a ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," attribute with three possible values: ",(0,r.kt)("inlineCode",{parentName:"p"},"pending"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"failed")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"succeeded"),". This attribute will be renamed ",(0,r.kt)("inlineCode",{parentName:"p"},"payment_status")," for accuracy purposes (possible values will remain unchanged)."),(0,r.kt)("p",null,"In addition to this, a new ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," attribute will be created, including two possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"draft"),": when an invoice has been generated but can still be modified; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"finalized"),": when the invoice is validated and can no longer be modified.")),(0,r.kt)("p",null,"All existing invoices will be ",(0,r.kt)("inlineCode",{parentName:"p"},"finalized"),", you will not be able to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"draft")," status until the grace period feature is deployed (later this month)."),(0,r.kt)("p",null,"These changes will take effect on ",(0,r.kt)("strong",{parentName:"p"},"Thursday, December 8th 2022"),"."),(0,r.kt)("p",null,"Please contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:hello@getlago.com"},"hello@getlago.com")," if you have any questions, we will be happy to help."))}u.isMDXComponent=!0}}]);