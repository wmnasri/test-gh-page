import{j as e,b as o}from"./index-BAjkLHRS.js";import{r as a}from"./index-Djf8kdDz.js";import{M as u}from"./Meter-iHpCMIYU.js";import{o as D,a as g,t as n,B as V,M as y}from"./react-spring-web.esm-BXduOQz-.js";/* empty css                      */import{hau as T}from"./IndexEntry-CrJnOLir.js";import{u as f}from"./useTranslation-Cclpl_OC.js";import"./index-BcQ2dhrg.js";import"./index-CCqWUn_M.js";import"./throttle-BPCfK1uX.js";import"./_baseIsEqual-8OBVMFu7.js";import"./iframe-fNLlJobk.js";import"../sb-preview/runtime.js";/* empty css              *//* empty css                         */import"./releve_index-BZ8gkQLR.js";import"./ErrorPc-DHxd78Wz.js";import"./LandingPage-NHINhsEu.js";const p=""+new URL("e-mail-success-DLA4_rXw.png",import.meta.url).href;function S(){const{t}=f();return e.jsxDEV("div",{className:"row text-left",children:[e.jsxDEV("div",{className:"col-12 px-2 px-md-6 mt-3",children:e.jsxDEV(o.SzTypographie,{variant:"H4",weight:"medium",children:t("photoMeter.confirmation.help.localizeTitle")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:24,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:23,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-2 px-md-6 mt-3",children:e.jsxDEV("ol",{children:[e.jsxDEV("li",{children:e.jsxDEV(o.SzTypographie,{weight:"medium",children:t("photoMeter.confirmation.help.localizeOrdered1")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:31,columnNumber:13},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:30,columnNumber:11},this),e.jsxDEV("li",{children:e.jsxDEV(o.SzTypographie,{weight:"medium",children:t("photoMeter.confirmation.help.localizeOrdered2")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:36,columnNumber:13},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:35,columnNumber:11},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:29,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:28,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-2 px-md-6",children:e.jsxDEV(o.SzTypographie,{weight:"medium",children:t("photoMeter.confirmation.help.localizePart2")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:43,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:42,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-2 px-md-6",children:e.jsxDEV(o.SzTypographie,{weight:"medium",children:t("photoMeter.confirmation.help.localizePart3")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:48,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:47,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-2 px-md-6 mt-3",children:e.jsxDEV(o.SzTypographie,{variant:"H4",weight:"medium",children:t("photoMeter.confirmation.help.watchConsoTitle")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:53,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:52,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-2 px-md-6 mt-3",children:e.jsxDEV(o.SzTypographie,{weight:"medium",children:e.jsxDEV(y,{content:t("photoMeter.confirmation.help.watchConso")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:59,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:58,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:57,columnNumber:7},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:22,columnNumber:5},this)}function K(t){var h;const c=D(),{t:i}=f(),N=g(),m=(h=t==null?void 0:t.location)==null?void 0:h.state;let d=!1;m!=null&&m.isMailError&&(d=m.isMailError);const[s,w]=a.useState({}),[j,x]=a.useState(!1),[v,b]=a.useState(!1);a.useEffect(()=>{u.getDataSession().then(l=>{w(l);const r={fullRef:l.fullRef};u.checkAllMeterDropIndex(r).then(E=>{E===!1&&x(!0)}),u.revokeJwtToken()})},[]),a.useEffect(()=>()=>{if(N.action==="POP")if(s.date_campagne){const r=s.date_campagne.split("-");window.location.href=n.PHOTO_COUNTER_START.replace(":campagne",s.campagne).replace(":reference",s.fullRef).replace(":day",r[2]).replace(":month",r[1]).replace(":year",r[0]).replace(":email",s.email)}else window.location.href=n.PHOTO_COUNTER_START.replace(":campagne",s.campagne).replace(":reference",s.fullRef).replace(":day",s.email).replace("/:month/:year/:email","")});const M=s.horsBorne&&s.motifIndex===T,C=()=>{if(b(!0),s.date_campagne){const r=s.date_campagne.split("-");window.location.href=n.PHOTO_COUNTER_START.replace(":campagne",s.campagne).replace(":reference",s.fullRef).replace(":day",r[2]).replace(":month",r[1]).replace(":year",r[0]).replace(":email",s.email)}else window.location.href=n.PHOTO_COUNTER_START.replace(":campagne",s.campagne).replace(":reference",s.fullRef).replace(":day",s.email).replace("/:month/:year/:email","")};return e.jsxDEV("div",{className:"home-index confirmation-page",children:[e.jsxDEV("div",{className:"container global-container my-4 rounded-2 shadow-blue-sm",children:e.jsxDEV("div",{className:"col-12 col-md-10 m-auto py-md-5 py-3",children:[!c&&e.jsxDEV("div",{className:"d-flex",children:e.jsxDEV("div",{className:"m-auto justify-content-center align-self-center d-md-block",children:e.jsxDEV("img",{src:p,alt:"",height:"270",width:"270"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:161,columnNumber:17},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:160,columnNumber:15},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:159,columnNumber:13},this),e.jsxDEV("div",{className:"row",children:[e.jsxDEV("div",{className:"col-md-7 d-md-block",children:[e.jsxDEV(o.SzTypographie,{variant:c?"large":"body",weight:"bold",className:"mb-4 text-center text-md-left",children:i("photoMeter.confirmation.success")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:167,columnNumber:15},this),!d&&e.jsxDEV(e.Fragment,{children:[e.jsxDEV(o.SzTypographie,{weight:"regular",className:"mb-2 grey-01 text-center text-md-left",children:i("photoMeter.confirmation.emailSent")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:177,columnNumber:19},this),e.jsxDEV(o.SzTypographie,{weight:"bold",className:"mb-4 text-center text-md-left grey-01",id:"emailConfirmation",children:s.email},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:183,columnNumber:19},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:176,columnNumber:17},this),j&&e.jsxDEV("div",{className:"text-center text-md-left",children:e.jsxDEV(o.SzButton,{id:"readingAnotherMeter",variant:"contained",onClick:C,loader:v,border:"soft",children:i("photoMeter.confirmation.readingAnotherMeter")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:194,columnNumber:19},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:193,columnNumber:17},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:166,columnNumber:13},this),c&&e.jsxDEV("div",{className:"col-md-5 d-flex",children:e.jsxDEV("div",{className:"m-auto justify-content-center align-self-center d-md-block",children:e.jsxDEV("img",{src:p,alt:"",height:"270",width:"270"},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:210,columnNumber:19},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:209,columnNumber:17},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:208,columnNumber:15},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:165,columnNumber:11},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:157,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:156,columnNumber:7},this),M&&e.jsxDEV("div",{className:"container global-container my-4 rounded-2 shadow-blue-sm","data-cy":"outOfBounds",children:e.jsxDEV("div",{className:"col-12 col-md-10 m-auto py-md-4 py-3",children:e.jsxDEV("div",{className:"row",children:[e.jsxDEV("div",{className:"col-md-7 d-md-block my-auto",children:e.jsxDEV(o.SzTypographie,{weight:"regular",className:"mb-md-2 mb-4' grey-01 text-center text-md-left",children:i("photoMeter.confirmation.outOfBoundsMax")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:225,columnNumber:17},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:224,columnNumber:15},this),e.jsxDEV("div",{className:"col-md-5 d-md-block",children:e.jsxDEV("div",{className:"row",children:e.jsxDEV("div",{className:"mx-auto",children:e.jsxDEV(o.SzHelper,{className:"mt-4",title:i("photoMeter.confirmation.help.title"),type:"btn",label:i("know_more"),children:e.jsxDEV(S,{},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:241,columnNumber:23},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:235,columnNumber:21},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:234,columnNumber:19},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:233,columnNumber:17},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:232,columnNumber:15},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:223,columnNumber:13},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:222,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:218,columnNumber:9},this),e.jsxDEV("div",{className:"container global-container my-4 rounded-2 shadow-blue-sm",children:e.jsxDEV("div",{className:"col-12 col-md-10 m-auto py-md-4 py-3",children:e.jsxDEV("div",{className:"row",children:[e.jsxDEV("div",{className:"col-md-7 d-md-block my-auto",children:e.jsxDEV(o.SzTypographie,{weight:"regular",className:"mb-md-2 mb-4 text-center text-md-left",children:i("photoMeter.confirmation.noCelText")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:254,columnNumber:15},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:253,columnNumber:13},this),e.jsxDEV("div",{className:"col-md-5 d-md-block text-center",children:e.jsxDEV(V,{variant:"secondary",border:"soft",to:n.SIGN_UP,id:"createCelButton",children:i("photoMeter.confirmation.createCelButton")},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:262,columnNumber:15},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:261,columnNumber:13},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:252,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:251,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:250,columnNumber:7},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/photoMeter/Confirmation.jsx",lineNumber:155,columnNumber:5},this)}export{S as HelpWaterleakBody,K as default};
