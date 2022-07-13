"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),i=n(2389),o=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:d,values:b,groupId:g,className:k}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=b?b:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(_,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===d?d:null!=(t=null!=d?d:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==h&&!_.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+_.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,l.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=g){const e=v[g];null!=e&&e!==T&&_.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,n=x.indexOf(t),a=_[n].value;a!==T&&(P(t),O(a),null!=g&&N(g,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},_.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:w,onFocus:C,onClick:C},i,{className:(0,r.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,l.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,i.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},2475:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>b,Optional:()=>d,PostEndpoint:()=>g,Required:()=>m,assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),l=(n(7294),n(3905)),r=n(5488),i=n(5162);const o={sidebar_position:2},s="Create Billable metric",u={unversionedId:"api/billable_metrics/create-billable-metric",id:"api/billable_metrics/create-billable-metric",title:"Create Billable metric",description:"Route",source:"@site/docs/api/12_billable_metrics/create-billable-metric.mdx",sourceDirName:"api/12_billable_metrics",slug:"/api/billable_metrics/create-billable-metric",permalink:"/docs/api/billable_metrics/create-billable-metric",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"The billable metric object",permalink:"/docs/api/billable_metrics/billable-metric-object"},next:{title:"Update Billable metric",permalink:"/docs/api/billable_metrics/update-billable-metric"}},c={},p=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],m=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},d=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,l.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},k={toc:p,Required:m,Optional:d,Comment:b,PostEndpoint:g};function y(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-billable-metric"},"Create Billable metric"),(0,l.kt)("h2",{id:"route"},"Route"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/billable_metrics\n")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(r.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/billable_metrics" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "billable_metric": {\n      "name": "bm_name",\n      "code": "bm_code",\n      "description": "description",\n      "aggregation_type": "sum_agg",\n      "field_name": "amount_sum"\n    }\n  }\'\n'))),(0,l.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\nfrom lago_python_client.models import BillableMetric\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nbillable_metric = BillableMetric(\n  name='name',\n  code='code_first',\n  description='desc',\n  aggregation_type='sum_agg',\n  field_name='amount_sum'\n)\nclient.billable_metrics().create(billable_metric)\n"))),(0,l.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.billable_metrics.create({\n    name: 'BM1',\n    code: 'code_bm',\n    description: 'description',\n    aggregation_type: 'sum_agg',\n    field_name: 'amount_sum',\n})\n"))),(0,l.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import BillableMetric from 'lago-nodejs-client/billable_metric'\n\nlet client = new Client('__API_KEY__')\n\nlet billableMetric = new BillableMetric({name: 'name1', code: 'code1', aggregationType: 'sum_agg',\n  fieldName: 'field_name'\n})\nawait client.createBillableMetric(billableMetric);\n")))),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "billable_metric": {\n    "name": "bm_name",\n    "code": "bm_code",\n    "description": "description",\n    "aggregation_type": "sum_agg",\n    "field_name": "amount_sum"\n  }\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Required"},(0,l.kt)("strong",{parentName:"td"},"Required"))),(0,l.kt)("td",{parentName:"tr",align:null},"Billable metric name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"code"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Required"},(0,l.kt)("strong",{parentName:"td"},"Required"))),(0,l.kt)("td",{parentName:"tr",align:null},"Code identifying the billable metric")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"description"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(d,{mdxType:"Optional"},(0,l.kt)("strong",{parentName:"td"},"Optional"))),(0,l.kt)("td",{parentName:"tr",align:null},"Description of the billable metric")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aggregation_type"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Required"},(0,l.kt)("strong",{parentName:"td"},"Required"))),(0,l.kt)("td",{parentName:"tr",align:null},"Aggregation type that is used in event calculations.",(0,l.kt)("br",null),"It can be ",(0,l.kt)("inlineCode",{parentName:"td"},"count_agg"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"sum_agg"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"max_agg")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"unique_count_agg"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,l.kt)(m,{mdxType:"Required"},(0,l.kt)("strong",{parentName:"td"},"Required (optional only for ",(0,l.kt)("inlineCode",{parentName:"strong"},"count_agg")," aggregation type)"))),(0,l.kt)("td",{parentName:"tr",align:null},"Field name used in events.")))),(0,l.kt)("h2",{id:"responses"},"Responses"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The billable metric was created",(0,l.kt)("p",null,"  Returns a ",(0,l.kt)("a",{parentName:"p",href:"./billable-metric-object"},"billable metric")," object.")),(0,l.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,l.kt)("p",null,"  The ",(0,l.kt)("inlineCode",{parentName:"p"},"billable_metric")," json root is not present in the request body.")),(0,l.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,l.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,l.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,l.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Possible error messages:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Validation error on the record"))))))}y.isMDXComponent=!0}}]);