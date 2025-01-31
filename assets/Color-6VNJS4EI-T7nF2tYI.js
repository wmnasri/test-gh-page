import{n as w,d as Z,T as bt,F as vt,I as pt,g as mt}from"./DocsRenderer-NNNQARDV-VQ3ZhNza.js";import{R as f,r as b,g as xt}from"./index-0X8QCd_i.js";import{c as yt}from"./index-BQ5IbGbl.js";import{t as wt}from"./throttle-C5YRRb_b.js";import"./iframe-CrganuSH.js";import"../sb-preview/runtime.js";import"./react-18-XIzx14kh.js";import"./index-4p5aklhB.js";import"./index-Cu4lwwaE.js";import"./_getPrototype-DL31ZjIE.js";import"./_baseIsEqual-DwR-aJgz.js";import"./index-DrFu-skq.js";function _(){return(_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function V(t,e){if(t==null)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e.indexOf(n=a[r])>=0||(o[n]=t[n]);return o}function T(t){var e=b.useRef(t),n=b.useRef(function(r){e.current&&e.current(r)});return e.current=t,n.current}var $=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=1),t>n?n:t<e?e:t},O=function(t){return"touches"in t},B=function(t){return t&&t.ownerDocument.defaultView||self},A=function(t,e,n){var r=t.getBoundingClientRect(),o=O(e)?function(a,s){for(var c=0;c<a.length;c++)if(a[c].identifier===s)return a[c];return a[0]}(e.touches,n):e;return{left:$((o.pageX-(r.left+B(t).pageXOffset))/r.width),top:$((o.pageY-(r.top+B(t).pageYOffset))/r.height)}},U=function(t){!O(t)&&t.preventDefault()},G=f.memo(function(t){var e=t.onMove,n=t.onKey,r=V(t,["onMove","onKey"]),o=b.useRef(null),a=T(e),s=T(n),c=b.useRef(null),l=b.useRef(!1),u=b.useMemo(function(){var k=function(m){U(m),(O(m)?m.touches.length>0:m.buttons>0)&&o.current?a(A(o.current,m,c.current)):E(!1)},I=function(){return E(!1)};function E(m){var v=l.current,y=B(o.current),N=m?y.addEventListener:y.removeEventListener;N(v?"touchmove":"mousemove",k),N(v?"touchend":"mouseup",I)}return[function(m){var v=m.nativeEvent,y=o.current;if(y&&(U(v),!function(dt,gt){return gt&&!O(dt)}(v,l.current)&&y)){if(O(v)){l.current=!0;var N=v.changedTouches||[];N.length&&(c.current=N[0].identifier)}y.focus(),a(A(y,v,c.current)),E(!0)}},function(m){var v=m.which||m.keyCode;v<37||v>40||(m.preventDefault(),s({left:v===39?.05:v===37?-.05:0,top:v===40?.05:v===38?-.05:0}))},E]},[s,a]),d=u[0],h=u[1],g=u[2];return b.useEffect(function(){return g},[g]),f.createElement("div",_({},r,{onTouchStart:d,onMouseDown:d,className:"react-colorful__interactive",ref:o,onKeyDown:h,tabIndex:0,role:"slider"}))}),R=function(t){return t.filter(Boolean).join(" ")},W=function(t){var e=t.color,n=t.left,r=t.top,o=r===void 0?.5:r,a=R(["react-colorful__pointer",t.className]);return f.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},p=function(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=Math.pow(10,e)),Math.round(n*t)/n},_t={grad:.9,turn:360,rad:360/(2*Math.PI)},kt=function(t){return nt(X(t))},X=function(t){return t[0]==="#"&&(t=t.substring(1)),t.length<6?{r:parseInt(t[0]+t[0],16),g:parseInt(t[1]+t[1],16),b:parseInt(t[2]+t[2],16),a:t.length===4?p(parseInt(t[3]+t[3],16)/255,2):1}:{r:parseInt(t.substring(0,2),16),g:parseInt(t.substring(2,4),16),b:parseInt(t.substring(4,6),16),a:t.length===8?p(parseInt(t.substring(6,8),16)/255,2):1}},Et=function(t,e){return e===void 0&&(e="deg"),Number(t)*(_t[e]||1)},Mt=function(t){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?Ct({h:Et(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},Ct=function(t){var e=t.s,n=t.l;return{h:t.h,s:(e*=(n<50?n:100-n)/100)>0?2*e/(n+e)*100:0,v:n+e,a:t.a}},$t=function(t){return Ot(et(t))},tt=function(t){var e=t.s,n=t.v,r=t.a,o=(200-e)*n/100;return{h:p(t.h),s:p(o>0&&o<200?e*n/100/(o<=100?o:200-o)*100:0),l:p(o/2),a:p(r,2)}},D=function(t){var e=tt(t);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},H=function(t){var e=tt(t);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},et=function(t){var e=t.h,n=t.s,r=t.v,o=t.a;e=e/360*6,n/=100,r/=100;var a=Math.floor(e),s=r*(1-n),c=r*(1-(e-a)*n),l=r*(1-(1-e+a)*n),u=a%6;return{r:p(255*[r,c,s,s,l,r][u]),g:p(255*[l,r,r,c,s,s][u]),b:p(255*[s,s,l,r,r,c][u]),a:p(o,2)}},Nt=function(t){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(t);return e?nt({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},j=function(t){var e=t.toString(16);return e.length<2?"0"+e:e},Ot=function(t){var e=t.r,n=t.g,r=t.b,o=t.a,a=o<1?j(p(255*o)):"";return"#"+j(e)+j(n)+j(r)+a},nt=function(t){var e=t.r,n=t.g,r=t.b,o=t.a,a=Math.max(e,n,r),s=a-Math.min(e,n,r),c=s?a===e?(n-r)/s:a===n?2+(r-e)/s:4+(e-n)/s:0;return{h:p(60*(c<0?c+6:c)),s:p(a?s/a*100:0),v:p(a/255*100),a:o}},rt=f.memo(function(t){var e=t.hue,n=t.onChange,r=R(["react-colorful__hue",t.className]);return f.createElement("div",{className:r},f.createElement(G,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:$(e+360*o.left,0,360)})},"aria-label":"Hue","aria-valuenow":p(e),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(W,{className:"react-colorful__hue-pointer",left:e/360,color:D({h:e,s:100,v:100,a:1})})))}),ot=f.memo(function(t){var e=t.hsva,n=t.onChange,r={backgroundColor:D({h:e.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:r},f.createElement(G,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:$(e.s+100*o.left,0,100),v:$(e.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+p(e.s)+"%, Brightness "+p(e.v)+"%"},f.createElement(W,{className:"react-colorful__saturation-pointer",top:1-e.v/100,left:e.s/100,color:D(e)})))}),at=function(t,e){if(t===e)return!0;for(var n in t)if(t[n]!==e[n])return!1;return!0},st=function(t,e){return t.replace(/\s/g,"")===e.replace(/\s/g,"")},St=function(t,e){return t.toLowerCase()===e.toLowerCase()||at(X(t),X(e))};function ct(t,e,n){var r=T(n),o=b.useState(function(){return t.toHsva(e)}),a=o[0],s=o[1],c=b.useRef({color:e,hsva:a});b.useEffect(function(){if(!t.equal(e,c.current.color)){var u=t.toHsva(e);c.current={hsva:u,color:e},s(u)}},[e,t]),b.useEffect(function(){var u;at(a,c.current.hsva)||t.equal(u=t.fromHsva(a),c.current.color)||(c.current={hsva:a,color:u},r(u))},[a,t,r]);var l=b.useCallback(function(u){s(function(d){return Object.assign({},d,u)})},[]);return[a,l]}var Rt=typeof window<"u"?b.useLayoutEffect:b.useEffect,It=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},Y=new Map,lt=function(t){Rt(function(){var e=t.current?t.current.ownerDocument:document;if(e!==void 0&&!Y.has(e)){var n=e.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Y.set(e,n);var r=It();r&&n.setAttribute("nonce",r),e.head.appendChild(n)}},[])},jt=function(t){var e=t.className,n=t.colorModel,r=t.color,o=r===void 0?n.defaultColor:r,a=t.onChange,s=V(t,["className","colorModel","color","onChange"]),c=b.useRef(null);lt(c);var l=ct(n,o,a),u=l[0],d=l[1],h=R(["react-colorful",e]);return f.createElement("div",_({},s,{ref:c,className:h}),f.createElement(ot,{hsva:u,onChange:d}),f.createElement(rt,{hue:u.h,onChange:d,className:"react-colorful__last-control"}))},zt={defaultColor:"000",toHsva:kt,fromHsva:function(t){return $t({h:t.h,s:t.s,v:t.v,a:1})},equal:St},Ft=function(t){return f.createElement(jt,_({},t,{colorModel:zt}))},Ht=function(t){var e=t.className,n=t.hsva,r=t.onChange,o={backgroundImage:"linear-gradient(90deg, "+H(Object.assign({},n,{a:0}))+", "+H(Object.assign({},n,{a:1}))+")"},a=R(["react-colorful__alpha",e]),s=p(100*n.a);return f.createElement("div",{className:a},f.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),f.createElement(G,{onMove:function(c){r({a:c.left})},onKey:function(c){r({a:$(n.a+c.left)})},"aria-label":"Alpha","aria-valuetext":s+"%","aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":"100"},f.createElement(W,{className:"react-colorful__alpha-pointer",left:n.a,color:H(n)})))},it=function(t){var e=t.className,n=t.colorModel,r=t.color,o=r===void 0?n.defaultColor:r,a=t.onChange,s=V(t,["className","colorModel","color","onChange"]),c=b.useRef(null);lt(c);var l=ct(n,o,a),u=l[0],d=l[1],h=R(["react-colorful",e]);return f.createElement("div",_({},s,{ref:c,className:h}),f.createElement(ot,{hsva:u,onChange:d}),f.createElement(rt,{hue:u.h,onChange:d}),f.createElement(Ht,{hsva:u,onChange:d,className:"react-colorful__last-control"}))},Pt={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Mt,fromHsva:H,equal:st},Lt=function(t){return f.createElement(it,_({},t,{colorModel:Pt}))},Tt={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Nt,fromHsva:function(t){var e=et(t);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},equal:st},Bt=function(t){return f.createElement(it,_({},t,{colorModel:Tt}))};const S=yt,ut={};for(const t of Object.keys(S))ut[S[t]]=t;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var ft=i;for(const t of Object.keys(i)){if(!("channels"in i[t]))throw new Error("missing channels property: "+t);if(!("labels"in i[t]))throw new Error("missing channel labels property: "+t);if(i[t].labels.length!==i[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:e,labels:n}=i[t];delete i[t].channels,delete i[t].labels,Object.defineProperty(i[t],"channels",{value:e}),Object.defineProperty(i[t],"labels",{value:n})}i.rgb.hsl=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(e,n,r),a=Math.max(e,n,r),s=a-o;let c,l;a===o?c=0:e===a?c=(n-r)/s:n===a?c=2+(r-e)/s:r===a&&(c=4+(e-n)/s),c=Math.min(c*60,360),c<0&&(c+=360);const u=(o+a)/2;return a===o?l=0:u<=.5?l=s/(a+o):l=s/(2-a-o),[c,l*100,u*100]};i.rgb.hsv=function(t){let e,n,r,o,a;const s=t[0]/255,c=t[1]/255,l=t[2]/255,u=Math.max(s,c,l),d=u-Math.min(s,c,l),h=function(g){return(u-g)/6/d+1/2};return d===0?(o=0,a=0):(a=d/u,e=h(s),n=h(c),r=h(l),s===u?o=r-n:c===u?o=1/3+e-r:l===u&&(o=2/3+n-e),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,u*100]};i.rgb.hwb=function(t){const e=t[0],n=t[1];let r=t[2];const o=i.rgb.hsl(t)[0],a=1/255*Math.min(e,Math.min(n,r));return r=1-1/255*Math.max(e,Math.max(n,r)),[o,a*100,r*100]};i.rgb.cmyk=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.min(1-e,1-n,1-r),a=(1-e-o)/(1-o)||0,s=(1-n-o)/(1-o)||0,c=(1-r-o)/(1-o)||0;return[a*100,s*100,c*100,o*100]};function Xt(t,e){return(t[0]-e[0])**2+(t[1]-e[1])**2+(t[2]-e[2])**2}i.rgb.keyword=function(t){const e=ut[t];if(e)return e;let n=1/0,r;for(const o of Object.keys(S)){const a=S[o],s=Xt(t,a);s<n&&(n=s,r=o)}return r};i.keyword.rgb=function(t){return S[t]};i.rgb.xyz=function(t){let e=t[0]/255,n=t[1]/255,r=t[2]/255;e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=e*.4124+n*.3576+r*.1805,a=e*.2126+n*.7152+r*.0722,s=e*.0193+n*.1192+r*.9505;return[o*100,a*100,s*100]};i.rgb.lab=function(t){const e=i.rgb.xyz(t);let n=e[0],r=e[1],o=e[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,s=500*(n-r),c=200*(r-o);return[a,s,c]};i.hsl.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;let o,a,s;if(n===0)return s=r*255,[s,s,s];r<.5?o=r*(1+n):o=r+n-r*n;const c=2*r-o,l=[0,0,0];for(let u=0;u<3;u++)a=e+1/3*-(u-1),a<0&&a++,a>1&&a--,6*a<1?s=c+(o-c)*6*a:2*a<1?s=o:3*a<2?s=c+(o-c)*(2/3-a)*6:s=c,l[u]=s*255;return l};i.hsl.hsv=function(t){const e=t[0];let n=t[1]/100,r=t[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const s=(r+n)/2,c=r===0?2*o/(a+o):2*n/(r+n);return[e,c*100,s*100]};i.hsv.rgb=function(t){const e=t[0]/60,n=t[1]/100;let r=t[2]/100;const o=Math.floor(e)%6,a=e-Math.floor(e),s=255*r*(1-n),c=255*r*(1-n*a),l=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,l,s];case 1:return[c,r,s];case 2:return[s,r,l];case 3:return[s,c,r];case 4:return[l,s,r];case 5:return[r,s,c]}};i.hsv.hsl=function(t){const e=t[0],n=t[1]/100,r=t[2]/100,o=Math.max(r,.01);let a,s;s=(2-n)*r;const c=(2-n)*o;return a=n*o,a/=c<=1?c:2-c,a=a||0,s/=2,[e,a*100,s*100]};i.hwb.rgb=function(t){const e=t[0]/360;let n=t[1]/100,r=t[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const s=Math.floor(6*e),c=1-r;a=6*e-s,s&1&&(a=1-a);const l=n+a*(c-n);let u,d,h;switch(s){default:case 6:case 0:u=c,d=l,h=n;break;case 1:u=l,d=c,h=n;break;case 2:u=n,d=c,h=l;break;case 3:u=n,d=l,h=c;break;case 4:u=l,d=n,h=c;break;case 5:u=c,d=n,h=l;break}return[u*255,d*255,h*255]};i.cmyk.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100,o=t[3]/100,a=1-Math.min(1,e*(1-o)+o),s=1-Math.min(1,n*(1-o)+o),c=1-Math.min(1,r*(1-o)+o);return[a*255,s*255,c*255]};i.xyz.rgb=function(t){const e=t[0]/100,n=t[1]/100,r=t[2]/100;let o,a,s;return o=e*3.2406+n*-1.5372+r*-.4986,a=e*-.9689+n*1.8758+r*.0415,s=e*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[o*255,a*255,s*255]};i.xyz.lab=function(t){let e=t[0],n=t[1],r=t[2];e/=95.047,n/=100,r/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(e-n),s=200*(n-r);return[o,a,s]};i.lab.xyz=function(t){const e=t[0],n=t[1],r=t[2];let o,a,s;a=(e+16)/116,o=n/500+a,s=a-r/200;const c=a**3,l=o**3,u=s**3;return a=c>.008856?c:(a-16/116)/7.787,o=l>.008856?l:(o-16/116)/7.787,s=u>.008856?u:(s-16/116)/7.787,o*=95.047,a*=100,s*=108.883,[o,a,s]};i.lab.lch=function(t){const e=t[0],n=t[1],r=t[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const s=Math.sqrt(n*n+r*r);return[e,s,o]};i.lch.lab=function(t){const e=t[0],n=t[1],o=t[2]/360*2*Math.PI,a=n*Math.cos(o),s=n*Math.sin(o);return[e,a,s]};i.rgb.ansi16=function(t,e=null){const[n,r,o]=t;let a=e===null?i.rgb.hsv(t)[2]:e;if(a=Math.round(a/50),a===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(s+=60),s};i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])};i.rgb.ansi256=function(t){const e=t[0],n=t[1],r=t[2];return e===n&&n===r?e<8?16:e>248?231:Math.round((e-8)/247*24)+232:16+36*Math.round(e/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};i.ansi16.rgb=function(t){let e=t%10;if(e===0||e===7)return t>50&&(e+=3.5),e=e/10.5*255,[e,e,e];const n=(~~(t>50)+1)*.5,r=(e&1)*n*255,o=(e>>1&1)*n*255,a=(e>>2&1)*n*255;return[r,o,a]};i.ansi256.rgb=function(t){if(t>=232){const a=(t-232)*10+8;return[a,a,a]}t-=16;let e;const n=Math.floor(t/36)/5*255,r=Math.floor((e=t%36)/6)/5*255,o=e%6/5*255;return[n,r,o]};i.rgb.hex=function(t){const n=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};i.hex.rgb=function(t){const e=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!e)return[0,0,0];let n=e[0];e[0].length===3&&(n=n.split("").map(c=>c+c).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,s=r&255;return[o,a,s]};i.rgb.hcg=function(t){const e=t[0]/255,n=t[1]/255,r=t[2]/255,o=Math.max(Math.max(e,n),r),a=Math.min(Math.min(e,n),r),s=o-a;let c,l;return s<1?c=a/(1-s):c=0,s<=0?l=0:o===e?l=(n-r)/s%6:o===n?l=2+(r-e)/s:l=4+(e-n)/s,l/=6,l%=1,[l*360,s*100,c*100]};i.hsl.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=n<.5?2*e*n:2*e*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[t[0],r*100,o*100]};i.hsv.hcg=function(t){const e=t[1]/100,n=t[2]/100,r=e*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[t[0],r*100,o*100]};i.hcg.rgb=function(t){const e=t[0]/360,n=t[1]/100,r=t[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=e%1*6,s=a%1,c=1-s;let l=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=c,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=c,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=c}return l=(1-n)*r,[(n*o[0]+l)*255,(n*o[1]+l)*255,(n*o[2]+l)*255]};i.hcg.hsv=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);let o=0;return r>0&&(o=e/r),[t[0],o*100,r*100]};i.hcg.hsl=function(t){const e=t[1]/100,r=t[2]/100*(1-e)+.5*e;let o=0;return r>0&&r<.5?o=e/(2*r):r>=.5&&r<1&&(o=e/(2*(1-r))),[t[0],o*100,r*100]};i.hcg.hwb=function(t){const e=t[1]/100,n=t[2]/100,r=e+n*(1-e);return[t[0],(r-e)*100,(1-r)*100]};i.hwb.hcg=function(t){const e=t[1]/100,r=1-t[2]/100,o=r-e;let a=0;return o<1&&(a=(r-o)/(1-o)),[t[0],o*100,a*100]};i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]};i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]};i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]};i.gray.hsl=function(t){return[0,0,t[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(t){return[0,100,t[0]]};i.gray.cmyk=function(t){return[0,0,0,t[0]]};i.gray.lab=function(t){return[t[0],0,0]};i.gray.hex=function(t){const e=Math.round(t[0]/100*255)&255,r=((e<<16)+(e<<8)+e).toString(16).toUpperCase();return"000000".substring(r.length)+r};i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const P=ft;function Dt(){const t={},e=Object.keys(P);for(let n=e.length,r=0;r<n;r++)t[e[r]]={distance:-1,parent:null};return t}function Kt(t){const e=Dt(),n=[t];for(e[t].distance=0;n.length;){const r=n.pop(),o=Object.keys(P[r]);for(let a=o.length,s=0;s<a;s++){const c=o[s],l=e[c];l.distance===-1&&(l.distance=e[r].distance+1,l.parent=r,n.unshift(c))}}return e}function qt(t,e){return function(n){return e(t(n))}}function Vt(t,e){const n=[e[t].parent,t];let r=P[e[t].parent][t],o=e[t].parent;for(;e[o].parent;)n.unshift(e[o].parent),r=qt(P[e[o].parent][o],r),o=e[o].parent;return r.conversion=n,r}var Gt=function(t){const e=Kt(t),n={},r=Object.keys(e);for(let o=r.length,a=0;a<o;a++){const s=r[a];e[s].parent!==null&&(n[s]=Vt(s,e))}return n};const K=ft,Wt=Gt,M={},At=Object.keys(K);function Ut(t){const e=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),t(n))};return"conversion"in t&&(e.conversion=t.conversion),e}function Yt(t){const e=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=t(n);if(typeof o=="object")for(let a=o.length,s=0;s<a;s++)o[s]=Math.round(o[s]);return o};return"conversion"in t&&(e.conversion=t.conversion),e}At.forEach(t=>{M[t]={},Object.defineProperty(M[t],"channels",{value:K[t].channels}),Object.defineProperty(M[t],"labels",{value:K[t].labels});const e=Wt(t);Object.keys(e).forEach(r=>{const o=e[r];M[t][r]=Yt(o),M[t][r].raw=Ut(o)})});var Jt=M;const x=xt(Jt);var Qt=w.div({position:"relative",maxWidth:250}),Zt=w(Z)({position:"absolute",zIndex:1,top:4,left:4}),te=w.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ee=w(bt)(({theme:t})=>({fontFamily:t.typography.fonts.base})),ne=w.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),re=w.div(({theme:t,active:e})=>({width:16,height:16,boxShadow:e?`${t.appBorderColor} 0 0 0 1px inset, ${t.textMutedColor}50 0 0 0 4px`:`${t.appBorderColor} 0 0 0 1px inset`,borderRadius:t.appBorderRadius})),oe=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,J=({value:t,active:e,onClick:n,style:r,...o})=>{let a=`linear-gradient(${t}, ${t}), ${oe}, linear-gradient(#fff, #fff)`;return f.createElement(re,{...o,active:e,onClick:n,style:{...r,backgroundImage:a}})},ae=w(vt.Input)(({theme:t})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:t.typography.fonts.base})),se=w(pt)(({theme:t})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:t.input.color})),ht=(t=>(t.RGB="rgb",t.HSL="hsl",t.HEX="hex",t))(ht||{}),z=Object.values(ht),ce=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,le=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ie=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,q=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ue=/^\s*#?([0-9a-f]{3})\s*$/i,fe={hex:Ft,rgb:Bt,hsl:Lt},F={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},Q=t=>{let e=t==null?void 0:t.match(ce);if(!e)return[0,0,0,1];let[,n,r,o,a=1]=e;return[n,r,o,a].map(Number)},C=t=>{if(!t)return;let e=!0;if(le.test(t)){let[s,c,l,u]=Q(t),[d,h,g]=x.rgb.hsl([s,c,l])||[0,0,0];return{valid:e,value:t,keyword:x.rgb.keyword([s,c,l]),colorSpace:"rgb",rgb:t,hsl:`hsla(${d}, ${h}%, ${g}%, ${u})`,hex:`#${x.rgb.hex([s,c,l]).toLowerCase()}`}}if(ie.test(t)){let[s,c,l,u]=Q(t),[d,h,g]=x.hsl.rgb([s,c,l])||[0,0,0];return{valid:e,value:t,keyword:x.hsl.keyword([s,c,l]),colorSpace:"hsl",rgb:`rgba(${d}, ${h}, ${g}, ${u})`,hsl:t,hex:`#${x.hsl.hex([s,c,l]).toLowerCase()}`}}let n=t.replace("#",""),r=x.keyword.rgb(n)||x.hex.rgb(n),o=x.rgb.hsl(r),a=t;if(/[^#a-f0-9]/i.test(t)?a=n:q.test(t)&&(a=`#${n}`),a.startsWith("#"))e=q.test(a);else try{x.keyword.hex(a)}catch{e=!1}return{valid:e,value:a,keyword:x.rgb.keyword(r),colorSpace:"hex",rgb:`rgba(${r[0]}, ${r[1]}, ${r[2]}, 1)`,hsl:`hsla(${o[0]}, ${o[1]}%, ${o[2]}%, 1)`,hex:a}},he=(t,e,n)=>{if(!t||!(e!=null&&e.valid))return F[n];if(n!=="hex")return(e==null?void 0:e[n])||F[n];if(!e.hex.startsWith("#"))try{return`#${x.keyword.hex(e.hex)}`}catch{return F.hex}let r=e.hex.match(ue);if(!r)return q.test(e.hex)?e.hex:F.hex;let[o,a,s]=r[1].split("");return`#${o}${o}${a}${a}${s}${s}`},de=(t,e)=>{let[n,r]=b.useState(t||""),[o,a]=b.useState(()=>C(n)),[s,c]=b.useState((o==null?void 0:o.colorSpace)||"hex");b.useEffect(()=>{let h=t||"",g=C(h);r(h),a(g),c((g==null?void 0:g.colorSpace)||"hex")},[t]);let l=b.useMemo(()=>he(n,o,s).toLowerCase(),[n,o,s]),u=b.useCallback(h=>{let g=C(h),k=(g==null?void 0:g.value)||h||"";r(k),k===""&&(a(void 0),e(void 0)),g&&(a(g),c(g.colorSpace),e(g.value))},[e]),d=b.useCallback(()=>{let h=z.indexOf(s)+1;h>=z.length&&(h=0),c(z[h]);let g=(o==null?void 0:o[z[h]])||"";r(g),e(g)},[o,s,e]);return{value:n,realValue:l,updateValue:u,color:o,colorSpace:s,cycleColorSpace:d}},L=t=>t.replace(/\s*/,"").toLowerCase(),ge=(t,e,n)=>{let[r,o]=b.useState(e!=null&&e.valid?[e]:[]);b.useEffect(()=>{e===void 0&&o([])},[e]);let a=b.useMemo(()=>(t||[]).map(c=>typeof c=="string"?C(c):c.title?{...C(c.color),keyword:c.title}:C(c.color)).concat(r).filter(Boolean).slice(-27),[t,r]),s=b.useCallback(c=>{c!=null&&c.valid&&(a.some(l=>L(l[n])===L(c[n]))||o(l=>l.concat(c)))},[n,a]);return{presets:a,addPreset:s}},be=({name:t,value:e,onChange:n,onFocus:r,onBlur:o,presetColors:a,startOpen:s=!1})=>{let c=b.useCallback(wt(n,200),[n]),{value:l,realValue:u,updateValue:d,color:h,colorSpace:g,cycleColorSpace:k}=de(e,c),{presets:I,addPreset:E}=ge(a,h,g),m=fe[g];return f.createElement(Qt,null,f.createElement(Zt,{startOpen:s,closeOnOutsideClick:!0,onVisibleChange:()=>E(h),tooltip:f.createElement(te,null,f.createElement(m,{color:u==="transparent"?"#000000":u,onChange:d,onFocus:r,onBlur:o}),I.length>0&&f.createElement(ne,null,I.map((v,y)=>f.createElement(Z,{key:`${v.value}-${y}`,hasChrome:!1,tooltip:f.createElement(ee,{note:v.keyword||v.value})},f.createElement(J,{value:v[g],active:h&&L(v[g])===L(h[g]),onClick:()=>d(v.value)})))))},f.createElement(J,{value:u,style:{margin:4}})),f.createElement(ae,{id:mt(t),value:l,onChange:v=>d(v.target.value),onFocus:v=>v.target.select(),placeholder:"Choose color..."}),l?f.createElement(se,{icon:"markup",onClick:k}):null)},Ne=be;export{be as ColorControl,Ne as default};
