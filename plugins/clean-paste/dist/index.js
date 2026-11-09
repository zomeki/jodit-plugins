"use strict";function e(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var t=e(require("jodit"));const n=t.Jodit||t.default||globalThis.Jodit||t,r="undefined"!=typeof window?window:void 0,i="undefined"!=typeof document?document:void 0,o=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i,s=new Set(["ul","ol"]),l=["img","video","svg","iframe","script","input","textarea","link","jodit","jodit-media"],a=new Set([...l,"br","hr"]),c=new Set(l);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent));void 0!==r&&/Mac|iPod|iPhone|iPad/.test(r.navigator.platform);const u=e=>{const t=e.split("/"),n=!1;return/\.js/.test(t[t.length-1])?{basePath:t.slice(0,t.length-1).join("/")+"/",isMin:n}:{basePath:e,isMin:n}};(()=>{if("undefined"==typeof document)return{basePath:"",isMin:Boolean(!1)};const e=i.currentScript;if(e)return u(e.src);const t=i.querySelectorAll("script[src]");t&&t.length?u(t[t.length-1].src):u(r.location.href)})();const d="data-jodit-temp";
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
function p(e){return"function"==typeof e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function f(e){return Array.isArray(e)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function h(e){return"string"==typeof e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function m(e){return null==e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function g(e,t){if(!h(e)||!e.length)return null;const n=e.split(".");let r=t;try{for(const e of n){if(m(r[e]))return null;r=r[e]}}catch(e){return null}return m(r)?null:r}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const y={};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
const b=function(...e){var t;var n;return(n=Array.from,Boolean(n)&&"function"===(typeof n).toLowerCase()&&(n===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)))?Array.from:null!==(t=function(e){var t,n;if(!(e in y)){const n=i.createElement("iframe");try{if(n.src="about:blank",i.body.appendChild(n),!n.contentWindow)return null;const t=g(e,n.contentWindow),r=g(e.split(".").slice(0,-1).join("."),n.contentWindow);p(t)&&(y[e]=t.bind(r))}catch(e){}finally{null===(t=n.parentNode)||void 0===t||t.removeChild(n)}}return null!==(n=y[e])&&void 0!==n?n:null}("Array.from"))&&void 0!==t?t:Array.from).apply(Array,e)};
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
function v(e){return Boolean(e)&&p(e.has)&&p(e.add)&&p(e.delete)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function T(e){return e.replace(/[\s\n\t\r\uFEFF\u200b]+$/g,"").replace(/^[\s\n\t\r\uFEFF\u200b]+/g,"")}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */class E extends Error{constructor(e){super(e),this.name="AssertionError"}}function N(e,t){if(!e)throw new E(`Assertion failed: ${t}`)}
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
function C(e){return!(!e||"object"!=typeof e||e.nodeType||function(e){return null!=e&&e===e.window}(e))&&!(e.constructor&&!{}.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const w=e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
function S(e){if(h(e)){if(!e.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;e=parseFloat(e)}return"number"==typeof e&&!isNaN(e)&&isFinite(e)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const A=/^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function x(e,t){if("font-weight"===w(e)){switch(t.toString().toLowerCase()){case"700":case"bold":return 700;case"400":case"normal":return 400;case"900":case"heavy":return 900}return S(t)?Number(t):t}return/color/i.test(e)&&/^rgb/i.test(t.toString())&&(e=>{if("rgba(0, 0, 0, 0)"===e||""===e)return!1;if(!e)return"#000000";if("#"===e.substr(0,1))return e;const t=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);if(!t)return"#000000";const n=parseInt(t[2],10),r=parseInt(t[3],10);let i=(parseInt(t[4],10)|r<<8|n<<16).toString(16).toUpperCase();for(;i.length<6;)i="0"+i;return t[1]+"#"+i})(t.toString())||t}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const O=e=>e.replace(/([-_])(.)/g,(e,t,n)=>n.toUpperCase());
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function _(e,t,n,r=!1){if("boolean"==typeof n&&(r=n,n=void 0),C(t)||void 0!==n){const r=(e,t,n)=>{n=function(e,t){return!m(t)&&A.test(e)&&S(t.toString())?parseInt(t.toString(),10)+"px":t}(t,n),void 0===n||null!=n&&_(e,t,!0)===x(t,n)||(e.style[t]=n)};if(C(t)){const n=Object.keys(t);for(let i=0;i<n.length;i+=1)r(e,O(n[i]),t[n[i]])}else r(e,O(t),n);return""}const i=w(t),o=e.ownerDocument||document,s=!!o&&(o.defaultView||o.parentWindow),l=e.style[t];let a="";return void 0!==l&&""!==l?a=l:s&&!r&&(a=s.getComputedStyle(e).getPropertyValue(i)),A.test(t)&&/^[-+]?[0-9.]+px$/.test(a.toString())&&(a=parseInt(a.toString(),10)),x(t,a)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function L(e,t,n){if(!e||!p(e.getAttribute))return null;if(!h(t))return Object.keys(t).forEach(n=>{const r=t[n];C(r)&&"style"===n?_(e,r):("className"===n&&(n="class"),L(e,n,r))}),null;let r=(e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(t);if(/^-/.test(r)){const t=L(e,`data${r}`);if(t)return t;r=r.substr(1)}if(void 0!==n){if(null!=n){let t=n.toString();return"IMG"!==e.nodeName||"width"!==r&&"height"!==r||(t=t.replace("px","")),e.setAttribute(r,t),t}e.hasAttribute(r)&&e.removeAttribute(r)}return e.getAttribute(r)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function M(e){return Boolean(e&&e instanceof Object&&p(e.constructor)&&e.isView)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const D=new WeakMap,P=(e,t,n)=>{let r=D.get(e);if(!r){r={},D.set(e,r);let t=null;M(e.j)&&(t=e.j.e),M(e)&&(t=e.e),t&&t.on("beforeDestruct",()=>{D.delete(e)})}return void 0===n?r[t]:(r[t]=n,n)};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
const $=new RegExp(`<([a-z]+)[^>]+${d}[^>]*>(.+?)</\\1>`,"gi");class B{constructor(){throw new Error("Dom is static module")}static detach(e){for(;e&&e.firstChild;)e.removeChild(e.firstChild)}static wrapNextInline(e,t,n){let r;const i=e;let o,s=e;n.s.save();do{o=!1,r=s.nextSibling,!r||B.isBlock(r)||B.isTag(r,"br")||(o=!0,s=r)}while(o);return B.__wrapElements(t,n,i,s)}static __wrapElements(e,t,n,r){const i=h(e)?t.createInside.element(e):e;n.parentNode&&n.parentNode.insertBefore(i,n);let o=n;for(;o&&(o=n.nextSibling,i.appendChild(n),n!==r&&o);)n=o;return t.s.restore(),i}static wrapInline(e,t,n){let r,i,o=e,s=e;n.s.save();do{i=!1,r=o.previousSibling,r&&!B.isBlock(r)&&(i=!0,o=r)}while(i);do{i=!1,r=s.nextSibling,r&&!B.isBlock(r)&&(i=!0,s=r)}while(i);return B.__wrapElements(t,n,o,s)}static wrap(e,t,n){const r=h(t)?n.element(t):t;if(B.isNode(e)){if(!e.parentNode)throw new TypeError("Element should be in DOM");e.parentNode.insertBefore(r,e),r.appendChild(e)}else{const t=e.extractContents();e.insertNode(r),r.appendChild(t)}return r}static unwrap(e){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);B.safeRemove(e)}}static between(e,t,n){let r=e;for(;r&&r!==t&&(e===r||!n(r));){let e=r.firstChild||r.nextSibling;if(!e){for(;r&&!r.nextSibling;)if(r=r.parentNode,r===t)return;e=null==r?void 0:r.nextSibling}r=e}}static replace(e,t,n,r=!1,i=!1){var o;let s;if(h(o=t)&&/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(o.replace(/[\r\n]/g,""))&&(N(n,"Need create instance for new tag"),t=n.fromHTML(t)),h(t)?(N(n,"Need create instance for new tag"),s=n.element(t)):s=t,!i)for(;e.firstChild;)s.appendChild(e.firstChild);return r&&B.isElement(e)&&B.isElement(s)&&b(e.attributes).forEach(e=>{s.setAttribute(e.name,e.value)}),e.parentNode&&e.parentNode.replaceChild(s,e),s}static isEmptyTextNode(e){return B.isText(e)&&(!e.nodeValue||0===e.nodeValue.replace(/[\uFEFF]/g,"").trim().length)}static isEmptyContent(e){return B.each(e,e=>B.isEmptyTextNode(e))}static isContentEditable(e,t){const n=B.closest(e,e=>B.isElement(e)&&e.hasAttribute("contenteditable"),t);return B.isNode(e)&&"false"!==(null==n?void 0:n.getAttribute("contenteditable"))}static isEmpty(e,t=c){if(!e)return!0;let n;n=p(t)?t:e=>t.has(e.nodeName.toLowerCase());const r=e=>null==e.nodeValue||0===T(e.nodeValue).length;return B.isText(e)?r(e):!(B.isElement(e)&&n(e))&&B.each(e,e=>{if(B.isText(e)&&!r(e)||B.isElement(e)&&n(e))return!1})}static isNode(e){return Boolean(e&&h(e.nodeName)&&"number"==typeof e.nodeType&&e.childNodes&&p(e.appendChild))}static isCell(e){return B.isNode(e)&&("TD"===e.nodeName||"TH"===e.nodeName)}static isList(e){return B.isTag(e,s)}static isLeaf(e){return B.isTag(e,"li")}static isImage(e){return B.isNode(e)&&/^(img|svg|picture|canvas)$/i.test(e.nodeName)}static isBlock(e){return!m(e)&&"object"==typeof e&&B.isNode(e)&&o.test(e.nodeName)}static isText(e){return Boolean(e&&e.nodeType===Node.TEXT_NODE)}static isComment(e){return Boolean(e&&e.nodeType===Node.COMMENT_NODE)}static isElement(e){return!!B.isNode(e)&&e.nodeType===Node.ELEMENT_NODE}static isFragment(e){return!!B.isNode(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isHTMLElement(e){var t;if(!B.isNode(e))return!1;const n=null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView;return e instanceof(n?n.HTMLElement:HTMLElement)}static isInlineBlock(e){return B.isElement(e)&&!/^(BR|HR)$/i.test(e.tagName)&&-1!==["inline","inline-block"].indexOf(_(e,"display").toString())}static canSplitBlock(e){return!m(e)&&B.isHTMLElement(e)&&B.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&void 0!==e.style&&!/^(fixed|absolute)/i.test(e.style.position)}static first(e,t){return B.__deepMost(e,t,!1)}static last(e,t){return B.__deepMost(e,t,!0)}static __deepMost(e,t,n){const r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";let o=null==e?void 0:e[r];if(!o)return null;do{if(t(o))return o;let n=o[r]||o[i];if(!n&&o.parentNode!==e){do{o=o.parentNode}while(o&&!o[i]&&o.parentNode!==e);n=null==o?void 0:o[i]}o=n}while(o);return null}static prev(e,t,n,r=!0){return B.find(e,t,n,!1,r)}static next(e,t,n,r=!0){return B.find(e,t,n,!0,r)}static prevWithClass(e,t){return B.__siblingWithClass(e,t,!0)}static nextWithClass(e,t){return B.__siblingWithClass(e,t,!1)}static __siblingWithClass(e,t,n){const r=e=>B.isElement(e)&&e.classList.contains(t),i=e.parentNode;return n?B.prev(e,r,i):B.next(e,r,i)}static find(e,t,n,r=!0,i=!0){const o=this.nextGen(e,n,r,i);let s=o.next();for(;!s.done;){if(t(s.value))return s.value;s=o.next()}return null}static*nextGen(e,t,n=!0,r=!0){const i=[];let o=e;do{let t=n?o.nextSibling:o.previousSibling;for(;t;)i.push(t),t=n?t.nextSibling:t.previousSibling;i.reverse(),yield*this.runInStack(e,i,n,r),o=o.parentNode}while(o&&o!==t);return null}static each(e,t,n=!0){const r=this.eachGen(e,n);let i=r.next();for(;!i.done;){if(!1===t(i.value))return!1;i=r.next()}return!0}static eachGen(e,t=!0){return this.runInStack(e,[e],t)}static*runInStack(e,t,n,r=!0){for(;t.length;){const i=t.pop();if(r){let e=n?i.lastChild:i.firstChild;for(;e;)t.push(e),e=n?e.previousSibling:e.nextSibling}e!==i&&(yield i)}}static findWithCurrent(e,t,n,r="nextSibling",i="firstChild"){let o=e;do{if(t(o))return o||null;if(i&&o&&o[i]){const e=B.findWithCurrent(o[i],t,o,r,i);if(e)return e}for(;o&&!o[r]&&o!==n;)o=o.parentNode;o&&o[r]&&o!==n&&(o=o[r])}while(o&&o!==n);return null}static findSibling(e,t=!0,n=e=>!B.isEmptyTextNode(e)){let r=B.sibling(e,t);for(;r&&!n(r);)r=B.sibling(r,t);return r&&n(r)?r:null}static findNotEmptySibling(e,t){return B.findSibling(e,t,e=>{var t;return!B.isEmptyTextNode(e)&&Boolean(!B.isText(e)||(null===(t=e.nodeValue)||void 0===t?void 0:t.length)&&T(e.nodeValue))})}static findNotEmptyNeighbor(e,t,n){
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
return function(e,...t){return e(...t)}(t?B.prev:B.next,e,e=>Boolean(e&&(!(B.isText(e)||B.isComment(e))||T((null==e?void 0:e.nodeValue)||"").length)),n)}static sibling(e,t){return t?e.previousSibling:e.nextSibling}static up(e,t,n,r=!1){let i=e;if(!i)return null;do{if(t(i))return i;if(i===n||!i.parentNode)break;i=i.parentNode}while(i&&i!==n);return i===n&&r&&t(i)?i:null}static closest(e,t,n){let r;const i=e=>e.toLowerCase();if(p(t))r=t;else if(f(t)||v(t)){const e=v(t)?t:new Set(t.map(i));r=t=>Boolean(t&&e.has(i(t.nodeName)))}else r=e=>Boolean(e&&i(t)===i(e.nodeName));return B.up(e,r,n)}static furthest(e,t,n){let r=null,i=null==e?void 0:e.parentElement;for(;i&&i!==n;)t(i)&&(r=i),i=null==i?void 0:i.parentElement;return r}static appendChildFirst(e,t){e.firstChild!==t&&B.prepend(e,t)}static after(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e.nextSibling)}static before(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e)}static prepend(e,t){e.insertBefore(t,e.firstChild)}static append(e,t){f(t)?t.forEach(t=>{this.append(e,t)}):e.appendChild(t)}static moveContent(e,t,n=!1,r=()=>!0){const o=(e.ownerDocument||i).createDocumentFragment();b(e.childNodes).filter(e=>!!r(e)||(B.safeRemove(e),!1)).forEach(e=>{o.appendChild(e)}),t.insertBefore(o,n?t.firstChild:null)}static isOrContains(e,t,n=!1){return e===t?!n:Boolean(t&&e&&this.up(t,t=>t===e,e,!0))}static safeRemove(...e){e.forEach(e=>B.isNode(e)&&e.parentNode&&e.parentNode.removeChild(e))}static safeInsertNode(e,t){e.collapsed||e.deleteContents();const n=B.isFragment(t)?t.lastChild:t;e.startContainer===e.endContainer&&e.collapsed&&B.isTag(e.startContainer,a)?B.after(e.startContainer,t):(e.insertNode(t),n&&e.setStartBefore(n)),e.collapse(!0),[t.nextSibling,t.previousSibling].forEach(e=>B.isText(e)&&!e.nodeValue&&B.safeRemove(e))}static hide(e){e&&(P(e,"__old_display",e.style.getPropertyValue("display")),e.style.setProperty("display","none"))}static show(e){if(!e)return;const t=P(e,"__old_display");"none"===e.style.getPropertyValue("display")&&e.style.setProperty("display",t||null)}static isTag(e,t){if(Array.isArray(t))throw new TypeError("Dom.isTag does not support array");if(!this.isElement(e))return!1;const n=e.tagName.toLowerCase();return t instanceof Set?t.has(n)||t.has(e.tagName.toUpperCase()):n===t||e.tagName.toUpperCase()===t}static markTemporary(e,t){return t&&L(e,t),L(e,d,!0),e}static isTemporary(e){return!!B.isElement(e)&&(B.isMarker(e)||"true"===L(e,d))}static isMarker(e){return B.isNode(e)&&B.isTag(e,"span")&&e.hasAttribute("data-jodit-selection_marker")}static replaceTemporaryFromString(e){return e.replace($,"$2")}static temporaryList(e){const t=[];return B.each(e,e=>{B.isHTMLElement(e)&&e.hasAttribute(d)&&t.push(e)}),t}}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const I={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3};function F(e){let t=0;for(let n=0;n<e.length;n+=1){const r=I[e[n]];t+=r<(I[e[n+1]]||0)?-r:r}return t}function j(e){const t=e.replace(/\s+/g,""),n=/^\(?(?:\d+\.)*(\d+)[.)]?$/.exec(t);if(n)return{tag:"ol",listStyleType:null,start:Number(n[1])};const r=/^\(?([a-z]+|[A-Z]+)[.)]$/.exec(t);if(r){const e=r[1],t=e.toLowerCase(),n=e!==t;if(/^[ivxlcdm]+$/.test(t)&&(t.length>1||"i"===t))return{tag:"ol",listStyleType:n?"upper-roman":"lower-roman",start:F(t)};if(/^([a-z])\1*$/.test(t))return{tag:"ol",listStyleType:n?"upper-alpha":"lower-alpha",start:26*(t.length-1)+t.charCodeAt(0)-96}}return{tag:"ul",listStyleType:null,start:1}}function R(e){const t=[];return b(e.querySelectorAll("p")).forEach(e=>{const n=/mso-list:\s*l(\d+)\s+level(\d+)(?:\s+lfo(\d+))?/i.exec(L(e,"style")||"");if(!n)return;const r=b(e.querySelectorAll("[style]")).find(e=>/mso-list:\s*ignore/i.test(L(e,"style")||""));t.push({paragraph:e,list:`${n[1]}:${n[3]||""}`,level:Number(n[2]),...j((null==r?void 0:r.textContent)||"")}),r&&function(e,t){let n=e.parentNode;for(B.safeRemove(e);n&&n!==t&&B.isElement(n)&&B.isEmpty(n);){const e=n.parentNode;B.safeRemove(n),n=e}}(r,e)}),t}function k(e){let t=[];const n=e.map((t,n)=>n>0&&function(e,t){return B.findSibling(t.paragraph,!0,e=>!B.isEmptyTextNode(e)&&!B.isComment(e))===e.paragraph}(e[n-1],t));e.forEach((e,r)=>{const{paragraph:i}=e;for(n[r]||(t=[]);t.length&&t[t.length-1].level>e.level;)t.pop();let o=t[t.length-1];o&&o.level===e.level&&o.list!==e.list&&(t.pop(),o=t[t.length-1]);const s=i.ownerDocument;if(!o||o.level<e.level){const n=s.createElement(e.tag);e.listStyleType&&(n.style.listStyleType=e.listStyleType),"ol"===e.tag&&1!==e.start&&L(n,"start",e.start),o&&o.li?o.li.appendChild(n):B.before(i,n),o={level:e.level,list:e.list,element:n},t.push(o)}const l=s.createElement("li");b(i.attributes).forEach(e=>{"class"!==e.name&&l.setAttribute(e.name,e.value)}),l.style.removeProperty("margin-left"),l.style.removeProperty("text-indent"),L(l,"style")||L(l,"style",null),B.moveContent(i,l),B.safeRemove(i),o.element.appendChild(l),o.li=l})}const H=n.constants.globalDocument,V=n.modules.Dom,{attrRaw:z,toArray:W,trim:U}=n.modules.Helpers,G=["colspan","rowspan","width","height","style"],Z=["background","background-color","border",/^border-.*/,"color","float","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","padding","text-align","text-justify","text-decoration","text-indent","vertical-align"];function J(e,t=G,n=Z){-1!==e.indexOf("<html ")&&(e=(e=e.substring(e.indexOf("<html "),e.length)).substring(0,e.lastIndexOf("</html>")+7));let r="";try{const i=H.createElement("div");i.innerHTML=e;const o=[],s=R(i);i.firstChild&&V.each(i,e=>{if(e)switch(e.nodeType){case Node.ELEMENT_NODE:switch(e.nodeName){case"STYLE":case"LINK":case"META":o.push(e);break;case"W:SDT":case"W:SDTPR":case"FONT":V.unwrap(e);break;default:if(/mso-list:\s*ignore/i.test(e.getAttribute("style")||"")){o.push(e);break}W(e.attributes).forEach(n=>{if(-1===["src","href","rel","content"].indexOf(n.name.toLowerCase())){if(t.includes(n.name.toLowerCase()))return;z(e,n.name,null)}}),function(e,t){const n=[];Array.from(e.style).filter(e=>function(e,t){return Array.isArray(t)&&t.some(t=>"string"==typeof t?t===e:t instanceof RegExp&&t.test(e))}(e,t)).forEach(t=>{const r=e.style.getPropertyValue(t),i=e.style.getPropertyPriority(t);r&&n.push(`${t}: ${r}${i?" !important":""}`)}),n.length?e.setAttribute("style",`${n.join("; ")};`):e.removeAttribute("style")}(e,n)}break;case Node.TEXT_NODE:break;default:o.push(e)}}),V.safeRemove.apply(null,o),k(s),r=i.innerHTML}catch(e){}return r&&(e=r),(e=e.split(/(\n)/).filter(U).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")}const Y=n.plugins.get("paste-from-word");if(Y){const e=Y.prototype.insertFromWordByType;Y.prototype.insertFromWordByType=function(t,n,r,i){"insert_by_clean_paste"===r?this.j.selection.insertHTML(J(n,this.j.options.cleanPasteAllowedAttributes,this.j.options.cleanPasteAllowedStyles)):e.apply(this,[t,n,r,i])}}class q{init(e){this.jodit=e,this.onCustomPasteHTMLOptionFunc=this.onCustomPasteHTMLOption.bind(this),this.jodit.events.on("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}destruct(){this.jodit.events.off("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}onCustomPasteHTMLOption(e,t){if("insert_by_clean_paste"===e)return J(t,this.jodit.options.cleanPasteAllowedAttributes,this.jodit.options.cleanPasteAllowedStyles)}}n.plugins.add("paste-patch",q),n.defaultOptions.cleanPasteAllowedAttributes=G,n.defaultOptions.cleanPasteAllowedStyles=Z,module.exports=q;
//# sourceMappingURL=index.js.map
