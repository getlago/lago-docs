"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6090],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],d={sidebar_position:8},s="Add-ons",l={unversionedId:"guide/addons",id:"guide/addons",title:"Add-ons",description:"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and eligible for collection straight away.",source:"@site/docs/guide/08_addons.md",sourceDirName:"guide",slug:"/guide/addons",permalink:"/docs/guide/addons",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"guide",previous:{title:"Coupons",permalink:"/docs/guide/coupons"},next:{title:"Ingesting Events",permalink:"/docs/guide/ingesting-events"}},p={},c=[{value:"Create add-ons",id:"create-add-ons",level:2},{value:"Assign an add-on to a customer",id:"assign-an-add-on-to-a-customer",level:2},{value:"Application scope",id:"application-scope",level:3},{value:"Edit and delete add-ons",id:"edit-and-delete-add-ons",level:2},{value:"Invoicing",id:"invoicing",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"add-ons"},"Add-ons"),(0,i.kt)("p",null,"Add-ons allow you to apply a one-off fee to a customer. When you apply an add-on to a customer, it is invoiced immediately and eligible for collection straight away."),(0,i.kt)("p",null,"For instance, add-ons can be used to apply one-time fees, such as a setup fee, one-time payment or customer success fee."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The value of a coupon is ",(0,i.kt)("strong",{parentName:"p"},"not")," deducted from an add-on. For more information, please review the ",(0,i.kt)("a",{parentName:"p",href:"coupons#application-scope"},"coupons application scope"),"."))),(0,i.kt)("h2",{id:"create-add-ons"},"Create add-ons"),(0,i.kt)("p",null,"To create an add-on through the user interface:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Access the ",(0,i.kt)("strong",{parentName:"li"},'"Add-ons"')," section via the side menu;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add an add-on"'),";"),(0,i.kt)("li",{parentName:"ol"},"Choose a ",(0,i.kt)("strong",{parentName:"li"},"name"),", a ",(0,i.kt)("strong",{parentName:"li"},"code")," and a description (optional) for your add-on;"),(0,i.kt)("li",{parentName:"ol"},"Define its value and currency; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Add add-on"')," to confirm.")),(0,i.kt)("h2",{id:"assign-an-add-on-to-a-customer"},"Assign an add-on to a customer"),(0,i.kt)("p",null,"Here is what you should know about add-ons:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can only apply an add-on to a customer if this customer has an active ",(0,i.kt)("a",{parentName:"li",href:"../guide/plans/subscription"},"subscription"),";"),(0,i.kt)("li",{parentName:"ol"},"The currency of the add-on must match the currency of the subscription; and"),(0,i.kt)("li",{parentName:"ol"},"You can apply an add-on to a customer ad libitum.")),(0,i.kt)("p",null,"To apply an add-on to a customer:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select a customer from the list;"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Actions"')," in the upper-right corner and select ",(0,i.kt)("strong",{parentName:"li"},'"Apply add-on"'),";"),(0,i.kt)("li",{parentName:"ol"},"Select an add-on from the list; and"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},'"Apply add-on"')," to confirm.")),(0,i.kt)("p",null,"Obviously, you can also apply add-ons via the API (",(0,i.kt)("a",{parentName:"p",href:"../api/applied_add_ons/apply-add-on"},"learn more"),")."),(0,i.kt)("h3",{id:"application-scope"},"Application scope"),(0,i.kt)("p",null,"You can apply the same add-on to a customer ",(0,i.kt)("strong",{parentName:"p"},"as many times as you want"),". Add-ons are one-off fees that are invoiced immediately."),(0,i.kt)("p",null,"When assigning an add-on to a customer, you can ",(0,i.kt)("strong",{parentName:"p"},"change the amount and currency"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This allows you to apply the same add-on to several customers whose subscriptions don't have the same currency, or to apply a different amount for one of these customers."),(0,i.kt)("p",{parentName:"div"},"When using the API endpoint, if the amount and currency are null, Lago will apply the default amount and currency defined in the UI."))),(0,i.kt)("h2",{id:"edit-and-delete-add-ons"},"Edit and delete add-ons"),(0,i.kt)("p",null,"In the add-ons section, you can click the ",(0,i.kt)("strong",{parentName:"p"},"ellipsis icon")," to see all available actions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Edit"),": allows you to modify the name, code, description and settings of the add-on;"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Delete"),": allows you to delete the add-on and remove it from the list (this action cannot be undone).")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You ",(0,i.kt)("strong",{parentName:"p"},"cannot")," edit or delete an add-on if it has been applied to a customer."))),(0,i.kt)("h2",{id:"invoicing"},"Invoicing"),(0,i.kt)("p",null,"As mentioned previously, an ",(0,i.kt)("strong",{parentName:"p"},"add-on is invoiced straigh away"),". You are able to find an assigned add-on through webhook with ",(0,i.kt)("inlineCode",{parentName:"p"},"webhook_type = invoice.add_on_added"),"."),(0,i.kt)("p",null,"When assiging an add-on to a customer, an invoice is generated immediately. Please note that:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add-ons are subject to taxes, as defined in the customer view;"),(0,i.kt)("li",{parentName:"ol"},"Coupons cannot be deducted from the amount of the add-on.")))}m.isMDXComponent=!0}}]);