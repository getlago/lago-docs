"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:c,values:k,groupId:b,className:g}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),_=(0,i.l)(y,((e,t)=>e.value===t.value));if(_.length>0)throw new Error('Docusaurus error: Duplicate values "'+_.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(t=null!=c?c:null==(n=N.find((e=>e.props.default)))?void 0:n.props.value)?t:N[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:f}=(0,s.U)(),[T,x]=(0,r.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==T&&y.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,n=w.indexOf(t),a=y[n].value;a!==T&&(S(t),x(a),null!=b&&f(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=w.indexOf(e.currentTarget)+1;n=null!=(a=w[t])?a:w[0];break}case"ArrowLeft":{var r;const t=w.indexOf(e.currentTarget)-1;n=null!=(r=w[t])?r:w[w.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:j,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(N.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4248:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>m,NotNullable:()=>u,Type:()=>d,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_position:2},o="Messages",i={unversionedId:"api/webhooks/messages",id:"api/webhooks/messages",title:"Messages",description:"Here is the list of webhook messages sent by Lago.",source:"@site/docs/api/11_webhooks/messages.mdx",sourceDirName:"api/11_webhooks",slug:"/api/webhooks/messages",permalink:"/docs/api/webhooks/messages",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Format & Signature",permalink:"/docs/api/webhooks/message-signature"},next:{title:"Customer usage",permalink:"/docs/category/customer-usage"}},s={},p=[],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},u=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},c={toc:p,Type:d,NotNullable:u,Comment:m};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messages"},"Messages"),(0,r.kt)("p",null,"Here is the list of webhook messages sent by Lago."),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Invoice created")),"Sent when a new invoice has been issued for a customer.",(0,r.kt)("p",null,"This will allow your application to proceed with the billing."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.created",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "number": "LAG-1234-001-002",\n    "charges_from_date": "2022-04-01",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "file_url": "https://getlago.com/invoice/file",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "sequential_id": 1,\n      "slug": "LAG-1234-001",\n      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscriptions": [\n        {\n        "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n        "external_id": "susbcription_external_id",\n        "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n        "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n        "canceled_at": "2022-04-29T08:59:51Z",\n        "created_at": "2022-04-29T08:59:51Z",\n        "plan_code": "new_code",\n        "started_at": "2022-04-29T08:59:51Z",\n        "status": "active",\n        "terminated_at": null\n      }\n    ],\n    "fees": [\n      {\n        "item": {\n          "type": "subscription",\n          "code": "plan_code",\n          "name": "Plan"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "0.32",\n        "events_count": 23\n      }\n    ],\n    "credits": [\n      {\n        "item": {\n          "type": "coupon",\n          "code": "coupon_code",\n          "name": "Coupon"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR"\n      }\n    ]\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invoice")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not nullable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../invoices/invoice-object"},"Invoice object")))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"PDF invoice generated")),"Sent when the PDF file has been generated for a customer invoice.",(0,r.kt)("p",null,"This will allow your application to retrieve the PDF invoice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.generated",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "number": "LAG-1234-001-002",\n    "from_date": "2022-04-01",\n    "to_date": "2022-04-30",\n    "charges_from_date": "2022-04-01",\n    "issuing_date": "",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "file_url": "https://getlago.com/invoice/file",\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invoice")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not nullable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../invoices/invoice-object"},"Invoice object")))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Add-on added")),"Sent when an add-on has been applied to customer. The invoice is created immediately after the add-on is assigned to a customer.",(0,r.kt)("p",null,"You can use this information to generate a PDF invoice or collect the payment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.add_on_added",\n  "object_type": "invoice",\n  "invoice": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "sequential_id": 2,\n    "issuing_date": "2022-04-30",\n    "amount_cents": 100,\n    "amount_currency": "EUR",\n    "vat_amount_cents": 20,\n    "vat_amount_currency": "EUR",\n    "total_amount_cents": 120,\n    "total_amount_currency": "EUR",\n    "customer": {\n      "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "created_at": "2022-04-29T08:59:51Z",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 20.0,\n      "zipcode": "91364"\n    },\n    "subscription": {\n      "lago_id": "b7ab2926-1de8-4428-9bcd-779314ac129b",\n      "external_id": "susbcription_external_id",\n      "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n      "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "canceled_at": "2022-04-29T08:59:51Z",\n      "created_at": "2022-04-29T08:59:51Z",\n      "plan_code": "new_code",\n      "started_at": "2022-04-29T08:59:51Z",\n      "status": "active",\n      "terminated_at": null\n    },\n    "fees": [\n      {\n        "item": {\n          "type": "add_on",\n          "code": "add_on_code",\n          "name": "add_on_name"\n        },\n        "amount_cents": 100,\n        "amount_currency": "EUR",\n        "vat_amount_cents": 20,\n        "vat_amount_currency": "EUR",\n        "units": "1",\n        "events_count": 23\n      }\n    ]\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invoice")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not nullable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../invoices/invoice-object"},"Invoice object")))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Payment provider created")),"This webhook is sent when a customer is successfully created in the payment provider's application.",(0,r.kt)("p",null,"This allows you to retrieve the identifier assigned to the customer by the payment service provider."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "customer.payment_provider_created",\n  "object_type": "customer",\n  "customer": {\n    "lago_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "created_at": "2022-04-29T08:59:51Z",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "url": "http://hooli.com",\n    "vat_rate": 12.5,\n    "zipcode": "91364",\n    "billing_configuration": {\n      "payment_provider": "stripe",\n      "provider_customer_id": "cus_12345"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"customer")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not nullable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../customers/customer-object"},"Customer object")))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Payment provider error")),"This webhook is sent when there is an error related to the creation of a customer in the payment provider's application.",(0,r.kt)("p",null,"You should review the customer's data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.payment_failure",\n  "object_type": "payment_provider_customer_error",\n  "payment_provider_customer_error": {\n    "lago_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "payment_provider": "stripe",\n    "provider_error": {\n      "message": "Invalid email address",\n      "error_code": "email_invalid"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment_provider")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider used to process the payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"provider_error","[message]")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Error message sent by the payment provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"provider_error","[error_code]")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Error code sent by the payment provider"))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Checkout URL generated")),"Sent when a new customer is created through integration with GoCardless.",(0,r.kt)("p",null,"Includes the URL that should be used to set up the ",(0,r.kt)("a",{parentName:"p",href:"../../guide/payments/gocardless-integration#direct-debit"},"direct debit mandate"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "customer.checkout_url_generated",\n  "object_type": "payment_provider_customer_checkout_url",\n  "payment_provider_customer_checkout_url": {\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "payment_provider": "gocardless",\n    "checkout_url": "__CUSTOM_CHECKOUT_URL__"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment_provider")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Default payment provider for this customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"checkout_url")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"URL that should be used to set up the direct debit mandate"))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Payment failure")),"Sent when there is an error related to the payment process.",(0,r.kt)("p",null,"Usually occurs when no valid payment method is defined for the customer in the payment service provider's application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "invoice.payment_failure",\n  "object_type": "payment_provider_invoice_payment_error",\n  "payment_provider_invoice_payment_error": {\n    "lago_invoice_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "lago_customer_id": "99a6094e-199b-4101-896a-54e927ce7bd7",\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "provider_customer_id": "cus_123456",\n    "payment_provider": "stripe",\n    "provider_error": {\n      "message": "Cannot charge a customer that has no active card",\n      "error_code": "missing"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_invoice_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the invoice in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"lago_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in Lago application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"provider_customer_id")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifer of the customer in payment provider application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"payment_provider")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider used to process the payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"provider_error","[message]")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Error message sent by the payment provider")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"provider_error","[error_code]")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")),(0,r.kt)("td",{parentName:"tr",align:null},"Error code sent by the payment provider"))))),(0,r.kt)("details",{className:"custom-toggle"},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Event error")),"This webhook is sent when there is an error related to the creation of an event.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "event.error",\n  "object_type": "event_error",\n  "event_error": {\n    "status": 422,\n    "error": "Unprocessable entity",\n    "message": "code does not exist",\n    "input_params": {\n      "transaction_id": "__transaction_id__",\n      "external_customer_id": "customer123",\n      "code": "code123"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"status")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP status of the error. Possible statuses are ",(0,r.kt)("inlineCode",{parentName:"td"},"404")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"422"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"error")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP error code. Possible errors are ",(0,r.kt)("inlineCode",{parentName:"td"},"Not found")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"Unprocessable entity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"message")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"Error code. See next list for the description of each error code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"input_params")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,r.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON provided at event creation")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"billable_metric_not_found")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},"No billable metric matches the given code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"customer_not_found")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},"No customer matches the external id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"subscription_not_found")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},"No subscription matches the given external subscription id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invalid_argument")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"422")),(0,r.kt)("td",{parentName:"tr",align:null},"No subscription matches the given external subscription id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"invalid_recurring_resource")," ","\xa0"," ","\xa0"," ",(0,r.kt)(d,{mdxType:"Type"},"422")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided recurring resource for persisted event is invalid"))))))}k.isMDXComponent=!0}}]);