import{c,i,d as l}from"./counter.993f016a.js";import{_ as p}from"./_plugin-vue_export-helper.c27b6911.js";import{s as C,g as m,a as _,d,b as f,e as r,t as a,F as b,o as g}from"./runtime-core.esm-bundler.ba1ceb94.js";function S(t){let e=C(),o=t.subscribe(n=>{e.value=n});return m()&&_(o),e}const D=d({__name:"CounterVue",setup(t,{expose:e}){e();const u={count:S(c),name:"Vue",get increaseCounter(){return i},get decreaseCounter(){return l}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}});function F(t,e,o,n,u,k){return g(),f(b,null,[r("p",null,a(n.name)+"のコンポーネント"),r("button",{onClick:e[0]||(e[0]=(...s)=>n.decreaseCounter&&n.decreaseCounter(...s))},"-"),r("pre",null,a(n.count),1),r("button",{onClick:e[1]||(e[1]=(...s)=>n.increaseCounter&&n.increaseCounter(...s))},"+")],64)}const v=p(D,[["render",F]]);export{v as default};
