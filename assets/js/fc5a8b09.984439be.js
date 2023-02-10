"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[c]="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:8},i="Add-ons",d={unversionedId:"guide/addons",id:"guide/addons",title:"Add-ons",description:"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and eligible for collection straight away.",source:"@site/docs/guide/08_addons.md",sourceDirName:"guide",slug:"/guide/addons",permalink:"/docs/guide/addons",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"Coupons",permalink:"/docs/guide/coupons"},next:{title:"Events",permalink:"/docs/category/events"}},l={},s=[{value:"Create add-ons",id:"create-add-ons",level:2},{value:"Assign an add-on to a customer",id:"assign-an-add-on-to-a-customer",level:2},{value:"Application scope",id:"application-scope",level:3},{value:"Edit and delete add-ons",id:"edit-and-delete-add-ons",level:2},{value:"Invoicing",id:"invoicing",level:2}],p={toc:s},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"add-ons"},"Add-ons"),(0,o.kt)("p",null,"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and eligible for collection straight away."),(0,o.kt)("p",null,"For instance, add-ons can be used to apply one-time fees, such as a setup fee, one-time payment or customer success fee."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The value of a coupon is ",(0,o.kt)("strong",{parentName:"p"},"not")," deducted from an add-on. For more information, please review the ",(0,o.kt)("a",{parentName:"p",href:"coupons#application-scope"},"coupons application scope"),".")),(0,o.kt)("h2",{id:"create-add-ons"},"Create add-ons"),(0,o.kt)("p",null,"To create an add-on through the user interface:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Access the ",(0,o.kt)("strong",{parentName:"li"},'"Add-ons"')," section via the side menu;"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add an add-on"'),";"),(0,o.kt)("li",{parentName:"ol"},"Choose a ",(0,o.kt)("strong",{parentName:"li"},"name"),", a ",(0,o.kt)("strong",{parentName:"li"},"code")," and a description (optional) for your add-on;"),(0,o.kt)("li",{parentName:"ol"},"Define its value and currency; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Add add-on"')," to confirm.")),(0,o.kt)("h2",{id:"assign-an-add-on-to-a-customer"},"Assign an add-on to a customer"),(0,o.kt)("p",null,"Here is what you should know about add-ons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the currency of the customer is already defined, the currency of the add-on must be the same; and"),(0,o.kt)("li",{parentName:"ul"},"You can apply an add-on to a customer as many times as you want.")),(0,o.kt)("p",null,"To apply an add-on to a customer:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Actions"')," in the upper-right corner and select ",(0,o.kt)("strong",{parentName:"li"},'"Apply add-on"'),";"),(0,o.kt)("li",{parentName:"ol"},"Select an add-on from the list; and"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},'"Apply add-on"')," to confirm.")),(0,o.kt)("p",null,"Obviously, you can also apply add-ons via the API (",(0,o.kt)("a",{parentName:"p",href:"../api/add_ons/apply-add-on"},"learn more"),")."),(0,o.kt)("h3",{id:"application-scope"},"Application scope"),(0,o.kt)("p",null,"Add-ons are one-off fees that are invoiced immediately. You can apply the same add-on to a customer ",(0,o.kt)("strong",{parentName:"p"},"as many times as you want"),"."),(0,o.kt)("p",null,"When assigning an add-on to a customer, you can ",(0,o.kt)("strong",{parentName:"p"},"change the amount and currency"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This allows you to apply the same add-on to several customers whose subscriptions don't have the same currency, or to apply a different amount for one of these customers."),(0,o.kt)("p",{parentName:"admonition"},"When using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined in the UI.")),(0,o.kt)("h2",{id:"edit-and-delete-add-ons"},"Edit and delete add-ons"),(0,o.kt)("p",null,"In the add-ons section, you can click the ",(0,o.kt)("strong",{parentName:"p"},"ellipsis icon")," to see all available actions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Edit"),": allows you to modify the name, code, description and settings of the add-on;"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Delete"),": allows you to delete the add-on and remove it from the list (this action cannot be undone).")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You ",(0,o.kt)("strong",{parentName:"p"},"cannot")," edit or delete an add-on if it has been applied to a customer.")),(0,o.kt)("h2",{id:"invoicing"},"Invoicing"),(0,o.kt)("p",null,"As mentioned previously, an ",(0,o.kt)("strong",{parentName:"p"},"add-on is invoiced straight away"),". You are able to find an assigned add-on through webhook with ",(0,o.kt)("inlineCode",{parentName:"p"},"webhook_type = invoice.add_on_added"),"."),(0,o.kt)("p",null,"When assiging an add-on to a customer, an invoice is generated immediately. Please note that:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add-ons are subject to taxes, as defined in the customer view; and"),(0,o.kt)("li",{parentName:"ol"},"Coupons cannot be deducted from the amount of the add-on.")))}u.isMDXComponent=!0}}]);