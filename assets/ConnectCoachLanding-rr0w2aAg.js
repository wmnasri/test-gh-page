import{j as e,b as n,a as O}from"./index-BAjkLHRS.js";import{r as w}from"./index-Djf8kdDz.js";import{V as U,$ as M,L as z,u as R,a as A,y as _,S as B,C as H,U as Z,aw as $,t as I}from"./react-spring-web.esm-BXduOQz-.js";/* empty css              *//* empty css                         */import{F as D}from"./FormError-B1L9786s.js";import{F as K}from"./index-CMwthcxG.js";import{u as P}from"./useTranslation-Cclpl_OC.js";import{b as W,u as X,o as q,U as J}from"./usePostCustomerAdditionalInfos-D8Abe1De.js";import"./index-BcQ2dhrg.js";import"./index-CCqWUn_M.js";import"./throttle-BPCfK1uX.js";import"./_baseIsEqual-8OBVMFu7.js";import"./iframe-fNLlJobk.js";import"../sb-preview/runtime.js";import"./index-CnVkoL_H.js";import"./index-CzMjzDBE.js";import"./cross-circle-D-gJHWvz.js";import"./useInterweave-CyiDgcKg.js";const Q="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M21.75%203.75H2.25C1.42157%203.75%200.75%204.42157%200.75%205.25V18.75C0.75%2019.5784%201.42157%2020.25%202.25%2020.25H21.75C22.5784%2020.25%2023.25%2019.5784%2023.25%2018.75V5.25C23.25%204.42157%2022.5784%203.75%2021.75%203.75Z'%20stroke='%233D466C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.75%2015L6.9%209.75L9.75%2015L12.75%2012L15.75%2015L20.25%208.25'%20stroke='%233D466C'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Y="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%2011.25C22.7614%2011.25%2025%209.01142%2025%206.25C25%203.48858%2022.7614%201.25%2020%201.25C17.2386%201.25%2015%203.48858%2015%206.25C15%209.01142%2017.2386%2011.25%2020%2011.25Z'%20stroke='%233D466C'%20stroke-width='2.5'/%3e%3cpath%20d='M16.6839%2030.1647C16.6331%2029.6416%2016.2604%2029.2061%2015.7513%2029.0751L12.9167%2028.3458V18.0952C12.9167%2016.1264%2014.4668%2014.5833%2016.2963%2014.5833H23.7037C25.5332%2014.5833%2027.0833%2016.1264%2027.0833%2018.0952V28.3458L24.2487%2029.0751C23.7396%2029.2061%2023.3669%2029.6416%2023.316%2030.1647L22.4814%2038.75H17.5186L16.6839%2030.1647Z'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linejoin='round'/%3e%3c/svg%3e",ee="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21651_287)'%3e%3cpath%20d='M6.25%2038.75L2.91667%2034.7833C1.84486%2033.4571%201.257%2031.8052%201.25%2030.1V21.4833C1.25%2020.8203%201.51339%2020.1844%201.98223%2019.7156C2.45107%2019.2467%203.08696%2018.9833%203.75%2018.9833V18.9833C4.41304%2018.9833%205.04893%2019.2467%205.51777%2019.7156C5.98661%2020.1844%206.25%2020.8203%206.25%2021.4833V27.9333'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M13.75%2038.75V33.75C13.7532%2032.2658%2013.3121%2030.8146%2012.4833%2029.5833L10.5833%2026.6667C10.4222%2026.3892%2010.2051%2026.1482%209.94598%2025.959C9.68682%2025.7698%209.39117%2025.6365%209.07779%2025.5676C8.76441%2025.4987%208.44013%2025.4956%208.12549%2025.5585C7.81085%2025.6215%207.51272%2025.7491%207.25%2025.9333V25.9333C6.7788%2026.2501%206.43929%2026.7279%206.29508%2027.2771C6.15088%2027.8263%206.21189%2028.4092%206.46667%2028.9167L8.71667%2032.6667'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M33.75%2038.75L37.0833%2034.7833C38.1551%2033.4571%2038.743%2031.8052%2038.75%2030.1V21.4833C38.75%2020.8203%2038.4866%2020.1844%2038.0178%2019.7156C37.5489%2019.2467%2036.913%2018.9833%2036.25%2018.9833C35.587%2018.9833%2034.9511%2019.2467%2034.4822%2019.7156C34.0134%2020.1844%2033.75%2020.8203%2033.75%2021.4833V27.9333'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.25%2038.75V33.75C26.2468%2032.2658%2026.6879%2030.8146%2027.5167%2029.5833L29.4167%2026.6667C29.5778%2026.3892%2029.7949%2026.1482%2030.054%2025.959C30.3132%2025.7698%2030.6088%2025.6365%2030.9222%2025.5676C31.2356%2025.4987%2031.5599%2025.4956%2031.8745%2025.5585C32.1892%2025.6215%2032.4873%2025.7491%2032.75%2025.9333V25.9333C33.2212%2026.2501%2033.5607%2026.7279%2033.7049%2027.2771C33.8491%2027.8263%2033.7881%2028.4092%2033.5333%2028.9167L31.2833%2032.6667'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M27.4333%2015C27.4333%2016.9714%2026.6502%2018.8621%2025.2562%2020.2562C23.8621%2021.6502%2021.9714%2022.4333%2020%2022.4333C18.0286%2022.4333%2016.1379%2021.6502%2014.7438%2020.2562C13.3498%2018.8621%2012.5667%2016.9714%2012.5667%2015C12.5667%208.68333%2018.9333%201.25%2020%201.25C21.0667%201.25%2027.4333%208.68333%2027.4333%2015Z'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M20%2017.5C19.337%2017.5%2018.7011%2017.2366%2018.2322%2016.7678C17.7634%2016.2989%2017.5%2015.663%2017.5%2015'%20stroke='%233D466C'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21651_287'%3e%3crect%20width='40'%20height='40'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ne=({initialValues:c,validationSchema:l,onSubmit:m,nextButton:r,previousButton:b,defaultPeopleCount:o,peopleCountOptions:f,displayConsent:N,canUnsubscribe:u,onConnectUnsubscribeUrl:v,isPrivacyPolicy:g,privacyPolicyUrl:x})=>{const{t}=P();return e.jsxDEV(U,{initialValues:c,validateOnBlur:!1,validateOnChange:!0,validationSchema:l,onSubmit:m,enableReinitialize:!0,children:({handleSubmit:j,handleChange:y,setFieldValue:d,values:i,errors:s,touched:h})=>{const p=a=>{d("housingType",a.target.value)},V=a=>{d("peopleCount",a.label)};return e.jsxDEV("form",{id:"onConnectCoach",onSubmit:j,className:"on-connect-coach-form",children:[e.jsxDEV("div",{className:"mb-3",children:[e.jsxDEV(n.SzTypographie,{className:"mb-2",children:t("personalInfos.form.on-connect.people_count_label")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:80,columnNumber:15},void 0),e.jsxDEV("div",{className:"col-12 col-lg-7 px-0 my-4",children:e.jsxDEV(n.SzSelect,{name:"peopleCount",id:"peopleCount",placeholder:t("personalInfos.form.on-connect.people_count_placeholder"),defaultValue:o,options:f,value:i.peopleCount||"",onChange:V,className:"mb-2"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:84,columnNumber:17},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:83,columnNumber:15},void 0),e.jsxDEV(D,{field:"peopleCount",customDisplay:h.peopleCount&&s.peopleCount},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:97,columnNumber:15},void 0),e.jsxDEV("div",{className:"mb-3",children:[e.jsxDEV(n.SzTypographie,{className:"mb-2",children:t("personalInfos.form.on-connect.housing_type")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:102,columnNumber:17},void 0),e.jsxDEV("div",{className:"d-flex mb-2",children:[e.jsxDEV(n.SzRadio,{id:"housingTypeHouse",name:"housingType",label:t("personalInfos.form.on-connect.type_house"),value:"M",checked:i.housingType==="M",onChange:p},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:106,columnNumber:19},void 0),e.jsxDEV(n.SzRadio,{className:"ml-3",id:"housingTypeApartment",name:"housingType",label:t("personalInfos.form.on-connect.type_apartment"),value:"A",checked:i.housingType==="A",onChange:p},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:114,columnNumber:19},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:105,columnNumber:17},void 0),e.jsxDEV(D,{field:"housingType",customDisplay:h.housingType&&s.housingType},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:124,columnNumber:17},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:101,columnNumber:15},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:79,columnNumber:13},void 0),N&&e.jsxDEV("div",{className:"col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3",children:[e.jsxDEV(n.SzCheckbox,{id:"consentGiven",name:"consentGiven",label:t("personalInfos.form.on-connect.consent"),type:"checkbox",checked:i.consentGiven||!1,onChange:y},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:132,columnNumber:17},void 0),s.consentGiven&&h.consentGiven?e.jsxDEV("div",{"data-cy":"error-consentGiven",role:"alert",children:e.jsxDEV(n.SzTypographie,{variant:"caption",color:"danger",className:"mb-2",children:t(s.consentGiven)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:142,columnNumber:21},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:141,columnNumber:19},void 0):e.jsxDEV(D,{field:"consentGiven"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:151,columnNumber:19},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:131,columnNumber:15},void 0),u&&e.jsxDEV("div",{className:"col-12 mt-3 px-0 border-top border-1 border-gray-100 pt-3",children:e.jsxDEV(n.SzTypographie,{variant:"caption",weight:"regular",size:"M",children:e.jsxDEV(M,{i18nKey:"personalInfos.form.on-connect.unsubscribe.link",components:{redirect:e.jsxDEV(z,{id:"on-connect-unusubscribe-btn",decorate:!0,to:v||"#"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:162,columnNumber:25},void 0)}},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:158,columnNumber:19},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:157,columnNumber:17},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:156,columnNumber:15},void 0),g&&e.jsxDEV(n.SzTypographie,{variant:"caption",weight:"regular",size:"M",className:"mt-3",children:e.jsxDEV(M,{i18nKey:"loginReset.login.step4.form.mobilePhone.privacy_policy",components:{redirect:e.jsxDEV(z,{className:"font-family-medium",decorate:!0,target:"_blank",to:x},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:186,columnNumber:23},void 0)}},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:180,columnNumber:17},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:174,columnNumber:15},void 0),e.jsxDEV(K,{previous:b,next:r},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:198,columnNumber:13},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:74,columnNumber:11},void 0)}},void 0,!1,{fileName:"/usr/var/www/assets/js/components/ConnectCoachForm/index.tsx",lineNumber:47,columnNumber:5},void 0)},se=ne;function je(){var L,S,F,T;const[c,l]=w.useState(!1),[m,r]=w.useState(!1),b=R(),{t:o}=P(),f=A(),N=[{imgSrc:Q,text:o("on-connect-landing.advice-1")},{imgSrc:Y,text:o("on-connect-landing.advice-2")},{imgSrc:ee,text:o("on-connect-landing.advice-3")}],{data:u,isFetched:v,isLoading:g,isError:x}=W({},"?services[]=smartcoach"),t=((S=(L=u==null?void 0:u.data)==null?void 0:L.content)==null?void 0:S.smartcoach)||"",j=$.ELIGIBLE===t;(x||v&&!j)&&f.push(_(I.ACCOUNT_CONSUMPTION_TR));const{mutate:y,isLoading:d,isError:i,isSuccess:s}=X("postSmartCoachAddInfoHistoConso"),h=E=>{const C={...E,useCommunityHotWater:"1"};y(C)},p={peopleCount:"",housingType:"",consentGiven:!1},V=[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"},{label:"6",value:"6"},{label:"7",value:"7"},{label:"8",value:"8"},{label:"9",value:"9"},{label:"10+",value:"10+"}],{privacy_policy:a}=(T=(F=window.tsme_data)==null?void 0:F.footer)==null?void 0:T.links_bottom,{isIntranet:k}=window.tsme_data,G={label:o("on-connect-landing.subscribe_form.btn_label"),align:"right",loader:d,disabled:k||d};return w.useEffect(()=>{(s||i)&&r(!0)},[s,i]),g?e.jsxDEV(n.SzCard,{className:"col-12 my-5 px-0 px-md-4 bg-white align-items-center",children:e.jsxDEV(B,{count:1,width:"100%",height:500},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:115,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:114,columnNumber:7},this):e.jsxDEV(H,{fullscreen:!0,tag:"main",className:"bg-white px-0 py-lg-0 overflow-hidden",minHeight:"initial",id:"connect-coach-landing",children:e.jsxDEV("div",{className:"connect-coach-landing-container",children:[e.jsxDEV("div",{className:"connect-coach-circle-container",children:[e.jsxDEV("div",{className:"circle bg-blue-03"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:130,columnNumber:11},this),e.jsxDEV(Z,{size:"sm",color:"blue-default",position:"39"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:131,columnNumber:11},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:129,columnNumber:9},this),e.jsxDEV(H,{tag:"div",className:"d-flex flex-column flex-lg-row py-0",minHeight:"initial",children:[e.jsxDEV("div",{className:"col-12 col-lg-7 px-0 new-line",children:[e.jsxDEV(n.SzTypographie,{variant:"H1",weight:"bold",size:b?"L":"XL",className:"mb-4 mb-lg-5",children:o("on-connect-landing.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:139,columnNumber:13},this),e.jsxDEV(n.SzTypographie,{variant:"H3",size:"L",weight:"medium",className:"mb-3 mb-lg-4",tag:"h2",children:o("on-connect-landing.subtitle")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:147,columnNumber:13},this),e.jsxDEV("div",{className:"advices",children:N.map((E,C)=>w.createElement(oe,{...E,key:C,dataCy:`advice-item-${C+1}`}))},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:156,columnNumber:13},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:138,columnNumber:11},this),e.jsxDEV("div",{className:"col-12 col-lg-5 px-0 pl-lg-4",children:e.jsxDEV("div",{className:"bg-gray-100 rounded-3 px-3 py-4 p-lg-5 mt-5 mt-lg-0","data-cy":"connect-coach-subscribe-block",children:[e.jsxDEV(n.SzTypographie,{variant:"H3",size:"M",weight:"medium",children:o("on-connect-landing.subscribe_form.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:171,columnNumber:15},this),e.jsxDEV(se,{initialValues:p,validationSchema:q,onSubmit:h,nextButton:G,peopleCountOptions:V,defaultPeopleCount:{label:"",value:""},displayConsent:!0,canUnsubscribe:!1,isPrivacyPolicy:!0,privacyPolicyUrl:a==null?void 0:a.link},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:174,columnNumber:15},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:167,columnNumber:13},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:166,columnNumber:11},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:133,columnNumber:9},this),e.jsxDEV(n.SzModal,{show:m,size:"lg",backdrop:!0,centered:!0,scrollable:!0,border:"smooth",fullscreen:"md",title:"",className:O("modal-consent sds-legacy-layout",{"hide-btn-close":c}),id:`connect-coach-subscribe-${s?"success":"error"}`,children:e.jsxDEV(J,{type:"on-connect",sourceType:"histoConso",success:s,toRedirect:s?_(I.ACCOUNT_CONSUMPTION_TR):!1,onHideCloseModal:s?l:!1,setShowModal:r},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:203,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:189,columnNumber:9},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:128,columnNumber:7},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:121,columnNumber:5},this)}const oe=c=>{const{imgSrc:l,text:m,dataCy:r}=c||"";return e.jsxDEV("div",{className:"on-connect-advice-item d-flex flex-row align-items-center mb-3 mb-lg-4","data-cy":r,children:[e.jsxDEV("img",{src:l,alt:""},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:227,columnNumber:7},void 0),e.jsxDEV(n.SzTypographie,{variant:"body",weight:"regular",size:"XL",className:"ml-3 mb-0 text-dark",children:m},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:228,columnNumber:7},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/consumption-history/ConnectCoachLanding.tsx",lineNumber:223,columnNumber:5},void 0)};export{je as default};
