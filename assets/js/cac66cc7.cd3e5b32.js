"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9722],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=d(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2009:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>u,NotNullable:()=>c,Type:()=>s,assets:()=>p,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:8},o="Wallet transaction object",i={unversionedId:"api/wallets/wallet-transaction-object",id:"api/wallets/wallet-transaction-object",title:"Wallet transaction object",description:"This object represents a wallet transaction object.",source:"@site/docs/api/13_wallets/wallet-transaction-object.mdx",sourceDirName:"api/13_wallets",slug:"/api/wallets/wallet-transaction-object",permalink:"/docs/api/wallets/wallet-transaction-object",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"api",previous:{title:"Top-up wallet",permalink:"/docs/api/wallets/top-up"},next:{title:"Get all wallet transactions",permalink:"/docs/api/wallets/get-all-transactions"}},p={},d=[{value:"Schema",id:"schema",level:2}],s=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},u=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},m={toc:d,Type:s,NotNullable:c,Comment:u},k="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-transaction-object"},"Wallet transaction object"),(0,r.kt)("p",null,"This object represents a wallet transaction object.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "wallet_transaction": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac1111",\n    "lago_wallet_id": "12345",\n    "status": "settled",\n    "transaction_type": "inbound",\n    "amount": "10.0",\n    "credit_amount": "10.0",\n    "settled_at": "2022-04-29T08:59:51Z",\n    "created_at": "2022-04-29T08:59:51Z"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier of the wallet transaction in Lago application.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_wallet_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Internal Lago wallet ID.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Status. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"settled"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"transaction_type")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction type. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"inbound (increasing balance)"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"outbound (decreasing balance)"),(0,r.kt)("div",null))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"credit_amount")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Credits amount.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"amount")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Amount based on rate and currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of wallet transaction creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"settled_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"Type"},"String")," ",(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date the transaction was settled.")))))}b.isMDXComponent=!0}}]);