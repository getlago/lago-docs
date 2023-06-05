"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4687],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),l=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),g=r,h=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return a?t.createElement(h,o(o({ref:n},p),{},{components:a})):t.createElement(h,o({ref:n},p))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}g.displayName="MDXCreateElement"},15862:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=a(87462),r=(a(67294),a(3905));const i={sidebar_position:4},o="Cadence & Invoicing",s={unversionedId:"guide/plans/charges/cadence",id:"guide/plans/charges/cadence",title:"Cadence & Invoicing",description:"Usage-based charges can be billed in arrears (i.e. at the end of the period) or in advance (i.e. each time an event is ingested).",source:"@site/docs/guide/05_plans/charges/cadence.md",sourceDirName:"guide/05_plans/charges",slug:"/guide/plans/charges/cadence",permalink:"/docs/guide/plans/charges/cadence",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guide",previous:{title:"Spending minimum",permalink:"/docs/guide/plans/charges/charge-minimum"},next:{title:"Invoiceable",permalink:"/docs/guide/plans/charges/invoiceable"}},c={},l=[{value:"Charges paid in arrears",id:"charges-paid-in-arrears",level:2},{value:"Charges paid in advance",id:"charges-paid-in-advance",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...i}=e;return(0,r.kt)(d,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cadence--invoicing"},"Cadence & Invoicing"),(0,r.kt)("p",null,"Usage-based charges can be billed in arrears (i.e. at the end of the period) or in advance (i.e. each time an event is ingested)."),(0,r.kt)("h2",{id:"charges-paid-in-arrears"},"Charges paid in arrears"),(0,r.kt)("p",null,"If you opt for charges to be settled in arrears, they will be invoiced at the end of the billing period based on the actual usage during that period. This payment option is ideal for usage types like storage, API calls, or compute, where it is more practical to wait until the end of the period before billing. By default, all charges are configured to be billed in arrears."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API configuration:")),(0,r.kt)("p",null,"To specify that charges of a plan should be billed in arrears using the API, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pay_in_advance")," argument and set its value to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". More information about the ",(0,r.kt)("a",{parentName:"p",href:"../../../api/plans/create-plan"},"plan configuration"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User interface (UI) configuration:")),(0,r.kt)("p",null,"Alternatively, you can easily manage the billing settings through the user interface. Within the UI, you will find options to customize the invoice cadence by setting a charge as invoiced in arrears."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Charge paid in arrears",src:a(18005).Z,width:"1638",height:"1200"})),(0,r.kt)("h2",{id:"charges-paid-in-advance"},"Charges paid in advance"),(0,r.kt)("p",null,"With this payment option, charges are invoiced immediately upon any changes in usage. It is particularly useful for scenarios where you need to bill customers instantly for usage-based actions, such as new user seat or integrations."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can mark charges as paid in advance for billable metrics based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"count_agg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum_agg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"unique_count_agg")," aggregation types."),(0,r.kt)("p",{parentName:"admonition"},"However, charges related to billable metrics based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"max_agg")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"recurring_count_agg")," aggregation types can only be paid in arrears.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"API configuration:")),(0,r.kt)("p",null,"To specify that charges of a plan should be billed in advance using the API, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"pay_in_advance")," argument and set its value to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". More information about the ",(0,r.kt)("a",{parentName:"p",href:"../../../api/plans/create-plan"},"plan configuration"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"User interface (UI) configuration:")),(0,r.kt)("p",null,"Alternatively, you can easily manage the billing settings through the user interface. Within the UI, you will find options to customize the invoice cadence by setting a charge as billed in advance, and thus invoiced immediately upon changes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Charge paid in advance",src:a(83744).Z,width:"1638",height:"1194"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"api/v1/events/estimate_fees")," endpoint to estimate fees for charges to be paid in advance (",(0,r.kt)("a",{parentName:"p",href:"../../../api/events/estimate-fee"},"learn more"),").")))}u.isMDXComponent=!0},83744:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/charge-in-advance-5a13fc011d78a058f7767519c5817961.png"},18005:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/charge-in-arrears-1d16763a9e4212018386d79e400eea2a.png"}}]);