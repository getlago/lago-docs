"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8672],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(n),s=r,N=u["".concat(o,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},57008:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>k,NotNullable:()=>u,Type:()=>m,assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},i="Fee object",d={unversionedId:"api/fees/fee-object",id:"api/fees/fee-object",title:"Fee object",description:"This object represents a line item of an invoice, handling amount, billed units and item description",source:"@site/docs/api/11_fees/fee-object.mdx",sourceDirName:"api/11_fees",slug:"/api/fees/fee-object",permalink:"/docs/api/fees/fee-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Fees",permalink:"/docs/category/fees"},next:{title:"Get a specific fee",permalink:"/docs/api/fees/get_fee"}},o={},p=[{value:"Fee object",id:"fee-object-1",level:2},{value:"Item object",id:"item-object",level:2}],m=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},u=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},k=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},s={toc:p,Type:m,NotNullable:u,Comment:k},N="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fee-object"},"Fee object"),(0,r.kt)("p",null,"This object represents a line item of an invoice, handling amount, billed units and item description"),(0,r.kt)("h2",{id:"fee-object-1"},"Fee object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "lago_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "lago_group_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "lago_invoice_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "lago_true_up_fee_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "lago_true_up_parent_fee_id": null,\n  "item": {\n    "type": "subscription",\n    "code": "plan_code",\n    "name": "Plan",\n    "lago_item_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n    "item_type": "Subscription"\n  },\n  "pay_in_advance": true,\n  "invoiceable": true,\n  "amount_cents": 100,\n  "unit_amount_cents": 50,\n  "amount_currency": "EUR",\n  "vat_amount_cents": 20,\n  "vat_amount_currency": "EUR",\n  "total_amount_cents": 120,\n  "total_amount_currency": "EUR",\n  "units": "0.32",\n  "events_count": 23,\n  "from_date": "2022-04-29T08:59:51Z",\n  "to_date": "2022-05-29T08:59:51Z",\n  "payment_status": "pending",\n  "description": "description",\n  "created_at": "2022-08-24T14:58:59Z",\n  "succeeded_at": "2022-08-24T14:58:59Z",\n  "failed_at": "2022-08-24T14:58:59Z",\n  "refunded_at": "2022-08-24T14:58:59Z",\n  "external_subscription_id": "external_id",\n  "lago_subscription_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "external_customer_id": "external_id",\n  "lago_customer_id": "1a901a90-1a90-1a90-1a90-1a901a901a90",\n  "event_transaction_id": "1a901a90-1a90-1a90-1a90-1a901a901a90"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the fee in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_group_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the group in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_true_up_fee_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the true up fee in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_true_up_parent_fee_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the parent true up usage based fee in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents of the fee, VAT excluded")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"units")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String (Decimal)")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Units used to charge the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"events_count")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"from_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 date)")),(0,r.kt)("td",{parentName:"tr",align:null},"Beginning date of the period that the fee covers. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("details",null,"Only applies to ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fees"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"to_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 date)")),(0,r.kt)("td",{parentName:"tr",align:null},"Ending date of the period that the fee covers. ",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("details",null,"Only applies to ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fees"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment_status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the payment. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"succeeded"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"failed"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"refunded"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"pay_in_advance")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Boolean")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to indicate if the fee was paid in advance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invoiceable")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Boolean")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to indicate if the fee was included on invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 datetime)"),"\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time of creation of the credit note in UTC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"succeeded_at"),"\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 datetime)")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time in UTC of the payment success.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"failed_at")," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 datetime)")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time in UTC of the payment failure.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"refunded_at")," ",(0,r.kt)(m,{mdxType:"Type"},"String (ISO 8601 datetime)")),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time in UTC of the payment refund.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_subscription_id")," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the subscription in your application.",(0,r.kt)("br",null),"Present only if fee has ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fee_type and ",(0,r.kt)("inlineCode",{parentName:"td"},"pay_in_advance")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_subscription_id")," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the subscription in Lago application.",(0,r.kt)("br",null),"Present only if fee has ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fee_type and ",(0,r.kt)("inlineCode",{parentName:"td"},"pay_in_advance")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application.",(0,r.kt)("br",null),"Present only if fee has ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fee_type and ",(0,r.kt)("inlineCode",{parentName:"td"},"pay_in_advance")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application.",(0,r.kt)("br",null),"Present only if fee has ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fee_type and ",(0,r.kt)("inlineCode",{parentName:"td"},"pay_in_advance")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"event_transaction_id")," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Event's transaction_id that triggered the fee.",(0,r.kt)("br",null),"Present only if fee has ",(0,r.kt)("inlineCode",{parentName:"td"},"charge")," fee_type and ",(0,r.kt)("inlineCode",{parentName:"td"},"pay_in_advance")," is true.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"item")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#item-object"},"Item")," attached to the fee")))),(0,r.kt)("h2",{id:"item-object"},"Item object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"type")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of fee.",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add_on"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"charge"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"instant_charge"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Code of item.",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add_on"),": code of the Add-On",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"charge"),": code of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"instant_charge"),": code of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),": code of the plan",(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of item.",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add_on"),": name of the Add-On",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"charge"),": name of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"instant_charge"),": name of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),": name of the plan",(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_item_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the item.",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add_on"),": Lago identifier of the Add-On",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"charge"),": Lago identifier of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),": Lago identifier of the wallet transaction",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"instant_charge"),": Lago identifier of the billable metric",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),": Lago identifier of the subscription",(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"item_type")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the fee item",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add_on"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"AddOn"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"charge"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"BillableMetric"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"credit"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"WalletTransaction"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"instant_charge"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"BillableMetric"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"subscription"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"Subscription"),(0,r.kt)("div",null))))))))}c.isMDXComponent=!0}}]);