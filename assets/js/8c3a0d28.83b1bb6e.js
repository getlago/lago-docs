"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:3},o="Taxes",l={unversionedId:"guide/invoicing/taxes",id:"guide/invoicing/taxes",title:"Taxes",description:"When generating invoices, you may need to apply taxes. The tax rate applies to all fees (i.e. subscription fees and charges) and appears on the invoices.",source:"@site/docs/guide/10_invoicing/taxes.md",sourceDirName:"guide/10_invoicing",slug:"/guide/invoicing/taxes",permalink:"/docs/guide/invoicing/taxes",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Fees",permalink:"/docs/guide/invoicing/fees"},next:{title:"Grace period",permalink:"/docs/guide/invoicing/grace-period"}},s={},c=[{value:"General tax rate",id:"general-tax-rate",level:2},{value:"Customer-specific tax rate",id:"customer-specific-tax-rate",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"taxes"},"Taxes"),(0,n.kt)("p",null,"When generating invoices, you may need to apply taxes. The tax rate applies to all fees (i.e. subscription fees and charges) and appears on the invoices."),(0,n.kt)("h2",{id:"general-tax-rate"},"General tax rate"),(0,n.kt)("p",null,"There is a default tax rate at the organization level that applies to all customers and is 0%."),(0,n.kt)("p",null,"To modify the default tax rate for the organization:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Settings"')," in the side menu;"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},'"Invoice & tax"')," tab;"),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},'"Edit tax rate"')," on the right;"),(0,n.kt)("li",{parentName:"ol"},"Enter the desired tax rate; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Edit tax rate"')," to confirm.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Default tax rate at the organization level",src:a(860).Z,width:"2388",height:"630"})),(0,n.kt)("h2",{id:"customer-specific-tax-rate"},"Customer-specific tax rate"),(0,n.kt)("p",null,"If you need to define a specific tax rate for a customer, you can override the organization's tax rate by defining a tax rate at customer level."),(0,n.kt)("p",null,"To define a customer-specific tax rate through the user interface:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Customers"')," in the side menu;"),(0,n.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,n.kt)("li",{parentName:"ol"},"Open the ",(0,n.kt)("strong",{parentName:"li"},'"Tax rate"')," tab;"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Add a tax rate"')," on the right;"),(0,n.kt)("li",{parentName:"ol"},"Enter the desired tax rate; and"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},'"Add tax rate"')," to confirm.")),(0,n.kt)("p",null,"If later you want to edit or delete the customer's tax rate, click the ",(0,n.kt)("strong",{parentName:"p"},"ellipsis icon")," to see all available actions."),(0,n.kt)("p",null,"You can also use the following endpoint to add or edit the customer's tax rate via API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/customers\n")),(0,n.kt)("p",null,"To do so, you must include the ",(0,n.kt)("inlineCode",{parentName:"p"},"vat_rate")," argument in the body of the request."))}d.isMDXComponent=!0},860:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/organization-tax-rate-4cfe52c7e974b6c3c73903f596f797ef.png"}}]);