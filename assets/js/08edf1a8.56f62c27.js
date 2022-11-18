"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(7294),o=t(6010);const a="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),o=t(7294),a=t(6010),i=t(2389),l=t(7392),s=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t;const{lazy:i,block:d,defaultValue:m,values:g,groupId:b,className:v}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),y=(0,l.l)(f,((e,n)=>e.value===n.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(n=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?n:h[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[O,_]=(0,o.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,u.o5)();if(null!=b){const e=w[b];null!=e&&e!==O&&f.some((n=>n.value===e))&&_(e)}const x=e=>{const n=e.currentTarget,t=E.indexOf(n),r=f[t].value;r!==O&&(A(n),_(r),null!=b&&N(b,String(r)))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{var r;const n=E.indexOf(e.currentTarget)+1;t=null!=(r=E[n])?r:E[0];break}case"ArrowLeft":{var o;const n=E.indexOf(e.currentTarget)-1;t=null!=(o=E[n])?o:E[E.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},v)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>E.push(e),onKeyDown:T,onFocus:x,onClick:x},i,{className:(0,a.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,o.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function m(e){const n=(0,i.Z)();return o.createElement(d,(0,r.Z)({key:String(n)},e))}},9136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));t(5488),t(5162);const a={sidebar_position:4},i="Dimensions",l={unversionedId:"guide/billable-metrics/dimensions",id:"guide/billable-metrics/dimensions",title:"Dimensions",description:"When setting up your pricing, you may want to group events according to their property. To do so, you can create dimensions for your billable metric.",source:"@site/docs/guide/04_billable-metrics/dimensions.md",sourceDirName:"guide/04_billable-metrics",slug:"/guide/billable-metrics/dimensions",permalink:"/docs/guide/billable-metrics/dimensions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Aggregation examples",permalink:"/docs/guide/billable-metrics/aggregation-examples"},next:{title:"Overview",permalink:"/docs/guide/plans/overview"}},s={},u=[{value:"Grouping with a single key",id:"grouping-with-a-single-key",level:2},{value:"Grouping with two keys",id:"grouping-with-two-keys",level:2}],c={toc:u};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dimensions"},"Dimensions"),(0,o.kt)("p",null,"When setting up your pricing, you may want to group events according to their property. To do so, you can create dimensions for your billable metric."),(0,o.kt)("h2",{id:"grouping-with-a-single-key"},"Grouping with a single key"),(0,o.kt)("p",null,"Consider the following example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Your company provides DevOps services and you want to charge your customers for compute capacity by the hour."),(0,o.kt)("p",{parentName:"blockquote"},"In your Lago account, you create a ",(0,o.kt)("inlineCode",{parentName:"p"},"compute")," billable metric that calculates the total number of hours (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"SUM(properties.hours)"),")."),(0,o.kt)("p",{parentName:"blockquote"},"As your customers can choose from different cloud providers, you need to group usage records (i.e. events) according to the provider."),(0,o.kt)("p",{parentName:"blockquote"},"On the configuration page of your billable metric, you can define ",(0,o.kt)("inlineCode",{parentName:"p"},'"key": "provider"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"value": ["AWS","Google","Azure"]')," to create the corresponding dimension (see snippet below).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON snippet for one dimension"',title:'"JSON',snippet:!0,for:!0,one:!0,'dimension"':!0},'{\n    "key": "provider",\n    "values": ["AWS", "Google", "Azure"]\n}\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example of a group with one dimension",src:t(8371).Z,width:"1648",height:"1112"})),(0,o.kt)("p",null,"Below is an example of an event for the billable metric described above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event including a group value"',title:'"Event',including:!0,a:!0,group:!0,'value"':!0},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/events" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n      "event": {\n          "transaction_id": "event_001",\n          "external_customer_id": "customer_1234",\n          "code": "compute",\n          "timestamp": 1668461043,\n          "properties": {\n            "hours": 0.07,\n            "provider": "Azure"\n          }\n      }\n  }\'\n')),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Values are case-sensitive. If you don't use the exact value when pushing events, they will not be taken into account. Following our example: the expected value is ",(0,o.kt)("inlineCode",{parentName:"p"},'"Azure"')," and ",(0,o.kt)("inlineCode",{parentName:"p"},'"azure"')," is an invalid value.")),(0,o.kt)("h2",{id:"grouping-with-two-keys"},"Grouping with two keys"),(0,o.kt)("p",null,"It is also possible to define two levels for grouping events. Following our previous example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"In addition to their cloud provider, your customers can select their region."),(0,o.kt)("p",{parentName:"blockquote"},"Therefore, you can define ",(0,o.kt)("inlineCode",{parentName:"p"},'"key": "region"')," to add a second dimension (see snippet below)."),(0,o.kt)("p",{parentName:"blockquote"},"When creating a plan, you will then be able to add a ",(0,o.kt)("a",{parentName:"p",href:"../plans/charges"},"charge")," for each region available for each provider.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON snippet for two dimensions"',title:'"JSON',snippet:!0,for:!0,two:!0,'dimensions"':!0},'{\n  "key": "provider",\n  "values": [\n    {\n      "name": "AWS",\n      "key": "region",\n      "values": ["Europe", "Africa", "Asia"]\n    },\n    {\n      "name": "Google",\n      "key": "region",\n      "values": ["Europe", "North America"]\n    },\n    {\n      "name": "Azure",\n      "key": "region",\n      "values": ["North America", "Asia"]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"See below a screenshot of the corresponding charge when added to a plan. The same breakdown will be shown on the invoices sent to the customers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Example of a charge with two dimensions",src:t(3766).Z,width:"1322",height:"1458"})),(0,o.kt)("p",null,"Below is an example of an event for the billable metric described above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event including two group values"',title:'"Event',including:!0,two:!0,group:!0,'values"':!0},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/events" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n      "event": {\n          "transaction_id": "event_002",\n          "external_customer_id": "customer_1234",\n          "code": "compute",\n          "timestamp": 1668461044,\n          "properties": {\n            "hours": 0.13,\n            "provider": "AWS",\n            "region": "Europe"\n          }\n      }\n  }\'\n')),(0,o.kt)("p",null,"You can also create billable metrics with dimensions ",(0,o.kt)("a",{parentName:"p",href:"../../api/billable_metrics/create-billable-metric"},"via the API"),"."))}p.isMDXComponent=!0},3766:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dimensions-charges-68fc250c4d337e8770fe8e8f0146fcdd.png"},8371:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/dimensions-ae7422204710e5425289d69b7403a43c.png"}}]);