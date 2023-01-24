"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7064],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),g=m(n),c=r,u=g["".concat(p,".").concat(c)]||g[c]||s[c]||o;return n?a.createElement(u,i(i({ref:e},d),{},{components:n})):a.createElement(u,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4687:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>g,NotNullable:()=>s,Type:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},i="Organization object",l={unversionedId:"api/organizations/organization-object",id:"api/organizations/organization-object",title:"Organization object",description:"This object represents an organization.",source:"@site/docs/api/12_organizations/organization-object.mdx",sourceDirName:"api/12_organizations",slug:"/api/organizations/organization-object",permalink:"/docs/api/organizations/organization-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Organizations",permalink:"/docs/category/organizations"},next:{title:"Update your organization",permalink:"/docs/api/organizations/update-organization"}},p={},m=[{value:"Schema",id:"schema",level:2},{value:"Billing Configuration Object",id:"billing-configuration-object",level:2}],d=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},s=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},g=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},c={toc:m,Type:d,NotNullable:s,Comment:g};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"organization-object"},"Organization object"),(0,r.kt)("p",null,"This object represents an organization.",(0,r.kt)("br",null)),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "organization": {\n    "name": "Name1",\n    "created_at": "2022-05-02T13:04:09Z",\n    "webhook_url": "https://test-example.example",\n    "country": "CZ",\n    "address_line1": "address1",\n    "address_line2": null,\n    "state": "state1",\n    "zipcode": "10000",\n    "email": "org@email.com",\n    "city": "city125",\n    "legal_name": null,\n    "legal_number": null,\n    "timezone": "Europe/Paris",\n    "billing_configuration": {\n      "invoice_footer": "footer custom",\n      "invoice_grace_period": 3,\n      "vat_rate": 15.0\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(s,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creation date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"webhook_url")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Webhook URL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"country")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String"),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 3166 (alpha-2)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Country where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address_line1")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Address (first line)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Address (second line)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"state")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"State where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"zipcode")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Zip code associated with the organization's address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"email")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Business email address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"city")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"City where the organization is located")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"legal_name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Legal name of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"legal_number")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Legal number of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timezone")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String"),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"TZ database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone of the organization - ",(0,r.kt)("a",{parentName:"td",href:"../resources/timezones"},"learn more"))))),(0,r.kt)("h2",{id:"billing-configuration-object"},"Billing Configuration Object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_footer ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom invoice footer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_grace_period ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"Integer")),(0,r.kt)("td",{parentName:"tr",align:null},"Grace period (in days)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat_rate ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"Float")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom VAT rate")))))}u.isMDXComponent=!0}}]);