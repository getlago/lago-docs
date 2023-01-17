"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6176],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(b,i(i({ref:e},d),{},{components:n})):a.createElement(b,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),p=n(7094),s=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(t){var e,n;const{lazy:i,block:c,defaultValue:m,values:b,groupId:k,className:N}=t,g=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:g.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),h=(0,o.l)(y,((t,e)=>t.value===e.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(e=null!=m?m:null==(n=g.find((t=>t.props.default)))?void 0:n.props.value)?e:g[0].props.value;if(null!==f&&!y.some((t=>t.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,p.U)(),[x,_]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=k){const t=v[k];null!=t&&t!==x&&y.some((e=>e.value===t))&&_(t)}const S=t=>{const e=t.currentTarget,n=w.indexOf(e),a=y[n].value;a!==x&&(C(e),_(a),null!=k&&T(k,String(a)))},O=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=w.indexOf(t.currentTarget)+1;n=null!=(a=w[e])?a:w[0];break}case"ArrowLeft":{var r;const e=w.indexOf(t.currentTarget)-1;n=null!=(r=w[e])?r:w[w.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},N)},y.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>w.push(t),onKeyDown:O,onFocus:S,onClick:S},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(g.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function m(t){const e=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},3218:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>c,NotNullable:()=>u,Type:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_position:1},i="Subscription object",o={unversionedId:"api/subscriptions/subscription-object",id:"api/subscriptions/subscription-object",title:"Subscription object",description:"This object represents the assignation of plan to one of the customer of your business.",source:"@site/docs/api/05_subscriptions/subscription-object.mdx",sourceDirName:"api/05_subscriptions",slug:"/api/subscriptions/subscription-object",permalink:"/docs/api/subscriptions/subscription-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Subscriptions",permalink:"/docs/category/subscriptions"},next:{title:"Assign a plan to a customer",permalink:"/docs/api/subscriptions/create-subscription"}},p={},s=[{value:"Schema",id:"schema",level:2},{value:"Deprecated attributes",id:"deprecated-attributes",level:3}],d=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},u=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},c=t=>{let{children:e,color:n}=t;return(0,r.kt)("span",{style:{fontSize:"12px"}},e)},m={toc:s,Type:d,NotNullable:u,Comment:c};function b(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscription-object"},"Subscription object"),(0,r.kt)("p",null,"This object represents the assignation of plan to one of the customer of your business."),(0,r.kt)("p",null,"The subscription will then define how a the related customer will be invoiced based on the fixed and usage-based charges belonging to this related plan."),(0,r.kt)("h2",{id:"schema"},"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscription": {\n    "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "canceled_at": "2022-04-29T08:59:51Z",\n    "created_at": "2022-04-29T08:59:51Z",\n    "plan_code": "new_code",\n    "started_at": "2022-04-29T08:59:51Z",\n    "status": "active",\n    "name": "display name",\n    "external_id": "external_id",\n    "billing_time": "anniversary",\n    "subscription_at": "2022-04-29T00:00:00Z",\n    "terminated_at": null,\n    "previous_plan_code": null,\n    "next_plan_code": null,\n    "downgrade_plan_date": null\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the subscription in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"billing_time")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Billing time of the subscription. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"anniversary"),": Subscription will be billed on each week/month/year anniversary, depending on the plan reccurence",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"calendar"),": Subscription at the end of week/month/year. The first subscription billing will be at pro-rata if it is not created at the beginning of the week/month/year")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"subscription_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Anniversary date and time of the initial subscription. It is used a the based date to bill subscription with anniversary billing time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"canceled_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Cancelation date of the subscription. It's not null when the subscription is ",(0,r.kt)("inlineCode",{parentName:"td"},"canceled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime  in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Creation date of the subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"plan_code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the plan.",(0,r.kt)("br",null),"It matches the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of the plans")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"started_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Start date of the subscription. It could be null if the subscription is ",(0,r.kt)("inlineCode",{parentName:"td"},"pending")," of ",(0,r.kt)("inlineCode",{parentName:"td"},"canceled"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription display name in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique external identifier of the subscription. Used as an idempotency key. Corresponds to the ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," for subscriptions created before August 8th, 2022.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null)),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the subscription. ",(0,r.kt)("br",null)," ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),": a previous subscription has been downgraded, the current one is waiting for its automatic activation at the end of the billing period.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"active"),": the subscription is currently applied to the customer.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"terminated"),": the subscription is not active anymore",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"canceled"),": the subscription has been stopped before its activation. It could happen when two consecutive downgrade have been applied to a customer or when a subscription with a pending one is terminaded.")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"terminated_at")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Termination date of the subscription. It's not null when the subscription is ",(0,r.kt)("inlineCode",{parentName:"td"},"terminated"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"previous_plan_code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the previous plan.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"next_plan_code")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the next plan, in case of downgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"downgrade_plan_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Date when the plan will be downgraded.")))),(0,r.kt)("h3",{id:"deprecated-attributes"},"Deprecated attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"subscription_date")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,r.kt)("br",null),(0,r.kt)(c,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 date"))),(0,r.kt)("td",{parentName:"tr",align:null},"Anniversary date of the initial subscription. It is used a the based date to bill subscription with anniversary billing time.")))))}b.isMDXComponent=!0}}]);