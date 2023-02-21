"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[2959],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,b=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="Document locales",i={unversionedId:"api/resources/locales",id:"api/resources/locales",title:"Document locales",description:"List of accepted locales for documents (ISO 639-1).",source:"@site/docs/api/99_resources/locales.mdx",sourceDirName:"api/99_resources",slug:"/api/resources/locales",permalink:"/docs/api/resources/locales",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Currencies",permalink:"/docs/api/resources/currencies"},next:{title:"Timezones",permalink:"/docs/api/resources/timezones"}},s={},d=[{value:"How to add a new language",id:"how-to-add-a-new-language",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"document-locales"},"Document locales"),(0,r.kt)("p",null,"List of accepted locales for documents (ISO 639-1)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Document language"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"en")),(0,r.kt)("td",{parentName:"tr",align:null},"English")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fr")),(0,r.kt)("td",{parentName:"tr",align:null},"French")))),(0,r.kt)("h2",{id:"how-to-add-a-new-language"},"How to add a new language"),(0,r.kt)("p",null,"You can contribute to Lago's open-source project by helping us translate documents. The new language will then be added to the list of supported locales and available to the entire Lago Community."),(0,r.kt)("p",null,"The document template includes translation keys for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Invoices related to subscriptions, add-ons and prepaid credits;"),(0,r.kt)("li",{parentName:"ul"},"Credit notes;"),(0,r.kt)("li",{parentName:"ul"},"Data formatting (e.g. amounts and dates); and"),(0,r.kt)("li",{parentName:"ul"},"Syntax (i.e. sentence structure).")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The names of your billable metrics, plans, add-ons, coupons and wallets are defined in the app. There are no keys to translate them.")),(0,r.kt)("p",null,"To add a new language:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{target:"_blank",href:n(5910).Z},"Download the document template")," to see where each key is located;"),(0,r.kt)("li",{parentName:"ol"},"Use the JSON file below to provide translations for the new language; and"),(0,r.kt)("li",{parentName:"ol"},"Send the new JSON file to ",(0,r.kt)("a",{parentName:"li",href:"mailto:hello@getlago.com"},"hello@getlago.com"),", so that we can review it and add it to the codebase.")),(0,r.kt)("p",null,"Thanks for your time and support!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'en:\n  invoice:\n    [01] document_name: Invoice\n    [02] invoice_number: Invoice Number\n    [03] issue_date: Issue Date\n    [04] bill_from: From\n    [05] bill_to: Bill to\n    [07] due_date: Due %{date}\n    [08] all_subscriptions: All Subscriptions    \n    [09] all_usage_based_fees: All usage based fees\n    [10] sub_total_without_tax: Sub total (excl. tax)\n    [11] tax: Tax\n    [12] sub_total_with_tax: Sub total (incl. tax)\n    [13] credit_notes: Credit Notes\n    [14] coupons: Coupons\n    [15] prepaid_credits: Prepaid credits\n    [16] total_due: Total due\n    [17] powered_by: Powered by\n\n    [18] details: \u201c%{resource} details\u201d\n    [19] subscription: Subscription\n    [20] date_from: From\n    [21] date_to: To\n    [22] monthly: Monthly\n    [23] yearly: Yearly\n    [24] weekly: Weekly\n    [25] sub_total: Sub total\n\n    [26] usage_based_fees: Usage based fees\n    [27] list_of_charges: List of charges used from %{from} to %{to}\n    [28] see_breakdown: See breakdown for total unit\n    [29] total unit_interval: "Total unit: %{events_count} events for %{units}"\n    [30] total_unit: "Total unit: %{units}"\n    [31] total: Total\n    [32] breakdown: Breakdown\n    [34] breakdown_for_days: "%{breakdown_duration} of %{breakdown_total_duration} days"\n    [35] breakdown_of: "%{breakdown} of %{fee_group_name}"\n    [36] notice: For example, if a unit is added with 15 days left in your monthly plan, we multiply the price by 15/31 (days remaining divided by the total number of days in your plan) to calculate the prorated price. Same logic when removing a unit used during 10 days, we multiply the price by 10/31.\n\n    [37] prepaid_credits_with_value: Prepaid credits - %{wallet_name}\n    [38] total_credits_with_value: "Total credits: %{credit_amount} credits"\n    [38] total_credits: Total credits\n    \n\n=====================================================================\n\nen:\n  credit_note:\n    [39] document_name: Credit note\n    [40] credit_note_number: Credit note number\n    [41] invoice_number: Invoice number\n    [42] issue_date: Issue date\n    [43] credit_from: From\n    [44] credit_to: Credit to\n    [45] refunded_notice: Refunded on %{issuing_date}\n    [46] credited_notice: Credited on customer balance on %{issuing_date}\n    [47] credited_refunded_notice: Credited on customer balance and refunded on %{issuing_date}\n    [48] subscription: Subscription\n    [49] sub_total_without_tax: Sub total (excl. tax)\n    [50] tax: Tax\n    [51] credited_on_customer_balance: Credited on customer balance\n    [52] refunded: Refunded\n    [53] total_due: Total due\n    [54] powered_by: Powered by\n\n=====================================================================\n\nen:\n  syntax:\n    [AA] details_title: %{plan_name} %{details}\n    [AB] subscription_interval: %{plan_interval} subscription - %{subscription_name}\n\n=====================================================================\n\nen:\n  data_formating:\n    [06] amount_format: $1,000,000.00\n    [33] date format: Sep 15, 2022\n    \n    abbr_day_names: Sun / Mon / Tue / Wed / Thu / Fri / Sat\n    abbr_month_names: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec\n    day_names: Sunday / Monday / Tuesday / Wednesday / Thursday / Friday / Saturday\n    month_names: January / February / March / April / May / June / July / August / September / October / November / December\n')))}p.isMDXComponent=!0},5910:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/doc-template-0925bec3ad26eae2bc4a2472129bd98b.pdf"}}]);