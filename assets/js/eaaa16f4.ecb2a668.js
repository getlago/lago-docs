"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2446],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},80796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:4},o="Instant charges",s={unversionedId:"guide/plans/instant-charges",id:"guide/plans/instant-charges",title:"Instant charges",description:"This feature is only available to users with a premium license. Please contact us to get access to Lago Cloud and Lago Self-Hosted Premium.",source:"@site/docs/guide/05_plans/instant-charges.md",sourceDirName:"guide/05_plans",slug:"/guide/plans/instant-charges",permalink:"/docs/guide/plans/instant-charges",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Charges",permalink:"/docs/guide/plans/charges"},next:{title:"Subscriptions",permalink:"/docs/guide/plans/subscription"}},l={},c=[{value:"Mark a charge as instant",id:"mark-a-charge-as-instant",level:2},{value:"Ingest events related to instant charges",id:"ingest-events-related-to-instant-charges",level:2},{value:"Estimated fee",id:"estimated-fee",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instant-charges"},"Instant charges"),(0,r.kt)("admonition",{title:"Premium feature \u2728",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This feature is only available to users with a premium license. Please ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,r.kt)("p",null,"Instant charges refer to fees that are due as soon as the corresponding events occur, as opposed to standard charges that are due at the end of the billing period. For example, fintech companies may collect fees immediately for events associated with specific billable metrics, such as ATM withdrawals or bank transfers."),(0,r.kt)("h2",{id:"mark-a-charge-as-instant"},"Mark a charge as instant"),(0,r.kt)("p",null,'When configuring plans and their associated charges, you can mark charges as "instant" to enable immediate billing. By default, the "instant charge" option is turned off. To enable instant charging:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a billable metric;"),(0,r.kt)("li",{parentName:"ol"},"Create a plan that includes a charge associated with the billable metric; and"),(0,r.kt)("li",{parentName:"ol"},'Activate the "instant charge" option for this specific charge.')),(0,r.kt)("p",null,"A plan may include both instant and standard charges. Please note that the instant charge option may not be effective for some billable metric aggregation types or charge models."),(0,r.kt)("p",null,"Unsupported aggregation types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_agg"),"; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"recurring_count_agg"),".")),(0,r.kt)("p",null,"Unsupported charge models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"volume")," charge model.")),(0,r.kt)("h2",{id:"ingest-events-related-to-instant-charges"},"Ingest events related to instant charges"),(0,r.kt)("p",null,"Fees related to instant charges will not trigger any payment intent through integration with a payment processor (e.g. Stripe or GoCardless) when received or at the end of the billing period. Users are responsible for collecting payments for these charges. To facilitate this process, each time a user pushes an event through ",(0,r.kt)("inlineCode",{parentName:"p"},"POST api/v1/events"),", Lago will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Calculate the corresponding fee; and"),(0,r.kt)("li",{parentName:"ol"},"Send a ",(0,r.kt)("inlineCode",{parentName:"li"},"fee.instant_created")," ",(0,r.kt)("a",{parentName:"li",href:"../../api/webhooks/messages"},"webhook message")," to the user, including the calculated fee.")),(0,r.kt)("p",null,"Coupons, prepaid credits and credit note credits are not taken into account in the calculation of the fees related to instant charges."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Lago ",(0,r.kt)("strong",{parentName:"p"},"does not generate invoices")," for fees related to instant charges that have been paid or are yet to be paid.")),(0,r.kt)("h2",{id:"estimated-fee"},"Estimated fee"),(0,r.kt)("p",null,"You can get an estimate for an instant charge before the actual event is confirmed. To do so, use the API to send a payload similar to that of an event to ",(0,r.kt)("inlineCode",{parentName:"p"},"/api/v1/events/estimate_fees"),"."),(0,r.kt)("p",null,"Coupons, prepaid credits and credit note credits are not taken into account in the calculation of the estimated fees related to instant charges."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Since Lago does not control the stream of ingested events, this endpoint returns an estimate which ",(0,r.kt)("strong",{parentName:"p"},"may be different from the final fee"),", especially if an event was received between the estimate request and event ingestion.")))}u.isMDXComponent=!0}}]);