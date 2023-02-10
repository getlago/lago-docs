"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[102],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,N=p["".concat(i,".").concat(k)]||p[k]||c[k]||l;return n?a.createElement(N,o(o({ref:e},m),{},{components:n})):a.createElement(N,o({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[p]="string"==typeof t?t:r,o[1]=d;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},815:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>c,NotNullable:()=>p,Type:()=>m,assets:()=>i,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},o="Credit note object",d={unversionedId:"api/credit_notes/credit-note-object",id:"api/credit_notes/credit-note-object",title:"Credit note object",description:"This object represents a credit note emited to re-credit a customer for a fee or an invoice.",source:"@site/docs/api/11_credit_notes/credit-note-object.mdx",sourceDirName:"api/11_credit_notes",slug:"/api/credit_notes/credit-note-object",permalink:"/docs/api/credit_notes/credit-note-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Credit notes",permalink:"/docs/category/credit-notes"},next:{title:"Create credit note",permalink:"/docs/api/credit_notes/create-credit-note"}},i={},u=[{value:"Credit note object",id:"credit-note-object-1",level:2},{value:"Item object",id:"item-object",level:2}],m=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},p=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},k={toc:u,Type:m,NotNullable:p,Comment:c},N="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(N,(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"credit-note-object"},"Credit note object"),(0,r.kt)("p",null,"This object represents a credit note emited to re-credit a customer for a fee or an invoice."),(0,r.kt)("h2",{id:"credit-note-object-1"},"Credit note object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "credit_note": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "number": "LAG-1234-CN2",\n    "lago_invoice_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "invoice_number": "LAG-1234",\n    "issuing_date": "2022-12-06",\n    "credit_status": "available",\n    "refund_status": "pending",\n    "reason": "other",\n    "description": "Free text",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "credit_amount_cents": 100,\n    "credit_amount_currency": "EUR",\n    "refund_amount_cents": 0,\n    "refund_amount_currency": "EUR",\n    "balance_amount_cents": 100,\n    "balance_amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "sub_total_vat_excluded_amount_cents": 100,\n    "sub_total_vat_excluded_amount_currency": "EUR",\n    "created_at": "2022-10-06 09:52:00",\n    "updated_at": "2022-10-06 09:52:00",\n    "file_url": "https://getlago.com/credit_note/file",\n    "items": [\n      {\n        "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "fee":       {\n          "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n          "item": {\n            "type": "charge",\n            "code": "user_seats",\n            "name": "User Seats"\n          },\n          "amount_cents": 100,\n          "amount_currency": "EUR",\n          "vat_amount_cents": 20,\n          "vat_amount_currency": "EUR",\n          "units": 12.6,\n          "events_count": 10\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the credit note in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sequential_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Credit note sequential id scoped on the invoice")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"number")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Credit note unique number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the invoice in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invoice_number")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Invoice unique number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"issuing_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of creation of the credit note")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"reason")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Issuing reason of the credit note",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"-",(0,r.kt)("inlineCode",{parentName:"td"},"duplicated_charge"),(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"product_unsatisfactory"),(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"order_change"),(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"order_cancellation"),(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"fraudulent_charge"),(0,r.kt)("br",null),"-",(0,r.kt)("inlineCode",{parentName:"td"},"other"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the credit part of the credit note",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"available"),": An amount remain available for future usage.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"consumed"),": The amount is fully consumed. Remaining amount is 0",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"voided"),": The remaining amount cannot be used any more.",(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"refund_status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the refund part of the credit note",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),": The refund is pending for its execution.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"succeeded"),": The refund has been executed",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"failed"),": The refund failed to execute")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Total amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"total_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the total amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Credit amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the credit amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"refund_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Refund amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"refund_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the refund amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"balance_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Remaining credit amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"balance_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the balance amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"vat_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the VAT amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sub_total_vat_excluded_amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Subtotal excluding tax, in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"sub_total_vat_excluded_amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the subtotal amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time of creation of the credit note in UTC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"updated_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time of last update of the credit note in UTC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"file_url")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0","\xa0"),(0,r.kt)("td",{parentName:"tr",align:null},"File url of the credit note PDF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"items")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"JSON")),(0,r.kt)("td",{parentName:"tr",align:null},"Array of ",(0,r.kt)("a",{parentName:"td",href:"#credit-note-object"},"item")," object")))),(0,r.kt)("h2",{id:"item-object"},"Item object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the credit note item in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount in cents")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the amount")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"fee")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"JSON"),"\xa0"," ","\xa0"," ",(0,r.kt)(p,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../invoices/invoice-object#fee-object"},"Fee")," object")))))}s.isMDXComponent=!0}}]);