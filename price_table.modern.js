var e,t,n,_,r,o={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,t){for(var n in t)e[n]=t[n];return e}function a(e){var t=e.parentNode;t&&t.removeChild(e)}function u(t,n,_){var r,o,l,i={};for(l in n)"key"==l?r=n[l]:"ref"==l?o=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===i[l]&&(i[l]=t.defaultProps[l]);return s(t,i,r,o,null)}function s(e,_,r,o,l){var i={type:e,props:_,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(i),i}function f(e){return e.children}function p(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function v(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!m.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||setTimeout)(m)}function m(){for(var e;m.__r=_.length;)e=_.sort(function(e,t){return e.__v.__b-t.__v.__b}),_=[],e.some(function(e){var t,n,_,r,o,l;e.__d&&(o=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=c({},r)).__v=r.__v+1,x(l,r,_,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[o]:null,n,null==o?d(r):o,r.__h),P(n,r),r.__e!=o&&h(r)))})}function y(e,t,n,_,r,i,c,a,u,p){var h,v,m,y,b,w,N,S=_&&_.__k||l,E=S.length;for(n.__k=[],h=0;h<t.length;h++)if(null!=(y=n.__k[h]=null==(y=t[h])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?s(null,y,null,null,y):Array.isArray(y)?s(f,{children:y},null,null,null):y.__b>0?s(y.type,y.props,y.key,y.ref?y.ref:null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(m=S[h])||m&&y.key==m.key&&y.type===m.type)S[h]=void 0;else for(v=0;v<E;v++){if((m=S[v])&&y.key==m.key&&y.type===m.type){S[v]=void 0;break}m=null}x(e,y,m=m||o,r,i,c,a,u,p),b=y.__e,(v=y.ref)&&m.ref!=v&&(N||(N=[]),m.ref&&N.push(m.ref,null,y),N.push(v,y.__c||b,y)),null!=b?(null==w&&(w=b),"function"==typeof y.type&&y.__k===m.__k?y.__d=u=g(y,u,e):u=k(e,y,m,S,b,u),"function"==typeof n.type&&(n.__d=u)):u&&m.__e==u&&u.parentNode!=e&&(u=d(m))}for(n.__e=w,h=E;h--;)null!=S[h]&&H(S[h],S[h]);if(N)for(h=0;h<N.length;h++)A(N[h],N[++h],N[++h])}function g(e,t,n){for(var _,r=e.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=e,t="function"==typeof _.type?g(_,t,n):k(n,_,_,r,_.__e,t));return t}function b(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){b(e,t)}):t.push(e)),t}function k(e,t,n,_,r,o){var l,i,c;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=o||null==r.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(r),l=null;else{for(i=o,c=0;(i=i.nextSibling)&&c<_.length;c+=2)if(i==r)break e;e.insertBefore(r,o),l=o}return void 0!==l?l:r.nextSibling}function w(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function N(e,t,n,_,r){var o;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||w(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||w(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?E:S,o):e.removeEventListener(t,o?E:S,o);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&-1==t.indexOf("-")?e.removeAttribute(t):e.setAttribute(t,n))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function E(e){this.l[e.type+!0](t.event?t.event(e):e)}function x(e,n,_,r,o,l,i,a,u){var s,d,h,v,m,g,b,k,w,N,S,E,x,P=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(u=_.__h,a=n.__e=_.__e,n.__h=null,l=[a]),(s=t.__b)&&s(n);try{e:if("function"==typeof P){k=n.props,w=(s=P.contextType)&&r[s.__c],N=s?w?w.props.value:s.__:r,_.__c?b=(d=n.__c=_.__c).__=d.__E:("prototype"in P&&P.prototype.render?n.__c=d=new P(k,N):(n.__c=d=new p(k,N),d.constructor=P,d.render=T),w&&w.sub(d),d.props=k,d.state||(d.state={}),d.context=N,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),null==d.__s&&(d.__s=d.state),null!=P.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,P.getDerivedStateFromProps(k,d.__s))),v=d.props,m=d.state;for(s=0;s<d._sb.length;s++)d.__h.push(d._sb[s]),d._sb=[];if(h)null==P.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==v&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(k,N),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(k,d.__s,N)||n.__v===_.__v){d.props=k,d.state=d.__s,n.__v!==_.__v&&(d.__d=!1),d.__v=n,n.__e=_.__e,n.__k=_.__k,n.__k.forEach(function(e){e&&(e.__=n)}),d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(k,d.__s,N),null!=d.componentDidUpdate&&d.__h.push(function(){d.componentDidUpdate(v,m,g)})}if(d.context=N,d.props=k,d.__v=n,d.__P=e,S=t.__r,E=0,"prototype"in P&&P.prototype.render)d.state=d.__s,d.__d=!1,S&&S(n),s=d.render(d.props,d.state,d.context);else do{d.__d=!1,S&&S(n),s=d.render(d.props,d.state,d.context),d.state=d.__s}while(d.__d&&++E<25);d.state=d.__s,null!=d.getChildContext&&(r=c(c({},r),d.getChildContext())),h||null==d.getSnapshotBeforeUpdate||(g=d.getSnapshotBeforeUpdate(v,m)),x=null!=s&&s.type===f&&null==s.key?s.props.children:s,y(e,Array.isArray(x)?x:[x],n,_,r,o,l,i,a,u),d.base=n.__e,n.__h=null,d.__h.length&&i.push(d),b&&(d.__E=d.__=null),d.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=C(_.__e,n,_,r,o,l,i,u);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(u||null!=l)&&(n.__e=a,n.__h=!!u,l[l.indexOf(a)]=null),t.__e(e,n,_)}}function P(e,n){t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function C(t,n,_,r,l,i,c,u){var s,f,p,h=_.props,v=n.props,m=n.type,g=0;if("svg"===m&&(l=!0),null!=i)for(;g<i.length;g++)if((s=i[g])&&"setAttribute"in s==!!m&&(m?s.localName===m:3===s.nodeType)){t=s,i[g]=null;break}if(null==t){if(null===m)return document.createTextNode(v);t=l?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,v.is&&v),i=null,u=!1}if(null===m)h===v||u&&t.data===v||(t.data=v);else{if(i=i&&e.call(t.childNodes),f=(h=_.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!u){if(null!=i)for(h={},g=0;g<t.attributes.length;g++)h[t.attributes[g].name]=t.attributes[g].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===t.innerHTML)||(t.innerHTML=p&&p.__html||""))}if(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||N(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||N(e,o,t[o],n[o],_)}(t,v,h,l,u),p)n.__k=[];else if(g=n.props.children,y(t,Array.isArray(g)?g:[g],n,_,r,l&&"foreignObject"!==m,i,c,i?i[0]:_.__k&&d(_,0),u),null!=i)for(g=i.length;g--;)null!=i[g]&&a(i[g]);u||("value"in v&&void 0!==(g=v.value)&&(g!==t.value||"progress"===m&&!g||"option"===m&&g!==h.value)&&N(t,"value",g,h.value,!1),"checked"in v&&void 0!==(g=v.checked)&&g!==t.checked&&N(t,"checked",g,h.checked,!1))}return t}function A(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function H(e,n,_){var r,o;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||A(r,null,n)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&H(r[o],n,_||"function"!=typeof e.type);_||null==e.__e||a(e.__e),e.__=e.__e=e.__d=void 0}function T(e,t,n){return this.constructor(e,n)}function O(n,_,r){var l,i,c;t.__&&t.__(n,_),i=(l="function"==typeof r)?null:r&&r.__k||_.__k,c=[],x(_,n=(!l&&r||_).__k=u(f,null,[n]),i||o,o,void 0!==_.ownerSVGElement,!l&&r?[r]:i?null:_.firstChild?e.call(_.childNodes):null,c,!l&&r?r:i?i.__e:_.firstChild,l),P(c,n)}e=l.slice,t={__e:function(e,t,n,_){for(var r,o,l;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&null!=o.getDerivedStateFromError&&(r.setState(o.getDerivedStateFromError(e)),l=r.__d),null!=r.componentDidCatch&&(r.componentDidCatch(e,_||{}),l=r.__d),l)return r.__E=r}catch(t){e=t}throw e}},n=0,p.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},n),this.props)),e&&c(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),v(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},p.prototype.render=f,_=[],m.__r=0;var L=0;function U(e,n,_,r,o){var l,i,c={};for(i in n)"ref"==i?l=n[i]:c[i]=n[i];var a={type:e,props:c,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--L,__source:o,__self:r};if("function"==typeof e&&(l=e.defaultProps))for(i in l)void 0===c[i]&&(c[i]=l[i]);return t.vnode&&t.vnode(a),a}var F,M,D,R,W=0,$=[],V=[],B=t.__b,j=t.__r,z=t.diffed,q=t.__c,I=t.unmount;function G(e,n){t.__h&&t.__h(M,e,W||n),W=0;var _=M.__H||(M.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({__V:V}),_.__[e]}function Z(e){return W=1,function(e,t,n){var _=G(F++,2);if(_.t=e,!_.__c&&(_.__=[te(void 0,t),function(e){var t=_.__N?_.__N[0]:_.__[0],n=_.t(t,e);t!==n&&(_.__N=[n,_.__[1]],_.__c.setState({}))}],_.__c=M,!M.u)){M.u=!0;var r=M.shouldComponentUpdate;M.shouldComponentUpdate=function(e,t,n){if(!_.__c.__H)return!0;var o=_.__c.__H.__.filter(function(e){return e.__c});if(o.every(function(e){return!e.__N}))return!r||r.call(this,e,t,n);var l=!1;return o.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(l=!0)}}),!(!l&&_.__c.props===e)&&(!r||r.call(this,e,t,n))}}return _.__N||_.__}(te,e)}function J(e,n){var _=G(F++,3);!t.__s&&function(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}(_.__H,n)&&(_.__=e,_.i=n,M.__H.__h.push(_))}function K(){for(var e;e=$.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(ee),e.__H.__h=[]}catch(n){e.__H.__h=[],t.__e(n,e.__v)}}t.__b=function(e){"function"!=typeof e.type||e.__m||e.type===f?e.__m||(e.__m=e.__&&e.__.__m?e.__.__m:""):e.__m=(e.__&&e.__.__m?e.__.__m:"")+(e.__&&e.__.__k?e.__.__k.indexOf(e):0),M=null,B&&B(e)},t.__r=function(e){j&&j(e),F=0;var t=(M=e.__c).__H;t&&(D===M?(t.__h=[],M.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.__V=V,e.__N=e.i=void 0})):(t.__h.forEach(Y),t.__h.forEach(ee),t.__h=[])),D=M},t.diffed=function(e){z&&z(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(1!==$.push(n)&&R===t.requestAnimationFrame||((R=t.requestAnimationFrame)||X)(K)),n.__H.__.forEach(function(e){e.i&&(e.__H=e.i),e.__V!==V&&(e.__=e.__V),e.i=void 0,e.__V=V})),D=M=null},t.__c=function(e,n){n.some(function(e){try{e.__h.forEach(Y),e.__h=e.__h.filter(function(e){return!e.__||ee(e)})}catch(_){n.some(function(e){e.__h&&(e.__h=[])}),n=[],t.__e(_,e.__v)}}),q&&q(e,n)},t.unmount=function(e){I&&I(e);var n,_=e.__c;_&&_.__H&&(_.__H.__.forEach(function(e){try{Y(e)}catch(e){n=e}}),_.__H=void 0,n&&t.__e(n,_.__v))};var Q="function"==typeof requestAnimationFrame;function X(e){var t,n=function(){clearTimeout(_),Q&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);Q&&(t=requestAnimationFrame(n))}function Y(e){var t=M,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),M=t}function ee(e){var t=M;e.__c=e.__(),M=t}function te(e,t){return"function"==typeof t?t(e):t}function ne(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var _ in t)if("__source"!==_&&e[_]!==t[_])return!0;return!1}function _e(e){this.props=e}(_e.prototype=new p).isPureReactComponent=!0,_e.prototype.shouldComponentUpdate=function(e,t){return ne(this.props,e)||ne(this.state,t)};var re=t.__b;t.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),re&&re(e)};var oe=t.__e;t.__e=function(e,t,n,_){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t);oe(e,t,n,_)};var le=t.unmount;function ie(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){"function"==typeof e.__c&&e.__c()}),e.__c.__H=null),null!=(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return ie(e,t,n)})),e}function ce(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return ce(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function ae(){this.__u=0,this.t=null,this.__b=null}function ue(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function se(){this.u=null,this.o=null}t.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&!0===e.__h&&(e.type=null),le&&le(e)},(ae.prototype=new p).__c=function(e,t){var n=t.__c,_=this;null==_.t&&(_.t=[]),_.t.push(n);var r=ue(_.__v),o=!1,l=function(){o||(o=!0,n.__R=null,r?r(i):i())};n.__R=l;var i=function(){if(!--_.__u){if(_.state.__a){var e=_.state.__a;_.__v.__k[0]=ce(e,e.__c.__P,e.__c.__O)}var t;for(_.setState({__a:_.__b=null});t=_.t.pop();)t.forceUpdate()}},c=!0===t.__h;_.__u++||c||_.setState({__a:_.__b=_.__v.__k[0]}),e.then(l,l)},ae.prototype.componentWillUnmount=function(){this.t=[]},ae.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),_=this.__v.__k[0].__c;this.__v.__k[0]=ie(this.__b,n,_.__O=_.__P)}this.__b=null}var r=t.__a&&u(f,null,e.fallback);return r&&(r.__h=null),[u(f,null,t.__a?null:e.children),r]};var fe=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};(se.prototype=new p).__a=function(e){var t=this,n=ue(t.__v),_=t.o.get(e);return _[0]++,function(r){var o=function(){t.props.revealOrder?(_.push(r),fe(t,e,_)):r()};n?n(o):o()}},se.prototype.render=function(e){this.u=null,this.o=new Map;var t=b(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},se.prototype.componentDidUpdate=se.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){fe(e,n,t)})};var pe="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,de=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,he="undefined"!=typeof document,ve=function(e){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(e)};p.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(p.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var me=t.event;function ye(){}function ge(){return this.cancelBubble}function be(){return this.defaultPrevented}t.event=function(e){return me&&(e=me(e)),e.persist=ye,e.isPropagationStopped=ge,e.isDefaultPrevented=be,e.nativeEvent=e};var ke={configurable:!0,get:function(){return this.class}},we=t.vnode;t.vnode=function(e){var t=e.type,n=e.props,_=n;if("string"==typeof t){var r=-1===t.indexOf("-");for(var o in _={},n){var l=n[o];he&&"children"===o&&"noscript"===t||"value"===o&&"defaultValue"in n&&null==l||("defaultValue"===o&&"value"in n&&null==n.value?o="value":"download"===o&&!0===l?l="":/ondoubleclick/i.test(o)?o="ondblclick":/^onchange(textarea|input)/i.test(o+t)&&!ve(n.type)?o="oninput":/^onfocus$/i.test(o)?o="onfocusin":/^onblur$/i.test(o)?o="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)?o=o.toLowerCase():r&&de.test(o)?o=o.replace(/[A-Z0-9]/g,"-$&").toLowerCase():null===l&&(l=void 0),/^oninput$/i.test(o)&&(o=o.toLowerCase(),_[o]&&(o="oninputCapture")),_[o]=l)}"select"==t&&_.multiple&&Array.isArray(_.value)&&(_.value=b(n.children).forEach(function(e){e.props.selected=-1!=_.value.indexOf(e.props.value)})),"select"==t&&null!=_.defaultValue&&(_.value=b(n.children).forEach(function(e){e.props.selected=_.multiple?-1!=_.defaultValue.indexOf(e.props.value):_.defaultValue==e.props.value})),e.props=_,n.class!=n.className&&(ke.enumerable="className"in n,null!=n.className&&(_.class=n.className),Object.defineProperty(_,"className",ke))}e.$$typeof=pe,we&&we(e)};var Ne=t.__r;t.__r=function(e){Ne&&Ne(e)};const Se={en:{link_text:"Press here",table_h1:"Pipedrive plan features"},fi:{link_text:"Paina tästä",table_h1:"Pipedriven ominaisuudet"}};function Ee(e,t){return Se[e]?Se[e][t]?Se[e][t]:"No Translation available for key":"No translation available"}function xe(e){const{children:t,onClose:n,mobileMode:_}=e,r="zimple_table";return U("dialog",{id:r,onClick:e=>{e.target&&e.target.id===r&&n()},open:!0,className:"price_dialog",children:U("div",{className:"price_dialog_content  "+(_?"price_dialog_content_mobile":""),children:[U("div",{onClick:()=>n(),className:"price_dialog_header",style:{display:"flex",alignItems:"center",verticalAlign:"center"},children:[U("span",{className:"table_h1_text",children:[" ",Ee("en","table_h1")]}),U("span",{className:"close"})]}),t]})})}function Pe(e){return U("div",{className:"grid_row "+(e.isHeader?"grid_row_header":""),children:e.children})}function Ce(e){return U("div",{className:"grid_cell",children:e.children})}function Ae(e){const{tableConfig:t,mobileMode:n}=e,_=t?t.icons.f:"",r=t?t.icons.s:"",[o,l]=Z("");return t?n?U(f,{children:[U("div",{className:"price_dialog_header_mobile",children:t.colTitles.map(e=>U("div",{children:e}))}),t.blocks.map((e,t)=>U("div",{children:[U("div",{className:"price_table_value_category_header",children:U("h4",{children:e.blockHeader})}),e.rows.map((e,n)=>{const i=`${t}_${n}`;return U("div",{children:[U("div",{className:"price_table_value_label_mobile",onClick:()=>l(e=>e===i?"":i),children:[e.header,U("i",{className:"arrow "+(i===o?"up":"down")})]}),i===o&&U("div",{className:"price_table_value_row_mobile",children:e.values.map(e=>U("div",{children:[e.isSvg&&U("svg",{style:{width:24,height:24},fill:"f"==e.value?"#4BA44F":"#9592A1",children:U("path",{d:"f"===e.value?_:r})}),!e.isSvg&&e.value&&U("span",{className:"value_without_svg",children:e.value}),e.additionalText&&U("span",{className:"value_additional_text",children:e.additionalText})]}))})]})})]}))]}):U("div",{style:{position:"relative"},children:t.blocks.map((e,n)=>U(f,{children:[!n&&U(Pe,{isHeader:!0,children:[U(Ce,{}),t.colTitles.map((e,t)=>U(Ce,{children:e}))]}),U("h3",{className:"zimple_table_h3",children:e.blockHeader}),e.rows.map((e,t)=>U(Pe,{children:[U(Ce,{children:e.header}),e.values.map(e=>U(Ce,{children:[e.isSvg&&U("svg",{style:{width:24,height:24},fill:"f"==e.value?"#4BA44F":"#9592A1",children:U("path",{d:"f"===e.value?_:r})}),!e.isSvg&&e.value&&U("span",{className:"value_without_svg",children:e.value}),e.additionalText&&U("span",{className:"value_additional_text",children:e.additionalText})]}))]}))]}))}):U("div",{children:"Loading..."})}function He(){return He=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e},He.apply(this,arguments)}const Te=e=>e instanceof ShadowRoot,Oe=e=>{const t=e.getRootNode()instanceof ShadowRoot?e.getRootNode().host:e,{dataset:n}=t,_={};for(var r in n){if(!1===n.hasOwnProperty(r))return;const e=`${(o=r.split(/(props?)/).pop()||"").charAt(0).toLowerCase()}${o.slice(1)}`;e&&(_[e]=n[r])}var o;return _},Le=e=>["text/props","application/json"].includes(e.getAttribute("type")||""),Ue=e=>Te(e)?[]:Array.from(e.getElementsByTagName("script")).filter(Le),Fe=e=>Array.from(document.querySelectorAll(e)).filter(Le),Me=e=>{let t={};return e.forEach(e=>{try{t=He({},t,JSON.parse(e.innerHTML))}catch(e){}}),t},De=(e,t,n={},_)=>{const r=Oe(t),o=e._executedScript?Oe(e._executedScript):{},l=Me(Ue(t));return He({},n,r,o,_?Me(Fe(_)):{},l)};function Re(e,t){var n=(t=[].concat(t))[t.length-1].nextSibling;function _(t,_){e.insertBefore(t,_||n)}return e.__k={nodeType:1,parentNode:e,firstChild:t[0],childNodes:t,insertBefore:_,appendChild:_,removeChild:function(t){e.removeChild(t)}}}const We=({island:e,widget:t,rootFragment:n,props:_})=>{e.props=_,O(u(t,_),n)};function $e(){const[e,t]=Z(!1),[n,_]=Z(!1),[r,o]=Z(null),l=()=>{const e=window.innerWidth<620;_(e)};return J(()=>{!r&&e&&(async()=>{const e=await async function(e){console.log("Price table fetch call");try{console.log("Tries to fetch data");const e=await fetch("https://pipedrive-pricing-uzujf6nj3q-lz.a.run.app?lang=en",{method:"GET",mode:"no-cors"});return await e.json()}catch(e){throw console.warn(e),Error("Error while trying to fetch data")}}();e&&o(e)})()},[e]),J(()=>(l(),window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}),[]),U(f,{children:[U("a",{href:"#",onClick:e=>{console.log("Open modal"),e.preventDefault(),t(!0)},children:Ee("en","link_text")}),e&&U(xe,{mobileMode:n,onClose:()=>t(!1),children:U(Ae,{mobileMode:n,tableConfig:r})})]})}const Ve=(e=>{const t={_rootsToObservers:new WeakMap,_roots:[],_executedScript:document.currentScript,props:{},render:({selector:n,clean:_=!1,replace:r=!1,inline:o=!1,initialProps:l={},propsSelector:i})=>{let c=!1;const a=()=>{if(!0===c)return;const a=(({selector:e,inline:t})=>{const n=document.currentScript;if(t&&null!=n&&n.parentNode)return[n.parentNode];const _=null==n?void 0:n.dataset.mountIn;return _?Array.from(document.querySelectorAll(_)):e?Array.from(document.querySelectorAll(e)).map(e=>null!=e.shadowRoot?e.shadowRoot:e):[]})({selector:n,inline:o});if(0===a.length)return;const{rootFragments:u}=(({island:e,widget:t,hostElements:n,clean:_,replace:r,initialProps:o,propsSelector:l})=>{const i=[];return n.forEach(n=>{const c=De(e,n,o,l);let a;if(_&&n.replaceChildren(),r)a=Re(n.parentElement||document.body,n);else{const e=document.createElement("div");n.appendChild(e),a=Re(n,e)}i.push(a),We({island:e,widget:t,rootFragment:a,props:c});const u=(({island:e,hostElement:t,initialProps:n,onNewProps:_,propsSelector:r})=>{const o=new MutationObserver(function(o){o.forEach(function(){_(De(e,t,n,r))})}),l={attributes:!0,childList:!0,characterData:!0};return e._executedScript&&o.observe(e._executedScript,l),Ue(t).forEach(e=>{o.observe(e,He({},l,{subtree:!0}))}),r&&Fe(r).forEach(e=>{o.observe(e,He({},l,{subtree:!0}))}),o.observe(Te(t)?t.host:t,l),o})({island:e,hostElement:n,initialProps:o,onNewProps:n=>{We({island:e,widget:t,rootFragment:a,props:n})},propsSelector:l});e._rootsToObservers.set(a,u)}),{rootFragments:i}})({island:t,widget:e,clean:_,hostElements:a,replace:r,initialProps:l,propsSelector:i});t._roots=t._roots.concat(u),c=!0};a(),document.addEventListener("DOMContentLoaded",a),document.addEventListener("load",a)},rerender:n=>{t._roots.forEach(_=>{We({island:t,widget:e,rootFragment:_,props:He({},t.props,n)})})},destroy:()=>{t._roots.forEach(e=>{var n;null==(n=t._rootsToObservers.get(e))||n.disconnect(),O(null,e)})}};return t})($e);Ve.render({selector:'[data-island="zimple_price_table"]'});export{$e as App};
