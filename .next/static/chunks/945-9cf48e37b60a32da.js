(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{6762:function(e,t){"use strict";t.Z={src:"/_next/static/media/hs-low-resolution-logo-color-on-transparent-background.b97df63c.png",height:988,width:1e3,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAtUlEQVR42hXOuwrCQBCF4XkDa21tvIFgJ4JCVmMpwd4mAS+ouYgpUomFjd0KIaViZynERhAbsfWR/Lf4Bs7M7jASaitHEGlrgS1WBr0NHhJptYYQYgga6MDMfFMCQgFfCJ6wUQy12gvFI8zxwRE5yvgxuwvFJ5yhcIWHFlwzMytfSCFI4eLCoWMeTCU6qVuS2VVIkg0acdof0jvA3DcTZ9dWMqmo0rI5Eq/miFfvwnzshdp6/wENXGauPKDL0AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},6472:function(e,t,r){"use strict";r.d(t,{r:function(){return l}});var n=r(5893),i=r(89);function l(e){let{children:t}=e;return(0,n.jsx)(i.E.div,{variants:{initial:{opacity:0,y:-100},animate:{opacity:1,y:0,transition:{duration:1,type:"spring",stiffness:50,Bounce:.1,delay:.2}}},initial:"initial",animate:"animate",children:t})}},2436:function(e,t,r){"use strict";r.d(t,{v:function(){return i}});var n=r(1163);let i=()=>{let{locale:e,locales:t,push:r,pathname:i}=(0,n.useRouter)();return{locale:e,locales:t,handleTranslate:function(e){r(i,void 0,{locale:e})},pathname:i}}},6013:function(e,t,r){"use strict";r.d(t,{k:function(){return i}});var n=r(7294);let i=()=>{let[e,t]=(0,n.useState)(0),r=()=>{t(window.innerWidth)};return(0,n.useEffect)(()=>(r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)),[]),e}},4492:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893);r(7294);var i=r(2436);function l(){let{locale:e,locales:t,handleTranslate:r}=(0,i.v)();return(0,n.jsx)("div",{children:(0,n.jsx)("select",{value:e,onChange:e=>{r(e.target.value)},className:" p-1 bg-bodyColor rounded-lg border border-gray-300 focus:outline-none focus:border-mainColor",children:t.map(e=>(0,n.jsx)("option",{value:e,onClick:()=>{r(e)},className:"rounded-full p-2 w-40 h-40 flex justify-center items-center bg-mainColor text-white",children:e},e))})})}r(6609)},9023:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(1664),l=r.n(i),o=r(6762),a=r(7294),s=r(5675),c=r.n(s),u=r(1163),f=r(7421),h=r(4492);t.default=function(){let{t:e}=(0,f.$G)("mobileNav"),[t,r]=(0,a.useState)(!1),{pathname:i}=(0,u.useRouter)(),[s,d]=(0,a.useState)(!1),p=()=>{r(!t)};return(0,a.useEffect)(()=>{d(!0)},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("header",{className:"m-auto",children:s&&(0,n.jsxs)("nav",{children:[(0,n.jsxs)("div",{className:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",children:[(0,n.jsx)(l(),{href:"/",className:"flex items-center",children:(0,n.jsx)(c(),{src:o.Z,priority:!0,className:"w-10",alt:"Logo"})}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(h.default,{}),(0,n.jsxs)("button",{"data-collapse-toggle":"navbar-hamburger",type:"button",className:" md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 ","aria-controls":"navbar-hamburger",onClick:p,"aria-expanded":"false",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,n.jsx)("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})]})]})]}),(0,n.jsx)("div",{className:"".concat(t?"":"hidden",' m-4  w-full" id="navbar-hamburger'),children:(0,n.jsxs)("ul",{className:"flex flex-col font-medium mt-4 rounded-lg bg-gray-50 ",children:["/"===i?null:(0,n.jsx)("li",{onClick:p,children:(0,n.jsx)(l(),{href:"/",className:"block py-2 pl-3 text-gray-900 pr-4 rounded hover:bg-gray-700 hover:text-white  ",children:e("home")})}),(0,n.jsx)("li",{onClick:p,children:(0,n.jsx)(l(),{href:"/about",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700  hover:text-white",children:e("about")})}),(0,n.jsx)("li",{onClick:p,children:(0,n.jsx)(l(),{href:"/work",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 hover:text-white ",children:e("work")})}),(0,n.jsx)("li",{onClick:p,children:(0,n.jsx)(l(),{href:"/contact",className:"block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 hover:text-white",children:e("connect")})})]})})]})})})}},5245:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),i=r(89);function l(e){let{children:t}=e;return(0,n.jsx)(i.E.div,{variants:{hidden:{opacity:0,y:100},show:{opacity:1,y:0,transition:{delay:1.2,duration:.5}}},initial:"hidden",animate:"show",children:t})}},3004:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(5893),i=r(1664),l=r.n(i),o=r(6743),a=r(7294),s=r(5697),c=r.n(s),u=["color","size","title"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var h=(0,a.forwardRef)(function(e,t){var r=e.color,n=e.size,i=e.title,l=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,u);return a.createElement("svg",f({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:r},l),i?a.createElement("title",null,i):null,a.createElement("path",{d:"M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"}))});h.propTypes={color:c().string,size:c().oneOfType([c().string,c().number]),title:c().string},h.defaultProps={color:"currentColor",size:"1em",title:null};var d=r(6739);function p(e){let{path:t}=e;return(0,n.jsxs)("div",{className:"absolute invisible md:visible ".concat(t?"top-20 gap-14":"top-7 gap-12 -left-1","  w-20 h-screen text-sm flex-col items-center flex\n  "),children:[(0,n.jsxs)("div",{className:"hover:scale-110 spacing",children:[!t&&(0,n.jsx)(l(),{className:"rounded-full",href:"https://github.com/housseinsa",target:"_blank",children:(0,n.jsx)(o.Z,{size:20,color:"#729343"})}),t&&(0,n.jsx)(l(),{href:"/",children:(0,n.jsx)(h,{size:20,color:"#729343"})})]}),!t&&(0,n.jsx)("div",{className:"hover:scale-110 spacing rounded-full ",children:(0,n.jsx)(l(),{href:"https://www.linkedin.com/in/husseinsa/",target:"_blank",children:(0,n.jsx)(d.Z,{size:20,color:"#729343"})})}),(0,n.jsx)("div",{className:"w-0.5 h-1/2 bg-slate-800 rotate-180"})]})}},1163:function(e,t,r){e.exports=r(5919)},2703:function(e,t,r){"use strict";var n=r(414);function i(){}function l(){}l.resetWarningCache=i,e.exports=function(){function e(e,t,r,i,l,o){if(o!==n){var a=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:i};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6743:function(e,t,r){"use strict";var n=r(7294),i=r(5697),l=r.n(i),o=["color","size","title"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,l=e.title,s=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,o);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:r},s),l?n.createElement("title",null,l):null,n.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}))});s.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),title:l().string},s.defaultProps={color:"currentColor",size:"1em",title:null},t.Z=s},6739:function(e,t,r){"use strict";var n=r(7294),i=r(5697),l=r.n(i),o=["color","size","title"];function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var s=(0,n.forwardRef)(function(e,t){var r=e.color,i=e.size,l=e.title,s=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(e,o);return n.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:r},s),l?n.createElement("title",null,l):null,n.createElement("path",{d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}))});s.propTypes={color:l().string,size:l().oneOfType([l().string,l().number]),title:l().string},s.defaultProps={color:"currentColor",size:"1em",title:null},t.Z=s}}]);