!function(){"use strict";(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function e(e){var n=t.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!n&&e}function n(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return!(!t||!(t.__CE_isImportDocument||t instanceof Document))}function r(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function o(t,e,n){n=void 0===n?new Set:n;for(var i=t;i;){if(i.nodeType===Node.ELEMENT_NODE){var a=i;e(a);var s=a.localName;if("link"===s&&"import"===a.getAttribute("rel")){if((i=a.import)instanceof Node&&!n.has(i))for(n.add(i),i=i.firstChild;i;i=i.nextSibling)o(i,e,n);i=r(t,a);continue}if("template"===s){i=r(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)o(a,e,n)}i=i.firstChild?i.firstChild:r(t,i)}}function i(t,e,n){t[e]=n}function a(){this.a=new Map,this.f=new Map,this.c=[],this.b=!1}function s(t,e){t.b=!0,t.c.push(e)}function c(t,e){t.b&&o(e,function(e){return l(t,e)})}function l(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.c.length;n++)t.c[n](e)}}function u(t,e){var n=[];for(o(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state?t.connectedCallback(r):p(t,r)}}function h(t,e){var n=[];for(o(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var r=n[e];1===r.__CE_state&&t.disconnectedCallback(r)}}function d(t,e,n){var r=(n=void 0===n?{}:n).u||new Set,i=n.h||function(e){return p(t,e)},a=[];if(o(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var o=new Set(r);o.delete(n),d(t,n,{u:o,h:i})}})}else a.push(e)},r),t.b)for(e=0;e<a.length;e++)l(t,a[e]);for(e=0;e<a.length;e++)i(a[e])}function p(t,e){if(void 0===e.__CE_state){var r=e.ownerDocument;if((r.defaultView||r.__CE_isImportDocument&&r.__CE_hasRegistry)&&(r=t.a.get(e.localName))){r.constructionStack.push(e);var o=r.constructorFunction;try{try{if(new o!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{r.constructionStack.pop()}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=r,r.attributeChangedCallback)for(r=r.observedAttributes,o=0;o<r.length;o++){var i=r[o],a=e.getAttribute(i);null!==a&&t.attributeChangedCallback(e,i,null,a,null)}n(e)&&t.connectedCallback(e)}}}function f(t){var e=document;this.c=t,this.a=e,this.b=void 0,d(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function m(t){t.b&&t.b.disconnect()}function g(){var t=this;this.b=this.a=void 0,this.c=new Promise(function(e){t.b=e,t.a&&e(t.a)})}function w(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0)}function y(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.i=[],this.o=new f(t)}a.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t)},a.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t)},a.prototype.attributeChangedCallback=function(t,e,n,r,o){var i=t.__CE_definition;i.attributeChangedCallback&&-1<i.observedAttributes.indexOf(e)&&i.attributeChangedCallback.call(t,e,n,r,o)},f.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||m(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,r=0;r<n.length;r++)d(this.c,n[r])},y.prototype.l=function(t,n){var r=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!e(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var o=function(t){var e=i[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},i=n.prototype;if(!(i instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var a=o("connectedCallback"),s=o("disconnectedCallback"),c=o("adoptedCallback"),l=o("attributeChangedCallback"),u=n.observedAttributes||[]}catch(t){return}finally{this.c=!1}n={localName:t,constructorFunction:n,connectedCallback:a,disconnectedCallback:s,adoptedCallback:c,attributeChangedCallback:l,observedAttributes:u,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.f.set(n.constructorFunction,n)}(this.a,t,n),this.i.push(n),this.b||(this.b=!0,this.f(function(){return function(t){if(!1!==t.b){t.b=!1;for(var e=t.i,n=[],r=new Map,o=0;o<e.length;o++)r.set(e[o].localName,[]);for(d(t.a,document,{h:function(e){if(void 0===e.__CE_state){var o=e.localName,i=r.get(o);i?i.push(e):t.a.a.get(o)&&n.push(e)}}}),o=0;o<n.length;o++)p(t.a,n[o]);for(;0<e.length;){var i=e.shift();o=i.localName,i=r.get(i.localName);for(var a=0;a<i.length;a++)p(t.a,i[a]);(o=t.j.get(o))&&w(o)}}}(r)}))},y.prototype.h=function(t){d(this.a,t)},y.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},y.prototype.m=function(t){if(!e(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.j.get(t);return n?n.c:(n=new g,this.j.set(t,n),this.a.a.get(t)&&!this.i.some(function(e){return e.localName===t})&&w(n),n.c)},y.prototype.s=function(t){m(this.o);var e=this.f;this.f=function(n){return t(function(){return e(n)})}},window.CustomElementRegistry=y,y.prototype.define=y.prototype.l,y.prototype.upgrade=y.prototype.h,y.prototype.get=y.prototype.get,y.prototype.whenDefined=y.prototype.m,y.prototype.polyfillWrapFlushCallback=y.prototype.s;var v=window.Document.prototype.createElement,b=window.Document.prototype.createElementNS,C=window.Document.prototype.importNode,_=window.Document.prototype.prepend,E=window.Document.prototype.append,x=window.DocumentFragment.prototype.prepend,S=window.DocumentFragment.prototype.append,N=window.Node.prototype.cloneNode,D=window.Node.prototype.appendChild,T=window.Node.prototype.insertBefore,k=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,A=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),I=window.Element.prototype.attachShadow,L=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),j=window.Element.prototype.getAttribute,F=window.Element.prototype.setAttribute,H=window.Element.prototype.removeAttribute,O=window.Element.prototype.getAttributeNS,$=window.Element.prototype.setAttributeNS,P=window.Element.prototype.removeAttributeNS,R=window.Element.prototype.insertAdjacentElement,q=window.Element.prototype.insertAdjacentHTML,U=window.Element.prototype.prepend,z=window.Element.prototype.append,B=window.Element.prototype.before,W=window.Element.prototype.after,Y=window.Element.prototype.replaceWith,Z=window.Element.prototype.remove,K=window.HTMLElement,V=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),X=window.HTMLElement.prototype.insertAdjacentElement,G=window.HTMLElement.prototype.insertAdjacentHTML,J=new function(){};function Q(t,e,r){function o(e){return function(r){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var a=[],s=0;s<o.length;s++){var c=o[s];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)i.push(c);else i.push(c)}for(e.apply(this,o),o=0;o<a.length;o++)h(t,a[o]);if(n(this))for(o=0;o<i.length;o++)(a=i[o])instanceof Element&&u(t,a)}}void 0!==r.g&&(e.prepend=o(r.g)),void 0!==r.append&&(e.append=o(r.append))}var tt,et=window.customElements;if(!et||et.forcePolyfill||"function"!=typeof et.define||"function"!=typeof et.get){var nt=new a;tt=nt,window.HTMLElement=function(){function t(){var t=this.constructor,e=tt.f.get(t);if(!e)throw Error("The custom element being constructed was not registered with `customElements`.");var n=e.constructionStack;if(0===n.length)return n=v.call(document,e.localName),Object.setPrototypeOf(n,t.prototype),n.__CE_state=1,n.__CE_definition=e,l(tt,n),n;var r=n[e=n.length-1];if(r===J)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[e]=J,Object.setPrototypeOf(r,t.prototype),l(tt,r),r}return t.prototype=K.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}(),function(){var t=nt;i(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructorFunction}return e=v.call(this,e),l(t,e),e}),i(Document.prototype,"importNode",function(e,n){return e=C.call(this,e,!!n),this.__CE_hasRegistry?d(t,e):c(t,e),e}),i(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var r=t.a.get(n);if(r)return new r.constructorFunction}return e=b.call(this,e,n),l(t,e),e}),Q(t,Document.prototype,{g:_,append:E})}(),Q(nt,DocumentFragment.prototype,{g:x,append:S}),function(){function t(t,r){Object.defineProperty(t,"textContent",{enumerable:r.enumerable,configurable:!0,get:r.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)r.set.call(this,t);else{var o=void 0;if(this.firstChild){var i=this.childNodes,a=i.length;if(0<a&&n(this)){o=Array(a);for(var s=0;s<a;s++)o[s]=i[s]}}if(r.set.call(this,t),o)for(t=0;t<o.length;t++)h(e,o[t])}}})}var e=nt;i(Node.prototype,"insertBefore",function(t,r){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);if(t=T.call(this,t,r),n(this))for(r=0;r<o.length;r++)u(e,o[r]);return t}return o=n(t),r=T.call(this,t,r),o&&h(e,t),n(this)&&u(e,t),r}),i(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var r=Array.prototype.slice.apply(t.childNodes);if(t=D.call(this,t),n(this))for(var o=0;o<r.length;o++)u(e,r[o]);return t}return r=n(t),o=D.call(this,t),r&&h(e,t),n(this)&&u(e,t),o}),i(Node.prototype,"cloneNode",function(t){return t=N.call(this,!!t),this.ownerDocument.__CE_hasRegistry?d(e,t):c(e,t),t}),i(Node.prototype,"removeChild",function(t){var r=n(t),o=k.call(this,t);return r&&h(e,t),o}),i(Node.prototype,"replaceChild",function(t,r){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);if(t=M.call(this,t,r),n(this))for(h(e,r),r=0;r<o.length;r++)u(e,o[r]);return t}o=n(t);var i=M.call(this,t,r),a=n(this);return a&&h(e,r),o&&h(e,t),a&&u(e,t),i}),A&&A.get?t(Node.prototype,A):s(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)k.call(this,this.firstChild);D.call(this,document.createTextNode(t))}})})}(),function(){function t(t,e){Object.defineProperty(t,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){var r=this,i=void 0;if(n(this)&&(i=[],o(this,function(t){t!==r&&i.push(t)})),e.set.call(this,t),i)for(var s=0;s<i.length;s++){var l=i[s];1===l.__CE_state&&a.disconnectedCallback(l)}return this.ownerDocument.__CE_hasRegistry?d(a,this):c(a,this),t}})}function e(t,e){i(t,"insertAdjacentElement",function(t,r){var o=n(r);return t=e.call(this,t,r),o&&h(a,r),n(t)&&u(a,r),t})}function r(t,e){function n(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)d(a,n[e])}i(t,"insertAdjacentHTML",function(t,r){if("beforebegin"===(t=t.toLowerCase())){var o=this.previousSibling;e.call(this,t,r),n(o||this.parentNode.firstChild,this)}else if("afterbegin"===t)o=this.firstChild,e.call(this,t,r),n(this.firstChild,o);else if("beforeend"===t)o=this.lastChild,e.call(this,t,r),n(o||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");o=this.nextSibling,e.call(this,t,r),n(this.nextSibling,o)}})}var a=nt;I&&i(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=I.call(this,t)}),L&&L.get?t(Element.prototype,L):V&&V.get?t(HTMLElement.prototype,V):s(a,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return N.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,r=b.call(document,this.namespaceURI,this.localName);for(r.innerHTML=t;0<n.childNodes.length;)k.call(n,n.childNodes[0]);for(t=e?r.content:r;0<t.childNodes.length;)D.call(n,t.childNodes[0])}})}),i(Element.prototype,"setAttribute",function(t,e){if(1!==this.__CE_state)return F.call(this,t,e);var n=j.call(this,t);F.call(this,t,e),e=j.call(this,t),a.attributeChangedCallback(this,t,n,e,null)}),i(Element.prototype,"setAttributeNS",function(t,e,n){if(1!==this.__CE_state)return $.call(this,t,e,n);var r=O.call(this,t,e);$.call(this,t,e,n),n=O.call(this,t,e),a.attributeChangedCallback(this,e,r,n,t)}),i(Element.prototype,"removeAttribute",function(t){if(1!==this.__CE_state)return H.call(this,t);var e=j.call(this,t);H.call(this,t),null!==e&&a.attributeChangedCallback(this,t,e,null,null)}),i(Element.prototype,"removeAttributeNS",function(t,e){if(1!==this.__CE_state)return P.call(this,t,e);var n=O.call(this,t,e);P.call(this,t,e);var r=O.call(this,t,e);n!==r&&a.attributeChangedCallback(this,e,n,r,t)}),X?e(HTMLElement.prototype,X):R?e(Element.prototype,R):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),G?r(HTMLElement.prototype,G):q?r(Element.prototype,q):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Q(a,Element.prototype,{g:U,append:z}),function(t){function e(e){return function(r){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var a=[],s=0;s<o.length;s++){var c=o[s];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)i.push(c);else i.push(c)}for(e.apply(this,o),o=0;o<a.length;o++)h(t,a[o]);if(n(this))for(o=0;o<i.length;o++)(a=i[o])instanceof Element&&u(t,a)}}var r=Element.prototype;void 0!==B&&(r.before=e(B)),void 0!==B&&(r.after=e(W)),void 0!==Y&&i(r,"replaceWith",function(e){for(var r=[],o=0;o<arguments.length;++o)r[o]=arguments[o];o=[];for(var i=[],a=0;a<r.length;a++){var s=r[a];if(s instanceof Element&&n(s)&&i.push(s),s instanceof DocumentFragment)for(s=s.firstChild;s;s=s.nextSibling)o.push(s);else o.push(s)}for(a=n(this),Y.apply(this,r),r=0;r<i.length;r++)h(t,i[r]);if(a)for(h(t,this),r=0;r<o.length;r++)(i=o[r])instanceof Element&&u(t,i)}),void 0!==Z&&i(r,"remove",function(){var e=n(this);Z.call(this),e&&h(t,this)})}(a)}(),document.__CE_hasRegistry=!0;var rt=new y(nt);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:rt})}}).call(self);var t=function(t){return t instanceof Date},e=36e5,n=6e4,r=2,o=/[T ]/,i=/:/,a=/^(\d{2})$/,s=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],c=/^(\d{4})/,l=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],u=/^-(\d{2})$/,h=/^-?(\d{3})$/,d=/^-?(\d{2})-?(\d{2})$/,p=/^-?W(\d{2})$/,f=/^-?W(\d{2})-?(\d{1})$/,m=/^(\d{2}([.,]\d*)?)$/,g=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,w=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,y=/([Z+-].*)$/,v=/^(Z)$/,b=/^([+-])(\d{2})$/,C=/^([+-])(\d{2}):?(\d{2})$/;function _(t,e,n){e=e||0,n=n||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var o=7*e+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}var E=function(E,x){if(t(E))return new Date(E.getTime());if("string"!=typeof E)return new Date(E);var S=(x||{}).additionalDigits;S=null==S?r:Number(S);var N=function(t){var e,n={},r=t.split(o);if(i.test(r[0])?(n.date=null,e=r[0]):(n.date=r[0],e=r[1]),e){var a=y.exec(e);a?(n.time=e.replace(a[1],""),n.timezone=a[1]):n.time=e}return n}(E),D=function(t,e){var n,r=s[e],o=l[e];if(n=c.exec(t)||o.exec(t)){var i=n[1];return{year:parseInt(i,10),restDateString:t.slice(i.length)}}if(n=a.exec(t)||r.exec(t)){var u=n[1];return{year:100*parseInt(u,10),restDateString:t.slice(u.length)}}return{year:null}}(N.date,S),T=D.year,k=function(t,e){if(null===e)return null;var n,r,o,i;if(0===t.length)return(r=new Date(0)).setUTCFullYear(e),r;if(n=u.exec(t))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(e,o),r;if(n=h.exec(t)){r=new Date(0);var a=parseInt(n[1],10);return r.setUTCFullYear(e,0,a),r}if(n=d.exec(t)){r=new Date(0),o=parseInt(n[1],10)-1;var s=parseInt(n[2],10);return r.setUTCFullYear(e,o,s),r}if(n=p.exec(t))return i=parseInt(n[1],10)-1,_(e,i);if(n=f.exec(t)){i=parseInt(n[1],10)-1;var c=parseInt(n[2],10)-1;return _(e,i,c)}return null}(D.restDateString,T);if(k){var M,A=k.getTime(),I=0;return N.time&&(I=function(t){var r,o,i;if(r=m.exec(t))return(o=parseFloat(r[1].replace(",",".")))%24*e;if(r=g.exec(t))return o=parseInt(r[1],10),i=parseFloat(r[2].replace(",",".")),o%24*e+i*n;if(r=w.exec(t)){o=parseInt(r[1],10),i=parseInt(r[2],10);var a=parseFloat(r[3].replace(",","."));return o%24*e+i*n+1e3*a}return null}(N.time)),N.timezone?(L=N.timezone,M=(j=v.exec(L))?0:(j=b.exec(L))?(F=60*parseInt(j[2],10),"+"===j[1]?-F:F):(j=C.exec(L))?(F=60*parseInt(j[2],10)+parseInt(j[3],10),"+"===j[1]?-F:F):0):(M=new Date(A+I).getTimezoneOffset(),M=new Date(A+I+M*n).getTimezoneOffset()),new Date(A+I+M*n)}var L,j,F;return new Date(E)};var x=function(t,e){var n=E(t),r=E(e);return n.getTime()-r.getTime()};const S=1e3,N=60*S,D=60*N,T=24*D;class k extends HTMLElement{constructor(t){super(),this.update=(()=>{const t=Date.now();let e=x(this.target,t);const n=Math.floor(e/T);e-=n*T,this.updateDays(n);const r=Math.floor(e/D);e-=r*D,this.updateHours(r);const o=Math.floor(e/N);e-=o*N,this.updateMinutes(o);const i=Math.floor(e/S);e-=i*S,this.updateSeconds(i),this.updateMilliseconds(e),requestAnimationFrame(this.update)}),this.updateMilliseconds=(t=>{parseInt(this.milliseconds.innerText,10)!==t&&(this.milliseconds.innerText=t>=100?String(t):t>=10?"0"+String(t):"00"+String(t))}),this.updateSeconds=(t=>{parseInt(this.seconds.innerText,10)!==t&&(this.seconds.innerText=t>=10?String(t):"0"+String(t))}),this.updateMinutes=(t=>{parseInt(this.minutes.innerText,10)!==t&&(this.minutes.innerText=t>=10?String(t):"0"+String(t))}),this.updateHours=(t=>{parseInt(this.hours.innerText,10)!==t&&(this.hours.innerText=t>=10?String(t):"0"+String(t))}),this.updateDays=(t=>{parseInt(this.days.innerText,10)!==t&&(this.days.innerText=t>=10?String(t):"0"+String(t))}),this.id=t.id;const e=document.querySelector("#timer"),n=document.importNode(e.content,!0);n.querySelector("header h2").innerText=t.title,n.querySelector("header h4").innerText=t.targetString,this.target=t.target,this.days=n.querySelector(".days"),this.hours=n.querySelector(".hours"),this.minutes=n.querySelector(".minutes"),this.seconds=n.querySelector(".seconds"),this.milliseconds=n.querySelector(".milliseconds"),this.appendChild(n)}connectedCallback(){this.update()}}window.customElements.define("x-timer",k);class M{constructor(t="keyval-store",e="keyval"){this.storeName=e,this._dbp=new Promise((n,r)=>{const o=indexedDB.open(t,1);o.onerror=(()=>r(o.error)),o.onsuccess=(()=>n(o.result)),o.onupgradeneeded=(()=>{o.result.createObjectStore(e)})})}_withIDBStore(t,e){return this._dbp.then(n=>new Promise((r,o)=>{const i=n.transaction(this.storeName,t);i.oncomplete=(()=>r()),i.onabort=i.onerror=(()=>o(i.error)),e(i.objectStore(this.storeName))}))}}let A;function I(){return A||(A=new M),A}const L=new M("timers","timers");async function j(t,e,n){const r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,()=>Math.floor(16*Math.random()).toString(16)),o={id:r,target:t,title:e,targetString:n};return await function(t,e,n=I()){return n._withIDBStore("readwrite",n=>{n.put(e,t)})}(r,o,L),o}async function F(){const t=await function(t=I()){const e=[];return t._withIDBStore("readonly",t=>{(t.openKeyCursor||t.openCursor).call(t).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}}).then(()=>e)}(L);return await Promise.all(t.map(t=>(function(t,e=I()){let n;return e._withIDBStore("readonly",e=>{n=e.get(t)}).then(()=>n.result)})(t,L)))}async function H(t){t.preventDefault();const e=this[0].value;this[0].value="";const n=this[1].valueAsNumber,r=this[1].value;this[1].value="";const o=this[2].valueAsNumber,i=this[2].value;this[2].value="",e&&n&&o&&O(await j(n+o,e,`${r} ${i} UTC`))}function O(t){const e=new k(t);document.querySelector("main > section").appendChild(e)}navigator.serviceWorker.register("sw.js").then(()=>console.log("service worker registered")).catch(t=>console.error("service worker registration error",t)),window.addEventListener("DOMContentLoaded",async function(){document.querySelector("main > header form").addEventListener("submit",H);const t=await F();for(const e of t)O(e)})}();