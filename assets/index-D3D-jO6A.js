import{j as e,b as a}from"./index-BAjkLHRS.js";import{r as F}from"./index-Djf8kdDz.js";import{M as R,u as A,Y as G,C as L,S as W,R as Y}from"./react-spring-web.esm-BXduOQz-.js";import{u as q,i as B,f as H,g as J,a as X}from"./useGetConsentQuery-BA1jywzu.js";import{u as T}from"./useTranslation-Cclpl_OC.js";import{u as Z,C as $}from"./useValidateConsent-DlMJVMo7.js";import{u as Q}from"./useSearchParams-B1N2HOwe.js";import"./index-BcQ2dhrg.js";import"./index-CCqWUn_M.js";import"./throttle-BPCfK1uX.js";import"./_baseIsEqual-8OBVMFu7.js";import"./iframe-fNLlJobk.js";import"../sb-preview/runtime.js";/* empty css              *//* empty css                         */import"./useQueryObserver-JDa9NgZY.js";const ee=({statusCode:i,isValidateConsent:m=!1,isKoConsent:r=!1,isEmbed:f=!1})=>{const{t:n}=T(),o=parseInt(i),l=!m&&!r&&(o===404||!o),c=o>=400&&o!==404;return e.jsxDEV("div",{className:"consent-message-container",children:e.jsxDEV("div",{className:"container",children:e.jsxDEV("div",{className:"block",children:[e.jsxDEV("div",{className:"message",children:[e.jsxDEV("div",{className:"icon",children:[m&&e.jsxDEV(a.SzIcon,{variant:"bold",icon:"check-circle-1"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:26,columnNumber:17},void 0),(c||l)&&e.jsxDEV(a.SzIcon,{variant:"bold",icon:"remove"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:29,columnNumber:17},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:24,columnNumber:13},void 0),e.jsxDEV("div",{className:"content",children:[m&&e.jsxDEV(a.SzTypographie,{className:"title",children:n("consent.confirmation.success.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:34,columnNumber:17},void 0),r&&(f?e.jsxDEV(a.SzTypographie,{className:"title",children:n("consent.ko_content")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:44,columnNumber:19},void 0):e.jsxDEV(a.SzTypographie,{className:"title",children:n("consent.confirmation.ko_content")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:40,columnNumber:19},void 0)),l&&e.jsxDEV(a.SzTypographie,{className:"title",children:e.jsxDEV(R,{content:n("consent.confirmation.404.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:50,columnNumber:19},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:49,columnNumber:17},void 0),c&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV(a.SzTypographie,{className:"title",children:n("consent.confirmation.500.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:55,columnNumber:19},void 0),e.jsxDEV(a.SzTypographie,{children:n("consent.confirmation.500.description")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:58,columnNumber:19},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:54,columnNumber:17},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:32,columnNumber:13},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:23,columnNumber:11},void 0),e.jsxDEV("div",{className:"line"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:65,columnNumber:11},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:22,columnNumber:9},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:21,columnNumber:7},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/consent/message/index.jsx",lineNumber:20,columnNumber:5},void 0)},we=()=>{var j,b,g,v,h,E,V,D,S;const i=F.useRef(null),{t:m}=T(),r=Q(),f=A(),n=r.get("reference")||null,o="landingPage",{recaptchaInvisiblePublicKey:l,recaptchaEnabled:c}=window.tsme_data,x={codeParcours:o,reference:n,typeUsage:r.get("type_usage")||null,codeUsage:r.get("code_usage")||null},{data:t,isError:p,...d}=q({params:x,options:{enabled:n!==null}}),w=((j=t==null?void 0:t.data)==null?void 0:j.message)===G.KO_CONSENT,{isError:O,...s}=Z(),C=((g=(b=s==null?void 0:s.data)==null?void 0:b.data)==null?void 0:g.message)==="OK",M=w||p||C||O,P=async N=>{var y,k,z;const u=X({params:N,reference:n,codeParcours:o}),U=((y=Object.keys(u))==null?void 0:y.length)>0,K=((k=u==null?void 0:u.codeUsages)==null?void 0:k.length)>0;c&&(x["g-recaptcha-response"]=await((z=i==null?void 0:i.current)==null?void 0:z.executeAsync())),U&&K&&s.mutate(u)},_=B({translate:m,data:H(((v=t==null?void 0:t.data)==null?void 0:v.typesUsages)||{})}),I=J({consents:_});if(d.isLoading)return e.jsxDEV(L,{children:e.jsxDEV(W,{width:f?"100%":744,height:300,className:"d-flex mb-4 mx-auto"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:91,columnNumber:9},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:90,columnNumber:7},void 0);if(M||!n||p){const N=((h=s==null?void 0:s.data)==null?void 0:h.status)||((V=(E=s==null?void 0:s.error)==null?void 0:E.response)==null?void 0:V.status)||((S=(D=d==null?void 0:d.error)==null?void 0:D.response)==null?void 0:S.status)||null;return e.jsxDEV(ee,{statusCode:N,isValidateConsent:s==null?void 0:s.isSuccess,isKoConsent:w},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:108,columnNumber:7},void 0)}return e.jsxDEV("div",{className:"consents-page tsme-container",children:e.jsxDEV($,{type:"page",dynamicValidationSchema:I,onSubmit:P,children:c&&e.jsxDEV(Y,{ref:i,size:"invisible",sitekey:l,badge:"bottomleft"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:124,columnNumber:11},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:118,columnNumber:7},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/index.tsx",lineNumber:117,columnNumber:5},void 0)};export{we as default};
