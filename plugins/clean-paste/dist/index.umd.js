!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jodit")):"function"==typeof define&&define.amd?define(["jodit"],t):(e="undefined"!=typeof globalThis?globalThis:e||self).JoditPluginCleanPaste=t(e.Jodit)}(this,function(e){"use strict";function t(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,Object.freeze(t)}var n=t(e);const r=n.Jodit||n.default||globalThis.Jodit||n,i="undefined"!=typeof window?window:void 0,o="undefined"!=typeof document?document:void 0,s=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i,l=new Set(["ul","ol"]),a=["img","video","svg","iframe","script","input","textarea","link","jodit","jodit-media"],c=new Set([...a,"br","hr"]),u=new Set(a);
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent));void 0!==i&&/Mac|iPod|iPhone|iPad/.test(i.navigator.platform);const d=e=>{const t=e.split("/"),n=!1;return/\.js/.test(t[t.length-1])?{basePath:t.slice(0,t.length-1).join("/")+"/",isMin:n}:{basePath:e,isMin:n}};(()=>{if("undefined"==typeof document)return{basePath:"",isMin:Boolean(!1)};const e=o.currentScript;if(e)return d(e.src);const t=o.querySelectorAll("script[src]");t&&t.length?d(t[t.length-1].src):d(i.location.href)})();const p="data-jodit-temp";
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
function f(e){return"function"==typeof e}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function h(e){return Array.isArray(e)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function m(e){return"string"==typeof e}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function g(e){return null==e}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function y(e,t){if(!m(e)||!e.length)return null;const n=e.split(".");let r=t;try{for(const e of n){if(g(r[e]))return null;r=r[e]}}catch(e){return null}return g(r)?null:r}
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
const T=function(...e){var t;var n;return(n=Array.from,Boolean(n)&&"function"===(typeof n).toLowerCase()&&(n===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)))?Array.from:null!==(t=function(e){var t,n;if(!(e in b)){const n=o.createElement("iframe");try{if(n.src="about:blank",o.body.appendChild(n),!n.contentWindow)return null;const t=y(e,n.contentWindow),r=y(e.split(".").slice(0,-1).join("."),n.contentWindow);f(t)&&(b[e]=t.bind(r))}catch(e){}finally{null===(t=n.parentNode)||void 0===t||t.removeChild(n)}}return null!==(n=b[e])&&void 0!==n?n:null}("Array.from"))&&void 0!==t?t:Array.from).apply(Array,e)};
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
function v(e){return Boolean(e)&&f(e.has)&&f(e.add)&&f(e.delete)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function N(e){return e.replace(/[\s\n\t\r\uFEFF\u200b]+$/g,"").replace(/^[\s\n\t\r\uFEFF\u200b]+/g,"")}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */class E extends Error{constructor(e){super(e),this.name="AssertionError"}}function C(e,t){if(!e)throw new E(`Assertion failed: ${t}`)}
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
function w(e){return!(!e||"object"!=typeof e||e.nodeType||function(e){return null!=e&&e===e.window}(e))&&!(e.constructor&&!{}.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const S=e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
function x(e){if(m(e)){if(!e.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;e=parseFloat(e)}return"number"==typeof e&&!isNaN(e)&&isFinite(e)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const O=/^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function A(e,t){if("font-weight"===S(e)){switch(t.toString().toLowerCase()){case"700":case"bold":return 700;case"400":case"normal":return 400;case"900":case"heavy":return 900}return x(t)?Number(t):t}return/color/i.test(e)&&/^rgb/i.test(t.toString())&&(e=>{if("rgba(0, 0, 0, 0)"===e||""===e)return!1;if(!e)return"#000000";if("#"===e.substr(0,1))return e;const t=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(e)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(e);if(!t)return"#000000";const n=parseInt(t[2],10),r=parseInt(t[3],10);let i=(parseInt(t[4],10)|r<<8|n<<16).toString(16).toUpperCase();for(;i.length<6;)i="0"+i;return t[1]+"#"+i})(t.toString())||t}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const _=e=>e.replace(/([-_])(.)/g,(e,t,n)=>n.toUpperCase());
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function L(e,t,n,r=!1){if("boolean"==typeof n&&(r=n,n=void 0),w(t)||void 0!==n){const r=(e,t,n)=>{n=function(e,t){return!g(t)&&O.test(e)&&x(t.toString())?parseInt(t.toString(),10)+"px":t}(t,n),void 0===n||null!=n&&L(e,t,!0)===A(t,n)||(e.style[t]=n)};if(w(t)){const n=Object.keys(t);for(let i=0;i<n.length;i+=1)r(e,_(n[i]),t[n[i]])}else r(e,_(t),n);return""}const i=S(t),o=e.ownerDocument||document,s=!!o&&(o.defaultView||o.parentWindow),l=e.style[t];let a="";return void 0!==l&&""!==l?a=l:s&&!r&&(a=s.getComputedStyle(e).getPropertyValue(i)),O.test(t)&&/^[-+]?[0-9.]+px$/.test(a.toString())&&(a=parseInt(a.toString(),10)),A(t,a)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function M(e,t,n){if(!e||!f(e.getAttribute))return null;if(!m(t))return Object.keys(t).forEach(n=>{const r=t[n];w(r)&&"style"===n?L(e,r):("className"===n&&(n="class"),M(e,n,r))}),null;let r=(e=>e.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(t);if(/^-/.test(r)){const t=M(e,`data${r}`);if(t)return t;r=r.substr(1)}if(void 0!==n){if(null!=n){let t=n.toString();return"IMG"!==e.nodeName||"width"!==r&&"height"!==r||(t=t.replace("px","")),e.setAttribute(r,t),t}e.hasAttribute(r)&&e.removeAttribute(r)}return e.getAttribute(r)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */function D(e){return Boolean(e&&e instanceof Object&&f(e.constructor)&&e.isView)}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const B=new WeakMap,I=(e,t,n)=>{let r=B.get(e);if(!r){r={},B.set(e,r);let t=null;D(e.j)&&(t=e.j.e),D(e)&&(t=e.e),t&&t.on("beforeDestruct",()=>{B.delete(e)})}return void 0===n?r[t]:(r[t]=n,n)};
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
const P=new RegExp(`<([a-z]+)[^>]+${p}[^>]*>(.+?)</\\1>`,"gi");class ${constructor(){throw new Error("Dom is static module")}static detach(e){for(;e&&e.firstChild;)e.removeChild(e.firstChild)}static wrapNextInline(e,t,n){let r;const i=e;let o,s=e;n.s.save();do{o=!1,r=s.nextSibling,!r||$.isBlock(r)||$.isTag(r,"br")||(o=!0,s=r)}while(o);return $.__wrapElements(t,n,i,s)}static __wrapElements(e,t,n,r){const i=m(e)?t.createInside.element(e):e;n.parentNode&&n.parentNode.insertBefore(i,n);let o=n;for(;o&&(o=n.nextSibling,i.appendChild(n),n!==r&&o);)n=o;return t.s.restore(),i}static wrapInline(e,t,n){let r,i,o=e,s=e;n.s.save();do{i=!1,r=o.previousSibling,r&&!$.isBlock(r)&&(i=!0,o=r)}while(i);do{i=!1,r=s.nextSibling,r&&!$.isBlock(r)&&(i=!0,s=r)}while(i);return $.__wrapElements(t,n,o,s)}static wrap(e,t,n){const r=m(t)?n.element(t):t;if($.isNode(e)){if(!e.parentNode)throw new TypeError("Element should be in DOM");e.parentNode.insertBefore(r,e),r.appendChild(e)}else{const t=e.extractContents();e.insertNode(r),r.appendChild(t)}return r}static unwrap(e){const t=e.parentNode;if(t){for(;e.firstChild;)t.insertBefore(e.firstChild,e);$.safeRemove(e)}}static between(e,t,n){let r=e;for(;r&&r!==t&&(e===r||!n(r));){let e=r.firstChild||r.nextSibling;if(!e){for(;r&&!r.nextSibling;)if(r=r.parentNode,r===t)return;e=null==r?void 0:r.nextSibling}r=e}}static replace(e,t,n,r=!1,i=!1){var o;let s;if(m(o=t)&&/<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(o.replace(/[\r\n]/g,""))&&(C(n,"Need create instance for new tag"),t=n.fromHTML(t)),m(t)?(C(n,"Need create instance for new tag"),s=n.element(t)):s=t,!i)for(;e.firstChild;)s.appendChild(e.firstChild);return r&&$.isElement(e)&&$.isElement(s)&&T(e.attributes).forEach(e=>{s.setAttribute(e.name,e.value)}),e.parentNode&&e.parentNode.replaceChild(s,e),s}static isEmptyTextNode(e){return $.isText(e)&&(!e.nodeValue||0===e.nodeValue.replace(/[\uFEFF]/g,"").trim().length)}static isEmptyContent(e){return $.each(e,e=>$.isEmptyTextNode(e))}static isContentEditable(e,t){const n=$.closest(e,e=>$.isElement(e)&&e.hasAttribute("contenteditable"),t);return $.isNode(e)&&"false"!==(null==n?void 0:n.getAttribute("contenteditable"))}static isEmpty(e,t=u){if(!e)return!0;let n;n=f(t)?t:e=>t.has(e.nodeName.toLowerCase());const r=e=>null==e.nodeValue||0===N(e.nodeValue).length;return $.isText(e)?r(e):!($.isElement(e)&&n(e))&&$.each(e,e=>{if($.isText(e)&&!r(e)||$.isElement(e)&&n(e))return!1})}static isNode(e){return Boolean(e&&m(e.nodeName)&&"number"==typeof e.nodeType&&e.childNodes&&f(e.appendChild))}static isCell(e){return $.isNode(e)&&("TD"===e.nodeName||"TH"===e.nodeName)}static isList(e){return $.isTag(e,l)}static isLeaf(e){return $.isTag(e,"li")}static isImage(e){return $.isNode(e)&&/^(img|svg|picture|canvas)$/i.test(e.nodeName)}static isBlock(e){return!g(e)&&"object"==typeof e&&$.isNode(e)&&s.test(e.nodeName)}static isText(e){return Boolean(e&&e.nodeType===Node.TEXT_NODE)}static isComment(e){return Boolean(e&&e.nodeType===Node.COMMENT_NODE)}static isElement(e){return!!$.isNode(e)&&e.nodeType===Node.ELEMENT_NODE}static isFragment(e){return!!$.isNode(e)&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isHTMLElement(e){var t;if(!$.isNode(e))return!1;const n=null===(t=e.ownerDocument)||void 0===t?void 0:t.defaultView;return e instanceof(n?n.HTMLElement:HTMLElement)}static isInlineBlock(e){return $.isElement(e)&&!/^(BR|HR)$/i.test(e.tagName)&&-1!==["inline","inline-block"].indexOf(L(e,"display").toString())}static canSplitBlock(e){return!g(e)&&$.isHTMLElement(e)&&$.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&void 0!==e.style&&!/^(fixed|absolute)/i.test(e.style.position)}static first(e,t){return $.__deepMost(e,t,!1)}static last(e,t){return $.__deepMost(e,t,!0)}static __deepMost(e,t,n){const r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";let o=null==e?void 0:e[r];if(!o)return null;do{if(t(o))return o;let n=o[r]||o[i];if(!n&&o.parentNode!==e){do{o=o.parentNode}while(o&&!o[i]&&o.parentNode!==e);n=null==o?void 0:o[i]}o=n}while(o);return null}static prev(e,t,n,r=!0){return $.find(e,t,n,!1,r)}static next(e,t,n,r=!0){return $.find(e,t,n,!0,r)}static prevWithClass(e,t){return $.__siblingWithClass(e,t,!0)}static nextWithClass(e,t){return $.__siblingWithClass(e,t,!1)}static __siblingWithClass(e,t,n){const r=e=>$.isElement(e)&&e.classList.contains(t),i=e.parentNode;return n?$.prev(e,r,i):$.next(e,r,i)}static find(e,t,n,r=!0,i=!0){const o=this.nextGen(e,n,r,i);let s=o.next();for(;!s.done;){if(t(s.value))return s.value;s=o.next()}return null}static*nextGen(e,t,n=!0,r=!0){const i=[];let o=e;do{let t=n?o.nextSibling:o.previousSibling;for(;t;)i.push(t),t=n?t.nextSibling:t.previousSibling;i.reverse(),yield*this.runInStack(e,i,n,r),o=o.parentNode}while(o&&o!==t);return null}static each(e,t,n=!0){const r=this.eachGen(e,n);let i=r.next();for(;!i.done;){if(!1===t(i.value))return!1;i=r.next()}return!0}static eachGen(e,t=!0){return this.runInStack(e,[e],t)}static*runInStack(e,t,n,r=!0){for(;t.length;){const i=t.pop();if(r){let e=n?i.lastChild:i.firstChild;for(;e;)t.push(e),e=n?e.previousSibling:e.nextSibling}e!==i&&(yield i)}}static findWithCurrent(e,t,n,r="nextSibling",i="firstChild"){let o=e;do{if(t(o))return o||null;if(i&&o&&o[i]){const e=$.findWithCurrent(o[i],t,o,r,i);if(e)return e}for(;o&&!o[r]&&o!==n;)o=o.parentNode;o&&o[r]&&o!==n&&(o=o[r])}while(o&&o!==n);return null}static findSibling(e,t=!0,n=e=>!$.isEmptyTextNode(e)){let r=$.sibling(e,t);for(;r&&!n(r);)r=$.sibling(r,t);return r&&n(r)?r:null}static findNotEmptySibling(e,t){return $.findSibling(e,t,e=>{var t;return!$.isEmptyTextNode(e)&&Boolean(!$.isText(e)||(null===(t=e.nodeValue)||void 0===t?void 0:t.length)&&N(e.nodeValue))})}static findNotEmptyNeighbor(e,t,n){
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */
return function(e,...t){return e(...t)}(t?$.prev:$.next,e,e=>Boolean(e&&(!($.isText(e)||$.isComment(e))||N((null==e?void 0:e.nodeValue)||"").length)),n)}static sibling(e,t){return t?e.previousSibling:e.nextSibling}static up(e,t,n,r=!1){let i=e;if(!i)return null;do{if(t(i))return i;if(i===n||!i.parentNode)break;i=i.parentNode}while(i&&i!==n);return i===n&&r&&t(i)?i:null}static closest(e,t,n){let r;const i=e=>e.toLowerCase();if(f(t))r=t;else if(h(t)||v(t)){const e=v(t)?t:new Set(t.map(i));r=t=>Boolean(t&&e.has(i(t.nodeName)))}else r=e=>Boolean(e&&i(t)===i(e.nodeName));return $.up(e,r,n)}static furthest(e,t,n){let r=null,i=null==e?void 0:e.parentElement;for(;i&&i!==n;)t(i)&&(r=i),i=null==i?void 0:i.parentElement;return r}static appendChildFirst(e,t){e.firstChild!==t&&$.prepend(e,t)}static after(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e.nextSibling)}static before(e,t){var n;null===(n=e.parentNode)||void 0===n||n.insertBefore(t,e)}static prepend(e,t){e.insertBefore(t,e.firstChild)}static append(e,t){h(t)?t.forEach(t=>{this.append(e,t)}):e.appendChild(t)}static moveContent(e,t,n=!1,r=()=>!0){const i=(e.ownerDocument||o).createDocumentFragment();T(e.childNodes).filter(e=>!!r(e)||($.safeRemove(e),!1)).forEach(e=>{i.appendChild(e)}),t.insertBefore(i,n?t.firstChild:null)}static isOrContains(e,t,n=!1){return e===t?!n:Boolean(t&&e&&this.up(t,t=>t===e,e,!0))}static safeRemove(...e){e.forEach(e=>$.isNode(e)&&e.parentNode&&e.parentNode.removeChild(e))}static safeInsertNode(e,t){e.collapsed||e.deleteContents();const n=$.isFragment(t)?t.lastChild:t;e.startContainer===e.endContainer&&e.collapsed&&$.isTag(e.startContainer,c)?$.after(e.startContainer,t):(e.insertNode(t),n&&e.setStartBefore(n)),e.collapse(!0),[t.nextSibling,t.previousSibling].forEach(e=>$.isText(e)&&!e.nodeValue&&$.safeRemove(e))}static hide(e){e&&(I(e,"__old_display",e.style.getPropertyValue("display")),e.style.setProperty("display","none"))}static show(e){if(!e)return;const t=I(e,"__old_display");"none"===e.style.getPropertyValue("display")&&e.style.setProperty("display",t||null)}static isTag(e,t){if(Array.isArray(t))throw new TypeError("Dom.isTag does not support array");if(!this.isElement(e))return!1;const n=e.tagName.toLowerCase();return t instanceof Set?t.has(n)||t.has(e.tagName.toUpperCase()):n===t||e.tagName.toUpperCase()===t}static markTemporary(e,t){return t&&M(e,t),M(e,p,!0),e}static isTemporary(e){return!!$.isElement(e)&&($.isMarker(e)||"true"===M(e,p))}static isMarker(e){return $.isNode(e)&&$.isTag(e,"span")&&e.hasAttribute("data-jodit-selection_marker")}static replaceTemporaryFromString(e){return e.replace(P,"$2")}static temporaryList(e){const t=[];return $.each(e,e=>{$.isHTMLElement(e)&&e.hasAttribute(p)&&t.push(e)}),t}}
/*!
     * Jodit Editor (https://xdsoft.net/jodit/)
     * Released under MIT see LICENSE.txt in the project root for license information.
     * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
     */const F={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3};function R(e){let t=0;for(let n=0;n<e.length;n+=1){const r=F[e[n]];t+=r<(F[e[n+1]]||0)?-r:r}return t}function j(e){const t=e.replace(/\s+/g,""),n=/^\(?(?:\d+\.)*(\d+)[.)]?$/.exec(t);if(n)return{tag:"ol",listStyleType:null,start:Number(n[1])};const r=/^\(?([a-z]+|[A-Z]+)[.)]$/.exec(t);if(r){const e=r[1],t=e.toLowerCase(),n=e!==t;if(/^[ivxlcdm]+$/.test(t)&&(t.length>1||"i"===t))return{tag:"ol",listStyleType:n?"upper-roman":"lower-roman",start:R(t)};if(/^([a-z])\1*$/.test(t))return{tag:"ol",listStyleType:n?"upper-alpha":"lower-alpha",start:26*(t.length-1)+t.charCodeAt(0)-96}}return{tag:"ul",listStyleType:null,start:1}}function k(e){const t=[];return T(e.querySelectorAll("p")).forEach(e=>{const n=/mso-list:\s*l(\d+)\s+level(\d+)(?:\s+lfo(\d+))?/i.exec(M(e,"style")||"");if(!n)return;const r=T(e.querySelectorAll("[style]")).find(e=>/mso-list:\s*ignore/i.test(M(e,"style")||""));t.push({paragraph:e,list:`${n[1]}:${n[3]||""}`,level:Number(n[2]),...j((null==r?void 0:r.textContent)||"")}),r&&function(e,t){let n=e.parentNode;for($.safeRemove(e);n&&n!==t&&$.isElement(n)&&$.isEmpty(n);){const e=n.parentNode;$.safeRemove(n),n=e}}(r,e)}),t}function H(e){let t=[];const n=e.map((t,n)=>n>0&&function(e,t){return $.findSibling(t.paragraph,!0,e=>!$.isEmptyTextNode(e)&&!$.isComment(e))===e.paragraph}(e[n-1],t));e.forEach((e,r)=>{const{paragraph:i}=e;for(n[r]||(t=[]);t.length&&t[t.length-1].level>e.level;)t.pop();let o=t[t.length-1];o&&o.level===e.level&&o.list!==e.list&&(t.pop(),o=t[t.length-1]);const s=i.ownerDocument;if(!o||o.level<e.level){const n=s.createElement(e.tag);e.listStyleType&&(n.style.listStyleType=e.listStyleType),"ol"===e.tag&&1!==e.start&&M(n,"start",e.start),o&&o.li?o.li.appendChild(n):$.before(i,n),o={level:e.level,list:e.list,element:n},t.push(o)}const l=s.createElement("li");T(i.attributes).forEach(e=>{"class"!==e.name&&l.setAttribute(e.name,e.value)}),l.style.removeProperty("margin-left"),l.style.removeProperty("text-indent"),M(l,"style")||M(l,"style",null),$.moveContent(i,l),$.safeRemove(i),o.element.appendChild(l),o.li=l})}const z=r.constants.globalDocument,V=r.modules.Dom,{attrRaw:W,toArray:U,trim:G}=r.modules.Helpers;function Z(e){-1!==e.indexOf("<html ")&&(e=(e=e.substring(e.indexOf("<html "),e.length)).substring(0,e.lastIndexOf("</html>")+7));let t="";try{const n=z.createElement("div");n.innerHTML=e;const r=[],i=k(n);n.firstChild&&V.each(n,e=>{if(e)switch(e.nodeType){case Node.ELEMENT_NODE:switch(e.nodeName){case"STYLE":case"LINK":case"META":r.push(e);break;case"W:SDT":case"W:SDTPR":case"FONT":V.unwrap(e);break;default:if(/mso-list:\s*ignore/i.test(e.getAttribute("style")||"")){r.push(e);break}U(e.attributes).forEach(t=>{-1===["src","href","rel","content","colspan","rowspan"].indexOf(t.name.toLowerCase())&&W(e,t.name,null)})}break;case Node.TEXT_NODE:break;default:r.push(e)}}),V.safeRemove.apply(null,r),H(i),t=n.innerHTML}catch(e){}return t&&(e=t),(e=e.split(/(\n)/).filter(G).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")}const J=r.plugins.get("paste-from-word");if(J){const e=J.prototype.insertFromWordByType;J.prototype.insertFromWordByType=function(t,n,r,i){"insert_by_clean_paste"===r?this.j.selection.insertHTML(Z(n)):e.apply(this,[t,n,r,i])}}class Y{init(e){this.jodit=e,this.onCustomPasteHTMLOptionFunc=this.onCustomPasteHTMLOption.bind(this),this.jodit.events.on("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}destruct(){this.jodit.events.off("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}onCustomPasteHTMLOption(e,t){if("insert_by_clean_paste"===e)return Z(t)}}return r.plugins.add("paste-patch",Y),Y});
//# sourceMappingURL=index.umd.js.map
