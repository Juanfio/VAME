"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1864],{6755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var i=n(4848),o=n(8453),r=n(6540),s=n(6025);const a=e=>{let{src:t,heightBuffer:n=20,maxCellHeight:o=400,...s}=e;const a=(0,r.useRef)(null);return(0,r.useEffect)((()=>{const e=()=>{const e=a.current;if(e)try{const t=e.contentDocument||e.contentWindow.document,i=t.createElement("style");i.innerHTML=`\n            /* Apply Docusaurus font style */\n            html {\n              background-color: var(--ifm-background-color);\n              color: var(--ifm-font-color-base);\n              color-scheme: var(--ifm-color-scheme);\n              font: var(--ifm-font-size-base) / var(--ifm-line-height-base) var(--ifm-font-family-base);\n              -webkit-font-smoothing: antialiased;\n              -webkit-tap-highlight-color: transparent;\n              text-rendering: optimizelegibility;\n              text-size-adjust: 100%;\n            }\n\n            body {\n              margin: 0;\n              padding: 0;\n            }\n\n            /* Markdown cell styling */\n            .jp-MarkdownOutput {\n              margin: 0rem 0;\n              padding: 0rem;\n            }\n\n            /* Ensure long outputs in other cells scroll vertically */\n            .jp-OutputArea, .jp-Cell-outputArea {\n              max-height: ${o}px;\n              overflow-y: auto;\n            }\n\n            .jp-RenderedText, .jp-OutputArea-output {\n              word-wrap: break-word;\n              white-space: pre-wrap;\n            }\n          `,t.head.appendChild(i);const r=t.body.scrollHeight+n;e.style.height=`${r}px`}catch(t){console.warn("Could not access iframe content due to cross-origin restrictions.",t)}},t=a.current;return t&&t.addEventListener("load",e),()=>{t&&t.removeEventListener("load",e)}}),[n,o]),(0,i.jsx)("iframe",{ref:a,src:t,style:{width:"100%",border:0,overflow:"hidden"},...s})},l={id:"pipeline",title:"Run Pipeline",sidebar_position:3,slug:"/getting_started/pipeline"},c=void 0,p={id:"getting_started/pipeline",title:"Run Pipeline",description:"The notebook below is available here.",source:"@site/docs/getting_started/pipeline.mdx",sourceDirName:"getting_started",slug:"/getting_started/pipeline",permalink:"/VAME/docs/getting_started/pipeline",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"pipeline",title:"Run Pipeline",sidebar_position:3,slug:"/getting_started/pipeline"},sidebar:"docsSidebar",previous:{title:"VAME step-by-step",permalink:"/VAME/docs/getting_started/step_by_step"},next:{title:"Project Configuration",permalink:"/VAME/docs/project-config"}},d={},u=[];function g(e){const t={a:"a",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The notebook below is available ",(0,i.jsx)(t.a,{href:"https://github.com/EthoML/VAME/blob/main/examples/pipeline.ipynb",children:"here"}),"."]}),"\n",(0,i.jsx)(a,{src:(0,s.A)("/notebooks_html/pipeline.html")})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);