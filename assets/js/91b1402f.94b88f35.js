"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[730],{9914:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(4848),i=r(8453);const s={sidebar_label:"gif_pose_helper",title:"util.gif_pose_helper"},l=void 0,o={id:"reference/util/gif_pose_helper",title:"util.gif_pose_helper",description:"logger\\_config",source:"@site/docs/reference/util/gif_pose_helper.md",sourceDirName:"reference/util",slug:"/reference/util/gif_pose_helper",permalink:"/VAME/docs/reference/util/gif_pose_helper",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"gif_pose_helper",title:"util.gif_pose_helper"},sidebar:"docsSidebar",previous:{title:"data_manipulation",permalink:"/VAME/docs/reference/util/data_manipulation"},next:{title:"model_util",permalink:"/VAME/docs/reference/util/model_util"}},c={},d=[{value:"logger_config",id:"logger_config",level:4},{value:"logger",id:"logger",level:4},{value:"get_animal_frames",id:"get_animal_frames",level:4}];function a(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h4,{id:"logger_config",children:"logger_config"}),"\n",(0,t.jsx)(n.h4,{id:"logger",children:"logger"}),"\n",(0,t.jsx)(n.h4,{id:"get_animal_frames",children:"get_animal_frames"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'def get_animal_frames(\n    cfg: dict,\n    session: str,\n    pose_ref_index: list,\n    start: int,\n    length: int,\n    subtract_background: bool,\n    file_format: str = ".mp4",\n    crop_size: tuple = (300, 300)) -> list\n'})}),"\n",(0,t.jsx)(n.p,{children:"Extracts frames of an animal from a video file and returns them as a list."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"cfg"})," (",(0,t.jsx)(n.code,{children:"dict"}),"): Configuration dictionary containing project information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"session"})," (",(0,t.jsx)(n.code,{children:"str"}),"): Name of the session."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"pose_ref_index"})," (",(0,t.jsx)(n.code,{children:"list"}),"): List of reference coordinate indices for alignment."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"start"})," (",(0,t.jsx)(n.code,{children:"int"}),"): Starting frame index."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"length"})," (",(0,t.jsx)(n.code,{children:"int"}),"): Number of frames to extract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"subtract_background"})," (",(0,t.jsx)(n.code,{children:"bool"}),"): Whether to subtract background or not."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"file_format"})," (",(0,t.jsx)(n.code,{children:"str, optional"}),"): Format of the video file. Defaults to '.mp4'."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"crop_size"})," (",(0,t.jsx)(n.code,{children:"tuple, optional"}),"): Size of the cropped area. Defaults to (300, 300)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"list:"}),": List of extracted frames."]}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);