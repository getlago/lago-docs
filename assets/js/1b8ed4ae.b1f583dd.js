"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3122],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=m(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||s[c]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),i=n(7392),p=n(7094),m=n(2466);const u="tabList__CuJ",s="tabItem_LNqP";function d(t){var e,n;const{lazy:o,block:d,defaultValue:c,values:k,groupId:g,className:b}=t,y=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:y.map((t=>{let{props:{value:e,label:n,attributes:r}}=t;return{value:e,label:n,attributes:r}})),f=(0,i.l)(N,((t,e)=>t.value===e.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(e=null!=c?c:null==(n=y.find((t=>t.props.default)))?void 0:n.props.value)?e:y[0].props.value;if(null!==h&&!N.some((t=>t.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+N.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:T}=(0,p.U)(),[x,_]=(0,a.useState)(h),S=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=g){const t=v[g];null!=t&&t!==x&&N.some((e=>e.value===t))&&_(t)}const C=t=>{const e=t.currentTarget,n=S.indexOf(e),r=N[n].value;r!==x&&(O(e),_(r),null!=g&&T(g,String(r)))},j=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var r;const e=S.indexOf(t.currentTarget)+1;n=null!=(r=S[e])?r:S[0];break}case"ArrowLeft":{var a;const e=S.indexOf(t.currentTarget)-1;n=null!=(a=S[e])?a:S[S.length-1];break}}null==(e=n)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},N.map((t=>{let{value:e,label:n,attributes:o}=t;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>S.push(t),onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":x===e})}),null!=n?n:e)}))),o?(0,a.cloneElement)(y.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function c(t){const e=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},7449:(t,e,n)=>{n.r(e),n.d(e,{Comment:()=>d,NotNullable:()=>s,Type:()=>u,assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_position:1},o="Customer object",i={unversionedId:"api/customers/customer-object",id:"api/customers/customer-object",title:"Customer object",description:"This object represents a customer of your business.",source:"@site/docs/api/04_customers/customer-object.mdx",sourceDirName:"api/04_customers",slug:"/api/customers/customer-object",permalink:"/docs/api/customers/customer-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Customers",permalink:"/docs/category/customers"},next:{title:"Create or update a customer",permalink:"/docs/api/customers/create-update-customer"}},p={},m=[{value:"Schema",id:"schema",level:2},{value:"Billing Configuration Object",id:"billing-configuration-object",level:2}],u=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},s=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},d=t=>{let{children:e,color:n}=t;return(0,a.kt)("span",{style:{fontSize:"12px"}},e)},c={toc:m,Type:u,NotNullable:s,Comment:d};function k(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customer-object"},"Customer object"),(0,a.kt)("p",null,"This object represents a customer of your business.",(0,a.kt)("br",null),"\nIt lets you create a customer, but also track usage and create invoices for the same customer."),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "sequential_id": "001",\n    "slug": "LAG-1234-001",\n    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "created_at": "2022-04-29T08:59:51Z",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "url": "http://hooli.com",\n    "zipcode": "91364",\n    "currency": "EUR",\n    "timezone": "Europe/Paris",\n    "applicable_timezone": "Europe/Paris",\n    "billing_configuration": {\n      "invoice_grace_period": 3,\n      "payment_provider": "stripe",\n      "provider_customer_id": "cus_12345",\n      "sync_with_provider": true,\n      "vat_rate": 12.5\n    }\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not nullable")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"sequential_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not nullable")),(0,a.kt)("td",{parentName:"tr",align:null},"Sequential id of the customer scoped on the organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"slug")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not nullable")),(0,a.kt)("td",{parentName:"tr",align:null},"Slug of the customer based on the Organization name, id and customer sequantial_id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"external_id")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,a.kt)(s,{mdxType:"NotNullable"},"Not nullable")),(0,a.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"address_line1")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"First line of the billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"address_line2")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"city")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"City of the customer's billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"country")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String"),(0,a.kt)("br",null),(0,a.kt)(d,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 3166 (alpha-2)"))),(0,a.kt)("td",{parentName:"tr",align:null},"Country code of the customer's billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"currency")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String"),(0,a.kt)("br",null),(0,a.kt)(d,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"ISO 4217"))),(0,a.kt)("td",{parentName:"tr",align:null},"Currency of the customer - ",(0,a.kt)("a",{parentName:"td",href:"../resources/currencies"},"learn more"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"email")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Email of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"legal_name")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Legal company name of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"legal_number")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Legal company number of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"logo_url")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Logo URL of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Full name of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"phone")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Phone number of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"state")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"State of the customer's billing address")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"timezone")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String"),(0,a.kt)("br",null),(0,a.kt)(d,{mdxType:"Comment"},(0,a.kt)("em",{parentName:"td"},"TZ database"))),(0,a.kt)("td",{parentName:"tr",align:null},"Timezone of the customer - ",(0,a.kt)("a",{parentName:"td",href:"../resources/timezones"},"learn more"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"applicable_timezone")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Timezone applicable the customer.",(0,a.kt)("br",null),"Value is inherited from the organization if timezone attribute is null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"url")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom URL of the customer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"zipcode")," ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Zipcode of the customer's billing address")))),(0,a.kt)("h2",{id:"billing-configuration-object"},"Billing Configuration Object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"invoice_grace_period ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"Integer")),(0,a.kt)("td",{parentName:"tr",align:null},"Grace period in days for the invoice (time between the end of the period and the closing of the invoice).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"payment_provider ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Payment provider used to bill the customer. ",(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("strong",{parentName:"td"},"Possible values")),(0,a.kt)("div",null,"- ",(0,a.kt)("inlineCode",{parentName:"td"},"stripe"),": Use stripe as a payment provider.",(0,a.kt)("br",null),"- null: No payment providers. Only webhooks will be send to process customer billing.",(0,a.kt)("div",null))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"provider_customer_id ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"String")),(0,a.kt)("td",{parentName:"tr",align:null},"Customer ID on the payment provider.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vat_rate ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"Float")),(0,a.kt)("td",{parentName:"tr",align:null},"Custom VAT rate applied to the customer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sync_with_provider  ","\xa0"," ","\xa0"," ",(0,a.kt)(u,{mdxType:"Type"},"Boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"Field that determines whether to create customer in payment provider or not.")))))}k.isMDXComponent=!0}}]);