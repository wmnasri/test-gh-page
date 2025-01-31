import{j as e,b as d,a as T}from"./index-BzhTyqaY.js";import{r as g}from"./index-0X8QCd_i.js";import{R as A,W as x,X as f,Y as _}from"./main-BbuvrTKi.js";import{u as O}from"./useQuery-DDRZMcvI.js";import{n as j,d as S,C as R}from"./react-spring-web.esm-DsMzZgQq.js";import{u as z,f as H,a as B,A as L}from"./AxiosInstance-BZZbXQ8a.js";import{u as D}from"./useResponsive-DQBhMvnf.js";import{u as U}from"./useInterweave-MFQvh887.js";import{M as P}from"./index-E8Xemi00.js";import{u as E}from"./useTranslation-BYGhmYBG.js";import{C as F}from"./index-DZ4XKZZd.js";import"./index-BoI371yk.js";import"./index-4p5aklhB.js";import"./throttle-C5YRRb_b.js";import"./_baseIsEqual-DwR-aJgz.js";import"./iframe-CrganuSH.js";import"../sb-preview/runtime.js";import"./nonIterableRest-CnCppAvF.js";import"./formik.esm-DgjVmEdT.js";import"./index-m5SwaE3w.js";import"./recaptcha-wrapper-CLWKokWK.js";/* empty css              */import"./useMutation-DnofRurj.js";/* empty css                         */import"./index-R4VhrMC6.js";const $=""+new URL("clickable-Cs3zU4QU.svg",import.meta.url).href,G=""+new URL("clickable-white-nqYkaxmW.svg",import.meta.url).href,W={CONTACTS:{width:"32.2%",left:"1.2%",top:["10.1","7.6"]},FACTURATION:{width:"62%",right:"4.65%",top:["27.6","25.5"]},PRIX_EAU:{width:"31%",top:["46.9","46.9"],left:"33.4%"},CONSOMMATION:{width:"31%",right:"3.3%",top:["46.9","46.9"]},SOLDE_ANTERIEUR:{width:"31%",right:"3.3%",top:["46.9","46.9"]},INFOS_BANCAIRES:{width:"33%",right:"30%",top:["72.45","72.45"]},INFOS_CLIENTS:{width:"24.1%",top:["2.9","1.2"],right:"5%"},PROCHAINES_ETAPES:{width:"24.7%",top:["64.2","62.5"],right:"2.9%"},VOTRE_SOLDE_ANTERIEUR:{width:"28.8%",top:["72.45","72.45"],left:"6.7%"},HISTORIQUE_FACTURE:{width:"28.8%",top:["72.45","72.45"],left:"6.7%"},ECHEANCIER:{width:"26%",top:["72.45","72.45"],right:"2.2%"},TIP_SEPA:{width:"79.5%",top:["69.45","70.85"],right:"2.9%"},INFOS_COMPTEUR:{width:"72.2%",top:["2.4","-1"],right:"2.35%"}},Q=["MONTANT_EAU_POTABLE","MONTANT_EAU_USEE","MONTANT_ORGANISMES_PUBLICS","DETAIL_PRESTATIONS"],X=({className:t,title:i,children:s,onClick:n,type:l})=>e.jsxDEV("div",{"data-cy":`block-${String(l).toLowerCase()}`,className:"cursor-pointer "+t,onClick:n,children:[e.jsxDEV(q,{},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:102,columnNumber:7},void 0),e.jsxDEV("div",{className:"title-container text-center py-2",children:e.jsxDEV(d.SzTypographie,{variant:"H5",size:"L",className:"text-uppercase text-white mb-0",children:i},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:104,columnNumber:9},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:103,columnNumber:7},void 0),e.jsxDEV("div",{className:"detail-img-container",children:s},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:112,columnNumber:7},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:97,columnNumber:5},void 0),h=j(X)`
  ${t=>{const i=t.type;if(Q.includes(i))return;const s=W[i],n={position:"absolute",top:`${s.top[0]}%`,"@media screen and (min-width: 992px)":{top:`${s.top[1]}%`}};return{...s,...n}}}

  img {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    &:hover {
      .title-container {
        background-color: var(--expert-blue);
      }
      .detail-img-container {
        filter: grayscale(0);
      }
      .touch-point-btn {
        background-color: var(--blue-1);
        .tpb-icon-dark {
          display: none;
        }
        .tpb-icon-white {
          display: block;
        }
      }
      border-color: var(--expert-blue);
    }
  }

  .title-container {
    width: 100%;
    border-radius: 16px 16px 0 0;
    background-color: var(--blue-1);
    @media screen and (max-width: 992px) {
      display: none;
    }
  }

  .detail-img-container {
    width: 100%;
    border: 2px solid var(--blue-1);
    border-radius: 0 0 16px 16px;
    overflow: hidden;
    filter: grayscale(1);
  }
`,Y=({className:t})=>e.jsxDEV("button",{className:"touch-point-btn "+t,children:[e.jsxDEV("img",{src:$,className:"tpb-icon tpb-icon-dark",alt:""},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:185,columnNumber:7},void 0),e.jsxDEV("img",{src:G,className:"tpb-icon tpb-icon-white",alt:""},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:186,columnNumber:7},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailBlock.tsx",lineNumber:184,columnNumber:5},void 0),q=j(Y)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  border: none;
  background-color: white;
  position: absolute;
  top: -16px;
  left: -16px;
  z-index: 1;

  @media screen and (min-width: 992px) {
    width: 64px;
    height: 64px;
    top: -32px;
    left: -32px;
  }

  .tpb-icon {
    width: 16px;
    @media screen and (min-width: 992px) {
      width: 32px;
    }
  }

  .tpb-icon-white {
    display: none;
  }
  &:hover {
    .tpb-icon-dark {
      display: none;
    }
    .tpb-icon-white {
      display: block;
    }
  }
`;function J(t){const i=D(),{title:s,description:n,imgDesktop:l,imgMobile:o,details:a,handleCloseModal:m,showModal:u}=t,{t:w}=E(),N=i?o==null?void 0:o.src:l.src,c=i?o==null?void 0:o.alt:l.alt;return e.jsxDEV(d.SzModal,{className:"invoice-detail-modal",show:u,handleClose:m,size:"lg",backdrop:!0,centered:!0,scrollable:!0,border:"smooth",fullscreen:"md",title:"",children:[e.jsxDEV("div",{className:"text-center",children:e.jsxDEV(d.SzTypographie,{variant:"H3",weight:"medium",size:"L",className:"mb-4",children:s},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:41,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:40,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-0 mb-2 d-flex",children:e.jsxDEV("img",{src:N,alt:c,className:"mw-100 mx-auto"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:46,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:45,columnNumber:7},this),n&&e.jsxDEV("div",{className:"col-12 px-0 mb-2",children:e.jsxDEV(P,{noWrap:!0,content:n},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:50,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:49,columnNumber:7},this),e.jsxDEV("div",{className:"col-12 px-0",children:a.map((v,p)=>{const b=T("invoice-detail-item",{"border-top border-1 border-gray-200":p>0});return e.jsxDEV(K,{iteration:p+1,className:b,...v},p,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:59,columnNumber:13},this)})},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:52,columnNumber:7},this),e.jsxDEV("div",{className:"text-center",children:e.jsxDEV(d.SzButton,{variant:"contained",border:"soft",onClick:m,children:w("pedagoFacture.board.modal.btn")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:70,columnNumber:9},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:69,columnNumber:7},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:28,columnNumber:5},this)}const K=({title:t,description:i,image:s,className:n,iteration:l})=>{const{transform:o}=U();return e.jsxDEV("div",{className:n,children:e.jsxDEV("div",{className:"d-flex align-items-start py-3",children:[e.jsxDEV("div",{className:"step-number bg-blue-1",children:e.jsxDEV(d.SzTypographie,{variant:"H5",weight:"bold",size:"L",className:"text-white mb-0",children:l},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:91,columnNumber:11},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:90,columnNumber:9},void 0),e.jsxDEV("div",{className:"ml-3",children:[e.jsxDEV(d.SzTypographie,{variant:"body",weight:"bold",className:"text-dark mb-0",children:t},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:101,columnNumber:11},void 0),e.jsxDEV("div",{className:"invoice-detail-desc",children:e.jsxDEV(P,{noWrap:!0,transform:o,content:i},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:109,columnNumber:13},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:108,columnNumber:11},void 0),s&&e.jsxDEV("div",{className:"col-12 col-lg-8 pt-3 px-0",children:e.jsxDEV("img",{src:s.src,alt:s.alt,className:"w-100 w-lg-50"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:113,columnNumber:15},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:112,columnNumber:13},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:100,columnNumber:9},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:89,columnNumber:7},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/Modal.tsx",lineNumber:88,columnNumber:5},void 0)};function Z({clientContext:t,recto:i,verso:s,activeIndex:n}){var V,y,k,C,I;const l=((V=s==null?void 0:s.items)==null?void 0:V.find(r=>r.type==="INFOS_COMPTEUR"))||{},o=(y=s==null?void 0:s.items)==null?void 0:y.filter(r=>r.type!=="INFOS_COMPTEUR"),[a,m]=g.useState(null),{track:u}=S(),w=r=>r.type===a,N=(k=i==null?void 0:i.items)==null?void 0:k.find(w),c=(C=s==null?void 0:s.items)==null?void 0:C.find(w),{modal:v}=N||c||{},p=a!==null,b=r=>{u("PEDAGO_6",{cas_client:t,nature_facture:`Facture_${n+1}`,nom_modale:r}),m(r)},M=()=>{m(null)};return e.jsxDEV(e.Fragment,{children:[i&&e.jsxDEV("div",{"data-cy":"invoice-detail-page-recto",className:"recto paper w-100 position-relative mb-3",children:[e.jsxDEV("img",{src:i.fond[0].src,alt:i.fond[0].alt,width:"100%"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:56,columnNumber:11},this),(I=i==null?void 0:i.items)==null?void 0:I.map(r=>e.jsxDEV(h,{title:r.title,type:r.type,onClick:()=>b(r.type),children:e.jsxDEV("img",{src:r.imgPreview.src,alt:r.imgPreview.alt,width:"100%"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:64,columnNumber:15},this)},r.type,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:58,columnNumber:13},this))]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:52,columnNumber:9},this),s&&e.jsxDEV("div",{"data-cy":"invoice-detail-page-verso",className:"verso paper w-100 position-relative mb-3",children:[e.jsxDEV("img",{src:s.fond[0].src,alt:s.fond[0].alt,width:"100%"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:78,columnNumber:11},this),Object.keys(l||{}).length>0&&e.jsxDEV(h,{title:l.title,type:l.type,onClick:()=>b(l.type),children:e.jsxDEV("img",{src:l.imgPreview.src,alt:l.imgPreview.alt,width:"100%"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:86,columnNumber:15},this)},l.type,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:80,columnNumber:13},this),e.jsxDEV("div",{className:"fixed-content",children:o==null?void 0:o.map(r=>e.jsxDEV(h,{title:r.title,type:r.type,onClick:()=>b(r.type),children:e.jsxDEV("img",{src:r.imgPreview.src,alt:r.imgPreview.alt,width:"100%"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:101,columnNumber:17},this)},r.type,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:95,columnNumber:15},this))},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:93,columnNumber:11},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:74,columnNumber:9},this),a&&e.jsxDEV(J,{...v,showModal:p,handleCloseModal:M},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:112,columnNumber:9},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailPages.tsx",lineNumber:50,columnNumber:5},this)}function ee({description:t,handleSwitchContent:i,isLoading:s,buttons:n,active:l}){const o=D(),{t:a}=E(),m=z(),[u,w]=g.useState(!1),N=()=>{w(!0),m.push(A.PEDAGO_FACTURE)};return e.jsxDEV("div",{"data-cy":"invoice-detail-title-block",className:"invoice-detail-title-block tsme-container bg-white mw-100 m-0 px-4 py-3",children:[e.jsxDEV("div",{className:"tsme-container row py-0",children:[e.jsxDEV(d.SzButton,{variant:"text",onClick:N,icon:"keyboard-arrow-left",alignIcon:"left",className:"back-btn pl-0 mb-3 mb-lg-0",loader:u,"data-cy":"invoice-detail-return-btn",children:a("go_back")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:35,columnNumber:9},this),e.jsxDEV(d.SzTypographie,{variant:"H1",size:o?"L":"XL",weight:"black",className:"text-uppercase text-center mx-auto mb-4",children:a("pedagoFacture.invoiceDetails.title")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:46,columnNumber:9},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:34,columnNumber:7},this),e.jsxDEV("div",{className:"row no-gutters flex-column flex-md-row justify-content-md-center mb-4",children:s?e.jsxDEV(F,{type:"invoice-detail-btn"},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:58,columnNumber:11},this):n.map(({title:c,icon:v},p)=>e.jsxDEV(ie,{active:l===p,className:"d-flex align-items-center shadow",handleClick:()=>i(p),icon:v,children:c},c,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:61,columnNumber:13},this))},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:56,columnNumber:7},this),e.jsxDEV(d.SzTypographie,{className:"w-auto mx-auto text-center mb-2",children:t},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:73,columnNumber:7},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:30,columnNumber:5},this)}const se=({className:t,children:i,handleClick:s,icon:n})=>{const l=D(),o=T("p-3 px-lg-4 mb-3 mx-lg-3",{"col-12":l},t);return e.jsxDEV("button",{className:o,onClick:s,"data-cy":"invoice-select-btn",children:[e.jsxDEV("span",{className:"detail-icon-container d-flex align-items-center justify-content-center",children:n&&e.jsxDEV("img",{width:24,height:24,src:n.src,alt:n.alt},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:102,columnNumber:18},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:101,columnNumber:7},void 0),e.jsxDEV(d.SzTypographie,{variant:"body",size:l?"M":"L",weight:"regular",className:"mb-0 pl-3",children:i},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:104,columnNumber:7},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/DetailHeader.tsx",lineNumber:96,columnNumber:5},void 0)},ie=j(se)`
  display: flex;
  border-radius: 8px;
  border: 0px;
  background-color: ${({active:t})=>t?x:f};
  color: ${({active:t})=>t?f:x};

  .detail-icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({active:t})=>t?f:_};
    color: ${x};
  }
