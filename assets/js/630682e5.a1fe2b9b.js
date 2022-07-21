"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6888],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),p=n(7094),u=n(2466);const s="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,n;const{lazy:i,block:c,defaultValue:m,values:k,groupId:g,className:b}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=k?k:h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(y,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)?t:h[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:v}=(0,p.U)(),[T,O]=(0,l.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=_[g];null!=e&&e!==T&&y.some((t=>t.value===e))&&O(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=y[n].value;a!==T&&(x(t),O(a),null!=g&&v(g,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var l;const t=C.indexOf(e.currentTarget)-1;n=null!=(l=C[t])?l:C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":c},b)},y.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:w,onFocus:P,onClick:P},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}},8059:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,Optional:()=>m,PostEndpoint:()=>g,Required:()=>c,assets:()=>s,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:2},p="Update plan",u={unversionedId:"api/plans/update-plan",id:"api/plans/update-plan",title:"Update plan",description:"Route",source:"@site/docs/api/03_plans/update-plan.mdx",sourceDirName:"api/03_plans",slug:"/api/plans/update-plan",permalink:"/docs/api/plans/update-plan",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Create plan",permalink:"/docs/api/plans/create-plan"},next:{title:"Destroy plan",permalink:"/docs/api/plans/destroy-plan"}},s={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Plan attributes",id:"plan-attributes",level:3},{value:"Charge attributes - Charges cannot be updated if the plan is linked to a subscription",id:"charge-attributes---charges-cannot-be-updated-if-the-plan-is-linked-to-a-subscription",level:3},{value:"Responses",id:"responses",level:2}],c=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},b={toc:d,Required:c,Optional:m,Comment:k,PostEndpoint:g};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"update-plan"},"Update plan"),(0,l.kt)("h2",{id:"route"},"Route"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="PUT"',title:'"PUT"'},"/api/v1/plans/:code\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request PUT "$LAGO_URL/api/v1/plans/:code" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "plan": {\n    "name": "test1",\n    "code": "plan_code",\n    "interval": "weekly",\n    "description": "hello_this_is_desc",\n    "amount_cents": 900,\n    "amount_currency": "EUR",\n    "trial_period": 3.0,\n    "pay_in_advance": true,\n    "bill_charges_monthly": null,\n    "charges": [\n      {\n        "id": "a6947936-628f-4945-8857-db6858ee7712",\n        "billable_metric_id": "a6947936-628f-4945-8857-db6858ee7941",\n        "amount_currency": "EUR",\n        "charge_model": "standard",\n        "properties": {\n          "amount": "0.22"\n        }\n      }\n    ]\n  }\n}\'\n'))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\nfrom lago_python_client.models import Plan, Charges, Charge\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\ncharge = Charge(\n  billable_metric_id='id',\n  charge_model='standard',\n  amount_currency='EUR',\n  properties={\n    'amount': '0.22'\n  }\n)\ncharges = Charges(__root__=[charge])\n\nplan = Plan(\n  name='name',\n  code='code_first',\n  amount_cents=1000,\n  amount_currency='EUR',\n  description='desc',\n  interval='weekly',\n  pay_in_advance=True,\n  charges=charges\n)\nclient.plans().update(plan)\n"))),(0,l.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nplan = {\n  name: 'plan name',\n  code: 'code',\n  interval: 'monthly',\n  description: 'description',\n  amount_cents: 100,\n  amount_currency: 'EUR',\n  pay_in_advance: false,\n  charges: [\n    {\n      billable_metric_id: 'id',\n      amount_currency: 'EUR',\n      charge_model: 'standard',\n      properties: {\n        amount: 0.22\n      }\n    }\n  ]\n}\n\nclient.plans.update(plan)\n"))),(0,l.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import Plan from 'lago-nodejs-client/plan'\nimport Charge from 'lago-nodejs-client/charge'\n\nlet client = new Client('__API_KEY__')\n\nlet charge = new Charge({billableMetricId: 'billable_metric_id', amountCurrency: 'EUR', chargeModel: 'standard'})\nlet charges = [charge]\nlet plan = new Plan({name: 'name1', code: 'code1', interval: 'weekly', amountCents: 1000,\n  amountCurrency: 'USD', payInAdvance: true, trialPeriod: 2, description: 'decs',\n  billChargesMonthly: false, charges: charges\n})\nawait client.updatePlan(plan);\n")))),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "plan": {\n    "name": "test1",\n    "code": "plan_code",\n    "interval": "weekly",\n    "description": "hello_this_is_desc",\n    "amount_cents": 900,\n    "amount_currency": "EUR",\n    "trial_period": 3.0,\n    "pay_in_advance": true,\n    "bill_charges_monthly": null,\n    "charges": [\n      {\n        "id": "a6947936-628f-4945-8857-db6858ee7712",\n        "billable_metric_id": "a6947936-628f-4945-8857-db6858ee7941",\n        "amount_currency": "EUR",\n        "charge_model": "standard",\n        "properties": {\n          "amount": "0.22"\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"plan-attributes"},"Plan attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Plan name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Code identifying the Plan",(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Interval used for subscription billing.",(0,l.kt)("br",null),"It can be ",(0,l.kt)("inlineCode",{parentName:"td"},"yearly"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"monthly")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"weekly"),(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the plan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Amount of the plan",(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the amount",(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"trial_period"),(0,l.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Number of free days",(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pay_in_advance"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Field specifying if payment in advance or in arrear will be used",(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bill_charges_monthly"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Monthly billing will be applied on yearly plan if this field is set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),(0,l.kt)("br",null),"Cannot be updated if the plan is linked to a subscription")))),(0,l.kt)("h3",{id:"charge-attributes---charges-cannot-be-updated-if-the-plan-is-linked-to-a-subscription"},"Charge attributes - Charges cannot be updated if the plan is linked to a subscription"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Charge unique id in Lago application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"billable_metric_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Billable metric id in lago application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Currency used fo this charge")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"charge_model"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Charge model used in event calculations.",(0,l.kt)("br",null),"It can be ",(0,l.kt)("inlineCode",{parentName:"td"},"standard"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"graduated"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"package")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"percentage"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"JSON ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Extra data to use for the event calculations.",(0,l.kt)("br",null))))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The plan was updated",(0,l.kt)("p",null,"  Returns a ",(0,l.kt)("a",{parentName:"p",href:"./plan-object"},"plan")," object.")),(0,l.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"plan")," json root is not present in the request body.")),(0,l.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,l.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,l.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,l.kt)(i.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"plan")," was not found by the code or the billable metric was not found by the id.")),(0,l.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible error messages:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Validation error on the record"))))))}h.isMDXComponent=!0}}]);