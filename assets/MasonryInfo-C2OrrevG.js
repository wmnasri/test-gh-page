import{j as n}from"./index-BzhTyqaY.js";import{r as e}from"./index-0X8QCd_i.js";/* empty css                */import{M as p}from"./MasonryInfoFront-BcPFiyA-.js";import{M as w}from"./MasonryInfoBack-D88wpNb9.js";const g=({title:c,firstAnswer:i,secondAnswer:m,response:s})=>{const[h,x]=e.useState(!1),[l,d]=e.useState(s[0]);e.useEffect(()=>{s.length>0&&d(s[0])},[s]);const o=e.useRef(null),t=e.useRef(null),r=e.useRef(null),N=()=>{if(o.current&&t.current&&r.current){const a=t.current.offsetHeight,f=r.current.offsetHeight,u=Math.max(a,f);o.current.style.height=`${u}px`,r.current.style.height=`${u}px`,t.current.style.height=`${u}px`}};e.useEffect(()=>{N()},[c,i,m,l]);const y=e.useCallback(a=>{d(s.find(f=>f.status===a.status)??s[0]),x(!0)},[s]);return n.jsxDEV("div",{className:`masonry-info-container ${h?"flip":""}`,ref:o,children:[n.jsxDEV("div",{className:"card-front",ref:t,children:n.jsxDEV(p,{title:c,firstAnswer:i,secondAnswer:m,onClick:y},void 0,!1,{fileName:"/usr/var/www/assets/js/components/masonry/MasonryInfo.tsx",lineNumber:77,columnNumber:9},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/masonry/MasonryInfo.tsx",lineNumber:76,columnNumber:7},void 0),n.jsxDEV("div",{className:"card-back",ref:r,children:n.jsxDEV(w,{response:l},void 0,!1,{fileName:"/usr/var/www/assets/js/components/masonry/MasonryInfo.tsx",lineNumber:85,columnNumber:9},void 0)},void 0,!1,{fileName:"/usr/var/www/assets/js/components/masonry/MasonryInfo.tsx",lineNumber:84,columnNumber:7},void 0)]},void 0,!0,{fileName:"/usr/var/www/assets/js/components/masonry/MasonryInfo.tsx",lineNumber:72,columnNumber:5},void 0)};export{g as M};
