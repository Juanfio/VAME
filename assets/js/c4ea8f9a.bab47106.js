"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5908],{5337:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var i=r(4848),s=r(8453);const t={sidebar_label:"csv_to_npy",title:"vame.util.csv_to_npy"},a=void 0,l={id:"reference/vame/util/csv_to_npy",title:"vame.util.csv_to_npy",description:"Variational Animal Motion Embedding 1.0-alpha Toolbox",source:"@site/docs/reference/vame/util/csv_to_npy.md",sourceDirName:"reference/vame/util",slug:"/reference/vame/util/csv_to_npy",permalink:"/VAME/docs/reference/vame/util/csv_to_npy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"csv_to_npy",title:"vame.util.csv_to_npy"},sidebar:"docsSidebar",previous:{title:"auxiliary",permalink:"/VAME/docs/reference/vame/util/auxiliary"},next:{title:"gif_pose_helper",permalink:"/VAME/docs/reference/vame/util/gif_pose_helper"}},o={},c=[{value:"nan_helper",id:"nan_helper",level:4},{value:"interpol",id:"interpol",level:4},{value:"csv_to_numpy",id:"csv_to_numpy",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Variational Animal Motion Embedding 1.0-alpha Toolbox\n\xa9 K. Luxem & P. Bauer, Department of Cellular Neuroscience\nLeibniz Institute for Neurobiology, Magdeburg, Germany"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/LINCellularNeuroscience/VAME",children:"https://github.com/LINCellularNeuroscience/VAME"}),"\nLicensed under GNU General Public License v3.0"]}),"\n",(0,i.jsx)(n.h4,{id:"nan_helper",children:"nan_helper"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def nan_helper(y: np.ndarray) -> Tuple\n"})}),"\n",(0,i.jsx)(n.p,{children:"Identifies indices of NaN values in an array and provides a function to convert them to non-NaN indices."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"y"})," ",(0,i.jsx)(n.em,{children:"np.ndarray"})," - Input array containing NaN values."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"Tuple[np.ndarray, Union[np.ndarray, None]]: A tuple containing two elements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An array of boolean values indicating the positions of NaN values."}),"\n",(0,i.jsx)(n.li,{children:"A lambda function to convert NaN indices to non-NaN indices."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"interpol",children:"interpol"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def interpol(arr: np.ndarray) -> np.ndarray\n"})}),"\n",(0,i.jsx)(n.p,{children:"Interpolates all NaN values of a given array."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"arr"})," ",(0,i.jsx)(n.em,{children:"np.ndarray"})," - A numpy array with NaN values."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"np.ndarray"})," - A numpy array with interpolated NaN values."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"csv_to_numpy",children:"csv_to_numpy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def csv_to_numpy(config: str) -> None\n"})}),"\n",(0,i.jsx)(n.p,{children:"Converts a pose-estimation.csv file to a numpy array. Note that this code is only useful for data which is a priori egocentric, i.e. head-fixed\nor otherwise restrained animals."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Raises"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ValueError"})," - If the config.yaml file indicates that the data is not egocentric."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var i=r(6540);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);