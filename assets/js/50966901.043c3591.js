"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1603],{3905:(e,o,n)=>{n.d(o,{Zo:()=>l,kt:()=>m});var t=n(67294);function i(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){i(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function c(e,o){if(null==e)return{};var n,t,i=function(e,o){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):r(r({},o),e)),n},l=function(e){var o=d(e.components);return t.createElement(s.Provider,{value:o},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||a;return n?t.createElement(m,r(r({ref:o},l),{},{components:n})):t.createElement(m,r({ref:o},l))}));function m(e,o){var n=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=u;var c={};for(var s in o)hasOwnProperty.call(o,s)&&(c[s]=o[s]);c.originalType=e,c[f]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=n[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40004:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2},r="Create one-off invoices from add-ons",c={unversionedId:"guide/addons/oneoff-invoices",id:"guide/addons/oneoff-invoices",title:"Create one-off invoices from add-ons",description:"One-off invoices allow you to bill immediately one or several add-ons to a customer. This guide will show you how to create a one-off invoice for a specific customer using the add-ons.",source:"@site/docs/guide/08_addons/oneoff-invoices.md",sourceDirName:"guide/08_addons",slug:"/guide/addons/oneoff-invoices",permalink:"/docs/guide/addons/oneoff-invoices",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Overview",permalink:"/docs/guide/addons/overview"},next:{title:"Events",permalink:"/docs/category/events"}},s={},d=[{value:"Creating a One-Off Invoice",id:"creating-a-one-off-invoice",level:2},{value:"Adding add-ons to one-off invoices",id:"adding-add-ons-to-one-off-invoices",level:2},{value:"Application scope of one-off invoices",id:"application-scope-of-one-off-invoices",level:2},{value:"Invoicing",id:"invoicing",level:2}],l={toc:d},f="wrapper";function p(e){let{components:o,...a}=e;return(0,i.kt)(f,(0,t.Z)({},l,a,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-one-off-invoices-from-add-ons"},"Create one-off invoices from add-ons"),(0,i.kt)("p",null,"One-off invoices allow you to bill immediately one or several add-ons to a customer. This guide will show you how to create a one-off invoice for a specific customer using the add-ons."),(0,i.kt)("h2",{id:"creating-a-one-off-invoice"},"Creating a One-Off Invoice"),(0,i.kt)("p",null,"To create a one-off invoice for a specific customer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the customer from the list of customers; and"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},'"Actions"')," button located in the upper-right corner and select ",(0,i.kt)("strong",{parentName:"li"},'"Create one-off invoice"'),".")),(0,i.kt)("h2",{id:"adding-add-ons-to-one-off-invoices"},"Adding add-ons to one-off invoices"),(0,i.kt)("p",null,"Now that you have started the flow to create a one-off invoice, it's time to add one or several add-ons to it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add an add-on"')," to add a new add-on to the invoice;"),(0,i.kt)("li",{parentName:"ol"},"Edit the number of units applied for a specific add-on;"),(0,i.kt)("li",{parentName:"ol"},"Edit the unit price of a specific add-on (you can define it as 0 if needed);"),(0,i.kt)("li",{parentName:"ol"},"Edit the description of the add-on displayed on the invoice; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Create"')," to issue your one-off invoice.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Issue one-off invoices",src:n(48121).Z,width:"2422",height:"1808"})),(0,i.kt)("h2",{id:"application-scope-of-one-off-invoices"},"Application scope of one-off invoices"),(0,i.kt)("p",null,"Here are a few things to keep in mind about one-off invoices:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"One-off invoices are issued immediately and can include the same add-on multiple times."),(0,i.kt)("li",{parentName:"ul"},"If the currency of the customer is already defined, the currency of the one-off invoice must be the same."),(0,i.kt)("li",{parentName:"ul"},"You can use the same add-on to create one-off invoices for multiple customers whose subscriptions don't have the same currency or to apply a different amount for one of these customers."),(0,i.kt)("li",{parentName:"ul"},"Coupons or prepaid credits (discounts) ",(0,i.kt)("strong",{parentName:"li"},"do not apply")," to one-off invoices."),(0,i.kt)("li",{parentName:"ul"},"One-off invoices are subject to taxes, as defined in the customer view.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that when using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined in the UI.")),(0,i.kt)("h2",{id:"invoicing"},"Invoicing"),(0,i.kt)("p",null,"As mentioned previously, a ",(0,i.kt)("strong",{parentName:"p"},"one-off invoice is invoiced straight away"),". You are able to find one-off invoices through webhook with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook_type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"invoice.one_off_created"),"."))}p.isMDXComponent=!0},48121:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/one-off-invoices-f30ee15cac99a5adb3f4d4ef60da6160.png"}}]);