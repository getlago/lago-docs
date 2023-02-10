"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1507],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),f=a,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||o;return t?n.createElement(d,i(i({ref:r},m),{},{components:t})):n.createElement(d,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},571:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const o={date:"2022-10-06T10:00"},i="Error management",l={permalink:"/changelog/error-management",editUrl:"changelog/changelog/error-management.md",source:"@site/changelog/error-management.md",title:"Error management",description:"We have refactored the error management system to give more visibility to API users.",date:"2022-10-06T10:00:00.000Z",formattedDate:"October 6, 2022",tags:[],readingTime:.44,hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-10-06T10:00"},prevItem:{title:"Customer currency",permalink:"/changelog/customer-currency"},nextItem:{title:"Overwrite plans",permalink:"/changelog/overwrite-plans"}},c={authorsImageUrls:[]},p=[],m={toc:p},s="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We have refactored the error management system to give more visibility to API users."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," attribute for errors has been replaced with ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error_details"),", which provide more information about the errors. There are several codes associated with each error."),(0,a.kt)("p",null,"For example, when creating a new billable metric, the API may return ",(0,a.kt)("inlineCode",{parentName:"p"},'"error": "Unprocessable entity"')," with the code ",(0,a.kt)("inlineCode",{parentName:"p"},"value_is_mandatory")," for the ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," field (i.e. the name of the billable metric is missing)."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/intro"},"documentation")," available for each endpoint for more information on error codes."))}u.isMDXComponent=!0}}]);