(this.webpackJsonpcurrencyconverter=this.webpackJsonpcurrencyconverter||[]).push([[0],[,,,function(e,c,t){"use strict";t(15);var n=t(0);c.a=function(){return Object(n.jsx)("div",{className:"flex ldn",children:Object(n.jsxs)("div",{className:"flex column animation-container",children:[Object(n.jsx)("h1",{children:"Loading please wait..."}),Object(n.jsxs)("div",{className:"animation",children:[Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"}),Object(n.jsx)("div",{className:"circle"})]})]})})}},,,function(e,c,t){"use strict";t.d(c,"b",(function(){return u})),t.d(c,"a",(function(){return o}));var n=t(5),r=t.n(n),s=t(8),a=t(2),i=t(1),l=t(3),j=t(0),u=Object(i.createContext)(null),o=function(e){var c=e.children,t=Object(i.useState)(null),n=Object(a.a)(t,2),o=n[0],b=n[1],d=Object(i.useState)(null),O=Object(a.a)(d,2),x=O[0],f=O[1],h=Object(i.useState)(null),v=Object(a.a)(h,2),m=v[0],p=v[1],N=Object(i.useState)(!1),w=Object(a.a)(N,2),y=w[0],k=w[1];return Object(i.useEffect)((function(){(function(){var e=Object(s.a)(r.a.mark((function e(){var c,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,fetch("/latest");case 4:return c=e.sent,e.next=7,c.json();case 7:t=e.sent,b(t.rates),f(t.base),p(t.date),k(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),k(!1);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsx)(u.Provider,{value:[o,x,m,y],children:y?Object(j.jsx)(l.a,{}):c})}},,,,,,,function(e,c,t){},,function(e,c,t){},,function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){},function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),s=t(7),a=t.n(s),i=(t(13),t(6)),l=t(2),j=(t(17),t(0)),u=function(e){var c=e.theme,t=e.setTheme;return Object(j.jsxs)("div",{className:"flex nav",children:[Object(j.jsx)("h1",{children:"Currency Converter"}),Object(j.jsx)("div",{className:"switch flex ".concat(c?"switch-right":"switch-left"),onClick:function(){return t((function(e){return!e}))},children:Object(j.jsx)("div",{className:"switch-selector"})})]})},o=(t(18),function(){return Object(j.jsx)("div",{className:"flex footer",children:Object(j.jsxs)("p",{children:["\xa9 Copyright by"," ",Object(j.jsx)("a",{href:"https://newportfolio-delta.vercel.app/",rel:"noreferrer",target:"_blank",children:"Djordje Mikic"})]})})}),b=(t(19),function(e){var c=e.children,t=Object(n.useState)(!1),r=Object(l.a)(t,2),s=r[0],a=r[1];return Object(j.jsxs)("div",{className:"flex column layout ".concat(s?"night":""),children:[Object(j.jsx)(u,{theme:s,setTheme:a}),c,Object(j.jsx)(o,{})]})}),d=t(3),O=(t(20),Object(n.lazy)((function(){return t.e(3).then(t.bind(null,24))}))),x=function(){return Object(j.jsx)(i.a,{children:Object(j.jsx)(b,{children:Object(j.jsx)(n.Suspense,{fallback:Object(j.jsx)(d.a,{}),children:Object(j.jsx)(O,{})})})})};a.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.a845ec69.chunk.js.map