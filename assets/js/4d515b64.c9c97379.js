"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,g=d["".concat(u,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),l=n(6010),o=n(2466),i=n(6550),u=n(1980),p=n(7392),s=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,p]=g({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),N=(()=>{const e=u??d;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,l]),tabValues:l}}var N=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=s.indexOf(t),a=p[n].value;a!==i&&(d(t),u(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function _(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function h(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(_,(0,a.Z)({},e,t)))}function v(e){const t=(0,N.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},7355:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>g,Optional:()=>c,PostEndpoint:()=>k,Required:()=>m,assets:()=>s,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),o=n(5162);const i={sidebar_position:2},u="Create a customer",p={unversionedId:"api/customers/create-customer",id:"api/customers/create-customer",title:"Create a customer",description:"Route",source:"@site/docs/api/04_customers/create-customer.mdx",sourceDirName:"api/04_customers",slug:"/api/customers/create-customer",permalink:"/docs/api/customers/create-customer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Customer object",permalink:"/docs/api/customers/customer-object"},next:{title:"Update a customer",permalink:"/docs/api/customers/update-customer"}},s={},d=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Billing configuration",id:"billing-configuration",level:3},{value:"Metadata",id:"metadata",level:3},{value:"Responses",id:"responses",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},N={toc:d,Required:m,Optional:c,Comment:g,PostEndpoint:k},y="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-customer"},"Create a customer"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/customers\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/customers" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "customer": {\n      "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "address_line1": "5230 Penfield Ave",\n      "address_line2": "",\n      "city": "Woodland Hills",\n      "country": "US",\n      "currency": "EUR",\n      "email": "dinesh@piedpiper.test",\n      "legal_name": "Coleman-Blair",\n      "legal_number": "49-008-2965",\n      "logo_url": "http://hooli.com/logo.png",\n      "name": "Gavin Belson",\n      "phone": "1-171-883-3711 x245",\n      "state": "CA",\n      "timezone": "Europe/Paris",\n      "url": "http://hooli.com",\n      "zipcode": "91364",\n      "billing_configuration": {\n        "invoice_grace_period": 3,\n        "payment_provider": "stripe",\n        "provider_customer_id": "cus_12345",\n        "sync": true,\n        "sync_with_provider": true,\n        "document_locale": "fr",\n        "vat_rate": 12.5\n      },\n      "metadata": [\n        {\n          "key": "Name",\n          "value": "John",\n          "display_in_invoice": true\n        }\n      ]\n    }\n  }\'\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client.client import Client\nfrom lago_python_client.models import Customer, CustomerBillingConfiguration\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nmetadata_object = Metadata(\n  display_in_invoice=True,\n  key=\'key\',\n  value=\'value\'\n)\n\ncustomer = Customer(\n  external_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  address_line1="5230 Penfield Ave",\n  address_line2=None,\n  city="Woodland Hills",\n  currency="EUR",\n  country="US",\n  email="test@example.com",\n  legal_name="Coleman-Blair",\n  legal_number="49-008-2965",\n  logo_url="http://hooli.com/logo.png",\n  name="Test Name",\n  phone="1-171-883-3711 x245",\n  state="CA",\n  timezone="Europe/Paris",\n  url="http://hooli.com",\n  zipcode="91364",\n  billing_configuration=CustomerBillingConfiguration(\n    invoice_grace_period=3,\n    payment_provider="stripe",\n    provider_customer_id="cus_12345",\n    sync=true,\n    sync_with_provider=true,\n    document_locale="fr",\n    vat_rate=12.5\n  ),\n  metadata=MetadataList(__root__=[metadata_object])\n)\n\nclient.customers.create(customer)\n'))),(0,r.kt)(o.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { BillingConfigurationCustomer } from "lago-javascript-client";\n\nconst customerObject = {\n  external_id: "1234-5678-9098-7654-3210",\n  address_line1: "5230 Penfield Ave",\n  city: "Woodland Hills",\n  currency: "EUR",\n  country: "US",\n  email: "test@example.com",\n  legal_name: "Coleman-Blair",\n  legal_number: "49-008-2965",\n  logo_url: "http://hooli.com/logo.png",\n  name: "Test Name",\n  phone: "1-171-883-3711 x245",\n  state: "CA",\n  timezone: "Europe/Paris",\n  url: "http://hooli.com",\n  zipcode: "91364",\n  billing_configuration: {\n    invoice_grace_period: 3,\n    payment_provider:\n      "stripe" as BillingConfigurationCustomer["payment_provider"],\n    provider_customer_id: "cus_12345",\n    sync: true,\n    sync_with_provider: true,\n    document_locale: "fr",\n    vat_rate: 12.5,\n  },\n  metadata: [\n    {\n      lago_id: "1234",\n      key: "foo",\n      value: "bar",\n      display_in_invoice: true,\n    },\n  ],\n};\n\nawait client.customers.createCustomer({ customer: customerObject });\n'))),(0,r.kt)(o.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.customers.create(\n  external_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  address_line1: "5230 Penfield Ave",\n  address_line2: nil,\n  city: "Woodland Hills",\n  country: "US",\n  currency: "EUR",\n  email: "dinesh@piedpiper.test",\n  legal_name: "Coleman-Blair",\n  legal_number: "49-008-2965",\n  logo_url: "http://hooli.com/logo.png",\n  name: "Gavin Belson",\n  phone: "1-171-883-3711 x245",\n  state: "CA",\n  timezone: "Europe/Paris",\n  url: "http://hooli.com",\n  zipcode: "91364",\n  billing_configuration: {\n    invoice_grace_period: 3,\n    payment_provider: "stripe",\n    provider_customer_id: "cus_12345",\n    sync: true,\n    sync_with_provider: true,\n    document_locale: "fr",\n    vat_rate: 12.5\n  },\n  metadata: [\n    {\n      key: \'key\',\n      value: \'value\',\n      display_in_invoice: true\n    }\n  ]\n)\n'))),(0,r.kt)(o.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    customerInput := &lago.CustomerInput{\n      ExternalID:   "__YOUR_CUSTOMER_ID__",\n      Name:         "Customer",\n      Email:        "customer@getlago.com",\n      AddressLine1: "Address Line 1",\n      AddressLine2: "Address Line 2",\n      City:         "Paris",\n      Country:      "France",\n      Currency:     "EUR",\n      State:        "Paris",\n      Zipcode:      "75001",\n      LegalName:    "GetLago",\n      LegalNumber:  "123456",\n      Phone:        "+330100000000",\n      Timezone:     "Europe/Paris",\n      URL:          "https://getlago.com",\n      BillingConfiguration: &CustomerBillingConfigurationInput{\n        InvoiceGracePeriod: 3,\n        PaymentProvider: lago.PaymentProviderStripe,\n        ProviderCustomerID: "__STRIPE_CUSTOMER_ID__",\n        SyncWithProvider: true,\n        DocumentLocale: "fr",\n        VatRate: 20.0\n      },\n      Metadata: [\n        &CustomerMetadataInput{\n          Key: "Key",\n          Value: "Value",\n          DisplayInInvoice: true\n        }\n      ]\n    }\n\n    customer, err := lagoClient.Customer().Create(customerInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // You can use the same input to update the customer\n    customer, err := lagoClient.Customer().Update(customerInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // customer is *lago.Customer\n    fmt.Println(customer)\n  }\n'))),(0,r.kt)(o.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class CreateCustomerExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new CustomersApi(Configuration.Default);\n          var customerInput = new CustomerInput(); // CustomerInput | Customer payload\n\n          try\n          {\n              // Create a customer\n              Customer result = apiInstance.CreateCustomer(customerInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling CustomersApi.CreateCustomer: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,r.kt)(o.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\CustomersApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$customer_input = new \\OpenAPI\\Client\\Model\\CustomerInput(); // \\OpenAPI\\Client\\Model\\CustomerInput | Customer payload\n\ntry {\n  $result = $apiInstance->createCustomer($customer_input);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling CustomersApi->createCustomer: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customer": {\n    "external_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "address_line1": "5230 Penfield Ave",\n    "address_line2": null,\n    "city": "Woodland Hills",\n    "country": "US",\n    "currency": "EUR",\n    "email": "dinesh@piedpiper.test",\n    "legal_name": "Coleman-Blair",\n    "legal_number": "49-008-2965",\n    "logo_url": "http://hooli.com/logo.png",\n    "name": "Gavin Belson",\n    "phone": "1-171-883-3711 x245",\n    "state": "CA",\n    "timezone": "Europe/Paris",\n    "url": "http://hooli.com",\n    "zipcode": "91364",\n    "billing_configuration": {\n      "invoice_grace_period": 3,\n      "payment_provider": "stripe",\n      "provider_customer_id": "cus_12345",\n      "sync": true,\n      "sync_with_provider": true,\n      "document_locale": "fr",\n      "vat_rate": 12.5\n    },\n    "metadata": [\n      {\n        "key": "Key example",\n        "value": "Value example",\n        "display_in_invoice": true\n      }\n    ]\n  }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the customer already exists, this request will trigger an update.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line1"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"First line of the billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"address_line2"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Second line of the billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"city"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"City of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 3166 (alpha-2)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Country code of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"currency"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 4217"))),(0,r.kt)("td",{parentName:"tr",align:null},"Currency of the customer - ",(0,r.kt)("a",{parentName:"td",href:"../resources/currencies"},"learn more"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Email of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal company name of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"legal_number"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Legal company number of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logo_url"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Logo URL of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Full name of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Phone number of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"State of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timezone"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(g,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"TZ database"))),(0,r.kt)("td",{parentName:"tr",align:null},"Timezone of the customer - ",(0,r.kt)("a",{parentName:"td",href:"../resources/timezones"},"learn more"),(0,r.kt)("br",null),"Will override the organization's timezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom URL of the customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zipcode"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Zipcode of the customer's billing address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_configuration"),(0,r.kt)("td",{parentName:"tr",align:null},"Object ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider specific configuration used to bill the customer")))),(0,r.kt)("h3",{id:"billing-configuration"},"Billing configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invoice_grace_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Grace period in days for the invoice.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"payment_provider"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Payment provider used to bill the customer.",(0,r.kt)("br",null),"Accepted values: ",(0,r.kt)("inlineCode",{parentName:"td"},"stripe")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"gocardless"),(0,r.kt)("br",null),"This field is required if you want to assign a ",(0,r.kt)("inlineCode",{parentName:"td"},"provider_customer_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provider_customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer ID on the payment provider.",(0,r.kt)("br",null),"If not provided, Lago can optionally create the provider customer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," is you want to create the provider customer synchronously with the customer creation.",(0,r.kt)("br",null),"Apply only when ",(0,r.kt)("inlineCode",{parentName:"td"},"provider_customer_id")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," and payment provider is configured to create customer.",(0,r.kt)("br",null),"Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sync_with_provider"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," if you want to create the customer record in the provider's system. Only applies when ",(0,r.kt)("inlineCode",{parentName:"td"},"provider_customer_id")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"sync_with_provider")," is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Default value: ",(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"document_locale"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Document locale in ISO 639-1 format - ",(0,r.kt)("a",{parentName:"td",href:"../resources/locales"},"learn more"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vat_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Float ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Custom VAT applied to the customer.",(0,r.kt)("br",null)," It will override the one defined at organization level")))),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata object key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata object value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"display_in_invoice"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Field that determines whether the metadata key-value pair will be visible on invoices")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},"The customer was succesfuly created or updated.",(0,r.kt)("p",null,"  Returns a ",(0,r.kt)("a",{parentName:"p",href:"./customer-object"},"customer")," object.")),(0,r.kt)(o.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"customer")," json root is not present in the request body.")),(0,r.kt)(o.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API endpoint is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(o.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "code": "validation_errors",\n  "error_details": {\n    "field": ["error"]\n  }\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"field"),(0,r.kt)("th",{parentName:"tr",align:null},"error"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},"external_id is missing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"country")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_a_valid_country_code")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided country value is not an ISO 3166 country code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided currency is not an accepted currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currencies_does_not_match")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided currency cannot be assigned to the customer as he already has a subscription, an add_on, a coupon or a wallet in an other currency.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invoice_grace_period")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided invoice grace period is invalid.",(0,r.kt)("br",null),"It must be a positive integer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payment_provider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided payment provider is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"timezone_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided timezone is invalid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vat_rate")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_out_of_range")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided VAT rate is invalid.",(0,r.kt)("br",null),"It must be a positive integer or floating number between 0 and 100.")))))))}b.isMDXComponent=!0}}]);