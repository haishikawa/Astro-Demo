import{r as a}from"./index.45a47ed6.js";import{d as m,i as x,c as v}from"./counter.3fb45f36.js";function S(e,t,o){let n=new Set([...t,void 0]);return e.listen((r,u)=>{n.has(u)&&o(r,u)})}var l={},_={get exports(){return l},set exports(e){l=e}},d={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=a;function E(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var h=typeof Object.is=="function"?Object.is:E,k=i.useState,j=i.useEffect,w=i.useLayoutEffect,O=i.useDebugValue;function R(e,t){var o=t(),n=k({inst:{value:o,getSnapshot:t}}),r=n[0].inst,u=n[1];return w(function(){r.value=o,r.getSnapshot=t,f(r)&&u({inst:r})},[e,o,t]),j(function(){return f(r)&&u({inst:r}),e(function(){f(r)&&u({inst:r})})},[e]),O(o),o}function f(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!h(e,o)}catch{return!0}}function g(e,t){return t()}var $=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:R;d.useSyncExternalStore=i.useSyncExternalStore!==void 0?i.useSyncExternalStore:$;(function(e){e.exports=d})(_);function b(e,t={}){let o=a.useCallback(r=>t.keys?S(e,t.keys,r):e.listen(r),[t.keys,e]),n=e.get.bind(e);return l.useSyncExternalStore(o,n,n)}var s={},C={get exports(){return s},set exports(e){s=e}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I=a,L=Symbol.for("react.element"),P=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,N=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function y(e,t,o){var n,r={},u=null,p=null;o!==void 0&&(u=""+o),t.key!==void 0&&(u=""+t.key),t.ref!==void 0&&(p=t.ref);for(n in t)D.call(t,n)&&!T.hasOwnProperty(n)&&(r[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)r[n]===void 0&&(r[n]=t[n]);return{$$typeof:L,type:e,key:u,ref:p,props:r,_owner:N.current}}c.Fragment=P;c.jsx=y;c.jsxs=y;(function(e){e.exports=c})(C);function U(){const e=b(v),t="React";return s.jsxs("div",{children:[s.jsx("button",{onClick:m,children:"-"}),s.jsx("pre",{children:e.value}),s.jsx("button",{onClick:x,children:"+"}),s.jsxs("p",{children:["I'm a ",t," component"]})]})}export{U as default};
