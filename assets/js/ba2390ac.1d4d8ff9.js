"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3274],{2175:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var i=r(4848),s=r(8453);const l={sidebar_label:"data_manipulation",title:"vame.util.data_manipulation"},a=void 0,t={id:"reference/vame/util/data_manipulation",title:"vame.util.data_manipulation",description:"consecutive",source:"@site/docs/reference/vame/util/data_manipulation.md",sourceDirName:"reference/vame/util",slug:"/reference/vame/util/data_manipulation",permalink:"/VAME/docs/reference/vame/util/data_manipulation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"data_manipulation",title:"vame.util.data_manipulation"},sidebar:"docsSidebar",previous:{title:"csv_to_npy",permalink:"/VAME/docs/reference/vame/util/csv_to_npy"},next:{title:"gif_pose_helper",permalink:"/VAME/docs/reference/vame/util/gif_pose_helper"}},d={},c=[{value:"consecutive",id:"consecutive",level:4},{value:"nan_helper",id:"nan_helper",level:4},{value:"interpol_all_nans",id:"interpol_all_nans",level:4},{value:"interpol_first_rows_nans",id:"interpol_first_rows_nans",level:4},{value:"crop_and_flip",id:"crop_and_flip",level:4},{value:"background",id:"background",level:4}];function o(n){const e={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h4,{id:"consecutive",children:"consecutive"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def consecutive(data: np.ndarray, stepsize: int = 1) -> List[np.ndarray]\n"})}),"\n",(0,i.jsx)(e.p,{children:"Find consecutive sequences in the data array."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"data"})," ",(0,i.jsx)(e.em,{children:"np.ndarray"})," - Input array."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"stepsize"})," ",(0,i.jsx)(e.em,{children:"int, optional"})," - Step size. Defaults to 1."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"List[np.ndarray]"})," - List of consecutive sequences."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"nan_helper",children:"nan_helper"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def nan_helper(y: np.ndarray) -> Tuple\n"})}),"\n",(0,i.jsx)(e.p,{children:"Identifies indices of NaN values in an array and provides a function to convert them to non-NaN indices."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"y"})," ",(0,i.jsx)(e.em,{children:"np.ndarray"})," - Input array containing NaN values."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(e.p,{children:"Tuple[np.ndarray, Union[np.ndarray, None]]: A tuple containing two elements:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"An array of boolean values indicating the positions of NaN values."}),"\n",(0,i.jsx)(e.li,{children:"A lambda function to convert NaN indices to non-NaN indices."}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"interpol_all_nans",children:"interpol_all_nans"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def interpol_all_nans(arr: np.ndarray) -> np.ndarray\n"})}),"\n",(0,i.jsx)(e.p,{children:"Interpolates all NaN values in the given array."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"arr"})," ",(0,i.jsx)(e.em,{children:"np.ndarray"})," - Input array containing NaN values."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"np.ndarray"})," - Array with NaN values replaced by interpolated values."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"interpol_first_rows_nans",children:"interpol_first_rows_nans"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def interpol_first_rows_nans(arr: np.ndarray) -> np.ndarray\n"})}),"\n",(0,i.jsx)(e.p,{children:"Interpolates NaN values in the given array."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"arr"})," ",(0,i.jsx)(e.em,{children:"np.ndarray"})," - Input array with NaN values."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"np.ndarray"})," - Array with interpolated NaN values."]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"crop_and_flip",children:"crop_and_flip"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def crop_and_flip(\n        rect: Tuple, src: np.ndarray, points: List[np.ndarray],\n        ref_index: Tuple[int, int]) -> Tuple[np.ndarray, List[np.ndarray]]\n"})}),"\n",(0,i.jsx)(e.p,{children:"Crop and flip the image based on the given rectangle and points."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"rect"})," ",(0,i.jsx)(e.em,{children:"Tuple"})," - Rectangle coordinates (center, size, theta)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"src"})," ",(0,i.jsx)(e.em,{children:"np.ndarray"})," - Source image."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"points"})," ",(0,i.jsx)(e.em,{children:"List[np.ndarray]"})," - List of points."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"ref_index"})," ",(0,i.jsx)(e.em,{children:"Tuple[int, int]"})," - Reference indices for alignment."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(e.p,{children:"Tuple[np.ndarray, List[np.ndarray]]: Cropped and flipped image, and shifted points."}),"\n",(0,i.jsx)(e.h4,{id:"background",children:"background"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-python",children:"def background(path_to_file: str,\n               filename: str,\n               file_format: str = '.mp4',\n               num_frames: int = 1000,\n               save_background: bool = True) -> np.ndarray\n"})}),"\n",(0,i.jsx)(e.p,{children:"Compute background image from fixed camera."}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"path_to_file"})," ",(0,i.jsx)(e.em,{children:"str"})," - Path to the directory containing the video files."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"filename"})," ",(0,i.jsx)(e.em,{children:"str"})," - Name of the video file."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"file_format"})," ",(0,i.jsx)(e.em,{children:"str, optional"})," - Format of the video file. Defaults to '.mp4'."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"num_frames"})," ",(0,i.jsx)(e.em,{children:"int, optional"})," - Number of frames to use for background computation. Defaults to 1000."]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"np.ndarray"})," - Background image."]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>a,x:()=>t});var i=r(6540);const s={},l=i.createContext(s);function a(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);