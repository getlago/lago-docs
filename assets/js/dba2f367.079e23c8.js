"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[4464],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:2},i="Plan model",l={unversionedId:"guide/plans/plan-model",id:"guide/plans/plan-model",title:"Plan model",description:"The plan model defines when and how much a customer is charged.",source:"@site/docs/guide/05_plans/plan-model.md",sourceDirName:"guide/05_plans",slug:"/guide/plans/plan-model",permalink:"/docs/guide/plans/plan-model",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Overview",permalink:"/docs/guide/plans/overview"},next:{title:"Charges",permalink:"/docs/guide/plans/charges"}},s={},p=[{value:"Plan interval",id:"plan-interval",level:2},{value:"The base charge amount and its currency",id:"the-base-charge-amount-and-its-currency",level:2},{value:"Pay in advance or in arrears",id:"pay-in-advance-or-in-arrears",level:2},{value:"Trial period (optional)",id:"trial-period-optional",level:2},{value:"Pro-ratas based on subscription date",id:"pro-ratas-based-on-subscription-date",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"plan-model"},"Plan model"),(0,r.kt)("p",null,"The plan model defines ",(0,r.kt)("strong",{parentName:"p"},"when")," and ",(0,r.kt)("strong",{parentName:"p"},"how much")," a customer is charged."),(0,r.kt)("h2",{id:"plan-interval"},"Plan interval"),(0,r.kt)("p",null,"The plan interval corresponds to the billing period and defines when invoices are generated. In most cases, the ",(0,r.kt)("a",{parentName:"p",href:"charges"},"charges")," are also calculated according to the plan interval."),(0,r.kt)("p",null,"There are several plan intervals:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Weekly"),": subscription fees and charges are billed on a weekly basis (Monday to Sunday);"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Monthly"),": subscription fees and charges are billed on a monthly basis; and"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Yearly"),": subscription fees are billed on a yearly basis and charges can be billed monthly or annually.")),(0,r.kt)("h2",{id:"the-base-charge-amount-and-its-currency"},"The base charge amount and its currency"),(0,r.kt)("p",null,"You need to define a ",(0,r.kt)("strong",{parentName:"p"},"base amount")," for each plan (i.e. the subscription fee). This amount is what the customer will pay by subscribing to the plan regardless of their consumption."),(0,r.kt)("p",null,"This base charge ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," is recurring, and billed at the end of each billing interval."),(0,r.kt)("h2",{id:"pay-in-advance-or-in-arrears"},"Pay in advance or in arrears"),(0,r.kt)("p",null,"With Lago, you can define if the base charge of the Plan is paid ",(0,r.kt)("strong",{parentName:"p"},"in advance")," or ",(0,r.kt)("strong",{parentName:"p"},"in arrears"),". "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the toggle is ",(0,r.kt)("inlineCode",{parentName:"li"},"off")," (boolean set to FALSE), the Plan is paid for the past period (in arrears)."),(0,r.kt)("li",{parentName:"ul"},"If the toggle is ",(0,r.kt)("inlineCode",{parentName:"li"},"on")," (boolean set to TRUE), the Plan is paid upfront (in advance) for the period.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that this toggle only affects the base amount of the Plan. Additional charges for per-usage Billable metrics ",(0,r.kt)("strong",{parentName:"p"},"are always paid in arrears because they are linked to a past consumption of your customers."))),(0,r.kt)("h2",{id:"trial-period-optional"},"Trial period (optional)"),(0,r.kt)("p",null,"You may define a trial period for your plan. A trial period is defined as a number days that are not charged to the customer."),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You create a monthly plan of $50 that needs to be paid in advance, with a trial period of 5 days."),(0,r.kt)("p",{parentName:"blockquote"},"If the customer's subscription starts on April 1st, then Lago will immediately issue an invoice for the period April 6th to April 30th."),(0,r.kt)("p",{parentName:"blockquote"},"Therefore, on April 1st, the system will issue an invoice of $50 x 25 days due / 30 days in April = $41.67.")),(0,r.kt)("p",null,"The trial period applies to the base amount of the plan. Usage-based charges incurred during the trial period remain payable by the customer."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The trial period ",(0,r.kt)("strong",{parentName:"p"},"only applies to the first plan")," associated with the subscription. In case of an upgrade or a downgrade, the trial period of the new plan does not apply.")),(0,r.kt)("h2",{id:"pro-ratas-based-on-subscription-date"},"Pro-ratas based on subscription date"),(0,r.kt)("p",null,"Obviously, we know that your customers don't necessarily sign up for a Plan at the very begining of each month (or each year). This is why Lago automatically applies a pro-rata for the first and the last subscription period of a Plan."),(0,r.kt)("p",null,"Here is an example:\nA ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer X")," signs up for the Plan ",(0,r.kt)("inlineCode",{parentName:"p"},"Start")," (base amount of 10\u20ac, with no trial period) on April 15, 2022. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the Plan is defined to be ",(0,r.kt)("inlineCode",{parentName:"li"},"paid in arrears"),", this Customer will be charged 5\u20ac for the first month at the end of the period (May 1, 2022)."),(0,r.kt)("li",{parentName:"ul"},"If the Plan is defined to be ",(0,r.kt)("inlineCode",{parentName:"li"},"paid in advance"),", this Customer is charged 5\u20ac straight away for the first month (April 15, 2022).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that pro-ratas can also be applied in case of ",(0,r.kt)("strong",{parentName:"p"},"upgrades or downgrades"),".")))}u.isMDXComponent=!0}}]);