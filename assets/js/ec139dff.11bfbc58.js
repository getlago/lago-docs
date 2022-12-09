"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:v,groupId:b,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=v?v:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:T}=(0,s.U)(),[N,O]=(0,r.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=b){const e=_[b];null!=e&&e!==N&&y.some((t=>t.value===e))&&O(e)}const I=e=>{const t=e.currentTarget,n=E.indexOf(t),a=y[n].value;a!==N&&(w(t),O(a),null!=b&&T(b,String(a)))},P=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=E.indexOf(e.currentTarget)+1;n=null!=(a=E[t])?a:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;n=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},568:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>v,Optional:()=>m,PostEndpoint:()=>b,Required:()=>d,assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:7},s="Get a specific invoice",c={unversionedId:"api/invoices/get-invoice",id:"api/invoices/get-invoice",title:"Get a specific invoice",description:"Route",source:"@site/docs/api/09_invoices/get-invoice.mdx",sourceDirName:"api/09_invoices",slug:"/api/invoices/get-invoice",permalink:"/docs/api/invoices/get-invoice",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"api",previous:{title:"Update payment status",permalink:"/docs/api/invoices/update-payment-status"},next:{title:"Get all invoices",permalink:"/docs/api/invoices/get-all-invoices"}},u={},p=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},v=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},f={toc:p,Required:d,Optional:m,Comment:v,PostEndpoint:b};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-a-specific-invoice"},"Get a specific invoice"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="GET"',title:'"GET"'},"/api/v1/invoices/:id\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request GET "$LAGO_URL/api/v1/invoices/:id" \\\n  --header "Authorization: Bearer $API_KEY"\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\n\nclient.invoices().find('id')\n"))),(0,r.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'lago-ruby-client'\n\nclient = Lago::Api::Client.new({api_key: '__YOUR_API_KEY__'})\n\nclient.invoices.get('id')\n"))),(0,r.kt)(o.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let client = new Client('__API_KEY__')\n\nawait client.findInvoice('id');\n"))),(0,r.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    invoice, err := lagoClient.Invoice().Get("__YOUR_INVOICE_ID__")\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // invoice is *lago.Invoice\n    fmt.Println(invoice)\n  }\n')))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The invoice was successfully found",(0,r.kt)("p",null,"  Returns an ",(0,r.kt)("a",{parentName:"p",href:"./invoice-object"},"invoice")," object.")),(0,r.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(o.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "invoice_not_found"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"invoice")," was not found."))))}g.isMDXComponent=!0}}]);