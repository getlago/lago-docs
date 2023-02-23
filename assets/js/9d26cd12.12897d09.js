"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9363],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),s=n(6550),u=n(1980),i=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,i]=b({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),h=(()=>{const e=u??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),g(e)}),[i,g,o]),tabValues:o}}var h=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==s&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},i.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function _(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3823:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>b,NotNullable:()=>m,Type:()=>d,assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const s={sidebar_position:1},u="Format & Signature",i={unversionedId:"api/webhooks/message-signature",id:"api/webhooks/message-signature",title:"Format & Signature",description:"Webhooks are HTTP notifications sent from Lago to your application.",source:"@site/docs/api/90_webhooks/message-signature.mdx",sourceDirName:"api/90_webhooks",slug:"/api/webhooks/message-signature",permalink:"/docs/api/webhooks/message-signature",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Webhooks",permalink:"/docs/category/webhooks"},next:{title:"Messages",permalink:"/docs/api/webhooks/messages"}},c={},p=[{value:"Message format",id:"message-format",level:2},{value:"Signature",id:"signature",level:2},{value:"1. Retrieve the public key",id:"1-retrieve-the-public-key",level:3},{value:"2. Decode and validate the signature",id:"2-decode-and-validate-the-signature",level:3}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},g={toc:p,Type:d,NotNullable:m,Comment:b},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"format--signature"},"Format & Signature"),(0,r.kt)("p",null,"Webhooks are HTTP notifications sent from Lago to your application.\nThe messages are sent as a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the URL defined in the settings of your Lago workspace."),(0,r.kt)("h2",{id:"message-format"},"Message format"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"POST __WEBHOOK_URL__")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "webhook_type": "__TYPE__",\n  "object_type": "OBJECT_TYPE",\n  "__OBJECT__": {}\n}\n')),(0,r.kt)("h2",{id:"signature"},"Signature"),(0,r.kt)("p",null,"Allong with the payload the message contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Lago-Signature")," HTTP header."),(0,r.kt)("p",null,"It is used to ensure the message is Coming from Lago and that the message has not been altered."),(0,r.kt)("p",null,"To verify the signature, you must decode the signature and compare the result with the body of the webhook."),(0,r.kt)("h3",{id:"1-retrieve-the-public-key"},"1. Retrieve the public key"),(0,r.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from lago_python_client import Client\n\nclient = Client(api_key='__YOUR_API_KEY__')\nwebhooks_public_key = client.webhooks().public_key()\n"))),(0,r.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import Client from 'lago-nodejs-client'\n\nlet client = new Client('__YOUR_API_KEY__')\nlet webhooksPublicKey = client.webhookPublicKey()\n"))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'net/http'\n\napi_key = \"__YOUR_API_KEY__\"\nuri = URI('https://api.getlago.com/api/v1/webhooks/public_key')\n\nhttp = Net::HTTP.new(uri.host, uri.port)\nhttp.use_ssl = true\n\nresponse = http.send_request(\n  'GET',\n  uri.request_uri,\n  '',\n  { 'Authorization' => \"Bearer #{api_key}\" }\n)\n\nwebhooks_public_key = response.body\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You should persist the public key on you side to prevent querying it for each webhook\n")),(0,r.kt)("h3",{id:"2-decode-and-validate-the-signature"},"2. Decode and validate the signature"),(0,r.kt)(o.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import jwt\n\ndecoded_signature = jwt.decode(\n  request.headers.get('X-Lago-Signature'),\n  webhooks_public_key,\n  algorithms=['RS256'],\n  issuer=\"https://api.getlago.com\"\n)\n\ndecoded_signature['data'] == request.body\n"))),(0,r.kt)(l.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import jwt from 'jsonwebtoken';\n\nlet token = request.header('X-Lago-Signature')\n\njwt.verify(token, webhooksPublicKey, {\n  algorithms: ['RS256'],\n  issuer: 'https://api.getlago.com' },\n  function (err, payload) {\n    payload === request.body\n});\n"))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'openssl'\nrequire 'jwt'\n\ndecoded_signature = JWT.decode(\n  request.headers['X-Lago-Signature'],\n  OpenSSL::PKey::RSA.new(Base64.decode64(webhooks_public_key)),\n  true,\n  {\n    algorithm: 'RS256',\n    iss: \"https://api.getlago.com\",\n    verify_iss: true,\n  },\n).first\n\ndecoded_signature['data'] == request.body\n")))))}f.isMDXComponent=!0}}]);