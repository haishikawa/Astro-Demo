/* empty css                       */import{_ as c}from"./_plugin-vue_export-helper.c27b6911.js";import{d as l,e as i,w as u,b as n,r as _}from"./runtime-core.esm-bundler.315cf3cb.js";import{V as f}from"./VChip.c43bb5ef.js";var t=(e=>(e[e.unApplicated=1]="unApplicated",e[e.applicated=2]="applicated",e[e.approved=4]="approved",e[e.repudiated=8]="repudiated",e[e.systemError=16]="systemError",e))(t||{});const m=l({__name:"ConstructionStatusChip",props:{statusCode:{default:1}},setup(e,{expose:d}){d();const o={getStatusColor:a=>{switch(a){case t.unApplicated:case t.applicated:return"default";case t.approved:return"positive";case t.repudiated:return"negative";case t.systemError:return"warning"}},isOutlinedStatus:a=>{switch(a){case t.unApplicated:case t.applicated:return!0;default:return!1}},getStatusFontColor:a=>{switch(a){case t.unApplicated:case t.applicated:case t.systemError:return"default";default:return"white"}}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}});function h(e,d,r,s,p,o){return n(),i(f,{class:"status-chip",color:s.getStatusColor(r.statusCode),outlined:s.isOutlinedStatus(r.statusCode),"text-color":s.getStatusFontColor(r.statusCode)},{default:u(()=>[_(e.$slots,"default",{},void 0,!0)]),_:3},8,["color","outlined","text-color"])}const x=c(m,[["render",h],["__scopeId","data-v-cca34ce5"]]);export{x as default};