`;function Ce(){const{t}=E(),[i,s]=g.useState(1),{data:n,isLoading:l}=O("InvoiceDetail",()=>B(L.INVOICE_DETAIL)),{track:o}=S(),{content:a}=n?n==null?void 0:n.data:H(),m=((a==null?void 0:a.pedagoInvoices)||[]).map(({title:c,icon:v})=>({title:c,icon:v})),u=!l&&(a==null?void 0:a.pedagoInvoices)&&(a==null?void 0:a.pedagoInvoices.length)>0,{description:w=""}=u?a==null?void 0:a.pedagoInvoices[i]:{},N=c=>{o("PEDAGO_5",{cas_client:a.clientContext,nature_facture:`Facture_${c+1}`}),s(c)};return e.jsxDEV(R,{className:"p-0",fullscreen:!0,tag:"main",id:"pedago-facture-invoice-detail",children:[e.jsxDEV(ee,{active:i,isLoading:l,handleSwitchContent:N,description:w,buttons:m},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:44,columnNumber:7},this),e.jsxDEV("div",{id:"invoice-detail-pages","data-cy":"invoice-details-pages",className:"px-3 px-lg-0",children:l?e.jsxDEV("div",{className:"d-flex justify-content-center align-items-center",children:e.jsxDEV(d.SzSpinner,{},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:58,columnNumber:13},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:57,columnNumber:11},this):u?e.jsxDEV(e.Fragment,{children:[e.jsxDEV(d.SzTypographie,{className:"mt-2",children:t("pedagoFacture.invoiceDetails.zoneToDetail")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:66,columnNumber:13},this),e.jsxDEV(Z,{clientContext:a==null?void 0:a.clientContext,...a==null?void 0:a.pedagoInvoices[i].content,activeIndex:i},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:69,columnNumber:13},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:65,columnNumber:11},this):e.jsxDEV(d.SzTypographie,{className:"mt-2",children:t("pedagoFacture.invoiceDetails.noContent")},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:61,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:51,columnNumber:7},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/pages/invoice-detail/index.tsx",lineNumber:38,columnNumber:5},this)}export{Ce as default};
