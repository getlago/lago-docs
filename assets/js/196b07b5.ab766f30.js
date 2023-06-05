"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,g=c["".concat(l,".").concat(d)]||c[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},o="Spending minimum",s={unversionedId:"guide/plans/charges/charge-minimum",id:"guide/plans/charges/charge-minimum",title:"Spending minimum",description:"The minimum spend feature is only available to users with a premium license. Please contact us to get access to Lago Cloud and Lago Self-Hosted Premium.",source:"@site/docs/guide/05_plans/charges/charge-minimum.md",sourceDirName:"guide/05_plans/charges",slug:"/guide/plans/charges/charge-minimum",permalink:"/docs/guide/plans/charges/charge-minimum",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Volume",permalink:"/docs/guide/plans/charges/price-models/volume"},next:{title:"Cadence & Invoicing",permalink:"/docs/guide/plans/charges/cadence"}},l={},m=[],u={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spending-minimum"},"Spending minimum"),(0,a.kt)("admonition",{title:"Premium feature \u2728",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The minimum spend feature is only available to users with a premium license. Please ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:hello@getlago.com"},"contact us"))," to get access to Lago Cloud and Lago Self-Hosted Premium.")),(0,a.kt)("p",null,"Usage-based charges are always paid at the end of the billing period, based on the amount of consumption that occurred. However, you could possibly need to define a spending minimum that a customer needs to commit to."),(0,a.kt)("p",null,"If your customer spends less than the committed amount, you will ",(0,a.kt)("strong",{parentName:"p"},"charge a true-up fee equal to the difference between the commitment and the actual usage"),". Please note that this true-up fee is tied to the initial charge but will appear as a separate line item in an invoice or in a credit note."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spending minimums and true-up fees are always prorated")," based on the number of days used in the subscription. This ensures fairness if your customer signs up at the end of the month, upgrades to a new plan, or terminates an ongoing subscription before the end of the period."),(0,a.kt)("p",null,"To define a charge spending minimum: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to a Plan;"),(0,a.kt)("li",{parentName:"ol"},"Add a usage-based charge;"),(0,a.kt)("li",{parentName:"ol"},"Define a price model;"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"add a spending minimum")," button; and"),(0,a.kt)("li",{parentName:"ol"},"Define a spending minimum amount.")),(0,a.kt)("p",null,"You can also define minimum spending requirements ",(0,a.kt)("a",{parentName:"p",href:"../../../api/plans/create-plan"},"via API")," (see ",(0,a.kt)("inlineCode",{parentName:"p"},"min_amount_cents")," attribute)."),(0,a.kt)("p",null,"In the example below, a customer is billed based on Monthly Tracked Users (MTU), with a standard pricing of $0.010 per tracked users. However, the customer is committed to a spending minimum of $100. If the total consumption of MTUs for the period is $50, a true-up fee of $50 will be charged."))}p.isMDXComponent=!0}}]);