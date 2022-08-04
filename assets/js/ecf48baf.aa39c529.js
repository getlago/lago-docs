"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[5049],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),u=n(7094),p=n(2466);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:c,values:g,groupId:k,className:N}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===c?c:null!=(t=null!=c?c:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:_,setTabGroupChoices:v}=(0,u.U)(),[T,C]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=k){const e=_[k];null!=e&&e!==T&&y.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==T&&(x(t),C(a),null!=k&&v(k,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},N)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:S,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},1616:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>g,Optional:()=>c,PostEndpoint:()=>k,Required:()=>d,assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_position:2},u="Create or update a customer",p={unversionedId:"api/customers/create-update-customer",id:"api/customers/create-update-customer",title:"Create or update a customer",description:"Route",source:"@site/docs/api/04_customers/create-update-customer.mdx",sourceDirName:"api/04_customers",slug:"/api/customers/create-update-customer",permalink:"/docs/api/customers/create-update-customer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Customer object",permalink:"/docs/api/customers/customer-object"},next:{title:"Subscription object",permalink:"/docs/api/subscriptions/subscription-object"}},s={},m=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Billing configuration",id:"billing-configuration",level:3},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},N={toc:m,Required:d,Optional:c,Comment:g,PostEndpoint:k};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-or-update-a-customer"},"Create or update a customer"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/customers\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/customers" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "customer": {\n      "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": null,\n      "city": "Woodland Hills",\n      "country": "US",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "url": "http://hooli.com",\n      "vat_rate": 12.5,\n      "zipcode": "91364",\n      "billing_configuration": {\n        "payment_provider": "stripe",\n        "provider_customer_id": "cus_12345",\n        "sync": true\n      }\n    }\n  }\'\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import Customer, BillingConfiguration\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\ncustomer = Customer(\n  customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  address_line1="5230 Penfield Ave",\n  address_line2=None,\n  city="Woodland Hills",\n  country="US",\n  email="test@example.com",\n  legal_name="Coleman-Blair",\n  legal_number="49-008-2965",\n  logo_url="http://hooli.com/logo.png",\n  name="Test Name",\n  phone="1-171-883-3711 x245",\n  state="CA",\n  url="http://hooli.com",\n  vat_rate=12.5,\n  zipcode="91364",\n  billing_configuration=BillingConfiguration(\n    payment_provider="stripe",\n    provider_customer_id="cus_12345",\n    sync=true\n  )\n)\n\nclient.customers().create(customer)\n'))),(0,r.kt)(o.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import Client from \'lago-nodejs-client\'\nimport Customer from \'lago-nodejs-client/customer\'\nimport BillingConfiguration from \'lago-nodejs-client/billing_configuration\'\n\nlet client = new Client(\'__API_KEY__\')\n\nlet customer = new Customer(\n  "5eb02857-a71e-4ea2-bcf9-57d8885990ba",  // customerId\n  None,  // addressLine1\n  None,  // addressLine2\n  None,  // city\n  None,  // country\n  "test@example.com",  // email\n  None,  // legalName\n  None,  // legalNumber\n  None,  // lagoUrl\n  "test name",  // name\n  None,  // phone\n  None,  // state\n  None,  // url\n  None,  // vatRate\n  None,  // zipcode\n  new BillingConfiguration(\n    "stripe",\n    "cus_12345",\n    true\n  )\n)\nawait client.createCustomer(customer);\n'))),(0,r.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.customers.create(\n  customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  address_line1: "5230 Penfield Ave",\n  address_line2: nil,\n  city: "Woodland Hills",\n  country: "US",\n  email: "dinesh@piedpiper.test",\n  legal_name: "Coleman-Blair",\n  legal_number: "49-008-2965",\n  logo_url: "http://hooli.com/logo.png",\n  name: "Gavin Belson",\n  phone: "1-171-883-3711 x245",\n  state: "CA",\n  url: "http://hooli.com",\n  vat_rate: 12.5,\n  zipcode: "91364",\n  billing_configuration: {\n    payment_provider: "stripe",\n    provider_customer_id: "cus_12345",\n    sync: true\n  }\n)\n'))),(0,r.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client/v1"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n    \n    customerInput := &lago.CustomerInput{\n      CustomerID:   "__YOUR_CUSTOMER_ID__",\n            Name:         "Customer",\n            Email:        "customer@getlago.com",\n      AddressLine1: "Address Line 1",\n      AddressLine2: "Address Line 2",\n      City:         "Paris",\n      Country:      "France",\n      State:        "Paris",\n      Zipcode:      "75001",\n      LegalName:    "GetLago",\n      LegalNumber:  "123456",\n      Phone:        "+330100000000",\n      URL:          "https://getlago.com",\n      VatRate:      20.0,\n      BillingConfiguration: &BillingConfigurationInput{\n        PaymentProvider: lago.PaymentProviderStripe,\n        ProviderCustomerID: "__STRIPE_CUSTOMER_ID__",\n      }\n    }\n\n    customer, err := lagoClient.Customer().Create(customerInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // You can use the same input to update the customer\n    customer, err := lagoClient.Customer().Update(customerInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n      \n    // customer is *lago.Customer\n    fmt.Println(customer)\n  }\n')))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "url": "http://hooli.com",\n    "vat_rate": 12.5,\n    "zipcode": "91364",\n    "billing_configuration": {\n      "payment_provider": "stripe",\n      "provider_customer_id": "cus_12345",\n      "sync": true\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the customer already exists, the call will work as an update")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(d,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line1"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"First line of the billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line2"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"City of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 3166 alpha 2 Country code."))),(0,r.kt)("td",{parentName:"tr",align:null},"Country code of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal company name of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_number"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal company number of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logo_url"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Logo URL of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(d,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Full name of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"State of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom URL of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom VAT applied to the customer.",(0,r.kt)("br",null)," It will override the one defined at organization level")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipcode"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Zipcode of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Object ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider specific configuration used to bill the customer")))),(0,r.kt)("h3",{id:"billing-configuration"},"Billing configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_provider"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider used to bill the customer.",(0,r.kt)("br",null),"Only accepted value: ",(0,r.kt)("inlineCode",{parentName:"td"},"stripe"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer ID on the payment provider.",(0,r.kt)("br",null),"If not provided, Lago can optionally create the provider customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true is you want to create the provider customer synchronously with the customer creation.",(0,r.kt)("br",null),"Apply only when provider_customer_id is null and payment provider is configured to create customer.",(0,r.kt)("br",null),"Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The customer was succesfuly created or updated.",(0,r.kt)("p",null,"  Returns a ",(0,r.kt)("a",{parentName:"p",href:"./customer-object"},"customer")," object.")),(0,r.kt)(o.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"customer")," json root is not present in the request body.")),(0,r.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(o.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "message",\n  "error_details": {\n    "field": ["message"]\n  }\n}\n')),(0,r.kt)("p",null,"  Possible error messages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Validation error on the record"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"error_details")," field contains the details of the errors"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},"customer_id is missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_a_valid_country_code")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided country value is not an ISO 3166 country code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vat_rate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided VAT rate is invalid.",(0,r.kt)("br",null),"It must be a positive integer or floating number between 0 and 100.")))))))))}b.isMDXComponent=!0}}]);