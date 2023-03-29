"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3644],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>N});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=i(a),g=l,N=u["".concat(d,".").concat(g)]||u[g]||k[g]||r;return a?n.createElement(N,o(o({ref:e},m),{},{components:a})):n.createElement(N,o({ref:e},m))}));function N(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p[u]="string"==typeof t?t:l,o[1]=p;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},72430:(t,e,a)=>{a.r(e),a.d(e,{Comment:()=>k,NotNullable:()=>u,Type:()=>m,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=a(87462),l=(a(67294),a(3905));const r={sidebar_position:1},o="Plan object",p={unversionedId:"api/plans/plan-object",id:"api/plans/plan-object",title:"Plan object",description:"This object represents a plan.",source:"@site/docs/api/03_plans/plan-object.mdx",sourceDirName:"api/03_plans",slug:"/api/plans/plan-object",permalink:"/docs/api/plans/plan-object",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"api",previous:{title:"Plans",permalink:"/docs/category/plans-1"},next:{title:"Create plan",permalink:"/docs/api/plans/create-plan"}},d={},i=[{value:"Schema",id:"schema",level:2},{value:"Plan attributes",id:"plan-attributes",level:3},{value:"Charge attributes",id:"charge-attributes",level:3},{value:"Group Properties",id:"group-properties",level:3},{value:"Standard charge model",id:"standard-charge-model",level:4},{value:"Graduated charge model",id:"graduated-charge-model",level:4},{value:"Package charge model",id:"package-charge-model",level:4},{value:"Percentage charge model",id:"percentage-charge-model",level:4},{value:"Volume charge model",id:"volume-charge-model",level:4}],m=t=>{let{children:e,color:a}=t;return(0,l.kt)("span",{style:{color:"#006CFA",fontSize:"13px"}},e)},u=t=>{let{children:e,color:a}=t;return(0,l.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},e)},k=t=>{let{children:e,color:a}=t;return(0,l.kt)("span",{style:{fontSize:"12px"}},e)},g={toc:i,Type:m,NotNullable:u,Comment:k},N="wrapper";function b(t){let{components:e,...a}=t;return(0,l.kt)(N,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"plan-object"},"Plan object"),(0,l.kt)("p",null,"This object represents a plan.",(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"schema"},"Schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plan": {\n    "lago_id": "6bcba20e-cbc8-4975-a47b-2055eef34b22",\n    "name": "Basic",\n    "created_at": "2022-08-24T14:58:59Z",\n    "code": "basic",\n    "interval": "yearly",\n    "description": "This is a basic plan description",\n    "amount_cents": 90000,\n    "amount_currency": "USD",\n    "trial_period": 3.0,\n    "pay_in_advance": true,\n    "bill_charges_monthly": true,\n    "active_subscriptions_count": 0,\n    "draft_invoices_count": 0,\n    "charges": [\n      {\n        "lago_id": "27f12d13-4ae0-437b-b822-8771bcd62e3a",\n        "lago_billable_metric_id": "b09ce382-ce87-4da4-89f2-78b2060689fc",\n        "billable_metric_code": "bm_code",\n        "created_at": "2022-08-24T14:58:59Z",\n        "charge_model": "standard",\n        "group_properties": [\n          {\n            "group_id": "12345678-4ae0-437b-b822-8771bcd62e3a",\n            "values": {\n              "amount": "0.10"\n            }\n          }\n        ]\n      },\n      {\n        "lago_id": "e530f658-c06a-44bb-a413-1fbe3796adb4",\n        "lago_billable_metric_id": "b09ce382-ce87-4da4-89f2-78b2060689fc",\n        "billable_metric_code": "bm_code",\n        "created_at": "2022-08-24T14:58:59Z",\n        "charge_model": "graduated",\n        "properties": {\n          "graduated_ranges": [\n            {\n              "to_value": 10,\n              "from_value": 0,\n              "flat_amount": "0",\n              "per_unit_amount": "10"\n            },\n            {\n              "to_value": null,\n              "from_value": 11,\n              "flat_amount": "0",\n              "per_unit_amount": "5"\n            }\n          ]\n        }\n      },\n      {\n        "lago_id": "108051fc-c71b-47b4-bd86-47436ea6b639",\n        "lago_billable_metric_id": "b09ce382-ce87-4da4-89f2-78b2060689fc",\n        "billable_metric_code": "bm_code",\n        "created_at": "2022-08-24T14:58:59Z",\n        "charge_model": "package",\n        "properties": {\n          "amount": "100",\n          "free_units": 10000,\n          "package_size": 1000\n        }\n      },\n      {\n        "lago_id": "88b878e2-4ba4-4f37-98c9-ca8522a9e574",\n        "lago_billable_metric_id": "b09ce382-ce87-4da4-89f2-78b2060689fc",\n        "billable_metric_code": "bm_code",\n        "created_at": "2022-08-24T14:58:59Z",\n        "charge_model": "percentage",\n        "properties": {\n          "rate": "0.5",\n          "fixed_amount": "1",\n          "free_units_per_events": 3,\n          "free_units_per_total_aggregation": null\n        }\n      },\n      {\n        "lago_id": "e530f658-c06a-44bb-a413-1fbe3796555",\n        "lago_billable_metric_id": "b09ce382-ce87-4da4-89f2-78b2060689fc",\n        "billable_metric_code": "bm_code",\n        "created_at": "2022-08-24T14:58:59Z",\n        "charge_model": "volume",\n        "properties": {\n          "volume_ranges": [\n            {\n              "to_value": 10,\n              "from_value": 0,\n              "flat_amount": "0",\n              "per_unit_amount": "10"\n            },\n            {\n              "to_value": null,\n              "from_value": 11,\n              "flat_amount": "0",\n              "per_unit_amount": "5"\n            }\n          ]\n        }\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h3",{id:"plan-attributes"},"Plan attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier of the plan in Lago application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"name")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Plan name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date of plan creation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"code")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Code identifying the plan.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"interval")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Interval that applies on subscription and specifies billing period. ",(0,l.kt)("br",null)," ",(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("strong",{parentName:"td"},"Possible values")),(0,l.kt)("div",null,"- ",(0,l.kt)("inlineCode",{parentName:"td"},"yearly"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"weekly"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"monthly"),(0,l.kt)("div",null))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"description")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"Plan description.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_cents")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Amount in cents.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount_currency")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Currency of the amount.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"trial_period")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Float")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of days for free trial.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"pay_in_advance")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Value should be ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," for payment in advance and ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," for payment in arrear.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"bill_charges_monthly")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"It should be set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if monthly billing is needed on yearly plan.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"active_subscriptions_count")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Count of active subscriptions attached to the plan. This field can be used to know the impact of deleting this plan.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"draft_invoices_count")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Count of draft invoices containing a subscription attached to the plan. This field can be used to know the impact of deleting this plan.")))),(0,l.kt)("h3",{id:"charge-attributes"},"Charge attributes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lago_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier of the charge in Lago application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"lago_billable_metric_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier of the related billable metric in Lago application.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"billable_metric_code")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not Null")),(0,l.kt)("td",{parentName:"tr",align:null},"Code identifying the billable metric.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"created_at")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"ISO 8601 datetime in UTC"))),(0,l.kt)("td",{parentName:"tr",align:null},"Date of charge creation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"charge_model")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null"),(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"Charge model used in event calculations. ",(0,l.kt)("br",null)," ",(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("strong",{parentName:"td"},"Possible values")),(0,l.kt)("div",null,"- ",(0,l.kt)("inlineCode",{parentName:"td"},"standard"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"graduated"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"package"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"percentage"),(0,l.kt)("br",null),"- ",(0,l.kt)("inlineCode",{parentName:"td"},"volume"),(0,l.kt)("div",null))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"properties")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"JSON")),(0,l.kt)("td",{parentName:"tr",align:null},"Extra data. This field will depend on selected charge_model")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"group_properties")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Array")),(0,l.kt)("td",{parentName:"tr",align:null},"Extra data scoped by groups. This field will depend on selected charge_model")))),(0,l.kt)("h3",{id:"group-properties"},"Group Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"group_id")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Group id in lago application")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"values")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"JSON")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Extra data. This field will depend on selected charge_model and group")))),(0,l.kt)("h4",{id:"standard-charge-model"},"Standard charge model"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Price of one aggregated unit")))),(0,l.kt)("h4",{id:"graduated-charge-model"},"Graduated charge model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"graduated_ranges")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Array of ranges")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Graduated ranges, sorted from bottom to top boundaries")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Graduated Ranges:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"from_value")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Lower value of the range.",(0,l.kt)("br",null),"- Must be ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," or previous range ",(0,l.kt)("inlineCode",{parentName:"td"},"to_value + 1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"to_value")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Top value of the range.",(0,l.kt)("br",null),"- Must be higher than the range from_value.",(0,l.kt)("br",null),"- Must be null on last range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"per_unit_amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to apply to each aggregated unit between the boundaries")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"flat_amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Flat amount to add to the result if the range is reached")))),(0,l.kt)("h4",{id:"package-charge-model"},"Package charge model"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Price of one package")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"package_size")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of aggregated units per package.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"free_units")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of aggregated units to exclude before applying the charge model.")))),(0,l.kt)("h4",{id:"percentage-charge-model"},"Percentage charge model"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"rate")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Charge rate that applies to the total amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"fixed_amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Fee that applies to each event ingested during the billing period")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"free_units_per_events")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of events that are not subject to the fixed fee")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"free_units_per_total_aggregation")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Amount that is not subject to the charge rate")))),(0,l.kt)("h4",{id:"volume-charge-model"},"Volume charge model"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Model:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"volume_ranges")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Array of ranges")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Volume ranges, sorted from bottom to top boundaries")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Volume Ranges:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"from_value")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")),(0,l.kt)("td",{parentName:"tr",align:null},"Lower value of the range.",(0,l.kt)("br",null),"- Must be ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"previous range to_value + 1"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"to_value")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Top value of the range.",(0,l.kt)("br",null),"- Must be higher than the range from_value.",(0,l.kt)("br",null),"- Must be null on last range.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"per_unit_amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to apply to each aggregated unit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"flat_amount")," ","\xa0"," ","\xa0"," ",(0,l.kt)(m,{mdxType:"Type"},"String")," ","\xa0"," ","\xa0"," ",(0,l.kt)(u,{mdxType:"NotNullable"},"Not null")," ","\xa0"," ","\xa0"," ",(0,l.kt)("br",null),(0,l.kt)(k,{mdxType:"Comment"},(0,l.kt)("em",{parentName:"td"},"Decimal value"))),(0,l.kt)("td",{parentName:"tr",align:null},"Flat amount to add to the result if the range is reached")))))}b.isMDXComponent=!0}}]);