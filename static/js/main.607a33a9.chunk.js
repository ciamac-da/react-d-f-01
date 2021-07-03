(this["webpackJsonpreact-d-f-01"]=this["webpackJsonpreact-d-f-01"]||[]).push([[0],[,,function(e,n,t){e.exports={login:"Login_login__2Px22",control:"Login_control__1O9dn",invalid:"Login_invalid__1Kvhn",actions:"Login_actions__1b5Oz"}},,,,function(e,n,t){e.exports={card:"Card_card__1te4P"}},function(e,n,t){e.exports={button:"Button_button__2lgkF"}},function(e,n,t){e.exports={home:"Home_home__3idT9"}},function(e,n,t){e.exports={nav:"Navigation_nav__JfAVK"}},function(e,n,t){e.exports={"main-header":"MainHeader_main-header__2OmAM"}},,,,,function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),o=t.n(c),i=t(5),a=t.n(i),l=(t(15),t(3)),s=t(6),r=t.n(s),u=t(0),d=function(e){return Object(u.jsx)("div",{className:"".concat(r.a.card," ").concat(e.className),children:e.children})},j=t(2),b=t.n(j),g=t(7),h=t.n(g),v=function(e){return Object(u.jsx)("button",{type:e.type||"button",className:"".concat(h.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},O=o.a.createContext({isLoggedIn:!1,onLogout:function(){},onLogin:function(e,n){}}),f=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1];Object(c.useEffect)((function(){"1"===localStorage.getItem("isLoggedIn")&&i(!0)}),[]);return Object(u.jsx)(O.Provider,{value:{isLoggedIn:o,onLogout:function(){localStorage.removeItem("isLoggedIn"),i(!1)},onLogin:function(){localStorage.setItem("isLoggedIn","1"),i(!0)}},children:e.children})},x=O,m=function(e,n){return"USER_INPUT"===n.type?{value:n.val,isValid:n.val.includes("@")}:"USER_BLUR"===n.type?{value:e.value,isValid:e.value.includes("@")}:{value:"",isValid:!1}},_=function(e,n){return"USER_INPUT"===n.type?{value:n.value,isValid:n.val.trim().length>6}:"USER_BLUR"===n.type?{value:e.value,isValid:e.value.trim().length>6}:{value:"",isValid:!1}},p=function(e){var n=Object(c.useState)(!1),t=Object(l.a)(n,2),o=t[0],i=t[1],a=Object(c.useReducer)(m,{value:"",isValid:!1}),s=Object(l.a)(a,2),r=s[0],j=s[1],g=Object(c.useReducer)(_,{value:"",isValid:!1}),h=Object(l.a)(g,2),O=h[0],f=h[1],p=Object(c.useContext)(x),L=r.isValid,N=O.isValid;Object(c.useEffect)((function(){return console.log("EFFECT RUNNING"),function(){console.log("EFFECT CLEANUP")}}),[]),Object(c.useEffect)((function(){var e=setTimeout((function(){console.log("Checking form validity!"),i(L&&N)}),500);return function(){console.log("CLEANUP"),clearTimeout(e)}}),[L,N]);return Object(u.jsx)(d,{className:b.a.login,children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.onLogin(r.value,O.value)},children:[Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===r.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(u.jsx)("input",{type:"email",id:"email",value:r.value,autoComplete:"off",onChange:function(e){j({type:"USER_INPUT",val:e.target.value})},onBlur:function(){j({type:"INPUT_BLUR"})}})]}),Object(u.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===O.isValid?b.a.invalid:""),children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",id:"password",autoComplete:"off",value:O.value,onChange:function(e){f({type:"USER_INPUT",val:e.target.value})},onBlur:function(){f({type:"INPUT_BLUR"})}})]}),Object(u.jsx)("div",{className:b.a.actions,children:Object(u.jsx)(v,{type:"submit",className:b.a.btn,disabled:!o,children:"Login"})})]})})},L=t(8),N=t.n(L),I=function(e){var n=Object(c.useContext)(x);return Object(u.jsxs)(d,{className:N.a.home,children:[Object(u.jsx)("h1",{children:"Welcome back!"}),Object(u.jsx)(v,{onClick:n.onLogout,children:"Logout"})]})},U=t(9),C=t.n(U),E=function(e){var n=Object(c.useContext)(x);return Object(u.jsx)("nav",{className:C.a.nav,children:Object(u.jsxs)("ul",{children:[n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Users"})}),n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:"/",children:"Admin"})}),n.isLoggedIn&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:n.onLogout,children:"Logout"})})]})})},y=t(10),P=t.n(y),R=function(e){return Object(u.jsxs)("header",{className:P.a["main-header"],children:[Object(u.jsx)("h2",{children:"A Typical Page"}),Object(u.jsx)(E,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var V=function(){var e=Object(c.useContext)(x);return Object(u.jsxs)(o.a.Fragment,{children:[Object(u.jsx)(R,{}),Object(u.jsxs)("main",{children:[!e.isLoggedIn&&Object(u.jsx)(p,{}),e.isLoggedIn&&Object(u.jsx)(I,{})]})]})};a.a.render(Object(u.jsx)(f,{children:Object(u.jsx)(V,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.607a33a9.chunk.js.map