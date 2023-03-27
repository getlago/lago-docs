"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[1388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(b,l(l({ref:t},p),{},{components:n})):a.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>_});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=b({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),k=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},l,{className:(0,i.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=g(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",f.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function _(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},4194:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>b,Optional:()=>m,PostEndpoint:()=>g,Required:()=>d,assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={sidebar_position:2},s="Assign a plan to a customer",u={unversionedId:"api/subscriptions/create-subscription",id:"api/subscriptions/create-subscription",title:"Assign a plan to a customer",description:"Route",source:"@site/docs/api/05_subscriptions/create-subscription.mdx",sourceDirName:"api/05_subscriptions",slug:"/api/subscriptions/create-subscription",permalink:"/docs/api/subscriptions/create-subscription",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Subscription object",permalink:"/docs/api/subscriptions/subscription-object"},next:{title:"Terminate a subscription",permalink:"/docs/api/subscriptions/terminate-subscription"}},p={},c=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Deprecated arguments",id:"deprecated-arguments",level:3},{value:"Responses",id:"responses",level:2}],d=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},b=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},k={toc:c,Required:d,Optional:m,Comment:b,PostEndpoint:g},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assign-a-plan-to-a-customer"},"Assign a plan to a customer"),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"/api/v1/subscriptions\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/subscriptions" \\\n  --header "Authorization: Bearer $API_KEY" \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{\n    "subscription": {\n      "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n      "plan_code": "code",\n      "external_id": "id",\n      "name": "display name",\n      "subscription_at": "2022-08-08T00:00:00Z",\n      "billing_time": "anniversary"\n    }\n  }\'\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client.client import Client\nfrom lago_python_client.models import Subscription\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nsubscription = Subscription(\n  external_customer_id="5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  plan_code="code",\n  external_id="id",\n  name="display name",\n  subscription_at="2022-08-08T00:00:00Z",\n  billing_time="anniversary"\n)\n\nclient.subscriptions.create(subscription)\n'))),(0,r.kt)(l.Z,{value:"javascript",label:"Javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Client, SubscriptionObject } from "lago-javascript-client";\n\nconst subscriptionObject = {\n  external_customer_id: "5eb02857-a71e-4ea2-bcf9-57d8885990ba",\n  plan_code: "code",\n  external_id: "id",\n  name: "display name",\n  subscription_at: "2022-08-08T00:00:00Z",\n  billing_time: "anniversary" as SubscriptionObject["billing_time"],\n};\n\nawait client.subscriptions.createSubscription({\n  subscription: subscriptionObject,\n});\n'))),(0,r.kt)(l.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.subscriptions.create(\n  external_customer_id: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n  plan_code: "code",\n  external_id: "id",\n  name: "display name",\n  subscription_at: "2022-08-08T00:00:00Z",\n  billing_time: "anniversary"\n)\n'))),(0,r.kt)(l.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    subscriptionInput := &lago.SubscriptionInput{\n      ExternalCustomerID: "__YOUR_CUSTOMER_ID__",\n      PlanCode:           "__YOUR_PLAN_CODE__",\n      SubscriptionAt:     "2022-08-08T00:00:00Z",\n      BillingTime:        lago.Anniversary,\n    }\n\n    subscription, err := lagoClient.Subscription().Create(subscriptionInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n\n    // subscription is *lago.Subscription\n    fmt.Println(subscription)\n  }\n'))),(0,r.kt)(l.Z,{value:"csharp",label:"C#",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System.Collections.Generic;\nusing System.Diagnostics;\nusing Org.OpenAPITools.Api;\nusing Org.OpenAPITools.Client;\nusing Org.OpenAPITools.Model;\n\nnamespace Example\n{\n  public class CreateSubscriptionExample\n  {\n      public static void Main()\n      {\n          Configuration.Default.BasePath = "https://api.getlago.com/api/v1";\n          // Configure HTTP bearer authorization: bearerAuth\n          Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";\n\n          var apiInstance = new SubscriptionsApi(Configuration.Default);\n          var subscriptionCreateInput = new SubscriptionCreateInput(); // SubscriptionCreateInput | Subscription payload\n\n          try\n          {\n              // Assign a plan to a customer\n              Subscription result = apiInstance.CreateSubscription(subscriptionCreateInput);\n              Debug.WriteLine(result);\n          }\n          catch (ApiException e)\n          {\n              Debug.Print("Exception when calling SubscriptionsApi.CreateSubscription: " + e.Message );\n              Debug.Print("Status Code: "+ e.ErrorCode);\n              Debug.Print(e.StackTrace);\n          }\n      }\n  }\n}\n'))),(0,r.kt)(l.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"<?php\nrequire_once(__DIR__ . '/vendor/autoload.php');\n\n\n// Configure Bearer authorization: bearerAuth\n$config = OpenAPI\\Client\\Configuration::getDefaultConfiguration()->setAccessToken('YOUR_ACCESS_TOKEN');\n\n\n$apiInstance = new OpenAPI\\Client\\Api\\SubscriptionsApi(\n  // If you want use custom http client, pass your client which implements `GuzzleHttp\\ClientInterface`.\n  // This is optional, `GuzzleHttp\\Client` will be used as default.\n  new GuzzleHttp\\Client(),\n  $config\n);\n$subscription_create_input = new \\OpenAPI\\Client\\Model\\SubscriptionCreateInput(); // \\OpenAPI\\Client\\Model\\SubscriptionCreateInput | Subscription payload\n\ntry {\n  $result = $apiInstance->createSubscription($subscription_create_input);\n  print_r($result);\n} catch (Exception $e) {\n  echo 'Exception when calling SubscriptionsApi->createSubscription: ', $e->getMessage(), PHP_EOL;\n}\n")))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "subscription": {\n    "external_customer_id": "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",\n    "plan_code": "new_code",\n    "name": "name",\n    "external_id": "sub id",\n    "subscription_at": "2022-08-08T00:00:00Z",\n    "billing_time": "anniversary"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_customer_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(d,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Customer unique identifier in your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"plan_code"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(d,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the plan.",(0,r.kt)("br",null),"It must match the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of the plans.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_id"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(d,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique external identifier of the subscription. Used as an idempotency key.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Subscription display name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_at"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(b,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used to create a subscription that started in the past or will start in the future. Cannot be used to update the start date of a pending subscription or to schedule an upgrade/downgrade.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"billing_time"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Billing time of the subscription.",(0,r.kt)("br",null),"It can be ",(0,r.kt)("inlineCode",{parentName:"td"},"anniversary")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"calendar"),(0,r.kt)("br",null),"If not provided, it will default to ",(0,r.kt)("inlineCode",{parentName:"td"},"calendar"))))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the customer is not found, it will be created with blank metadata")),(0,r.kt)("h3",{id:"deprecated-arguments"},"Deprecated arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_date"),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Can be used to create a subscription that started in the past or will start in the future. Cannot be used to update the start date of a pending subscription or to schedule an upgrade/downgrade.")))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  The plan was succesfuly assigned to the customer. A subscription has been created."),(0,r.kt)("p",null,"  Returns a ",(0,r.kt)("a",{parentName:"p",href:"./subscription-object"},"subscription")," object.")),(0,r.kt)(l.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request"\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"subscription")," json root is not present in the request body.")),(0,r.kt)(l.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized"\n}\n')),(0,r.kt)("p",null,"  Access to the API end point is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(l.Z,{value:"404",label:"HTTP 404",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 404,\n  "error": "Not Found",\n  "code": "customer_not_found"\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible error codes:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"customer_not_found"),": The external customer id does not match an existing customer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plan_not_found"),": The plan code does not match an existing plan."))),(0,r.kt)(l.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "code": "validation_errors",\n  "error_details": {\n    "field": ["error"]\n  }\n}\n')),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible errors:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"billing_time")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_invalid")),(0,r.kt)("td",{parentName:"tr",align:null},"Provided ",(0,r.kt)("inlineCode",{parentName:"td"},"billing_time")," does not match an accepted value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currency")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"currencies_does_not_match")),(0,r.kt)("td",{parentName:"tr",align:null},"The plan currency differs from the customer currency")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_already_exists")),(0,r.kt)("td",{parentName:"tr",align:null},"The external id is already assigned to an active subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value_is_mandatory")),(0,r.kt)("td",{parentName:"tr",align:null},"No external id was provided in the request payload")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"subscription_at")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_date")),(0,r.kt)("td",{parentName:"tr",align:null},"Field does not have a valid ISO 8601 datetime format")))))))}h.isMDXComponent=!0}}]);