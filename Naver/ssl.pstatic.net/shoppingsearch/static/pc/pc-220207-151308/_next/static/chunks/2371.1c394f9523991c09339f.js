(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2371,1421],{37174:function(n,e,t){"use strict";var r=t(52322),a=t(2183),c=t.n(a),i=t(47176),l=t(51685),u=t.n(l),o=c().bind(u());e.Z=function(n){var e=n.title,t=n.targetUrl,a=n.imageUrl,c=n.nclick,l=n.selected,u=n.imageLazyLoad,s=void 0===u||u;return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noopener",title:e,className:o({on:l}),"data-nclick":c,children:(0,r.jsx)("li",{children:(0,r.jsx)(i.LazyLoadImage,{width:940,height:70,src:a,alt:e,visibleByDefault:!s})})})}},21421:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return v}});var r=t(52322),a=t(77243),c=t(10722),i=t(2784),l=t(2183),u=t.n(l),o=t(66811),s=function(n,e){var t=(0,i.useRef)((function(){}));(0,i.useEffect)((function(){t.current=n})),(0,i.useEffect)((function(){if(null!==e){var n=setInterval((function(){return t.current()}),e||0);return function(){return clearInterval(n)}}}),[e])},f=t(56346),b=t(37174),d=t(51685),p=t.n(d);function h(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var _=u().bind(p()),v=function(){var n=(0,i.useState)(0),e=n[0],t=n[1],l=(0,o.v9)((function(n){return n.banners})),u=l.length-1,d=(0,f.Z)((0,r.jsxs)("div",{className:_("banner_area"),children:[(0,r.jsx)("h3",{className:"blind",children:"\ubc30\ub108\uc601\uc5ed"}),(0,r.jsx)("ul",{children:l.map((function(n,t){var c=n.targetUrl,i=n.imageUrl,l=n.title,u=n.dataSeq,o=i.includes("grocery")&&"1"===u,s="N=a:".concat(o?"ban.memban":"ban.banner",",i:").concat(u,",r:").concat(t+1),f=t===e;return(0,r.jsx)(b.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},{title:l,dataSeq:u,targetUrl:c,imageUrl:i,nclick:s,selected:f}),"".concat(l,"-").concat(u))}))}),(0,r.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t((function(n){return 0===n?u:n-1}))},className:_("btn_pre"),"data-nclick":"N=a:ban.prev",children:"\uc774\uc804\ubc30\ub108 \ubcf4\uae30"}),(0,r.jsx)("a",{href:"#",onClick:function(n){n.preventDefault(),t((function(n){return n===u?0:n+1}))},className:_("btn_next"),"data-nclick":"N=a:ban.next",children:"\ub2e4\uc74c\ubc30\ub108 \ubcf4\uae30"})]})),p=(0,c.Z)(d,2),v=p[0],g=p[1];return s((function(){t((function(n){return n===u?0:n+1}))}),g?null:3e3),null!==l&&void 0!==l&&l.length?v:null}},51685:function(n){n.exports={banner_area:"banners_banner_area__1OxCJ",btn_next:"banners_btn_next__2Tf2H",btn_pre:"banners_btn_pre__u6fEy"}}}]);