(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function lE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zg={exports:{}},Pl={},ey={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),uE=Symbol.for("react.portal"),cE=Symbol.for("react.fragment"),hE=Symbol.for("react.strict_mode"),dE=Symbol.for("react.profiler"),fE=Symbol.for("react.provider"),pE=Symbol.for("react.context"),mE=Symbol.for("react.forward_ref"),gE=Symbol.for("react.suspense"),yE=Symbol.for("react.memo"),vE=Symbol.for("react.lazy"),Rp=Symbol.iterator;function _E(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var ty={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ny=Object.assign,ry={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=Ls.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ty}var zh=Uh.prototype=new sy;zh.constructor=Uh;ny(zh,Ls.prototype);zh.isPureReactComponent=!0;var Cp=Array.isArray,iy=Object.prototype.hasOwnProperty,Bh={current:null},oy={key:!0,ref:!0,__self:!0,__source:!0};function ay(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)iy.call(e,r)&&!oy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:go,type:t,key:i,ref:o,props:s,_owner:Bh.current}}function wE(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $h(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function EE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?EE(""+t.key):e.toString(36)}function wa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case uE:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+ju(o,0):r,Cp(s)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),wa(s,e,n,"",function(h){return h})):s!=null&&($h(s)&&(s=wE(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pp,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Cp(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+ju(i,l);o+=wa(i,e,n,u,s)}else if(u=_E(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+ju(i,l++),o+=wa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xo(t,e,n){if(t==null)return t;var r=[],s=0;return wa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function xE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},Ea={transition:null},TE={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Bh};function ly(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Xo,forEach:function(t,e,n){Xo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xo(t,function(){e++}),e},toArray:function(t){return Xo(t,function(e){return e})||[]},only:function(t){if(!$h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Ls;ee.Fragment=cE;ee.Profiler=dE;ee.PureComponent=Uh;ee.StrictMode=hE;ee.Suspense=gE;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;ee.act=ly;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ny({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Bh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)iy.call(e,u)&&!oy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:go,type:t.type,key:s,ref:i,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:pE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fE,_context:t},t.Consumer=t};ee.createElement=ay;ee.createFactory=function(t){var e=ay.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:mE,render:t}};ee.isValidElement=$h;ee.lazy=function(t){return{$$typeof:vE,_payload:{_status:-1,_result:t},_init:xE}};ee.memo=function(t,e){return{$$typeof:yE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};ee.unstable_act=ly;ee.useCallback=function(t,e){return at.current.useCallback(t,e)};ee.useContext=function(t){return at.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return at.current.useDeferredValue(t)};ee.useEffect=function(t,e){return at.current.useEffect(t,e)};ee.useId=function(){return at.current.useId()};ee.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return at.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};ee.useRef=function(t){return at.current.useRef(t)};ee.useState=function(t){return at.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return at.current.useTransition()};ee.version="18.3.1";ey.exports=ee;var G=ey.exports;const IE=lE(G);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE=G,kE=Symbol.for("react.element"),AE=Symbol.for("react.fragment"),RE=Object.prototype.hasOwnProperty,CE=SE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,PE={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)RE.call(e,r)&&!PE.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:kE,type:t,key:i,ref:o,props:s,_owner:CE.current}}Pl.Fragment=AE;Pl.jsx=uy;Pl.jsxs=uy;Zg.exports=Pl;var d=Zg.exports,Ec={},cy={exports:{}},xt={},hy={exports:{}},dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,Q){var Z=z.length;z.push(Q);e:for(;0<Z;){var ge=Z-1>>>1,ue=z[ge];if(0<s(ue,Q))z[ge]=Q,z[Z]=ue,Z=ge;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Q=z[0],Z=z.pop();if(Z!==Q){z[0]=Z;e:for(var ge=0,ue=z.length,Ie=ue>>>1;ge<Ie;){var tn=2*(ge+1)-1,nn=z[tn],rn=tn+1,sn=z[rn];if(0>s(nn,Z))rn<ue&&0>s(sn,nn)?(z[ge]=sn,z[rn]=Z,ge=rn):(z[ge]=nn,z[tn]=Z,ge=tn);else if(rn<ue&&0>s(sn,Z))z[ge]=sn,z[rn]=Z,ge=rn;else break e}}return Q}function s(z,Q){var Z=z.sortIndex-Q.sortIndex;return Z!==0?Z:z.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,y=null,v=3,k=!1,R=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var Q=n(h);Q!==null;){if(Q.callback===null)r(h);else if(Q.startTime<=z)r(h),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(h)}}function D(z){if(N=!1,I(z),!R)if(n(u)!==null)R=!0,qs(j);else{var Q=n(h);Q!==null&&en(D,Q.startTime-z)}}function j(z,Q){R=!1,N&&(N=!1,S(g),g=-1),k=!0;var Z=v;try{for(I(Q),y=n(u);y!==null&&(!(y.expirationTime>Q)||z&&!A());){var ge=y.callback;if(typeof ge=="function"){y.callback=null,v=y.priorityLevel;var ue=ge(y.expirationTime<=Q);Q=t.unstable_now(),typeof ue=="function"?y.callback=ue:y===n(u)&&r(u),I(Q)}else r(u);y=n(u)}if(y!==null)var Ie=!0;else{var tn=n(h);tn!==null&&en(D,tn.startTime-Q),Ie=!1}return Ie}finally{y=null,v=Z,k=!1}}var V=!1,_=null,g=-1,w=5,x=-1;function A(){return!(t.unstable_now()-x<w)}function C(){if(_!==null){var z=t.unstable_now();x=z;var Q=!0;try{Q=_(!0,z)}finally{Q?T():(V=!1,_=null)}}else V=!1}var T;if(typeof E=="function")T=function(){E(C)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,fr=It.port2;It.port1.onmessage=C,T=function(){fr.postMessage(null)}}else T=function(){O(C,0)};function qs(z){_=z,V||(V=!0,T())}function en(z,Q){g=O(function(){z(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,qs(j))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var Z=v;v=Q;try{return z()}finally{v=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Z=v;v=z;try{return Q()}finally{v=Z}},t.unstable_scheduleCallback=function(z,Q,Z){var ge=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ge+Z:ge):Z=ge,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=Z+ue,z={id:p++,callback:Q,priorityLevel:z,startTime:Z,expirationTime:ue,sortIndex:-1},Z>ge?(z.sortIndex=Z,e(h,z),n(u)===null&&z===n(h)&&(N?(S(g),g=-1):N=!0,en(D,Z-ge))):(z.sortIndex=ue,e(u,z),R||k||(R=!0,qs(j))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var Q=v;return function(){var Z=v;v=Q;try{return z.apply(this,arguments)}finally{v=Z}}}})(dy);hy.exports=dy;var NE=hy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bE=G,Et=NE;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fy=new Set,zi={};function Br(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(zi[t]=e,t=0;t<e.length;t++)fy.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=Object.prototype.hasOwnProperty,DE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},bp={};function OE(t){return xc.call(bp,t)?!0:xc.call(Np,t)?!1:DE.test(t)?bp[t]=!0:(Np[t]=!0,!1)}function VE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ME(t,e,n,r){if(e===null||typeof e>"u"||VE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var $e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$e[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$e[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$e[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$e[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$e[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$e[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$e[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$e[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$e[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Hh=/[\-:]([a-z])/g;function Wh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Hh,Wh);$e[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Hh,Wh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Hh,Wh);$e[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});$e.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$e[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function qh(t,e,n,r){var s=$e.hasOwnProperty(e)?$e[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ME(e,n,s,r)&&(n=null),r||s===null?OE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=bE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),py=Symbol.for("react.provider"),my=Symbol.for("react.context"),Gh=Symbol.for("react.forward_ref"),Ic=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Qh=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),gy=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function oi(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,Lu;function mi(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Fu=!1;function Uu(t,e){if(!t||Fu)return"";Fu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Fu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mi(t):""}function jE(t){switch(t.tag){case 5:return mi(t.type);case 16:return mi("Lazy");case 13:return mi("Suspense");case 19:return mi("SuspenseList");case 0:case 2:case 15:return t=Uu(t.type,!1),t;case 11:return t=Uu(t.type.render,!1),t;case 1:return t=Uu(t.type,!0),t;default:return""}}function kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Tc:return"Profiler";case Kh:return"StrictMode";case Ic:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case my:return(t.displayName||"Context")+".Consumer";case py:return(t._context.displayName||"Context")+".Provider";case Gh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qh:return e=t.displayName||null,e!==null?e:kc(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return kc(t(e))}catch{}}return null}function LE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kc(e);case 8:return e===Kh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FE(t){var e=yy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=FE(t))}function vy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=yy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ac(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Op(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _y(t,e){e=e.checked,e!=null&&qh(t,"checked",e,!1)}function Rc(t,e){_y(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Cc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Cc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Cc(t,e,n){(e!=="number"||za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var gi=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Pc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(gi(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function wy(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ey(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ey(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,xy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},UE=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(t){UE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ii[e]=Ii[t]})});function Ty(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ii.hasOwnProperty(t)&&Ii[t]?(""+e).trim():e+"px"}function Iy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ty(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var zE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bc(t,e){if(e){if(zE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function Yh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vc=null,ps=null,ms=null;function Lp(t){if(t=_o(t)){if(typeof Vc!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Vl(e),Vc(t.stateNode,t.type,e))}}function Sy(t){ps?ms?ms.push(t):ms=[t]:ps=t}function ky(){if(ps){var t=ps,e=ms;if(ms=ps=null,Lp(t),e)for(t=0;t<e.length;t++)Lp(e[t])}}function Ay(t,e){return t(e)}function Ry(){}var zu=!1;function Cy(t,e,n){if(zu)return t(e,n);zu=!0;try{return Ay(t,e,n)}finally{zu=!1,(ps!==null||ms!==null)&&(Ry(),ky())}}function $i(t,e){var n=t.stateNode;if(n===null)return null;var r=Vl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Mc=!1;if(vn)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Mc=!1}function BE(t,e,n,r,s,i,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Si=!1,Ba=null,$a=!1,jc=null,$E={onError:function(t){Si=!0,Ba=t}};function HE(t,e,n,r,s,i,o,l,u){Si=!1,Ba=null,BE.apply($E,arguments)}function WE(t,e,n,r,s,i,o,l,u){if(HE.apply(this,arguments),Si){if(Si){var h=Ba;Si=!1,Ba=null}else throw Error(F(198));$a||($a=!0,jc=h)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Py(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fp(t){if($r(t)!==t)throw Error(F(188))}function qE(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Fp(s),t;if(i===r)return Fp(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Ny(t){return t=qE(t),t!==null?by(t):null}function by(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=by(t);if(e!==null)return e;t=t.sibling}return null}var Dy=Et.unstable_scheduleCallback,Up=Et.unstable_cancelCallback,KE=Et.unstable_shouldYield,GE=Et.unstable_requestPaint,ke=Et.unstable_now,QE=Et.unstable_getCurrentPriorityLevel,Xh=Et.unstable_ImmediatePriority,Oy=Et.unstable_UserBlockingPriority,Ha=Et.unstable_NormalPriority,YE=Et.unstable_LowPriority,Vy=Et.unstable_IdlePriority,Nl=null,qt=null;function XE(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:ex,JE=Math.log,ZE=Math.LN2;function ex(t){return t>>>=0,t===0?32:31-(JE(t)/ZE|0)|0}var ta=64,na=4194304;function yi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=yi(l):(i&=o,i!==0&&(r=yi(i)))}else o=n&~s,o!==0?r=yi(o):i!==0&&(r=yi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Lt(e),s=1<<n,r|=t[n],e&=~s;return r}function tx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nx(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Lt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=tx(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function Lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function My(){var t=ta;return ta<<=1,!(ta&4194240)&&(ta=64),t}function Bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Lt(e),t[e]=n}function rx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Lt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Jh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Lt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var ae=0;function jy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ly,Zh,Fy,Uy,zy,Fc=!1,ra=[],$n=null,Hn=null,Wn=null,Hi=new Map,Wi=new Map,Vn=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Hi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(e.pointerId)}}function li(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=_o(e),e!==null&&Zh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ix(t,e,n,r,s){switch(e){case"focusin":return $n=li($n,t,e,n,r,s),!0;case"dragenter":return Hn=li(Hn,t,e,n,r,s),!0;case"mouseover":return Wn=li(Wn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Hi.set(i,li(Hi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Wi.set(i,li(Wi.get(i)||null,t,e,n,r,s)),!0}return!1}function By(t){var e=xr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=Py(n),e!==null){t.blockedOn=e,zy(t.priority,function(){Fy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oc=r,n.target.dispatchEvent(r),Oc=null}else return e=_o(n),e!==null&&Zh(e),t.blockedOn=n,!1;e.shift()}return!0}function Bp(t,e,n){xa(t)&&n.delete(e)}function ox(){Fc=!1,$n!==null&&xa($n)&&($n=null),Hn!==null&&xa(Hn)&&(Hn=null),Wn!==null&&xa(Wn)&&(Wn=null),Hi.forEach(Bp),Wi.forEach(Bp)}function ui(t,e){t.blockedOn===e&&(t.blockedOn=null,Fc||(Fc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,ox)))}function qi(t){function e(s){return ui(s,t)}if(0<ra.length){ui(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&ui($n,t),Hn!==null&&ui(Hn,t),Wn!==null&&ui(Wn,t),Hi.forEach(e),Wi.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)By(n),n.blockedOn===null&&Vn.shift()}var gs=kn.ReactCurrentBatchConfig,qa=!0;function ax(t,e,n,r){var s=ae,i=gs.transition;gs.transition=null;try{ae=1,ed(t,e,n,r)}finally{ae=s,gs.transition=i}}function lx(t,e,n,r){var s=ae,i=gs.transition;gs.transition=null;try{ae=4,ed(t,e,n,r)}finally{ae=s,gs.transition=i}}function ed(t,e,n,r){if(qa){var s=Uc(t,e,n,r);if(s===null)Ju(t,e,r,Ka,n),zp(t,r);else if(ix(s,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<sx.indexOf(t)){for(;s!==null;){var i=_o(s);if(i!==null&&Ly(i),i=Uc(t,e,n,r),i===null&&Ju(t,e,r,Ka,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ju(t,e,r,null,n)}}var Ka=null;function Uc(t,e,n,r){if(Ka=null,t=Yh(r),t=xr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Py(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function $y(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(QE()){case Xh:return 1;case Oy:return 4;case Ha:case YE:return 16;case Vy:return 536870912;default:return 16}default:return 16}}var Un=null,td=null,Ta=null;function Hy(){if(Ta)return Ta;var t,e=td,n=e.length,r,s="value"in Un?Un.value:Un.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ta=s.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sa(){return!0}function $p(){return!1}function Tt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sa:$p,this.isPropagationStopped=$p,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sa)},persist:function(){},isPersistent:sa}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Tt(Fs),vo=_e({},Fs,{view:0,detail:0}),ux=Tt(vo),$u,Hu,ci,bl=_e({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ci&&(ci&&t.type==="mousemove"?($u=t.screenX-ci.screenX,Hu=t.screenY-ci.screenY):Hu=$u=0,ci=t),$u)},movementY:function(t){return"movementY"in t?t.movementY:Hu}}),Hp=Tt(bl),cx=_e({},bl,{dataTransfer:0}),hx=Tt(cx),dx=_e({},vo,{relatedTarget:0}),Wu=Tt(dx),fx=_e({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),px=Tt(fx),mx=_e({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gx=Tt(mx),yx=_e({},Fs,{data:0}),Wp=Tt(yx),vx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function rd(){return Ex}var xx=_e({},vo,{key:function(t){if(t.key){var e=vx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rd,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tx=Tt(xx),Ix=_e({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Tt(Ix),Sx=_e({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rd}),kx=Tt(Sx),Ax=_e({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rx=Tt(Ax),Cx=_e({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Tt(Cx),Nx=[9,13,27,32],sd=vn&&"CompositionEvent"in window,ki=null;vn&&"documentMode"in document&&(ki=document.documentMode);var bx=vn&&"TextEvent"in window&&!ki,Wy=vn&&(!sd||ki&&8<ki&&11>=ki),Kp=" ",Gp=!1;function qy(t,e){switch(t){case"keyup":return Nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ky(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Dx(t,e){switch(t){case"compositionend":return Ky(e);case"keypress":return e.which!==32?null:(Gp=!0,Kp);case"textInput":return t=e.data,t===Kp&&Gp?null:t;default:return null}}function Ox(t,e){if(ns)return t==="compositionend"||!sd&&qy(t,e)?(t=Hy(),Ta=td=Un=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wy&&e.locale!=="ko"?null:e.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Vx[t.type]:e==="textarea"}function Gy(t,e,n,r){Sy(r),e=Ga(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ai=null,Ki=null;function Mx(t){i0(t,0)}function Dl(t){var e=is(t);if(vy(e))return t}function jx(t,e){if(t==="change")return e}var Qy=!1;if(vn){var qu;if(vn){var Ku="oninput"in document;if(!Ku){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),Ku=typeof Yp.oninput=="function"}qu=Ku}else qu=!1;Qy=qu&&(!document.documentMode||9<document.documentMode)}function Xp(){Ai&&(Ai.detachEvent("onpropertychange",Yy),Ki=Ai=null)}function Yy(t){if(t.propertyName==="value"&&Dl(Ki)){var e=[];Gy(e,Ki,t,Yh(t)),Cy(Mx,e)}}function Lx(t,e,n){t==="focusin"?(Xp(),Ai=e,Ki=n,Ai.attachEvent("onpropertychange",Yy)):t==="focusout"&&Xp()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(Ki)}function Ux(t,e){if(t==="click")return Dl(e)}function zx(t,e){if(t==="input"||t==="change")return Dl(e)}function Bx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:Bx;function Gi(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!xc.call(e,s)||!zt(t[s],e[s]))return!1}return!0}function Jp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zp(t,e){var n=Jp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jp(n)}}function Xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Jy(){for(var t=window,e=za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=za(t.document)}return e}function id(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function $x(t){var e=Jy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Xy(n.ownerDocument.documentElement,n)){if(r!==null&&id(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Zp(n,i);var o=Zp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hx=vn&&"documentMode"in document&&11>=document.documentMode,rs=null,zc=null,Ri=null,Bc=!1;function em(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||rs==null||rs!==za(r)||(r=rs,"selectionStart"in r&&id(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Gi(Ri,r)||(Ri=r,r=Ga(zc,"onSelect"),0<r.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=rs)))}function ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},Gu={},Zy={};vn&&(Zy=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Ol(t){if(Gu[t])return Gu[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zy)return Gu[t]=e[n];return t}var e0=Ol("animationend"),t0=Ol("animationiteration"),n0=Ol("animationstart"),r0=Ol("transitionend"),s0=new Map,tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){s0.set(t,e),Br(e,[t])}for(var Qu=0;Qu<tm.length;Qu++){var Yu=tm[Qu],Wx=Yu.toLowerCase(),qx=Yu[0].toUpperCase()+Yu.slice(1);or(Wx,"on"+qx)}or(e0,"onAnimationEnd");or(t0,"onAnimationIteration");or(n0,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(r0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("cancel close invalid load scroll toggle".split(" ").concat(vi));function nm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,WE(r,e,void 0,t),t.currentTarget=null}function i0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;nm(s,l,h),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;nm(s,l,h),i=u}}}if($a)throw t=jc,$a=!1,jc=null,t}function fe(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var r=t+"__bubble";n.has(r)||(o0(e,t,2,!1),n.add(r))}function Xu(t,e,n){var r=0;e&&(r|=4),o0(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[oa]){t[oa]=!0,fy.forEach(function(n){n!=="selectionchange"&&(Kx.has(n)||Xu(n,!1,t),Xu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,Xu("selectionchange",!1,e))}}function o0(t,e,n,r){switch($y(e)){case 1:var s=ax;break;case 4:s=lx;break;default:s=ed}n=s.bind(null,e,n,t),s=void 0,!Mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ju(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=xr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Cy(function(){var h=i,p=Yh(n),y=[];e:{var v=s0.get(t);if(v!==void 0){var k=nd,R=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":k=Tx;break;case"focusin":R="focus",k=Wu;break;case"focusout":R="blur",k=Wu;break;case"beforeblur":case"afterblur":k=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=kx;break;case e0:case t0:case n0:k=px;break;case r0:k=Rx;break;case"scroll":k=ux;break;case"wheel":k=Px;break;case"copy":case"cut":case"paste":k=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=qp}var N=(e&4)!==0,O=!N&&t==="scroll",S=N?v!==null?v+"Capture":null:v;N=[];for(var E=h,I;E!==null;){I=E;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,S!==null&&(D=$i(E,S),D!=null&&N.push(Yi(E,D,I)))),O)break;E=E.return}0<N.length&&(v=new k(v,R,null,n,p),y.push({event:v,listeners:N}))}}if(!(e&7)){e:{if(v=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",v&&n!==Oc&&(R=n.relatedTarget||n.fromElement)&&(xr(R)||R[_n]))break e;if((k||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=h,R=R?xr(R):null,R!==null&&(O=$r(R),R!==O||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=h),k!==R)){if(N=Hp,D="onMouseLeave",S="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=qp,D="onPointerLeave",S="onPointerEnter",E="pointer"),O=k==null?v:is(k),I=R==null?v:is(R),v=new N(D,E+"leave",k,n,p),v.target=O,v.relatedTarget=I,D=null,xr(p)===h&&(N=new N(S,E+"enter",R,n,p),N.target=I,N.relatedTarget=O,D=N),O=D,k&&R)t:{for(N=k,S=R,E=0,I=N;I;I=Yr(I))E++;for(I=0,D=S;D;D=Yr(D))I++;for(;0<E-I;)N=Yr(N),E--;for(;0<I-E;)S=Yr(S),I--;for(;E--;){if(N===S||S!==null&&N===S.alternate)break t;N=Yr(N),S=Yr(S)}N=null}else N=null;k!==null&&rm(y,v,k,N,!1),R!==null&&O!==null&&rm(y,O,R,N,!0)}}e:{if(v=h?is(h):window,k=v.nodeName&&v.nodeName.toLowerCase(),k==="select"||k==="input"&&v.type==="file")var j=jx;else if(Qp(v))if(Qy)j=zx;else{j=Fx;var V=Lx}else(k=v.nodeName)&&k.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(j=Ux);if(j&&(j=j(t,h))){Gy(y,j,n,p);break e}V&&V(t,v,h),t==="focusout"&&(V=v._wrapperState)&&V.controlled&&v.type==="number"&&Cc(v,"number",v.value)}switch(V=h?is(h):window,t){case"focusin":(Qp(V)||V.contentEditable==="true")&&(rs=V,zc=h,Ri=null);break;case"focusout":Ri=zc=rs=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,em(y,n,p);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":em(y,n,p)}var _;if(sd)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ns?qy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(Wy&&n.locale!=="ko"&&(ns||g!=="onCompositionStart"?g==="onCompositionEnd"&&ns&&(_=Hy()):(Un=p,td="value"in Un?Un.value:Un.textContent,ns=!0)),V=Ga(h,g),0<V.length&&(g=new Wp(g,t,null,n,p),y.push({event:g,listeners:V}),_?g.data=_:(_=Ky(n),_!==null&&(g.data=_)))),(_=bx?Dx(t,n):Ox(t,n))&&(h=Ga(h,"onBeforeInput"),0<h.length&&(p=new Wp("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:h}),p.data=_))}i0(y,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=$i(t,n),i!=null&&r.unshift(Yi(t,i,s)),i=$i(t,e),i!=null&&r.push(Yi(t,i,s))),t=t.return}return r}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,s?(u=$i(n,i),u!=null&&o.unshift(Yi(n,u,l))):s||(u=$i(n,i),u!=null&&o.push(Yi(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Gx=/\r\n?/g,Qx=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(Gx,`
`).replace(Qx,"")}function aa(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(F(425))}function Qa(){}var $c=null,Hc=null;function Wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,im=typeof Promise=="function"?Promise:void 0,Xx=typeof queueMicrotask=="function"?queueMicrotask:typeof im<"u"?function(t){return im.resolve(null).then(t).catch(Jx)}:qc;function Jx(t){setTimeout(function(){throw t})}function Zu(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),qi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);qi(e)}function qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function om(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Us,Xi="__reactProps$"+Us,_n="__reactContainer$"+Us,Kc="__reactEvents$"+Us,Zx="__reactListeners$"+Us,e1="__reactHandles$"+Us;function xr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=om(t);t!==null;){if(n=t[Wt])return n;t=om(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Wt]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function is(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Vl(t){return t[Xi]||null}var Gc=[],os=-1;function ar(t){return{current:t}}function pe(t){0>os||(t.current=Gc[os],Gc[os]=null,os--)}function he(t,e){os++,Gc[os]=t.current,t.current=e}var nr={},et=ar(nr),dt=ar(!1),Pr=nr;function Is(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function ft(t){return t=t.childContextTypes,t!=null}function Ya(){pe(dt),pe(et)}function am(t,e,n){if(et.current!==nr)throw Error(F(168));he(et,e),he(dt,n)}function a0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,LE(t)||"Unknown",s));return _e({},n,r)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=et.current,he(et,t),he(dt,dt.current),!0}function lm(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=a0(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,pe(dt),pe(et),he(et,t)):pe(dt),he(dt,n)}var un=null,Ml=!1,ec=!1;function l0(t){un===null?un=[t]:un.push(t)}function t1(t){Ml=!0,l0(t)}function lr(){if(!ec&&un!==null){ec=!0;var t=0,e=ae;try{var n=un;for(ae=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,Ml=!1}catch(s){throw un!==null&&(un=un.slice(t+1)),Dy(Xh,lr),s}finally{ae=e,ec=!1}}return null}var as=[],ls=0,Ja=null,Za=0,St=[],kt=0,Nr=null,hn=1,dn="";function _r(t,e){as[ls++]=Za,as[ls++]=Ja,Ja=t,Za=e}function u0(t,e,n){St[kt++]=hn,St[kt++]=dn,St[kt++]=Nr,Nr=t;var r=hn;t=dn;var s=32-Lt(r)-1;r&=~(1<<s),n+=1;var i=32-Lt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,hn=1<<32-Lt(e)+s|n<<s|r,dn=i+t}else hn=1<<i|n<<s|r,dn=t}function od(t){t.return!==null&&(_r(t,1),u0(t,1,0))}function ad(t){for(;t===Ja;)Ja=as[--ls],as[ls]=null,Za=as[--ls],as[ls]=null;for(;t===Nr;)Nr=St[--kt],St[kt]=null,dn=St[--kt],St[kt]=null,hn=St[--kt],St[kt]=null}var _t=null,yt=null,me=!1,Mt=null;function c0(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,yt=qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,yt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,yt=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(me){var e=yt;if(e){var n=e;if(!um(t,e)){if(Qc(t))throw Error(F(418));e=qn(n.nextSibling);var r=_t;e&&um(t,e)?c0(r,n):(t.flags=t.flags&-4097|2,me=!1,_t=t)}}else{if(Qc(t))throw Error(F(418));t.flags=t.flags&-4097|2,me=!1,_t=t}}}function cm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function la(t){if(t!==_t)return!1;if(!me)return cm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wc(t.type,t.memoizedProps)),e&&(e=yt)){if(Qc(t))throw h0(),Error(F(418));for(;e;)c0(t,e),e=qn(e.nextSibling)}if(cm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yt=qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yt=null}}else yt=_t?qn(t.stateNode.nextSibling):null;return!0}function h0(){for(var t=yt;t;)t=qn(t.nextSibling)}function Ss(){yt=_t=null,me=!1}function ld(t){Mt===null?Mt=[t]:Mt.push(t)}var n1=kn.ReactCurrentBatchConfig;function hi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function d0(t){function e(S,E){if(t){var I=S.deletions;I===null?(S.deletions=[E],S.flags|=16):I.push(E)}}function n(S,E){if(!t)return null;for(;E!==null;)e(S,E),E=E.sibling;return null}function r(S,E){for(S=new Map;E!==null;)E.key!==null?S.set(E.key,E):S.set(E.index,E),E=E.sibling;return S}function s(S,E){return S=Yn(S,E),S.index=0,S.sibling=null,S}function i(S,E,I){return S.index=I,t?(I=S.alternate,I!==null?(I=I.index,I<E?(S.flags|=2,E):I):(S.flags|=2,E)):(S.flags|=1048576,E)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,E,I,D){return E===null||E.tag!==6?(E=ac(I,S.mode,D),E.return=S,E):(E=s(E,I),E.return=S,E)}function u(S,E,I,D){var j=I.type;return j===ts?p(S,E,I.props.children,D,I.key):E!==null&&(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&hm(j)===E.type)?(D=s(E,I.props),D.ref=hi(S,E,I),D.return=S,D):(D=Na(I.type,I.key,I.props,null,S.mode,D),D.ref=hi(S,E,I),D.return=S,D)}function h(S,E,I,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==I.containerInfo||E.stateNode.implementation!==I.implementation?(E=lc(I,S.mode,D),E.return=S,E):(E=s(E,I.children||[]),E.return=S,E)}function p(S,E,I,D,j){return E===null||E.tag!==7?(E=Rr(I,S.mode,D,j),E.return=S,E):(E=s(E,I),E.return=S,E)}function y(S,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return E=ac(""+E,S.mode,I),E.return=S,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Jo:return I=Na(E.type,E.key,E.props,null,S.mode,I),I.ref=hi(S,null,E),I.return=S,I;case es:return E=lc(E,S.mode,I),E.return=S,E;case Dn:var D=E._init;return y(S,D(E._payload),I)}if(gi(E)||oi(E))return E=Rr(E,S.mode,I,null),E.return=S,E;ua(S,E)}return null}function v(S,E,I,D){var j=E!==null?E.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return j!==null?null:l(S,E,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Jo:return I.key===j?u(S,E,I,D):null;case es:return I.key===j?h(S,E,I,D):null;case Dn:return j=I._init,v(S,E,j(I._payload),D)}if(gi(I)||oi(I))return j!==null?null:p(S,E,I,D,null);ua(S,I)}return null}function k(S,E,I,D,j){if(typeof D=="string"&&D!==""||typeof D=="number")return S=S.get(I)||null,l(E,S,""+D,j);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Jo:return S=S.get(D.key===null?I:D.key)||null,u(E,S,D,j);case es:return S=S.get(D.key===null?I:D.key)||null,h(E,S,D,j);case Dn:var V=D._init;return k(S,E,I,V(D._payload),j)}if(gi(D)||oi(D))return S=S.get(I)||null,p(E,S,D,j,null);ua(E,D)}return null}function R(S,E,I,D){for(var j=null,V=null,_=E,g=E=0,w=null;_!==null&&g<I.length;g++){_.index>g?(w=_,_=null):w=_.sibling;var x=v(S,_,I[g],D);if(x===null){_===null&&(_=w);break}t&&_&&x.alternate===null&&e(S,_),E=i(x,E,g),V===null?j=x:V.sibling=x,V=x,_=w}if(g===I.length)return n(S,_),me&&_r(S,g),j;if(_===null){for(;g<I.length;g++)_=y(S,I[g],D),_!==null&&(E=i(_,E,g),V===null?j=_:V.sibling=_,V=_);return me&&_r(S,g),j}for(_=r(S,_);g<I.length;g++)w=k(_,S,g,I[g],D),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?g:w.key),E=i(w,E,g),V===null?j=w:V.sibling=w,V=w);return t&&_.forEach(function(A){return e(S,A)}),me&&_r(S,g),j}function N(S,E,I,D){var j=oi(I);if(typeof j!="function")throw Error(F(150));if(I=j.call(I),I==null)throw Error(F(151));for(var V=j=null,_=E,g=E=0,w=null,x=I.next();_!==null&&!x.done;g++,x=I.next()){_.index>g?(w=_,_=null):w=_.sibling;var A=v(S,_,x.value,D);if(A===null){_===null&&(_=w);break}t&&_&&A.alternate===null&&e(S,_),E=i(A,E,g),V===null?j=A:V.sibling=A,V=A,_=w}if(x.done)return n(S,_),me&&_r(S,g),j;if(_===null){for(;!x.done;g++,x=I.next())x=y(S,x.value,D),x!==null&&(E=i(x,E,g),V===null?j=x:V.sibling=x,V=x);return me&&_r(S,g),j}for(_=r(S,_);!x.done;g++,x=I.next())x=k(_,S,g,x.value,D),x!==null&&(t&&x.alternate!==null&&_.delete(x.key===null?g:x.key),E=i(x,E,g),V===null?j=x:V.sibling=x,V=x);return t&&_.forEach(function(C){return e(S,C)}),me&&_r(S,g),j}function O(S,E,I,D){if(typeof I=="object"&&I!==null&&I.type===ts&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Jo:e:{for(var j=I.key,V=E;V!==null;){if(V.key===j){if(j=I.type,j===ts){if(V.tag===7){n(S,V.sibling),E=s(V,I.props.children),E.return=S,S=E;break e}}else if(V.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Dn&&hm(j)===V.type){n(S,V.sibling),E=s(V,I.props),E.ref=hi(S,V,I),E.return=S,S=E;break e}n(S,V);break}else e(S,V);V=V.sibling}I.type===ts?(E=Rr(I.props.children,S.mode,D,I.key),E.return=S,S=E):(D=Na(I.type,I.key,I.props,null,S.mode,D),D.ref=hi(S,E,I),D.return=S,S=D)}return o(S);case es:e:{for(V=I.key;E!==null;){if(E.key===V)if(E.tag===4&&E.stateNode.containerInfo===I.containerInfo&&E.stateNode.implementation===I.implementation){n(S,E.sibling),E=s(E,I.children||[]),E.return=S,S=E;break e}else{n(S,E);break}else e(S,E);E=E.sibling}E=lc(I,S.mode,D),E.return=S,S=E}return o(S);case Dn:return V=I._init,O(S,E,V(I._payload),D)}if(gi(I))return R(S,E,I,D);if(oi(I))return N(S,E,I,D);ua(S,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,E!==null&&E.tag===6?(n(S,E.sibling),E=s(E,I),E.return=S,S=E):(n(S,E),E=ac(I,S.mode,D),E.return=S,S=E),o(S)):n(S,E)}return O}var ks=d0(!0),f0=d0(!1),el=ar(null),tl=null,us=null,ud=null;function cd(){ud=us=tl=null}function hd(t){var e=el.current;pe(el),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){tl=t,ud=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ht=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(tl===null)throw Error(F(308));us=t,tl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var Tr=null;function dd(t){Tr===null?Tr=[t]:Tr.push(t)}function p0(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,dd(e)):(n.next=s.next,s.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function fd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function m0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,wn(t,n)}return s=r.interleaved,s===null?(e.next=e,dd(r)):(e.next=s.next,s.next=e),r.interleaved=e,wn(t,n)}function Sa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var s=t.updateQueue;On=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?i=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(i!==null){var y=s.baseState;o=0,p=h=u=null,l=i;do{var v=l.lane,k=l.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,N=l;switch(v=e,k=n,N.tag){case 1:if(R=N.payload,typeof R=="function"){y=R.call(k,y,v);break e}y=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,v=typeof R=="function"?R.call(k,y,v):R,v==null)break e;y=_e({},y,v);break e;case 2:On=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,v=s.effects,v===null?s.effects=[l]:v.push(l))}else k={eventTime:k,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=k,u=y):p=p.next=k,o|=v;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;v=l,l=v.next,v.next=null,s.lastBaseUpdate=v,s.shared.pending=null}}while(!0);if(p===null&&(u=y),s.baseState=u,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=y}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var wo={},Kt=ar(wo),Ji=ar(wo),Zi=ar(wo);function Ir(t){if(t===wo)throw Error(F(174));return t}function pd(t,e){switch(he(Zi,e),he(Ji,t),he(Kt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}pe(Kt),he(Kt,e)}function As(){pe(Kt),pe(Ji),pe(Zi)}function g0(t){Ir(Zi.current);var e=Ir(Kt.current),n=Nc(e,t.type);e!==n&&(he(Ji,t),he(Kt,n))}function md(t){Ji.current===t&&(pe(Kt),pe(Ji))}var ye=ar(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tc=[];function gd(){for(var t=0;t<tc.length;t++)tc[t]._workInProgressVersionPrimary=null;tc.length=0}var ka=kn.ReactCurrentDispatcher,nc=kn.ReactCurrentBatchConfig,br=0,ve=null,Pe=null,Ve=null,sl=!1,Ci=!1,eo=0,r1=0;function Ge(){throw Error(F(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function vd(t,e,n,r,s,i){if(br=i,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ka.current=t===null||t.memoizedState===null?a1:l1,t=n(r,s),Ci){i=0;do{if(Ci=!1,eo=0,25<=i)throw Error(F(301));i+=1,Ve=Pe=null,e.updateQueue=null,ka.current=u1,t=n(r,s)}while(Ci)}if(ka.current=il,e=Pe!==null&&Pe.next!==null,br=0,Ve=Pe=ve=null,sl=!1,e)throw Error(F(300));return t}function _d(){var t=eo!==0;return eo=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?ve.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Pt(){if(Pe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=Pe.next;var e=Ve===null?ve.memoizedState:Ve.next;if(e!==null)Ve=e,Pe=t;else{if(t===null)throw Error(F(310));Pe=t,t={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Ve===null?ve.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function to(t,e){return typeof e=="function"?e(t):e}function rc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Pe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,h=i;do{var p=h.lane;if((br&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var y={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,ve.lanes|=p,Dr|=p}h=h.next}while(h!==null&&h!==i);u===null?o=r:u.next=l,zt(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ve.lanes|=i,Dr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sc(t){var e=Pt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);zt(i,e.memoizedState)||(ht=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function y0(){}function v0(t,e){var n=ve,r=Pt(),s=e(),i=!zt(r.memoizedState,s);if(i&&(r.memoizedState=s,ht=!0),r=r.queue,wd(E0.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,no(9,w0.bind(null,n,r,s,e),void 0,null),Me===null)throw Error(F(349));br&30||_0(n,e,s)}return s}function _0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,r){e.value=n,e.getSnapshot=r,x0(e)&&T0(t)}function E0(t,e,n){return n(function(){x0(e)&&T0(t)})}function x0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function T0(t){var e=wn(t,1);e!==null&&Ft(e,t,1,-1)}function pm(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=o1.bind(null,ve,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function I0(){return Pt().memoizedState}function Aa(t,e,n,r){var s=$t();ve.flags|=t,s.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function jl(t,e,n,r){var s=Pt();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var o=Pe.memoizedState;if(i=o.destroy,r!==null&&yd(r,o.deps)){s.memoizedState=no(e,n,i,r);return}}ve.flags|=t,s.memoizedState=no(1|e,n,i,r)}function mm(t,e){return Aa(8390656,8,t,e)}function wd(t,e){return jl(2048,8,t,e)}function S0(t,e){return jl(4,2,t,e)}function k0(t,e){return jl(4,4,t,e)}function A0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function R0(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,A0.bind(null,e,t),n)}function Ed(){}function C0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function P0(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function N0(t,e,n){return br&21?(zt(n,e)||(n=My(),ve.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n)}function s1(t,e){var n=ae;ae=n!==0&&4>n?n:4,t(!0);var r=nc.transition;nc.transition={};try{t(!1),e()}finally{ae=n,nc.transition=r}}function b0(){return Pt().memoizedState}function i1(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},D0(t))O0(e,n);else if(n=p0(t,e,n,r),n!==null){var s=ot();Ft(n,t,r,s),V0(n,e,r)}}function o1(t,e,n){var r=Qn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(D0(t))O0(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,zt(l,o)){var u=e.interleaved;u===null?(s.next=s,dd(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=p0(t,e,s,r),n!==null&&(s=ot(),Ft(n,t,r,s),V0(n,e,r))}}function D0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function O0(t,e){Ci=sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jh(t,n)}}var il={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},a1={readContext:Ct,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:mm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,A0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=i1.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:pm,useDebugValue:Ed,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=pm(!1),e=t[0];return t=s1.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,s=$t();if(me){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Me===null)throw Error(F(349));br&30||_0(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,mm(E0.bind(null,r,i,t),[t]),r.flags|=2048,no(9,w0.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=$t(),e=Me.identifierPrefix;if(me){var n=dn,r=hn;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=r1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l1={readContext:Ct,useCallback:C0,useContext:Ct,useEffect:wd,useImperativeHandle:R0,useInsertionEffect:S0,useLayoutEffect:k0,useMemo:P0,useReducer:rc,useRef:I0,useState:function(){return rc(to)},useDebugValue:Ed,useDeferredValue:function(t){var e=Pt();return N0(e,Pe.memoizedState,t)},useTransition:function(){var t=rc(to)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:b0,unstable_isNewReconciler:!1},u1={readContext:Ct,useCallback:C0,useContext:Ct,useEffect:wd,useImperativeHandle:R0,useInsertionEffect:S0,useLayoutEffect:k0,useMemo:P0,useReducer:sc,useRef:I0,useState:function(){return sc(to)},useDebugValue:Ed,useDeferredValue:function(t){var e=Pt();return Pe===null?e.memoizedState=t:N0(e,Pe.memoizedState,t)},useTransition:function(){var t=sc(to)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:y0,useSyncExternalStore:v0,useId:b0,unstable_isNewReconciler:!1};function Ot(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),s=Qn(t),i=gn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Kn(t,i,s),e!==null&&(Ft(e,t,s,r),Sa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),s=Qn(t),i=gn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Kn(t,i,s),e!==null&&(Ft(e,t,s,r),Sa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=Qn(t),s=gn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Kn(t,s,r),e!==null&&(Ft(e,t,r,n),Sa(e,t,r))}};function gm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Gi(n,r)||!Gi(s,i):!0}function M0(t,e,n){var r=!1,s=nr,i=e.contextType;return typeof i=="object"&&i!==null?i=Ct(i):(s=ft(e)?Pr:et.current,r=e.contextTypes,i=(r=r!=null)?Is(t,s):nr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function ym(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function Zc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},fd(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ct(i):(i=ft(e)?Pr:et.current,s.context=Is(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ll.enqueueReplaceState(s,s.state,null),nl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",r=e;do n+=jE(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function j0(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,ch=r),eh(t,e)},n}function L0(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){eh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){eh(t,e),typeof r!="function"&&(Gn===null?Gn=new Set([this]):Gn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new c1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=I1.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Kn(n,e,1))),n.lanes|=1),t)}var h1=kn.ReactCurrentOwner,ht=!1;function it(t,e,n,r){e.child=t===null?f0(e,null,n,r):ks(e,t.child,n,r)}function Em(t,e,n,r,s){n=n.render;var i=e.ref;return ys(e,s),r=vd(t,e,n,r,i,s),n=_d(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,En(t,e,s)):(me&&n&&od(e),e.flags|=1,it(t,e,r,s),e.child)}function xm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,F0(t,e,i,r,s)):(t=Na(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gi,n(o,r)&&t.ref===e.ref)return En(t,e,s)}return e.flags|=1,t=Yn(i,r),t.ref=e.ref,t.return=e,e.child=t}function F0(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Gi(i,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(ht=!0);else return e.lanes=t.lanes,En(t,e,s)}return th(t,e,n,r,s)}function U0(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he(hs,gt),gt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he(hs,gt),gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,he(hs,gt),gt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,he(hs,gt),gt|=r;return it(t,e,s,n),e.child}function z0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function th(t,e,n,r,s){var i=ft(n)?Pr:et.current;return i=Is(e,i),ys(e,s),n=vd(t,e,n,r,i,s),r=_d(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,En(t,e,s)):(me&&r&&od(e),e.flags|=1,it(t,e,n,s),e.child)}function Tm(t,e,n,r,s){if(ft(n)){var i=!0;Xa(e)}else i=!1;if(ys(e,s),e.stateNode===null)Ra(t,e),M0(e,n,r),Zc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=ft(n)?Pr:et.current,h=Is(e,h));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&ym(e,o,r,h),On=!1;var v=e.memoizedState;o.state=v,nl(e,r,o,s),u=e.memoizedState,l!==r||v!==u||dt.current||On?(typeof p=="function"&&(Jc(e,n,p,r),u=e.memoizedState),(l=On||gm(e,n,l,r,v,u,h))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,m0(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Ot(e.type,l),o.props=h,y=e.pendingProps,v=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ft(n)?Pr:et.current,u=Is(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||v!==u)&&ym(e,o,r,u),On=!1,v=e.memoizedState,o.state=v,nl(e,r,o,s);var R=e.memoizedState;l!==y||v!==R||dt.current||On?(typeof k=="function"&&(Jc(e,n,k,r),R=e.memoizedState),(h=On||gm(e,n,h,r,v,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),r=!1)}return nh(t,e,n,r,i,s)}function nh(t,e,n,r,s,i){z0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&lm(e,n,!1),En(t,e,i);r=e.stateNode,h1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ks(e,t.child,null,i),e.child=ks(e,null,l,i)):it(t,e,l,i),e.memoizedState=r.state,s&&lm(e,n,!0),e.child}function B0(t){var e=t.stateNode;e.pendingContext?am(t,e.pendingContext,e.pendingContext!==e.context):e.context&&am(t,e.context,!1),pd(t,e.containerInfo)}function Im(t,e,n,r,s){return Ss(),ld(s),e.flags|=256,it(t,e,n,r),e.child}var rh={dehydrated:null,treeContext:null,retryLane:0};function sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var r=e.pendingProps,s=ye.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),he(ye,s&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=zl(o,r,0,null),t=Rr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sh(n),e.memoizedState=rh,t):xd(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return d1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Yn(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Yn(l,i):(i=Rr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rh,r}return i=t.child,t=i.sibling,r=Yn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xd(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,r){return r!==null&&ld(r),ks(e,t.child,null,n),t=xd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function d1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=ic(Error(F(422))),ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=zl({mode:"visible",children:r.children},s,0,null),i=Rr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ks(e,t.child,null,o),e.child.memoizedState=sh(o),e.memoizedState=rh,i);if(!(e.mode&1))return ca(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=ic(i,r,void 0),ca(t,e,o,r)}if(l=(o&t.childLanes)!==0,ht||l){if(r=Me,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,wn(t,s),Ft(r,t,s,-1))}return Rd(),r=ic(Error(F(421))),ca(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=S1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,yt=qn(s.nextSibling),_t=e,me=!0,Mt=null,t!==null&&(St[kt++]=hn,St[kt++]=dn,St[kt++]=Nr,hn=t.id,dn=t.overflow,Nr=e),e=xd(e,r.children),e.flags|=4096,e)}function Sm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xc(t.return,e,n)}function oc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function H0(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(it(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,n,e);else if(t.tag===19)Sm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(ye,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),oc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&rl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}oc(e,!0,n,null,i);break;case"together":oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function f1(t,e,n){switch(e.tag){case 3:B0(e),Ss();break;case 5:g0(e);break;case 1:ft(e.type)&&Xa(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;he(el,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(he(ye,ye.current&1),t=En(t,e,n),t!==null?t.sibling:null);he(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return H0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),he(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,U0(t,e,n)}return En(t,e,n)}var W0,ih,q0,K0;W0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ih=function(){};q0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Ir(Kt.current);var i=null;switch(n){case"input":s=Ac(t,s),r=Ac(t,r),i=[];break;case"select":s=_e({},s,{value:void 0}),r=_e({},r,{value:void 0}),i=[];break;case"textarea":s=Pc(t,s),r=Pc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qa)}bc(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var l=s[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(zi.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var u=r[h];if(l=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(zi.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),i||l===u||(i=[])):(i=i||[]).push(h,u))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};K0=function(t,e,n,r){n!==r&&(e.flags|=4)};function di(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function p1(t,e,n){var r=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return ft(e.type)&&Ya(),Qe(e),null;case 3:return r=e.stateNode,As(),pe(dt),pe(et),gd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(fh(Mt),Mt=null))),ih(t,e),Qe(e),null;case 5:md(e);var s=Ir(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)q0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Qe(e),null}if(t=Ir(Kt.current),la(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Wt]=e,r[Xi]=i,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(s=0;s<vi.length;s++)fe(vi[s],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Op(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":Mp(r,i),fe("invalid",r)}bc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&aa(r.textContent,l,t),s=["children",""+l]):zi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Zo(r),Vp(r,i,!0);break;case"textarea":Zo(r),jp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Qa)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ey(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[Xi]=r,W0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dc(n,r),n){case"dialog":fe("cancel",t),fe("close",t),s=r;break;case"iframe":case"object":case"embed":fe("load",t),s=r;break;case"video":case"audio":for(s=0;s<vi.length;s++)fe(vi[s],t);s=r;break;case"source":fe("error",t),s=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),s=r;break;case"details":fe("toggle",t),s=r;break;case"input":Op(t,r),s=Ac(t,r),fe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=_e({},r,{value:void 0}),fe("invalid",t);break;case"textarea":Mp(t,r),s=Pc(t,r),fe("invalid",t);break;default:s=r}bc(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Iy(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&xy(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bi(t,u):typeof u=="number"&&Bi(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zi.hasOwnProperty(i)?u!=null&&i==="onScroll"&&fe("scroll",t):u!=null&&qh(t,i,u,o))}switch(n){case"input":Zo(t),Vp(t,r,!1);break;case"textarea":Zo(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?fs(t,!!r.multiple,i,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)K0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ir(Zi.current),Ir(Kt.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(i=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Qe(e),null;case 13:if(pe(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&yt!==null&&e.mode&1&&!(e.flags&128))h0(),Ss(),e.flags|=98560,i=!1;else if(i=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[Wt]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),i=!1}else Mt!==null&&(fh(Mt),Mt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?be===0&&(be=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return As(),ih(t,e),t===null&&Qi(e.stateNode.containerInfo),Qe(e),null;case 10:return hd(e.type._context),Qe(e),null;case 17:return ft(e.type)&&Ya(),Qe(e),null;case 19:if(pe(ye),i=e.memoizedState,i===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)di(i,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,di(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(ye,ye.current&1|2),e.child}t=t.sibling}i.tail!==null&&ke()>Cs&&(e.flags|=128,r=!0,di(i,!1),e.lanes=4194304)}else{if(!r)if(t=rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),di(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!me)return Qe(e),null}else 2*ke()-i.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,r=!0,di(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ke(),e.sibling=null,n=ye.current,he(ye,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return Ad(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?gt&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function m1(t,e){switch(ad(e),e.tag){case 1:return ft(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return As(),pe(dt),pe(et),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(pe(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(ye),null;case 4:return As(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Ad(),null;case 24:return null;default:return null}}var ha=!1,Je=!1,g1=typeof WeakSet=="function"?WeakSet:Set,B=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function oh(t,e,n){try{n()}catch(r){xe(t,e,r)}}var km=!1;function y1(t,e){if($c=qa,t=Jy(),id(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,y=t,v=null;t:for(;;){for(var k;y!==n||s!==0&&y.nodeType!==3||(l=o+s),y!==i||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(k=y.firstChild)!==null;)v=y,y=k;for(;;){if(y===t)break t;if(v===n&&++h===s&&(l=o),v===i&&++p===r&&(u=o),(k=y.nextSibling)!==null)break;y=v,v=y.parentNode}y=k}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},qa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var N=R.memoizedProps,O=R.memoizedState,S=e.stateNode,E=S.getSnapshotBeforeUpdate(e.elementType===e.type?N:Ot(e.type,N),O);S.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return R=km,km=!1,R}function Pi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&oh(e,n,i)}s=s.next}while(s!==r)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ah(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function G0(t){var e=t.alternate;e!==null&&(t.alternate=null,G0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[Xi],delete e[Kc],delete e[Zx],delete e[e1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Q0(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(r!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}function uh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uh(t,e,n),t=t.sibling;t!==null;)uh(t,e,n),t=t.sibling}var Le=null,Vt=!1;function Nn(t,e,n){for(n=n.child;n!==null;)Y0(t,e,n),n=n.sibling}function Y0(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Nl,n)}catch{}switch(n.tag){case 5:Je||cs(n,e);case 6:var r=Le,s=Vt;Le=null,Nn(t,e,n),Le=r,Vt=s,Le!==null&&(Vt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Vt?(t=Le,n=n.stateNode,t.nodeType===8?Zu(t.parentNode,n):t.nodeType===1&&Zu(t,n),qi(t)):Zu(Le,n.stateNode));break;case 4:r=Le,s=Vt,Le=n.stateNode.containerInfo,Vt=!0,Nn(t,e,n),Le=r,Vt=s;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&oh(n,e,o),s=s.next}while(s!==r)}Nn(t,e,n);break;case 1:if(!Je&&(cs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Nn(t,e,n),Je=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new g1),e.forEach(function(r){var s=k1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,Vt=!1;break e;case 3:Le=l.stateNode.containerInfo,Vt=!0;break e;case 4:Le=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Le===null)throw Error(F(160));Y0(i,o,s),Le=null,Vt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(h){xe(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)X0(e,t),e=e.sibling}function X0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dt(e,t),Bt(t),r&4){try{Pi(3,t,t.return),Fl(3,t)}catch(N){xe(t,t.return,N)}try{Pi(5,t,t.return)}catch(N){xe(t,t.return,N)}}break;case 1:Dt(e,t),Bt(t),r&512&&n!==null&&cs(n,n.return);break;case 5:if(Dt(e,t),Bt(t),r&512&&n!==null&&cs(n,n.return),t.flags&32){var s=t.stateNode;try{Bi(s,"")}catch(N){xe(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_y(s,i),Dc(l,o);var h=Dc(l,i);for(o=0;o<u.length;o+=2){var p=u[o],y=u[o+1];p==="style"?Iy(s,y):p==="dangerouslySetInnerHTML"?xy(s,y):p==="children"?Bi(s,y):qh(s,p,y,h)}switch(l){case"input":Rc(s,i);break;case"textarea":wy(s,i);break;case"select":var v=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?fs(s,!!i.multiple,k,!1):v!==!!i.multiple&&(i.defaultValue!=null?fs(s,!!i.multiple,i.defaultValue,!0):fs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Xi]=i}catch(N){xe(t,t.return,N)}}break;case 6:if(Dt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){xe(t,t.return,N)}}break;case 3:if(Dt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qi(e.containerInfo)}catch(N){xe(t,t.return,N)}break;case 4:Dt(e,t),Bt(t);break;case 13:Dt(e,t),Bt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Sd=ke())),r&4&&Rm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||p,Dt(e,t),Je=h):Dt(e,t),Bt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(y=B=p;B!==null;){switch(v=B,k=v.child,v.tag){case 0:case 11:case 14:case 15:Pi(4,v,v.return);break;case 1:cs(v,v.return);var R=v.stateNode;if(typeof R.componentWillUnmount=="function"){r=v,n=v.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(N){xe(r,n,N)}}break;case 5:cs(v,v.return);break;case 22:if(v.memoizedState!==null){Pm(y);continue}}k!==null?(k.return=v,B=k):Pm(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{s=y.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ty("display",o))}catch(N){xe(t,t.return,N)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=h?"":y.memoizedProps}catch(N){xe(t,t.return,N)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Dt(e,t),Bt(t),r&4&&Rm(t);break;case 21:break;default:Dt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Bi(s,""),r.flags&=-33);var i=Am(t);uh(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Am(t);lh(t,l,o);break;default:throw Error(F(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v1(t,e,n){B=t,J0(t)}function J0(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ha;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||Je;l=ha;var h=Je;if(ha=o,(Je=u)&&!h)for(B=s;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Nm(s):u!==null?(u.return=o,B=u):Nm(s);for(;i!==null;)B=i,J0(i),i=i.sibling;B=s,ha=l,Je=h}Cm(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,B=i):Cm(t)}}function Cm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||Fl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Ot(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&fm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&qi(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&ah(e)}catch(v){xe(e,e.return,v)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Pm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Nm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){xe(e,s,u)}}var i=e.return;try{ah(e)}catch(u){xe(e,i,u)}break;case 5:var o=e.return;try{ah(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var _1=Math.ceil,ol=kn.ReactCurrentDispatcher,Td=kn.ReactCurrentOwner,Rt=kn.ReactCurrentBatchConfig,se=0,Me=null,Re=null,ze=0,gt=0,hs=ar(0),be=0,ro=null,Dr=0,Ul=0,Id=0,Ni=null,ut=null,Sd=0,Cs=1/0,ln=null,al=!1,ch=null,Gn=null,da=!1,zn=null,ll=0,bi=0,hh=null,Ca=-1,Pa=0;function ot(){return se&6?ke():Ca!==-1?Ca:Ca=ke()}function Qn(t){return t.mode&1?se&2&&ze!==0?ze&-ze:n1.transition!==null?(Pa===0&&(Pa=My()),Pa):(t=ae,t!==0||(t=window.event,t=t===void 0?16:$y(t.type)),t):1}function Ft(t,e,n,r){if(50<bi)throw bi=0,hh=null,Error(F(185));yo(t,n,r),(!(se&2)||t!==Me)&&(t===Me&&(!(se&2)&&(Ul|=n),be===4&&Mn(t,ze)),pt(t,r),n===1&&se===0&&!(e.mode&1)&&(Cs=ke()+500,Ml&&lr()))}function pt(t,e){var n=t.callbackNode;nx(t,e);var r=Wa(t,t===Me?ze:0);if(r===0)n!==null&&Up(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Up(n),e===1)t.tag===0?t1(bm.bind(null,t)):l0(bm.bind(null,t)),Xx(function(){!(se&6)&&lr()}),n=null;else{switch(jy(r)){case 1:n=Xh;break;case 4:n=Oy;break;case 16:n=Ha;break;case 536870912:n=Vy;break;default:n=Ha}n=ov(n,Z0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Z0(t,e){if(Ca=-1,Pa=0,se&6)throw Error(F(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=Wa(t,t===Me?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ul(t,r);else{e=r;var s=se;se|=2;var i=tv();(Me!==t||ze!==e)&&(ln=null,Cs=ke()+500,Ar(t,e));do try{x1();break}catch(l){ev(t,l)}while(!0);cd(),ol.current=i,se=s,Re!==null?e=0:(Me=null,ze=0,e=be)}if(e!==0){if(e===2&&(s=Lc(t),s!==0&&(r=s,e=dh(t,s))),e===1)throw n=ro,Ar(t,0),Mn(t,r),pt(t,ke()),n;if(e===6)Mn(t,r);else{if(s=t.current.alternate,!(r&30)&&!w1(s)&&(e=ul(t,r),e===2&&(i=Lc(t),i!==0&&(r=i,e=dh(t,i))),e===1))throw n=ro,Ar(t,0),Mn(t,r),pt(t,ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:wr(t,ut,ln);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Sd+500-ke(),10<e)){if(Wa(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=qc(wr.bind(null,t,ut,ln),e);break}wr(t,ut,ln);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Lt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_1(r/1960))-r,10<r){t.timeoutHandle=qc(wr.bind(null,t,ut,ln),r);break}wr(t,ut,ln);break;case 5:wr(t,ut,ln);break;default:throw Error(F(329))}}}return pt(t,ke()),t.callbackNode===n?Z0.bind(null,t):null}function dh(t,e){var n=Ni;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=ul(t,e),t!==2&&(e=ut,ut=n,e!==null&&fh(e)),t}function fh(t){ut===null?ut=t:ut.push.apply(ut,t)}function w1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!zt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~Id,e&=~Ul,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Lt(e),r=1<<n;t[n]=-1,e&=~r}}function bm(t){if(se&6)throw Error(F(327));vs();var e=Wa(t,0);if(!(e&1))return pt(t,ke()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var r=Lc(t);r!==0&&(e=r,n=dh(t,r))}if(n===1)throw n=ro,Ar(t,0),Mn(t,e),pt(t,ke()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,ut,ln),pt(t,ke()),null}function kd(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Cs=ke()+500,Ml&&lr())}}function Or(t){zn!==null&&zn.tag===0&&!(se&6)&&vs();var e=se;se|=1;var n=Rt.transition,r=ae;try{if(Rt.transition=null,ae=1,t)return t()}finally{ae=r,Rt.transition=n,se=e,!(se&6)&&lr()}}function Ad(){gt=hs.current,pe(hs)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yx(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:As(),pe(dt),pe(et),gd();break;case 5:md(r);break;case 4:As();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:hd(r.type._context);break;case 22:case 23:Ad()}n=n.return}if(Me=t,Re=t=Yn(t.current,null),ze=gt=e,be=0,ro=null,Id=Ul=Dr=0,ut=Ni=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Tr=null}return t}function ev(t,e){do{var n=Re;try{if(cd(),ka.current=il,sl){for(var r=ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}sl=!1}if(br=0,Ve=Pe=ve=null,Ci=!1,eo=0,Td.current=null,n===null||n.return===null){be=1,ro=e,Re=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=_m(o);if(k!==null){k.flags&=-257,wm(k,o,l,i,e),k.mode&1&&vm(i,h,e),e=k,u=h;var R=e.updateQueue;if(R===null){var N=new Set;N.add(u),e.updateQueue=N}else R.add(u);break e}else{if(!(e&1)){vm(i,h,e),Rd();break e}u=Error(F(426))}}else if(me&&l.mode&1){var O=_m(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),wm(O,o,l,i,e),ld(Rs(u,l));break e}}i=u=Rs(u,l),be!==4&&(be=2),Ni===null?Ni=[i]:Ni.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var S=j0(i,u,e);dm(i,S);break e;case 1:l=u;var E=i.type,I=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Gn===null||!Gn.has(I)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=L0(i,l,e);dm(i,D);break e}}i=i.return}while(i!==null)}rv(n)}catch(j){e=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function tv(){var t=ol.current;return ol.current=il,t===null?il:t}function Rd(){(be===0||be===3||be===2)&&(be=4),Me===null||!(Dr&268435455)&&!(Ul&268435455)||Mn(Me,ze)}function ul(t,e){var n=se;se|=2;var r=tv();(Me!==t||ze!==e)&&(ln=null,Ar(t,e));do try{E1();break}catch(s){ev(t,s)}while(!0);if(cd(),se=n,ol.current=r,Re!==null)throw Error(F(261));return Me=null,ze=0,be}function E1(){for(;Re!==null;)nv(Re)}function x1(){for(;Re!==null&&!KE();)nv(Re)}function nv(t){var e=iv(t.alternate,t,gt);t.memoizedProps=t.pendingProps,e===null?rv(t):Re=e,Td.current=null}function rv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m1(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,Re=null;return}}else if(n=p1(n,e,gt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);be===0&&(be=5)}function wr(t,e,n){var r=ae,s=Rt.transition;try{Rt.transition=null,ae=1,T1(t,e,n,r)}finally{Rt.transition=s,ae=r}return null}function T1(t,e,n,r){do vs();while(zn!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(rx(t,i),t===Me&&(Re=Me=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||da||(da=!0,ov(Ha,function(){return vs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Rt.transition,Rt.transition=null;var o=ae;ae=1;var l=se;se|=4,Td.current=null,y1(t,n),X0(n,t),$x(Hc),qa=!!$c,Hc=$c=null,t.current=n,v1(n),GE(),se=l,ae=o,Rt.transition=i}else t.current=n;if(da&&(da=!1,zn=t,ll=s),i=t.pendingLanes,i===0&&(Gn=null),XE(n.stateNode),pt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(al)throw al=!1,t=ch,ch=null,t;return ll&1&&t.tag!==0&&vs(),i=t.pendingLanes,i&1?t===hh?bi++:(bi=0,hh=t):bi=0,lr(),null}function vs(){if(zn!==null){var t=jy(ll),e=Rt.transition,n=ae;try{if(Rt.transition=null,ae=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,ll=0,se&6)throw Error(F(331));var s=se;for(se|=4,B=t.current;B!==null;){var i=B,o=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Pi(8,p,i)}var y=p.child;if(y!==null)y.return=p,B=y;else for(;B!==null;){p=B;var v=p.sibling,k=p.return;if(G0(p),p===h){B=null;break}if(v!==null){v.return=k,B=v;break}B=k}}}var R=i.alternate;if(R!==null){var N=R.child;if(N!==null){R.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}B=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,B=o;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Pi(9,i,i.return)}var S=i.sibling;if(S!==null){S.return=i.return,B=S;break e}B=i.return}}var E=t.current;for(B=E;B!==null;){o=B;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,B=I;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fl(9,l)}}catch(j){xe(l,l.return,j)}if(l===o){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(se=s,lr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Nl,t)}catch{}r=!0}return r}finally{ae=n,Rt.transition=e}}return!1}function Dm(t,e,n){e=Rs(n,e),e=j0(t,e,1),t=Kn(t,e,1),e=ot(),t!==null&&(yo(t,1,e),pt(t,e))}function xe(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Gn===null||!Gn.has(r))){t=Rs(n,t),t=L0(e,t,1),e=Kn(e,t,1),t=ot(),e!==null&&(yo(e,1,t),pt(e,t));break}}e=e.return}}function I1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(ze&n)===n&&(be===4||be===3&&(ze&130023424)===ze&&500>ke()-Sd?Ar(t,0):Id|=n),pt(t,e)}function sv(t,e){e===0&&(t.mode&1?(e=na,na<<=1,!(na&130023424)&&(na=4194304)):e=1);var n=ot();t=wn(t,e),t!==null&&(yo(t,e,n),pt(t,n))}function S1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sv(t,n)}function k1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),sv(t,n)}var iv;iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ht=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ht=!1,f1(t,e,n);ht=!!(t.flags&131072)}else ht=!1,me&&e.flags&1048576&&u0(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ra(t,e),t=e.pendingProps;var s=Is(e,et.current);ys(e,n),s=vd(null,e,r,t,s,n);var i=_d();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(i=!0,Xa(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,fd(e),s.updater=Ll,e.stateNode=s,s._reactInternals=e,Zc(e,r,t,n),e=nh(null,e,r,!0,i,n)):(e.tag=0,me&&i&&od(e),it(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=R1(r),t=Ot(r,t),s){case 0:e=th(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Em(null,e,r,t,n);break e;case 14:e=xm(null,e,r,Ot(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),th(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Tm(t,e,r,s,n);case 3:e:{if(B0(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,m0(t,e),nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Rs(Error(F(423)),e),e=Im(t,e,r,n,s);break e}else if(r!==s){s=Rs(Error(F(424)),e),e=Im(t,e,r,n,s);break e}else for(yt=qn(e.stateNode.containerInfo.firstChild),_t=e,me=!0,Mt=null,n=f0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===s){e=En(t,e,n);break e}it(t,e,r,n)}e=e.child}return e;case 5:return g0(e),t===null&&Yc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Wc(r,s)?o=null:i!==null&&Wc(r,i)&&(e.flags|=32),z0(t,e),it(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return $0(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ks(e,null,r,n):it(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Em(t,e,r,s,n);case 7:return it(t,e,e.pendingProps,n),e.child;case 8:return it(t,e,e.pendingProps.children,n),e.child;case 12:return it(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,he(el,r._currentValue),r._currentValue=o,i!==null)if(zt(i.value,o)){if(i.children===s.children&&!dt.current){e=En(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gn(-1,n&-n),u.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Xc(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}it(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ys(e,n),s=Ct(s),r=r(s),e.flags|=1,it(t,e,r,n),e.child;case 14:return r=e.type,s=Ot(r,e.pendingProps),s=Ot(r.type,s),xm(t,e,r,s,n);case 15:return F0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Ot(r,s),Ra(t,e),e.tag=1,ft(r)?(t=!0,Xa(e)):t=!1,ys(e,n),M0(e,r,s),Zc(e,r,s,n),nh(null,e,r,!0,t,n);case 19:return H0(t,e,n);case 22:return U0(t,e,n)}throw Error(F(156,e.tag))};function ov(t,e){return Dy(t,e)}function A1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new A1(t,e,n,r)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function R1(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gh)return 11;if(t===Qh)return 14}return 2}function Yn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Rr(n.children,s,i,e);case Kh:o=8,s|=8;break;case Tc:return t=At(12,n,e,s|2),t.elementType=Tc,t.lanes=i,t;case Ic:return t=At(13,n,e,s),t.elementType=Ic,t.lanes=i,t;case Sc:return t=At(19,n,e,s),t.elementType=Sc,t.lanes=i,t;case gy:return zl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case py:o=10;break e;case my:o=9;break e;case Gh:o=11;break e;case Qh:o=14;break e;case Dn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=At(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Rr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function zl(t,e,n,r){return t=At(22,t,r,e),t.elementType=gy,t.lanes=n,t.stateNode={isHidden:!1},t}function ac(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function lc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function C1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bu(0),this.expirationTimes=Bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,r,s,i,o,l,u){return t=new C1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=At(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(i),t}function P1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function av(t){if(!t)return nr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ft(n))return a0(t,n,e)}return e}function lv(t,e,n,r,s,i,o,l,u){return t=Pd(n,r,!0,t,s,i,o,l,u),t.context=av(null),n=t.current,r=ot(),s=Qn(n),i=gn(r,s),i.callback=e??null,Kn(n,i,s),t.current.lanes=s,yo(t,s,r),pt(t,r),t}function Bl(t,e,n,r){var s=e.current,i=ot(),o=Qn(s);return n=av(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Kn(s,e,o),t!==null&&(Ft(t,s,o,i),Sa(t,s,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Om(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Nd(t,e){Om(t,e),(t=t.alternate)&&Om(t,e)}function N1(){return null}var uv=typeof reportError=="function"?reportError:function(t){console.error(t)};function bd(t){this._internalRoot=t}$l.prototype.render=bd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Bl(t,e,null,null)};$l.prototype.unmount=bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Bl(null,t,null,null)}),e[_n]=null}};function $l(t){this._internalRoot=t}$l.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&By(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function b1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=cl(o);i.call(h)}}var o=lv(e,r,t,0,null,!1,!1,"",Vm);return t._reactRootContainer=o,t[_n]=o.current,Qi(t.nodeType===8?t.parentNode:t),Or(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var h=cl(u);l.call(h)}}var u=Pd(t,0,!1,null,null,!1,!1,"",Vm);return t._reactRootContainer=u,t[_n]=u.current,Qi(t.nodeType===8?t.parentNode:t),Or(function(){Bl(e,u,n,r)}),u}function Wl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=cl(o);l.call(u)}}Bl(e,o,t,s)}else o=b1(n,e,t,s,r);return cl(o)}Ly=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=yi(e.pendingLanes);n!==0&&(Jh(e,n|1),pt(e,ke()),!(se&6)&&(Cs=ke()+500,lr()))}break;case 13:Or(function(){var r=wn(t,1);if(r!==null){var s=ot();Ft(r,t,1,s)}}),Nd(t,1)}};Zh=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=ot();Ft(e,t,134217728,n)}Nd(t,134217728)}};Fy=function(t){if(t.tag===13){var e=Qn(t),n=wn(t,e);if(n!==null){var r=ot();Ft(n,t,e,r)}Nd(t,e)}};Uy=function(){return ae};zy=function(t,e){var n=ae;try{return ae=t,e()}finally{ae=n}};Vc=function(t,e,n){switch(e){case"input":if(Rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Vl(r);if(!s)throw Error(F(90));vy(r),Rc(r,s)}}}break;case"textarea":wy(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};Ay=kd;Ry=Or;var D1={usingClientEntryPoint:!1,Events:[_o,is,Vl,Sy,ky,kd]},fi={findFiberByHostInstance:xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},O1={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ny(t),t===null?null:t.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance||N1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Nl=fa.inject(O1),qt=fa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(F(200));return P1(t,e,null,n)};xt.createRoot=function(t,e){if(!Dd(t))throw Error(F(299));var n=!1,r="",s=uv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,r,s),t[_n]=e.current,Qi(t.nodeType===8?t.parentNode:t),new bd(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Ny(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Or(t)};xt.hydrate=function(t,e,n){if(!Hl(e))throw Error(F(200));return Wl(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=uv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=lv(e,null,t,1,n??null,s,!1,i,o),t[_n]=e.current,Qi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new $l(e)};xt.render=function(t,e,n){if(!Hl(e))throw Error(F(200));return Wl(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Hl(t))throw Error(F(40));return t._reactRootContainer?(Or(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};xt.unstable_batchedUpdates=kd;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Wl(t,e,n,!1,r)};xt.version="18.3.1-next-f1338f8080-20240426";function cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cv)}catch(t){console.error(t)}}cv(),cy.exports=xt;var V1=cy.exports,Mm=V1;Ec.createRoot=Mm.createRoot,Ec.hydrateRoot=Mm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),K=(t,e)=>{const n=G.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...h},p)=>G.createElement("svg",{ref:p,...M1,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${j1(t)}`,l].join(" "),...h},[...e.map(([y,v])=>G.createElement(y,v)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=K("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=K("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=K("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=K("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=K("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=K("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=K("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=K("CheckCircle",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=K("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=K("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=K("Coins",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=K("Contact",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=K("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=K("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=K("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=K("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=K("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=K("FolderPlus",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=K("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=K("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=K("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=K("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=K("ListOrdered",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=K("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=K("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=K("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=K("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=K("MinusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eT=K("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tT=K("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=K("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=K("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=K("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iT=K("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=K("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=K("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=K("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=K("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=K("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),hT=({currentTab:t,onTabChange:e,user:n,onLogout:r})=>{const s=[{id:"normal",label:"Mode Normal",icon:mh},{id:"dmi",label:"Mode DMI",icon:mv},{id:"stats",label:"Stats",icon:dv},{id:"test",label:"Mode Test",icon:ql},{id:"guide",label:"Guide",icon:fv},{id:"faq",label:"FAQ",icon:gv},{id:"contact",label:"Contact",icon:dl}];return d.jsx("nav",{className:"sticky top-0 z-50 w-full glass-panel border-b border-slate-200/60 shadow-sm transition-all duration-300",children:d.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:d.jsxs("div",{className:"flex justify-between items-center h-20 sm:h-24",children:[d.jsxs("div",{className:"flex items-center gap-2.5 cursor-pointer group flex-shrink-0 mr-4",onClick:()=>e("normal"),children:[d.jsx("div",{className:"bg-emerald-500 text-white p-2 rounded-xl shadow-emerald-200 shadow-lg group-hover:scale-105 transition-transform",children:d.jsx(mh,{size:24,strokeWidth:3})}),d.jsxs("span",{className:"text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap",children:[d.jsx("span",{className:"text-blue-600",children:"Dicta"}),d.jsx("span",{className:"text-emerald-600",children:"Med"})]})]}),d.jsxs("div",{className:"flex items-center gap-3 flex-1 justify-end",children:[d.jsx("div",{className:"flex bg-slate-100/80 p-1.5 rounded-2xl overflow-x-auto no-scrollbar max-w-[calc(100vw-180px)] sm:max-w-none",children:s.map(i=>{const o=i.icon,l=t===i.id;return i.id==="stats"&&!n?null:d.jsxs("button",{onClick:()=>e(i.id),className:`
                      flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap
                      ${l?"bg-white text-emerald-700 shadow-sm ring-1 ring-black/5":"text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"}
                    `,children:[d.jsx(o,{size:18,className:`sm:mr-2 ${l?"text-emerald-500":"text-slate-400"}`,strokeWidth:2.5}),d.jsx("span",{className:"hidden sm:inline",children:i.label})]},i.id)})}),n&&d.jsxs("div",{className:"hidden md:flex items-center gap-3 border-l border-slate-200 pl-4 flex-shrink-0",children:[d.jsxs("div",{className:"flex flex-col items-end mr-1",children:[d.jsx("span",{className:"text-sm font-bold text-slate-800 max-w-[120px] truncate",children:n.login.split("@")[0]}),d.jsx("span",{className:"text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md",children:"Connecté"})]}),d.jsx("button",{onClick:r,className:"p-2.5 rounded-xl bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-slate-200 transition-all hover:shadow-sm",title:"Déconnexion",children:d.jsx(X1,{size:20,strokeWidth:2.5})})]})]})]})})})};var zm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},wv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,h=u?t[s+2]:0,p=i>>2,y=(i&3)<<4|l>>4;let v=(l&15)<<2|h>>6,k=h&63;u||(k=64,o||(v=64)),r.push(n[p],n[y],n[v],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_v(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const y=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||y==null)throw new fT;const v=i<<2|l>>4;if(r.push(v),h!==64){const k=l<<4&240|h>>2;if(r.push(k),y!==64){const R=h<<6&192|y;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pT=function(t){const e=_v(t);return wv.encodeByteArray(e,!0)},fl=function(t){return pT(t).replace(/\./g,"")},Ev=function(t){try{return wv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=()=>mT().__FIREBASE_DEFAULTS__,yT=()=>{if(typeof process>"u"||typeof zm>"u")return;const t=zm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ev(t[1]);return e&&JSON.parse(e)},Kl=()=>{try{return gT()||yT()||vT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xv=t=>{var e,n;return(n=(e=Kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_T=t=>{const e=xv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tv=()=>{var t;return(t=Kl())===null||t===void 0?void 0:t.config},Iv=t=>{var e;return(e=Kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function TT(){var t;const e=(t=Kl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ST(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AT(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RT(){return!TT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function CT(){try{return typeof indexedDB=="object"}catch{return!1}}function PT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=NT,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}}class Eo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?bT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new An(s,l,r)}}function bT(t,e){return t.replace(DT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DT=/\{\$([^}]+)}/g;function OT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bm(i)&&Bm(o)){if(!pl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function _i(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function wi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VT(t,e){const n=new MT(t,e);return n.subscribe.bind(n)}class MT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");jT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uc),s.error===void 0&&(s.error=uc),s.complete===void 0&&(s.complete=uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UT(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:FT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function FT(t){return t===Er?void 0:t}function UT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const BT={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},$T=ne.INFO,HT={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},WT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Od{constructor(e){this.name=e,this._logLevel=$T,this._logHandler=WT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const qT=(t,e)=>e.some(n=>t instanceof n);let $m,Hm;function KT(){return $m||($m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function GT(){return Hm||(Hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,gh=new WeakMap,kv=new WeakMap,cc=new WeakMap,Vd=new WeakMap;function QT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sv.set(n,t)}).catch(()=>{}),Vd.set(e,t),e}function YT(t){if(gh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gh.set(t,e)}let yh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function XT(t){yh=t(yh)}function JT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return kv.set(r,e.sort?e.sort():[e]),Xn(r)}:GT().includes(t)?function(...e){return t.apply(hc(this),e),Xn(Sv.get(this))}:function(...e){return Xn(t.apply(hc(this),e))}}function ZT(t){return typeof t=="function"?JT(t):(t instanceof IDBTransaction&&YT(t),qT(t,KT())?new Proxy(t,yh):t)}function Xn(t){if(t instanceof IDBRequest)return QT(t);if(cc.has(t))return cc.get(t);const e=ZT(t);return e!==t&&(cc.set(t,e),Vd.set(e,t)),e}const hc=t=>Vd.get(t);function eI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Xn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xn(o.result),u.oldVersion,u.newVersion,Xn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const tI=["get","getKey","getAll","getAllKeys","count"],nI=["put","add","delete","clear"],dc=new Map;function Wm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tI.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&u.done]))[0]};return dc.set(e,i),i}XT(t=>({...t,get:(e,n,r)=>Wm(e,n)||t.get(e,n,r),has:(e,n)=>!!Wm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vh="@firebase/app",qm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Od("@firebase/app"),iI="@firebase/app-compat",oI="@firebase/analytics-compat",aI="@firebase/analytics",lI="@firebase/app-check-compat",uI="@firebase/app-check",cI="@firebase/auth",hI="@firebase/auth-compat",dI="@firebase/database",fI="@firebase/data-connect",pI="@firebase/database-compat",mI="@firebase/functions",gI="@firebase/functions-compat",yI="@firebase/installations",vI="@firebase/installations-compat",_I="@firebase/messaging",wI="@firebase/messaging-compat",EI="@firebase/performance",xI="@firebase/performance-compat",TI="@firebase/remote-config",II="@firebase/remote-config-compat",SI="@firebase/storage",kI="@firebase/storage-compat",AI="@firebase/firestore",RI="@firebase/vertexai-preview",CI="@firebase/firestore-compat",PI="firebase",NI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="[DEFAULT]",bI={[vh]:"fire-core",[iI]:"fire-core-compat",[aI]:"fire-analytics",[oI]:"fire-analytics-compat",[uI]:"fire-app-check",[lI]:"fire-app-check-compat",[cI]:"fire-auth",[hI]:"fire-auth-compat",[dI]:"fire-rtdb",[fI]:"fire-data-connect",[pI]:"fire-rtdb-compat",[mI]:"fire-fn",[gI]:"fire-fn-compat",[yI]:"fire-iid",[vI]:"fire-iid-compat",[_I]:"fire-fcm",[wI]:"fire-fcm-compat",[EI]:"fire-perf",[xI]:"fire-perf-compat",[TI]:"fire-rc",[II]:"fire-rc-compat",[SI]:"fire-gcs",[kI]:"fire-gcs-compat",[AI]:"fire-fst",[CI]:"fire-fst-compat",[RI]:"fire-vertex","fire-js":"fire-js",[PI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new Map,DI=new Map,wh=new Map;function Km(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ps(t){const e=t.name;if(wh.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;wh.set(e,t);for(const n of ml.values())Km(n,t);for(const n of DI.values())Km(n,t);return!0}function Md(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jn=new Eo("app","Firebase",OI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=NI;function Av(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_h,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jn.create("bad-app-name",{appName:String(s)});if(n||(n=Tv()),!n)throw Jn.create("no-options");const i=ml.get(s);if(i){if(pl(n,i.options)&&pl(r,i.config))return i;throw Jn.create("duplicate-app",{appName:s})}const o=new zT(s);for(const u of wh.values())o.addComponent(u);const l=new VI(n,r,o);return ml.set(s,l),l}function Rv(t=_h){const e=ml.get(t);if(!e&&t===_h&&Tv())return Av();if(!e)throw Jn.create("no-app",{appName:t});return e}function Zn(t,e,n){var r;let s=(r=bI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}Ps(new Vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="firebase-heartbeat-database",jI=1,so="firebase-heartbeat-store";let fc=null;function Cv(){return fc||(fc=eI(MI,jI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(so)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jn.create("idb-open",{originalErrorMessage:t.message})})),fc}async function LI(t){try{const n=(await Cv()).transaction(so),r=await n.objectStore(so).get(Pv(t));return await n.done,r}catch(e){if(e instanceof An)xn.warn(e.message);else{const n=Jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Gm(t,e){try{const r=(await Cv()).transaction(so,"readwrite");await r.objectStore(so).put(e,Pv(t)),await r.done}catch(n){if(n instanceof An)xn.warn(n.message);else{const r=Jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function Pv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=1024,UI=30*24*60*60*1e3;class zI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $I(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Qm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=UI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qm(),{heartbeatsToSend:r,unsentEntries:s}=BI(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Qm(){return new Date().toISOString().substring(0,10)}function BI(t,e=FI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ym(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ym(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $I{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return CT()?PT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await LI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ym(t){return fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t){Ps(new Vr("platform-logger",e=>new rI(e),"PRIVATE")),Ps(new Vr("heartbeat",e=>new zI(e),"PRIVATE")),Zn(vh,qm,t),Zn(vh,qm,"esm2017"),Zn("fire-js","")}HI("");function jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Nv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WI=Nv,bv=new Eo("auth","Firebase",Nv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=new Od("@firebase/auth");function qI(t,...e){gl.logLevel<=ne.WARN&&gl.warn(`Auth (${zs}): ${t}`,...e)}function Da(t,...e){gl.logLevel<=ne.ERROR&&gl.error(`Auth (${zs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,...e){throw Fd(t,...e)}function Ut(t,...e){return Fd(t,...e)}function Ld(t,e,n){const r=Object.assign(Object.assign({},WI()),{[e]:n});return new Eo("auth","Firebase",r).create(e,{appName:t.name})}function yn(t){return Ld(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function KI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Nt(t,"argument-error"),Ld(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bv.create(t,...e)}function q(t,e,...n){if(!t)throw Fd(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Da(e),new Error(e)}function Tn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function GI(){return Xm()==="http:"||Xm()==="https:"}function Xm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GI()||ST()||"connection"in navigator)?navigator.onLine:!0}function YI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=xT()||kT()}get(){return QI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new To(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cr(t,e,n,r,s={}){return Ov(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=xo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},i);return IT()||(h.referrerPolicy="no-referrer"),Dv.fetch()(Vv(t,t.config.apiHost,n,l),h)})}async function Ov(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XI),e);try{const s=new e2(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw pa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw pa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw pa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ld(t,p,h);Nt(t,p)}}catch(s){if(s instanceof An)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function Io(t,e,n,r,s={}){const i=await cr(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Vv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ud(t.config,s):`${t.config.apiScheme}://${s}`}function ZI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),JI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ut(t,e,r);return s.customData._tokenResponse=n,s}function Jm(t){return t!==void 0&&t.enterprise!==void 0}class t2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function n2(t,e){return cr(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t,e){return cr(t,"POST","/v1/accounts:delete",e)}async function Mv(t,e){return cr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function s2(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=zd(r);q(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Vi(pc(s.auth_time)),issuedAtTime:Vi(pc(s.iat)),expirationTime:Vi(pc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function pc(t){return Number(t)*1e3}function zd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Da("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ev(n);return s?JSON.parse(s):(Da("Failed to decode base64 JWT payload"),null)}catch(s){return Da("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Zm(t){const e=zd(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&i2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function i2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vi(this.lastLoginAt),this.creationTime=Vi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await io(t,Mv(n,{idToken:r}));q(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jv(i.providerUserInfo):[],l=l2(t.providerData,o),u=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new xh(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function a2(t){const e=nt(t);await yl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jv(t){return t.map(e=>{var{providerId:n}=e,r=jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){const n=await Ov(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Vv(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Dv.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function c2(t,e){return cr(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Zm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Zm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await u2(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new xh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return s2(this,e)}reload(){return a2(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(yn(this.auth));const e=await this.getIdToken();return await io(this,r2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,h,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,v=(s=n.email)!==null&&s!==void 0?s:void 0,k=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(h=n.createdAt)!==null&&h!==void 0?h:void 0,E=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:D,isAnonymous:j,providerData:V,stsTokenManager:_}=n;q(I&&_,e,"internal-error");const g=_s.fromJSON(this.name,_);q(typeof I=="string",e,"internal-error"),bn(y,e.name),bn(v,e.name),q(typeof D=="boolean",e,"internal-error"),q(typeof j=="boolean",e,"internal-error"),bn(k,e.name),bn(R,e.name),bn(N,e.name),bn(O,e.name),bn(S,e.name),bn(E,e.name);const w=new pn({uid:I,auth:e,email:v,emailVerified:D,displayName:y,isAnonymous:j,photoURL:R,phoneNumber:k,tenantId:N,stsTokenManager:g,createdAt:S,lastLoginAt:E});return V&&Array.isArray(V)&&(w.providerData=V.map(x=>Object.assign({},x))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new _s;l.updateFromIdToken(r);const u=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new xh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=new Map;function mn(t){Tn(t instanceof Function,"Expected a class definition");let e=eg.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,eg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lv.type="NONE";const tg=Lv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oa(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(mn(tg),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(tg);const o=Oa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const y=pn._fromJSON(e,p);h!==i&&(l=y),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new ws(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ws(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hv(e))return"Blackberry";if(Wv(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||zv(e))&&!e.includes("edge/"))return"Chrome";if($v(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fv(t=tt()){return/firefox\//i.test(t)}function Uv(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zv(t=tt()){return/crios\//i.test(t)}function Bv(t=tt()){return/iemobile/i.test(t)}function $v(t=tt()){return/android/i.test(t)}function Hv(t=tt()){return/blackberry/i.test(t)}function Wv(t=tt()){return/webos/i.test(t)}function Bd(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function h2(t=tt()){var e;return Bd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d2(){return AT()&&document.documentMode===10}function qv(t=tt()){return Bd(t)||$v(t)||Wv(t)||Hv(t)||/windows phone/i.test(t)||Bv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(t,e=[]){let n;switch(t){case"Browser":n=ng(tt());break;case"Worker":n=`${ng(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p2(t,e={}){return cr(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=6;class g2{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:m2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rg(this),this.idTokenSubscription=new rg(this),this.beforeStateQueue=new f2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mv(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(yn(this));const n=e?nt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(yn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(yn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p2(this),n=new g2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await c2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hr(t){return nt(t)}class rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=VT(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v2(t){Gl=t}function Gv(t){return Gl.loadJS(t)}function _2(){return Gl.recaptchaEnterpriseScript}function w2(){return Gl.gapiScript}function E2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const x2="recaptcha-enterprise",T2="NO_RECAPTCHA";class I2{constructor(e){this.type=x2,this.auth=hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{n2(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new t2(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;Jm(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(T2)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&Jm(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_2();u.length!==0&&(u+=l),Gv(u).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function sg(t,e,n,r=!1){const s=new I2(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Th(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await sg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await sg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(t,e){const n=Md(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(pl(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function k2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function A2(t,e,n){const r=hr(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qv(e),{host:o,port:l}=R2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),C2()}function Qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function R2(t){const e=Qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ig(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ig(o)}}}function ig(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}async function P2(t,e){return cr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function D2(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends $d{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,n,"signInWithPassword",N2);case"emailLink":return b2(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,r,"signUpPassword",P2);case"emailLink":return D2(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O2="http://localhost";class Mr extends $d{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:O2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M2(t){const e=_i(wi(t)).link,n=e?_i(wi(e)).deep_link_id:null,r=_i(wi(t)).deep_link_id;return(r?_i(wi(r)).link:null)||r||n||e||t}class Hd{constructor(e){var n,r,s,i,o,l;const u=_i(wi(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,y=V2((s=u.mode)!==null&&s!==void 0?s:null);q(h&&p&&y,"argument-error"),this.apiKey=h,this.operation=y,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=M2(e);try{return new Hd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(){this.providerId=Bs.PROVIDER_ID}static credential(e,n){return oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hd.parseLink(n);return q(r,"argument-error"),oo._fromEmailAndCode(e,r.code,r.tenantId)}}Bs.PROVIDER_ID="password";Bs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Wd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends So{constructor(){super("facebook.com")}static credential(e){return Mr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends So{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mr._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends So{constructor(){super("github.com")}static credential(e){return Mr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends So{constructor(){super("twitter.com")}static credential(e,n){return Mr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return Io(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),o=og(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=og(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function og(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends An{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new vl(e,n,r,s)}}function Yv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vl._fromErrorAndOperation(t,i,e,r):i})}async function L2(t,e,n=!1){const r=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(yn(r));const s="reauthenticate";try{const i=await io(t,Yv(r,s,e,t),n);q(i.idToken,r,"internal-error");const o=zd(i.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(t,e,n=!1){if(jt(t.app))return Promise.reject(yn(t));const r="signIn",s=await Yv(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function U2(t,e){return Xv(hr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t){const e=hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function z2(t,e,n){if(jt(t.app))return Promise.reject(yn(t));const r=hr(t),o=await Th(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",j2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Jv(t),u}),l=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function B2(t,e,n){return jt(t.app)?Promise.reject(yn(t)):U2(nt(t),Bs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jv(t),r})}function $2(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function H2(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function W2(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function q2(t){return nt(t).signOut()}const _l="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_l,"1"),this.storage.removeItem(_l),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=1e3,G2=10;class e_ extends Zv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);d2()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,G2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},K2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const Q2=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),u=await Y2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const h=qd("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(y){const v=y;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(v.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(){return window}function J2(t){Gt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function Z2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function tS(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebaseLocalStorageDb",nS=1,wl="firebaseLocalStorage",i_="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yl(t,e){return t.transaction([wl],e?"readwrite":"readonly").objectStore(wl)}function rS(){const t=indexedDB.deleteDatabase(s_);return new ko(t).toPromise()}function Ih(){const t=indexedDB.open(s_,nS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wl,{keyPath:i_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wl)?e(r):(r.close(),await rS(),e(await Ih()))})})}async function ag(t,e,n){const r=Yl(t,!0).put({[i_]:e,value:n});return new ko(r).toPromise()}async function sS(t,e){const n=Yl(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function lg(t,e){const n=Yl(t,!0).delete(e);return new ko(n).toPromise()}const iS=800,oS=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ih(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>oS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(tS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Z2(),!this.activeServiceWorker)return;this.sender=new X2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||eS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ih();return await ag(e,_l,"1"),await lg(e,_l),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ag(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yl(s,!1).getAll();return new ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const aS=o_;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a_(t,e){return e?mn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd extends $d{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lS(t){return Xv(t.auth,new Kd(t),t.bypassAuthState)}function uS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),F2(n,new Kd(t),t.bypassAuthState)}async function cS(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),L2(n,new Kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lS;case"linkViaPopup":case"linkViaRedirect":return cS;case"reauthViaPopup":case"reauthViaRedirect":return uS;default:Nt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=new To(2e3,1e4);async function dS(t,e,n){if(jt(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=hr(t);KI(t,e,Wd);const s=a_(r,n);return new Sr(r,"signInViaPopup",e,s).executeNotNull()}class Sr extends l_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hS.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS="pendingRedirect",Va=new Map;class pS extends l_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Va.get(this.auth._key());if(!e){try{const r=await mS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Va.set(this.auth._key(),e)}return this.bypassAuthState||Va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mS(t,e){const n=vS(e),r=yS(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function gS(t,e){Va.set(t._key(),e)}function yS(t){return mn(t._redirectPersistence)}function vS(t){return Oa(fS,t.config.apiKey,t.name)}async function _S(t,e,n=!1){if(jt(t.app))return Promise.reject(yn(t));const r=hr(t),s=a_(r,e),o=await new pS(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=10*60*1e3;class ES{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!u_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ug(e))}saveEventToCache(e){this.cachedEventUids.add(ug(e)),this.lastProcessedEventTime=Date.now()}}function ug(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function u_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return u_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(t,e={}){return cr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SS=/^https?/;async function kS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await TS(t);for(const n of e)try{if(AS(n))return}catch{}Nt(t,"unauthorized-domain")}function AS(t){const e=Eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!SS.test(n))return!1;if(IS.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=new To(3e4,6e4);function cg(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function CS(t){return new Promise((e,n)=>{var r,s,i;function o(){cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{cg(),n(Ut(t,"network-request-failed"))},timeout:RS.get()})}if(!((s=(r=Gt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Gt().gapi)===null||i===void 0)&&i.load)o();else{const l=E2("iframefcb");return Gt()[l]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},Gv(`${w2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Ma=null,e})}let Ma=null;function PS(t){return Ma=Ma||CS(t),Ma}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=new To(5e3,15e3),bS="__/auth/iframe",DS="emulator/auth/iframe",OS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},VS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MS(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ud(e,DS):`https://${t.config.authDomain}/${bS}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=VS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xo(r).slice(1)}`}async function jS(t){const e=await PS(t),n=Gt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:MS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),l=Gt().setTimeout(()=>{i(o)},NS.get());function u(){Gt().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FS=500,US=600,zS="_blank",BS="http://localhost";class hg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $S(t,e,n,r=FS,s=US){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},LS),{width:r.toString(),height:s.toString(),top:i,left:o}),h=tt().toLowerCase();n&&(l=zv(h)?zS:n),Fv(h)&&(e=e||BS,u.scrollbars="yes");const p=Object.entries(u).reduce((v,[k,R])=>`${v}${k}=${R},`,"");if(h2(h)&&l!=="_self")return HS(e||"",l),new hg(null);const y=window.open(e||"",l,p);q(y,t,"popup-blocked");try{y.focus()}catch{}return new hg(y)}function HS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS="__/auth/handler",qS="emulator/auth/handler",KS=encodeURIComponent("fac");async function dg(t,e,n,r,s,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof Wd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))o[p]=y}if(e instanceof So){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${KS}=${encodeURIComponent(u)}`:"";return`${GS(t)}?${xo(l).slice(1)}${h}`}function GS({config:t}){return t.emulator?Ud(t,qS):`https://${t.authDomain}/${WS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="webStorageSupport";class QS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=_S,this._overrideRedirectResult=gS}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await dg(e,n,r,Eh(),s);return $S(e,o,qd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await dg(e,n,r,Eh(),s);return J2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jS(e),r=new ES(e);return n.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mc,{type:mc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mc];o!==void 0&&n(!!o),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qv()||Uv()||Bd()}}const YS=QS;var fg="@firebase/auth",pg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZS(t){Ps(new Vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kv(t)},h=new y2(r,s,i,u);return k2(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ps(new Vr("auth-internal",e=>{const n=hr(e.getProvider("auth").getImmediate());return(r=>new XS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(fg,pg,JS(t)),Zn(fg,pg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=5*60,tk=Iv("authIdTokenMaxAge")||ek;let mg=null;const nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tk)return;const s=n==null?void 0:n.token;mg!==s&&(mg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function rk(t=Rv()){const e=Md(t,"auth");if(e.isInitialized())return e.getImmediate();const n=S2(t,{popupRedirectResolver:YS,persistence:[aS,Q2,n_]}),r=Iv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=nk(i.toString());H2(n,o,()=>o(n.currentUser)),$2(n,l=>o(l))}}const s=xv("auth");return s&&A2(n,`http://${s}`),n}function sk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}v2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ut("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",sk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZS("Browser");var ik="firebase",ok="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(ik,ok,"app");var gg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cr,c_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(_,g){function w(){}w.prototype=g.prototype,_.D=g.prototype,_.prototype=new w,_.prototype.constructor=_,_.C=function(x,A,C){for(var T=Array(arguments.length-2),It=2;It<arguments.length;It++)T[It-2]=arguments[It];return g.prototype[A].apply(x,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,g,w){w||(w=0);var x=Array(16);if(typeof g=="string")for(var A=0;16>A;++A)x[A]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(A=0;16>A;++A)x[A]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=_.g[0],w=_.g[1],A=_.g[2];var C=_.g[3],T=g+(C^w&(A^C))+x[0]+3614090360&4294967295;g=w+(T<<7&4294967295|T>>>25),T=C+(A^g&(w^A))+x[1]+3905402710&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(w^C&(g^w))+x[2]+606105819&4294967295,A=C+(T<<17&4294967295|T>>>15),T=w+(g^A&(C^g))+x[3]+3250441966&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(C^w&(A^C))+x[4]+4118548399&4294967295,g=w+(T<<7&4294967295|T>>>25),T=C+(A^g&(w^A))+x[5]+1200080426&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(w^C&(g^w))+x[6]+2821735955&4294967295,A=C+(T<<17&4294967295|T>>>15),T=w+(g^A&(C^g))+x[7]+4249261313&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(C^w&(A^C))+x[8]+1770035416&4294967295,g=w+(T<<7&4294967295|T>>>25),T=C+(A^g&(w^A))+x[9]+2336552879&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(w^C&(g^w))+x[10]+4294925233&4294967295,A=C+(T<<17&4294967295|T>>>15),T=w+(g^A&(C^g))+x[11]+2304563134&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(C^w&(A^C))+x[12]+1804603682&4294967295,g=w+(T<<7&4294967295|T>>>25),T=C+(A^g&(w^A))+x[13]+4254626195&4294967295,C=g+(T<<12&4294967295|T>>>20),T=A+(w^C&(g^w))+x[14]+2792965006&4294967295,A=C+(T<<17&4294967295|T>>>15),T=w+(g^A&(C^g))+x[15]+1236535329&4294967295,w=A+(T<<22&4294967295|T>>>10),T=g+(A^C&(w^A))+x[1]+4129170786&4294967295,g=w+(T<<5&4294967295|T>>>27),T=C+(w^A&(g^w))+x[6]+3225465664&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(C^g))+x[11]+643717713&4294967295,A=C+(T<<14&4294967295|T>>>18),T=w+(C^g&(A^C))+x[0]+3921069994&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(w^A))+x[5]+3593408605&4294967295,g=w+(T<<5&4294967295|T>>>27),T=C+(w^A&(g^w))+x[10]+38016083&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(C^g))+x[15]+3634488961&4294967295,A=C+(T<<14&4294967295|T>>>18),T=w+(C^g&(A^C))+x[4]+3889429448&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(w^A))+x[9]+568446438&4294967295,g=w+(T<<5&4294967295|T>>>27),T=C+(w^A&(g^w))+x[14]+3275163606&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(C^g))+x[3]+4107603335&4294967295,A=C+(T<<14&4294967295|T>>>18),T=w+(C^g&(A^C))+x[8]+1163531501&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(A^C&(w^A))+x[13]+2850285829&4294967295,g=w+(T<<5&4294967295|T>>>27),T=C+(w^A&(g^w))+x[2]+4243563512&4294967295,C=g+(T<<9&4294967295|T>>>23),T=A+(g^w&(C^g))+x[7]+1735328473&4294967295,A=C+(T<<14&4294967295|T>>>18),T=w+(C^g&(A^C))+x[12]+2368359562&4294967295,w=A+(T<<20&4294967295|T>>>12),T=g+(w^A^C)+x[5]+4294588738&4294967295,g=w+(T<<4&4294967295|T>>>28),T=C+(g^w^A)+x[8]+2272392833&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^w)+x[11]+1839030562&4294967295,A=C+(T<<16&4294967295|T>>>16),T=w+(A^C^g)+x[14]+4259657740&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^C)+x[1]+2763975236&4294967295,g=w+(T<<4&4294967295|T>>>28),T=C+(g^w^A)+x[4]+1272893353&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^w)+x[7]+4139469664&4294967295,A=C+(T<<16&4294967295|T>>>16),T=w+(A^C^g)+x[10]+3200236656&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^C)+x[13]+681279174&4294967295,g=w+(T<<4&4294967295|T>>>28),T=C+(g^w^A)+x[0]+3936430074&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^w)+x[3]+3572445317&4294967295,A=C+(T<<16&4294967295|T>>>16),T=w+(A^C^g)+x[6]+76029189&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(w^A^C)+x[9]+3654602809&4294967295,g=w+(T<<4&4294967295|T>>>28),T=C+(g^w^A)+x[12]+3873151461&4294967295,C=g+(T<<11&4294967295|T>>>21),T=A+(C^g^w)+x[15]+530742520&4294967295,A=C+(T<<16&4294967295|T>>>16),T=w+(A^C^g)+x[2]+3299628645&4294967295,w=A+(T<<23&4294967295|T>>>9),T=g+(A^(w|~C))+x[0]+4096336452&4294967295,g=w+(T<<6&4294967295|T>>>26),T=C+(w^(g|~A))+x[7]+1126891415&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~w))+x[14]+2878612391&4294967295,A=C+(T<<15&4294967295|T>>>17),T=w+(C^(A|~g))+x[5]+4237533241&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~C))+x[12]+1700485571&4294967295,g=w+(T<<6&4294967295|T>>>26),T=C+(w^(g|~A))+x[3]+2399980690&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~w))+x[10]+4293915773&4294967295,A=C+(T<<15&4294967295|T>>>17),T=w+(C^(A|~g))+x[1]+2240044497&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~C))+x[8]+1873313359&4294967295,g=w+(T<<6&4294967295|T>>>26),T=C+(w^(g|~A))+x[15]+4264355552&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~w))+x[6]+2734768916&4294967295,A=C+(T<<15&4294967295|T>>>17),T=w+(C^(A|~g))+x[13]+1309151649&4294967295,w=A+(T<<21&4294967295|T>>>11),T=g+(A^(w|~C))+x[4]+4149444226&4294967295,g=w+(T<<6&4294967295|T>>>26),T=C+(w^(g|~A))+x[11]+3174756917&4294967295,C=g+(T<<10&4294967295|T>>>22),T=A+(g^(C|~w))+x[2]+718787259&4294967295,A=C+(T<<15&4294967295|T>>>17),T=w+(C^(A|~g))+x[9]+3951481745&4294967295,_.g[0]=_.g[0]+g&4294967295,_.g[1]=_.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,_.g[2]=_.g[2]+A&4294967295,_.g[3]=_.g[3]+C&4294967295}r.prototype.u=function(_,g){g===void 0&&(g=_.length);for(var w=g-this.blockSize,x=this.B,A=this.h,C=0;C<g;){if(A==0)for(;C<=w;)s(this,_,C),C+=this.blockSize;if(typeof _=="string"){for(;C<g;)if(x[A++]=_.charCodeAt(C++),A==this.blockSize){s(this,x),A=0;break}}else for(;C<g;)if(x[A++]=_[C++],A==this.blockSize){s(this,x),A=0;break}}this.h=A,this.o+=g},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var g=1;g<_.length-8;++g)_[g]=0;var w=8*this.o;for(g=_.length-8;g<_.length;++g)_[g]=w&255,w/=256;for(this.u(_),_=Array(16),g=w=0;4>g;++g)for(var x=0;32>x;x+=8)_[w++]=this.g[g]>>>x&255;return _};function i(_,g){var w=l;return Object.prototype.hasOwnProperty.call(w,_)?w[_]:w[_]=g(_)}function o(_,g){this.h=g;for(var w=[],x=!0,A=_.length-1;0<=A;A--){var C=_[A]|0;x&&C==g||(w[A]=C,x=!1)}this.g=w}var l={};function u(_){return-128<=_&&128>_?i(_,function(g){return new o([g|0],0>g?-1:0)}):new o([_|0],0>_?-1:0)}function h(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return O(h(-_));for(var g=[],w=1,x=0;_>=w;x++)g[x]=_/w|0,w*=4294967296;return new o(g,0)}function p(_,g){if(_.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(_.charAt(0)=="-")return O(p(_.substring(1),g));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),x=y,A=0;A<_.length;A+=8){var C=Math.min(8,_.length-A),T=parseInt(_.substring(A,A+C),g);8>C?(C=h(Math.pow(g,C)),x=x.j(C).add(h(T))):(x=x.j(w),x=x.add(h(T)))}return x}var y=u(0),v=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var _=0,g=1,w=0;w<this.g.length;w++){var x=this.i(w);_+=(0<=x?x:4294967296+x)*g,g*=4294967296}return _},t.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(R(this))return"0";if(N(this))return"-"+O(this).toString(_);for(var g=h(Math.pow(_,6)),w=this,x="";;){var A=D(w,g).g;w=S(w,A.j(g));var C=((0<w.g.length?w.g[0]:w.h)>>>0).toString(_);if(w=A,R(w))return C+x;for(;6>C.length;)C="0"+C;x=C+x}},t.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function R(_){if(_.h!=0)return!1;for(var g=0;g<_.g.length;g++)if(_.g[g]!=0)return!1;return!0}function N(_){return _.h==-1}t.l=function(_){return _=S(this,_),N(_)?-1:R(_)?0:1};function O(_){for(var g=_.g.length,w=[],x=0;x<g;x++)w[x]=~_.g[x];return new o(w,~_.h).add(v)}t.abs=function(){return N(this)?O(this):this},t.add=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0,A=0;A<=g;A++){var C=x+(this.i(A)&65535)+(_.i(A)&65535),T=(C>>>16)+(this.i(A)>>>16)+(_.i(A)>>>16);x=T>>>16,C&=65535,T&=65535,w[A]=T<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function S(_,g){return _.add(O(g))}t.j=function(_){if(R(this)||R(_))return y;if(N(this))return N(_)?O(this).j(O(_)):O(O(this).j(_));if(N(_))return O(this.j(O(_)));if(0>this.l(k)&&0>_.l(k))return h(this.m()*_.m());for(var g=this.g.length+_.g.length,w=[],x=0;x<2*g;x++)w[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<_.g.length;A++){var C=this.i(x)>>>16,T=this.i(x)&65535,It=_.i(A)>>>16,fr=_.i(A)&65535;w[2*x+2*A]+=T*fr,E(w,2*x+2*A),w[2*x+2*A+1]+=C*fr,E(w,2*x+2*A+1),w[2*x+2*A+1]+=T*It,E(w,2*x+2*A+1),w[2*x+2*A+2]+=C*It,E(w,2*x+2*A+2)}for(x=0;x<g;x++)w[x]=w[2*x+1]<<16|w[2*x];for(x=g;x<2*g;x++)w[x]=0;return new o(w,0)};function E(_,g){for(;(_[g]&65535)!=_[g];)_[g+1]+=_[g]>>>16,_[g]&=65535,g++}function I(_,g){this.g=_,this.h=g}function D(_,g){if(R(g))throw Error("division by zero");if(R(_))return new I(y,y);if(N(_))return g=D(O(_),g),new I(O(g.g),O(g.h));if(N(g))return g=D(_,O(g)),new I(O(g.g),g.h);if(30<_.g.length){if(N(_)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var w=v,x=g;0>=x.l(_);)w=j(w),x=j(x);var A=V(w,1),C=V(x,1);for(x=V(x,2),w=V(w,2);!R(x);){var T=C.add(x);0>=T.l(_)&&(A=A.add(w),C=T),x=V(x,1),w=V(w,1)}return g=S(_,A.j(g)),new I(A,g)}for(A=y;0<=_.l(g);){for(w=Math.max(1,Math.floor(_.m()/g.m())),x=Math.ceil(Math.log(w)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),C=h(w),T=C.j(g);N(T)||0<T.l(_);)w-=x,C=h(w),T=C.j(g);R(C)&&(C=v),A=A.add(C),_=S(_,T)}return new I(A,_)}t.A=function(_){return D(this,_).h},t.and=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)&_.i(x);return new o(w,this.h&_.h)},t.or=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)|_.i(x);return new o(w,this.h|_.h)},t.xor=function(_){for(var g=Math.max(this.g.length,_.g.length),w=[],x=0;x<g;x++)w[x]=this.i(x)^_.i(x);return new o(w,this.h^_.h)};function j(_){for(var g=_.g.length+1,w=[],x=0;x<g;x++)w[x]=_.i(x)<<1|_.i(x-1)>>>31;return new o(w,_.h)}function V(_,g){var w=g>>5;g%=32;for(var x=_.g.length-w,A=[],C=0;C<x;C++)A[C]=0<g?_.i(C+w)>>>g|_.i(C+w+1)<<32-g:_.i(C+w);return new o(A,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,c_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Cr=o}).apply(typeof gg<"u"?gg:typeof self<"u"?self:typeof window<"u"?window:{});var ma=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var h_,Ei,d_,ja,Sh,f_,p_,m_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ma=="object"&&ma];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],c=c(m),c!=m&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var b=f++;return{value:c(b,a[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function y(a,c,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function v(a,c,f){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,v.apply(null,arguments)}function k(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function R(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,b){for(var U=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)U[ce-2]=arguments[ce];return c.prototype[P].apply(m,U)}}function N(a){const c=a.length;if(0<c){const f=Array(c);for(let m=0;m<c;m++)f[m]=a[m];return f}return[]}function O(a,c){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(u(m)){const P=a.length||0,b=m.length||0;a.length=P+b;for(let U=0;U<b;U++)a[P+U]=m[U]}else a.push(m)}}class S{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var j=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(a,c,f){for(const m in a)c.call(f,a[m],m,a)}function _(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function g(a){const c={};for(const f in a)c[f]=a[f];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let b=0;b<w.length;b++)f=w[b],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function A(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function C(a){l.setTimeout(()=>{throw a},0)}function T(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class It{constructor(){this.h=this.g=null}add(c,f){const m=fr.get();m.set(c,f),this.h?this.h.next=m:this.g=m,this.h=m}}var fr=new S(()=>new qs,a=>a.reset());class qs{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let en,z=!1,Q=new It,Z=()=>{const a=l.Promise.resolve(void 0);en=()=>{a.then(ge)}};var ge=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(f){C(f)}var c=fr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}z=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var tn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function nn(a,c){if(Ie.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(j){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&nn.aa.h.call(this)}}R(nn,Ie);var rn={2:"touch",3:"pen",4:"mouse"};nn.prototype.h=function(){nn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),Nw=0;function bw(a,c,f,m,P){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!m,this.ha=P,this.key=++Nw,this.da=this.fa=!1}function Do(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Oo(a){this.src=a,this.g={},this.h=0}Oo.prototype.add=function(a,c,f,m,P){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var U=mu(a,c,m,P);return-1<U?(c=a[U],f||(c.fa=!1)):(c=new bw(c,this.src,b,!!m,P),c.fa=f,a.push(c)),c};function pu(a,c){var f=c.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=P)&&Array.prototype.splice.call(m,P,1),b&&(Do(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function mu(a,c,f,m){for(var P=0;P<a.length;++P){var b=a[P];if(!b.da&&b.listener==c&&b.capture==!!f&&b.ha==m)return P}return-1}var gu="closure_lm_"+(1e6*Math.random()|0),yu={};function Cf(a,c,f,m,P){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Cf(a,c[b],f,m,P);return null}return f=bf(f),a&&a[sn]?a.K(c,f,h(m)?!!m.capture:!1,P):Dw(a,c,f,!1,m,P)}function Dw(a,c,f,m,P,b){if(!c)throw Error("Invalid event type");var U=h(P)?!!P.capture:!!P,ce=_u(a);if(ce||(a[gu]=ce=new Oo(a)),f=ce.add(c,f,m,U,b),f.proxy)return f;if(m=Ow(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)tn||(P=U),P===void 0&&(P=!1),a.addEventListener(c.toString(),m,P);else if(a.attachEvent)a.attachEvent(Nf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ow(){function a(f){return c.call(a.src,a.listener,f)}const c=Vw;return a}function Pf(a,c,f,m,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)Pf(a,c[b],f,m,P);else m=h(m)?!!m.capture:!!m,f=bf(f),a&&a[sn]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],f=mu(b,f,m,P),-1<f&&(Do(b[f]),Array.prototype.splice.call(b,f,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=_u(a))&&(c=a.g[c.toString()],a=-1,c&&(a=mu(c,f,m,P)),(f=-1<a?c[a]:null)&&vu(f))}function vu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[sn])pu(c.i,a);else{var f=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(f,m,a.capture):c.detachEvent?c.detachEvent(Nf(f),m):c.addListener&&c.removeListener&&c.removeListener(m),(f=_u(c))?(pu(f,a),f.h==0&&(f.src=null,c[gu]=null)):Do(a)}}}function Nf(a){return a in yu?yu[a]:yu[a]="on"+a}function Vw(a,c){if(a.da)a=!0;else{c=new nn(c,this);var f=a.listener,m=a.ha||a.src;a.fa&&vu(a),a=f.call(m,c)}return a}function _u(a){return a=a[gu],a instanceof Oo?a:null}var wu="__closure_events_fn_"+(1e9*Math.random()>>>0);function bf(a){return typeof a=="function"?a:(a[wu]||(a[wu]=function(c){return a.handleEvent(c)}),a[wu])}function We(){ue.call(this),this.i=new Oo(this),this.M=this,this.F=null}R(We,ue),We.prototype[sn]=!0,We.prototype.removeEventListener=function(a,c,f,m){Pf(this,a,c,f,m)};function rt(a,c){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new Ie(c,a);else if(c instanceof Ie)c.target=c.target||a;else{var P=c;c=new Ie(m,a),x(c,P)}if(P=!0,f)for(var b=f.length-1;0<=b;b--){var U=c.g=f[b];P=Vo(U,m,!0,c)&&P}if(U=c.g=a,P=Vo(U,m,!0,c)&&P,P=Vo(U,m,!1,c)&&P,f)for(b=0;b<f.length;b++)U=c.g=f[b],P=Vo(U,m,!1,c)&&P}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],m=0;m<f.length;m++)Do(f[m]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,f,m){return this.i.add(String(a),c,!1,f,m)},We.prototype.L=function(a,c,f,m){return this.i.add(String(a),c,!0,f,m)};function Vo(a,c,f,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,b=0;b<c.length;++b){var U=c[b];if(U&&!U.da&&U.capture==f){var ce=U.listener,je=U.ha||U.src;U.fa&&pu(a.i,U),P=ce.call(je,m)!==!1&&P}}return P&&!m.defaultPrevented}function Df(a,c,f){if(typeof a=="function")f&&(a=v(a,f));else if(a&&typeof a.handleEvent=="function")a=v(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function Of(a){a.g=Df(()=>{a.g=null,a.i&&(a.i=!1,Of(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Mw extends ue{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Of(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ks(a){ue.call(this),this.h=a,this.g={}}R(Ks,ue);var Vf=[];function Mf(a){V(a.g,function(c,f){this.g.hasOwnProperty(f)&&vu(c)},a),a.g={}}Ks.prototype.N=function(){Ks.aa.N.call(this),Mf(this)},Ks.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Eu=l.JSON.stringify,jw=l.JSON.parse,Lw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function xu(){}xu.prototype.h=null;function jf(a){return a.h||(a.h=a.i())}function Lf(){}var Gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Tu(){Ie.call(this,"d")}R(Tu,Ie);function Iu(){Ie.call(this,"c")}R(Iu,Ie);var pr={},Ff=null;function Mo(){return Ff=Ff||new We}pr.La="serverreachability";function Uf(a){Ie.call(this,pr.La,a)}R(Uf,Ie);function Qs(a){const c=Mo();rt(c,new Uf(c))}pr.STAT_EVENT="statevent";function zf(a,c){Ie.call(this,pr.STAT_EVENT,a),this.stat=c}R(zf,Ie);function st(a){const c=Mo();rt(c,new zf(c,a))}pr.Ma="timingevent";function Bf(a,c){Ie.call(this,pr.Ma,a),this.size=c}R(Bf,Ie);function Ys(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Xs(){this.g=!0}Xs.prototype.xa=function(){this.g=!1};function Fw(a,c,f,m,P,b){a.info(function(){if(a.g)if(b)for(var U="",ce=b.split("&"),je=0;je<ce.length;je++){var ie=ce[je].split("=");if(1<ie.length){var qe=ie[0];ie=ie[1];var Ke=qe.split("_");U=2<=Ke.length&&Ke[1]=="type"?U+(qe+"="+ie+"&"):U+(qe+"=redacted&")}}else U=null;else U=b;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+c+`
`+f+`
`+U})}function Uw(a,c,f,m,P,b,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+c+`
`+f+`
`+b+" "+U})}function qr(a,c,f,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Bw(a,f)+(m?" "+m:"")})}function zw(a,c){a.info(function(){return"TIMEOUT: "+c})}Xs.prototype.info=function(){};function Bw(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var b=P[0];if(b!="noop"&&b!="stop"&&b!="close")for(var U=1;U<P.length;U++)P[U]=""}}}}return Eu(f)}catch{return c}}var jo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$f={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Su;function Lo(){}R(Lo,xu),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Su=new Lo;function Rn(a,c,f,m){this.j=a,this.i=c,this.l=f,this.R=m||1,this.U=new Ks(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hf}function Hf(){this.i=null,this.g="",this.h=!1}var Wf={},ku={};function Au(a,c,f){a.L=1,a.v=Bo(on(c)),a.m=f,a.P=!0,qf(a,null)}function qf(a,c){a.F=Date.now(),Fo(a),a.A=on(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),op(f.i,"t",m),a.C=0,f=a.j.J,a.h=new Hf,a.g=Ip(a.j,f?c:null,!a.m),0<a.O&&(a.M=new Mw(v(a.Y,a,a.g),a.O)),c=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vf[0]=P.toString()),P=Vf);for(var b=0;b<P.length;b++){var U=Cf(f,P[b],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qs(),Fw(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const c=this.M;c&&an(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=an(this.g);var c=this.g.Ba();const Qr=this.g.Z();if(!(3>Ke)&&(Ke!=3||this.g&&(this.h.h||this.g.oa()||fp(this.g)))){this.J||Ke!=4||c==7||(c==8||0>=Qr?Qs(3):Qs(2)),Ru(this);var f=this.g.Z();this.X=f;t:if(Kf(this)){var m=fp(this.g);a="";var P=m.length,b=an(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){mr(this),Js(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(b&&c==P-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=f==200,Uw(this.i,this.u,this.A,this.l,this.R,Ke,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,je=this.g;if((ce=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(ce)){var ie=ce;break t}}ie=null}if(f=ie)qr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Cu(this,f);else{this.o=!1,this.s=3,st(12),mr(this),Js(this);break e}}if(this.P){f=!0;let bt;for(;!this.J&&this.C<U.length;)if(bt=$w(this,U),bt==ku){Ke==4&&(this.s=4,st(14),f=!1),qr(this.i,this.l,null,"[Incomplete Response]");break}else if(bt==Wf){this.s=4,st(15),qr(this.i,this.l,U,"[Invalid Chunk]"),f=!1;break}else qr(this.i,this.l,bt,null),Cu(this,bt);if(Kf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||U.length!=0||this.h.h||(this.s=1,st(16),f=!1),this.o=this.o&&f,!f)qr(this.i,this.l,U,"[Invalid Chunked Response]"),mr(this),Js(this);else if(0<U.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Vu(qe),qe.M=!0,st(11))}}else qr(this.i,this.l,U,null),Cu(this,U);Ke==4&&mr(this),this.o&&!this.J&&(Ke==4?wp(this.j,this):(this.o=!1,Fo(this)))}else oE(this.g),f==400&&0<U.indexOf("Unknown SID")?(this.s=3,st(12)):(this.s=0,st(13)),mr(this),Js(this)}}}catch{}finally{}};function Kf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function $w(a,c){var f=a.C,m=c.indexOf(`
`,f);return m==-1?ku:(f=Number(c.substring(f,m)),isNaN(f)?Wf:(m+=1,m+f>c.length?ku:(c=c.slice(m,m+f),a.C=m+f,c)))}Rn.prototype.cancel=function(){this.J=!0,mr(this)};function Fo(a){a.S=Date.now()+a.I,Gf(a,a.I)}function Gf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ys(v(a.ba,a),c)}function Ru(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(zw(this.i,this.A),this.L!=2&&(Qs(),st(17)),mr(this),this.s=2,Js(this)):Gf(this,this.S-a)};function Js(a){a.j.G==0||a.J||wp(a.j,a)}function mr(a){Ru(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Mf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Cu(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||Pu(f.h,a))){if(!a.K&&Pu(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Go(f),qo(f);else break e;Ou(f),st(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ys(v(f.Za,f),6e3));if(1>=Xf(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else yr(f,11)}else if((a.K||f.g==a)&&Go(f),!E(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let ie=P[c];if(f.T=ie[0],ie=ie[1],f.G==2)if(ie[0]=="c"){f.K=ie[1],f.ia=ie[2];const qe=ie[3];qe!=null&&(f.la=qe,f.j.info("VER="+f.la));const Ke=ie[4];Ke!=null&&(f.Aa=Ke,f.j.info("SVER="+f.Aa));const Qr=ie[5];Qr!=null&&typeof Qr=="number"&&0<Qr&&(m=1.5*Qr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const bt=a.g;if(bt){const Yo=bt.g?bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yo){var b=m.h;b.g||Yo.indexOf("spdy")==-1&&Yo.indexOf("quic")==-1&&Yo.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(Nu(b,b.h),b.h=null))}if(m.D){const Mu=bt.g?bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Mu&&(m.ya=Mu,de(m.I,m.D,Mu))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var U=a;if(m.qa=Tp(m,m.J?m.ia:null,m.W),U.K){Jf(m.h,U);var ce=U,je=m.L;je&&(ce.I=je),ce.B&&(Ru(ce),Fo(ce)),m.g=U}else vp(m);0<f.i.length&&Ko(f)}else ie[0]!="stop"&&ie[0]!="close"||yr(f,7);else f.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?yr(f,7):Du(f):ie[0]!="noop"&&f.l&&f.l.ta(ie),f.v=0)}}Qs(4)}catch{}}var Hw=class{constructor(a,c){this.g=a,this.map=c}};function Qf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Yf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Xf(a){return a.h?1:a.g?a.g.size:0}function Pu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Nu(a,c){a.g?a.g.add(c):a.h=c}function Jf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Qf.prototype.cancel=function(){if(this.i=Zf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return N(a.i)}function Ww(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,m=0;m<f;m++)c.push(a[m]);return c}c=[],f=0;for(m in a)c[f++]=a[m];return c}function qw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const m in a)c[f++]=m;return c}}}function ep(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=qw(a),m=Ww(a),P=m.length,b=0;b<P;b++)c.call(void 0,m[b],f&&f[b],a)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kw(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var b=a[f].substring(0,m);P=a[f].substring(m+1)}else b=a[f];c(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof gr){this.h=a.h,Uo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var c=a.i,f=new ti;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),np(this,f),this.m=a.m}else a&&(c=String(a).match(tp))?(this.h=!1,Uo(this,c[1]||"",!0),this.o=Zs(c[2]||""),this.g=Zs(c[3]||"",!0),zo(this,c[4]),this.l=Zs(c[5]||"",!0),np(this,c[6]||"",!0),this.m=Zs(c[7]||"")):(this.h=!1,this.i=new ti(null,this.h))}gr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(ei(c,rp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(ei(c,rp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ei(f,f.charAt(0)=="/"?Yw:Qw,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ei(f,Jw)),a.join("")};function on(a){return new gr(a)}function Uo(a,c,f){a.j=f?Zs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function np(a,c,f){c instanceof ti?(a.i=c,Zw(a.i,a.h)):(f||(c=ei(c,Xw)),a.i=new ti(c,a.h))}function de(a,c,f){a.i.set(c,f)}function Bo(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ei(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,Gw),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Gw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rp=/[#\/\?@]/g,Qw=/[#\?:]/g,Yw=/[#\?]/g,Xw=/[#\?@]/g,Jw=/#/g;function ti(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Cn(a){a.g||(a.g=new Map,a.h=0,a.i&&Kw(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ti.prototype,t.add=function(a,c){Cn(this),this.i=null,a=Kr(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function sp(a,c){Cn(a),c=Kr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function ip(a,c){return Cn(a),c=Kr(a,c),a.g.has(c)}t.forEach=function(a,c){Cn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(c,P,m,this)},this)},this)},t.na=function(){Cn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let m=0;m<c.length;m++){const P=a[m];for(let b=0;b<P.length;b++)f.push(c[m])}return f},t.V=function(a){Cn(this);let c=[];if(typeof a=="string")ip(this,a)&&(c=c.concat(this.g.get(Kr(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return Cn(this),this.i=null,a=Kr(this,a),ip(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function op(a,c,f){sp(a,c),0<f.length&&(a.i=null,a.g.set(Kr(a,c),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var m=c[f];const b=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var P=b;U[m]!==""&&(P+="="+encodeURIComponent(String(U[m]))),a.push(P)}}return this.i=a.join("&")};function Kr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function Zw(a,c){c&&!a.j&&(Cn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(sp(this,m),op(this,P,f))},a)),a.j=c}function eE(a,c){const f=new Xs;if(l.Image){const m=new Image;m.onload=k(Pn,f,"TestLoadImage: loaded",!0,c,m),m.onerror=k(Pn,f,"TestLoadImage: error",!1,c,m),m.onabort=k(Pn,f,"TestLoadImage: abort",!1,c,m),m.ontimeout=k(Pn,f,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function tE(a,c){const f=new Xs,m=new AbortController,P=setTimeout(()=>{m.abort(),Pn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(b=>{clearTimeout(P),b.ok?Pn(f,"TestPingServer: ok",!0,c):Pn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Pn(f,"TestPingServer: error",!1,c)})}function Pn(a,c,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function nE(){this.g=new Lw}function rE(a,c,f){const m=f||"";try{ep(a,function(P,b){let U=P;h(P)&&(U=Eu(P)),c.push(m+b+"="+encodeURIComponent(U))})}catch(P){throw c.push(m+"type="+encodeURIComponent("_badmap")),P}}function $o(a){this.l=a.Ub||null,this.j=a.eb||!1}R($o,xu),$o.prototype.g=function(){return new Ho(this.l,this.j)},$o.prototype.i=function(a){return function(){return a}}({});function Ho(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ho,We),t=Ho.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,ri(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ni(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ri(this)),this.g&&(this.readyState=3,ri(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ap(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ap(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ni(this):ri(this),this.readyState==3&&ap(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ni(this))},t.Qa=function(a){this.g&&(this.response=a,ni(this))},t.ga=function(){this.g&&ni(this)};function ni(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ri(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function ri(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lp(a){let c="";return V(a,function(f,m){c+=m,c+=":",c+=f,c+=`\r
`}),c}function bu(a,c,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=lp(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):de(a,c,f))}function Ee(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Ee,We);var sE=/^https?$/i,iE=["POST","PUT"];t=Ee.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Su.g(),this.v=this.o?jf(this.o):jf(Su),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){up(this,b);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())f.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(iE,c,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,U]of f)this.g.setRequestHeader(b,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){up(this,b)}};function up(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,cp(a),Wo(a)}function cp(a){a.A||(a.A=!0,rt(a,"complete"),rt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,rt(this,"complete"),rt(this,"abort"),Wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wo(this,!0)),Ee.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hp(this):this.bb())},t.bb=function(){hp(this)};function hp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||an(a)!=4||a.Z()!=2)){if(a.u&&an(a)==4)Df(a.Ea,0,a);else if(rt(a,"readystatechange"),an(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var m;if(m=U===0){var P=String(a.D).match(tp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!sE.test(P?P.toLowerCase():"")}f=m}if(f)rt(a,"complete"),rt(a,"success");else{a.m=6;try{var b=2<an(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",cp(a)}}finally{Wo(a)}}}}function Wo(a,c){if(a.g){dp(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||rt(a,"ready");try{f.onreadystatechange=m}catch{}}}function dp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<an(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),jw(c)}};function fp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function oE(a){const c={};a=(a.g&&2<=an(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var f=A(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=c[P]||[];c[P]=b,b.push(f)}_(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function si(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function pp(a){this.Aa=0,this.i=[],this.j=new Xs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=si("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=si("baseRetryDelayMs",5e3,a),this.cb=si("retryDelaySeedMs",1e4,a),this.Wa=si("forwardChannelMaxRetries",2,a),this.wa=si("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qf(a&&a.concurrentRequestLimit),this.Da=new nE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,m){st(0),this.W=a,this.H=c||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=Tp(this,null,this.W),Ko(this)};function Du(a){if(mp(a),a.G==3){var c=a.U++,f=on(a.I);if(de(f,"SID",a.K),de(f,"RID",c),de(f,"TYPE","terminate"),ii(a,f),c=new Rn(a,a.j,c),c.L=2,c.v=Bo(on(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=Ip(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Fo(c)}xp(a)}function qo(a){a.g&&(Vu(a),a.g.cancel(),a.g=null)}function mp(a){qo(a),a.u&&(l.clearTimeout(a.u),a.u=null),Go(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ko(a){if(!Yf(a.h)&&!a.s){a.s=!0;var c=a.Ga;en||Z(),z||(en(),z=!0),Q.add(c,a),a.B=0}}function aE(a,c){return Xf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ys(v(a.Ga,a,c),Ep(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Rn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=g(b),x(b,this.S)):b=this.S),this.m!==null||this.O||(P.H=b,b=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=yp(this,P,c),f=on(this.I),de(f,"RID",a),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),ii(this,f),b&&(this.O?c="headers="+encodeURIComponent(String(lp(b)))+"&"+c:this.m&&bu(f,this.m,b)),Nu(this.h,P),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",c),de(f,"SID","null"),P.T=!0,Au(P,f,null)):Au(P,f,c),this.G=2}}else this.G==3&&(a?gp(this,a):this.i.length==0||Yf(this.h)||gp(this))};function gp(a,c){var f;c?f=c.l:f=a.U++;const m=on(a.I);de(m,"SID",a.K),de(m,"RID",f),de(m,"AID",a.T),ii(a,m),a.m&&a.o&&bu(m,a.m,a.o),f=new Rn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=yp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Nu(a.h,f),Au(f,m,c)}function ii(a,c){a.H&&V(a.H,function(f,m){de(c,m,f)}),a.l&&ep({},function(f,m){de(c,m,f)})}function yp(a,c,f){f=Math.min(a.i.length,f);var m=a.l?v(a.l.Na,a.l,a):null;e:{var P=a.i;let b=-1;for(;;){const U=["count="+f];b==-1?0<f?(b=P[0].g,U.push("ofs="+b)):b=0:U.push("ofs="+b);let ce=!0;for(let je=0;je<f;je++){let ie=P[je].g;const qe=P[je].map;if(ie-=b,0>ie)b=Math.max(0,P[je].g-100),ce=!1;else try{rE(qe,U,"req"+ie+"_")}catch{m&&m(qe)}}if(ce){m=U.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,m}function vp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;en||Z(),z||(en(),z=!0),Q.add(c,a),a.v=0}}function Ou(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ys(v(a.Fa,a),Ep(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_p(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ys(v(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,st(10),qo(this),_p(this))};function Vu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _p(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=on(a.qa);de(c,"RID","rpc"),de(c,"SID",a.K),de(c,"AID",a.T),de(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(c,"TO",a.ja),de(c,"TYPE","xmlhttp"),ii(a,c),a.m&&a.o&&bu(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Bo(on(c)),f.m=null,f.P=!0,qf(f,a)}t.Za=function(){this.C!=null&&(this.C=null,qo(this),Ou(this),st(19))};function Go(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function wp(a,c){var f=null;if(a.g==c){Go(a),Vu(a),a.g=null;var m=2}else if(Pu(a.h,c))f=c.D,Jf(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;m=Mo(),rt(m,new Bf(m,f)),Ko(a)}else vp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(m==1&&aE(a,c)||m==2&&Ou(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),P){case 1:yr(a,5);break;case 4:yr(a,10);break;case 3:yr(a,6);break;default:yr(a,2)}}}function Ep(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function yr(a,c){if(a.j.info("Error code "+c),c==2){var f=v(a.fb,a),m=a.Xa;const P=!m;m=new gr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Uo(m,"https"),Bo(m),P?eE(m.toString(),f):tE(m.toString(),f)}else st(2);a.G=0,a.l&&a.l.sa(c),xp(a),mp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),st(2)):(this.j.info("Failed to ping google.com"),st(1))};function xp(a){if(a.G=0,a.ka=[],a.l){const c=Zf(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Tp(a,c,f){var m=f instanceof gr?on(f):new gr(f);if(m.g!="")c&&(m.g=c+"."+m.g),zo(m,m.s);else{var P=l.location;m=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var b=new gr(null);m&&Uo(b,m),c&&(b.g=c),P&&zo(b,P),f&&(b.l=f),m=b}return f=a.D,c=a.ya,f&&c&&de(m,f,c),de(m,"VER",a.la),ii(a,m),m}function Ip(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ee(new $o({eb:f})):new Ee(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sp(){}t=Sp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qo(){}Qo.prototype.g=function(a,c){return new mt(a,c)};function mt(a,c){We.call(this),this.g=new pp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Gr(this)}R(mt,We),mt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Du(this.g)},mt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Eu(a),a=f);c.i.push(new Hw(c.Ya++,a)),c.G==3&&Ko(c)},mt.prototype.N=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,mt.aa.N.call(this)};function kp(a){Tu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}R(kp,Tu);function Ap(){Iu.call(this),this.status=1}R(Ap,Iu);function Gr(a){this.g=a}R(Gr,Sp),Gr.prototype.ua=function(){rt(this.g,"a")},Gr.prototype.ta=function(a){rt(this.g,new kp(a))},Gr.prototype.sa=function(a){rt(this.g,new Ap)},Gr.prototype.ra=function(){rt(this.g,"b")},Qo.prototype.createWebChannel=Qo.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,m_=function(){return new Qo},p_=function(){return Mo()},f_=pr,Sh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},jo.NO_ERROR=0,jo.TIMEOUT=8,jo.HTTP_ERROR=6,ja=jo,$f.COMPLETE="complete",d_=$f,Lf.EventType=Gs,Gs.OPEN="a",Gs.CLOSE="b",Gs.ERROR="c",Gs.MESSAGE="d",We.prototype.listen=We.prototype.K,Ei=Lf,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,h_=Ee}).apply(typeof ma<"u"?ma:typeof self<"u"?self:typeof window<"u"?window:{});const yg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Od("@firebase/firestore");function pi(){return Lr.logLevel}function $(t,...e){if(Lr.logLevel<=ne.DEBUG){const n=e.map(Gd);Lr.debug(`Firestore (${$s}): ${t}`,...n)}}function In(t,...e){if(Lr.logLevel<=ne.ERROR){const n=e.map(Gd);Lr.error(`Firestore (${$s}): ${t}`,...n)}}function Ns(t,...e){if(Lr.logLevel<=ne.WARN){const n=e.map(Gd);Lr.warn(`Firestore (${$s}): ${t}`,...n)}}function Gd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function le(t,e){t||Y()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class lk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class uk{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new er;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new er,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new g_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new Xe(e)}}class ck{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ck(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){le(this.o===void 0);const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new dk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new De(0,0))}static max(){return new X(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ao.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ao?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Te extends ao{construct(e,n,r){return new Te(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Te(n)}static emptyPath(){return new Te([])}}const mk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ue extends ao{construct(e,n,r){return new Ue(e,n,r)}static isValidIdentifier(e){return mk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ue.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ue(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ue(n)}static emptyPath(){return new Ue([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(Te.fromString(e))}static fromName(e){return new W(Te.fromString(e).popFirst(5))}static empty(){return new W(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new Te(e.slice()))}}function gk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new rr(s,W.empty(),e)}function yk(t){return new rr(t.readTime,t.key,-1)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(X.min(),W.empty(),-1)}static max(){return new rr(X.max(),W.empty(),-1)}}function vk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==_k)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ek(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qd.oe=-1;function Xl(t){return t==null}function El(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!El(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ga(this.root,e,this.comparator,!0)}}class ga{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=s??Fe.EMPTY,this.right=i??Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Fe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Fe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Fe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _g(this.data.getIterator())}getIteratorFrom(e){return new _g(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Be(this.comparator);return n.data=e,n}}class _g{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.fields=e,e.sort(Ue.comparator)}static empty(){return new vt([])}unionWith(e){let n=new Be(Ue.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new vt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new __("Invalid base64 string: "+i):i}}(e);return new He(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new He(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}He.EMPTY_BYTE_STRING=new He("");const Tk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sr(t){if(le(!!t),typeof t=="string"){let e=0;const n=Tk.exec(t);if(le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fr(t){return typeof t=="string"?He.fromBase64String(t):He.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xd(t){const e=t.mapValue.fields.__previous_value__;return Yd(e)?Xd(e):e}function lo(t){const e=sr(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ik{constructor(e,n,r,s,i,o,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class uo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new uo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof uo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={mapValue:{}};function Ur(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yd(t)?4:kk(t)?9007199254740991:Sk(t)?10:11:Y()}function Jt(t,e){if(t===e)return!0;const n=Ur(t);if(n!==Ur(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return lo(t).isEqual(lo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=sr(s.timestampValue),l=sr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Fr(s.bytesValue).isEqual(Fr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Se(s.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Se(s.integerValue)===Se(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Se(s.doubleValue),l=Se(i.doubleValue);return o===l?El(o)===El(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return bs(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(vg(o)!==vg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jt(o[u],l[u])))return!1;return!0}(t,e);default:return Y()}}function co(t,e){return(t.values||[]).find(n=>Jt(n,e))!==void 0}function Ds(t,e){if(t===e)return 0;const n=Ur(t),r=Ur(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Se(i.integerValue||i.doubleValue),u=Se(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return wg(t.timestampValue,e.timestampValue);case 4:return wg(lo(t),lo(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Fr(i),u=Fr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=oe(l[h],u[h]);if(p!==0)return p}return oe(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=oe(Se(i.latitude),Se(o.latitude));return l!==0?l:oe(Se(i.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Eg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,h,p;const y=i.fields||{},v=o.fields||{},k=(l=y.value)===null||l===void 0?void 0:l.arrayValue,R=(u=v.value)===null||u===void 0?void 0:u.arrayValue,N=oe(((h=k==null?void 0:k.values)===null||h===void 0?void 0:h.length)||0,((p=R==null?void 0:R.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:Eg(k,R)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ya.mapValue&&o===ya.mapValue)return 0;if(i===ya.mapValue)return 1;if(o===ya.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const v=oe(u[y],p[y]);if(v!==0)return v;const k=Ds(l[u[y]],h[p[y]]);if(k!==0)return k}return oe(u.length,p.length)}(t.mapValue,e.mapValue);default:throw Y()}}function wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=sr(t),r=sr(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function Eg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Ds(n[s],r[s]);if(i)return i}return oe(n.length,r.length)}function Os(t){return kh(t)}function kh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=sr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=kh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${kh(n.fields[o])}`;return s+"}"}(t.mapValue):Y()}function Ah(t){return!!t&&"integerValue"in t}function Jd(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Tg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function La(t){return!!t&&"mapValue"in t}function Sk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Mi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!La(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=Ue.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Mi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());La(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];La(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ct(Mi(this.value))}}function w_(t){const e=[];return Hr(t.fields,(n,r)=>{const s=new Ue([n]);if(La(r)){const i=w_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ze(e,0,X.min(),X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,n,r,s){return new Ze(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new Ze(e,2,n,X.min(),X.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,X.min(),X.min(),ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,n){this.position=e,this.inclusive=n}}function Ig(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=Ds(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Sg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ak(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{}class Ne extends E_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ck(e,n,r):n==="array-contains"?new bk(e,r):n==="in"?new Dk(e,r):n==="not-in"?new Ok(e,r):n==="array-contains-any"?new Vk(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pk(e,r):new Nk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ds(n,this.value)):n!==null&&Ur(this.value)===Ur(n)&&this.matchesComparison(Ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends E_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return x_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function x_(t){return t.op==="and"}function T_(t){return Rk(t)&&x_(t)}function Rk(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function Rh(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(T_(t))return t.filters.map(e=>Rh(e)).join(",");{const e=t.filters.map(n=>Rh(n)).join(",");return`${t.op}(${e})`}}function I_(t,e){return t instanceof Ne?function(r,s){return s instanceof Ne&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&I_(o,s.filters[l]),!0):!1}(t,e):void Y()}function S_(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Os(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(S_).join(" ,")+"}"}(t):"Filter"}class Ck extends Ne{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class Pk extends Ne{constructor(e,n){super(e,"in",n),this.keys=k_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Nk extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=k_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function k_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class bk extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jd(n)&&co(n.arrayValue,this.value)}}class Dk extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&co(this.value.arrayValue,n)}}class Ok extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(co(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!co(this.value.arrayValue,n)}}class Vk extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>co(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function kg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Mk(t,e,n,r,s,i,o)}function Zd(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Xl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Os(r)).join(",")),e.ue=n}return e.ue}function ef(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ak(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!I_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Sg(t.startAt,e.startAt)&&Sg(t.endAt,e.endAt)}function Ch(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jk(t,e,n,r,s,i,o,l){return new Jl(t,e,n,r,s,i,o,l)}function tf(t){return new Jl(t)}function Ag(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Lk(t){return t.collectionGroup!==null}function ji(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Be(Ue.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Tl(i,r))}),n.has(Ue.keyField().canonicalString())||e.ce.push(new Tl(Ue.keyField(),r))}return e.ce}function Qt(t){const e=J(t);return e.le||(e.le=Fk(e,ji(t))),e.le}function Fk(t,e){if(t.limitType==="F")return kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Tl(s.field,i)});const n=t.endAt?new xl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xl(t.startAt.position,t.startAt.inclusive):null;return kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e,n){return new Jl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zl(t,e){return ef(Qt(t),Qt(e))&&t.limitType===e.limitType}function A_(t){return`${Zd(Qt(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>S_(s)).join(", ")}]`),Xl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Os(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Os(s)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function eu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,ji(r),s)||r.endAt&&!function(o,l,u){const h=Ig(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,ji(r),s))}(t,e)}function Uk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function R_(t){return(e,n)=>{let r=!1;for(const s of ji(t)){const i=zk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zk(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),h=l.data.field(i);return u!==null&&h!==null?Ds(u,h):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return v_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=new we(W.comparator);function Sn(){return Bk}const C_=new we(W.comparator);function xi(...t){let e=C_;for(const n of t)e=e.insert(n.key,n);return e}function P_(t){let e=C_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return Li()}function N_(){return Li()}function Li(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const $k=new we(W.comparator),Hk=new Be(W.comparator);function te(...t){let e=Hk;for(const n of t)e=e.add(n);return e}const Wk=new Be(oe);function qk(){return Wk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:El(e)?"-0":e}}function b_(t){return{integerValue:""+t}}function D_(t,e){return xk(e)?b_(e):nf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(){this._=void 0}}function Kk(t,e,n){return t instanceof Il?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yd(i)&&(i=Xd(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ho?V_(t,e):t instanceof fo?M_(t,e):function(s,i){const o=O_(s,i),l=Rg(o)+Rg(s.Pe);return Ah(o)&&Ah(s.Pe)?b_(l):nf(s.serializer,l)}(t,e)}function Gk(t,e,n){return t instanceof ho?V_(t,e):t instanceof fo?M_(t,e):n}function O_(t,e){return t instanceof po?function(r){return Ah(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Il extends tu{}class ho extends tu{constructor(e){super(),this.elements=e}}function V_(t,e){const n=j_(e);for(const r of t.elements)n.some(s=>Jt(s,r))||n.push(r);return{arrayValue:{values:n}}}class fo extends tu{constructor(e){super(),this.elements=e}}function M_(t,e){let n=j_(e);for(const r of t.elements)n=n.filter(s=>!Jt(s,r));return{arrayValue:{values:n}}}class po extends tu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Rg(t){return Se(t.integerValue||t.doubleValue)}function j_(t){return Jd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n){this.field=e,this.transform=n}}function Yk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ho&&s instanceof ho||r instanceof fo&&s instanceof fo?bs(r.elements,s.elements,Jt):r instanceof po&&s instanceof po?Jt(r.Pe,s.Pe):r instanceof Il&&s instanceof Il}(t.transform,e.transform)}class Xk{constructor(e,n){this.version=e,this.transformResults=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nu{}function L_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new U_(t.key,Yt.none()):new Co(t.key,t.data,Yt.none());{const n=t.data,r=ct.empty();let s=new Be(Ue.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new dr(t.key,r,new vt(s.toArray()),Yt.none())}}function Jk(t,e,n){t instanceof Co?function(s,i,o){const l=s.value.clone(),u=Pg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof dr?function(s,i,o){if(!Fa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Pg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(F_(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Fi(t,e,n,r){return t instanceof Co?function(i,o,l,u){if(!Fa(i.precondition,o))return l;const h=i.value.clone(),p=Ng(i.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof dr?function(i,o,l,u){if(!Fa(i.precondition,o))return l;const h=Ng(i.fieldTransforms,u,o),p=o.data;return p.setAll(F_(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(i,o,l){return Fa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Zk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=O_(r.transform,s||null);i!=null&&(n===null&&(n=ct.empty()),n.set(r.field,i))}return n||null}function Cg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&bs(r,s,(i,o)=>Yk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Co extends nu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dr extends nu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function F_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pg(t,e,n){const r=new Map;le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,Gk(o,l,n[s]))}return r}function Ng(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Kk(i,o,e))}return r}class U_ extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eA extends nu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Jk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=N_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=L_(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&bs(this.mutations,e.mutations,(n,r)=>Cg(n,r))&&bs(this.baseMutations,e.baseMutations,(n,r)=>Cg(n,r))}}class rf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){le(e.mutations.length===r.length);let s=function(){return $k}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,re;function sA(t){switch(t){default:return Y();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function z_(t){if(t===void 0)return In("GRPC error has no .code"),L.UNKNOWN;switch(t){case Ae.OK:return L.OK;case Ae.CANCELLED:return L.CANCELLED;case Ae.UNKNOWN:return L.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return L.INTERNAL;case Ae.UNAVAILABLE:return L.UNAVAILABLE;case Ae.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Ae.NOT_FOUND:return L.NOT_FOUND;case Ae.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Ae.ABORTED:return L.ABORTED;case Ae.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Ae.DATA_LOSS:return L.DATA_LOSS;default:return Y()}}(re=Ae||(Ae={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA=new Cr([4294967295,4294967295],0);function bg(t){const e=iA().encode(t),n=new c_;return n.update(e),new Uint8Array(n.digest())}function Dg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cr([n,r],0),new Cr([s,i],0)]}class sf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ti(`Invalid padding: ${n}`);if(r<0)throw new Ti(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Cr.fromNumber(r)));return s.compare(oA)===1&&(s=new Cr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bg(e),[r,s]=Dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=bg(e),[r,s]=Dg(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ru(X.min(),s,new we(oe),Sn(),te())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class B_{constructor(e,n){this.targetId=e,this.me=n}}class $_{constructor(e,n,r=He.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Og{constructor(){this.fe=0,this.ge=Mg(),this.pe=He.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Y()}}),new Po(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Mg()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class aA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Sn(),this.qe=Vg(),this.Qe=new we(oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Ch(i))if(r===0){const o=new W(i.path);this.Ue(n,o,Ze.newNoDocument(o,X.min()))}else le(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Fr(r).toUint8Array()}catch(u){if(u instanceof __)return Ns("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new sf(o,s,i)}catch(u){return Ns(u instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Ch(l.target)){const u=new W(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Ze.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=te();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.Je(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ru(e,n,this.Qe,this.ke,r);return this.ke=Sn(),this.qe=Vg(),this.Qe=new we(oe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Og,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Be(oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Og),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Vg(){return new we(W.comparator)}function Mg(){return new we(W.comparator)}const lA={asc:"ASCENDING",desc:"DESCENDING"},uA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},cA={and:"AND",or:"OR"};class hA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nh(t,e){return t.useProto3Json||Xl(e)?e:{value:e}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function H_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dA(t,e){return Sl(t,e.toTimestamp())}function Xt(t){return le(!!t),X.fromTimestamp(function(n){const r=sr(n);return new De(r.seconds,r.nanos)}(t))}function of(t,e){return bh(t,e).canonicalString()}function bh(t,e){const n=function(s){return new Te(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function W_(t){const e=Te.fromString(t);return le(Y_(e)),e}function Dh(t,e){return of(t.databaseId,e.path)}function gc(t,e){const n=W_(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(K_(n))}function q_(t,e){return of(t.databaseId,e)}function fA(t){const e=W_(t);return e.length===4?Te.emptyPath():K_(e)}function Oh(t){return new Te(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K_(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function jg(t,e,n){return{name:Dh(t,e),fields:n.value.mapValue.fields}}function pA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(le(p===void 0||typeof p=="string"),He.fromBase64String(p||"")):(le(p===void 0||p instanceof Buffer||p instanceof Uint8Array),He.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const p=h.code===void 0?L.UNKNOWN:z_(h.code);return new H(p,h.message||"")}(o);n=new $_(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=gc(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):X.min(),l=new ct({mapValue:{fields:r.document.fields}}),u=Ze.newFoundDocument(s,i,o,l),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Ua(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=gc(t,r.document),i=r.readTime?Xt(r.readTime):X.min(),o=Ze.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Ua([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=gc(t,r.document),i=r.removedTargetIds||[];n=new Ua([],i,s,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new rA(s,i),l=r.targetId;n=new B_(l,o)}}return n}function mA(t,e){let n;if(e instanceof Co)n={update:jg(t,e.key,e.value)};else if(e instanceof U_)n={delete:Dh(t,e.key)};else if(e instanceof dr)n={update:jg(t,e.key,e.data),updateMask:IA(e.fieldMask)};else{if(!(e instanceof eA))return Y();n={verify:Dh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Il)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ho)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof fo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof po)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:dA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function gA(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(X.min())&&(o=Xt(i)),new Xk(o,s.transformResults||[])}(n,e))):[]}function yA(t,e){return{documents:[q_(t,e.path)]}}function vA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=q_(t,s);const i=function(h){if(h.length!==0)return Q_(Zt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(v){return{field:Jr(v.field),direction:EA(v.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Nh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function _A(t){let e=fA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){le(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(y){const v=G_(y);return v instanceof Zt&&T_(v)?v.getFilters():[v]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(v=>function(R){return new Tl(Zr(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(v))}(n.orderBy));let l=null;n.limit&&(l=function(y){let v;return v=typeof y=="object"?y.value:y,Xl(v)?null:v}(n.limit));let u=null;n.startAt&&(u=function(y){const v=!!y.before,k=y.values||[];return new xl(k,v)}(n.startAt));let h=null;return n.endAt&&(h=function(y){const v=!y.before,k=y.values||[];return new xl(k,v)}(n.endAt)),jk(e,s,o,i,l,"F",u,h)}function wA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function G_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Ne.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Ne.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Ne.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>G_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y()}}(n.compositeFilter.op))}(t):Y()}function EA(t){return lA[t]}function xA(t){return uA[t]}function TA(t){return cA[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return Ue.fromServerFormat(t.fieldPath)}function Q_(t){return t instanceof Ne?function(n){if(n.op==="=="){if(Tg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(xg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Tg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(xg(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:xA(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>Q_(s));return r.length===1?r[0]:{compositeFilter:{op:TA(n.op),filters:r}}}(t):Y()}function IA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,s,i=X.min(),o=X.min(),l=He.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.ct=e}}function kA(t){const e=_A({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.un=new RA}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(rr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class RA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Be(Te.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Be(Te.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Vs(0)}static kn(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fi(r.mutation,s,vt.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=kr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=xi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Sn();const o=Li(),l=function(){return Li()}();return n.forEach((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof dr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Fi(p.mutation,h,p.mutation.getFieldMask(),De.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var y;return l.set(h,new PA(p,(y=o.get(h))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Li();let s=new we((o,l)=>o-l),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||vt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const y=(s.get(l.batchId)||te()).add(u);s=s.insert(l.batchId,y)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,y=N_();p.forEach(v=>{if(!i.has(v)){const k=L_(n.get(v),r.get(v));k!==null&&y.set(v,k),i=i.add(v)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Lk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(kr());let l=-1,u=i;return o.next(h=>M.forEach(h,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),i.get(p)?M.resolve():this.remoteDocumentCache.getEntry(e,p).next(v=>{u=u.insert(p,v)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,u,h,te())).next(p=>({batchId:l,changes:P_(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let s=xi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=xi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const h=function(y,v){return new Jl(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((y,v)=>{o=o.insert(y,v)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Ze.newInvalidDocument(p)))});let l=xi();return o.forEach((u,h)=>{const p=i.get(u);p!==void 0&&Fi(p.mutation,h,vt.empty(),De.now()),eu(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:Xt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.overlays=new we(W.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new W(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new we((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=kr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=kr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nA(n,r));let i=this.Ir.get(n);i===void 0&&(i=te(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.sessionToken=He.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(){this.Tr=new Be(Oe.Er),this.dr=new Be(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Oe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Oe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new W(new Te([])),r=new Oe(n,e),s=new Oe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new W(new Te([])),r=new Oe(n,e),s=new Oe(n,e+1);let i=te();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Oe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Oe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return W.comparator(e.key,n.key)||oe(e.wr,n.wr)}static Ar(e,n){return oe(e.wr,n.wr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Be(Oe.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tA(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new Oe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Oe(n,0),s=new Oe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Be(oe);return n.forEach(s=>{const i=new Oe(s,0),o=new Oe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new Oe(new W(i),0);let l=new Be(oe);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){le(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new Oe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Oe(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.Mr=e,this.docs=function(){return new we(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ze.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const o=n.path,l=new W(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||vk(yk(p),r)<=0||(s.has(p.key)||eu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Y()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jA(this)}getSize(e){return M.resolve(this.size)}}class jA extends CA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.persistence=e,this.Nr=new Hs(n=>Zd(n),ef),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Lr=0,this.Br=new af,this.targetCount=0,this.kr=Vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Qd(0),this.Kr=!1,this.Kr=!0,this.$r=new OA,this.referenceDelegate=e(this),this.Ur=new LA(this),this.indexManager=new AA,this.remoteDocumentCache=function(s){return new MA(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new SA(n),this.Gr=new bA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new DA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new UA(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class UA extends wk{constructor(e){super(),this.currentSequenceNumber=e}}class lf{constructor(e){this.persistence=e,this.Jr=new af,this.Yr=null}static Zr(e){return new lf(e)}get Xr(){if(this.Yr)return this.Yr;throw Y()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return RT()?8:Ek(tt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zA;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(pi()<=ne.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(pi()<=ne.DEBUG&&$("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(pi()<=ne.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):M.resolve())}Yi(e,n){if(Ag(n))return M.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ph(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,o,u.readTime)?this.Yi(e,Ph(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,s){return Ag(n)||s.isEqual(X.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(pi()<=ne.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.rs(e,o,n,gk(s,-1)).next(l=>l))})}ts(e,n){let r=new Be(R_(e));return n.forEach((s,i)=>{eu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return pi()<=ne.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Ji.getDocumentsMatchingQuery(e,n,rr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new we(oe),this._s=new Hs(i=>Zd(i),ef),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function HA(t,e,n,r){return new $A(t,e,n,r)}async function X_(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=te();for(const h of s){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function WA(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const y=h.batch,v=y.keys();let k=M.resolve();return v.forEach(R=>{k=k.next(()=>p.getEntry(u,R)).next(N=>{const O=h.docVersions.get(R);le(O!==null),N.version.compareTo(O)<0&&(y.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),p.addEntry(N)))})}),k.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function J_(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qA(t,e){const n=J(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,y)=>{const v=s.get(y);if(!v)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,y)));let k=v.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(He.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,r)),s=s.insert(y,k),function(N,O,S){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(v,k,p)&&l.push(n.Ur.updateTargetData(i,k))});let u=Sn(),h=te();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(KA(i,o,e.documentUpdates).next(p=>{u=p.Ps,h=p.Is})),!r.isEqual(X.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(y=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,h)).next(()=>u)}).then(i=>(n.os=s,i))}function KA(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Sn();return n.forEach((l,u)=>{const h=i.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function GA(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function QA(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Vh(t,e,n){const r=J(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ro(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Lg(t,e,n){const r=J(t);let s=X.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,p){const y=J(u),v=y._s.get(p);return v!==void 0?M.resolve(y.os.get(v)):y.Ur.getTargetData(h,p)}(r,o,Qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:te())).next(l=>(YA(r,Uk(e),l),{documents:l,Ts:i})))}function YA(t,e,n){let r=t.us.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Fg{constructor(){this.activeTargetIds=qk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XA{constructor(){this.so=new Fg,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Fg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let va=null;function yc(){return va===null?va=function(){return 268435456+Math.round(2147483648*Math.random())}():va++,"0x"+va.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class tR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=yc(),u=this.xo(n,r.toUriEncodedString());$("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,u,h,s).then(p=>($("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ns("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$s}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=ZA[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=yc();return new Promise((o,l)=>{const u=new h_;u.setWithCredentials(!0),u.listenOnce(d_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ja.NO_ERROR:const p=u.getResponseJson();$(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case ja.TIMEOUT:$(Ye,`RPC '${e}' ${i} timed out`),l(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case ja.HTTP_ERROR:const y=u.getStatus();if($(Ye,`RPC '${e}' ${i} failed with status:`,y,"response text:",u.getResponseText()),y>0){let v=u.getResponseJson();Array.isArray(v)&&(v=v[0]);const k=v==null?void 0:v.error;if(k&&k.status&&k.message){const R=function(O){const S=O.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(S)>=0?S:L.UNKNOWN}(k.status);l(new H(R,k.message))}else l(new H(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(L.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{$(Ye,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);$(Ye,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=yc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=m_(),l=p_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");$(Ye,`Creating RPC '${e}' stream ${s}: ${p}`,u);const y=o.createWebChannel(p,u);let v=!1,k=!1;const R=new eR({Io:O=>{k?$(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(v||($(Ye,`Opening RPC '${e}' stream ${s} transport.`),y.open(),v=!0),$(Ye,`RPC '${e}' stream ${s} sending:`,O),y.send(O))},To:()=>y.close()}),N=(O,S,E)=>{O.listen(S,I=>{try{E(I)}catch(D){setTimeout(()=>{throw D},0)}})};return N(y,Ei.EventType.OPEN,()=>{k||($(Ye,`RPC '${e}' stream ${s} transport opened.`),R.yo())}),N(y,Ei.EventType.CLOSE,()=>{k||(k=!0,$(Ye,`RPC '${e}' stream ${s} transport closed`),R.So())}),N(y,Ei.EventType.ERROR,O=>{k||(k=!0,Ns(Ye,`RPC '${e}' stream ${s} transport errored:`,O),R.So(new H(L.UNAVAILABLE,"The operation could not be completed")))}),N(y,Ei.EventType.MESSAGE,O=>{var S;if(!k){const E=O.data[0];le(!!E);const I=E,D=I.error||((S=I[0])===null||S===void 0?void 0:S.error);if(D){$(Ye,`RPC '${e}' stream ${s} received error:`,D);const j=D.status;let V=function(w){const x=Ae[w];if(x!==void 0)return z_(x)}(j),_=D.message;V===void 0&&(V=L.INTERNAL,_="Unknown error status: "+j+" with message "+D.message),k=!0,R.So(new H(V,_)),y.close()}else $(Ye,`RPC '${e}' stream ${s} received:`,E),R.bo(E)}}),N(l,f_.STAT_EVENT,O=>{O.stat===Sh.PROXY?$(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Sh.NOPROXY&&$(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function vc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){return new hA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Z_(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nR extends ew{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=pA(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?Xt(o.readTime):X.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Oh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Ch(u)?{documents:yA(i,u)}:{query:vA(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=H_(i,o.resumeToken);const h=Nh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=Sl(i,o.snapshotVersion.toTimestamp());const h=Nh(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=wA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Oh(this.serializer),n.removeTarget=e,this.a_(n)}}class rR extends ew{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return le(!!e.streamToken),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gA(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Oh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,bh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,bh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class iR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(In(n),this.D_=!1):$("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Wr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=J(u);h.L_.add(4),await No(h),h.q_.set("Unknown"),h.L_.delete(4),await iu(h)}(this))})}),this.q_=new iR(r,s)}}async function iu(t){if(Wr(t))for(const e of t.B_)await e(!0)}async function No(t){for(const e of t.B_)await e(!1)}function tw(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),ff(n)?df(n):Ws(n).r_()&&hf(n,e))}function cf(t,e){const n=J(t),r=Ws(n);n.N_.delete(e),r.r_()&&nw(n,e),n.N_.size===0&&(r.r_()?r.o_():Wr(n)&&n.q_.set("Unknown"))}function hf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ws(t).A_(e)}function nw(t,e){t.Q_.xe(e),Ws(t).R_(e)}function df(t){t.Q_=new aA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.q_.v_()}function ff(t){return Wr(t)&&!Ws(t).n_()&&t.N_.size>0}function Wr(t){return J(t).L_.size===0}function rw(t){t.Q_=void 0}async function aR(t){t.q_.set("Online")}async function lR(t){t.N_.forEach((e,n)=>{hf(t,e)})}async function uR(t,e){rw(t),ff(t)?(t.q_.M_(e),df(t)):t.q_.set("Unknown")}async function cR(t,e,n){if(t.q_.set("Online"),e instanceof $_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kl(t,r)}else if(e instanceof Ua?t.Q_.Ke(e):e instanceof B_?t.Q_.He(e):t.Q_.We(e),!n.isEqual(X.min()))try{const r=await J_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(He.EMPTY_BYTE_STRING,p.snapshotVersion)),nw(i,u);const y=new Bn(p.target,u,h,p.sequenceNumber);hf(i,y)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await kl(t,r)}}async function kl(t,e,n){if(!Ro(e))throw e;t.L_.add(1),await No(t),t.q_.set("Offline"),n||(n=()=>J_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await iu(t)})}function sw(t,e){return e().catch(n=>kl(t,n,e))}async function ou(t){const e=J(t),n=ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;hR(e);)try{const s=await GA(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,dR(e,s)}catch(s){await kl(e,s)}iw(e)&&ow(e)}function hR(t){return Wr(t)&&t.O_.length<10}function dR(t,e){t.O_.push(e);const n=ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function iw(t){return Wr(t)&&!ir(t).n_()&&t.O_.length>0}function ow(t){ir(t).start()}async function fR(t){ir(t).p_()}async function pR(t){const e=ir(t);for(const n of t.O_)e.m_(n.mutations)}async function mR(t,e,n){const r=t.O_.shift(),s=rf.from(r,e,n);await sw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ou(t)}async function gR(t,e){e&&ir(t).V_&&await async function(r,s){if(function(o){return sA(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();ir(r).s_(),await sw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ou(r)}}(t,e),iw(t)&&ow(t)}async function zg(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Wr(n);n.L_.add(3),await No(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await iu(n)}async function yR(t,e){const n=J(t);e?(n.L_.delete(2),await iu(n)):e||(n.L_.add(2),await No(n),n.q_.set("Unknown"))}function Ws(t){return t.K_||(t.K_=function(n,r,s){const i=J(n);return i.w_(),new nR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:aR.bind(null,t),Ro:lR.bind(null,t),mo:uR.bind(null,t),d_:cR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),ff(t)?df(t):t.q_.set("Unknown")):(await t.K_.stop(),rw(t))})),t.K_}function ir(t){return t.U_||(t.U_=function(n,r,s){const i=J(n);return i.w_(),new rR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fR.bind(null,t),mo:gR.bind(null,t),f_:pR.bind(null,t),g_:mR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await ou(t)):(await t.U_.stop(),t.O_.length>0&&($("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new pf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mf(t,e){if(In("AsyncQueue",`${e}: ${t}`),Ro(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=xi(),this.sortedSet=new we(this.comparator)}static emptySet(e){return new xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.W_=new we(W.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Y():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ms{constructor(e,n,r,s,i,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ms(e,n,xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _R{constructor(){this.queries=$g(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=J(n),i=s.queries;s.queries=$g(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function $g(){return new Hs(t=>A_(t),Zl)}async function wR(t,e){const n=J(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new vR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=mf(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&gf(n)}async function ER(t,e){const n=J(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xR(t,e){const n=J(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&gf(n)}function TR(t,e,n){const r=J(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function gf(t){t.Y_.forEach(e=>{e.next()})}var Mh,Hg;(Hg=Mh||(Mh={})).ea="default",Hg.Cache="cache";class IR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=Ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Mh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e){this.key=e}}class lw{constructor(e){this.key=e}}class SR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=R_(e),this.Ra=new xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Bg,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,y)=>{const v=s.get(p),k=eu(this.query,y)?y:null,R=!!v&&this.mutatedKeys.has(v.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let O=!1;v&&k?v.data.isEqual(k.data)?R!==N&&(r.track({type:3,doc:k}),O=!0):this.ga(v,k)||(r.track({type:2,doc:k}),O=!0,(u&&this.Aa(k,u)>0||h&&this.Aa(k,h)<0)&&(l=!0)):!v&&k?(r.track({type:0,doc:k}),O=!0):v&&!k&&(r.track({type:1,doc:v}),O=!0,(u||h)&&(l=!0)),O&&(k?(o=o.add(k),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,y)=>function(k,R){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return N(k)-N(R)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,h=u!==this.Ea;return this.Ea=u,o.length!==0||h?{snapshot:new Ms(this.query,e.Ra,i,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Bg,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new lw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new aw(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return Ms.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class kR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AR{constructor(e){this.key=e,this.va=!1}}class RR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Hs(l=>A_(l),Zl),this.Ma=new Map,this.xa=new Set,this.Oa=new we(W.comparator),this.Na=new Map,this.La=new af,this.Ba={},this.ka=new Map,this.qa=Vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function CR(t,e,n=!0){const r=pw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await uw(r,e,n,!0),s}async function PR(t,e){const n=pw(t);await uw(n,e,!0,!1)}async function uw(t,e,n,r){const s=await QA(t.localStore,Qt(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await NR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&tw(t.remoteStore,s),l}async function NR(t,e,n,r,s){t.Ka=(y,v,k)=>async function(N,O,S,E){let I=O.view.ma(S);I.ns&&(I=await Lg(N.localStore,O.query,!1).then(({documents:_})=>O.view.ma(_,I)));const D=E&&E.targetChanges.get(O.targetId),j=E&&E.targetMismatches.get(O.targetId)!=null,V=O.view.applyChanges(I,N.isPrimaryClient,D,j);return qg(N,O.targetId,V.wa),V.snapshot}(t,y,v,k);const i=await Lg(t.localStore,e,!0),o=new SR(e,i.Ts),l=o.ma(i.documents),u=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,u);qg(t,n,h.wa);const p=new kR(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function bR(t,e,n){const r=J(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Zl(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cf(r.remoteStore,s.targetId),jh(r,s.targetId)}).catch(Ao)):(jh(r,s.targetId),await Vh(r.localStore,s.targetId,!0))}async function DR(t,e){const n=J(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cf(n.remoteStore,r.targetId))}async function OR(t,e,n){const r=zR(t);try{const s=await function(o,l){const u=J(o),h=De.now(),p=l.reduce((k,R)=>k.add(R.key),te());let y,v;return u.persistence.runTransaction("Locally write mutations","readwrite",k=>{let R=Sn(),N=te();return u.cs.getEntries(k,p).next(O=>{R=O,R.forEach((S,E)=>{E.isValidDocument()||(N=N.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(k,R)).next(O=>{y=O;const S=[];for(const E of l){const I=Zk(E,y.get(E.key).overlayedDocument);I!=null&&S.push(new dr(E.key,I,w_(I.value.mapValue),Yt.exists(!0)))}return u.mutationQueue.addMutationBatch(k,h,S,l)}).next(O=>{v=O;const S=O.applyToLocalDocumentSet(y,N);return u.documentOverlayCache.saveOverlays(k,O.batchId,S)})}).then(()=>({batchId:v.batchId,changes:P_(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let h=o.Ba[o.currentUser.toKey()];h||(h=new we(oe)),h=h.insert(l,u),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await bo(r,s.changes),await ou(r.remoteStore)}catch(s){const i=mf(s,"Failed to persist write");n.reject(i)}}async function cw(t,e){const n=J(t);try{const r=await qA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?le(o.va):s.removedDocuments.size>0&&(le(o.va),o.va=!1))}),await bo(n,r,e)}catch(r){await Ao(r)}}function Wg(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let h=!1;u.queries.forEach((p,y)=>{for(const v of y.j_)v.Z_(l)&&(h=!0)}),h&&gf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VR(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new we(W.comparator);o=o.insert(i,Ze.newNoDocument(i,X.min()));const l=te().add(i),u=new ru(X.min(),new Map,new we(oe),o,l);await cw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),yf(r)}else await Vh(r.localStore,e,!1).then(()=>jh(r,e,n)).catch(Ao)}async function MR(t,e){const n=J(t),r=e.batch.batchId;try{const s=await WA(n.localStore,e);dw(n,r,null),hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,s)}catch(s){await Ao(s)}}async function jR(t,e,n){const r=J(t);try{const s=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(y=>(le(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(h,y))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);dw(r,e,n),hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,s)}catch(s){await Ao(s)}}function hw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function dw(t,e,n){const r=J(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||fw(t,r)})}function fw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(cf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),yf(t))}function qg(t,e,n){for(const r of n)r instanceof aw?(t.La.addReference(r.key,e),LR(t,r)):r instanceof lw?($("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||fw(t,r.key)):Y()}function LR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||($("SyncEngine","New document in limbo: "+n),t.xa.add(r),yf(t))}function yf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new W(Te.fromString(e)),r=t.qa.next();t.Na.set(r,new AR(n)),t.Oa=t.Oa.insert(n,r),tw(t.remoteStore,new Bn(Qt(tf(n.path)),r,"TargetPurposeLimboResolution",Qd.oe))}}async function bo(t,e,n){const r=J(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const y=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(h){s.push(h);const y=uf.Wi(u.targetId,h);i.push(y)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,h){const p=J(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>M.forEach(h,v=>M.forEach(v.$i,k=>p.persistence.referenceDelegate.addReference(y,v.targetId,k)).next(()=>M.forEach(v.Ui,k=>p.persistence.referenceDelegate.removeReference(y,v.targetId,k)))))}catch(y){if(!Ro(y))throw y;$("LocalStore","Failed to update sequence numbers: "+y)}for(const y of h){const v=y.targetId;if(!y.fromCache){const k=p.os.get(v),R=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion(R);p.os=p.os.insert(v,N)}}}(r.localStore,i))}async function FR(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await X_(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.hs)}}function UR(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let s=te();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function pw(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=UR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.Ca.d_=xR.bind(null,e.eventManager),e.Ca.$a=TR.bind(null,e.eventManager),e}function zR(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jR.bind(null,e),e}class Al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=su(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return HA(this.persistence,new BA,e.initialUser,this.serializer)}Ga(e){return new FA(lf.Zr,this.serializer)}Wa(e){return new XA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Al.provider={build:()=>new Al};class Lh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Wg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=FR.bind(null,this.syncEngine),await yR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _R}()}createDatastore(e){const n=su(e.databaseInfo.databaseId),r=function(i){return new tR(i)}(e.databaseInfo);return function(i,o,l,u){return new sR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new oR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Wg(this.syncEngine,n,0),function(){return Ug.D()?new Ug:new JA}())}createSyncEngine(e,n){return function(s,i,o,l,u,h,p){const y=new RR(s,i,o,l,u,h);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=J(s);$("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await No(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Lh.provider={build:()=>new Lh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=y_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{$("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=mf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await X_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HR(t);$("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>zg(e.remoteStore,s)),t._onlineComponents=e}async function HR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ns("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new Al)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await _c(t,new Al);return t._offlineComponents}async function mw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await Kg(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await Kg(t,new Lh))),t._onlineComponents}function WR(t){return mw(t).then(e=>e.syncEngine)}async function qR(t){const e=await mw(t),n=e.eventManager;return n.onListen=CR.bind(null,e.syncEngine),n.onUnlisten=bR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=PR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=DR.bind(null,e.syncEngine),n}function KR(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,u,h){const p=new BR({next:v=>{p.Za(),o.enqueueAndForget(()=>ER(i,y));const k=v.docs.has(l);!k&&v.fromCache?h.reject(new H(L.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&v.fromCache&&u&&u.source==="server"?h.reject(new H(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),y=new IR(tf(l.path),p,{includeMetadataChanges:!0,_a:!0});return wR(i,y)}(await qR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QR(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qg(t){if(!W.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function zr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vf(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _f{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yg({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yg(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ak;switch(r.type){case"firstParty":return new hk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Gg.get(n);r&&($("ComponentProvider","Removing Datastore"),Gg.delete(n),r.terminate())}(this),Promise.resolve()}}function YR(t,e,n,r={}){var s;const i=(t=zr(t,_f))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Ns("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Xe.MOCK_USER;else{l=ET(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Xe(h)}t._authCredentials=new lk(new g_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wf(this.firestore,e,this._query)}}class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class mo extends wf{constructor(e,n,r){super(e,n,tf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new W(e))}withConverter(e){return new mo(this.firestore,e,this._path)}}function au(t,e,...n){if(t=nt(t),arguments.length===1&&(e=y_.newId()),GR("doc","path",e),t instanceof _f){const r=Te.fromString(e,...n);return Qg(r),new wt(t,null,new W(r))}{if(!(t instanceof wt||t instanceof mo))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Te.fromString(e,...n));return Qg(r),new wt(t.firestore,t instanceof mo?t.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Z_(this,"async_queue_retry"),this.Vu=()=>{const r=vc();r&&$("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=vc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=vc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ro(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=pf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Y()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class lu extends _f{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Xg,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xg(e),this._firestoreClient=void 0,await e}}}function XR(t,e){const n=typeof t=="object"?t:Rv(),r=typeof t=="string"?t:"(default)",s=Md(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=_T("firestore");i&&YR(s,...i)}return s}function yw(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||JR(t),t._firestoreClient}function JR(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,h,p){return new Ik(l,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,gw(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new $R(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(He.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(He.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ue(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=/^__.*__$/;class eC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new dr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Co(e,this.data,n,this.fieldTransforms)}}class vw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new dr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _w(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class Tf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Tf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_w(this.Cu)&&ZR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class tC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||su(e)}Qu(e,n,r,s=!1){return new Tf({Cu:e,methodName:n,qu:r,path:Ue.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ww(t){const e=t._freezeSettings(),n=su(t._databaseId);return new tC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nC(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Sf("Data must be an object, but it was:",o,r);const l=Ew(r,o);let u,h;if(i.merge)u=new vt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const y of i.mergeFields){const v=Fh(e,y,n);if(!o.contains(v))throw new H(L.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);Tw(p,v)||p.push(v)}u=new vt(p),h=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,h=o.fieldTransforms;return new eC(new ct(l),u,h)}class hu extends cu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof hu}}class If extends cu{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new po(e.serializer,D_(e.serializer,this.$u));return new Qk(e.path,n)}isEqual(e){return e instanceof If&&this.$u===e.$u}}function rC(t,e,n,r){const s=t.Qu(1,e,n);Sf("Data must be an object, but it was:",s,r);const i=[],o=ct.empty();Hr(r,(u,h)=>{const p=kf(e,u,n);h=nt(h);const y=s.Nu(p);if(h instanceof hu)i.push(p);else{const v=du(h,y);v!=null&&(i.push(p),o.set(p,v))}});const l=new vt(i);return new vw(o,l,s.fieldTransforms)}function sC(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[Fh(e,r,n)],u=[s];if(i.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let v=0;v<i.length;v+=2)l.push(Fh(e,i[v])),u.push(i[v+1]);const h=[],p=ct.empty();for(let v=l.length-1;v>=0;--v)if(!Tw(h,l[v])){const k=l[v];let R=u[v];R=nt(R);const N=o.Nu(k);if(R instanceof hu)h.push(k);else{const O=du(R,N);O!=null&&(h.push(k),p.set(k,O))}}const y=new vt(h);return new vw(p,y,o.fieldTransforms)}function du(t,e){if(xw(t=nt(t)))return Sf("Unsupported field value:",e,t),Ew(t,e);if(t instanceof cu)return function(r,s){if(!_w(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=du(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return D_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Sl(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Ef)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:H_(s.serializer,r._byteString)};if(r instanceof wt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:of(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xf)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return nf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${vf(r)}`)}(t,e)}function Ew(t,e){const n={};return v_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,s)=>{const i=du(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function xw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Ef||t instanceof js||t instanceof wt||t instanceof cu||t instanceof xf)}function Sf(t,e,n){if(!xw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vf(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Fh(t,e,n){if((e=nt(e))instanceof uu)return e._internalPath;if(typeof e=="string")return kf(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const iC=new RegExp("[~\\*/\\[\\]]");function kf(t,e,n){if(e.search(iC)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new uu(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function Tw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Sw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class oC extends Iw{data(){return super.data()}}function Sw(t,e){return typeof e=="string"?kf(t,e):e instanceof uu?e._internalPath:e._delegate._internalPath}class aC{convertValue(e,n="none"){switch(Ur(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Se(o.doubleValue));return new xf(i)}convertGeoPoint(e){return new Ef(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(lo(e));default:return null}}convertTimestamp(e){const n=sr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Te.fromString(e);le(Y_(r));const s=new uo(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kw extends Iw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cC(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Sw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cC extends kw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t){t=zr(t,wt);const e=zr(t.firestore,lu);return KR(yw(e),t._key).then(n=>dC(e,t,n))}class hC extends aC{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function Af(t,e,n){t=zr(t,wt);const r=zr(t.firestore,lu),s=lC(t.converter,e,n);return Rw(r,[nC(ww(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Yt.none())])}function Rf(t,e,n,...r){t=zr(t,wt);const s=zr(t.firestore,lu),i=ww(s);let o;return o=typeof(e=nt(e))=="string"||e instanceof uu?sC(i,"updateDoc",t._key,e,n,r):rC(i,"updateDoc",t._key,e),Rw(s,[o.toMutation(t._key,Yt.exists(!0))])}function Rw(t,e){return function(r,s){const i=new er;return r.asyncQueue.enqueueAndForget(async()=>OR(await WR(r),s,i)),i.promise}(yw(t),e)}function dC(t,e,n){const r=n.docs.get(e._key),s=new hC(t);return new kw(t,s,e._key,r,new uC(n.hasPendingWrites,n.fromCache),e.converter)}function Cl(t){return new If("increment",t)}(function(e,n=!0){(function(s){$s=s})(zs),Ps(new Vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new lu(new uk(r.getProvider("auth-internal")),new fk(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uo(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Zn(yg,"4.7.3",e),Zn(yg,"4.7.3","esm2017")})();const fC={apiKey:"AIzaSyC9XYvHxbp3VW0PCW0W7xfoWuiMxsjoUZE",authDomain:"dictamed2025.firebaseapp.com",projectId:"dictamed2025",storageBucket:"dictamed2025.firebasestorage.app",messagingSenderId:"242034923776",appId:"1:242034923776:web:bd315e890c715b1d263be5",measurementId:"G-1B8DZ4B73R"},Cw=Av(fC),Ui=rk(Cw),fu=XR(Cw),pC=new cn,wc=({onLogin:t})=>{const[e,n]=G.useState(!1),[r,s]=G.useState(""),[i,o]=G.useState(""),[l,u]=G.useState(""),[h,p]=G.useState(!1),y=async R=>{if(R.preventDefault(),!r.trim()||!i.trim()){u("Veuillez remplir tous les champs.");return}p(!0),u("");try{if(e)try{await z2(Ui,r,i)}catch(N){switch(console.error("Erreur inscription:",N.code),N.code){case"auth/email-already-in-use":throw new Error("Cet email est déjà utilisé.");case"auth/invalid-email":throw new Error("Format d'email invalide.");case"auth/weak-password":throw new Error("Le mot de passe doit contenir au moins 6 caractères.");default:throw new Error("Erreur lors de la création du compte.")}}else try{if(r.includes("@"))await B2(Ui,r,i);else throw new Error("ManualAuthRequired")}catch(N){if(N.message==="ManualAuthRequired"||N.code==="auth/invalid-email"||N.code==="auth/user-not-found"||N.code==="auth/wrong-password"||N.code==="auth/invalid-credential")t({login:r,accessCode:i});else throw N}}catch(N){u(N.message||"Une erreur est survenue."),p(!1)}},v=async()=>{p(!0),u("");try{const N=(await dS(Ui,pC)).user;t({login:N.email||N.uid,accessCode:"GOOGLE_AUTH_TOKEN"})}catch(R){console.error(R),u("Authentification Google annulée ou échouée.")}finally{p(!1)}},k=()=>{n(!e),u(""),s(""),o("")};return d.jsx("div",{className:"min-h-[80vh] flex items-center justify-center p-4",children:d.jsxs("div",{className:"bg-white/95 backdrop-blur-xl p-8 sm:p-12 rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.12)] w-full max-w-md border border-slate-100 ring-1 ring-slate-200/60 relative overflow-hidden transition-all duration-500",children:[d.jsx("div",{className:`absolute top-0 right-0 w-48 h-48 bg-emerald-400/5 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none transition-colors duration-500 ${e?"bg-blue-400/10":""}`}),d.jsx("div",{className:`absolute bottom-0 left-0 w-48 h-48 bg-blue-400/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none transition-colors duration-500 ${e?"bg-emerald-400/10":""}`}),d.jsxs("div",{className:"text-center mb-10 relative z-10",children:[d.jsx("div",{className:"bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-100 border border-slate-50",children:d.jsx(mh,{className:e?"text-blue-500":"text-emerald-500",size:40,strokeWidth:2})}),d.jsx("h2",{className:"text-3xl font-black tracking-tight mb-3",children:e?d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"text-black",children:"Créer un "}),d.jsx("span",{className:"text-blue-600",children:"Compte"})]}):d.jsxs(d.Fragment,{children:[d.jsx("span",{className:"text-black",children:"Se connecter à "}),d.jsx("span",{className:"text-blue-600",children:"Dicta"}),d.jsx("span",{className:"text-emerald-600",children:"Med"})]})}),d.jsxs("div",{className:"inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider",children:[d.jsx(iT,{size:14,className:e?"text-blue-500":"text-emerald-500"}),d.jsx("span",{children:"Espace Sécurisé"})]})]}),d.jsxs("form",{onSubmit:y,className:"space-y-6",children:[d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest",children:e?"Email Professionnel":"Identifiant Dr ou Email"}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors",children:e?d.jsx(dl,{size:20}):d.jsx(vv,{size:20})}),d.jsx("input",{type:e?"email":"text",value:r,onChange:R=>s(R.target.value),className:"block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none",placeholder:e?"docteur@exemple.com":"Dr Flen ou email",required:e})]})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"block text-xs font-black text-slate-500 uppercase ml-1 tracking-widest",children:e?"Mot de passe (6 car. min)":"Code secret ou Mot de passe"}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-600 transition-colors",children:d.jsx(Q1,{size:20})}),d.jsx("input",{type:"password",value:i,onChange:R=>o(R.target.value),className:"block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-800 font-bold placeholder:text-slate-400/70 transition-all outline-none",placeholder:"••••••••",required:!0,minLength:e?6:1})]})]}),l&&d.jsxs("div",{className:"p-4 bg-rose-50 text-rose-600 rounded-xl text-sm font-bold border border-rose-100 flex items-center gap-3 animate-shake",children:[d.jsx("div",{className:"w-2 h-2 rounded-full bg-rose-500 animate-pulse"}),l]}),d.jsx("button",{type:"submit",disabled:h,className:`
              w-full flex justify-center items-center py-4 px-6 rounded-2xl shadow-xl text-white font-black text-lg transition-all transform active:scale-[0.98] mt-6
              ${e?"bg-blue-600 hover:bg-blue-700 shadow-blue-500/25":"bg-emerald-600 hover:bg-emerald-700 shadow-emerald-500/25"}
              ${h?"opacity-80 cursor-wait":""}
            `,children:h?d.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"}):e?d.jsxs(d.Fragment,{children:[d.jsx(aT,{size:22,className:"mr-3",strokeWidth:3}),"Créer le compte"]}):d.jsxs(d.Fragment,{children:[d.jsx(Y1,{size:22,className:"mr-3",strokeWidth:3}),"Se connecter"]})})]}),d.jsx("div",{className:"mt-6 text-center",children:d.jsxs("button",{onClick:k,className:"text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center justify-center mx-auto gap-2 group",children:[e?"Déjà un compte ? Se connecter":"Pas encore de compte ? Créer un compte",d.jsx(hv,{size:16,className:"group-hover:translate-x-1 transition-transform"})]})}),d.jsxs("div",{className:"relative flex py-8 items-center",children:[d.jsx("div",{className:"flex-grow border-t border-slate-100"}),d.jsx("span",{className:"flex-shrink-0 mx-4 text-slate-400 text-[10px] font-black uppercase tracking-widest",children:"Accès rapide"}),d.jsx("div",{className:"flex-grow border-t border-slate-100"})]}),d.jsx("button",{type:"button",onClick:v,disabled:h,className:"w-full flex items-center justify-center gap-3 py-4 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-slate-700 font-bold hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]",children:h?d.jsx("div",{className:"animate-spin rounded-full h-5 w-5 border-2 border-slate-600 border-t-transparent"}):d.jsxs(d.Fragment,{children:[d.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",children:[d.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),d.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),d.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"}),d.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"})]}),d.jsx("span",{children:"Continuer avec Google"})]})})]})})};var Ht=(t=>(t.NORMAL="normal",t.TEST="test",t.DMI="dmi",t))(Ht||{}),Ce=(t=>(t.IDLE="Prêt",t.RECORDING="En cours",t.PAUSED="Pausé",t.RECORDED="Enregistré",t))(Ce||{});const mC=()=>{const[t,e]=G.useState(Ce.IDLE),[n,r]=G.useState(0),[s,i]=G.useState(null),[o,l]=G.useState(null),u=G.useRef(null),h=G.useRef([]),p=G.useRef(null),y=G.useRef(0),v=G.useRef(0),k=G.useRef(null),R=G.useCallback(()=>{p.current&&(clearInterval(p.current),p.current=null),k.current&&(k.current.pause(),k.current=null)},[]);G.useEffect(()=>R,[R]);const N=()=>{y.current=Date.now()-n*1e3,p.current=window.setInterval(()=>{r(Math.floor((Date.now()-y.current)/1e3))},1e3)},O=()=>{p.current&&(clearInterval(p.current),p.current=null)},S=async()=>{l(null);try{const _=await navigator.mediaDevices.getUserMedia({audio:!0});let g="audio/webm";MediaRecorder.isTypeSupported("audio/webm;codecs=opus")?g="audio/webm;codecs=opus":MediaRecorder.isTypeSupported("audio/mp4")&&(g="audio/mp4");const w=new MediaRecorder(_,{mimeType:g});u.current=w,h.current=[],w.ondataavailable=x=>{x.data.size>0&&h.current.push(x.data)},w.onstop=()=>{const x=new Blob(h.current,{type:g});i(x),_.getTracks().forEach(A=>A.stop())},w.start(100),e(Ce.RECORDING),N()}catch(_){console.error(_),l("Accès au microphone refusé ou non disponible.")}},E=()=>{u.current&&u.current.state==="recording"&&(u.current.pause(),e(Ce.PAUSED),O())},I=()=>{u.current&&u.current.state==="paused"&&(u.current.resume(),e(Ce.RECORDING),N())},D=()=>{u.current&&(u.current.state!=="inactive"&&u.current.stop(),e(Ce.RECORDED),O())},j=()=>{R(),e(Ce.IDLE),i(null),r(0),h.current=[],v.current=0},V=()=>{if(s){k.current&&k.current.pause();const _=URL.createObjectURL(s),g=new Audio(_);k.current=g,g.play(),g.onended=()=>{k.current=null}}};return{status:t,isRecording:t===Ce.RECORDING,isPaused:t===Ce.PAUSED,duration:n,audioBlob:s,startRecording:S,pauseRecording:E,resumeRecording:I,stopRecording:D,deleteRecording:j,playRecording:V,error:o}},gC=t=>{const e=Math.floor(t/60),n=t%60;return`${e.toString().padStart(2,"0")}:${n.toString().padStart(2,"0")}`};function _a(t,e,n){for(let r=0;r<n.length;r++)t.setUint8(e+r,n.charCodeAt(r))}function yC(t){const e=t.numberOfChannels,n=t.length*e*2+44,r=new ArrayBuffer(n),s=new DataView(r),i=[];let o,l,u=0,h=0;for(_a(s,0,"RIFF"),s.setUint32(4,36+t.length*e*2,!0),_a(s,8,"WAVE"),_a(s,12,"fmt "),s.setUint32(16,16,!0),s.setUint16(20,1,!0),s.setUint16(22,e,!0),s.setUint32(24,t.sampleRate,!0),s.setUint32(28,t.sampleRate*2*e,!0),s.setUint16(32,e*2,!0),s.setUint16(34,16,!0),_a(s,36,"data"),s.setUint32(40,t.length*e*2,!0),o=0;o<t.numberOfChannels;o++)i.push(t.getChannelData(o));for(u=44;h<t.length;){for(o=0;o<e;o++)l=Math.max(-1,Math.min(1,i[o][h])),l=(.5+l<0?l*32768:l*32767)|0,s.setInt16(u,l,!0),u+=2;h++}return new Blob([r],{type:"audio/wav"})}const vC=async t=>{if(t.length===0)throw new Error("Aucun blob audio à fusionner");const e=window.AudioContext||window.webkitAudioContext,n=new e,r=[];for(const h of t){const p=await h.arrayBuffer(),y=await n.decodeAudioData(p);r.push(y)}if(r.length===0)throw new Error("Impossible de décoder l'audio");const s=r.reduce((h,p)=>h+p.length,0),i=r[0].numberOfChannels,o=r[0].sampleRate,l=n.createBuffer(i,s,o);let u=0;for(const h of r){for(let p=0;p<i;p++)p<h.numberOfChannels&&l.getChannelData(p).set(h.getChannelData(p),u);u+=h.length}return{blob:yC(l),duration:l.duration}},vr=({title:t,subtitle:e,sectionNumber:n,onBlobChange:r,resetTrigger:s})=>{const{status:i,isRecording:o,isPaused:l,duration:u,audioBlob:h,startRecording:p,pauseRecording:y,resumeRecording:v,stopRecording:k,deleteRecording:R,playRecording:N,error:O}=mC();G.useEffect(()=>{r(h)},[h,r]),G.useEffect(()=>{s&&s>0&&R()},[s]);const S=()=>{switch(i){case Ce.RECORDING:return"bg-white border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)] ring-1 ring-rose-100";case Ce.PAUSED:return"bg-amber-50/30 border-amber-300";case Ce.RECORDED:return"bg-emerald-50/20 border-emerald-500/50 shadow-sm";default:return"bg-white border-slate-200 hover:border-slate-300 shadow-sm"}};return d.jsxs("div",{className:`p-5 sm:p-6 rounded-2xl border transition-all duration-300 mb-5 relative group ${S()}`,children:[d.jsxs("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4",children:[d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:`
            w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300
            ${i===Ce.RECORDED?"bg-emerald-500 text-white shadow-emerald-200 shadow-lg scale-100":""}
            ${i===Ce.RECORDING?"bg-rose-500 text-white shadow-rose-200 shadow-lg scale-110 recording-pulse":""}
            ${i===Ce.PAUSED?"bg-amber-400 text-white shadow-amber-200 shadow-lg":""}
            ${i===Ce.IDLE?"bg-slate-100 text-slate-400":""}
          `,children:i===Ce.RECORDED?d.jsx(Di,{size:24,strokeWidth:3}):d.jsx(Oi,{size:24,strokeWidth:2.5})}),d.jsxs("div",{className:"pt-0.5",children:[d.jsx("div",{className:"flex items-center gap-2.5",children:n&&d.jsxs("span",{className:"text-[10px] font-extrabold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200",children:["Partie ",n]})}),d.jsx("h4",{className:"font-bold text-slate-800 text-lg leading-tight mt-1",children:t}),e&&d.jsx("p",{className:"text-slate-500 text-xs font-medium mt-1 leading-relaxed max-w-lg",children:e})]})]}),d.jsxs("div",{className:`
          flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-2xl font-bold tracking-widest border transition-colors self-start sm:self-center
          ${o?"text-rose-600 bg-rose-50 border-rose-100":"text-slate-400 bg-slate-50 border-slate-100"}
        `,children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-current opacity-50"}),gC(u)]})]}),O&&d.jsxs("div",{className:"mb-4 text-xs font-bold text-rose-600 bg-rose-50 p-3 rounded-xl border border-rose-100 flex items-center",children:[d.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-rose-500 mr-2 animate-pulse"}),O]}),d.jsxs("div",{className:"grid grid-cols-2 sm:flex sm:gap-3 gap-3 pt-2 border-t border-slate-100/50 mt-2",children:[i===Ce.IDLE&&d.jsxs("button",{onClick:p,className:"col-span-2 sm:w-auto sm:flex-1 bg-rose-500 hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-3 font-bold transition-all shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5 active:translate-y-0",children:[d.jsx(Oi,{size:20}),"Démarrer l'enregistrement"]}),o&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:y,className:"bg-amber-400 hover:bg-amber-500 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-amber-100",children:[d.jsx(eT,{size:20,fill:"currentColor"}),"Pause"]}),d.jsxs("button",{onClick:k,className:"flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-slate-300",children:[d.jsx(Um,{size:20,fill:"currentColor"}),"Terminer"]})]}),l&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:v,className:"bg-rose-500 hover:bg-rose-600 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-rose-100",children:[d.jsx(Oi,{size:20}),"Reprendre"]}),d.jsxs("button",{onClick:k,className:"flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors shadow-md shadow-slate-300",children:[d.jsx(Um,{size:20,fill:"currentColor"}),"Terminer"]})]}),i===Ce.RECORDED&&d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:N,className:"col-span-1 sm:flex-1 bg-white border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors",children:[d.jsx(nT,{size:20,fill:"currentColor"}),"Réécouter"]}),d.jsxs("button",{onClick:R,className:"col-span-1 sm:w-auto bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors group/trash",children:[d.jsx(sT,{size:20,className:"group-hover/trash:-rotate-180 transition-transform duration-500"}),"Refaire"]})]})]})]})},_C=({info:t,onChange:e,disabled:n=!1,isTestMode:r=!1})=>d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8 relative overflow-hidden",children:[d.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-blue-500"}),d.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[d.jsx("div",{className:"bg-blue-50 p-2.5 rounded-xl text-blue-600 shadow-sm border border-blue-100",children:d.jsx(z1,{size:24,strokeWidth:2.5})}),d.jsx("div",{children:d.jsx("h3",{className:"text-lg font-bold text-slate-800 tracking-tight",children:"Identification Patient"})})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:"block text-xs font-bold text-slate-600 ml-1 uppercase tracking-wide",children:["Numéro de Dossier ",!r&&d.jsx("span",{className:"text-rose-500",children:"*"})]}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:d.jsx(ql,{size:18,className:"text-slate-400 group-focus-within:text-blue-500 transition-colors"})}),d.jsx("input",{type:"text",value:t.id,maxLength:50,disabled:n,onChange:s=>e({...t,id:s.target.value}),className:"block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-300",placeholder:"Ex: 872049"})]})]}),d.jsxs("div",{className:"space-y-1.5",children:[d.jsxs("label",{className:"block text-xs font-bold text-slate-600 ml-1 uppercase tracking-wide",children:["Identité Complète ",!r&&d.jsx("span",{className:"text-rose-500",children:"*"})]}),d.jsxs("div",{className:"relative group",children:[d.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:d.jsx(vv,{size:18,className:"text-slate-400 group-focus-within:text-blue-500 transition-colors"})}),d.jsx("input",{type:"text",value:t.name,maxLength:50,disabled:n,onChange:s=>e({...t,name:s.target.value}),className:"block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-semibold text-slate-800 placeholder:text-slate-300",placeholder:"NOM Prénom"})]})]})]})]}),ds={AUDIO_NORMAL:"https://n8n.srv1104707.hstgr.cloud/webhook/Audio",AUDIO_TEST:"https://n8n.srv1104707.hstgr.cloud/webhook-test/Audio",DMI_TEXT:"https://n8n.srv1104707.hstgr.cloud/webhook/DMI-Text",DMI_PHOTOS:"https://n8n.srv1104707.hstgr.cloud/webhook/Photos"},Jg=({mode:t,user:e})=>{const[n,r]=G.useState({id:"",name:""}),[s,i]=G.useState(!1),[o,l]=G.useState({part1:null,part2:null,part3:null,part4:null}),[u,h]=G.useState(0),[p,y]=G.useState(!1),[v,k]=G.useState(!1),[R,N]=G.useState(null),O=j=>V=>{l(_=>({..._,[j]:V}))},E=t===Ht.NORMAL&&(!n.id.trim()||!n.name.trim())?!1:Object.values(o).some(V=>V!==null),I=async j=>{if(t===Ht.NORMAL&&e.uid){console.log("📊 Mise à jour stats pour UID:",e.uid);try{const V=au(fu,"users",e.uid);try{await Rf(V,{totalDictations:Cl(1),totalDictationTime:Cl(j),lastActivity:new Date().toISOString()}),console.log("✅ Stats incrémentées")}catch{console.log("⚠️ Doc non trouvé, création..."),await Af(V,{totalDictations:1,totalDictationTime:j,totalDMI:0,totalWords:0,lastActivity:new Date().toISOString(),accountCreated:new Date().toISOString()},{merge:!0})}}catch(V){console.error("❌ Erreur mise à jour stats:",V)}}else console.log("ℹ️ Pas de mise à jour stats (Mode:",t,", UID:",e.uid,")")},D=async()=>{if(!E)return;y(!0),N(null);let j=0;try{const V=new FormData,_=e.login.split("@")[0].replace(/\./g," ");V.append("nom_prenom_user",_),V.append("email",e.login),V.append("num_dossier",n.id),V.append("nom_prenom_patient",n.name);const g=[o.part1,o.part2,o.part3,o.part4].filter(A=>A!==null);if(g.length>0)try{const{blob:A,duration:C}=await vC(g);j=C,V.append("fichier_audio",A,"audio_complet.wav")}catch(A){throw console.error("Erreur fusion:",A),new Error("Erreur technique lors de la fusion.")}else throw new Error("Aucun audio enregistré.");const w=t===Ht.NORMAL?ds.AUDIO_NORMAL:ds.AUDIO_TEST,x=await fetch(w,{method:"POST",body:V});if(!x.ok&&x.status!==500)throw new Error(`Erreur serveur (${x.status})`);await I(j),k(!0),setTimeout(()=>{r({id:"",name:""}),l({part1:null,part2:null,part3:null,part4:null}),h(A=>A+1),k(!1),i(!1),window.scrollTo({top:0,behavior:"smooth"})},3e3)}catch(V){console.error("Erreur détaillée:",V),N(V.message||"Échec de l'envoi.")}finally{y(!1)}};return v?d.jsxs("div",{className:"flex flex-col items-center justify-center py-32 animate-fade-in text-center px-4",children:[d.jsx("div",{className:"w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-emerald-200/50",children:d.jsx(Di,{size:48,className:"text-emerald-500 animate-bounce"})}),d.jsx("h2",{className:"text-3xl font-black text-slate-800 mb-3 tracking-tight",children:"Données transmises !"}),d.jsx("p",{className:"text-slate-500 text-lg max-w-md font-bold",children:"Le dossier a été envoyé avec succès au serveur DictaMed."})]}):d.jsxs("div",{className:"max-w-4xl mx-auto pb-44",children:[t===Ht.TEST&&d.jsxs("div",{className:"mb-10 text-center sm:text-left animate-fade-in",children:[d.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tight",children:"Démonstration DictaMed"}),d.jsxs("div",{className:"mt-8 space-y-6",children:[d.jsxs("div",{className:"bg-white rounded-3xl p-8 border border-slate-200 shadow-sm",children:[d.jsxs("h3",{className:"text-xl font-black text-slate-800 flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-blue-100 p-2 rounded-xl text-blue-600",children:d.jsx(K1,{size:24})}),"📝 Consignes d'utilisation"]}),d.jsx("p",{className:"text-sm font-bold text-slate-600 mb-6 uppercase tracking-wider",children:"Pour une reconnaissance optimale, suivez ces recommandations :"}),d.jsxs("ul",{className:"space-y-4 text-slate-600 font-bold",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5",children:"1"}),d.jsx("span",{children:"Autorisez l'accès au microphone quand le navigateur vous le demande 🎤"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5",children:"2"}),d.jsx("span",{children:"Parlez à haute voix, clairement et lentement 🗣️"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5",children:"3"}),d.jsx("span",{children:"Privilégiez un environnement calme sans bruit de fond 🔇"})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"bg-blue-50 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5",children:"4"}),d.jsx("span",{children:"Marquez une courte pause entre chaque valeur dictée ⏸️"})]})]}),d.jsxs("div",{className:"mt-10 pt-8 border-t border-slate-100",children:[d.jsxs("h3",{className:"text-xl font-black text-slate-800 flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-emerald-100 p-2 rounded-xl text-emerald-600",children:d.jsx(ph,{size:24})}),"💬 Exemples de dictée par section"]}),d.jsxs("div",{className:"grid grid-cols-1 gap-6",children:[d.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-200",children:[d.jsx("h4",{className:"font-black text-slate-800 flex items-center gap-2 mb-3 text-sm",children:"📋 Section 1 - Données cliniques :"}),d.jsx("p",{className:"text-base text-slate-600 font-bold italic mb-3",children:'"Âge 45 ans, sexe masculin, BMI 28, tabac oui"'}),d.jsx("p",{className:"text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed",children:"💡 Astuce : vous pouvez dire : Pas de tabac, patient non tabagique, tabac non"})]}),d.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-200",children:[d.jsx("h4",{className:"font-black text-slate-800 flex items-center gap-2 mb-3 text-sm",children:"🏥 Section 2 - Antécédents :"}),d.jsx("p",{className:"text-base text-slate-600 font-bold italic mb-3",children:'"HTA oui, DT2 non, DYSLIPIDEMIE oui, AVC non"'}),d.jsx("p",{className:"text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed",children:"💡 Astuce : vous pouvez dire : pas d'HTA ou patient non hypertendu ou HTA oui , etc"})]}),d.jsxs("div",{className:"bg-slate-50 p-6 rounded-2xl border border-slate-200",children:[d.jsx("h4",{className:"font-black text-slate-800 flex items-center gap-2 mb-3 text-sm",children:"🧪 Section 3 - Biologie :"}),d.jsx("p",{className:"text-base text-slate-600 font-bold italic mb-3",children:'"Hémoglobine 13.5, globules blancs 7000, plaquettes 250000"'}),d.jsx("p",{className:"text-[11px] text-slate-400 font-black uppercase tracking-widest leading-relaxed",children:"💡 Astuce : Dictez les valeurs sans les unités."})]})]})]})]}),d.jsxs("div",{className:"bg-emerald-600 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-white",children:[d.jsx("p",{className:"text-white text-sm font-black leading-relaxed",children:"Les résultats s'affichent instantanément dans le Google Sheet public."}),d.jsxs("a",{href:"https://docs.google.com/spreadsheets/d/1ReZHjndHc6o8O1bx1OfZXnZ8HWt8nLSo2X7IS6rcZXE/edit?usp=sharing",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-emerald-700 px-6 py-4 rounded-2xl font-black text-base flex items-center shadow-2xl hover:bg-emerald-50 transition-all hover:scale-105",children:[d.jsx(B1,{size:20,className:"mr-2"}),"Voir le résultat"]})]})]})]}),d.jsx(_C,{info:n,onChange:r,disabled:p,isTestMode:t===Ht.TEST}),d.jsx("div",{className:"space-y-6",children:t===Ht.TEST?d.jsxs(d.Fragment,{children:[d.jsx(vr,{title:"Données Cliniques",subtitle:"Dicter ses variables : Âge, sexe, BMI, tabac",sectionNumber:"1",onBlobChange:O("part1"),resetTrigger:u}),d.jsx(vr,{title:"Antécédents",subtitle:"Dicter ses variables : HTA, DT2, DYSLIPIDEMIE, AVC",sectionNumber:"2",onBlobChange:O("part2"),resetTrigger:u}),d.jsx(vr,{title:"Biologie",subtitle:"Dicter ses variables : Hémoglobine, globules blancs, plaquettes, urée, Créatinine, ionogramme complet (sodium, potassium, chlore)",sectionNumber:"3",onBlobChange:O("part3"),resetTrigger:u})]}):d.jsxs(d.Fragment,{children:[d.jsx(vr,{title:"Partie 1",sectionNumber:"1",onBlobChange:O("part1"),resetTrigger:u}),d.jsx(vr,{title:"Partie 2",sectionNumber:"2",onBlobChange:O("part2"),resetTrigger:u}),d.jsx(vr,{title:"Partie 3",sectionNumber:"3",onBlobChange:O("part3"),resetTrigger:u}),s?d.jsxs("div",{className:"animate-fade-in",children:[d.jsx(vr,{title:"Partie 4",sectionNumber:"4",onBlobChange:O("part4"),resetTrigger:u}),d.jsxs("button",{onClick:()=>i(!1),className:"text-xs font-black text-rose-500 flex items-center hover:bg-rose-50 px-4 py-2 rounded-lg transition-colors ml-1 uppercase tracking-widest mt-2",children:[d.jsx(Z1,{size:14,className:"mr-2"}),"Retirer cette section"]})]}):d.jsxs("button",{onClick:()=>i(!0),className:"w-full border-2 border-dashed border-slate-200 rounded-3xl p-8 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all group",children:[d.jsx("div",{className:"bg-slate-100 group-hover:bg-emerald-100 p-3 rounded-2xl mr-4 transition-colors",children:d.jsx(rT,{size:24,className:"group-hover:scale-110 transition-transform"})}),d.jsx("span",{className:"font-black text-lg",children:"Ajouter une section optionnelle"})]})]})}),d.jsx("div",{className:"fixed bottom-8 left-4 right-4 z-40 flex justify-center pointer-events-none",children:d.jsxs("div",{className:"glass-panel px-8 py-5 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] border border-white/50 w-full max-w-4xl pointer-events-auto flex items-center justify-between gap-6",children:[d.jsxs("div",{className:"hidden sm:flex flex-col",children:[d.jsx("span",{className:"text-[10px] font-black uppercase tracking-widest text-slate-400",children:"Progression"}),d.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[d.jsx("div",{className:`w-2.5 h-2.5 rounded-full ${E?"bg-emerald-500 animate-pulse":"bg-slate-300"}`}),d.jsx("span",{className:`text-sm font-black ${E?"text-slate-800":"text-slate-400"}`,children:E?"Données prêtes":"données incomplètes"})]})]}),d.jsxs("div",{className:"flex items-center gap-5 w-full sm:w-auto",children:[R&&d.jsxs("span",{className:"text-rose-600 text-xs font-black flex items-center bg-rose-50 px-4 py-2 rounded-xl border border-rose-100",children:[d.jsx(hl,{size:16,className:"mr-2"}),"Échec envoi"]}),d.jsx("button",{onClick:D,disabled:!E||p,className:`
                flex-1 sm:flex-none px-12 py-4.5 rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-2xl
                ${E&&!p?t===Ht.TEST?"bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200":"bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200 hover:-translate-y-1":"bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"}
              `,children:p?d.jsxs(d.Fragment,{children:[d.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[d.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),d.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Envoi..."]}):d.jsxs(d.Fragment,{children:[d.jsx(yv,{size:22,className:"mr-3",strokeWidth:3}),"Envoyer"]})})]})]})})]})},wC=({user:t})=>{const[e,n]=G.useState(""),[r,s]=G.useState(""),[i,o]=G.useState([]),[l,u]=G.useState(!1),[h,p]=G.useState(!1),[y,v]=G.useState(null),k=G.useRef(null),R=I=>{if(I.target.files){const D=Array.from(I.target.files);o(j=>[...j,...D])}},N=I=>{o(D=>D.filter((j,V)=>V!==I))},O=async I=>{if(t.uid)try{const D=au(fu,"users",t.uid);try{await Rf(D,{totalDMI:Cl(1),totalWords:Cl(I),lastActivity:new Date().toISOString()})}catch{await Af(D,{totalDictations:0,totalDictationTime:0,totalDMI:1,totalWords:I,lastActivity:new Date().toISOString(),accountCreated:new Date().toISOString()},{merge:!0})}}catch(D){console.error("Erreur stats:",D)}},S=async()=>{if(!e.trim()||!r.trim()&&i.length===0)return;u(!0),v(null);const I=r.trim()?r.trim().split(/\s+/).length:0,D=t.login.split("@")[0].replace(/\./g," "),j=t.login,V=[];try{if(r.trim()){const g=new FormData;g.append("nom_prenom_user",D),g.append("email",j),g.append("num_dossier",e),g.append("Texte_DMI",r),console.log("Envoi Texte vers:",ds.DMI_TEXT),V.push(fetch(ds.DMI_TEXT,{method:"POST",body:g}))}if(i.length>0){const g=new FormData;g.append("nom_prenom_user",D),g.append("email",j),g.append("num_dossier",e),i.forEach((w,x)=>{g.append("Photo_DMI",w,`photo_${x+1}_${w.name}`)}),console.log("Envoi Photos vers:",ds.DMI_PHOTOS),V.push(fetch(ds.DMI_PHOTOS,{method:"POST",body:g}))}const _=await Promise.all(V);for(const g of _)if(!g.ok&&g.status!==500)throw new Error(`Erreur serveur (${g.status}) sur l'un des envois`);await O(I),p(!0),setTimeout(()=>{s(""),o([]),n(""),p(!1),window.scrollTo({top:0,behavior:"smooth"})},3e3)}catch(_){console.error(_),v("Échec de l'envoi.")}finally{u(!1)}};if(h)return d.jsxs("div",{className:"flex flex-col items-center justify-center py-32 animate-fade-in text-center px-4",children:[d.jsx("div",{className:"w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-emerald-200",children:d.jsx(U1,{size:48,className:"text-emerald-500 animate-bounce"})}),d.jsx("h2",{className:"text-3xl font-black text-slate-800 mb-3 tracking-tight",children:"Données envoyées !"}),d.jsxs("p",{className:"text-slate-500 text-lg max-w-md font-bold",children:["Le dossier patient n°",e," a été transmis avec succès."]})]});const E=e.trim()&&(r.trim()||i.length>0);return d.jsxs("div",{className:"max-w-4xl mx-auto pb-44 animate-fade-in",children:[d.jsxs("div",{className:"mb-10",children:[d.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tight",children:"Mode DMI"}),d.jsx("p",{className:"text-slate-500 text-base mt-2 font-bold",children:"Saisie rapide d'observations et capture de documents médicaux"})]}),d.jsxs("div",{className:"bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-10 mb-8 relative overflow-hidden",children:[d.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-blue-500"}),d.jsxs("label",{className:"block text-sm font-black text-slate-700 mb-4 flex items-center gap-3 uppercase tracking-widest",children:[d.jsx("div",{className:"bg-blue-50 p-2 rounded-xl text-blue-600",children:d.jsx(W1,{size:20})}),"Identification Patient ",d.jsx("span",{className:"text-rose-500",children:"*"})]}),d.jsx("div",{className:"relative group",children:d.jsx("input",{type:"text",value:e,onChange:I=>n(I.target.value),className:"block w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-3xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all font-bold text-xl text-slate-800 placeholder:text-slate-300 outline-none",placeholder:"Numéro de dossier (ex: 872049)"})})]}),d.jsxs("div",{className:"bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-10 mb-8",children:[d.jsxs("label",{className:"block text-sm font-black text-slate-700 mb-4 flex items-center gap-3 uppercase tracking-widest",children:[d.jsx("div",{className:"bg-blue-50 p-2 rounded-xl text-blue-600",children:d.jsx(ql,{size:20})}),"Observations cliniques"]}),d.jsx("textarea",{value:r,onChange:I=>s(I.target.value),className:"w-full h-80 p-6 bg-slate-50 border border-slate-200 rounded-3xl focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none text-slate-700 leading-relaxed font-bold text-lg placeholder:text-slate-300 outline-none",placeholder:"Dictez ou saisissez vos observations ici..."}),d.jsx("div",{className:"mt-2 text-right text-xs text-slate-400 font-bold",children:"Envoi vers : Webhook Texte"})]}),d.jsxs("div",{className:"bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-8 sm:p-10 mb-10",children:[d.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4",children:[d.jsxs("label",{className:"block text-sm font-black text-slate-700 flex items-center gap-3 uppercase tracking-widest",children:[d.jsx("div",{className:"bg-emerald-50 p-2 rounded-xl text-emerald-600",children:d.jsx(q1,{size:20})}),"Pièces jointes"]}),d.jsxs("button",{onClick:()=>{var I;return(I=k.current)==null?void 0:I.click()},className:"flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-2xl font-black text-base transition-all shadow-xl shadow-emerald-200 active:scale-95",children:[d.jsx(jm,{size:22}),"Prendre une photo"]}),d.jsx("input",{type:"file",ref:k,onChange:R,accept:"image/*",multiple:!0,className:"hidden"})]}),i.length===0?d.jsxs("div",{className:"border-4 border-dashed border-slate-100 rounded-[2rem] p-12 text-center text-slate-300",children:[d.jsx(jm,{size:60,className:"mx-auto mb-4 opacity-10"}),d.jsx("p",{className:"font-black text-lg",children:"Aucun document ajouté"})]}):d.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-6",children:i.map((I,D)=>d.jsxs("div",{className:"relative group aspect-square bg-slate-50 rounded-[2rem] overflow-hidden border-2 border-slate-100 shadow-sm transition-transform hover:scale-[1.02]",children:[d.jsx("img",{src:URL.createObjectURL(I),alt:"Preview",className:"w-full h-full object-cover"}),d.jsx("button",{onClick:()=>N(D),className:"absolute top-4 right-4 bg-white/90 hover:bg-rose-500 text-slate-700 hover:text-white p-2.5 rounded-2xl transition-all shadow-xl",children:d.jsx(uT,{size:18})})]},D))}),d.jsx("div",{className:"mt-4 text-right text-xs text-slate-400 font-bold",children:"Envoi vers : Webhook Photos"})]}),d.jsx("div",{className:"fixed bottom-8 left-4 right-4 z-40 flex justify-center pointer-events-none",children:d.jsxs("div",{className:"glass-panel px-10 py-6 rounded-3xl shadow-[0_25px_60px_-10px_rgba(0,0,0,0.2)] border border-white/50 w-full max-w-4xl pointer-events-auto flex items-center justify-end gap-6",children:[y&&d.jsxs("span",{className:"text-rose-600 text-sm font-black flex items-center bg-rose-50 px-4 py-2 rounded-xl",children:[d.jsx(hl,{size:18,className:"mr-2"}),"Erreur"]}),d.jsx("button",{onClick:S,disabled:!E||l,className:`
              px-16 py-4.5 rounded-2xl font-black text-xl flex items-center justify-center transition-all shadow-2xl
              ${!E||l?"bg-slate-200 text-slate-400 cursor-not-allowed shadow-none":"bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-200 hover:-translate-y-1"}
            `,children:l?"Envoi...":d.jsxs(d.Fragment,{children:[d.jsx(yv,{size:24,className:"mr-3",strokeWidth:3}),"Envoyer"]})})]})})]})},EC=({user:t})=>{const[e,n]=G.useState(null),[r,s]=G.useState(!0);if(G.useEffect(()=>{(async()=>{if(t.uid)try{const h=au(fu,"users",t.uid),p=await Aw(h);p.exists()?n(p.data()):n({totalDictations:0,totalDMI:0,totalDictationTime:0,totalWords:0,lastActivity:new Date().toISOString()})}catch(h){console.error("Erreur lors de la récupération des statistiques:",h)}finally{s(!1)}})()},[t.uid]),r)return d.jsx("div",{className:"flex justify-center items-center h-[60vh]",children:d.jsxs("div",{className:"flex flex-col items-center gap-4",children:[d.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-emerald-500"}),d.jsx("span",{className:"text-slate-400 font-medium text-sm animate-pulse",children:"Chargement de vos performances..."})]})});const i=(e==null?void 0:e.totalDictationTime)||0,o=Math.floor(i/3600),l=Math.floor(i%3600/60);return d.jsxs("div",{className:"max-w-6xl mx-auto pb-24 animate-fade-in",children:[d.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-3xl font-extrabold text-slate-800 tracking-tight flex items-center gap-3",children:"Tableau de Bord"}),d.jsxs("p",{className:"text-slate-500 mt-2 font-medium",children:["Bienvenue Dr. ",t.login.split("@")[0]]})]}),d.jsxs("div",{className:"flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200 text-sm font-semibold text-slate-600",children:[d.jsx(pv,{size:16,className:"text-emerald-500"}),d.jsxs("span",{children:["Aujourd'hui : ",new Date().toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})]})]})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10",children:[d.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(6,182,212,0.1)] hover:shadow-lg transition-all relative overflow-hidden group",children:[d.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-cyan-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"}),d.jsxs("div",{className:"relative",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsx("div",{className:"bg-cyan-100 p-2.5 rounded-xl text-cyan-600",children:d.jsx(Oi,{size:22,strokeWidth:2.5})}),d.jsxs("div",{className:"flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg",children:[d.jsx(L1,{size:14,className:"mr-1"}),"Actif"]})]}),d.jsx("p",{className:"text-slate-500 text-xs font-bold uppercase tracking-wider mb-1",children:"Dictées Réalisées"}),d.jsx("h3",{className:"text-3xl font-extrabold text-slate-800",children:(e==null?void 0:e.totalDictations)||0})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-3px_rgba(16,185,129,0.1)] hover:shadow-lg transition-all relative overflow-hidden group",children:[d.jsx("div",{className:"absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"}),d.jsxs("div",{className:"relative",children:[d.jsx("div",{className:"flex justify-between items-start mb-4",children:d.jsx("div",{className:"bg-emerald-100 p-2.5 rounded-xl text-emerald-600",children:d.jsx(mv,{size:22,strokeWidth:2.5})})}),d.jsx("p",{className:"text-slate-500 text-xs font-bold uppercase tracking-wider mb-1",children:"Dossiers DMI"}),d.jsx("h3",{className:"text-3xl font-extrabold text-slate-800",children:(e==null?void 0:e.totalDMI)||0})]})]}),d.jsxs("div",{className:"bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 shadow-lg shadow-indigo-200 text-white relative overflow-hidden group",children:[d.jsx("div",{className:"absolute -right-6 -bottom-6 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform",children:d.jsx(ba,{size:100})}),d.jsxs("div",{className:"relative",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsx("div",{className:"bg-white/20 backdrop-blur-sm p-2.5 rounded-xl text-white",children:d.jsx(ba,{size:22,strokeWidth:2.5})}),d.jsxs("div",{className:"flex items-center text-xs font-bold text-white/90 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10",children:[d.jsx(cT,{size:14,className:"mr-1 fill-yellow-400 text-yellow-400"}),"Live"]})]}),d.jsx("p",{className:"text-indigo-100 text-xs font-bold uppercase tracking-wider mb-1",children:"Temps de dictée effectuée"}),d.jsxs("h3",{className:"text-3xl font-extrabold flex items-baseline gap-1",children:[o," ",d.jsx("span",{className:"text-base font-medium opacity-80",children:"h"}),l," ",d.jsx("span",{className:"text-base font-medium opacity-80",children:"min"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all",children:[d.jsx("div",{className:"flex justify-between items-start mb-4",children:d.jsx("div",{className:"bg-orange-100 p-2.5 rounded-xl text-orange-600",children:d.jsx(ql,{size:22,strokeWidth:2.5})})}),d.jsx("p",{className:"text-slate-500 text-xs font-bold uppercase tracking-wider mb-1",children:"Mots Transcrits/Envoyés"}),d.jsx("h3",{className:"text-3xl font-extrabold text-slate-800",children:((e==null?void 0:e.totalWords)||0).toLocaleString("fr-FR")}),d.jsx("p",{className:"text-slate-400 text-[10px] mt-2",children:"Via les formulaires DMI textuels"})]})]}),d.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[d.jsxs("div",{className:"lg:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm",children:[d.jsxs("div",{className:"flex items-center justify-between mb-8",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"bg-slate-100 p-2 rounded-lg",children:d.jsx(dv,{size:20,className:"text-slate-600"})}),d.jsx("h3",{className:"font-bold text-slate-800 text-lg",children:"Activité Récente"})]}),d.jsxs("select",{className:"bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500/20",children:[d.jsx("option",{children:"7 derniers jours"}),d.jsx("option",{children:"30 derniers jours"})]})]}),d.jsx("div",{className:"h-64 w-full flex items-end justify-between gap-2 sm:gap-4 px-2",children:[35,55,40,70,45,90,65].map((u,h)=>d.jsxs("div",{className:"flex flex-col items-center gap-2 w-full group cursor-pointer",children:[d.jsx("div",{className:"relative w-full flex justify-end flex-col h-full rounded-t-xl hover:bg-slate-50 transition-colors",children:d.jsx("div",{className:"w-full bg-emerald-500/90 rounded-t-xl group-hover:bg-emerald-400 transition-all relative",style:{height:`${u}%`},children:d.jsx("div",{className:"absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity",children:u})})}),d.jsxs("span",{className:"text-xs font-bold text-slate-400",children:["J-",7-h]})]},h))})]}),d.jsxs("div",{className:"bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-orange-50 p-2 rounded-lg",children:d.jsx(oT,{size:20,className:"text-orange-600"})}),d.jsx("h3",{className:"font-bold text-slate-800 text-lg",children:"Dernière Action"})]}),d.jsxs("div",{className:"flex-grow flex flex-col justify-center items-center text-center py-6",children:[d.jsx("div",{className:"w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg shadow-slate-100",children:e!=null&&e.lastActivity?d.jsx(xC,{size:32,className:"text-emerald-500"}):d.jsx(ba,{size:32,className:"text-slate-300"})}),e!=null&&e.lastActivity?d.jsxs(d.Fragment,{children:[d.jsx("p",{className:"text-slate-400 text-xs font-bold uppercase tracking-wide mb-1",children:"Synchronisé le"}),d.jsx("p",{className:"text-slate-800 font-extrabold text-xl mb-1",children:new Date(e.lastActivity).toLocaleDateString()}),d.jsxs("p",{className:"text-slate-500 font-medium",children:["à ",new Date(e.lastActivity).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}):d.jsx("p",{className:"text-slate-400 font-medium",children:"Aucune activité enregistrée."})]}),d.jsx("div",{className:"bg-slate-50 rounded-xl p-4 mt-4 border border-slate-100",children:d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),d.jsx("p",{className:"text-xs font-bold text-slate-600",children:"Serveur opérationnel"})]})})]})]})]})},xC=({size:t,className:e})=>d.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:e,children:[d.jsx("path",{d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"}),d.jsx("path",{d:"m9 12 2 2 4-4"})]}),TC=()=>{const t=[{q:"Qu'est-ce que DictaMed ?",a:"DictaMed est une solution innovante de dictée médicale intelligente qui permet aux professionnels de santé de transformer leurs enregistrements vocaux en données structurées pour faciliter la collecte de données médicales et la création de fichiers SPSS."},{q:"Comment fonctionne le Mode Test ?",a:"Le Mode Test est une démonstration gratuite accessible sans authentification. Il vous permet d'enregistrer des données fictives et de voir en temps réel comment elles sont transcrites dans un Google Sheet public."},{q:"Mes données sont-elles sécurisées ?",a:"Absolument. DictaMed est conforme au RGPD et utilise un chiffrement de bout en bout pour toutes les données en Mode Normal. Les enregistrements sont stockés de manière sécurisée."},{q:"Quels navigateurs sont compatibles ?",a:"DictaMed fonctionne sur tous les navigateurs modernes : Google Chrome (recommandé), Mozilla Firefox, Microsoft Edge et Safari."},{q:"Comment obtenir un devis ?",a:"Contactez-nous par email à DictaMed.SPSS@gmail.com en fournissant les informations listées dans l'onglet Contact. Nous vous répondrons sous 48 heures ouvrées."},{q:"Quelle est la précision de la transcription ?",a:"Notre système d'intelligence artificielle atteint une précision optimale lorsque les consignes de dictée sont respectées (parler clairement, environnement calme)."}];return d.jsxs("div",{className:"max-w-4xl mx-auto p-4 sm:p-6 pb-24 relative animate-fade-in",children:[d.jsxs("div",{className:"text-center mb-12 relative z-10",children:[d.jsx("div",{className:"inline-block p-4 bg-cyan-50 rounded-full mb-4 shadow-sm border border-cyan-100",children:d.jsx(gv,{size:40,className:"text-cyan-600"})}),d.jsx("h2",{className:"text-3xl font-extrabold text-slate-800",children:"FAQ"}),d.jsx("p",{className:"text-slate-500 mt-2 font-medium",children:"Tout savoir sur l'utilisation de DictaMed"})]}),d.jsx("div",{className:"space-y-4 relative z-10",children:t.map((e,n)=>d.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow",children:[d.jsx("div",{className:"p-6 border-b border-slate-50 flex justify-between items-center cursor-default bg-slate-50/30",children:d.jsxs("h3",{className:"font-bold text-slate-800 text-lg flex items-start gap-3",children:[d.jsx("span",{className:"text-cyan-500 font-extrabold text-xl",children:"Q."}),e.q]})}),d.jsx("div",{className:"p-6 text-slate-600 leading-relaxed bg-white font-medium",children:e.a})]},n))})]})},IC=()=>d.jsxs("div",{className:"max-w-5xl mx-auto p-4 sm:p-6 pb-24 relative animate-fade-in",children:[d.jsxs("div",{className:"text-center mb-12 relative z-10",children:[d.jsx("div",{className:"inline-block p-4 bg-blue-50 rounded-full mb-4 shadow-sm",children:d.jsx(fv,{size:40,className:"text-blue-600"})}),d.jsx("h2",{className:"text-3xl font-extrabold text-slate-800",children:"Guide d'Utilisation"}),d.jsx("p",{className:"text-slate-500 mt-2 font-medium",children:"Comprendre la méthode DictaMed et optimiser vos dictées"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10",children:[d.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-sm border border-rose-100 relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-5",children:d.jsx(hl,{size:120})}),d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-rose-100 p-3 rounded-2xl",children:d.jsx(hl,{size:24,className:"text-rose-600"})}),d.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"La Problématique"})]}),d.jsxs("ul",{className:"space-y-4 text-slate-600 font-medium",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"}),d.jsxs("span",{children:["La saisie manuelle dans SPSS est ",d.jsx("strong",{children:"chronophage"})," et détourne de l'analyse."]})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"}),d.jsx("span",{children:"Source d'erreurs fréquente."})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx("span",{className:"w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 flex-shrink-0"}),d.jsxs("span",{children:["Jusqu'à ",d.jsx("strong",{children:"40% du temps"})," d'un chercheur peut être perdu dans cette tâche répétitive."]})]})]})]}),d.jsxs("div",{className:"bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 shadow-sm border border-emerald-100 relative overflow-hidden",children:[d.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-5",children:d.jsx(ph,{size:120})}),d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-white p-3 rounded-2xl shadow-sm",children:d.jsx(ph,{size:24,className:"text-emerald-600"})}),d.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"La Solution DictaMed"})]}),d.jsxs("ul",{className:"space-y-4 text-slate-700 font-medium",children:[d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx(Di,{size:18,className:"text-emerald-500 mt-1 flex-shrink-0"}),d.jsxs("span",{children:["Transformation vocale des observations en ",d.jsx("strong",{children:"données structurées"}),"."]})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx(Di,{size:18,className:"text-emerald-500 mt-1 flex-shrink-0"}),d.jsx("span",{children:"Transcription IA → Envoi temps réel Google Sheets → Export SPSS."})]}),d.jsxs("li",{className:"flex items-start gap-3",children:[d.jsx(Di,{size:18,className:"text-emerald-500 mt-1 flex-shrink-0"}),d.jsxs("span",{children:[d.jsx("strong",{children:"Gain de temps : 70%"})," avec une précision optimale."]})]})]})]})]}),d.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mb-12 relative z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"bg-blue-50 p-3 rounded-2xl",children:d.jsx(Oi,{size:24,className:"text-blue-600"})}),d.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"Conseils pour une dictée optimale"})]}),d.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:["Utiliser un microphone de bonne qualité","S'installer dans un environnement calme","Articuler clairement chaque mot","Marquer de légères pauses entre les valeurs","Respecter l'ordre des variables défini","Vérifier via la fonction 'Réécouter'"].map((t,e)=>d.jsxs("div",{className:"flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700 font-medium",children:[d.jsx("span",{className:"w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-700 rounded-full text-xs font-bold flex-shrink-0",children:e+1}),t]},e))})]}),d.jsxs("div",{className:"relative z-10",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[d.jsx("div",{className:"bg-blue-50 p-3 rounded-2xl",children:d.jsx(G1,{size:24,className:"text-blue-600"})}),d.jsx("h3",{className:"text-xl font-bold text-slate-800",children:"Votre processus en 5 étapes"})]}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10",children:[{title:"Définition",desc:"Fixer les variables à collecter"},{title:"Template",desc:"Envoyer le fichier SPSS modèle"},{title:"Setup",desc:"Création du Google Sheet personnalisé"},{title:"Dictée",desc:"Dicter les données patient par patient"},{title:"Livrable",desc:"Obtenir le fichier SPSS prêt pour analyse",highlight:!0}].map((t,e)=>d.jsxs("div",{className:`
              rounded-2xl p-6 border flex flex-col h-full
              ${t.highlight?"bg-gradient-to-br from-blue-600 to-teal-500 text-white border-transparent shadow-lg shadow-blue-200":"bg-white border-slate-200 text-slate-600 shadow-sm hover:border-slate-300"}
            `,children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("span",{className:`text-sm font-bold uppercase tracking-wider ${t.highlight?"text-blue-100":"text-slate-400"}`,children:["Étape ",e+1]}),e<4&&!t.highlight&&d.jsx(hv,{size:16,className:"text-slate-300"})]}),d.jsx("h4",{className:`text-lg font-bold mb-2 ${t.highlight?"text-white":"text-slate-800"}`,children:t.title}),d.jsx("p",{className:`font-medium leading-relaxed ${t.highlight?"text-blue-50":"text-slate-500"}`,children:t.desc})]},e))})]})]}),SC=()=>d.jsxs("div",{className:"max-w-5xl mx-auto p-4 sm:p-6 pb-32",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h2",{className:"text-4xl font-black text-slate-900 tracking-tight",children:"Contactez DictaMed"}),d.jsx("p",{className:"text-slate-500 font-bold mt-2 text-lg",children:"Solution de dictée intelligente pour la recherche clinique"})]}),d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mb-16",children:[d.jsxs("div",{className:"bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col h-full relative overflow-hidden group",children:[d.jsx("div",{className:"absolute top-0 right-0 p-6 opacity-5 group-hover:scale-110 transition-transform",children:d.jsx(Fm,{size:120})}),d.jsxs("h3",{className:"font-black text-2xl text-slate-800 mb-8 flex items-center gap-4",children:[d.jsx("div",{className:"bg-emerald-100 p-3 rounded-2xl",children:d.jsx(dl,{className:"text-emerald-600",size:28})}),"Commander la solution"]}),d.jsxs("div",{className:"space-y-8 flex-grow",children:[d.jsxs("div",{className:"flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100",children:[d.jsx(dl,{className:"text-blue-500 mt-1 flex-shrink-0",size:24}),d.jsxs("div",{children:[d.jsx("span",{className:"block text-xs text-slate-400 font-black uppercase tracking-widest mb-1",children:"Email direct"}),d.jsx("a",{href:"mailto:DictaMed.SPSS@gmail.com",className:"text-slate-800 font-black text-xl hover:text-blue-600 transition-colors break-all",children:"DictaMed.SPSS@gmail.com"})]})]}),d.jsxs("div",{className:"flex items-start gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100",children:[d.jsx($1,{className:"text-blue-600 mt-1 flex-shrink-0",size:24}),d.jsxs("div",{children:[d.jsx("span",{className:"block text-xs text-slate-400 font-black uppercase tracking-widest mb-1",children:"Facebook"}),d.jsx("a",{href:"https://www.facebook.com/DictaMed.SPSS",target:"_blank",rel:"noopener noreferrer",className:"text-slate-800 font-black text-xl hover:text-blue-600 transition-colors",children:"DictaMed.SPSS"})]})]}),d.jsxs("div",{className:"flex items-start gap-4 text-slate-600 font-bold bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100",children:[d.jsx(Fm,{className:"text-emerald-500 mt-1 flex-shrink-0",size:24}),d.jsx("p",{className:"text-base leading-relaxed",children:"Tarification sur-mesure adaptée à la taille de votre étude et au nombre de variables."})]})]})]}),d.jsxs("div",{className:"bg-slate-900 p-10 rounded-[3rem] shadow-2xl flex flex-col h-full relative overflow-hidden group",children:[d.jsx("div",{className:"absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform",children:d.jsx(Lm,{size:120,className:"text-white"})}),d.jsxs("h3",{className:"font-black text-2xl text-white mb-8 flex items-center gap-4",children:[d.jsx("div",{className:"bg-blue-600 p-3 rounded-2xl",children:d.jsx(Lm,{className:"text-white",size:28})}),"Dossier de candidature"]}),d.jsx("p",{className:"text-blue-100/70 mb-8 font-bold text-base leading-relaxed",children:"Pour un déploiement rapide, communiquez-nous :"}),d.jsx("ul",{className:"space-y-5",children:[{icon:lT,text:"Identité complète du praticien"},{icon:tT,text:"Coordonnées de contact direct"},{icon:F1,text:"Établissement ou Laboratoire"},{icon:H1,text:"Structure du fichier SPSS (Variables)"},{icon:pv,text:"Calendrier prévisionnel de l'étude"}].map((t,e)=>d.jsxs("li",{className:"flex items-center gap-4 text-white font-bold text-base",children:[d.jsx("div",{className:"bg-white/10 p-2 rounded-xl text-blue-400",children:d.jsx(t.icon,{size:20})}),t.text]},e))}),d.jsxs("div",{className:"mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-3 text-emerald-400 font-black bg-white/5 py-4 rounded-2xl",children:[d.jsx(ba,{size:22}),"Étude de faisabilité sous 48h"]})]})]}),d.jsx("div",{className:"flex justify-center",children:d.jsxs("div",{className:"flex items-center text-slate-500 font-black text-base bg-white px-10 py-5 rounded-3xl shadow-md border border-slate-100 group transition-all hover:bg-slate-50",children:[d.jsx(J1,{size:24,className:"mr-3 text-blue-600 group-hover:animate-bounce"}),d.jsx("p",{children:"DictaMed - Monastir - Tunisie"})]})})]});function kC(){const[t,e]=G.useState("normal"),[n,r]=G.useState(null),[s,i]=G.useState(!0),o=async(p,y)=>{try{const v=au(fu,"users",p);(await Aw(v)).exists()?(await Rf(v,{lastActivity:new Date().toISOString()}),console.log("✅ BDD : Profil mis à jour pour",y)):(await Af(v,{login:y,totalDictations:0,totalDMI:0,totalDictationTime:0,totalWords:0,lastActivity:new Date().toISOString(),accountCreated:new Date().toISOString(),isPraticien:!0}),console.log("✅ BDD : Profil utilisateur créé pour",y))}catch(v){console.error("❌ Erreur BDD (vérifiez les règles de sécurité Firestore) :",v)}};G.useEffect(()=>{const p=W2(Ui,async y=>{y?(r({login:y.email||"Utilisateur Google",accessCode:"GOOGLE_SECURED",uid:y.uid}),await o(y.uid,y.email||"Google User")):r(v=>(v==null?void 0:v.accessCode)==="GOOGLE_SECURED"?null:v),i(!1)});return()=>p()},[]);const l=async p=>{const v=`manual_${p.login.replace(/[^a-zA-Z0-9]/g,"_").toLowerCase()}`,k={...p,uid:v};r(k),await o(v,p.login)},u=async()=>{try{await q2(Ui)}catch(p){console.error("Erreur déconnexion",p)}r(null),e("normal")},h=()=>{if(s&&t==="normal")return d.jsx("div",{className:"flex justify-center py-20",children:d.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-4 border-slate-100 border-t-emerald-500"})});switch(t){case"normal":return n?d.jsx(Jg,{mode:Ht.NORMAL,user:n}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsx("div",{className:"max-w-md mx-auto mb-8 bg-blue-50 border border-blue-100 p-6 rounded-3xl text-center",children:d.jsxs("p",{className:"text-blue-800 font-black",children:["Veuillez vous identifier pour accéder au ",d.jsx("span",{className:"text-emerald-600",children:"mode normal"})]})}),d.jsx(wc,{onLogin:l})]});case"dmi":return n?d.jsx(wC,{user:n}):d.jsxs("div",{className:"animate-fade-in",children:[d.jsx("div",{className:"max-w-md mx-auto mb-8 bg-blue-50 border border-blue-100 p-6 rounded-3xl text-center",children:d.jsxs("p",{className:"text-blue-800 font-black",children:["Veuillez vous identifier pour accéder au ",d.jsx("span",{className:"text-emerald-600",children:"mode DMI"})]})}),d.jsx(wc,{onLogin:l})]});case"stats":return n?d.jsx(EC,{user:n}):d.jsx(wc,{onLogin:l});case"test":const p=n||{login:"demo.medecin@dictamed.com",accessCode:"0000"};return d.jsx(Jg,{mode:Ht.TEST,user:p});case"guide":return d.jsx(IC,{});case"faq":return d.jsx(TC,{});case"contact":return d.jsx(SC,{});default:return d.jsx("div",{className:"p-8 text-center font-black",children:"Section en développement"})}};return d.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col",children:[d.jsx(hT,{currentTab:t,onTabChange:p=>e(p),user:n,onLogout:u}),d.jsx("main",{className:"flex-grow container mx-auto px-4 py-12",children:h()}),d.jsx("footer",{className:"bg-white border-t border-slate-100 py-10 text-center",children:d.jsxs("span",{className:"text-slate-400 font-black tracking-widest uppercase text-xs",children:["© ",new Date().getFullYear()," DictaMed"]})})]})}const Pw=document.getElementById("root");if(!Pw)throw new Error("Could not find root element to mount to");const AC=Ec.createRoot(Pw);AC.render(d.jsx(IE.StrictMode,{children:d.jsx(kC,{})}));
