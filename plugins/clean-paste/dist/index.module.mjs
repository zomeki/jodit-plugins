import*as t from"jodit";const e=t.Jodit||t.default||globalThis.Jodit||t,n="undefined"!=typeof window?window:void 0,r="undefined"!=typeof document?document:void 0,i=/^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i,o=new Set(["ul","ol"]),s=["img","video","svg","iframe","script","input","textarea","link","jodit","jodit-media"],l=new Set([...s,"br","hr"]),a=new Set(s);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("MSIE")||/rv:11.0/i.test(navigator.userAgent));void 0!==n&&/Mac|iPod|iPhone|iPad/.test(n.navigator.platform);const c=t=>{const e=t.split("/"),n=!1;return/\.js/.test(e[e.length-1])?{basePath:e.slice(0,e.length-1).join("/")+"/",isMin:n}:{basePath:t,isMin:n}};(()=>{if("undefined"==typeof document)return{basePath:"",isMin:Boolean(!1)};const t=r.currentScript;if(t)return c(t.src);const e=r.querySelectorAll("script[src]");e&&e.length?c(e[e.length-1].src):c(n.location.href)})();const u="data-jodit-temp";
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
function d(t){return"function"==typeof t}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function f(t){return Array.isArray(t)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function p(t){return"string"==typeof t}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function h(t){return null==t}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function m(t,e){if(!p(t)||!t.length)return null;const n=t.split(".");let r=e;try{for(const t of n){if(h(r[t]))return null;r=r[t]}}catch(t){return null}return h(r)?null:r}
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
const y=function(...t){var e;var n;return(n=Array.from,Boolean(n)&&"function"===(typeof n).toLowerCase()&&(n===Function.prototype||/^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(n)))?Array.from:null!==(e=function(t){var e,n;if(!(t in g)){const n=r.createElement("iframe");try{if(n.src="about:blank",r.body.appendChild(n),!n.contentWindow)return null;const e=m(t,n.contentWindow),i=m(t.split(".").slice(0,-1).join("."),n.contentWindow);d(e)&&(g[t]=e.bind(i))}catch(t){}finally{null===(e=n.parentNode)||void 0===e||e.removeChild(n)}}return null!==(n=g[t])&&void 0!==n?n:null}("Array.from"))&&void 0!==e?e:Array.from).apply(Array,t)},b=/[A-Za-z]/,T=/[A-Za-z0-9]/,v=/\w/;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function N(t,e){if(!b.test(t.charAt(e)))return"";let n=e+1;for(;T.test(t.charAt(n));)n+=1;return t.slice(e,n)}const C=t=>p(t)&&function(t){const e=new Map;let n=t.indexOf("</");for(;-1!==n;){const r=N(t,n+2);""!==r&&">"===t.charAt(n+2+r.length)&&e.set(r,n),n=t.indexOf("</",n+2)}if(0===e.size)return!1;let r=-1;for(n=t.indexOf("<");-1!==n;){const i=N(t,n+1),o=n+1+i.length;if(""!==i&&!v.test(t.charAt(o))){if(r<o&&(r=t.indexOf(">",o)),-1===r)return!1;const n=e.get(i);if(void 0!==n&&n>r)return!0}n=t.indexOf("<",n+1)}return!1}(t);
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function E(t){return Boolean(t)&&d(t.has)&&d(t.add)&&d(t.delete)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const w=/[a-z0-9:-]/i;function A(t,e,n){return t.substr(e,n.length).toLowerCase()===n}function x(t,e,n){let r=t.indexOf("<",n);for(;-1!==r;){for(const n of e)if(A(t,r,n))return[r,n];r=t.indexOf("<",r+1)}return[-1,""]}function S(t,e){if(!t)return-1;let n=0,r=t.length;for(;n<r;){const i=n+r>>1;t[i]<e?n=i+1:r=i}return n<t.length?t[n]:-1}function O(t,e){let n=e;for(;w.test(t.charAt(n));)n+=1;return t.slice(e,n)}function L(t,e,n,r){const i=n.toLowerCase(),o=[null==e?"<":"<"+e.toLowerCase()],s=function(t){const e=new Map;let n=t.indexOf("</");for(;-1!==n;){const r=O(t,n+2).toLowerCase();if(""!==r&&">"===t.charAt(n+2+r.length)){const t=e.get(r);t?t.push(n):e.set(r,[n])}n=t.indexOf("</",n+2)}return e}(t);let l="",a=0;for(;;){const[n]=x(t,o,a);if(-1===n)break;const c=(null!=e?e:O(t,n+1)).toLowerCase(),u=t.indexOf(">",n);if(-1===u)break;const d=""!==c&&t.slice(n,u).toLowerCase().includes(i)?S(s.get(c),u+1):-1;if(-1===d){l+=t.slice(a,n+1),a=n+1;continue}const f=t.slice(u+1,d),p=d+c.length+3;l+=t.slice(a,n),l+=""===f||r&&!r(f)?t.slice(n,p):f,a=p}return 0===a?t:l+t.slice(a)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const _=/[\s\u200b]/;function M(t){return function(t,e){let n=0,r=t.length;for(;n<r&&e.test(t.charAt(n));)n+=1;for(;r>n&&e.test(t.charAt(r-1));)r-=1;return 0===n&&r===t.length?t:t.slice(n,r)}(t,_)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */class D extends Error{constructor(t){super(t),this.name="AssertionError"}}function P(t,e){if(!t)throw new D(`Assertion failed: ${e}`)}
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
function B(t){return!(!t||"object"!=typeof t||t.nodeType||function(t){return null!=t&&t===t.window}(t))&&!(t.constructor&&!{}.hasOwnProperty.call(t.constructor.prototype,"isPrototypeOf"))}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const I=t=>t.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase();
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
function $(t){if(p(t)){if(!t.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/))return!1;t=parseFloat(t)}return"number"==typeof t&&!isNaN(t)&&isFinite(t)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const k=/^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function R(t,e){if("font-weight"===I(t)){switch(e.toString().toLowerCase()){case"700":case"bold":return 700;case"400":case"normal":return 400;case"900":case"heavy":return 900}return $(e)?Number(e):e}return/color/i.test(t)&&/^rgb/i.test(e.toString())&&(t=>{if("rgba(0, 0, 0, 0)"===t||""===t)return!1;if(!t)return"#000000";if("#"===t.substr(0,1))return t;const e=/([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(t)||/([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(t);if(!e)return"#000000";const n=parseInt(e[2],10),r=parseInt(e[3],10);let i=(parseInt(e[4],10)|r<<8|n<<16).toString(16).toUpperCase();for(;i.length<6;)i="0"+i;return e[1]+"#"+i})(e.toString())||e}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const F=t=>t.replace(/([-_])(.)/g,(t,e,n)=>n.toUpperCase());
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function H(t,e,n,r=!1){if("boolean"==typeof n&&(r=n,n=void 0),B(e)||void 0!==n){const r=(t,e,n)=>{n=function(t,e){return!h(e)&&k.test(t)&&$(e.toString())?parseInt(e.toString(),10)+"px":e}(e,n),void 0===n||null!=n&&H(t,e,!0)===R(e,n)||(t.style[e]=n)};if(B(e)){const n=Object.keys(e);for(let i=0;i<n.length;i+=1)r(t,F(n[i]),e[n[i]])}else r(t,F(e),n);return""}const i=I(e),o=t.ownerDocument||document,s=!!o&&(o.defaultView||o.parentWindow),l=t.style[e];let a="";return void 0!==l&&""!==l?a=l:s&&!r&&(a=s.getComputedStyle(t).getPropertyValue(i)),k.test(e)&&/^[-+]?[0-9.]+px$/.test(a.toString())&&(a=parseInt(a.toString(),10)),R(e,a)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function j(t,e,n){if(!t||!d(t.getAttribute))return null;if(!p(e))return Object.keys(e).forEach(n=>{const r=e[n];B(r)&&"style"===n?H(t,r):("className"===n&&(n="class"),j(t,n,r))}),null;let r=(t=>t.replace(/([A-Z])([A-Z])([a-z])/g,"$1-$2$3").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(e);if(/^-/.test(r)){const e=j(t,`data${r}`);if(e)return e;r=r.substr(1)}if(void 0!==n){if(null!=n){let e=n.toString();return"IMG"!==t.nodeName||"width"!==r&&"height"!==r||(e=e.replace("px","")),t.setAttribute(r,e),e}t.hasAttribute(r)&&t.removeAttribute(r)}return t.getAttribute(r)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */function V(t){return Boolean(t&&t instanceof Object&&d(t.constructor)&&t.isView)}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const z=new WeakMap,W=(t,e,n)=>{let r=z.get(t);if(!r){r={},z.set(t,r);let e=null;V(t.j)&&(e=t.j.e),V(t)&&(e=t.e),e&&e.on("beforeDestruct",()=>{z.delete(t)})}return void 0===n?r[e]:(r[e]=n,n)};
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
class U{constructor(){throw new Error("Dom is static module")}static detach(t){for(;t&&t.firstChild;)t.removeChild(t.firstChild)}static wrapNextInline(t,e,n){let r;const i=t;let o,s=t;n.s.save();do{o=!1,r=s.nextSibling,!r||U.isBlock(r)||U.isTag(r,"br")||(o=!0,s=r)}while(o);return U.__wrapElements(e,n,i,s)}static __wrapElements(t,e,n,r){const i=p(t)?e.createInside.element(t):t;n.parentNode&&n.parentNode.insertBefore(i,n);let o=n;for(;o&&(o=n.nextSibling,i.appendChild(n),n!==r&&o);)n=o;return e.s.restore(),i}static wrapInline(t,e,n){let r,i,o=t,s=t;n.s.save();do{i=!1,r=o.previousSibling,r&&!U.isBlock(r)&&(i=!0,o=r)}while(i);do{i=!1,r=s.nextSibling,r&&!U.isBlock(r)&&(i=!0,s=r)}while(i);return U.__wrapElements(e,n,o,s)}static wrap(t,e,n){const r=p(e)?n.element(e):e;if(U.isNode(t)){if(!t.parentNode)throw new TypeError("Element should be in DOM");t.parentNode.insertBefore(r,t),r.appendChild(t)}else{const e=t.extractContents();t.insertNode(r),r.appendChild(e)}return r}static unwrap(t){const e=t.parentNode;if(e){for(;t.firstChild;)e.insertBefore(t.firstChild,t);U.safeRemove(t)}}static between(t,e,n){let r=t;for(;r&&r!==e&&(t===r||!n(r));){let t=r.firstChild||r.nextSibling;if(!t){for(;r&&!r.nextSibling;)if(r=r.parentNode,r===e)return;t=null==r?void 0:r.nextSibling}r=t}}static replace(t,e,n,r=!1,i=!1){let o;if(C(e)&&(P(n,"Need create instance for new tag"),e=n.fromHTML(e)),p(e)?(P(n,"Need create instance for new tag"),o=n.element(e)):o=e,!i)for(;t.firstChild;)o.appendChild(t.firstChild);return r&&U.isElement(t)&&U.isElement(o)&&y(t.attributes).forEach(t=>{o.setAttribute(t.name,t.value)}),t.parentNode&&t.parentNode.replaceChild(o,t),o}static isEmptyTextNode(t){return U.isText(t)&&(!t.nodeValue||0===t.nodeValue.replace(/[\uFEFF]/g,"").trim().length)}static isEmptyContent(t){return U.each(t,t=>U.isEmptyTextNode(t))}static isContentEditable(t,e){const n=U.closest(t,t=>U.isElement(t)&&t.hasAttribute("contenteditable"),e);return U.isNode(t)&&"false"!==(null==n?void 0:n.getAttribute("contenteditable"))}static isEmpty(t,e=a){if(!t)return!0;let n;n=d(e)?e:t=>e.has(t.nodeName.toLowerCase());const r=t=>null==t.nodeValue||0===M(t.nodeValue).length;return U.isText(t)?r(t):!(U.isElement(t)&&n(t))&&U.each(t,t=>{if(U.isText(t)&&!r(t)||U.isElement(t)&&n(t))return!1})}static isNode(t){return Boolean(t&&p(t.nodeName)&&"number"==typeof t.nodeType&&t.childNodes&&d(t.appendChild))}static isCell(t){return U.isNode(t)&&("TD"===t.nodeName||"TH"===t.nodeName)}static isList(t){return U.isTag(t,o)}static isLeaf(t){return U.isTag(t,"li")}static isImage(t){return U.isNode(t)&&/^(img|svg|picture|canvas)$/i.test(t.nodeName)}static isBlock(t){return!h(t)&&"object"==typeof t&&U.isNode(t)&&i.test(t.nodeName)}static isText(t){return Boolean(t&&t.nodeType===Node.TEXT_NODE)}static isComment(t){return Boolean(t&&t.nodeType===Node.COMMENT_NODE)}static isElement(t){return!!U.isNode(t)&&t.nodeType===Node.ELEMENT_NODE}static isFragment(t){return!!U.isNode(t)&&t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}static isHTMLElement(t){var e;if(!U.isNode(t))return!1;const n=null===(e=t.ownerDocument)||void 0===e?void 0:e.defaultView;return t instanceof(n?n.HTMLElement:HTMLElement)}static isInlineBlock(t){return U.isElement(t)&&!/^(BR|HR)$/i.test(t.tagName)&&-1!==["inline","inline-block"].indexOf(H(t,"display").toString())}static canSplitBlock(t){return!h(t)&&U.isHTMLElement(t)&&U.isBlock(t)&&!/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName)&&void 0!==t.style&&!/^(fixed|absolute)/i.test(t.style.position)}static first(t,e){return U.__deepMost(t,e,!1)}static last(t,e){return U.__deepMost(t,e,!0)}static __deepMost(t,e,n){const r=n?"lastChild":"firstChild",i=n?"previousSibling":"nextSibling";let o=null==t?void 0:t[r];if(!o)return null;do{if(e(o))return o;let n=o[r]||o[i];if(!n&&o.parentNode!==t){do{o=o.parentNode}while(o&&!o[i]&&o.parentNode!==t);n=null==o?void 0:o[i]}o=n}while(o);return null}static prev(t,e,n,r=!0){return U.find(t,e,n,!1,r)}static next(t,e,n,r=!0){return U.find(t,e,n,!0,r)}static prevWithClass(t,e){return U.__siblingWithClass(t,e,!0)}static nextWithClass(t,e){return U.__siblingWithClass(t,e,!1)}static __siblingWithClass(t,e,n){const r=t=>U.isElement(t)&&t.classList.contains(e),i=t.parentNode;return n?U.prev(t,r,i):U.next(t,r,i)}static find(t,e,n,r=!0,i=!0){const o=this.nextGen(t,n,r,i);let s=o.next();for(;!s.done;){if(e(s.value))return s.value;s=o.next()}return null}static*nextGen(t,e,n=!0,r=!0){const i=[];let o=t;do{let e=n?o.nextSibling:o.previousSibling;for(;e;)i.push(e),e=n?e.nextSibling:e.previousSibling;i.reverse(),yield*this.runInStack(t,i,n,r),o=o.parentNode}while(o&&o!==e);return null}static each(t,e,n=!0){const r=this.eachGen(t,n);let i=r.next();for(;!i.done;){if(!1===e(i.value))return!1;i=r.next()}return!0}static eachGen(t,e=!0){return this.runInStack(t,[t],e)}static*runInStack(t,e,n,r=!0){for(;e.length;){const i=e.pop();if(r){let t=n?i.lastChild:i.firstChild;for(;t;)e.push(t),t=n?t.previousSibling:t.nextSibling}t!==i&&(yield i)}}static findWithCurrent(t,e,n,r="nextSibling",i="firstChild"){let o=t;do{if(e(o))return o||null;if(i&&o&&o[i]){const t=U.findWithCurrent(o[i],e,o,r,i);if(t)return t}for(;o&&!o[r]&&o!==n;)o=o.parentNode;o&&o[r]&&o!==n&&(o=o[r])}while(o&&o!==n);return null}static findSibling(t,e=!0,n=t=>!U.isEmptyTextNode(t)){let r=U.sibling(t,e);for(;r&&!n(r);)r=U.sibling(r,e);return r&&n(r)?r:null}static findNotEmptySibling(t,e){return U.findSibling(t,e,t=>{var e;return!U.isEmptyTextNode(t)&&Boolean(!U.isText(t)||(null===(e=t.nodeValue)||void 0===e?void 0:e.length)&&M(t.nodeValue))})}static findNotEmptyNeighbor(t,e,n){
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */
return function(t,...e){return t(...e)}(e?U.prev:U.next,t,t=>Boolean(t&&(!(U.isText(t)||U.isComment(t))||M((null==t?void 0:t.nodeValue)||"").length)),n)}static sibling(t,e){return e?t.previousSibling:t.nextSibling}static up(t,e,n,r=!1){let i=t;if(!i)return null;do{if(e(i))return i;if(i===n||!i.parentNode)break;i=i.parentNode}while(i&&i!==n);return i===n&&r&&e(i)?i:null}static closest(t,e,n){let r;const i=t=>t.toLowerCase();if(d(e))r=e;else if(f(e)||E(e)){const t=E(e)?e:new Set(e.map(i));r=e=>Boolean(e&&t.has(i(e.nodeName)))}else r=t=>Boolean(t&&i(e)===i(t.nodeName));return U.up(t,r,n)}static furthest(t,e,n){let r=null,i=null==t?void 0:t.parentElement;for(;i&&i!==n;)e(i)&&(r=i),i=null==i?void 0:i.parentElement;return r}static appendChildFirst(t,e){t.firstChild!==e&&U.prepend(t,e)}static after(t,e){var n;null===(n=t.parentNode)||void 0===n||n.insertBefore(e,t.nextSibling)}static before(t,e){var n;null===(n=t.parentNode)||void 0===n||n.insertBefore(e,t)}static prepend(t,e){t.insertBefore(e,t.firstChild)}static append(t,e){f(e)?e.forEach(e=>{this.append(t,e)}):t.appendChild(e)}static moveContent(t,e,n=!1,i=()=>!0){const o=(t.ownerDocument||r).createDocumentFragment();y(t.childNodes).filter(t=>!!i(t)||(U.safeRemove(t),!1)).forEach(t=>{o.appendChild(t)}),e.insertBefore(o,n?e.firstChild:null)}static isOrContains(t,e,n=!1){return t===e?!n:Boolean(e&&t&&this.up(e,e=>e===t,t,!0))}static safeRemove(...t){t.forEach(t=>U.isNode(t)&&t.parentNode&&t.parentNode.removeChild(t))}static safeInsertNode(t,e){t.collapsed||t.deleteContents();const n=U.isFragment(e)?e.lastChild:e;t.startContainer===t.endContainer&&t.collapsed&&U.isTag(t.startContainer,l)?U.after(t.startContainer,e):(t.insertNode(e),n&&t.setStartBefore(n)),t.collapse(!0),[e.nextSibling,e.previousSibling].forEach(t=>U.isText(t)&&!t.nodeValue&&U.safeRemove(t))}static hide(t){t&&(W(t,"__old_display",t.style.getPropertyValue("display")),t.style.setProperty("display","none"))}static show(t){if(!t)return;const e=W(t,"__old_display");"none"===t.style.getPropertyValue("display")&&t.style.setProperty("display",e||null)}static isTag(t,e){if(Array.isArray(e))throw new TypeError("Dom.isTag does not support array");if(!this.isElement(t))return!1;const n=t.tagName.toLowerCase();return e instanceof Set?e.has(n)||e.has(t.tagName.toUpperCase()):n===e||t.tagName.toUpperCase()===e}static markTemporary(t,e){return e&&j(t,e),j(t,u,!0),t}static isTemporary(t){return!!U.isElement(t)&&(U.isMarker(t)||"true"===j(t,u))}static isMarker(t){return U.isNode(t)&&U.isTag(t,"span")&&t.hasAttribute("data-jodit-selection_marker")}static replaceTemporaryFromString(t){return L(t,null,u)}static temporaryList(t){const e=[];return U.each(t,t=>{U.isHTMLElement(t)&&t.hasAttribute(u)&&e.push(t)}),e}}
/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Released under MIT see LICENSE.txt in the project root for license information.
 * Copyright (c) 2013-2026 Valerii Chupurnov. All rights reserved. https://xdsoft.net
 */const G={i:1,v:5,x:10,l:50,c:100,d:500,m:1e3};function Z(t){let e=0;for(let n=0;n<t.length;n+=1){const r=G[t[n]];e+=r<(G[t[n+1]]||0)?-r:r}return e}function J(t){const e=t.replace(/\s+/g,""),n=/^\(?(?:\d+\.)*(\d+)[.)]?$/.exec(e);if(n)return{tag:"ol",listStyleType:null,start:Number(n[1])};const r=/^\(?([a-z]+|[A-Z]+)[.)]$/.exec(e);if(r){const t=r[1],e=t.toLowerCase(),n=t!==e;if(/^[ivxlcdm]+$/.test(e)&&(e.length>1||"i"===e))return{tag:"ol",listStyleType:n?"upper-roman":"lower-roman",start:Z(e)};if(/^([a-z])\1*$/.test(e))return{tag:"ol",listStyleType:n?"upper-alpha":"lower-alpha",start:26*(e.length-1)+e.charCodeAt(0)-96}}return{tag:"ul",listStyleType:null,start:1}}function Y(t){const e=[];return y(t.querySelectorAll("p")).forEach(t=>{const n=/mso-list:\s*l(\d+)\s+level(\d+)(?:\s+lfo(\d+))?/i.exec(j(t,"style")||"");if(!n)return;const r=y(t.querySelectorAll("[style]")).find(t=>/mso-list:\s*ignore/i.test(j(t,"style")||""));e.push({paragraph:t,list:`${n[1]}:${n[3]||""}`,level:Number(n[2]),...J((null==r?void 0:r.textContent)||"")}),r&&function(t,e){let n=t.parentNode;for(U.safeRemove(t);n&&n!==e&&U.isElement(n)&&U.isEmpty(n);){const t=n.parentNode;U.safeRemove(n),n=t}}(r,t)}),e}function q(t){let e=[];const n=t.map((e,n)=>n>0&&function(t,e){return U.findSibling(e.paragraph,!0,t=>!U.isEmptyTextNode(t)&&!U.isComment(t))===t.paragraph}(t[n-1],e));t.forEach((t,r)=>{const{paragraph:i}=t;for(n[r]||(e=[]);e.length&&e[e.length-1].level>t.level;)e.pop();let o=e[e.length-1];o&&o.level===t.level&&o.list!==t.list&&(e.pop(),o=e[e.length-1]);const s=i.ownerDocument;if(!o||o.level<t.level){const n=s.createElement(t.tag);t.listStyleType&&(n.style.listStyleType=t.listStyleType),"ol"===t.tag&&1!==t.start&&j(n,"start",t.start),o&&o.li?o.li.appendChild(n):U.before(i,n),o={level:t.level,list:t.list,element:n},e.push(o)}const l=s.createElement("li");y(i.attributes).forEach(t=>{"class"!==t.name&&l.setAttribute(t.name,t.value)}),l.style.removeProperty("margin-left"),l.style.removeProperty("text-indent"),j(l,"style")||j(l,"style",null),U.moveContent(i,l),U.safeRemove(i),o.element.appendChild(l),o.li=l})}const K=e.constants.globalDocument,X=e.modules.Dom,{attrRaw:Q,toArray:tt,trim:et}=e.modules.Helpers,nt=["colspan","rowspan","width","height","style"],rt=["background","background-color","border",/^border-.*/,"color","float","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","padding","text-align","text-justify","text-decoration","text-indent","vertical-align"];function it(t,e=nt,n=rt){-1!==t.indexOf("<html ")&&(t=(t=t.substring(t.indexOf("<html "),t.length)).substring(0,t.lastIndexOf("</html>")+7));let r="";try{const i=K.createElement("div");i.innerHTML=t;const o=[],s=Y(i);i.firstChild&&X.each(i,t=>{if(t)switch(t.nodeType){case Node.ELEMENT_NODE:switch(t.nodeName){case"STYLE":case"LINK":case"META":o.push(t);break;case"W:SDT":case"W:SDTPR":case"FONT":X.unwrap(t);break;default:if(/mso-list:\s*ignore/i.test(t.getAttribute("style")||"")){o.push(t);break}tt(t.attributes).forEach(n=>{if(-1===["src","href","rel","content"].indexOf(n.name.toLowerCase())){if(e.includes(n.name.toLowerCase()))return;Q(t,n.name,null)}}),function(t,e){const n=[];Array.from(t.style).filter(t=>function(t,e){return Array.isArray(e)&&e.some(e=>"string"==typeof e?e===t:e instanceof RegExp&&e.test(t))}(t,e)).forEach(e=>{const r=t.style.getPropertyValue(e),i=t.style.getPropertyPriority(e);r&&n.push(`${e}: ${r}${i?" !important":""}`)}),n.length?t.setAttribute("style",`${n.join("; ")};`):t.removeAttribute("style")}(t,n)}break;case Node.TEXT_NODE:break;default:o.push(t)}}),X.safeRemove.apply(null,o),q(s),r=i.innerHTML}catch(t){}return r&&(t=r),(t=t.split(/(\n)/).filter(et).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g,"").replace(/<!--[^>]*>/g,"")}const ot=e.plugins.get("paste-from-word");if(ot){const t=ot.prototype.insertFromWordByType;ot.prototype.insertFromWordByType=function(e,n,r,i){"insert_by_clean_paste"===r?this.j.selection.insertHTML(it(n,this.j.options.cleanPasteAllowedAttributes,this.j.options.cleanPasteAllowedStyles)):t.apply(this,[e,n,r,i])}}class st{init(t){this.jodit=t,this.onCustomPasteHTMLOptionFunc=this.onCustomPasteHTMLOption.bind(this),this.jodit.events.on("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}destruct(){this.jodit.events.off("onCustomPasteHTMLOption",this.onCustomPasteHTMLOptionFunc)}onCustomPasteHTMLOption(t,e){if("insert_by_clean_paste"===t)return it(e,this.jodit.options.cleanPasteAllowedAttributes,this.jodit.options.cleanPasteAllowedStyles)}}e.plugins.add("paste-patch",st),e.defaultOptions.cleanPasteAllowedAttributes=nt,e.defaultOptions.cleanPasteAllowedStyles=rt;export{st as default};
//# sourceMappingURL=index.module.mjs.map
