"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8816],{4829:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=t(4848),r=t(8453);const l={sidebar_label:"dataloader",title:"vame.model.dataloader"},s=void 0,d={id:"reference/vame/model/dataloader",title:"vame.model.dataloader",description:"Variational Animal Motion Embedding 0.1 Toolbox",source:"@site/docs/reference/vame/model/dataloader.md",sourceDirName:"reference/vame/model",slug:"/reference/vame/model/dataloader",permalink:"/VAME/docs/reference/vame/model/dataloader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"dataloader",title:"vame.model.dataloader"},sidebar:"docsSidebar",previous:{title:"create_training",permalink:"/VAME/docs/reference/vame/model/create_training"},next:{title:"evaluate",permalink:"/VAME/docs/reference/vame/model/evaluate"}},a={},c=[{value:"SEQUENCE_DATASET Objects",id:"sequence_dataset-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"__len__",id:"__len__",level:4},{value:"__getitem__",id:"__getitem__",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Variational Animal Motion Embedding 0.1 Toolbox\n\xa9 K. Luxem & P. Bauer, Department of Cellular Neuroscience\nLeibniz Institute for Neurobiology, Magdeburg, Germany"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/LINCellularNeuroscience/VAME",children:"https://github.com/LINCellularNeuroscience/VAME"}),"\nLicensed under GNU General Public License v3.0"]}),"\n",(0,i.jsx)(n.h2,{id:"sequence_dataset-objects",children:"SEQUENCE_DATASET Objects"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class SEQUENCE_DATASET(Dataset)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __init__(path_to_file: str, data: str, train: bool, temporal_window: int,\n             **kwargs) -> None\n"})}),"\n",(0,i.jsx)(n.p,{children:"Initialize the Sequence Dataset."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"path_to_file"})," ",(0,i.jsx)(n.em,{children:"str"})," - Path to the dataset files."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"data"})," ",(0,i.jsx)(n.em,{children:"str"})," - Name of the data file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"train"})," ",(0,i.jsx)(n.em,{children:"bool"})," - Flag indicating whether it's training data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"temporal_window"})," ",(0,i.jsx)(n.em,{children:"int"})," - Size of the temporal window."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h4,{id:"__len__",children:"__len__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __len__() -> int\n"})}),"\n",(0,i.jsx)(n.p,{children:"Return the number of data points."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int"})," - Number of data points."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"__getitem__",children:"__getitem__"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def __getitem__(index: int) -> torch.Tensor\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get a normalized sequence at the specified index."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"index"})," ",(0,i.jsx)(n.em,{children:"int"})," - Index of the item."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"torch.Tensor"})," - Normalized sequence data at the specified index."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const r={},l=i.createContext(r);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);