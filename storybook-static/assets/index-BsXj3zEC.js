import{a as n,j as s,b as u}from"./index-BzhTyqaY.js";import{u as B}from"./useTranslation-BYGhmYBG.js";function F({marginTop:c=!0,...r}){const{t:l}=B(),{label:b=l("go_back"),enabled:a=!1,prevArrow:x=!0,...e}=r.previous||{},{label:v=l("validate"),arrow:f=!1,enabled:i=!0,...d}=r.next||{},g="keyboard-arrow-left",m="keyboard-arrow-right",w=(e==null?void 0:e.alignIcon)==="right"?m:g,t={id:"previousButton",variant:"text",align:"left",icon:x?w:void 0,alignIcon:"left",onClick:()=>{},loader:!1,disabled:e.loader||!1,...e},o={id:"nextButton",variant:"contained",align:"left",icon:f?m:void 0,onClick:()=>{},disabled:d.loader||!1,type:"submit",...d},p=n("row",{"mt-3 mt-lg-4":c}),N=n("col-12 order-lg-0",{"col-lg-6":i,"text-lg-right":t.align==="right"}),h=n("col-12 mb-2 mb-lg-0 order-lg-1",{"col-lg-6":a,"text-lg-right":o.align==="right"});return s.jsxDEV("div",{className:p,children:[i&&s.jsxDEV("div",{className:h,children:s.jsxDEV(u.SzButton,{id:o.id,border:"soft",alignIcon:"right",isDisabled:o.disabled,...o,onMouseDown:j=>{j.preventDefault()},children:v},void 0,!1,{fileName:"/usr/var/www/assets/js/components/FormButtons/index.tsx",lineNumber:80,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/FormButtons/index.tsx",lineNumber:79,columnNumber:9},this),a&&s.jsxDEV("div",{className:N,children:s.jsxDEV(u.SzButton,{id:t.id,border:"soft",className:"pl-0",isDisabled:t.disabled,...t,children:b},void 0,!1,{fileName:"/usr/var/www/assets/js/components/FormButtons/index.tsx",lineNumber:96,columnNumber:11},this)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/FormButtons/index.tsx",lineNumber:95,columnNumber:9},this)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/FormButtons/index.tsx",lineNumber:77,columnNumber:5},this)}export{F};
