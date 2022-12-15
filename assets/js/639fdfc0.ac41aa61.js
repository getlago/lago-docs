"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[8610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=g(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o="Using the debugger",s={unversionedId:"guide/events/debugger",id:"guide/events/debugger",title:"Using the debugger",description:"By ingesting events, you can see them flowing in the Lago application by using the debugger. It allows you to take a deeper look at ingested events and detect possible warnings.",source:"@site/docs/guide/09_events/debugger.md",sourceDirName:"guide/09_events",slug:"/guide/events/debugger",permalink:"/docs/guide/events/debugger",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guide",previous:{title:"Ingesting Events",permalink:"/docs/guide/events/ingesting_events"},next:{title:"Invoicing",permalink:"/docs/category/invoicing"}},l={},g=[{value:"Accessing the debugger",id:"accessing-the-debugger",level:2},{value:"Accessing a specific event",id:"accessing-a-specific-event",level:2},{value:"Possible warnings",id:"possible-warnings",level:2}],c={toc:g};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-debugger"},"Using the debugger"),(0,i.kt)("p",null,"By ingesting events, you can see them flowing in the Lago application by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"debugger"),". It allows you to take a deeper look at ingested events and detect possible warnings."),(0,i.kt)("h2",{id:"accessing-the-debugger"},"Accessing the debugger"),(0,i.kt)("p",null,"You can access the event debugger from the UI by following this path:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Developers")," section in the sidebar;"),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Debugger")," tab;"),(0,i.kt)("li",{parentName:"ol"},"See a list of ingested events; and"),(0,i.kt)("li",{parentName:"ol"},"Reload this list when you ingest new events.")),(0,i.kt)("p",null,"By default, the UI shows you a list of the latest 20 events, but you can load much more by scrolling down the page."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If an event is not shown in the UI, it has ",(0,i.kt)("strong",{parentName:"p"},"not")," been ingested.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Event debugger",src:n(7898).Z,width:"2402",height:"1296"})),(0,i.kt)("h2",{id:"accessing-a-specific-event"},"Accessing a specific event"),(0,i.kt)("p",null,"In the debugger, by clicking on a specific event, you will have access to 2 main blocks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"A list of useful properties returned")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Time:")," timestamp of the received events;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Customer ID:")," the ID of your customer;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Billable metric code:")," code of the billable metric linked to the event;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Billable metric name:")," name of the billable metric linked to the event;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transaction ID:")," unique ",(0,i.kt)("inlineCode",{parentName:"li"},"transaction_id")," of the event used as idempotency key;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"IP Address:")," IP address of the event sender; and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Client API:")," Lago Client API used to send the event."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"A JSON with event's arguments sent in the payload")))),(0,i.kt)("h2",{id:"possible-warnings"},"Possible warnings"),(0,i.kt)("p",null,"Some events can be ingested but triggering a bad or unexpected behavior. This is why Lago displays in the UI two possible warnings:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The event ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," is ",(0,i.kt)("strong",{parentName:"li"},"not related to an existing billable metric"),"; and"),(0,i.kt)("li",{parentName:"ol"},"The billable metric's ",(0,i.kt)("strong",{parentName:"li"},"property used for the aggregation is not sent")," through this event.")))}p.isMDXComponent=!0},7898:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/events-debugger-6bcbcf7e46f1bd4bb8a9b6e6964bba69.png"}}]);