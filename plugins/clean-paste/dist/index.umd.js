!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jodit")):"function"==typeof define&&define.amd?define(["jodit"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).JoditPluginCleanPaste=e(t.Jodit)}(this,function(t){"use strict";function e(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}),e.default=t,Object.freeze(e)}var n=e(t);const r=n.Jodit||n.default||globalThis.Jodit||n,i="undefined"!=typeof window?window:void 0,o="undefined"!=typeof document?document:void 0,s=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i,l=new Set(["ul","ol"]),a=["img","video","svg","iframe","script","input","textarea","link","jodit","jodit-media"],c=new Set([...a,"br","hr"]),u=new Set(a);
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent));void 0!==i&&/Mac|iPod|iPhone|iPad/.test(i.navigator.platform);const d=t=>{const e=t.split("/"),n=!1;return/\.js/.test(e[e.length-1])?{basePath:e.slice(0,e.length-1).join("/")+"/",isMin:n}:{basePath:t,isMin:n}};(()=>{if("undefined"==typeof document)return{basePath:"",isMin:Boolean(!1)};const t=o.currentScript;if(t)return d(t.src);const e=o.querySelectorAll("script[src]");e&&e.length?d(e[e.length-1].src):d(i.location.href)})();const f="data-jodit-temp";
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
function p(t){return"function"==typeof t}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function h(t){return Array.isArray(t)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function g(t){return"string"==typeof t}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function m(t){return null==t}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function y(t,e){if(!g(t)||!t.length)return null;const n=t.split(".");let r=e;try{for(const t of n){if(m(r[t]))return null;r=r[t]}}catch(t){return null}return m(r)?null:r}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const b={};
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
const T=function(...t){var e;var n;return(n=Array.from,Boolean(n)&&"function"===(typeof n).toLowerCase()&&(n===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)))?Array.from:null!==(e=function(t){var e,n;if(!(t in b)){const n=o.createElement("iframe");try{if(n.src="about:blank",o.body.appendChild(n),!n.contentWindow)return null;const e=y(t,n.contentWindow),r=y(t.split(".").slice(0,-1).join("."),n.contentWindow);p(e)&&(b[t]=e.bind(r))}catch(t){}finally{null===(e=n.parentNode)||void 0===e||e.removeChild(n)}}return null!==(n=b[t])&&void 0!==n?n:null}("Array.from"))&&void 0!==e?e:Array.from).apply(Array,t)},v=/[A-Za-z]/,N=/[A-Za-z0-9]/,C=/\w/;
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function E(t,e){if(!v.test(t.charAt(e)))return"";let n=e+1;for(;N.test(t.charAt(n));)n+=1;return t.slice(e,n)}const w=t=>g(t)&&function(t){const e=new Map;let n=t.indexOf("</");for(;-1!==n;){const r=E(t,n+2);""!==r&&">"===t.charAt(n+2+r.length)&&e.set(r,n),n=t.indexOf("</",n+2)}if(0===e.size)return!1;let r=-1;for(n=t.indexOf("<");-1!==n;){const i=E(t,n+1),o=n+1+i.length;if(""!==i&&!C.test(t.charAt(o))){if(r<o&&(r=t.indexOf(">",o)),-1===r)return!1;const n=e.get(i);if(void 0!==n&&n>r)return!0}n=t.indexOf("<",n+1)}return!1}(t);
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function x(t){return Boolean(t)&&p(t.has)&&p(t.add)&&p(t.delete)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const A=/[a-z0-9:-]/i;function S(t,e,n){return t.substr(e,n.length).toLowerCase()===n}function O(t,e,n){let r=t.indexOf("<",n);for(;-1!==r;){for(const n of e)if(S(t,r,n))return[r,n];r=t.indexOf("<",r+1)}return[-1,""]}function L(t,e){if(!t)return-1;let n=0,r=t.length;for(;n<r;){const i=n+r>>1;t[i]<e?n=i+1:r=i}return n<t.length?t[n]:-1}function _(t,e){let n=e;for(;A.test(t.charAt(n));)n+=1;return t.slice(e,n)}function M(t,e,n,r){const i=n.toLowerCase(),o=[null==e?"<":"<"+e.toLowerCase()],s=function(t){const e=new Map;let n=t.indexOf("</");for(;-1!==n;){const r=_(t,n+2).toLowerCase();if(""!==r&&">"===t.charAt(n+2+r.length)){const t=e.get(r);t?t.push(n):e.set(r,[n])}n=t.indexOf("</",n+2)}return e}(t);let l="",a=0;for(;;){const[n]=O(t,o,a);if(-1===n)break;const c=(null!=e?e:_(t,n+1)).toLowerCase(),u=t.indexOf(">",n);if(-1===u)break;const d=""!==c&&t.slice(n,u).toLowerCase().includes(i)?L(s.get(c),u+1):-1;if(-1===d){l+=t.slice(a,n+1),a=n+1;continue}const f=t.slice(u+1,d),p=d+c.length+3;l+=t.slice(a,n),l+=""===f||r&&!r(f)?t.slice(n,p):f,a=p}return 0===a?t:l+t.slice(a)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const P=/[\s\u200b]/;function D(t){return function(t,e){let n=0,r=t.length;for(;n<r&&e.test(t.charAt(n));)n+=1;for(;r>n&&e.test(t.charAt(r-1));)r-=1;return 0===n&&r===t.length?t:t.slice(n,r)}(t,P)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */class B extends Error{constructor(t){super(t),this.name="AssertionError"}}function I(t,e){if(!t)throw new B(`Assertion failed: ${e}`)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
function $(t){return!(!t||"object"!=typeof t||t.nodeType||function(t){return null!=t&&t===t.window}(t))&&!(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const j=t=>t.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
function k(t){if(g(t)){if(!t.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;t=parseFloat(t)}return"number"==typeof t&&!isNaN(t)&&isFinite(t)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const R=/^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function F(t,e){if("font-weight"===j(t)){switch(e.toString().toLowerCase()){case"700":case"bold":return 700;case"400":case"normal":return 400;case"900":case"heavy":return 900}return k(e)?Number(e):e}return/color/i.test(t)&&/^rgb/i.test(e.toString())&&(t=>{if("rgba(0, 0, 0, 0)"===t||""===t)return!1;if(!t)return"#000000";if("#"===t.substr(0,1))return t;const e=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(t)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(t);if(!e)return"#000000";const n=parseInt(e[2],10),r=parseInt(e[3],10);let i=(parseInt(e[4],10)|r<<8|n<<16).toString(16).toUpperCase();for(;i.length<6;)i="0"+i;return e[1]+"#"+i})(e.toString())||e}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const H=t=>t.replace(/([-_])(.)/g,(t,e,n)=>n.toUpperCase());
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function z(t,e,n,r=!1){if("boolean"==typeof n&&(r=n,n=void 0),$(e)||void 0!==n){const r=(t,e,n)=>{n=function(t,e){return!m(e)&&R.test(t)&&k(e.toString())?parseInt(e.toString(),10)+"px":e}(e,n),void 0===n||null!=n&&z(t,e,!0)===F(e,n)||(t.style[e]=n)};if($(e)){const n=Object.keys(e);for(let i=0;i<n.length;i+=1)r(t,H(n[i]),e[n[i]])}else r(t,H(e),n);return""}const i=j(e),o=t.ownerDocument||document,s=!!o&&(o.defaultView||o.parentWindow),l=t.style[e];let a="";return void 0!==l&&""!==l?a=l:s&&!r&&(a=s.getComputedStyle(t).getPropertyValue(i)),R.test(e)&&/^[-+]?[0-9.]+px$/.test(a.toString())&&(a=parseInt(a.toString(),10)),F(e,a)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function V(t,e,n){if(!t||!p(t.getAttribute))return null;if(!g(e))return Object.keys(e).forEach(n=>{const r=e[n];$(r)&&"style"===n?z(t,r):("className"===n&&(n="class"),V(t,n,r))}),null;let r=(t=>t.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(e);if(/^-/.test(r)){const e=V(t,`data${r}`);if(e)return e;r=r.substr(1)}if(void 0!==n){if(null!=n){let e=n.toString();return"IMG"!==t.nodeName||"width"!==r&&"height"!==r||(e=e.replace("px","")),t.setAttribute(r,e),e}t.hasAttribute(r)&&t.removeAttribute(r)}return t.getAttribute(r)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function W(t){return Boolean(t&&t instanceof Object&&p(t.constructor)&&t.isView)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const U=new WeakMap,G=(t,e,n)=>{let r=U.get(t);if(!r){r={},U.set(t,r);let e=null;W(t.j)&&(e=t.j.e),W(t)&&(e=t.e),e&&e.on("beforeDestruct",()=>{U.delete(t)})}return void 0===n?r[e]:(r[e]=n,n)};
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
class Z{constructor(){throw new Error("Dom is static module")}static detach(t){for(;t&&t.firstChild;)t.removeChild(t.firstChild)}static wrapNextInline(t,e,n){let r;const i=t;let o,s=t;n.s.save();do{o=!1,r=s.nextSibling,!r||Z.isBlock(r)||Z.isTag(r,"br")||(o=!0,s=r)}while(o);return Z.__wrapElements(e,n,i,s)}static __wrapElements(t,e,n,r){const i=g(t)?e.createInside.element(t):t;n.parentNode&&n.parentNode.insertBefore(i,n);let o=n;for(;o&&(o=n.nextSibling,i.appendChild(n),n!==r&&o);)n=o;return e.s.restore(),i}static wrapInline(t,e,n){let r,i,o=t,s=t;n.s.save();do{i=!1,r=o.previousSibling,r&&!Z.isBlock(r)&&(i=!0,o=r)}while(i);do{i=!1,r=s.nextSibling,r&&!Z.isBlock(r)&&(i=!0,s=r)}while(i);return Z.__wrapElements(e,n,o,s)}static wrap(t,e,n){const r=g(e)?n.element(e):e;if(Z.isNode(t)){if(!t.parentNode)throw new TypeError("Element should be in DOM");t.parentNode.insertBefore(r,t),r.appendChild(t)}else{const e=t.extractContents();t.insertNode(r),r.appendChild(e)}return r}static unwrap(t){const e=t.parentNode;if(e){for(;t.firstChild;)e.insertBefore(t.firstChild,t);Z.safeRemove(t)}}static between(t,e,n){let r=t;for(;r&&r!==e&&(t===r||!n(r));){let t=r.firstChild||r.nextSibling;if(!t){for(;r&&!r.nextSibling;)if(r=r.parentNode,r===e)return;t=null==r?void 0:r.nextSibling}r=t}}static replace(t,e,n,r=!1,i=!1){let o;if(w(e)&&(I(n,"Need create instance for new tag"),e=n.fromHTML(e)),g(e)?(I(n,"Need create instance for new tag"),o=n.element(e)):o=e,!i)for(;t.firstChild;)o.appendChild(t.firstChild);return r&&Z.isElement(t)&&Z.isElement(o)&&T(t.attributes).forEach(t=>{o.setAttribute(t.name,t.value)}),t.parentNode&&t.parentNode.replaceChild(o,t),o}static isEmptyTextNode(t){return Z.isText(t)&&(!t.nodeValue||0===t.nodeValue.replace(/[\uFEFF]/g,"").trim().length)}static isEmptyContent(t){return Z.each(t,t=>Z.isEmptyTextNode(t))}static isContentEditable(t,e){const n=Z.closest(t,t=>Z.isElement(t)&&t.hasAttribute("contenteditable"),e);return Z.isNode(t)&&"false"!==(null==n?void 0:n.getAttribute("contenteditable"))}static isEmpty(t,e=u){if(!t)return!0;let n;n=p(e)?e:t=>e.has(t.nodeName.toLowerCase());const r=t=>null==t.nodeValue||0===D(t.nodeValue).length;return Z.isText(t)?r(t):!(Z.isElement(t)&&n(t))&&Z.each(t,t=>{if(Z.isText(t)&&!r(t)||Z.isElement(t)&&n(t))return!1})}static isNode(t){return Boolean(t&&g(t.nodeName)&&"number"==typeof t.nodeType&&t.childNodes&&p(t.appendChild))}static isCell(t){return Z.isNode(t)&&("TD"===t.nodeName||"TH"===t.nodeName)}static isList(t){return Z.isTag(t,l)}static isLeaf(t){return Z.isTag(t,"li")}static isImage(t){return Z.isNode(t)&&/^(img|svg|picture|canvas)$/i.test(t.nodeName)}static isBlock(t){return!m(t)&&"object"==typeof t&&Z.isNode(t)&&s.test(t.nodeName)}static isText(t){return Boolean(t&&t.nodeType===Node.TEXT_NODE)}static isComment(t){return Boolean(t&&t.nodeType===Node.COMMENT_NODE)}static isElement(t){return!!Z.isNode(t)&&t.nodeType===Node.ELEMENT_NODE}static isFragment(t){return!!Z.isNode(t)&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isHTMLElement(t){var e;if(!Z.isNode(t))return!1;const n=null===(e=t.ownerDocument)||void 0===e?void 0:e.defaultView;return t instanceof(n?n.HTMLElement:HTMLElement)}static isInlineBlock(t){return Z.isElement(t)&&!/^(BR|HR)$/i.test(t.tagName)&&-1!==["inline","inline-block"].indexOf(z(t,"display").toString())}static canSplitBlock(t){return!m(t)&&Z.isHTMLElement(t)&&Z.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&void 0!==t.style&&!/^(fixed|absolute)/i.test(t.style.position)}static first(t,e){return Z.__deepMost(t,e,!1)}static last(t,e){return Z.__deepMost(t,e,!0)}static __deepMost(t,e,n){const r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";let o=null==t?void 0:t[r];if(!o)return null;do{if(e(o))return o;let n=o[r]||o[i];if(!n&&o.parentNode!==t){do{o=o.parentNode}while(o&&!o[i]&&o.parentNode!==t);n=null==o?void 0:o[i]}o=n}while(o);return null}static prev(t,e,n,r=!0){return Z.find(t,e,n,!1,r)}static next(t,e,n,r=!0){return Z.find(t,e,n,!0,r)}static prevWithClass(t,e){return Z.__siblingWithClass(t,e,!0)}static nextWithClass(t,e){return Z.__siblingWithClass(t,e,!1)}static __siblingWithClass(t,e,n){const r=t=>Z.isElement(t)&&t.classList.contains(e),i=t.parentNode;return n?Z.prev(t,r,i):Z.next(t,r,i)}static find(t,e,n,r=!0,i=!0){const o=this.nextGen(t,n,r,i);let s=o.next();for(;!s.done;){if(e(s.value))return s.value;s=o.next()}return null}static*nextGen(t,e,n=!0,r=!0){const i=[];let o=t;do{let e=n?o.nextSibling:o.previousSibling;for(;e;)i.push(e),e=n?e.nextSibling:e.previousSibling;i.reverse(),yield*this.runInStack(t,i,n,r),o=o.parentNode}while(o&&o!==e);return null}static each(t,e,n=!0){const r=this.eachGen(t,n);let i=r.next();for(;!i.done;){if(!1===e(i.value))return!1;i=r.next()}return!0}static eachGen(t,e=!0){return this.runInStack(t,[t],e)}static*runInStack(t,e,n,r=!0){for(;e.length;){const i=e.pop();if(r){let t=n?i.lastChild:i.firstChild;for(;t;)e.push(t),t=n?t.previousSibling:t.nextSibling}t!==i&&(yield i)}}static findWithCurrent(t,e,n,r="nextSibling",i="firstChild"){let o=t;do{if(e(o))return o||null;if(i&&o&&o[i]){const t=Z.findWithCurrent(o[i],e,o,r,i);if(t)return t}for(;o&&!o[r]&&o!==n;)o=o.parentNode;o&&o[r]&&o!==n&&(o=o[r])}while(o&&o!==n);return null}static findSibling(t,e=!0,n=t=>!Z.isEmptyTextNode(t)){let r=Z.sibling(t,e);for(;r&&!n(r);)r=Z.sibling(r,e);return r&&n(r)?r:null}static findNotEmptySibling(t,e){return Z.findSibling(t,e,t=>{var e;return!Z.isEmptyTextNode(t)&&Boolean(!Z.isText(t)||(null===(e=t.nodeValue)||void 0===e?void 0:e.length)&&D(t.nodeValue))})}static findNotEmptyNeighbor(t,e,n){
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
return function(t,...e){return t(...e)}(e?Z.prev:Z.next,t,t=>Boolean(t&&(!(Z.isText(t)||Z.isComment(t))||D((null==t?void 0:t.nodeValue)||"").length)),n)}static sibling(t,e){return e?t.previousSibling:t.nextSibling}static up(t,e,n,r=!1){let i=t;if(!i)return null;do{if(e(i))return i;if(i===n||!i.parentNode)break;i=i.parentNode}while(i&&i!==n);return i===n&&r&&e(i)?i:null}static closest(t,e,n){let r;const i=t=>t.toLowerCase();if(p(e))r=e;else if(h(e)||x(e)){const t=x(e)?e:new Set(e.map(i));r=e=>Boolean(e&&t.has(i(e.nodeName)))}else r=t=>Boolean(t&&i(e)===i(t.nodeName));return Z.up(t,r,n)}static furthest(t,e,n){let r=null,i=null==t?void 0:t.parentElement;for(;i&&i!==n;)e(i)&&(r=i),i=null==i?void 0:i.parentElement;return r}static appendChildFirst(t,e){t.firstChild!==e&&Z.prepend(t,e)}static after(t,e){var n;null===(n=t.parentNode)||void 0===n||n.insertBefore(e,t.nextSibling)}static before(t,e){var n;null===(n=t.parentNode)||void 0===n||n.insertBefore(e,t)}static prepend(t,e){t.insertBefore(e,t.firstChild)}static append(t,e){h(e)?e.forEach(e=>{this.append(t,e)}):t.appendChild(e)}static moveContent(t,e,n=!1,r=()=>!0){const i=(t.ownerDocument||o).createDocumentFragment();T(t.childNodes).filter(t=>!!r(t)||(Z.safeRemove(t),!1)).forEach(t=>{i.appendChild(t)}),e.insertBefore(i,n?e.firstChild:null)}static isOrContains(t,e,n=!1){return t===e?!n:Boolean(e&&t&&this.up(e,e=>e===t,t,!0))}static safeRemove(...t){t.forEach(t=>Z.isNode(t)&&t.parentNode&&t.parentNode.removeChild(t))}static safeInsertNode(t,e){t.collapsed||t.deleteContents();const n=Z.isFragment(e)?e.lastChild:e;t.startContainer===t.endContainer&&t.collapsed&&Z.isTag(t.startContainer,c)?Z.after(t.startContainer,e):(t.insertNode(e),n&&t.setStartBefore(n)),t.collapse(!0),[e.nextSibling,e.previousSibling].forEach(t=>Z.isText(t)&&!t.nodeValue&&Z.safeRemove(t))}static hide(t){t&&(G(t,"__old_display",t.style.getPropertyValue("display")),t.style.setProperty("display","none"))}static show(t){if(!t)return;const e=G(t,"__old_display");"none"===t.style.getPropertyValue("display")&&t.style.setProperty("display",e||null)}static isTag(t,e){if(Array.isArray(e))throw new TypeError("Dom.isTag does not support array");if(!this.isElement(t))return!1;const n=t.tagName.toLowerCase();return e instanceof Set?e.has(n)||e.has(t.tagName.toUpperCase()):n===e||t.tagName.toUpperCase()===e}static markTemporary(t,e){return e&&V(t,e),V(t,f,!0),t}static isTemporary(t){return!!Z.isElement(t)&&(Z.isMarker(t)||"true"===V(t,f))}static isMarker(t){return Z.isNode(t)&&Z.isTag(t,"span")&&t.hasAttribute("data-jodit-selection_marker")}static replaceTemporaryFromString(t){return M(t,null,f)}static temporaryList(t){const e=[];return Z.each(t,t=>{Z.isHTMLElement(t)&&t.hasAttribute(f)&&e.push(t)}),e}}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const J={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3};function Y(t){let e=0;for(let n=0;n<t.length;n+=1){const r=J[t[n]];e+=r<(J[t[n+1]]||0)?-r:r}return e}function q(t){const e=t.replace(/\s+/g,""),n=/^\(?(?:\d+\.)*(\d+)[.)]?$/.exec(e);if(n)return{tag:"ol",listStyleType:null,start:Number(n[1])};const r=/^\(?([a-z]+|[A-Z]+)[.)]$/.exec(e);if(r){const t=r[1],e=t.toLowerCase(),n=t!==e;if(/^[ivxlcdm]+$/.test(e)&&(e.length>1||"i"===e))return{tag:"ol",listStyleType:n?"upper-roman":"lower-roman",start:Y(e)};if(/^([a-z])\1*$/.test(e))return{tag:"ol",listStyleType:n?"upper-alpha":"lower-alpha",start:26*(e.length-1)+e.charCodeAt(0)-96}}return{tag:"ul",listStyleType:null,start:1}}function K(t){const e=[];return T(t.querySelectorAll("p")).forEach(t=>{const n=/mso-list:\s*l(\d+)\s+level(\d+)(?:\s+lfo(\d+))?/i.exec(V(t,"style")||"");if(!n)return;const r=T(t.querySelectorAll("[style]")).find(t=>/mso-list:\s*ignore/i.test(V(t,"style")||""));e.push({paragraph:t,list:`${n[1]}:${n[3]||""}`,level:Number(n[2]),...q((null==r?void 0:r.textContent)||"")}),r&&function(t,e){let n=t.parentNode;for(Z.safeRemove(t);n&&n!==e&&Z.isElement(n)&&Z.isEmpty(n);){const t=n.parentNode;Z.safeRemove(n),n=t}}(r,t)}),e}function X(t){let e=[];const n=t.map((e,n)=>n>0&&function(t,e){return Z.findSibling(e.paragraph,!0,t=>!Z.isEmptyTextNode(t)&&!Z.isComment(t))===t.paragraph}(t[n-1],e));t.forEach((t,r)=>{const{paragraph:i}=t;for(n[r]||(e=[]);e.length&&e[e.length-1].level>t.level;)e.pop();let o=e[e.length-1];o&&o.level===t.level&&o.list!==t.list&&(e.pop(),o=e[e.length-1]);const s=i.ownerDocument;if(!o||o.level<t.level){const n=s.createElement(t.tag);t.listStyleType&&(n.style.listStyleType=t.listStyleType),"ol"===t.tag&&1!==t.start&&V(n,"start",t.start),o&&o.li?o.li.appendChild(n):Z.before(i,n),o={level:t.level,list:t.list,element:n},e.push(o)}const l=s.createElement("li");T(i.attributes).forEach(t=>{"class"!==t.name&&l.setAttribute(t.name,t.value)}),l.style.removeProperty("margin-left"),l.style.removeProperty("text-indent"),V(l,"style")||V(l,"style",null),Z.moveContent(i,l),Z.safeRemove(i),o.element.appendChild(l),o.li=l})}const Q=r.constants.globalDocument,tt=r.modules.Dom,{attrRaw:et,toArray:nt,trim:rt}=r.modules.Helpers,it=["colspan","rowspan","width","height","style"],ot=["background","background-color","border",/^border-.*/,"color","float","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","padding","text-align","text-justify","text-decoration","text-indent","vertical-align"];function st(t,e=it,n=ot){-1!==t.indexOf("<html ")&&(t=(t=t.substring(t.indexOf("<html "),t.length)).substring(0,t.lastIndexOf("</html>")+7));let r="";try{const i=Q.createElement("div");i.innerHTML=t;const o=[],s=K(i);i.firstChild&&tt.each(i,t=>{if(t)switch(t.nodeType){case Node.ELEMENT_NODE:switch(t.nodeName){case"STYLE":case"LINK":case"META":o.push(t);break;case"W:SDT":case"W:SDTPR":case"FONT":tt.unwrap(t);break;default:if(/mso-list:\s*ignore/i.test(t.getAttribute("style")||"")){o.push(t);break}nt(t.attributes).forEach(n=>{if(-1===["src","href","rel","content"].indexOf(n.name.toLowerCase())){if(e.includes(n.name.toLowerCase()))return;et(t,n.name,null)}}),function(t,e){const n=[];Array.from(t.style).filter(t=>function(t,e){return Array.isArray(e)&&e.some(e=>"string"==typeof e?e===t:e instanceof RegExp&&e.test(t))}(t,e)).forEach(e=>{const r=t.style.getPropertyValue(e),i=t.style.getPropertyPriority(e);r&&n.push(`${e}: ${r}${i?" !important":""}`)}),n.length?t.setAttribute("style",`${n.join("; ")};`):t.removeAttribute("style")}(t,n)}break;case Node.TEXT_NODE:break;default:o.push(t)}}),tt.safeRemove.apply(null,o),X(s),r=i.innerHTML}catch(t){}return r&&(t=r),(t=t.split(/(\n)/).filter(rt).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")}const lt=r.plugins.get("paste-from-word");if(lt){const t=lt.prototype.insertFromWordByType;lt.prototype.insertFromWordByType=function(e,n,r,i){"insert_by_clean_paste"===r?this.j.selection.insertHTML(st(n,this.j.options.cleanPasteAllowedAttributes,this.j.options.cleanPasteAllowedStyles)):t.apply(this,[e,n,r,i])}}class at{init(t){this.jodit=t,this.onCustomPasteHTMLOptionFunc=this.onCustomPasteHTMLOption.bind(this),this.jodit.events.on("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}destruct(){this.jodit.events.off("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}onCustomPasteHTMLOption(t,e){if("insert_by_clean_paste"===t)return st(e,this.jodit.options.cleanPasteAllowedAttributes,this.jodit.options.cleanPasteAllowedStyles)}}return r.plugins.add("paste-patch",at),r.defaultOptions.cleanPasteAllowedAttributes=it,r.defaultOptions.cleanPasteAllowedStyles=ot,at});
//# sourceMappingURL=index.umd.js.map
