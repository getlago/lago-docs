"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9810],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(6010),o="tabItem_OmH5";function l(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7462),r=n(7294),o=n(2389),l=n(7392),i=n(7094),u=n(2466),p=n(6010),d="tabList_uSqn",s="tabItem_LplD";function c(e){var t,n,o,c=e.lazy,m=e.block,k=e.defaultValue,b=e.values,f=e.groupId,_=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===k?k:null!=(t=null!=k?k:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=y[0])?void 0:o.props.value;if(null!==v&&!h.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),T=N.tabGroupChoices,O=N.setTabGroupChoices,A=(0,r.useState)(v),C=A[0],x=A[1],E=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=T[f];null!=j&&j!==C&&h.some((function(e){return e.value===j}))&&x(j)}var I=function(e){var t=e.currentTarget,n=E.indexOf(t),a=h[n].value;a!==C&&(P(t),x(a),null!=f&&O(f,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;n=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;n=E[r]||E[E.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,p.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},_)},h.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return E.push(e)},onKeyDown:w,onFocus:I,onClick:I},o,{className:(0,p.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),c?(0,r.cloneElement)(y.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function m(e){var t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},2950:function(e,t,n){n.r(t),n.d(t,{Comment:function(){return f},Optional:function(){return b},PostEndpoint:function(){return _},Required:function(){return k},assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(9877),i=n(2360),u=["components"],p={sidebar_position:2},d="Apply an add-on to a customer",s={unversionedId:"api/applied_add_ons/apply-add-on",id:"api/applied_add_ons/apply-add-on",title:"Apply an add-on to a customer",description:"Route",source:"@site/docs/api/06_applied_add_ons/apply-add-on.mdx",sourceDirName:"api/06_applied_add_ons",slug:"/api/applied_add_ons/apply-add-on",permalink:"/docs/api/applied_add_ons/apply-add-on",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"The applied add-on object",permalink:"/docs/api/applied_add_ons/applied-add-on-object"},next:{title:"Invoice object",permalink:"/docs/api/invoices/invoice-object"}},c={},m=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Responses",id:"responses",level:2}],k=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},b=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},f=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{fontSize:"12px"}},t)},_=function(e){var t=e.children;e.color;return(0,o.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},y={toc:m,Required:k,Optional:b,Comment:f,PostEndpoint:_};function h(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apply-an-add-on-to-a-customer"},"Apply an add-on to a customer"),(0,o.kt)("h2",{id:"route"},"Route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/applied_add_ons\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/applied_add_ons" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "applied_add_on": {\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "add_on_code": "code",\n      "amount_cents": 123,\n      "amount_currency": "EUR"\n    }\n  }\'\n'))),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import AppliedAddOn\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\napplied_add_on = AppliedAddOn(\n  customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  add_on_code="code",\n  amount_cents=123,\n  amount_currency="EUR"\n)\n\nclient.applied_add_ons().create(applied_add_on)\n'))),(0,o.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.applied_add_ons.create(\n  customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  add_on_code: "code",\n  amount_cents: 123,\n  amount_currency: "EUR"\n)\n'))),(0,o.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import AppliedAddOn from \'lago-nodejs-client/applied_add_on\'\n\nlet client = new Client(\'__API_KEY__\')\n\nlet appliedAddOn = new AppliedAddOn(\n    "5eb02857-a71e-4ea2-bcf9-57d8885990ba",  // customerId\n    "code"  // addOnCode\n    123,  // amountCents\n    "EUR"  // amountCurrency\n)\nawait client.applyAddOn(appliedAddOn);\n')))),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "applied_add_on": {\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "add_on_code": "code",\n    "amount_cents": 123,\n    "amount_currency": "EUR"\n  }\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(k,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"add_on_code"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(k,{mdxType:"Required"},(0,o.kt)("strong",{parentName:"td"},"Required"))),(0,o.kt)("td",{parentName:"tr",align:null},"Code identifying the add-on.",(0,o.kt)("br",null),"It must match the ",(0,o.kt)("inlineCode",{parentName:"td"},"code")," property of the add-on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_cents"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(b,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_cents property of the add-on")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount_currency"),(0,o.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,o.kt)(b,{mdxType:"Optional"},(0,o.kt)("strong",{parentName:"td"},"Optional"))),(0,o.kt)("td",{parentName:"tr",align:null},"Currency of the amount to apply to the customer.",(0,o.kt)("br",null),"If defined, it overrides the amount_currency property of the add-on.",(0,o.kt)("br",null),"It must match the currency of the customer's plan.")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The add-on was assigned to the customer.",(0,o.kt)("p",null,"  Returns an ",(0,o.kt)("a",{parentName:"p",href:"./applied-add-on-object"},"applied add-on")," object.")),(0,o.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,o.kt)("p",null,"  The ",(0,o.kt)("inlineCode",{parentName:"p"},"applied_add_on")," json root is not present in the request body.")),(0,o.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,o.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,o.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,o.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message"\n}\n')),(0,o.kt)("p",null,"  ",(0,o.kt)("strong",{parentName:"p"},"Possible error messages:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"unable_to_find_customer"),": The customer id does not match an existing customer.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"add_on_does_not_exist"),": The add-on code does not match an existing add-on.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"no_active_subscription"),": The customer does not have an active subscription.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"currencies_does_not_match"),": Provided currency does not match the currency of the customer's plan.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Validation error on the record"),": The ",(0,o.kt)("inlineCode",{parentName:"p"},"error_details")," field contains the details of the errors:"),(0,o.kt)("table",{parentName:"li"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"field"),(0,o.kt)("th",{parentName:"tr",align:null},"error"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"amount_cents")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,o.kt)("td",{parentName:"tr",align:null},"Provided amount cents is invalid.",(0,o.kt)("br",null),"It must be a positive integer.")))))))))}h.isMDXComponent=!0}}]);