"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8144],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8496:function(e,t,r){r.r(t),r.d(t,{Comment:function(){return f},NotNullable:function(){return d},Type:function(){return m},assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:6},p="customer. payment_provider_created",l={unversionedId:"api/webhooks/customer-payment-provider-created",id:"api/webhooks/customer-payment-provider-created",title:"customer. payment_provider_created",description:"This webhook is sent when a customer is succeffuly created on a payment provider.",source:"@site/docs/api/11_webhooks/customer-payment-provider-created.mdx",sourceDirName:"api/11_webhooks",slug:"/api/webhooks/customer-payment-provider-created",permalink:"/docs/api/webhooks/customer-payment-provider-created",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"api",previous:{title:"event.error",permalink:"/docs/api/webhooks/event-error"},next:{title:"customer. payment_provider_error",permalink:"/docs/api/webhooks/customer-payment-provider-error"}},u={},s=[],m=function(e){var t=e.children;e.color;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},d=function(e){var t=e.children;e.color;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},f=function(e){var t=e.children;e.color;return(0,a.kt)("span",{style:{fontSize:"12px"}},t)},y={toc:s,Type:m,NotNullable:d,Comment:f};function b(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customer-payment_provider_created"},"customer. payment_provider_created"),(0,a.kt)("p",null,"This webhook is sent when a customer is succeffuly created on a payment provider."),(0,a.kt)("p",null,"It allows you to retrieve the customer id on the provider application and then to attach a payment method to the customer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "customer.payment_provider_created",\n  "object_type": "customer",\n  "customer": {\n    "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "created_at": "2022-04-29T08:59:51Z",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "url": "http://hooli.com",\n    "vat_rate": 12.5,\n    "zipcode": "91364",\n    "billing_configuration": {\n      "payment_provider": "stripe",\n      "provider_customer_id": "cus_12345"\n    }\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"customer")," ","\xa0"," ","\xa0"," ",(0,a.kt)(m,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,a.kt)(d,{mdxType:"NotNullable"},"Not nullable")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"../customers/customer-object"},"Customer object"))))))}b.isMDXComponent=!0}}]);