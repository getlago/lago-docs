"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[3190],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:16},i="Entitlements",s={unversionedId:"guide/entitlements",id:"guide/entitlements",title:"Entitlements",description:"Lago partners with Oso to provide the best-in-class Entitlements solution.",source:"@site/docs/guide/16_entitlements.md",sourceDirName:"guide",slug:"/guide/entitlements",permalink:"/docs/guide/entitlements",draft:!1,tags:[],version:"current",sidebarPosition:16,frontMatter:{sidebar_position:16},sidebar:"guide",previous:{title:"Emails",permalink:"/docs/guide/emails"},next:{title:"Integration testing",permalink:"/docs/guide/testing-integration"}},l={},u=[{value:"Define available features and plan&#39;s quota",id:"define-available-features-and-plans-quota",level:2},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"entitlements"},"Entitlements"),(0,r.kt)("p",null,"Lago partners with ",(0,r.kt)("a",{parentName:"p",href:"https://osohq.com"},"Oso")," to provide the best-in-class Entitlements solution."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.osohq.com/"},"Oso"),"  is an authorization-as-a-service provider partnering with Lago to offer entitlements. You can use either the open-source version (available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/osohq/oso"},"Github"),") or the cloud-hosted version. To create entitlements with Lago, you must open an account on Oso."),(0,r.kt)("p",null,"Oso offers a suitable solution for Entitlements. For more information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://www.osohq.com/docs/guides/model-your-apps-authz#entitlements"},"Oso's documentation"),"."),(0,r.kt)("h2",{id:"define-available-features-and-plans-quota"},"Define available features and plan's quota"),(0,r.kt)("p",null,"First, define the available features for each plan. For instance, the Basic plan has a limited set of features, while the Premium plan offers the full range."),(0,r.kt)("p",null,"In addition to this, you can use Lago to bill metering and overage. This information can then be passed directly to Oso's ",(0,r.kt)("inlineCode",{parentName:"p"},"plan_quota")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"quota_used")," to limit usage for a specific feature."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.osohq.com/docs/guides/model-your-apps-authz#entitlements"},"Oso's documentation")," explains the following example of entitlements properly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'actor User { }\n \nresource Organization {\n    roles = ["admin", "member"];\n    permissions = ["create_repository"];\n \n    "member" if "admin";\n}\n \n \nresource Plan { \n    roles = ["subscriber"];\n    relations = { subscribed_organization: Organization };\n    \n    "subscriber" if role on "subscribed_organization";\n}\n \nresource Feature {\n    relations = { plan: Plan };\n}\n \ndeclare plan_quota(Plan, Feature, Integer);\ndeclare quota_used(Organization, Feature, Integer);\n \nplan_quota(Plan{"pro"}, Feature{"repository"}, 10);\nplan_quota(Plan{"basic"}, Feature{"repository"}, 0);\n \nhas_quota_remaining(org: Organization, feature: Feature) if\n    has_quota(org, feature, quota) and\n    quota_used(org, feature, used) and\n    used < quota;\n \nhas_quota(org: Organization, feature: Feature, quota: Integer) if\n    plan matches Plan and\n    has_relation(plan, "subscribed", org) and\n    plan_quota(plan, feature, quota);\n \n \nhas_permission(user: User, "create_repository", org: Organization) if\n    has_role(user, "member", org) and\n    has_quota_remaining(org, Feature{"repository"});\n \n \n \ntest "members can create repositorys if they have quota" {\n    setup {\n        quota_used(Organization{"apple"}, Feature{"repository"}, 5);\n        quota_used(Organization{"netflix"}, Feature{"repository"}, 10);\n        quota_used(Organization{"amazon"}, Feature{"repository"}, 0);\n        has_relation(Plan{"pro"}, "subscribed", Organization{"apple"});\n        has_relation(Plan{"pro"}, "subscribed", Organization{"netflix"});\n        has_relation(Plan{"basic"}, "subscribed", Organization{"amazon"});\n        has_role(User{"alice"}, "member", Organization{"apple"});\n        has_role(User{"bob"}, "member", Organization{"netflix"});\n        has_role(User{"charlie"}, "member", Organization{"amazon"});\n    }\n    assert has_quota_remaining(Organization{"apple"}, Feature{"repository"});\n    # Apple has quota remaining, so all good\n    assert allow(User{"alice"}, "create_repository", Organization{"apple"});\n    # Netflix has used all quota \n    assert_not allow(User{"bob"}, "create_repository", Organization{"netflix"});\n    # Amazon doesn\'t have any quota left\n    assert_not allow(User{"charlie"}, "create_repository", Organization{"amazon"});\n}\n')))}m.isMDXComponent=!0}}]);