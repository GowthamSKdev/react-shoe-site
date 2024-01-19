import{r,_ as s,S as d,u as n,j as t}from"./index-I8GDrITg.js";const u=r.lazy(()=>s(()=>import("./ProductDisplay-y8gQBhK8.js"),__vite__mapDeps([0,1,2,3]))),_=r.lazy(()=>s(()=>import("./Breadcrum-RGDN7MX-.js"),__vite__mapDeps([4,1,2,5]))),p=()=>{const{all_shoes:a}=r.useContext(d),{productId:e}=n(),o=a.find(c=>c.id===Number(e));return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsx(_,{product:o}),t.jsx(u,{product:o,catagory:"catagory"})]})})};export{p as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProductDisplay-y8gQBhK8.js","assets/index-I8GDrITg.js","assets/index--8TqK9Q7.css","assets/ProductDisplay-zT8Wkggs.css","assets/Breadcrum-RGDN7MX-.js","assets/Breadcrum-rHHJwDfZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
