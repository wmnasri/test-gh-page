import{j as s,a as u,b as j}from"./index-BzhTyqaY.js";import{F as P}from"./formik.esm-DgjVmEdT.js";import{f as U,i as _,g as z,C as A,b as G}from"./useGetConsentQuery-BHaQcDt9.js";import{u as k}from"./useQueryObserver-BYynaL_B.js";import{S as n}from"./index-R4VhrMC6.js";import"./react-spring-web.esm-DsMzZgQq.js";import"./index-0X8QCd_i.js";import{C as L}from"./main-BbuvrTKi.js";import{u as Q}from"./useResponsive-DQBhMvnf.js";import"./index-m5SwaE3w.js";import{a as R,A as q}from"./AxiosInstance-BZZbXQ8a.js";/* empty css              *//* empty css                         */import{u as B}from"./useTranslation-BYGhmYBG.js";import{u as H}from"./useMutation-DnofRurj.js";function ms({type:t,cguLink:c,cguOnly:a,displayCgu:d,modalTitle:f,onSubmit:C,width:E,isLoading:V,hideBtnSubmit:D=!1,buttonSubmit:r,onClick:F,codeParcours:y}){var x,v,b,g;const{t:i}=B(),N=Q(),o=t==="modal",w=y!=="infosPerso"?"getConsentQuery":"getInfosPersoConsentQuery",e=k(w),h=U((v=(x=e.data)==null?void 0:x.data)==null?void 0:v.typesUsages),m={consents:_({translate:i,data:h||[]})};t==="modal"&&(m.isCGU=d);const p=o&&a,O=z(m),{isIntranet:S}=window.tsme_data;if(e.isLoading&&t==="page")return s.jsxDEV("div",{className:"list-consents",children:[s.jsxDEV(n,{width:"255px",height:"30px",className:"mt-5"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:84,columnNumber:9},this),s.jsxDEV(n,{width:"100%",height:"40vh",className:"mt-2"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:85,columnNumber:9},this),s.jsxDEV(n,{width:"255px",height:"30px",className:"mt-4"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:86,columnNumber:9},this),s.jsxDEV(n,{width:"100%",height:"40vh",className:"mt-2"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:87,columnNumber:9},this),s.jsxDEV("div",{className:"d-flex flex-center justify-content-center mt-2",children:s.jsxDEV(n,{width:"125px",height:"3rem"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:89,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:88,columnNumber:9},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:83,columnNumber:7},this);const T={cgu:d,consents:h,cguValue:!1,statusConsents:m.consents};return a||e!=null&&e.isFetched&&Object.keys(((g=(b=e.data)==null?void 0:b.data)==null?void 0:g.typesUsages)||{}).length>0?s.jsxDEV(P,{initialValues:T,validationSchema:O,onSubmit:C,enableReinitialize:!0,validateOnMount:!1,validateOnChange:!0,children:({handleSubmit:I,values:M})=>{const{cgu:l}=M;return s.jsxDEV("form",{onSubmit:I,"data-cy":"consents-form",children:s.jsxDEV("div",{className:u("list-consents",{cguOnly:"cgu-only-content",fullWidth:E==="full"}),children:[f&&!a&&s.jsxDEV(j.SzTypographie,{variant:"H3",size:"L",weight:"medium",className:u("modal-title mb-4",{cguOnly:"cgu-only-title"}),children:f||""},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:129,columnNumber:19},this),s.jsxDEV(A,{cguOnly:a,cguLink:c,queryName:w},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:141,columnNumber:17},this),o&&s.jsxDEV(G,{cguLink:c,isCGUOnly:p},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:148,columnNumber:19},this),!D&&s.jsxDEV("div",{className:u("mt-4",{"text-right":!l&&!N,"text-left":o&&!l&&N,"d-flex submit-modal-button-with-cgu":o&&l}),children:s.jsxDEV(j.SzButton,{variant:"contained",className:(r==null?void 0:r.position)==="left"?"ml-4":"mx-auto",type:"submit",loader:V,"data-cy":"consents-submit-btn",border:"soft",onClick:F,disabled:S,children:i(p?"consent.approuve":"consent.submit")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:159,columnNumber:21},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:152,columnNumber:19},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:122,columnNumber:15},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:121,columnNumber:13},this)}},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consent/ConsentForm.tsx",lineNumber:109,columnNumber:7},this):null}function ls(){return H(t=>R.post(q.POST_VALIDATE_CONSENT,t,{headers:{post:{"Content-Type":L}}}))}export{ms as C,ls as u};
