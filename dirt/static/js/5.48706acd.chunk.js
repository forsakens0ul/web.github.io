(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{58:function(e,t,s){"use strict";var c=s(1),a=s(0),r=s(4),i=s.n(r),n=s(21),o=s.p+"static/media/gotham-bold.73ce573b.woff2";s(60);t.a=({children:e,level:t=1,as:s,align:r="auto",weight:l="medium",className:d,...j})=>{const A=Math.min(Math.max(t,0),4),h=s||`h${Math.max(A,1)}`;return Object(c.jsxs)(a.Fragment,{children:["bold"===l&&Object(c.jsxs)(n.a,{children:[Object(c.jsx)("link",{rel:"preload",href:o,as:"font",crossorigin:""}),Object(c.jsx)("style",{children:`\n              @font-face {\n                font-family: 'Gotham';\n                font-weight: 700;\n                src: url(${o}) format('woff2');\n                font-display: swap;\n              }\n            `})]}),Object(c.jsx)(h,{className:i()(d,"heading",`heading--align-${r}`,`heading--level-${A}`,`heading--weight-${l}`),...j,children:e})]})}},59:function(e,t,s){"use strict";var c=s(1),a=s(4),r=s.n(a);s(62);t.a=({children:e,size:t="m",as:s="p",align:a="auto",weight:i="auto",secondary:n,className:o,...l})=>Object(c.jsx)(s,{className:r()(o,"text",`text--align-${a}`,`text--size-${t}`,`text--weight-${i}`,{"text--secondary":n}),...l,children:e})},60:function(e,t,s){},61:function(e,t,s){"use strict";var c=s(1),a=s(0),r=s(4),i=s.n(r);s(65);const n=Object(a.forwardRef)((({as:e="div",children:t,className:s,...a},r)=>Object(c.jsx)(e,{className:i()("section",s),ref:r,...a,children:t})));t.a=n},62:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";var c=s(1),a=s(15),r=s(4),i=s.n(r),n=s(16);s(72);const o=["txt","png","jpg"];t.a=({rel:e,target:t,children:s,secondary:r,className:l,href:d,as:j,...A})=>{const h=o.includes(null===d||void 0===d?void 0:d.split(".").pop()),m=(null===d||void 0===d?void 0:d.includes("://"))||"#"===(null===d||void 0===d?void 0:d[0])||h,u=e||(m?"noreferrer noopener":void 0),b=t||(m?"_blank":void 0),p=j||(m?"a":a.b);return Object(c.jsx)(p,{className:i()("link",l,{"link--secondary":r}),rel:u,href:m?d:void 0,to:m?void 0:d,target:b,onMouseUp:n.a,...A,children:s})}},68:function(e,t,s){"use strict";async function c({src:e,srcSet:t,sizes:s}){return new Promise(((c,a)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");const a=new Image;e&&(a.src=e),t&&(a.srcset=t),s&&(a.sizes=s);const r=()=>{a.removeEventListener("load",r);const e=a.currentSrc;c(e)};a.addEventListener("load",r)}catch(r){a(`Error loading ${t}: ${r}`)}}))}async function a(e){const t=e.split(", ").map((e=>{const[t,s]=e.split(" ");return{src:t,image:function(e=1,t=1){const s=document.createElement("canvas"),c=s.getContext("2d");s.width=e,s.height=t,c.fillStyle="rgba(0, 0, 0, 0)",c.fillRect(0,0,e,t);const a=s.toDataURL("image/png","");return s.remove(),a}(Number(s.replace("w",""))),width:s}})),s=t.map((({image:e,width:t})=>`${e} ${t}`)).join(", "),a=await c({srcSet:s});return t.find((e=>e.image===a)).src}s.d(t,"a",(function(){return c})),s.d(t,"b",(function(){return a}))},72:function(e,t,s){},73:function(e,t,s){"use strict";var c=s(1),a=s(0),r=s(4),i=s.n(r),n=s(9),o=s(22),l=s(14),d=s(57),j=s(20),A=s(27),h=s(10),m=s(2),u=s(68),b=s(28),p=s(23);s(74);const g=({onLoad:e,loaded:t,inViewport:s,srcSet:r,placeholder:b,delay:g,src:O,alt:f,play:v=!0,reveal:x,...y})=>{const w=Object(n.h)(),[E,N]=Object(a.useState)(!0),[_,B]=Object(a.useState)(!w),[q,Q]=Object(a.useState)(!1),[S,J]=Object(a.useState)(!1),[R,k]=Object(a.useState)(!1),[W,I]=Object(a.useState)(),[z,M]=Object(a.useState)(),Z=Object(a.useRef)(),C=Object(a.useRef)(),D=null===O||void 0===O?void 0:O.endsWith(".mp4"),L=O||(null===r||void 0===r?void 0:r.split(" ")[0]),V=!A.a&&s;Object(a.useEffect)((()=>{const e=()=>{N(!1)},t=Z.current;return t.addEventListener("transitionend",e),function(){t&&t.removeEventListener("transitionend",e)}}),[]),Object(a.useEffect)((()=>{D&&r?(async()=>{const e=await Object(u.b)(r);M(e)})():D&&M(O)}),[D,O,r]),Object(a.useEffect)((()=>{const{width:e,height:t}=Z.current;e&&t&&I({width:e,height:t})}),[]),Object(a.useEffect)((()=>{C.current&&z&&(v&&s?!s||w||A.a||(B(!0),C.current.play()):(B(!1),C.current.pause()))}),[s,v,w,z]);const T=e=>{e.preventDefault(),C.current.paused?(B(!0),C.current.play()):(B(!1),C.current.pause())},F=()=>{Q(!0),k(!0)};return Object(c.jsxs)("div",{className:i()("image__element-wrapper",{"image__element-wrapper--reveal":x,"image__element-wrapper--in-viewport":s}),onMouseOver:D?()=>{Q(!0),J(!0)}:void 0,onMouseOut:D?()=>J(!1):void 0,style:{"--delay":Object(m.c)(g+1e3)},children:[D&&Object(c.jsxs)(a.Fragment,{children:[Object(c.jsx)("video",{muted:!0,loop:!0,playsInline:!0,className:i()("image__element",{"image__element--loaded":t}),autoPlay:!w,role:"img",onLoadStart:e,src:z,"aria-label":f,ref:C,...y}),Object(c.jsx)(d.a,{in:S||R,onExit:j.b,onExited:()=>Q(!1),timeout:{enter:0,exit:Object(m.b)(h.b.base.durationS)},children:e=>Object(c.jsx)(p.a,{visible:q,children:Object(c.jsxs)(o.a,{className:i()("image__button",`image__button--${e}`),onFocus:F,onBlur:()=>k(!1),onClick:T,children:[Object(c.jsx)(l.a,{icon:_?"pause":"play"}),_?"Pause":"Play"]})})})]}),!D&&Object(c.jsx)("img",{className:i()("image__element",{"image__element--loaded":t}),onLoad:e,decoding:"async",src:V?L:void 0,srcSet:V?r:void 0,width:null===W||void 0===W?void 0:W.width,height:null===W||void 0===W?void 0:W.height,alt:f,...y}),E&&Object(c.jsx)("img",{"aria-hidden":!0,className:i()("image__placeholder",{"image__placeholder--loaded":t}),style:{"--delay":Object(m.c)(g)},ref:Z,src:b,onLoad:e=>{const{width:t,height:s}=e.target;I({width:t,height:s})},width:null===W||void 0===W?void 0:W.width,height:null===W||void 0===W?void 0:W.height,decoding:"async",alt:"",role:"presentation"})]})};t.a=({className:e,style:t,reveal:s,delay:r=0,raised:o,src:l,...d})=>{const[j,A]=Object(a.useState)(!1),{themeId:h}=Object(b.c)(),u=Object(a.useRef)(),p=Object(n.d)(u,!(null===l||void 0===l?void 0:l.endsWith(".mp4"))),O=Object(a.useCallback)((()=>{A(!0)}),[]);return Object(c.jsx)("div",{className:i()("image",e,`image--${h}`,{"image--in-viewport":p,"image--reveal":s,"image--raised":o}),style:{...t,"--delay":Object(m.c)(r)},ref:u,children:Object(c.jsx)(g,{delay:r,onLoad:O,loaded:j,inViewport:p,reveal:s,src:l,...d})})}},74:function(e,t,s){},75:function(e,t,s){"use strict";var c=s(1),a=s(66);s(76);t.a=()=>Object(c.jsxs)("footer",{className:"footer",children:[Object(c.jsx)("span",{className:"footer__date",children:`\xa9 ${(new Date).getFullYear()} Alen Yohannan.`}),Object(c.jsx)(a.a,{secondary:!0,className:"footer__link",href:"/humans.txt",target:"_self",children:"Crafted by yours truly"})]})},76:function(e,t,s){},90:function(e,t,s){},91:function(e,t,s){},94:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(0),r=s(21),i=s(4),n=s.n(i),o=s(73),l=s(22),d=s(9),j=s(27),A=s(61),h=s(2),m=s(58),u=s(59);s(90);function b({title:e,description:t,linkLabel:s="Visit website",url:a,roles:r,className:i}){return Object(c.jsx)(A.a,{className:n()("project__header",i),children:Object(c.jsxs)("div",{className:"project__header-content",style:{"--initDelay":Object(h.c)(300)},children:[Object(c.jsxs)("div",{className:"project__details",children:[Object(c.jsx)(m.a,{className:n()("project__title",{"project__title--entered":!j.a}),level:2,as:"h1",children:e}),Object(c.jsx)(u.a,{className:n()("project__description",{"project__description--entered":!j.a}),size:"xl",children:t}),!!a&&Object(c.jsx)(l.a,{secondary:!0,iconHoverShift:!0,className:n()("project__link-button",{"project__link-button--entered":!j.a}),icon:"chevronRight",href:a,children:s})]}),!!(null===r||void 0===r?void 0:r.length)&&Object(c.jsx)("ul",{className:"project__meta",children:null===r||void 0===r?void 0:r.map(((e,t)=>Object(c.jsx)("li",{className:n()("project__meta-item",{"project__meta-item--entered":!j.a}),style:{"--delay":Object(h.c)(600+140*t)},children:Object(c.jsx)(u.a,{secondary:!0,as:"span",children:e})},e)))})]})})}const p=({className:e,...t})=>Object(c.jsx)("article",{className:n()("project",e),...t}),g=Object(a.forwardRef)((({className:e,light:t,first:s,fullHeight:a,backgroundOverlayOpacity:r=.9,backgroundElement:i,children:o,...l},d)=>Object(c.jsxs)("section",{className:n()("project__section",e,{"project__section--light":t,"project__section--full-height":a}),ref:d,...l,children:[!!i&&Object(c.jsx)("div",{className:"project__section-background",style:{"--opacity":r},children:i}),Object(c.jsx)(A.a,{className:n()("project__section-inner",{"project__section-inner--first":s}),children:o})]}))),O=({opacity:e=.7,className:t,entered:s,...a})=>{const r=Object(d.g)(.6);return Object(c.jsxs)("div",{className:n()("project__background-image",t,{"project__background-image--entered":s}),children:[Object(c.jsx)("div",{className:"project__background-image-element",style:{"--offset":Object(h.d)(r)},children:Object(c.jsx)(o.a,{alt:"",role:"presentation",...a})}),Object(c.jsx)("div",{className:"project__background-scrim",style:{"--opacity":e}})]})},f=({className:e,width:t="l",...s})=>Object(c.jsx)("div",{className:n()("project__section-content",`project__section-content--width-${t}`,e),...s}),v=({className:e,level:t=3,as:s="h2",...a})=>Object(c.jsx)(m.a,{className:n()("project__section-heading",e),as:s,level:t,align:"auto",...a}),x=({className:e,...t})=>Object(c.jsx)(u.a,{className:n()("project__section-text",e),size:"l",...t}),y=({center:e,stretch:t,justify:s="center",width:a="m",noMargin:r,className:i,centerMobile:o,...l})=>Object(c.jsx)("div",{className:n()("project__text-row",`project__text-row--justify-${s}`,`project__text-row--width-${a}`,i,{"project__text-row--center":e,"project__text-row--stretch":t,"project__text-row--center-mobile":o,"project__text-row--no-margin":r}),...l});var w=s(66),E=s.p+"static/media/uses-background.d198197d.mp4",N=s(75);s(91);t.default=()=>(Object(d.k)(),Object(c.jsxs)(a.Fragment,{children:[Object(c.jsxs)(r.a,{children:[Object(c.jsx)("title",{children:"Uses | Alen Yohannan"}),Object(c.jsx)("meta",{name:"description",content:"A list of hardware and software I use to do my thing"})]}),Object(c.jsxs)(p,{className:"uses",children:[Object(c.jsx)(O,{src:E,placeholder:"data:image/jpeg;base64,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",opacity:.7,entered:!j.a}),Object(c.jsx)(b,{title:"Uses",description:"A somewhat comprehensive list of tools, apps, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."}),Object(c.jsx)(g,{first:!0,className:"uses__section",children:Object(c.jsx)(f,{children:Object(c.jsxs)(y,{width:"m",children:[Object(c.jsx)(v,{children:"Development"}),Object(c.jsx)(x,{children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:["I use"," ",Object(c.jsx)(w.a,{href:"https://code.visualstudio.com/",children:"Visual Studio Code"})," ","as my text editor, with the Doki-Emilia-Dark theme and Operator Mono as my typeface of choice."]}),Object(c.jsxs)("li",{children:["For Backend I use"," ",Object(c.jsx)(w.a,{href:"https://rustlang.org",children:"Rust"}),", it's a great Language and it gets work done in minutes"]}),Object(c.jsxs)("li",{children:["For Server Side I use"," ",Object(c.jsx)(w.a,{href:"https://nodejs.org",children:"Node.JS"}),", it's a amazing framework which is really easy to use."]}),Object(c.jsx)("li",{children:"Firefox is my main browser for both development and general use."}),Object(c.jsxs)("li",{children:[Object(c.jsx)(w.a,{href:"https://reactjs.org/",children:"React"})," is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a Backend Developer"]}),Object(c.jsxs)("li",{children:["For 3D effects and image shaders I use"," ",Object(c.jsx)(w.a,{href:"https://threejs.org/",children:"three.js"}),". It has a bit of a learning curve but you can do some really powerful stuff with it."]}),Object(c.jsxs)("li",{children:["For CSS I've used a myriad pre-processors and css-in-js solutions like styled-components, but these days I'm using vanilla CSS with"," ",Object(c.jsx)(w.a,{href:"https://postcss.org/",children:"PostCSS"})," ","to get upcoming CSS features today."]}),Object(c.jsxs)("li",{children:["For Javascript animations I use"," ",Object(c.jsx)(w.a,{href:"https://popmotion.io/api/",children:"Popmotion Pure 8"}),", it's a great way to add spring animations to three.js. All other animations are CSS with"," ",Object(c.jsx)(w.a,{href:"https://reactcommunity.org/react-transition-group/",children:"React Transition Group"})," ","for enter/exit transitions."]})]})})]})})})]}),Object(c.jsx)(N.a,{})]}))}}]);
//# sourceMappingURL=5.48706acd.chunk.js.map