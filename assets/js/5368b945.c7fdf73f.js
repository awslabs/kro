"use strict";(self.webpackChunksymphony_docs=self.webpackChunksymphony_docs||[]).push([[79],{9878:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var i=s(4848),r=s(8453);const t={sidebar_position:1},o="Overview",a={id:"docs/overview",title:"Overview",description:"Symphony is a Kubernetes controller designed to simplify",source:"@site/docs/docs/overview.md",sourceDirName:"docs",slug:"/docs/overview",permalink:"/docs/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/docs/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"How it Works",permalink:"/docs/docs/how-it-works"}},c={},l=[{value:"Key Benefits",id:"key-benefits",level:2},{value:"Use Cases",id:"use-cases",level:2}];function d(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview",children:"Overview"})}),"\n",(0,i.jsxs)(n.p,{children:["Symphony is a ",(0,i.jsx)(n.strong,{children:"Kubernetes controller"})," designed to simplify\nand streamline resource management in Kubernetes environments,\nin a ",(0,i.jsx)(n.strong,{children:"safe"})," and ",(0,i.jsx)(n.strong,{children:"declarative"})," way."]}),"\n",(0,i.jsxs)(n.p,{children:["Symphony acts as a composition layer on top of Kubernetes, allowing\nusers to define high-level ",(0,i.jsx)(n.strong,{children:"abstractions"})," of interconnected\nresources. Users can then instantiate these abstractions, which Symphony\ntranslates and manages as actual Kubernetes resources."]}),"\n",(0,i.jsxs)(n.p,{children:["It is capable of understanding the ",(0,i.jsx)(n.strong,{children:"dependencies"})," between\nresources and orchestrating their creation, update, and deletion\nin a declarative way."]}),"\n",(0,i.jsxs)(n.p,{children:["Symphony is designed to be a flexible and extensible tool that can\nwork with any Kubernetes cluster, allowing users to define orchestrate\nboth ",(0,i.jsx)(n.strong,{children:"native"})," and ",(0,i.jsx)(n.strong,{children:"custom resources"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Symphony enables the creation of powerful, reusable abstractions.\nUsers can define complex, multi-resource abstractions that encapsulate\nbest practices and organizational standards. These abstractions can\nbe easily shared and reused across teams and projects, promoting\nconsistency and accelerating development cycles."}),"\n",(0,i.jsx)(n.h2,{id:"key-benefits",children:"Key Benefits"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simplicity"}),": Symphony makes it easy for anyone to declare\nabstractions, regardless of their expertise level with Kubernetes.\nThe intuitive interface allows for super simple definition of complex\nresource structures."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Flexibility"}),": Symphony works seamlessly with both native Kubernetes\nresources and custom resource definitions, providing a unified approach\nto resource management across your entire cluster."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Predictability"}),": Before actual deployment, Symphony can perform dry\nruns and type checking for your resources, allowing you to predict the\nresults of your deployment accurately. This feature helps catch potential\nissues early in the development cycle."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Observability"}),": Symphony enhances your ability to monitor and understand\nyour Kubernetes environment by providing comprehensive metrics, events, and\nconditions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Familiar Expression Language"}),": Symphony leverages Common Expression\nLanguage (CEL), which is already used in Kubernetes for admission control\nand native functionality. This makes it easy for Kubernetes users to onboard\nand immediately start writing powerful, dynamic expressions for resource\ndefinitions, validations, and policies."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These benefits combine to make Symphony a powerful ally in managing Kubernetes\nresources efficiently and effectively, regardless of the scale or complexity\nof your applications."}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsx)(n.p,{children:"Symphony's powerful abstraction and composition capabilities make it\nsuitable for a wide range of Kubernetes use cases:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Application deployment simplification:"}),"\nSimplify complex application deployments by encapsulating all\nnecessary resources (pods, services, config maps, etc.) into a\nsingle, easy-to-use abstraction."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Multi environment management:"}),"\nCreate consistent deployments across different environments (dev,\nstaging, prod), zones, and geographical regions. Define environment\nand location-specific parameters within a single abstraction,\nfacilitating global application distribution and disaster recovery\nstrategies."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Infrastructure-as-Code standards enforcement:"}),"\nEnforce organizational best practices and security standards by\nembedding them directly into reusable resource definitions."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Platform-as-a-Service creation:"}),"\nBuild internal platforms that provide simplified, secure interfaces\nfor developers to deploy applications without needing to understand\nthe underlying Kubernetes complexity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Custom resource extension:"}),"\nExtend Kubernetes native capabilities by creating high-level\nabstractions that combine multiple custom and native resources."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Gitops workflow enhancement:"}),"\nImprove GitOps workflows by working with high-level abstractions\nthat are easier to version, review, and manage in source control."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);