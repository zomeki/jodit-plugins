import*as e from"jodit";const t=e.Jodit||e.default||globalThis.Jodit||e,n="undefined"!=typeof window?window:void 0,r="undefined"!=typeof document?document:void 0,i=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i,s=new Set(["ul","ol"]),o=["img","video","svg","iframe","script","input","textarea","link","jodit","jodit-media"],a=new Set([...o,"br","hr"]),l=new Set(o);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent));void 0!==n&&/Mac|iPod|iPhone|iPad/.test(n.navigator.platform);const c=e=>{const t=e.split("/"),n=!1;return/\.js/.test(t[t.length-1])?{basePath:t.slice(0,t.length-1).join("/")+"/",isMin:n}:{basePath:e,isMin:n}};(()=>{if("undefined"==typeof document)return{basePath:"",isMin:Boolean(!1)};const e=r.currentScript;if(e)return c(e.src);const t=r.querySelectorAll("script[src]");t&&t.length?c(t[t.length-1].src):c(n.location.href)})();const u="data-jodit-temp";
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
function d(e){return"function"==typeof e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function p(e){return Array.isArray(e)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function f(e){return"string"==typeof e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function h(e){return null==e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function m(e,t){if(!f(e)||!e.length)return null;const n=e.split(".");let r=t;try{for(const e of n){if(h(r[e]))return null;r=r[e]}}catch(e){return null}return h(r)?null:r}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const g={};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
const y=function(...e){var t;var n;return(n=Array.from,Boolean(n)&&"function"===(typeof n).toLowerCase()&&(n===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)))?Array.from:null!==(t=function(e){var t,n;if(!(e in g)){const n=r.createElement("iframe");try{if(n.src="about:blank",r.body.appendChild(n),!n.contentWindow)return null;const t=m(e,n.contentWindow),i=m(e.split(".").slice(0,-1).join("."),n.contentWindow);d(t)&&(g[e]=t.bind(i))}catch(e){}finally{null===(t=n.parentNode)||void 0===t||t.removeChild(n)}}return null!==(n=g[e])&&void 0!==n?n:null}("Array.from"))&&void 0!==t?t:Array.from).apply(Array,e)};
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
function b(e){return Boolean(e)&&d(e.has)&&d(e.add)&&d(e.delete)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function T(e){return e.replace(/[\s\n\t\r\uFEFF\u200b]+$/g,"").replace(/^[\s\n\t\r\uFEFF\u200b]+/g,"")}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */class N extends Error{constructor(e){super(e),this.name="AssertionError"}}function v(e,t){if(!e)throw new N(`Assertion failed: ${t}`)}
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
function E(e){return!(!e||"object"!=typeof e||e.nodeType||function(e){return null!=e&&e===e.window}(e))&&!(e.constructor&&!{}.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const C=e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
function w(e){if(f(e)){if(!e.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;e=parseFloat(e)}return"number"==typeof e&&!isNaN(e)&&isFinite(e)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const S=/^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function x(e,t){if("font-weight"===C(e)){switch(t.toString().toLowerCase()){case"700":case"bold":return 700;case"400":case"normal":return 400;case"900":case"heavy":return 900}return w(t)?Number(t):t}return/color/i.test(e)&&/^rgb/i.test(t.toString())&&(e=>{if("rgba(0, 0, 0, 0)"===e||""===e)return!1;if(!e)return"#000000";if("#"===e.substr(0,1))return e;const t=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);if(!t)return"#000000";const n=parseInt(t[2],10),r=parseInt(t[3],10);let i=(parseInt(t[4],10)|r<<8|n<<16).toString(16).toUpperCase();for(;i.length<6;)i="0"+i;return t[1]+"#"+i})(t.toString())||t}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const A=e=>e.replace(/([-_])(.)/g,(e,t,n)=>n.toUpperCase());
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function O(e,t,n,r=!1){if("boolean"==typeof n&&(r=n,n=void 0),E(t)||void 0!==n){const r=(e,t,n)=>{n=function(e,t){return!h(t)&&S.test(e)&&w(t.toString())?parseInt(t.toString(),10)+"px":t}(t,n),void 0===n||null!=n&&O(e,t,!0)===x(t,n)||(e.style[t]=n)};if(E(t)){const n=Object.keys(t);for(let i=0;i<n.length;i+=1)r(e,A(n[i]),t[n[i]])}else r(e,A(t),n);return""}const i=C(t),s=e.ownerDocument||document,o=!!s&&(s.defaultView||s.parentWindow),a=e.style[t];let l="";return void 0!==a&&""!==a?l=a:o&&!r&&(l=o.getComputedStyle(e).getPropertyValue(i)),S.test(t)&&/^[-+]?[0-9.]+px$/.test(l.toString())&&(l=parseInt(l.toString(),10)),x(t,l)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function _(e,t,n){if(!e||!d(e.getAttribute))return null;if(!f(t))return Object.keys(t).forEach(n=>{const r=t[n];E(r)&&"style"===n?O(e,r):("className"===n&&(n="class"),_(e,n,r))}),null;let r=(e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(t);if(/^-/.test(r)){const t=_(e,`data${r}`);if(t)return t;r=r.substr(1)}if(void 0!==n){if(null!=n){let t=n.toString();return"IMG"!==e.nodeName||"width"!==r&&"height"!==r||(t=t.replace("px","")),e.setAttribute(r,t),t}e.hasAttribute(r)&&e.removeAttribute(r)}return e.getAttribute(r)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function L(e){return Boolean(e&&e instanceof Object&&d(e.constructor)&&e.isView)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const M=new WeakMap,D=(e,t,n)=>{let r=M.get(e);if(!r){r={},M.set(e,r);let t=null;L(e.j)&&(t=e.j.e),L(e)&&(t=e.e),t&&t.on("beforeDestruct",()=>{M.delete(e)})}return void 0===n?r[t]:(r[t]=n,n)};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
const B=new RegExp(`<([a-z]+)[^>]+${u}[^>]*>(.+?)</\\1>`,"gi");class I{constructor(){throw new Error("Dom is static module")}static detach(e){for(;e&&e.firstChild;)e.removeChild(e.firstChild)}static wrapNextInline(e,t,n){let r;const i=e;let s,o=e;n.s.save();do{s=!1,r=o.nextSibling,!r||I.isBlock(r)||I.isTag(r,"br")||(s=!0,o=r)}while(s);return I.__wrapElements(t,n,i,o)}static __wrapElements(e,t,n,r){const i=f(e)?t.createInside.element(e):e;n.parentNode&&n.parentNode.insertBefore(i,n);let s=n;for(;s&&(s=n.nextSibling,i.appendChild(n),n!==r&&s);)n=s;return t.s.restore(),i}static wrapInline(e,t,n){let r,i,s=e,o=e;n.s.save();do{i=!1,r=s.previousSibling,r&&!I.isBlock(r)&&(i=!0,s=r)}while(i);do{i=!1,r=o.nextSibling,r&&!I.isBlock(r)&&(i=!0,o=r)}while(i);return I.__wrapElements(t,n,s,o)}static wrap(e,t,n){const r=f(t)?n.element(t):t;if(I.isNode(e)){if(!e.parentNode)throw new TypeError("Element should be in DOM");e.parentNode.insertBefore(r,e),r.appendChild(e)}else{const t=e.extractContents();e.insertNode(r),r.appendChild(t)}return r}static unwrap(e){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);I.safeRemove(e)}}static between(e,t,n){let r=e;for(;r&&r!==t&&(e===r||!n(r));){let e=r.firstChild||r.nextSibling;if(!e){for(;r&&!r.nextSibling;)if(r=r.parentNode,r===t)return;e=null==r?void 0:r.nextSibling}r=e}}static replace(e,t,n,r=!1,i=!1){var s;let o;if(f(s=t)&&/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(s.replace(/[\r\n]/g,""))&&(v(n,"Need create instance for new tag"),t=n.fromHTML(t)),f(t)?(v(n,"Need create instance for new tag"),o=n.element(t)):o=t,!i)for(;e.firstChild;)o.appendChild(e.firstChild);return r&&I.isElement(e)&&I.isElement(o)&&y(e.attributes).forEach(e=>{o.setAttribute(e.name,e.value)}),e.parentNode&&e.parentNode.replaceChild(o,e),o}static isEmptyTextNode(e){return I.isText(e)&&(!e.nodeValue||0===e.nodeValue.replace(/[\uFEFF]/g,"").trim().length)}static isEmptyContent(e){return I.each(e,e=>I.isEmptyTextNode(e))}static isContentEditable(e,t){const n=I.closest(e,e=>I.isElement(e)&&e.hasAttribute("contenteditable"),t);return I.isNode(e)&&"false"!==(null==n?void 0:n.getAttribute("contenteditable"))}static isEmpty(e,t=l){if(!e)return!0;let n;n=d(t)?t:e=>t.has(e.nodeName.toLowerCase());const r=e=>null==e.nodeValue||0===T(e.nodeValue).length;return I.isText(e)?r(e):!(I.isElement(e)&&n(e))&&I.each(e,e=>{if(I.isText(e)&&!r(e)||I.isElement(e)&&n(e))return!1})}static isNode(e){return Boolean(e&&f(e.nodeName)&&"number"==typeof e.nodeType&&e.childNodes&&d(e.appendChild))}static isCell(e){return I.isNode(e)&&("TD"===e.nodeName||"TH"===e.nodeName)}static isList(e){return I.isTag(e,s)}static isLeaf(e){return I.isTag(e,"li")}static isImage(e){return I.isNode(e)&&/^(img|svg|picture|canvas)$/i.test(e.nodeName)}static isBlock(e){return!h(e)&&"object"==typeof e&&I.isNode(e)&&i.test(e.nodeName)}static isText(e){return Boolean(e&&e.nodeType===Node.TEXT_NODE)}static isComment(e){return Boolean(e&&e.nodeType===Node.COMMENT_NODE)}static isElement(e){return!!I.isNode(e)&&e.nodeType===Node.ELEMENT_NODE}static isFragment(e){return!!I.isNode(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isHTMLElement(e){var t;if(!I.isNode(e))return!1;const n=null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView;return e instanceof(n?n.HTMLElement:HTMLElement)}static isInlineBlock(e){return I.isElement(e)&&!/^(BR|HR)$/i.test(e.tagName)&&-1!==["inline","inline-block"].indexOf(O(e,"display").toString())}static canSplitBlock(e){return!h(e)&&I.isHTMLElement(e)&&I.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&void 0!==e.style&&!/^(fixed|absolute)/i.test(e.style.position)}static first(e,t){return I.__deepMost(e,t,!1)}static last(e,t){return I.__deepMost(e,t,!0)}static __deepMost(e,t,n){const r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";let s=null==e?void 0:e[r];if(!s)return null;do{if(t(s))return s;let n=s[r]||s[i];if(!n&&s.parentNode!==e){do{s=s.parentNode}while(s&&!s[i]&&s.parentNode!==e);n=null==s?void 0:s[i]}s=n}while(s);return null}static prev(e,t,n,r=!0){return I.find(e,t,n,!1,r)}static next(e,t,n,r=!0){return I.find(e,t,n,!0,r)}static prevWithClass(e,t){return I.__siblingWithClass(e,t,!0)}static nextWithClass(e,t){return I.__siblingWithClass(e,t,!1)}static __siblingWithClass(e,t,n){const r=e=>I.isElement(e)&&e.classList.contains(t),i=e.parentNode;return n?I.prev(e,r,i):I.next(e,r,i)}static find(e,t,n,r=!0,i=!0){const s=this.nextGen(e,n,r,i);let o=s.next();for(;!o.done;){if(t(o.value))return o.value;o=s.next()}return null}static*nextGen(e,t,n=!0,r=!0){const i=[];let s=e;do{let t=n?s.nextSibling:s.previousSibling;for(;t;)i.push(t),t=n?t.nextSibling:t.previousSibling;i.reverse(),yield*this.runInStack(e,i,n,r),s=s.parentNode}while(s&&s!==t);return null}static each(e,t,n=!0){const r=this.eachGen(e,n);let i=r.next();for(;!i.done;){if(!1===t(i.value))return!1;i=r.next()}return!0}static eachGen(e,t=!0){return this.runInStack(e,[e],t)}static*runInStack(e,t,n,r=!0){for(;t.length;){const i=t.pop();if(r){let e=n?i.lastChild:i.firstChild;for(;e;)t.push(e),e=n?e.previousSibling:e.nextSibling}e!==i&&(yield i)}}static findWithCurrent(e,t,n,r="nextSibling",i="firstChild"){let s=e;do{if(t(s))return s||null;if(i&&s&&s[i]){const e=I.findWithCurrent(s[i],t,s,r,i);if(e)return e}for(;s&&!s[r]&&s!==n;)s=s.parentNode;s&&s[r]&&s!==n&&(s=s[r])}while(s&&s!==n);return null}static findSibling(e,t=!0,n=e=>!I.isEmptyTextNode(e)){let r=I.sibling(e,t);for(;r&&!n(r);)r=I.sibling(r,t);return r&&n(r)?r:null}static findNotEmptySibling(e,t){return I.findSibling(e,t,e=>{var t;return!I.isEmptyTextNode(e)&&Boolean(!I.isText(e)||(null===(t=e.nodeValue)||void 0===t?void 0:t.length)&&T(e.nodeValue))})}static findNotEmptyNeighbor(e,t,n){
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
return function(e,...t){return e(...t)}(t?I.prev:I.next,e,e=>Boolean(e&&(!(I.isText(e)||I.isComment(e))||T((null==e?void 0:e.nodeValue)||"").length)),n)}static sibling(e,t){return t?e.previousSibling:e.nextSibling}static up(e,t,n,r=!1){let i=e;if(!i)return null;do{if(t(i))return i;if(i===n||!i.parentNode)break;i=i.parentNode}while(i&&i!==n);return i===n&&r&&t(i)?i:null}static closest(e,t,n){let r;const i=e=>e.toLowerCase();if(d(t))r=t;else if(p(t)||b(t)){const e=b(t)?t:new Set(t.map(i));r=t=>Boolean(t&&e.has(i(t.nodeName)))}else r=e=>Boolean(e&&i(t)===i(e.nodeName));return I.up(e,r,n)}static furthest(e,t,n){let r=null,i=null==e?void 0:e.parentElement;for(;i&&i!==n;)t(i)&&(r=i),i=null==i?void 0:i.parentElement;return r}static appendChildFirst(e,t){e.firstChild!==t&&I.prepend(e,t)}static after(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e.nextSibling)}static before(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e)}static prepend(e,t){e.insertBefore(t,e.firstChild)}static append(e,t){p(t)?t.forEach(t=>{this.append(e,t)}):e.appendChild(t)}static moveContent(e,t,n=!1,i=()=>!0){const s=(e.ownerDocument||r).createDocumentFragment();y(e.childNodes).filter(e=>!!i(e)||(I.safeRemove(e),!1)).forEach(e=>{s.appendChild(e)}),t.insertBefore(s,n?t.firstChild:null)}static isOrContains(e,t,n=!1){return e===t?!n:Boolean(t&&e&&this.up(t,t=>t===e,e,!0))}static safeRemove(...e){e.forEach(e=>I.isNode(e)&&e.parentNode&&e.parentNode.removeChild(e))}static safeInsertNode(e,t){e.collapsed||e.deleteContents();const n=I.isFragment(t)?t.lastChild:t;e.startContainer===e.endContainer&&e.collapsed&&I.isTag(e.startContainer,a)?I.after(e.startContainer,t):(e.insertNode(t),n&&e.setStartBefore(n)),e.collapse(!0),[t.nextSibling,t.previousSibling].forEach(e=>I.isText(e)&&!e.nodeValue&&I.safeRemove(e))}static hide(e){e&&(D(e,"__old_display",e.style.getPropertyValue("display")),e.style.setProperty("display","none"))}static show(e){if(!e)return;const t=D(e,"__old_display");"none"===e.style.getPropertyValue("display")&&e.style.setProperty("display",t||null)}static isTag(e,t){if(Array.isArray(t))throw new TypeError("Dom.isTag does not support array");if(!this.isElement(e))return!1;const n=e.tagName.toLowerCase();return t instanceof Set?t.has(n)||t.has(e.tagName.toUpperCase()):n===t||e.tagName.toUpperCase()===t}static markTemporary(e,t){return t&&_(e,t),_(e,u,!0),e}static isTemporary(e){return!!I.isElement(e)&&(I.isMarker(e)||"true"===_(e,u))}static isMarker(e){return I.isNode(e)&&I.isTag(e,"span")&&e.hasAttribute("data-jodit-selection_marker")}static replaceTemporaryFromString(e){return e.replace(B,"$2")}static temporaryList(e){const t=[];return I.each(e,e=>{I.isHTMLElement(e)&&e.hasAttribute(u)&&t.push(e)}),t}}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const $={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3};function F(e){let t=0;for(let n=0;n<e.length;n+=1){const r=$[e[n]];t+=r<($[e[n+1]]||0)?-r:r}return t}function P(e){const t=e.replace(/\s+/g,""),n=/^\(?(?:\d+\.)*(\d+)[.)]?$/.exec(t);if(n)return{tag:"ol",listStyleType:null,start:Number(n[1])};const r=/^\(?([a-z]+|[A-Z]+)[.)]$/.exec(t);if(r){const e=r[1],t=e.toLowerCase(),n=e!==t;if(/^[ivxlcdm]+$/.test(t)&&(t.length>1||"i"===t))return{tag:"ol",listStyleType:n?"upper-roman":"lower-roman",start:F(t)};if(/^([a-z])\1*$/.test(t))return{tag:"ol",listStyleType:n?"upper-alpha":"lower-alpha",start:26*(t.length-1)+t.charCodeAt(0)-96}}return{tag:"ul",listStyleType:null,start:1}}function R(e){const t=[];return y(e.querySelectorAll("p")).forEach(e=>{const n=/mso-list:\s*l(\d+)\s+level(\d+)(?:\s+lfo(\d+))?/i.exec(_(e,"style")||"");if(!n)return;const r=y(e.querySelectorAll("[style]")).find(e=>/mso-list:\s*ignore/i.test(_(e,"style")||""));t.push({paragraph:e,list:`${n[1]}:${n[3]||""}`,level:Number(n[2]),...P((null==r?void 0:r.textContent)||"")}),r&&function(e,t){let n=e.parentNode;for(I.safeRemove(e);n&&n!==t&&I.isElement(n)&&I.isEmpty(n);){const e=n.parentNode;I.safeRemove(n),n=e}}(r,e)}),t}function H(e){let t=[];const n=e.map((t,n)=>n>0&&function(e,t){return I.findSibling(t.paragraph,!0,e=>!I.isEmptyTextNode(e)&&!I.isComment(e))===e.paragraph}(e[n-1],t));e.forEach((e,r)=>{const{paragraph:i}=e;for(n[r]||(t=[]);t.length&&t[t.length-1].level>e.level;)t.pop();let s=t[t.length-1];s&&s.level===e.level&&s.list!==e.list&&(t.pop(),s=t[t.length-1]);const o=i.ownerDocument;if(!s||s.level<e.level){const n=o.createElement(e.tag);e.listStyleType&&(n.style.listStyleType=e.listStyleType),"ol"===e.tag&&1!==e.start&&_(n,"start",e.start),s&&s.li?s.li.appendChild(n):I.before(i,n),s={level:e.level,list:e.list,element:n},t.push(s)}const a=o.createElement("li");y(i.attributes).forEach(e=>{"class"!==e.name&&a.setAttribute(e.name,e.value)}),a.style.removeProperty("margin-left"),a.style.removeProperty("text-indent"),_(a,"style")||_(a,"style",null),I.moveContent(i,a),I.safeRemove(i),s.element.appendChild(a),s.li=a})}const k=t.constants.globalDocument,j=t.modules.Dom,{attrRaw:V,toArray:z,trim:W}=t.modules.Helpers;function U(e){-1!==e.indexOf("<html ")&&(e=(e=e.substring(e.indexOf("<html "),e.length)).substring(0,e.lastIndexOf("</html>")+7));let t="";try{const n=k.createElement("div");n.innerHTML=e;const r=[],i=R(n);n.firstChild&&j.each(n,e=>{if(e)switch(e.nodeType){case Node.ELEMENT_NODE:switch(e.nodeName){case"STYLE":case"LINK":case"META":r.push(e);break;case"W:SDT":case"W:SDTPR":case"FONT":j.unwrap(e);break;default:if(/mso-list:\s*ignore/i.test(e.getAttribute("style")||"")){r.push(e);break}z(e.attributes).forEach(t=>{-1===["src","href","rel","content","colspan","rowspan"].indexOf(t.name.toLowerCase())&&V(e,t.name,null)})}break;case Node.TEXT_NODE:break;default:r.push(e)}}),j.safeRemove.apply(null,r),H(i),t=n.innerHTML}catch(e){}return t&&(e=t),(e=e.split(/(\n)/).filter(W).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")}const G=t.plugins.get("paste-from-word");if(G){const e=G.prototype.insertFromWordByType;G.prototype.insertFromWordByType=function(t,n,r,i){"insert_by_clean_paste"===r?this.j.selection.insertHTML(U(n)):e.apply(this,[t,n,r,i])}}class Z{init(e){this.jodit=e,this.onCustomPasteHTMLOptionFunc=this.onCustomPasteHTMLOption.bind(this),this.jodit.events.on("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}destruct(){this.jodit.events.off("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}onCustomPasteHTMLOption(e,t){if("insert_by_clean_paste"===e)return U(t)}}t.plugins.add("paste-patch",Z);export{Z as default};
//# sourceMappingURL=index.module.mjs.map
