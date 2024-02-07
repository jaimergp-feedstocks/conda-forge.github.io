"use strict";(self.webpackChunkcf_infra_docs=self.webpackChunkcf_infra_docs||[]).push([[4575],{6635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var s=t(5893),r=t(1151);const o={},a="Rust 1.75 requires setting newer MACOSX_DEPLOYMENT_TARGET",i={permalink:"/news/2024/01/29/rust-175-osx-sdk",source:"@site/news/2024-01-29-rust-175-osx-sdk.md",title:"Rust 1.75 requires setting newer MACOSX_DEPLOYMENT_TARGET",description:"With the release of rust 1.75, we now require setting the minimal",date:"2024-01-29T00:00:00.000Z",formattedDate:"January 29, 2024",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,nextItem:{title:"Python 3.12 migration and Python 3.11 by default",permalink:"/news/2023/09/25/python-312-migration-and-python-311-by-default"}},c={authorsImageUrls:[]},d=[];function l(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["With the release of ",(0,s.jsx)(n.code,{children:"rust 1.75"}),", we now require setting the minimal\n",(0,s.jsx)(n.code,{children:"MACOSX_DEPLOYMENT_TARGET"})," to at least ",(0,s.jsx)(n.code,{children:"10.12"}),". You can do this by appending\n",(0,s.jsx)(n.code,{children:"recipe/conda_build_config.yaml"})," with the following content:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"MACOSX_DEPLOYMENT_TARGET:  # [osx and x86]\n  - '10.12'                # [osx and x86]\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should also add a run dependency on the respective OSX version:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'  run:\n    - __osx >={{ MACOSX_DEPLOYMENT_TARGET|default("10.9") }}  # [osx and x86_64]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The latter is also set automatically via a ",(0,s.jsx)(n.code,{children:"run_exports"})," of\nthe ",(0,s.jsx)(n.code,{children:"compiler('rust')"})," package, but we add this line if you would increase\nthe deployment target later in the feedstock for unrelated reasons."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(7294);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);