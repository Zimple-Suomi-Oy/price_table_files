!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).priceTable={})}(this,function(e){var t,n,_,r,o,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,n,_){var r,o,l,i={};for(l in n)"key"==l?r=n[l]:"ref"==l?o=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):_),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return f(e,i,r,o,null)}function f(e,t,r,o,l){var i={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++_:l};return null==l&&null!=n.vnode&&n.vnode(i),i}function p(e){return e.children}function d(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function y(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!g.__r++||o!==n.debounceRendering)&&((o=n.debounceRendering)||setTimeout)(g)}function g(){for(var e;g.__r=r.length;)e=r.sort(function(e,t){return e.__v.__b-t.__v.__b}),r=[],e.some(function(e){var t,n,_,r,o,l;e.__d&&(o=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=a({},r)).__v=r.__v+1,C(l,r,_,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?v(r):o,r.__h),A(n,r),r.__e!=o&&m(r)))})}function b(e,t,n,_,r,o,u,a,c,s){var d,h,m,y,g,b,w,S=_&&_.__k||i,x=S.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(y=n.__k[d]=null==(y=t[d])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?f(null,y,null,null,y):Array.isArray(y)?f(p,{children:y},null,null,null):y.__b>0?f(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=S[d])||m&&y.key==m.key&&y.type===m.type)S[d]=void 0;else for(h=0;h<x;h++){if((m=S[h])&&y.key==m.key&&y.type===m.type){S[h]=void 0;break}m=null}C(e,y,m=m||l,r,o,u,a,c,s),g=y.__e,(h=y.ref)&&m.ref!=h&&(w||(w=[]),m.ref&&w.push(m.ref,null,y),w.push(h,y.__c||g,y)),null!=g?(null==b&&(b=g),"function"==typeof y.type&&y.__k===m.__k?y.__d=c=k(y,c,e):c=N(e,y,m,S,g,c),"function"==typeof n.type&&(n.__d=c)):c&&m.__e==c&&c.parentNode!=e&&(c=v(m))}for(n.__e=b,d=x;d--;)null!=S[d]&&O(S[d],S[d]);if(w)for(d=0;d<w.length;d++)T(w[d],w[++d],w[++d])}function k(e,t,n){for(var _,r=e.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=e,t="function"==typeof _.type?k(_,t,n):N(n,_,_,r,_.__e,t));return t}function w(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){w(e,t)}):t.push(e)),t}function N(e,t,n,_,r,o){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),l=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==r)break e;e.insertBefore(r,o),l=o}return void 0!==l?l:r.nextSibling}function S(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function x(e,t,n,_,r){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||S(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||S(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?P:E,o):e.removeEventListener(t,o?P:E,o);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function E(e){this.l[e.type+!1](n.event?n.event(e):e)}function P(e){this.l[e.type+!0](n.event?n.event(e):e)}function C(e,t,_,r,o,l,i,u,c){var s,f,h,v,m,y,g,k,w,N,S,x,E,P=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(c=_.__h,u=t.__e=_.__e,t.__h=null,l=[u]),(s=n.__b)&&s(t);try{e:if("function"==typeof P){k=t.props,w=(s=P.contextType)&&r[s.__c],N=s?w?w.props.value:s.__:r,_.__c?g=(f=t.__c=_.__c).__=f.__E:("prototype"in P&&P.prototype.render?t.__c=f=new P(k,N):(t.__c=f=new d(k,N),f.constructor=P,f.render=L),w&&w.sub(f),f.props=k,f.state||(f.state={}),f.context=N,f.__n=r,h=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=P.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=a({},f.__s)),a(f.__s,P.getDerivedStateFromProps(k,f.__s))),v=f.props,m=f.state;for(s=0;s<f._sb.length;s++)f.__h.push(f._sb[s]),f._sb=[];if(h)null==P.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(k,N),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(k,f.__s,N)||t.__v===_.__v){f.props=k,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(e){e&&(e.__=t)}),f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(k,f.__s,N),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(v,m,y)})}if(f.context=N,f.props=k,f.__v=t,f.__P=e,S=n.__r,x=0,"prototype"in P&&P.prototype.render)f.state=f.__s,f.__d=!1,S&&S(t),s=f.render(f.props,f.state,f.context);else do{f.__d=!1,S&&S(t),s=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++x<25);f.state=f.__s,null!=f.getChildContext&&(r=a(a({},r),f.getChildContext())),h||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(v,m)),E=null!=s&&s.type===p&&null==s.key?s.props.children:s,b(e,Array.isArray(E)?E:[E],t,_,r,o,l,i,u,c),f.base=t.__e,t.__h=null,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=!1}else null==l&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=H(_.__e,t,_,r,o,l,i,c);(s=n.diffed)&&s(t)}catch(e){t.__v=null,(c||null!=l)&&(t.__e=u,t.__h=!!c,l[l.indexOf(u)]=null),n.__e(e,t,_)}}function A(e,t){n.__c&&n.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){n.__e(e,t.__v)}})}function H(e,n,_,r,o,i,u,a){var s,f,p,d=_.props,h=n.props,m=n.type,y=0;if("svg"===m&&(o=!0),null!=i)for(;y<i.length;y++)if((s=i[y])&&"setAttribute"in s==!!m&&(m?s.localName===m:3===s.nodeType)){e=s,i[y]=null;break}if(null==e){if(null===m)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),i=null,a=!1}if(null===m)d===h||a&&e.data===h||(e.data=h);else{if(i=i&&t.call(e.childNodes),f=(d=_.props||l).dangerouslySetInnerHTML,p=h.dangerouslySetInnerHTML,!a){if(null!=i)for(d={},y=0;y<e.attributes.length;y++)d[e.attributes[y].name]=e.attributes[y].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}if(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||x(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||x(e,o,t[o],n[o],_)}(e,h,d,o,a),p)n.__k=[];else if(y=n.props.children,b(e,Array.isArray(y)?y:[y],n,_,r,o&&"foreignObject"!==m,i,u,i?i[0]:_.__k&&v(_,0),a),null!=i)for(y=i.length;y--;)null!=i[y]&&c(i[y]);a||("value"in h&&void 0!==(y=h.value)&&(y!==e.value||"progress"===m&&!y||"option"===m&&y!==d.value)&&x(e,"value",y,d.value,!1),"checked"in h&&void 0!==(y=h.checked)&&y!==e.checked&&x(e,"checked",y,d.checked,!1))}return e}function T(e,t,_){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,_)}}function O(e,t,_){var r,o;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||T(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&O(r[o],t,_||"function"!=typeof e.type);_||null==e.__e||c(e.__e),e.__=e.__e=e.__d=void 0}function L(e,t,n){return this.constructor(e,n)}function U(e,_,r){var o,i,u;n.__&&n.__(e,_),i=(o="function"==typeof r)?null:r&&r.__k||_.__k,u=[],C(_,e=(!o&&r||_).__k=s(p,null,[e]),i||l,l,void 0!==_.ownerSVGElement,!o&&r?[r]:i?null:_.firstChild?t.call(_.childNodes):null,u,!o&&r?r:i?i.__e:_.firstChild,o),A(u,e)}t=i.slice,n={__e:function(e,t,n,_){for(var r,o,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,_||{}),l=r.__d),l)return r.__E=r}catch(t){e=t}throw e}},_=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=p,r=[],g.__r=0;var F,M,D,R,W=0,j=[],V=[],B=n.__b,$=n.__r,z=n.diffed,q=n.__c,I=n.unmount;function G(e,t){n.__h&&n.__h(M,e,W||t),W=0;var _=M.__H||(M.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:V}),_.__[e]}function Z(e){return W=1,function(e,t,n){var _=G(F++,2);if(_.t=e,!_.__c&&(_.__=[te(void 0,t),function(e){var t=_.__N?_.__N[0]:_.__[0],n=_.t(t,e);t!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=M,!M.u)){M.u=!0;var r=M.shouldComponentUpdate;M.shouldComponentUpdate=function(e,t,n){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(e){return e.__c});if(o.every(function(e){return!e.__N}))return!r||r.call(this,e,t,n);var l=!1;return o.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(l=!0)}}),!(!l&&_.__c.props===e)&&(!r||r.call(this,e,t,n))}}return _.__N||_.__}(te,e)}function J(e,t){var _=G(F++,3);!n.__s&&function(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}(_.__H,t)&&(_.__=e,_.i=t,M.__H.__h.push(_))}function K(){for(var e;e=j.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(t){e.__H.__h=[],n.__e(t,e.__v)}}n.__b=function(e){"function"!=typeof e.type||e.__m||e.type===p?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),M=null,B&&B(e)},n.__r=function(e){$&&$(e),F=0;var t=(M=e.__c).__H;t&&(D===M?(t.__h=[],M.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=V,e.__N=e.i=void 0})):(t.__h.forEach(Y),t.__h.forEach(ee),t.__h=[])),D=M},n.diffed=function(e){z&&z(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==j.push(t)&&R===n.requestAnimationFrame||((R=n.requestAnimationFrame)||X)(K)),t.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==V&&(e.__=e.__V),e.i=void 0,e.__V=V})),D=M=null},n.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Y),e.__h=e.__h.filter(function(e){return!e.__||ee(e)})}catch(_){t.some(function(e){e.__h&&(e.__h=[])}),t=[],n.__e(_,e.__v)}}),q&&q(e,t)},n.unmount=function(e){I&&I(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(e){try{Y(e)}catch(e){t=e}}),_.__H=void 0,t&&n.__e(t,_.__v))};var Q="function"==typeof requestAnimationFrame;function X(e){var t,n=function(){clearTimeout(_),Q&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Q&&(t=requestAnimationFrame(n))}function Y(e){var t=M,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),M=t}function ee(e){var t=M;e.__c=e.__(),M=t}function te(e,t){return"function"==typeof t?t(e):t}function ne(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var _ in t)if("__source"!==_&&e[_]!==t[_])return!0;return!1}function _e(e){this.props=e}(_e.prototype=new d).isPureReactComponent=!0,_e.prototype.shouldComponentUpdate=function(e,t){return ne(this.props,e)||ne(this.state,t)};var re=n.__b;n.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),re&&re(e)};var oe=n.__e;n.__e=function(e,t,n,_){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);oe(e,t,n,_)};var le=n.unmount;function ie(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),e.__c.__H=null),null!=(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return ie(e,t,n)})),e}function ue(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return ue(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function ae(){this.__u=0,this.t=null,this.__b=null}function ce(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function se(){this.u=null,this.o=null}n.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),le&&le(e)},(ae.prototype=new d).__c=function(e,t){var n=t.__c,_=this;null==_.t&&(_.t=[]),_.t.push(n);var r=ce(_.__v),o=!1,l=function(){o||(o=!0,n.__R=null,r?r(i):i())};n.__R=l;var i=function(){if(!--_.__u){if(_.state.__a){var e=_.state.__a;_.__v.__k[0]=ue(e,e.__c.__P,e.__c.__O)}var t;for(_.setState({__a:_.__b=null});t=_.t.pop();)t.forceUpdate()}},u=!0===t.__h;_.__u++||u||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(l,l)},ae.prototype.componentWillUnmount=function(){this.t=[]},ae.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=ie(this.__b,n,_.__O=_.__P)}this.__b=null}var r=t.__a&&s(p,null,e.fallback);return r&&(r.__h=null),[s(p,null,t.__a?null:e.children),r]};var fe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(se.prototype=new d).__a=function(e){var t=this,n=ce(t.__v),_=t.o.get(e);return _[0]++,function(r){var o=function(){t.props.revealOrder?(_.push(r),fe(t,e,_)):r()};n?n(o):o()}},se.prototype.render=function(e){this.u=null,this.o=new Map;var t=w(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},se.prototype.componentDidUpdate=se.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){fe(e,n,t)})};var pe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,de=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,he="undefined"!=typeof document,ve=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};d.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(d.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var me=n.event;function ye(){}function ge(){return this.cancelBubble}function be(){return this.defaultPrevented}n.event=function(e){return me&&(e=me(e)),e.persist=ye,e.isPropagationStopped=ge,e.isDefaultPrevented=be,e.nativeEvent=e};var ke={configurable:!0,get:function(){return this.class}},we=n.vnode;n.vnode=function(e){var t=e.type,n=e.props,_=n;if("string"==typeof t){var r=-1===t.indexOf("-");for(var o in _={},n){var l=n[o];he&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in n&&null==l||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===l?l="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!ve(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():r&&de.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),_[o]&&(o="oninputCapture")),_[o]=l)}"select"==t&&_.multiple&&Array.isArray(_.value)&&(_.value=w(n.children).forEach(function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)})),"select"==t&&null!=_.defaultValue&&(_.value=w(n.children).forEach(function(e){e.props.selected=_.multiple?-1!=_.defaultValue.indexOf(e.props.value):_.defaultValue==e.props.value})),e.props=_,n.class!=n.className&&(ke.enumerable="className"in n,null!=n.className&&(_.class=n.className),Object.defineProperty(_,"className",ke))}e.$$typeof=pe,we&&we(e)};var Ne=n.__r;n.__r=function(e){Ne&&Ne(e)};var Se={en:{link_text:"Compare plan features",table_h1:"Pipedrive plan features"},fi:{link_text:"Vertaile lisenssejä",table_h1:"Pipedriven ominaisuudet"}};function xe(e,t){return Se[e]?Se[e][t]?Se[e][t]:"No Translation available for key":"No translation available"}function Ee(e){s("div",{});var t=e.children,n=e.onClose,_="zimple_table";return s("dialog",{id:_,onClick:function(e){e.target&&e.target.id===_&&n()},open:!0,className:"price_dialog"},s("div",{className:"price_dialog_content  "+(e.mobileMode?"price_dialog_content_mobile":"")},s("div",{onClick:function(){return n()},className:"price_dialog_header",style:{display:"flex",alignItems:"center",verticalAlign:"center"}},s("span",{className:"table_h1_text"}," ",xe("en","table_h1")),s("span",{className:"close"})),t))}function Pe(e){return h("div",{className:"grid_row "+(e.isHeader?"grid_row_header":"")},e.children)}function Ce(e){return h("div",{className:"grid_cell"},e.children)}function Ae(e){s("div",{});var t=e.tableConfig,n=e.mobileMode,_=t?t.icons.f:"",r=t?t.icons.s:"",o=Z(""),l=o[0],i=o[1];return t?n?s(p,null,s("div",{className:"price_dialog_header_mobile"},t.colTitles.map(function(e){return s("div",null,e)})),t.blocks.map(function(e,t){return s("div",null,s("div",{className:"price_table_value_category_header"},s("h4",null,e.blockHeader)),e.rows.map(function(e,n){var o=t+"_"+n;return s("div",null,s("div",{className:"price_table_value_label_mobile",onClick:function(){return i(function(e){return e===o?"":o})}},e.header,s("i",{className:"arrow "+(o===l?"up":"down")})),o===l&&s("div",{className:"price_table_value_row_mobile"},e.values.map(function(e){return s("div",null,e.isSvg&&s("svg",{style:{width:24,height:24},fill:"f"==e.value?"#4BA44F":"#9592A1"},s("path",{d:"f"===e.value?_:r})),!e.isSvg&&e.value&&s("span",{className:"value_without_svg"},e.value),e.additionalText&&s("span",{className:"value_additional_text"},e.additionalText))})))}))})):s("div",{style:{position:"relative"}},t.blocks.map(function(e,n){return s(p,null,!n&&s(Pe,{isHeader:!0},s(Ce,null),t.colTitles.map(function(e,t){return s(Ce,null,e)})),s("h3",{className:"zimple_table_h3"},e.blockHeader),e.rows.map(function(e,t){return s(Pe,null,s(Ce,null,e.header),e.values.map(function(e){return s(Ce,null,e.isSvg&&s("svg",{style:{width:24,height:24},fill:"f"==e.value?"#4BA44F":"#9592A1"},s("path",{d:"f"===e.value?_:r})),!e.isSvg&&e.value&&s("span",{className:"value_without_svg"},e.value),e.additionalText&&s("span",{className:"value_additional_text"},e.additionalText))}))}))})):s("div",null,"Loading...")}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e},He.apply(this,arguments)}const Te=e=>e instanceof ShadowRoot,Oe=e=>{const t=e.getRootNode()instanceof ShadowRoot?e.getRootNode().host:e,{dataset:n}=t,_={};for(var r in n){if(!1===n.hasOwnProperty(r))return;const e=`${(o=r.split(/(props?)/).pop()||"").charAt(0).toLowerCase()}${o.slice(1)}`;e&&(_[e]=n[r])}var o;return _},Le=e=>["text/props","application/json"].includes(e.getAttribute("type")||""),Ue=e=>Te(e)?[]:Array.from(e.getElementsByTagName("script")).filter(Le),Fe=e=>Array.from(document.querySelectorAll(e)).filter(Le),Me=e=>{let t={};return e.forEach(e=>{try{t=He({},t,JSON.parse(e.innerHTML))}catch(e){}}),t},De=(e,t,n={},_)=>{const r=Oe(t),o=e._executedScript?Oe(e._executedScript):{},l=Me(Ue(t));return He({},n,r,o,_?Me(Fe(_)):{},l)};function Re(e,t){var n=(t=[].concat(t))[t.length-1].nextSibling;function _(t,_){e.insertBefore(t,_||n)}return e.__k={nodeType:1,parentNode:e,firstChild:t[0],childNodes:t,insertBefore:_,appendChild:_,removeChild:function(t){e.removeChild(t)}}}const We=({island:e,widget:t,rootFragment:n,props:_})=>{e.props=_,U(s(t,_),n)};function je(){s("div",{});var e=Z(!1),t=e[0],n=e[1],_=Z(!1),r=_[0],o=_[1],l=Z(null),i=l[0],u=l[1],a=function(){var e=window.innerWidth<620;o(e)};return J(function(){if(!i&&t)try{return Promise.resolve(function(e){try{return console.log("Price table fetch call"),Promise.resolve(fetch("https://pipedrive-pricing-uzujf6nj3q-lz.a.run.app?lang=en").then(function(e){return e.json()}).then(function(e){return e}))}catch(e){return Promise.reject(e)}}()).then(function(e){e&&u(e)})}catch(e){Promise.reject(e)}document.getElementsByTagName("body")[0].style.overflow=t?"hidden":""},[t]),J(function(){return a(),window.addEventListener("resize",a),function(){window.removeEventListener("resize",a)}},[]),s(p,null,s("a",{className:"price_table_pseudo_button",href:"#",onClick:function(e){console.log("Open modal"),e.preventDefault(),n(!0)}},xe("en","link_text")),t&&s(Ee,{mobileMode:r,onClose:function(){return n(!1)}},s(Ae,{mobileMode:r,tableConfig:i})))}var Ve=(e=>{const t={_rootsToObservers:new WeakMap,_roots:[],_executedScript:document.currentScript,props:{},render:({selector:n,clean:_=!1,replace:r=!1,inline:o=!1,initialProps:l={},propsSelector:i})=>{let u=!1;const a=()=>{if(!0===u)return;const a=(({selector:e,inline:t})=>{const n=document.currentScript;if(t&&null!=n&&n.parentNode)return[n.parentNode];const _=null==n?void 0:n.dataset.mountIn;return _?Array.from(document.querySelectorAll(_)):e?Array.from(document.querySelectorAll(e)).map(e=>null!=e.shadowRoot?e.shadowRoot:e):[]})({selector:n,inline:o});if(0===a.length)return;const{rootFragments:c}=(({island:e,widget:t,hostElements:n,clean:_,replace:r,initialProps:o,propsSelector:l})=>{const i=[];return n.forEach(n=>{const u=De(e,n,o,l);let a;if(_&&n.replaceChildren(),r)a=Re(n.parentElement||document.body,n);else{const e=document.createElement("div");n.appendChild(e),a=Re(n,e)}i.push(a),We({island:e,widget:t,rootFragment:a,props:u});const c=(({island:e,hostElement:t,initialProps:n,onNewProps:_,propsSelector:r})=>{const o=new MutationObserver(function(o){o.forEach(function(){_(De(e,t,n,r))})}),l={attributes:!0,childList:!0,characterData:!0};return e._executedScript&&o.observe(e._executedScript,l),Ue(t).forEach(e=>{o.observe(e,He({},l,{subtree:!0}))}),r&&Fe(r).forEach(e=>{o.observe(e,He({},l,{subtree:!0}))}),o.observe(Te(t)?t.host:t,l),o})({island:e,hostElement:n,initialProps:o,onNewProps:n=>{We({island:e,widget:t,rootFragment:a,props:n})},propsSelector:l});e._rootsToObservers.set(a,c)}),{rootFragments:i}})({island:t,widget:e,clean:_,hostElements:a,replace:r,initialProps:l,propsSelector:i});t._roots=t._roots.concat(c),u=!0};a(),document.addEventListener("DOMContentLoaded",a),document.addEventListener("load",a)},rerender:n=>{t._roots.forEach(_=>{We({island:t,widget:e,rootFragment:_,props:He({},t.props,n)})})},destroy:()=>{t._roots.forEach(e=>{var n;null==(n=t._rootsToObservers.get(e))||n.disconnect(),U(null,e)})}};return t})(je);Ve.render({selector:'[data-island="zimple_price_table"]'}),e.App=je});
