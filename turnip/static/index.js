(()=>{var GC=Object.create;var Xv=Object.defineProperty;var XC=Object.getOwnPropertyDescriptor;var YC=Object.getOwnPropertyNames;var QC=Object.getPrototypeOf,ZC=Object.prototype.hasOwnProperty;var I=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var JC=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of YC(e))!ZC.call(t,i)&&
i!==r&&Xv(t,i,{get:()=>e[i],enumerable:!(n=XC(e,i))||n.enumerable});return t};var St=(t,e,r)=>(r=t!=null?GC(QC(t)):{},JC(e||!t||!t.__esModule?Xv(r,"default",{value:t,enumerable:!0}):
r,t));var ow=I(ae=>{"use strict";var xs=Symbol.for("react.element"),eI=Symbol.for("react.portal"),tI=Symbol.
for("react.fragment"),rI=Symbol.for("react.strict_mode"),nI=Symbol.for("react.profiler"),iI=Symbol.for(
"react.provider"),aI=Symbol.for("react.context"),oI=Symbol.for("react.forward_ref"),sI=Symbol.for("r\
eact.suspense"),lI=Symbol.for("react.memo"),uI=Symbol.for("react.lazy"),Yv=Symbol.iterator;function cI(t){
return t===null||typeof t!="object"?null:(t=Yv&&t[Yv]||t["@@iterator"],typeof t=="function"?t:null)}
var Jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},
enqueueSetState:function(){}},ew=Object.assign,tw={};function Ha(t,e,r){this.props=t,this.context=e,
this.refs=tw,this.updater=r||Jv}Ha.prototype.isReactComponent={};Ha.prototype.setState=function(t,e){
if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of \
state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(
this,t,e,"setState")};Ha.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"f\
orceUpdate")};function rw(){}rw.prototype=Ha.prototype;function Sp(t,e,r){this.props=t,this.context=
e,this.refs=tw,this.updater=r||Jv}var Tp=Sp.prototype=new rw;Tp.constructor=Sp;ew(Tp,Ha.prototype);Tp.
isPureReactComponent=!0;var Qv=Array.isArray,nw=Object.prototype.hasOwnProperty,kp={current:null},iw={
key:!0,ref:!0,__self:!0,__source:!0};function aw(t,e,r){var n,i={},a=null,o=null;if(e!=null)for(n in e.
ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)nw.call(e,n)&&!iw.hasOwnProperty(n)&&(i[n]=e[n]);
var s=arguments.length-2;if(s===1)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+
2];i.children=l}if(t&&t.defaultProps)for(n in s=t.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:xs,
type:t,key:a,ref:o,props:i,_owner:kp.current}}function dI(t,e){return{$$typeof:xs,type:t.type,key:e,
ref:t.ref,props:t.props,_owner:t._owner}}function bp(t){return typeof t=="object"&&t!==null&&t.$$typeof===
xs}function fI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(r){return e[r]})}var Zv=/\/+/g;
function _p(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fI(""+t.key):e.toString(36)}function _u(t,e,r,n,i){
var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"\
string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xs:case eI:o=!0}}if(o)return o=
t,i=i(o),t=n===""?"."+_p(o,0):n,Qv(i)?(r="",t!=null&&(r=t.replace(Zv,"$&/")+"/"),_u(i,e,r,"",function(u){
return u})):i!=null&&(bp(i)&&(i=dI(i,r+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Zv,"$&/")+"/")+
t)),e.push(i)),1;if(o=0,n=n===""?".":n+":",Qv(t))for(var s=0;s<t.length;s++){a=t[s];var l=n+_p(a,s);
o+=_u(a,e,r,l,i)}else if(l=cI(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,
l=n+_p(a,s++),o+=_u(a,e,r,l,i);else if(a==="object")throw e=String(t),Error("Objects are not valid a\
s a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":
e)+"). If you meant to render a collection of children, use an array instead.");return o}function Eu(t,e,r){
if(t==null)return t;var n=[],i=0;return _u(t,n,"","",function(a){return e.call(r,a,i++)}),n}function pI(t){
if(t._status===-1){var e=t._result;e=e(),e.then(function(r){(t._status===0||t._status===-1)&&(t._status=
1,t._result=r)},function(r){(t._status===0||t._status===-1)&&(t._status=2,t._result=r)}),t._status===
-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Tt={current:null},
Su={transition:null},hI={ReactCurrentDispatcher:Tt,ReactCurrentBatchConfig:Su,ReactCurrentOwner:kp};
ae.Children={map:Eu,forEach:function(t,e,r){Eu(t,function(){e.apply(this,arguments)},r)},count:function(t){
var e=0;return Eu(t,function(){e++}),e},toArray:function(t){return Eu(t,function(e){return e})||[]},
only:function(t){if(!bp(t))throw Error("React.Children.only expected to receive a single React eleme\
nt child.");return t}};ae.Component=Ha;ae.Fragment=tI;ae.Profiler=nI;ae.PureComponent=Sp;ae.StrictMode=
rI;ae.Suspense=sI;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hI;ae.cloneElement=function(t,e,r){
if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passe\
d "+t+".");var n=ew({},t.props),i=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=
kp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)
nw.call(e,l)&&!iw.hasOwnProperty(l)&&(n[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-
2;if(l===1)n.children=r;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];n.children=s}
return{$$typeof:xs,type:t.type,key:i,ref:a,props:n,_owner:o}};ae.createContext=function(t){return t=
{$$typeof:aI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,
_globalName:null},t.Provider={$$typeof:iI,_context:t},t.Consumer=t};ae.createElement=aw;ae.createFactory=
function(t){var e=aw.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.
forwardRef=function(t){return{$$typeof:oI,render:t}};ae.isValidElement=bp;ae.lazy=function(t){return{
$$typeof:uI,_payload:{_status:-1,_result:t},_init:pI}};ae.memo=function(t,e){return{$$typeof:lI,type:t,
compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Su.transition;Su.transition={};try{
t()}finally{Su.transition=e}};ae.unstable_act=function(){throw Error("act(...) is not supported in p\
roduction builds of React.")};ae.useCallback=function(t,e){return Tt.current.useCallback(t,e)};ae.useContext=
function(t){return Tt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){
return Tt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Tt.current.useEffect(t,e)};
ae.useId=function(){return Tt.current.useId()};ae.useImperativeHandle=function(t,e,r){return Tt.current.
useImperativeHandle(t,e,r)};ae.useInsertionEffect=function(t,e){return Tt.current.useInsertionEffect(
t,e)};ae.useLayoutEffect=function(t,e){return Tt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){
return Tt.current.useMemo(t,e)};ae.useReducer=function(t,e,r){return Tt.current.useReducer(t,e,r)};ae.
useRef=function(t){return Tt.current.useRef(t)};ae.useState=function(t){return Tt.current.useState(t)};
ae.useSyncExternalStore=function(t,e,r){return Tt.current.useSyncExternalStore(t,e,r)};ae.useTransition=
function(){return Tt.current.useTransition()};ae.version="18.2.0"});var ir=I((e4,sw)=>{"use strict";sw.exports=ow()});var yw=I(we=>{"use strict";function Pp(t,e){var r=t.length;t.push(e);e:for(;0<r;){var n=r-1>>>1,i=t[n];
if(0<Tu(i,e))t[n]=e,t[r]=i,r=n;else break e}}function Sr(t){return t.length===0?null:t[0]}function bu(t){
if(t.length===0)return null;var e=t[0],r=t.pop();if(r!==e){t[0]=r;e:for(var n=0,i=t.length,a=i>>>1;n<
a;){var o=2*(n+1)-1,s=t[o],l=o+1,u=t[l];if(0>Tu(s,r))l<i&&0>Tu(u,s)?(t[n]=u,t[l]=r,n=l):(t[n]=s,t[o]=
r,n=o);else if(l<i&&0>Tu(u,r))t[n]=u,t[l]=r,n=l;else break e}}return e}function Tu(t,e){var r=t.sortIndex-
e.sortIndex;return r!==0?r:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?
(lw=performance,we.unstable_now=function(){return lw.now()}):(Cp=Date,uw=Cp.now(),we.unstable_now=function(){
return Cp.now()-uw});var lw,Cp,uw,jr=[],$n=[],mI=1,ar=null,mt=3,Cu=!1,zi=!1,_s=!1,fw=typeof setTimeout==
"function"?setTimeout:null,pw=typeof clearTimeout=="function"?clearTimeout:null,cw=typeof setImmediate<
"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==
void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Dp(t){for(var e=Sr($n);e!==
null;){if(e.callback===null)bu($n);else if(e.startTime<=t)bu($n),e.sortIndex=e.expirationTime,Pp(jr,
e);else break;e=Sr($n)}}function Ap(t){if(_s=!1,Dp(t),!zi)if(Sr(jr)!==null)zi=!0,Fp(Np);else{var e=Sr(
$n);e!==null&&Bp(Ap,e.startTime-t)}}function Np(t,e){zi=!1,_s&&(_s=!1,pw(Ss),Ss=-1),Cu=!0;var r=mt;try{
for(Dp(e),ar=Sr(jr);ar!==null&&(!(ar.expirationTime>e)||t&&!gw());){var n=ar.callback;if(typeof n=="\
function"){ar.callback=null,mt=ar.priorityLevel;var i=n(ar.expirationTime<=e);e=we.unstable_now(),typeof i==
"function"?ar.callback=i:ar===Sr(jr)&&bu(jr),Dp(e)}else bu(jr);ar=Sr(jr)}if(ar!==null)var a=!0;else{
var o=Sr($n);o!==null&&Bp(Ap,o.startTime-e),a=!1}return a}finally{ar=null,mt=r,Cu=!1}}var Iu=!1,ku=null,
Ss=-1,hw=5,mw=-1;function gw(){return!(we.unstable_now()-mw<hw)}function Ip(){if(ku!==null){var t=we.
unstable_now();mw=t;var e=!0;try{e=ku(!0,t)}finally{e?Es():(Iu=!1,ku=null)}}else Iu=!1}var Es;typeof cw==
"function"?Es=function(){cw(Ip)}:typeof MessageChannel<"u"?(Rp=new MessageChannel,dw=Rp.port2,Rp.port1.
onmessage=Ip,Es=function(){dw.postMessage(null)}):Es=function(){fw(Ip,0)};var Rp,dw;function Fp(t){ku=
t,Iu||(Iu=!0,Es())}function Bp(t,e){Ss=fw(function(){t(we.unstable_now())},e)}we.unstable_IdlePriority=
5;we.unstable_ImmediatePriority=1;we.unstable_LowPriority=4;we.unstable_NormalPriority=3;we.unstable_Profiling=
null;we.unstable_UserBlockingPriority=2;we.unstable_cancelCallback=function(t){t.callback=null};we.unstable_continueExecution=
function(){zi||Cu||(zi=!0,Fp(Np))};we.unstable_forceFrameRate=function(t){0>t||125<t?console.error("\
forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is no\
t supported"):hw=0<t?Math.floor(1e3/t):5};we.unstable_getCurrentPriorityLevel=function(){return mt};
we.unstable_getFirstCallbackNode=function(){return Sr(jr)};we.unstable_next=function(t){switch(mt){case 1:case 2:case 3:
var e=3;break;default:e=mt}var r=mt;mt=e;try{return t()}finally{mt=r}};we.unstable_pauseExecution=function(){};
we.unstable_requestPaint=function(){};we.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:
break;default:t=3}var r=mt;mt=t;try{return e()}finally{mt=r}};we.unstable_scheduleCallback=function(t,e,r){
var n=we.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:
n):r=n,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:
i=5e3}return i=r+i,t={id:mI++,callback:e,priorityLevel:t,startTime:r,expirationTime:i,sortIndex:-1},
r>n?(t.sortIndex=r,Pp($n,t),Sr(jr)===null&&t===Sr($n)&&(_s?(pw(Ss),Ss=-1):_s=!0,Bp(Ap,r-n))):(t.sortIndex=
i,Pp(jr,t),zi||Cu||(zi=!0,Fp(Np))),t};we.unstable_shouldYield=gw;we.unstable_wrapCallback=function(t){
var e=mt;return function(){var r=mt;mt=e;try{return t.apply(this,arguments)}finally{mt=r}}}});var ww=I((r4,vw)=>{"use strict";vw.exports=yw()});var kE=I(Yt=>{"use strict";var b1=ir(),Gt=ww();function A(t){for(var e="https://reactjs.org/docs/err\
or-decoder.html?invariant="+t,r=1;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r]);
return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev env\
ironment for full errors and additional helpful warnings."}var C1=new Set,Vs={};function Ji(t,e){uo(
t,e),uo(t+"Capture",e)}function uo(t,e){for(Vs[t]=e,t=0;t<e.length;t++)C1.add(e[t])}var hn=!(typeof window>
"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ih=Object.prototype.hasOwnProperty,
gI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
xw={},Ew={};function yI(t){return ih.call(Ew,t)?!0:ih.call(xw,t)?!1:gI.test(t)?Ew[t]=!0:(xw[t]=!0,!1)}
function vI(t,e,r,n){if(r!==null&&r.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"\
boolean":return n?!1:r!==null?!r.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="ari\
a-");default:return!1}}function wI(t,e,r,n){if(e===null||typeof e>"u"||vI(t,e,r,n))return!0;if(n)return!1;
if(r!==null)switch(r.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(
e)||1>e}return!1}function Ct(t,e,r,n,i,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=
n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=t,this.type=e,this.sanitizeURL=
a,this.removeEmptyString=o}var dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked i\
nnerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){
dt[t]=new Ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["html\
For","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];dt[e]=new Ct(e,1,!1,t[1],null,
!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){dt[t]=new Ct(t,2,!1,
t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].
forEach(function(t){dt[t]=new Ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay co\
ntrols default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden lo\
op noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(
" ").forEach(function(t){dt[t]=new Ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","mu\
ted","selected"].forEach(function(t){dt[t]=new Ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(
function(t){dt[t]=new Ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){dt[t]=
new Ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){dt[t]=new Ct(t,5,!1,t.toLowerCase(),
null,!1,!1)});var Yh=/[\-:]([a-z])/g;function Qh(t){return t[1].toUpperCase()}"accent-height alignme\
nt-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-inte\
rpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fil\
l-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font\
-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x \
horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start over\
line-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-renderin\
g stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-das\
hoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor tex\
t-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-\
per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x ve\
rt-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(
Yh,Qh);dt[e]=new Ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:\
title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yh,Qh);dt[e]=new Ct(e,1,!1,t,"http:\
//www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(
Yh,Qh);dt[e]=new Ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigi\
n"].forEach(function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!1,!1)});dt.xlinkHref=new Ct("xlink\
Href",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(
function(t){dt[t]=new Ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Zh(t,e,r,n){var i=dt.hasOwnProperty(
e)?dt[e]:null;(i!==null?i.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&
(wI(e,r,i,n)&&(r=null),n||i===null?yI(e)&&(r===null?t.removeAttribute(e):t.setAttribute(e,""+r)):i.mustUseProperty?
t[i.propertyName]=r===null?i.type===3?!1:"":r:(e=i.attributeName,n=i.attributeNamespace,r===null?t.removeAttribute(
e):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?t.setAttributeNS(n,e,r):t.setAttribute(e,r))))}var vn=b1.
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ru=Symbol.for("react.element"),Va=Symbol.for("rea\
ct.portal"),Wa=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),ah=Symbol.for("react.\
profiler"),I1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),em=Symbol.for("react.forwa\
rd_ref"),oh=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),tm=Symbol.for("react.m\
emo"),Wn=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var P1=Symbol.
for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react\
.tracing_marker");var _w=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=
_w&&t[_w]||t["@@iterator"],typeof t=="function"?t:null)}var Fe=Object.assign,Mp;function As(t){if(Mp===
void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Mp=e&&e[1]||""}return`
`+Mp+t}var Op=!1;function Lp(t,e){if(!t||Op)return"";Op=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=
void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){
throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var n=u}
Reflect.construct(t,[],e)}else{try{e.call()}catch(u){n=u}t.call(e.prototype)}else{try{throw Error()}catch(u){
n=u}t()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==
1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<an\
onymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{Op=!1,Error.prepareStackTrace=r}return(t=
t?t.displayName||t.name:"")?As(t):""}function xI(t){switch(t.tag){case 5:return As(t.type);case 16:return As(
"Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=
Lp(t.type,!1),t;case 11:return t=Lp(t.type.render,!1),t;case 1:return t=Lp(t.type,!0),t;default:return""}}
function lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t==
"string")return t;switch(t){case Wa:return"Fragment";case Va:return"Portal";case ah:return"Profiler";case Jh:
return"StrictMode";case oh:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.
$$typeof){case R1:return(t.displayName||"Context")+".Consumer";case I1:return(t._context.displayName||
"Context")+".Provider";case em:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",
t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case tm:return e=t.displayName||null,e!==null?e:lh(t.type)||
"Memo";case Wn:e=t._payload,t=t._init;try{return lh(t(e))}catch{}}return null}function EI(t){var e=t.
type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:
return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=
e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:
return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:
return lh(e);case 8:return e===Jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profi\
ler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"Trac\
ingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||
e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"\
number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D1(t){
var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _I(t){
var e=D1(t)?"checked":"value",r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];
if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,
a=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){
n=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},
setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pu(t){
t._valueTracker||(t._valueTracker=_I(t))}function A1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;
var r=e.getValue(),n="";return t&&(n=D1(t)?t.checked?"true":"false":t.value),t=n,t!==r?(e.setValue(t),
!0):!1}function ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.
activeElement||t.body}catch{return t.body}}function uh(t,e){var r=e.checked;return Fe({},e,{defaultChecked:void 0,
defaultValue:void 0,value:void 0,checked:r??t._wrapperState.initialChecked})}function Sw(t,e){var r=e.
defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;r=oi(e.value!=null?
e.value:r),t._wrapperState={initialChecked:n,initialValue:r,controlled:e.type==="checkbox"||e.type===
"radio"?e.checked!=null:e.value!=null}}function N1(t,e){e=e.checked,e!=null&&Zh(t,"checked",e,!1)}function ch(t,e){
N1(t,e);var r=oi(e.value),n=e.type;if(r!=null)n==="number"?(r===0&&t.value===""||t.value!=r)&&(t.value=
""+r):t.value!==""+r&&(t.value=""+r);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}
e.hasOwnProperty("value")?dh(t,e.type,r):e.hasOwnProperty("defaultValue")&&dh(t,e.type,oi(e.defaultValue)),
e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Tw(t,e,r){if(e.
hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="rese\
t"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,r||e===t.value||(t.value=
e),t.defaultValue=e}r=t.name,r!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,r!==
""&&(t.name=r)}function dh(t,e,r){(e!=="number"||ic(t.ownerDocument)!==t)&&(r==null?t.defaultValue=""+
t._wrapperState.initialValue:t.defaultValue!==""+r&&(t.defaultValue=""+r))}var Ns=Array.isArray;function no(t,e,r,n){
if(t=t.options,e){e={};for(var i=0;i<r.length;i++)e["$"+r[i]]=!0;for(r=0;r<t.length;r++)i=e.hasOwnProperty(
"$"+t[r].value),t[r].selected!==i&&(t[r].selected=i),i&&n&&(t[r].defaultSelected=!0)}else{for(r=""+oi(
r),e=null,i=0;i<t.length;i++){if(t[i].value===r){t[i].selected=!0,n&&(t[i].defaultSelected=!0);return}
e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=
null)throw Error(A(91));return Fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.
initialValue})}function kw(t,e){var r=e.value;if(r==null){if(r=e.children,e=e.defaultValue,r!=null){
if(e!=null)throw Error(A(92));if(Ns(r)){if(1<r.length)throw Error(A(93));r=r[0]}e=r}e==null&&(e=""),
r=e}t._wrapperState={initialValue:oi(r)}}function F1(t,e){var r=oi(e.value),n=oi(e.defaultValue);r!=
null&&(r=""+r,r!==t.value&&(t.value=r),e.defaultValue==null&&t.defaultValue!==r&&(t.defaultValue=r)),
n!=null&&(t.defaultValue=""+n)}function bw(t){var e=t.textContent;e===t._wrapperState.initialValue&&
e!==""&&e!==null&&(t.value=e)}function B1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"\
math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ph(t,e){
return t==null||t==="http://www.w3.org/1999/xhtml"?B1(e):t==="http://www.w3.org/2000/svg"&&e==="fore\
ignObject"?"http://www.w3.org/1999/xhtml":t}var Du,M1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?
function(e,r,n,i){MSApp.execUnsafeLocalFunction(function(){return t(e,r,n,i)})}:t}(function(t,e){if(t.
namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Du=Du||document.
createElement("div"),Du.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Du.firstChild;t.firstChild;)
t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){
var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=e;return}}t.textContent=e}var Ms={
animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,
boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,
flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,
gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,
opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,
stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},
SI=["Webkit","ms","Moz","O"];Object.keys(Ms).forEach(function(t){SI.forEach(function(e){e=e+t.charAt(
0).toUpperCase()+t.substring(1),Ms[e]=Ms[t]})});function O1(t,e,r){return e==null||typeof e=="boolea\
n"||e===""?"":r||typeof e!="number"||e===0||Ms.hasOwnProperty(t)&&Ms[t]?(""+e).trim():e+"px"}function L1(t,e){
t=t.style;for(var r in e)if(e.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=O1(r,e[r],n);r==="float"&&
(r="cssFloat"),n?t.setProperty(r,i):t[r]=i}}var TI=Fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,
hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){
if(e){if(TI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=
null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__htm\
l"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(
A(62))}}function mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotati\
on-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-f\
ormat":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=null;function rm(t){
return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===
3?t.parentNode:t}var yh=null,io=null,ao=null;function Cw(t){if(t=cl(t)){if(typeof yh!="function")throw Error(
A(280));var e=t.stateNode;e&&(e=Ac(e),yh(t.stateNode,t.type,e))}}function U1(t){io?ao?ao.push(t):ao=
[t]:io=t}function z1(){if(io){var t=io,e=ao;if(ao=io=null,Cw(t),e)for(t=0;t<e.length;t++)Cw(e[t])}}function j1(t,e){
return t(e)}function H1(){}var Up=!1;function q1(t,e,r){if(Up)return t(e,r);Up=!0;try{return j1(t,e,
r)}finally{Up=!1,(io!==null||ao!==null)&&(H1(),z1())}}function Ks(t,e){var r=t.stateNode;if(r===null)
return null;var n=Ac(r);if(n===null)return null;r=n[e];e:switch(e){case"onClick":case"onClickCapture":case"\
onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMov\
e":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||
(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)
return null;if(r&&typeof r!="function")throw Error(A(231,e,typeof r));return r}var vh=!1;if(hn)try{qa=
{},Object.defineProperty(qa,"passive",{get:function(){vh=!0}}),window.addEventListener("test",qa,qa),
window.removeEventListener("test",qa,qa)}catch{vh=!1}var qa;function kI(t,e,r,n,i,a,o,s,l){var u=Array.
prototype.slice.call(arguments,3);try{e.apply(r,u)}catch(c){this.onError(c)}}var Os=!1,ac=null,oc=!1,
wh=null,bI={onError:function(t){Os=!0,ac=t}};function CI(t,e,r,n,i,a,o,s,l){Os=!1,ac=null,kI.apply(bI,
arguments)}function II(t,e,r,n,i,a,o,s,l){if(CI.apply(this,arguments),Os){if(Os){var u=ac;Os=!1,ac=null}else
throw Error(A(198));oc||(oc=!0,wh=u)}}function ea(t){var e=t,r=t;if(t.alternate)for(;e.return;)e=e.return;else{
t=e;do e=t,e.flags&4098&&(r=e.return),t=e.return;while(t)}return e.tag===3?r:null}function $1(t){if(t.
tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)
return e.dehydrated}return null}function Iw(t){if(ea(t)!==t)throw Error(A(188))}function RI(t){var e=t.
alternate;if(!e){if(e=ea(t),e===null)throw Error(A(188));return e!==t?null:t}for(var r=t,n=e;;){var i=r.
return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.
child===a.child){for(a=i.child;a;){if(a===r)return Iw(i),t;if(a===n)return Iw(i),e;a=a.sibling}throw Error(
A(188))}if(r.return!==n.return)r=i,n=a;else{for(var o=!1,s=i.child;s;){if(s===r){o=!0,r=i,n=a;break}
if(s===n){o=!0,n=i,r=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===r){o=!0,r=a,n=i;break}if(s===
n){o=!0,n=a,r=i;break}s=s.sibling}if(!o)throw Error(A(189))}}if(r.alternate!==n)throw Error(A(190))}
if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?t:e}function V1(t){return t=RI(t),t!==
null?W1(t):null}function W1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W1(t);
if(e!==null)return e;t=t.sibling}return null}var K1=Gt.unstable_scheduleCallback,Rw=Gt.unstable_cancelCallback,
PI=Gt.unstable_shouldYield,DI=Gt.unstable_requestPaint,He=Gt.unstable_now,AI=Gt.unstable_getCurrentPriorityLevel,
nm=Gt.unstable_ImmediatePriority,G1=Gt.unstable_UserBlockingPriority,sc=Gt.unstable_NormalPriority,NI=Gt.
unstable_LowPriority,X1=Gt.unstable_IdlePriority,Ic=null,Vr=null;function FI(t){if(Vr&&typeof Vr.onCommitFiberRoot==
"function")try{Vr.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Ir=Math.clz32?
Math.clz32:OI,BI=Math.log,MI=Math.LN2;function OI(t){return t>>>=0,t===0?32:31-(BI(t)/MI|0)|0}var Au=64,
Nu=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:
return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:
return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:
return t}}function lc(t,e){var r=t.pendingLanes;if(r===0)return 0;var n=0,i=t.suspendedLanes,a=t.pingedLanes,
o=r&268435455;if(o!==0){var s=o&~i;s!==0?n=Fs(s):(a&=o,a!==0&&(n=Fs(a)))}else o=r&~i,o!==0?n=Fs(o):a!==
0&&(n=Fs(a));if(n===0)return 0;if(e!==0&&e!==n&&!(e&i)&&(i=n&-n,a=e&-e,i>=a||i===16&&(a&4194240)!==0))
return e;if(n&4&&(n|=r&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)r=31-Ir(e),i=1<<
r,n|=t[r],e&=~i;return n}function LI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:
return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:
return-1;default:return-1}}function UI(t,e){for(var r=t.suspendedLanes,n=t.pingedLanes,i=t.expirationTimes,
a=t.pendingLanes;0<a;){var o=31-Ir(a),s=1<<o,l=i[o];l===-1?(!(s&r)||s&n)&&(i[o]=LI(s,e)):l<=e&&(t.expiredLanes|=
s),a&=~s}}function xh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y1(){
var t=Au;return Au<<=1,!(Au&4194240)&&(Au=64),t}function zp(t){for(var e=[],r=0;31>r;r++)e.push(t);return e}
function ll(t,e,r){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,
e=31-Ir(e),t[e]=r}function zI(t,e){var r=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=
0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=
t.expirationTimes;0<r;){var i=31-Ir(r),a=1<<i;e[i]=0,n[i]=-1,t[i]=-1,r&=~a}}function im(t,e){var r=t.
entangledLanes|=e;for(t=t.entanglements;r;){var n=31-Ir(r),i=1<<n;i&e|t[n]&e&&(t[n]|=e),r&=~i}}var fe=0;
function Q1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Z1,am,J1,ex,tx,Eh=!1,Fu=[],Zn=null,
Jn=null,ei=null,Gs=new Map,Xs=new Map,Gn=[],jI="mousedown mouseup touchcancel touchend touchstart au\
xclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositio\
nstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".
split(" ");function Pw(t,e){switch(t){case"focusin":case"focusout":Zn=null;break;case"dragenter":case"\
dragleave":Jn=null;break;case"mouseover":case"mouseout":ei=null;break;case"pointerover":case"pointer\
out":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xs.delete(e.pointerId)}}
function ks(t,e,r,n,i,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:r,eventSystemFlags:n,
nativeEvent:a,targetContainers:[i]},e!==null&&(e=cl(e),e!==null&&am(e)),t):(t.eventSystemFlags|=n,e=
t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HI(t,e,r,n,i){switch(e){case"f\
ocusin":return Zn=ks(Zn,t,e,r,n,i),!0;case"dragenter":return Jn=ks(Jn,t,e,r,n,i),!0;case"mouseover":
return ei=ks(ei,t,e,r,n,i),!0;case"pointerover":var a=i.pointerId;return Gs.set(a,ks(Gs.get(a)||null,
t,e,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Xs.set(a,ks(Xs.get(a)||null,t,e,r,n,i)),
!0}return!1}function rx(t){var e=qi(t.target);if(e!==null){var r=ea(e);if(r!==null){if(e=r.tag,e===13){
if(e=$1(r),e!==null){t.blockedOn=e,tx(t.priority,function(){J1(r)});return}}else if(e===3&&r.stateNode.
current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.
blockedOn=null}function Gu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){
var r=_h(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(r===null){r=t.nativeEvent;var n=new r.
constructor(r.type,r);gh=n,r.target.dispatchEvent(n),gh=null}else return e=cl(r),e!==null&&am(e),t.blockedOn=
r,!1;e.shift()}return!0}function Dw(t,e,r){Gu(t)&&r.delete(e)}function qI(){Eh=!1,Zn!==null&&Gu(Zn)&&
(Zn=null),Jn!==null&&Gu(Jn)&&(Jn=null),ei!==null&&Gu(ei)&&(ei=null),Gs.forEach(Dw),Xs.forEach(Dw)}function bs(t,e){
t.blockedOn===e&&(t.blockedOn=null,Eh||(Eh=!0,Gt.unstable_scheduleCallback(Gt.unstable_NormalPriority,
qI)))}function Ys(t){function e(i){return bs(i,t)}if(0<Fu.length){bs(Fu[0],t);for(var r=1;r<Fu.length;r++){
var n=Fu[r];n.blockedOn===t&&(n.blockedOn=null)}}for(Zn!==null&&bs(Zn,t),Jn!==null&&bs(Jn,t),ei!==null&&
bs(ei,t),Gs.forEach(e),Xs.forEach(e),r=0;r<Gn.length;r++)n=Gn[r],n.blockedOn===t&&(n.blockedOn=null);
for(;0<Gn.length&&(r=Gn[0],r.blockedOn===null);)rx(r),r.blockedOn===null&&Gn.shift()}var oo=vn.ReactCurrentBatchConfig,
uc=!0;function $I(t,e,r,n){var i=fe,a=oo.transition;oo.transition=null;try{fe=1,om(t,e,r,n)}finally{
fe=i,oo.transition=a}}function VI(t,e,r,n){var i=fe,a=oo.transition;oo.transition=null;try{fe=4,om(t,
e,r,n)}finally{fe=i,oo.transition=a}}function om(t,e,r,n){if(uc){var i=_h(t,e,r,n);if(i===null)Kp(t,
e,n,cc,r),Pw(t,n);else if(HI(i,t,e,r,n))n.stopPropagation();else if(Pw(t,n),e&4&&-1<jI.indexOf(t)){for(;i!==
null;){var a=cl(i);if(a!==null&&Z1(a),a=_h(t,e,r,n),a===null&&Kp(t,e,n,cc,r),a===i)break;i=a}i!==null&&
n.stopPropagation()}else Kp(t,e,n,null,r)}}var cc=null;function _h(t,e,r,n){if(cc=null,t=rm(n),t=qi(
t),t!==null)if(e=ea(t),e===null)t=null;else if(r=e.tag,r===13){if(t=$1(e),t!==null)return t;t=null}else if(r===
3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;
t=null}else e!==t&&(t=null);return cc=t,null}function nx(t){switch(t){case"cancel":case"click":case"\
close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"drags\
tart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"\
keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"poi\
nterdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"t\
ouchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"\
textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"\
afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"pop\
state":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragle\
ave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"\
pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"\
pointerenter":case"pointerleave":return 4;case"message":switch(AI()){case nm:return 1;case G1:return 4;case sc:case NI:
return 16;case X1:return 536870912;default:return 16}default:return 16}}var Yn=null,sm=null,Xu=null;
function ix(){if(Xu)return Xu;var t,e=sm,r=e.length,n,i="value"in Yn?Yn.value:Yn.textContent,a=i.length;
for(t=0;t<r&&e[t]===i[t];t++);var o=r-t;for(n=1;n<=o&&e[r-n]===i[a-n];n++);return Xu=i.slice(t,1<n?1-
n:void 0)}function Yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=
e,t===10&&(t=13),32<=t||t===13?t:0}function Bu(){return!0}function Aw(){return!1}function Xt(t){function e(r,n,i,a,o){
this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=
null;for(var s in t)t.hasOwnProperty(s)&&(r=t[s],this[s]=r?r(a):a[s]);return this.isDefaultPrevented=
(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Bu:Aw,this.isPropagationStopped=Aw,
this}return Fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;
r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=
Bu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.
cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),
e}var yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},
defaultPrevented:0,isTrusted:0},lm=Xt(yo),ul=Fe({},yo,{view:0,detail:0}),WI=Xt(ul),jp,Hp,Cs,Rc=Fe({},
ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,
getModifierState:um,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===
t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?
t.movementX:(t!==Cs&&(Cs&&t.type==="mousemove"?(jp=t.screenX-Cs.screenX,Hp=t.screenY-Cs.screenY):Hp=
jp=0,Cs=t),jp)},movementY:function(t){return"movementY"in t?t.movementY:Hp}}),Nw=Xt(Rc),KI=Fe({},Rc,
{dataTransfer:0}),GI=Xt(KI),XI=Fe({},ul,{relatedTarget:0}),qp=Xt(XI),YI=Fe({},yo,{animationName:0,elapsedTime:0,
pseudoElement:0}),QI=Xt(YI),ZI=Fe({},yo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:
window.clipboardData}}),JI=Xt(ZI),e2=Fe({},yo,{data:0}),Fw=Xt(e2),t2={Esc:"Escape",Spacebar:" ",Left:"\
ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",
Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r2={8:"Backspace",9:"Tab",12:"\
Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"P\
ageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"\
Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",
121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n2={Alt:"altKey",Control:"c\
trlKey",Meta:"metaKey",Shift:"shiftKey"};function i2(t){var e=this.nativeEvent;return e.getModifierState?
e.getModifierState(t):(t=n2[t])?!!e[t]:!1}function um(){return i2}var a2=Fe({},ul,{key:function(t){if(t.
key){var e=t2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yu(t),t===13?
"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?r2[t.keyCode]||"Unidentified":""},
code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:um,charCode:function(t){
return t.type==="keypress"?Yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?
t.keyCode:0},which:function(t){return t.type==="keypress"?Yu(t):t.type==="keydown"||t.type==="keyup"?
t.keyCode:0}}),o2=Xt(a2),s2=Fe({},Rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,
tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bw=Xt(s2),l2=Fe({},ul,{touches:0,targetTouches:0,changedTouches:0,
altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:um}),u2=Xt(l2),c2=Fe({},yo,{propertyName:0,
elapsedTime:0,pseudoElement:0}),d2=Xt(c2),f2=Fe({},Rc,{deltaX:function(t){return"deltaX"in t?t.deltaX:
"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?
-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),p2=Xt(f2),h2=[9,13,27,32],cm=hn&&
"CompositionEvent"in window,Ls=null;hn&&"documentMode"in document&&(Ls=document.documentMode);var m2=hn&&
"TextEvent"in window&&!Ls,ax=hn&&(!cm||Ls&&8<Ls&&11>=Ls),Mw=" ",Ow=!1;function ox(t,e){switch(t){case"\
keyup":return h2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mo\
usedown":case"focusout":return!0;default:return!1}}function sx(t){return t=t.detail,typeof t=="objec\
t"&&"data"in t?t.data:null}var Ka=!1;function g2(t,e){switch(t){case"compositionend":return sx(e);case"\
keypress":return e.which!==32?null:(Ow=!0,Mw);case"textInput":return t=e.data,t===Mw&&Ow?null:t;default:
return null}}function y2(t,e){if(Ka)return t==="compositionend"||!cm&&ox(t,e)?(t=ix(),Xu=sm=Yn=null,
Ka=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||
e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(
e.which)}return null;case"compositionend":return ax&&e.locale!=="ko"?null:e.data;default:return null}}
var v2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,
search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();
return e==="input"?!!v2[t.type]:e==="textarea"}function lx(t,e,r,n){U1(n),e=dc(e,"onChange"),0<e.length&&
(r=new lm("onChange","change",null,r,n),t.push({event:r,listeners:e}))}var Us=null,Qs=null;function w2(t){
wx(t,0)}function Pc(t){var e=Ya(t);if(A1(e))return t}function x2(t,e){if(t==="change")return e}var ux=!1;
hn&&(hn?(Ou="oninput"in document,Ou||($p=document.createElement("div"),$p.setAttribute("oninput","re\
turn;"),Ou=typeof $p.oninput=="function"),Mu=Ou):Mu=!1,ux=Mu&&(!document.documentMode||9<document.documentMode));
var Mu,Ou,$p;function Uw(){Us&&(Us.detachEvent("onpropertychange",cx),Qs=Us=null)}function cx(t){if(t.
propertyName==="value"&&Pc(Qs)){var e=[];lx(e,Qs,t,rm(t)),q1(w2,e)}}function E2(t,e,r){t==="focusin"?
(Uw(),Us=e,Qs=r,Us.attachEvent("onpropertychange",cx)):t==="focusout"&&Uw()}function _2(t){if(t==="s\
electionchange"||t==="keyup"||t==="keydown")return Pc(Qs)}function S2(t,e){if(t==="click")return Pc(
e)}function T2(t,e){if(t==="input"||t==="change")return Pc(e)}function k2(t,e){return t===e&&(t!==0||
1/t===1/e)||t!==t&&e!==e}var Pr=typeof Object.is=="function"?Object.is:k2;function Zs(t,e){if(Pr(t,e))
return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),
n=Object.keys(e);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!ih.call(e,i)||
!Pr(t[i],e[i]))return!1}return!0}function zw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jw(t,e){
var r=zw(t);t=0;for(var n;r;){if(r.nodeType===3){if(n=t+r.textContent.length,t<=e&&n>=e)return{node:r,
offset:e-t};t=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=zw(r)}}
function dx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dx(t,e.parentNode):"con\
tains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fx(){
for(var t=window,e=ic();e instanceof t.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.
href=="string"}catch{r=!1}if(r)t=e.contentWindow;else break;e=ic(t.document)}return e}function dm(t){
var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="se\
arch"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="tr\
ue")}function b2(t){var e=fx(),r=t.focusedElem,n=t.selectionRange;if(e!==r&&r&&r.ownerDocument&&dx(r.
ownerDocument.documentElement,r)){if(n!==null&&dm(r)){if(e=n.start,t=n.end,t===void 0&&(t=e),"select\
ionStart"in r)r.selectionStart=e,r.selectionEnd=Math.min(t,r.value.length);else if(t=(e=r.ownerDocument||
document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=r.textContent.length,a=Math.
min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!t.extend&&a>n&&(i=n,n=a,a=i),i=jw(r,a);var o=jw(
r,n);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||
t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),a>n?(t.
addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=r;t=t.
parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof r.focus==
"function"&&r.focus(),r=0;r<e.length;r++)t=e[r],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}
var C2=hn&&"documentMode"in document&&11>=document.documentMode,Ga=null,Sh=null,zs=null,Th=!1;function Hw(t,e,r){
var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Th||Ga==null||Ga!==ic(n)||(n=Ga,"sele\
ctionStart"in n&&dm(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.
defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.
focusNode,focusOffset:n.focusOffset}),zs&&Zs(zs,n)||(zs=n,n=dc(Sh,"onSelect"),0<n.length&&(e=new lm(
"onSelect","select",null,e,r),t.push({event:e,listeners:n}),e.target=Ga)))}function Lu(t,e){var r={};
return r[t.toLowerCase()]=e.toLowerCase(),r["Webkit"+t]="webkit"+e,r["Moz"+t]="moz"+e,r}var Xa={animationend:Lu(
"Animation","AnimationEnd"),animationiteration:Lu("Animation","AnimationIteration"),animationstart:Lu(
"Animation","AnimationStart"),transitionend:Lu("Transition","TransitionEnd")},Vp={},px={};hn&&(px=document.
createElement("div").style,"AnimationEvent"in window||(delete Xa.animationend.animation,delete Xa.animationiteration.
animation,delete Xa.animationstart.animation),"TransitionEvent"in window||delete Xa.transitionend.transition);
function Dc(t){if(Vp[t])return Vp[t];if(!Xa[t])return t;var e=Xa[t],r;for(r in e)if(e.hasOwnProperty(
r)&&r in px)return Vp[t]=e[r];return t}var hx=Dc("animationend"),mx=Dc("animationiteration"),gx=Dc("\
animationstart"),yx=Dc("transitionend"),vx=new Map,qw="abort auxClick cancel canPlay canPlayThrough \
click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop d\
urationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp l\
oad loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mo\
useUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerU\
p progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touc\
hEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function li(t,e){vx.set(
t,e),Ji(e,[t])}for(Uu=0;Uu<qw.length;Uu++)zu=qw[Uu],$w=zu.toLowerCase(),Vw=zu[0].toUpperCase()+zu.slice(
1),li($w,"on"+Vw);var zu,$w,Vw,Uu;li(hx,"onAnimationEnd");li(mx,"onAnimationIteration");li(gx,"onAni\
mationStart");li("dblclick","onDoubleClick");li("focusin","onFocus");li("focusout","onBlur");li(yx,"\
onTransitionEnd");uo("onMouseEnter",["mouseout","mouseover"]);uo("onMouseLeave",["mouseout","mouseov\
er"]);uo("onPointerEnter",["pointerout","pointerover"]);uo("onPointerLeave",["pointerout","pointerov\
er"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));
Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".
split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionE\
nd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","\
compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","co\
mpositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplay\
through durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play \
playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
" "),I2=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function Ww(t,e,r){
var n=t.type||"unknown-event";t.currentTarget=r,II(n,e,void 0,t),t.currentTarget=null}function wx(t,e){
e=(e&4)!==0;for(var r=0;r<t.length;r++){var n=t[r],i=n.event;n=n.listeners;e:{var a=void 0;if(e)for(var o=n.
length-1;0<=o;o--){var s=n[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())
break e;Ww(i,s,u),a=l}else for(o=0;o<n.length;o++){if(s=n[o],l=s.instance,u=s.currentTarget,s=s.listener,
l!==a&&i.isPropagationStopped())break e;Ww(i,s,u),a=l}}}if(oc)throw t=wh,oc=!1,wh=null,t}function Se(t,e){
var r=e[Rh];r===void 0&&(r=e[Rh]=new Set);var n=t+"__bubble";r.has(n)||(xx(e,t,2,!1),r.add(n))}function Wp(t,e,r){
var n=0;e&&(n|=4),xx(r,t,n,e)}var ju="_reactListening"+Math.random().toString(36).slice(2);function Js(t){
if(!t[ju]){t[ju]=!0,C1.forEach(function(r){r!=="selectionchange"&&(I2.has(r)||Wp(r,!1,t),Wp(r,!0,t))});
var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ju]||(e[ju]=!0,Wp("selectionchange",!1,e))}}function xx(t,e,r,n){
switch(nx(e)){case 1:var i=$I;break;case 4:i=VI;break;default:i=om}r=i.bind(null,e,r,t),i=void 0,!vh||
e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),n?i!==void 0?t.addEventListener(e,r,{capture:!0,
passive:i}):t.addEventListener(e,r,!0):i!==void 0?t.addEventListener(e,r,{passive:i}):t.addEventListener(
e,r,!1)}function Kp(t,e,r,n,i){var a=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.
tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;
if(o===4)for(o=n.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||
l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;s!==null;){if(o=qi(s),o===null)return;if(l=
o.tag,l===5||l===6){n=a=o;continue e}s=s.parentNode}}n=n.return}q1(function(){var u=a,c=rm(r),d=[];e:{
var f=vx.get(t);if(f!==void 0){var m=lm,w=t;switch(t){case"keypress":if(Yu(r)===0)break e;case"keydo\
wn":case"keyup":m=o2;break;case"focusin":w="focus",m=qp;break;case"focusout":w="blur",m=qp;break;case"\
beforeblur":case"afterblur":m=qp;break;case"click":if(r.button===2)break e;case"auxclick":case"dblcl\
ick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":
m=Nw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"\
dragstart":case"drop":m=GI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=
u2;break;case hx:case mx:case gx:m=QI;break;case yx:m=d2;break;case"scroll":m=WI;break;case"wheel":m=
p2;break;case"copy":case"cut":case"paste":m=JI;break;case"gotpointercapture":case"lostpointercapture":case"\
pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":
m=Bw}var g=(e&4)!==0,E=!g&&t==="scroll",p=g?f!==null?f+"Capture":null:f;g=[];for(var h=u,y;h!==null;){
y=h;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,p!==null&&(x=Ks(h,p),x!=null&&g.push(el(h,x,y)))),
E)break;h=h.return}0<g.length&&(f=new m(f,w,null,r,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{
if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&r!==gh&&(w=r.relatedTarget||
r.fromElement)&&(qi(w)||w[mn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||
f.parentWindow:window,m?(w=r.relatedTarget||r.toElement,m=u,w=w?qi(w):null,w!==null&&(E=ea(w),w!==E||
w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(g=Nw,x="onMouseLeave",p="onMouseEnter",h="m\
ouse",(t==="pointerout"||t==="pointerover")&&(g=Bw,x="onPointerLeave",p="onPointerEnter",h="pointer"),
E=m==null?f:Ya(m),y=w==null?f:Ya(w),f=new g(x,h+"leave",m,r,c),f.target=E,f.relatedTarget=y,x=null,qi(
c)===u&&(g=new g(p,h+"enter",w,r,c),g.target=y,g.relatedTarget=E,x=g),E=x,m&&w)t:{for(g=m,p=w,h=0,y=
g;y;y=$a(y))h++;for(y=0,x=p;x;x=$a(x))y++;for(;0<h-y;)g=$a(g),h--;for(;0<y-h;)p=$a(p),y--;for(;h--;){
if(g===p||p!==null&&g===p.alternate)break t;g=$a(g),p=$a(p)}g=null}else g=null;m!==null&&Kw(d,f,m,g,
!1),w!==null&&E!==null&&Kw(d,E,w,g,!0)}}e:{if(f=u?Ya(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),
m==="select"||m==="input"&&f.type==="file")var T=x2;else if(Lw(f))if(ux)T=T2;else{T=_2;var v=E2}else
(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=S2);if(T&&(T=
T(t,u))){lx(d,T,r,c);break e}v&&v(t,f,u),t==="focusout"&&(v=f._wrapperState)&&v.controlled&&f.type===
"number"&&dh(f,"number",f.value)}switch(v=u?Ya(u):window,t){case"focusin":(Lw(v)||v.contentEditable===
"true")&&(Ga=v,Sh=u,zs=null);break;case"focusout":zs=Sh=Ga=null;break;case"mousedown":Th=!0;break;case"\
contextmenu":case"mouseup":case"dragend":Th=!1,Hw(d,r,c);break;case"selectionchange":if(C2)break;case"\
keydown":case"keyup":Hw(d,r,c)}var S;if(cm)e:{switch(t){case"compositionstart":var C="onCompositionS\
tart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onComposi\
tionUpdate";break e}C=void 0}else Ka?ox(t,r)&&(C="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&
(C="onCompositionStart");C&&(ax&&r.locale!=="ko"&&(Ka||C!=="onCompositionStart"?C==="onCompositionEn\
d"&&Ka&&(S=ix()):(Yn=c,sm="value"in Yn?Yn.value:Yn.textContent,Ka=!0)),v=dc(u,C),0<v.length&&(C=new Fw(
C,t,null,r,c),d.push({event:C,listeners:v}),S?C.data=S:(S=sx(r),S!==null&&(C.data=S)))),(S=m2?g2(t,r):
y2(t,r))&&(u=dc(u,"onBeforeInput"),0<u.length&&(c=new Fw("onBeforeInput","beforeinput",null,r,c),d.push(
{event:c,listeners:u}),c.data=S))}wx(d,e)})}function el(t,e,r){return{instance:t,listener:e,currentTarget:r}}
function dc(t,e){for(var r=e+"Capture",n=[];t!==null;){var i=t,a=i.stateNode;i.tag===5&&a!==null&&(i=
a,a=Ks(t,r),a!=null&&n.unshift(el(t,a,i)),a=Ks(t,e),a!=null&&n.push(el(t,a,i))),t=t.return}return n}
function $a(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kw(t,e,r,n,i){
for(var a=e._reactName,o=[];r!==null&&r!==n;){var s=r,l=s.alternate,u=s.stateNode;if(l!==null&&l===n)
break;s.tag===5&&u!==null&&(s=u,i?(l=Ks(r,a),l!=null&&o.unshift(el(r,l,s))):i||(l=Ks(r,a),l!=null&&o.
push(el(r,l,s)))),r=r.return}o.length!==0&&t.push({event:e,listeners:o})}var R2=/\r\n?/g,P2=/\u0000|\uFFFD/g;
function Gw(t){return(typeof t=="string"?t:""+t).replace(R2,`
`).replace(P2,"")}function Hu(t,e,r){if(e=Gw(e),Gw(t)!==e&&r)throw Error(A(425))}function fc(){}var kh=null,
bh=null;function Ch(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.
children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.
dangerouslySetInnerHTML.__html!=null}var Ih=typeof setTimeout=="function"?setTimeout:void 0,D2=typeof clearTimeout==
"function"?clearTimeout:void 0,Xw=typeof Promise=="function"?Promise:void 0,A2=typeof queueMicrotask==
"function"?queueMicrotask:typeof Xw<"u"?function(t){return Xw.resolve(null).then(t).catch(N2)}:Ih;function N2(t){
setTimeout(function(){throw t})}function Gp(t,e){var r=e,n=0;do{var i=r.nextSibling;if(t.removeChild(
r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){t.removeChild(i),Ys(e);return}n--}else r!=="$"&&
r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ys(e)}function ti(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;
if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}
return t}function Yw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="\
$"||r==="$!"||r==="$?"){if(e===0)return t;e--}else r==="/$"&&e++}t=t.previousSibling}return null}var vo=Math.
random().toString(36).slice(2),$r="__reactFiber$"+vo,tl="__reactProps$"+vo,mn="__reactContainer$"+vo,
Rh="__reactEvents$"+vo,F2="__reactListeners$"+vo,B2="__reactHandles$"+vo;function qi(t){var e=t[$r];
if(e)return e;for(var r=t.parentNode;r;){if(e=r[mn]||r[$r]){if(r=e.alternate,e.child!==null||r!==null&&
r.child!==null)for(t=Yw(t);t!==null;){if(r=t[$r])return r;t=Yw(t)}return e}t=r,r=t.parentNode}return null}
function cl(t){return t=t[$r]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ya(t){
if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function Ac(t){return t[tl]||null}var Ph=[],
Qa=-1;function ui(t){return{current:t}}function Te(t){0>Qa||(t.current=Ph[Qa],Ph[Qa]=null,Qa--)}function xe(t,e){
Qa++,Ph[Qa]=t.current,t.current=e}var si={},wt=ui(si),Bt=ui(!1),Gi=si;function co(t,e){var r=t.type.
contextTypes;if(!r)return si;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===
e)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=e[a];return n&&(t=t.
stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=
i),i}function Mt(t){return t=t.childContextTypes,t!=null}function pc(){Te(Bt),Te(wt)}function Qw(t,e,r){
if(wt.current!==si)throw Error(A(168));xe(wt,e),xe(Bt,r)}function Ex(t,e,r){var n=t.stateNode;if(e=e.
childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)
if(!(i in e))throw Error(A(108,EI(t)||"Unknown",i));return Fe({},r,n)}function hc(t){return t=(t=t.stateNode)&&
t.__reactInternalMemoizedMergedChildContext||si,Gi=wt.current,xe(wt,t),xe(Bt,Bt.current),!0}function Zw(t,e,r){
var n=t.stateNode;if(!n)throw Error(A(169));r?(t=Ex(t,e,Gi),n.__reactInternalMemoizedMergedChildContext=
t,Te(Bt),Te(wt),xe(wt,t)):Te(Bt),xe(Bt,r)}var cn=null,Nc=!1,Xp=!1;function _x(t){cn===null?cn=[t]:cn.
push(t)}function M2(t){Nc=!0,_x(t)}function ci(){if(!Xp&&cn!==null){Xp=!0;var t=0,e=fe;try{var r=cn;
for(fe=1;t<r.length;t++){var n=r[t];do n=n(!0);while(n!==null)}cn=null,Nc=!1}catch(i){throw cn!==null&&
(cn=cn.slice(t+1)),K1(nm,ci),i}finally{fe=e,Xp=!1}}return null}var Za=[],Ja=0,mc=null,gc=0,or=[],sr=0,
Xi=null,dn=1,fn="";function ji(t,e){Za[Ja++]=gc,Za[Ja++]=mc,mc=t,gc=e}function Sx(t,e,r){or[sr++]=dn,
or[sr++]=fn,or[sr++]=Xi,Xi=t;var n=dn;t=fn;var i=32-Ir(n)-1;n&=~(1<<i),r+=1;var a=32-Ir(e)+i;if(30<a){
var o=i-i%5;a=(n&(1<<o)-1).toString(32),n>>=o,i-=o,dn=1<<32-Ir(e)+i|r<<i|n,fn=a+t}else dn=1<<a|r<<i|
n,fn=t}function fm(t){t.return!==null&&(ji(t,1),Sx(t,1,0))}function pm(t){for(;t===mc;)mc=Za[--Ja],Za[Ja]=
null,gc=Za[--Ja],Za[Ja]=null;for(;t===Xi;)Xi=or[--sr],or[sr]=null,fn=or[--sr],or[sr]=null,dn=or[--sr],
or[sr]=null}var Kt=null,Wt=null,Ie=!1,Cr=null;function Tx(t,e){var r=lr(5,null,null,0);r.elementType=
"DELETED",r.stateNode=e,r.return=t,e=t.deletions,e===null?(t.deletions=[r],t.flags|=16):e.push(r)}function Jw(t,e){
switch(t.tag){case 5:var r=t.type;return e=e.nodeType!==1||r.toLowerCase()!==e.nodeName.toLowerCase()?
null:e,e!==null?(t.stateNode=e,Kt=t,Wt=ti(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||
e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Kt=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:
e,e!==null?(r=Xi!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:r,retryLane:1073741824},
r=lr(18,null,null,0),r.stateNode=e,r.return=t,t.child=r,Kt=t,Wt=null,!0):!1;default:return!1}}function Dh(t){
return(t.mode&1)!==0&&(t.flags&128)===0}function Ah(t){if(Ie){var e=Wt;if(e){var r=e;if(!Jw(t,e)){if(Dh(
t))throw Error(A(418));e=ti(r.nextSibling);var n=Kt;e&&Jw(t,e)?Tx(n,r):(t.flags=t.flags&-4097|2,Ie=!1,
Kt=t)}}else{if(Dh(t))throw Error(A(418));t.flags=t.flags&-4097|2,Ie=!1,Kt=t}}}function e1(t){for(t=t.
return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kt=t}function qu(t){if(t!==Kt)return!1;
if(!Ie)return e1(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="bo\
dy"&&!Ch(t.type,t.memoizedProps)),e&&(e=Wt)){if(Dh(t))throw kx(),Error(A(418));for(;e;)Tx(t,e),e=ti(
e.nextSibling)}if(e1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(
A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"){if(e===0){Wt=ti(
t.nextSibling);break e}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=Kt?
ti(t.stateNode.nextSibling):null;return!0}function kx(){for(var t=Wt;t;)t=ti(t.nextSibling)}function fo(){
Wt=Kt=null,Ie=!1}function hm(t){Cr===null?Cr=[t]:Cr.push(t)}var O2=vn.ReactCurrentBatchConfig;function kr(t,e){
if(t&&t.defaultProps){e=Fe({},e),t=t.defaultProps;for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e}
return e}var yc=ui(null),vc=null,eo=null,mm=null;function gm(){mm=eo=vc=null}function ym(t){var e=yc.
current;Te(yc),t._currentValue=e}function Nh(t,e,r){for(;t!==null;){var n=t.alternate;if((t.childLanes&
e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=
e),t===r)break;t=t.return}}function so(t,e){vc=t,mm=eo=null,t=t.dependencies,t!==null&&t.firstContext!==
null&&(t.lanes&e&&(Ft=!0),t.firstContext=null)}function cr(t){var e=t._currentValue;if(mm!==t)if(t={
context:t,memoizedValue:e,next:null},eo===null){if(vc===null)throw Error(A(308));eo=t,vc.dependencies=
{lanes:0,firstContext:t}}else eo=eo.next=t;return e}var $i=null;function vm(t){$i===null?$i=[t]:$i.push(
t)}function bx(t,e,r,n){var i=e.interleaved;return i===null?(r.next=r,vm(e)):(r.next=i.next,i.next=r),
e.interleaved=r,gn(t,n)}function gn(t,e){t.lanes|=e;var r=t.alternate;for(r!==null&&(r.lanes|=e),r=t,
t=t.return;t!==null;)t.childLanes|=e,r=t.alternate,r!==null&&(r.childLanes|=e),r=t,t=t.return;return r.
tag===3?r.stateNode:null}var Kn=!1;function wm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,
lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cx(t,e){t=
t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,
lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,
lane:e,tag:0,payload:null,callback:null,next:null}}function ri(t,e,r){var n=t.updateQueue;if(n===null)
return null;if(n=n.shared,ue&2){var i=n.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),n.
pending=e,gn(t,r)}return i=n.interleaved,i===null?(e.next=e,vm(n)):(e.next=i.next,i.next=e),n.interleaved=
e,gn(t,r)}function Qu(t,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194240)!==0)){var n=e.lanes;
n&=t.pendingLanes,r|=n,e.lanes=r,im(t,r)}}function t1(t,e){var r=t.updateQueue,n=t.alternate;if(n!==
null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var o={eventTime:r.
eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=o:a=a.
next=o,r=r.next}while(r!==null);a===null?i=a=e:a=a.next=e}else i=a=e;r={baseState:n.baseState,firstBaseUpdate:i,
lastBaseUpdate:a,shared:n.shared,effects:n.effects},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?
r.firstBaseUpdate=e:t.next=e,r.lastBaseUpdate=e}function wc(t,e,r,n){var i=t.updateQueue;Kn=!1;var a=i.
firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var l=s,u=l.
next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,
s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;o=
0,c=u=l=null,s=a;do{var f=s.lane,m=s.eventTime;if((n&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,
tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=t,g=s;switch(f=e,m=r,g.tag){case 1:
if(w=g.payload,typeof w=="function"){d=w.call(m,d,f);break e}d=w;break e;case 3:w.flags=w.flags&-65537|
128;case 0:if(w=g.payload,f=typeof w=="function"?w.call(m,d,f):w,f==null)break e;d=Fe({},d,f);break e;case 2:
Kn=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else
m={eventTime:m,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=m,l=d):
c=c.next=m,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,
i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=
u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else a===
null&&(i.shared.lanes=0);Qi|=o,t.lanes=o,t.memoizedState=d}}function r1(t,e,r){if(t=e.effects,e.effects=
null,t!==null)for(e=0;e<t.length;e++){var n=t[e],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!=
"function")throw Error(A(191,i));i.call(n)}}}var Ix=new b1.Component().refs;function Fh(t,e,r,n){e=t.
memoizedState,r=r(n,e),r=r==null?e:Fe({},e,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=
r)}var Fc={isMounted:function(t){return(t=t._reactInternals)?ea(t)===t:!1},enqueueSetState:function(t,e,r){
t=t._reactInternals;var n=bt(),i=ii(t),a=pn(n,i);a.payload=e,r!=null&&(a.callback=r),e=ri(t,a,i),e!==
null&&(Rr(e,t,i,n),Qu(e,t,i))},enqueueReplaceState:function(t,e,r){t=t._reactInternals;var n=bt(),i=ii(
t),a=pn(n,i);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=ri(t,a,i),e!==null&&(Rr(e,t,i,n),Qu(e,t,i))},
enqueueForceUpdate:function(t,e){t=t._reactInternals;var r=bt(),n=ii(t),i=pn(r,n);i.tag=2,e!=null&&(i.
callback=e),e=ri(t,i,n),e!==null&&(Rr(e,t,n,r),Qu(e,t,n))}};function n1(t,e,r,n,i,a,o){return t=t.stateNode,
typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,a,o):e.prototype&&e.prototype.isPureReactComponent?
!Zs(r,n)||!Zs(i,a):!0}function Rx(t,e,r){var n=!1,i=si,a=e.contextType;return typeof a=="object"&&a!==
null?a=cr(a):(i=Mt(e)?Gi:wt.current,n=e.contextTypes,a=(n=n!=null)?co(t,i):si),e=new e(r,a),t.memoizedState=
e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fc,t.stateNode=e,e._reactInternals=t,n&&(t=t.
stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=
a),e}function i1(t,e,r,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(
r,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,n),
e.state!==t&&Fc.enqueueReplaceState(e,e.state,null)}function Bh(t,e,r,n){var i=t.stateNode;i.props=r,
i.state=t.memoizedState,i.refs=Ix,wm(t);var a=e.contextType;typeof a=="object"&&a!==null?i.context=cr(
a):(a=Mt(e)?Gi:wt.current,i.context=co(t,a)),i.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a==
"function"&&(Fh(t,e,a,r),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.
getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!=
"function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==
"function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fc.enqueueReplaceState(i,i.state,null),wc(t,r,
i,n),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e,r){
if(t=r.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==
1)throw Error(A(309));var n=r.stateNode}if(!n)throw Error(A(147,t));var i=n,a=""+t;return e!==null&&
e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=i.refs;s===Ix&&
(s=i.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(A(284));
if(!r._owner)throw Error(A(290,t))}return t}function $u(t,e){throw t=Object.prototype.toString.call(
e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function a1(t){
var e=t._init;return e(t._payload)}function Px(t){function e(p,h){if(t){var y=p.deletions;y===null?(p.
deletions=[h],p.flags|=16):y.push(h)}}function r(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;
return null}function n(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.
sibling;return p}function i(p,h){return p=ai(p,h),p.index=0,p.sibling=null,p}function a(p,h,y){return p.
index=y,t?(y=p.alternate,y!==null?(y=y.index,y<h?(p.flags|=2,h):y):(p.flags|=2,h)):(p.flags|=1048576,
h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function s(p,h,y,x){return h===null||h.
tag!==6?(h=rh(y,p.mode,x),h.return=p,h):(h=i(h,y),h.return=p,h)}function l(p,h,y,x){var T=y.type;return T===
Wa?c(p,h,y.props.children,x,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===
Wn&&a1(T)===h.type)?(x=i(h,y.props),x.ref=Is(p,h,y),x.return=p,x):(x=nc(y.type,y.key,y.props,null,p.
mode,x),x.ref=Is(p,h,y),x.return=p,x)}function u(p,h,y,x){return h===null||h.tag!==4||h.stateNode.containerInfo!==
y.containerInfo||h.stateNode.implementation!==y.implementation?(h=nh(y,p.mode,x),h.return=p,h):(h=i(
h,y.children||[]),h.return=p,h)}function c(p,h,y,x,T){return h===null||h.tag!==7?(h=Ki(y,p.mode,x,T),
h.return=p,h):(h=i(h,y),h.return=p,h)}function d(p,h,y){if(typeof h=="string"&&h!==""||typeof h=="nu\
mber")return h=rh(""+h,p.mode,y),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ru:
return y=nc(h.type,h.key,h.props,null,p.mode,y),y.ref=Is(p,null,h),y.return=p,y;case Va:return h=nh(
h,p.mode,y),h.return=p,h;case Wn:var x=h._init;return d(p,x(h._payload),y)}if(Ns(h)||Ts(h))return h=
Ki(h,p.mode,y,null),h.return=p,h;$u(p,h)}return null}function f(p,h,y,x){var T=h!==null?h.key:null;if(typeof y==
"string"&&y!==""||typeof y=="number")return T!==null?null:s(p,h,""+y,x);if(typeof y=="object"&&y!==null){
switch(y.$$typeof){case Ru:return y.key===T?l(p,h,y,x):null;case Va:return y.key===T?u(p,h,y,x):null;case Wn:
return T=y._init,f(p,h,T(y._payload),x)}if(Ns(y)||Ts(y))return T!==null?null:c(p,h,y,x,null);$u(p,y)}
return null}function m(p,h,y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(y)||
null,s(h,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ru:return p=p.get(x.key===
null?y:x.key)||null,l(h,p,x,T);case Va:return p=p.get(x.key===null?y:x.key)||null,u(h,p,x,T);case Wn:
var v=x._init;return m(p,h,y,v(x._payload),T)}if(Ns(x)||Ts(x))return p=p.get(y)||null,c(h,p,x,T,null);
$u(h,x)}return null}function w(p,h,y,x){for(var T=null,v=null,S=h,C=h=0,D=null;S!==null&&C<y.length;C++){
S.index>C?(D=S,S=null):D=S.sibling;var F=f(p,S,y[C],x);if(F===null){S===null&&(S=D);break}t&&S&&F.alternate===
null&&e(p,S),h=a(F,h,C),v===null?T=F:v.sibling=F,v=F,S=D}if(C===y.length)return r(p,S),Ie&&ji(p,C),T;
if(S===null){for(;C<y.length;C++)S=d(p,y[C],x),S!==null&&(h=a(S,h,C),v===null?T=S:v.sibling=S,v=S);return Ie&&
ji(p,C),T}for(S=n(p,S);C<y.length;C++)D=m(S,p,C,y[C],x),D!==null&&(t&&D.alternate!==null&&S.delete(D.
key===null?C:D.key),h=a(D,h,C),v===null?T=D:v.sibling=D,v=D);return t&&S.forEach(function(L){return e(
p,L)}),Ie&&ji(p,C),T}function g(p,h,y,x){var T=Ts(y);if(typeof T!="function")throw Error(A(150));if(y=
T.call(y),y==null)throw Error(A(151));for(var v=T=null,S=h,C=h=0,D=null,F=y.next();S!==null&&!F.done;C++,
F=y.next()){S.index>C?(D=S,S=null):D=S.sibling;var L=f(p,S,F.value,x);if(L===null){S===null&&(S=D);break}
t&&S&&L.alternate===null&&e(p,S),h=a(L,h,C),v===null?T=L:v.sibling=L,v=L,S=D}if(F.done)return r(p,S),
Ie&&ji(p,C),T;if(S===null){for(;!F.done;C++,F=y.next())F=d(p,F.value,x),F!==null&&(h=a(F,h,C),v===null?
T=F:v.sibling=F,v=F);return Ie&&ji(p,C),T}for(S=n(p,S);!F.done;C++,F=y.next())F=m(S,p,C,F.value,x),F!==
null&&(t&&F.alternate!==null&&S.delete(F.key===null?C:F.key),h=a(F,h,C),v===null?T=F:v.sibling=F,v=F);
return t&&S.forEach(function(de){return e(p,de)}),Ie&&ji(p,C),T}function E(p,h,y,x){if(typeof y=="ob\
ject"&&y!==null&&y.type===Wa&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.
$$typeof){case Ru:e:{for(var T=y.key,v=h;v!==null;){if(v.key===T){if(T=y.type,T===Wa){if(v.tag===7){
r(p,v.sibling),h=i(v,y.props.children),h.return=p,p=h;break e}}else if(v.elementType===T||typeof T==
"object"&&T!==null&&T.$$typeof===Wn&&a1(T)===v.type){r(p,v.sibling),h=i(v,y.props),h.ref=Is(p,v,y),h.
return=p,p=h;break e}r(p,v);break}else e(p,v);v=v.sibling}y.type===Wa?(h=Ki(y.props.children,p.mode,
x,y.key),h.return=p,p=h):(x=nc(y.type,y.key,y.props,null,p.mode,x),x.ref=Is(p,h,y),x.return=p,p=x)}return o(
p);case Va:e:{for(v=y.key;h!==null;){if(h.key===v)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&
h.stateNode.implementation===y.implementation){r(p,h.sibling),h=i(h,y.children||[]),h.return=p,p=h;break e}else{
r(p,h);break}else e(p,h);h=h.sibling}h=nh(y,p.mode,x),h.return=p,p=h}return o(p);case Wn:return v=y.
_init,E(p,h,v(y._payload),x)}if(Ns(y))return w(p,h,y,x);if(Ts(y))return g(p,h,y,x);$u(p,y)}return typeof y==
"string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(r(p,h.sibling),h=i(h,y),h.return=p,
p=h):(r(p,h),h=rh(y,p.mode,x),h.return=p,p=h),o(p)):r(p,h)}return E}var po=Px(!0),Dx=Px(!1),dl={},Wr=ui(
dl),rl=ui(dl),nl=ui(dl);function Vi(t){if(t===dl)throw Error(A(174));return t}function xm(t,e){switch(xe(
nl,e),xe(rl,t),xe(Wr,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ph(null,
"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ph(e,t)}Te(Wr),xe(Wr,e)}
function ho(){Te(Wr),Te(rl),Te(nl)}function Ax(t){Vi(nl.current);var e=Vi(Wr.current),r=ph(e,t.type);
e!==r&&(xe(rl,t),xe(Wr,r))}function Em(t){rl.current===t&&(Te(Wr),Te(rl))}var Ae=ui(0);function xc(t){
for(var e=t;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.
data==="$?"||r.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.
flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.
sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=
e.sibling}return null}var Yp=[];function _m(){for(var t=0;t<Yp.length;t++)Yp[t]._workInProgressVersionPrimary=
null;Yp.length=0}var Zu=vn.ReactCurrentDispatcher,Qp=vn.ReactCurrentBatchConfig,Yi=0,Ne=null,Ye=null,
rt=null,Ec=!1,js=!1,il=0,L2=0;function gt(){throw Error(A(321))}function Sm(t,e){if(e===null)return!1;
for(var r=0;r<e.length&&r<t.length;r++)if(!Pr(t[r],e[r]))return!1;return!0}function Tm(t,e,r,n,i,a){
if(Yi=a,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zu.current=t===null||t.memoizedState===
null?H2:q2,t=r(n,i),js){a=0;do{if(js=!1,il=0,25<=a)throw Error(A(301));a+=1,rt=Ye=null,e.updateQueue=
null,Zu.current=$2,t=r(n,i)}while(js)}if(Zu.current=_c,e=Ye!==null&&Ye.next!==null,Yi=0,rt=Ye=Ne=null,
Ec=!1,e)throw Error(A(300));return t}function km(){var t=il!==0;return il=0,t}function qr(){var t={memoizedState:null,
baseState:null,baseQueue:null,queue:null,next:null};return rt===null?Ne.memoizedState=rt=t:rt=rt.next=
t,rt}function dr(){if(Ye===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=rt===
null?Ne.memoizedState:rt.next;if(e!==null)rt=e,Ye=t;else{if(t===null)throw Error(A(310));Ye=t,t={memoizedState:Ye.
memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},rt===null?Ne.memoizedState=
rt=t:rt=rt.next=t}return rt}function al(t,e){return typeof e=="function"?e(t):e}function Zp(t){var e=dr(),
r=e.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=t;var n=Ye,i=n.baseQueue,a=r.pending;
if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}n.baseQueue=i=a,r.pending=null}if(i!==
null){a=i.next,n=n.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Yi&c)===c)l!==null&&(l=l.next=
{lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?
u.eagerState:t(n,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.
eagerState,next:null};l===null?(s=l=d,o=n):l=l.next=d,Ne.lanes|=c,Qi|=c}u=u.next}while(u!==null&&u!==
a);l===null?o=n:l.next=s,Pr(n,e.memoizedState)||(Ft=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=
l,r.lastRenderedState=n}if(t=r.interleaved,t!==null){i=t;do a=i.lane,Ne.lanes|=a,Qi|=a,i=i.next;while(i!==
t)}else i===null&&(r.lanes=0);return[e.memoizedState,r.dispatch]}function Jp(t){var e=dr(),r=e.queue;
if(r===null)throw Error(A(311));r.lastRenderedReducer=t;var n=r.dispatch,i=r.pending,a=e.memoizedState;
if(i!==null){r.pending=null;var o=i=i.next;do a=t(a,o.action),o=o.next;while(o!==i);Pr(a,e.memoizedState)||
(Ft=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),r.lastRenderedState=a}return[a,n]}function Nx(){}
function Fx(t,e){var r=Ne,n=dr(),i=e(),a=!Pr(n.memoizedState,i);if(a&&(n.memoizedState=i,Ft=!0),n=n.
queue,bm(Ox.bind(null,r,n,t),[t]),n.getSnapshot!==e||a||rt!==null&&rt.memoizedState.tag&1){if(r.flags|=
2048,ol(9,Mx.bind(null,r,n,i,e),void 0,null),nt===null)throw Error(A(349));Yi&30||Bx(r,e,i)}return i}
function Bx(t,e,r){t.flags|=16384,t={getSnapshot:e,value:r},e=Ne.updateQueue,e===null?(e={lastEffect:null,
stores:null},Ne.updateQueue=e,e.stores=[t]):(r=e.stores,r===null?e.stores=[t]:r.push(t))}function Mx(t,e,r,n){
e.value=r,e.getSnapshot=n,Lx(e)&&Ux(t)}function Ox(t,e,r){return r(function(){Lx(e)&&Ux(t)})}function Lx(t){
var e=t.getSnapshot;t=t.value;try{var r=e();return!Pr(t,r)}catch{return!0}}function Ux(t){var e=gn(t,
1);e!==null&&Rr(e,t,1,-1)}function o1(t){var e=qr();return typeof t=="function"&&(t=t()),e.memoizedState=
e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:al,lastRenderedState:t},
e.queue=t,t=t.dispatch=j2.bind(null,Ne,t),[e.memoizedState,t]}function ol(t,e,r,n){return t={tag:t,create:e,
destroy:r,deps:n,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=
e,e.lastEffect=t.next=t):(r=e.lastEffect,r===null?e.lastEffect=t.next=t:(n=r.next,r.next=t,t.next=n,
e.lastEffect=t)),t}function zx(){return dr().memoizedState}function Ju(t,e,r,n){var i=qr();Ne.flags|=
t,i.memoizedState=ol(1|e,r,void 0,n===void 0?null:n)}function Bc(t,e,r,n){var i=dr();n=n===void 0?null:
n;var a=void 0;if(Ye!==null){var o=Ye.memoizedState;if(a=o.destroy,n!==null&&Sm(n,o.deps)){i.memoizedState=
ol(e,r,a,n);return}}Ne.flags|=t,i.memoizedState=ol(1|e,r,a,n)}function s1(t,e){return Ju(8390656,8,t,
e)}function bm(t,e){return Bc(2048,8,t,e)}function jx(t,e){return Bc(4,2,t,e)}function Hx(t,e){return Bc(
4,4,t,e)}function qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=
t(),e.current=t,function(){e.current=null}}function $x(t,e,r){return r=r!=null?r.concat([t]):null,Bc(
4,4,qx.bind(null,e,t),r)}function Cm(){}function Vx(t,e){var r=dr();e=e===void 0?null:e;var n=r.memoizedState;
return n!==null&&e!==null&&Sm(e,n[1])?n[0]:(r.memoizedState=[t,e],t)}function Wx(t,e){var r=dr();e=e===
void 0?null:e;var n=r.memoizedState;return n!==null&&e!==null&&Sm(e,n[1])?n[0]:(t=t(),r.memoizedState=
[t,e],t)}function Kx(t,e,r){return Yi&21?(Pr(r,e)||(r=Y1(),Ne.lanes|=r,Qi|=r,t.baseState=!0),e):(t.baseState&&
(t.baseState=!1,Ft=!0),t.memoizedState=r)}function U2(t,e){var r=fe;fe=r!==0&&4>r?r:4,t(!0);var n=Qp.
transition;Qp.transition={};try{t(!1),e()}finally{fe=r,Qp.transition=n}}function Gx(){return dr().memoizedState}
function z2(t,e,r){var n=ii(t);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Xx(
t))Yx(e,r);else if(r=bx(t,e,r,n),r!==null){var i=bt();Rr(r,t,n,i),Qx(r,e,n)}}function j2(t,e,r){var n=ii(
t),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Xx(t))Yx(e,i);else{var a=t.alternate;
if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,
s=a(o,r);if(i.hasEagerState=!0,i.eagerState=s,Pr(s,o)){var l=e.interleaved;l===null?(i.next=i,vm(e)):
(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}r=bx(t,e,i,n),r!==null&&(i=bt(),Rr(
r,t,n,i),Qx(r,e,n))}}function Xx(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Yx(t,e){
js=Ec=!0;var r=t.pending;r===null?e.next=e:(e.next=r.next,r.next=e),t.pending=e}function Qx(t,e,r){if(r&
4194240){var n=e.lanes;n&=t.pendingLanes,r|=n,e.lanes=r,im(t,r)}}var _c={readContext:cr,useCallback:gt,
useContext:gt,useEffect:gt,useImperativeHandle:gt,useInsertionEffect:gt,useLayoutEffect:gt,useMemo:gt,
useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useMutableSource:gt,
useSyncExternalStore:gt,useId:gt,unstable_isNewReconciler:!1},H2={readContext:cr,useCallback:function(t,e){
return qr().memoizedState=[t,e===void 0?null:e],t},useContext:cr,useEffect:s1,useImperativeHandle:function(t,e,r){
return r=r!=null?r.concat([t]):null,Ju(4194308,4,qx.bind(null,e,t),r)},useLayoutEffect:function(t,e){
return Ju(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ju(4,2,t,e)},useMemo:function(t,e){
var r=qr();return e=e===void 0?null:e,t=t(),r.memoizedState=[t,e],t},useReducer:function(t,e,r){var n=qr();
return e=r!==void 0?r(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,
lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=z2.bind(null,Ne,t),[n.memoizedState,
t]},useRef:function(t){var e=qr();return t={current:t},e.memoizedState=t},useState:o1,useDebugValue:Cm,
useDeferredValue:function(t){return qr().memoizedState=t},useTransition:function(){var t=o1(!1),e=t[0];
return t=U2.bind(null,t[1]),qr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,r){
var n=Ne,i=qr();if(Ie){if(r===void 0)throw Error(A(407));r=r()}else{if(r=e(),nt===null)throw Error(A(
349));Yi&30||Bx(n,e,r)}i.memoizedState=r;var a={value:r,getSnapshot:e};return i.queue=a,s1(Ox.bind(null,
n,a,t),[t]),n.flags|=2048,ol(9,Mx.bind(null,n,a,r,e),void 0,null),r},useId:function(){var t=qr(),e=nt.
identifierPrefix;if(Ie){var r=fn,n=dn;r=(n&~(1<<32-Ir(n)-1)).toString(32)+r,e=":"+e+"R"+r,r=il++,0<r&&
(e+="H"+r.toString(32)),e+=":"}else r=L2++,e=":"+e+"r"+r.toString(32)+":";return t.memoizedState=e},
unstable_isNewReconciler:!1},q2={readContext:cr,useCallback:Vx,useContext:cr,useEffect:bm,useImperativeHandle:$x,
useInsertionEffect:jx,useLayoutEffect:Hx,useMemo:Wx,useReducer:Zp,useRef:zx,useState:function(){return Zp(
al)},useDebugValue:Cm,useDeferredValue:function(t){var e=dr();return Kx(e,Ye.memoizedState,t)},useTransition:function(){
var t=Zp(al)[0],e=dr().memoizedState;return[t,e]},useMutableSource:Nx,useSyncExternalStore:Fx,useId:Gx,
unstable_isNewReconciler:!1},$2={readContext:cr,useCallback:Vx,useContext:cr,useEffect:bm,useImperativeHandle:$x,
useInsertionEffect:jx,useLayoutEffect:Hx,useMemo:Wx,useReducer:Jp,useRef:zx,useState:function(){return Jp(
al)},useDebugValue:Cm,useDeferredValue:function(t){var e=dr();return Ye===null?e.memoizedState=t:Kx(
e,Ye.memoizedState,t)},useTransition:function(){var t=Jp(al)[0],e=dr().memoizedState;return[t,e]},useMutableSource:Nx,
useSyncExternalStore:Fx,useId:Gx,unstable_isNewReconciler:!1};function mo(t,e){try{var r="",n=e;do r+=
xI(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:i,digest:null}}function eh(t,e,r){return{value:t,source:null,
stack:r??null,digest:e??null}}function Mh(t,e){try{console.error(e.value)}catch(r){setTimeout(function(){
throw r})}}var V2=typeof WeakMap=="function"?WeakMap:Map;function Zx(t,e,r){r=pn(-1,r),r.tag=3,r.payload=
{element:null};var n=e.value;return r.callback=function(){Tc||(Tc=!0,Wh=n),Mh(t,e)},r}function Jx(t,e,r){
r=pn(-1,r),r.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;r.payload=
function(){return n(i)},r.callback=function(){Mh(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch==
"function"&&(r.callback=function(){Mh(t,e),typeof n!="function"&&(ni===null?ni=new Set([this]):ni.add(
this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),r}function l1(t,e,r){
var n=t.pingCache;if(n===null){n=t.pingCache=new V2;var i=new Set;n.set(e,i)}else i=n.get(e),i===void 0&&
(i=new Set,n.set(e,i));i.has(r)||(i.add(r),t=aR.bind(null,t,e,r),e.then(t,t))}function u1(t){do{var e;
if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==
null);return null}function c1(t,e,r,n,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=
65536:(t.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(e=pn(-1,
1),e.tag=2,ri(r,e,1))),r.lanes|=1),t)}var W2=vn.ReactCurrentOwner,Ft=!1;function kt(t,e,r,n){e.child=
t===null?Dx(e,null,r,n):po(e,t.child,r,n)}function d1(t,e,r,n,i){r=r.render;var a=e.ref;return so(e,
i),n=Tm(t,e,r,n,a,i),r=km(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(
t,e,i)):(Ie&&r&&fm(e),e.flags|=1,kt(t,e,n,i),e.child)}function f1(t,e,r,n,i){if(t===null){var a=r.type;
return typeof a=="function"&&!Bm(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?
(e.tag=15,e.type=a,eE(t,e,a,n,i)):(t=nc(r.type,null,n,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}
if(a=t.child,!(t.lanes&i)){var o=a.memoizedProps;if(r=r.compare,r=r!==null?r:Zs,r(o,n)&&t.ref===e.ref)
return yn(t,e,i)}return e.flags|=1,t=ai(a,n),t.ref=e.ref,t.return=e,e.child=t}function eE(t,e,r,n,i){
if(t!==null){var a=t.memoizedProps;if(Zs(a,n)&&t.ref===e.ref)if(Ft=!1,e.pendingProps=n=a,(t.lanes&i)!==
0)t.flags&131072&&(Ft=!0);else return e.lanes=t.lanes,yn(t,e,i)}return Oh(t,e,r,n,i)}function tE(t,e,r){
var n=e.pendingProps,i=n.children,a=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))
e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(ro,Vt),Vt|=r;else{if(!(r&1073741824))
return t=a!==null?a.baseLanes|r:r,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,
transitions:null},e.updateQueue=null,xe(ro,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,
transitions:null},n=a!==null?a.baseLanes:r,xe(ro,Vt),Vt|=n}else a!==null?(n=a.baseLanes|r,e.memoizedState=
null):n=r,xe(ro,Vt),Vt|=n;return kt(t,e,i,r),e.child}function rE(t,e){var r=e.ref;(t===null&&r!==null||
t!==null&&t.ref!==r)&&(e.flags|=512,e.flags|=2097152)}function Oh(t,e,r,n,i){var a=Mt(r)?Gi:wt.current;
return a=co(e,a),so(e,i),r=Tm(t,e,r,n,a,i),n=km(),t!==null&&!Ft?(e.updateQueue=t.updateQueue,e.flags&=
-2053,t.lanes&=~i,yn(t,e,i)):(Ie&&n&&fm(e),e.flags|=1,kt(t,e,r,i),e.child)}function p1(t,e,r,n,i){if(Mt(
r)){var a=!0;hc(e)}else a=!1;if(so(e,i),e.stateNode===null)ec(t,e),Rx(e,r,n),Bh(e,r,n,i),n=!0;else if(t===
null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=r.contextType;typeof u=="objec\
t"&&u!==null?u=cr(u):(u=Mt(r)?Gi:wt.current,u=co(e,u));var c=r.getDerivedStateFromProps,d=typeof c==
"function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!=
"function"&&typeof o.componentWillReceiveProps!="function"||(s!==n||l!==u)&&i1(e,o,n,u),Kn=!1;var f=e.
memoizedState;o.state=f,wc(e,n,o,i),l=e.memoizedState,s!==n||f!==l||Bt.current||Kn?(typeof c=="funct\
ion"&&(Fh(e,r,c,n),l=e.memoizedState),(s=Kn||n1(e,r,s,n,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!=
"function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),
typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==
"function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=
n,e.memoizedState=l),o.props=n,o.state=l,o.context=u,n=s):(typeof o.componentDidMount=="function"&&(e.
flags|=4194308),n=!1)}else{o=e.stateNode,Cx(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:kr(e.type,
s),o.props=u,d=e.pendingProps,f=o.context,l=r.contextType,typeof l=="object"&&l!==null?l=cr(l):(l=Mt(
r)?Gi:wt.current,l=co(e,l));var m=r.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate==
"function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!=
"function"||(s!==d||f!==l)&&i1(e,o,n,l),Kn=!1,f=e.memoizedState,o.state=f,wc(e,n,o,i);var w=e.memoizedState;
s!==d||f!==w||Bt.current||Kn?(typeof m=="function"&&(Fh(e,r,m,n),w=e.memoizedState),(u=Kn||n1(e,r,u,
n,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="fu\
nction"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,w,l),typeof o.UNSAFE_componentWillUpdate==
"function"&&o.UNSAFE_componentWillUpdate(n,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=
4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="fun\
ction"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="fu\
nction"||s===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=
w),o.props=n,o.state=w,o.context=l,n=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&
f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&
f===t.memoizedState||(e.flags|=1024),n=!1)}return Lh(t,e,r,n,a,i)}function Lh(t,e,r,n,i,a){rE(t,e);var o=(e.
flags&128)!==0;if(!n&&!o)return i&&Zw(e,r,!1),yn(t,e,a);n=e.stateNode,W2.current=e;var s=o&&typeof r.
getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=po(e,t.child,
null,a),e.child=po(e,null,s,a)):kt(t,e,s,a),e.memoizedState=n.state,i&&Zw(e,r,!0),e.child}function nE(t){
var e=t.stateNode;e.pendingContext?Qw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qw(
t,e.context,!1),xm(t,e.containerInfo)}function h1(t,e,r,n,i){return fo(),hm(i),e.flags|=256,kt(t,e,r,
n),e.child}var Uh={dehydrated:null,treeContext:null,retryLane:0};function zh(t){return{baseLanes:t,cachePool:null,
transitions:null}}function iE(t,e,r){var n=e.pendingProps,i=Ae.current,a=!1,o=(e.flags&128)!==0,s;if((s=
o)||(s=t!==null&&t.memoizedState===null?!1:(i&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==
null)&&(i|=1),xe(Ae,i&1),t===null)return Ah(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?
(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,t=n.fallback,a?(n=
e.mode,a=e.child,o={mode:"hidden",children:o},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Lc(
o,n,0,null),t=Ki(t,n,r,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=zh(r),
e.memoizedState=Uh,t):Im(e,o));if(i=t.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return K2(t,
e,o,n,s,i,r);if(a){a=n.fallback,o=e.mode,i=t.child,s=i.sibling;var l={mode:"hidden",children:n.children};
return!(o&1)&&e.child!==i?(n=e.child,n.childLanes=0,n.pendingProps=l,e.deletions=null):(n=ai(i,l),n.
subtreeFlags=i.subtreeFlags&14680064),s!==null?a=ai(s,a):(a=Ki(a,o,r,null),a.flags|=2),a.return=e,n.
return=e,n.sibling=a,e.child=n,n=a,a=e.child,o=t.child.memoizedState,o=o===null?zh(r):{baseLanes:o.baseLanes|
r,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~r,e.memoizedState=
Uh,n}return a=t.child,t=a.sibling,n=ai(a,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=
r),n.return=e,n.sibling=null,t!==null&&(r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(
t)),e.child=n,e.memoizedState=null,n}function Im(t,e){return e=Lc({mode:"visible",children:e},t.mode,
0,null),e.return=t,t.child=e}function Vu(t,e,r,n){return n!==null&&hm(n),po(e,t.child,null,r),t=Im(e,
e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function K2(t,e,r,n,i,a,o){if(r)return e.
flags&256?(e.flags&=-257,n=eh(Error(A(422))),Vu(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.
flags|=128,null):(a=n.fallback,i=e.mode,n=Lc({mode:"visible",children:n.children},i,0,null),a=Ki(a,i,
o,null),a.flags|=2,n.return=e,a.return=e,n.sibling=a,e.child=n,e.mode&1&&po(e,t.child,null,o),e.child.
memoizedState=zh(o),e.memoizedState=Uh,a);if(!(e.mode&1))return Vu(t,e,o,null);if(i.data==="$!"){if(n=
i.nextSibling&&i.nextSibling.dataset,n)var s=n.dgst;return n=s,a=Error(A(419)),n=eh(a,n,void 0),Vu(t,
e,o,n)}if(s=(o&t.childLanes)!==0,Ft||s){if(n=nt,n!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;
break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:
i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&
(a.retryLane=i,gn(t,i),Rr(n,t,i,-1))}return Fm(),n=eh(Error(A(421))),Vu(t,e,o,n)}return i.data==="$?"?
(e.flags|=128,e.child=t.child,e=oR.bind(null,t),i._reactRetry=e,null):(t=a.treeContext,Wt=ti(i.nextSibling),
Kt=e,Ie=!0,Cr=null,t!==null&&(or[sr++]=dn,or[sr++]=fn,or[sr++]=Xi,dn=t.id,fn=t.overflow,Xi=e),e=Im(e,
n.children),e.flags|=4096,e)}function m1(t,e,r){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),
Nh(t.return,e,r)}function th(t,e,r,n,i){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,
rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=
0,a.last=n,a.tail=r,a.tailMode=i)}function aE(t,e,r){var n=e.pendingProps,i=n.revealOrder,a=n.tail;if(kt(
t,e,n.children,r),n=Ae.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==
null;){if(t.tag===13)t.memoizedState!==null&&m1(t,r,e);else if(t.tag===19)m1(t,r,e);else if(t.child!==
null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||
t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(xe(Ae,n),!(e.mode&1))e.
memoizedState=null;else switch(i){case"forwards":for(r=e.child,i=null;r!==null;)t=r.alternate,t!==null&&
xc(t)===null&&(i=r),r=r.sibling;r=i,r===null?(i=e.child,e.child=null):(i=r.sibling,r.sibling=null),th(
e,!1,i,r,a);break;case"backwards":for(r=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==
null&&xc(t)===null){e.child=i;break}t=i.sibling,i.sibling=r,r=i,i=t}th(e,!0,r,null,a);break;case"tog\
ether":th(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ec(t,e){
!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,r){if(t!==null&&
(e.dependencies=t.dependencies),Qi|=e.lanes,!(r&e.childLanes))return null;if(t!==null&&e.child!==t.child)
throw Error(A(153));if(e.child!==null){for(t=e.child,r=ai(t,t.pendingProps),e.child=r,r.return=e;t.sibling!==
null;)t=t.sibling,r=r.sibling=ai(t,t.pendingProps),r.return=e;r.sibling=null}return e.child}function G2(t,e,r){
switch(e.tag){case 3:nE(e),fo();break;case 5:Ax(e);break;case 1:Mt(e.type)&&hc(e);break;case 4:xm(e,
e.stateNode.containerInfo);break;case 10:var n=e.type._context,i=e.memoizedProps.value;xe(yc,n._currentValue),
n._currentValue=i;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(xe(Ae,Ae.current&
1),e.flags|=128,null):r&e.child.childLanes?iE(t,e,r):(xe(Ae,Ae.current&1),t=yn(t,e,r),t!==null?t.sibling:
null);xe(Ae,Ae.current&1);break;case 19:if(n=(r&e.childLanes)!==0,t.flags&128){if(n)return aE(t,e,r);
e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),xe(Ae,Ae.
current),n)break;return null;case 22:case 23:return e.lanes=0,tE(t,e,r)}return yn(t,e,r)}var oE,jh,sE,
lE;oE=function(t,e){for(var r=e.child;r!==null;){if(r.tag===5||r.tag===6)t.appendChild(r.stateNode);else if(r.
tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){
if(r.return===null||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};jh=function(){};
sE=function(t,e,r,n){var i=t.memoizedProps;if(i!==n){t=e.stateNode,Vi(Wr.current);var a=null;switch(r){case"\
input":i=uh(t,i),n=uh(t,n),a=[];break;case"select":i=Fe({},i,{value:void 0}),n=Fe({},n,{value:void 0}),
a=[];break;case"textarea":i=fh(t,i),n=fh(t,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.
onClick=="function"&&(t.onclick=fc)}hh(r,n);var o;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(
u)&&i[u]!=null)if(u==="style"){var s=i[u];for(o in s)s.hasOwnProperty(o)&&(r||(r={}),r[o]="")}else u!==
"dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrat\
ionWarning"&&u!=="autoFocus"&&(Vs.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];
if(s=i?.[u],n.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(
o)||l&&l.hasOwnProperty(o)||(r||(r={}),r[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(r||(r=
{}),r[o]=l[o])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:
void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!=
"number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&
(Vs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Se("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}
r&&(a=a||[]).push("style",r);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};lE=function(t,e,r,n){r!==n&&(e.
flags|=4)};function Rs(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var r=null;e!==null;)
e.alternate!==null&&(r=e),e=e.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.
tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e||t.tail===null?t.tail=
null:t.tail.sibling=null:n.sibling=null}}function yt(t){var e=t.alternate!==null&&t.alternate.child===
t.child,r=0,n=0;if(e)for(var i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,
n|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.
subtreeFlags,n|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=n,t.childLanes=r,e}function X2(t,e,r){
var n=e.pendingProps;switch(pm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:
return yt(e),null;case 1:return Mt(e.type)&&pc(),yt(e),null;case 3:return n=e.stateNode,ho(),Te(Bt),
Te(wt),_m(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===
null)&&(qu(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cr!==
null&&(Xh(Cr),Cr=null))),jh(t,e),yt(e),null;case 5:Em(e);var i=Vi(nl.current);if(r=e.type,t!==null&&
e.stateNode!=null)sE(t,e,r,n,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===
null)throw Error(A(166));return yt(e),null}if(t=Vi(Wr.current),qu(e)){n=e.stateNode,r=e.type;var a=e.
memoizedProps;switch(n[$r]=e,n[tl]=a,t=(e.mode&1)!==0,r){case"dialog":Se("cancel",n),Se("close",n);break;case"\
iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(i=0;i<Bs.length;i++)
Se(Bs[i],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se(
"load",n);break;case"details":Se("toggle",n);break;case"input":Sw(n,a),Se("invalid",n);break;case"se\
lect":n._wrapperState={wasMultiple:!!a.multiple},Se("invalid",n);break;case"textarea":kw(n,a),Se("in\
valid",n)}hh(r,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s==
"string"?n.textContent!==s&&(a.suppressHydrationWarning!==!0&&Hu(n.textContent,s,t),i=["children",s]):
typeof s=="number"&&n.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Hu(n.textContent,s,t),i=
["children",""+s]):Vs.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&Se("scroll",n)}switch(r){case"inpu\
t":Pu(n),Tw(n,a,!0);break;case"textarea":Pu(n),bw(n);break;case"select":case"option":break;default:typeof a.
onClick=="function"&&(n.onclick=fc)}n=i,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=i.nodeType===9?
i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B1(r)),t==="http://www.w3.org/1999/xhtml"?r===
"script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.
is=="string"?t=o.createElement(r,{is:n.is}):(t=o.createElement(r),r==="select"&&(o=t,n.multiple?o.multiple=
!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,r),t[$r]=e,t[tl]=n,oE(t,e,!1,!1),e.stateNode=t;e:{
switch(o=mh(r,n),r){case"dialog":Se("cancel",t),Se("close",t),i=n;break;case"iframe":case"object":case"\
embed":Se("load",t),i=n;break;case"video":case"audio":for(i=0;i<Bs.length;i++)Se(Bs[i],t);i=n;break;case"\
source":Se("error",t),i=n;break;case"img":case"image":case"link":Se("error",t),Se("load",t),i=n;break;case"\
details":Se("toggle",t),i=n;break;case"input":Sw(t,n),i=uh(t,n),Se("invalid",t);break;case"option":i=
n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},i=Fe({},n,{value:void 0}),Se("invali\
d",t);break;case"textarea":kw(t,n),i=fh(t,n),Se("invalid",t);break;default:i=n}hh(r,i),s=i;for(a in s)
if(s.hasOwnProperty(a)){var l=s[a];a==="style"?L1(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,
l!=null&&M1(t,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&Ws(t,l):typeof l=="num\
ber"&&Ws(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocu\
s"&&(Vs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Se("scroll",t):l!=null&&Zh(t,a,l,o))}switch(r){case"\
input":Pu(t),Tw(t,n,!1);break;case"textarea":Pu(t),bw(t);break;case"option":n.value!=null&&t.setAttribute(
"value",""+oi(n.value));break;case"select":t.multiple=!!n.multiple,a=n.value,a!=null?no(t,!!n.multiple,
a,!1):n.defaultValue!=null&&no(t,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="fu\
nction"&&(t.onclick=fc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;
break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}
return yt(e),null;case 6:if(t&&e.stateNode!=null)lE(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&
e.stateNode===null)throw Error(A(166));if(r=Vi(nl.current),Vi(Wr.current),qu(e)){if(n=e.stateNode,r=
e.memoizedProps,n[$r]=e,(a=n.nodeValue!==r)&&(t=Kt,t!==null))switch(t.tag){case 3:Hu(n.nodeValue,r,(t.
mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hu(n.nodeValue,r,(t.mode&1)!==
0)}a&&(e.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[$r]=e,e.stateNode=n}
return yt(e),null;case 13:if(Te(Ae),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.
dehydrated!==null){if(Ie&&Wt!==null&&e.mode&1&&!(e.flags&128))kx(),fo(),e.flags|=98560,a=!1;else if(a=
qu(e),n!==null&&n.dehydrated!==null){if(t===null){if(!a)throw Error(A(318));if(a=e.memoizedState,a=a!==
null?a.dehydrated:null,!a)throw Error(A(317));a[$r]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),
e.flags|=4;yt(e),a=!1}else Cr!==null&&(Xh(Cr),Cr=null),a=!0;if(!a)return e.flags&65536?e:null}return e.
flags&128?(e.lanes=r,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,
e.mode&1&&(t===null||Ae.current&1?Qe===0&&(Qe=3):Fm())),e.updateQueue!==null&&(e.flags|=4),yt(e),null);case 4:
return ho(),jh(t,e),t===null&&Js(e.stateNode.containerInfo),yt(e),null;case 10:return ym(e.type._context),
yt(e),null;case 17:return Mt(e.type)&&pc(),yt(e),null;case 19:if(Te(Ae),a=e.memoizedState,a===null)return yt(
e),null;if(n=(e.flags&128)!==0,o=a.rendering,o===null)if(n)Rs(a,!1);else{if(Qe!==0||t!==null&&t.flags&
128)for(t=e.child;t!==null;){if(o=xc(t),o!==null){for(e.flags|=128,Rs(a,!1),n=o.updateQueue,n!==null&&
(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=r,r=e.child;r!==null;)a=r,t=n,a.flags&=14680066,o=a.
alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=
null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,
a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.
memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:
{lanes:t.lanes,firstContext:t.firstContext}),r=r.sibling;return xe(Ae,Ae.current&1|2),e.child}t=t.sibling}
a.tail!==null&&He()>go&&(e.flags|=128,n=!0,Rs(a,!1),e.lanes=4194304)}else{if(!n)if(t=xc(o),t!==null){
if(e.flags|=128,n=!0,r=t.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),Rs(a,!0),a.tail===null&&
a.tailMode==="hidden"&&!o.alternate&&!Ie)return yt(e),null}else 2*He()-a.renderingStartTime>go&&r!==
1073741824&&(e.flags|=128,n=!0,Rs(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):
(r=a.last,r!==null?r.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=
e.sibling,a.renderingStartTime=He(),e.sibling=null,r=Ae.current,xe(Ae,n?r&1|2:r&1),e):(yt(e),null);case 22:case 23:
return Nm(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&
1?Vt&1073741824&&(yt(e),e.subtreeFlags&6&&(e.flags|=8192)):yt(e),null;case 24:return null;case 25:return null}
throw Error(A(156,e.tag))}function Y2(t,e){switch(pm(e),e.tag){case 1:return Mt(e.type)&&pc(),t=e.flags,
t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),Te(Bt),Te(wt),_m(),t=e.flags,t&65536&&!(t&128)?
(e.flags=t&-65537|128,e):null;case 5:return Em(e),null;case 13:if(Te(Ae),t=e.memoizedState,t!==null&&
t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));fo()}return t=e.flags,t&65536?(e.flags=
t&-65537|128,e):null;case 19:return Te(Ae),null;case 4:return ho(),null;case 10:return ym(e.type._context),
null;case 22:case 23:return Nm(),null;case 24:return null;default:return null}}var Wu=!1,vt=!1,Q2=typeof WeakSet==
"function"?WeakSet:Set,U=null;function to(t,e){var r=t.ref;if(r!==null)if(typeof r=="function")try{r(
null)}catch(n){Me(t,e,n)}else r.current=null}function Hh(t,e,r){try{r()}catch(n){Me(t,e,n)}}var g1=!1;
function Z2(t,e){if(kh=uc,t=fx(),dm(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.
selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();
if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,
a.nodeType}catch{r=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==r||i!==
0&&d.nodeType!==3||(s=o+i),d!==a||n!==0&&d.nodeType!==3||(l=o+n),d.nodeType===3&&(o+=d.nodeValue.length),
(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===r&&++u===i&&(s=o),f===a&&++c===n&&(l=
o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}r=s===-1||l===-1?null:{start:s,end:l}}else r=
null}r=r||{start:0,end:0}}else r=null;for(bh={focusedElem:t,selectionRange:r},uc=!1,U=e;U!==null;)if(e=
U,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,U=t;else for(;U!==null;){e=U;try{var w=e.
alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var g=w.memoizedProps,
E=w.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?g:kr(e.type,g),E);
p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?
y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:
break;default:throw Error(A(163))}}catch(x){Me(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,
U=t;break}U=e.return}return w=g1,g1=!1,w}function Hs(t,e,r){var n=e.updateQueue;if(n=n!==null?n.lastEffect:
null,n!==null){var i=n=n.next;do{if((i.tag&t)===t){var a=i.destroy;i.destroy=void 0,a!==void 0&&Hh(e,
r,a)}i=i.next}while(i!==n)}}function Mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){
var r=e=e.next;do{if((r.tag&t)===t){var n=r.create;r.destroy=n()}r=r.next}while(r!==e)}}function qh(t){
var e=t.ref;if(e!==null){var r=t.stateNode;switch(t.tag){case 5:t=r;break;default:t=r}typeof e=="fun\
ction"?e(t):e.current=t}}function uE(t){var e=t.alternate;e!==null&&(t.alternate=null,uE(e)),t.child=
null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$r],delete e[tl],
delete e[Rh],delete e[F2],delete e[B2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=
null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function cE(t){return t.
tag===5||t.tag===3||t.tag===4}function y1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||cE(
t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==
18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.
stateNode}}function $h(t,e,r){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?r.nodeType===8?r.parentNode.
insertBefore(t,e):r.insertBefore(t,e):(r.nodeType===8?(e=r.parentNode,e.insertBefore(t,r)):(e=r,e.appendChild(
t)),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=fc));else if(n!==4&&(t=t.child,t!==
null))for($h(t,e,r),t=t.sibling;t!==null;)$h(t,e,r),t=t.sibling}function Vh(t,e,r){var n=t.tag;if(n===
5||n===6)t=t.stateNode,e?r.insertBefore(t,e):r.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Vh(
t,e,r),t=t.sibling;t!==null;)Vh(t,e,r),t=t.sibling}var ut=null,br=!1;function Vn(t,e,r){for(r=r.child;r!==
null;)dE(t,e,r),r=r.sibling}function dE(t,e,r){if(Vr&&typeof Vr.onCommitFiberUnmount=="function")try{
Vr.onCommitFiberUnmount(Ic,r)}catch{}switch(r.tag){case 5:vt||to(r,e);case 6:var n=ut,i=br;ut=null,Vn(
t,e,r),ut=n,br=i,ut!==null&&(br?(t=ut,r=r.stateNode,t.nodeType===8?t.parentNode.removeChild(r):t.removeChild(
r)):ut.removeChild(r.stateNode));break;case 18:ut!==null&&(br?(t=ut,r=r.stateNode,t.nodeType===8?Gp(
t.parentNode,r):t.nodeType===1&&Gp(t,r),Ys(t)):Gp(ut,r.stateNode));break;case 4:n=ut,i=br,ut=r.stateNode.
containerInfo,br=!0,Vn(t,e,r),ut=n,br=i;break;case 0:case 11:case 14:case 15:if(!vt&&(n=r.updateQueue,
n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&
4)&&Hh(r,e,o),i=i.next}while(i!==n)}Vn(t,e,r);break;case 1:if(!vt&&(to(r,e),n=r.stateNode,typeof n.componentWillUnmount==
"function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Me(
r,e,s)}Vn(t,e,r);break;case 21:Vn(t,e,r);break;case 22:r.mode&1?(vt=(n=vt)||r.memoizedState!==null,Vn(
t,e,r),vt=n):Vn(t,e,r);break;default:Vn(t,e,r)}}function v1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=
null;var r=t.stateNode;r===null&&(r=t.stateNode=new Q2),e.forEach(function(n){var i=sR.bind(null,t,n);
r.has(n)||(r.add(n),n.then(i,i))})}}function Tr(t,e){var r=e.deletions;if(r!==null)for(var n=0;n<r.length;n++){
var i=r[n];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:ut=s.stateNode,br=!1;break e;case 3:
ut=s.stateNode.containerInfo,br=!0;break e;case 4:ut=s.stateNode.containerInfo,br=!0;break e}s=s.return}
if(ut===null)throw Error(A(160));dE(a,o,i),ut=null,br=!1;var l=i.alternate;l!==null&&(l.return=null),
i.return=null}catch(u){Me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fE(e,t),e=e.sibling}
function fE(t,e){var r=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tr(e,t),
Hr(t),n&4){try{Hs(3,t,t.return),Mc(3,t)}catch(g){Me(t,t.return,g)}try{Hs(5,t,t.return)}catch(g){Me(t,
t.return,g)}}break;case 1:Tr(e,t),Hr(t),n&512&&r!==null&&to(r,r.return);break;case 5:if(Tr(e,t),Hr(t),
n&512&&r!==null&&to(r,r.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(g){Me(t,t.return,g)}}
if(n&4&&(i=t.stateNode,i!=null)){var a=t.memoizedProps,o=r!==null?r.memoizedProps:a,s=t.type,l=t.updateQueue;
if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&N1(i,a),mh(s,o);var u=mh(
s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?L1(i,d):c==="dangerouslySetInnerHTML"?
M1(i,d):c==="children"?Ws(i,d):Zh(i,c,d,u)}switch(s){case"input":ch(i,a);break;case"textarea":F1(i,a);
break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var m=a.
value;m!=null?no(i,!!a.multiple,m,!1):f!==!!a.multiple&&(a.defaultValue!=null?no(i,!!a.multiple,a.defaultValue,
!0):no(i,!!a.multiple,a.multiple?[]:"",!1))}i[tl]=a}catch(g){Me(t,t.return,g)}}break;case 6:if(Tr(e,
t),Hr(t),n&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,a=t.memoizedProps;try{i.nodeValue=
a}catch(g){Me(t,t.return,g)}}break;case 3:if(Tr(e,t),Hr(t),n&4&&r!==null&&r.memoizedState.isDehydrated)
try{Ys(e.containerInfo)}catch(g){Me(t,t.return,g)}break;case 4:Tr(e,t),Hr(t);break;case 13:Tr(e,t),Hr(
t),i=t.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&
i.alternate.memoizedState!==null||(Dm=He())),n&4&&v1(t);break;case 22:if(c=r!==null&&r.memoizedState!==
null,t.mode&1?(vt=(u=vt)||c,Tr(e,t),vt=u):Tr(e,t),Hr(t),n&8192){if(u=t.memoizedState!==null,(t.stateNode.
isHidden=u)&&!c&&t.mode&1)for(U=t,c=t.child;c!==null;){for(d=U=c;U!==null;){switch(f=U,m=f.child,f.tag){case 0:case 11:case 14:case 15:
Hs(4,f,f.return);break;case 1:to(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="fu\
nction"){n=f,r=f.return;try{e=n,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(g){
Me(n,r,g)}}break;case 5:to(f,f.return);break;case 22:if(f.memoizedState!==null){x1(d);continue}}m!==
null?(m.return=f,U=m):x1(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,
u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display=
"none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,
s.style.display=O1("display",o))}catch(g){Me(t,t.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.
nodeValue=u?"":d.memoizedProps}catch(g){Me(t,t.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===
null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===
null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.
return=d.return,d=d.sibling}}break;case 19:Tr(e,t),Hr(t),n&4&&v1(t);break;case 21:break;default:Tr(e,
t),Hr(t)}}function Hr(t){var e=t.flags;if(e&2){try{e:{for(var r=t.return;r!==null;){if(cE(r)){var n=r;
break e}r=r.return}throw Error(A(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Ws(i,""),
n.flags&=-33);var a=y1(t);Vh(t,a,i);break;case 3:case 4:var o=n.stateNode.containerInfo,s=y1(t);$h(t,
s,o);break;default:throw Error(A(161))}}catch(l){Me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}
function J2(t,e,r){U=t,pE(t,e,r)}function pE(t,e,r){for(var n=(t.mode&1)!==0;U!==null;){var i=U,a=i.
child;if(i.tag===22&&n){var o=i.memoizedState!==null||Wu;if(!o){var s=i.alternate,l=s!==null&&s.memoizedState!==
null||vt;s=Wu;var u=vt;if(Wu=o,(vt=l)&&!u)for(U=i;U!==null;)o=U,l=o.child,o.tag===22&&o.memoizedState!==
null?E1(i):l!==null?(l.return=o,U=l):E1(i);for(;a!==null;)U=a,pE(a,e,r),a=a.sibling;U=i,Wu=s,vt=u}w1(
t,e,r)}else i.subtreeFlags&8772&&a!==null?(a.return=i,U=a):w1(t,e,r)}}function w1(t){for(;U!==null;){
var e=U;if(e.flags&8772){var r=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:
vt||Mc(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!vt)if(r===null)n.componentDidMount();else{
var i=e.elementType===e.type?r.memoizedProps:kr(e.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,
n.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&r1(e,a,n);break;case 3:var o=e.
updateQueue;if(o!==null){if(r=null,e.child!==null)switch(e.child.tag){case 5:r=e.child.stateNode;break;case 1:
r=e.child.stateNode}r1(e,o,r)}break;case 5:var s=e.stateNode;if(r===null&&e.flags&4){r=s;var l=e.memoizedProps;
switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"\
img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===
null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&
Ys(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}vt||
e.flags&512&&qh(e)}catch(f){Me(e,e.return,f)}}if(e===t){U=null;break}if(r=e.sibling,r!==null){r.return=
e.return,U=r;break}U=e.return}}function x1(t){for(;U!==null;){var e=U;if(e===t){U=null;break}var r=e.
sibling;if(r!==null){r.return=e.return,U=r;break}U=e.return}}function E1(t){for(;U!==null;){var e=U;
try{switch(e.tag){case 0:case 11:case 15:var r=e.return;try{Mc(4,e)}catch(l){Me(e,r,l)}break;case 1:
var n=e.stateNode;if(typeof n.componentDidMount=="function"){var i=e.return;try{n.componentDidMount()}catch(l){
Me(e,i,l)}}var a=e.return;try{qh(e)}catch(l){Me(e,a,l)}break;case 5:var o=e.return;try{qh(e)}catch(l){
Me(e,o,l)}}}catch(l){Me(e,e.return,l)}if(e===t){U=null;break}var s=e.sibling;if(s!==null){s.return=e.
return,U=s;break}U=e.return}}var eR=Math.ceil,Sc=vn.ReactCurrentDispatcher,Rm=vn.ReactCurrentOwner,ur=vn.
ReactCurrentBatchConfig,ue=0,nt=null,Ve=null,ct=0,Vt=0,ro=ui(0),Qe=0,sl=null,Qi=0,Oc=0,Pm=0,qs=null,
Nt=null,Dm=0,go=1/0,un=null,Tc=!1,Wh=null,ni=null,Ku=!1,Qn=null,kc=0,$s=0,Kh=null,tc=-1,rc=0;function bt(){
return ue&6?He():tc!==-1?tc:tc=He()}function ii(t){return t.mode&1?ue&2&&ct!==0?ct&-ct:O2.transition!==
null?(rc===0&&(rc=Y1()),rc):(t=fe,t!==0||(t=window.event,t=t===void 0?16:nx(t.type)),t):1}function Rr(t,e,r,n){
if(50<$s)throw $s=0,Kh=null,Error(A(185));ll(t,r,n),(!(ue&2)||t!==nt)&&(t===nt&&(!(ue&2)&&(Oc|=r),Qe===
4&&Xn(t,ct)),Ot(t,n),r===1&&ue===0&&!(e.mode&1)&&(go=He()+500,Nc&&ci()))}function Ot(t,e){var r=t.callbackNode;
UI(t,e);var n=lc(t,t===nt?ct:0);if(n===0)r!==null&&Rw(r),t.callbackNode=null,t.callbackPriority=0;else if(e=
n&-n,t.callbackPriority!==e){if(r!=null&&Rw(r),e===1)t.tag===0?M2(_1.bind(null,t)):_x(_1.bind(null,t)),
A2(function(){!(ue&6)&&ci()}),r=null;else{switch(Q1(n)){case 1:r=nm;break;case 4:r=G1;break;case 16:
r=sc;break;case 536870912:r=X1;break;default:r=sc}r=EE(r,hE.bind(null,t))}t.callbackPriority=e,t.callbackNode=
r}}function hE(t,e){if(tc=-1,rc=0,ue&6)throw Error(A(327));var r=t.callbackNode;if(lo()&&t.callbackNode!==
r)return null;var n=lc(t,t===nt?ct:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=bc(t,n);else{
e=n;var i=ue;ue|=2;var a=gE();(nt!==t||ct!==e)&&(un=null,go=He()+500,Wi(t,e));do try{nR();break}catch(s){
mE(t,s)}while(!0);gm(),Sc.current=a,ue=i,Ve!==null?e=0:(nt=null,ct=0,e=Qe)}if(e!==0){if(e===2&&(i=xh(
t),i!==0&&(n=i,e=Gh(t,i))),e===1)throw r=sl,Wi(t,0),Xn(t,n),Ot(t,He()),r;if(e===6)Xn(t,n);else{if(i=
t.current.alternate,!(n&30)&&!tR(i)&&(e=bc(t,n),e===2&&(a=xh(t),a!==0&&(n=a,e=Gh(t,a))),e===1))throw r=
sl,Wi(t,0),Xn(t,n),Ot(t,He()),r;switch(t.finishedWork=i,t.finishedLanes=n,e){case 0:case 1:throw Error(
A(345));case 2:Hi(t,Nt,un);break;case 3:if(Xn(t,n),(n&130023424)===n&&(e=Dm+500-He(),10<e)){if(lc(t,
0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){bt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=
Ih(Hi.bind(null,t,Nt,un),e);break}Hi(t,Nt,un);break;case 4:if(Xn(t,n),(n&4194240)===n)break;for(e=t.
eventTimes,i=-1;0<n;){var o=31-Ir(n);a=1<<o,o=e[o],o>i&&(i=o),n&=~a}if(n=i,n=He()-n,n=(120>n?120:480>
n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*eR(n/1960))-n,10<n){t.timeoutHandle=Ih(Hi.bind(
null,t,Nt,un),n);break}Hi(t,Nt,un);break;case 5:Hi(t,Nt,un);break;default:throw Error(A(329))}}}return Ot(
t,He()),t.callbackNode===r?hE.bind(null,t):null}function Gh(t,e){var r=qs;return t.current.memoizedState.
isDehydrated&&(Wi(t,e).flags|=256),t=bc(t,e),t!==2&&(e=Nt,Nt=r,e!==null&&Xh(e)),t}function Xh(t){Nt===
null?Nt=t:Nt.push.apply(Nt,t)}function tR(t){for(var e=t;;){if(e.flags&16384){var r=e.updateQueue;if(r!==
null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!Pr(
a(),i))return!1}catch{return!1}}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===
t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=
e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~Pm,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=
~e,t=t.expirationTimes;0<e;){var r=31-Ir(e),n=1<<r;t[r]=-1,e&=~n}}function _1(t){if(ue&6)throw Error(
A(327));lo();var e=lc(t,0);if(!(e&1))return Ot(t,He()),null;var r=bc(t,e);if(t.tag!==0&&r===2){var n=xh(
t);n!==0&&(e=n,r=Gh(t,n))}if(r===1)throw r=sl,Wi(t,0),Xn(t,e),Ot(t,He()),r;if(r===6)throw Error(A(345));
return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hi(t,Nt,un),Ot(t,He()),null}function Am(t,e){
var r=ue;ue|=1;try{return t(e)}finally{ue=r,ue===0&&(go=He()+500,Nc&&ci())}}function Zi(t){Qn!==null&&
Qn.tag===0&&!(ue&6)&&lo();var e=ue;ue|=1;var r=ur.transition,n=fe;try{if(ur.transition=null,fe=1,t)return t()}finally{
fe=n,ur.transition=r,ue=e,!(ue&6)&&ci()}}function Nm(){Vt=ro.current,Te(ro)}function Wi(t,e){t.finishedWork=
null,t.finishedLanes=0;var r=t.timeoutHandle;if(r!==-1&&(t.timeoutHandle=-1,D2(r)),Ve!==null)for(r=Ve.
return;r!==null;){var n=r;switch(pm(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&pc();break;case 3:
ho(),Te(Bt),Te(wt),_m();break;case 5:Em(n);break;case 4:ho();break;case 13:Te(Ae);break;case 19:Te(Ae);
break;case 10:ym(n.type._context);break;case 22:case 23:Nm()}r=r.return}if(nt=t,Ve=t=ai(t.current,null),
ct=Vt=e,Qe=0,sl=null,Pm=Oc=Qi=0,Nt=qs=null,$i!==null){for(e=0;e<$i.length;e++)if(r=$i[e],n=r.interleaved,
n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var o=a.next;a.next=i,n.next=o}r.
pending=n}$i=null}return t}function mE(t,e){do{var r=Ve;try{if(gm(),Zu.current=_c,Ec){for(var n=Ne.memoizedState;n!==
null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Ec=!1}if(Yi=0,rt=Ye=Ne=null,js=!1,il=0,Rm.current=
null,r===null||r.return===null){Qe=1,sl=e,Ve=null;break}e:{var a=t,o=r.return,s=r,l=e;if(e=ct,s.flags|=
32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===
0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,
c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=u1(o);if(m!==null){m.flags&=-257,c1(
m,o,s,a,e),m.mode&1&&l1(a,u,e),e=m,l=u;var w=e.updateQueue;if(w===null){var g=new Set;g.add(l),e.updateQueue=
g}else w.add(l);break e}else{if(!(e&1)){l1(a,u,e),Fm();break e}l=Error(A(426))}}else if(Ie&&s.mode&1){
var E=u1(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),c1(E,o,s,a,e),hm(mo(l,s));break e}}a=l=mo(
l,s),Qe!==4&&(Qe=2),qs===null?qs=[a]:qs.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=
e;var p=Zx(a,l,e);t1(a,p);break e;case 1:s=l;var h=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof h.
getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(ni===null||
!ni.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var x=Jx(a,s,e);t1(a,x);break e}}a=a.return}while(a!==
null)}vE(r)}catch(T){e=T,Ve===r&&r!==null&&(Ve=r=r.return);continue}break}while(!0)}function gE(){var t=Sc.
current;return Sc.current=_c,t===null?_c:t}function Fm(){(Qe===0||Qe===3||Qe===2)&&(Qe=4),nt===null||
!(Qi&268435455)&&!(Oc&268435455)||Xn(nt,ct)}function bc(t,e){var r=ue;ue|=2;var n=gE();(nt!==t||ct!==
e)&&(un=null,Wi(t,e));do try{rR();break}catch(i){mE(t,i)}while(!0);if(gm(),ue=r,Sc.current=n,Ve!==null)
throw Error(A(261));return nt=null,ct=0,Qe}function rR(){for(;Ve!==null;)yE(Ve)}function nR(){for(;Ve!==
null&&!PI();)yE(Ve)}function yE(t){var e=xE(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?
vE(t):Ve=e,Rm.current=null}function vE(t){var e=t;do{var r=e.alternate;if(t=e.return,e.flags&32768){
if(r=Y2(r,e),r!==null){r.flags&=32767,Ve=r;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=
null;else{Qe=6,Ve=null;return}}else if(r=X2(r,e,Vt),r!==null){Ve=r;return}if(e=e.sibling,e!==null){Ve=
e;return}Ve=e=t}while(e!==null);Qe===0&&(Qe=5)}function Hi(t,e,r){var n=fe,i=ur.transition;try{ur.transition=
null,fe=1,iR(t,e,r,n)}finally{ur.transition=i,fe=n}return null}function iR(t,e,r,n){do lo();while(Qn!==
null);if(ue&6)throw Error(A(327));r=t.finishedWork;var i=t.finishedLanes;if(r===null)return null;if(t.
finishedWork=null,t.finishedLanes=0,r===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=
0;var a=r.lanes|r.childLanes;if(zI(t,a),t===nt&&(Ve=nt=null,ct=0),!(r.subtreeFlags&2064)&&!(r.flags&
2064)||Ku||(Ku=!0,EE(sc,function(){return lo(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){
a=ur.transition,ur.transition=null;var o=fe;fe=1;var s=ue;ue|=4,Rm.current=null,Z2(t,r),fE(r,t),b2(bh),
uc=!!kh,bh=kh=null,t.current=r,J2(r,t,i),DI(),ue=s,fe=o,ur.transition=a}else t.current=r;if(Ku&&(Ku=
!1,Qn=t,kc=i),a=t.pendingLanes,a===0&&(ni=null),FI(r.stateNode,n),Ot(t,He()),e!==null)for(n=t.onRecoverableError,
r=0;r<e.length;r++)i=e[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Tc)throw Tc=!1,t=Wh,
Wh=null,t;return kc&1&&t.tag!==0&&lo(),a=t.pendingLanes,a&1?t===Kh?$s++:($s=0,Kh=t):$s=0,ci(),null}function lo(){
if(Qn!==null){var t=Q1(kc),e=ur.transition,r=fe;try{if(ur.transition=null,fe=16>t?16:t,Qn===null)var n=!1;else{
if(t=Qn,Qn=null,kc=0,ue&6)throw Error(A(331));var i=ue;for(ue|=4,U=t.current;U!==null;){var a=U,o=a.
child;if(U.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(U=u;U!==
null;){var c=U;switch(c.tag){case 0:case 11:case 15:Hs(8,c,a)}var d=c.child;if(d!==null)d.return=c,U=
d;else for(;U!==null;){c=U;var f=c.sibling,m=c.return;if(uE(c),c===u){U=null;break}if(f!==null){f.return=
m,U=f;break}U=m}}}var w=a.alternate;if(w!==null){var g=w.child;if(g!==null){w.child=null;do{var E=g.
sibling;g.sibling=null,g=E}while(g!==null)}}U=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,U=o;else
e:for(;U!==null;){if(a=U,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Hs(9,a,a.return)}var p=a.
sibling;if(p!==null){p.return=a.return,U=p;break e}U=a.return}}var h=t.current;for(U=h;U!==null;){o=
U;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,U=y;else e:for(o=h;U!==null;){if(s=U,s.flags&
2048)try{switch(s.tag){case 0:case 11:case 15:Mc(9,s)}}catch(T){Me(s,s.return,T)}if(s===o){U=null;break e}
var x=s.sibling;if(x!==null){x.return=s.return,U=x;break e}U=s.return}}if(ue=i,ci(),Vr&&typeof Vr.onPostCommitFiberRoot==
"function")try{Vr.onPostCommitFiberRoot(Ic,t)}catch{}n=!0}return n}finally{fe=r,ur.transition=e}}return!1}
function S1(t,e,r){e=mo(r,e),e=Zx(t,e,1),t=ri(t,e,1),e=bt(),t!==null&&(ll(t,1,e),Ot(t,e))}function Me(t,e,r){
if(t.tag===3)S1(t,t,r);else for(;e!==null;){if(e.tag===3){S1(e,t,r);break}else if(e.tag===1){var n=e.
stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="functi\
on"&&(ni===null||!ni.has(n))){t=mo(r,t),t=Jx(e,t,1),e=ri(e,t,1),t=bt(),e!==null&&(ll(e,1,t),Ot(e,t));
break}}e=e.return}}function aR(t,e,r){var n=t.pingCache;n!==null&&n.delete(e),e=bt(),t.pingedLanes|=
t.suspendedLanes&r,nt===t&&(ct&r)===r&&(Qe===4||Qe===3&&(ct&130023424)===ct&&500>He()-Dm?Wi(t,0):Pm|=
r),Ot(t,e)}function wE(t,e){e===0&&(t.mode&1?(e=Nu,Nu<<=1,!(Nu&130023424)&&(Nu=4194304)):e=1);var r=bt();
t=gn(t,e),t!==null&&(ll(t,e,r),Ot(t,r))}function oR(t){var e=t.memoizedState,r=0;e!==null&&(r=e.retryLane),
wE(t,r)}function sR(t,e){var r=0;switch(t.tag){case 13:var n=t.stateNode,i=t.memoizedState;i!==null&&
(r=i.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(A(314))}n!==null&&n.delete(e),
wE(t,r)}var xE;xE=function(t,e,r){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ft=!0;else{
if(!(t.lanes&r)&&!(e.flags&128))return Ft=!1,G2(t,e,r);Ft=!!(t.flags&131072)}else Ft=!1,Ie&&e.flags&
1048576&&Sx(e,gc,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;ec(t,e),t=e.pendingProps;var i=co(
e,wt.current);so(e,r),i=Tm(null,e,n,t,i,r);var a=km();return e.flags|=1,typeof i=="object"&&i!==null&&
typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(
n)?(a=!0,hc(e)):a=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wm(e),i.updater=Fc,
e.stateNode=i,i._reactInternals=e,Bh(e,n,t,r),e=Lh(null,e,n,!0,a,r)):(e.tag=0,Ie&&a&&fm(e),kt(null,e,
i,r),e=e.child),e;case 16:n=e.elementType;e:{switch(ec(t,e),t=e.pendingProps,i=n._init,n=i(n._payload),
e.type=n,i=e.tag=uR(n),t=kr(n,t),i){case 0:e=Oh(null,e,n,t,r);break e;case 1:e=p1(null,e,n,t,r);break e;case 11:
e=d1(null,e,n,t,r);break e;case 14:e=f1(null,e,n,kr(n.type,t),r);break e}throw Error(A(306,n,""))}return e;case 0:
return n=e.type,i=e.pendingProps,i=e.elementType===n?i:kr(n,i),Oh(t,e,n,i,r);case 1:return n=e.type,
i=e.pendingProps,i=e.elementType===n?i:kr(n,i),p1(t,e,n,i,r);case 3:e:{if(nE(e),t===null)throw Error(
A(387));n=e.pendingProps,a=e.memoizedState,i=a.element,Cx(t,e),wc(e,n,null,r);var o=e.memoizedState;
if(n=o.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.
pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&
256){i=mo(Error(A(423)),e),e=h1(t,e,n,r,i);break e}else if(n!==i){i=mo(Error(A(424)),e),e=h1(t,e,n,r,
i);break e}else for(Wt=ti(e.stateNode.containerInfo.firstChild),Kt=e,Ie=!0,Cr=null,r=Dx(e,null,n,r),
e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(fo(),n===i){e=yn(t,e,r);break e}kt(t,e,n,r)}
e=e.child}return e;case 5:return Ax(e),t===null&&Ah(e),n=e.type,i=e.pendingProps,a=t!==null?t.memoizedProps:
null,o=i.children,Ch(n,i)?o=null:a!==null&&Ch(n,a)&&(e.flags|=32),rE(t,e),kt(t,e,o,r),e.child;case 6:
return t===null&&Ah(e),null;case 13:return iE(t,e,r);case 4:return xm(e,e.stateNode.containerInfo),n=
e.pendingProps,t===null?e.child=po(e,null,n,r):kt(t,e,n,r),e.child;case 11:return n=e.type,i=e.pendingProps,
i=e.elementType===n?i:kr(n,i),d1(t,e,n,i,r);case 7:return kt(t,e,e.pendingProps,r),e.child;case 8:return kt(
t,e,e.pendingProps.children,r),e.child;case 12:return kt(t,e,e.pendingProps.children,r),e.child;case 10:
e:{if(n=e.type._context,i=e.pendingProps,a=e.memoizedProps,o=i.value,xe(yc,n._currentValue),n._currentValue=
o,a!==null)if(Pr(a.value,o)){if(a.children===i.children&&!Bt.current){e=yn(t,e,r);break e}}else for(a=
e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==
null;){if(l.context===n){if(a.tag===1){l=pn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;
var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==
null&&(l.lanes|=r),Nh(a.return,r,e),s.lanes|=r;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?
null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(A(341));o.lanes|=r,s=o.alternate,
s!==null&&(s.lanes|=r),Nh(o,r,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==
null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}kt(
t,e,i.children,r),e=e.child}return e;case 9:return i=e.type,n=e.pendingProps.children,so(e,r),i=cr(i),
n=n(i),e.flags|=1,kt(t,e,n,r),e.child;case 14:return n=e.type,i=kr(n,e.pendingProps),i=kr(n.type,i),
f1(t,e,n,i,r);case 15:return eE(t,e,e.type,e.pendingProps,r);case 17:return n=e.type,i=e.pendingProps,
i=e.elementType===n?i:kr(n,i),ec(t,e),e.tag=1,Mt(n)?(t=!0,hc(e)):t=!1,so(e,r),Rx(e,n,i),Bh(e,n,i,r),
Lh(null,e,n,!0,t,r);case 19:return aE(t,e,r);case 22:return tE(t,e,r)}throw Error(A(156,e.tag))};function EE(t,e){
return K1(t,e)}function lR(t,e,r,n){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=
this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.
memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.
deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lr(t,e,r,n){return new lR(t,
e,r,n)}function Bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function uR(t){if(typeof t=="f\
unction")return Bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===em)return 11;if(t===tm)return 14}return 2}
function ai(t,e){var r=t.alternate;return r===null?(r=lr(t.tag,e,t.key,t.mode),r.elementType=t.elementType,
r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=e,r.type=t.type,r.
flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&14680064,r.childLanes=t.childLanes,r.lanes=
t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=
t.updateQueue,e=t.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},
r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r}function nc(t,e,r,n,i,a){var o=2;if(n=t,typeof t==
"function")Bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Wa:return Ki(r.children,
i,a,e);case Jh:o=8,i|=8;break;case ah:return t=lr(12,r,e,i|2),t.elementType=ah,t.lanes=a,t;case oh:return t=
lr(13,r,e,i),t.elementType=oh,t.lanes=a,t;case sh:return t=lr(19,r,e,i),t.elementType=sh,t.lanes=a,t;case P1:
return Lc(r,i,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I1:o=10;break e;case R1:
o=9;break e;case em:o=11;break e;case tm:o=14;break e;case Wn:o=16,n=null;break e}throw Error(A(130,
t==null?t:typeof t,""))}return e=lr(o,r,e,i),e.elementType=t,e.type=n,e.lanes=a,e}function Ki(t,e,r,n){
return t=lr(7,t,n,e),t.lanes=r,t}function Lc(t,e,r,n){return t=lr(22,t,n,e),t.elementType=P1,t.lanes=
r,t.stateNode={isHidden:!1},t}function rh(t,e,r){return t=lr(6,t,null,e),t.lanes=r,t}function nh(t,e,r){
return e=lr(4,t.children!==null?t.children:[],t.key,e),e.lanes=r,e.stateNode={containerInfo:t.containerInfo,
pendingChildren:null,implementation:t.implementation},e}function cR(t,e,r,n,i){this.tag=e,this.containerInfo=
t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.
callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zp(0),this.
expirationTimes=zp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=
this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zp(0),this.identifierPrefix=
n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mm(t,e,r,n,i,a,o,s,l){
return t=new cR(t,e,r,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=lr(3,null,null,e),t.current=a,a.stateNode=
t,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},
wm(a),t}function dR(t,e,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{
$$typeof:Va,key:n==null?null:""+n,children:t,containerInfo:e,implementation:r}}function _E(t){if(!t)
return si;t=t._reactInternals;e:{if(ea(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:
e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;
break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var r=t.type;if(Mt(r))return Ex(
t,r,e)}return e}function SE(t,e,r,n,i,a,o,s,l){return t=Mm(r,n,!0,t,i,a,o,s,l),t.context=_E(null),r=
t.current,n=bt(),i=ii(r),a=pn(n,i),a.callback=e??null,ri(r,a,i),t.current.lanes=i,ll(t,i,n),Ot(t,n),
t}function Uc(t,e,r,n){var i=e.current,a=bt(),o=ii(i);return r=_E(r),e.context===null?e.context=r:e.
pendingContext=r,e=pn(a,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=ri(i,
e,o),t!==null&&(Rr(t,i,o,a),Qu(t,i,o)),o}function Cc(t){if(t=t.current,!t.child)return null;switch(t.
child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function T1(t,e){if(t=t.
memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<e?r:e}}function Om(t,e){
T1(t,e),(t=t.alternate)&&T1(t,e)}function fR(){return null}var TE=typeof reportError=="function"?reportError:
function(t){console.error(t)};function Lm(t){this._internalRoot=t}zc.prototype.render=Lm.prototype.render=
function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Uc(t,e,null,null)};zc.prototype.
unmount=Lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;
var e=t.containerInfo;Zi(function(){Uc(null,t,null,null)}),e[mn]=null}};function zc(t){this._internalRoot=
t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ex();t={blockedOn:null,target:t,priority:e};
for(var r=0;r<Gn.length&&e!==0&&e<Gn[r].priority;r++);Gn.splice(r,0,t),r===0&&rx(t)}};function Um(t){
return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==
1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}
function k1(){}function pR(t,e,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=Cc(o);
a.call(u)}}var o=SE(e,n,t,0,null,!1,!1,"",k1);return t._reactRootContainer=o,t[mn]=o.current,Js(t.nodeType===
8?t.parentNode:t),Zi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof n=="function"){var s=n;n=function(){
var u=Cc(l);s.call(u)}}var l=Mm(t,0,!1,null,null,!1,!1,"",k1);return t._reactRootContainer=l,t[mn]=l.
current,Js(t.nodeType===8?t.parentNode:t),Zi(function(){Uc(e,l,r,n)}),l}function Hc(t,e,r,n,i){var a=r.
_reactRootContainer;if(a){var o=a;if(typeof i=="function"){var s=i;i=function(){var l=Cc(o);s.call(l)}}
Uc(e,o,t,i)}else o=pR(r,e,t,i,n);return Cc(o)}Z1=function(t){switch(t.tag){case 3:var e=t.stateNode;
if(e.current.memoizedState.isDehydrated){var r=Fs(e.pendingLanes);r!==0&&(im(e,r|1),Ot(e,He()),!(ue&
6)&&(go=He()+500,ci()))}break;case 13:Zi(function(){var n=gn(t,1);if(n!==null){var i=bt();Rr(n,t,1,i)}}),
Om(t,1)}};am=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var r=bt();Rr(e,t,134217728,
r)}Om(t,134217728)}};J1=function(t){if(t.tag===13){var e=ii(t),r=gn(t,e);if(r!==null){var n=bt();Rr(
r,t,e,n)}Om(t,e)}};ex=function(){return fe};tx=function(t,e){var r=fe;try{return fe=t,e()}finally{fe=
r}};yh=function(t,e,r){switch(e){case"input":if(ch(t,r),e=r.name,r.type==="radio"&&e!=null){for(r=t;r.
parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radi\
o"]'),e=0;e<r.length;e++){var n=r[e];if(n!==t&&n.form===t.form){var i=Ac(n);if(!i)throw Error(A(90));
A1(n),ch(n,i)}}}break;case"textarea":F1(t,r);break;case"select":e=r.value,e!=null&&no(t,!!r.multiple,
e,!1)}};j1=Am;H1=Zi;var hR={usingClientEntryPoint:!1,Events:[cl,Ya,Ac,U1,z1,Am]},Ps={findFiberByHostInstance:qi,
bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},mR={bundleType:Ps.bundleType,version:Ps.
version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,
overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,
overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.
ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=V1(t),t===null?null:t.stateNode},
findFiberByHostInstance:Ps.findFiberByHostInstance||fR,findHostInstancesForRefresh:null,scheduleRefresh:null,
scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772\
b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ds.isDisabled&&
Ds.supportsFiber))try{Ic=Ds.inject(mR),Vr=Ds}catch{}var Ds;Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=
hR;Yt.createPortal=function(t,e){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Um(
e))throw Error(A(200));return dR(t,e,null,r)};Yt.createRoot=function(t,e){if(!Um(t))throw Error(A(299));
var r=!1,n="",i=TE;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&
(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mm(t,1,!1,null,null,
r,!1,n,i),t[mn]=e.current,Js(t.nodeType===8?t.parentNode:t),new Lm(e)};Yt.findDOMNode=function(t){if(t==
null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render==
"function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=V1(e),t=t===null?null:
t.stateNode,t};Yt.flushSync=function(t){return Zi(t)};Yt.hydrate=function(t,e,r){if(!jc(e))throw Error(
A(200));return Hc(null,t,e,!0,r)};Yt.hydrateRoot=function(t,e,r){if(!Um(t))throw Error(A(405));var n=r!=
null&&r.hydratedSources||null,i=!1,a="",o=TE;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==
void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(o=r.onRecoverableError)),e=SE(e,null,
t,1,r??null,i,!1,a,o),t[mn]=e.current,Js(t),n)for(t=0;t<n.length;t++)r=n[t],i=r._getVersion,i=i(r._source),
e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[r,i]:e.mutableSourceEagerHydrationData.
push(r,i);return new zc(e)};Yt.render=function(t,e,r){if(!jc(e))throw Error(A(200));return Hc(null,t,
e,!1,r)};Yt.unmountComponentAtNode=function(t){if(!jc(t))throw Error(A(40));return t._reactRootContainer?
(Zi(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};Yt.unstable_batchedUpdates=
Am;Yt.unstable_renderSubtreeIntoContainer=function(t,e,r,n){if(!jc(r))throw Error(A(200));if(t==null||
t._reactInternals===void 0)throw Error(A(38));return Hc(t,e,r,!1,n)};Yt.version="18.2.0-next-9e3b772\
b8-20220608"});var zm=I((i4,CE)=>{"use strict";function bE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.
checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bE)}catch(t){console.error(t)}}bE(),
CE.exports=kE()});var RE=I(jm=>{"use strict";var IE=zm();jm.createRoot=IE.createRoot,jm.hydrateRoot=IE.hydrateRoot;var a4});var E_=I($c=>{"use strict";$c.byteLength=HP;$c.toByteArray=$P;$c.fromByteArray=KP;var Xr=[],mr=[],jP=typeof Uint8Array<
"u"?Uint8Array:Array,og="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(sa=0,
w_=og.length;sa<w_;++sa)Xr[sa]=og[sa],mr[og.charCodeAt(sa)]=sa;var sa,w_;mr[45]=62;mr[95]=63;function x_(t){
var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=t.indexOf(
"=");r===-1&&(r=e);var n=r===e?0:4-r%4;return[r,n]}function HP(t){var e=x_(t),r=e[0],n=e[1];return(r+
n)*3/4-n}function qP(t,e,r){return(e+r)*3/4-r}function $P(t){var e,r=x_(t),n=r[0],i=r[1],a=new jP(qP(
t,n,i)),o=0,s=i>0?n-4:n,l;for(l=0;l<s;l+=4)e=mr[t.charCodeAt(l)]<<18|mr[t.charCodeAt(l+1)]<<12|mr[t.
charCodeAt(l+2)]<<6|mr[t.charCodeAt(l+3)],a[o++]=e>>16&255,a[o++]=e>>8&255,a[o++]=e&255;return i===2&&
(e=mr[t.charCodeAt(l)]<<2|mr[t.charCodeAt(l+1)]>>4,a[o++]=e&255),i===1&&(e=mr[t.charCodeAt(l)]<<10|mr[t.
charCodeAt(l+1)]<<4|mr[t.charCodeAt(l+2)]>>2,a[o++]=e>>8&255,a[o++]=e&255),a}function VP(t){return Xr[t>>
18&63]+Xr[t>>12&63]+Xr[t>>6&63]+Xr[t&63]}function WP(t,e,r){for(var n,i=[],a=e;a<r;a+=3)n=(t[a]<<16&
16711680)+(t[a+1]<<8&65280)+(t[a+2]&255),i.push(VP(n));return i.join("")}function KP(t){for(var e,r=t.
length,n=r%3,i=[],a=16383,o=0,s=r-n;o<s;o+=a)i.push(WP(t,o,o+a>s?s:o+a));return n===1?(e=t[r-1],i.push(
Xr[e>>2]+Xr[e<<4&63]+"==")):n===2&&(e=(t[r-2]<<8)+t[r-1],i.push(Xr[e>>10]+Xr[e>>4&63]+Xr[e<<2&63]+"=")),
i.join("")}});var lg=I(sg=>{sg.read=function(t,e,r,n,i){var a,o,s=i*8-n-1,l=(1<<s)-1,u=l>>1,c=-7,d=r?i-1:0,f=r?-1:
1,m=t[e+d];for(d+=f,a=m&(1<<-c)-1,m>>=-c,c+=s;c>0;a=a*256+t[e+d],d+=f,c-=8);for(o=a&(1<<-c)-1,a>>=-c,
c+=n;c>0;o=o*256+t[e+d],d+=f,c-=8);if(a===0)a=1-u;else{if(a===l)return o?NaN:(m?-1:1)*(1/0);o=o+Math.
pow(2,n),a=a-u}return(m?-1:1)*o*Math.pow(2,a-n)};sg.write=function(t,e,r,n,i,a){var o,s,l,u=a*8-i-1,
c=(1<<u)-1,d=c>>1,f=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=n?0:a-1,w=n?1:-1,g=e<0||e===0&&1/e<0?
1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,o=c):(o=Math.floor(Math.log(e)/Math.LN2),e*(l=
Math.pow(2,-o))<1&&(o--,l*=2),o+d>=1?e+=f/l:e+=f*Math.pow(2,1-d),e*l>=2&&(o++,l/=2),o+d>=c?(s=0,o=c):
o+d>=1?(s=(e*l-1)*Math.pow(2,i),o=o+d):(s=e*Math.pow(2,d-1)*Math.pow(2,i),o=0));i>=8;t[r+m]=s&255,m+=
w,s/=256,i-=8);for(o=o<<i|s,u+=i;u>0;t[r+m]=o&255,m+=w,o/=256,u-=8);t[r+m-w]|=g*128}});var Ro=I(Io=>{"use strict";var ug=E_(),bo=lg(),__=typeof Symbol=="function"&&typeof Symbol.for=="fun\
ction"?Symbol.for("nodejs.util.inspect.custom"):null;Io.Buffer=b;Io.SlowBuffer=JP;Io.INSPECT_MAX_BYTES=
50;var Vc=2147483647;Io.kMaxLength=Vc;b.TYPED_ARRAY_SUPPORT=GP();!b.TYPED_ARRAY_SUPPORT&&typeof console<
"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function GP(){
try{let t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.
prototype),Object.setPrototypeOf(t,e),t.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,
"parent",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.buffer}});Object.defineProperty(
b.prototype,"offset",{enumerable:!0,get:function(){if(b.isBuffer(this))return this.byteOffset}});function xn(t){
if(t>Vc)throw new RangeError('The value "'+t+'" is invalid for option "size"');let e=new Uint8Array(
t);return Object.setPrototypeOf(e,b.prototype),e}function b(t,e,r){if(typeof t=="number"){if(typeof e==
"string")throw new TypeError('The "string" argument must be of type string. Received type number');return pg(
t)}return b_(t,e,r)}b.poolSize=8192;function b_(t,e,r){if(typeof t=="string")return YP(t,e);if(ArrayBuffer.
isView(t))return QP(t);if(t==null)throw new TypeError("The first argument must be one of type string\
, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(Yr(t,ArrayBuffer)||
t&&Yr(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Yr(t,SharedArrayBuffer)||t&&Yr(t.buffer,
SharedArrayBuffer)))return dg(t,e,r);if(typeof t=="number")throw new TypeError('The "value" argument\
 must not be of type number. Received type number');let n=t.valueOf&&t.valueOf();if(n!=null&&n!==t)return b.
from(n,e,r);let i=ZP(t);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.
toPrimitive]=="function")return b.from(t[Symbol.toPrimitive]("string"),e,r);throw new TypeError("The\
 first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Receiv\
ed type "+typeof t)}b.from=function(t,e,r){return b_(t,e,r)};Object.setPrototypeOf(b.prototype,Uint8Array.
prototype);Object.setPrototypeOf(b,Uint8Array);function C_(t){if(typeof t!="number")throw new TypeError(
'"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid \
for option "size"')}function XP(t,e,r){return C_(t),t<=0?xn(t):e!==void 0?typeof r=="string"?xn(t).fill(
e,r):xn(t).fill(e):xn(t)}b.alloc=function(t,e,r){return XP(t,e,r)};function pg(t){return C_(t),xn(t<
0?0:hg(t)|0)}b.allocUnsafe=function(t){return pg(t)};b.allocUnsafeSlow=function(t){return pg(t)};function YP(t,e){
if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+
e);let r=I_(t,e)|0,n=xn(r),i=n.write(t,e);return i!==r&&(n=n.slice(0,i)),n}function cg(t){let e=t.length<
0?0:hg(t.length)|0,r=xn(e);for(let n=0;n<e;n+=1)r[n]=t[n]&255;return r}function QP(t){if(Yr(t,Uint8Array)){
let e=new Uint8Array(t);return dg(e.buffer,e.byteOffset,e.byteLength)}return cg(t)}function dg(t,e,r){
if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<
e+(r||0))throw new RangeError('"length" is outside of buffer bounds');let n;return e===void 0&&r===void 0?
n=new Uint8Array(t):r===void 0?n=new Uint8Array(t,e):n=new Uint8Array(t,e,r),Object.setPrototypeOf(n,
b.prototype),n}function ZP(t){if(b.isBuffer(t)){let e=hg(t.length)|0,r=xn(e);return r.length===0||t.
copy(r,0,0,e),r}if(t.length!==void 0)return typeof t.length!="number"||gg(t.length)?xn(0):cg(t);if(t.
type==="Buffer"&&Array.isArray(t.data))return cg(t.data)}function hg(t){if(t>=Vc)throw new RangeError(
"Attempt to allocate Buffer larger than maximum size: 0x"+Vc.toString(16)+" bytes");return t|0}function JP(t){
return+t!=t&&(t=0),b.alloc(+t)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};
b.compare=function(e,r){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Yr(r,Uint8Array)&&(r=
b.from(r,r.offset,r.byteLength)),!b.isBuffer(e)||!b.isBuffer(r))throw new TypeError('The "buf1", "bu\
f2" arguments must be one of type Buffer or Uint8Array');if(e===r)return 0;let n=e.length,i=r.length;
for(let a=0,o=Math.min(n,i);a<o;++a)if(e[a]!==r[a]){n=e[a],i=r[a];break}return n<i?-1:i<n?1:0};b.isEncoding=
function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"\
binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};
b.concat=function(e,r){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of\
 Buffers');if(e.length===0)return b.alloc(0);let n;if(r===void 0)for(r=0,n=0;n<e.length;++n)r+=e[n].
length;let i=b.allocUnsafe(r),a=0;for(n=0;n<e.length;++n){let o=e[n];if(Yr(o,Uint8Array))a+o.length>
i.length?(b.isBuffer(o)||(o=b.from(o)),o.copy(i,a)):Uint8Array.prototype.set.call(i,o,a);else if(b.isBuffer(
o))o.copy(i,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=o.length}return i};
function I_(t,e){if(b.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||Yr(t,ArrayBuffer))return t.
byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type stri\
ng, Buffer, or ArrayBuffer. Received type '+typeof t);let r=t.length,n=arguments.length>2&&arguments[2]===
!0;if(!n&&r===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"\
utf8":case"utf-8":return fg(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return r*2;case"\
hex":return r>>>1;case"base64":return O_(t).length;default:if(i)return n?-1:fg(t).length;e=(""+e).toLowerCase(),
i=!0}}b.byteLength=I_;function eD(t,e,r){let n=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((r===void 0||
r>this.length)&&(r=this.length),r<=0)||(r>>>=0,e>>>=0,r<=e))return"";for(t||(t="utf8");;)switch(t){case"\
hex":return cD(this,e,r);case"utf8":case"utf-8":return P_(this,e,r);case"ascii":return lD(this,e,r);case"\
latin1":case"binary":return uD(this,e,r);case"base64":return oD(this,e,r);case"ucs2":case"ucs-2":case"\
utf16le":case"utf-16le":return dD(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);
t=(t+"").toLowerCase(),n=!0}}b.prototype._isBuffer=!0;function la(t,e,r){let n=t[e];t[e]=t[r],t[r]=n}
b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be\
 a multiple of 16-bits");for(let r=0;r<e;r+=2)la(this,r,r+1);return this};b.prototype.swap32=function(){
let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let r=0;r<
e;r+=4)la(this,r,r+3),la(this,r+1,r+2);return this};b.prototype.swap64=function(){let e=this.length;
if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let r=0;r<e;r+=8)la(
this,r,r+7),la(this,r+1,r+6),la(this,r+2,r+5),la(this,r+3,r+4);return this};b.prototype.toString=function(){
let e=this.length;return e===0?"":arguments.length===0?P_(this,0,e):eD.apply(this,arguments)};b.prototype.
toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){
let e="",r=Io.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.
length>r&&(e+=" ... "),"<Buffer "+e+">"};__&&(b.prototype[__]=b.prototype.inspect);b.prototype.compare=
function(e,r,n,i,a){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError(
'The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(r===void 0&&
(r=0),n===void 0&&(n=e?e.length:0),i===void 0&&(i=0),a===void 0&&(a=this.length),r<0||n>e.length||i<
0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=n)return 0;if(i>=a)return-1;
if(r>=n)return 1;if(r>>>=0,n>>>=0,i>>>=0,a>>>=0,this===e)return 0;let o=a-i,s=n-r,l=Math.min(o,s),u=this.
slice(i,a),c=e.slice(r,n);for(let d=0;d<l;++d)if(u[d]!==c[d]){o=u[d],s=c[d];break}return o<s?-1:s<o?
1:0};function R_(t,e,r,n,i){if(t.length===0)return-1;if(typeof r=="string"?(n=r,r=0):r>2147483647?r=
2147483647:r<-2147483648&&(r=-2147483648),r=+r,gg(r)&&(r=i?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){
if(i)return-1;r=t.length-1}else if(r<0)if(i)r=0;else return-1;if(typeof e=="string"&&(e=b.from(e,n)),
b.isBuffer(e))return e.length===0?-1:S_(t,e,r,n,i);if(typeof e=="number")return e=e&255,typeof Uint8Array.
prototype.indexOf=="function"?i?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.
call(t,e,r):S_(t,[e],r,n,i);throw new TypeError("val must be string, number or Buffer")}function S_(t,e,r,n,i){
let a=1,o=t.length,s=e.length;if(n!==void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n===
"utf16le"||n==="utf-16le")){if(t.length<2||e.length<2)return-1;a=2,o/=2,s/=2,r/=2}function l(c,d){return a===
1?c[d]:c.readUInt16BE(d*a)}let u;if(i){let c=-1;for(u=r;u<o;u++)if(l(t,u)===l(e,c===-1?0:u-c)){if(c===
-1&&(c=u),u-c+1===s)return c*a}else c!==-1&&(u-=u-c),c=-1}else for(r+s>o&&(r=o-s),u=r;u>=0;u--){let c=!0;
for(let d=0;d<s;d++)if(l(t,u+d)!==l(e,d)){c=!1;break}if(c)return u}return-1}b.prototype.includes=function(e,r,n){
return this.indexOf(e,r,n)!==-1};b.prototype.indexOf=function(e,r,n){return R_(this,e,r,n,!0)};b.prototype.
lastIndexOf=function(e,r,n){return R_(this,e,r,n,!1)};function tD(t,e,r,n){r=Number(r)||0;let i=t.length-
r;n?(n=Number(n),n>i&&(n=i)):n=i;let a=e.length;n>a/2&&(n=a/2);let o;for(o=0;o<n;++o){let s=parseInt(
e.substr(o*2,2),16);if(gg(s))return o;t[r+o]=s}return o}function rD(t,e,r,n){return Wc(fg(e,t.length-
r),t,r,n)}function nD(t,e,r,n){return Wc(mD(e),t,r,n)}function iD(t,e,r,n){return Wc(O_(e),t,r,n)}function aD(t,e,r,n){
return Wc(gD(e,t.length-r),t,r,n)}b.prototype.write=function(e,r,n,i){if(r===void 0)i="utf8",n=this.
length,r=0;else if(n===void 0&&typeof r=="string")i=r,n=this.length,r=0;else if(isFinite(r))r=r>>>0,
isFinite(n)?(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.write(strin\
g, encoding, offset[, length]) is no longer supported");let a=this.length-r;if((n===void 0||n>a)&&(n=
a),e.length>0&&(n<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bound\
s");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return tD(this,e,r,n);case"utf8":case"utf-8":return rD(
this,e,r,n);case"ascii":case"latin1":case"binary":return nD(this,e,r,n);case"base64":return iD(this,
e,r,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return aD(this,e,r,n);default:if(o)throw new TypeError(
"Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}};b.prototype.toJSON=function(){return{type:"Buf\
fer",data:Array.prototype.slice.call(this._arr||this,0)}};function oD(t,e,r){return e===0&&r===t.length?
ug.fromByteArray(t):ug.fromByteArray(t.slice(e,r))}function P_(t,e,r){r=Math.min(t.length,r);let n=[],
i=e;for(;i<r;){let a=t[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){let l,u,c,d;switch(s){case 1:
a<128&&(o=a);break;case 2:l=t[i+1],(l&192)===128&&(d=(a&31)<<6|l&63,d>127&&(o=d));break;case 3:l=t[i+
1],u=t[i+2],(l&192)===128&&(u&192)===128&&(d=(a&15)<<12|(l&63)<<6|u&63,d>2047&&(d<55296||d>57343)&&(o=
d));break;case 4:l=t[i+1],u=t[i+2],c=t[i+3],(l&192)===128&&(u&192)===128&&(c&192)===128&&(d=(a&15)<<
18|(l&63)<<12|(u&63)<<6|c&63,d>65535&&d<1114112&&(o=d))}}o===null?(o=65533,s=1):o>65535&&(o-=65536,n.
push(o>>>10&1023|55296),o=56320|o&1023),n.push(o),i+=s}return sD(n)}var T_=4096;function sD(t){let e=t.
length;if(e<=T_)return String.fromCharCode.apply(String,t);let r="",n=0;for(;n<e;)r+=String.fromCharCode.
apply(String,t.slice(n,n+=T_));return r}function lD(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<
r;++i)n+=String.fromCharCode(t[i]&127);return n}function uD(t,e,r){let n="";r=Math.min(t.length,r);for(let i=e;i<
r;++i)n+=String.fromCharCode(t[i]);return n}function cD(t,e,r){let n=t.length;(!e||e<0)&&(e=0),(!r||
r<0||r>n)&&(r=n);let i="";for(let a=e;a<r;++a)i+=yD[t[a]];return i}function dD(t,e,r){let n=t.slice(
e,r),i="";for(let a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+n[a+1]*256);return i}b.prototype.
slice=function(e,r){let n=this.length;e=~~e,r=r===void 0?n:~~r,e<0?(e+=n,e<0&&(e=0)):e>n&&(e=n),r<0?
(r+=n,r<0&&(r=0)):r>n&&(r=n),r<e&&(r=e);let i=this.subarray(e,r);return Object.setPrototypeOf(i,b.prototype),
i};function it(t,e,r){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError(
"Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,r,n){
e=e>>>0,r=r>>>0,n||it(e,r,this.length);let i=this[e],a=1,o=0;for(;++o<r&&(a*=256);)i+=this[e+o]*a;return i};
b.prototype.readUintBE=b.prototype.readUIntBE=function(e,r,n){e=e>>>0,r=r>>>0,n||it(e,r,this.length);
let i=this[e+--r],a=1;for(;r>0&&(a*=256);)i+=this[e+--r]*a;return i};b.prototype.readUint8=b.prototype.
readUInt8=function(e,r){return e=e>>>0,r||it(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.
readUInt16LE=function(e,r){return e=e>>>0,r||it(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=
b.prototype.readUInt16BE=function(e,r){return e=e>>>0,r||it(e,2,this.length),this[e]<<8|this[e+1]};b.
prototype.readUint32LE=b.prototype.readUInt32LE=function(e,r){return e=e>>>0,r||it(e,4,this.length),
(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=
function(e,r){return e=e>>>0,r||it(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+
3])};b.prototype.readBigUInt64LE=pi(function(e){e=e>>>0,Co(e,"offset");let r=this[e],n=this[e+7];(r===
void 0||n===void 0)&&bl(e,this.length-8);let i=r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+
this[++e]*2**8+this[++e]*2**16+n*2**24;return BigInt(i)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=
pi(function(e){e=e>>>0,Co(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&bl(e,this.
length-8);let i=r*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*
2**8+n;return(BigInt(i)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,r,n){e=e>>>0,r=r>>>
0,n||it(e,r,this.length);let i=this[e],a=1,o=0;for(;++o<r&&(a*=256);)i+=this[e+o]*a;return a*=128,i>=
a&&(i-=Math.pow(2,8*r)),i};b.prototype.readIntBE=function(e,r,n){e=e>>>0,r=r>>>0,n||it(e,r,this.length);
let i=r,a=1,o=this[e+--i];for(;i>0&&(a*=256);)o+=this[e+--i]*a;return a*=128,o>=a&&(o-=Math.pow(2,8*
r)),o};b.prototype.readInt8=function(e,r){return e=e>>>0,r||it(e,1,this.length),this[e]&128?(255-this[e]+
1)*-1:this[e]};b.prototype.readInt16LE=function(e,r){e=e>>>0,r||it(e,2,this.length);let n=this[e]|this[e+
1]<<8;return n&32768?n|4294901760:n};b.prototype.readInt16BE=function(e,r){e=e>>>0,r||it(e,2,this.length);
let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n};b.prototype.readInt32LE=function(e,r){return e=
e>>>0,r||it(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=
function(e,r){return e=e>>>0,r||it(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};
b.prototype.readBigInt64LE=pi(function(e){e=e>>>0,Co(e,"offset");let r=this[e],n=this[e+7];(r===void 0||
n===void 0)&&bl(e,this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(r+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=
pi(function(e){e=e>>>0,Co(e,"offset");let r=this[e],n=this[e+7];(r===void 0||n===void 0)&&bl(e,this.
length-8);let i=(r<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)});b.prototype.readFloatLE=function(e,r){return e=e>>>
0,r||it(e,4,this.length),bo.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,r){return e=e>>>
0,r||it(e,4,this.length),bo.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,r){return e=e>>>
0,r||it(e,8,this.length),bo.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,r){return e=e>>>
0,r||it(e,8,this.length),bo.read(this,e,!1,52,8)};function Lt(t,e,r,n,i,a){if(!b.isBuffer(t))throw new TypeError(
'"buffer" argument must be a Buffer instance');if(e>i||e<a)throw new RangeError('"value" argument is\
 out of bounds');if(r+n>t.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=
b.prototype.writeUIntLE=function(e,r,n,i){if(e=+e,r=r>>>0,n=n>>>0,!i){let s=Math.pow(2,8*n)-1;Lt(this,
e,r,n,s,0)}let a=1,o=0;for(this[r]=e&255;++o<n&&(a*=256);)this[r+o]=e/a&255;return r+n};b.prototype.
writeUintBE=b.prototype.writeUIntBE=function(e,r,n,i){if(e=+e,r=r>>>0,n=n>>>0,!i){let s=Math.pow(2,8*
n)-1;Lt(this,e,r,n,s,0)}let a=n-1,o=1;for(this[r+a]=e&255;--a>=0&&(o*=256);)this[r+a]=e/o&255;return r+
n};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,e,r,
1,255,0),this[r]=e&255,r+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,r,n){return e=
+e,r=r>>>0,n||Lt(this,e,r,2,65535,0),this[r]=e&255,this[r+1]=e>>>8,r+2};b.prototype.writeUint16BE=b.
prototype.writeUInt16BE=function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,e,r,2,65535,0),this[r]=e>>>8,
this[r+1]=e&255,r+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,r,n){return e=+e,
r=r>>>0,n||Lt(this,e,r,4,4294967295,0),this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=e&255,
r+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,
e,r,4,4294967295,0),this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};function D_(t,e,r,n,i){
M_(e,n,i,t,r,7);let a=Number(e&BigInt(4294967295));t[r++]=a,a=a>>8,t[r++]=a,a=a>>8,t[r++]=a,a=a>>8,t[r++]=
a;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=o,o=o>>8,t[r++]=o,o=o>>8,t[r++]=o,o=o>>
8,t[r++]=o,r}function A_(t,e,r,n,i){M_(e,n,i,t,r,7);let a=Number(e&BigInt(4294967295));t[r+7]=a,a=a>>
8,t[r+6]=a,a=a>>8,t[r+5]=a,a=a>>8,t[r+4]=a;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+
3]=o,o=o>>8,t[r+2]=o,o=o>>8,t[r+1]=o,o=o>>8,t[r]=o,r+8}b.prototype.writeBigUInt64LE=pi(function(e,r=0){
return D_(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=pi(function(e,r=0){
return A_(this,e,r,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,r,n,i){
if(e=+e,r=r>>>0,!i){let l=Math.pow(2,8*n-1);Lt(this,e,r,n,l-1,-l)}let a=0,o=1,s=0;for(this[r]=e&255;++a<
n&&(o*=256);)e<0&&s===0&&this[r+a-1]!==0&&(s=1),this[r+a]=(e/o>>0)-s&255;return r+n};b.prototype.writeIntBE=
function(e,r,n,i){if(e=+e,r=r>>>0,!i){let l=Math.pow(2,8*n-1);Lt(this,e,r,n,l-1,-l)}let a=n-1,o=1,s=0;
for(this[r+a]=e&255;--a>=0&&(o*=256);)e<0&&s===0&&this[r+a+1]!==0&&(s=1),this[r+a]=(e/o>>0)-s&255;return r+
n};b.prototype.writeInt8=function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,e,r,1,127,-128),e<0&&(e=255+
e+1),this[r]=e&255,r+1};b.prototype.writeInt16LE=function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,e,r,
2,32767,-32768),this[r]=e&255,this[r+1]=e>>>8,r+2};b.prototype.writeInt16BE=function(e,r,n){return e=
+e,r=r>>>0,n||Lt(this,e,r,2,32767,-32768),this[r]=e>>>8,this[r+1]=e&255,r+2};b.prototype.writeInt32LE=
function(e,r,n){return e=+e,r=r>>>0,n||Lt(this,e,r,4,2147483647,-2147483648),this[r]=e&255,this[r+1]=
e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24,r+4};b.prototype.writeInt32BE=function(e,r,n){return e=+e,r=
r>>>0,n||Lt(this,e,r,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[r]=e>>>24,this[r+1]=e>>>
16,this[r+2]=e>>>8,this[r+3]=e&255,r+4};b.prototype.writeBigInt64LE=pi(function(e,r=0){return D_(this,
e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=pi(function(e,r=0){
return A_(this,e,r,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function N_(t,e,r,n,i,a){
if(r+n>t.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of\
 range")}function F_(t,e,r,n,i){return e=+e,r=r>>>0,i||N_(t,e,r,4,34028234663852886e22,-34028234663852886e22),
bo.write(t,e,r,n,23,4),r+4}b.prototype.writeFloatLE=function(e,r,n){return F_(this,e,r,!0,n)};b.prototype.
writeFloatBE=function(e,r,n){return F_(this,e,r,!1,n)};function B_(t,e,r,n,i){return e=+e,r=r>>>0,i||
N_(t,e,r,8,17976931348623157e292,-17976931348623157e292),bo.write(t,e,r,n,52,8),r+8}b.prototype.writeDoubleLE=
function(e,r,n){return B_(this,e,r,!0,n)};b.prototype.writeDoubleBE=function(e,r,n){return B_(this,e,
r,!1,n)};b.prototype.copy=function(e,r,n,i){if(!b.isBuffer(e))throw new TypeError("argument should b\
e a Buffer");if(n||(n=0),!i&&i!==0&&(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&i<n&&(i=
n),i===n||e.length===0||this.length===0)return 0;if(r<0)throw new RangeError("targetStart out of bou\
nds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);let a=i-n;
return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(r,n,i):Uint8Array.
prototype.set.call(e,this.subarray(n,i),r),a};b.prototype.fill=function(e,r,n,i){if(typeof e=="strin\
g"){if(typeof r=="string"?(i=r,r=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i=="string"&&!b.isEncoding(
i))throw new TypeError("Unknown encoding: "+i);if(e.length===1){let o=e.charCodeAt(0);(i==="utf8"&&o<
128||i==="latin1")&&(e=o)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(r<0||
this.length<r||this.length<n)throw new RangeError("Out of range index");if(n<=r)return this;r=r>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let a;if(typeof e=="number")for(a=r;a<n;++a)this[a]=e;else{let o=b.
isBuffer(e)?e:b.from(e,i),s=o.length;if(s===0)throw new TypeError('The value "'+e+'" is invalid for \
argument "value"');for(a=0;a<n-r;++a)this[a+r]=o[a%s]}return this};var ko={};function mg(t,e,r){ko[t]=
class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),
writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){
return t}set code(i){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:i,writable:!0})}toString(){
return`${this.name} [${t}]: ${this.message}`}}}mg("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t}\
 is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);mg("ERR_\
INVALID_ARG_TYPE",function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`},
TypeError);mg("ERR_OUT_OF_RANGE",function(t,e,r){let n=`The value of "${t}" is out of range.`,i=r;return Number.
isInteger(r)&&Math.abs(r)>2**32?i=k_(String(r)):typeof r=="bigint"&&(i=String(r),(r>BigInt(2)**BigInt(
32)||r<-(BigInt(2)**BigInt(32)))&&(i=k_(i)),i+="n"),n+=` It must be ${e}. Received ${i}`,n},RangeError);
function k_(t){let e="",r=t.length,n=t[0]==="-"?1:0;for(;r>=n+4;r-=3)e=`_${t.slice(r-3,r)}${e}`;return`${t.
slice(0,r)}${e}`}function fD(t,e,r){Co(e,"offset"),(t[e]===void 0||t[e+r]===void 0)&&bl(e,t.length-(r+
1))}function M_(t,e,r,n,i,a){if(t>r||t<e){let o=typeof e=="bigint"?"n":"",s;throw a>3?e===0||e===BigInt(
0)?s=`>= 0${o} and < 2${o} ** ${(a+1)*8}${o}`:s=`>= -(2${o} ** ${(a+1)*8-1}${o}) and < 2 ** ${(a+1)*
8-1}${o}`:s=`>= ${e}${o} and <= ${r}${o}`,new ko.ERR_OUT_OF_RANGE("value",s,t)}fD(n,i,a)}function Co(t,e){
if(typeof t!="number")throw new ko.ERR_INVALID_ARG_TYPE(e,"number",t)}function bl(t,e,r){throw Math.
floor(t)!==t?(Co(t,r),new ko.ERR_OUT_OF_RANGE(r||"offset","an integer",t)):e<0?new ko.ERR_BUFFER_OUT_OF_BOUNDS:
new ko.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${e}`,t)}var pD=/[^+/0-9A-Za-z-_]/g;function hD(t){
if(t=t.split("=")[0],t=t.trim().replace(pD,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}
function fg(t,e){e=e||1/0;let r,n=t.length,i=null,a=[];for(let o=0;o<n;++o){if(r=t.charCodeAt(o),r>55295&&
r<57344){if(!i){if(r>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&a.push(
239,191,189);continue}i=r;continue}if(r<56320){(e-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<
10|r-56320)+65536}else i&&(e-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((e-=1)<0)break;a.push(r)}else if(r<
2048){if((e-=2)<0)break;a.push(r>>6|192,r&63|128)}else if(r<65536){if((e-=3)<0)break;a.push(r>>12|224,
r>>6&63|128,r&63|128)}else if(r<1114112){if((e-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,
r&63|128)}else throw new Error("Invalid code point")}return a}function mD(t){let e=[];for(let r=0;r<
t.length;++r)e.push(t.charCodeAt(r)&255);return e}function gD(t,e){let r,n,i,a=[];for(let o=0;o<t.length&&
!((e-=2)<0);++o)r=t.charCodeAt(o),n=r>>8,i=r%256,a.push(i),a.push(n);return a}function O_(t){return ug.
toByteArray(hD(t))}function Wc(t,e,r,n){let i;for(i=0;i<n&&!(i+r>=e.length||i>=t.length);++i)e[i+r]=
t[i];return i}function Yr(t,e){return t instanceof e||t!=null&&t.constructor!=null&&t.constructor.name!=
null&&t.constructor.name===e.name}function gg(t){return t!==t}var yD=function(){let t="0123456789abc\
def",e=new Array(256);for(let r=0;r<16;++r){let n=r*16;for(let i=0;i<16;++i)e[n+i]=t[r]+t[i]}return e}();
function pi(t){return typeof BigInt>"u"?vD:t}function vD(){throw new Error("BigInt not supported")}});var H_=I((H4,j_)=>{var qe=j_.exports={},Qr,Zr;function yg(){throw new Error("setTimeout has not been\
 defined")}function vg(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout==
"function"?Qr=setTimeout:Qr=yg}catch{Qr=yg}try{typeof clearTimeout=="function"?Zr=clearTimeout:Zr=vg}catch{
Zr=vg}})();function L_(t){if(Qr===setTimeout)return setTimeout(t,0);if((Qr===yg||!Qr)&&setTimeout)return Qr=
setTimeout,setTimeout(t,0);try{return Qr(t,0)}catch{try{return Qr.call(null,t,0)}catch{return Qr.call(
this,t,0)}}}function wD(t){if(Zr===clearTimeout)return clearTimeout(t);if((Zr===vg||!Zr)&&clearTimeout)
return Zr=clearTimeout,clearTimeout(t);try{return Zr(t)}catch{try{return Zr.call(null,t)}catch{return Zr.
call(this,t)}}}var En=[],Po=!1,ua,Kc=-1;function xD(){!Po||!ua||(Po=!1,ua.length?En=ua.concat(En):Kc=
-1,En.length&&U_())}function U_(){if(!Po){var t=L_(xD);Po=!0;for(var e=En.length;e;){for(ua=En,En=[];++Kc<
e;)ua&&ua[Kc].run();Kc=-1,e=En.length}ua=null,Po=!1,wD(t)}}qe.nextTick=function(t){var e=new Array(arguments.
length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];En.push(new z_(
t,e)),En.length===1&&!Po&&L_(U_)};function z_(t,e){this.fun=t,this.array=e}z_.prototype.run=function(){
this.fun.apply(null,this.array)};qe.title="browser";qe.browser=!0;qe.env={};qe.argv=[];qe.version="";
qe.versions={};function _n(){}qe.on=_n;qe.addListener=_n;qe.once=_n;qe.off=_n;qe.removeListener=_n;qe.
removeAllListeners=_n;qe.emit=_n;qe.prependListener=_n;qe.prependOnceListener=_n;qe.listeners=function(t){
return[]};qe.binding=function(t){throw new Error("process.binding is not supported")};qe.cwd=function(){
return"/"};qe.chdir=function(t){throw new Error("process.chdir is not supported")};qe.umask=function(){
return 0}});var $_=I((q4,q_)=>{var Do=1e3,Ao=Do*60,No=Ao*60,ca=No*24,ED=ca*7,_D=ca*365.25;q_.exports=function(t,e){
e=e||{};var r=typeof t;if(r==="string"&&t.length>0)return SD(t);if(r==="number"&&isFinite(t))return e.
long?kD(t):TD(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(
t))};function SD(t){if(t=String(t),!(t.length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.
exec(t);if(e){var r=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"\
yrs":case"yr":case"y":return r*_D;case"weeks":case"week":case"w":return r*ED;case"days":case"day":case"\
d":return r*ca;case"hours":case"hour":case"hrs":case"hr":case"h":return r*No;case"minutes":case"minu\
te":case"mins":case"min":case"m":return r*Ao;case"seconds":case"second":case"secs":case"sec":case"s":
return r*Do;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r;default:return}}}}
function TD(t){var e=Math.abs(t);return e>=ca?Math.round(t/ca)+"d":e>=No?Math.round(t/No)+"h":e>=Ao?
Math.round(t/Ao)+"m":e>=Do?Math.round(t/Do)+"s":t+"ms"}function kD(t){var e=Math.abs(t);return e>=ca?
Gc(t,e,ca,"day"):e>=No?Gc(t,e,No,"hour"):e>=Ao?Gc(t,e,Ao,"minute"):e>=Do?Gc(t,e,Do,"second"):t+" ms"}
function Gc(t,e,r,n){var i=e>=r*1.5;return Math.round(t/r)+" "+n+(i?"s":"")}});var W_=I(($4,V_)=>{function bD(t){r.debug=r,r.default=r,r.coerce=l,r.disable=a,r.enable=i,r.enabled=
o,r.humanize=$_(),r.destroy=u,Object.keys(t).forEach(c=>{r[c]=t[c]}),r.names=[],r.skips=[],r.formatters=
{};function e(c){let d=0;for(let f=0;f<c.length;f++)d=(d<<5)-d+c.charCodeAt(f),d|=0;return r.colors[Math.
abs(d)%r.colors.length]}r.selectColor=e;function r(c){let d,f=null,m,w;function g(...E){if(!g.enabled)
return;let p=g,h=Number(new Date),y=h-(d||h);p.diff=y,p.prev=d,p.curr=h,d=h,E[0]=r.coerce(E[0]),typeof E[0]!=
"string"&&E.unshift("%O");let x=0;E[0]=E[0].replace(/%([a-zA-Z%])/g,(v,S)=>{if(v==="%%")return"%";x++;
let C=r.formatters[S];if(typeof C=="function"){let D=E[x];v=C.call(p,D),E.splice(x,1),x--}return v}),
r.formatArgs.call(p,E),(p.log||r.log).apply(p,E)}return g.namespace=c,g.useColors=r.useColors(),g.color=
r.selectColor(c),g.extend=n,g.destroy=r.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,
get:()=>f!==null?f:(m!==r.namespaces&&(m=r.namespaces,w=r.enabled(c)),w),set:E=>{f=E}}),typeof r.init==
"function"&&r.init(g),g}function n(c,d){let f=r(this.namespace+(typeof d>"u"?":":d)+c);return f.log=
this.log,f}function i(c){r.save(c),r.namespaces=c,r.names=[],r.skips=[];let d,f=(typeof c=="string"?
c:"").split(/[\s,]+/),m=f.length;for(d=0;d<m;d++)f[d]&&(c=f[d].replace(/\*/g,".*?"),c[0]==="-"?r.skips.
push(new RegExp("^"+c.slice(1)+"$")):r.names.push(new RegExp("^"+c+"$")))}function a(){let c=[...r.names.
map(s),...r.skips.map(s).map(d=>"-"+d)].join(",");return r.enable(""),c}function o(c){if(c[c.length-
1]==="*")return!0;let d,f;for(d=0,f=r.skips.length;d<f;d++)if(r.skips[d].test(c))return!1;for(d=0,f=
r.names.length;d<f;d++)if(r.names[d].test(c))return!0;return!1}function s(c){return c.toString().substring(
2,c.toString().length-2).replace(/\.\*\?$/,"*")}function l(c){return c instanceof Error?c.stack||c.message:
c}function u(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anyt\
hing. It will be removed in the next major version of `debug`.")}return r.enable(r.load()),r}V_.exports=
bD});var he=I((Qt,Xc)=>{Qt.formatArgs=ID;Qt.save=RD;Qt.load=PD;Qt.useColors=CD;Qt.storage=DD();Qt.destroy=
(()=>{let t=!1;return()=>{t||(t=!0,console.warn("Instance method `debug.destroy()` is deprecated and\
 no longer does anything. It will be removed in the next major version of `debug`."))}})();Qt.colors=
["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33",
"#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF",
"#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF",
"#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33",
"#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399",
"#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033",
"#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF",
"#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function CD(){return typeof window<"u"&&
window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.
userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&
document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||
typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.
table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&
parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().
match(/applewebkit\/(\d+)/)}function ID(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?
" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+Xc.exports.humanize(this.diff),!this.useColors)return;
let e="color: "+this.color;t.splice(1,0,e,"color: inherit");let r=0,n=0;t[0].replace(/%[a-zA-Z%]/g,i=>{
i!=="%%"&&(r++,i==="%c"&&(n=r))}),t.splice(n,0,e)}Qt.log=console.debug||console.log||(()=>{});function RD(t){
try{t?Qt.storage.setItem("debug",t):Qt.storage.removeItem("debug")}catch{}}function PD(){let t;try{t=
Qt.storage.getItem("debug")}catch{}return!t&&typeof process<"u"&&"env"in process&&(t=process.env.DEBUG),
t}function DD(){try{return localStorage}catch{}}Xc.exports=W_()(Qt);var{formatters:AD}=Xc.exports;AD.
j=function(t){try{return JSON.stringify(t)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}});var Yc=I(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.EndOfStreamError=da.
defaultMessages=void 0;da.defaultMessages="End-Of-Stream";var wg=class extends Error{constructor(){super(
da.defaultMessages)}};da.EndOfStreamError=wg});var K_=I(Qc=>{"use strict";Object.defineProperty(Qc,"__esModule",{value:!0});Qc.Deferred=void 0;var xg=class{constructor(){
this.resolve=()=>null,this.reject=()=>null,this.promise=new Promise((e,r)=>{this.reject=r,this.resolve=
e})}};Qc.Deferred=xg});var X_=I(Fo=>{"use strict";Object.defineProperty(Fo,"__esModule",{value:!0});Fo.StreamReader=Fo.EndOfStreamError=
void 0;var G_=Yc(),ND=K_(),FD=Yc();Object.defineProperty(Fo,"EndOfStreamError",{enumerable:!0,get:function(){
return FD.EndOfStreamError}});var BD=1*1024*1024,Eg=class{constructor(e){if(this.s=e,this.deferred=null,
this.endOfStream=!1,this.peekQueue=[],!e.read||!e.once)throw new Error("Expected an instance of stre\
am.Readable");this.s.once("end",()=>this.reject(new G_.EndOfStreamError)),this.s.once("error",r=>this.
reject(r)),this.s.once("close",()=>this.reject(new Error("Stream closed")))}async peek(e,r,n){let i=await this.
read(e,r,n);return this.peekQueue.push(e.subarray(r,r+i)),i}async read(e,r,n){if(n===0)return 0;if(this.
peekQueue.length===0&&this.endOfStream)throw new G_.EndOfStreamError;let i=n,a=0;for(;this.peekQueue.
length>0&&i>0;){let o=this.peekQueue.pop();if(!o)throw new Error("peekData should be defined");let s=Math.
min(o.length,i);e.set(o.subarray(0,s),r+a),a+=s,i-=s,s<o.length&&this.peekQueue.push(o.subarray(s))}
for(;i>0&&!this.endOfStream;){let o=Math.min(i,BD),s=await this.readFromStream(e,r+a,o);if(a+=s,s<o)
break;i-=s}return a}async readFromStream(e,r,n){let i=this.s.read(n);if(i)return e.set(i,r),i.length;
{let a={buffer:e,offset:r,length:n,deferred:new ND.Deferred};return this.deferred=a.deferred,this.s.
once("readable",()=>{this.readDeferred(a)}),a.deferred.promise}}readDeferred(e){let r=this.s.read(e.
length);r?(e.buffer.set(r,e.offset),e.deferred.resolve(r.length),this.deferred=null):this.s.once("re\
adable",()=>{this.readDeferred(e)})}reject(e){this.endOfStream=!0,this.deferred&&(this.deferred.reject(
e),this.deferred=null)}};Fo.StreamReader=Eg});var Cl=I(Bo=>{"use strict";Object.defineProperty(Bo,"__esModule",{value:!0});Bo.StreamReader=Bo.EndOfStreamError=
void 0;var MD=Yc();Object.defineProperty(Bo,"EndOfStreamError",{enumerable:!0,get:function(){return MD.
EndOfStreamError}});var OD=X_();Object.defineProperty(Bo,"StreamReader",{enumerable:!0,get:function(){
return OD.StreamReader}})});var Sg=I(Jc=>{"use strict";Object.defineProperty(Jc,"__esModule",{value:!0});Jc.AbstractTokenizer=void 0;
var Zc=Cl(),_g=class{constructor(e){this.position=0,this.numBuffer=new Uint8Array(8),this.fileInfo=e||
{}}async readToken(e,r=this.position){let n=Buffer.alloc(e.len);if(await this.readBuffer(n,{position:r})<
e.len)throw new Zc.EndOfStreamError;return e.get(n,0)}async peekToken(e,r=this.position){let n=Buffer.
alloc(e.len);if(await this.peekBuffer(n,{position:r})<e.len)throw new Zc.EndOfStreamError;return e.get(
n,0)}async readNumber(e){if(await this.readBuffer(this.numBuffer,{length:e.len})<e.len)throw new Zc.
EndOfStreamError;return e.get(this.numBuffer,0)}async peekNumber(e){if(await this.peekBuffer(this.numBuffer,
{length:e.len})<e.len)throw new Zc.EndOfStreamError;return e.get(this.numBuffer,0)}async ignore(e){if(this.
fileInfo.size!==void 0){let r=this.fileInfo.size-this.position;if(e>r)return this.position+=r,r}return this.
position+=e,e}async close(){}normalizeOptions(e,r){if(r&&r.position!==void 0&&r.position<this.position)
throw new Error("`options.position` must be equal or greater than `tokenizer.position`");return r?{mayBeLess:r.
mayBeLess===!0,offset:r.offset?r.offset:0,length:r.length?r.length:e.length-(r.offset?r.offset:0),position:r.
position?r.position:this.position}:{mayBeLess:!1,offset:0,length:e.length,position:this.position}}};
Jc.AbstractTokenizer=_g});var Y_=I(td=>{"use strict";Object.defineProperty(td,"__esModule",{value:!0});td.ReadStreamTokenizer=
void 0;var LD=Sg(),ed=Cl(),UD=256e3,Tg=class extends LD.AbstractTokenizer{constructor(e,r){super(r),
this.streamReader=new ed.StreamReader(e)}async getFileInfo(){return this.fileInfo}async readBuffer(e,r){
let n=this.normalizeOptions(e,r),i=n.position-this.position;if(i>0)return await this.ignore(i),this.
readBuffer(e,r);if(i<0)throw new Error("`options.position` must be equal or greater than `tokenizer.\
position`");if(n.length===0)return 0;let a=await this.streamReader.read(e,n.offset,n.length);if(this.
position+=a,(!r||!r.mayBeLess)&&a<n.length)throw new ed.EndOfStreamError;return a}async peekBuffer(e,r){
let n=this.normalizeOptions(e,r),i=0;if(n.position){let a=n.position-this.position;if(a>0){let o=new Uint8Array(
n.length+a);return i=await this.peekBuffer(o,{mayBeLess:n.mayBeLess}),e.set(o.subarray(a),n.offset),
i-a}else if(a<0)throw new Error("Cannot peek from a negative offset in a stream")}if(n.length>0){try{
i=await this.streamReader.peek(e,n.offset,n.length)}catch(a){if(r&&r.mayBeLess&&a instanceof ed.EndOfStreamError)
return 0;throw a}if(!n.mayBeLess&&i<n.length)throw new ed.EndOfStreamError}return i}async ignore(e){
let r=Math.min(UD,e),n=new Uint8Array(r),i=0;for(;i<e;){let a=e-i,o=await this.readBuffer(n,{length:Math.
min(r,a)});if(o<0)return o;i+=o}return i}};td.ReadStreamTokenizer=Tg});var Q_=I(rd=>{"use strict";Object.defineProperty(rd,"__esModule",{value:!0});rd.BufferTokenizer=void 0;
var zD=Cl(),jD=Sg(),kg=class extends jD.AbstractTokenizer{constructor(e,r){super(r),this.uint8Array=
e,this.fileInfo.size=this.fileInfo.size?this.fileInfo.size:e.length}async readBuffer(e,r){if(r&&r.position){
if(r.position<this.position)throw new Error("`options.position` must be equal or greater than `token\
izer.position`");this.position=r.position}let n=await this.peekBuffer(e,r);return this.position+=n,n}async peekBuffer(e,r){
let n=this.normalizeOptions(e,r),i=Math.min(this.uint8Array.length-n.position,n.length);if(!n.mayBeLess&&
i<n.length)throw new zD.EndOfStreamError;return e.set(this.uint8Array.subarray(n.position,n.position+
i),n.offset),i}async close(){}};rd.BufferTokenizer=kg});var Jr=I(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.fromBuffer=hi.fromStream=
hi.EndOfStreamError=void 0;var HD=Y_(),qD=Q_(),$D=Cl();Object.defineProperty(hi,"EndOfStreamError",{
enumerable:!0,get:function(){return $D.EndOfStreamError}});function VD(t,e){return e=e||{},new HD.ReadStreamTokenizer(
t,e)}hi.fromStream=VD;function WD(t,e){return new qD.BufferTokenizer(t,e)}hi.fromBuffer=WD});var te=I(z=>{"use strict";Object.defineProperty(z,"__esModule",{value:!0});z.AnsiStringType=z.StringType=
z.BufferType=z.Uint8ArrayType=z.IgnoreType=z.Float80_LE=z.Float80_BE=z.Float64_LE=z.Float64_BE=z.Float32_LE=
z.Float32_BE=z.Float16_LE=z.Float16_BE=z.INT64_BE=z.UINT64_BE=z.INT64_LE=z.UINT64_LE=z.INT32_LE=z.INT32_BE=
z.INT24_BE=z.INT24_LE=z.INT16_LE=z.INT16_BE=z.INT8=z.UINT32_BE=z.UINT32_LE=z.UINT24_BE=z.UINT24_LE=z.
UINT16_BE=z.UINT16_LE=z.UINT8=void 0;var mi=lg();function ee(t){return new DataView(t.buffer,t.byteOffset)}
z.UINT8={len:1,get(t,e){return ee(t).getUint8(e)},put(t,e,r){return ee(t).setUint8(e,r),e+1}};z.UINT16_LE=
{len:2,get(t,e){return ee(t).getUint16(e,!0)},put(t,e,r){return ee(t).setUint16(e,r,!0),e+2}};z.UINT16_BE=
{len:2,get(t,e){return ee(t).getUint16(e)},put(t,e,r){return ee(t).setUint16(e,r),e+2}};z.UINT24_LE=
{len:3,get(t,e){let r=ee(t);return r.getUint8(e)+(r.getUint16(e+1,!0)<<8)},put(t,e,r){let n=ee(t);return n.
setUint8(e,r&255),n.setUint16(e+1,r>>8,!0),e+3}};z.UINT24_BE={len:3,get(t,e){let r=ee(t);return(r.getUint16(
e)<<8)+r.getUint8(e+2)},put(t,e,r){let n=ee(t);return n.setUint16(e,r>>8),n.setUint8(e+2,r&255),e+3}};
z.UINT32_LE={len:4,get(t,e){return ee(t).getUint32(e,!0)},put(t,e,r){return ee(t).setUint32(e,r,!0),
e+4}};z.UINT32_BE={len:4,get(t,e){return ee(t).getUint32(e)},put(t,e,r){return ee(t).setUint32(e,r),
e+4}};z.INT8={len:1,get(t,e){return ee(t).getInt8(e)},put(t,e,r){return ee(t).setInt8(e,r),e+1}};z.INT16_BE=
{len:2,get(t,e){return ee(t).getInt16(e)},put(t,e,r){return ee(t).setInt16(e,r),e+2}};z.INT16_LE={len:2,
get(t,e){return ee(t).getInt16(e,!0)},put(t,e,r){return ee(t).setInt16(e,r,!0),e+2}};z.INT24_LE={len:3,
get(t,e){let r=z.UINT24_LE.get(t,e);return r>8388607?r-16777216:r},put(t,e,r){let n=ee(t);return n.setUint8(
e,r&255),n.setUint16(e+1,r>>8,!0),e+3}};z.INT24_BE={len:3,get(t,e){let r=z.UINT24_BE.get(t,e);return r>
8388607?r-16777216:r},put(t,e,r){let n=ee(t);return n.setUint16(e,r>>8),n.setUint8(e+2,r&255),e+3}};
z.INT32_BE={len:4,get(t,e){return ee(t).getInt32(e)},put(t,e,r){return ee(t).setInt32(e,r),e+4}};z.INT32_LE=
{len:4,get(t,e){return ee(t).getInt32(e,!0)},put(t,e,r){return ee(t).setInt32(e,r,!0),e+4}};z.UINT64_LE=
{len:8,get(t,e){return ee(t).getBigUint64(e,!0)},put(t,e,r){return ee(t).setBigUint64(e,r,!0),e+8}};
z.INT64_LE={len:8,get(t,e){return ee(t).getBigInt64(e,!0)},put(t,e,r){return ee(t).setBigInt64(e,r,!0),
e+8}};z.UINT64_BE={len:8,get(t,e){return ee(t).getBigUint64(e)},put(t,e,r){return ee(t).setBigUint64(
e,r),e+8}};z.INT64_BE={len:8,get(t,e){return ee(t).getBigInt64(e)},put(t,e,r){return ee(t).setBigInt64(
e,r),e+8}};z.Float16_BE={len:2,get(t,e){return mi.read(t,e,!1,10,this.len)},put(t,e,r){return mi.write(
t,r,e,!1,10,this.len),e+this.len}};z.Float16_LE={len:2,get(t,e){return mi.read(t,e,!0,10,this.len)},
put(t,e,r){return mi.write(t,r,e,!0,10,this.len),e+this.len}};z.Float32_BE={len:4,get(t,e){return ee(
t).getFloat32(e)},put(t,e,r){return ee(t).setFloat32(e,r),e+4}};z.Float32_LE={len:4,get(t,e){return ee(
t).getFloat32(e,!0)},put(t,e,r){return ee(t).setFloat32(e,r,!0),e+4}};z.Float64_BE={len:8,get(t,e){return ee(
t).getFloat64(e)},put(t,e,r){return ee(t).setFloat64(e,r),e+8}};z.Float64_LE={len:8,get(t,e){return ee(
t).getFloat64(e,!0)},put(t,e,r){return ee(t).setFloat64(e,r,!0),e+8}};z.Float80_BE={len:10,get(t,e){
return mi.read(t,e,!1,63,this.len)},put(t,e,r){return mi.write(t,r,e,!1,63,this.len),e+this.len}};z.
Float80_LE={len:10,get(t,e){return mi.read(t,e,!0,63,this.len)},put(t,e,r){return mi.write(t,r,e,!0,
63,this.len),e+this.len}};var bg=class{constructor(e){this.len=e}get(e,r){}};z.IgnoreType=bg;var Cg=class{constructor(e){
this.len=e}get(e,r){return e.subarray(r,r+this.len)}};z.Uint8ArrayType=Cg;var Ig=class{constructor(e){
this.len=e}get(e,r){return Buffer.from(e.subarray(r,r+this.len))}};z.BufferType=Ig;var Rg=class{constructor(e,r){
this.len=e,this.encoding=r}get(e,r){return Buffer.from(e).toString(this.encoding,r,r+this.len)}};z.StringType=
Rg;var nd=class t{constructor(e){this.len=e}static decode(e,r,n){let i="";for(let a=r;a<n;++a)i+=t.codePointToString(
t.singleByteDecoder(e[a]));return i}static inRange(e,r,n){return r<=e&&e<=n}static codePointToString(e){
return e<=65535?String.fromCharCode(e):(e-=65536,String.fromCharCode((e>>10)+55296,(e&1023)+56320))}static singleByteDecoder(e){
if(t.inRange(e,0,127))return e;let r=t.windows1252[e-128];if(r===null)throw Error("invaliding encodi\
ng");return r}get(e,r=0){return t.decode(e,r,r+this.len)}};z.AnsiStringType=nd;nd.windows1252=[8364,
129,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,141,381,143,144,8216,8217,8220,8221,8226,8211,
8212,732,8482,353,8250,339,157,382,376,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,
176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,
201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,
226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,
251,252,253,254,255]});var Z_=I(id=>{"use strict";id.stringToBytes=t=>[...t].map(e=>e.charCodeAt(0));id.tarHeaderChecksumMatches=
(t,e=0)=>{let r=parseInt(t.toString("utf8",148,154).replace(/\0.*$/,"").trim(),8);if(isNaN(r))return!1;
let n=8*32;for(let i=e;i<e+148;i++)n+=t[i];for(let i=e+156;i<e+512;i++)n+=t[i];return r===n};id.uint32SyncSafeToken=
{get:(t,e)=>t[e+3]&127|t[e+2]<<7|t[e+1]<<14|t[e]<<21,len:4}});var eS=I((tU,J_)=>{"use strict";J_.exports={extensions:["jpg","png","apng","gif","webp","flif","xcf",
"cr2","cr3","orf","arw","dng","nef","rw2","raf","tif","bmp","icns","jxr","psd","indd","zip","tar","r\
ar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","\
ogv","opus","flac","wav","spx","amr","pdf","epub","exe","swf","rtf","wasm","woff","woff2","eot","ttf",
"otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","cfb","mxf","\
mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","jp2","jpm","jpx","mj2","aif","qcp","odt","ods",
"odp","xml","mobi","heic","cur","ktx","ape","wv","dcm","ics","glb","pcap","dsf","lnk","alias","voc",
"ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc","arrow","shp","aac","m\
p1","it","s3m","xm","ai","skp","avif","eps","lzh","pgp","asar","stl","chm","3mf","zst","jxl","vcf"],
mimeTypes:["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-xcf","image/x-can\
on-cr2","image/x-canon-cr3","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop",
"application/x-indesign","application/epub+zip","application/x-xpinstall","application/vnd.oasis.ope\
ndocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument\
.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","applicatio\
n/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-off\
icedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed",
"application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimag\
e","application/x-apache-arrow","video/mp4","audio/midi","video/x-matroska","video/webm","video/quic\
ktime","video/vnd.avi","audio/vnd.wave","audio/qcelp","audio/x-ms-asf","video/x-ms-asf","application\
/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","audio/opus","video/ogg","audio/ogg",
"application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","applicat\
ion/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","\
font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","appl\
ication/postscript","application/eps","application/x-xz","application/x-sqlite3","application/x-nint\
endo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","applicati\
on/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-l\
zip","application/x-cfb","application/x-mie","application/mxf","video/mp2t","application/x-blender",
"image/bpg","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","applicat\
ion/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image\
/icns","image/ktx","application/dicom","audio/x-musepack","text/calendar","text/vcard","model/gltf-b\
inary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple\
.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","ima\
ge/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf",
"video/x-m4v","video/3gpp2","application/x-esri-shape","audio/aac","audio/x-it","audio/x-s3m","audio\
/x-xm","video/MP1S","video/MP2P","application/vnd.sketchup.skp","image/avif","application/x-lzh-comp\
ressed","application/pgp-encrypted","application/x-asar","model/stl","application/vnd.ms-htmlhelp","\
model/3mf","image/jxl","application/zstd"]}});var Pg=I((exports,module)=>{"use strict";var Token=te(),strtok3=Jr(),{stringToBytes,tarHeaderChecksumMatches,
uint32SyncSafeToken}=Z_(),supported=eS(),minimumBytes=4100;async function fromStream(t){let e=await strtok3.
fromStream(t);try{return await fromTokenizer(e)}finally{await e.close()}}async function fromBuffer(t){
if(!(t instanceof Uint8Array||t instanceof ArrayBuffer||Buffer.isBuffer(t)))throw new TypeError(`Exp\
ected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof t}\
\``);let e=t instanceof Buffer?t:Buffer.from(t);if(!(e&&e.length>1))return;let r=strtok3.fromBuffer(
e);return fromTokenizer(r)}function _check(t,e,r){r={offset:0,...r};for(let[n,i]of e.entries())if(r.
mask){if(i!==(r.mask[n]&t[n+r.offset]))return!1}else if(i!==t[n+r.offset])return!1;return!0}async function fromTokenizer(t){
try{return _fromTokenizer(t)}catch(e){if(!(e instanceof strtok3.EndOfStreamError))throw e}}async function _fromTokenizer(t){
let e=Buffer.alloc(minimumBytes),r=12,n=(a,o)=>_check(e,a,o),i=(a,o)=>n(stringToBytes(a),o);if(t.fileInfo.
size||(t.fileInfo.size=Number.MAX_SAFE_INTEGER),await t.peekBuffer(e,{length:r,mayBeLess:!0}),n([66,
77]))return{ext:"bmp",mime:"image/bmp"};if(n([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};
if(n([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(n([77,90]))return{ext:"exe",
mime:"application/x-msdownload"};if(n([37,33]))return await t.peekBuffer(e,{length:24,mayBeLess:!0}),
i("PS-Adobe-",{offset:2})&&i(" EPSF-",{offset:14})?{ext:"eps",mime:"application/eps"}:{ext:"ps",mime:"\
application/postscript"};if(n([31,160])||n([31,157]))return{ext:"Z",mime:"application/x-compress"};if(n(
[255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(n([73,73,188]))return{ext:"jxr",mime:"image/vn\
d.ms-photo"};if(n([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(n([66,90,104]))return{ext:"\
bz2",mime:"application/x-bzip2"};if(i("ID3")){await t.ignore(6);let a=await t.readToken(uint32SyncSafeToken);
return t.position+a>t.fileInfo.size?{ext:"mp3",mime:"audio/mpeg"}:(await t.ignore(a),fromTokenizer(t))}
if(i("MP+"))return{ext:"mpc",mime:"audio/x-musepack"};if((e[0]===67||e[0]===70)&&n([87,83],{offset:1}))
return{ext:"swf",mime:"application/x-shockwave-flash"};if(n([71,73,70]))return{ext:"gif",mime:"image\
/gif"};if(i("FLIF"))return{ext:"flif",mime:"image/flif"};if(i("8BPS"))return{ext:"psd",mime:"image/v\
nd.adobe.photoshop"};if(i("WEBP",{offset:8}))return{ext:"webp",mime:"image/webp"};if(i("MPCK"))return{
ext:"mpc",mime:"audio/x-musepack"};if(i("FORM"))return{ext:"aif",mime:"audio/aiff"};if(i("icns",{offset:0}))
return{ext:"icns",mime:"image/icns"};if(n([80,75,3,4])){try{for(;t.position+30<t.fileInfo.size;){await t.
readBuffer(e,{length:30});let a={compressedSize:e.readUInt32LE(18),uncompressedSize:e.readUInt32LE(22),
filenameLength:e.readUInt16LE(26),extraFieldLength:e.readUInt16LE(28)};if(a.filename=await t.readToken(
new Token.StringType(a.filenameLength,"utf-8")),await t.ignore(a.extraFieldLength),a.filename==="MET\
A-INF/mozilla.rsa")return{ext:"xpi",mime:"application/x-xpinstall"};if(a.filename.endsWith(".rels")||
a.filename.endsWith(".xml"))switch(a.filename.split("/")[0]){case"_rels":break;case"word":return{ext:"\
docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"};case"ppt":return{
ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"};case"xl":
return{ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};default:
break}if(a.filename.startsWith("xl/"))return{ext:"xlsx",mime:"application/vnd.openxmlformats-officed\
ocument.spreadsheetml.sheet"};if(a.filename.startsWith("3D/")&&a.filename.endsWith(".model"))return{
ext:"3mf",mime:"model/3mf"};if(a.filename==="mimetype"&&a.compressedSize===a.uncompressedSize)switch(await t.
readToken(new Token.StringType(a.compressedSize,"utf-8"))){case"application/epub+zip":return{ext:"ep\
ub",mime:"application/epub+zip"};case"application/vnd.oasis.opendocument.text":return{ext:"odt",mime:"\
application/vnd.oasis.opendocument.text"};case"application/vnd.oasis.opendocument.spreadsheet":return{
ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};case"application/vnd.oasis.opendocu\
ment.presentation":return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};default:}
if(a.compressedSize===0){let o=-1;for(;o<0&&t.position<t.fileInfo.size;)await t.peekBuffer(e,{mayBeLess:!0}),
o=e.indexOf("504B0304",0,"hex"),await t.ignore(o>=0?o:e.length)}else await t.ignore(a.compressedSize)}}catch(a){
if(!(a instanceof strtok3.EndOfStreamError))throw a}return{ext:"zip",mime:"application/zip"}}if(i("O\
ggS")){await t.ignore(28);let a=Buffer.alloc(8);return await t.readBuffer(a),_check(a,[79,112,117,115,
72,101,97,100])?{ext:"opus",mime:"audio/opus"}:_check(a,[128,116,104,101,111,114,97])?{ext:"ogv",mime:"\
video/ogg"}:_check(a,[1,118,105,100,101,111,0])?{ext:"ogm",mime:"video/ogg"}:_check(a,[127,70,76,65,
67])?{ext:"oga",mime:"audio/ogg"}:_check(a,[83,112,101,101,120,32,32])?{ext:"spx",mime:"audio/ogg"}:
_check(a,[1,118,111,114,98,105,115])?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"}}
if(n([80,75])&&(e[2]===3||e[2]===5||e[2]===7)&&(e[3]===4||e[3]===6||e[3]===8))return{ext:"zip",mime:"\
application/zip"};if(i("ftyp",{offset:4})&&e[8]&96){let a=e.toString("binary",8,12).replace("\0"," ").
trim();switch(a){case"avif":return{ext:"avif",mime:"image/avif"};case"mif1":return{ext:"heic",mime:"\
image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"\
heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt":
return{ext:"mov",mime:"video/quicktime"};case"M4V":case"M4VH":case"M4VP":return{ext:"m4v",mime:"vide\
o/x-m4v"};case"M4P":return{ext:"m4p",mime:"video/mp4"};case"M4B":return{ext:"m4b",mime:"audio/mp4"};case"\
M4A":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V":return{ext:"f4v",mime:"video/mp4"};case"F4P":return{
ext:"f4p",mime:"video/mp4"};case"F4A":return{ext:"f4a",mime:"audio/mp4"};case"F4B":return{ext:"f4b",
mime:"audio/mp4"};case"crx":return{ext:"cr3",mime:"image/x-canon-cr3"};default:return a.startsWith("\
3g")?a.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"\
video/mp4"}}}if(i("MThd"))return{ext:"mid",mime:"audio/midi"};if(i("wOFF")&&(n([0,1,0,0],{offset:4})||
i("OTTO",{offset:4})))return{ext:"woff",mime:"font/woff"};if(i("wOF2")&&(n([0,1,0,0],{offset:4})||i(
"OTTO",{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(n([212,195,178,161])||n([161,178,195,212]))
return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(i("DSD "))return{ext:"dsf",mime:"audio/x-d\
sf"};if(i("LZIP"))return{ext:"lz",mime:"application/x-lzip"};if(i("fLaC"))return{ext:"flac",mime:"au\
dio/x-flac"};if(n([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(i("wvpk"))return{ext:"wv",mime:"\
audio/wavpack"};if(i("%PDF")){await t.ignore(1350);let a=10*1024*1024,o=Buffer.alloc(Math.min(a,t.fileInfo.
size));return await t.readBuffer(o,{mayBeLess:!0}),o.includes(Buffer.from("AIPrivateData"))?{ext:"ai",
mime:"application/postscript"}:{ext:"pdf",mime:"application/pdf"}}if(n([0,97,115,109]))return{ext:"w\
asm",mime:"application/wasm"};if(n([73,73,42,0]))return i("CR",{offset:8})?{ext:"cr2",mime:"image/x-\
canon-cr2"}:n([28,0,254,0],{offset:8})||n([31,0,11,0],{offset:8})?{ext:"nef",mime:"image/x-nikon-nef"}:
n([8,0,0,0],{offset:4})&&(n([45,0,254,0],{offset:8})||n([39,0,254,0],{offset:8}))?{ext:"dng",mime:"i\
mage/x-adobe-dng"}:(e=Buffer.alloc(24),await t.peekBuffer(e),(n([16,251,134,1],{offset:4})||n([8,0,0,
0],{offset:4}))&&n([0,254,0,4,0,1,0,0,0,1,0,0,0,3,1],{offset:9})?{ext:"arw",mime:"image/x-sony-arw"}:
{ext:"tif",mime:"image/tiff"});if(n([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(i("MAC "))return{
ext:"ape",mime:"audio/ape"};if(n([26,69,223,163])){async function a(){let c=await t.peekNumber(Token.
UINT8),d=128,f=0;for(;!(c&d)&&d!==0;)++f,d>>=1;let m=Buffer.alloc(f+1);return await t.readBuffer(m),
m}async function o(){let c=await a(),d=await a();d[0]^=128>>d.length-1;let f=Math.min(6,d.length);return{
id:c.readUIntBE(0,c.length),len:d.readUIntBE(d.length-f,f)}}async function s(c,d){for(;d>0;){let f=await o();
if(f.id===17026)return t.readToken(new Token.StringType(f.len,"utf-8"));await t.ignore(f.len),--d}}let l=await o();
switch(await s(1,l.len)){case"webm":return{ext:"webm",mime:"video/webm"};case"matroska":return{ext:"\
mkv",mime:"video/x-matroska"};default:return}}if(n([82,73,70,70])){if(n([65,86,73],{offset:8}))return{
ext:"avi",mime:"video/vnd.avi"};if(n([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};
if(n([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(i("SQLi"))return{ext:"sqlite",
mime:"application/x-sqlite3"};if(n([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-\
rom"};if(i("Cr24"))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(i("MSCF")||i("I\
Sc("))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(n([237,171,238,219]))return{ext:"\
rpm",mime:"application/x-rpm"};if(n([197,208,211,198]))return{ext:"eps",mime:"application/eps"};if(n(
[40,181,47,253]))return{ext:"zst",mime:"application/zstd"};if(n([79,84,84,79,0]))return{ext:"otf",mime:"\
font/otf"};if(i("#!AMR"))return{ext:"amr",mime:"audio/amr"};if(i("{\\rtf"))return{ext:"rtf",mime:"ap\
plication/rtf"};if(n([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(i("IMPM"))return{ext:"it",
mime:"audio/x-it"};if(i("-lh0-",{offset:2})||i("-lh1-",{offset:2})||i("-lh2-",{offset:2})||i("-lh3-",
{offset:2})||i("-lh4-",{offset:2})||i("-lh5-",{offset:2})||i("-lh6-",{offset:2})||i("-lh7-",{offset:2})||
i("-lzs-",{offset:2})||i("-lz4-",{offset:2})||i("-lz5-",{offset:2})||i("-lhd-",{offset:2}))return{ext:"\
lzh",mime:"application/x-lzh-compressed"};if(n([0,0,1,186])){if(n([33],{offset:4,mask:[241]}))return{
ext:"mpg",mime:"video/MP1S"};if(n([68],{offset:4,mask:[196]}))return{ext:"mpg",mime:"video/MP2P"}}if(i(
"ITSF"))return{ext:"chm",mime:"application/vnd.ms-htmlhelp"};if(n([253,55,122,88,90,0]))return{ext:"\
xz",mime:"application/x-xz"};if(i("<?xml "))return{ext:"xml",mime:"application/xml"};if(n([55,122,188,
175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(n([82,97,114,33,26,7])&&(e[6]===0||
e[6]===1))return{ext:"rar",mime:"application/x-rar-compressed"};if(i("solid "))return{ext:"stl",mime:"\
model/stl"};if(i("BLENDER"))return{ext:"blend",mime:"application/x-blender"};if(i("!<arch>"))return await t.
ignore(8),await t.readToken(new Token.StringType(13,"ascii"))==="debian-binary"?{ext:"deb",mime:"app\
lication/x-deb"}:{ext:"ar",mime:"application/x-unix-archive"};if(n([137,80,78,71,13,10,26,10])){await t.
ignore(8);async function a(){return{length:await t.readToken(Token.INT32_BE),type:await t.readToken(
new Token.StringType(4,"binary"))}}do{let o=await a();if(o.length<0)return;switch(o.type){case"IDAT":
return{ext:"png",mime:"image/png"};case"acTL":return{ext:"apng",mime:"image/apng"};default:await t.ignore(
o.length+4)}}while(t.position+8<t.fileInfo.size);return{ext:"png",mime:"image/png"}}if(n([65,82,82,79,
87,49,0,0]))return{ext:"arrow",mime:"application/x-apache-arrow"};if(n([103,108,84,70,2,0,0,0]))return{
ext:"glb",mime:"model/gltf-binary"};if(n([102,114,101,101],{offset:4})||n([109,100,97,116],{offset:4})||
n([109,111,111,118],{offset:4})||n([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quickt\
ime"};if(n([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(i("gimp xcf "))
return{ext:"xcf",mime:"image/x-xcf"};if(n([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"\
image/x-panasonic-rw2"};if(n([48,38,178,117,142,102,207,17,166,217])){async function a(){let o=Buffer.
alloc(16);return await t.readBuffer(o),{id:o,size:Number(await t.readToken(Token.UINT64_LE))}}for(await t.
ignore(30);t.position+24<t.fileInfo.size;){let o=await a(),s=o.size-24;if(_check(o.id,[145,7,220,183,
183,169,207,17,142,230,0,192,12,32,83,101])){let l=Buffer.alloc(16);if(s-=await t.readBuffer(l),_check(
l,[64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"audio/x-ms-asf"};if(_check(
l,[192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43]))return{ext:"asf",mime:"video/x-ms-asf"};break}
await t.ignore(s)}return{ext:"asf",mime:"application/vnd.ms-asf"}}if(n([171,75,84,88,32,49,49,187,13,
10,26,10]))return{ext:"ktx",mime:"image/ktx"};if((n([126,16,4])||n([126,24,4]))&&n([48,77,73,69],{offset:4}))
return{ext:"mie",mime:"application/x-mie"};if(n([39,10,0,0,0,0,0,0,0,0,0,0],{offset:2}))return{ext:"\
shp",mime:"application/x-esri-shape"};if(n([0,0,0,12,106,80,32,32,13,10,135,10]))switch(await t.ignore(
20),await t.readToken(new Token.StringType(4,"ascii"))){case"jp2 ":return{ext:"jp2",mime:"image/jp2"};case"\
jpx ":return{ext:"jpx",mime:"image/jpx"};case"jpm ":return{ext:"jpm",mime:"image/jpm"};case"mjp2":return{
ext:"mj2",mime:"image/mj2"};default:return}if(n([255,10])||n([0,0,0,12,74,88,76,32,13,10,135,10]))return{
ext:"jxl",mime:"image/jxl"};if(n([0,0,1,186])||n([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};if(n(
[0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(n([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};
if(n([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(n([208,207,17,224,161,177,26,225]))return{ext:"\
cfb",mime:"application/x-cfb"};if(await t.peekBuffer(e,{length:Math.min(256,t.fileInfo.size),mayBeLess:!0}),
i("BEGIN:")){if(i("VCARD",{offset:6}))return{ext:"vcf",mime:"text/vcard"};if(i("VCALENDAR",{offset:6}))
return{ext:"ics",mime:"text/calendar"}}if(i("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifi\
lm-raf"};if(i("Extended Module:"))return{ext:"xm",mime:"audio/x-xm"};if(i("Creative Voice File"))return{
ext:"voc",mime:"audio/x-voc"};if(n([4,0,0,0])&&e.length>=16){let a=e.readUInt32LE(12);if(a>12&&e.length>=
a+16)try{let o=e.slice(16,a+16).toString();if(JSON.parse(o).files)return{ext:"asar",mime:"applicatio\
n/x-asar"}}catch{}}if(n([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};
if(i("SCRM",{offset:44}))return{ext:"s3m",mime:"audio/x-s3m"};if(n([71],{offset:4})&&(n([71],{offset:192})||
n([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(n([66,79,79,75,77,79,66,73],{offset:60}))
return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(n([68,73,67,77],{offset:128}))return{ext:"\
dcm",mime:"application/dicom"};if(n([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",
mime:"application/x.ms.shortcut"};if(n([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"\
alias",mime:"application/x.apple.alias"};if(n([76,80],{offset:34})&&(n([0,0,1],{offset:8})||n([1,0,2],
{offset:8})||n([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(n([6,6,
237,245,216,29,70,229,189,49,239,231,254,116,183,29]))return{ext:"indd",mime:"application/x-indesign"};
if(await t.peekBuffer(e,{length:Math.min(512,t.fileInfo.size),mayBeLess:!0}),tarHeaderChecksumMatches(
e))return{ext:"tar",mime:"application/x-tar"};if(n([255,254,255,14,83,0,107,0,101,0,116,0,99,0,104,0,
85,0,112,0,32,0,77,0,111,0,100,0,101,0,108,0]))return{ext:"skp",mime:"application/vnd.sketchup.skp"};
if(i("-----BEGIN PGP MESSAGE-----"))return{ext:"pgp",mime:"application/pgp-encrypted"};if(e.length>=
2&&n([255,224],{offset:0,mask:[255,224]})){if(n([16],{offset:1,mask:[22]}))return n([8],{offset:1,mask:[
8]})?{ext:"aac",mime:"audio/aac"}:{ext:"aac",mime:"audio/aac"};if(n([2],{offset:1,mask:[6]}))return{
ext:"mp3",mime:"audio/mpeg"};if(n([4],{offset:1,mask:[6]}))return{ext:"mp2",mime:"audio/mpeg"};if(n(
[6],{offset:1,mask:[6]}))return{ext:"mp1",mime:"audio/mpeg"}}}var stream=readableStream=>new Promise(
(resolve,reject)=>{let stream=eval("require")("stream");readableStream.on("error",reject),readableStream.
once("readable",async()=>{let t=new stream.PassThrough,e;stream.pipeline?e=stream.pipeline(readableStream,
t,()=>{}):e=readableStream.pipe(t);let r=readableStream.read(minimumBytes)||readableStream.read()||Buffer.
alloc(0);try{let n=await fromBuffer(r);t.fileType=n}catch(n){reject(n)}resolve(e)})}),fileType={fromStream,
fromTokenizer,fromBuffer,stream};Object.defineProperty(fileType,"extensions",{get(){return new Set(supported.
extensions)}});Object.defineProperty(fileType,"mimeTypes",{get(){return new Set(supported.mimeTypes)}});
module.exports=fileType});var iS=I(Dg=>{"use strict";var tS=/; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g,
KD=/^[\u000b\u0020-\u007e\u0080-\u00ff]+$/,rS=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/,GD=/\\([\u000b\u0020-\u00ff])/g,
XD=/([\\"])/g,nS=/^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;Dg.format=YD;Dg.parse=
QD;function YD(t){if(!t||typeof t!="object")throw new TypeError("argument obj is required");var e=t.
parameters,r=t.type;if(!r||!nS.test(r))throw new TypeError("invalid type");var n=r;if(e&&typeof e=="\
object")for(var i,a=Object.keys(e).sort(),o=0;o<a.length;o++){if(i=a[o],!rS.test(i))throw new TypeError(
"invalid parameter name");n+="; "+i+"="+JD(e[i])}return n}function QD(t){if(!t)throw new TypeError("\
argument string is required");var e=typeof t=="object"?ZD(t):t;if(typeof e!="string")throw new TypeError(
"argument string is required to be a string");var r=e.indexOf(";"),n=r!==-1?e.slice(0,r).trim():e.trim();
if(!nS.test(n))throw new TypeError("invalid media type");var i=new eA(n.toLowerCase());if(r!==-1){var a,
o,s;for(tS.lastIndex=r;o=tS.exec(e);){if(o.index!==r)throw new TypeError("invalid parameter format");
r+=o[0].length,a=o[1].toLowerCase(),s=o[2],s.charCodeAt(0)===34&&(s=s.slice(1,-1),s.indexOf("\\")!==
-1&&(s=s.replace(GD,"$1"))),i.parameters[a]=s}if(r!==e.length)throw new TypeError("invalid parameter\
 format")}return i}function ZD(t){var e;if(typeof t.getHeader=="function"?e=t.getHeader("content-typ\
e"):typeof t.headers=="object"&&(e=t.headers&&t.headers["content-type"]),typeof e!="string")throw new TypeError(
"content-type header is missing from object");return e}function JD(t){var e=String(t);if(rS.test(e))
return e;if(e.length>0&&!KD.test(e))throw new TypeError("invalid parameter value");return'"'+e.replace(
XD,"\\$1")+'"'}function eA(t){this.parameters=Object.create(null),this.type=t}});var sS=I(ad=>{"use strict";var tA=/^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/,aS=/^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/,
oS=/^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;ad.format=
rA;ad.parse=iA;ad.test=nA;function rA(t){if(!t||typeof t!="object")throw new TypeError("argument obj\
 is required");var e=t.subtype,r=t.suffix,n=t.type;if(!n||!aS.test(n))throw new TypeError("invalid t\
ype");if(!e||!tA.test(e))throw new TypeError("invalid subtype");var i=n+"/"+e;if(r){if(!aS.test(r))throw new TypeError(
"invalid suffix");i+="+"+r}return i}function nA(t){if(!t)throw new TypeError("argument string is req\
uired");if(typeof t!="string")throw new TypeError("argument string is required to be a string");return oS.
test(t.toLowerCase())}function iA(t){if(!t)throw new TypeError("argument string is required");if(typeof t!=
"string")throw new TypeError("argument string is required to be a string");var e=oS.exec(t.toLowerCase());
if(!e)throw new TypeError("invalid media type");var r=e[1],n=e[2],i,a=n.lastIndexOf("+");return a!==
-1&&(i=n.substr(a+1),n=n.substr(0,a)),new aA(r,n,i)}function aA(t,e,r){this.type=t,this.subtype=e,this.
suffix=r}});var od=I(Fr=>{"use strict";Object.defineProperty(Fr,"__esModule",{value:!0});Fr.TrackType=Fr.TargetType=
Fr.DataType=void 0;var oA;(function(t){t[t.string=0]="string",t[t.uint=1]="uint",t[t.uid=2]="uid",t[t.
bool=3]="bool",t[t.binary=4]="binary",t[t.float=5]="float"})(oA=Fr.DataType||(Fr.DataType={}));var sA;
(function(t){t[t.shot=10]="shot",t[t.scene=20]="scene",t[t.track=30]="track",t[t.part=40]="part",t[t.
album=50]="album",t[t.edition=60]="edition",t[t.collection=70]="collection"})(sA=Fr.TargetType||(Fr.
TargetType={}));var lA;(function(t){t[t.video=1]="video",t[t.audio=2]="audio",t[t.complex=3]="comple\
x",t[t.logo=4]="logo",t[t.subtitle=17]="subtitle",t[t.button=18]="button",t[t.control=32]="control"})(
lA=Fr.TrackType||(Fr.TrackType={}))});var ld=I(sd=>{"use strict";Object.defineProperty(sd,"__esModule",{value:!0});sd.TrackType=void 0;var uA=od();
Object.defineProperty(sd,"TrackType",{enumerable:!0,get:function(){return uA.TrackType}})});var lS=I(gr=>{"use strict";Object.defineProperty(gr,"__esModule",{value:!0});gr.isUnique=gr.isSingleton=
gr.commonTags=void 0;gr.commonTags={year:{multiple:!1},track:{multiple:!1},disk:{multiple:!1},title:{
multiple:!1},artist:{multiple:!1},artists:{multiple:!0,unique:!0},albumartist:{multiple:!1},album:{multiple:!1},
date:{multiple:!1},originaldate:{multiple:!1},originalyear:{multiple:!1},comment:{multiple:!0,unique:!1},
genre:{multiple:!0,unique:!0},picture:{multiple:!0,unique:!0},composer:{multiple:!0,unique:!0},lyrics:{
multiple:!0,unique:!1},albumsort:{multiple:!1,unique:!0},titlesort:{multiple:!1,unique:!0},work:{multiple:!1,
unique:!0},artistsort:{multiple:!1,unique:!0},albumartistsort:{multiple:!1,unique:!0},composersort:{
multiple:!1,unique:!0},lyricist:{multiple:!0,unique:!0},writer:{multiple:!0,unique:!0},conductor:{multiple:!0,
unique:!0},remixer:{multiple:!0,unique:!0},arranger:{multiple:!0,unique:!0},engineer:{multiple:!0,unique:!0},
producer:{multiple:!0,unique:!0},technician:{multiple:!0,unique:!0},djmixer:{multiple:!0,unique:!0},
mixer:{multiple:!0,unique:!0},label:{multiple:!0,unique:!0},grouping:{multiple:!1},subtitle:{multiple:!0},
discsubtitle:{multiple:!1},totaltracks:{multiple:!1},totaldiscs:{multiple:!1},compilation:{multiple:!1},
rating:{multiple:!0},bpm:{multiple:!1},mood:{multiple:!1},media:{multiple:!1},catalognumber:{multiple:!0,
unique:!0},tvShow:{multiple:!1},tvShowSort:{multiple:!1},tvSeason:{multiple:!1},tvEpisode:{multiple:!1},
tvEpisodeId:{multiple:!1},tvNetwork:{multiple:!1},podcast:{multiple:!1},podcasturl:{multiple:!1},releasestatus:{
multiple:!1},releasetype:{multiple:!0},releasecountry:{multiple:!1},script:{multiple:!1},language:{multiple:!1},
copyright:{multiple:!1},license:{multiple:!1},encodedby:{multiple:!1},encodersettings:{multiple:!1},
gapless:{multiple:!1},barcode:{multiple:!1},isrc:{multiple:!0},asin:{multiple:!1},musicbrainz_recordingid:{
multiple:!1},musicbrainz_trackid:{multiple:!1},musicbrainz_albumid:{multiple:!1},musicbrainz_artistid:{
multiple:!0},musicbrainz_albumartistid:{multiple:!0},musicbrainz_releasegroupid:{multiple:!1},musicbrainz_workid:{
multiple:!1},musicbrainz_trmid:{multiple:!1},musicbrainz_discid:{multiple:!1},acoustid_id:{multiple:!1},
acoustid_fingerprint:{multiple:!1},musicip_puid:{multiple:!1},musicip_fingerprint:{multiple:!1},website:{
multiple:!1},"performer:instrument":{multiple:!0,unique:!0},averageLevel:{multiple:!1},peakLevel:{multiple:!1},
notes:{multiple:!0,unique:!1},key:{multiple:!1},originalalbum:{multiple:!1},originalartist:{multiple:!1},
discogs_artist_id:{multiple:!0,unique:!0},discogs_release_id:{multiple:!1},discogs_label_id:{multiple:!1},
discogs_master_release_id:{multiple:!1},discogs_votes:{multiple:!1},discogs_rating:{multiple:!1},replaygain_track_peak:{
multiple:!1},replaygain_track_gain:{multiple:!1},replaygain_album_peak:{multiple:!1},replaygain_album_gain:{
multiple:!1},replaygain_track_minmax:{multiple:!1},replaygain_album_minmax:{multiple:!1},replaygain_undo:{
multiple:!1},description:{multiple:!0},longDescription:{multiple:!1},category:{multiple:!0},hdVideo:{
multiple:!1},keywords:{multiple:!0},movement:{multiple:!1},movementIndex:{multiple:!1},movementTotal:{
multiple:!1},podcastId:{multiple:!1},showMovement:{multiple:!1},stik:{multiple:!1}};function cA(t){return gr.
commonTags.hasOwnProperty(t)&&!gr.commonTags[t].multiple}gr.isSingleton=cA;function dA(t){return!gr.
commonTags[t].multiple||gr.commonTags[t].unique}gr.isUnique=dA});var Sn=I(cd=>{"use strict";Object.defineProperty(cd,"__esModule",{value:!0});cd.CommonTagMapper=void 0;
var ud=class{static toIntOrNull(e){let r=parseInt(e,10);return isNaN(r)?null:r}static normalizeTrack(e){
let r=e.toString().split("/");return{no:parseInt(r[0],10)||null,of:parseInt(r[1],10)||null}}constructor(e,r){
this.tagTypes=e,this.tagMap=r}mapGenericTag(e,r){e={id:e.id,value:e.value},this.postMap(e,r);let n=this.
getCommonName(e.id);return n?{id:n,value:e.value}:null}getCommonName(e){return this.tagMap[e]}postMap(e,r){}};
ud.maxRatingScore=1;cd.CommonTagMapper=ud});var uS=I(dd=>{"use strict";Object.defineProperty(dd,"__esModule",{value:!0});dd.ID3v1TagMapper=void 0;
var fA=Sn(),pA={title:"title",artist:"artist",album:"album",year:"year",comment:"comment",track:"tra\
ck",genre:"genre"},Ag=class extends fA.CommonTagMapper{constructor(){super(["ID3v1"],pA)}};dd.ID3v1TagMapper=
Ag});var Mo=I(fd=>{"use strict";Object.defineProperty(fd,"__esModule",{value:!0});fd.CaseInsensitiveTagMap=
void 0;var hA=Sn(),Ng=class extends hA.CommonTagMapper{constructor(e,r){let n={};for(let i of Object.
keys(r))n[i.toUpperCase()]=r[i];super(e,n)}getCommonName(e){return this.tagMap[e.toUpperCase()]}};fd.
CaseInsensitiveTagMap=Ng});var Ue=I(Pe=>{"use strict";Object.defineProperty(Pe,"__esModule",{value:!0});Pe.toRatio=Pe.dbToRatio=
Pe.ratioToDb=Pe.a2hex=Pe.isBitSet=Pe.getBitAllignedNumber=Pe.stripNulls=Pe.decodeString=Pe.trimRightNull=
Pe.findZero=Pe.getBit=void 0;function mA(t,e,r){return(t[e]&1<<r)!==0}Pe.getBit=mA;function gA(t,e,r,n){
let i=e;if(n==="utf16le"){for(;t[i]!==0||t[i+1]!==0;){if(i>=r)return r;i+=2}return i}else{for(;t[i]!==
0;){if(i>=r)return r;i++}return i}}Pe.findZero=gA;function yA(t){let e=t.indexOf("\0");return e===-1?
t:t.substr(0,e)}Pe.trimRightNull=yA;function vA(t){let e=t.length;if(e&1)throw new Error("Buffer len\
gth must be even");for(let r=0;r<e;r+=2){let n=t[r];t[r]=t[r+1],t[r+1]=n}return t}function Fg(t,e){if(t[0]===
255&&t[1]===254)return Fg(t.subarray(2),e);if(e==="utf16le"&&t[0]===254&&t[1]===255){if(t.length&1)throw new Error(
"Expected even number of octets for 16-bit unicode string");return Fg(vA(t),e)}return Buffer.from(t).
toString(e)}Pe.decodeString=Fg;function wA(t){return t=t.replace(/^\x00+/g,""),t=t.replace(/\x00+$/g,
""),t}Pe.stripNulls=wA;function Bg(t,e,r,n){let i=e+~~(r/8),a=r%8,o=t[i];o&=255>>a;let s=8-a,l=n-s;return l<
0?o>>=8-a-n:l>0&&(o<<=l,o|=Bg(t,e,r+s,l)),o}Pe.getBitAllignedNumber=Bg;function xA(t,e,r){return Bg(
t,e,r,1)===1}Pe.isBitSet=xA;function EA(t){let e=[];for(let r=0,n=t.length;r<n;r++){let i=Number(t.charCodeAt(
r)).toString(16);e.push(i.length===1?"0"+i:i)}return e.join(" ")}Pe.a2hex=EA;function cS(t){return 10*
Math.log10(t)}Pe.ratioToDb=cS;function dS(t){return Math.pow(10,t/10)}Pe.dbToRatio=dS;function _A(t){
let e=t.split(" ").map(r=>r.trim().toLowerCase());if(e.length>=1){let r=parseFloat(e[0]);return e.length===
2&&e[1]==="db"?{dB:r,ratio:dS(r)}:{dB:cS(r),ratio:r}}}Pe.toRatio=_A});var fS=I(pd=>{"use strict";Object.defineProperty(pd,"__esModule",{value:!0});pd.ID3v24TagMapper=void 0;
var SA=Sn(),TA=Mo(),kA=Ue(),bA={TIT2:"title",TPE1:"artist","TXXX:Artists":"artists",TPE2:"albumartis\
t",TALB:"album",TDRV:"date",TORY:"originalyear",TPOS:"disk",TCON:"genre",APIC:"picture",TCOM:"compos\
er","USLT:description":"lyrics",TSOA:"albumsort",TSOT:"titlesort",TOAL:"originalalbum",TSOP:"artists\
ort",TSO2:"albumartistsort",TSOC:"composersort",TEXT:"lyricist","TXXX:Writer":"writer",TPE3:"conduct\
or",TPE4:"remixer","IPLS:arranger":"arranger","IPLS:engineer":"engineer","IPLS:producer":"producer",
"IPLS:DJ-mix":"djmixer","IPLS:mix":"mixer",TPUB:"label",TIT1:"grouping",TIT3:"subtitle",TRCK:"track",
TCMP:"compilation",POPM:"rating",TBPM:"bpm",TMED:"media","TXXX:CATALOGNUMBER":"catalognumber","TXXX:\
MusicBrainz Album Status":"releasestatus","TXXX:MusicBrainz Album Type":"releasetype","TXXX:MusicBra\
inz Album Release Country":"releasecountry","TXXX:RELEASECOUNTRY":"releasecountry","TXXX:SCRIPT":"sc\
ript",TLAN:"language",TCOP:"copyright",WCOP:"license",TENC:"encodedby",TSSE:"encodersettings","TXXX:\
BARCODE":"barcode","TXXX:ISRC":"isrc",TSRC:"isrc","TXXX:ASIN":"asin","TXXX:originalyear":"originalye\
ar","UFID:http://musicbrainz.org":"musicbrainz_recordingid","TXXX:MusicBrainz Release Track Id":"mus\
icbrainz_trackid","TXXX:MusicBrainz Album Id":"musicbrainz_albumid","TXXX:MusicBrainz Artist Id":"mu\
sicbrainz_artistid","TXXX:MusicBrainz Album Artist Id":"musicbrainz_albumartistid","TXXX:MusicBrainz\
 Release Group Id":"musicbrainz_releasegroupid","TXXX:MusicBrainz Work Id":"musicbrainz_workid","TXX\
X:MusicBrainz TRM Id":"musicbrainz_trmid","TXXX:MusicBrainz Disc Id":"musicbrainz_discid","TXXX:ACOU\
STID_ID":"acoustid_id","TXXX:Acoustid Id":"acoustid_id","TXXX:Acoustid Fingerprint":"acoustid_finger\
print","TXXX:MusicIP PUID":"musicip_puid","TXXX:MusicMagic Fingerprint":"musicip_fingerprint",WOAR:"\
website",TDRC:"date",TYER:"year",TDOR:"originaldate","TIPL:arranger":"arranger","TIPL:engineer":"eng\
ineer","TIPL:producer":"producer","TIPL:DJ-mix":"djmixer","TIPL:mix":"mixer",TMOO:"mood",SYLT:"lyric\
s",TSST:"discsubtitle",TKEY:"key",COMM:"comment",TOPE:"originalartist","PRIV:AverageLevel":"averageL\
evel","PRIV:PeakLevel":"peakLevel","TXXX:DISCOGS_ARTIST_ID":"discogs_artist_id","TXXX:DISCOGS_ARTIST\
S":"artists","TXXX:DISCOGS_ARTIST_NAME":"artists","TXXX:DISCOGS_ALBUM_ARTISTS":"albumartist","TXXX:D\
ISCOGS_CATALOG":"catalognumber","TXXX:DISCOGS_COUNTRY":"releasecountry","TXXX:DISCOGS_DATE":"origina\
ldate","TXXX:DISCOGS_LABEL":"label","TXXX:DISCOGS_LABEL_ID":"discogs_label_id","TXXX:DISCOGS_MASTER_\
RELEASE_ID":"discogs_master_release_id","TXXX:DISCOGS_RATING":"discogs_rating","TXXX:DISCOGS_RELEASE\
D":"date","TXXX:DISCOGS_RELEASE_ID":"discogs_release_id","TXXX:DISCOGS_VOTES":"discogs_votes","TXXX:\
CATALOGID":"catalognumber","TXXX:STYLE":"genre","TXXX:REPLAYGAIN_TRACK_PEAK":"replaygain_track_peak",
"TXXX:REPLAYGAIN_TRACK_GAIN":"replaygain_track_gain","TXXX:REPLAYGAIN_ALBUM_PEAK":"replaygain_album_\
peak","TXXX:REPLAYGAIN_ALBUM_GAIN":"replaygain_album_gain","TXXX:MP3GAIN_MINMAX":"replaygain_track_m\
inmax","TXXX:MP3GAIN_ALBUM_MINMAX":"replaygain_album_minmax","TXXX:MP3GAIN_UNDO":"replaygain_undo",MVNM:"\
movement",MVIN:"movementIndex",PCST:"podcast",TCAT:"category",TDES:"description",TDRL:"date",TGID:"p\
odcastId",TKWD:"keywords",WFED:"podcasturl"},Mg=class t extends TA.CaseInsensitiveTagMap{static toRating(e){
return{source:e.email,rating:e.rating>0?(e.rating-1)/254*SA.CommonTagMapper.maxRatingScore:void 0}}constructor(){
super(["ID3v2.3","ID3v2.4"],bA)}postMap(e,r){switch(e.id){case"UFID":e.value.owner_identifier==="htt\
p://musicbrainz.org"&&(e.id+=":"+e.value.owner_identifier,e.value=kA.decodeString(e.value.identifier,
"latin1"));break;case"PRIV":switch(e.value.owner_identifier){case"AverageLevel":case"PeakValue":e.id+=
":"+e.value.owner_identifier,e.value=e.value.data.length===4?e.value.data.readUInt32LE(0):null,e.value===
null&&r.addWarning("Failed to parse PRIV:PeakValue");break;default:r.addWarning(`Unknown PRIV owner-\
identifier: ${e.value.owner_identifier}`)}break;case"COMM":e.value=e.value?e.value.text:null;break;case"\
POPM":e.value=t.toRating(e.value);break;default:break}}};pd.ID3v24TagMapper=Mg});var pS=I(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0});hd.AsfTagMapper=void 0;
var CA=Sn(),IA={Title:"title",Author:"artist","WM/AlbumArtist":"albumartist","WM/AlbumTitle":"album",
"WM/Year":"date","WM/OriginalReleaseTime":"originaldate","WM/OriginalReleaseYear":"originalyear",Description:"\
comment","WM/TrackNumber":"track","WM/PartOfSet":"disk","WM/Genre":"genre","WM/Composer":"composer",
"WM/Lyrics":"lyrics","WM/AlbumSortOrder":"albumsort","WM/TitleSortOrder":"titlesort","WM/ArtistSortO\
rder":"artistsort","WM/AlbumArtistSortOrder":"albumartistsort","WM/ComposerSortOrder":"composersort",
"WM/Writer":"lyricist","WM/Conductor":"conductor","WM/ModifiedBy":"remixer","WM/Engineer":"engineer",
"WM/Producer":"producer","WM/DJMixer":"djmixer","WM/Mixer":"mixer","WM/Publisher":"label","WM/Conten\
tGroupDescription":"grouping","WM/SubTitle":"subtitle","WM/SetSubTitle":"discsubtitle","WM/IsCompila\
tion":"compilation","WM/SharedUserRating":"rating","WM/BeatsPerMinute":"bpm","WM/Mood":"mood","WM/Me\
dia":"media","WM/CatalogNo":"catalognumber","MusicBrainz/Album Status":"releasestatus","MusicBrainz/\
Album Type":"releasetype","MusicBrainz/Album Release Country":"releasecountry","WM/Script":"script",
"WM/Language":"language",Copyright:"copyright",LICENSE:"license","WM/EncodedBy":"encodedby","WM/Enco\
dingSettings":"encodersettings","WM/Barcode":"barcode","WM/ISRC":"isrc","MusicBrainz/Track Id":"musi\
cbrainz_recordingid","MusicBrainz/Release Track Id":"musicbrainz_trackid","MusicBrainz/Album Id":"mu\
sicbrainz_albumid","MusicBrainz/Artist Id":"musicbrainz_artistid","MusicBrainz/Album Artist Id":"mus\
icbrainz_albumartistid","MusicBrainz/Release Group Id":"musicbrainz_releasegroupid","MusicBrainz/Wor\
k Id":"musicbrainz_workid","MusicBrainz/TRM Id":"musicbrainz_trmid","MusicBrainz/Disc Id":"musicbrai\
nz_discid","Acoustid/Id":"acoustid_id","Acoustid/Fingerprint":"acoustid_fingerprint","MusicIP/PUID":"\
musicip_puid","WM/ARTISTS":"artists","WM/InitialKey":"key",ASIN:"asin","WM/Work":"work","WM/AuthorUR\
L":"website","WM/Picture":"picture"},Og=class t extends CA.CommonTagMapper{static toRating(e){return{
rating:parseFloat(e+1)/5}}constructor(){super(["asf"],IA)}postMap(e){switch(e.id){case"WM/SharedUser\
Rating":let r=e.id.split(":");e.value=t.toRating(e.value),e.id=r[0];break}}};hd.AsfTagMapper=Og});var hS=I(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.ID3v22TagMapper=fa.id3v22TagMap=
void 0;var RA=Mo();fa.id3v22TagMap={TT2:"title",TP1:"artist",TP2:"albumartist",TAL:"album",TYE:"year",
COM:"comment",TRK:"track",TPA:"disk",TCO:"genre",PIC:"picture",TCM:"composer",TOR:"originaldate",TOT:"\
originalalbum",TXT:"lyricist",TP3:"conductor",TPB:"label",TT1:"grouping",TT3:"subtitle",TLA:"languag\
e",TCR:"copyright",WCP:"license",TEN:"encodedby",TSS:"encodersettings",WAR:"website","COM:iTunPGAP":"\
gapless",PCS:"podcast",TCP:"compilation",TDR:"date",TS2:"albumartistsort",TSA:"albumsort",TSC:"compo\
sersort",TSP:"artistsort",TST:"titlesort",WFD:"podcasturl",TBP:"bpm"};var Lg=class extends RA.CaseInsensitiveTagMap{constructor(){
super(["ID3v2.2"],fa.id3v22TagMap)}};fa.ID3v22TagMapper=Lg});var mS=I(md=>{"use strict";Object.defineProperty(md,"__esModule",{value:!0});md.APEv2TagMapper=void 0;
var PA=Mo(),DA={Title:"title",Artist:"artist",Artists:"artists","Album Artist":"albumartist",Album:"\
album",Year:"date",Originalyear:"originalyear",Originaldate:"originaldate",Comment:"comment",Track:"\
track",Disc:"disk",DISCNUMBER:"disk",Genre:"genre","Cover Art (Front)":"picture","Cover Art (Back)":"\
picture",Composer:"composer",Lyrics:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",
ARTISTSORT:"artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",Lyricist:"lyri\
cist",Writer:"writer",Conductor:"conductor",MixArtist:"remixer",Arranger:"arranger",Engineer:"engine\
er",Producer:"producer",DJMixer:"djmixer",Mixer:"mixer",Label:"label",Grouping:"grouping",Subtitle:"\
subtitle",DiscSubtitle:"discsubtitle",Compilation:"compilation",BPM:"bpm",Mood:"mood",Media:"media",
CatalogNumber:"catalognumber",MUSICBRAINZ_ALBUMSTATUS:"releasestatus",MUSICBRAINZ_ALBUMTYPE:"release\
type",RELEASECOUNTRY:"releasecountry",Script:"script",Language:"language",Copyright:"copyright",LICENSE:"\
license",EncodedBy:"encodedby",EncoderSettings:"encodersettings",Barcode:"barcode",ISRC:"isrc",ASIN:"\
asin",musicbrainz_trackid:"musicbrainz_recordingid",musicbrainz_releasetrackid:"musicbrainz_trackid",
MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_artistid",MUSICBRAINZ_ALBUMARTISTID:"\
musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz_releasegroupid",MUSICBRAINZ_WORKID:"\
musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"musicbrainz_discid",Acoustid_Id:"\
acoustid_id",ACOUSTID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"musicip_puid",Weblink:"websit\
e",REPLAYGAIN_TRACK_GAIN:"replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",MP3GAIN_MINMAX:"\
replaygain_track_minmax",MP3GAIN_UNDO:"replaygain_undo"},Ug=class extends PA.CaseInsensitiveTagMap{constructor(){
super(["APEv2"],DA)}};md.APEv2TagMapper=Ug});var gS=I(pa=>{"use strict";Object.defineProperty(pa,"__esModule",{value:!0});pa.MP4TagMapper=pa.tagType=
void 0;var AA=Mo(),NA={"\xA9nam":"title","\xA9ART":"artist",aART:"albumartist","----:com.apple.iTune\
s:Band":"albumartist","\xA9alb":"album","\xA9day":"date","\xA9cmt":"comment","\xA9com":"comment",trkn:"\
track",disk:"disk","\xA9gen":"genre",covr:"picture","\xA9wrt":"composer","\xA9lyr":"lyrics",soal:"al\
bumsort",sonm:"titlesort",soar:"artistsort",soaa:"albumartistsort",soco:"composersort","----:com.app\
le.iTunes:LYRICIST":"lyricist","----:com.apple.iTunes:CONDUCTOR":"conductor","----:com.apple.iTunes:\
REMIXER":"remixer","----:com.apple.iTunes:ENGINEER":"engineer","----:com.apple.iTunes:PRODUCER":"pro\
ducer","----:com.apple.iTunes:DJMIXER":"djmixer","----:com.apple.iTunes:MIXER":"mixer","----:com.app\
le.iTunes:LABEL":"label","\xA9grp":"grouping","----:com.apple.iTunes:SUBTITLE":"subtitle","----:com.\
apple.iTunes:DISCSUBTITLE":"discsubtitle",cpil:"compilation",tmpo:"bpm","----:com.apple.iTunes:MOOD":"\
mood","----:com.apple.iTunes:MEDIA":"media","----:com.apple.iTunes:CATALOGNUMBER":"catalognumber",tvsh:"\
tvShow",tvsn:"tvSeason",tves:"tvEpisode",sosn:"tvShowSort",tven:"tvEpisodeId",tvnn:"tvNetwork",pcst:"\
podcast",purl:"podcasturl","----:com.apple.iTunes:MusicBrainz Album Status":"releasestatus","----:co\
m.apple.iTunes:MusicBrainz Album Type":"releasetype","----:com.apple.iTunes:MusicBrainz Album Releas\
e Country":"releasecountry","----:com.apple.iTunes:SCRIPT":"script","----:com.apple.iTunes:LANGUAGE":"\
language",cprt:"copyright","\xA9cpy":"copyright","----:com.apple.iTunes:LICENSE":"license","\xA9too":"\
encodedby",pgap:"gapless","----:com.apple.iTunes:BARCODE":"barcode","----:com.apple.iTunes:ISRC":"is\
rc","----:com.apple.iTunes:ASIN":"asin","----:com.apple.iTunes:NOTES":"comment","----:com.apple.iTun\
es:MusicBrainz Track Id":"musicbrainz_recordingid","----:com.apple.iTunes:MusicBrainz Release Track \
Id":"musicbrainz_trackid","----:com.apple.iTunes:MusicBrainz Album Id":"musicbrainz_albumid","----:c\
om.apple.iTunes:MusicBrainz Artist Id":"musicbrainz_artistid","----:com.apple.iTunes:MusicBrainz Alb\
um Artist Id":"musicbrainz_albumartistid","----:com.apple.iTunes:MusicBrainz Release Group Id":"musi\
cbrainz_releasegroupid","----:com.apple.iTunes:MusicBrainz Work Id":"musicbrainz_workid","----:com.a\
pple.iTunes:MusicBrainz TRM Id":"musicbrainz_trmid","----:com.apple.iTunes:MusicBrainz Disc Id":"mus\
icbrainz_discid","----:com.apple.iTunes:Acoustid Id":"acoustid_id","----:com.apple.iTunes:Acoustid F\
ingerprint":"acoustid_fingerprint","----:com.apple.iTunes:MusicIP PUID":"musicip_puid","----:com.app\
le.iTunes:fingerprint":"musicip_fingerprint","----:com.apple.iTunes:replaygain_track_gain":"replayga\
in_track_gain","----:com.apple.iTunes:replaygain_track_peak":"replaygain_track_peak","----:com.apple\
.iTunes:replaygain_album_gain":"replaygain_album_gain","----:com.apple.iTunes:replaygain_album_peak":"\
replaygain_album_peak","----:com.apple.iTunes:replaygain_track_minmax":"replaygain_track_minmax","--\
--:com.apple.iTunes:replaygain_album_minmax":"replaygain_album_minmax","----:com.apple.iTunes:replay\
gain_undo":"replaygain_undo",gnre:"genre","----:com.apple.iTunes:ALBUMARTISTSORT":"albumartistsort",
"----:com.apple.iTunes:ARTISTS":"artists","----:com.apple.iTunes:ORIGINALDATE":"originaldate","----:\
com.apple.iTunes:ORIGINALYEAR":"originalyear",desc:"description",ldes:"longDescription","\xA9mvn":"m\
ovement","\xA9mvi":"movementIndex","\xA9mvc":"movementTotal","\xA9wrk":"work",catg:"category",egid:"\
podcastId",hdvd:"hdVideo",keyw:"keywords",shwm:"showMovement",stik:"stik",rate:"rating"};pa.tagType=
"iTunes";var zg=class extends AA.CaseInsensitiveTagMap{constructor(){super([pa.tagType],NA)}postMap(e,r){
switch(e.id){case"rate":e.value={source:void 0,rating:parseFloat(e.value)/100};break}}};pa.MP4TagMapper=
zg});var vS=I(gd=>{"use strict";Object.defineProperty(gd,"__esModule",{value:!0});gd.VorbisTagMapper=void 0;
var yS=Sn(),FA={TITLE:"title",ARTIST:"artist",ARTISTS:"artists",ALBUMARTIST:"albumartist","ALBUM ART\
IST":"albumartist",ALBUM:"album",DATE:"date",ORIGINALDATE:"originaldate",ORIGINALYEAR:"originalyear",
COMMENT:"comment",TRACKNUMBER:"track",DISCNUMBER:"disk",GENRE:"genre",METADATA_BLOCK_PICTURE:"pictur\
e",COMPOSER:"composer",LYRICS:"lyrics",ALBUMSORT:"albumsort",TITLESORT:"titlesort",WORK:"work",ARTISTSORT:"\
artistsort",ALBUMARTISTSORT:"albumartistsort",COMPOSERSORT:"composersort",LYRICIST:"lyricist",WRITER:"\
writer",CONDUCTOR:"conductor",REMIXER:"remixer",ARRANGER:"arranger",ENGINEER:"engineer",PRODUCER:"pr\
oducer",DJMIXER:"djmixer",MIXER:"mixer",LABEL:"label",GROUPING:"grouping",SUBTITLE:"subtitle",DISCSUBTITLE:"\
discsubtitle",TRACKTOTAL:"totaltracks",DISCTOTAL:"totaldiscs",COMPILATION:"compilation",RATING:"rati\
ng",BPM:"bpm",KEY:"key",MOOD:"mood",MEDIA:"media",CATALOGNUMBER:"catalognumber",RELEASESTATUS:"relea\
sestatus",RELEASETYPE:"releasetype",RELEASECOUNTRY:"releasecountry",SCRIPT:"script",LANGUAGE:"langua\
ge",COPYRIGHT:"copyright",LICENSE:"license",ENCODEDBY:"encodedby",ENCODERSETTINGS:"encodersettings",
BARCODE:"barcode",ISRC:"isrc",ASIN:"asin",MUSICBRAINZ_TRACKID:"musicbrainz_recordingid",MUSICBRAINZ_RELEASETRACKID:"\
musicbrainz_trackid",MUSICBRAINZ_ALBUMID:"musicbrainz_albumid",MUSICBRAINZ_ARTISTID:"musicbrainz_art\
istid",MUSICBRAINZ_ALBUMARTISTID:"musicbrainz_albumartistid",MUSICBRAINZ_RELEASEGROUPID:"musicbrainz\
_releasegroupid",MUSICBRAINZ_WORKID:"musicbrainz_workid",MUSICBRAINZ_TRMID:"musicbrainz_trmid",MUSICBRAINZ_DISCID:"\
musicbrainz_discid",ACOUSTID_ID:"acoustid_id",ACOUSTID_ID_FINGERPRINT:"acoustid_fingerprint",MUSICIP_PUID:"\
musicip_puid",WEBSITE:"website",NOTES:"notes",TOTALTRACKS:"totaltracks",TOTALDISCS:"totaldiscs",DISCOGS_ARTIST_ID:"\
discogs_artist_id",DISCOGS_ARTISTS:"artists",DISCOGS_ARTIST_NAME:"artists",DISCOGS_ALBUM_ARTISTS:"al\
bumartist",DISCOGS_CATALOG:"catalognumber",DISCOGS_COUNTRY:"releasecountry",DISCOGS_DATE:"originalda\
te",DISCOGS_LABEL:"label",DISCOGS_LABEL_ID:"discogs_label_id",DISCOGS_MASTER_RELEASE_ID:"discogs_mas\
ter_release_id",DISCOGS_RATING:"discogs_rating",DISCOGS_RELEASED:"date",DISCOGS_RELEASE_ID:"discogs_\
release_id",DISCOGS_VOTES:"discogs_votes",CATALOGID:"catalognumber",STYLE:"genre",REPLAYGAIN_TRACK_GAIN:"\
replaygain_track_gain",REPLAYGAIN_TRACK_PEAK:"replaygain_track_peak",REPLAYGAIN_ALBUM_GAIN:"replayga\
in_album_gain",REPLAYGAIN_ALBUM_PEAK:"replaygain_album_peak",REPLAYGAIN_MINMAX:"replaygain_track_min\
max",REPLAYGAIN_ALBUM_MINMAX:"replaygain_album_minmax",REPLAYGAIN_UNDO:"replaygain_undo"},jg=class t extends yS.
CommonTagMapper{static toRating(e,r,n){return{source:e&&e.toLowerCase(),rating:parseFloat(r)/n*yS.CommonTagMapper.
maxRatingScore}}constructor(){super(["vorbis"],FA)}postMap(e){if(e.id==="RATING")e.value=t.toRating(
void 0,e.value,100);else if(e.id.indexOf("RATING:")===0){let r=e.id.split(":");e.value=t.toRating(r[1],
e.value,1),e.id=r[0]}}};gd.VorbisTagMapper=jg});var wS=I(ha=>{"use strict";Object.defineProperty(ha,"__esModule",{value:!0});ha.RiffInfoTagMapper=ha.
riffInfoTagMap=void 0;var BA=Sn();ha.riffInfoTagMap={IART:"artist",ICRD:"date",INAM:"title",TITL:"ti\
tle",IPRD:"album",ITRK:"track",IPRT:"track",COMM:"comment",ICMT:"comment",ICNT:"releasecountry",GNRE:"\
genre",IWRI:"writer",RATE:"rating",YEAR:"year",ISFT:"encodedby",CODE:"encodedby",TURL:"website",IGNR:"\
genre",IENG:"engineer",ITCH:"technician",IMED:"media",IRPD:"album"};var Hg=class extends BA.CommonTagMapper{constructor(){
super(["exif"],ha.riffInfoTagMap)}};ha.RiffInfoTagMapper=Hg});var xS=I(yd=>{"use strict";Object.defineProperty(yd,"__esModule",{value:!0});yd.MatroskaTagMapper=void 0;
var MA=Mo(),OA={"segment:title":"title","album:ARTIST":"albumartist","album:ARTISTSORT":"albumartist\
sort","album:TITLE":"album","album:DATE_RECORDED":"originaldate","album:PART_NUMBER":"disk","album:T\
OTAL_PARTS":"totaltracks","track:ARTIST":"artist","track:ARTISTSORT":"artistsort","track:TITLE":"tit\
le","track:PART_NUMBER":"track","track:MUSICBRAINZ_TRACKID":"musicbrainz_recordingid","track:MUSICBR\
AINZ_ALBUMID":"musicbrainz_albumid","track:MUSICBRAINZ_ARTISTID":"musicbrainz_artistid","track:PUBLI\
SHER":"label","track:GENRE":"genre","track:ENCODER":"encodedby","track:ENCODER_OPTIONS":"encodersett\
ings","edition:TOTAL_PARTS":"totaldiscs",picture:"picture"},qg=class extends MA.CaseInsensitiveTagMap{constructor(){
super(["matroska"],OA)}};yd.MatroskaTagMapper=qg});var ES=I(vd=>{"use strict";Object.defineProperty(vd,"__esModule",{value:!0});vd.AiffTagMapper=void 0;
var LA=Sn(),UA={NAME:"title",AUTH:"artist","(c) ":"copyright",ANNO:"comment"},$g=class extends LA.CommonTagMapper{constructor(){
super(["AIFF"],UA)}};vd.AiffTagMapper=$g});var SS=I(wd=>{"use strict";Object.defineProperty(wd,"__esModule",{value:!0});wd.CombinedTagMapper=void 0;
var zA=uS(),jA=fS(),HA=pS(),qA=hS(),$A=mS(),_S=gS(),VA=vS(),WA=wS(),KA=xS(),GA=ES(),Vg=class{constructor(){
this.tagMappers={},[new zA.ID3v1TagMapper,new qA.ID3v22TagMapper,new jA.ID3v24TagMapper,new _S.MP4TagMapper,
new _S.MP4TagMapper,new VA.VorbisTagMapper,new $A.APEv2TagMapper,new HA.AsfTagMapper,new WA.RiffInfoTagMapper,
new KA.MatroskaTagMapper,new GA.AiffTagMapper].forEach(e=>{this.registerTagMapper(e)})}mapTag(e,r,n){
if(this.tagMappers[e])return this.tagMappers[e].mapGenericTag(r,n);throw new Error("No generic tag m\
apper defined for tag-format: "+e)}registerTagMapper(e){for(let r of e.tagTypes)this.tagMappers[r]=e}};
wd.CombinedTagMapper=Vg});var bS=I(Oo=>{"use strict";Object.defineProperty(Oo,"__esModule",{value:!0});Oo.joinArtists=Oo.MetadataCollector=
void 0;var XA=ld(),YA=he(),TS=lS(),QA=SS(),xd=Sn(),ZA=Ue(),JA=Pg(),ma=(0,YA.default)("music-metadata\
:collector"),eN=["matroska","APEv2","vorbis","ID3v2.4","ID3v2.3","ID3v2.2","exif","asf","iTunes","AI\
FF","ID3v1"],Wg=class{constructor(e){this.opts=e,this.format={tagTypes:[],trackInfo:[]},this.native=
{},this.common={track:{no:null,of:null},disk:{no:null,of:null},movementIndex:{}},this.quality={warnings:[]},
this.commonOrigin={},this.originPriority={},this.tagMapper=new QA.CombinedTagMapper;let r=1;for(let n of eN)
this.originPriority[n]=r++;this.originPriority.artificial=500,this.originPriority.id3v1=600}hasAny(){
return Object.keys(this.native).length>0}addStreamInfo(e){ma(`streamInfo: type=${XA.TrackType[e.type]}\
, codec=${e.codecName}`),this.format.trackInfo.push(e)}setFormat(e,r){ma(`format: ${e} = ${r}`),this.
format[e]=r,this.opts.observer&&this.opts.observer({metadata:this,tag:{type:"format",id:e,value:r}})}addTag(e,r,n){
ma(`tag ${e}.${r} = ${n}`),this.native[e]||(this.format.tagTypes.push(e),this.native[e]=[]),this.native[e].
push({id:r,value:n}),this.toCommon(e,r,n)}addWarning(e){this.quality.warnings.push({message:e})}postMap(e,r){
switch(r.id){case"artist":if(this.commonOrigin.artist===this.originPriority[e])return this.postMap("\
artificial",{id:"artists",value:r.value});this.common.artists||this.setGenericTag("artificial",{id:"\
artists",value:r.value});break;case"artists":if((!this.common.artist||this.commonOrigin.artist===this.
originPriority.artificial)&&(!this.common.artists||this.common.artists.indexOf(r.value)===-1)){let o=(this.
common.artists||[]).concat([r.value]),l={id:"artist",value:kS(o)};this.setGenericTag("artificial",l)}
break;case"picture":this.postFixPicture(r.value).then(o=>{o!==null&&(r.value=o,this.setGenericTag(e,
r))});return;case"totaltracks":this.common.track.of=xd.CommonTagMapper.toIntOrNull(r.value);return;case"\
totaldiscs":this.common.disk.of=xd.CommonTagMapper.toIntOrNull(r.value);return;case"movementTotal":this.
common.movementIndex.of=xd.CommonTagMapper.toIntOrNull(r.value);return;case"track":case"disk":case"m\
ovementIndex":let n=this.common[r.id].of;this.common[r.id]=xd.CommonTagMapper.normalizeTrack(r.value),
this.common[r.id].of=n??this.common[r.id].of;return;case"bpm":case"year":case"originalyear":r.value=
parseInt(r.value,10);break;case"date":let i=parseInt(r.value.substr(0,4),10);isNaN(i)||(this.common.
year=i);break;case"discogs_label_id":case"discogs_release_id":case"discogs_master_release_id":case"d\
iscogs_artist_id":case"discogs_votes":r.value=typeof r.value=="string"?parseInt(r.value,10):r.value;
break;case"replaygain_track_gain":case"replaygain_track_peak":case"replaygain_album_gain":case"repla\
ygain_album_peak":r.value=(0,ZA.toRatio)(r.value);break;case"replaygain_track_minmax":r.value=r.value.
split(",").map(o=>parseInt(o,10));break;case"replaygain_undo":let a=r.value.split(",").map(o=>parseInt(
o,10));r.value={leftChannel:a[0],rightChannel:a[1]};break;case"gapless":case"compilation":case"podca\
st":case"showMovement":r.value=r.value==="1"||r.value===1;break;case"isrc":if(this.common[r.id]&&this.
common[r.id].indexOf(r.value)!==-1)return;break;default:}r.value!==null&&this.setGenericTag(e,r)}toCommonMetadata(){
return{format:this.format,native:this.native,quality:this.quality,common:this.common}}async postFixPicture(e){
if(e.data&&e.data.length>0){if(!e.format){let r=await JA.fromBuffer(e.data);if(r)e.format=r.mime;else
return null}switch(e.format=e.format.toLocaleLowerCase(),e.format){case"image/jpg":e.format="image/j\
peg"}return e}return this.addWarning("Empty picture tag found"),null}toCommon(e,r,n){let i={id:r,value:n},
a=this.tagMapper.mapTag(e,i,this);a&&this.postMap(e,a)}setGenericTag(e,r){ma(`common.${r.id} = ${r.value}`);
let n=this.commonOrigin[r.id]||1e3,i=this.originPriority[e];if((0,TS.isSingleton)(r.id))if(i<=n)this.
common[r.id]=r.value,this.commonOrigin[r.id]=i;else return ma(`Ignore native tag (singleton): ${e}.${r.
id} = ${r.value}`);else if(i===n)!(0,TS.isUnique)(r.id)||this.common[r.id].indexOf(r.value)===-1?this.
common[r.id].push(r.value):ma(`Ignore duplicate value: ${e}.${r.id} = ${r.value}`);else if(i<n)this.
common[r.id]=[r.value],this.commonOrigin[r.id]=i;else return ma(`Ignore native tag (list): ${e}.${r.
id} = ${r.value}`);this.opts.observer&&this.opts.observer({metadata:this,tag:{type:"common",id:r.id,
value:r.value}})}};Oo.MetadataCollector=Wg;function kS(t){return t.length>2?t.slice(0,t.length-1).join(
", ")+" & "+t[t.length-1]:t.join(" & ")}Oo.joinArtists=kS});var Uo=I(Ut=>{"use strict";Object.defineProperty(Ut,"__esModule",{value:!0});Ut.TextEncodingToken=Ut.
ExtendedHeader=Ut.ID3v2Header=Ut.UINT32SYNCSAFE=Ut.AttachedPictureType=void 0;var Lo=te(),Il=Ue(),tN;
(function(t){t[t.Other=0]="Other",t[t["32x32 pixels 'file icon' (PNG only)"]=1]="32x32 pixels 'file \
icon' (PNG only)",t[t["Other file icon"]=2]="Other file icon",t[t["Cover (front)"]=3]="Cover (front)",
t[t["Cover (back)"]=4]="Cover (back)",t[t["Leaflet page"]=5]="Leaflet page",t[t["Media (e.g. label s\
ide of CD)"]=6]="Media (e.g. label side of CD)",t[t["Lead artist/lead performer/soloist"]=7]="Lead a\
rtist/lead performer/soloist",t[t["Artist/performer"]=8]="Artist/performer",t[t.Conductor=9]="Conduc\
tor",t[t["Band/Orchestra"]=10]="Band/Orchestra",t[t.Composer=11]="Composer",t[t["Lyricist/text write\
r"]=12]="Lyricist/text writer",t[t["Recording Location"]=13]="Recording Location",t[t["During record\
ing"]=14]="During recording",t[t["During performance"]=15]="During performance",t[t["Movie/video scr\
een capture"]=16]="Movie/video screen capture",t[t["A bright coloured fish"]=17]="A bright coloured \
fish",t[t.Illustration=18]="Illustration",t[t["Band/artist logotype"]=19]="Band/artist logotype",t[t["\
Publisher/Studio logotype"]=20]="Publisher/Studio logotype"})(tN=Ut.AttachedPictureType||(Ut.AttachedPictureType=
{}));Ut.UINT32SYNCSAFE={get:(t,e)=>t[e+3]&127|t[e+2]<<7|t[e+1]<<14|t[e]<<21,len:4};Ut.ID3v2Header={len:10,
get:(t,e)=>({fileIdentifier:new Lo.StringType(3,"ascii").get(t,e),version:{major:Lo.INT8.get(t,e+3),
revision:Lo.INT8.get(t,e+4)},flags:{unsynchronisation:Il.getBit(t,e+5,7),isExtendedHeader:Il.getBit(
t,e+5,6),expIndicator:Il.getBit(t,e+5,5),footer:Il.getBit(t,e+5,4)},size:Ut.UINT32SYNCSAFE.get(t,e+6)})};
Ut.ExtendedHeader={len:10,get:(t,e)=>({size:Lo.UINT32_BE.get(t,e),extendedFlags:Lo.UINT16_BE.get(t,e+
4),sizeOfPadding:Lo.UINT32_BE.get(t,e+6),crcDataPresent:Il.getBit(t,e+4,31)})};Ut.TextEncodingToken=
{len:1,get:(t,e)=>{switch(t[e]){case 0:return{encoding:"latin1"};case 1:return{encoding:"utf16le",bom:!0};case 2:
return{encoding:"utf16le",bom:!1};case 3:return{encoding:"utf8",bom:!1};default:return{encoding:"utf\
8",bom:!1}}}}});var zt=I(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.BasicParser=void 0;var Kg=class{init(e,r,n){
return this.metadata=e,this.tokenizer=r,this.options=n,this}};Ed.BasicParser=Kg});var It=I(Rl=>{"use strict";Object.defineProperty(Rl,"__esModule",{value:!0});Rl.FourCcToken=void 0;var rN=Ue(),
nN=/^[\x21-\x7e©][\x20-\x7e\x00()]{3}/;Rl.FourCcToken={len:4,get:(t,e)=>{let r=t.toString("binary",
e,e+Rl.FourCcToken.len);if(!r.match(nN))throw new Error(`FourCC contains invalid characters: ${rN.a2hex(
r)} "${r}"`);return r},put:(t,e,r)=>{let n=Buffer.from(r,"binary");if(n.length!==4)throw new Error("\
Invalid length");return n.copy(t,e)}}});var CS=I(We=>{"use strict";Object.defineProperty(We,"__esModule",{value:!0});We.isBitSet=We.parseTagFlags=
We.TagField=We.TagItemHeader=We.TagFooter=We.Header=We.DescriptorParser=We.DataType=void 0;var ke=te(),
iN=It(),aN;(function(t){t[t.text_utf8=0]="text_utf8",t[t.binary=1]="binary",t[t.external_info=2]="ex\
ternal_info",t[t.reserved=3]="reserved"})(aN=We.DataType||(We.DataType={}));We.DescriptorParser={len:52,
get:(t,e)=>({ID:iN.FourCcToken.get(t,e),version:ke.UINT32_LE.get(t,e+4)/1e3,descriptorBytes:ke.UINT32_LE.
get(t,e+8),headerBytes:ke.UINT32_LE.get(t,e+12),seekTableBytes:ke.UINT32_LE.get(t,e+16),headerDataBytes:ke.
UINT32_LE.get(t,e+20),apeFrameDataBytes:ke.UINT32_LE.get(t,e+24),apeFrameDataBytesHigh:ke.UINT32_LE.
get(t,e+28),terminatingDataBytes:ke.UINT32_LE.get(t,e+32),fileMD5:new ke.Uint8ArrayType(16).get(t,e+
36)})};We.Header={len:24,get:(t,e)=>({compressionLevel:ke.UINT16_LE.get(t,e),formatFlags:ke.UINT16_LE.
get(t,e+2),blocksPerFrame:ke.UINT32_LE.get(t,e+4),finalFrameBlocks:ke.UINT32_LE.get(t,e+8),totalFrames:ke.
UINT32_LE.get(t,e+12),bitsPerSample:ke.UINT16_LE.get(t,e+16),channel:ke.UINT16_LE.get(t,e+18),sampleRate:ke.
UINT32_LE.get(t,e+20)})};We.TagFooter={len:32,get:(t,e)=>({ID:new ke.StringType(8,"ascii").get(t,e),
version:ke.UINT32_LE.get(t,e+8),size:ke.UINT32_LE.get(t,e+12),fields:ke.UINT32_LE.get(t,e+16),flags:Gg(
ke.UINT32_LE.get(t,e+20))})};We.TagItemHeader={len:8,get:(t,e)=>({size:ke.UINT32_LE.get(t,e),flags:Gg(
ke.UINT32_LE.get(t,e+4))})};var oN=t=>new ke.Uint8ArrayType(t.size-We.TagFooter.len);We.TagField=oN;
function Gg(t){return{containsHeader:Pl(t,31),containsFooter:Pl(t,30),isHeader:Pl(t,31),readOnly:Pl(
t,0),dataType:(t&6)>>1}}We.parseTagFlags=Gg;function Pl(t,e){return(t&1<<e)!==0}We.isBitSet=Pl});var ga=I(_d=>{"use strict";Object.defineProperty(_d,"__esModule",{value:!0});_d.APEv2Parser=void 0;var sN=he(),
IS=Jr(),RS=te(),PS=Ue(),lN=zt(),Ke=CS(),zo=(0,sN.default)("music-metadata:parser:APEv2"),DS="APEv2",
AS="APETAGEX",Xg=class t extends lN.BasicParser{constructor(){super(...arguments),this.ape={}}static tryParseApeHeader(e,r,n){
let i=new t;return i.init(e,r,n),i.tryParseApeHeader()}static calculateDuration(e){let r=e.totalFrames>
1?e.blocksPerFrame*(e.totalFrames-1):0;return r+=e.finalFrameBlocks,r/e.sampleRate}static async findApeFooterOffset(e,r){
let n=Buffer.alloc(Ke.TagFooter.len);await e.randomRead(n,0,Ke.TagFooter.len,r-Ke.TagFooter.len);let i=Ke.
TagFooter.get(n,0);if(i.ID==="APETAGEX")return zo(`APE footer header at offset=${r}`),{footer:i,offset:r-
i.size}}static parseTagFooter(e,r,n){let i=Ke.TagFooter.get(r,r.length-Ke.TagFooter.len);if(i.ID!==AS)
throw new Error("Unexpected APEv2 Footer ID preamble value.");IS.fromBuffer(r);let a=new t;return a.
init(e,IS.fromBuffer(r),n),a.parseTags(i)}async tryParseApeHeader(){if(this.tokenizer.fileInfo.size&&
this.tokenizer.fileInfo.size-this.tokenizer.position<Ke.TagFooter.len){zo("No APEv2 header found, en\
d-of-file reached");return}let e=await this.tokenizer.peekToken(Ke.TagFooter);if(e.ID===AS)return await this.
tokenizer.ignore(Ke.TagFooter.len),this.parseTags(e);if(zo(`APEv2 header not found at offset=${this.
tokenizer.position}`),this.tokenizer.fileInfo.size){let r=this.tokenizer.fileInfo.size-this.tokenizer.
position,n=Buffer.alloc(r);return await this.tokenizer.readBuffer(n),t.parseTagFooter(this.metadata,
n,this.options)}}async parse(){let e=await this.tokenizer.readToken(Ke.DescriptorParser);if(e.ID!=="\
MAC ")throw new Error("Unexpected descriptor ID");this.ape.descriptor=e;let r=e.descriptorBytes-Ke.DescriptorParser.
len,n=await(r>0?this.parseDescriptorExpansion(r):this.parseHeader());return await this.tokenizer.ignore(
n.forwardBytes),this.tryParseApeHeader()}async parseTags(e){let r=Buffer.alloc(256),n=e.size-Ke.TagFooter.
len;zo(`Parse APE tags at offset=${this.tokenizer.position}, size=${n}`);for(let i=0;i<e.fields;i++){
if(n<Ke.TagItemHeader.len){this.metadata.addWarning(`APEv2 Tag-header: ${e.fields-i} items remaining\
, but no more tag data to read.`);break}let a=await this.tokenizer.readToken(Ke.TagItemHeader);n-=Ke.
TagItemHeader.len+a.size,await this.tokenizer.peekBuffer(r,{length:Math.min(r.length,n)});let o=PS.findZero(
r,0,r.length),s=await this.tokenizer.readToken(new RS.StringType(o,"ascii"));switch(await this.tokenizer.
ignore(1),n-=s.length+1,a.flags.dataType){case Ke.DataType.text_utf8:{let u=(await this.tokenizer.readToken(
new RS.StringType(a.size,"utf8"))).split(/\x00/g);for(let c of u)this.metadata.addTag(DS,s,c);break}case Ke.
DataType.binary:if(this.options.skipCovers)await this.tokenizer.ignore(a.size);else{let l=Buffer.alloc(
a.size);await this.tokenizer.readBuffer(l),o=PS.findZero(l,0,l.length);let u=l.toString("utf8",0,o),
c=Buffer.from(l.slice(o+1));this.metadata.addTag(DS,s,{description:u,data:c})}break;case Ke.DataType.
external_info:zo(`Ignore external info ${s}`),await this.tokenizer.ignore(a.size);break;case Ke.DataType.
reserved:zo(`Ignore external info ${s}`),this.metadata.addWarning(`APEv2 header declares a reserved \
datatype for "${s}"`),await this.tokenizer.ignore(a.size);break}}}async parseDescriptorExpansion(e){
return await this.tokenizer.ignore(e),this.parseHeader()}async parseHeader(){let e=await this.tokenizer.
readToken(Ke.Header);return this.metadata.setFormat("lossless",!0),this.metadata.setFormat("containe\
r","Monkey's Audio"),this.metadata.setFormat("bitsPerSample",e.bitsPerSample),this.metadata.setFormat(
"sampleRate",e.sampleRate),this.metadata.setFormat("numberOfChannels",e.channel),this.metadata.setFormat(
"duration",t.calculateDuration(e)),{forwardBytes:this.ape.descriptor.seekTableBytes+this.ape.descriptor.
headerDataBytes+this.ape.descriptor.apeFrameDataBytes+this.ape.descriptor.terminatingDataBytes}}};_d.
APEv2Parser=Xg});var Dl=I(en=>{"use strict";Object.defineProperty(en,"__esModule",{value:!0});en.hasID3v1Header=en.ID3v1Parser=
en.Genres=void 0;var uN=he(),kd=te(),cN=Ue(),dN=zt(),fN=ga(),Sd=(0,uN.default)("music-metadata:parse\
r:ID3v1");en.Genres=["Blues","Classic Rock","Country","Dance","Disco","Funk","Grunge","Hip-Hop","Jaz\
z","Metal","New Age","Oldies","Other","Pop","R&B","Rap","Reggae","Rock","Techno","Industrial","Alter\
native","Ska","Death Metal","Pranks","Soundtrack","Euro-Techno","Ambient","Trip-Hop","Vocal","Jazz+F\
unk","Fusion","Trance","Classical","Instrumental","Acid","House","Game","Sound Clip","Gospel","Noise",
"Alt. Rock","Bass","Soul","Punk","Space","Meditative","Instrumental Pop","Instrumental Rock","Ethnic",
"Gothic","Darkwave","Techno-Industrial","Electronic","Pop-Folk","Eurodance","Dream","Southern Rock",
"Comedy","Cult","Gangsta Rap","Top 40","Christian Rap","Pop/Funk","Jungle","Native American","Cabare\
t","New Wave","Psychedelic","Rave","Showtunes","Trailer","Lo-Fi","Tribal","Acid Punk","Acid Jazz","P\
olka","Retro","Musical","Rock & Roll","Hard Rock","Folk","Folk/Rock","National Folk","Swing","Fast-F\
usion","Bebob","Latin","Revival","Celtic","Bluegrass","Avantgarde","Gothic Rock","Progressive Rock",
"Psychedelic Rock","Symphonic Rock","Slow Rock","Big Band","Chorus","Easy Listening","Acoustic","Hum\
our","Speech","Chanson","Opera","Chamber Music","Sonata","Symphony","Booty Bass","Primus","Porn Groo\
ve","Satire","Slow Jam","Club","Tango","Samba","Folklore","Ballad","Power Ballad","Rhythmic Soul","F\
reestyle","Duet","Punk Rock","Drum Solo","A Cappella","Euro-House","Dance Hall","Goa","Drum & Bass",
"Club-House","Hardcore","Terror","Indie","BritPop","Negerpunk","Polsk Punk","Beat","Christian Gangst\
a Rap","Heavy Metal","Black Metal","Crossover","Contemporary Christian","Christian Rock","Merengue",
"Salsa","Thrash Metal","Anime","JPop","Synthpop","Abstract","Art Rock","Baroque","Bhangra","Big Beat",
"Breakbeat","Chillout","Downtempo","Dub","EBM","Eclectic","Electro","Electroclash","Emo","Experiment\
al","Garage","Global","IDM","Illbient","Industro-Goth","Jam Band","Krautrock","Leftfield","Lounge","\
Math Rock","New Romantic","Nu-Breakz","Post-Punk","Post-Rock","Psytrance","Shoegaze","Space Rock","T\
rop Rock","World Music","Neoclassical","Audiobook","Audio Theatre","Neue Deutsche Welle","Podcast","\
Indie Rock","G-Funk","Dubstep","Garage Rock","Psybient"];var Td={len:128,get:(t,e)=>{let r=new gi(3).
get(t,e);return r==="TAG"?{header:r,title:new gi(30).get(t,e+3),artist:new gi(30).get(t,e+33),album:new gi(
30).get(t,e+63),year:new gi(4).get(t,e+93),comment:new gi(28).get(t,e+97),zeroByte:kd.UINT8.get(t,e+
127),track:kd.UINT8.get(t,e+126),genre:kd.UINT8.get(t,e+127)}:null}},gi=class extends kd.StringType{constructor(e){
super(e,"binary")}get(e,r){let n=super.get(e,r);return n=cN.trimRightNull(n),n=n.trim(),n.length>0?n:
void 0}},Yg=class t extends dN.BasicParser{static getGenre(e){if(e<en.Genres.length)return en.Genres[e]}async parse(){
if(!this.tokenizer.fileInfo.size){Sd("Skip checking for ID3v1 because the file-size is unknown");return}
if(this.options.apeHeader){this.tokenizer.ignore(this.options.apeHeader.offset-this.tokenizer.position);
let n=new fN.APEv2Parser;n.init(this.metadata,this.tokenizer,this.options),await n.parseTags(this.options.
apeHeader.footer)}let e=this.tokenizer.fileInfo.size-Td.len;if(this.tokenizer.position>e){Sd("Alread\
y consumed the last 128 bytes");return}let r=await this.tokenizer.readToken(Td,e);if(r){Sd("ID3v1 he\
ader found at: pos=%s",this.tokenizer.fileInfo.size-Td.len);for(let i of["title","artist","album","c\
omment","track","year"])r[i]&&r[i]!==""&&this.addTag(i,r[i]);let n=t.getGenre(r.genre);n&&this.addTag(
"genre",n)}else Sd("ID3v1 header not found at: pos=%s",this.tokenizer.fileInfo.size-Td.len)}addTag(e,r){
this.metadata.addTag("ID3v1",e,r)}};en.ID3v1Parser=Yg;async function pN(t){if(t.fileSize>=128){let e=Buffer.
alloc(3);return await t.randomRead(e,0,e.length,t.fileSize-128),e.toString("binary")==="TAG"}return!1}
en.hasID3v1Header=pN});var OS=I(jo=>{"use strict";Object.defineProperty(jo,"__esModule",{value:!0});jo.FrameParser=jo.parseGenre=
void 0;var hN=he(),Qg=te(),pe=Ue(),NS=Uo(),BS=Dl(),FS=(0,hN.default)("music-metadata:id3v2:frame-par\
ser"),yr="latin1";function MS(t){let e=[],r,n="";for(let i of t)if(typeof r=="string")if(i==="("&&r===
"")n+="(",r=void 0;else if(i===")"){n!==""&&(e.push(n),n="");let a=mN(r);a&&e.push(a),r=void 0}else r+=
i;else i==="("?r="":n+=i;return n&&(e.length===0&&n.match(/^\d*$/)&&(n=BS.Genres[n]),e.push(n)),e}jo.
parseGenre=MS;function mN(t){if(t==="RX")return"Remix";if(t==="CR")return"Cover";if(t.match(/^\d*$/))
return BS.Genres[t]}var Zg=class t{constructor(e,r){this.major=e,this.warningCollector=r}readData(e,r,n){
if(e.length===0){this.warningCollector.addWarning(`id3v2.${this.major} header has empty tag type=${r}`);
return}let{encoding:i,bom:a}=NS.TextEncodingToken.get(e,0),o=e.length,s=0,l=[],u=t.getNullTerminatorLength(
i),c,d={};switch(FS(`Parsing tag type=${r}, encoding=${i}, bom=${a}`),r!=="TXXX"&&r[0]==="T"?"T*":r){case"\
T*":case"IPLS":case"MVIN":case"MVNM":case"PCS":case"PCST":let f;try{f=pe.decodeString(e.slice(1),i).
replace(/\x00+$/,"")}catch(g){this.warningCollector.addWarning(`id3v2.${this.major} type=${r} header\
 has invalid string value: ${g.message}`)}switch(r){case"TMCL":case"TIPL":case"IPLS":l=this.splitValue(
r,f),l=t.functionList(l);break;case"TRK":case"TRCK":case"TPOS":l=f;break;case"TCOM":case"TEXT":case"\
TOLY":case"TOPE":case"TPE1":case"TSRC":l=this.splitValue(r,f);break;case"TCO":case"TCON":l=this.splitValue(
r,f).map(g=>MS(g)).reduce((g,E)=>g.concat(E),[]);break;case"PCS":case"PCST":l=this.major>=4?this.splitValue(
r,f):[f],l=Array.isArray(l)&&l[0]===""?1:0;break;default:l=this.major>=4?this.splitValue(r,f):[f]}break;case"\
TXXX":l=t.readIdentifierAndData(e,s+1,o,i),l={description:l.id,text:this.splitValue(r,pe.decodeString(
l.data,i).replace(/\x00+$/,""))};break;case"PIC":case"APIC":if(n){let g={};switch(s+=1,this.major){case 2:
g.format=pe.decodeString(e.slice(s,s+3),"latin1"),s+=3;break;case 3:case 4:c=pe.findZero(e,s,o,yr),g.
format=pe.decodeString(e.slice(s,c),yr),s=c+1;break;default:throw new Error("Warning: unexpected maj\
or versionIndex: "+this.major)}g.format=t.fixPictureMimeType(g.format),g.type=NS.AttachedPictureType[e[s]],
s+=1,c=pe.findZero(e,s,o,i),g.description=pe.decodeString(e.slice(s,c),i),s=c+u,g.data=Buffer.from(e.
slice(s,o)),l=g}break;case"CNT":case"PCNT":l=Qg.UINT32_BE.get(e,0);break;case"SYLT":for(s+=7,l=[];s<
o;){let g=e.slice(s,s=pe.findZero(e,s,o,i));s+=5,l.push(pe.decodeString(g,i))}break;case"ULT":case"U\
SLT":case"COM":case"COMM":s+=1,d.language=pe.decodeString(e.slice(s,s+3),yr),s+=3,c=pe.findZero(e,s,
o,i),d.description=pe.decodeString(e.slice(s,c),i),s=c+u,d.text=pe.decodeString(e.slice(s,o),i).replace(
/\x00+$/,""),l=[d];break;case"UFID":l=t.readIdentifierAndData(e,s,o,yr),l={owner_identifier:l.id,identifier:l.
data};break;case"PRIV":l=t.readIdentifierAndData(e,s,o,yr),l={owner_identifier:l.id,data:l.data};break;case"\
POPM":c=pe.findZero(e,s,o,yr);let m=pe.decodeString(e.slice(s,c),yr);s=c+1;let w=o-s;l={email:m,rating:Qg.
UINT8.get(e,s),counter:w>=5?Qg.UINT32_BE.get(e,s+1):void 0};break;case"GEOB":{c=pe.findZero(e,s+1,o,
i);let g=pe.decodeString(e.slice(s+1,c),yr);s=c+1,c=pe.findZero(e,s,o-s,i);let E=pe.decodeString(e.slice(
s,c),yr);s=c+1,c=pe.findZero(e,s,o-s,i);let p=pe.decodeString(e.slice(s,c),yr);l={type:g,filename:E,
description:p,data:e.slice(s+1,o)};break}case"WCOM":case"WCOP":case"WOAF":case"WOAR":case"WOAS":case"\
WORS":case"WPAY":case"WPUB":l=pe.decodeString(e.slice(s,c),yr);break;case"WXXX":{c=pe.findZero(e,s+1,
o,i);let g=pe.decodeString(e.slice(s+1,c),i);s=c+(i==="utf16le"?2:1),l={description:g,url:pe.decodeString(
e.slice(s,o),yr)};break}case"WFD":case"WFED":l=pe.decodeString(e.slice(s+1,pe.findZero(e,s+1,o,i)),i);
break;case"MCDI":{l=e.slice(0,o);break}default:FS("Warning: unsupported id3v2-tag-type: "+r);break}return l}static fixPictureMimeType(e){
switch(e=e.toLocaleLowerCase(),e){case"jpg":return"image/jpeg";case"png":return"image/png"}return e}static functionList(e){
let r={};for(let n=0;n+1<e.length;n+=2){let i=e[n+1].split(",");r[e[n]]=r.hasOwnProperty(e[n])?r[e[n]].
concat(i):i}return r}splitValue(e,r){let n;return this.major<4?(n=r.split(/\x00/g),n.length>1?this.warningCollector.
addWarning(`ID3v2.${this.major} ${e} uses non standard null-separator.`):n=r.split(/\//g)):n=r.split(
/\x00/g),t.trimArray(n)}static trimArray(e){return e.map(r=>r.replace(/\x00+$/,"").trim())}static readIdentifierAndData(e,r,n,i){
let a=pe.findZero(e,r,n,i),o=pe.decodeString(e.slice(r,a),i);return r=a+t.getNullTerminatorLength(i),
{id:o,data:e.slice(r,n)}}static getNullTerminatorLength(e){return e==="utf16le"?2:1}};jo.FrameParser=
Zg});var Ho=I(Cd=>{"use strict";Object.defineProperty(Cd,"__esModule",{value:!0});Cd.ID3v2Parser=void 0;var Jg=te(),
yi=Ue(),gN=OS(),bd=Uo(),e0=class t{static removeUnsyncBytes(e){let r=0,n=0;for(;r<e.length-1;)r!==n&&
(e[n]=e[r]),r+=e[r]===255&&e[r+1]===0?2:1,n++;return r<e.length&&(e[n++]=e[r]),e.slice(0,n)}static getFrameHeaderLength(e){
switch(e){case 2:return 6;case 3:case 4:return 10;default:throw new Error("header versionIndex is in\
correct")}}static readFrameFlags(e){return{status:{tag_alter_preservation:yi.getBit(e,0,6),file_alter_preservation:yi.
getBit(e,0,5),read_only:yi.getBit(e,0,4)},format:{grouping_identity:yi.getBit(e,1,7),compression:yi.
getBit(e,1,3),encryption:yi.getBit(e,1,2),unsynchronisation:yi.getBit(e,1,1),data_length_indicator:yi.
getBit(e,1,0)}}}static readFrameData(e,r,n,i,a){let o=new gN.FrameParser(n,a);switch(n){case 2:return o.
readData(e,r.id,i);case 3:case 4:return r.flags.format.unsynchronisation&&(e=t.removeUnsyncBytes(e)),
r.flags.format.data_length_indicator&&(e=e.slice(4,e.length)),o.readData(e,r.id,i);default:throw new Error(
"Unexpected majorVer: "+n)}}static makeDescriptionTagName(e,r){return e+(r?":"+r:"")}async parse(e,r,n){
this.tokenizer=r,this.metadata=e,this.options=n;let i=await this.tokenizer.readToken(bd.ID3v2Header);
if(i.fileIdentifier!=="ID3")throw new Error("expected ID3-header file-identifier 'ID3' was not found");
return this.id3Header=i,this.headerType="ID3v2."+i.version.major,i.flags.isExtendedHeader?this.parseExtendedHeader():
this.parseId3Data(i.size)}async parseExtendedHeader(){let e=await this.tokenizer.readToken(bd.ExtendedHeader),
r=e.size-bd.ExtendedHeader.len;return r>0?this.parseExtendedHeaderData(r,e.size):this.parseId3Data(this.
id3Header.size-e.size)}async parseExtendedHeaderData(e,r){return await this.tokenizer.ignore(e),this.
parseId3Data(this.id3Header.size-r)}async parseId3Data(e){let r=await this.tokenizer.readToken(new Jg.
Uint8ArrayType(e));for(let n of this.parseMetadata(r))if(n.id==="TXXX"){if(n.value)for(let i of n.value.
text)this.addTag(t.makeDescriptionTagName(n.id,n.value.description),i)}else if(n.id==="COM")for(let i of n.
value)this.addTag(t.makeDescriptionTagName(n.id,i.description),i.text);else if(n.id==="COMM")for(let i of n.
value)this.addTag(t.makeDescriptionTagName(n.id,i.description),i);else if(Array.isArray(n.value))for(let i of n.
value)this.addTag(n.id,i);else this.addTag(n.id,n.value)}addTag(e,r){this.metadata.addTag(this.headerType,
e,r)}parseMetadata(e){let r=0,n=[];for(;r!==e.length;){let i=t.getFrameHeaderLength(this.id3Header.version.
major);if(r+i>e.length){this.metadata.addWarning("Illegal ID3v2 tag length");break}let a=e.slice(r,r+=
i),o=this.readFrameHeader(a,this.id3Header.version.major),s=e.slice(r,r+=o.length),l=t.readFrameData(
s,o,this.id3Header.version.major,!this.options.skipCovers,this.metadata);l&&n.push({id:o.id,value:l})}
return n}readFrameHeader(e,r){let n;switch(r){case 2:n={id:Buffer.from(e.slice(0,3)).toString("ascii"),
length:Jg.UINT24_BE.get(e,3)},n.id.match(/[A-Z0-9]{3}/g)||this.metadata.addWarning(`Invalid ID3v2.${this.
id3Header.version.major} frame-header-ID: ${n.id}`);break;case 3:case 4:n={id:Buffer.from(e.slice(0,
4)).toString("ascii"),length:(r===4?bd.UINT32SYNCSAFE:Jg.UINT32_BE).get(e,4),flags:t.readFrameFlags(
e.slice(8,10))},n.id.match(/[A-Z0-9]{4}/g)||this.metadata.addWarning(`Invalid ID3v2.${this.id3Header.
version.major} frame-header-ID: ${n.id}`);break;default:throw new Error("Unexpected majorVer: "+r)}return n}};
Cd.ID3v2Parser=e0});var LS=I(Id=>{"use strict";Object.defineProperty(Id,"__esModule",{value:!0});Id.Common=void 0;var yN=te(),
vN=It(),t0=class{constructor(e,r){this.isAifc=r;let n=r?22:18;if(e.chunkSize<n)throw new Error(`COMM\
ON CHUNK size should always be at least ${n}`);this.len=e.chunkSize}get(e,r){let n=e.readUInt16BE(r+
8)-16398,i=e.readUInt16BE(r+8+2),a={numChannels:e.readUInt16BE(r),numSampleFrames:e.readUInt32BE(r+2),
sampleSize:e.readUInt16BE(r+6),sampleRate:n<0?i>>Math.abs(n):i<<n};if(this.isAifc){if(a.compressionType=
vN.FourCcToken.get(e,r+18),this.len>22){let o=e.readInt8(r+22);if(o>0){let s=(o+1)%2;if(23+o+s===this.
len)a.compressionName=new yN.StringType(o,"binary").get(e,r+23);else throw new Error("Illegal pstrin\
g length")}else a.compressionName=void 0}}else a.compressionName="PCM";return a}};Id.Common=t0});var US=I(Rd=>{"use strict";Object.defineProperty(Rd,"__esModule",{value:!0});Rd.Header=void 0;var wN=te(),
xN=It();Rd.Header={len:8,get:(t,e)=>({chunkID:xN.FourCcToken.get(t,e),chunkSize:Number(BigInt(wN.UINT32_BE.
get(t,e+4)))})}});var HS=I(Pd=>{"use strict";Object.defineProperty(Pd,"__esModule",{value:!0});Pd.AIFFParser=void 0;var zS=te(),
EN=he(),jS=Jr(),_N=Ho(),SN=It(),TN=zt(),kN=LS(),r0=US(),n0=(0,EN.default)("music-metadata:parser:aif\
f"),bN={NONE:"not compressed	PCM	Apple Computer",sowt:"PCM (byte swapped)",fl32:"32-bit floating poi\
nt IEEE 32-bit float",fl64:"64-bit floating point IEEE 64-bit float	Apple Computer",alaw:"ALaw 2:1	8\
-bit ITU-T G.711 A-law",ulaw:"\xB5Law 2:1	8-bit ITU-T G.711 \xB5-law	Apple Computer",ULAW:"CCITT G.7\
11 u-law 8-bit ITU-T G.711 \xB5-law",ALAW:"CCITT G.711 A-law 8-bit ITU-T G.711 A-law",FL32:"Float 32\
	IEEE 32-bit float "},i0=class extends TN.BasicParser{async parse(){if((await this.tokenizer.readToken(
r0.Header)).chunkID!=="FORM")throw new Error("Invalid Chunk-ID, expected 'FORM'");let r=await this.tokenizer.
readToken(SN.FourCcToken);switch(r){case"AIFF":this.metadata.setFormat("container",r),this.isCompressed=
!1;break;case"AIFC":this.metadata.setFormat("container","AIFF-C"),this.isCompressed=!0;break;default:
throw Error("Unsupported AIFF type: "+r)}this.metadata.setFormat("lossless",!this.isCompressed);try{
for(;!this.tokenizer.fileInfo.size||this.tokenizer.fileInfo.size-this.tokenizer.position>=r0.Header.
len;){n0("Reading AIFF chunk at offset="+this.tokenizer.position);let n=await this.tokenizer.readToken(
r0.Header),i=2*Math.round(n.chunkSize/2),a=await this.readData(n);await this.tokenizer.ignore(i-a)}}catch(n){
if(n instanceof jS.EndOfStreamError)n0("End-of-stream");else throw n}}async readData(e){var r;switch(e.
chunkID){case"COMM":let n=await this.tokenizer.readToken(new kN.Common(e,this.isCompressed));return this.
metadata.setFormat("bitsPerSample",n.sampleSize),this.metadata.setFormat("sampleRate",n.sampleRate),
this.metadata.setFormat("numberOfChannels",n.numChannels),this.metadata.setFormat("numberOfSamples",
n.numSampleFrames),this.metadata.setFormat("duration",n.numSampleFrames/n.sampleRate),this.metadata.
setFormat("codec",(r=n.compressionName)!==null&&r!==void 0?r:bN[n.compressionType]),e.chunkSize;case"\
ID3 ":let i=await this.tokenizer.readToken(new zS.Uint8ArrayType(e.chunkSize)),a=jS.fromBuffer(i);return await new _N.
ID3v2Parser().parse(this.metadata,a,this.options),e.chunkSize;case"SSND":return this.metadata.format.
duration&&this.metadata.setFormat("bitrate",8*e.chunkSize/this.metadata.format.duration),0;case"NAME":case"\
AUTH":case"(c) ":case"ANNO":return this.readTextChunk(e);default:return n0(`Ignore chunk id=${e.chunkID}\
, size=${e.chunkSize}`),0}}async readTextChunk(e){return(await this.tokenizer.readToken(new zS.StringType(
e.chunkSize,"ascii"))).split("\0").map(n=>n.trim()).filter(n=>n&&n.length>0).forEach(n=>{this.metadata.
addTag("AIFF",e.chunkID,n.trim())}),e.chunkSize}};Pd.AIFFParser=i0});var o0=I(a0=>{"use strict";Object.defineProperty(a0,"__esModule",{value:!0});var N=class t{static fromBin(e,r=0){
return new t(this.decode(e,r))}static decode(e,r=0){return(e.readUInt32LE(r).toString(16)+"-"+e.readUInt16LE(
r+4).toString(16)+"-"+e.readUInt16LE(r+6).toString(16)+"-"+e.readUInt16BE(r+8).toString(16)+"-"+e.slice(
r+10,r+16).toString("hex")).toUpperCase()}static decodeMediaType(e){switch(e.str){case t.AudioMedia.
str:return"audio";case t.VideoMedia.str:return"video";case t.CommandMedia.str:return"command";case t.
Degradable_JPEG_Media.str:return"degradable-jpeg";case t.FileTransferMedia.str:return"file-transfer";case t.
BinaryMedia.str:return"binary"}}static encode(e){let r=Buffer.alloc(16);return r.writeUInt32LE(parseInt(
e.slice(0,8),16),0),r.writeUInt16LE(parseInt(e.slice(9,13),16),4),r.writeUInt16LE(parseInt(e.slice(14,
18),16),6),Buffer.from(e.slice(19,23),"hex").copy(r,8),Buffer.from(e.slice(24),"hex").copy(r,10),r}constructor(e){
this.str=e}equals(e){return this.str===e.str}toBin(){return t.encode(this.str)}};N.HeaderObject=new N(
"75B22630-668E-11CF-A6D9-00AA0062CE6C");N.DataObject=new N("75B22636-668E-11CF-A6D9-00AA0062CE6C");N.
SimpleIndexObject=new N("33000890-E5B1-11CF-89F4-00A0C90349CB");N.IndexObject=new N("D6E229D3-35DA-1\
1D1-9034-00A0C90349BE");N.MediaObjectIndexObject=new N("FEB103F8-12AD-4C64-840F-2A1D2F7AD48C");N.TimecodeIndexObject=
new N("3CB73FD0-0C4A-4803-953D-EDF7B6228F0C");N.FilePropertiesObject=new N("8CABDCA1-A947-11CF-8EE4-\
00C00C205365");N.StreamPropertiesObject=new N("B7DC0791-A9B7-11CF-8EE6-00C00C205365");N.HeaderExtensionObject=
new N("5FBF03B5-A92E-11CF-8EE3-00C00C205365");N.CodecListObject=new N("86D15240-311D-11D0-A3A4-00A0C\
90348F6");N.ScriptCommandObject=new N("1EFB1A30-0B62-11D0-A39B-00A0C90348F6");N.MarkerObject=new N("\
F487CD01-A951-11CF-8EE6-00C00C205365");N.BitrateMutualExclusionObject=new N("D6E229DC-35DA-11D1-9034\
-00A0C90349BE");N.ErrorCorrectionObject=new N("75B22635-668E-11CF-A6D9-00AA0062CE6C");N.ContentDescriptionObject=
new N("75B22633-668E-11CF-A6D9-00AA0062CE6C");N.ExtendedContentDescriptionObject=new N("D2D0A440-E30\
7-11D2-97F0-00A0C95EA850");N.ContentBrandingObject=new N("2211B3FA-BD23-11D2-B4B7-00A0C955FC6E");N.StreamBitratePropertiesObject=
new N("7BF875CE-468D-11D1-8D82-006097C9A2B2");N.ContentEncryptionObject=new N("2211B3FB-BD23-11D2-B4\
B7-00A0C955FC6E");N.ExtendedContentEncryptionObject=new N("298AE614-2622-4C17-B935-DAE07EE9289C");N.
DigitalSignatureObject=new N("2211B3FC-BD23-11D2-B4B7-00A0C955FC6E");N.PaddingObject=new N("1806D474\
-CADF-4509-A4BA-9AABCB96AAE8");N.ExtendedStreamPropertiesObject=new N("14E6A5CB-C672-4332-8399-A9695\
2065B5A");N.AdvancedMutualExclusionObject=new N("A08649CF-4775-4670-8A16-6E35357566CD");N.GroupMutualExclusionObject=
new N("D1465A40-5A79-4338-B71B-E36B8FD6C249");N.StreamPrioritizationObject=new N("D4FED15B-88D3-454F\
-81F0-ED5C45999E24");N.BandwidthSharingObject=new N("A69609E6-517B-11D2-B6AF-00C04FD908E9");N.LanguageListObject=
new N("7C4346A9-EFE0-4BFC-B229-393EDE415C85");N.MetadataObject=new N("C5F8CBEA-5BAF-4877-8467-AA8C44\
FA4CCA");N.MetadataLibraryObject=new N("44231C94-9498-49D1-A141-1D134E457054");N.IndexParametersObject=
new N("D6E229DF-35DA-11D1-9034-00A0C90349BE");N.MediaObjectIndexParametersObject=new N("6B203BAD-3F1\
1-48E4-ACA8-D7613DE2CFA7");N.TimecodeIndexParametersObject=new N("F55E496D-9797-4B5D-8C8B-604DFE9BFB\
24");N.CompatibilityObject=new N("26F18B5D-4584-47EC-9F5F-0E651F0452C9");N.AdvancedContentEncryptionObject=
new N("43058533-6981-49E6-9B74-AD12CB86D58C");N.AudioMedia=new N("F8699E40-5B4D-11CF-A8FD-00805F5C44\
2B");N.VideoMedia=new N("BC19EFC0-5B4D-11CF-A8FD-00805F5C442B");N.CommandMedia=new N("59DACFC0-59E6-\
11D0-A3AC-00A0C90348F6");N.JFIF_Media=new N("B61BE100-5B4E-11CF-A8FD-00805F5C442B");N.Degradable_JPEG_Media=
new N("35907DE0-E415-11CF-A917-00805F5C442B");N.FileTransferMedia=new N("91BD222C-F21C-497A-8B6D-5AA\
86BFC0185");N.BinaryMedia=new N("3AFB65E2-47EF-40F2-AC2C-70A90D71D343");N.ASF_Index_Placeholder_Object=
new N("D9AADE20-7C17-4F9C-BC28-8555DD98E2A2");a0.default=N});var $S=I(Dd=>{"use strict";Object.defineProperty(Dd,"__esModule",{value:!0});Dd.AsfUtil=void 0;var CN=te(),
qS=Ue(),Br=class t{static getParserForAttr(e){return t.attributeParsers[e]}static parseUnicodeAttr(e){
return qS.stripNulls(qS.decodeString(e,"utf16le"))}static parseByteArrayAttr(e){return Buffer.from(e)}static parseBoolAttr(e,r=0){
return t.parseWordAttr(e,r)===1}static parseDWordAttr(e,r=0){return e.readUInt32LE(r)}static parseQWordAttr(e,r=0){
return CN.UINT64_LE.get(e,r)}static parseWordAttr(e,r=0){return e.readUInt16LE(r)}};Br.attributeParsers=
[Br.parseUnicodeAttr,Br.parseByteArrayAttr,Br.parseBoolAttr,Br.parseDWordAttr,Br.parseQWordAttr,Br.parseWordAttr,
Br.parseByteArrayAttr];Dd.AsfUtil=Br});var WS=I(se=>{"use strict";Object.defineProperty(se,"__esModule",{value:!0});se.WmPictureToken=se.MetadataLibraryObjectState=
se.MetadataObjectState=se.ExtendedStreamPropertiesObjectState=se.ExtendedContentDescriptionObjectState=
se.ContentDescriptionObjectState=se.readCodecEntries=se.HeaderExtensionObject=se.StreamPropertiesObject=
se.FilePropertiesObject=se.IgnoreObjectState=se.State=se.HeaderObjectToken=se.TopLevelHeaderObjectToken=
se.DataType=void 0;var Al=Ue(),Ge=te(),Rt=o0(),Ud=$S(),IN=Uo(),RN;(function(t){t[t.UnicodeString=0]=
"UnicodeString",t[t.ByteArray=1]="ByteArray",t[t.Bool=2]="Bool",t[t.DWord=3]="DWord",t[t.QWord=4]="Q\
Word",t[t.Word=5]="Word"})(RN=se.DataType||(se.DataType={}));se.TopLevelHeaderObjectToken={len:30,get:(t,e)=>({
objectId:Rt.default.fromBin(new Ge.BufferType(16).get(t,e)),objectSize:Number(Ge.UINT64_LE.get(t,e+16)),
numberOfHeaderObjects:Ge.UINT32_LE.get(t,e+24)})};se.HeaderObjectToken={len:24,get:(t,e)=>({objectId:Rt.
default.fromBin(new Ge.BufferType(16).get(t,e)),objectSize:Number(Ge.UINT64_LE.get(t,e+16))})};var tn=class{constructor(e){
this.len=Number(e.objectSize)-se.HeaderObjectToken.len}postProcessTag(e,r,n,i){if(r==="WM/Picture")e.
push({id:r,value:Ld.fromBuffer(i)});else{let a=Ud.AsfUtil.getParserForAttr(n);if(!a)throw new Error(
"unexpected value headerType: "+n);e.push({id:r,value:a(i)})}}};se.State=tn;var s0=class extends tn{constructor(e){
super(e)}get(e,r){return null}};se.IgnoreObjectState=s0;var Ad=class extends tn{constructor(e){super(
e)}get(e,r){return{fileId:Rt.default.fromBin(e,r),fileSize:Ge.UINT64_LE.get(e,r+16),creationDate:Ge.
UINT64_LE.get(e,r+24),dataPacketsCount:Ge.UINT64_LE.get(e,r+32),playDuration:Ge.UINT64_LE.get(e,r+40),
sendDuration:Ge.UINT64_LE.get(e,r+48),preroll:Ge.UINT64_LE.get(e,r+56),flags:{broadcast:Al.getBit(e,
r+64,24),seekable:Al.getBit(e,r+64,25)},minimumDataPacketSize:Ge.UINT32_LE.get(e,r+68),maximumDataPacketSize:Ge.
UINT32_LE.get(e,r+72),maximumBitrate:Ge.UINT32_LE.get(e,r+76)}}};Ad.guid=Rt.default.FilePropertiesObject;
se.FilePropertiesObject=Ad;var Nd=class extends tn{constructor(e){super(e)}get(e,r){return{streamType:Rt.
default.decodeMediaType(Rt.default.fromBin(e,r)),errorCorrectionType:Rt.default.fromBin(e,r+8)}}};Nd.
guid=Rt.default.StreamPropertiesObject;se.StreamPropertiesObject=Nd;var Fd=class{constructor(){this.
len=22}get(e,r){return{reserved1:Rt.default.fromBin(e,r),reserved2:e.readUInt16LE(r+16),extensionDataSize:e.
readUInt32LE(r+18)}}};Fd.guid=Rt.default.HeaderExtensionObject;se.HeaderExtensionObject=Fd;var PN={len:20,
get:(t,e)=>({entryCount:t.readUInt16LE(e+16)})};async function VS(t){let e=await t.readNumber(Ge.UINT16_LE);
return(await t.readToken(new Ge.StringType(e*2,"utf16le"))).replace("\0","")}async function DN(t){let e=await t.
readToken(PN),r=[];for(let n=0;n<e.entryCount;++n)r.push(await NN(t));return r}se.readCodecEntries=DN;
async function AN(t){let e=await t.readNumber(Ge.UINT16_LE),r=Buffer.alloc(e);return await t.readBuffer(
r),r}async function NN(t){let e=await t.readNumber(Ge.UINT16_LE);return{type:{videoCodec:(e&1)===1,audioCodec:(e&
2)===2},codecName:await VS(t),description:await VS(t),information:await AN(t)}}var Nl=class t extends tn{constructor(e){
super(e)}get(e,r){let n=[],i=r+10;for(let a=0;a<t.contentDescTags.length;++a){let o=e.readUInt16LE(r+
a*2);if(o>0){let s=t.contentDescTags[a],l=i+o;n.push({id:s,value:Ud.AsfUtil.parseUnicodeAttr(e.slice(
i,l))}),i=l}}return n}};Nl.guid=Rt.default.ContentDescriptionObject;Nl.contentDescTags=["Title","Aut\
hor","Copyright","Description","Rating"];se.ContentDescriptionObjectState=Nl;var Bd=class extends tn{constructor(e){
super(e)}get(e,r){let n=[],i=e.readUInt16LE(r),a=r+2;for(let o=0;o<i;o+=1){let s=e.readUInt16LE(a);a+=
2;let l=Ud.AsfUtil.parseUnicodeAttr(e.slice(a,a+s));a+=s;let u=e.readUInt16LE(a);a+=2;let c=e.readUInt16LE(
a);a+=2;let d=e.slice(a,a+c);a+=c,this.postProcessTag(n,l,u,d)}return n}};Bd.guid=Rt.default.ExtendedContentDescriptionObject;
se.ExtendedContentDescriptionObjectState=Bd;var Md=class extends tn{constructor(e){super(e)}get(e,r){
return{startTime:Ge.UINT64_LE.get(e,r),endTime:Ge.UINT64_LE.get(e,r+8),dataBitrate:e.readInt32LE(r+12),
bufferSize:e.readInt32LE(r+16),initialBufferFullness:e.readInt32LE(r+20),alternateDataBitrate:e.readInt32LE(
r+24),alternateBufferSize:e.readInt32LE(r+28),alternateInitialBufferFullness:e.readInt32LE(r+32),maximumObjectSize:e.
readInt32LE(r+36),flags:{reliableFlag:Al.getBit(e,r+40,0),seekableFlag:Al.getBit(e,r+40,1),resendLiveCleanpointsFlag:Al.
getBit(e,r+40,2)},streamNumber:e.readInt16LE(r+42),streamLanguageId:e.readInt16LE(r+44),averageTimePerFrame:e.
readInt32LE(r+52),streamNameCount:e.readInt32LE(r+54),payloadExtensionSystems:e.readInt32LE(r+56),streamNames:[],
streamPropertiesObject:null}}};Md.guid=Rt.default.ExtendedStreamPropertiesObject;se.ExtendedStreamPropertiesObjectState=
Md;var Fl=class extends tn{constructor(e){super(e)}get(e,r){let n=[],i=Buffer.from(e),a=i.readUInt16LE(
r),o=r+2;for(let s=0;s<a;s+=1){o+=4;let l=i.readUInt16LE(o);o+=2;let u=i.readUInt16LE(o);o+=2;let c=i.
readUInt32LE(o);o+=4;let d=Ud.AsfUtil.parseUnicodeAttr(i.slice(o,o+l));o+=l;let f=i.slice(o,o+c);o+=
c,this.postProcessTag(n,d,u,f)}return n}};Fl.guid=Rt.default.MetadataObject;se.MetadataObjectState=Fl;
var Od=class extends Fl{constructor(e){super(e)}};Od.guid=Rt.default.MetadataLibraryObject;se.MetadataLibraryObjectState=
Od;var Ld=class t{static fromBase64(e){return this.fromBuffer(Buffer.from(e,"base64"))}static fromBuffer(e){
return new t(e.length).get(e,0)}constructor(e){this.len=e}get(e,r){let n=e.readUInt8(r++),i=e.readInt32LE(
r),a=5;for(;e.readUInt16BE(a)!==0;)a+=2;let o=e.slice(5,a).toString("utf16le");for(;e.readUInt16BE(a)!==
0;)a+=2;let s=e.slice(5,a).toString("utf16le");return{type:IN.AttachedPictureType[n],format:o,description:s,
size:i,data:e.slice(a+4)}}};se.WmPictureToken=Ld});var GS=I(jd=>{"use strict";Object.defineProperty(jd,"__esModule",{value:!0});jd.AsfParser=void 0;var FN=he(),
KS=ld(),ya=o0(),Ee=WS(),BN=zt(),zd=(0,FN.default)("music-metadata:parser:ASF"),MN="asf",l0=class extends BN.
BasicParser{async parse(){let e=await this.tokenizer.readToken(Ee.TopLevelHeaderObjectToken);if(!e.objectId.
equals(ya.default.HeaderObject))throw new Error("expected asf header; but was not found; got: "+e.objectId.
str);try{await this.parseObjectHeader(e.numberOfHeaderObjects)}catch(r){zd("Error while parsing ASF:\
 %s",r)}}async parseObjectHeader(e){let r;do{let n=await this.tokenizer.readToken(Ee.HeaderObjectToken);
switch(zd("header GUID=%s",n.objectId.str),n.objectId.str){case Ee.FilePropertiesObject.guid.str:let i=await this.
tokenizer.readToken(new Ee.FilePropertiesObject(n));this.metadata.setFormat("duration",Number(i.playDuration/
BigInt(1e3))/1e4-Number(i.preroll)/1e3),this.metadata.setFormat("bitrate",i.maximumBitrate);break;case Ee.
StreamPropertiesObject.guid.str:let a=await this.tokenizer.readToken(new Ee.StreamPropertiesObject(n));
this.metadata.setFormat("container","ASF/"+a.streamType);break;case Ee.HeaderExtensionObject.guid.str:
let o=await this.tokenizer.readToken(new Ee.HeaderExtensionObject);await this.parseExtensionObject(o.
extensionDataSize);break;case Ee.ContentDescriptionObjectState.guid.str:r=await this.tokenizer.readToken(
new Ee.ContentDescriptionObjectState(n)),this.addTags(r);break;case Ee.ExtendedContentDescriptionObjectState.
guid.str:r=await this.tokenizer.readToken(new Ee.ExtendedContentDescriptionObjectState(n)),this.addTags(
r);break;case ya.default.CodecListObject.str:let s=await Ee.readCodecEntries(this.tokenizer);s.forEach(
u=>{this.metadata.addStreamInfo({type:u.type.videoCodec?KS.TrackType.video:KS.TrackType.audio,codecName:u.
codecName})});let l=s.filter(u=>u.type.audioCodec).map(u=>u.codecName).join("/");this.metadata.setFormat(
"codec",l);break;case ya.default.StreamBitratePropertiesObject.str:await this.tokenizer.ignore(n.objectSize-
Ee.HeaderObjectToken.len);break;case ya.default.PaddingObject.str:zd("Padding: %s bytes",n.objectSize-
Ee.HeaderObjectToken.len),await this.tokenizer.ignore(n.objectSize-Ee.HeaderObjectToken.len);break;default:
this.metadata.addWarning("Ignore ASF-Object-GUID: "+n.objectId.str),zd("Ignore ASF-Object-GUID: %s",
n.objectId.str),await this.tokenizer.readToken(new Ee.IgnoreObjectState(n))}}while(--e)}addTags(e){e.
forEach(r=>{this.metadata.addTag(MN,r.id,r.value)})}async parseExtensionObject(e){do{let r=await this.
tokenizer.readToken(Ee.HeaderObjectToken),n=r.objectSize-Ee.HeaderObjectToken.len;switch(r.objectId.
str){case Ee.ExtendedStreamPropertiesObjectState.guid.str:await this.tokenizer.readToken(new Ee.ExtendedStreamPropertiesObjectState(
r));break;case Ee.MetadataObjectState.guid.str:let i=await this.tokenizer.readToken(new Ee.MetadataObjectState(
r));this.addTags(i);break;case Ee.MetadataLibraryObjectState.guid.str:let a=await this.tokenizer.readToken(
new Ee.MetadataLibraryObjectState(r));this.addTags(a);break;case ya.default.PaddingObject.str:await this.
tokenizer.ignore(n);break;case ya.default.CompatibilityObject.str:this.tokenizer.ignore(n);break;case ya.
default.ASF_Index_Placeholder_Object.str:await this.tokenizer.ignore(n);break;default:this.metadata.
addWarning("Ignore ASF-Object-GUID: "+r.objectId.str),await this.tokenizer.readToken(new Ee.IgnoreObjectState(
r));break}e-=r.objectSize}while(e>0)}};jd.AsfParser=l0});var c0=I(vi=>{"use strict";Object.defineProperty(vi,"__esModule",{value:!0});vi.IdentificationHeader=
vi.CommonHeader=vi.VorbisPictureToken=void 0;var Tn=te(),ON=Uo(),u0=class t{static fromBase64(e){return this.
fromBuffer(Buffer.from(e,"base64"))}static fromBuffer(e){return new t(e.length).get(e,0)}constructor(e){
this.len=e}get(e,r){let n=ON.AttachedPictureType[Tn.UINT32_BE.get(e,r)],i=Tn.UINT32_BE.get(e,r+=4),a=e.
toString("utf-8",r+=4,r+i),o=Tn.UINT32_BE.get(e,r+=i),s=e.toString("utf-8",r+=4,r+o),l=Tn.UINT32_BE.
get(e,r+=o),u=Tn.UINT32_BE.get(e,r+=4),c=Tn.UINT32_BE.get(e,r+=4),d=Tn.UINT32_BE.get(e,r+=4),f=Tn.UINT32_BE.
get(e,r+=4),m=Buffer.from(e.slice(r+=4,r+f));return{type:n,format:a,description:s,width:l,height:u,colour_depth:c,
indexed_color:d,data:m}}};vi.VorbisPictureToken=u0;vi.CommonHeader={len:7,get:(t,e)=>({packetType:t.
readUInt8(e),vorbis:new Tn.StringType(6,"ascii").get(t,e+1)})};vi.IdentificationHeader={len:23,get:(t,e)=>{
let r=new DataView(t.buffer,t.byteOffset);return{version:r.getUint32(e+0,!0),channelMode:r.getUint8(
e+4),sampleRate:r.getUint32(e+5,!0),bitrateMax:r.getUint32(e+9,!0),bitrateNominal:r.getUint32(e+13,!0),
bitrateMin:r.getUint32(e+17,!0)}}}});var Bl=I(Hd=>{"use strict";Object.defineProperty(Hd,"__esModule",{value:!0});Hd.AbstractID3Parser=void 0;
var LN=Jr(),UN=he(),XS=Uo(),zN=Ho(),jN=Dl(),HN=zt(),d0=(0,UN.default)("music-metadata:parser:ID3"),f0=class extends HN.
BasicParser{constructor(){super(...arguments),this.id3parser=new zN.ID3v2Parser}static async startsWithID3v2Header(e){
return(await e.peekToken(XS.ID3v2Header)).fileIdentifier==="ID3"}async parse(){try{await this.parseID3v2()}catch(e){
if(e instanceof LN.EndOfStreamError)d0("End-of-stream");else throw e}}finalize(){}async parseID3v2(){
await this.tryReadId3v2Headers(),d0("End of ID3v2 header, go to MPEG-parser: pos=%s",this.tokenizer.
position),await this.postId3v2Parse(),this.options.skipPostHeaders&&this.metadata.hasAny()?this.finalize():
(await new jN.ID3v1Parser().init(this.metadata,this.tokenizer,this.options).parse(),this.finalize())}async tryReadId3v2Headers(){
if((await this.tokenizer.peekToken(XS.ID3v2Header)).fileIdentifier==="ID3")return d0("Found ID3v2 he\
ader, pos=%s",this.tokenizer.position),await this.id3parser.parse(this.metadata,this.tokenizer,this.
options),this.tryReadId3v2Headers()}};Hd.AbstractID3Parser=f0});var h0=I(qd=>{"use strict";Object.defineProperty(qd,"__esModule",{value:!0});qd.VorbisDecoder=void 0;
var qN=te(),p0=class{constructor(e,r){this.data=e,this.offset=r}readInt32(){let e=qN.UINT32_LE.get(this.
data,this.offset);return this.offset+=4,e}readStringUtf8(){let e=this.readInt32(),r=Buffer.from(this.
data).toString("utf-8",this.offset,this.offset+e);return this.offset+=e,r}parseUserComment(){let e=this.
offset,r=this.readStringUtf8(),n=r.indexOf("=");return{key:r.slice(0,n).toUpperCase(),value:r.slice(
n+1),len:this.offset-e}}};qd.VorbisDecoder=p0});var Ml=I($d=>{"use strict";Object.defineProperty($d,"__esModule",{value:!0});$d.VorbisParser=void 0;
var YS=te(),$N=he(),VN=h0(),qo=c0(),$o=(0,$N.default)("music-metadata:parser:ogg:vorbis1"),m0=class{constructor(e,r){
this.metadata=e,this.options=r,this.pageSegments=[]}parsePage(e,r){if(e.headerType.firstPage)this.parseFirstPage(
e,r);else{if(e.headerType.continued){if(this.pageSegments.length===0)throw new Error("Cannot continu\
e on previous page");this.pageSegments.push(r)}if(e.headerType.lastPage||!e.headerType.continued){if(this.
pageSegments.length>0){let n=Buffer.concat(this.pageSegments);this.parseFullPage(n)}this.pageSegments=
e.headerType.lastPage?[]:[r]}}e.headerType.lastPage&&this.calculateDuration(e)}flush(){this.parseFullPage(
Buffer.concat(this.pageSegments))}parseUserComment(e,r){let i=new VN.VorbisDecoder(e,r).parseUserComment();
return this.addTag(i.key,i.value),i.len}addTag(e,r){if(e==="METADATA_BLOCK_PICTURE"&&typeof r=="stri\
ng"){if(this.options.skipCovers){$o("Ignore picture");return}r=qo.VorbisPictureToken.fromBase64(r),$o(
`Push picture: id=${e}, format=${r.format}`)}else $o(`Push tag: id=${e}, value=${r}`);this.metadata.
addTag("vorbis",e,r)}calculateDuration(e){this.metadata.format.sampleRate&&e.absoluteGranulePosition>=
0&&(this.metadata.setFormat("numberOfSamples",e.absoluteGranulePosition),this.metadata.setFormat("du\
ration",this.metadata.format.numberOfSamples/this.metadata.format.sampleRate))}parseFirstPage(e,r){this.
metadata.setFormat("codec","Vorbis I"),$o("Parse first page");let n=qo.CommonHeader.get(r,0);if(n.vorbis!==
"vorbis")throw new Error("Metadata does not look like Vorbis");if(n.packetType===1){let i=qo.IdentificationHeader.
get(r,qo.CommonHeader.len);this.metadata.setFormat("sampleRate",i.sampleRate),this.metadata.setFormat(
"bitrate",i.bitrateNominal),this.metadata.setFormat("numberOfChannels",i.channelMode),$o("sample-rat\
e=%s[hz], bitrate=%s[b/s], channel-mode=%s",i.sampleRate,i.bitrateNominal,i.channelMode)}else throw new Error(
"First Ogg page should be type 1: the identification header")}parseFullPage(e){let r=qo.CommonHeader.
get(e,0);switch($o("Parse full page: type=%s, byteLength=%s",r.packetType,e.byteLength),r.packetType){case 3:
return this.parseUserCommentList(e,qo.CommonHeader.len);case 1:case 5:break}}parseUserCommentList(e,r){
let n=YS.UINT32_LE.get(e,r);r+=4,r+=n;let i=YS.UINT32_LE.get(e,r);for(r+=4;i-- >0;)r+=this.parseUserComment(
e,r)}};$d.VorbisParser=m0});var QS=I(Vd=>{"use strict";Object.defineProperty(Vd,"__esModule",{value:!0});Vd.FlacParser=void 0;var wi=te(),
WN=he(),Ol=Ue(),KN=c0(),GN=Bl(),XN=It(),YN=Ml(),QN=h0(),ZN=(0,WN.default)("music-metadata:parser:FLA\
C"),kn;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.PADDING=1]="PADDING",t[t.APPLICATION=2]="APPL\
ICATION",t[t.SEEKTABLE=3]="SEEKTABLE",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.CUESHEET=5]="CUESHE\
ET",t[t.PICTURE=6]="PICTURE"})(kn||(kn={}));var g0=class extends GN.AbstractID3Parser{constructor(){
super(...arguments),this.padding=0}init(e,r,n){return super.init(e,r,n),this.vorbisParser=new YN.VorbisParser(
e,n),this}async postId3v2Parse(){if((await this.tokenizer.readToken(XN.FourCcToken)).toString()!=="f\
LaC")throw new Error("Invalid FLAC preamble");let r;do r=await this.tokenizer.readToken(va.BlockHeader),
await this.parseDataBlock(r);while(!r.lastBlock);if(this.tokenizer.fileInfo.size&&this.metadata.format.
duration){let n=this.tokenizer.fileInfo.size-this.tokenizer.position;this.metadata.setFormat("bitrat\
e",8*n/this.metadata.format.duration)}}parseDataBlock(e){switch(ZN(`blockHeader type=${e.type}, leng\
th=${e.length}`),e.type){case kn.STREAMINFO:return this.parseBlockStreamInfo(e.length);case kn.PADDING:
this.padding+=e.length;break;case kn.APPLICATION:break;case kn.SEEKTABLE:break;case kn.VORBIS_COMMENT:
return this.parseComment(e.length);case kn.CUESHEET:break;case kn.PICTURE:return this.parsePicture(e.
length).then();default:this.metadata.addWarning("Unknown block type: "+e.type)}return this.tokenizer.
ignore(e.length).then()}async parseBlockStreamInfo(e){if(e!==va.BlockStreamInfo.len)throw new Error(
"Unexpected block-stream-info length");let r=await this.tokenizer.readToken(va.BlockStreamInfo);this.
metadata.setFormat("container","FLAC"),this.metadata.setFormat("codec","FLAC"),this.metadata.setFormat(
"lossless",!0),this.metadata.setFormat("numberOfChannels",r.channels),this.metadata.setFormat("bitsP\
erSample",r.bitsPerSample),this.metadata.setFormat("sampleRate",r.sampleRate),r.totalSamples>0&&this.
metadata.setFormat("duration",r.totalSamples/r.sampleRate)}async parseComment(e){let r=await this.tokenizer.
readToken(new wi.Uint8ArrayType(e)),n=new QN.VorbisDecoder(r,0);n.readStringUtf8();let i=n.readInt32();
for(let a=0;a<i;a++){let o=n.parseUserComment();this.vorbisParser.addTag(o.key,o.value)}}async parsePicture(e){
if(this.options.skipCovers)return this.tokenizer.ignore(e);{let r=await this.tokenizer.readToken(new KN.
VorbisPictureToken(e));this.vorbisParser.addTag("METADATA_BLOCK_PICTURE",r)}}};Vd.FlacParser=g0;var va=class{};
va.BlockHeader={len:4,get:(t,e)=>({lastBlock:Ol.getBit(t,e,7),type:Ol.getBitAllignedNumber(t,e,1,7),
length:wi.UINT24_BE.get(t,e+1)})};va.BlockStreamInfo={len:34,get:(t,e)=>({minimumBlockSize:wi.UINT16_BE.
get(t,e),maximumBlockSize:wi.UINT16_BE.get(t,e+2)/1e3,minimumFrameSize:wi.UINT24_BE.get(t,e+4),maximumFrameSize:wi.
UINT24_BE.get(t,e+7),sampleRate:wi.UINT24_BE.get(t,e+10)>>4,channels:Ol.getBitAllignedNumber(t,e+12,
4,3)+1,bitsPerSample:Ol.getBitAllignedNumber(t,e+12,7,5)+1,totalSamples:Ol.getBitAllignedNumber(t,e+
13,4,36),fileMD5:new wi.Uint8ArrayType(16).get(t,e+18)})}});var R0=I(Y=>{"use strict";Object.defineProperty(Y,"__esModule",{value:!0});Y.ChapterText=Y.StcoAtom=
Y.StszAtom=Y.StscAtom=Y.SampleToChunkToken=Y.SttsAtom=Y.TimeToSampleToken=Y.SoundSampleDescriptionV0=
Y.SoundSampleDescriptionVersion=Y.StsdAtom=Y.TrackHeaderAtom=Y.NameAtom=Y.DataAtom=Y.MvhdAtom=Y.MdhdAtom=
Y.FixedLengthAtom=Y.mhdr=Y.tkhd=Y.ftyp=Y.ExtendedSize=Y.Header=void 0;var M=te(),JN=he(),JS=It(),eT=(0,JN.
default)("music-metadata:parser:MP4:atom");Y.Header={len:8,get:(t,e)=>{let r=M.UINT32_BE.get(t,e);if(r<
0)throw new Error("Invalid atom header length");return{length:BigInt(r),name:new M.StringType(4,"bin\
ary").get(t,e+4)}},put:(t,e,r)=>(M.UINT32_BE.put(t,e,Number(r.length)),JS.FourCcToken.put(t,e+4,r.name))};
Y.ExtendedSize=M.UINT64_BE;Y.ftyp={len:4,get:(t,e)=>({type:new M.StringType(4,"ascii").get(t,e)})};Y.
tkhd={len:4,get:(t,e)=>({type:new M.StringType(4,"ascii").get(t,e)})};Y.mhdr={len:8,get:(t,e)=>({version:M.
UINT8.get(t,e),flags:M.UINT24_BE.get(t,e+1),nextItemID:M.UINT32_BE.get(t,e+4)})};var Ll=class{constructor(e,r,n){
if(this.len=e,e<r)throw new Error(`Atom ${n} expected to be ${r}, but specifies ${e} bytes long.`);e>
r&&eT(`Warning: atom ${n} expected to be ${r}, but was actually ${e} bytes long.`)}};Y.FixedLengthAtom=
Ll;var Vo={len:4,get:(t,e)=>{let r=M.UINT32_BE.get(t,e)-2082844800;return new Date(r*1e3)}},y0=class extends Ll{constructor(e){
super(e,24,"mdhd"),this.len=e}get(e,r){return{version:M.UINT8.get(e,r+0),flags:M.UINT24_BE.get(e,r+1),
creationTime:Vo.get(e,r+4),modificationTime:Vo.get(e,r+8),timeScale:M.UINT32_BE.get(e,r+12),duration:M.
UINT32_BE.get(e,r+16),language:M.UINT16_BE.get(e,r+20),quality:M.UINT16_BE.get(e,r+22)}}};Y.MdhdAtom=
y0;var v0=class extends Ll{constructor(e){super(e,100,"mvhd"),this.len=e}get(e,r){return{version:M.UINT8.
get(e,r),flags:M.UINT24_BE.get(e,r+1),creationTime:Vo.get(e,r+4),modificationTime:Vo.get(e,r+8),timeScale:M.
UINT32_BE.get(e,r+12),duration:M.UINT32_BE.get(e,r+16),preferredRate:M.UINT32_BE.get(e,r+20),preferredVolume:M.
UINT16_BE.get(e,r+24),previewTime:M.UINT32_BE.get(e,r+72),previewDuration:M.UINT32_BE.get(e,r+76),posterTime:M.
UINT32_BE.get(e,r+80),selectionTime:M.UINT32_BE.get(e,r+84),selectionDuration:M.UINT32_BE.get(e,r+88),
currentTime:M.UINT32_BE.get(e,r+92),nextTrackID:M.UINT32_BE.get(e,r+96)}}};Y.MvhdAtom=v0;var w0=class{constructor(e){
this.len=e}get(e,r){return{type:{set:M.UINT8.get(e,r+0),type:M.UINT24_BE.get(e,r+1)},locale:M.UINT24_BE.
get(e,r+4),value:Buffer.from(new M.Uint8ArrayType(this.len-8).get(e,r+8))}}};Y.DataAtom=w0;var x0=class{constructor(e){
this.len=e}get(e,r){return{version:M.UINT8.get(e,r),flags:M.UINT24_BE.get(e,r+1),name:new M.StringType(
this.len-4,"utf-8").get(e,r+4)}}};Y.NameAtom=x0;var E0=class{constructor(e){this.len=e}get(e,r){return{
version:M.UINT8.get(e,r),flags:M.UINT24_BE.get(e,r+1),creationTime:Vo.get(e,r+4),modificationTime:Vo.
get(e,r+8),trackId:M.UINT32_BE.get(e,r+12),duration:M.UINT32_BE.get(e,r+20),layer:M.UINT16_BE.get(e,
r+24),alternateGroup:M.UINT16_BE.get(e,r+26),volume:M.UINT16_BE.get(e,r+28)}}};Y.TrackHeaderAtom=E0;
var ZS={len:8,get:(t,e)=>({version:M.UINT8.get(t,e),flags:M.UINT24_BE.get(t,e+1),numberOfEntries:M.UINT32_BE.
get(t,e+4)})},_0=class{constructor(e){this.len=e}get(e,r){return{dataFormat:JS.FourCcToken.get(e,r),
dataReferenceIndex:M.UINT16_BE.get(e,r+10),description:new M.Uint8ArrayType(this.len-12).get(e,r+12)}}},
S0=class{constructor(e){this.len=e}get(e,r){let n=ZS.get(e,r);r+=ZS.len;let i=[];for(let a=0;a<n.numberOfEntries;++a){
let o=M.UINT32_BE.get(e,r);r+=M.UINT32_BE.len,i.push(new _0(o).get(e,r)),r+=o}return{header:n,table:i}}};
Y.StsdAtom=S0;Y.SoundSampleDescriptionVersion={len:8,get(t,e){return{version:M.INT16_BE.get(t,e),revision:M.
INT16_BE.get(t,e+2),vendor:M.INT32_BE.get(t,e+4)}}};Y.SoundSampleDescriptionV0={len:12,get(t,e){return{
numAudioChannels:M.INT16_BE.get(t,e+0),sampleSize:M.INT16_BE.get(t,e+2),compressionId:M.INT16_BE.get(
t,e+4),packetSize:M.INT16_BE.get(t,e+6),sampleRate:M.UINT16_BE.get(t,e+8)+M.UINT16_BE.get(t,e+10)/1e4}}};
var Ul=class{constructor(e,r){this.len=e,this.token=r}get(e,r){let n=M.INT32_BE.get(e,r+4);return{version:M.
INT8.get(e,r+0),flags:M.INT24_BE.get(e,r+1),numberOfEntries:n,entries:tT(e,this.token,r+8,this.len-8,
n)}}};Y.TimeToSampleToken={len:8,get(t,e){return{count:M.INT32_BE.get(t,e+0),duration:M.INT32_BE.get(
t,e+4)}}};var T0=class extends Ul{constructor(e){super(e,Y.TimeToSampleToken),this.len=e}};Y.SttsAtom=
T0;Y.SampleToChunkToken={len:12,get(t,e){return{firstChunk:M.INT32_BE.get(t,e),samplesPerChunk:M.INT32_BE.
get(t,e+4),sampleDescriptionId:M.INT32_BE.get(t,e+8)}}};var k0=class extends Ul{constructor(e){super(
e,Y.SampleToChunkToken),this.len=e}};Y.StscAtom=k0;var b0=class{constructor(e){this.len=e}get(e,r){let n=M.
INT32_BE.get(e,r+8);return{version:M.INT8.get(e,r),flags:M.INT24_BE.get(e,r+1),sampleSize:M.INT32_BE.
get(e,r+4),numberOfEntries:n,entries:tT(e,M.INT32_BE,r+12,this.len-12,n)}}};Y.StszAtom=b0;var C0=class extends Ul{constructor(e){
super(e,M.INT32_BE),this.len=e}};Y.StcoAtom=C0;var I0=class{constructor(e){this.len=e}get(e,r){let n=M.
INT16_BE.get(e,r+0);return new M.StringType(n,"utf-8").get(e,r+2)}};Y.ChapterText=I0;function tT(t,e,r,n,i){
if(eT(`remainingLen=${n}, numberOfEntries=${i} * token-len=${e.len}`),n===0)return[];if(n!==i*e.len)
throw new Error("mismatch number-of-entries with remaining atom-length");let a=[];for(let o=0;o<i;++o)
a.push(e.get(t,r)),r+=e.len;return a}});var rT=I(Wd=>{"use strict";Object.defineProperty(Wd,"__esModule",{value:!0});Wd.Atom=void 0;var eF=he(),
P0=R0(),tF=(0,eF.default)("music-metadata:parser:MP4:Atom"),D0=class t{static async readAtom(e,r,n,i){
let a=e.position,o=await e.readToken(P0.Header);o.length===BigInt(1)&&(o.length=await e.readToken(P0.
ExtendedSize));let l=new t(o,o.length===BigInt(1),n),u=l.getPayloadLength(i);return tF(`parse atom n\
ame=${l.atomPath}, extended=${l.extended}, offset=${a}, len=${l.header.length}`),await l.readData(e,
r,u),l}constructor(e,r,n){this.header=e,this.extended=r,this.parent=n,this.children=[],this.atomPath=
(this.parent?this.parent.atomPath+".":"")+this.header.name}getHeaderLength(){return this.extended?16:
8}getPayloadLength(e){return(this.header.length===BigInt(0)?e:Number(this.header.length))-this.getHeaderLength()}async readAtoms(e,r,n){
for(;n>0;){let i=await t.readAtom(e,r,this,n);this.children.push(i),n-=i.header.length===BigInt(0)?n:
Number(i.header.length)}}async readData(e,r,n){switch(this.header.name){case"moov":case"udta":case"t\
rak":case"mdia":case"minf":case"stbl":case"<id>":case"ilst":case"tref":return this.readAtoms(e,r,this.
getPayloadLength(n));case"meta":let a=(await e.peekToken(P0.Header)).name==="hdlr"?0:4;return await e.
ignore(a),this.readAtoms(e,r,this.getPayloadLength(n)-a);case"mdhd":case"mvhd":case"tkhd":case"stsz":case"\
mdat":default:return r(this,n)}}};Wd.Atom=D0});var aT=I(Kd=>{"use strict";Object.defineProperty(Kd,"__esModule",{value:!0});Kd.MP4Parser=void 0;var rF=he(),
bn=te(),nF=zt(),iF=Dl(),aF=ld(),oF=rT(),at=R0(),rn=(0,rF.default)("music-metadata:parser:MP4"),sF="i\
Tunes",nT={raw:{lossy:!1,format:"raw"},MAC3:{lossy:!0,format:"MACE 3:1"},MAC6:{lossy:!0,format:"MACE\
 6:1"},ima4:{lossy:!0,format:"IMA 4:1"},ulaw:{lossy:!0,format:"uLaw 2:1"},alaw:{lossy:!0,format:"uLa\
w 2:1"},Qclp:{lossy:!0,format:"QUALCOMM PureVoice"},".mp3":{lossy:!0,format:"MPEG-1 layer 3"},alac:{
lossy:!1,format:"ALAC"},"ac-3":{lossy:!0,format:"AC-3"},mp4a:{lossy:!0,format:"MPEG-4/AAC"},mp4s:{lossy:!0,
format:"MP4S"},c608:{lossy:!0,format:"CEA-608"},c708:{lossy:!0,format:"CEA-708"}};function iT(t,e,r){
return r.indexOf(t)===e}var A0=class t extends nF.BasicParser{constructor(){super(...arguments),this.
atomParsers={mvhd:async e=>{let r=await this.tokenizer.readToken(new at.MvhdAtom(e));this.metadata.setFormat(
"creationTime",r.creationTime),this.metadata.setFormat("modificationTime",r.modificationTime)},mdhd:async e=>{
let r=await this.tokenizer.readToken(new at.MdhdAtom(e)),n=this.getTrackDescription();n.creationTime=
r.creationTime,n.modificationTime=r.modificationTime,n.timeScale=r.timeScale,n.duration=r.duration},
chap:async e=>{let r=this.getTrackDescription(),n=[];for(;e>=bn.UINT32_BE.len;)n.push(await this.tokenizer.
readNumber(bn.UINT32_BE)),e-=bn.UINT32_BE.len;r.chapterList=n},tkhd:async e=>{let r=await this.tokenizer.
readToken(new at.TrackHeaderAtom(e));this.tracks.push(r)},mdat:async e=>{if(this.audioLengthInBytes=
e,this.calculateBitRate(),this.options.includeChapters){let r=this.tracks.filter(n=>n.chapterList);if(r.
length===1){let n=r[0].chapterList,i=this.tracks.filter(a=>n.indexOf(a.trackId)!==-1);if(i.length===
1)return this.parseChapterTrack(i[0],r[0],e)}}await this.tokenizer.ignore(e)},ftyp:async e=>{let r=[];
for(;e>0;){let i=await this.tokenizer.readToken(at.ftyp);e-=at.ftyp.len;let a=i.type.replace(/\W/g,"");
a.length>0&&r.push(a)}rn(`ftyp: ${r.join("/")}`);let n=r.filter(iT).join("/");this.metadata.setFormat(
"container",n)},stsd:async e=>{let r=await this.tokenizer.readToken(new at.StsdAtom(e)),n=this.getTrackDescription();
n.soundSampleDescription=r.table.map(i=>this.parseSoundSampleDescription(i))},stsc:async e=>{let r=await this.
tokenizer.readToken(new at.StscAtom(e));this.getTrackDescription().sampleToChunkTable=r.entries},stts:async e=>{
let r=await this.tokenizer.readToken(new at.SttsAtom(e));this.getTrackDescription().timeToSampleTable=
r.entries},stsz:async e=>{let r=await this.tokenizer.readToken(new at.StszAtom(e)),n=this.getTrackDescription();
n.sampleSize=r.sampleSize,n.sampleSizeTable=r.entries},stco:async e=>{let r=await this.tokenizer.readToken(
new at.StcoAtom(e));this.getTrackDescription().chunkOffsetTable=r.entries},date:async e=>{let r=await this.
tokenizer.readToken(new bn.StringType(e,"utf-8"));this.addTag("date",r)}}}static read_BE_Integer(e,r){
let n=(r?"INT":"UINT")+e.length*8+(e.length>1?"_BE":""),i=bn[n];if(!i)throw new Error('Token for int\
eger type not found: "'+n+'"');return Number(i.get(e,0))}async parse(){this.tracks=[];let e=this.tokenizer.
fileInfo.size;for(;!this.tokenizer.fileInfo.size||e>0;){try{if((await this.tokenizer.peekToken(at.Header)).
name==="\0\0\0\0"){let o=`Error at offset=${this.tokenizer.position}: box.id=0`;rn(o),this.addWarning(
o);break}}catch(a){let o=`Error at offset=${this.tokenizer.position}: ${a.message}`;rn(o),this.addWarning(
o);break}let i=await oF.Atom.readAtom(this.tokenizer,(a,o)=>this.handleAtom(a,o),null,e);e-=i.header.
length===BigInt(0)?e:Number(i.header.length)}let r=[];this.tracks.forEach(i=>{let a=[];i.soundSampleDescription.
forEach(o=>{let s={},l=nT[o.dataFormat];if(l?(a.push(l.format),s.codecName=l.format):s.codecName=`<${o.
dataFormat}>`,o.description){let{description:u}=o;u.sampleRate>0&&(s.type=aF.TrackType.audio,s.audio=
{samplingFrequency:u.sampleRate,bitDepth:u.sampleSize,channels:u.numAudioChannels})}this.metadata.addStreamInfo(
s)}),a.length>=1&&r.push(a.join("/"))}),r.length>0&&this.metadata.setFormat("codec",r.filter(iT).join(
"+"));let n=this.tracks.filter(i=>i.soundSampleDescription.length>=1&&i.soundSampleDescription[0].description&&
i.soundSampleDescription[0].description.numAudioChannels>0);if(n.length>=1){let i=n[0];if(i.timeScale>
0){let s=i.duration/i.timeScale;this.metadata.setFormat("duration",s)}let a=i.soundSampleDescription[0];
if(a.description&&(this.metadata.setFormat("sampleRate",a.description.sampleRate),this.metadata.setFormat(
"bitsPerSample",a.description.sampleSize),this.metadata.setFormat("numberOfChannels",a.description.numAudioChannels),
i.timeScale===0&&i.timeToSampleTable.length>0)){let l=i.timeToSampleTable.map(u=>u.count*u.duration).
reduce((u,c)=>u+c)/a.description.sampleRate;this.metadata.setFormat("duration",l)}let o=nT[a.dataFormat];
o&&this.metadata.setFormat("lossless",!o.lossy),this.calculateBitRate()}}async handleAtom(e,r){if(e.
parent)switch(e.parent.header.name){case"ilst":case"<id>":return this.parseMetadataItemData(e)}if(this.
atomParsers[e.header.name])return this.atomParsers[e.header.name](r);rn(`No parser for atom path=${e.
atomPath}, payload-len=${r}, ignoring atom`),await this.tokenizer.ignore(r)}getTrackDescription(){return this.
tracks[this.tracks.length-1]}calculateBitRate(){this.audioLengthInBytes&&this.metadata.format.duration&&
this.metadata.setFormat("bitrate",8*this.audioLengthInBytes/this.metadata.format.duration)}addTag(e,r){
this.metadata.addTag(sF,e,r)}addWarning(e){rn("Warning: "+e),this.metadata.addWarning(e)}parseMetadataItemData(e){
let r=e.header.name;return e.readAtoms(this.tokenizer,async(n,i)=>{let a=n.getPayloadLength(i);switch(n.
header.name){case"data":return this.parseValueAtom(r,n);case"name":case"mean":case"rate":let o=await this.
tokenizer.readToken(new at.NameAtom(a));r+=":"+o.name;break;default:let s=await this.tokenizer.readToken(
new bn.BufferType(a));this.addWarning("Unsupported meta-item: "+r+"["+n.header.name+"] => value="+s.
toString("hex")+" ascii="+s.toString("ascii"))}},e.getPayloadLength(0))}async parseValueAtom(e,r){let n=await this.
tokenizer.readToken(new at.DataAtom(Number(r.header.length)-at.Header.len));if(n.type.set!==0)throw new Error(
"Unsupported type-set != 0: "+n.type.set);switch(n.type.type){case 0:switch(e){case"trkn":case"disk":
let i=bn.UINT8.get(n.value,3),a=bn.UINT8.get(n.value,5);this.addTag(e,i+"/"+a);break;case"gnre":let o=bn.
UINT8.get(n.value,1),s=iF.Genres[o-1];this.addTag(e,s);break;case"rate":let l=n.value.toString("asci\
i");this.addTag(e,l);break;default:rn("unknown proprietary value type for: "+r.atomPath)}break;case 1:case 18:
this.addTag(e,n.value.toString("utf-8"));break;case 13:if(this.options.skipCovers)break;this.addTag(
e,{format:"image/jpeg",data:Buffer.from(n.value)});break;case 14:if(this.options.skipCovers)break;this.
addTag(e,{format:"image/png",data:Buffer.from(n.value)});break;case 21:this.addTag(e,t.read_BE_Integer(
n.value,!0));break;case 22:this.addTag(e,t.read_BE_Integer(n.value,!1));break;case 65:this.addTag(e,
n.value.readInt8(0));break;case 66:this.addTag(e,n.value.readInt16BE(0));break;case 67:this.addTag(e,
n.value.readInt32BE(0));break;default:this.addWarning(`atom key=${e}, has unknown well-known-type (d\
ata-type): ${n.type.type}`)}}parseSoundSampleDescription(e){let r={dataFormat:e.dataFormat,dataReferenceIndex:e.
dataReferenceIndex},n=0,i=at.SoundSampleDescriptionVersion.get(e.description,n);return n+=at.SoundSampleDescriptionVersion.
len,i.version===0||i.version===1?r.description=at.SoundSampleDescriptionV0.get(e.description,n):rn(`\
Warning: sound-sample-description ${i} not implemented`),r}async parseChapterTrack(e,r,n){if(!e.sampleSize&&
e.chunkOffsetTable.length!==e.sampleSizeTable.length)throw new Error("Expected equal chunk-offset-ta\
ble & sample-size-table length.");let i=[];for(let a=0;a<e.chunkOffsetTable.length&&n>0;++a){let s=e.
chunkOffsetTable[a]-this.tokenizer.position,l=e.sampleSize>0?e.sampleSize:e.sampleSizeTable[a];if(n-=
s+l,n<0)throw new Error("Chapter chunk exceeding token length");await this.tokenizer.ignore(s);let u=await this.
tokenizer.readToken(new at.ChapterText(l));rn(`Chapter ${a+1}: ${u}`);let c={title:u,sampleOffset:this.
findSampleOffset(r,this.tokenizer.position)};rn(`Chapter title=${c.title}, offset=${c.sampleOffset}/${this.
tracks[0].duration}`),i.push(c)}this.metadata.setFormat("chapters",i),await this.tokenizer.ignore(n)}findSampleOffset(e,r){
let n=0;e.timeToSampleTable.forEach(a=>{n+=a.count*a.duration}),rn(`Total duration=${n}`);let i=0;for(;i<
e.chunkOffsetTable.length&&e.chunkOffsetTable[i]<r;)++i;return this.getChunkDuration(i+1,e)}getChunkDuration(e,r){
let n=0,i=r.timeToSampleTable[n].count,a=r.timeToSampleTable[n].duration,o=1,s=this.getSamplesPerChunk(
o,r.sampleToChunkTable),l=0;for(;o<e;){let u=Math.min(i,s);l+=u*a,i-=u,s-=u,s===0?(++o,s=this.getSamplesPerChunk(
o,r.sampleToChunkTable)):(++n,i=r.timeToSampleTable[n].count,a=r.timeToSampleTable[n].duration)}return l}getSamplesPerChunk(e,r){
for(let n=0;n<r.length-1;++n)if(e>=r[n].firstChunk&&e<r[n+1].firstChunk)return r[n].samplesPerChunk;
return r[r.length-1].samplesPerChunk}};Kd.MP4Parser=A0});var lT=I(Gd=>{"use strict";Object.defineProperty(Gd,"__esModule",{value:!0});Gd.ReplayGain=void 0;var zl=Ue(),
oT;(function(t){t[t.not_set=0]="not_set",t[t.radio=1]="radio",t[t.audiophile=2]="audiophile"})(oT||(oT=
{}));var sT;(function(t){t[t.unspecified=0]="unspecified",t[t.engineer=1]="engineer",t[t.user=2]="us\
er",t[t.automatic=3]="automatic",t[t.rms_average=4]="rms_average"})(sT||(sT={}));Gd.ReplayGain={len:2,
get:(t,e)=>{let r=zl.getBitAllignedNumber(t,e,0,3),n=zl.getBitAllignedNumber(t,e,6,1),i=zl.getBitAllignedNumber(
t,e,7,9)/10;if(r>0)return{type:zl.getBitAllignedNumber(t,e,0,3),origin:zl.getBitAllignedNumber(t,e,3,
3),adjustment:n?-i:i}}}});var dT=I(Xd=>{"use strict";Object.defineProperty(Xd,"__esModule",{value:!0});Xd.ExtendedLameHeader=void 0;
var jl=te(),uT=Ue(),cT=lT();Xd.ExtendedLameHeader={len:27,get:(t,e)=>{let r=jl.UINT32_BE.get(t,e+2);
return{revision:uT.getBitAllignedNumber(t,e,0,4),vbr_method:uT.getBitAllignedNumber(t,e,4,4),lowpass_filter:100*
jl.UINT8.get(t,e+1),track_peak:r===0?void 0:r/Math.pow(2,23),track_gain:cT.ReplayGain.get(t,6),album_gain:cT.
ReplayGain.get(t,8),music_length:jl.UINT32_BE.get(t,e+20),music_crc:jl.UINT8.get(t,e+24),header_crc:jl.
UINT16_BE.get(t,e+24)}}}});var fT=I(Mr=>{"use strict";Object.defineProperty(Mr,"__esModule",{value:!0});Mr.readXingHeader=Mr.XingHeaderFlags=
Mr.LameEncoderVersion=Mr.InfoTagHeaderTag=void 0;var wa=te(),Yd=Ue(),lF=dT();Mr.InfoTagHeaderTag=new wa.
StringType(4,"ascii");Mr.LameEncoderVersion=new wa.StringType(6,"ascii");Mr.XingHeaderFlags={len:4,get:(t,e)=>({
frames:Yd.isBitSet(t,e,31),bytes:Yd.isBitSet(t,e,30),toc:Yd.isBitSet(t,e,29),vbrScale:Yd.isBitSet(t,
e,28)})};async function uF(t){let e=await t.readToken(Mr.XingHeaderFlags),r={};if(e.frames&&(r.numFrames=
await t.readToken(wa.UINT32_BE)),e.bytes&&(r.streamSize=await t.readToken(wa.UINT32_BE)),e.toc&&(r.toc=
Buffer.alloc(100),await t.readBuffer(r.toc)),e.vbrScale&&(r.vbrScale=await t.readToken(wa.UINT32_BE)),
await t.peekToken(new wa.StringType(4,"ascii"))==="LAME"&&(await t.ignore(4),r.lame={version:await t.
readToken(new wa.StringType(5,"ascii"))},r.lame.version.match(/\d+.\d+/g))){let o=r.lame.version.match(
/\d+.\d+/g)[0].split(".").map(s=>parseInt(s,10));o[0]>=3&&o[1]>=90&&(r.lame.extended=await t.readToken(
lF.ExtendedLameHeader))}return r}Mr.readXingHeader=uF});var yT=I(Qd=>{"use strict";Object.defineProperty(Qd,"__esModule",{value:!0});Qd.MpegParser=void 0;var pT=te(),
N0=Jr(),cF=he(),ot=Ue(),dF=Bl(),Wo=fT(),Zt=(0,cF.default)("music-metadata:parser:mpeg"),hT=1024,mT={
AudioObjectTypes:["AAC Main","AAC LC","AAC SSR","AAC LTP"],SamplingFrequencies:[96e3,88200,64e3,48e3,
44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350,void 0,void 0,-1]},fF=[void 0,["front-center"],["fron\
t-left","front-right"],["front-center","front-left","front-right"],["front-center","front-left","fro\
nt-right","back-center"],["front-center","front-left","front-right","back-left","back-right"],["fron\
t-center","front-left","front-right","back-left","back-right","LFE-channel"],["front-center","front-\
left","front-right","side-left","side-right","back-left","back-right","LFE-channel"]],Jt=class t{constructor(e,r){
this.versionIndex=ot.getBitAllignedNumber(e,r+1,3,2),this.layer=t.LayerDescription[ot.getBitAllignedNumber(
e,r+1,5,2)],this.versionIndex>1&&this.layer===0?this.parseAdtsHeader(e,r):this.parseMpegHeader(e,r),
this.isProtectedByCRC=!ot.isBitSet(e,r+1,7)}calcDuration(e){return e*this.calcSamplesPerFrame()/this.
samplingRate}calcSamplesPerFrame(){return t.samplesInFrameTable[this.version===1?0:1][this.layer]}calculateSideInfoLength(){
if(this.layer!==3)return 2;if(this.channelModeIndex===3){if(this.version===1)return 17;if(this.version===
2||this.version===2.5)return 9}else{if(this.version===1)return 32;if(this.version===2||this.version===
2.5)return 17}}calcSlotSize(){return[null,4,1,1][this.layer]}parseMpegHeader(e,r){this.container="MP\
EG",this.bitrateIndex=ot.getBitAllignedNumber(e,r+2,0,4),this.sampRateFreqIndex=ot.getBitAllignedNumber(
e,r+2,4,2),this.padding=ot.isBitSet(e,r+2,6),this.privateBit=ot.isBitSet(e,r+2,7),this.channelModeIndex=
ot.getBitAllignedNumber(e,r+3,0,2),this.modeExtension=ot.getBitAllignedNumber(e,r+3,2,2),this.isCopyrighted=
ot.isBitSet(e,r+3,4),this.isOriginalMedia=ot.isBitSet(e,r+3,5),this.emphasis=ot.getBitAllignedNumber(
e,r+3,7,2),this.version=t.VersionID[this.versionIndex],this.channelMode=t.ChannelMode[this.channelModeIndex],
this.codec=`MPEG ${this.version} Layer ${this.layer}`;let n=this.calcBitrate();if(!n)throw new Error(
"Cannot determine bit-rate");if(this.bitrate=n*1e3,this.samplingRate=this.calcSamplingRate(),this.samplingRate==
null)throw new Error("Cannot determine sampling-rate")}parseAdtsHeader(e,r){Zt("layer=0 => ADTS"),this.
version=this.versionIndex===2?4:2,this.container="ADTS/MPEG-"+this.version;let n=ot.getBitAllignedNumber(
e,r+2,0,2);this.codec="AAC",this.codecProfile=mT.AudioObjectTypes[n],Zt(`MPEG-4 audio-codec=${this.codec}`);
let i=ot.getBitAllignedNumber(e,r+2,2,4);this.samplingRate=mT.SamplingFrequencies[i],Zt(`sampling-ra\
te=${this.samplingRate}`);let a=ot.getBitAllignedNumber(e,r+2,7,3);this.mp4ChannelConfig=fF[a],Zt(`c\
hannel-config=${this.mp4ChannelConfig.join("+")}`),this.frameLength=ot.getBitAllignedNumber(e,r+3,6,
2)<<11}calcBitrate(){if(this.bitrateIndex===0||this.bitrateIndex===15)return;let e=`${Math.floor(this.
version)}${this.layer}`;return t.bitrate_index[this.bitrateIndex][e]}calcSamplingRate(){return this.
sampRateFreqIndex===3?null:t.sampling_rate_freq_index[this.version][this.sampRateFreqIndex]}};Jt.SyncByte1=
255;Jt.SyncByte2=224;Jt.VersionID=[2.5,null,2,1];Jt.LayerDescription=[0,3,2,1];Jt.ChannelMode=["ster\
eo","joint_stereo","dual_channel","mono"];Jt.bitrate_index={1:{11:32,12:32,13:32,21:32,22:8,23:8},2:{
11:64,12:48,13:40,21:48,22:16,23:16},3:{11:96,12:56,13:48,21:56,22:24,23:24},4:{11:128,12:64,13:56,21:64,
22:32,23:32},5:{11:160,12:80,13:64,21:80,22:40,23:40},6:{11:192,12:96,13:80,21:96,22:48,23:48},7:{11:224,
12:112,13:96,21:112,22:56,23:56},8:{11:256,12:128,13:112,21:128,22:64,23:64},9:{11:288,12:160,13:128,
21:144,22:80,23:80},10:{11:320,12:192,13:160,21:160,22:96,23:96},11:{11:352,12:224,13:192,21:176,22:112,
23:112},12:{11:384,12:256,13:224,21:192,22:128,23:128},13:{11:416,12:320,13:256,21:224,22:144,23:144},
14:{11:448,12:384,13:320,21:256,22:160,23:160}};Jt.sampling_rate_freq_index={1:{0:44100,1:48e3,2:32e3},
2:{0:22050,1:24e3,2:16e3},2.5:{0:11025,1:12e3,2:8e3}};Jt.samplesInFrameTable=[[0,384,1152,1152],[0,384,
1152,576]];var gT={len:4,get:(t,e)=>new Jt(t,e)};function pF(t){return"V"+Math.floor((100-t)/10)}var F0=class extends dF.
AbstractID3Parser{constructor(){super(...arguments),this.frameCount=0,this.syncFrameCount=-1,this.countSkipFrameData=
0,this.totalDataLength=0,this.bitrates=[],this.calculateEofDuration=!1,this.buf_frame_header=Buffer.
alloc(4),this.syncPeek={buf:Buffer.alloc(hT),len:0}}async postId3v2Parse(){this.metadata.setFormat("\
lossless",!1);try{let e=!1;for(;!e;)await this.sync(),e=await this.parseCommonMpegHeader()}catch(e){
if(e instanceof N0.EndOfStreamError){if(Zt("End-of-stream"),this.calculateEofDuration){let r=this.frameCount*
this.samplesPerFrame;this.metadata.setFormat("numberOfSamples",r);let n=r/this.metadata.format.sampleRate;
Zt(`Calculate duration at EOF: ${n} sec.`,n),this.metadata.setFormat("duration",n)}}else throw e}}finalize(){
let e=this.metadata.format,r=this.metadata.native.hasOwnProperty("ID3v1");if(e.duration&&this.tokenizer.
fileInfo.size){let n=this.tokenizer.fileInfo.size-this.mpegOffset-(r?128:0);e.codecProfile&&e.codecProfile[0]===
"V"&&this.metadata.setFormat("bitrate",n*8/e.duration)}else if(this.tokenizer.fileInfo.size&&e.codecProfile===
"CBR"){let n=this.tokenizer.fileInfo.size-this.mpegOffset-(r?128:0),i=Math.round(n/this.frame_size)*
this.samplesPerFrame;this.metadata.setFormat("numberOfSamples",i);let a=i/e.sampleRate;Zt("Calculate\
 CBR duration based on file size: %s",a),this.metadata.setFormat("duration",a)}}async sync(){let e=!1;
for(;;){let r=0;if(this.syncPeek.len=await this.tokenizer.peekBuffer(this.syncPeek.buf,{length:hT,mayBeLess:!0}),
this.syncPeek.len<=163)throw new N0.EndOfStreamError;for(;;)if(e&&(this.syncPeek.buf[r]&224)===224){
this.buf_frame_header[0]=Jt.SyncByte1,this.buf_frame_header[1]=this.syncPeek.buf[r],await this.tokenizer.
ignore(r),Zt(`Sync at offset=${this.tokenizer.position-1}, frameCount=${this.frameCount}`),this.syncFrameCount===
this.frameCount&&(Zt(`Re-synced MPEG stream, frameCount=${this.frameCount}`),this.frameCount=0,this.
frame_size=0),this.syncFrameCount=this.frameCount;return}else if(e=!1,r=this.syncPeek.buf.indexOf(Jt.
SyncByte1,r),r===-1){if(this.syncPeek.len<this.syncPeek.buf.length)throw new N0.EndOfStreamError;await this.
tokenizer.ignore(this.syncPeek.len);break}else++r,e=!0}}async parseCommonMpegHeader(){this.frameCount===
0&&(this.mpegOffset=this.tokenizer.position-1),await this.tokenizer.peekBuffer(this.buf_frame_header,
{offset:1,length:3});let e;try{e=gT.get(this.buf_frame_header,0)}catch(r){return await this.tokenizer.
ignore(1),this.metadata.addWarning("Parse error: "+r.message),!1}return await this.tokenizer.ignore(
3),this.metadata.setFormat("container",e.container),this.metadata.setFormat("codec",e.codec),this.metadata.
setFormat("lossless",!1),this.metadata.setFormat("sampleRate",e.samplingRate),this.frameCount++,e.version>=
2&&e.layer===0?this.parseAdts(e):this.parseAudioFrameHeader(e)}async parseAudioFrameHeader(e){this.metadata.
setFormat("numberOfChannels",e.channelMode==="mono"?1:2),this.metadata.setFormat("bitrate",e.bitrate),
this.frameCount<20*1e4&&Zt("offset=%s MP%s bitrate=%s sample-rate=%s",this.tokenizer.position-4,e.layer,
e.bitrate,e.samplingRate);let r=e.calcSlotSize();if(r===null)throw new Error("invalid slot_size");let n=e.
calcSamplesPerFrame();Zt(`samples_per_frame=${n}`);let a=n/8*e.bitrate/e.samplingRate+(e.padding?r:0);
if(this.frame_size=Math.floor(a),this.audioFrameHeader=e,this.bitrates.push(e.bitrate),this.frameCount===
1)return this.offset=gT.len,await this.skipSideInformation(),!1;if(this.frameCount===3){if(this.areAllSame(
this.bitrates)){if(this.samplesPerFrame=n,this.metadata.setFormat("codecProfile","CBR"),this.tokenizer.
fileInfo.size)return!0}else if(this.metadata.format.duration)return!0;if(!this.options.duration)return!0}
return this.options.duration&&this.frameCount===4&&(this.samplesPerFrame=n,this.calculateEofDuration=
!0),this.offset=4,e.isProtectedByCRC?(await this.parseCrc(),!1):(await this.skipSideInformation(),!1)}async parseAdts(e){
let r=Buffer.alloc(3);await this.tokenizer.readBuffer(r),e.frameLength+=ot.getBitAllignedNumber(r,0,
0,11),this.totalDataLength+=e.frameLength,this.samplesPerFrame=1024;let n=e.samplingRate/this.samplesPerFrame,
a=8*(this.frameCount===0?0:this.totalDataLength/this.frameCount)*n+.5;if(this.metadata.setFormat("bi\
trate",a),Zt(`frame-count=${this.frameCount}, size=${e.frameLength} bytes, bit-rate=${a}`),await this.
tokenizer.ignore(e.frameLength>7?e.frameLength-7:1),this.frameCount===3)if(this.metadata.setFormat("\
codecProfile",e.codecProfile),e.mp4ChannelConfig&&this.metadata.setFormat("numberOfChannels",e.mp4ChannelConfig.
length),this.options.duration)this.calculateEofDuration=!0;else return!0;return!1}async parseCrc(){return this.
crc=await this.tokenizer.readNumber(pT.INT16_BE),this.offset+=2,this.skipSideInformation()}async skipSideInformation(){
let e=this.audioFrameHeader.calculateSideInfoLength();await this.tokenizer.readToken(new pT.Uint8ArrayType(
e)),this.offset+=e,await this.readXtraInfoHeader()}async readXtraInfoHeader(){let e=await this.tokenizer.
readToken(Wo.InfoTagHeaderTag);switch(this.offset+=Wo.InfoTagHeaderTag.len,e){case"Info":return this.
metadata.setFormat("codecProfile","CBR"),this.readXingInfoHeader();case"Xing":let n=await this.readXingInfoHeader(),
i=pF(n.vbrScale);return this.metadata.setFormat("codecProfile",i),null;case"Xtra":break;case"LAME":let a=await this.
tokenizer.readToken(Wo.LameEncoderVersion);if(this.frame_size>=this.offset+Wo.LameEncoderVersion.len)
return this.offset+=Wo.LameEncoderVersion.len,this.metadata.setFormat("tool","LAME "+a),await this.skipFrameData(
this.frame_size-this.offset),null;this.metadata.addWarning("Corrupt LAME header");break}let r=this.frame_size-
this.offset;return r<0?this.metadata.addWarning("Frame "+this.frameCount+"corrupt: negative frameDat\
aLeft"):await this.skipFrameData(r),null}async readXingInfoHeader(){let e=this.tokenizer.position,r=await(0,Wo.
readXingHeader)(this.tokenizer);if(this.offset+=this.tokenizer.position-e,r.lame&&(this.metadata.setFormat(
"tool","LAME "+ot.stripNulls(r.lame.version)),r.lame.extended&&(this.metadata.setFormat("trackPeakLe\
vel",r.lame.extended.track_peak),r.lame.extended.track_gain&&this.metadata.setFormat("trackGain",r.lame.
extended.track_gain.adjustment),r.lame.extended.album_gain&&this.metadata.setFormat("albumGain",r.lame.
extended.album_gain.adjustment),this.metadata.setFormat("duration",r.lame.extended.music_length/1e3))),
r.streamSize){let i=this.audioFrameHeader.calcDuration(r.numFrames);return this.metadata.setFormat("\
duration",i),Zt("Get duration from Xing header: %s",this.metadata.format.duration),r}let n=this.frame_size-
this.offset;return await this.skipFrameData(n),r}async skipFrameData(e){if(e<0)throw new Error("fram\
e-data-left cannot be negative");await this.tokenizer.ignore(e),this.countSkipFrameData+=e}areAllSame(e){
let r=e[0];return e.every(n=>n===r)}};Qd.MpegParser=F0});var ET=I(Jd=>{"use strict";Object.defineProperty(Jd,"__esModule",{value:!0});Jd.StreamReader=void 0;
var Zd=te(),hF=he(),Hl=Ue(),vT=(0,hF.default)("music-metadata:parser:musepack:sv8"),mF=new Zd.StringType(
2,"binary"),wT={len:5,get:(t,e)=>({crc:Zd.UINT32_LE.get(t,e),streamVersion:Zd.UINT8.get(t,e+4)})},xT={
len:2,get:(t,e)=>({sampleFrequency:[44100,48e3,37800,32e3][Hl.getBitAllignedNumber(t,e,0,3)],maxUsedBands:Hl.
getBitAllignedNumber(t,e,3,5),channelCount:Hl.getBitAllignedNumber(t,e+1,0,4)+1,msUsed:Hl.isBitSet(t,
e+1,4),audioBlockFrames:Hl.getBitAllignedNumber(t,e+1,5,3)})},B0=class{constructor(e){this.tokenizer=
e}async readPacketHeader(){let e=await this.tokenizer.readToken(mF),r=await this.readVariableSizeField();
return{key:e,payloadLength:r.value-2-r.len}}async readStreamHeader(e){let r={};vT(`Reading SH at off\
set=${this.tokenizer.position}`);let n=await this.tokenizer.readToken(wT);e-=wT.len,Object.assign(r,
n),vT(`SH.streamVersion = ${n.streamVersion}`);let i=await this.readVariableSizeField();e-=i.len,r.sampleCount=
i.value;let a=await this.readVariableSizeField();e-=a.len,r.beginningOfSilence=a.value;let o=await this.
tokenizer.readToken(xT);return e-=xT.len,Object.assign(r,o),await this.tokenizer.ignore(e),r}async readVariableSizeField(e=1,r=0){
let n=await this.tokenizer.readNumber(Zd.UINT8);return n&128?(n&=127,n+=r,this.readVariableSizeField(
e+1,n<<7)):{len:e,value:r+n}}};Jd.StreamReader=B0});var _T=I(ef=>{"use strict";Object.defineProperty(ef,"__esModule",{value:!0});ef.MpcSv8Parser=void 0;
var gF=he(),yF=zt(),vF=ga(),wF=It(),xF=ET(),EF=(0,gF.default)("music-metadata:parser:musepack"),M0=class extends yF.
BasicParser{constructor(){super(...arguments),this.audioLength=0}async parse(){if(await this.tokenizer.
readToken(wF.FourCcToken)!=="MPCK")throw new Error("Invalid Magic number");return this.metadata.setFormat(
"container","Musepack, SV8"),this.parsePacket()}async parsePacket(){let e=new xF.StreamReader(this.tokenizer);
do{let r=await e.readPacketHeader();switch(EF(`packet-header key=${r.key}, payloadLength=${r.payloadLength}`),
r.key){case"SH":let n=await e.readStreamHeader(r.payloadLength);this.metadata.setFormat("numberOfSam\
ples",n.sampleCount),this.metadata.setFormat("sampleRate",n.sampleFrequency),this.metadata.setFormat(
"duration",n.sampleCount/n.sampleFrequency),this.metadata.setFormat("numberOfChannels",n.channelCount);
break;case"AP":this.audioLength+=r.payloadLength,await this.tokenizer.ignore(r.payloadLength);break;case"\
RG":case"EI":case"SO":case"ST":case"CT":await this.tokenizer.ignore(r.payloadLength);break;case"SE":
return this.metadata.setFormat("bitrate",this.audioLength*8/this.metadata.format.duration),vF.APEv2Parser.
tryParseApeHeader(this.metadata,this.tokenizer,this.options);default:throw new Error(`Unexpected hea\
der: ${r.key}`)}}while(!0)}};ef.MpcSv8Parser=M0});var TT=I(tf=>{"use strict";Object.defineProperty(tf,"__esModule",{value:!0});tf.BitReader=void 0;var ST=te(),
O0=class{constructor(e){this.tokenizer=e,this.pos=0,this.dword=void 0}async read(e){for(;this.dword===
void 0;)this.dword=await this.tokenizer.readToken(ST.UINT32_LE);let r=this.dword;return this.pos+=e,
this.pos<32?(r>>>=32-this.pos,r&(1<<e)-1):(this.pos-=32,this.pos===0?(this.dword=void 0,r&(1<<e)-1):
(this.dword=await this.tokenizer.readToken(ST.UINT32_LE),this.pos&&(r<<=this.pos,r|=this.dword>>>32-
this.pos),r&(1<<e)-1))}async ignore(e){if(this.pos>0){let i=32-this.pos;this.dword=void 0,e-=i,this.
pos=0}let r=e%32,n=(e-r)/32;return await this.tokenizer.ignore(n*4),this.read(r)}};tf.BitReader=O0});var kT=I(rf=>{"use strict";Object.defineProperty(rf,"__esModule",{value:!0});rf.Header=void 0;var xi=te(),
Cn=Ue();rf.Header={len:6*4,get:(t,e)=>{let r={signature:Buffer.from(t).toString("latin1",e,e+3),streamMinorVersion:Cn.
getBitAllignedNumber(t,e+3,0,4),streamMajorVersion:Cn.getBitAllignedNumber(t,e+3,4,4),frameCount:xi.
UINT32_LE.get(t,e+4),maxLevel:xi.UINT16_LE.get(t,e+8),sampleFrequency:[44100,48e3,37800,32e3][Cn.getBitAllignedNumber(
t,e+10,0,2)],link:Cn.getBitAllignedNumber(t,e+10,2,2),profile:Cn.getBitAllignedNumber(t,e+10,4,4),maxBand:Cn.
getBitAllignedNumber(t,e+11,0,6),intensityStereo:Cn.isBitSet(t,e+11,6),midSideStereo:Cn.isBitSet(t,e+
11,7),titlePeak:xi.UINT16_LE.get(t,e+12),titleGain:xi.UINT16_LE.get(t,e+14),albumPeak:xi.UINT16_LE.get(
t,e+16),albumGain:xi.UINT16_LE.get(t,e+18),lastFrameLength:xi.UINT32_LE.get(t,e+20)>>>20&2047,trueGapless:Cn.
isBitSet(t,e+23,0)};return r.lastFrameLength=r.trueGapless?xi.UINT32_LE.get(t,20)>>>20&2047:0,r}}});var CT=I(nf=>{"use strict";Object.defineProperty(nf,"__esModule",{value:!0});nf.MpcSv7Parser=void 0;
var _F=he(),SF=zt(),TF=ga(),kF=TT(),bF=kT(),bT=(0,_F.default)("music-metadata:parser:musepack"),L0=class extends SF.
BasicParser{constructor(){super(...arguments),this.audioLength=0}async parse(){let e=await this.tokenizer.
readToken(bF.Header);if(e.signature!=="MP+")throw new Error("Unexpected magic number");bT(`stream-ve\
rsion=${e.streamMajorVersion}.${e.streamMinorVersion}`),this.metadata.setFormat("container","Musepac\
k, SV7"),this.metadata.setFormat("sampleRate",e.sampleFrequency);let r=1152*(e.frameCount-1)+e.lastFrameLength;
this.metadata.setFormat("numberOfSamples",r),this.duration=r/e.sampleFrequency,this.metadata.setFormat(
"duration",this.duration),this.bitreader=new kF.BitReader(this.tokenizer),this.metadata.setFormat("n\
umberOfChannels",e.midSideStereo||e.intensityStereo?2:1);let n=await this.bitreader.read(8);return this.
metadata.setFormat("codec",(n/100).toFixed(2)),await this.skipAudioData(e.frameCount),bT(`End of aud\
io stream, switching to APEv2, offset=${this.tokenizer.position}`),TF.APEv2Parser.tryParseApeHeader(
this.metadata,this.tokenizer,this.options)}async skipAudioData(e){for(;e-- >0;){let n=await this.bitreader.
read(20);this.audioLength+=20+n,await this.bitreader.ignore(n)}let r=await this.bitreader.read(11);this.
audioLength+=r,this.metadata.setFormat("bitrate",this.audioLength/this.duration)}};nf.MpcSv7Parser=L0});var RT=I(z0=>{"use strict";Object.defineProperty(z0,"__esModule",{value:!0});var CF=he(),IF=te(),RF=Bl(),
PF=_T(),DF=CT(),IT=(0,CF.default)("music-metadata:parser:musepack"),U0=class extends RF.AbstractID3Parser{async postId3v2Parse(){
let e=await this.tokenizer.peekToken(new IF.StringType(3,"binary")),r;switch(e){case"MP+":{IT("Musep\
ack stream-version 7"),r=new DF.MpcSv7Parser;break}case"MPC":{IT("Musepack stream-version 8"),r=new PF.
MpcSv8Parser;break}default:throw new Error("Invalid Musepack signature prefix")}return r.init(this.metadata,
this.tokenizer,this.options),r.parse()}};z0.default=U0});var PT=I(af=>{"use strict";Object.defineProperty(af,"__esModule",{value:!0});af.IdHeader=void 0;var AF=te(),
j0=class{constructor(e){if(this.len=e,e<19)throw new Error("ID-header-page 0 should be at least 19 b\
ytes long")}get(e,r){return{magicSignature:new AF.StringType(8,"ascii").get(e,r+0),version:e.readUInt8(
r+8),channelCount:e.readUInt8(r+9),preSkip:e.readInt16LE(r+10),inputSampleRate:e.readInt32LE(r+12),outputGain:e.
readInt16LE(r+16),channelMapping:e.readUInt8(r+18)}}};af.IdHeader=j0});var DT=I(of=>{"use strict";Object.defineProperty(of,"__esModule",{value:!0});of.OpusParser=void 0;var NF=te(),
FF=Ml(),BF=PT(),H0=class extends FF.VorbisParser{constructor(e,r,n){super(e,r),this.tokenizer=n,this.
lastPos=-1}parseFirstPage(e,r){if(this.metadata.setFormat("codec","Opus"),this.idHeader=new BF.IdHeader(
r.length).get(r,0),this.idHeader.magicSignature!=="OpusHead")throw new Error("Illegal ogg/Opus magic\
-signature");this.metadata.setFormat("sampleRate",this.idHeader.inputSampleRate),this.metadata.setFormat(
"numberOfChannels",this.idHeader.channelCount)}parseFullPage(e){switch(new NF.StringType(8,"ascii").
get(e,0)){case"OpusTags":this.parseUserCommentList(e,8),this.lastPos=this.tokenizer.position-e.length;
break;default:break}}calculateDuration(e){if(this.metadata.format.sampleRate&&e.absoluteGranulePosition>=
0){let r=e.absoluteGranulePosition-this.idHeader.preSkip;if(this.metadata.setFormat("numberOfSamples",
r),this.metadata.setFormat("duration",r/48e3),this.lastPos!==-1&&this.tokenizer.fileInfo.size&&this.
metadata.format.duration){let n=this.tokenizer.fileInfo.size-this.lastPos;this.metadata.setFormat("b\
itrate",8*n/this.metadata.format.duration)}}}};of.OpusParser=H0});var NT=I(sf=>{"use strict";Object.defineProperty(sf,"__esModule",{value:!0});sf.Header=void 0;var AT=te(),
MF=Ue();sf.Header={len:80,get:(t,e)=>({speex:new AT.StringType(8,"ascii").get(t,e+0),version:MF.trimRightNull(
new AT.StringType(20,"ascii").get(t,e+8)),version_id:t.readInt32LE(e+28),header_size:t.readInt32LE(e+
32),rate:t.readInt32LE(e+36),mode:t.readInt32LE(e+40),mode_bitstream_version:t.readInt32LE(e+44),nb_channels:t.
readInt32LE(e+48),bitrate:t.readInt32LE(e+52),frame_size:t.readInt32LE(e+56),vbr:t.readInt32LE(e+60),
frames_per_packet:t.readInt32LE(e+64),extra_headers:t.readInt32LE(e+68),reserved1:t.readInt32LE(e+72),
reserved2:t.readInt32LE(e+76)})}});var FT=I(lf=>{"use strict";Object.defineProperty(lf,"__esModule",{value:!0});lf.SpeexParser=void 0;var OF=he(),
LF=Ml(),UF=NT(),zF=(0,OF.default)("music-metadata:parser:ogg:speex"),q0=class extends LF.VorbisParser{constructor(e,r,n){
super(e,r),this.tokenizer=n}parseFirstPage(e,r){zF("First Ogg/Speex page");let n=UF.Header.get(r,0);
this.metadata.setFormat("codec",`Speex ${n.version}`),this.metadata.setFormat("numberOfChannels",n.nb_channels),
this.metadata.setFormat("sampleRate",n.rate),n.bitrate!==-1&&this.metadata.setFormat("bitrate",n.bitrate)}};
lf.SpeexParser=q0});var MT=I(uf=>{"use strict";Object.defineProperty(uf,"__esModule",{value:!0});uf.IdentificationHeader=
void 0;var BT=te();uf.IdentificationHeader={len:42,get:(t,e)=>({id:new BT.StringType(7,"ascii").get(
t,e),vmaj:t.readUInt8(e+7),vmin:t.readUInt8(e+8),vrev:t.readUInt8(e+9),vmbw:t.readUInt16BE(e+10),vmbh:t.
readUInt16BE(e+17),nombr:BT.UINT24_BE.get(t,e+37),nqual:t.readUInt8(e+40)})}});var OT=I(cf=>{"use strict";Object.defineProperty(cf,"__esModule",{value:!0});cf.TheoraParser=void 0;
var jF=he(),HF=MT(),$0=(0,jF.default)("music-metadata:parser:ogg:theora"),V0=class{constructor(e,r,n){
this.metadata=e,this.tokenizer=n}parsePage(e,r){e.headerType.firstPage&&this.parseFirstPage(e,r)}flush(){
$0("flush")}calculateDuration(e){$0("duration calculation not implemented")}parseFirstPage(e,r){$0("\
First Ogg/Theora page"),this.metadata.setFormat("codec","Theora");let n=HF.IdentificationHeader.get(
r,0);this.metadata.setFormat("bitrate",n.nombr)}};cf.TheoraParser=V0});var LT=I(Ko=>{"use strict";Object.defineProperty(Ko,"__esModule",{value:!0});Ko.OggParser=Ko.SegmentTable=
void 0;var Ei=te(),qF=Jr(),$F=he(),W0=Ue(),VF=It(),WF=zt(),KF=Ml(),GF=DT(),XF=FT(),YF=OT(),In=(0,$F.
default)("music-metadata:parser:ogg"),df=class t{static sum(e,r,n){let i=0;for(let a=r;a<r+n;++a)i+=
e[a];return i}constructor(e){this.len=e.page_segments}get(e,r){return{totalPageSize:t.sum(e,r,this.len)}}};
Ko.SegmentTable=df;var ff=class t extends WF.BasicParser{async parse(){In("pos=%s, parsePage()",this.
tokenizer.position);try{let e;do{if(e=await this.tokenizer.readToken(t.Header),e.capturePattern!=="O\
ggS")throw new Error("Invalid Ogg capture pattern");this.metadata.setFormat("container","Ogg"),this.
header=e,this.pageNumber=e.pageSequenceNo,In("page#=%s, Ogg.id=%s",e.pageSequenceNo,e.capturePattern);
let r=await this.tokenizer.readToken(new df(e));In("totalPageSize=%s",r.totalPageSize);let n=await this.
tokenizer.readToken(new Ei.Uint8ArrayType(r.totalPageSize));if(In("firstPage=%s, lastPage=%s, contin\
ued=%s",e.headerType.firstPage,e.headerType.lastPage,e.headerType.continued),e.headerType.firstPage){
let i=new Ei.StringType(7,"ascii").get(Buffer.from(n),0);switch(i){case"vorbis":In("Set page consum\
er to Ogg/Vorbis"),this.pageConsumer=new KF.VorbisParser(this.metadata,this.options);break;case"Opus\
Hea":In("Set page consumer to Ogg/Opus"),this.pageConsumer=new GF.OpusParser(this.metadata,this.options,
this.tokenizer);break;case"Speex  ":In("Set page consumer to Ogg/Speex"),this.pageConsumer=new XF.SpeexParser(
this.metadata,this.options,this.tokenizer);break;case"fishead":case"\0theora":In("Set page consumer \
to Ogg/Theora"),this.pageConsumer=new YF.TheoraParser(this.metadata,this.options,this.tokenizer);break;default:
throw new Error("gg audio-codec not recognized (id="+i+")")}}this.pageConsumer.parsePage(e,n)}while(!e.
headerType.lastPage)}catch(e){if(e instanceof qF.EndOfStreamError)this.metadata.addWarning("Last OGG\
-page is not marked with last-page flag"),In("End-of-stream"),this.metadata.addWarning("Last OGG-pag\
e is not marked with last-page flag"),this.header&&this.pageConsumer.calculateDuration(this.header);else if(e.
message.startsWith("FourCC"))this.pageNumber>0&&(this.metadata.addWarning("Invalid FourCC ID, maybe \
last OGG-page is not marked with last-page flag"),this.pageConsumer.flush());else throw e}}};ff.Header=
{len:27,get:(t,e)=>({capturePattern:VF.FourCcToken.get(t,e),version:Ei.UINT8.get(t,e+4),headerType:{
continued:W0.getBit(t,e+5,0),firstPage:W0.getBit(t,e+5,1),lastPage:W0.getBit(t,e+5,2)},absoluteGranulePosition:Number(
Ei.UINT64_LE.get(t,e+6)),streamSerialNumber:Ei.UINT32_LE.get(t,e+14),pageSequenceNo:Ei.UINT32_LE.get(
t,e+18),pageChecksum:Ei.UINT32_LE.get(t,e+22),page_segments:Ei.UINT8.get(t,e+26)})};Ko.OggParser=ff});var zT=I(Go=>{"use strict";Object.defineProperty(Go,"__esModule",{value:!0});Go.ListInfoTagValue=Go.
Header=void 0;var UT=te();Go.Header={len:8,get:(t,e)=>({chunkID:t.toString("binary",e,e+4),chunkSize:UT.
UINT32_LE.get(t,4)})};var K0=class{constructor(e){this.tagHeader=e,this.len=e.chunkSize,this.len+=this.
len&1}get(e,r){return new UT.StringType(this.tagHeader.chunkSize,"ascii").get(e,r)}};Go.ListInfoTagValue=
K0});var jT=I(Rn=>{"use strict";Object.defineProperty(Rn,"__esModule",{value:!0});Rn.FactChunk=Rn.Format=
Rn.WaveFormat=void 0;var QF;(function(t){t[t.PCM=1]="PCM",t[t.ADPCM=2]="ADPCM",t[t.IEEE_FLOAT=3]="IE\
EE_FLOAT",t[t.MPEG_ADTS_AAC=5632]="MPEG_ADTS_AAC",t[t.MPEG_LOAS=5634]="MPEG_LOAS",t[t.RAW_AAC1=255]=
"RAW_AAC1",t[t.DOLBY_AC3_SPDIF=146]="DOLBY_AC3_SPDIF",t[t.DVM=8192]="DVM",t[t.RAW_SPORT=576]="RAW_SP\
ORT",t[t.ESST_AC3=577]="ESST_AC3",t[t.DRM=9]="DRM",t[t.DTS2=8193]="DTS2",t[t.MPEG=80]="MPEG"})(QF=Rn.
WaveFormat||(Rn.WaveFormat={}));var G0=class{constructor(e){if(e.chunkSize<16)throw new Error("Inval\
id chunk size");this.len=e.chunkSize}get(e,r){return{wFormatTag:e.readUInt16LE(r),nChannels:e.readUInt16LE(
r+2),nSamplesPerSec:e.readUInt32LE(r+4),nAvgBytesPerSec:e.readUInt32LE(r+8),nBlockAlign:e.readUInt16LE(
r+12),wBitsPerSample:e.readUInt16LE(r+14)}}};Rn.Format=G0;var X0=class{constructor(e){if(e.chunkSize<
4)throw new Error("Invalid fact chunk size.");this.len=e.chunkSize}get(e,r){return{dwSampleLength:e.
readUInt32LE(r)}}};Rn.FactChunk=X0});var HT=I(pf=>{"use strict";Object.defineProperty(pf,"__esModule",{value:!0});pf.BroadcastAudioExtensionChunk=
void 0;var er=te(),ql=Ue();pf.BroadcastAudioExtensionChunk={len:420,get:(t,e)=>({description:(0,ql.stripNulls)(
new er.StringType(256,"ascii").get(t,e)).trim(),originator:(0,ql.stripNulls)(new er.StringType(32,"a\
scii").get(t,e+256)).trim(),originatorReference:(0,ql.stripNulls)(new er.StringType(32,"ascii").get(
t,e+288)).trim(),originationDate:(0,ql.stripNulls)(new er.StringType(10,"ascii").get(t,e+320)).trim(),
originationTime:(0,ql.stripNulls)(new er.StringType(8,"ascii").get(t,e+330)).trim(),timeReferenceLow:er.
UINT32_LE.get(t,e+338),timeReferenceHigh:er.UINT32_LE.get(t,e+342),version:er.UINT16_LE.get(t,e+346),
umid:new er.Uint8ArrayType(64).get(t,e+348),loudnessValue:er.UINT16_LE.get(t,e+412),maxTruePeakLevel:er.
UINT16_LE.get(t,e+414),maxMomentaryLoudness:er.UINT16_LE.get(t,e+416),maxShortTermLoudness:er.UINT16_LE.
get(t,e+418)})}});var KT=I(hf=>{"use strict";Object.defineProperty(hf,"__esModule",{value:!0});hf.WaveParser=void 0;var qT=Jr(),
$T=te(),ZF=he(),Xo=zT(),Y0=jT(),JF=Ho(),eB=Ue(),VT=It(),tB=zt(),WT=HT(),_i=(0,ZF.default)("music-met\
adata:parser:RIFF"),Q0=class extends tB.BasicParser{async parse(){let e=await this.tokenizer.readToken(
Xo.Header);if(_i(`pos=${this.tokenizer.position}, parse: chunkID=${e.chunkID}`),e.chunkID==="RIFF")return this.
parseRiffChunk(e.chunkSize).catch(r=>{if(!(r instanceof qT.EndOfStreamError))throw r})}async parseRiffChunk(e){
let r=await this.tokenizer.readToken(VT.FourCcToken);switch(this.metadata.setFormat("container",r),r){case"\
WAVE":return this.readWaveChunk(e-VT.FourCcToken.len);default:throw new Error(`Unsupported RIFF form\
at: RIFF/${r}`)}}async readWaveChunk(e){for(;e>=Xo.Header.len;){let r=await this.tokenizer.readToken(
Xo.Header);switch(e-=Xo.Header.len+r.chunkSize,r.chunkSize>e&&this.metadata.addWarning("Data chunk s\
ize exceeds file size"),this.header=r,_i(`pos=${this.tokenizer.position}, readChunk: chunkID=RIFF/WA\
VE/${r.chunkID}`),r.chunkID){case"LIST":await this.parseListTag(r);break;case"fact":this.metadata.setFormat(
"lossless",!1),this.fact=await this.tokenizer.readToken(new Y0.FactChunk(r));break;case"fmt ":let n=await this.
tokenizer.readToken(new Y0.Format(r)),i=Y0.WaveFormat[n.wFormatTag];i||(_i("WAVE/non-PCM format="+n.
wFormatTag),i="non-PCM ("+n.wFormatTag+")"),this.metadata.setFormat("codec",i),this.metadata.setFormat(
"bitsPerSample",n.wBitsPerSample),this.metadata.setFormat("sampleRate",n.nSamplesPerSec),this.metadata.
setFormat("numberOfChannels",n.nChannels),this.metadata.setFormat("bitrate",n.nBlockAlign*n.nSamplesPerSec*
8),this.blockAlign=n.nBlockAlign;break;case"id3 ":case"ID3 ":let a=await this.tokenizer.readToken(new $T.
Uint8ArrayType(r.chunkSize)),o=qT.fromBuffer(a);await new JF.ID3v2Parser().parse(this.metadata,o,this.
options);break;case"data":this.metadata.format.lossless!==!1&&this.metadata.setFormat("lossless",!0);
let s=r.chunkSize;if(this.tokenizer.fileInfo.size){let d=this.tokenizer.fileInfo.size-this.tokenizer.
position;d<s&&(this.metadata.addWarning("data chunk length exceeding file length"),s=d)}let l=this.fact?
this.fact.dwSampleLength:s===4294967295?void 0:s/this.blockAlign;l&&(this.metadata.setFormat("number\
OfSamples",l),this.metadata.setFormat("duration",l/this.metadata.format.sampleRate)),this.metadata.format.
codec==="ADPCM"?this.metadata.setFormat("bitrate",352e3):this.metadata.setFormat("bitrate",this.blockAlign*
this.metadata.format.sampleRate*8),await this.tokenizer.ignore(r.chunkSize);break;case"bext":let u=await this.
tokenizer.readToken(WT.BroadcastAudioExtensionChunk);Object.keys(u).forEach(d=>{this.metadata.addTag(
"exif","bext."+d,u[d])});let c=r.chunkSize-WT.BroadcastAudioExtensionChunk.len;await this.tokenizer.
ignore(c);break;case"\0\0\0\0":_i(`Ignore padding chunk: RIFF/${r.chunkID} of ${r.chunkSize} bytes`),
this.metadata.addWarning("Ignore chunk: RIFF/"+r.chunkID),await this.tokenizer.ignore(r.chunkSize);break;default:
_i(`Ignore chunk: RIFF/${r.chunkID} of ${r.chunkSize} bytes`),this.metadata.addWarning("Ignore chunk\
: RIFF/"+r.chunkID),await this.tokenizer.ignore(r.chunkSize)}this.header.chunkSize%2===1&&(_i("Read \
odd padding byte"),await this.tokenizer.ignore(1))}}async parseListTag(e){let r=await this.tokenizer.
readToken(new $T.StringType(4,"binary"));switch(_i("pos=%s, parseListTag: chunkID=RIFF/WAVE/LIST/%s",
this.tokenizer.position,r),r){case"INFO":return this.parseRiffInfoTags(e.chunkSize-4);case"adtl":default:
return this.metadata.addWarning("Ignore chunk: RIFF/WAVE/LIST/"+r),_i("Ignoring chunkID=RIFF/WAVE/LI\
ST/"+r),this.tokenizer.ignore(e.chunkSize-4).then()}}async parseRiffInfoTags(e){for(;e>=8;){let r=await this.
tokenizer.readToken(Xo.Header),n=new Xo.ListInfoTagValue(r),i=await this.tokenizer.readToken(n);this.
addTag(r.chunkID,eB.stripNulls(i)),e-=8+n.len}if(e!==0)throw Error("Illegal remaining size: "+e)}addTag(e,r){
this.metadata.addTag("exif",e,r)}};hf.WaveParser=Q0});var GT=I(mf=>{"use strict";Object.defineProperty(mf,"__esModule",{value:!0});mf.WavPack=void 0;var xa=te(),
rB=It(),nB=[6e3,8e3,9600,11025,12e3,16e3,22050,24e3,32e3,44100,48e3,64e3,88200,96e3,192e3,-1],st=class t{static isBitSet(e,r){
return t.getBitAllignedNumber(e,r,1)===1}static getBitAllignedNumber(e,r,n){return e>>>r&4294967295>>>
32-n}};st.BlockHeaderToken={len:32,get:(t,e)=>{let r=xa.UINT32_LE.get(t,e+24),n={BlockID:rB.FourCcToken.
get(t,e),blockSize:xa.UINT32_LE.get(t,e+4),version:xa.UINT16_LE.get(t,e+8),totalSamples:xa.UINT32_LE.
get(t,e+12),blockIndex:xa.UINT32_LE.get(t,e+16),blockSamples:xa.UINT32_LE.get(t,e+20),flags:{bitsPerSample:(1+
st.getBitAllignedNumber(r,0,2))*8,isMono:st.isBitSet(r,2),isHybrid:st.isBitSet(r,3),isJointStereo:st.
isBitSet(r,4),crossChannel:st.isBitSet(r,5),hybridNoiseShaping:st.isBitSet(r,6),floatingPoint:st.isBitSet(
r,7),samplingRate:nB[st.getBitAllignedNumber(r,23,4)],isDSD:st.isBitSet(r,31)},crc:new xa.Uint8ArrayType(
4).get(t,e+28)};return n.flags.isDSD&&(n.totalSamples*=8),n}};st.MetadataIdToken={len:1,get:(t,e)=>({
functionId:st.getBitAllignedNumber(t[e],0,6),isOptional:st.isBitSet(t[e],5),isOddSize:st.isBitSet(t[e],
6),largeBlock:st.isBitSet(t[e],7)})};mf.WavPack=st});var XT=I(yf=>{"use strict";Object.defineProperty(yf,"__esModule",{value:!0});yf.WavPackParser=void 0;
var gf=te(),iB=ga(),aB=It(),oB=zt(),Ea=GT(),sB=he(),_a=(0,sB.default)("music-metadata:parser:WavPack"),
Z0=class extends oB.BasicParser{async parse(){return this.audioDataSize=0,await this.parseWavPackBlocks(),
iB.APEv2Parser.tryParseApeHeader(this.metadata,this.tokenizer,this.options)}async parseWavPackBlocks(){
do{if(await this.tokenizer.peekToken(aB.FourCcToken)!=="wvpk")break;let r=await this.tokenizer.readToken(
Ea.WavPack.BlockHeaderToken);if(r.BlockID!=="wvpk")throw new Error("Invalid WavPack Block-ID");_a(`W\
avPack header blockIndex=${r.blockIndex}, len=${Ea.WavPack.BlockHeaderToken.len}`),r.blockIndex===0&&
!this.metadata.format.container&&(this.metadata.setFormat("container","WavPack"),this.metadata.setFormat(
"lossless",!r.flags.isHybrid),this.metadata.setFormat("bitsPerSample",r.flags.bitsPerSample),r.flags.
isDSD||(this.metadata.setFormat("sampleRate",r.flags.samplingRate),this.metadata.setFormat("duration",
r.totalSamples/r.flags.samplingRate)),this.metadata.setFormat("numberOfChannels",r.flags.isMono?1:2),
this.metadata.setFormat("numberOfSamples",r.totalSamples),this.metadata.setFormat("codec",r.flags.isDSD?
"DSD":"PCM"));let n=r.blockSize-(Ea.WavPack.BlockHeaderToken.len-8);await(r.blockIndex===0?this.parseMetadataSubBlock(
r,n):this.tokenizer.ignore(n)),r.blockSamples>0&&(this.audioDataSize+=r.blockSize)}while(!this.tokenizer.
fileInfo.size||this.tokenizer.fileInfo.size-this.tokenizer.position>=Ea.WavPack.BlockHeaderToken.len);
this.metadata.setFormat("bitrate",this.audioDataSize*8/this.metadata.format.duration)}async parseMetadataSubBlock(e,r){
for(;r>Ea.WavPack.MetadataIdToken.len;){let n=await this.tokenizer.readToken(Ea.WavPack.MetadataIdToken),
i=await this.tokenizer.readNumber(n.largeBlock?gf.UINT24_LE:gf.UINT8),a=Buffer.alloc(i*2-(n.isOddSize?
1:0));switch(await this.tokenizer.readBuffer(a),_a(`Metadata Sub-Blocks functionId=0x${n.functionId.
toString(16)}, id.largeBlock=${n.largeBlock},data-size=${a.length}`),n.functionId){case 0:break;case 14:
_a("ID_DSD_BLOCK");let o=1<<a.readUInt8(0),s=e.flags.samplingRate*o*8;if(!e.flags.isDSD)throw new Error(
"Only expect DSD block if DSD-flag is set");this.metadata.setFormat("sampleRate",s),this.metadata.setFormat(
"duration",e.totalSamples/s);break;case 36:_a("ID_ALT_TRAILER: trailer for non-wav files");break;case 38:
this.metadata.setFormat("audioMD5",a);break;case 47:_a(`ID_BLOCK_CHECKSUM: checksum=${a.toString("he\
x")}`);break;default:_a(`Ignore unsupported meta-sub-block-id functionId=0x${n.functionId.toString(16)}`);
break}r-=Ea.WavPack.MetadataIdToken.len+(n.largeBlock?gf.UINT24_LE.len:gf.UINT8.len)+i*2,_a(`remaini\
ngLength=${r}`),n.isOddSize&&this.tokenizer.ignore(1)}if(r!==0)throw new Error("metadata-sub-block s\
hould fit it remaining length")}};yf.WavPackParser=Z0});var YT=I(Lr=>{"use strict";Object.defineProperty(Lr,"__esModule",{value:!0});Lr.FormatChunk=Lr.ChannelType=
Lr.DsdChunk=Lr.ChunkHeader=void 0;var Or=te(),lB=It();Lr.ChunkHeader={len:12,get:(t,e)=>({id:lB.FourCcToken.
get(t,e),size:Or.UINT64_LE.get(t,e+4)})};Lr.DsdChunk={len:16,get:(t,e)=>({fileSize:Or.INT64_LE.get(t,
e),metadataPointer:Or.INT64_LE.get(t,e+8)})};var uB;(function(t){t[t.mono=1]="mono",t[t.stereo=2]="s\
tereo",t[t.channels=3]="channels",t[t.quad=4]="quad",t[t["4 channels"]=5]="4 channels",t[t["5 channe\
ls"]=6]="5 channels",t[t["5.1 channels"]=7]="5.1 channels"})(uB=Lr.ChannelType||(Lr.ChannelType={}));
Lr.FormatChunk={len:40,get:(t,e)=>({formatVersion:Or.INT32_LE.get(t,e),formatID:Or.INT32_LE.get(t,e+
4),channelType:Or.INT32_LE.get(t,e+8),channelNum:Or.INT32_LE.get(t,e+12),samplingFrequency:Or.INT32_LE.
get(t,e+16),bitsPerSample:Or.INT32_LE.get(t,e+20),sampleCount:Or.INT64_LE.get(t,e+24),blockSizePerChannel:Or.
INT32_LE.get(t,e+32)})}});var QT=I(vf=>{"use strict";Object.defineProperty(vf,"__esModule",{value:!0});vf.DsfParser=void 0;var cB=he(),
dB=Bl(),Yo=YT(),fB=Ho(),J0=(0,cB.default)("music-metadata:parser:DSF"),ey=class extends dB.AbstractID3Parser{async postId3v2Parse(){
let e=this.tokenizer.position,r=await this.tokenizer.readToken(Yo.ChunkHeader);if(r.id!=="DSD ")throw new Error(
"Invalid chunk signature");this.metadata.setFormat("container","DSF"),this.metadata.setFormat("lossl\
ess",!0);let n=await this.tokenizer.readToken(Yo.DsdChunk);if(n.metadataPointer===BigInt(0))J0("No I\
D3v2 tag present");else return J0(`expect ID3v2 at offset=${n.metadataPointer}`),await this.parseChunks(
n.fileSize-r.size),await this.tokenizer.ignore(Number(n.metadataPointer)-this.tokenizer.position-e),
new fB.ID3v2Parser().parse(this.metadata,this.tokenizer,this.options)}async parseChunks(e){for(;e>=Yo.
ChunkHeader.len;){let r=await this.tokenizer.readToken(Yo.ChunkHeader);switch(J0(`Parsing chunk name\
=${r.id} size=${r.size}`),r.id){case"fmt ":let n=await this.tokenizer.readToken(Yo.FormatChunk);this.
metadata.setFormat("numberOfChannels",n.channelNum),this.metadata.setFormat("sampleRate",n.samplingFrequency),
this.metadata.setFormat("bitsPerSample",n.bitsPerSample),this.metadata.setFormat("numberOfSamples",n.
sampleCount),this.metadata.setFormat("duration",Number(n.sampleCount)/n.samplingFrequency);let i=n.bitsPerSample*
n.samplingFrequency*n.channelNum;this.metadata.setFormat("bitrate",i);return;default:this.tokenizer.
ignore(Number(r.size)-Yo.ChunkHeader.len);break}e-=r.size}}};vf.DsfParser=ey});var ZT=I(wf=>{"use strict";Object.defineProperty(wf,"__esModule",{value:!0});wf.ChunkHeader64=void 0;
var pB=te(),hB=It();wf.ChunkHeader64={len:12,get:(t,e)=>({chunkID:hB.FourCcToken.get(t,e),chunkSize:pB.
INT64_BE.get(t,e+4)})}});var JT=I(xf=>{"use strict";Object.defineProperty(xf,"__esModule",{value:!0});xf.DsdiffParser=void 0;
var vr=te(),mB=he(),gB=Jr(),Si=It(),yB=zt(),vB=Ho(),Qo=ZT(),Pt=(0,mB.default)("music-metadata:parser\
:aiff"),ty=class extends yB.BasicParser{async parse(){let e=await this.tokenizer.readToken(Qo.ChunkHeader64);
if(e.chunkID!=="FRM8")throw new Error("Unexpected chunk-ID");let r=(await this.tokenizer.readToken(Si.
FourCcToken)).trim();switch(r){case"DSD":return this.metadata.setFormat("container",`DSDIFF/${r}`),this.
metadata.setFormat("lossless",!0),this.readFmt8Chunks(e.chunkSize-BigInt(Si.FourCcToken.len));default:
throw Error(`Unsupported DSDIFF type: ${r}`)}}async readFmt8Chunks(e){for(;e>=Qo.ChunkHeader64.len;){
let r=await this.tokenizer.readToken(Qo.ChunkHeader64);Pt(`Chunk id=${r.chunkID}`),await this.readData(
r),e-=BigInt(Qo.ChunkHeader64.len)+r.chunkSize}}async readData(e){Pt(`Reading data of chunk[ID=${e.chunkID}\
, size=${e.chunkSize}]`);let r=this.tokenizer.position;switch(e.chunkID.trim()){case"FVER":let i=await this.
tokenizer.readToken(vr.UINT32_LE);Pt(`DSDIFF version=${i}`);break;case"PROP":if(await this.tokenizer.
readToken(Si.FourCcToken)!=="SND ")throw new Error("Unexpected PROP-chunk ID");await this.handleSoundPropertyChunks(
e.chunkSize-BigInt(Si.FourCcToken.len));break;case"ID3":let o=await this.tokenizer.readToken(new vr.
Uint8ArrayType(Number(e.chunkSize))),s=gB.fromBuffer(o);await new vB.ID3v2Parser().parse(this.metadata,
s,this.options);break;default:Pt(`Ignore chunk[ID=${e.chunkID}, size=${e.chunkSize}]`);break;case"DS\
D":this.metadata.setFormat("numberOfSamples",Number(e.chunkSize*BigInt(8)/BigInt(this.metadata.format.
numberOfChannels))),this.metadata.setFormat("duration",this.metadata.format.numberOfSamples/this.metadata.
format.sampleRate);break}let n=e.chunkSize-BigInt(this.tokenizer.position-r);n>0&&(Pt(`After Parsing\
 chunk, remaining ${n} bytes`),await this.tokenizer.ignore(Number(n)))}async handleSoundPropertyChunks(e){
for(Pt(`Parsing sound-property-chunks, remainingSize=${e}`);e>0;){let r=await this.tokenizer.readToken(
Qo.ChunkHeader64);Pt(`Sound-property-chunk[ID=${r.chunkID}, size=${r.chunkSize}]`);let n=this.tokenizer.
position;switch(r.chunkID.trim()){case"FS":let a=await this.tokenizer.readToken(vr.UINT32_BE);this.metadata.
setFormat("sampleRate",a);break;case"CHNL":let o=await this.tokenizer.readToken(vr.UINT16_BE);this.metadata.
setFormat("numberOfChannels",o),await this.handleChannelChunks(r.chunkSize-BigInt(vr.UINT16_BE.len));
break;case"CMPR":let s=(await this.tokenizer.readToken(Si.FourCcToken)).trim(),l=await this.tokenizer.
readToken(vr.UINT8),u=await this.tokenizer.readToken(new vr.StringType(l,"ascii"));s==="DSD"&&(this.
metadata.setFormat("lossless",!0),this.metadata.setFormat("bitsPerSample",1)),this.metadata.setFormat(
"codec",`${s} (${u})`);break;case"ABSS":let c=await this.tokenizer.readToken(vr.UINT16_BE),d=await this.
tokenizer.readToken(vr.UINT8),f=await this.tokenizer.readToken(vr.UINT8),m=await this.tokenizer.readToken(
vr.UINT32_BE);Pt(`ABSS ${c}:${d}:${f}.${m}`);break;case"LSCO":let w=await this.tokenizer.readToken(vr.
UINT16_BE);Pt(`LSCO lsConfig=${w}`);break;case"COMT":default:Pt(`Unknown sound-property-chunk[ID=${r.
chunkID}, size=${r.chunkSize}]`),await this.tokenizer.ignore(Number(r.chunkSize))}let i=r.chunkSize-
BigInt(this.tokenizer.position-n);i>0&&(Pt(`After Parsing sound-property-chunk ${r.chunkSize}, remai\
ning ${i} bytes`),await this.tokenizer.ignore(Number(i))),e-=BigInt(Qo.ChunkHeader64.len)+r.chunkSize,
Pt(`Parsing sound-property-chunks, remainingSize=${e}`)}if(this.metadata.format.lossless&&this.metadata.
format.sampleRate&&this.metadata.format.numberOfChannels&&this.metadata.format.bitsPerSample){let r=this.
metadata.format.sampleRate*this.metadata.format.numberOfChannels*this.metadata.format.bitsPerSample;
this.metadata.setFormat("bitrate",r)}}async handleChannelChunks(e){Pt(`Parsing channel-chunks, remai\
ningSize=${e}`);let r=[];for(;e>=Si.FourCcToken.len;){let n=await this.tokenizer.readToken(Si.FourCcToken);
Pt(`Channel[ID=${n}]`),r.push(n),e-=BigInt(Si.FourCcToken.len)}return Pt(`Channels: ${r.join(", ")}`),
r}};xf.DsdiffParser=ty});var ek=I(Ef=>{"use strict";Object.defineProperty(Ef,"__esModule",{value:!0});Ef.elements=void 0;var P=od();
Ef.elements={440786851:{name:"ebml",container:{17030:{name:"ebmlVersion",value:P.DataType.uint},17143:{
name:"ebmlReadVersion",value:P.DataType.uint},17138:{name:"ebmlMaxIDWidth",value:P.DataType.uint},17139:{
name:"ebmlMaxSizeWidth",value:P.DataType.uint},17026:{name:"docType",value:P.DataType.string},17031:{
name:"docTypeVersion",value:P.DataType.uint},17029:{name:"docTypeReadVersion",value:P.DataType.uint}}},
408125543:{name:"segment",container:{290298740:{name:"seekHead",container:{19899:{name:"seek",container:{
21419:{name:"seekId",value:P.DataType.binary},21420:{name:"seekPosition",value:P.DataType.uint}}}}},
357149030:{name:"info",container:{29604:{name:"uid",value:P.DataType.uid},29572:{name:"filename",value:P.
DataType.string},3979555:{name:"prevUID",value:P.DataType.uid},3965867:{name:"prevFilename",value:P.
DataType.string},4110627:{name:"nextUID",value:P.DataType.uid},4096955:{name:"nextFilename",value:P.
DataType.string},2807729:{name:"timecodeScale",value:P.DataType.uint},17545:{name:"duration",value:P.
DataType.float},17505:{name:"dateUTC",value:P.DataType.uint},31657:{name:"title",value:P.DataType.string},
19840:{name:"muxingApp",value:P.DataType.string},22337:{name:"writingApp",value:P.DataType.string}}},
524531317:{name:"cluster",multiple:!0,container:{231:{name:"timecode",value:P.DataType.uid},163:{name:"\
unknown",value:P.DataType.binary},167:{name:"position",value:P.DataType.uid},171:{name:"prevSize",value:P.
DataType.uid}}},374648427:{name:"tracks",container:{174:{name:"entries",multiple:!0,container:{215:{
name:"trackNumber",value:P.DataType.uint},29637:{name:"uid",value:P.DataType.uid},131:{name:"trackTy\
pe",value:P.DataType.uint},185:{name:"flagEnabled",value:P.DataType.bool},136:{name:"flagDefault",value:P.
DataType.bool},21930:{name:"flagForced",value:P.DataType.bool},156:{name:"flagLacing",value:P.DataType.
bool},28135:{name:"minCache",value:P.DataType.uint},28136:{name:"maxCache",value:P.DataType.uint},2352003:{
name:"defaultDuration",value:P.DataType.uint},2306383:{name:"timecodeScale",value:P.DataType.float},
21358:{name:"name",value:P.DataType.string},2274716:{name:"language",value:P.DataType.string},134:{name:"\
codecID",value:P.DataType.string},25506:{name:"codecPrivate",value:P.DataType.binary},2459272:{name:"\
codecName",value:P.DataType.string},3839639:{name:"codecSettings",value:P.DataType.string},3883072:{
name:"codecInfoUrl",value:P.DataType.string},2536e3:{name:"codecDownloadUrl",value:P.DataType.string},
170:{name:"codecDecodeAll",value:P.DataType.bool},28587:{name:"trackOverlay",value:P.DataType.uint},
224:{name:"video",container:{154:{name:"flagInterlaced",value:P.DataType.bool},21432:{name:"stereoMo\
de",value:P.DataType.uint},176:{name:"pixelWidth",value:P.DataType.uint},186:{name:"pixelHeight",value:P.
DataType.uint},21680:{name:"displayWidth",value:P.DataType.uint},21690:{name:"displayHeight",value:P.
DataType.uint},21683:{name:"aspectRatioType",value:P.DataType.uint},3061028:{name:"colourSpace",value:P.
DataType.uint},3126563:{name:"gammaValue",value:P.DataType.float}}},225:{name:"audio",container:{181:{
name:"samplingFrequency",value:P.DataType.float},30901:{name:"outputSamplingFrequency",value:P.DataType.
float},159:{name:"channels",value:P.DataType.uint},148:{name:"channels",value:P.DataType.uint},32123:{
name:"channelPositions",value:P.DataType.binary},25188:{name:"bitDepth",value:P.DataType.uint}}},28032:{
name:"contentEncodings",container:{25152:{name:"contentEncoding",container:{20529:{name:"order",value:P.
DataType.uint},20530:{name:"scope",value:P.DataType.bool},20531:{name:"type",value:P.DataType.uint},
20532:{name:"contentEncoding",container:{16980:{name:"contentCompAlgo",value:P.DataType.uint},16981:{
name:"contentCompSettings",value:P.DataType.binary}}},20533:{name:"contentEncoding",container:{18401:{
name:"contentEncAlgo",value:P.DataType.uint},18402:{name:"contentEncKeyID",value:P.DataType.binary},
18403:{name:"contentSignature ",value:P.DataType.binary},18404:{name:"ContentSigKeyID  ",value:P.DataType.
binary},18405:{name:"contentSigAlgo ",value:P.DataType.uint},18406:{name:"contentSigHashAlgo ",value:P.
DataType.uint}}},25188:{name:"bitDepth",value:P.DataType.uint}}}}}}}}},475249515:{name:"cues",container:{
187:{name:"cuePoint",container:{179:{name:"cueTime",value:P.DataType.uid},183:{name:"positions",container:{
247:{name:"track",value:P.DataType.uint},241:{name:"clusterPosition",value:P.DataType.uint},21368:{name:"\
blockNumber",value:P.DataType.uint},234:{name:"codecState",value:P.DataType.uint},219:{name:"referen\
ce",container:{150:{name:"time",value:P.DataType.uint},151:{name:"cluster",value:P.DataType.uint},21343:{
name:"number",value:P.DataType.uint},235:{name:"codecState",value:P.DataType.uint}}},240:{name:"rela\
tivePosition",value:P.DataType.uint}}}}}}},423732329:{name:"attachments",container:{24999:{name:"att\
achedFiles",multiple:!0,container:{18046:{name:"description",value:P.DataType.string},18030:{name:"n\
ame",value:P.DataType.string},18016:{name:"mimeType",value:P.DataType.string},18012:{name:"data",value:P.
DataType.binary},18094:{name:"uid",value:P.DataType.uid}}}}},272869232:{name:"chapters",container:{17849:{
name:"editionEntry",container:{182:{name:"chapterAtom",container:{29636:{name:"uid",value:P.DataType.
uid},145:{name:"timeStart",value:P.DataType.uint},146:{name:"timeEnd",value:P.DataType.uid},152:{name:"\
hidden",value:P.DataType.bool},17816:{name:"enabled",value:P.DataType.uid},143:{name:"track",container:{
137:{name:"trackNumber",value:P.DataType.uid},128:{name:"display",container:{133:{name:"string",value:P.
DataType.string},17276:{name:"language ",value:P.DataType.string},17278:{name:"country ",value:P.DataType.
string}}}}}}}}}}},307544935:{name:"tags",container:{29555:{name:"tag",multiple:!0,container:{25536:{
name:"target",container:{25541:{name:"tagTrackUID",value:P.DataType.uid},25540:{name:"tagChapterUID",
value:P.DataType.uint},25542:{name:"tagAttachmentUID",value:P.DataType.uid},25546:{name:"targetType",
value:P.DataType.string},26826:{name:"targetTypeValue",value:P.DataType.uint},25545:{name:"tagEditio\
nUID",value:P.DataType.uid}}},26568:{name:"simpleTags",multiple:!0,container:{17827:{name:"name",value:P.
DataType.string},17543:{name:"string",value:P.DataType.string},17541:{name:"binary",value:P.DataType.
binary},17530:{name:"language",value:P.DataType.string},17531:{name:"languageIETF",value:P.DataType.
string},17540:{name:"default",value:P.DataType.bool}}}}}}}}}}});var rk=I(_f=>{"use strict";Object.defineProperty(_f,"__esModule",{value:!0});_f.MatroskaParser=void 0;
var $l=te(),wB=he(),xB=zt(),Ti=od(),EB=ek(),tk=(0,wB.default)("music-metadata:parser:matroska"),ry=class extends xB.
BasicParser{constructor(){super(),this.padding=0,this.parserMap=new Map,this.ebmlMaxIDLength=4,this.
ebmlMaxSizeLength=8,this.parserMap.set(Ti.DataType.uint,e=>this.readUint(e)),this.parserMap.set(Ti.DataType.
string,e=>this.readString(e)),this.parserMap.set(Ti.DataType.binary,e=>this.readBuffer(e)),this.parserMap.
set(Ti.DataType.uid,async e=>await this.readUint(e)===1),this.parserMap.set(Ti.DataType.bool,e=>this.
readFlag(e)),this.parserMap.set(Ti.DataType.float,e=>this.readFloat(e))}init(e,r,n){return super.init(
e,r,n),this}async parse(){let e=await this.parseContainer(EB.elements,this.tokenizer.fileInfo.size,[]);
if(this.metadata.setFormat("container",`EBML/${e.ebml.docType}`),e.segment){let r=e.segment.info;if(r){
let i=r.timecodeScale?r.timecodeScale:1e6;if(typeof r.duration=="number"){let a=r.duration*i/1e9;this.
addTag("segment:title",r.title),this.metadata.setFormat("duration",a)}}let n=e.segment.tracks;if(n&&
n.entries){n.entries.forEach(a=>{let o={codecName:a.codecID.replace("A_","").replace("V_",""),codecSettings:a.
codecSettings,flagDefault:a.flagDefault,flagLacing:a.flagLacing,flagEnabled:a.flagEnabled,language:a.
language,name:a.name,type:a.trackType,audio:a.audio,video:a.video};this.metadata.addStreamInfo(o)});
let i=n.entries.filter(a=>a.trackType===Ti.TrackType.audio.valueOf()).reduce((a,o)=>!a||!a.flagDefault&&
o.flagDefault||o.trackNumber&&o.trackNumber<a.trackNumber?o:a,null);i&&(this.metadata.setFormat("cod\
ec",i.codecID.replace("A_","")),this.metadata.setFormat("sampleRate",i.audio.samplingFrequency),this.
metadata.setFormat("numberOfChannels",i.audio.channels)),e.segment.tags&&e.segment.tags.tag.forEach(
a=>{let o=a.target,s=o?.targetTypeValue?Ti.TargetType[o.targetTypeValue]:o?.targetType?o.targetType:
"track";a.simpleTags.forEach(l=>{let u=l.string?l.string:l.binary;this.addTag(`${s}:${l.name}`,u)})}),
e.segment.attachments&&e.segment.attachments.attachedFiles.filter(a=>a.mimeType.startsWith("image/")).
map(a=>({data:a.data,format:a.mimeType,description:a.description,name:a.name})).forEach(a=>{this.addTag(
"picture",a)})}}}async parseContainer(e,r,n){let i={};for(;this.tokenizer.position<r;){let a;try{a=await this.
readElement()}catch(s){if(s.message==="End-Of-Stream")break;throw s}let o=e[a.id];if(o)if(tk(`Elemen\
t: name=${o.name}, container=${!!o.container}`),o.container){let s=await this.parseContainer(o.container,
a.len>=0?this.tokenizer.position+a.len:-1,n.concat([o.name]));o.multiple?(i[o.name]||(i[o.name]=[]),
i[o.name].push(s)):i[o.name]=s}else i[o.name]=await this.parserMap.get(o.value)(a);else switch(a.id){case 236:
this.padding+=a.len,await this.tokenizer.ignore(a.len);break;default:tk(`parseEbml: path=${n.join("/")}\
, unknown element: id=${a.id.toString(16)}`),this.padding+=a.len,await this.tokenizer.ignore(a.len)}}
return i}async readVintData(e){let r=await this.tokenizer.peekNumber($l.UINT8),n=128,i=1;for(;!(r&n);){
if(i>e)throw new Error("VINT value exceeding maximum size");++i,n>>=1}let a=Buffer.alloc(i);return await this.
tokenizer.readBuffer(a),a}async readElement(){let e=await this.readVintData(this.ebmlMaxIDLength),r=await this.
readVintData(this.ebmlMaxSizeLength);r[0]^=128>>r.length-1;let n=Math.min(6,r.length);return{id:e.readUIntBE(
0,e.length),len:r.readUIntBE(r.length-n,n)}}isMaxValue(e){if(e.length===this.ebmlMaxSizeLength){for(let r=1;r<
this.ebmlMaxSizeLength;++r)if(e[r]!==255)return!1;return!0}return!1}async readFloat(e){switch(e.len){case 0:
return 0;case 4:return this.tokenizer.readNumber($l.Float32_BE);case 8:return this.tokenizer.readNumber(
$l.Float64_BE);case 10:return this.tokenizer.readNumber($l.Float64_BE);default:throw new Error(`Inva\
lid IEEE-754 float length: ${e.len}`)}}async readFlag(e){return await this.readUint(e)===1}async readUint(e){
let r=await this.readBuffer(e),n=Math.min(6,e.len);return r.readUIntBE(e.len-n,n)}async readString(e){
return(await this.tokenizer.readToken(new $l.StringType(e.len,"utf-8"))).replace(/\00.*$/g,"")}async readBuffer(e){
let r=Buffer.alloc(e.len);return await this.tokenizer.readBuffer(r),r}addTag(e,r){this.metadata.addTag(
"matroska",e,r)}};_f.MatroskaParser=ry});var ik=I(Zo=>{"use strict";Object.defineProperty(Zo,"__esModule",{value:!0});Zo.ParserFactory=Zo.parseHttpContentType=
void 0;var _B=Pg(),SB=iS(),TB=sS(),kB=he(),bB=bS(),CB=HS(),IB=ga(),RB=GS(),PB=QS(),DB=aT(),AB=yT(),NB=RT(),
FB=LT(),BB=KT(),MB=XT(),OB=QT(),LB=JT(),UB=rk(),Sf=(0,kB.default)("music-metadata:parser:factory");function nk(t){
let e=SB.parse(t),r=TB.parse(e.type);return{type:r.type,subtype:r.subtype,suffix:r.suffix,parameters:e.
parameters}}Zo.parseHttpContentType=nk;async function zB(t,e,r={}){let n=await Tf.loadParser(e),i=new bB.
MetadataCollector(r);return await n.init(i,t,r).parse(),i.toCommonMetadata()}var Tf=class t{static async parseOnContentType(e,r){
let{mimeType:n,path:i,url:a}=await e.fileInfo,o=t.getParserIdForMimeType(n)||t.getParserIdForExtension(
i)||t.getParserIdForExtension(a);return o||Sf("No parser found for MIME-type / extension: "+n),this.
parse(e,o,r)}static async parse(e,r,n){if(!r){Sf("Guess parser on content...");let i=Buffer.alloc(4100);
if(await e.peekBuffer(i,{mayBeLess:!0}),e.fileInfo.path&&(r=this.getParserIdForExtension(e.fileInfo.
path)),!r){let a=await _B.fromBuffer(i);if(!a)throw new Error("Failed to determine audio format");if(Sf(
`Guessed file type is mime=${a.mime}, extension=${a.ext}`),r=t.getParserIdForMimeType(a.mime),!r)throw new Error(
"Guessed MIME-type not supported: "+a.mime)}}return zB(e,r,n)}static getParserIdForExtension(e){if(!e)
return;switch(this.getExtension(e).toLocaleLowerCase()||e){case".mp2":case".mp3":case".m2a":case".aa\
c":return"mpeg";case".ape":return"apev2";case".mp4":case".m4a":case".m4b":case".m4pa":case".m4v":case"\
.m4r":case".3gp":return"mp4";case".wma":case".wmv":case".asf":return"asf";case".flac":return"flac";case"\
.ogg":case".ogv":case".oga":case".ogm":case".ogx":case".opus":case".spx":return"ogg";case".aif":case"\
.aiff":case".aifc":return"aiff";case".wav":case".bwf":return"riff";case".wv":case".wvp":return"wavpa\
ck";case".mpc":return"musepack";case".dsf":return"dsf";case".dff":return"dsdiff";case".mka":case".mk\
v":case".mk3d":case".mks":case".webm":return"matroska"}}static async loadParser(e){switch(e){case"ai\
ff":return new CB.AIFFParser;case"adts":case"mpeg":return new AB.MpegParser;case"apev2":return new IB.
APEv2Parser;case"asf":return new RB.AsfParser;case"dsf":return new OB.DsfParser;case"dsdiff":return new LB.
DsdiffParser;case"flac":return new PB.FlacParser;case"mp4":return new DB.MP4Parser;case"musepack":return new NB.
default;case"ogg":return new FB.OggParser;case"riff":return new BB.WaveParser;case"wavpack":return new MB.
WavPackParser;case"matroska":return new UB.MatroskaParser;default:throw new Error(`Unknown parser ty\
pe: ${e}`)}}static getExtension(e){let r=e.lastIndexOf(".");return r===-1?"":e.slice(r)}static getParserIdForMimeType(e){
let r;try{r=nk(e)}catch{Sf(`Invalid HTTP Content-Type header value: ${e}`);return}let n=r.subtype.indexOf(
"x-")===0?r.subtype.substring(2):r.subtype;switch(r.type){case"audio":switch(n){case"mp3":case"mpeg":
return"mpeg";case"aac":case"aacp":return"adts";case"flac":return"flac";case"ape":case"monkeys-audio":
return"apev2";case"mp4":case"m4a":return"mp4";case"ogg":case"opus":case"speex":return"ogg";case"ms-w\
ma":case"ms-wmv":case"ms-asf":return"asf";case"aiff":case"aif":case"aifc":return"aiff";case"vnd.wave":case"\
wav":case"wave":return"riff";case"wavpack":return"wavpack";case"musepack":return"musepack";case"matr\
oska":case"webm":return"matroska";case"dsf":return"dsf"}break;case"video":switch(n){case"ms-asf":case"\
ms-wmv":return"asf";case"m4v":case"mp4":return"mp4";case"ogg":return"ogg";case"matroska":case"webm":
return"matroska"}break;case"application":switch(n){case"vnd.ms-asf":return"asf";case"ogg":return"ogg"}
break}}};Zo.ParserFactory=Tf});var ak=I(kf=>{"use strict";Object.defineProperty(kf,"__esModule",{value:!0});kf.RandomUint8ArrayReader=
void 0;var ny=class{constructor(e){this.uint8Array=e,this.fileSize=e.length}async randomRead(e,r,n,i){
return e.set(this.uint8Array.subarray(i,i+n),r),n}};kf.RandomUint8ArrayReader=ny});var ok=I(Sa=>{"use strict";Object.defineProperty(Sa,"__esModule",{value:!0});Sa.getLyricsHeaderLength=
Sa.endTag2=void 0;Sa.endTag2="LYRICS200";async function jB(t){if(t.fileSize>=143){let e=Buffer.alloc(
15);await t.randomRead(e,0,e.length,t.fileSize-143);let r=e.toString("binary");if(r.substr(6)===Sa.endTag2)
return parseInt(r.substr(0,6),10)+15}return 0}Sa.getLyricsHeaderLength=jB});var ay=I(xt=>{"use strict";Object.defineProperty(xt,"__esModule",{value:!0});xt.scanAppendingHeaders=
xt.selectCover=xt.ratingToStars=xt.orderTags=xt.parseFromTokenizer=xt.parseBuffer=xt.parseStream=void 0;
var sk=Jr(),HB=ik(),qB=ak(),$B=ga(),VB=Dl(),WB=ok();function KB(t,e,r={}){return iy(sk.fromStream(t,
typeof e=="string"?{mimeType:e}:e),r)}xt.parseStream=KB;async function GB(t,e,r={}){let n=new qB.RandomUint8ArrayReader(
t);await lk(n,r);let i=sk.fromBuffer(t,typeof e=="string"?{mimeType:e}:e);return iy(i,r)}xt.parseBuffer=
GB;function iy(t,e){return HB.ParserFactory.parseOnContentType(t,e)}xt.parseFromTokenizer=iy;function XB(t){
let e={};for(let r of t)(e[r.id]=e[r.id]||[]).push(r.value);return e}xt.orderTags=XB;function YB(t){
return t===void 0?0:1+Math.round(t*4)}xt.ratingToStars=YB;function QB(t){return t?t.reduce((e,r)=>r.
name&&r.name.toLowerCase()in["front","cover","cover (front)"]?r:e):null}xt.selectCover=QB;async function lk(t,e={}){
let r=t.fileSize;if(await(0,VB.hasID3v1Header)(t)){r-=128;let n=await(0,WB.getLyricsHeaderLength)(t);
r-=n}e.apeHeader=await $B.APEv2Parser.findApeFooterOffset(t,r)}xt.scanAppendingHeaders=lk});var sy=I((T6,oy)=>{"use strict";var Jo=typeof Reflect=="object"?Reflect:null,uk=Jo&&typeof Jo.apply==
"function"?Jo.apply:function(e,r,n){return Function.prototype.apply.call(e,r,n)},bf;Jo&&typeof Jo.ownKeys==
"function"?bf=Jo.ownKeys:Object.getOwnPropertySymbols?bf=function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))}:bf=function(e){return Object.getOwnPropertyNames(e)};function ZB(t){
console&&console.warn&&console.warn(t)}var dk=Number.isNaN||function(e){return e!==e};function me(){
me.init.call(this)}oy.exports=me;oy.exports.once=r3;me.EventEmitter=me;me.prototype._events=void 0;me.
prototype._eventsCount=0;me.prototype._maxListeners=void 0;var ck=10;function Cf(t){if(typeof t!="fu\
nction")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t)}
Object.defineProperty(me,"defaultMaxListeners",{enumerable:!0,get:function(){return ck},set:function(t){
if(typeof t!="number"||t<0||dk(t))throw new RangeError('The value of "defaultMaxListeners" is out of\
 range. It must be a non-negative number. Received '+t+".");ck=t}});me.init=function(){(this._events===
void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this.
_eventsCount=0),this._maxListeners=this._maxListeners||void 0};me.prototype.setMaxListeners=function(e){
if(typeof e!="number"||e<0||dk(e))throw new RangeError('The value of "n" is out of range. It must be\
 a non-negative number. Received '+e+".");return this._maxListeners=e,this};function fk(t){return t.
_maxListeners===void 0?me.defaultMaxListeners:t._maxListeners}me.prototype.getMaxListeners=function(){
return fk(this)};me.prototype.emit=function(e){for(var r=[],n=1;n<arguments.length;n++)r.push(arguments[n]);
var i=e==="error",a=this._events;if(a!==void 0)i=i&&a.error===void 0;else if(!i)return!1;if(i){var o;
if(r.length>0&&(o=r[0]),o instanceof Error)throw o;var s=new Error("Unhandled error."+(o?" ("+o.message+
")":""));throw s.context=o,s}var l=a[e];if(l===void 0)return!1;if(typeof l=="function")uk(l,this,r);else
for(var u=l.length,c=yk(l,u),n=0;n<u;++n)uk(c[n],this,r);return!0};function pk(t,e,r,n){var i,a,o;if(Cf(
r),a=t._events,a===void 0?(a=t._events=Object.create(null),t._eventsCount=0):(a.newListener!==void 0&&
(t.emit("newListener",e,r.listener?r.listener:r),a=t._events),o=a[e]),o===void 0)o=a[e]=r,++t._eventsCount;else if(typeof o==
"function"?o=a[e]=n?[r,o]:[o,r]:n?o.unshift(r):o.push(r),i=fk(t),i>0&&o.length>i&&!o.warned){o.warned=
!0;var s=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners\
 added. Use emitter.setMaxListeners() to increase limit");s.name="MaxListenersExceededWarning",s.emitter=
t,s.type=e,s.count=o.length,ZB(s)}return t}me.prototype.addListener=function(e,r){return pk(this,e,r,
!1)};me.prototype.on=me.prototype.addListener;me.prototype.prependListener=function(e,r){return pk(this,
e,r,!0)};function JB(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.
fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}
function hk(t,e,r){var n={fired:!1,wrapFn:void 0,target:t,type:e,listener:r},i=JB.bind(n);return i.listener=
r,n.wrapFn=i,i}me.prototype.once=function(e,r){return Cf(r),this.on(e,hk(this,e,r)),this};me.prototype.
prependOnceListener=function(e,r){return Cf(r),this.prependListener(e,hk(this,e,r)),this};me.prototype.
removeListener=function(e,r){var n,i,a,o,s;if(Cf(r),i=this._events,i===void 0)return this;if(n=i[e],
n===void 0)return this;if(n===r||n.listener===r)--this._eventsCount===0?this._events=Object.create(null):
(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||r));else if(typeof n!="funct\
ion"){for(a=-1,o=n.length-1;o>=0;o--)if(n[o]===r||n[o].listener===r){s=n[o].listener,a=o;break}if(a<
0)return this;a===0?n.shift():e3(n,a),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,s||r)}return this};me.prototype.off=me.prototype.removeListener;me.prototype.removeAllListeners=
function(e){var r,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.
length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===
0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var a=Object.keys(n),o;
for(i=0;i<a.length;++i)o=a[i],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners(
"removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(r=n[e],typeof r=="fun\
ction")this.removeListener(e,r);else if(r!==void 0)for(i=r.length-1;i>=0;i--)this.removeListener(e,r[i]);
return this};function mk(t,e,r){var n=t._events;if(n===void 0)return[];var i=n[e];return i===void 0?
[]:typeof i=="function"?r?[i.listener||i]:[i]:r?t3(i):yk(i,i.length)}me.prototype.listeners=function(e){
return mk(this,e,!0)};me.prototype.rawListeners=function(e){return mk(this,e,!1)};me.listenerCount=function(t,e){
return typeof t.listenerCount=="function"?t.listenerCount(e):gk.call(t,e)};me.prototype.listenerCount=
gk;function gk(t){var e=this._events;if(e!==void 0){var r=e[t];if(typeof r=="function")return 1;if(r!==
void 0)return r.length}return 0}me.prototype.eventNames=function(){return this._eventsCount>0?bf(this.
_events):[]};function yk(t,e){for(var r=new Array(e),n=0;n<e;++n)r[n]=t[n];return r}function e3(t,e){
for(;e+1<t.length;e++)t[e]=t[e+1];t.pop()}function t3(t){for(var e=new Array(t.length),r=0;r<e.length;++r)
e[r]=t[r].listener||t[r];return e}function r3(t,e){return new Promise(function(r,n){function i(o){t.
removeListener(e,a),n(o)}function a(){typeof t.removeListener=="function"&&t.removeListener("error",
i),r([].slice.call(arguments))}vk(t,e,a,{once:!0}),e!=="error"&&n3(t,i,{once:!0})})}function n3(t,e,r){
typeof t.on=="function"&&vk(t,"error",e,r)}function vk(t,e,r,n){if(typeof t.on=="function")n.once?t.
once(e,r):t.on(e,r);else if(typeof t.addEventListener=="function")t.addEventListener(e,function i(a){
n.once&&t.removeEventListener(e,i),r(a)});else throw new TypeError('The "emitter" argument must be o\
f type EventEmitter. Received type '+typeof t)}});var ly=I((k6,wk)=>{wk.exports=sy().EventEmitter});var uy=I(()=>{});var kk=I((I6,Tk)=>{"use strict";function xk(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){
var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(
t,i).enumerable})),r.push.apply(r,n)}return r}function Ek(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=
null?arguments[e]:{};e%2?xk(Object(r),!0).forEach(function(n){i3(t,n,r[n])}):Object.getOwnPropertyDescriptors?
Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):xk(Object(r)).forEach(function(n){Object.
defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function i3(t,e,r){return e=Sk(e),
e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a3(t,e){
if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _k(t,e){for(var r=0;r<
e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),
Object.defineProperty(t,Sk(n.key),n)}}function o3(t,e,r){return e&&_k(t.prototype,e),r&&_k(t,r),Object.
defineProperty(t,"prototype",{writable:!1}),t}function Sk(t){var e=s3(t,"string");return typeof e=="\
symbol"?e:String(e)}function s3(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];
if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@to\
Primitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var l3=Ro(),If=l3.Buffer,
u3=uy(),cy=u3.inspect,c3=cy&&cy.custom||"inspect";function d3(t,e,r){If.prototype.copy.call(t,e,r)}Tk.
exports=function(){function t(){a3(this,t),this.head=null,this.tail=null,this.length=0}return o3(t,[
{key:"push",value:function(r){var n={data:r,next:null};this.length>0?this.tail.next=n:this.head=n,this.
tail=n,++this.length}},{key:"unshift",value:function(r){var n={data:r,next:this.head};this.length===
0&&(this.tail=n),this.head=n,++this.length}},{key:"shift",value:function(){if(this.length!==0){var r=this.
head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,r}}},
{key:"clear",value:function(){this.head=this.tail=null,this.length=0}},{key:"join",value:function(r){
if(this.length===0)return"";for(var n=this.head,i=""+n.data;n=n.next;)i+=r+n.data;return i}},{key:"c\
oncat",value:function(r){if(this.length===0)return If.alloc(0);for(var n=If.allocUnsafe(r>>>0),i=this.
head,a=0;i;)d3(i.data,n,a),a+=i.data.length,i=i.next;return n}},{key:"consume",value:function(r,n){var i;
return r<this.head.data.length?(i=this.head.data.slice(0,r),this.head.data=this.head.data.slice(r)):
r===this.head.data.length?i=this.shift():i=n?this._getString(r):this._getBuffer(r),i}},{key:"first",
value:function(){return this.head.data}},{key:"_getString",value:function(r){var n=this.head,i=1,a=n.
data;for(r-=a.length;n=n.next;){var o=n.data,s=r>o.length?o.length:r;if(s===o.length?a+=o:a+=o.slice(
0,r),r-=s,r===0){s===o.length?(++i,n.next?this.head=n.next:this.head=this.tail=null):(this.head=n,n.
data=o.slice(s));break}++i}return this.length-=i,a}},{key:"_getBuffer",value:function(r){var n=If.allocUnsafe(
r),i=this.head,a=1;for(i.data.copy(n),r-=i.data.length;i=i.next;){var o=i.data,s=r>o.length?o.length:
r;if(o.copy(n,n.length-r,0,s),r-=s,r===0){s===o.length?(++a,i.next?this.head=i.next:this.head=this.tail=
null):(this.head=i,i.data=o.slice(s));break}++a}return this.length-=a,n}},{key:c3,value:function(r,n){
return cy(this,Ek(Ek({},n),{},{depth:0,customInspect:!1}))}}]),t}()});var fy=I((R6,Ck)=>{"use strict";function f3(t,e){var r=this,n=this._readableState&&this._readableState.
destroyed,i=this._writableState&&this._writableState.destroyed;return n||i?(e?e(t):t&&(this._writableState?
this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,process.nextTick(dy,this,t)):
process.nextTick(dy,this,t)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&
(this._writableState.destroyed=!0),this._destroy(t||null,function(a){!e&&a?r._writableState?r._writableState.
errorEmitted?process.nextTick(Rf,r):(r._writableState.errorEmitted=!0,process.nextTick(bk,r,a)):process.
nextTick(bk,r,a):e?(process.nextTick(Rf,r),e(a)):process.nextTick(Rf,r)}),this)}function bk(t,e){dy(
t,e),Rf(t)}function Rf(t){t._writableState&&!t._writableState.emitClose||t._readableState&&!t._readableState.
emitClose||t.emit("close")}function p3(){this._readableState&&(this._readableState.destroyed=!1,this.
_readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&
(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.
finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.
errorEmitted=!1)}function dy(t,e){t.emit("error",e)}function h3(t,e){var r=t._readableState,n=t._writableState;
r&&r.autoDestroy||n&&n.autoDestroy?t.destroy(e):t.emit("error",e)}Ck.exports={destroy:f3,undestroy:p3,
errorOrDestroy:h3}});var Ta=I((P6,Pk)=>{"use strict";function m3(t,e){t.prototype=Object.create(e.prototype),t.prototype.
constructor=t,t.__proto__=e}var Rk={};function wr(t,e,r){r||(r=Error);function n(a,o,s){return typeof e==
"string"?e:e(a,o,s)}var i=function(a){m3(o,a);function o(s,l,u){return a.call(this,n(s,l,u))||this}return o}(
r);i.prototype.name=r.name,i.prototype.code=t,Rk[t]=i}function Ik(t,e){if(Array.isArray(t)){var r=t.
length;return t=t.map(function(n){return String(n)}),r>2?"one of ".concat(e," ").concat(t.slice(0,r-
1).join(", "),", or ")+t[r-1]:r===2?"one of ".concat(e," ").concat(t[0]," or ").concat(t[1]):"of ".concat(
e," ").concat(t[0])}else return"of ".concat(e," ").concat(String(t))}function g3(t,e,r){return t.substr(
!r||r<0?0:+r,e.length)===e}function y3(t,e,r){return(r===void 0||r>t.length)&&(r=t.length),t.substring(
r-e.length,r)===e}function v3(t,e,r){return typeof r!="number"&&(r=0),r+e.length>t.length?!1:t.indexOf(
e,r)!==-1}wr("ERR_INVALID_OPT_VALUE",function(t,e){return'The value "'+e+'" is invalid for option "'+
t+'"'},TypeError);wr("ERR_INVALID_ARG_TYPE",function(t,e,r){var n;typeof e=="string"&&g3(e,"not ")?(n=
"must not be",e=e.replace(/^not /,"")):n="must be";var i;if(y3(t," argument"))i="The ".concat(t," ").
concat(n," ").concat(Ik(e,"type"));else{var a=v3(t,".")?"property":"argument";i='The "'.concat(t,'" ').
concat(a," ").concat(n," ").concat(Ik(e,"type"))}return i+=". Received type ".concat(typeof r),i},TypeError);
wr("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF");wr("ERR_METHOD_NOT_IMPLEMENTED",function(t){
return"The "+t+" method is not implemented"});wr("ERR_STREAM_PREMATURE_CLOSE","Premature close");wr(
"ERR_STREAM_DESTROYED",function(t){return"Cannot call "+t+" after a stream was destroyed"});wr("ERR_\
MULTIPLE_CALLBACK","Callback called multiple times");wr("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not r\
eadable");wr("ERR_STREAM_WRITE_AFTER_END","write after end");wr("ERR_STREAM_NULL_VALUES","May not wr\
ite null values to stream",TypeError);wr("ERR_UNKNOWN_ENCODING",function(t){return"Unknown encoding:\
 "+t},TypeError);wr("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event");Pk.exports.
codes=Rk});var py=I((D6,Dk)=>{"use strict";var w3=Ta().codes.ERR_INVALID_OPT_VALUE;function x3(t,e,r){return t.
highWaterMark!=null?t.highWaterMark:e?t[r]:null}function E3(t,e,r,n){var i=x3(e,n,r);if(i!=null){if(!(isFinite(
i)&&Math.floor(i)===i)||i<0){var a=n?r:"highWaterMark";throw new w3(a,i)}return Math.floor(i)}return t.
objectMode?16:16*1024}Dk.exports={getHighWaterMark:E3}});var es=I((A6,hy)=>{typeof Object.create=="function"?hy.exports=function(e,r){r&&(e.super_=r,e.prototype=
Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:hy.exports=
function(e,r){if(r){e.super_=r;var n=function(){};n.prototype=r.prototype,e.prototype=new n,e.prototype.
constructor=e}}});var Nk=I((N6,Ak)=>{Ak.exports=_3;function _3(t,e){if(my("noDeprecation"))return t;var r=!1;function n(){
if(!r){if(my("throwDeprecation"))throw new Error(e);my("traceDeprecation")?console.trace(e):console.
warn(e),r=!0}return t.apply(this,arguments)}return n}function my(t){try{if(!global.localStorage)return!1}catch{
return!1}var e=global.localStorage[t];return e==null?!1:String(e).toLowerCase()==="true"}});var vy=I((F6,Uk)=>{"use strict";Uk.exports=ze;function Bk(t){var e=this;this.next=null,this.entry=null,
this.finish=function(){X3(e,t)}}var ts;ze.WritableState=Wl;var S3={deprecate:Nk()},Mk=ly(),Df=Ro().Buffer,
T3=(typeof global<"u"?global:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};
function k3(t){return Df.from(t)}function b3(t){return Df.isBuffer(t)||t instanceof T3}var yy=fy(),C3=py(),
I3=C3.getHighWaterMark,ki=Ta().codes,R3=ki.ERR_INVALID_ARG_TYPE,P3=ki.ERR_METHOD_NOT_IMPLEMENTED,D3=ki.
ERR_MULTIPLE_CALLBACK,A3=ki.ERR_STREAM_CANNOT_PIPE,N3=ki.ERR_STREAM_DESTROYED,F3=ki.ERR_STREAM_NULL_VALUES,
B3=ki.ERR_STREAM_WRITE_AFTER_END,M3=ki.ERR_UNKNOWN_ENCODING,rs=yy.errorOrDestroy;es()(ze,Mk);function O3(){}
function Wl(t,e,r){ts=ts||ka(),t=t||{},typeof r!="boolean"&&(r=e instanceof ts),this.objectMode=!!t.
objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=I3(this,t,
"writableHighWaterMark",r),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=
!1,this.destroyed=!1;var n=t.decodeStrings===!1;this.decodeStrings=!n,this.defaultEncoding=t.defaultEncoding||
"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=
function(i){$3(e,i)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=
null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=t.emitClose!==!1,this.
autoDestroy=!!t.autoDestroy,this.bufferedRequestCount=0,this.corkedRequestsFree=new Bk(this)}Wl.prototype.
getBuffer=function(){for(var e=this.bufferedRequest,r=[];e;)r.push(e),e=e.next;return r};(function(){
try{Object.defineProperty(Wl.prototype,"buffer",{get:S3.deprecate(function(){return this.getBuffer()},
"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}})();
var Pf;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]==
"function"?(Pf=Function.prototype[Symbol.hasInstance],Object.defineProperty(ze,Symbol.hasInstance,{value:function(e){
return Pf.call(this,e)?!0:this!==ze?!1:e&&e._writableState instanceof Wl}})):Pf=function(e){return e instanceof
this};function ze(t){ts=ts||ka();var e=this instanceof ts;if(!e&&!Pf.call(ze,this))return new ze(t);
this._writableState=new Wl(t,this,e),this.writable=!0,t&&(typeof t.write=="function"&&(this._write=t.
write),typeof t.writev=="function"&&(this._writev=t.writev),typeof t.destroy=="function"&&(this._destroy=
t.destroy),typeof t.final=="function"&&(this._final=t.final)),Mk.call(this)}ze.prototype.pipe=function(){
rs(this,new A3)};function L3(t,e){var r=new B3;rs(t,r),process.nextTick(e,r)}function U3(t,e,r,n){var i;
return r===null?i=new F3:typeof r!="string"&&!e.objectMode&&(i=new R3("chunk",["string","Buffer"],r)),
i?(rs(t,i),process.nextTick(n,i),!1):!0}ze.prototype.write=function(t,e,r){var n=this._writableState,
i=!1,a=!n.objectMode&&b3(t);return a&&!Df.isBuffer(t)&&(t=k3(t)),typeof e=="function"&&(r=e,e=null),
a?e="buffer":e||(e=n.defaultEncoding),typeof r!="function"&&(r=O3),n.ending?L3(this,r):(a||U3(this,n,
t,r))&&(n.pendingcb++,i=j3(this,n,a,t,e,r)),i};ze.prototype.cork=function(){this._writableState.corked++};
ze.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,!t.writing&&!t.corked&&
!t.bufferProcessing&&t.bufferedRequest&&Ok(this,t))};ze.prototype.setDefaultEncoding=function(e){if(typeof e==
"string"&&(e=e.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf1\
6le","utf-16le","raw"].indexOf((e+"").toLowerCase())>-1))throw new M3(e);return this._writableState.
defaultEncoding=e,this};Object.defineProperty(ze.prototype,"writableBuffer",{enumerable:!1,get:function(){
return this._writableState&&this._writableState.getBuffer()}});function z3(t,e,r){return!t.objectMode&&
t.decodeStrings!==!1&&typeof e=="string"&&(e=Df.from(e,r)),e}Object.defineProperty(ze.prototype,"wri\
tableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function j3(t,e,r,n,i,a){
if(!r){var o=z3(e,n,i);n!==o&&(r=!0,i="buffer",n=o)}var s=e.objectMode?1:n.length;e.length+=s;var l=e.
length<e.highWaterMark;if(l||(e.needDrain=!0),e.writing||e.corked){var u=e.lastBufferedRequest;e.lastBufferedRequest=
{chunk:n,encoding:i,isBuf:r,callback:a,next:null},u?u.next=e.lastBufferedRequest:e.bufferedRequest=e.
lastBufferedRequest,e.bufferedRequestCount+=1}else gy(t,e,!1,s,n,i,a);return l}function gy(t,e,r,n,i,a,o){
e.writelen=n,e.writecb=o,e.writing=!0,e.sync=!0,e.destroyed?e.onwrite(new N3("write")):r?t._writev(i,
e.onwrite):t._write(i,a,e.onwrite),e.sync=!1}function H3(t,e,r,n,i){--e.pendingcb,r?(process.nextTick(
i,n),process.nextTick(Vl,t,e),t._writableState.errorEmitted=!0,rs(t,n)):(i(n),t._writableState.errorEmitted=
!0,rs(t,n),Vl(t,e))}function q3(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function $3(t,e){
var r=t._writableState,n=r.sync,i=r.writecb;if(typeof i!="function")throw new D3;if(q3(r),e)H3(t,r,n,
e,i);else{var a=Lk(r)||t.destroyed;!a&&!r.corked&&!r.bufferProcessing&&r.bufferedRequest&&Ok(t,r),n?
process.nextTick(Fk,t,r,a,i):Fk(t,r,a,i)}}function Fk(t,e,r,n){r||V3(t,e),e.pendingcb--,n(),Vl(t,e)}
function V3(t,e){e.length===0&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function Ok(t,e){e.bufferProcessing=
!0;var r=e.bufferedRequest;if(t._writev&&r&&r.next){var n=e.bufferedRequestCount,i=new Array(n),a=e.
corkedRequestsFree;a.entry=r;for(var o=0,s=!0;r;)i[o]=r,r.isBuf||(s=!1),r=r.next,o+=1;i.allBuffers=s,
gy(t,e,!0,e.length,i,"",a.finish),e.pendingcb++,e.lastBufferedRequest=null,a.next?(e.corkedRequestsFree=
a.next,a.next=null):e.corkedRequestsFree=new Bk(e),e.bufferedRequestCount=0}else{for(;r;){var l=r.chunk,
u=r.encoding,c=r.callback,d=e.objectMode?1:l.length;if(gy(t,e,!1,d,l,u,c),r=r.next,e.bufferedRequestCount--,
e.writing)break}r===null&&(e.lastBufferedRequest=null)}e.bufferedRequest=r,e.bufferProcessing=!1}ze.
prototype._write=function(t,e,r){r(new P3("_write()"))};ze.prototype._writev=null;ze.prototype.end=function(t,e,r){
var n=this._writableState;return typeof t=="function"?(r=t,t=null,e=null):typeof e=="function"&&(r=e,
e=null),t!=null&&this.write(t,e),n.corked&&(n.corked=1,this.uncork()),n.ending||G3(this,n,r),this};Object.
defineProperty(ze.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.
length}});function Lk(t){return t.ending&&t.length===0&&t.bufferedRequest===null&&!t.finished&&!t.writing}
function W3(t,e){t._final(function(r){e.pendingcb--,r&&rs(t,r),e.prefinished=!0,t.emit("prefinish"),
Vl(t,e)})}function K3(t,e){!e.prefinished&&!e.finalCalled&&(typeof t._final=="function"&&!e.destroyed?
(e.pendingcb++,e.finalCalled=!0,process.nextTick(W3,t,e)):(e.prefinished=!0,t.emit("prefinish")))}function Vl(t,e){
var r=Lk(e);if(r&&(K3(t,e),e.pendingcb===0&&(e.finished=!0,t.emit("finish"),e.autoDestroy))){var n=t.
_readableState;(!n||n.autoDestroy&&n.endEmitted)&&t.destroy()}return r}function G3(t,e,r){e.ending=!0,
Vl(t,e),r&&(e.finished?process.nextTick(r):t.once("finish",r)),e.ended=!0,t.writable=!1}function X3(t,e,r){
var n=t.entry;for(t.entry=null;n;){var i=n.callback;e.pendingcb--,i(r),n=n.next}e.corkedRequestsFree.
next=t}Object.defineProperty(ze.prototype,"destroyed",{enumerable:!1,get:function(){return this._writableState===
void 0?!1:this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=
e)}});ze.prototype.destroy=yy.destroy;ze.prototype._undestroy=yy.undestroy;ze.prototype._destroy=function(t,e){
e(t)}});var ka=I((B6,jk)=>{"use strict";var Y3=Object.keys||function(t){var e=[];for(var r in t)e.push(r);return e};
jk.exports=nn;var zk=Ey(),xy=vy();es()(nn,zk);for(wy=Y3(xy.prototype),Af=0;Af<wy.length;Af++)Nf=wy[Af],
nn.prototype[Nf]||(nn.prototype[Nf]=xy.prototype[Nf]);var wy,Nf,Af;function nn(t){if(!(this instanceof
nn))return new nn(t);zk.call(this,t),xy.call(this,t),this.allowHalfOpen=!0,t&&(t.readable===!1&&(this.
readable=!1),t.writable===!1&&(this.writable=!1),t.allowHalfOpen===!1&&(this.allowHalfOpen=!1,this.once(
"end",Q3)))}Object.defineProperty(nn.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){
return this._writableState.highWaterMark}});Object.defineProperty(nn.prototype,"writableBuffer",{enumerable:!1,
get:function(){return this._writableState&&this._writableState.getBuffer()}});Object.defineProperty(
nn.prototype,"writableLength",{enumerable:!1,get:function(){return this._writableState.length}});function Q3(){
this._writableState.ended||process.nextTick(Z3,this)}function Z3(t){t.end()}Object.defineProperty(nn.
prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0||this._writableState===
void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(e){this._readableState===
void 0||this._writableState===void 0||(this._readableState.destroyed=e,this._writableState.destroyed=
e)}})});var $k=I((_y,qk)=>{var Ff=Ro(),an=Ff.Buffer;function Hk(t,e){for(var r in t)e[r]=t[r]}an.from&&an.alloc&&
an.allocUnsafe&&an.allocUnsafeSlow?qk.exports=Ff:(Hk(Ff,_y),_y.Buffer=ba);function ba(t,e,r){return an(
t,e,r)}ba.prototype=Object.create(an.prototype);Hk(an,ba);ba.from=function(t,e,r){if(typeof t=="numb\
er")throw new TypeError("Argument must not be a number");return an(t,e,r)};ba.alloc=function(t,e,r){
if(typeof t!="number")throw new TypeError("Argument must be a number");var n=an(t);return e!==void 0?
typeof r=="string"?n.fill(e,r):n.fill(e):n.fill(0),n};ba.allocUnsafe=function(t){if(typeof t!="numbe\
r")throw new TypeError("Argument must be a number");return an(t)};ba.allocUnsafeSlow=function(t){if(typeof t!=
"number")throw new TypeError("Argument must be a number");return Ff.SlowBuffer(t)}});var ky=I(Wk=>{"use strict";var Ty=$k().Buffer,Vk=Ty.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16l\
e":case"utf-16le":case"raw":return!0;default:return!1}};function J3(t){if(!t)return"utf8";for(var e;;)
switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"\
utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:
if(e)return;t=(""+t).toLowerCase(),e=!0}}function eM(t){var e=J3(t);if(typeof e!="string"&&(Ty.isEncoding===
Vk||!Vk(t)))throw new Error("Unknown encoding: "+t);return e||t}Wk.StringDecoder=Kl;function Kl(t){this.
encoding=eM(t);var e;switch(this.encoding){case"utf16le":this.text=oM,this.end=sM,e=4;break;case"utf\
8":this.fillLast=nM,e=4;break;case"base64":this.text=lM,this.end=uM,e=3;break;default:this.write=cM,
this.end=dM;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=Ty.allocUnsafe(e)}Kl.prototype.write=
function(t){if(t.length===0)return"";var e,r;if(this.lastNeed){if(e=this.fillLast(t),e===void 0)return"";
r=this.lastNeed,this.lastNeed=0}else r=0;return r<t.length?e?e+this.text(t,r):this.text(t,r):e||""};
Kl.prototype.end=aM;Kl.prototype.text=iM;Kl.prototype.fillLast=function(t){if(this.lastNeed<=t.length)
return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.
encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=
t.length};function Sy(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function tM(t,e,r){
var n=e.length-1;if(n<r)return 0;var i=Sy(e[n]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--n<r||i===-2?
0:(i=Sy(e[n]),i>=0?(i>0&&(t.lastNeed=i-2),i):--n<r||i===-2?0:(i=Sy(e[n]),i>=0?(i>0&&(i===2?i=0:t.lastNeed=
i-3),i):0))}function rM(t,e,r){if((e[0]&192)!==128)return t.lastNeed=0,"\uFFFD";if(t.lastNeed>1&&e.length>
1){if((e[1]&192)!==128)return t.lastNeed=1,"\uFFFD";if(t.lastNeed>2&&e.length>2&&(e[2]&192)!==128)return t.
lastNeed=2,"\uFFFD"}}function nM(t){var e=this.lastTotal-this.lastNeed,r=rM(this,t,e);if(r!==void 0)
return r;if(this.lastNeed<=t.length)return t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(
this.encoding,0,this.lastTotal);t.copy(this.lastChar,e,0,t.length),this.lastNeed-=t.length}function iM(t,e){
var r=tM(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=r;var n=t.length-(r-
this.lastNeed);return t.copy(this.lastChar,0,n),t.toString("utf8",e,n)}function aM(t){var e=t&&t.length?
this.write(t):"";return this.lastNeed?e+"\uFFFD":e}function oM(t,e){if((t.length-e)%2===0){var r=t.toString(
"utf16le",e);if(r){var n=r.charCodeAt(r.length-1);if(n>=55296&&n<=56319)return this.lastNeed=2,this.
lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],r.slice(0,-1)}return r}return this.
lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function sM(t){
var e=t&&t.length?this.write(t):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return e+this.
lastChar.toString("utf16le",0,r)}return e}function lM(t,e){var r=(t.length-e)%3;return r===0?t.toString(
"base64",e):(this.lastNeed=3-r,this.lastTotal=3,r===1?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=
t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-r))}function uM(t){var e=t&&
t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):
e}function cM(t){return t.toString(this.encoding)}function dM(t){return t&&t.length?this.write(t):""}});var Bf=I((O6,Xk)=>{"use strict";var Kk=Ta().codes.ERR_STREAM_PREMATURE_CLOSE;function fM(t){var e=!1;
return function(){if(!e){e=!0;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];
t.apply(this,n)}}}function pM(){}function hM(t){return t.setHeader&&typeof t.abort=="function"}function Gk(t,e,r){
if(typeof e=="function")return Gk(t,null,e);e||(e={}),r=fM(r||pM);var n=e.readable||e.readable!==!1&&
t.readable,i=e.writable||e.writable!==!1&&t.writable,a=function(){t.writable||s()},o=t._writableState&&
t._writableState.finished,s=function(){i=!1,o=!0,n||r.call(t)},l=t._readableState&&t._readableState.
endEmitted,u=function(){n=!1,l=!0,i||r.call(t)},c=function(w){r.call(t,w)},d=function(){var w;if(n&&
!l)return(!t._readableState||!t._readableState.ended)&&(w=new Kk),r.call(t,w);if(i&&!o)return(!t._writableState||
!t._writableState.ended)&&(w=new Kk),r.call(t,w)},f=function(){t.req.on("finish",s)};return hM(t)?(t.
on("complete",s),t.on("abort",d),t.req?f():t.on("request",f)):i&&!t._writableState&&(t.on("end",a),t.
on("close",a)),t.on("end",u),t.on("finish",s),e.error!==!1&&t.on("error",c),t.on("close",d),function(){
t.removeListener("complete",s),t.removeListener("abort",d),t.removeListener("request",f),t.req&&t.req.
removeListener("finish",s),t.removeListener("end",a),t.removeListener("close",a),t.removeListener("f\
inish",s),t.removeListener("end",u),t.removeListener("error",c),t.removeListener("close",d)}}Xk.exports=
Gk});var Qk=I((L6,Yk)=>{"use strict";var Mf;function bi(t,e,r){return e=mM(e),e in t?Object.defineProperty(
t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function mM(t){var e=gM(t,"string");
return typeof e=="symbol"?e:String(e)}function gM(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.
toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError(
"@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var yM=Bf(),Ci=Symbol(
"lastResolve"),Ca=Symbol("lastReject"),Gl=Symbol("error"),Of=Symbol("ended"),Ia=Symbol("lastPromise"),
by=Symbol("handlePromise"),Ra=Symbol("stream");function Ii(t,e){return{value:t,done:e}}function vM(t){
var e=t[Ci];if(e!==null){var r=t[Ra].read();r!==null&&(t[Ia]=null,t[Ci]=null,t[Ca]=null,e(Ii(r,!1)))}}
function wM(t){process.nextTick(vM,t)}function xM(t,e){return function(r,n){t.then(function(){if(e[Of]){
r(Ii(void 0,!0));return}e[by](r,n)},n)}}var EM=Object.getPrototypeOf(function(){}),_M=Object.setPrototypeOf(
(Mf={get stream(){return this[Ra]},next:function(){var e=this,r=this[Gl];if(r!==null)return Promise.
reject(r);if(this[Of])return Promise.resolve(Ii(void 0,!0));if(this[Ra].destroyed)return new Promise(
function(o,s){process.nextTick(function(){e[Gl]?s(e[Gl]):o(Ii(void 0,!0))})});var n=this[Ia],i;if(n)
i=new Promise(xM(n,this));else{var a=this[Ra].read();if(a!==null)return Promise.resolve(Ii(a,!1));i=
new Promise(this[by])}return this[Ia]=i,i}},bi(Mf,Symbol.asyncIterator,function(){return this}),bi(Mf,
"return",function(){var e=this;return new Promise(function(r,n){e[Ra].destroy(null,function(i){if(i){
n(i);return}r(Ii(void 0,!0))})})}),Mf),EM),SM=function(e){var r,n=Object.create(_M,(r={},bi(r,Ra,{value:e,
writable:!0}),bi(r,Ci,{value:null,writable:!0}),bi(r,Ca,{value:null,writable:!0}),bi(r,Gl,{value:null,
writable:!0}),bi(r,Of,{value:e._readableState.endEmitted,writable:!0}),bi(r,by,{value:function(a,o){
var s=n[Ra].read();s?(n[Ia]=null,n[Ci]=null,n[Ca]=null,a(Ii(s,!1))):(n[Ci]=a,n[Ca]=o)},writable:!0}),
r));return n[Ia]=null,yM(e,function(i){if(i&&i.code!=="ERR_STREAM_PREMATURE_CLOSE"){var a=n[Ca];a!==
null&&(n[Ia]=null,n[Ci]=null,n[Ca]=null,a(i)),n[Gl]=i;return}var o=n[Ci];o!==null&&(n[Ia]=null,n[Ci]=
null,n[Ca]=null,o(Ii(void 0,!0))),n[Of]=!0}),e.on("readable",wM.bind(null,n)),n};Yk.exports=SM});var Jk=I((U6,Zk)=>{Zk.exports=function(){throw new Error("Readable.from is not available in the brow\
ser")}});var Ey=I((j6,ub)=>{"use strict";ub.exports=ce;var ns;ce.ReadableState=nb;var z6=sy().EventEmitter,rb=function(e,r){
return e.listeners(r).length},Yl=ly(),Lf=Ro().Buffer,TM=(typeof global<"u"?global:typeof window<"u"?
window:typeof self<"u"?self:{}).Uint8Array||function(){};function kM(t){return Lf.from(t)}function bM(t){
return Lf.isBuffer(t)||t instanceof TM}var Cy=uy(),ie;Cy&&Cy.debuglog?ie=Cy.debuglog("stream"):ie=function(){};
var CM=kk(),Fy=fy(),IM=py(),RM=IM.getHighWaterMark,Uf=Ta().codes,PM=Uf.ERR_INVALID_ARG_TYPE,DM=Uf.ERR_STREAM_PUSH_AFTER_EOF,
AM=Uf.ERR_METHOD_NOT_IMPLEMENTED,NM=Uf.ERR_STREAM_UNSHIFT_AFTER_END_EVENT,is,Iy,Ry;es()(ce,Yl);var Xl=Fy.
errorOrDestroy,Py=["error","close","destroy","pause","resume"];function FM(t,e,r){if(typeof t.prependListener==
"function")return t.prependListener(e,r);!t._events||!t._events[e]?t.on(e,r):Array.isArray(t._events[e])?
t._events[e].unshift(r):t._events[e]=[r,t._events[e]]}function nb(t,e,r){ns=ns||ka(),t=t||{},typeof r!=
"boolean"&&(r=e instanceof ns),this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.
readableObjectMode),this.highWaterMark=RM(this,t,"readableHighWaterMark",r),this.buffer=new CM,this.
length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=
!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=
!1,this.paused=!0,this.emitClose=t.emitClose!==!1,this.autoDestroy=!!t.autoDestroy,this.destroyed=!1,
this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,
this.encoding=null,t.encoding&&(is||(is=ky().StringDecoder),this.decoder=new is(t.encoding),this.encoding=
t.encoding)}function ce(t){if(ns=ns||ka(),!(this instanceof ce))return new ce(t);var e=this instanceof
ns;this._readableState=new nb(t,this,e),this.readable=!0,t&&(typeof t.read=="function"&&(this._read=
t.read),typeof t.destroy=="function"&&(this._destroy=t.destroy)),Yl.call(this)}Object.defineProperty(
ce.prototype,"destroyed",{enumerable:!1,get:function(){return this._readableState===void 0?!1:this._readableState.
destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}});ce.prototype.destroy=
Fy.destroy;ce.prototype._undestroy=Fy.undestroy;ce.prototype._destroy=function(t,e){e(t)};ce.prototype.
push=function(t,e){var r=this._readableState,n;return r.objectMode?n=!0:typeof t=="string"&&(e=e||r.
defaultEncoding,e!==r.encoding&&(t=Lf.from(t,e),e=""),n=!0),ib(this,t,e,!1,n)};ce.prototype.unshift=
function(t){return ib(this,t,null,!0,!1)};function ib(t,e,r,n,i){ie("readableAddChunk",e);var a=t._readableState;
if(e===null)a.reading=!1,OM(t,a);else{var o;if(i||(o=BM(a,e)),o)Xl(t,o);else if(a.objectMode||e&&e.length>
0)if(typeof e!="string"&&!a.objectMode&&Object.getPrototypeOf(e)!==Lf.prototype&&(e=kM(e)),n)a.endEmitted?
Xl(t,new NM):Dy(t,a,e,!0);else if(a.ended)Xl(t,new DM);else{if(a.destroyed)return!1;a.reading=!1,a.decoder&&
!r?(e=a.decoder.write(e),a.objectMode||e.length!==0?Dy(t,a,e,!1):Ny(t,a)):Dy(t,a,e,!1)}else n||(a.reading=
!1,Ny(t,a))}return!a.ended&&(a.length<a.highWaterMark||a.length===0)}function Dy(t,e,r,n){e.flowing&&
e.length===0&&!e.sync?(e.awaitDrain=0,t.emit("data",r)):(e.length+=e.objectMode?1:r.length,n?e.buffer.
unshift(r):e.buffer.push(r),e.needReadable&&zf(t)),Ny(t,e)}function BM(t,e){var r;return!bM(e)&&typeof e!=
"string"&&e!==void 0&&!t.objectMode&&(r=new PM("chunk",["string","Buffer","Uint8Array"],e)),r}ce.prototype.
isPaused=function(){return this._readableState.flowing===!1};ce.prototype.setEncoding=function(t){is||
(is=ky().StringDecoder);var e=new is(t);this._readableState.decoder=e,this._readableState.encoding=this.
_readableState.decoder.encoding;for(var r=this._readableState.buffer.head,n="";r!==null;)n+=e.write(
r.data),r=r.next;return this._readableState.buffer.clear(),n!==""&&this._readableState.buffer.push(n),
this._readableState.length=n.length,this};var eb=1073741824;function MM(t){return t>=eb?t=eb:(t--,t|=
t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}function tb(t,e){return t<=0||e.length===0&&e.ended?
0:e.objectMode?1:t!==t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.
highWaterMark=MM(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}ce.prototype.read=function(t){
ie("read",t),t=parseInt(t,10);var e=this._readableState,r=t;if(t!==0&&(e.emittedReadable=!1),t===0&&
e.needReadable&&((e.highWaterMark!==0?e.length>=e.highWaterMark:e.length>0)||e.ended))return ie("rea\
d: emitReadable",e.length,e.ended),e.length===0&&e.ended?Ay(this):zf(this),null;if(t=tb(t,e),t===0&&
e.ended)return e.length===0&&Ay(this),null;var n=e.needReadable;ie("need readable",n),(e.length===0||
e.length-t<e.highWaterMark)&&(n=!0,ie("length less than watermark",n)),e.ended||e.reading?(n=!1,ie("\
reading or ended",n)):n&&(ie("do read"),e.reading=!0,e.sync=!0,e.length===0&&(e.needReadable=!0),this.
_read(e.highWaterMark),e.sync=!1,e.reading||(t=tb(r,e)));var i;return t>0?i=sb(t,e):i=null,i===null?
(e.needReadable=e.length<=e.highWaterMark,t=0):(e.length-=t,e.awaitDrain=0),e.length===0&&(e.ended||
(e.needReadable=!0),r!==t&&e.ended&&Ay(this)),i!==null&&this.emit("data",i),i};function OM(t,e){if(ie(
"onEofChunk"),!e.ended){if(e.decoder){var r=e.decoder.end();r&&r.length&&(e.buffer.push(r),e.length+=
e.objectMode?1:r.length)}e.ended=!0,e.sync?zf(t):(e.needReadable=!1,e.emittedReadable||(e.emittedReadable=
!0,ab(t)))}}function zf(t){var e=t._readableState;ie("emitReadable",e.needReadable,e.emittedReadable),
e.needReadable=!1,e.emittedReadable||(ie("emitReadable",e.flowing),e.emittedReadable=!0,process.nextTick(
ab,t))}function ab(t){var e=t._readableState;ie("emitReadable_",e.destroyed,e.length,e.ended),!e.destroyed&&
(e.length||e.ended)&&(t.emit("readable"),e.emittedReadable=!1),e.needReadable=!e.flowing&&!e.ended&&
e.length<=e.highWaterMark,By(t)}function Ny(t,e){e.readingMore||(e.readingMore=!0,process.nextTick(LM,
t,e))}function LM(t,e){for(;!e.reading&&!e.ended&&(e.length<e.highWaterMark||e.flowing&&e.length===0);){
var r=e.length;if(ie("maybeReadMore read 0"),t.read(0),r===e.length)break}e.readingMore=!1}ce.prototype.
_read=function(t){Xl(this,new AM("_read()"))};ce.prototype.pipe=function(t,e){var r=this,n=this._readableState;
switch(n.pipesCount){case 0:n.pipes=t;break;case 1:n.pipes=[n.pipes,t];break;default:n.pipes.push(t);
break}n.pipesCount+=1,ie("pipe count=%d opts=%j",n.pipesCount,e);var i=(!e||e.end!==!1)&&t!==process.
stdout&&t!==process.stderr,a=i?s:g;n.endEmitted?process.nextTick(a):r.once("end",a),t.on("unpipe",o);
function o(E,p){ie("onunpipe"),E===r&&p&&p.hasUnpiped===!1&&(p.hasUnpiped=!0,c())}function s(){ie("o\
nend"),t.end()}var l=UM(r);t.on("drain",l);var u=!1;function c(){ie("cleanup"),t.removeListener("clo\
se",m),t.removeListener("finish",w),t.removeListener("drain",l),t.removeListener("error",f),t.removeListener(
"unpipe",o),r.removeListener("end",s),r.removeListener("end",g),r.removeListener("data",d),u=!0,n.awaitDrain&&
(!t._writableState||t._writableState.needDrain)&&l()}r.on("data",d);function d(E){ie("ondata");var p=t.
write(E);ie("dest.write",p),p===!1&&((n.pipesCount===1&&n.pipes===t||n.pipesCount>1&&lb(n.pipes,t)!==
-1)&&!u&&(ie("false write response, pause",n.awaitDrain),n.awaitDrain++),r.pause())}function f(E){ie(
"onerror",E),g(),t.removeListener("error",f),rb(t,"error")===0&&Xl(t,E)}FM(t,"error",f);function m(){
t.removeListener("finish",w),g()}t.once("close",m);function w(){ie("onfinish"),t.removeListener("clo\
se",m),g()}t.once("finish",w);function g(){ie("unpipe"),r.unpipe(t)}return t.emit("pipe",r),n.flowing||
(ie("pipe resume"),r.resume()),t};function UM(t){return function(){var r=t._readableState;ie("pipeOn\
Drain",r.awaitDrain),r.awaitDrain&&r.awaitDrain--,r.awaitDrain===0&&rb(t,"data")&&(r.flowing=!0,By(t))}}
ce.prototype.unpipe=function(t){var e=this._readableState,r={hasUnpiped:!1};if(e.pipesCount===0)return this;
if(e.pipesCount===1)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=
!1,t&&t.emit("unpipe",this,r),this);if(!t){var n=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,
e.flowing=!1;for(var a=0;a<i;a++)n[a].emit("unpipe",this,{hasUnpiped:!1});return this}var o=lb(e.pipes,
t);return o===-1?this:(e.pipes.splice(o,1),e.pipesCount-=1,e.pipesCount===1&&(e.pipes=e.pipes[0]),t.
emit("unpipe",this,r),this)};ce.prototype.on=function(t,e){var r=Yl.prototype.on.call(this,t,e),n=this.
_readableState;return t==="data"?(n.readableListening=this.listenerCount("readable")>0,n.flowing!==!1&&
this.resume()):t==="readable"&&!n.endEmitted&&!n.readableListening&&(n.readableListening=n.needReadable=
!0,n.flowing=!1,n.emittedReadable=!1,ie("on readable",n.length,n.reading),n.length?zf(this):n.reading||
process.nextTick(zM,this)),r};ce.prototype.addListener=ce.prototype.on;ce.prototype.removeListener=function(t,e){
var r=Yl.prototype.removeListener.call(this,t,e);return t==="readable"&&process.nextTick(ob,this),r};
ce.prototype.removeAllListeners=function(t){var e=Yl.prototype.removeAllListeners.apply(this,arguments);
return(t==="readable"||t===void 0)&&process.nextTick(ob,this),e};function ob(t){var e=t._readableState;
e.readableListening=t.listenerCount("readable")>0,e.resumeScheduled&&!e.paused?e.flowing=!0:t.listenerCount(
"data")>0&&t.resume()}function zM(t){ie("readable nexttick read 0"),t.read(0)}ce.prototype.resume=function(){
var t=this._readableState;return t.flowing||(ie("resume"),t.flowing=!t.readableListening,jM(this,t)),
t.paused=!1,this};function jM(t,e){e.resumeScheduled||(e.resumeScheduled=!0,process.nextTick(HM,t,e))}
function HM(t,e){ie("resume",e.reading),e.reading||t.read(0),e.resumeScheduled=!1,t.emit("resume"),By(
t),e.flowing&&!e.reading&&t.read(0)}ce.prototype.pause=function(){return ie("call pause flowing=%j",
this._readableState.flowing),this._readableState.flowing!==!1&&(ie("pause"),this._readableState.flowing=
!1,this.emit("pause")),this._readableState.paused=!0,this};function By(t){var e=t._readableState;for(ie(
"flow",e.flowing);e.flowing&&t.read()!==null;);}ce.prototype.wrap=function(t){var e=this,r=this._readableState,
n=!1;t.on("end",function(){if(ie("wrapped end"),r.decoder&&!r.ended){var o=r.decoder.end();o&&o.length&&
e.push(o)}e.push(null)}),t.on("data",function(o){if(ie("wrapped data"),r.decoder&&(o=r.decoder.write(
o)),!(r.objectMode&&o==null)&&!(!r.objectMode&&(!o||!o.length))){var s=e.push(o);s||(n=!0,t.pause())}});
for(var i in t)this[i]===void 0&&typeof t[i]=="function"&&(this[i]=function(s){return function(){return t[s].
apply(t,arguments)}}(i));for(var a=0;a<Py.length;a++)t.on(Py[a],this.emit.bind(this,Py[a]));return this.
_read=function(o){ie("wrapped _read",o),n&&(n=!1,t.resume())},this};typeof Symbol=="function"&&(ce.prototype[Symbol.
asyncIterator]=function(){return Iy===void 0&&(Iy=Qk()),Iy(this)});Object.defineProperty(ce.prototype,
"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}});Object.
defineProperty(ce.prototype,"readableBuffer",{enumerable:!1,get:function(){return this._readableState&&
this._readableState.buffer}});Object.defineProperty(ce.prototype,"readableFlowing",{enumerable:!1,get:function(){
return this._readableState.flowing},set:function(e){this._readableState&&(this._readableState.flowing=
e)}});ce._fromList=sb;Object.defineProperty(ce.prototype,"readableLength",{enumerable:!1,get:function(){
return this._readableState.length}});function sb(t,e){if(e.length===0)return null;var r;return e.objectMode?
r=e.buffer.shift():!t||t>=e.length?(e.decoder?r=e.buffer.join(""):e.buffer.length===1?r=e.buffer.first():
r=e.buffer.concat(e.length),e.buffer.clear()):r=e.buffer.consume(t,e.decoder),r}function Ay(t){var e=t.
_readableState;ie("endReadable",e.endEmitted),e.endEmitted||(e.ended=!0,process.nextTick(qM,e,t))}function qM(t,e){
if(ie("endReadableNT",t.endEmitted,t.length),!t.endEmitted&&t.length===0&&(t.endEmitted=!0,e.readable=
!1,e.emit("end"),t.autoDestroy)){var r=e._writableState;(!r||r.autoDestroy&&r.finished)&&e.destroy()}}
typeof Symbol=="function"&&(ce.from=function(t,e){return Ry===void 0&&(Ry=Jk()),Ry(ce,t,e)});function lb(t,e){
for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}});var My=I((H6,db)=>{"use strict";db.exports=Pn;var jf=Ta().codes,$M=jf.ERR_METHOD_NOT_IMPLEMENTED,VM=jf.
ERR_MULTIPLE_CALLBACK,WM=jf.ERR_TRANSFORM_ALREADY_TRANSFORMING,KM=jf.ERR_TRANSFORM_WITH_LENGTH_0,Hf=ka();
es()(Pn,Hf);function GM(t,e){var r=this._transformState;r.transforming=!1;var n=r.writecb;if(n===null)
return this.emit("error",new VM);r.writechunk=null,r.writecb=null,e!=null&&this.push(e),n(t);var i=this.
_readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}
function Pn(t){if(!(this instanceof Pn))return new Pn(t);Hf.call(this,t),this._transformState={afterTransform:GM.
bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.
needReadable=!0,this._readableState.sync=!1,t&&(typeof t.transform=="function"&&(this._transform=t.transform),
typeof t.flush=="function"&&(this._flush=t.flush)),this.on("prefinish",XM)}function XM(){var t=this;
typeof this._flush=="function"&&!this._readableState.destroyed?this._flush(function(e,r){cb(t,e,r)}):
cb(this,null,null)}Pn.prototype.push=function(t,e){return this._transformState.needTransform=!1,Hf.prototype.
push.call(this,t,e)};Pn.prototype._transform=function(t,e,r){r(new $M("_transform()"))};Pn.prototype.
_write=function(t,e,r){var n=this._transformState;if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.
transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&
this._read(i.highWaterMark)}};Pn.prototype._read=function(t){var e=this._transformState;e.writechunk!==
null&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):
e.needTransform=!0};Pn.prototype._destroy=function(t,e){Hf.prototype._destroy.call(this,t,function(r){
e(r)})};function cb(t,e,r){if(e)return t.emit("error",e);if(r!=null&&t.push(r),t._writableState.length)
throw new KM;if(t._transformState.transforming)throw new WM;return t.push(null)}});var hb=I((q6,pb)=>{"use strict";pb.exports=Ql;var fb=My();es()(Ql,fb);function Ql(t){if(!(this instanceof
Ql))return new Ql(t);fb.call(this,t)}Ql.prototype._transform=function(t,e,r){r(null,t)}});var wb=I(($6,vb)=>{"use strict";var Oy;function YM(t){var e=!1;return function(){e||(e=!0,t.apply(void 0,
arguments))}}var yb=Ta().codes,QM=yb.ERR_MISSING_ARGS,ZM=yb.ERR_STREAM_DESTROYED;function mb(t){if(t)
throw t}function JM(t){return t.setHeader&&typeof t.abort=="function"}function eO(t,e,r,n){n=YM(n);var i=!1;
t.on("close",function(){i=!0}),Oy===void 0&&(Oy=Bf()),Oy(t,{readable:e,writable:r},function(o){if(o)
return n(o);i=!0,n()});var a=!1;return function(o){if(!i&&!a){if(a=!0,JM(t))return t.abort();if(typeof t.
destroy=="function")return t.destroy();n(o||new ZM("pipe"))}}}function gb(t){t()}function tO(t,e){return t.
pipe(e)}function rO(t){return!t.length||typeof t[t.length-1]!="function"?mb:t.pop()}function nO(){for(var t=arguments.
length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var n=rO(e);if(Array.isArray(e[0])&&(e=e[0]),e.length<
2)throw new QM("streams");var i,a=e.map(function(o,s){var l=s<e.length-1,u=s>0;return eO(o,l,u,function(c){
i||(i=c),c&&a.forEach(gb),!l&&(a.forEach(gb),n(i))})});return e.reduce(tO)}vb.exports=nO});var Eb=I((xr,xb)=>{xr=xb.exports=Ey();xr.Stream=xr;xr.Readable=xr;xr.Writable=vy();xr.Duplex=ka();xr.
Transform=My();xr.PassThrough=hb();xr.finished=Bf();xr.pipeline=wb()});var _b=I(qf=>{"use strict";Object.defineProperty(qf,"__esModule",{value:!0});qf.ReadableWebToNodeStream=
void 0;var iO=Eb(),Ly=class extends iO.Readable{constructor(e){super(),this.bytesRead=0,this.released=
!1,this.reader=e.getReader()}async _read(){if(this.released){this.push(null);return}this.pendingRead=
this.reader.read();let e=await this.pendingRead;delete this.pendingRead,e.done||this.released?this.push(
null):(this.bytesRead+=e.value.length,this.push(e.value))}async waitForReadToComplete(){this.pendingRead&&
await this.pendingRead}async close(){await this.syncAndRelease()}async syncAndRelease(){this.released=
!0,await this.waitForReadToComplete(),await this.reader.releaseLock()}};qf.ReadableWebToNodeStream=Ly});var kb=I($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});$e.fetchFromUrl=$e.parseBlob=
$e.parseReadableStream=$e.parseNodeStream=$e.selectCover=$e.ratingToStars=$e.orderTags=$e.parseFromTokenizer=
$e.parseBuffer=void 0;var aO=he(),oO=ay(),sO=_b(),Sb=aO("music-metadata-browser:main"),Zl=ay();Object.
defineProperty($e,"parseBuffer",{enumerable:!0,get:function(){return Zl.parseBuffer}});Object.defineProperty(
$e,"parseFromTokenizer",{enumerable:!0,get:function(){return Zl.parseFromTokenizer}});Object.defineProperty(
$e,"orderTags",{enumerable:!0,get:function(){return Zl.orderTags}});Object.defineProperty($e,"rating\
ToStars",{enumerable:!0,get:function(){return Zl.ratingToStars}});Object.defineProperty($e,"selectCo\
ver",{enumerable:!0,get:function(){return Zl.selectCover}});$e.parseNodeStream=oO.parseStream;async function Uy(t,e,r){
let n=new sO.ReadableWebToNodeStream(t),i=await(0,$e.parseNodeStream)(n,typeof e=="string"?{mimeType:e}:
e,r);return await n.close(),i}$e.parseReadableStream=Uy;async function Tb(t,e){let r={mimeType:t.type,
size:t.size};t instanceof File&&(r.path=t.name);let n=t.stream?t.stream():lO(t);return Uy(n,{mimeType:t.
type,size:t.size},e)}$e.parseBlob=Tb;function lO(t){let e=new FileReader;return new ReadableStream({
start(r){e.onloadend=n=>{let i=n.target.result;i instanceof ArrayBuffer&&(i=new Uint8Array(i)),r.enqueue(
i),r.close()},e.onerror=n=>{r.close()},e.onabort=n=>{r.close()},e.readAsArrayBuffer(t)}})}async function uO(t,e){
let r=await fetch(t),n={size:parseInt(r.headers.get("Content-Length"),10),mimeType:r.headers.get("Co\
ntent-Type")};if(r.ok)if(r.body){let i=await Uy(r.body,n,e);return Sb("Closing HTTP-readable-stream.\
.."),r.body.locked||await r.body.cancel(),Sb("HTTP-readable-stream closed."),i}else return Tb(await r.
blob(),e);else throw new Error(`HTTP error status=${r.status}: ${r.statusText}`)}$e.fetchFromUrl=uO});var pt=St(ir()),AC=St(RE());var W=St(ir()),TP=St(zm());var O=St(ir());function Le(){return Le=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){
var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Le.
apply(this,arguments)}var Re;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Re||(Re={}));
var PE="popstate";function $E(t){t===void 0&&(t={});function e(n,i){let{pathname:a,search:o,hash:s}=n.location;return yl(
"",{pathname:a,search:o,hash:s},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){
return typeof i=="string"?i:Kr(i)}return yR(e,r,null,t)}function J(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ra(t,e){if(!t){typeof console<
"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gR(){return Math.random().toString(36).
substr(2,8)}function DE(t,e){return{usr:t.state,key:t.key,idx:e}}function yl(t,e,r,n){return r===void 0&&
(r=null),Le({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?pr(e):e,
{state:r,key:e&&e.key||n||gR()})}function Kr(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&
r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function pr(t){
let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");
n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function yR(t,e,r,n){n===void 0&&
(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,o=i.history,s=Re.Pop,l=null,u=c();u==null&&
(u=0,o.replaceState(Le({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){
s=Re.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:s,location:g.location,delta:p})}function f(E,p){
s=Re.Push;let h=yl(g.location,E,p);r&&r(h,E),u=c()+1;let y=DE(h,u),x=g.createHref(h);try{o.pushState(
y,"",x)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(x)}
a&&l&&l({action:s,location:g.location,delta:1})}function m(E,p){s=Re.Replace;let h=yl(g.location,E,p);
r&&r(h,E),u=c();let y=DE(h,u),x=g.createHref(h);o.replaceState(y,"",x),a&&l&&l({action:s,location:g.
location,delta:0})}function w(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,
h=typeof E=="string"?E:Kr(E);return J(p,"No window.location.(origin|href) available to create URL fo\
r href: "+h),new URL(h,p)}let g={get action(){return s},get location(){return t(i,o)},listen(E){if(l)
throw new Error("A history only accepts one active listener");return i.addEventListener(PE,d),l=E,()=>{
i.removeEventListener(PE,d),l=null}},createHref(E){return e(i,E)},createURL:w,encodeLocation(E){let p=w(
E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:m,go(E){return o.go(E)}};
return g}var Oe;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="erro\
r"})(Oe||(Oe={}));var vR=new Set(["lazy","caseSensitive","path","id","index","children"]);function wR(t){
return t.index===!0}function Vm(t,e,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),t.map((i,a)=>{
let o=[...r,a],s=typeof i.id=="string"?i.id:o.join("-");if(J(i.index!==!0||!i.children,"Cannot speci\
fy children on an index route"),J(!n[s],'Found a route id collision on id "'+s+`".  Route id's must \
be globally unique within Data Router usages`),wR(i)){let l=Le({},i,e(i),{id:s});return n[s]=l,l}else{
let l=Le({},i,e(i),{id:s,children:void 0});return n[s]=l,i.children&&(l.children=Vm(i.children,e,o,n)),
l}})}function wn(t,e,r){r===void 0&&(r="/");let n=typeof e=="string"?pr(e):e,i=Gr(n.pathname||"/",r);
if(i==null)return null;let a=WE(t);xR(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=RR(a[s],DR(
i));return o}function VE(t,e){let{route:r,pathname:n,params:i}=t;return{id:r.id,pathname:n,params:i,
data:e[r.id],handle:r.handle}}function WE(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&
(n="");let i=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,
childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(J(l.relativePath.startsWith(n),'Absolute r\
oute path "'+l.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route p\
ath ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.
slice(n.length));let u=Ar([n,l.relativePath]),c=r.concat(l);a.children&&a.children.length>0&&(J(a.index!==
!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+
'".')),WE(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:CR(u,a.index),routesMeta:c})};
return t.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))i(a,o);else for(let l of KE(
a.path))i(a,o,l)}),e}function KE(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith(
"?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let o=KE(n.join("/")),s=[];return s.push(
...o.map(l=>l===""?a:[a,l].join("/"))),i&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function xR(t){
t.sort((e,r)=>e.score!==r.score?r.score-e.score:IR(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.
map(n=>n.childrenIndex)))}var ER=/^:\w+$/,_R=3,SR=2,TR=1,kR=10,bR=-2,AE=t=>t==="*";function CR(t,e){
let r=t.split("/"),n=r.length;return r.some(AE)&&(n+=bR),e&&(n+=SR),r.filter(i=>!AE(i)).reduce((i,a)=>i+
(ER.test(a)?_R:a===""?TR:kR),n)}function IR(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===
e[i])?t[t.length-1]-e[e.length-1]:0}function RR(t,e){let{routesMeta:r}=t,n={},i="/",a=[];for(let o=0;o<
r.length;++o){let s=r[o],l=o===r.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=na({path:s.relativePath,
caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(n,c.params);let d=s.route;a.
push({params:n,pathname:Ar([i,c.pathname]),pathnameBase:FR(Ar([i,c.pathnameBase])),route:d}),c.pathnameBase!==
"/"&&(i=Ar([i,c.pathnameBase]))}return a}function na(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=PR(t.path,t.caseSensitive,
t.end),i=e.match(r);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:n.
reduce((u,c,d)=>{let{paramName:f,isOptional:m}=c;if(f==="*"){let g=s[d]||"";o=a.slice(0,a.length-g.length).
replace(/(.)\/+$/,"$1")}let w=s[d];return m&&!w?u[f]=void 0:u[f]=AR(w||"",f),u},{}),pathname:a,pathnameBase:o,
pattern:t}}function PR(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),ra(t==="*"||!t.endsWith("*")||t.
endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" bec\
ause the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('\
please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").
replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,s,l)=>(n.push({
paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"\
*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$\
))"),[new RegExp(i,e?void 0:"i"),n]}function DR(t){try{return decodeURI(t)}catch(e){return ra(!1,'Th\
e URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably d\
ue to a bad percent '+("encoding ("+e+").")),t}}function AR(t,e){try{return decodeURIComponent(t)}catch(r){
return ra(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'"\
 is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function Gr(t,e){
if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?
e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function Xm(t,e){e===void 0&&
(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?pr(t):t;return{pathname:r?r.startsWith(
"/")?r:NR(r,e):e,search:BR(n),hash:MR(i)}}function NR(t,e){let r=e.replace(/\/+$/,"").split("/");return t.
split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}
function Hm(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"\
` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively\
 you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for y\
ou.'}function GE(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function vl(t,e){
let r=GE(t);return e?r.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}
function wl(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=pr(t):(i=Le({},t),J(!i.pathname||
!i.pathname.includes("?"),Hm("?","pathname","search",i)),J(!i.pathname||!i.pathname.includes("#"),Hm(
"#","pathname","hash",i)),J(!i.search||!i.search.includes("#"),Hm("#","search","hash",i)));let a=t===
""||i.pathname==="",o=a?"/":i.pathname,s;if(o==null)s=r;else if(n){let d=e.length===0?[]:e[e.length-
1].replace(/^\//,"").split("/");if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),
d.pop();i.pathname=f.join("/")}s="/"+d.join("/")}else{let d=e.length-1;if(o.startsWith("..")){let f=o.
split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}s=d>=0?e[d]:"/"}let l=Xm(i,s),u=o&&
o!=="/"&&o.endsWith("/"),c=(a||o===".")&&r.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.
pathname+="/"),l}var Ar=t=>t.join("/").replace(/\/\/+/g,"/"),FR=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BR=t=>!t||
t==="?"?"":t.startsWith("?")?t:"?"+t,MR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;var Eo=class{constructor(e,r,n,i){i===void 0&&(i=!1),this.status=e,this.statusText=r||"",this.internal=
i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function xl(t){return t!=null&&
typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var XE=[
"post","put","patch","delete"],OR=new Set(XE),LR=["get",...XE],UR=new Set(LR),zR=new Set([301,302,303,
307,308]),jR=new Set([307,308]),qm={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,
formEncType:void 0,formData:void 0,json:void 0,text:void 0},YE={state:"idle",data:void 0,formMethod:void 0,
formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},wo={state:"unblocked",
proceed:void 0,reset:void 0,location:void 0},QE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,HR=t=>({hasErrorBoundary:!!t.
hasErrorBoundary}),ZE="remix-router-transitions";function Ym(t){let e=t.window?t.window:typeof window<
"u"?window:void 0,r=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",n=!r;J(
t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)
i=t.mapRouteProperties;else if(t.detectErrorBoundary){let _=t.detectErrorBoundary;i=k=>({hasErrorBoundary:_(
k)})}else i=HR;let a={},o=Vm(t.routes,i,void 0,a),s,l=t.basename||"/",u=Le({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,
v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1},t.future),c=null,d=new Set,f=null,
m=null,w=null,g=t.hydrationData!=null,E=wn(o,t.history.location,l),p=null;if(E==null){let _=fr(404,{
pathname:t.history.location.pathname}),{matches:k,route:R}=zE(o);E=k,p={[R.id]:_}}let h,y=E.some(_=>_.
route.lazy),x=E.some(_=>_.route.loader);if(y)h=!1;else if(!x)h=!0;else if(u.v7_partialHydration){let _=t.
hydrationData?t.hydrationData.loaderData:null,k=t.hydrationData?t.hydrationData.errors:null;h=E.every(
R=>R.route.loader&&R.route.loader.hydrate!==!0&&(_&&_[R.route.id]!==void 0||k&&k[R.route.id]!==void 0))}else
h=t.hydrationData!=null;let T,v={historyAction:t.history.action,location:t.history.location,matches:E,
initialized:h,navigation:qm,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,
revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&
t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||p,fetchers:new Map,
blockers:new Map},S=Re.Pop,C=!1,D,F=!1,L=new Map,de=null,q=!1,je=!1,ht=[],Je=[],le=new Map,Be=0,Er=-1,
Un=new Map,Ht=new Set,qt=new Map,zn=new Map,_r=new Set,Mi=new Map,Oi=new Map,mp=!1;function NC(){if(c=
t.history.listen(_=>{let{action:k,location:R,delta:B}=_;if(mp){mp=!1;return}ra(Oi.size===0||B!=null,
"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-ru\
n/router. This will fail silently in production. This can happen if you are navigating outside the r\
outer via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.\
  This can also happen if you are using createHashRouter and the user manually changes the URL.");let H=Wv(
{currentLocation:v.location,nextLocation:R,historyAction:k});if(H&&B!=null){mp=!0,t.history.go(B*-1),
vu(H,{state:"blocked",location:R,proceed(){vu(H,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),
t.history.go(B)},reset(){let re=new Map(v.blockers);re.set(H,wo),$t({blockers:re})}});return}return Li(
k,R)}),r){eP(e,L);let _=()=>tP(e,L);e.addEventListener("pagehide",_),de=()=>e.removeEventListener("p\
agehide",_)}return v.initialized||Li(Re.Pop,v.location,{initialHydration:!0}),T}function FC(){c&&c(),
de&&de(),d.clear(),D&&D.abort(),v.fetchers.forEach((_,k)=>yu(k)),v.blockers.forEach((_,k)=>Vv(k))}function BC(_){
return d.add(_),()=>d.delete(_)}function $t(_,k){k===void 0&&(k={}),v=Le({},v,_);let R=[],B=[];u.v7_fetcherPersist&&
v.fetchers.forEach((H,re)=>{H.state==="idle"&&(_r.has(re)?B.push(re):R.push(re))}),[...d].forEach(H=>H(
v,{deletedFetchers:B,unstable_viewTransitionOpts:k.viewTransitionOpts,unstable_flushSync:k.flushSync===
!0})),u.v7_fetcherPersist&&(R.forEach(H=>v.fetchers.delete(H)),B.forEach(H=>yu(H)))}function ys(_,k,R){
var B,H;let{flushSync:re}=R===void 0?{}:R,X=v.actionData!=null&&v.navigation.formMethod!=null&&Dr(v.
navigation.formMethod)&&v.navigation.state==="loading"&&((B=_.state)==null?void 0:B._isRedirect)!==!0,
K;k.actionData?Object.keys(k.actionData).length>0?K=k.actionData:K=null:X?K=v.actionData:K=null;let $=k.
loaderData?UE(v.loaderData,k.loaderData,k.matches||[],k.errors):v.loaderData,oe=v.blockers;oe.size>0&&
(oe=new Map(oe),oe.forEach((ve,lt)=>oe.set(lt,wo)));let et=C===!0||v.navigation.formMethod!=null&&Dr(
v.navigation.formMethod)&&((H=_.state)==null?void 0:H._isRedirect)!==!0;s&&(o=s,s=void 0),q||S===Re.
Pop||(S===Re.Push?t.history.push(_,_.state):S===Re.Replace&&t.history.replace(_,_.state));let ne;if(S===
Re.Pop){let ve=L.get(v.location.pathname);ve&&ve.has(_.pathname)?ne={currentLocation:v.location,nextLocation:_}:
L.has(_.pathname)&&(ne={currentLocation:_,nextLocation:v.location})}else if(F){let ve=L.get(v.location.
pathname);ve?ve.add(_.pathname):(ve=new Set([_.pathname]),L.set(v.location.pathname,ve)),ne={currentLocation:v.
location,nextLocation:_}}$t(Le({},k,{actionData:K,loaderData:$,historyAction:S,location:_,initialized:!0,
navigation:qm,revalidation:"idle",restoreScrollPosition:Gv(_,k.matches||v.matches),preventScrollReset:et,
blockers:oe}),{viewTransitionOpts:ne,flushSync:re===!0}),S=Re.Pop,C=!1,F=!1,q=!1,je=!1,ht=[],Je=[]}async function Uv(_,k){
if(typeof _=="number"){t.history.go(_);return}let R=Wm(v.location,v.matches,l,u.v7_prependBasename,_,
u.v7_relativeSplatPath,k?.fromRouteId,k?.relative),{path:B,submission:H,error:re}=NE(u.v7_normalizeFormMethod,
!1,R,k),X=v.location,K=yl(v.location,B,k&&k.state);K=Le({},K,t.history.encodeLocation(K));let $=k&&k.
replace!=null?k.replace:void 0,oe=Re.Push;$===!0?oe=Re.Replace:$===!1||H!=null&&Dr(H.formMethod)&&H.
formAction===v.location.pathname+v.location.search&&(oe=Re.Replace);let et=k&&"preventScrollReset"in
k?k.preventScrollReset===!0:void 0,ne=(k&&k.unstable_flushSync)===!0,ve=Wv({currentLocation:X,nextLocation:K,
historyAction:oe});if(ve){vu(ve,{state:"blocked",location:K,proceed(){vu(ve,{state:"proceeding",proceed:void 0,
reset:void 0,location:K}),Uv(_,k)},reset(){let lt=new Map(v.blockers);lt.set(ve,wo),$t({blockers:lt})}});
return}return await Li(oe,K,{submission:H,pendingError:re,preventScrollReset:et,replace:k&&k.replace,
enableViewTransition:k&&k.unstable_viewTransition,flushSync:ne})}function MC(){if(gp(),$t({revalidation:"\
loading"}),v.navigation.state!=="submitting"){if(v.navigation.state==="idle"){Li(v.historyAction,v.location,
{startUninterruptedRevalidation:!0});return}Li(S||v.historyAction,v.navigation.location,{overrideNavigation:v.
navigation})}}async function Li(_,k,R){D&&D.abort(),D=null,S=_,q=(R&&R.startUninterruptedRevalidation)===
!0,VC(v.location,v.matches),C=(R&&R.preventScrollReset)===!0,F=(R&&R.enableViewTransition)===!0;let B=s||
o,H=R&&R.overrideNavigation,re=wn(B,k,l),X=(R&&R.flushSync)===!0;if(!re){let lt=fr(404,{pathname:k.pathname}),
{matches:nr,route:tt}=zE(B);yp(),ys(k,{matches:nr,loaderData:{},errors:{[tt.id]:lt}},{flushSync:X});
return}if(v.initialized&&!je&&GR(v.location,k)&&!(R&&R.submission&&Dr(R.submission.formMethod))){ys(
k,{matches:re},{flushSync:X});return}D=new AbortController;let K=pl(t.history,k,D.signal,R&&R.submission),
$,oe;if(R&&R.pendingError)oe={[ml(re).route.id]:R.pendingError};else if(R&&R.submission&&Dr(R.submission.
formMethod)){let lt=await OC(K,k,R.submission,re,{replace:R.replace,flushSync:X});if(lt.shortCircuited)
return;$=lt.pendingActionData,oe=lt.pendingActionError,H=$m(k,R.submission),X=!1,K=new Request(K.url,
{signal:K.signal})}let{shortCircuited:et,loaderData:ne,errors:ve}=await LC(K,k,re,H,R&&R.submission,
R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,X,$,oe);et||(D=null,ys(k,Le({matches:re},
$?{actionData:$}:{},{loaderData:ne,errors:ve})))}async function OC(_,k,R,B,H){H===void 0&&(H={}),gp();
let re=ZR(k,R);$t({navigation:re},{flushSync:H.flushSync===!0});let X,K=Gm(B,k);if(!K.route.action&&
!K.route.lazy)X={type:Oe.error,error:fr(405,{method:_.method,pathname:k.pathname,routeId:K.route.id})};else if(X=
await fl("action",_,K,B,a,i,l,u.v7_relativeSplatPath),_.signal.aborted)return{shortCircuited:!0};if(xo(
X)){let $;return H&&H.replace!=null?$=H.replace:$=X.location===v.location.pathname+v.location.search,
await vs(v,X,{submission:R,replace:$}),{shortCircuited:!0}}if(gl(X)){let $=ml(B,K.route.id);return(H&&
H.replace)!==!0&&(S=Re.Push),{pendingActionData:{},pendingActionError:{[$.route.id]:X.error}}}if(ta(
X))throw fr(400,{type:"defer-action"});return{pendingActionData:{[K.route.id]:X.data}}}async function LC(_,k,R,B,H,re,X,K,$,oe,et){
let ne=B||$m(k,H),ve=H||re||qE(ne),lt=s||o,[nr,tt]=FE(t.history,v,R,ve,k,u.v7_partialHydration&&K===
!0,je,ht,Je,_r,qt,Ht,lt,l,oe,et);if(yp(ge=>!(R&&R.some(Ce=>Ce.route.id===ge))||nr&&nr.some(Ce=>Ce.route.
id===ge)),Er=++Be,nr.length===0&&tt.length===0){let ge=qv();return ys(k,Le({matches:R,loaderData:{},
errors:et||null},oe?{actionData:oe}:{},ge?{fetchers:new Map(v.fetchers)}:{}),{flushSync:$}),{shortCircuited:!0}}
if(!q&&(!u.v7_partialHydration||!K)){tt.forEach(Ce=>{let zr=v.fetchers.get(Ce.key),xu=hl(void 0,zr?zr.
data:void 0);v.fetchers.set(Ce.key,xu)});let ge=oe||v.actionData;$t(Le({navigation:ne},ge?Object.keys(
ge).length===0?{actionData:null}:{actionData:ge}:{},tt.length>0?{fetchers:new Map(v.fetchers)}:{}),{
flushSync:$})}tt.forEach(ge=>{le.has(ge.key)&&Hn(ge.key),ge.controller&&le.set(ge.key,ge.controller)});
let Ua=()=>tt.forEach(ge=>Hn(ge.key));D&&D.signal.addEventListener("abort",Ua);let{results:vp,loaderResults:za,
fetcherResults:qn}=await zv(v.matches,R,nr,tt,_);if(_.signal.aborted)return{shortCircuited:!0};D&&D.
signal.removeEventListener("abort",Ua),tt.forEach(ge=>le.delete(ge.key));let Ui=jE(vp);if(Ui){if(Ui.
idx>=nr.length){let ge=tt[Ui.idx-nr.length].key;Ht.add(ge)}return await vs(v,Ui.result,{replace:X}),
{shortCircuited:!0}}let{loaderData:wp,errors:xp}=LE(v,R,nr,za,et,tt,qn,Mi);Mi.forEach((ge,Ce)=>{ge.subscribe(
zr=>{(zr||ge.done)&&Mi.delete(Ce)})});let Ep=qv(),ja=$v(Er),wu=Ep||ja||tt.length>0;return Le({loaderData:wp,
errors:xp},wu?{fetchers:new Map(v.fetchers)}:{})}function UC(_,k,R,B){if(n)throw new Error("router.f\
etch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher\
() method in the body of your component. Try moving it to a useEffect or a callback.");le.has(_)&&Hn(
_);let H=(B&&B.unstable_flushSync)===!0,re=s||o,X=Wm(v.location,v.matches,l,u.v7_prependBasename,R,u.
v7_relativeSplatPath,k,B?.relative),K=wn(re,X,l);if(!K){ws(_,k,fr(404,{pathname:X}),{flushSync:H});return}
let{path:$,submission:oe,error:et}=NE(u.v7_normalizeFormMethod,!0,X,B);if(et){ws(_,k,et,{flushSync:H});
return}let ne=Gm(K,$);if(C=(B&&B.preventScrollReset)===!0,oe&&Dr(oe.formMethod)){zC(_,k,$,ne,K,H,oe);
return}qt.set(_,{routeId:k,path:$}),jC(_,k,$,ne,K,H,oe)}async function zC(_,k,R,B,H,re,X){if(gp(),qt.
delete(_),!B.route.action&&!B.route.lazy){let Ce=fr(405,{method:X.formMethod,pathname:R,routeId:k});
ws(_,k,Ce,{flushSync:re});return}let K=v.fetchers.get(_);jn(_,JR(X,K),{flushSync:re});let $=new AbortController,
oe=pl(t.history,R,$.signal,X);le.set(_,$);let et=Be,ne=await fl("action",oe,B,H,a,i,l,u.v7_relativeSplatPath);
if(oe.signal.aborted){le.get(_)===$&&le.delete(_);return}if(_r.has(_)){jn(_,di(void 0));return}if(xo(
ne))if(le.delete(_),Er>et){jn(_,di(void 0));return}else return Ht.add(_),jn(_,hl(X)),vs(v,ne,{fetcherSubmission:X});
if(gl(ne)){ws(_,k,ne.error);return}if(ta(ne))throw fr(400,{type:"defer-action"});let ve=v.navigation.
location||v.location,lt=pl(t.history,ve,$.signal),nr=s||o,tt=v.navigation.state!=="idle"?wn(nr,v.navigation.
location,l):v.matches;J(tt,"Didn't find any matches after fetcher action");let Ua=++Be;Un.set(_,Ua);
let vp=hl(X,ne.data);v.fetchers.set(_,vp);let[za,qn]=FE(t.history,v,tt,X,ve,!1,je,ht,Je,_r,qt,Ht,nr,
l,{[B.route.id]:ne.data},void 0);qn.filter(Ce=>Ce.key!==_).forEach(Ce=>{let zr=Ce.key,xu=v.fetchers.
get(zr),KC=hl(void 0,xu?xu.data:void 0);v.fetchers.set(zr,KC),le.has(zr)&&Hn(zr),Ce.controller&&le.set(
zr,Ce.controller)}),$t({fetchers:new Map(v.fetchers)});let Ui=()=>qn.forEach(Ce=>Hn(Ce.key));$.signal.
addEventListener("abort",Ui);let{results:wp,loaderResults:xp,fetcherResults:Ep}=await zv(v.matches,tt,
za,qn,lt);if($.signal.aborted)return;$.signal.removeEventListener("abort",Ui),Un.delete(_),le.delete(
_),qn.forEach(Ce=>le.delete(Ce.key));let ja=jE(wp);if(ja){if(ja.idx>=za.length){let Ce=qn[ja.idx-za.
length].key;Ht.add(Ce)}return vs(v,ja.result)}let{loaderData:wu,errors:ge}=LE(v,v.matches,za,xp,void 0,
qn,Ep,Mi);if(v.fetchers.has(_)){let Ce=di(ne.data);v.fetchers.set(_,Ce)}$v(Ua),v.navigation.state===
"loading"&&Ua>Er?(J(S,"Expected pending action"),D&&D.abort(),ys(v.navigation.location,{matches:tt,loaderData:wu,
errors:ge,fetchers:new Map(v.fetchers)})):($t({errors:ge,loaderData:UE(v.loaderData,wu,tt,ge),fetchers:new Map(
v.fetchers)}),je=!1)}async function jC(_,k,R,B,H,re,X){let K=v.fetchers.get(_);jn(_,hl(X,K?K.data:void 0),
{flushSync:re});let $=new AbortController,oe=pl(t.history,R,$.signal);le.set(_,$);let et=Be,ne=await fl(
"loader",oe,B,H,a,i,l,u.v7_relativeSplatPath);if(ta(ne)&&(ne=await t_(ne,oe.signal,!0)||ne),le.get(_)===
$&&le.delete(_),!oe.signal.aborted){if(_r.has(_)){jn(_,di(void 0));return}if(xo(ne))if(Er>et){jn(_,di(
void 0));return}else{Ht.add(_),await vs(v,ne);return}if(gl(ne)){ws(_,k,ne.error);return}J(!ta(ne),"U\
nhandled fetcher deferred data"),jn(_,di(ne.data))}}async function vs(_,k,R){let{submission:B,fetcherSubmission:H,
replace:re}=R===void 0?{}:R;k.revalidate&&(je=!0);let X=yl(_.location,k.location,{_isRedirect:!0});if(J(
X,"Expected a location on the redirect navigation"),r){let ve=!1;if(k.reloadDocument)ve=!0;else if(QE.
test(k.location)){let lt=t.history.createURL(k.location);ve=lt.origin!==e.location.origin||Gr(lt.pathname,
l)==null}if(ve){re?e.location.replace(k.location):e.location.assign(k.location);return}}D=null;let K=re===
!0?Re.Replace:Re.Push,{formMethod:$,formAction:oe,formEncType:et}=_.navigation;!B&&!H&&$&&oe&&et&&(B=
qE(_.navigation));let ne=B||H;if(jR.has(k.status)&&ne&&Dr(ne.formMethod))await Li(K,X,{submission:Le(
{},ne,{formAction:k.location}),preventScrollReset:C});else{let ve=$m(X,B);await Li(K,X,{overrideNavigation:ve,
fetcherSubmission:H,preventScrollReset:C})}}async function zv(_,k,R,B,H){let re=await Promise.all([...R.
map($=>fl("loader",H,$,k,a,i,l,u.v7_relativeSplatPath)),...B.map($=>$.matches&&$.match&&$.controller?
fl("loader",pl(t.history,$.path,$.controller.signal),$.match,$.matches,a,i,l,u.v7_relativeSplatPath):
{type:Oe.error,error:fr(404,{pathname:$.path})})]),X=re.slice(0,R.length),K=re.slice(R.length);return await Promise.
all([HE(_,R,X,X.map(()=>H.signal),!1,v.loaderData),HE(_,B.map($=>$.match),K,B.map($=>$.controller?$.
controller.signal:null),!0)]),{results:re,loaderResults:X,fetcherResults:K}}function gp(){je=!0,ht.push(
...yp()),qt.forEach((_,k)=>{le.has(k)&&(Je.push(k),Hn(k))})}function jn(_,k,R){R===void 0&&(R={}),v.
fetchers.set(_,k),$t({fetchers:new Map(v.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function ws(_,k,R,B){
B===void 0&&(B={});let H=ml(v.matches,k);yu(_),$t({errors:{[H.route.id]:R},fetchers:new Map(v.fetchers)},
{flushSync:(B&&B.flushSync)===!0})}function jv(_){return u.v7_fetcherPersist&&(zn.set(_,(zn.get(_)||
0)+1),_r.has(_)&&_r.delete(_)),v.fetchers.get(_)||YE}function yu(_){let k=v.fetchers.get(_);le.has(_)&&
!(k&&k.state==="loading"&&Un.has(_))&&Hn(_),qt.delete(_),Un.delete(_),Ht.delete(_),_r.delete(_),v.fetchers.
delete(_)}function HC(_){if(u.v7_fetcherPersist){let k=(zn.get(_)||0)-1;k<=0?(zn.delete(_),_r.add(_)):
zn.set(_,k)}else yu(_);$t({fetchers:new Map(v.fetchers)})}function Hn(_){let k=le.get(_);J(k,"Expect\
ed fetch controller: "+_),k.abort(),le.delete(_)}function Hv(_){for(let k of _){let R=jv(k),B=di(R.data);
v.fetchers.set(k,B)}}function qv(){let _=[],k=!1;for(let R of Ht){let B=v.fetchers.get(R);J(B,"Expec\
ted fetcher: "+R),B.state==="loading"&&(Ht.delete(R),_.push(R),k=!0)}return Hv(_),k}function $v(_){let k=[];
for(let[R,B]of Un)if(B<_){let H=v.fetchers.get(R);J(H,"Expected fetcher: "+R),H.state==="loading"&&(Hn(
R),Un.delete(R),k.push(R))}return Hv(k),k.length>0}function qC(_,k){let R=v.blockers.get(_)||wo;return Oi.
get(_)!==k&&Oi.set(_,k),R}function Vv(_){v.blockers.delete(_),Oi.delete(_)}function vu(_,k){let R=v.
blockers.get(_)||wo;J(R.state==="unblocked"&&k.state==="blocked"||R.state==="blocked"&&k.state==="bl\
ocked"||R.state==="blocked"&&k.state==="proceeding"||R.state==="blocked"&&k.state==="unblocked"||R.state===
"proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+k.state);let B=new Map(
v.blockers);B.set(_,k),$t({blockers:B})}function Wv(_){let{currentLocation:k,nextLocation:R,historyAction:B}=_;
if(Oi.size===0)return;Oi.size>1&&ra(!1,"A router only supports one blocker at a time");let H=Array.from(
Oi.entries()),[re,X]=H[H.length-1],K=v.blockers.get(re);if(!(K&&K.state==="proceeding")&&X({currentLocation:k,
nextLocation:R,historyAction:B}))return re}function yp(_){let k=[];return Mi.forEach((R,B)=>{(!_||_(
B))&&(R.cancel(),k.push(B),Mi.delete(B))}),k}function $C(_,k,R){if(f=_,w=k,m=R||null,!g&&v.navigation===
qm){g=!0;let B=Gv(v.location,v.matches);B!=null&&$t({restoreScrollPosition:B})}return()=>{f=null,w=null,
m=null}}function Kv(_,k){return m&&m(_,k.map(B=>VE(B,v.loaderData)))||_.key}function VC(_,k){if(f&&w){
let R=Kv(_,k);f[R]=w()}}function Gv(_,k){if(f){let R=Kv(_,k),B=f[R];if(typeof B=="number")return B}return null}
function WC(_){a={},s=Vm(_,i,void 0,a)}return T={get basename(){return l},get future(){return u},get state(){
return v},get routes(){return o},get window(){return e},initialize:NC,subscribe:BC,enableScrollRestoration:$C,
navigate:Uv,fetch:UC,revalidate:MC,createHref:_=>t.history.createHref(_),encodeLocation:_=>t.history.
encodeLocation(_),getFetcher:jv,deleteFetcher:HC,dispose:FC,getBlocker:qC,deleteBlocker:Vv,_internalFetchControllers:le,
_internalActiveDeferreds:Mi,_internalSetRoutes:WC},T}var s4=Symbol("deferred");function qR(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function Wm(t,e,r,n,i,a,o,s){
let l,u;if(o){l=[];for(let d of e)if(l.push(d),d.route.id===o){u=d;break}}else l=e,u=e[e.length-1];let c=wl(
i||".",vl(l,a),Gr(t.pathname,r)||t.pathname,s==="path");return i==null&&(c.search=t.search,c.hash=t.
hash),(i==null||i===""||i===".")&&u&&u.route.index&&!Qm(c.search)&&(c.search=c.search?c.search.replace(
/^\?/,"?index&"):"?index"),n&&r!=="/"&&(c.pathname=c.pathname==="/"?r:Ar([r,c.pathname])),Kr(c)}function NE(t,e,r,n){
if(!n||!qR(n))return{path:r};if(n.formMethod&&!QR(n.formMethod))return{path:r,error:fr(405,{method:n.
formMethod})};let i=()=>({path:r,error:fr(400,{type:"invalid-body"})}),a=n.formMethod||"get",o=t?a.toUpperCase():
a.toLowerCase(),s=e_(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Dr(o))return i();let f=typeof n.
body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.
entries()).reduce((m,w)=>{let[g,E]=w;return""+m+g+"="+E+`
`},""):String(n.body);return{path:r,submission:{formMethod:o,formAction:s,formEncType:n.formEncType,
formData:void 0,json:void 0,text:f}}}else if(n.formEncType==="application/json"){if(!Dr(o))return i();
try{let f=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:o,formAction:s,
formEncType:n.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}J(typeof FormData==
"function","FormData is not available in this environment");let l,u;if(n.formData)l=Km(n.formData),u=
n.formData;else if(n.body instanceof FormData)l=Km(n.body),u=n.body;else if(n.body instanceof URLSearchParams)
l=n.body,u=OE(l);else if(n.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(
n.body),u=OE(l)}catch{return i()}let c={formMethod:o,formAction:s,formEncType:n&&n.formEncType||"app\
lication/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Dr(c.formMethod))return{path:r,
submission:c};let d=pr(r);return e&&d.search&&Qm(d.search)&&l.append("index",""),d.search="?"+l,{path:Kr(
d),submission:c}}function $R(t,e){let r=t;if(e){let n=t.findIndex(i=>i.route.id===e);n>=0&&(r=t.slice(
0,n))}return r}function FE(t,e,r,n,i,a,o,s,l,u,c,d,f,m,w,g){let E=g?Object.values(g)[0]:w?Object.values(
w)[0]:void 0,p=t.createURL(e.location),h=t.createURL(i),y=g?Object.keys(g)[0]:void 0,T=$R(r,y).filter(
(S,C)=>{if(a)return VR(e,S.route);if(S.route.lazy)return!0;if(S.route.loader==null)return!1;if(WR(e.
loaderData,e.matches[C],S)||s.some(L=>L===S.route.id))return!0;let D=e.matches[C],F=S;return BE(S,Le(
{currentUrl:p,currentParams:D.params,nextUrl:h,nextParams:F.params},n,{actionResult:E,defaultShouldRevalidate:o||
p.pathname+p.search===h.pathname+h.search||p.search!==h.search||JE(D,F)}))}),v=[];return c.forEach((S,C)=>{
if(a||!r.some(q=>q.route.id===S.routeId)||u.has(C))return;let D=wn(f,S.path,m);if(!D){v.push({key:C,
routeId:S.routeId,path:S.path,matches:null,match:null,controller:null});return}let F=e.fetchers.get(
C),L=Gm(D,S.path),de=!1;d.has(C)?de=!1:l.includes(C)?de=!0:F&&F.state!=="idle"&&F.data===void 0?de=o:
de=BE(L,Le({currentUrl:p,currentParams:e.matches[e.matches.length-1].params,nextUrl:h,nextParams:r[r.
length-1].params},n,{actionResult:E,defaultShouldRevalidate:o})),de&&v.push({key:C,routeId:S.routeId,
path:S.path,matches:D,match:L,controller:new AbortController})}),[T,v]}function VR(t,e){return e.loader?
e.loader.hydrate?!0:t.loaderData[e.id]===void 0&&(!t.errors||t.errors[e.id]===void 0):!1}function WR(t,e,r){
let n=!e||r.route.id!==e.route.id,i=t[r.route.id]===void 0;return n||i}function JE(t,e){let r=t.route.
path;return t.pathname!==e.pathname||r!=null&&r.endsWith("*")&&t.params["*"]!==e.params["*"]}function BE(t,e){
if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate(e);if(typeof r=="boolean")return r}return e.
defaultShouldRevalidate}async function ME(t,e,r){if(!t.lazy)return;let n=await t.lazy();if(!t.lazy)return;
let i=r[t.id];J(i,"No route found in manifest");let a={};for(let o in n){let l=i[o]!==void 0&&o!=="h\
asErrorBoundary";ra(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function\
 is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),
!l&&!vR.has(o)&&(a[o]=n[o])}Object.assign(i,a),Object.assign(i,Le({},e(i),{lazy:void 0}))}async function fl(t,e,r,n,i,a,o,s,l){
l===void 0&&(l={});let u,c,d,f=g=>{let E,p=new Promise((h,y)=>E=y);return d=()=>E(),e.signal.addEventListener(
"abort",d),Promise.race([g({request:e,params:r.params,context:l.requestContext}),p])};try{let g=r.route[t];
if(r.route.lazy)if(g){let E,p=await Promise.all([f(g).catch(h=>{E=h}),ME(r.route,a,i)]);if(E)throw E;
c=p[0]}else if(await ME(r.route,a,i),g=r.route[t],g)c=await f(g);else if(t==="action"){let E=new URL(
e.url),p=E.pathname+E.search;throw fr(405,{method:e.method,pathname:p,routeId:r.route.id})}else return{
type:Oe.data,data:void 0};else if(g)c=await f(g);else{let E=new URL(e.url),p=E.pathname+E.search;throw fr(
404,{pathname:p})}J(c!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('\
"'+r.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value o\
r `null`.")}catch(g){u=Oe.error,c=g}finally{d&&e.signal.removeEventListener("abort",d)}if(YR(c)){let g=c.
status;if(zR.has(g)){let p=c.headers.get("Location");if(J(p,"Redirects returned/thrown from loaders/\
actions must have a Location header"),!QE.test(p))p=Wm(new URL(e.url),n.slice(0,n.indexOf(r)+1),o,!0,
p,s);else if(!l.isStaticRequest){let h=new URL(e.url),y=p.startsWith("//")?new URL(h.protocol+p):new URL(
p),x=Gr(y.pathname,o)!=null;y.origin===h.origin&&x&&(p=y.pathname+y.search+y.hash)}if(l.isStaticRequest)
throw c.headers.set("Location",p),c;return{type:Oe.redirect,status:g,location:p,revalidate:c.headers.
get("X-Remix-Revalidate")!==null,reloadDocument:c.headers.get("X-Remix-Reload-Document")!==null}}if(l.
isRouteRequest)throw{type:u===Oe.error?Oe.error:Oe.data,response:c};let E;try{let p=c.headers.get("C\
ontent-Type");p&&/\bapplication\/json\b/.test(p)?E=await c.json():E=await c.text()}catch(p){return{type:Oe.
error,error:p}}return u===Oe.error?{type:u,error:new Eo(g,c.statusText,E),headers:c.headers}:{type:Oe.
data,data:E,statusCode:c.status,headers:c.headers}}if(u===Oe.error)return{type:u,error:c};if(XR(c)){
var m,w;return{type:Oe.deferred,deferredData:c,statusCode:(m=c.init)==null?void 0:m.status,headers:((w=
c.init)==null?void 0:w.headers)&&new Headers(c.init.headers)}}return{type:Oe.data,data:c}}function pl(t,e,r,n){
let i=t.createURL(e_(e)).toString(),a={signal:r};if(n&&Dr(n.formMethod)){let{formMethod:o,formEncType:s}=n;
a.method=o.toUpperCase(),s==="application/json"?(a.headers=new Headers({"Content-Type":s}),a.body=JSON.
stringify(n.json)):s==="text/plain"?a.body=n.text:s==="application/x-www-form-urlencoded"&&n.formData?
a.body=Km(n.formData):a.body=n.formData}return new Request(i,a)}function Km(t){let e=new URLSearchParams;
for(let[r,n]of t.entries())e.append(r,typeof n=="string"?n:n.name);return e}function OE(t){let e=new FormData;
for(let[r,n]of t.entries())e.append(r,n);return e}function KR(t,e,r,n,i){let a={},o=null,s,l=!1,u={};
return r.forEach((c,d)=>{let f=e[d].route.id;if(J(!xo(c),"Cannot handle redirect results in processL\
oaderData"),gl(c)){let m=ml(t,f),w=c.error;n&&(w=Object.values(n)[0],n=void 0),o=o||{},o[m.route.id]==
null&&(o[m.route.id]=w),a[f]=void 0,l||(l=!0,s=xl(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else
ta(c)?(i.set(f,c.deferredData),a[f]=c.deferredData.data):a[f]=c.data,c.statusCode!=null&&c.statusCode!==
200&&!l&&(s=c.statusCode),c.headers&&(u[f]=c.headers)}),n&&(o=n,a[Object.keys(n)[0]]=void 0),{loaderData:a,
errors:o,statusCode:s||200,loaderHeaders:u}}function LE(t,e,r,n,i,a,o,s){let{loaderData:l,errors:u}=KR(
e,r,n,i,s);for(let c=0;c<a.length;c++){let{key:d,match:f,controller:m}=a[c];J(o!==void 0&&o[c]!==void 0,
"Did not find corresponding fetcher result");let w=o[c];if(!(m&&m.signal.aborted))if(gl(w)){let g=ml(
t.matches,f?.route.id);u&&u[g.route.id]||(u=Le({},u,{[g.route.id]:w.error})),t.fetchers.delete(d)}else if(xo(
w))J(!1,"Unhandled fetcher revalidation redirect");else if(ta(w))J(!1,"Unhandled fetcher deferred da\
ta");else{let g=di(w.data);t.fetchers.set(d,g)}}return{loaderData:l,errors:u}}function UE(t,e,r,n){let i=Le(
{},e);for(let a of r){let o=a.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&
a.route.loader&&(i[o]=t[o]),n&&n.hasOwnProperty(o))break}return i}function ml(t,e){return(e?t.slice(
0,t.findIndex(n=>n.route.id===e)+1):[...t]).reverse().find(n=>n.route.hasErrorBoundary===!0)||t[0]}function zE(t){
let e=t.length===1?t[0]:t.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{
matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function fr(t,e){let{pathname:r,routeId:n,
method:i,type:a}=e===void 0?{}:e,o="Unknown Server Error",s="Unknown @remix-run/router error";return t===
400?(o="Bad Request",i&&r&&n?s="You made a "+i+' request to "'+r+'" but '+('did not provide a `loade\
r` for route "'+n+'", ')+"so there is no way to handle the request.":a==="defer-action"?s="defer() i\
s not supported in actions":a==="invalid-body"&&(s="Unable to encode submission body")):t===403?(o="\
Forbidden",s='Route "'+n+'" does not match URL "'+r+'"'):t===404?(o="Not Found",s='No route matches \
URL "'+r+'"'):t===405&&(o="Method Not Allowed",i&&r&&n?s="You made a "+i.toUpperCase()+' request to \
"'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the \
request.":i&&(s='Invalid request method "'+i.toUpperCase()+'"')),new Eo(t||500,o,new Error(s),!0)}function jE(t){
for(let e=t.length-1;e>=0;e--){let r=t[e];if(xo(r))return{result:r,idx:e}}}function e_(t){let e=typeof t==
"string"?pr(t):t;return Kr(Le({},e,{hash:""}))}function GR(t,e){return t.pathname!==e.pathname||t.search!==
e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function ta(t){return t.type===Oe.
deferred}function gl(t){return t.type===Oe.error}function xo(t){return(t&&t.type)===Oe.redirect}function XR(t){
let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.
cancel=="function"&&typeof e.resolveData=="function"}function YR(t){return t!=null&&typeof t.status==
"number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function QR(t){return UR.has(t.toLowerCase())}function Dr(t){return OR.has(t.toLowerCase())}async function HE(t,e,r,n,i,a){
for(let o=0;o<r.length;o++){let s=r[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),
c=u!=null&&!JE(u,l)&&(a&&a[l.route.id])!==void 0;if(ta(s)&&(i||c)){let d=n[o];J(d,"Expected an Abort\
Signal for revalidating fetcher deferred result"),await t_(s,d,i).then(f=>{f&&(r[o]=f||r[o])})}}}async function t_(t,e,r){
if(r===void 0&&(r=!1),!await t.deferredData.resolveData(e)){if(r)try{return{type:Oe.data,data:t.deferredData.
unwrappedData}}catch(i){return{type:Oe.error,error:i}}return{type:Oe.data,data:t.deferredData.data}}}
function Qm(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Gm(t,e){let r=typeof e==
"string"?pr(e).search:e.search;if(t[t.length-1].route.index&&Qm(r||""))return t[t.length-1];let n=GE(
t);return n[n.length-1]}function qE(t){let{formMethod:e,formAction:r,formEncType:n,text:i,formData:a,
json:o}=t;if(!(!e||!r||!n)){if(i!=null)return{formMethod:e,formAction:r,formEncType:n,formData:void 0,
json:void 0,text:i};if(a!=null)return{formMethod:e,formAction:r,formEncType:n,formData:a,json:void 0,
text:void 0};if(o!==void 0)return{formMethod:e,formAction:r,formEncType:n,formData:void 0,json:o,text:void 0}}}
function $m(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,
formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,
formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function ZR(t,e){return{
state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,
formData:e.formData,json:e.json,text:e.text}}function hl(t,e){return t?{state:"loading",formMethod:t.
formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.
text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,
json:void 0,text:void 0,data:e}}function JR(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.
formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}
function di(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,
json:void 0,text:void 0,data:t}}function eP(t,e){try{let r=t.sessionStorage.getItem(ZE);if(r){let n=JSON.
parse(r);for(let[i,a]of Object.entries(n||{}))a&&Array.isArray(a)&&e.set(i,new Set(a||[]))}}catch{}}
function tP(t,e){if(e.size>0){let r={};for(let[n,i]of e)r[n]=[...i];try{t.sessionStorage.setItem(ZE,
JSON.stringify(r))}catch(n){ra(!1,"Failed to save applied view transitions in sessionStorage ("+n+")\
.")}}}function El(){return El=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){
var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},El.
apply(this,arguments)}var ia=O.createContext(null),_l=O.createContext(null);var Nr=O.createContext(null),Sl=O.createContext(null),hr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),
i_=O.createContext(null);function Jm(t,e){let{relative:r}=e===void 0?{}:e;aa()||J(!1);let{basename:n,
navigator:i}=O.useContext(Nr),{hash:a,pathname:o,search:s}=So(t,{relative:r}),l=o;return n!=="/"&&(l=
o==="/"?n:Ar([n,o])),i.createHref({pathname:l,search:s,hash:a})}function aa(){return O.useContext(Sl)!=
null}function fi(){return aa()||J(!1),O.useContext(Sl).location}function a_(t){O.useContext(Nr).static||O.useLayoutEffect(t)}function _o(){let{isDataRoute:t}=O.useContext(
hr);return t?gP():sP()}function sP(){aa()||J(!1);let t=O.useContext(ia),{basename:e,future:r,navigator:n}=O.useContext(
Nr),{matches:i}=O.useContext(hr),{pathname:a}=fi(),o=JSON.stringify(vl(i,r.v7_relativeSplatPath)),s=O.useRef(
!1);return a_(()=>{s.current=!0}),O.useCallback(function(u,c){if(c===void 0&&(c={}),!s.current)return;
if(typeof u=="number"){n.go(u);return}let d=wl(u,JSON.parse(o),a,c.relative==="path");t==null&&e!=="\
/"&&(d.pathname=d.pathname==="/"?e:Ar([e,d.pathname])),(c.replace?n.replace:n.push)(d,c.state,c)},[e,
n,o,a,t])}var lP=O.createContext(null);function o_(t){let e=O.useContext(hr).outlet;return e&&O.createElement(lP.Provider,{value:t},e)}function eg(){
let{matches:t}=O.useContext(hr),e=t[t.length-1];return e?e.params:{}}function So(t,e){let{relative:r}=e===
void 0?{}:e,{future:n}=O.useContext(Nr),{matches:i}=O.useContext(hr),{pathname:a}=fi(),o=JSON.stringify(
vl(i,n.v7_relativeSplatPath));return O.useMemo(()=>wl(t,JSON.parse(o),a,r==="path"),[t,o,a,r])}function s_(t,e,r,n){aa()||J(!1);let{navigator:i}=O.useContext(Nr),{matches:a}=O.useContext(hr),o=a[a.
length-1],s=o?o.params:{},l=o?o.pathname:"/",u=o?o.pathnameBase:"/",c=o&&o.route,d=fi(),f;if(e){var m;
let h=typeof e=="string"?pr(e):e;u==="/"||(m=h.pathname)!=null&&m.startsWith(u)||J(!1),f=h}else f=d;
let w=f.pathname||"/",g=u==="/"?w:w.slice(u.length)||"/",E=wn(t,{pathname:g}),p=fP(E&&E.map(h=>Object.
assign({},h,{params:Object.assign({},s,h.params),pathname:Ar([u,i.encodeLocation?i.encodeLocation(h.
pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:Ar([u,i.encodeLocation?i.encodeLocation(
h.pathnameBase).pathname:h.pathnameBase])})),a,r,n);return e&&p?O.createElement(Sl.Provider,{value:{
location:El({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Re.Pop}},p):
p}function uP(){let t=c_(),e=xl(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(
t),r=t instanceof Error?t.stack:null,n="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:n},
a={padding:"2px 4px",backgroundColor:n};return O.createElement(O.Fragment,null,O.createElement("h2",
null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),r?O.createElement(
"pre",{style:i},r):null,null)}var cP=O.createElement(uP,null),Zm=class extends O.Component{constructor(e){
super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){
return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!==
"idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.
error!==void 0?e.error:r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){
console.error("React Router caught the following error during render",e,r)}render(){return this.state.
error!==void 0?O.createElement(hr.Provider,{value:this.props.routeContext},O.createElement(i_.Provider,
{value:this.state.error,children:this.props.component})):this.props.children}};function dP(t){let{routeContext:e,
match:r,children:n}=t,i=O.useContext(ia);return i&&i.static&&i.staticContext&&(r.route.errorElement||
r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),O.createElement(hr.Provider,
{value:e},n)}function fP(t,e,r,n){var i;if(e===void 0&&(e=[]),r===void 0&&(r=null),n===void 0&&(n=null),
t==null){var a;if((a=r)!=null&&a.errors)t=r.matches;else return null}let o=t,s=(i=r)==null?void 0:i.
errors;if(s!=null){let c=o.findIndex(d=>d.route.id&&s?.[d.route.id]);c>=0||J(!1),o=o.slice(0,Math.min(
o.length,c+1))}let l=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.
route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.loader&&d.route.id&&r.loaderData[d.
route.id]===void 0&&(!r.errors||r.errors[d.route.id]===void 0)){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];
break}}return o.reduceRight((c,d,f)=>{let m,w=!1,g=null,E=null;r&&(m=s&&d.route.id?s[d.route.id]:void 0,
g=d.route.errorElement||cP,l&&(u<0&&f===0?(yP("route-fallback",!1,"No `HydrateFallback` element prov\
ided to render during initial hydration"),w=!0,E=null):u===f&&(w=!0,E=d.route.hydrateFallbackElement||
null)));let p=e.concat(o.slice(0,f+1)),h=()=>{let y;return m?y=g:w?y=E:d.route.Component?y=O.createElement(
d.route.Component,null):d.route.element?y=d.route.element:y=c,O.createElement(dP,{match:d,routeContext:{
outlet:c,matches:p,isDataRoute:r!=null},children:y})};return r&&(d.route.ErrorBoundary||d.route.errorElement||
f===0)?O.createElement(Zm,{location:r.location,revalidation:r.revalidation,component:g,error:m,children:h(),
routeContext:{outlet:null,matches:p,isDataRoute:!0}}):h()},null)}var l_=function(t){return t.UseBlocker=
"useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(l_||{}),qc=function(t){
return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError=
"useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches=
"useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRo\
uteId",t}(qc||{});function pP(t){let e=O.useContext(ia);return e||J(!1),e}function hP(t){let e=O.useContext(_l);return e||
J(!1),e}function mP(t){let e=O.useContext(hr);return e||J(!1),e}function u_(t){let e=mP(t),r=e.matches[e.
matches.length-1];return r.route.id||J(!1),r.route.id}function c_(){var t;let e=O.useContext(i_),r=hP(qc.UseRouteError),n=u_(qc.UseRouteError);return e!==
void 0?e:(t=r.errors)==null?void 0:t[n]}function gP(){let{router:t}=pP(l_.UseNavigateStable),e=u_(qc.UseNavigateStable),r=O.useRef(!1);return a_(
()=>{r.current=!0}),O.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?t.
navigate(i):t.navigate(i,El({fromRouteId:e},a)))},[t,e])}var r_={};function yP(t,e,r){!e&&!r_[t]&&(r_[t]=
!0)}var vP="startTransition",f4=O[vP];function oa(t){let{to:e,replace:r,state:n,relative:i}=t;aa()||J(!1);let{future:a,static:o}=O.useContext(
Nr),{matches:s}=O.useContext(hr),{pathname:l}=fi(),u=_o(),c=wl(e,vl(s,a.v7_relativeSplatPath),l,i===
"path"),d=JSON.stringify(c);return O.useEffect(()=>u(JSON.parse(d),{replace:r,state:n,relative:i}),[
u,d,i,r,n]),null}function tg(t){return o_(t.context)}function rg(t){let{basename:e="/",children:r=null,location:n,navigationType:i=Re.Pop,navigator:a,static:o=!1,
future:s}=t;aa()&&J(!1);let l=e.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:l,navigator:a,static:o,
future:El({v7_relativeSplatPath:!1},s)}),[l,s,a,o]);typeof n=="string"&&(n=pr(n));let{pathname:c="/",
search:d="",hash:f="",state:m=null,key:w="default"}=n,g=O.useMemo(()=>{let E=Gr(c,l);return E==null?
null:{location:{pathname:E,search:d,hash:f,state:m,key:w},navigationType:i}},[l,c,d,f,m,w,i]);return g==
null?null:O.createElement(Nr.Provider,{value:u},O.createElement(Sl.Provider,{children:r,value:g}))}var p4=new Promise(()=>{});function d_(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&
Object.assign(e,{element:O.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(
e,{hydrateFallbackElement:O.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&
Object.assign(e,{errorElement:O.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){
var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},To.
apply(this,arguments)}function m_(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,a;for(a=0;a<n.
length;a++)i=n[a],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function kP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bP(t,e){return t.button===
0&&(!e||e==="_self")&&!kP(t)}var CP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","\
unstable_viewTransition"],IP=["aria-current","caseSensitive","className","end","style","to","unstabl\
e_viewTransition","children"];function g_(t,e){return Ym({basename:e?.basename,future:To({},e?.future,{v7_prependBasename:!0}),history:$E(
{window:e?.window}),hydrationData:e?.hydrationData||RP(),routes:t,mapRouteProperties:d_,window:e?.window}).
initialize()}function RP(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&
(e=To({},e,{errors:PP(e.errors)})),e}function PP(t){if(!t)return null;let e=Object.entries(t),r={};for(let[
n,i]of e)if(i&&i.__type==="RouteErrorResponse")r[n]=new Eo(i.status,i.statusText,i.data,i.internal===
!0);else if(i&&i.__type==="Error"){if(i.__subType){let a=window[i.__subType];if(typeof a=="function")
try{let o=new a(i.message);o.stack="",r[n]=o}catch{}}if(r[n]==null){let a=new Error(i.message);a.stack=
"",r[n]=a}}else r[n]=i;return r}var y_=W.createContext({isTransitioning:!1}),DP=W.createContext(new Map),
AP="startTransition",f_=W[AP],NP="flushSync",p_=TP[NP];function FP(t){f_?f_(t):t()}function Tl(t){p_?
p_(t):t()}var ng=class{constructor(){this.status="pending",this.promise=new Promise((e,r)=>{this.resolve=
n=>{this.status==="pending"&&(this.status="resolved",e(n))},this.reject=n=>{this.status==="pending"&&
(this.status="rejected",r(n))}})}};function v_(t){let{fallbackElement:e,router:r,future:n}=t,[i,a]=W.useState(
r.state),[o,s]=W.useState(),[l,u]=W.useState({isTransitioning:!1}),[c,d]=W.useState(),[f,m]=W.useState(),
[w,g]=W.useState(),E=W.useRef(new Map),{v7_startTransition:p}=n||{},h=W.useCallback(S=>{p?FP(S):S()},
[p]),y=W.useCallback((S,C)=>{let{deletedFetchers:D,unstable_flushSync:F,unstable_viewTransitionOpts:L}=C;
D.forEach(q=>E.current.delete(q)),S.fetchers.forEach((q,je)=>{q.data!==void 0&&E.current.set(je,q.data)});
let de=r.window==null||typeof r.window.document.startViewTransition!="function";if(!L||de){F?Tl(()=>a(
S)):h(()=>a(S));return}if(F){Tl(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,
currentLocation:L.currentLocation,nextLocation:L.nextLocation})});let q=r.window.document.startViewTransition(
()=>{Tl(()=>a(S))});q.finished.finally(()=>{Tl(()=>{d(void 0),m(void 0),s(void 0),u({isTransitioning:!1})})}),
Tl(()=>m(q));return}f?(c&&c.resolve(),f.skipTransition(),g({state:S,currentLocation:L.currentLocation,
nextLocation:L.nextLocation})):(s(S),u({isTransitioning:!0,flushSync:!1,currentLocation:L.currentLocation,
nextLocation:L.nextLocation}))},[r.window,f,c,E,h]);W.useLayoutEffect(()=>r.subscribe(y),[r,y]),W.useEffect(
()=>{l.isTransitioning&&!l.flushSync&&d(new ng)},[l]),W.useEffect(()=>{if(c&&o&&r.window){let S=o,C=c.
promise,D=r.window.document.startViewTransition(async()=>{h(()=>a(S)),await C});D.finished.finally(()=>{
d(void 0),m(void 0),s(void 0),u({isTransitioning:!1})}),m(D)}},[h,o,c,r.window]),W.useEffect(()=>{c&&
o&&i.location.key===o.location.key&&c.resolve()},[c,f,i.location,o]),W.useEffect(()=>{!l.isTransitioning&&
w&&(s(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),
g(void 0))},[l.isTransitioning,w]),W.useEffect(()=>{},[]);let x=W.useMemo(()=>({createHref:r.createHref,
encodeLocation:r.encodeLocation,go:S=>r.navigate(S),push:(S,C,D)=>r.navigate(S,{state:C,preventScrollReset:D?.
preventScrollReset}),replace:(S,C,D)=>r.navigate(S,{replace:!0,state:C,preventScrollReset:D?.preventScrollReset})}),
[r]),T=r.basename||"/",v=W.useMemo(()=>({router:r,navigator:x,static:!1,basename:T}),[r,x,T]);return W.createElement(
W.Fragment,null,W.createElement(ia.Provider,{value:v},W.createElement(_l.Provider,{value:i},W.createElement(
DP.Provider,{value:E.current},W.createElement(y_.Provider,{value:l},W.createElement(rg,{basename:T,location:i.
location,navigationType:i.historyAction,navigator:x,future:{v7_relativeSplatPath:r.future.v7_relativeSplatPath}},
i.initialized||r.future.v7_partialHydration?W.createElement(BP,{routes:r.routes,future:r.future,state:i}):
e))))),null)}function BP(t){let{routes:e,future:r,state:n}=t;return s_(e,void 0,n,r)}var MP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
kl=W.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:a,replace:o,state:s,target:l,to:u,
preventScrollReset:c,unstable_viewTransition:d}=e,f=m_(e,CP),{basename:m}=W.useContext(Nr),w,g=!1;if(typeof u==
"string"&&OP.test(u)&&(w=u,MP))try{let y=new URL(window.location.href),x=u.startsWith("//")?new URL(
y.protocol+u):new URL(u),T=Gr(x.pathname,m);x.origin===y.origin&&T!=null?u=T+x.search+x.hash:g=!0}catch{}
let E=Jm(u,{relative:i}),p=UP(u,{replace:o,state:s,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});
function h(y){n&&n(y),y.defaultPrevented||p(y)}return W.createElement("a",To({},f,{href:w||E,onClick:g||
a?n:h,ref:r,target:l}))}),ag=W.forwardRef(function(e,r){let{"aria-current":n="page",caseSensitive:i=!1,
className:a="",end:o=!1,style:s,to:l,unstable_viewTransition:u,children:c}=e,d=m_(e,IP),f=So(l,{relative:d.
relative}),m=fi(),w=W.useContext(_l),{navigator:g}=W.useContext(Nr),E=w!=null&&zP(f)&&u===!0,p=g.encodeLocation?
g.encodeLocation(f).pathname:f.pathname,h=m.pathname,y=w&&w.navigation&&w.navigation.location?w.navigation.
location.pathname:null;i||(h=h.toLowerCase(),y=y?y.toLowerCase():null,p=p.toLowerCase());let x=p!=="\
/"&&p.endsWith("/")?p.length-1:p.length,T=h===p||!o&&h.startsWith(p)&&h.charAt(x)==="/",v=y!=null&&(y===
p||!o&&y.startsWith(p)&&y.charAt(p.length)==="/"),S={isActive:T,isPending:v,isTransitioning:E},C=T?n:
void 0,D;typeof a=="function"?D=a(S):D=[a,T?"active":null,v?"pending":null,E?"transitioning":null].filter(
Boolean).join(" ");let F=typeof s=="function"?s(S):s;return W.createElement(kl,To({},d,{"aria-curren\
t":C,className:D,ref:r,style:F,to:l,unstable_viewTransition:u}),typeof c=="function"?c(S):c)});var ig;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher=
"useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ig||
(ig={}));var h_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration=
"useScrollRestoration"})(h_||(h_={}));function LP(t){let e=W.useContext(ia);return e||J(!1),e}function UP(t,e){let{target:r,replace:n,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s}=e===
void 0?{}:e,l=_o(),u=fi(),c=So(t,{relative:o});return W.useCallback(d=>{if(bP(d,r)){d.preventDefault();
let f=n!==void 0?n:Kr(u)===Kr(c);l(t,{replace:f,state:i,preventScrollReset:a,relative:o,unstable_viewTransition:s})}},
[u,l,c,n,i,r,t,a,o,s])}function zP(t,e){e===void 0&&(e={});let r=W.useContext(y_);r==null&&J(!1);let{basename:n}=LP(ig.useViewTransitionState),
i=So(t,{relative:e.relative});if(!r.isTransitioning)return!1;let a=Gr(r.currentLocation.pathname,n)||
r.currentLocation.pathname,o=Gr(r.nextLocation.pathname,n)||r.nextLocation.pathname;return na(i.pathname,
o)!=null||na(i.pathname,a)!=null}var mC=St(Ro()),gC=St(H_()),ft=St(ir()),yC=St(kb());var be=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Xe=Object.
keys,_t=Array.isArray;typeof Promise<"u"&&!be.Promise&&(be.Promise=Promise);function At(t,e){return typeof e!=
"object"||Xe(e).forEach(function(r){t[r]=e[r]}),t}var iu=Object.getPrototypeOf,cO={}.hasOwnProperty;
function rr(t,e){return cO.call(t,e)}function us(t,e){typeof e=="function"&&(e=e(iu(t))),(typeof Reflect>
"u"?Xe:Reflect.ownKeys)(e).forEach(r=>{Mn(t,r,e[r])})}var Lb=Object.defineProperty;function Mn(t,e,r,n){
Lb(t,e,At(r&&rr(r,"get")&&typeof r.get=="function"?{get:r.get,set:r.set,configurable:!0}:{value:r,configurable:!0,
writable:!0},n))}function cs(t){return{from:function(e){return t.prototype=Object.create(e.prototype),
Mn(t.prototype,"constructor",t),{extend:us.bind(null,t.prototype)}}}}var dO=Object.getOwnPropertyDescriptor;
function xv(t,e){let r=dO(t,e),n;return r||(n=iu(t))&&xv(n,e)}var fO=[].slice;function dp(t,e,r){return fO.
call(t,e,r)}function Ub(t,e){return e(t)}function Jl(t){if(!t)throw new Error("Assertion Failed")}function zb(t){
be.setImmediate?setImmediate(t):setTimeout(t,0)}function jb(t,e){return t.reduce((r,n,i)=>{var a=e(n,
i);return a&&(r[a[0]]=a[1]),r},{})}function pO(t,e,r){try{t.apply(null,r)}catch(n){e&&e(n)}}function Bn(t,e){
if(rr(t,e))return t[e];if(!e)return t;if(typeof e!="string"){for(var r=[],n=0,i=e.length;n<i;++n){var a=Bn(
t,e[n]);r.push(a)}return r}var o=e.indexOf(".");if(o!==-1){var s=t[e.substr(0,o)];return s===void 0?
void 0:Bn(s,e.substr(o+1))}}function Ur(t,e,r){if(!(!t||e===void 0)&&!("isFrozen"in Object&&Object.isFrozen(
t)))if(typeof e!="string"&&"length"in e){Jl(typeof r!="string"&&"length"in r);for(var n=0,i=e.length;n<
i;++n)Ur(t,e[n],r[n])}else{var a=e.indexOf(".");if(a!==-1){var o=e.substr(0,a),s=e.substr(a+1);if(s===
"")r===void 0?_t(t)&&!isNaN(parseInt(o))?t.splice(o,1):delete t[o]:t[o]=r;else{var l=t[o];(!l||!rr(t,
o))&&(l=t[o]={}),Ur(l,s,r)}}else r===void 0?_t(t)&&!isNaN(parseInt(e))?t.splice(e,1):delete t[e]:t[e]=
r}}function hO(t,e){typeof e=="string"?Ur(t,e,void 0):"length"in e&&[].map.call(e,function(r){Ur(t,r,
void 0)})}function Hb(t){var e={};for(var r in t)rr(t,r)&&(e[r]=t[r]);return e}var mO=[].concat;function qb(t){
return mO.apply([],t)}var $b="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,Arr\
ayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(qb([8,
16,32,64].map(t=>["Int","Uint","Float"].map(e=>e+t+"Array")))).filter(t=>be[t]),gO=$b.map(t=>be[t]);
jb($b,t=>[t,!0]);var Pi=null;function du(t){Pi=typeof WeakMap<"u"&&new WeakMap;let e=Wy(t);return Pi=
null,e}function Wy(t){if(!t||typeof t!="object")return t;let e=Pi&&Pi.get(t);if(e)return e;if(_t(t)){
e=[],Pi&&Pi.set(t,e);for(var r=0,n=t.length;r<n;++r)e.push(Wy(t[r]))}else if(gO.indexOf(t.constructor)>=
0)e=t;else{let a=iu(t);e=a===Object.prototype?{}:Object.create(a),Pi&&Pi.set(t,e);for(var i in t)rr(
t,i)&&(e[i]=Wy(t[i]))}return e}var{toString:yO}={};function Ky(t){return yO.call(t).slice(8,-1)}var Gy=typeof Symbol<
"u"?Symbol.iterator:"@@iterator",vO=typeof Gy=="symbol"?function(t){var e;return t!=null&&(e=t[Gy])&&
e.apply(t)}:function(){return null},ss={};function Nn(t){var e,r,n,i;if(arguments.length===1){if(_t(
t))return t.slice();if(this===ss&&typeof t=="string")return[t];if(i=vO(t)){for(r=[];n=i.next(),!n.done;)
r.push(n.value);return r}if(t==null)return[t];if(e=t.length,typeof e=="number"){for(r=new Array(e);e--;)
r[e]=t[e];return r}return[t]}for(e=arguments.length,r=new Array(e);e--;)r[e]=arguments[e];return r}var Ev=typeof Symbol<
"u"?t=>t[Symbol.toStringTag]==="AsyncFunction":()=>!1,sn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.
test(location.href);function Vb(t,e){sn=t,Wb=e}var Wb=()=>!0,wO=!new Error("").stack;function Oa(){if(wO)
try{throw Oa.arguments,new Error}catch(t){return t}return new Error}function Xy(t,e){var r=t.stack;return r?
(e=e||0,r.indexOf(t.name)===0&&(e+=(t.name+t.message).split(`
`).length),r.split(`
`).slice(e).filter(Wb).map(n=>`
`+n).join("")):""}var xO=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTa\
ble","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","Data\
baseClosed","PrematureCommit","ForeignAwait"],Kb=["Unknown","Constraint","Data","TransactionInactive",
"ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Sy\
ntax","DataClone"],_v=xO.concat(Kb),EO={VersionChanged:"Database version changed by other database c\
onnection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"\
Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https:/\
/tinyurl.com/y2uuvskb"};function ds(t,e){this._e=Oa(),this.name=t,this.message=e}cs(ds).from(Error).
extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+Xy(this._e,
2))}},toString:function(){return this.name+": "+this.message}});function Gb(t,e){return t+". Errors:\
 "+Object.keys(e).map(r=>e[r].toString()).filter((r,n,i)=>i.indexOf(r)===n).join(`
`)}function tp(t,e,r,n){this._e=Oa(),this.failures=e,this.failedKeys=n,this.successCount=r,this.message=
Gb(t,e)}cs(tp).from(ds);function tu(t,e){this._e=Oa(),this.name="BulkError",this.failures=Object.keys(
e).map(r=>e[r]),this.failuresByPos=e,this.message=Gb(t,e)}cs(tu).from(ds);var Sv=_v.reduce((t,e)=>(t[e]=
e+"Error",t),{}),_O=ds,G=_v.reduce((t,e)=>{var r=e+"Error";function n(i,a){this._e=Oa(),this.name=r,
i?typeof i=="string"?(this.message=`${i}${a?`
 `+a:""}`,this.inner=a||null):typeof i=="object"&&(this.message=`${i.name} ${i.message}`,this.inner=
i):(this.message=EO[e]||r,this.inner=null)}return cs(n).from(_O),t[e]=n,t},{});G.Syntax=SyntaxError;
G.Type=TypeError;G.Range=RangeError;var bb=Kb.reduce((t,e)=>(t[e+"Error"]=G[e],t),{});function SO(t,e){
if(!t||t instanceof ds||t instanceof TypeError||t instanceof SyntaxError||!t.name||!bb[t.name])return t;
var r=new bb[t.name](e||t.message,t);return"stack"in t&&Mn(r,"stack",{get:function(){return this.inner.
stack}}),r}var fp=_v.reduce((t,e)=>(["Syntax","Type","Range"].indexOf(e)===-1&&(t[e+"Error"]=G[e]),t),
{});fp.ModifyError=tp;fp.DexieError=ds;fp.BulkError=tu;function ye(){}function fu(t){return t}function TO(t,e){
return t==null||t===fu?e:function(r){return e(t(r))}}function Fa(t,e){return function(){t.apply(this,
arguments),e.apply(this,arguments)}}function kO(t,e){return t===ye?e:function(){var r=t.apply(this,arguments);
r!==void 0&&(arguments[0]=r);var n=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;
var a=e.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?Fa(n,this.onsuccess):n),i&&(this.
onerror=this.onerror?Fa(i,this.onerror):i),a!==void 0?a:r}}function bO(t,e){return t===ye?e:function(){
t.apply(this,arguments);var r=this.onsuccess,n=this.onerror;this.onsuccess=this.onerror=null,e.apply(
this,arguments),r&&(this.onsuccess=this.onsuccess?Fa(r,this.onsuccess):r),n&&(this.onerror=this.onerror?
Fa(n,this.onerror):n)}}function CO(t,e){return t===ye?e:function(r){var n=t.apply(this,arguments);At(
r,n);var i=this.onsuccess,a=this.onerror;this.onsuccess=null,this.onerror=null;var o=e.apply(this,arguments);
return i&&(this.onsuccess=this.onsuccess?Fa(i,this.onsuccess):i),a&&(this.onerror=this.onerror?Fa(a,
this.onerror):a),n===void 0?o===void 0?void 0:o:At(n,o)}}function IO(t,e){return t===ye?e:function(){
return e.apply(this,arguments)===!1?!1:t.apply(this,arguments)}}function Tv(t,e){return t===ye?e:function(){
var r=t.apply(this,arguments);if(r&&typeof r.then=="function"){for(var n=this,i=arguments.length,a=new Array(
i);i--;)a[i]=arguments[i];return r.then(function(){return e.apply(n,a)})}return e.apply(this,arguments)}}
var au={},RO=100,PO=20,Xb=100,[Yy,rp,Qy]=typeof Promise>"u"?[]:(()=>{let t=Promise.resolve();if(typeof crypto>
"u"||!crypto.subtle)return[t,iu(t),t];let e=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[
e,iu(e),t]})(),Yb=rp&&rp.then,Xf=Yy&&Yy.constructor,kv=!!Qy,Zy=!1,DO=Qy?()=>{Qy.then($f)}:be.setImmediate?
setImmediate.bind(null,$f):be.MutationObserver?()=>{var t=document.createElement("div");new MutationObserver(
()=>{$f(),t=null}).observe(t,{attributes:!0}),t.setAttribute("i","1")}:()=>{setTimeout($f,0)},ou=function(t,e){
eu.push([t,e]),np&&(DO(),np=!1)},Jy=!0,np=!0,Aa=[],Yf=[],ev=null,tv=fu,ls={id:"global",global:!0,ref:0,
unhandleds:[],onunhandled:Rb,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(t=>{try{Rb(t[0],
t[1])}catch{}})}},V=ls,eu=[],Na=0,Qf=[];function j(t){if(typeof this!="object")throw new TypeError("\
Promises must be constructed via new");this._listeners=[],this.onuncatched=ye,this._lib=!1;var e=this.
_PSD=V;if(sn&&(this._stackHolder=Oa(),this._prev=null,this._numPrev=0),typeof t!="function"){if(t!==
au)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===
!1&&nv(this,this._value);return}this._state=null,this._value=null,++e.ref,Zb(this,t)}var rv={get:function(){
var t=V,e=ip;function r(n,i){var a=!t.global&&(t!==V||e!==ip);let o=a&&!On();var s=new j((l,u)=>{bv(
this,new Qb(op(n,t,a,o),op(i,t,a,o),l,u,t))});return sn&&tC(s,this),s}return r.prototype=au,r},set:function(t){
Mn(this,"then",t&&t.prototype===au?rv:{get:function(){return t},set:rv.set})}};us(j.prototype,{then:rv,
_then:function(t,e){bv(this,new Qb(null,null,t,e,V))},catch:function(t){if(arguments.length===1)return this.
then(null,t);var e=arguments[0],r=arguments[1];return typeof e=="function"?this.then(null,n=>n instanceof
e?r(n):Zf(n)):this.then(null,n=>n&&n.name===e?r(n):Zf(n))},finally:function(t){return this.then(e=>(t(),
e),e=>(t(),Zf(e)))},stack:{get:function(){if(this._stack)return this._stack;try{Zy=!0;var t=eC(this,
[],PO),e=t.join(`
From previous: `);return this._state!==null&&(this._stack=e),e}finally{Zy=!1}}},timeout:function(t,e){
return t<1/0?new j((r,n)=>{var i=setTimeout(()=>n(new G.Timeout(e)),t);this.then(r,n).finally(clearTimeout.
bind(null,i))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&Mn(j.prototype,Symbol.toStringTag,"De\
xie.Promise");ls.env=rC();function Qb(t,e,r,n,i){this.onFulfilled=typeof t=="function"?t:null,this.onRejected=
typeof e=="function"?e:null,this.resolve=r,this.reject=n,this.psd=i}us(j,{all:function(){var t=Nn.apply(
null,arguments).map(ap);return new j(function(e,r){t.length===0&&e([]);var n=t.length;t.forEach((i,a)=>j.
resolve(i).then(o=>{t[a]=o,--n||e(t)},r))})},resolve:t=>{if(t instanceof j)return t;if(t&&typeof t.then==
"function")return new j((r,n)=>{t.then(r,n)});var e=new j(au,!0,t);return tC(e,ev),e},reject:Zf,race:function(){
var t=Nn.apply(null,arguments).map(ap);return new j((e,r)=>{t.map(n=>j.resolve(n).then(e,r))})},PSD:{
get:()=>V,set:t=>V=t},totalEchoes:{get:()=>ip},newPSD:Ai,usePSD:ps,scheduler:{get:()=>ou,set:t=>{ou=
t}},rejectionMapper:{get:()=>tv,set:t=>{tv=t}},follow:(t,e)=>new j((r,n)=>Ai((i,a)=>{var o=V;o.unhandleds=
[],o.onunhandled=a,o.finalize=Fa(function(){NO(()=>{this.unhandleds.length===0?i():a(this.unhandleds[0])})},
o.finalize),t()},e,r,n))});Xf&&(Xf.allSettled&&Mn(j,"allSettled",function(){let t=Nn.apply(null,arguments).
map(ap);return new j(e=>{t.length===0&&e([]);let r=t.length,n=new Array(r);t.forEach((i,a)=>j.resolve(
i).then(o=>n[a]={status:"fulfilled",value:o},o=>n[a]={status:"rejected",reason:o}).then(()=>--r||e(n)))})}),
Xf.any&&typeof AggregateError<"u"&&Mn(j,"any",function(){let t=Nn.apply(null,arguments).map(ap);return new j(
(e,r)=>{t.length===0&&r(new AggregateError([]));let n=t.length,i=new Array(n);t.forEach((a,o)=>j.resolve(
a).then(s=>e(s),s=>{i[o]=s,--n||r(new AggregateError(i))}))})}));function Zb(t,e){try{e(r=>{if(t._state===
null){if(r===t)throw new TypeError("A promise cannot be resolved with itself.");var n=t._lib&&pu();r&&
typeof r.then=="function"?Zb(t,(i,a)=>{r instanceof j?r._then(i,a):r.then(i,a)}):(t._state=!0,t._value=
r,Jb(t)),n&&hu()}},nv.bind(null,t))}catch(r){nv(t,r)}}function nv(t,e){if(Yf.push(e),t._state===null){
var r=t._lib&&pu();e=tv(e),t._state=!1,t._value=e,sn&&e!==null&&typeof e=="object"&&!e._promise&&pO(
()=>{var n=xv(e,"stack");e._promise=t,Mn(e,"stack",{get:()=>Zy?n&&(n.get?n.get.apply(e):n.value):t.stack})}),
FO(t),Jb(t),r&&hu()}}function Jb(t){var e=t._listeners;t._listeners=[];for(var r=0,n=e.length;r<n;++r)
bv(t,e[r]);var i=t._PSD;--i.ref||i.finalize(),Na===0&&(++Na,ou(()=>{--Na===0&&Cv()},[]))}function bv(t,e){
if(t._state===null){t._listeners.push(e);return}var r=t._state?e.onFulfilled:e.onRejected;if(r===null)
return(t._state?e.resolve:e.reject)(t._value);++e.psd.ref,++Na,ou(AO,[r,t,e])}function AO(t,e,r){try{
ev=e;var n,i=e._value;e._state?n=t(i):(Yf.length&&(Yf=[]),n=t(i),Yf.indexOf(i)===-1&&BO(e)),r.resolve(
n)}catch(a){r.reject(a)}finally{ev=null,--Na===0&&Cv(),--r.psd.ref||r.psd.finalize()}}function eC(t,e,r){
if(e.length===r)return e;var n="";if(t._state===!1){var i=t._value,a,o;i!=null?(a=i.name||"Error",o=
i.message||i,n=Xy(i,0)):(a=i,o=""),e.push(a+(o?": "+o:"")+n)}return sn&&(n=Xy(t._stackHolder,2),n&&e.
indexOf(n)===-1&&e.push(n),t._prev&&eC(t._prev,e,r)),e}function tC(t,e){var r=e?e._numPrev+1:0;r<RO&&
(t._prev=e,t._numPrev=r)}function $f(){pu()&&hu()}function pu(){var t=Jy;return Jy=!1,np=!1,t}function hu(){
var t,e,r;do for(;eu.length>0;)for(t=eu,eu=[],r=t.length,e=0;e<r;++e){var n=t[e];n[0].apply(null,n[1])}while(eu.
length>0);Jy=!0,np=!0}function Cv(){var t=Aa;Aa=[],t.forEach(n=>{n._PSD.onunhandled.call(null,n._value,
n)});for(var e=Qf.slice(0),r=e.length;r;)e[--r]()}function NO(t){function e(){t(),Qf.splice(Qf.indexOf(
e),1)}Qf.push(e),++Na,ou(()=>{--Na===0&&Cv()},[])}function FO(t){Aa.some(e=>e._value===t._value)||Aa.
push(t)}function BO(t){for(var e=Aa.length;e;)if(Aa[--e]._value===t._value){Aa.splice(e,1);return}}function Zf(t){
return new j(au,!1,t)}function De(t,e){var r=V;return function(){var n=pu(),i=V;try{return Ni(r,!0),
t.apply(this,arguments)}catch(a){e&&e(a)}finally{Ni(i,!1),n&&hu()}}}var Et={awaits:0,echoes:0,id:0},
MO=0,Jf=[],zy=0,ip=0,OO=0;function Ai(t,e,r,n){var i=V,a=Object.create(i);a.parent=i,a.ref=0,a.global=
!1,a.id=++OO;var o=ls.env;a.env=kv?{Promise:j,PromiseProp:{value:j,configurable:!0,writable:!0},all:j.
all,race:j.race,allSettled:j.allSettled,any:j.any,resolve:j.resolve,reject:j.reject,nthen:Cb(o.nthen,
a),gthen:Cb(o.gthen,a)}:{},e&&At(a,e),++i.ref,a.finalize=function(){--this.parent.ref||this.parent.finalize()};
var s=ps(a,t,r,n);return a.ref===0&&a.finalize(),s}function fs(){return Et.id||(Et.id=++MO),++Et.awaits,
Et.echoes+=Xb,Et.id}function On(){return Et.awaits?(--Et.awaits===0&&(Et.id=0),Et.echoes=Et.awaits*Xb,
!0):!1}(""+Yb).indexOf("[native code]")===-1&&(fs=On=ye);function ap(t){return Et.echoes&&t&&t.constructor===
Xf?(fs(),t.then(e=>(On(),e),e=>(On(),Ze(e)))):t}function LO(t){++ip,(!Et.echoes||--Et.echoes===0)&&(Et.
echoes=Et.id=0),Jf.push(V),Ni(t,!0)}function UO(){var t=Jf[Jf.length-1];Jf.pop(),Ni(t,!1)}function Ni(t,e){
var r=V;if((e?Et.echoes&&(!zy++||t!==V):zy&&(!--zy||t!==V))&&nC(e?LO.bind(null,t):UO),t!==V&&(V=t,r===
ls&&(ls.env=rC()),kv)){var n=ls.env.Promise,i=t.env;rp.then=i.nthen,n.prototype.then=i.gthen,(r.global||
t.global)&&(Object.defineProperty(be,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.
resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any&&(n.any=i.any))}}function rC(){
var t=be.Promise;return kv?{Promise:t,PromiseProp:Object.getOwnPropertyDescriptor(be,"Promise"),all:t.
all,race:t.race,allSettled:t.allSettled,any:t.any,resolve:t.resolve,reject:t.reject,nthen:rp.then,gthen:t.
prototype.then}:{}}function ps(t,e,r,n,i){var a=V;try{return Ni(t,!0),e(r,n,i)}finally{Ni(a,!1)}}function nC(t){
Yb.call(Yy,t)}function op(t,e,r,n){return typeof t!="function"?t:function(){var i=V;r&&fs(),Ni(e,!0);
try{return t.apply(this,arguments)}finally{Ni(i,!1),n&&nC(On)}}}function Cb(t,e){return function(r,n){
return t.call(this,op(r,e),op(n,e))}}var Ib="unhandledrejection";function Rb(t,e){var r;try{r=e.onuncatched(
t)}catch{}if(r!==!1)try{var n,i={promise:e,reason:t};if(be.document&&document.createEvent?(n=document.
createEvent("Event"),n.initEvent(Ib,!0,!0),At(n,i)):be.CustomEvent&&(n=new CustomEvent(Ib,{detail:i}),
At(n,i)),n&&be.dispatchEvent&&(dispatchEvent(n),!be.PromiseRejectionEvent&&be.onunhandledrejection))
try{be.onunhandledrejection(n)}catch{}sn&&n&&!n.defaultPrevented&&console.warn(`Unhandled rejection:\
 ${t.stack||t}`)}catch{}}var Ze=j.reject;function iv(t,e,r,n){if(!t.idbdb||!t._state.openComplete&&!V.
letThrough&&!t._vip){if(t._state.openComplete)return Ze(new G.DatabaseClosed(t._state.dbOpenError));
if(!t._state.isBeingOpened){if(!t._options.autoOpen)return Ze(new G.DatabaseClosed);t.open().catch(ye)}
return t._state.dbReadyPromise.then(()=>iv(t,e,r,n))}else{var i=t._createTransaction(e,r,t._dbSchema);
try{i.create(),t._state.PR1398_maxLoop=3}catch(a){return a.name===Sv.InvalidState&&t.isOpen()&&--t._state.
PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().then(()=>iv(t,e,r,n))):
Ze(a)}return i._promise(e,(a,o)=>Ai(()=>(V.trans=i,n(a,o,i)))).then(a=>i._completion.then(()=>a))}}var Pb="\
3.2.4",Da="\uFFFF",av=-1/0,Dn="Invalid key provided. Keys must be of type string, number, Date or Ar\
ray<string | number | Date>.",iC="String expected.",ru=[],pp=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.
test(navigator.userAgent),zO=pp,jO=pp,aC=t=>!/(dexie\.js|dexie\.min\.js)/.test(t),hp="__dbnames",jy="\
readonly",Hy="readwrite";function Ba(t,e){return t?e?function(){return t.apply(this,arguments)&&e.apply(
this,arguments)}:t:e}var oC={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Vf(t){
return typeof t=="string"&&!/\./.test(t)?e=>(e[t]===void 0&&t in e&&(e=du(e),delete e[t]),e):e=>e}var ov=class{_trans(e,r,n){
let i=this._tx||V.trans,a=this.name;function o(l,u,c){if(!c.schema[a])throw new G.NotFound("Table "+
a+" not part of transaction");return r(c.idbtrans,c)}let s=pu();try{return i&&i.db===this.db?i===V.trans?
i._promise(e,o,n):Ai(()=>i._promise(e,o,n),{trans:i,transless:V.transless||V}):iv(this.db,e,[this.name],
o)}finally{s&&hu()}}get(e,r){return e&&e.constructor===Object?this.where(e).first(r):this._trans("re\
adonly",n=>this.core.get({trans:n,key:e}).then(i=>this.hook.reading.fire(i))).then(r)}where(e){if(typeof e==
"string")return new this.db.WhereClause(this,e);if(_t(e))return new this.db.WhereClause(this,`[${e.join(
"+")}]`);let r=Xe(e);if(r.length===1)return this.where(r[0]).equals(e[r[0]]);let n=this.schema.indexes.
concat(this.schema.primKey).filter(u=>u.compound&&r.every(c=>u.keyPath.indexOf(c)>=0)&&u.keyPath.every(
c=>r.indexOf(c)>=0))[0];if(n&&this.db._maxKey!==Da)return this.where(n.name).equals(n.keyPath.map(u=>e[u]));
!n&&sn&&console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound ind\
ex [${r.join("+")}]`);let{idxByName:i}=this.schema,a=this.db._deps.indexedDB;function o(u,c){try{return a.
cmp(u,c)===0}catch{return!1}}let[s,l]=r.reduce(([u,c],d)=>{let f=i[d],m=e[d];return[u||f,u||!f?Ba(c,
f&&f.multi?w=>{let g=Bn(w,d);return _t(g)&&g.some(E=>o(m,E))}:w=>o(m,Bn(w,d))):c]},[null,null]);return s?
this.where(s.name).equals(e[s.keyPath]).filter(l):n?this.filter(l):this.where(r).equals("")}filter(e){
return this.toCollection().and(e)}count(e){return this.toCollection().count(e)}offset(e){return this.
toCollection().offset(e)}limit(e){return this.toCollection().limit(e)}each(e){return this.toCollection().
each(e)}toArray(e){return this.toCollection().toArray(e)}toCollection(){return new this.db.Collection(
new this.db.WhereClause(this))}orderBy(e){return new this.db.Collection(new this.db.WhereClause(this,
_t(e)?`[${e.join("+")}]`:e))}reverse(){return this.toCollection().reverse()}mapToClass(e){this.schema.
mappedClass=e;let r=n=>{if(!n)return n;let i=Object.create(e.prototype);for(var a in n)if(rr(n,a))try{
i[a]=n[a]}catch{}return i};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),
this.schema.readHook=r,this.hook("reading",r),e}defineClass(){function e(r){At(this,r)}return this.mapToClass(
e)}add(e,r){let{auto:n,keyPath:i}=this.schema.primKey,a=e;return i&&n&&(a=Vf(i)(e)),this._trans("rea\
dwrite",o=>this.core.mutate({trans:o,type:"add",keys:r!=null?[r]:null,values:[a]})).then(o=>o.numFailures?
j.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{Ur(e,i,o)}catch{}return o})}update(e,r){if(typeof e==
"object"&&!_t(e)){let n=Bn(e,this.schema.primKey.keyPath);if(n===void 0)return Ze(new G.InvalidArgument(
"Given object does not contain its primary key"));try{typeof r!="function"?Xe(r).forEach(i=>{Ur(e,i,
r[i])}):r(e,{value:e,primKey:n})}catch{}return this.where(":id").equals(n).modify(r)}else return this.
where(":id").equals(e).modify(r)}put(e,r){let{auto:n,keyPath:i}=this.schema.primKey,a=e;return i&&n&&
(a=Vf(i)(e)),this._trans("readwrite",o=>this.core.mutate({trans:o,type:"put",values:[a],keys:r!=null?
[r]:null})).then(o=>o.numFailures?j.reject(o.failures[0]):o.lastResult).then(o=>{if(i)try{Ur(e,i,o)}catch{}
return o})}delete(e){return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"delete",keys:[
e]})).then(r=>r.numFailures?j.reject(r.failures[0]):void 0)}clear(){return this._trans("readwrite",e=>this.
core.mutate({trans:e,type:"deleteRange",range:oC})).then(e=>e.numFailures?j.reject(e.failures[0]):void 0)}bulkGet(e){
return this._trans("readonly",r=>this.core.getMany({keys:e,trans:r}).then(n=>n.map(i=>this.hook.reading.
fire(i))))}bulkAdd(e,r,n){let i=Array.isArray(r)?r:void 0;n=n||(i?void 0:r);let a=n?n.allKeys:void 0;
return this._trans("readwrite",o=>{let{auto:s,keyPath:l}=this.schema.primKey;if(l&&i)throw new G.InvalidArgument(
"bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==e.length)throw new G.
InvalidArgument("Arguments objects and keys must have the same length");let u=e.length,c=l&&s?e.map(
Vf(l)):e;return this.core.mutate({trans:o,type:"add",keys:i,values:c,wantResults:a}).then(({numFailures:d,
results:f,lastResult:m,failures:w})=>{let g=a?f:m;if(d===0)return g;throw new tu(`${this.name}.bulkA\
dd(): ${d} of ${u} operations failed`,w)})})}bulkPut(e,r,n){let i=Array.isArray(r)?r:void 0;n=n||(i?
void 0:r);let a=n?n.allKeys:void 0;return this._trans("readwrite",o=>{let{auto:s,keyPath:l}=this.schema.
primKey;if(l&&i)throw new G.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound\
 keys");if(i&&i.length!==e.length)throw new G.InvalidArgument("Arguments objects and keys must have \
the same length");let u=e.length,c=l&&s?e.map(Vf(l)):e;return this.core.mutate({trans:o,type:"put",keys:i,
values:c,wantResults:a}).then(({numFailures:d,results:f,lastResult:m,failures:w})=>{let g=a?f:m;if(d===
0)return g;throw new tu(`${this.name}.bulkPut(): ${d} of ${u} operations failed`,w)})})}bulkDelete(e){
let r=e.length;return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:e})).then(
({numFailures:n,lastResult:i,failures:a})=>{if(n===0)return i;throw new tu(`${this.name}.bulkDelete(\
): ${n} of ${r} operations failed`,a)})}};function mu(t){var e={},r=function(s,l){if(l){for(var u=arguments.
length,c=new Array(u-1);--u;)c[u-1]=arguments[u];return e[s].subscribe.apply(null,c),t}else if(typeof s==
"string")return e[s]};r.addEventType=a;for(var n=1,i=arguments.length;n<i;++n)a(arguments[n]);return r;
function a(s,l,u){if(typeof s=="object")return o(s);l||(l=IO),u||(u=ye);var c={subscribers:[],fire:u,
subscribe:function(d){c.subscribers.indexOf(d)===-1&&(c.subscribers.push(d),c.fire=l(c.fire,d))},unsubscribe:function(d){
c.subscribers=c.subscribers.filter(function(f){return f!==d}),c.fire=c.subscribers.reduce(l,u)}};return e[s]=
r[s]=c,c}function o(s){Xe(s).forEach(function(l){var u=s[l];if(_t(u))a(l,s[l][0],s[l][1]);else if(u===
"asap")var c=a(l,fu,function(){for(var f=arguments.length,m=new Array(f);f--;)m[f]=arguments[f];c.subscribers.
forEach(function(w){zb(function(){w.apply(null,m)})})});else throw new G.InvalidArgument("Invalid ev\
ent config")})}}function gu(t,e){return cs(e).from({prototype:t}),e}function HO(t){return gu(ov.prototype,
function(r,n,i){this.db=t,this._tx=i,this.name=r,this.schema=n,this.hook=t._allTables[r]?t._allTables[r].
hook:mu(null,{creating:[kO,ye],reading:[TO,fu],updating:[CO,ye],deleting:[bO,ye]})})}function as(t,e){
return!(t.filter||t.algorithm||t.or)&&(e?t.justLimit:!t.replayFilter)}function qy(t,e){t.filter=Ba(t.
filter,e)}function $y(t,e,r){var n=t.replayFilter;t.replayFilter=n?()=>Ba(n(),e()):e,t.justLimit=r&&
!n}function qO(t,e){t.isMatch=Ba(t.isMatch,e)}function ep(t,e){if(t.isPrimKey)return e.primaryKey;let r=e.
getIndexByKeyPath(t.index);if(!r)throw new G.Schema("KeyPath "+t.index+" on object store "+e.name+" \
is not indexed");return r}function Db(t,e,r){let n=ep(t,e.schema);return e.openCursor({trans:r,values:!t.
keysOnly,reverse:t.dir==="prev",unique:!!t.unique,query:{index:n,range:t.range}})}function Wf(t,e,r,n){
let i=t.replayFilter?Ba(t.filter,t.replayFilter()):t.filter;if(t.or){let a={},o=(s,l,u)=>{if(!i||i(l,
u,f=>l.stop(f),f=>l.fail(f))){var c=l.primaryKey,d=""+c;d==="[object ArrayBuffer]"&&(d=""+new Uint8Array(
c)),rr(a,d)||(a[d]=!0,e(s,l,u))}};return Promise.all([t.or._iterate(o,r),Ab(Db(t,n,r),t.algorithm,o,
!t.keysOnly&&t.valueMapper)])}else return Ab(Db(t,n,r),Ba(t.algorithm,i),e,!t.keysOnly&&t.valueMapper)}
function Ab(t,e,r,n){var i=n?(o,s,l)=>r(n(o),s,l):r,a=De(i);return t.then(o=>{if(o)return o.start(()=>{
var s=()=>o.continue();(!e||e(o,l=>s=l,l=>{o.stop(l),s=ye},l=>{o.fail(l),s=ye}))&&a(o.value,o,l=>s=l),
s()})})}function Dt(t,e){try{let r=Nb(t),n=Nb(e);if(r!==n)return r==="Array"?1:n==="Array"?-1:r==="b\
inary"?1:n==="binary"?-1:r==="string"?1:n==="string"?-1:r==="Date"?1:n!=="Date"?NaN:-1;switch(r){case"\
number":case"Date":case"string":return t>e?1:t<e?-1:0;case"binary":return VO(Fb(t),Fb(e));case"Array":
return $O(t,e)}}catch{}return NaN}function $O(t,e){let r=t.length,n=e.length,i=r<n?r:n;for(let a=0;a<
i;++a){let o=Dt(t[a],e[a]);if(o!==0)return o}return r===n?0:r<n?-1:1}function VO(t,e){let r=t.length,
n=e.length,i=r<n?r:n;for(let a=0;a<i;++a)if(t[a]!==e[a])return t[a]<e[a]?-1:1;return r===n?0:r<n?-1:
1}function Nb(t){let e=typeof t;if(e!=="object")return e;if(ArrayBuffer.isView(t))return"binary";let r=Ky(
t);return r==="ArrayBuffer"?"binary":r}function Fb(t){return t instanceof Uint8Array?t:ArrayBuffer.isView(
t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t)}var sv=class{_read(e,r){var n=this.
_ctx;return n.error?n.table._trans(null,Ze.bind(null,n.error)):n.table._trans("readonly",e).then(r)}_write(e){
var r=this._ctx;return r.error?r.table._trans(null,Ze.bind(null,r.error)):r.table._trans("readwrite",
e,"locked")}_addAlgorithm(e){var r=this._ctx;r.algorithm=Ba(r.algorithm,e)}_iterate(e,r){return Wf(this.
_ctx,e,r,this._ctx.table.core)}clone(e){var r=Object.create(this.constructor.prototype),n=Object.create(
this._ctx);return e&&At(n,e),r._ctx=n,r}raw(){return this._ctx.valueMapper=null,this}each(e){var r=this.
_ctx;return this._read(n=>Wf(r,e,n,r.table.core))}count(e){return this._read(r=>{let n=this._ctx,i=n.
table.core;if(as(n,!0))return i.count({trans:r,query:{index:ep(n,i.schema),range:n.range}}).then(o=>Math.
min(o,n.limit));var a=0;return Wf(n,()=>(++a,!1),r,i).then(()=>a)}).then(e)}sortBy(e,r){let n=e.split(
".").reverse(),i=n[0],a=n.length-1;function o(u,c){return c?o(u[n[c]],c-1):u[i]}var s=this._ctx.dir===
"next"?1:-1;function l(u,c){var d=o(u,a),f=o(c,a);return d<f?-s:d>f?s:0}return this.toArray(function(u){
return u.sort(l)}).then(r)}toArray(e){return this._read(r=>{var n=this._ctx;if(n.dir==="next"&&as(n,
!0)&&n.limit>0){let{valueMapper:i}=n,a=ep(n,n.table.core.schema);return n.table.core.query({trans:r,
limit:n.limit,values:!0,query:{index:a,range:n.range}}).then(({result:o})=>i?o.map(i):o)}else{let i=[];
return Wf(n,a=>i.push(a),r,n.table.core).then(()=>i)}},e)}offset(e){var r=this._ctx;return e<=0?this:
(r.offset+=e,as(r)?$y(r,()=>{var n=e;return(i,a)=>n===0?!0:n===1?(--n,!1):(a(()=>{i.advance(n),n=0}),
!1)}):$y(r,()=>{var n=e;return()=>--n<0}),this)}limit(e){return this._ctx.limit=Math.min(this._ctx.limit,
e),$y(this._ctx,()=>{var r=e;return function(n,i,a){return--r<=0&&i(a),r>=0}},!0),this}until(e,r){return qy(
this._ctx,function(n,i,a){return e(n.value)?(i(a),r):!0}),this}first(e){return this.limit(1).toArray(
function(r){return r[0]}).then(e)}last(e){return this.reverse().first(e)}filter(e){return qy(this._ctx,
function(r){return e(r.value)}),qO(this._ctx,e),this}and(e){return this.filter(e)}or(e){return new this.
db.WhereClause(this._ctx.table,e,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":
"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(e){
var r=this._ctx;return r.keysOnly=!r.isMatch,this.each(function(n,i){e(i.key,i)})}eachUniqueKey(e){return this.
_ctx.unique="unique",this.eachKey(e)}eachPrimaryKey(e){var r=this._ctx;return r.keysOnly=!r.isMatch,
this.each(function(n,i){e(i.primaryKey,i)})}keys(e){var r=this._ctx;r.keysOnly=!r.isMatch;var n=[];return this.
each(function(i,a){n.push(a.key)}).then(function(){return n}).then(e)}primaryKeys(e){var r=this._ctx;
if(r.dir==="next"&&as(r,!0)&&r.limit>0)return this._read(i=>{var a=ep(r,r.table.core.schema);return r.
table.core.query({trans:i,values:!1,limit:r.limit,query:{index:a,range:r.range}})}).then(({result:i})=>i).
then(e);r.keysOnly=!r.isMatch;var n=[];return this.each(function(i,a){n.push(a.primaryKey)}).then(function(){
return n}).then(e)}uniqueKeys(e){return this._ctx.unique="unique",this.keys(e)}firstKey(e){return this.
limit(1).keys(function(r){return r[0]}).then(e)}lastKey(e){return this.reverse().firstKey(e)}distinct(){
var e=this._ctx,r=e.index&&e.table.schema.idxByName[e.index];if(!r||!r.multi)return this;var n={};return qy(
this._ctx,function(i){var a=i.primaryKey.toString(),o=rr(n,a);return n[a]=!0,!o}),this}modify(e){var r=this.
_ctx;return this._write(n=>{var i;if(typeof e=="function")i=e;else{var a=Xe(e),o=a.length;i=function(g){
for(var E=!1,p=0;p<o;++p){var h=a[p],y=e[h];Bn(g,h)!==y&&(Ur(g,h,y),E=!0)}return E}}let s=r.table.core,
{outbound:l,extractKey:u}=s.schema.primaryKey,c=this.db._options.modifyChunkSize||200,d=[],f=0,m=[],
w=(g,E)=>{let{failures:p,numFailures:h}=E;f+=g-h;for(let y of Xe(p))d.push(p[y])};return this.clone().
primaryKeys().then(g=>{let E=p=>{let h=Math.min(c,g.length-p);return s.getMany({trans:n,keys:g.slice(
p,p+h),cache:"immutable"}).then(y=>{let x=[],T=[],v=l?[]:null,S=[];for(let D=0;D<h;++D){let F=y[D],L={
value:du(F),primKey:g[p+D]};i.call(L,L.value,L)!==!1&&(L.value==null?S.push(g[p+D]):!l&&Dt(u(F),u(L.
value))!==0?(S.push(g[p+D]),x.push(L.value)):(T.push(L.value),l&&v.push(g[p+D])))}let C=as(r)&&r.limit===
1/0&&(typeof e!="function"||e===Vy)&&{index:r.index,range:r.range};return Promise.resolve(x.length>0&&
s.mutate({trans:n,type:"add",values:x}).then(D=>{for(let F in D.failures)S.splice(parseInt(F),1);w(x.
length,D)})).then(()=>(T.length>0||C&&typeof e=="object")&&s.mutate({trans:n,type:"put",keys:v,values:T,
criteria:C,changeSpec:typeof e!="function"&&e}).then(D=>w(T.length,D))).then(()=>(S.length>0||C&&e===
Vy)&&s.mutate({trans:n,type:"delete",keys:S,criteria:C}).then(D=>w(S.length,D))).then(()=>g.length>p+
h&&E(p+c))})};return E(0).then(()=>{if(d.length>0)throw new tp("Error modifying one or more objects",
d,f,m);return g.length})})})}delete(){var e=this._ctx,r=e.range;return as(e)&&(e.isPrimKey&&!jO||r.type===
3)?this._write(n=>{let{primaryKey:i}=e.table.core.schema,a=r;return e.table.core.count({trans:n,query:{
index:i,range:a}}).then(o=>e.table.core.mutate({trans:n,type:"deleteRange",range:a}).then(({failures:s,
lastResult:l,results:u,numFailures:c})=>{if(c)throw new tp("Could not delete some values",Object.keys(
s).map(d=>s[d]),o-c);return o-c}))}):this.modify(Vy)}},Vy=(t,e)=>e.value=null;function WO(t){return gu(
sv.prototype,function(r,n){this.db=t;let i=oC,a=null;if(n)try{i=n()}catch(u){a=u}let o=r._ctx,s=o.table,
l=s.hook.reading.fire;this._ctx={table:s,index:o.index,isPrimKey:!o.index||s.schema.primKey.keyPath&&
o.index===s.schema.primKey.name,range:i,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,
replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:a,or:o.or,valueMapper:l!==fu?l:
null}})}function KO(t,e){return t<e?-1:t===e?0:1}function GO(t,e){return t>e?-1:t===e?0:1}function tr(t,e,r){
var n=t instanceof sp?new t.Collection(t):t;return n._ctx.error=r?new r(e):new TypeError(e),n}function os(t){
return new t.Collection(t,()=>sC("")).limit(0)}function XO(t){return t==="next"?e=>e.toUpperCase():e=>e.
toLowerCase()}function YO(t){return t==="next"?e=>e.toLowerCase():e=>e.toUpperCase()}function QO(t,e,r,n,i,a){
for(var o=Math.min(t.length,n.length),s=-1,l=0;l<o;++l){var u=e[l];if(u!==n[l])return i(t[l],r[l])<0?
t.substr(0,l)+r[l]+r.substr(l+1):i(t[l],n[l])<0?t.substr(0,l)+n[l]+r.substr(l+1):s>=0?t.substr(0,s)+
e[s]+r.substr(s+1):null;i(t[l],u)<0&&(s=l)}return o<n.length&&a==="next"?t+r.substr(t.length):o<t.length&&
a==="prev"?t.substr(0,r.length):s<0?null:t.substr(0,s)+n[s]+r.substr(s+1)}function Kf(t,e,r,n){var i,
a,o,s,l,u,c,d=r.length;if(!r.every(g=>typeof g=="string"))return tr(t,iC);function f(g){i=XO(g),a=YO(
g),o=g==="next"?KO:GO;var E=r.map(function(p){return{lower:a(p),upper:i(p)}}).sort(function(p,h){return o(
p.lower,h.lower)});s=E.map(function(p){return p.upper}),l=E.map(function(p){return p.lower}),u=g,c=g===
"next"?"":n}f("next");var m=new t.Collection(t,()=>Ri(s[0],l[d-1]+n));m._ondirectionchange=function(g){
f(g)};var w=0;return m._addAlgorithm(function(g,E,p){var h=g.key;if(typeof h!="string")return!1;var y=a(
h);if(e(y,l,w))return!0;for(var x=null,T=w;T<d;++T){var v=QO(h,y,s[T],l[T],o,u);v===null&&x===null?w=
T+1:(x===null||o(x,v)>0)&&(x=v)}return E(x!==null?function(){g.continue(x+c)}:p),!1}),m}function Ri(t,e,r,n){
return{type:2,lower:t,upper:e,lowerOpen:r,upperOpen:n}}function sC(t){return{type:1,lower:t,upper:t}}
var sp=class{get Collection(){return this._ctx.table.db.Collection}between(e,r,n,i){n=n!==!1,i=i===!0;
try{return this._cmp(e,r)>0||this._cmp(e,r)===0&&(n||i)&&!(n&&i)?os(this):new this.Collection(this,()=>Ri(
e,r,!n,!i))}catch{return tr(this,Dn)}}equals(e){return e==null?tr(this,Dn):new this.Collection(this,
()=>sC(e))}above(e){return e==null?tr(this,Dn):new this.Collection(this,()=>Ri(e,void 0,!0))}aboveOrEqual(e){
return e==null?tr(this,Dn):new this.Collection(this,()=>Ri(e,void 0,!1))}below(e){return e==null?tr(
this,Dn):new this.Collection(this,()=>Ri(void 0,e,!1,!0))}belowOrEqual(e){return e==null?tr(this,Dn):
new this.Collection(this,()=>Ri(void 0,e))}startsWith(e){return typeof e!="string"?tr(this,iC):this.
between(e,e+Da,!0,!0)}startsWithIgnoreCase(e){return e===""?this.startsWith(e):Kf(this,(r,n)=>r.indexOf(
n[0])===0,[e],Da)}equalsIgnoreCase(e){return Kf(this,(r,n)=>r===n[0],[e],"")}anyOfIgnoreCase(){var e=Nn.
apply(ss,arguments);return e.length===0?os(this):Kf(this,(r,n)=>n.indexOf(r)!==-1,e,"")}startsWithAnyOfIgnoreCase(){
var e=Nn.apply(ss,arguments);return e.length===0?os(this):Kf(this,(r,n)=>n.some(i=>r.indexOf(i)===0),
e,Da)}anyOf(){let e=Nn.apply(ss,arguments),r=this._cmp;try{e.sort(r)}catch{return tr(this,Dn)}if(e.length===
0)return os(this);let n=new this.Collection(this,()=>Ri(e[0],e[e.length-1]));n._ondirectionchange=a=>{
r=a==="next"?this._ascending:this._descending,e.sort(r)};let i=0;return n._addAlgorithm((a,o,s)=>{let l=a.
key;for(;r(l,e[i])>0;)if(++i,i===e.length)return o(s),!1;return r(l,e[i])===0?!0:(o(()=>{a.continue(
e[i])}),!1)}),n}notEqual(e){return this.inAnyRange([[av,e],[e,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){
let e=Nn.apply(ss,arguments);if(e.length===0)return new this.Collection(this);try{e.sort(this._ascending)}catch{
return tr(this,Dn)}let r=e.reduce((n,i)=>n?n.concat([[n[n.length-1][1],i]]):[[av,i]],null);return r.
push([e[e.length-1],this.db._maxKey]),this.inAnyRange(r,{includeLowers:!1,includeUppers:!1})}inAnyRange(e,r){
let n=this._cmp,i=this._ascending,a=this._descending,o=this._min,s=this._max;if(e.length===0)return os(
this);if(!e.every(x=>x[0]!==void 0&&x[1]!==void 0&&i(x[0],x[1])<=0))return tr(this,"First argument t\
o inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than\
 lower",G.InvalidArgument);let l=!r||r.includeLowers!==!1,u=r&&r.includeUppers===!0;function c(x,T){
let v=0,S=x.length;for(;v<S;++v){let C=x[v];if(n(T[0],C[1])<0&&n(T[1],C[0])>0){C[0]=o(C[0],T[0]),C[1]=
s(C[1],T[1]);break}}return v===S&&x.push(T),x}let d=i;function f(x,T){return d(x[0],T[0])}let m;try{
m=e.reduce(c,[]),m.sort(f)}catch{return tr(this,Dn)}let w=0,g=u?x=>i(x,m[w][1])>0:x=>i(x,m[w][1])>=0,
E=l?x=>a(x,m[w][0])>0:x=>a(x,m[w][0])>=0;function p(x){return!g(x)&&!E(x)}let h=g,y=new this.Collection(
this,()=>Ri(m[0][0],m[m.length-1][1],!l,!u));return y._ondirectionchange=x=>{x==="next"?(h=g,d=i):(h=
E,d=a),m.sort(f)},y._addAlgorithm((x,T,v)=>{for(var S=x.key;h(S);)if(++w,w===m.length)return T(v),!1;
return p(S)?!0:(this._cmp(S,m[w][1])===0||this._cmp(S,m[w][0])===0||T(()=>{d===i?x.continue(m[w][0]):
x.continue(m[w][1])}),!1)}),y}startsWithAnyOf(){let e=Nn.apply(ss,arguments);return e.every(r=>typeof r==
"string")?e.length===0?os(this):this.inAnyRange(e.map(r=>[r,r+Da])):tr(this,"startsWithAnyOf() only \
works with strings")}};function ZO(t){return gu(sp.prototype,function(r,n,i){this.db=t,this._ctx={table:r,
index:n===":id"?null:n,or:i};let a=t._deps.indexedDB;if(!a)throw new G.MissingAPI;this._cmp=this._ascending=
a.cmp.bind(a),this._descending=(o,s)=>a.cmp(s,o),this._max=(o,s)=>a.cmp(o,s)>0?o:s,this._min=(o,s)=>a.
cmp(o,s)<0?o:s,this._IDBKeyRange=t._deps.IDBKeyRange})}function on(t){return De(function(e){return su(
e),t(e.target.error),!1})}function su(t){t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.
preventDefault()}var lu="storagemutated",Di="x-storagemutated-1",Fi=mu(null,lu),lv=class{_lock(){return Jl(
!V.global),++this._reculock,this._reculock===1&&!V.global&&(V.lockOwnerFor=this),this}_unlock(){if(Jl(
!V.global),--this._reculock===0)for(V.global||(V.lockOwnerFor=null);this._blockedFuncs.length>0&&!this.
_locked();){var e=this._blockedFuncs.shift();try{ps(e[1],e[0])}catch{}}return this}_locked(){return this.
_reculock&&V.lockOwnerFor!==this}create(e){if(!this.mode)return this;let r=this.db.idbdb,n=this.db._state.
dbOpenError;if(Jl(!this.idbtrans),!e&&!r)switch(n&&n.name){case"DatabaseClosedError":throw new G.DatabaseClosed(
n);case"MissingAPIError":throw new G.MissingAPI(n.message,n);default:throw new G.OpenFailed(n)}if(!this.
active)throw new G.TransactionInactive;return Jl(this._completion._state===null),e=this.idbtrans=e||
(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):
r.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),e.onerror=De(
i=>{su(i),this._reject(e.error)}),e.onabort=De(i=>{su(i),this.active&&this._reject(new G.Abort(e.error)),
this.active=!1,this.on("abort").fire(i)}),e.oncomplete=De(()=>{this.active=!1,this._resolve(),"mutat\
edParts"in e&&Fi.storagemutated.fire(e.mutatedParts)}),this}_promise(e,r,n){if(e==="readwrite"&&this.
mode!=="readwrite")return Ze(new G.ReadOnly("Transaction is readonly"));if(!this.active)return Ze(new G.
TransactionInactive);if(this._locked())return new j((a,o)=>{this._blockedFuncs.push([()=>{this._promise(
e,r,n).then(a,o)},V])});if(n)return Ai(()=>{var a=new j((o,s)=>{this._lock();let l=r(o,s,this);l&&l.
then&&l.then(o,s)});return a.finally(()=>this._unlock()),a._lib=!0,a});var i=new j((a,o)=>{var s=r(a,
o,this);s&&s.then&&s.then(a,o)});return i._lib=!0,i}_root(){return this.parent?this.parent._root():this}waitFor(e){
var r=this._root();let n=j.resolve(e);if(r._waitingFor)r._waitingFor=r._waitingFor.then(()=>n);else{
r._waitingFor=n,r._waitingQueue=[];var i=r.idbtrans.objectStore(r.storeNames[0]);(function o(){for(++r.
_spinCount;r._waitingQueue.length;)r._waitingQueue.shift()();r._waitingFor&&(i.get(-1/0).onsuccess=o)})()}
var a=r._waitingFor;return new j((o,s)=>{n.then(l=>r._waitingQueue.push(De(o.bind(null,l))),l=>r._waitingQueue.
push(De(s.bind(null,l)))).finally(()=>{r._waitingFor===a&&(r._waitingFor=null)})})}abort(){this.active&&
(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new G.Abort))}table(e){let r=this.
_memoizedTables||(this._memoizedTables={});if(rr(r,e))return r[e];let n=this.schema[e];if(!n)throw new G.
NotFound("Table "+e+" not part of transaction");let i=new this.db.Table(e,n,this);return i.core=this.
db.core.table(e),r[e]=i,i}};function JO(t){return gu(lv.prototype,function(r,n,i,a,o){this.db=t,this.
mode=r,this.storeNames=n,this.schema=i,this.chromeTransactionDurability=a,this.idbtrans=null,this.on=
mu(this,"complete","error","abort"),this.parent=o||null,this.active=!0,this._reculock=0,this._blockedFuncs=
[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=
0,this._completion=new j((s,l)=>{this._resolve=s,this._reject=l}),this._completion.then(()=>{this.active=
!1,this.on.complete.fire()},s=>{var l=this.active;return this.active=!1,this.on.error.fire(s),this.parent?
this.parent._reject(s):l&&this.idbtrans&&this.idbtrans.abort(),Ze(s)})})}function uv(t,e,r,n,i,a,o){
return{name:t,keyPath:e,unique:r,multi:n,auto:i,compound:a,src:(r&&!o?"&":"")+(n?"*":"")+(i?"++":"")+
lC(e)}}function lC(t){return typeof t=="string"?t:t?"["+[].join.call(t,"+")+"]":""}function uC(t,e,r){
return{name:t,primKey:e,indexes:r,mappedClass:null,idxByName:jb(r,n=>[n.name,n])}}function eL(t){return t.
length===1?t[0]:t}var uu=t=>{try{return t.only([[]]),uu=()=>[[]],[[]]}catch{return uu=()=>Da,Da}};function cv(t){
return t==null?()=>{}:typeof t=="string"?tL(t):e=>Bn(e,t)}function tL(t){return t.split(".").length===
1?r=>r[t]:r=>Bn(r,t)}function Bb(t){return[].slice.call(t)}var rL=0;function nu(t){return t==null?":\
id":typeof t=="string"?t:`[${t.join("+")}]`}function nL(t,e,r){function n(c,d){let f=Bb(c.objectStoreNames);
return{schema:{name:c.name,tables:f.map(m=>d.objectStore(m)).map(m=>{let{keyPath:w,autoIncrement:g}=m,
E=_t(w),p=w==null,h={},y={name:m.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:p,compound:E,keyPath:w,
autoIncrement:g,unique:!0,extractKey:cv(w)},indexes:Bb(m.indexNames).map(x=>m.index(x)).map(x=>{let{
name:T,unique:v,multiEntry:S,keyPath:C}=x,D=_t(C),F={name:T,compound:D,keyPath:C,unique:v,multiEntry:S,
extractKey:cv(C)};return h[nu(C)]=F,F}),getIndexByKeyPath:x=>h[nu(x)]};return h[":id"]=y.primaryKey,
w!=null&&(h[nu(w)]=y.primaryKey),y})},hasGetAll:f.length>0&&"getAll"in d.objectStore(f[0])&&!(typeof navigator<
"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.
userAgent.match(/Safari\/(\d*)/))[1]<604)}}function i(c){if(c.type===3)return null;if(c.type===4)throw new Error(
"Cannot convert never type to IDBKeyRange");let{lower:d,upper:f,lowerOpen:m,upperOpen:w}=c;return d===
void 0?f===void 0?null:e.upperBound(f,!!w):f===void 0?e.lowerBound(d,!!m):e.bound(d,f,!!m,!!w)}function a(c){
let d=c.name;function f({trans:g,type:E,keys:p,values:h,range:y}){return new Promise((x,T)=>{x=De(x);
let v=g.objectStore(d),S=v.keyPath==null,C=E==="put"||E==="add";if(!C&&E!=="delete"&&E!=="deleteRang\
e")throw new Error("Invalid operation type: "+E);let{length:D}=p||h||{length:1};if(p&&h&&p.length!==
h.length)throw new Error("Given keys array must have same length as given values array.");if(D===0)return x(
{numFailures:0,failures:{},results:[],lastResult:void 0});let F,L=[],de=[],q=0,je=Je=>{++q,su(Je)};if(E===
"deleteRange"){if(y.type===4)return x({numFailures:q,failures:de,results:[],lastResult:void 0});y.type===
3?L.push(F=v.clear()):L.push(F=v.delete(i(y)))}else{let[Je,le]=C?S?[h,p]:[h,null]:[p,null];if(C)for(let Be=0;Be<
D;++Be)L.push(F=le&&le[Be]!==void 0?v[E](Je[Be],le[Be]):v[E](Je[Be])),F.onerror=je;else for(let Be=0;Be<
D;++Be)L.push(F=v[E](Je[Be])),F.onerror=je}let ht=Je=>{let le=Je.target.result;L.forEach((Be,Er)=>Be.
error!=null&&(de[Er]=Be.error)),x({numFailures:q,failures:de,results:E==="delete"?p:L.map(Be=>Be.result),
lastResult:le})};F.onerror=Je=>{je(Je),ht(Je)},F.onsuccess=ht})}function m({trans:g,values:E,query:p,
reverse:h,unique:y}){return new Promise((x,T)=>{x=De(x);let{index:v,range:S}=p,C=g.objectStore(d),D=v.
isPrimaryKey?C:C.index(v.name),F=h?y?"prevunique":"prev":y?"nextunique":"next",L=E||!("openKeyCursor"in
D)?D.openCursor(i(S),F):D.openKeyCursor(i(S),F);L.onerror=on(T),L.onsuccess=De(de=>{let q=L.result;if(!q){
x(null);return}q.___id=++rL,q.done=!1;let je=q.continue.bind(q),ht=q.continuePrimaryKey;ht&&(ht=ht.bind(
q));let Je=q.advance.bind(q),le=()=>{throw new Error("Cursor not started")},Be=()=>{throw new Error(
"Cursor not stopped")};q.trans=g,q.stop=q.continue=q.continuePrimaryKey=q.advance=le,q.fail=De(T),q.
next=function(){let Er=1;return this.start(()=>Er--?this.continue():this.stop()).then(()=>this)},q.start=
Er=>{let Un=new Promise((qt,zn)=>{qt=De(qt),L.onerror=on(zn),q.fail=zn,q.stop=_r=>{q.stop=q.continue=
q.continuePrimaryKey=q.advance=Be,qt(_r)}}),Ht=()=>{if(L.result)try{Er()}catch(qt){q.fail(qt)}else q.
done=!0,q.start=()=>{throw new Error("Cursor behind last entry")},q.stop()};return L.onsuccess=De(qt=>{
L.onsuccess=Ht,Ht()}),q.continue=je,q.continuePrimaryKey=ht,q.advance=Je,Ht(),Un},x(q)},T)})}function w(g){
return E=>new Promise((p,h)=>{p=De(p);let{trans:y,values:x,limit:T,query:v}=E,S=T===1/0?void 0:T,{index:C,
range:D}=v,F=y.objectStore(d),L=C.isPrimaryKey?F:F.index(C.name),de=i(D);if(T===0)return p({result:[]});
if(g){let q=x?L.getAll(de,S):L.getAllKeys(de,S);q.onsuccess=je=>p({result:je.target.result}),q.onerror=
on(h)}else{let q=0,je=x||!("openKeyCursor"in L)?L.openCursor(de):L.openKeyCursor(de),ht=[];je.onsuccess=
Je=>{let le=je.result;if(!le)return p({result:ht});if(ht.push(x?le.value:le.primaryKey),++q===T)return p(
{result:ht});le.continue()},je.onerror=on(h)}})}return{name:d,schema:c,mutate:f,getMany({trans:g,keys:E}){
return new Promise((p,h)=>{p=De(p);let y=g.objectStore(d),x=E.length,T=new Array(x),v=0,S=0,C,D=L=>{
let de=L.target;(T[de._pos]=de.result)!=null,++S===v&&p(T)},F=on(h);for(let L=0;L<x;++L)E[L]!=null&&
(C=y.get(E[L]),C._pos=L,C.onsuccess=D,C.onerror=F,++v);v===0&&p(T)})},get({trans:g,key:E}){return new Promise(
(p,h)=>{p=De(p);let x=g.objectStore(d).get(E);x.onsuccess=T=>p(T.target.result),x.onerror=on(h)})},query:w(
s),openCursor:m,count({query:g,trans:E}){let{index:p,range:h}=g;return new Promise((y,x)=>{let T=E.objectStore(
d),v=p.isPrimaryKey?T:T.index(p.name),S=i(h),C=S?v.count(S):v.count();C.onsuccess=De(D=>y(D.target.result)),
C.onerror=on(x)})}}}let{schema:o,hasGetAll:s}=n(t,r),l=o.tables.map(c=>a(c)),u={};return l.forEach(c=>u[c.
name]=c),{stack:"dbcore",transaction:t.transaction.bind(t),table(c){if(!u[c])throw new Error(`Table \
'${c}' not found`);return u[c]},MIN_KEY:-1/0,MAX_KEY:uu(e),schema:o}}function iL(t,e){return e.reduce(
(r,{create:n})=>({...r,...n(r)}),t)}function aL(t,e,{IDBKeyRange:r,indexedDB:n},i){return{dbcore:iL(
nL(e,r,i),t.dbcore)}}function Iv({_novip:t},e){let r=e.db,n=aL(t._middlewares,r,t._deps,e);t.core=n.
dbcore,t.tables.forEach(i=>{let a=i.name;t.core.schema.tables.some(o=>o.name===a)&&(i.core=t.core.table(
a),t[a]instanceof t.Table&&(t[a].core=i.core))})}function lp({_novip:t},e,r,n){r.forEach(i=>{let a=n[i];
e.forEach(o=>{let s=xv(o,i);(!s||"value"in s&&s.value===void 0)&&(o===t.Transaction.prototype||o instanceof
t.Transaction?Mn(o,i,{get(){return this.table(i)},set(l){Lb(this,i,{value:l,writable:!0,configurable:!0,
enumerable:!0})}}):o[i]=new t.Table(i,a))})})}function dv({_novip:t},e){e.forEach(r=>{for(let n in r)
r[n]instanceof t.Table&&delete r[n]})}function oL(t,e){return t._cfg.version-e._cfg.version}function sL(t,e,r,n){
let i=t._dbSchema,a=t._createTransaction("readwrite",t._storeNames,i);a.create(r),a._completion.catch(
n);let o=a._reject.bind(a),s=V.transless||V;Ai(()=>{V.trans=a,V.transless=s,e===0?(Xe(i).forEach(l=>{
Rv(r,l,i[l].primKey,i[l].indexes)}),Iv(t,r),j.follow(()=>t.on.populate.fire(a)).catch(o)):lL(t,e,a,r).
catch(o)})}function lL({_novip:t},e,r,n){let i=[],a=t._versions,o=t._dbSchema=Pv(t,t.idbdb,n),s=!1;a.
filter(c=>c._cfg.version>=e).forEach(c=>{i.push(()=>{let d=o,f=c._cfg.dbschema;pv(t,d,n),pv(t,f,n),o=
t._dbSchema=f;let m=cC(d,f);m.add.forEach(g=>{Rv(n,g[0],g[1].primKey,g[1].indexes)}),m.change.forEach(
g=>{if(g.recreate)throw new G.Upgrade("Not yet support for changing primary key");{let E=n.objectStore(
g.name);g.add.forEach(p=>fv(E,p)),g.change.forEach(p=>{E.deleteIndex(p.name),fv(E,p)}),g.del.forEach(
p=>E.deleteIndex(p))}});let w=c._cfg.contentUpgrade;if(w&&c._cfg.version>e){Iv(t,n),r._memoizedTables=
{},s=!0;let g=Hb(f);m.del.forEach(y=>{g[y]=d[y]}),dv(t,[t.Transaction.prototype]),lp(t,[t.Transaction.
prototype],Xe(g),g),r.schema=g;let E=Ev(w);E&&fs();let p,h=j.follow(()=>{if(p=w(r),p&&E){var y=On.bind(
null,null);p.then(y,y)}});return p&&typeof p.then=="function"?j.resolve(p):h.then(()=>p)}}),i.push(d=>{
if(!s||!zO){let f=c._cfg.dbschema;cL(f,d)}dv(t,[t.Transaction.prototype]),lp(t,[t.Transaction.prototype],
t._storeNames,t._dbSchema),r.schema=t._dbSchema})});function u(){return i.length?j.resolve(i.shift()(
r.idbtrans)).then(u):j.resolve()}return u().then(()=>{uL(o,n)})}function cC(t,e){let r={del:[],add:[],
change:[]},n;for(n in t)e[n]||r.del.push(n);for(n in e){let i=t[n],a=e[n];if(!i)r.add.push([n,a]);else{
let o={name:n,def:a,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(a.primKey.
keyPath||"")||i.primKey.auto!==a.primKey.auto&&!pp)o.recreate=!0,r.change.push(o);else{let s=i.idxByName,
l=a.idxByName,u;for(u in s)l[u]||o.del.push(u);for(u in l){let c=s[u],d=l[u];c?c.src!==d.src&&o.change.
push(d):o.add.push(d)}(o.del.length>0||o.add.length>0||o.change.length>0)&&r.change.push(o)}}}return r}
function Rv(t,e,r,n){let i=t.db.createObjectStore(e,r.keyPath?{keyPath:r.keyPath,autoIncrement:r.auto}:
{autoIncrement:r.auto});return n.forEach(a=>fv(i,a)),i}function uL(t,e){Xe(t).forEach(r=>{e.db.objectStoreNames.
contains(r)||Rv(e,r,t[r].primKey,t[r].indexes)})}function cL(t,e){[].slice.call(e.db.objectStoreNames).
forEach(r=>t[r]==null&&e.db.deleteObjectStore(r))}function fv(t,e){t.createIndex(e.name,e.keyPath,{unique:e.
unique,multiEntry:e.multi})}function Pv(t,e,r){let n={};return dp(e.objectStoreNames,0).forEach(a=>{
let o=r.objectStore(a),s=o.keyPath,l=uv(lC(s),s||"",!1,!1,!!o.autoIncrement,s&&typeof s!="string",!0),
u=[];for(let d=0;d<o.indexNames.length;++d){let f=o.index(o.indexNames[d]);s=f.keyPath;var c=uv(f.name,
s,!!f.unique,!!f.multiEntry,!1,s&&typeof s!="string",!1);u.push(c)}n[a]=uC(a,l,u)}),n}function dL({_novip:t},e,r){
t.verno=e.version/10;let n=t._dbSchema=Pv(t,e,r);t._storeNames=dp(e.objectStoreNames,0),lp(t,[t._allTables],
Xe(n),n)}function fL(t,e){let r=Pv(t,t.idbdb,e),n=cC(r,t._dbSchema);return!(n.add.length||n.change.some(
i=>i.add.length||i.change.length))}function pv({_novip:t},e,r){let n=r.db.objectStoreNames;for(let i=0;i<
n.length;++i){let a=n[i],o=r.objectStore(a);t._hasGetAll="getAll"in o;for(let s=0;s<o.indexNames.length;++s){
let l=o.indexNames[s],u=o.index(l).keyPath,c=typeof u=="string"?u:"["+dp(u).join("+")+"]";if(e[a]){let d=e[a].
idxByName[c];d&&(d.name=l,delete e[a].idxByName[c],e[a].idxByName[l]=d)}}}typeof navigator<"u"&&/Safari/.
test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&be.WorkerGlobalScope&&be instanceof
be.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(t._hasGetAll=!1)}
function pL(t){return t.split(",").map((e,r)=>{e=e.trim();let n=e.replace(/([&*]|\+\+)/g,""),i=/^\[/.
test(n)?n.match(/^\[(.*)\]$/)[1].split("+"):n;return uv(n,i||null,/\&/.test(e),/\*/.test(e),/\+\+/.test(
e),_t(i),r===0)})}var hv=class{_parseStoresSpec(e,r){Xe(e).forEach(n=>{if(e[n]!==null){var i=pL(e[n]),
a=i.shift();if(a.multi)throw new G.Schema("Primary key cannot be multi-valued");i.forEach(o=>{if(o.auto)
throw new G.Schema("Only primary key can be marked as autoIncrement (++)");if(!o.keyPath)throw new G.
Schema("Index must have a name and cannot be an empty string")}),r[n]=uC(n,a,i)}})}stores(e){let r=this.
db;this._cfg.storesSource=this._cfg.storesSource?At(this._cfg.storesSource,e):e;let n=r._versions,i={},
a={};return n.forEach(o=>{At(i,o._cfg.storesSource),a=o._cfg.dbschema={},o._parseStoresSpec(i,a)}),r.
_dbSchema=a,dv(r,[r._allTables,r,r.Transaction.prototype]),lp(r,[r._allTables,r,r.Transaction.prototype,
this._cfg.tables],Xe(a),a),r._storeNames=Xe(a),this}upgrade(e){return this._cfg.contentUpgrade=Tv(this.
_cfg.contentUpgrade||ye,e),this}};function hL(t){return gu(hv.prototype,function(r){this.db=t,this._cfg=
{version:r,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}function Dv(t,e){let r=t._dbNamesDB;
return r||(r=t._dbNamesDB=new Ma(hp,{addons:[],indexedDB:t,IDBKeyRange:e}),r.version(1).stores({dbnames:"\
name"})),r.table("dbnames")}function Av(t){return t&&typeof t.databases=="function"}function mL({indexedDB:t,
IDBKeyRange:e}){return Av(t)?Promise.resolve(t.databases()).then(r=>r.map(n=>n.name).filter(n=>n!==hp)):
Dv(t,e).toCollection().primaryKeys()}function gL({indexedDB:t,IDBKeyRange:e},r){!Av(t)&&r!==hp&&Dv(t,
e).put({name:r}).catch(ye)}function yL({indexedDB:t,IDBKeyRange:e},r){!Av(t)&&r!==hp&&Dv(t,e).delete(
r).catch(ye)}function mv(t){return Ai(function(){return V.letThrough=!0,t()})}function vL(){var t=!navigator.
userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!t||
!indexedDB.databases)return Promise.resolve();var e;return new Promise(function(r){var n=function(){
return indexedDB.databases().finally(r)};e=setInterval(n,100),n()}).finally(function(){return clearInterval(
e)})}function wL(t){let e=t._state,{indexedDB:r}=t._deps;if(e.isBeingOpened||t.idbdb)return e.dbReadyPromise.
then(()=>e.dbOpenError?Ze(e.dbOpenError):t);sn&&(e.openCanceller._stackHolder=Oa()),e.isBeingOpened=
!0,e.dbOpenError=null,e.openComplete=!1;let n=e.openCanceller;function i(){if(e.openCanceller!==n)throw new G.
DatabaseClosed("db.open() was cancelled")}let a=e.dbReadyResolve,o=null,s=!1;return j.race([n,(typeof navigator>
"u"?j.resolve():vL()).then(()=>new j((l,u)=>{if(i(),!r)throw new G.MissingAPI;let c=t.name,d=e.autoSchema?
r.open(c):r.open(c,Math.round(t.verno*10));if(!d)throw new G.MissingAPI;d.onerror=on(u),d.onblocked=
De(t._fireOnBlocked),d.onupgradeneeded=De(f=>{if(o=d.transaction,e.autoSchema&&!t._options.allowEmptyDB){
d.onerror=su,o.abort(),d.result.close();let w=r.deleteDatabase(c);w.onsuccess=w.onerror=De(()=>{u(new G.
NoSuchDatabase(`Database ${c} doesnt exist`))})}else{o.onerror=on(u);var m=f.oldVersion>Math.pow(2,62)?
0:f.oldVersion;s=m<1,t._novip.idbdb=d.result,sL(t,m/10,o,u)}},u),d.onsuccess=De(()=>{o=null;let f=t.
_novip.idbdb=d.result,m=dp(f.objectStoreNames);if(m.length>0)try{let w=f.transaction(eL(m),"readonly");
e.autoSchema?dL(t,f,w):(pv(t,t._dbSchema,w),fL(t,w)||console.warn("Dexie SchemaDiff: Schema was exte\
nded without increasing the number passed to db.version(). Some queries may fail.")),Iv(t,w)}catch{}
ru.push(t),f.onversionchange=De(w=>{e.vcFired=!0,t.on("versionchange").fire(w)}),f.onclose=De(w=>{t.
on("close").fire(w)}),s&&gL(t._deps,c),l()},u)}))]).then(()=>(i(),e.onReadyBeingFired=[],j.resolve(mv(
()=>t.on.ready.fire(t.vip))).then(function l(){if(e.onReadyBeingFired.length>0){let u=e.onReadyBeingFired.
reduce(Tv,ye);return e.onReadyBeingFired=[],j.resolve(mv(()=>u(t.vip))).then(l)}}))).finally(()=>{e.
onReadyBeingFired=null,e.isBeingOpened=!1}).then(()=>t).catch(l=>{e.dbOpenError=l;try{o&&o.abort()}catch{}
return n===e.openCanceller&&t._close(),Ze(l)}).finally(()=>{e.openComplete=!0,a()})}function gv(t){var e=o=>t.
next(o),r=o=>t.throw(o),n=a(e),i=a(r);function a(o){return s=>{var l=o(s),u=l.value;return l.done?u:
!u||typeof u.then!="function"?_t(u)?Promise.all(u).then(n,i):n(u):u.then(n,i)}}return a(e)()}function xL(t,e,r){
var n=arguments.length;if(n<2)throw new G.InvalidArgument("Too few arguments");for(var i=new Array(n-
1);--n;)i[n-1]=arguments[n];r=i.pop();var a=qb(i);return[t,a,r]}function dC(t,e,r,n,i){return j.resolve().
then(()=>{let a=V.transless||V,o=t._createTransaction(e,r,t._dbSchema,n),s={trans:o,transless:a};if(n)
o.idbtrans=n.idbtrans;else try{o.create(),t._state.PR1398_maxLoop=3}catch(d){return d.name===Sv.InvalidState&&
t.isOpen()&&--t._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),t._close(),t.open().
then(()=>dC(t,e,r,null,i))):Ze(d)}let l=Ev(i);l&&fs();let u,c=j.follow(()=>{if(u=i.call(o,o),u)if(l){
var d=On.bind(null,null);u.then(d,d)}else typeof u.next=="function"&&typeof u.throw=="function"&&(u=
gv(u))},s);return(u&&typeof u.then=="function"?j.resolve(u).then(d=>o.active?d:Ze(new G.PrematureCommit(
"Transaction committed too early. See http://bit.ly/2kdckMn"))):c.then(()=>u)).then(d=>(n&&o._resolve(),
o._completion.then(()=>d))).catch(d=>(o._reject(d),Ze(d)))})}function Gf(t,e,r){let n=_t(t)?t.slice():
[t];for(let i=0;i<r;++i)n.push(e);return n}function EL(t){return{...t,table(e){let r=t.table(e),{schema:n}=r,
i={},a=[];function o(f,m,w){let g=nu(f),E=i[g]=i[g]||[],p=f==null?0:typeof f=="string"?1:f.length,h=m>
0,y={...w,isVirtual:h,keyTail:m,keyLength:p,extractKey:cv(f),unique:!h&&w.unique};if(E.push(y),y.isPrimaryKey||
a.push(y),p>1){let x=p===2?f[0]:f.slice(0,p-1);o(x,m+1,w)}return E.sort((x,T)=>x.keyTail-T.keyTail),
y}let s=o(n.primaryKey.keyPath,0,n.primaryKey);i[":id"]=[s];for(let f of n.indexes)o(f.keyPath,0,f);
function l(f){let m=i[nu(f)];return m&&m[0]}function u(f,m){return{type:f.type===1?2:f.type,lower:Gf(
f.lower,f.lowerOpen?t.MAX_KEY:t.MIN_KEY,m),lowerOpen:!0,upper:Gf(f.upper,f.upperOpen?t.MIN_KEY:t.MAX_KEY,
m),upperOpen:!0}}function c(f){let m=f.query.index;return m.isVirtual?{...f,query:{index:m,range:u(f.
query.range,m.keyTail)}}:f}return{...r,schema:{...n,primaryKey:s,indexes:a,getIndexByKeyPath:l},count(f){
return r.count(c(f))},query(f){return r.query(c(f))},openCursor(f){let{keyTail:m,isVirtual:w,keyLength:g}=f.
query.index;if(!w)return r.openCursor(f);function E(p){function h(x){x!=null?p.continue(Gf(x,f.reverse?
t.MAX_KEY:t.MIN_KEY,m)):f.unique?p.continue(p.key.slice(0,g).concat(f.reverse?t.MIN_KEY:t.MAX_KEY,m)):
p.continue()}return Object.create(p,{continue:{value:h},continuePrimaryKey:{value(x,T){p.continuePrimaryKey(
Gf(x,t.MAX_KEY,m),T)}},primaryKey:{get(){return p.primaryKey}},key:{get(){let x=p.key;return g===1?x[0]:
x.slice(0,g)}},value:{get(){return p.value}}})}return r.openCursor(c(f)).then(p=>p&&E(p))}}}}}var _L={
stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:EL};function Nv(t,e,r,n){return r=r||{},
n=n||"",Xe(t).forEach(i=>{if(!rr(e,i))r[n+i]=void 0;else{var a=t[i],o=e[i];if(typeof a=="object"&&typeof o==
"object"&&a&&o){let s=Ky(a),l=Ky(o);s!==l?r[n+i]=e[i]:s==="Object"?Nv(a,o,r,n+i+"."):a!==o&&(r[n+i]=
e[i])}else a!==o&&(r[n+i]=e[i])}}),Xe(e).forEach(i=>{rr(t,i)||(r[n+i]=e[i])}),r}function SL(t,e){return e.
type==="delete"?e.keys:e.keys||e.values.map(t.extractKey)}var TL={stack:"dbcore",name:"HooksMiddlewa\
re",level:2,create:t=>({...t,table(e){let r=t.table(e),{primaryKey:n}=r.schema;return{...r,mutate(a){
let o=V.trans,{deleting:s,creating:l,updating:u}=o.table(e).hook;switch(a.type){case"add":if(l.fire===
ye)break;return o._promise("readwrite",()=>c(a),!0);case"put":if(l.fire===ye&&u.fire===ye)break;return o.
_promise("readwrite",()=>c(a),!0);case"delete":if(s.fire===ye)break;return o._promise("readwrite",()=>c(
a),!0);case"deleteRange":if(s.fire===ye)break;return o._promise("readwrite",()=>d(a),!0)}return r.mutate(
a);function c(m){let w=V.trans,g=m.keys||SL(n,m);if(!g)throw new Error("Keys missing");return m=m.type===
"add"||m.type==="put"?{...m,keys:g}:{...m},m.type!=="delete"&&(m.values=[...m.values]),m.keys&&(m.keys=
[...m.keys]),kL(r,m,g).then(E=>{let p=g.map((h,y)=>{let x=E[y],T={onerror:null,onsuccess:null};if(m.
type==="delete")s.fire.call(T,h,x,w);else if(m.type==="add"||x===void 0){let v=l.fire.call(T,h,m.values[y],
w);h==null&&v!=null&&(h=v,m.keys[y]=h,n.outbound||Ur(m.values[y],n.keyPath,h))}else{let v=Nv(x,m.values[y]),
S=u.fire.call(T,v,h,x,w);if(S){let C=m.values[y];Object.keys(S).forEach(D=>{rr(C,D)?C[D]=S[D]:Ur(C,D,
S[D])})}}return T});return r.mutate(m).then(({failures:h,results:y,numFailures:x,lastResult:T})=>{for(let v=0;v<
g.length;++v){let S=y?y[v]:g[v],C=p[v];S==null?C.onerror&&C.onerror(h[v]):C.onsuccess&&C.onsuccess(m.
type==="put"&&E[v]?m.values[v]:S)}return{failures:h,results:y,numFailures:x,lastResult:T}}).catch(h=>(p.
forEach(y=>y.onerror&&y.onerror(h)),Promise.reject(h)))})}function d(m){return f(m.trans,m.range,1e4)}
function f(m,w,g){return r.query({trans:m,values:!1,query:{index:n,range:w},limit:g}).then(({result:E})=>c(
{type:"delete",keys:E,trans:m}).then(p=>p.numFailures>0?Promise.reject(p.failures[0]):E.length<g?{failures:[],
numFailures:0,lastResult:void 0}:f(m,{...w,lower:E[E.length-1],lowerOpen:!0},g)))}}}}})};function kL(t,e,r){
return e.type==="add"?Promise.resolve([]):t.getMany({trans:e.trans,keys:r,cache:"immutable"})}function fC(t,e,r){
try{if(!e||e.keys.length<t.length)return null;let n=[];for(let i=0,a=0;i<e.keys.length&&a<t.length;++i)
Dt(e.keys[i],t[a])===0&&(n.push(r?du(e.values[i]):e.values[i]),++a);return n.length===t.length?n:null}catch{
return null}}var bL={stack:"dbcore",level:-1,create:t=>({table:e=>{let r=t.table(e);return{...r,getMany:n=>{
if(!n.cache)return r.getMany(n);let i=fC(n.keys,n.trans._cache,n.cache==="clone");return i?j.resolve(
i):r.getMany(n).then(a=>(n.trans._cache={keys:n.keys,values:n.cache==="clone"?du(a):a},a))},mutate:n=>(n.
type!=="add"&&(n.trans._cache=null),r.mutate(n))}}})};function Fv(t){return!("from"in t)}var An=function(t,e){
if(this)At(this,arguments.length?{d:1,from:t,to:arguments.length>1?e:t}:{d:0});else{let r=new An;return t&&
"d"in t&&At(r,t),r}};us(An.prototype,{add(t){return up(this,t),this},addKey(t){return cu(this,t,t),this},
addKeys(t){return t.forEach(e=>cu(this,e,e)),this},[Gy](){return yv(this)}});function cu(t,e,r){let n=Dt(
e,r);if(isNaN(n))return;if(n>0)throw RangeError();if(Fv(t))return At(t,{from:e,to:r,d:1});let i=t.l,
a=t.r;if(Dt(r,t.from)<0)return i?cu(i,e,r):t.l={from:e,to:r,d:1,l:null,r:null},Mb(t);if(Dt(e,t.to)>0)
return a?cu(a,e,r):t.r={from:e,to:r,d:1,l:null,r:null},Mb(t);Dt(e,t.from)<0&&(t.from=e,t.l=null,t.d=
a?a.d+1:1),Dt(r,t.to)>0&&(t.to=r,t.r=null,t.d=t.l?t.l.d+1:1);let o=!t.r;i&&!t.l&&up(t,i),a&&o&&up(t,
a)}function up(t,e){function r(n,{from:i,to:a,l:o,r:s}){cu(n,i,a),o&&r(n,o),s&&r(n,s)}Fv(e)||r(t,e)}
function CL(t,e){let r=yv(e),n=r.next();if(n.done)return!1;let i=n.value,a=yv(t),o=a.next(i.from),s=o.
value;for(;!n.done&&!o.done;){if(Dt(s.from,i.to)<=0&&Dt(s.to,i.from)>=0)return!0;Dt(i.from,s.from)<0?
i=(n=r.next(s.from)).value:s=(o=a.next(i.from)).value}return!1}function yv(t){let e=Fv(t)?null:{s:0,
n:t};return{next(r){let n=arguments.length>0;for(;e;)switch(e.s){case 0:if(e.s=1,n)for(;e.n.l&&Dt(r,
e.n.from)<0;)e={up:e,n:e.n.l,s:1};else for(;e.n.l;)e={up:e,n:e.n.l,s:1};case 1:if(e.s=2,!n||Dt(r,e.n.
to)<=0)return{value:e.n,done:!1};case 2:if(e.n.r){e.s=3,e={up:e,n:e.n.r,s:0};continue}case 3:e=e.up}
return{done:!0}}}}function Mb(t){var e,r;let n=(((e=t.r)===null||e===void 0?void 0:e.d)||0)-(((r=t.l)===
null||r===void 0?void 0:r.d)||0),i=n>1?"r":n<-1?"l":"";if(i){let a=i==="r"?"l":"r",o={...t},s=t[i];t.
from=s.from,t.to=s.to,t[i]=s[i],o[i]=s[a],t[a]=o,o.d=Ob(o)}t.d=Ob(t)}function Ob({r:t,l:e}){return(t?
e?Math.max(t.d,e.d):t.d:e?e.d:0)+1}var IL={stack:"dbcore",level:0,create:t=>{let e=t.schema.name,r=new An(
t.MIN_KEY,t.MAX_KEY);return{...t,table:n=>{let i=t.table(n),{schema:a}=i,{primaryKey:o}=a,{extractKey:s,
outbound:l}=o,u={...i,mutate:f=>{let m=f.trans,w=m.mutatedParts||(m.mutatedParts={}),g=v=>{let S=`id\
b://${e}/${n}/${v}`;return w[S]||(w[S]=new An)},E=g(""),p=g(":dels"),{type:h}=f,[y,x]=f.type==="dele\
teRange"?[f.range]:f.type==="delete"?[f.keys]:f.values.length<50?[[],f.values]:[],T=f.trans._cache;return i.
mutate(f).then(v=>{if(_t(y)){h!=="delete"&&(y=v.results),E.addKeys(y);let S=fC(y,T);!S&&h!=="add"&&p.
addKeys(y),(S||x)&&RL(g,a,S,x)}else if(y){let S={from:y.lower,to:y.upper};p.add(S),E.add(S)}else E.add(
r),p.add(r),a.indexes.forEach(S=>g(S.name).add(r));return v})}},c=({query:{index:f,range:m}})=>{var w,
g;return[f,new An((w=m.lower)!==null&&w!==void 0?w:t.MIN_KEY,(g=m.upper)!==null&&g!==void 0?g:t.MAX_KEY)]},
d={get:f=>[o,new An(f.key)],getMany:f=>[o,new An().addKeys(f.keys)],count:c,query:c,openCursor:c};return Xe(
d).forEach(f=>{u[f]=function(m){let{subscr:w}=V;if(w){let g=x=>{let T=`idb://${e}/${n}/${x}`;return w[T]||
(w[T]=new An)},E=g(""),p=g(":dels"),[h,y]=d[f](m);if(g(h.name||"").add(y),!h.isPrimaryKey)if(f==="co\
unt")p.add(r);else{let x=f==="query"&&l&&m.values&&i.query({...m,values:!1});return i[f].apply(this,
arguments).then(T=>{if(f==="query"){if(l&&m.values)return x.then(({result:S})=>(E.addKeys(S),T));let v=m.
values?T.result.map(s):T.result;m.values?E.addKeys(v):p.addKeys(v)}else if(f==="openCursor"){let v=T,
S=m.values;return v&&Object.create(v,{key:{get(){return p.addKey(v.primaryKey),v.key}},primaryKey:{get(){
let C=v.primaryKey;return p.addKey(C),C}},value:{get(){return S&&E.addKey(v.primaryKey),v.value}}})}
return T})}}return i[f].apply(this,arguments)}}),u}}}};function RL(t,e,r,n){function i(a){let o=t(a.
name||"");function s(u){return u!=null?a.extractKey(u):null}let l=u=>a.multiEntry&&_t(u)?u.forEach(c=>o.
addKey(c)):o.addKey(u);(r||n).forEach((u,c)=>{let d=r&&s(r[c]),f=n&&s(n[c]);Dt(d,f)!==0&&(d!=null&&l(
d),f!=null&&l(f))})}e.indexes.forEach(i)}var Ma=class t{constructor(e,r){this._middlewares={},this.verno=
0;let n=t.dependencies;this._options=r={addons:t.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.
IDBKeyRange,...r},this._deps={indexedDB:r.indexedDB,IDBKeyRange:r.IDBKeyRange};let{addons:i}=r;this.
_dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;
let a={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:ye,dbReadyPromise:null,
cancelOpen:ye,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};a.dbReadyPromise=new j(o=>{a.dbReadyResolve=
o}),a.openCanceller=new j((o,s)=>{a.cancelOpen=s}),this._state=a,this.name=e,this.on=mu(this,"popula\
te","blocked","versionchange","close",{ready:[Tv,ye]}),this.on.ready.subscribe=Ub(this.on.ready.subscribe,
o=>(s,l)=>{t.vip(()=>{let u=this._state;if(u.openComplete)u.dbOpenError||j.resolve().then(s),l&&o(s);else if(u.
onReadyBeingFired)u.onReadyBeingFired.push(s),l&&o(s);else{o(s);let c=this;l||o(function d(){c.on.ready.
unsubscribe(s),c.on.ready.unsubscribe(d)})}})}),this.Collection=WO(this),this.Table=HO(this),this.Transaction=
JO(this),this.Version=hL(this),this.WhereClause=ZO(this),this.on("versionchange",o=>{o.newVersion>0?
console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume \
the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db \
now to resume the delete request.`),this.close()}),this.on("blocked",o=>{!o.newVersion||o.newVersion<
o.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.
name}' blocked by other connection holding version ${o.oldVersion/10}`)}),this._maxKey=uu(r.IDBKeyRange),
this._createTransaction=(o,s,l,u)=>new this.Transaction(o,s,l,this._options.chromeTransactionDurability,
u),this._fireOnBlocked=o=>{this.on("blocked").fire(o),ru.filter(s=>s.name===this.name&&s!==this&&!s.
_state.vcFired).map(s=>s.on("versionchange").fire(o))},this.use(_L),this.use(TL),this.use(IL),this.use(
bL),this.vip=Object.create(this,{_vip:{value:!0}}),i.forEach(o=>o(this))}version(e){if(isNaN(e)||e<.1)
throw new G.Type("Given version is not a positive number");if(e=Math.round(e*10)/10,this.idbdb||this.
_state.isBeingOpened)throw new G.Schema("Cannot add version when database is open");this.verno=Math.
max(this.verno,e);let r=this._versions;var n=r.filter(i=>i._cfg.version===e)[0];return n||(n=new this.
Version(e),r.push(n),r.sort(oL),n.stores({}),this._state.autoSchema=!1,n)}_whenReady(e){return this.
idbdb&&(this._state.openComplete||V.letThrough||this._vip)?e():new j((r,n)=>{if(this._state.openComplete)
return n(new G.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.
autoOpen){n(new G.DatabaseClosed);return}this.open().catch(ye)}this._state.dbReadyPromise.then(r,n)}).
then(e)}use({stack:e,create:r,level:n,name:i}){i&&this.unuse({stack:e,name:i});let a=this._middlewares[e]||
(this._middlewares[e]=[]);return a.push({stack:e,create:r,level:n??10,name:i}),a.sort((o,s)=>o.level-
s.level),this}unuse({stack:e,name:r,create:n}){return e&&this._middlewares[e]&&(this._middlewares[e]=
this._middlewares[e].filter(i=>n?i.create!==n:r?i.name!==r:!1)),this}open(){return wL(this)}_close(){
let e=this._state,r=ru.indexOf(this);if(r>=0&&ru.splice(r,1),this.idbdb){try{this.idbdb.close()}catch{}
this._novip.idbdb=null}e.dbReadyPromise=new j(n=>{e.dbReadyResolve=n}),e.openCanceller=new j((n,i)=>{
e.cancelOpen=i})}close(){this._close();let e=this._state;this._options.autoOpen=!1,e.dbOpenError=new G.
DatabaseClosed,e.isBeingOpened&&e.cancelOpen(e.dbOpenError)}delete(){let e=arguments.length>0,r=this.
_state;return new j((n,i)=>{let a=()=>{this.close();var o=this._deps.indexedDB.deleteDatabase(this.name);
o.onsuccess=De(()=>{yL(this._deps,this.name),n()}),o.onerror=on(i),o.onblocked=this._fireOnBlocked};
if(e)throw new G.InvalidArgument("Arguments not allowed in db.delete()");r.isBeingOpened?r.dbReadyPromise.
then(a):a()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){let e=this.
_state.dbOpenError;return e&&e.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==
null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return Xe(this._allTables).map(e=>this.
_allTables[e])}transaction(){let e=xL.apply(this,arguments);return this._transaction.apply(this,e)}_transaction(e,r,n){
let i=V.trans;(!i||i.db!==this||e.indexOf("!")!==-1)&&(i=null);let a=e.indexOf("?")!==-1;e=e.replace(
"!","").replace("?","");let o,s;try{if(s=r.map(u=>{var c=u instanceof this.Table?u.name:u;if(typeof c!=
"string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String ar\
e allowed");return c}),e=="r"||e===jy)o=jy;else if(e=="rw"||e==Hy)o=Hy;else throw new G.InvalidArgument(
"Invalid transaction mode: "+e);if(i){if(i.mode===jy&&o===Hy)if(a)i=null;else throw new G.SubTransaction(
"Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i&&s.forEach(
u=>{if(i&&i.storeNames.indexOf(u)===-1)if(a)i=null;else throw new G.SubTransaction("Table "+u+" not \
included in parent transaction.")}),a&&i&&!i.active&&(i=null)}}catch(u){return i?i._promise(null,(c,d)=>{
d(u)}):Ze(u)}let l=dC.bind(null,this,o,s,i,n);return i?i._promise(o,l,"lock"):V.trans?ps(V.transless,
()=>this._whenReady(l)):this._whenReady(l)}table(e){if(!rr(this._allTables,e))throw new G.InvalidTable(
`Table ${e} does not exist`);return this._allTables[e]}},PL=typeof Symbol<"u"&&"observable"in Symbol?
Symbol.observable:"@@observable",vv=class{constructor(e){this._subscribe=e}subscribe(e,r,n){return this.
_subscribe(!e||typeof e=="function"?{next:e,error:r,complete:n}:e)}[PL](){return this}};function pC(t,e){
return Xe(e).forEach(r=>{let n=t[r]||(t[r]=new An);up(n,e[r])}),t}function Bv(t){let e=!1,r,n=new vv(
i=>{let a=Ev(t);function o(E){a&&fs();let p=()=>Ai(t,{subscr:E,trans:null}),h=V.trans?ps(V.transless,
p):p();return a&&h.then(On,On),h}let s=!1,l={},u={},c={get closed(){return s},unsubscribe:()=>{s=!0,
Fi.storagemutated.unsubscribe(w)}};i.start&&i.start(c);let d=!1,f=!1;function m(){return Xe(u).some(
E=>l[E]&&CL(l[E],u[E]))}let w=E=>{pC(l,E),m()&&g()},g=()=>{if(d||s)return;l={};let E={},p=o(E);f||(Fi(
lu,w),f=!0),d=!0,Promise.resolve(p).then(h=>{e=!0,r=h,d=!1,!s&&(m()?g():(l={},u=E,i.next&&i.next(h)))},
h=>{d=!1,e=!1,i.error&&i.error(h),c.unsubscribe()})};return g(),c});return n.hasValue=()=>e,n.getValue=
()=>r,n}var wv;try{wv={indexedDB:be.indexedDB||be.mozIndexedDB||be.webkitIndexedDB||be.msIndexedDB,IDBKeyRange:be.
IDBKeyRange||be.webkitIDBKeyRange}}catch{wv={indexedDB:null,IDBKeyRange:null}}var Pa=Ma;us(Pa,{...fp,
delete(t){return new Pa(t,{addons:[]}).delete()},exists(t){return new Pa(t,{addons:[]}).open().then(
e=>(e.close(),!0)).catch("NoSuchDatabaseError",()=>!1)},getDatabaseNames(t){try{return mL(Pa.dependencies).
then(t)}catch{return Ze(new G.MissingAPI)}},defineClass(){function t(e){At(this,e)}return t},ignoreTransaction(t){
return V.trans?ps(V.transless,t):t()},vip:mv,async:function(t){return function(){try{var e=gv(t.apply(
this,arguments));return!e||typeof e.then!="function"?j.resolve(e):e}catch(r){return Ze(r)}}},spawn:function(t,e,r){
try{var n=gv(t.apply(r,e||[]));return!n||typeof n.then!="function"?j.resolve(n):n}catch(i){return Ze(
i)}},currentTransaction:{get:()=>V.trans||null},waitFor:function(t,e){let r=j.resolve(typeof t=="fun\
ction"?Pa.ignoreTransaction(t):t).timeout(e||6e4);return V.trans?V.trans.waitFor(r):r},Promise:j,debug:{
get:()=>sn,set:t=>{Vb(t,t==="dexie"?()=>!0:aC)}},derive:cs,extend:At,props:us,override:Ub,Events:mu,
on:Fi,liveQuery:Bv,extendObservabilitySet:pC,getByKeyPath:Bn,setByKeyPath:Ur,delByKeyPath:hO,shallowClone:Hb,
deepClone:du,getObjectDiff:Nv,cmp:Dt,asap:zb,minKey:av,addons:[],connections:ru,errnames:Sv,dependencies:wv,
semVer:Pb,version:Pb.split(".").map(t=>parseInt(t)).reduce((t,e,r)=>t+e/Math.pow(10,r*2))});Pa.maxKey=
uu(Pa.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(Fi(lu,t=>{if(!Fn){
let e;pp?(e=document.createEvent("CustomEvent"),e.initCustomEvent(Di,!0,!0,t)):e=new CustomEvent(Di,
{detail:t}),Fn=!0,dispatchEvent(e),Fn=!1}}),addEventListener(Di,({detail:t})=>{Fn||cp(t)}));function cp(t){
let e=Fn;try{Fn=!0,Fi.storagemutated.fire(t)}finally{Fn=e}}var Fn=!1;if(typeof BroadcastChannel<"u"){
let t=new BroadcastChannel(Di);typeof t.unref=="function"&&t.unref(),Fi(lu,e=>{Fn||t.postMessage(e)}),
t.onmessage=e=>{e.data&&cp(e.data)}}else if(typeof self<"u"&&typeof navigator<"u"){Fi(lu,e=>{try{Fn||
(typeof localStorage<"u"&&localStorage.setItem(Di,JSON.stringify({trig:Math.random(),changedParts:e})),
typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(r=>r.postMessage(
{type:Di,changedParts:e})))}catch{}}),typeof addEventListener<"u"&&addEventListener("storage",e=>{if(e.
key===Di){let r=JSON.parse(e.newValue);r&&cp(r.changedParts)}});let t=self.document&&navigator.serviceWorker;
t&&t.addEventListener("message",DL)}function DL({data:t}){t&&t.type===Di&&cp(t.changedParts)}j.rejectionMapper=
SO;Vb(sn,aC);var jt=new Ma("turnip");jt.version(1).stores({items:"&id, genre, year, album_id",albums:"&id, genre,\
 year",playlists:"&name"});var hC=()=>{console.log("refreshing music database...");let t=()=>jt.items.clear().then(()=>fetch("/\
api/v1/items")).then(r=>r.json()).then(r=>(console.log("adding",r.length,"items"),jt.items.bulkAdd(r))),
e=()=>jt.albums.clear().then(()=>fetch("/api/v1/albums")).then(r=>r.json()).then(r=>(console.log("ad\
ding",r.length,"albums"),jt.albums.bulkAdd(r)));return t().then(()=>e())};var ln=St(ir()),La=({albumId:t,onClick:e})=>{let[r,n]=(0,ln.useState)(!t),[i,a]=(0,ln.useState)(!1),
o=(0,ln.useRef)(null);return(0,ln.useEffect)(()=>{if(r)return;let s=o.current;if(!s)return;let l=new IntersectionObserver(
([{isIntersecting:u}])=>a(u),{rootMargin:"0px",threshold:.1});return l.observe(s),()=>l.unobserve(s)},
[o.current,r]),ln.default.createElement("div",{className:"art",ref:o,onClick:e},i&&!r&&ln.default.createElement(
"img",{src:`/api/v1/albums/${t}/cover/`,onError:()=>n(!0)}))},Ln=(t,e,r)=>fetch(t,{method:"POST",headers:{
"Content-Type":"application/json"},body:JSON.stringify(e||{})}).then(n=>n.json()).then(r||(()=>{}));typeof window.Buffer>"u"&&(window.Buffer=mC.Buffer);typeof window.process>"u"&&(window.process=gC.default);
var vC=ft.default.createContext({}),wC=()=>({prev:[],curr:null,next:[],playing:!1,position:0,duration:0,
volume:.5}),NL=(t,e)=>{console.log("setting audio volume to",Math.round(1e3*e)/1e3);let r=500,n=3,i=(e-
t.volume)/n,a=()=>{t.volume+=i,Math.abs(e-t.volume)>Math.abs(i)&&setTimeout(a,r/n)};setTimeout(a,r/n)},
xC=(t,e)=>{if(e.type==="update")return{...t,...e.update};if(e.type==="next"&&t.next.length&&(t.curr&&
t.prev.push(t.curr),t.curr=t.next.shift()),e.type==="goto"){let r=t.prev.indexOf(e.id),n=t.next.indexOf(
e.id);r>-1&&(t.next.unshift(t.curr),t.next.unshift(...t.prev.splice(r)),t.curr=t.next.shift()),n>-1&&
(t.prev.push(t.curr),t.prev.push(...t.next.splice(0,n)),t.curr=t.next.shift())}return e.type==="prev"&&
t.prev.length&&(t.curr&&t.next.unshift(t.curr),t.curr=t.prev.pop()),e.type==="add"&&t.next.push(...e.
ids),e.type==="replace"&&(t.prev=[],t.curr=null,t.next=e.ids,t.next.length&&(t.curr=t.next.shift())),
e.type==="remove"&&(e.ids||(e.ids=[e.id]),t.prev=t.prev.filter(r=>!e.ids.includes(r)),e.ids.includes(
t.curr)&&(t.curr=null),t.next=t.next.filter(r=>!e.ids.includes(r)),t.next.length&&t.curr===null&&(t.
curr=t.next.shift())),{...t}},FL=t=>{let e=()=>{let i=t.current;i&&n({type:"update",update:{position:i.
currentTime,duration:i.duration,volume:i.volume,playing:!i.paused&&!i.ended&&i.currentTime>0&&i.readyState>
2}})},[r,n]=(0,ft.useReducer)((i,a)=>{let o=t.current;if(!o)return i;let s=i.curr;if(i=xC(i,a),a.type===
"pause"&&i.curr)i.playing?o.pause():o.play();else if(a.type==="seek"&&i.curr)o.currentTime=o.duration*
a.fraction;else if(a.type==="volume")o.volume=a.volume;else if(s!==i.curr){if(i.curr){let l=`/api/v1\
/items/${i.curr}/stream/`;yC.fetchFromUrl(l,{duration:!1,skipCovers:!0}).then(u=>{let c=u?.common?.replaygain_album_gain?.
ratio;c&&NL(o,c)}),o.src=l,o.onended=()=>n({type:"next"})}else o.src="",o.currentTime=0,o.onended=null;
o.onplay=e,o.onpause=e,o.ontimeupdate=e,o.ondurationchange=e,o.play()}return i},wC());return[r,n]},BL=t=>{
let[e,r]=(0,ft.useReducer)((n,i)=>(n=xC(n,i),i.type==="pause"&&n.curr?n.playing?Ln(`${t}/pause/`):Ln(
`${t}/play/`):i.type==="seek"&&n.curr?Ln(`${t}/seek/${Math.round(n.duration*i.fraction)}/`):i.type===
"volume"?Ln(`${t}/volume/`,{volume:n.volume}):i.type!=="update"&&Ln(`${t}/items/`,n),n),wC());return(0,ft.useEffect)(
()=>{let n=setInterval(()=>fetch(`${t}/player/`).then(i=>i.json()).then(i=>r({type:"update",update:i})),
1e3);return()=>clearInterval(n)},[]),[e,r]},Bi=()=>(0,ft.useContext)(vC),EC=({output:t,children:e})=>{
let r=(0,ft.useRef)(null),[n,i]=t==="local"?FL(r):BL(t);(0,ft.useEffect)(()=>{let o=(l,u)=>{l.preventDefault(),
i({type:u})},s=l=>{l.key===" "&&o(l,"pause"),l.key==="ArrowLeft"&&o(l,"prev"),l.key==="ArrowRight"&&
o(l,"next")};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},
[]);let a="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>\
<text y=%22.9em%22 font-size=%2290%22>\u{1F3B6}</text></svg>";return(0,ft.useEffect)(()=>{let o=document.
querySelector('link[rel*="icon"]');document.title="Turnip",o&&(o.href=a),n.curr&&jt.items.get({id:n.
curr}).then(s=>{document.title=`${s.title} - ${s.artist}`,o&&(o.href=`/api/v1/albums/${s.album_id}/c\
over/`)})},[n.curr]),t?ft.default.createElement(ft.default.Fragment,null,ft.default.createElement("a\
udio",{ref:r,preload:"auto"}),ft.default.createElement(vC.Provider,{value:{...n,dispatch:i}},e)):null};var hs=St(ir(),1);function ML(t,e,r){var n,i;typeof t=="function"?(n=e||[],i=r):(n=[],i=e);var a=hs.default.
useRef({hasResult:!1,result:i,error:null}),o=hs.default.useReducer(function(u){return u+1},0);o[0];var s=o[1],
l=hs.default.useMemo(function(){var u=typeof t=="function"?t():t;if(!u||typeof u.subscribe!="functio\
n")throw t===u?new TypeError("Given argument to useObservable() was neither a valid observable nor a\
 function."):new TypeError("Observable factory given to useObservable() did not return a valid obser\
vable.");if(!a.current.hasResult&&typeof window<"u"&&(typeof u.hasValue!="function"||u.hasValue()))if(typeof u.
getValue=="function")a.current.result=u.getValue(),a.current.hasResult=!0;else{var c=u.subscribe(function(d){
a.current.result=d,a.current.hasResult=!0});typeof c=="function"?c():c.unsubscribe()}return u},n);if(hs.default.
useDebugValue(a.current.result),hs.default.useEffect(function(){var u=l.subscribe(function(c){var d=a.
current;(d.error!==null||d.result!==c)&&(d.error=null,d.result=c,d.hasResult=!0,s())},function(c){var d=a.
current;d.error!==c&&(d.error=c,s())});return typeof u=="function"?u:u.unsubscribe.bind(u)},n),a.current.
error)throw a.current.error;return a.current.result}function _C(t,e,r){return ML(function(){return Bv(
t)},e||[],r)}var Q=St(ir());var SC={artist:t=>t.albumartist_sort||t.albumartist||t.album||`${t.id}`,title:t=>t.album.replace(/\W/g,
"")||`${t.id}`,random:t=>`${Math.random()}`},TC=()=>{let t=Bi(),e=_o(),[r,n]=(0,Q.useState)(""),[i,a]=(0,Q.useState)(
null);(0,Q.useEffect)(()=>{jt.items.orderBy("genre").uniqueKeys().then(a)},[]);let[o,s]=(0,Q.useState)(
""),[l,u]=(0,Q.useState)("artist"),c=_C(()=>jt.albums.toArray(),[r,o,l]);if(!c)return null;let d=m=>{
u(m),window.scrollTo({top:0})},f=m=>{let w=items.map(g=>[Math.random(),g.id]).sort().slice(0,m).map(
([g,E])=>E);w.length&&(t.dispatch({type:"replace",ids:w}),e("../player"))};return Q.default.createElement(
"div",{className:"library"},Q.default.createElement("ul",null,c.sort((m,w)=>SC[l](m).toLowerCase().localeCompare(
SC[l](w).toLowerCase())).map(m=>Q.default.createElement(OL,{key:`${m.id}-${m.album}`,album:m}))),Q.default.
createElement("nav",null,Q.default.createElement("input",{type:"text",defaultValue:o,placeholder:"Fi\
lter...",onFocus:m=>m.target.select(),onBlur:m=>s(m.target.value)}),Q.default.createElement("select",
{defaultValue:r,onChange:m=>n(m.target.value)},Q.default.createElement("option",{key:"",value:""},"G\
enre"),i&&i.map(m=>m&&Q.default.createElement("option",{key:m,value:m},m))),Q.default.createElement(
"button",{onClick:()=>d("random")},Q.default.createElement("span",{className:"icon"},"\u{1F500}")," ",
Q.default.createElement("span",{className:"label"},"Shuffle")),Q.default.createElement("button",{onClick:()=>d(
"artist")},Q.default.createElement("span",{className:"icon"},"\u{1F9D1}\u200D\u{1F3A4}\uFE0F")," ",Q.default.
createElement("span",{className:"label"},"Artist")),Q.default.createElement("button",{onClick:()=>d(
"title")},Q.default.createElement("span",{className:"icon"},"\u{1F4BF}")," ",Q.default.createElement(
"span",{className:"label"},"Title")),Q.default.createElement("span",{className:"sep"}),Q.default.createElement(
"button",{onClick:()=>f(13)},Q.default.createElement("span",{className:"icon"},"\u{1F3B2}")," ",Q.default.
createElement("span",{className:"label"},"Random"))))},OL=({album:t})=>{let e=(0,Q.useRef)(null),r=Bi(),
[n,i]=(0,Q.useState)(!1),[a,o]=(0,Q.useState)(null);return(0,Q.useEffect)(()=>{n&&(e.current&&window.
scrollTo({top:e.current.getBoundingClientRect().top+window.pageYOffset-60,behavior:"smooth"}),a||jt.
items.where({album_id:t.id}).toArray().then(s=>o(s.sort((l,u)=>l.disc<u.disc?-1:l.disc>u.disc?1:l.track<
u.track?-1:l.track>u.track?1:localeCompare(l.title>u.title)))))},[n]),t?Q.default.createElement("li",
{ref:e,className:n?"active":""},Q.default.createElement(La,{albumId:t.id,onClick:()=>i(s=>!s)}),Q.default.
createElement("span",{className:"title ellipsis",title:t.album},t.album),Q.default.createElement("sp\
an",{className:"artist ellipsis",title:t.albumartist},t.albumartist),n&&a&&Q.default.createElement("\
ol",{className:"items"},a.map(s=>Q.default.createElement("li",{key:s.id},null," ",null,s.title))),n&&
Q.default.createElement("ul",{className:"buttons"},Q.default.createElement("button",{onClick:()=>r.dispatch(
{type:"replace",ids:a.map(s=>s.id)})},"\u25B6\uFE0F"),Q.default.createElement("button",{onClick:()=>r.
dispatch({type:"add",ids:a.map(s=>s.id)})},"\u2795\uFE0F"))):null};var Z=St(ir());var gs=St(ir()),LL="Left",UL="Right",zL="Up",jL="Down",ms={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,
trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},Mv={first:!0,initial:[
0,0],start:0,swiping:!1,xy:[0,0]},kC="mousemove",bC="mouseup",HL="touchend",qL="touchmove",$L="touch\
start";function VL(t,e,r,n){return t>e?r>0?UL:LL:n>0?jL:zL}function CC(t,e){if(e===0)return t;let r=Math.
PI/180*e,n=t[0]*Math.cos(r)+t[1]*Math.sin(r),i=t[1]*Math.cos(r)-t[0]*Math.sin(r);return[n,i]}function WL(t,e){
let r=c=>{let d="touches"in c;d&&c.touches.length>1||t((f,m)=>{m.trackMouse&&!d&&(document.addEventListener(
kC,n),document.addEventListener(bC,o));let{clientX:w,clientY:g}=d?c.touches[0]:c,E=CC([w,g],m.rotationAngle);
return m.onTouchStartOrOnMouseDown&&m.onTouchStartOrOnMouseDown({event:c}),Object.assign(Object.assign(
Object.assign({},f),Mv),{initial:E.slice(),xy:E,start:c.timeStamp||0})})},n=c=>{t((d,f)=>{let m="tou\
ches"in c;if(m&&c.touches.length>1)return d;if(c.timeStamp-d.start>f.swipeDuration)return d.swiping?
Object.assign(Object.assign({},d),{swiping:!1}):d;let{clientX:w,clientY:g}=m?c.touches[0]:c,[E,p]=CC(
[w,g],f.rotationAngle),h=E-d.xy[0],y=p-d.xy[1],x=Math.abs(h),T=Math.abs(y),v=(c.timeStamp||0)-d.start,
S=Math.sqrt(x*x+T*T)/(v||1),C=[h/(v||1),y/(v||1)],D=VL(x,T,h,y),F=typeof f.delta=="number"?f.delta:f.
delta[D.toLowerCase()]||ms.delta;if(x<F&&T<F&&!d.swiping)return d;let L={absX:x,absY:T,deltaX:h,deltaY:y,
dir:D,event:c,first:d.first,initial:d.initial,velocity:S,vxvy:C};L.first&&f.onSwipeStart&&f.onSwipeStart(
L),f.onSwiping&&f.onSwiping(L);let de=!1;return(f.onSwiping||f.onSwiped||f[`onSwiped${D}`])&&(de=!0),
de&&f.preventScrollOnSwipe&&f.trackTouch&&c.cancelable&&c.preventDefault(),Object.assign(Object.assign(
{},d),{first:!1,eventData:L,swiping:!0})})},i=c=>{t((d,f)=>{let m;if(d.swiping&&d.eventData){if(c.timeStamp-
d.start<f.swipeDuration){m=Object.assign(Object.assign({},d.eventData),{event:c}),f.onSwiped&&f.onSwiped(
m);let w=f[`onSwiped${m.dir}`];w&&w(m)}}else f.onTap&&f.onTap({event:c});return f.onTouchEndOrOnMouseUp&&
f.onTouchEndOrOnMouseUp({event:c}),Object.assign(Object.assign(Object.assign({},d),Mv),{eventData:m})})},
a=()=>{document.removeEventListener(kC,n),document.removeEventListener(bC,o)},o=c=>{a(),i(c)},s=(c,d)=>{
let f=()=>{};if(c&&c.addEventListener){let m=Object.assign(Object.assign({},ms.touchEventOptions),d.
touchEventOptions),w=[[$L,r,m],[qL,n,Object.assign(Object.assign({},m),d.preventScrollOnSwipe?{passive:!1}:
{})],[HL,i,m]];w.forEach(([g,E,p])=>c.addEventListener(g,E,p)),f=()=>w.forEach(([g,E])=>c.removeEventListener(
g,E))}return f},u={ref:c=>{c!==null&&t((d,f)=>{if(d.el===c)return d;let m={};return d.el&&d.el!==c&&
d.cleanUpTouch&&(d.cleanUpTouch(),m.cleanUpTouch=void 0),f.trackTouch&&c&&(m.cleanUpTouch=s(c,f)),Object.
assign(Object.assign(Object.assign({},d),{el:c}),m)})}};return e.trackMouse&&(u.onMouseDown=r),[u,s]}
function KL(t,e,r,n){return!e.trackTouch||!t.el?(t.cleanUpTouch&&t.cleanUpTouch(),Object.assign(Object.
assign({},t),{cleanUpTouch:void 0})):t.cleanUpTouch?e.preventScrollOnSwipe!==r.preventScrollOnSwipe||
e.touchEventOptions.passive!==r.touchEventOptions.passive?(t.cleanUpTouch(),Object.assign(Object.assign(
{},t),{cleanUpTouch:n(t.el,e)})):t:Object.assign(Object.assign({},t),{cleanUpTouch:n(t.el,e)})}function IC(t){
let{trackMouse:e}=t,r=gs.useRef(Object.assign({},Mv)),n=gs.useRef(Object.assign({},ms)),i=gs.useRef(
Object.assign({},n.current));i.current=Object.assign({},n.current),n.current=Object.assign(Object.assign(
{},ms),t);let a;for(a in ms)n.current[a]===void 0&&(n.current[a]=ms[a]);let[o,s]=gs.useMemo(()=>WL(l=>r.
current=l(r.current,n.current),{trackMouse:e}),[e]);return r.current=KL(r.current,n.current,i.current,
s),o}var RC=({output:t})=>{let e=Bi(),[r,n]=(0,Z.useState)(null);return(0,Z.useEffect)(()=>{jt.items.get(
{id:e.curr}).then(n)},[e.curr]),r?Z.default.createElement(Z.default.Fragment,null,Z.default.createElement(
"span",{className:"output"},t),Z.default.createElement("button",{className:"prev",onClick:()=>e.dispatch(
{type:"prev"})},"\u23EE\uFE0F\uFE0F"),Z.default.createElement("button",{className:"play",onClick:()=>e.
dispatch({type:"pause"})},e.playing?"\u23F8\uFE0F":"\u25B6\uFE0F"),Z.default.createElement("button",
{className:"next",onClick:()=>e.dispatch({type:"next"})},"\u23ED\uFE0F"),Z.default.createElement(La,
{key:`mini-art-${e.curr}`,albumId:r.album_id}),Z.default.createElement(kl,{className:"title ellipsis",
to:"player"},r.title),Z.default.createElement("input",{className:"volume",name:"volume",type:"range",
value:e.volume,min:0,max:1,step:.01,onChange:i=>e.dispatch({type:"volume",volume:i.target.value})})):
null},PC=()=>{let t=Bi();return t.curr?Z.default.createElement("div",{className:"player"},Z.default.
createElement("ol",null,t.prev.map((e,r)=>Z.default.createElement(Ov,{key:`prev-${r}-${e}`,id:e,loc:"\
prev"})),Z.default.createElement(Ov,{key:`curr-${t.curr}`,id:t.curr,loc:"curr"}),t.next.map((e,r)=>Z.default.
createElement(Ov,{key:`next-${r}-${e}`,id:e,loc:"next"}))),Z.default.createElement("nav",null,Z.default.
createElement("span",null,"\u{1F500}",Z.default.createElement("span",{className:"label"},"Shuffle")),
Z.default.createElement("span",null,"\u{1F501}",Z.default.createElement("span",{className:"label"},"\
Repeat All")),Z.default.createElement("span",null,"\u{1F502}",Z.default.createElement("span",{className:"\
label"},"Repeat One")),Z.default.createElement("span",null,"\u{1F4BE}",Z.default.createElement("span",
{className:"label"},"Save")))):Z.default.createElement(oa,{to:"../library"})},Ov=({id:t,loc:e})=>{let r=Bi(),
[n,i]=(0,Z.useState)(null),[a,o]=(0,Z.useState)(!1),s=IC({onSwipedLeft:l=>{o(!0),console.log("Swiped\
 L!",l)},onSwipedRight:l=>{o(!1),console.log("Swiped R!",l)}});return(0,Z.useEffect)(()=>{jt.items.get(
{id:t}).then(i)},[t]),!t||!n?null:Z.default.createElement("li",{className:`item ${a?"removable":""} ${e}`,
...s},Z.default.createElement("div",{className:"info",onClick:()=>r.dispatch(e==="curr"?{type:"pause"}:
{type:"goto",id:t})},Z.default.createElement(La,{albumId:n.album_id}),Z.default.createElement("span",
{className:"title ellipsis"},n.title),Z.default.createElement("span",{className:"artist ellipsis"},n.
artist),a&&Z.default.createElement("span",{className:"remove",onClick:()=>r.dispatch({type:"remove",
id:t})},"\u{1F5D1}\uFE0F")),e==="curr"&&Z.default.createElement(GL,null))},GL=()=>{let t=Bi(),e=r=>{
let n=Math.floor(r%60);return`${Math.floor(r/60)}:${n<10?"0":""}${n}`};return Z.default.createElement(
"div",{className:"scrubber",onClick:r=>t.dispatch({type:"seek",fraction:r.clientX/window.innerWidth})},
Z.default.createElement("div",{className:"bar",style:{right:`${100*(1-t.position/t.duration)}%`}}),Z.default.
createElement("span",{className:"time position"},e(t.position)),Z.default.createElement("span",{className:"\
time duration"},e(t.duration)))};var _e=St(ir());var Lv=t=>{let e=(0,_e.useRef)(null);return(0,_e.useEffect)(()=>{let r=n=>{e.current&&!e.current.contains(
n.target)&&t()};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mo\
usedown",r)},[e]),e},DC=({libraryItems:t})=>{let[e,r]=(0,_e.useState)({}),[n,i]=(0,_e.useState)([]),
a=()=>fetch("/api/v1/player/").then(o=>o.json()).then(r);return(0,_e.useEffect)(()=>{a(),fetch("/api\
/v1/playlists/").then(o=>o.json()).then(i)},[]),_e.default.createElement("div",{className:"playlists"},
e.items?.length>0&&!e.playlist&&_e.default.createElement(XL,{player:e,refresh:a}),n.map(o=>_e.default.
createElement(YL,{key:o.id,libraryItems:t,isPlaying:e.playlist===o.id,playlist:o,refresh:a})))},XL=({
player:t,refresh:e})=>{let[r,n]=(0,_e.useState)(!1),i=Lv(()=>n(!1));return _e.default.createElement(
"div",{className:"playlist from-player"},_e.default.createElement("span",{className:"toggle",ref:i,onClick:()=>n(
!0)},"\u{1F58D}\uFE0F\uFE0F"),_e.default.createElement("div",{className:"title"},r?_e.default.createElement(
"input",{autoFocus:!0,onFocus:o=>o.target.select(),onBlur:o=>{!t.items.length||!o.target.value||Ln("\
/api/v1/playlists/",{title:o.target.value,items:t.items},e)}}):"Currently Playing"))},YL=({libraryItems:t,
isPlaying:e,playlist:r,refresh:n})=>{let[i,a]=(0,_e.useState)(!1),[o,s]=(0,_e.useState)(!1),l=Lv(()=>a(
!1)),u=Lv(()=>s(!1)),c=f=>{f.target.value&&(Ln(`/api/v1/playlists/${r.id}/`,{title:f.target.value},n),
a(!1))},d=()=>{fetch(`/api/v1/playlists/${r.id}/`,{method:"DELETE"}).then(n)};return _e.default.createElement(
"div",{className:"playlist"},e&&"*",_e.default.createElement("span",{className:"toggle",ref:l,onClick:()=>a(
!0)},"\u{1F58D}\uFE0F\uFE0F"),_e.default.createElement("div",{className:"arts"},r.items.map(f=>_e.default.
createElement(La,{key:f,albumId:t[f].album_id}))),_e.default.createElement("div",{className:"title"},
i?_e.default.createElement("input",{autoFocus:!0,onFocus:f=>f.target.select(),defaultValue:r.title,onBlur:c}):
r.title),_e.default.createElement("div",{className:"remove",ref:u,onClick:o?d:()=>s(!0)},o?"Confirm?":
"\u{1F5D1}\uFE0F"))};var QL=()=>{let t=eg().output;return t?pt.default.createElement(EC,{output:t},pt.default.createElement(
"nav",{className:"top"},pt.default.createElement(ag,{to:"library"},"\u{1F4BF}"),pt.default.createElement(
ag,{to:"playlists"},"\u{1F3B6}"),pt.default.createElement(RC,{output:t}),pt.default.createElement("s\
pan",{className:"sep"}),pt.default.createElement(kl,{id:"refresh",to:"refresh"},"\u{1F504}")),pt.default.
createElement(tg,null)):pt.default.createElement(oa,{to:"/local"})};AC.default.createRoot(document.getElementById(
"root")).render(pt.default.createElement(v_,{router:g_([{path:":output?",element:pt.default.createElement(
QL,null),children:[{index:!0,element:pt.default.createElement(oa,{to:"./library"})},{path:"library",
element:pt.default.createElement(TC,null)},{path:"player",element:pt.default.createElement(PC,null)},
{path:"playlists",element:pt.default.createElement(DC,null)},{path:"refresh",element:pt.default.createElement(
oa,{to:"../library"}),loader:hC}]}])}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

content-type/index.js:
  (*!
   * content-type
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)

media-typer/index.js:
  (*!
   * media-typer
   * Copyright(c) 2014-2017 Douglas Christopher Wilson
   * MIT Licensed
   *)

safe-buffer/index.js:
  (*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.14.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.21.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.21.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
