"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1867],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=d(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(g,l(l({ref:e},m),{},{components:n})):a.createElement(g,l({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},555:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>s,NotNullable:()=>c,Type:()=>m,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},l="Organization object",o={unversionedId:"api/organizations/organization-object",id:"api/organizations/organization-object",title:"Organization object",description:"This object represents an organization.",source:"@site/docs/api/10_organizations/organization-object.mdx",sourceDirName:"api/10_organizations",slug:"/api/organizations/organization-object",permalink:"/docs/api/organizations/organization-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Get all invoices",permalink:"/docs/api/invoices/get-all-invoices"},next:{title:"Update your organization",permalink:"/docs/api/organizations/update-organization"}},p={},d=[{value:"Schema",id:"schema",level:2},{value:"Billing Configuration Object",id:"billing-configuration-object",level:2}],m=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},s=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},u={toc:d,Type:m,NotNullable:c,Comment:s};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organization-object"},"Organization object"),(0,r.kt)("p",null,"This object represents an organization.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "organization": {\n    "name": "Name1",\n    "created_at": "2022-05-02T13:04:09Z",\n    "webhook_url": "https://test-example.example",\n    "country": "CZ",\n    "address_line1": "address1",\n    "address_line2": null,\n    "state": "state1",\n    "zipcode": "10000",\n    "email": "org@email.com",\n    "city": "city125",\n    "legal_name": null,\n    "legal_number": null,\n    "billing_configuration": {\n      "invoice_footer": "footer custom",\n      "vat_rate": 15.0\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(c,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(s,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date of organization creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"webhook_url")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook URL.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"country")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid country alpha-2 code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address_line1")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Address first line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Address second line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization state.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"zipcode")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization zipcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"email")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Business email.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"city")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization city.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"legal_name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization legal name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"legal_number")," ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Organization legal number.")))),(0,r.kt)("h2",{id:"billing-configuration-object"},"Billing Configuration Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_footer ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom footer used in invoices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat_rate ","\xa0"," ","\xa0"," ",(0,r.kt)(m,{mdxType:"Type"},"Float")),(0,r.kt)("td",{parentName:"tr",align:null},"VAT rate used in fees.")))))}g.isMDXComponent=!0}}]);