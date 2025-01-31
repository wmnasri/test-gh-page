import{g as ne,R as _}from"./index-0X8QCd_i.js";/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var ie=/["'&<>]/,oe=se;function se(a){var i=""+a,o=ie.exec(i);if(!o)return i;var e,r="",t=0,n=0;for(t=o.index;t<i.length;t++){switch(i.charCodeAt(t)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}n!==t&&(r+=i.substring(n,t)),n=t+1,r+=e}return n!==t?r+i.substring(n,t):r}const le=ne(oe);var q={};function K(a,i){if(a==null)return{};var o={},e=Object.keys(a),r,t;for(t=0;t<e.length;t++)r=e[t],!(i.indexOf(r)>=0)&&(o[r]=a[r]);return o}function ce(a,i){a.prototype=Object.create(i.prototype),a.prototype.constructor=a,H(a,i)}function H(a,i){return H=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},H(a,i)}function x(){return x=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e])}return a},x.apply(this,arguments)}function M(){return M=Object.assign||function(a){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e])}return a},M.apply(this,arguments)}function X(a){var i=a.attributes,o=i===void 0?{}:i,e=a.className,r=a.children,t=r===void 0?null:r,n=a.selfClose,s=n===void 0?!1:n,c=a.tagName,h=c;return s?_.createElement(h,M({className:e},o)):_.createElement(h,M({className:e},o),t)}var ue=function(){function a(){}var i=a.prototype;return i.attribute=function(e,r){return r},i.node=function(e,r){return r},a}(),l=1,Z=2,J=4,b=8,D=16,R=32,L=64,j={a:{content:l|b,self:!1,type:l|b|R|L},address:{invalid:["h1","h2","h3","h4","h5","h6","address","article","aside","section","div","header","footer"],self:!1},audio:{children:["track","source"]},br:{type:l|b,void:!0},body:{content:l|Z|J|b|D|R|L},button:{content:b,type:l|b|R|L},caption:{content:l,parent:["table"]},col:{parent:["colgroup"],void:!0},colgroup:{children:["col"],parent:["table"]},details:{children:["summary"],type:l|R|L},dd:{content:l,parent:["dl"]},dl:{children:["dt","dd"],type:l},dt:{content:l,invalid:["footer","header"],parent:["dl"]},figcaption:{content:l,parent:["figure"]},footer:{invalid:["footer","header"]},header:{invalid:["footer","header"]},hr:{type:l,void:!0},img:{void:!0},li:{content:l,parent:["ul","ol","menu"]},main:{self:!1},ol:{children:["li"],type:l},picture:{children:["source","img"],type:l|b|D},rb:{parent:["ruby","rtc"]},rp:{parent:["ruby","rtc"]},rt:{content:b,parent:["ruby","rtc"]},rtc:{content:b,parent:["ruby"]},ruby:{children:["rb","rp","rt","rtc"]},source:{parent:["audio","video","picture"],void:!0},summary:{content:b,parent:["details"]},table:{children:["caption","colgroup","thead","tbody","tfoot","tr"],type:l},tbody:{parent:["table"],children:["tr"]},td:{content:l,parent:["tr"]},tfoot:{parent:["table"],children:["tr"]},th:{content:l,parent:["tr"]},thead:{parent:["table"],children:["tr"]},tr:{parent:["table","tbody","thead","tfoot"],children:["th","td"]},track:{parent:["audio","video"],void:!0},ul:{children:["li"],type:l},video:{children:["track","source"]},wbr:{type:l|b,void:!0}};function I(a){return function(i){j[i]=x({},a,j[i])}}["address","main","div","figure","p","pre"].forEach(I({content:l,type:l|L}));["abbr","b","bdi","bdo","cite","code","data","dfn","em","i","kbd","mark","q","ruby","samp","strong","sub","sup","time","u","var"].forEach(I({content:b,type:l|b|L}));["p","pre"].forEach(I({content:b,type:l|L}));["s","small","span","del","ins"].forEach(I({content:b,type:l|b}));["article","aside","footer","header","nav","section","blockquote"].forEach(I({content:l,type:l|Z|L}));["h1","h2","h3","h4","h5","h6"].forEach(I({content:b,type:l|J|L}));["audio","canvas","iframe","img","video"].forEach(I({type:l|b|D|L}));var $=Object.freeze(j),fe=["applet","base","body","command","embed","frame","frameset","head","html","link","meta","noscript","object","script","style","title"],de=Object.keys($).filter(function(a){return a!=="canvas"&&a!=="iframe"}),f=1,ve=2,C=3,P=4,Q=5,U=Object.freeze({alt:f,cite:f,class:f,colspan:C,controls:P,datetime:f,default:P,disabled:P,dir:f,height:f,href:f,id:f,kind:f,label:f,lang:f,loading:f,loop:P,media:f,muted:P,poster:f,role:f,rowspan:C,scope:f,sizes:f,span:C,start:C,style:Q,src:f,srclang:f,srcset:f,target:f,title:f,type:f,width:f}),pe=Object.freeze({class:"className",colspan:"colSpan",datetime:"dateTime",rowspan:"rowSpan",srclang:"srcLang",srcset:"srcSet"}),he=/(url|image|image-set)\(/i,ye=function(a){ce(i,a);function i(){return a.apply(this,arguments)||this}var o=i.prototype;return o.attribute=function(r,t){return r==="style"&&Object.keys(t).forEach(function(n){String(t[n]).match(he)&&delete t[n]}),t},i}(ue),V=1,me=3,be=/^<(!doctype|(html|head|body)(\s|>))/i,ge=/^(aria\x2D|data\x2D|[0-9A-Z_a-z\u017F\u212A]+:)/i,Ee=/{{{(\w+)\/?}}}/;function Te(){if(!(typeof window>"u"||typeof document>"u"))return document.implementation.createHTMLDocument("Interweave")}var ee=function(){function a(o,e,r,t){if(e===void 0&&(e={}),r===void 0&&(r=[]),t===void 0&&(t=[]),this.allowed=void 0,this.banned=void 0,this.blocked=void 0,this.container=void 0,this.content=[],this.props=void 0,this.matchers=void 0,this.filters=void 0,this.keyIndex=void 0,o&&typeof o!="string")throw new TypeError("Interweave parser requires a valid string.");this.props=e,this.matchers=r,this.filters=[].concat(t,[new ye]),this.keyIndex=-1,this.container=this.createContainer(o||""),this.allowed=new Set(e.allowList||de),this.banned=new Set(fe),this.blocked=new Set(e.blockList)}var i=a.prototype;return i.applyAttributeFilters=function(e,r){return this.filters.reduce(function(t,n){return t!==null&&typeof n.attribute=="function"?n.attribute(e,t):t},r)},i.applyNodeFilters=function(e,r){return this.filters.reduce(function(t,n){return t!==null&&typeof n.node=="function"?n.node(e,t):t},r)},i.applyMatchers=function(e,r){var t=this,n={},s=this.props,c=e,h=0,d=null;return this.matchers.forEach(function(u){var v=u.asTag().toLowerCase(),p=t.getTagConfig(v);if(!(s[u.inverseName]||!t.isTagAllowed(v))&&t.canRenderChild(r,p)){for(var g="";c&&(d=u.match(c));){var y=d,m=y.index,E=y.length,T=y.match,N=y.valid,O=y.void,S=K(y,["index","length","match","valid","void"]),w=u.propName+h;m>0&&(g+=c.slice(0,m)),N?(g+=O?"{{{"+w+"/}}}":"{{{"+w+"}}}"+T+"{{{/"+w+"}}}",t.keyIndex+=1,h+=1,n[w]={children:T,matcher:u,props:x({},s,S,{key:t.keyIndex})}):g+=T,u.greedy?(c=g+c.slice(m+E),g=""):c=c.slice(m+(E||T.length))}u.greedy||(c=g+c)}}),h===0?e:this.replaceTokens(c,n)},i.canRenderChild=function(e,r){return!e.tagName||!r.tagName||e.void?!1:e.children.length>0?e.children.includes(r.tagName):e.invalid.length>0&&e.invalid.includes(r.tagName)?!1:r.parent.length>0?r.parent.includes(e.tagName):!e.self&&e.tagName===r.tagName?!1:!!(e&&e.content&r.type)},i.convertLineBreaks=function(e){var r=this.props,t=r.noHtml,n=r.disableLineBreaks;if(t||n||e.match(/<((?:\/[ a-z]+)|(?:[ a-z]+\/))>/gi))return e;var s=e.replace(/\r\n/g,`
`);return s=s.replace(/\n{3,}/g,`


`),s=s.replace(/\n/g,"<br/>"),s},i.createContainer=function(e){var r=typeof q<"u"&&q.INTERWEAVE_SSR_POLYFILL||Te,t=r();if(t){var n=this.props.containerTagName||"body",s=n==="body"||n==="fragment"?t.body:t.createElement(n);if(e.match(be))throw new Error("HTML documents as Interweave content are not supported.");return s.innerHTML=this.convertLineBreaks(this.props.escapeHtml?le(e):e),s}},i.extractAttributes=function(e){var r=this,t=this.props.allowAttributes,n={},s=0;return e.nodeType!==V||!e.attributes||(Array.from(e.attributes).forEach(function(c){var h=c.name,d=c.value,u=h.toLowerCase(),v=U[u]||U[h];if(r.isSafe(e)&&!(!u.match(ge)&&(!t&&(!v||v===ve)||u.startsWith("on")||d.replace(/(\s|\0|&#x0([9AD]);)/,"").match(/(javascript|vbscript|livescript|xss):/i)))){var p=u==="style"?r.extractStyleAttribute(e):d;v===P?p=!0:v===C?p=Number.parseFloat(String(p)):v!==Q&&(p=String(p)),n[pe[u]||u]=r.applyAttributeFilters(u,p),s+=1}}),s===0)?null:n},i.extractStyleAttribute=function(e){var r={};return Array.from(e.style).forEach(function(t){var n=e.style[t];(typeof n=="string"||typeof n=="number")&&(r[t.replace(/-([a-z])/g,function(s,c){return c.toUpperCase()})]=n)}),r},i.getTagConfig=function(e){var r={children:[],content:0,invalid:[],parent:[],self:!0,tagName:"",type:0,void:!1};return $[e]?x({},r,$[e],{tagName:e}):r},i.isSafe=function(e){if(typeof HTMLAnchorElement<"u"&&e instanceof HTMLAnchorElement){var r=e.getAttribute("href");if(r&&r.charAt(0)==="#")return!0;var t=e.protocol.toLowerCase();return t===":"||t==="http:"||t==="https:"||t==="mailto:"||t==="tel:"}return!0},i.isTagAllowed=function(e){return this.banned.has(e)||this.blocked.has(e)?!1:this.props.allowElements||this.allowed.has(e)},i.parse=function(){return this.container?this.parseNode(this.container,this.getTagConfig(this.container.nodeName.toLowerCase())):[]},i.parseNode=function(e,r){var t=this,n=this.props,s=n.noHtml,c=n.noHtmlExceptMatchers,h=n.allowElements,d=n.transform,u=n.transformOnlyAllowList,v=[],p="";return Array.from(e.childNodes).forEach(function(g){if(g.nodeType===V){var y=g.nodeName.toLowerCase(),m=t.getTagConfig(y);p&&(v.push(p),p="");var E=t.applyNodeFilters(y,g);if(!E)return;var T;if(d&&!(u&&!t.isTagAllowed(y))){t.keyIndex+=1;var N=t.keyIndex;T=t.parseNode(E,m);var O=d(E,T,m);if(O===null)return;if(typeof O<"u"){v.push(_.cloneElement(O,{key:N}));return}t.keyIndex=N-1}if(t.banned.has(y))return;if(!(s||c&&y!=="br")&&t.isTagAllowed(y)&&(h||t.canRenderChild(r,m))){t.keyIndex+=1;var S=t.extractAttributes(E),w={tagName:y};S&&(w.attributes=S),m.void&&(w.selfClose=m.void),v.push(_.createElement(X,x({},w,{key:t.keyIndex}),T||t.parseNode(E,m)))}else v=v.concat(t.parseNode(E,m.tagName?m:r))}else if(g.nodeType===me){var F=s&&!c?g.textContent:t.applyMatchers(g.textContent||"",r);Array.isArray(F)?v=v.concat(F):p+=F}}),p&&v.push(p),v},i.replaceTokens=function(e,r){if(!e.includes("{{{"))return e;for(var t=[],n=e,s=null;s=n.match(Ee);){var c=s,h=c[0],d=c[1],u=s.index,v=h.includes("/");if(!r[d])throw new Error('Token "'+d+'" found but no matching element to replace with.');u>0&&(t.push(n.slice(0,u)),n=n.slice(u));var p=r[d],g=p.children,y=p.matcher,m=p.props,E=void 0;if(v)E=h.length,t.push(y.createElement(g,m));else{var T=n.match(new RegExp("{{{/"+d+"}}}"));if(!T)throw new Error('Closing token missing for interpolated element "'+d+'".');E=T.index+T[0].length,t.push(y.createElement(this.replaceTokens(n.slice(h.length,T.index),r),m))}n=n.slice(E)}return n.length>0&&t.push(n),t.length===0?"":t.length===1&&typeof t[0]=="string"?t[0]:t},a}();function we(a){var i=a.attributes,o=a.className,e=a.containerTagName,r=a.content,t=a.emptyContent,n=a.parsedContent,s=a.tagName,c=e||s||"span",h=c==="fragment"?!0:a.noWrap,d;if(n)d=n;else{var u=new ee(r||"",a).parse();u.length>0&&(d=u)}return d||(d=t),h?_.createElement(_.Fragment,null,d):_.createElement(X,{attributes:i,className:o,tagName:c},d)}function Le(a){var i=a.attributes,o=a.className,e=a.content,r=e===void 0?"":e,t=a.disableFilters,n=t===void 0?!1:t,s=a.disableMatchers,c=s===void 0?!1:s,h=a.emptyContent,d=h===void 0?null:h,u=a.filters,v=u===void 0?[]:u,p=a.matchers,g=p===void 0?[]:p,y=a.onAfterParse,m=y===void 0?null:y,E=a.onBeforeParse,T=E===void 0?null:E,N=a.tagName,O=N===void 0?"span":N,S=a.noWrap,w=S===void 0?!1:S,F=K(a,["attributes","className","content","disableFilters","disableMatchers","emptyContent","filters","matchers","onAfterParse","onBeforeParse","tagName","noWrap"]),W=c?[]:g,te=n?[]:v,Y=T?[T]:[],z=m?[m]:[];W.forEach(function(A){A.onBeforeParse&&Y.push(A.onBeforeParse.bind(A)),A.onAfterParse&&z.push(A.onAfterParse.bind(A))});var re=Y.reduce(function(A,B){var k=B(A,a);if(typeof k!="string")throw new TypeError("Interweave `onBeforeParse` must return a valid HTML string.");return k},r||""),ae=new ee(re,F,W,te),G=z.reduce(function(A,B){var k=B(A,a);if(!Array.isArray(k))throw new TypeError("Interweave `onAfterParse` must return an array of strings and React elements.");return k},ae.parse());return _.createElement(we,{attributes:i,className:o,containerTagName:a.containerTagName,emptyContent:d,tagName:O,noWrap:w,parsedContent:G.length===0?void 0:G})}export{Le as I,we as M};
