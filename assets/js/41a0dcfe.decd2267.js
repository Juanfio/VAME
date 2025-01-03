"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8749],{87:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const r={sidebar_label:"new",title:"initialize_project.new"},o=void 0,l={id:"reference/initialize_project/new",title:"initialize_project.new",description:"logger\\_config",source:"@site/docs/reference/initialize_project/new.md",sourceDirName:"reference/initialize_project",slug:"/reference/initialize_project/new",permalink:"/VAME/docs/reference/initialize_project/new",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"new",title:"initialize_project.new"},sidebar:"docsSidebar",previous:{title:"videowriter",permalink:"/VAME/docs/reference/analysis/videowriter"},next:{title:"load_poses",permalink:"/VAME/docs/reference/io/load_poses"}},c={},d=[{value:"logger_config",id:"logger_config",level:4},{value:"logger",id:"logger",level:4},{value:"init_new_project",id:"init_new_project",level:4}];function a(e){const n={code:"code",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h4,{id:"logger_config",children:"logger_config"}),"\n",(0,s.jsx)(n.h4,{id:"logger",children:"logger"}),"\n",(0,s.jsx)(n.h4,{id:"init_new_project",children:"init_new_project"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'def init_new_project(project_name: str,\n                     videos: List[str],\n                     poses_estimations: List[str],\n                     source_software: Literal["DeepLabCut", "SLEAP",\n                                              "LightningPose"],\n                     working_directory: str = ".",\n                     video_type: str = ".mp4",\n                     fps: int | None = None,\n                     copy_videos: bool = False,\n                     paths_to_pose_nwb_series_data: Optional[str] = None,\n                     config_kwargs: Optional[dict] = None) -> Tuple[str, dict]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Creates a new VAME project with the given parameters.\nA VAME project is a directory with the following structure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["project_name/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["data/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["raw/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"session1.mp4"}),"\n",(0,s.jsx)(n.li,{children:"session1.nc"}),"\n",(0,s.jsx)(n.li,{children:"session2.mp4"}),"\n",(0,s.jsx)(n.li,{children:"session2.nc"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["processed/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"session1_processed.nc"}),"\n",(0,s.jsx)(n.li,{children:"session2_processed.nc"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["model/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pretrained_model/"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["results/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"video1/"}),"\n",(0,s.jsx)(n.li,{children:"video2/"}),"\n",(0,s.jsx)(n.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["states/","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"states.json"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"config.yaml"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"project_name"})," (",(0,s.jsx)(n.code,{children:"str"}),"): Project name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"videos"})," (",(0,s.jsx)(n.code,{children:"List[str]"}),"): List of videos paths to be used in the project. E.g. ['./sample_data/Session001.mp4']"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"poses_estimations"})," (",(0,s.jsx)(n.code,{children:"List[str]"}),"): List of pose estimation files paths to be used in the project. E.g. ['./sample_data/pose estimation/Session001.csv']"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"source_software"})," (",(0,s.jsx)(n.code,{children:'Literal["DeepLabCut", "SLEAP", "LightningPose"]'}),"): Source software used for pose estimation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"working_directory"})," (",(0,s.jsx)(n.code,{children:"str, optional"}),"): Working directory. Defaults to '.'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"video_type"})," (",(0,s.jsx)(n.code,{children:"str, optional"}),"): Video extension (.mp4 or .avi). Defaults to '.mp4'."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fps"})," (",(0,s.jsx)(n.code,{children:"int, optional"}),"): Sampling rate of the videos. If not passed, it will be estimated from the video file. Defaults to None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"copy_videos"})," (",(0,s.jsx)(n.code,{children:"bool, optional"}),"): If True, the videos will be copied to the project directory. If False, symbolic links will be created instead. Defaults to False."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"paths_to_pose_nwb_series_data"})," (",(0,s.jsx)(n.code,{children:"Optional[str], optional"}),"): List of paths to the pose series data in nwb files. Defaults to None."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"config_kwargs"})," (",(0,s.jsx)(n.code,{children:"Optional[dict], optional"}),"): Additional configuration parameters. Defaults to None."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Tuple[str, dict]"}),": Tuple containing the path to the config file and the config data."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);