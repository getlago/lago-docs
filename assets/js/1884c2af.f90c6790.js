"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:k,groupId:g,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=k?k:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:f}=(0,s.U)(),[T,E]=(0,r.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=_[g];null!=e&&e!==T&&h.some((t=>t.value===e))&&E(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=h[n].value;a!==T&&(O(t),E(a),null!=g&&f(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},2284:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,Optional:()=>m,PostEndpoint:()=>g,Required:()=>c,Variable:()=>b,assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:2},s="Batch Events",p={unversionedId:"api/events/create-batch-event",id:"api/events/create-batch-event",title:"Batch Events",description:"Batch events represents the data delivered to lago application that will then be aggregated into billable metrics.",source:"@site/docs/api/06_events/create-batch-event.mdx",sourceDirName:"api/06_events",slug:"/api/events/create-batch-event",permalink:"/docs/api/events/create-batch-event",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Events",permalink:"/docs/api/events/create-event"},next:{title:"Coupon object",permalink:"/docs/api/coupons/coupon-object"}},u={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Recurring count aggregation",id:"recurring-count-aggregation",level:3},{value:"Responses",id:"responses",level:2}],c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#422CC1",fontSize:"12px"}},t)},v={toc:d,Required:c,Optional:m,Comment:k,PostEndpoint:g,Variable:b};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-events"},"Batch Events"),(0,r.kt)("p",null,"Batch events represents the data delivered to lago application that will then be aggregated into billable metrics.\nThe following endpoint explains how to ",(0,r.kt)("strong",{parentName:"p"},"send events for multiple subscriptions for one customer.")),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"api/v1/events/batch\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/events/batch" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n      "event": {\n          "transaction_id": "__UNIQUE_ID__",\n          "external_subscription_ids": ["id1", "id2"],\n          "code": "__EVENT_CODE__",\n          "timestamp": $(date +%s),\n          "properties": {\n            "custom_field": 12\n          }\n      }\n  }\'\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import BatchEvent\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nevent = BatchEvent(\n  external_subscription_ids=["id1", "id2"],\n  transaction_id="__UNIQUE_ID__",\n  code="code",\n  timestamp=1650893379,\n  properties={"custom_field": "custom"}\n)\n\nclient.events().batch_create(event)\n'))),(0,r.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.events.batch_create(\n  transaction_id: "__UNIQUE_ID__",\n  external_subscription_ids: ["id1", "id2"],\n  code:  "code",\n  timestamp: Time.now.to_i,\n  properties: {\n    custom_field: 12\n  }\n)\n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import Client from \'lago-nodejs-client\'\nimport Event from \'lago-nodejs-client/batch_event\'\n\nlet client = new Client(\'__API_KEY__\')\n\nlet event = new BatchEvent({\n  transactionId: "__UNIQUE_TRANSACTION_ID__",\n  externalSubscriptionIds: ["id1", "id2"],\n  code: "code",\n  timestamp: 1650893379,\n  properties: {customField: "custom"}\n})\n\nawait client.createBatchEvent(event);\n')))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n    "transaction_id": "__UNIQUE_ID__",\n    "external_customer_id": "__YOUR_CUSTOMER_ID__",\n    "external_subscription_ids": ["id1", "id2"],\n    "code": "__EVENT_CODE__",\n    "timestamp": 1650893379,\n    "properties": {\n      "custom_field": 12\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"transaction_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID identifying the event. ",(0,r.kt)("br",null),"As it will be used for idempotency, it should be a unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_subscription_ids")),(0,r.kt)("td",{parentName:"tr",align:null},"Array ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Array of subscription IDs associated with the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the type of the event.",(0,r.kt)("br",null)," It should match the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of your active billable metrics, otherwise it will be ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"Default: event reception timestamp"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp of the event occurence in UTC.",(0,r.kt)("br",null)," If not provided, the API will set the event reception time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(b,{mdxType:"Variable"},(0,r.kt)("strong",{parentName:"td"},"Variable"))),(0,r.kt)("td",{parentName:"tr",align:null},"Extra data to use for the event aggregation.",(0,r.kt)("br",null),"When mandatory, it should contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"field_name")," configured at billable metric level as ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and any value as field ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".",(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Aggregation type:")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"COUNT"),": ",(0,r.kt)("strong",{parentName:"td"},"optional"),(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"MAX"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be an integer",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"SUM"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be an integer",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"COUNT UNIQUE"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value could have any datatype",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"RECURRING COUNT"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be the unique identifier of the persisted object.",(0,r.kt)("div",null))))))),(0,r.kt)("h3",{id:"recurring-count-aggregation"},"Recurring count aggregation"),(0,r.kt)("p",null,"Content of the event ",(0,r.kt)("inlineCode",{parentName:"p"},"properties")," field:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"field_name")," ",(0,r.kt)("strong",{parentName:"td"},"(*)")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(*)")," Key must be the ",(0,r.kt)("inlineCode",{parentName:"td"},"field_name")," configured at billable metric level and be the unique identifier of the object to persist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"operation_type")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Type of operation to perform on the persisted object. ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add"),": Add or unsuspend a persisted object.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"remove"),": Remove or suspend a persisted object.")))))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  The event has been stored in the system and will be aggregated to generate fees."),(0,r.kt)("p",null,"  Returns an empty response body.")),(0,r.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request",\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," json root is not present in the request body.")),(0,r.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized",\n}\n')),(0,r.kt)("p",null,"  Access to the API end point is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "missing_mandatory_param",\n  "error_details": [\n      "transaction_id"\n  ]\n}\n')),(0,r.kt)("p",null,"  Required arguments are missing."))))}h.isMDXComponent=!0}}]);