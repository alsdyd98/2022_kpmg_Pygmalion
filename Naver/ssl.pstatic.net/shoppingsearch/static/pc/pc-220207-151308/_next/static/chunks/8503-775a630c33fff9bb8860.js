(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8503],{38802:function(e,t,r){var i,n,o;"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self&&self,n=[r(13980),r(2784)],void 0===(o="function"===typeof(i=function(t,r){"use strict";var i,n;function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!==u(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=i?Object.getOwnPropertyDescriptor(e,n):null;a&&(a.get||a.set)?Object.defineProperty(r,n,a):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=y();return function(){var r,i=S(e);if(t){var n=S(this).constructor;r=Reflect.construct(i,arguments,n)}else r=i.apply(this,arguments);return m(this,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t=s(t),r=a(r);var P={x:"clientWidth",y:"clientHeight"},z={x:"clientTop",y:"clientLeft"},O={x:"innerWidth",y:"innerHeight"},x={x:"offsetWidth",y:"offsetHeight"},k={x:"offsetLeft",y:"offsetTop"},E={x:"overflowX",y:"overflowY"},C={x:"scrollWidth",y:"scrollHeight"},R={x:"scrollLeft",y:"scrollTop"},j={x:"width",y:"height"},M=function(){},T=!!function(){if("undefined"===typeof window)return!1;var e=!1;try{document.createElement("div").addEventListener("test",M,{get passive(){return e=!0,!1}})}catch(t){}return e}()&&{passive:!0},F="ReactList failed to reach a stable state.",I=40,A=function(e,t){for(var r in t)if(e[r]!==t[r])return!1;return!0},_=function(e){for(var t=e.props.axis,r=e.getEl(),i=E[t];r=r.parentElement;)switch(window.getComputedStyle(r)[i]){case"auto":case"scroll":case"overlay":return r}return window},L=function(e){var t=e.props.axis,r=e.scrollParent;return r===window?window[O[t]]:r[P[t]]},D=function(e,t){var r=e.length,i=e.minSize,n=e.type,o=t.from,a=t.size,s=t.itemsPerRow,u=(a=Math.max(a,i))%s;return u&&(a+=s-u),a>r&&(a=r),(u=(o="simple"!==n&&o?Math.max(Math.min(o,r-a),0):0)%s)&&(o-=u,a+=u),o===t.from&&a==t.size?t:b(b({},t),{},{from:o,size:a})};e.exports=(n=i=function(e){h(i,e);var t=d(i);function i(e){var r;return l(this,i),(r=t.call(this,e)).state=D(e,{itemsPerRow:1,from:e.initialIndex,size:0}),r.cache={},r.cachedScrollPosition=null,r.prevPrevState={},r.unstable=!1,r.updateCounter=0,r}return f(i,null,[{key:"getDerivedStateFromProps",value:function(e,t){var r=D(e,t);return r===t?null:r}}]),f(i,[{key:"componentDidMount",value:function(){this.updateFrameAndClearCache=this.updateFrameAndClearCache.bind(this),window.addEventListener("resize",this.updateFrameAndClearCache),this.updateFrame(this.scrollTo.bind(this,this.props.initialIndex))}},{key:"componentDidUpdate",value:function(e){var t=this;if(this.props.axis!==e.axis&&this.clearSizeCache(),!this.unstable){if(++this.updateCounter>I)return this.unstable=!0,console.error(F);this.updateCounterTimeoutId||(this.updateCounterTimeoutId=setTimeout((function(){t.updateCounter=0,delete t.updateCounterTimeoutId}),0)),this.updateFrame()}}},{key:"maybeSetState",value:function(e,t){if(A(this.state,e))return t();this.setState(e,t)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateFrameAndClearCache),this.scrollParent.removeEventListener("scroll",this.updateFrameAndClearCache,T),this.scrollParent.removeEventListener("mousewheel",M,T)}},{key:"getOffset",value:function(e){var t=this.props.axis,r=e[z[t]]||0,i=k[t];do{r+=e[i]||0}while(e=e.offsetParent);return r}},{key:"getEl",value:function(){return this.el||this.items}},{key:"getScrollPosition",value:function(){if("number"===typeof this.cachedScrollPosition)return this.cachedScrollPosition;var e=this.scrollParent,t=this.props.axis,r=R[t],i=e===window?document.body[r]||document.documentElement[r]:e[r],n=this.getScrollSize()-this.props.scrollParentViewportSizeGetter(this),o=Math.max(0,Math.min(i,n)),a=this.getEl();return this.cachedScrollPosition=this.getOffset(e)+o-this.getOffset(a),this.cachedScrollPosition}},{key:"setScroll",value:function(e){var t=this.scrollParent,r=this.props.axis;if(e+=this.getOffset(this.getEl()),t===window)return window.scrollTo(0,e);e-=this.getOffset(this.scrollParent),t[R[r]]=e}},{key:"getScrollSize",value:function(){var e=this.scrollParent,t=document,r=t.body,i=t.documentElement,n=C[this.props.axis];return e===window?Math.max(r[n],i[n]):e[n]}},{key:"hasDeterminateSize",value:function(){var e=this.props,t=e.itemSizeGetter;return"uniform"===e.type||t}},{key:"getStartAndEnd",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props.threshold,t=this.getScrollPosition(),r=Math.max(0,t-e),i=t+this.props.scrollParentViewportSizeGetter(this)+e;return this.hasDeterminateSize()&&(i=Math.min(i,this.getSpaceBefore(this.props.length))),{start:r,end:i}}},{key:"getItemSizeAndItemsPerRow",value:function(){var e=this.props,t=e.axis,r=e.useStaticSize,i=this.state,n=i.itemSize,o=i.itemsPerRow;if(r&&n&&o)return{itemSize:n,itemsPerRow:o};var a=this.items.children;if(!a.length)return{};var s=a[0],u=s[x[t]],l=Math.abs(u-n);if((isNaN(l)||l>=1)&&(n=u),!n)return{};for(var c=k[t],f=s[c],h=a[o=1];h&&h[c]===f;h=a[o])++o;return{itemSize:n,itemsPerRow:o}}},{key:"clearSizeCache",value:function(){this.cachedScrollPosition=null}},{key:"updateFrameAndClearCache",value:function(e){return this.clearSizeCache(),this.updateFrame(e)}},{key:"updateFrame",value:function(e){switch(this.updateScrollParent(),"function"!=typeof e&&(e=M),this.props.type){case"simple":return this.updateSimpleFrame(e);case"variable":return this.updateVariableFrame(e);case"uniform":return this.updateUniformFrame(e)}}},{key:"updateScrollParent",value:function(){var e=this.scrollParent;this.scrollParent=this.props.scrollParentGetter(this),e!==this.scrollParent&&(e&&(e.removeEventListener("scroll",this.updateFrameAndClearCache),e.removeEventListener("mousewheel",M)),this.clearSizeCache(),this.scrollParent.addEventListener("scroll",this.updateFrameAndClearCache,T),this.scrollParent.addEventListener("mousewheel",M,T))}},{key:"updateSimpleFrame",value:function(e){var t=this.getStartAndEnd().end,r=this.items.children,i=0;if(r.length){var n=this.props.axis,o=r[0],a=r[r.length-1];i=this.getOffset(a)+a[x[n]]-this.getOffset(o)}if(i>t)return e();var s=this.props,u=s.pageSize,l=s.length,c=Math.min(this.state.size+u,l);this.maybeSetState({size:c},e)}},{key:"updateVariableFrame",value:function(e){this.props.itemSizeGetter||this.cacheSizes();for(var t=this.getStartAndEnd(),r=t.start,i=t.end,n=this.props,o=n.length,a=n.pageSize,s=0,u=0,l=0,c=o-1;u<c;){var f=this.getSizeOfItem(u);if(null==f||s+f>r)break;s+=f,++u}for(var h=o-u;l<h&&s<i;){var p=this.getSizeOfItem(u+l);if(null==p){l=Math.min(l+a,h);break}s+=p,++l}this.maybeSetState(D(this.props,{from:u,itemsPerRow:1,size:l}),e)}},{key:"updateUniformFrame",value:function(e){var t=this.getItemSizeAndItemsPerRow(),r=t.itemSize,i=t.itemsPerRow;if(!r||!i)return e();var n=this.getStartAndEnd(),o=n.start,a=n.end,s=D(this.props,{from:Math.floor(o/r)*i,size:(Math.ceil((a-o)/r)+1)*i,itemsPerRow:i}),u=s.from,l=s.size;return this.maybeSetState({itemsPerRow:i,from:u,itemSize:r,size:l},e)}},{key:"getSpaceBefore",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null!=t[e])return t[e];var r=this.state,i=r.itemSize,n=r.itemsPerRow;if(i)return t[e]=Math.floor(e/n)*i;for(var o=e;o>0&&null==t[--o];);for(var a=t[o]||0,s=o;s<e;++s){t[s]=a;var u=this.getSizeOfItem(s);if(null==u)break;a+=u}return t[e]=a}},{key:"cacheSizes",value:function(){for(var e=this.cache,t=this.state.from,r=this.items.children,i=x[this.props.axis],n=0,o=r.length;n<o;++n)e[t+n]=r[n][i]}},{key:"getSizeOfItem",value:function(e){var t=this.cache,r=this.items,i=this.props,n=i.axis,o=i.itemSizeGetter,a=i.itemSizeEstimator,s=i.type,u=this.state,l=u.from,c=u.itemSize,f=u.size;if(c)return c;if(o)return o(e);if(e in t)return t[e];if("simple"===s&&e>=l&&e<l+f&&r){var h=r.children[e-l];if(h)return h[x[n]]}return a?a(e,t):void 0}},{key:"scrollTo",value:function(e){null!=e&&this.setScroll(this.getSpaceBefore(e))}},{key:"scrollAround",value:function(e){var t=this.getScrollPosition(),r=this.getSpaceBefore(e),i=r-this.props.scrollParentViewportSizeGetter(this)+this.getSizeOfItem(e),n=Math.min(i,r),o=Math.max(i,r);return t<=n?this.setScroll(n):t>o?this.setScroll(o):void 0}},{key:"getVisibleRange",value:function(){for(var e,t,r=this.state,i=r.from,n=r.size,o=this.getStartAndEnd(0),a=o.start,s=o.end,u={},l=i;l<i+n;++l){var c=this.getSpaceBefore(l,u),f=c+this.getSizeOfItem(l);null==e&&f>a&&(e=l),null!=e&&c<s&&(t=l)}return[e,t]}},{key:"renderItems",value:function(){for(var e=this,t=this.props,r=t.itemRenderer,i=t.itemsRenderer,n=this.state,o=n.from,a=n.size,s=[],u=0;u<a;++u)s.push(r(o+u,u));return i(s,(function(t){return e.items=t}))}},{key:"render",value:function(){var e=this,t=this.props,i=t.axis,n=t.length,o=t.type,a=t.useTranslate3d,s=this.state,u=s.from,l=s.itemsPerRow,c=this.renderItems();if("simple"===o)return c;var f={position:"relative"},h={},p=Math.ceil(n/l)*l,d=this.getSpaceBefore(p,h);d&&(f[j[i]]=d,"x"===i&&(f.overflowX="hidden"));var m=this.getSpaceBefore(u,h),v="x"===i?m:0,y="y"===i?m:0,S=a?"translate3d(".concat(v,"px, ").concat(y,"px, 0)"):"translate(".concat(v,"px, ").concat(y,"px)"),g={msTransform:S,WebkitTransform:S,transform:S};return r.default.createElement("div",{style:f,ref:function(t){return e.el=t}},r.default.createElement("div",{style:g},c))}}]),i}(r.Component),w(i,"displayName","ReactList"),w(i,"propTypes",{axis:t.default.oneOf(["x","y"]),initialIndex:t.default.number,itemRenderer:t.default.func,itemSizeEstimator:t.default.func,itemSizeGetter:t.default.func,itemsRenderer:t.default.func,length:t.default.number,minSize:t.default.number,pageSize:t.default.number,scrollParentGetter:t.default.func,scrollParentViewportSizeGetter:t.default.func,threshold:t.default.number,type:t.default.oneOf(["simple","variable","uniform"]),useStaticSize:t.default.bool,useTranslate3d:t.default.bool}),w(i,"defaultProps",{axis:"y",itemRenderer:function(e,t){return r.default.createElement("div",{key:t},e)},itemsRenderer:function(e,t){return r.default.createElement("div",{ref:t},e)},length:0,minSize:1,pageSize:10,scrollParentGetter:_,scrollParentViewportSizeGetter:L,threshold:100,type:"simple",useStaticSize:!1,useTranslate3d:!1}),n)})?i.apply(t,n):i)||(e.exports=o)},85574:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(2784);var n=function(e,t){var r=function(){var e=(0,i.useRef)(!0);return e.current?(e.current=!1,!0):e.current}();(0,i.useEffect)((function(){if(!r)return e()}),t)}}}]);